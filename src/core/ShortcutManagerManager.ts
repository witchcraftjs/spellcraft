import type { DeepPartial } from "@alanscodelog/utils"
import { debounce } from "@alanscodelog/utils/debounce"
import { isArray } from "@alanscodelog/utils/isArray"
import { keys } from "@alanscodelog/utils/keys"
import { Err, Ok, type Result } from "@alanscodelog/utils/Result"
import { setReadOnly } from "@alanscodelog/utils/setReadOnly"

import { managerToStorableClone } from "../helpers/managerToStorableClone.js"
import type { Manager, PickManager } from "../types/index.js"

export class ShortcutManagerManager {
	storageKeys: {
		/** Prefix for all keys. */
		prefix: string
		/** @default "shortcut-manager:names" */
		managerNames: string
		/** @default "shortcut-manager:manager." */
		managerPrefix: string
		/** @default "shortcut-manager:active" */
		activeManager: string
	}

	readonly managerNames: string[] = []

	readonly managers: Readonly<Record<string, Manager>> = {}

	readonly activeManagerName: string = "default"

	/** A debounced version of the save function. Is already bound to the instance. */
	debouncedSave: (name: string) => void

	storage: {
		setItem: (key: string, value: string) => void
		getItem: (key: string) => string | null
		removeItem: (key: string) => void
	}

	/**
	 * All new managers will be created using this function. It should be capable of taking as little information as `{name}` (when a new manager is created) and returining a full manger.
	 *
	 * It's suggested you not do validation here, use the `onParse` hook instead.
	 *
	 * If you return an error, `onError` will be called, and no manager will be created.
	 */
	createManager: (
		raw: Partial<Omit<Manager, "options" | "hooks" | "listener" | "state">> & {
			options: PickManager<"options", "enableShortcuts" | "enableListeners" | "updateStateOnAllEvents">
		},
		isNew: boolean
	) => Manager | Error

	hooks: {
		/**
		 * Called on any errors loading/saving/etc, should be used to notify the user.
		 */
		onError: (err: Error) => void
		/**
		 * Called when a manager is parsed from storage after being sucessfully JSON.parsed.
		 *
		 * You can validate the parsed object here so it's in the correct shape to pass to `createManager`.
		 *
		 * If you return an error, `onError` will be called and `createManager` will be skipped.
		 */
		onParse?: (parsed: object) => undefined | Error
		/**
		 * Called when a manager is saved or exported. It's called with the cloned version of the manager that has been stripped of properties that should not be saved (see {@link managerToStorableClone}).
		 *
		 * You can delete/add properties here (it will not modify the original manager).
		 */
		onSave?: (clone: DeepPartial<Manager>) => void
		/**
		 * Called when a manager is exported. Can be used to actually do the export.
		 */
		onExport?: (res: object) => void
		/**
		 * Called when a manager is set. Can be used to update your state.
		 */
		onSetManager?: (name: string, clone: Manager) => void
		/**
		 * Called when the manager names are set. Can be used to update your state.
		 */
		onSetManagerNames?: (names: string[]) => void
		/**
		 * Called when the active manager is set. Can be used to update your state.
		 */
		onSetActiveManager?: (name: string) => void
	}

	constructor(
		createManager: ShortcutManagerManager["createManager"],
		hooks: ShortcutManagerManager["hooks"],
		{
			storageKeys = {} as any,
			storage = localStorage
		}:
		{
			storageKeys?: Partial<ShortcutManagerManager["storageKeys"]>
			storage?: ShortcutManagerManager["storage"]
		} = {}
	) {
		this.createManager = createManager
		this.hooks = hooks
		storageKeys.prefix ??= ""
		storageKeys.managerNames ??= "shortcut-manager:names"
		storageKeys.managerPrefix ??= "shortcut-manager:manager."
		storageKeys.activeManager ??= "shortcut-manager:active"
		if (storageKeys.prefix) {
			for (const key of keys(storageKeys)) {
				if (key === "prefix") continue
				storageKeys[key] = `${storageKeys.prefix}${storageKeys[key]}`
			}
		}
		this.storageKeys = storageKeys as ShortcutManagerManager["storageKeys"]
		this.storage = storage

		this.debouncedSave = debounce(this.save.bind(this), 500)
	}

	init(): void {
		const list = this.storage.getItem(this.storageKeys.managerNames)
		const active = this.storage.getItem(this.storageKeys.activeManager)
		this.setManagerNames(list ? JSON.parse(list) : [])

		if (this.managerNames.length > 0) {
			const res = this.managerNames
				.map(m => {
					const r = this.storageReadManager(m, { force: true })
					this.notifyIfError(r)
					if (r.isOk) {
						this.load(r.value)
					}
					return r
				})
			const ok = res.filter(r => r.isOk)
			if (ok.length > 0) {
				this.loadOrCreateDefault()
			}
			if (active && this.managerNames.includes(active)) {
				this.setActiveManager(active)
			} else {
				this.setActiveManager(this.managerNames[0]!)
			}
		} else {
			this.loadOrCreateDefault()
		}
	}

	setManager(name: string, clone?: any): void {
		if (clone === undefined) {
			// @ts-expect-error setting readonly
			delete this.managers[name]
		} else {
			setReadOnly(this.managers, name, clone)
		}
		this.hooks.onSetManager?.(name, clone)
	}

	setManagerNames(names: string[]): void {
		setReadOnly(this, "managerNames", names)
		this.hooks.onSetManagerNames?.(names)
	}

	setActiveManager(name: string): void {
		setReadOnly(this, "activeManagerName", name)
		this.storage.setItem(this.storageKeys.activeManager, name)
		this.hooks.onSetActiveManager?.(name)
	}

	protected addManager(name: string, clone: any): void {
		this.setManager(name, clone)
		if (!this.managerNames.includes(name)) {
			this.setManagerNames([...this.managerNames, name])
		}
	}

	protected removeManager(name: string): void {
		this.setManager(name, undefined)
		const index = this.managerNames.indexOf(name)
		if (index === -1) return
		this.setManagerNames(this.managerNames.toSpliced(index, 1))
	}


	protected storageSaveManager(name: string, clone: any): void {
		this.storage.setItem(`${this.storageKeys.managerPrefix}${name}`, JSON.stringify(clone))
		if (!this.managerNames.includes(name)) {
			this.managerNames.push(name)
			this.storage.setItem(
				this.storageKeys.managerNames,
				JSON.stringify(this.managerNames)
			)
		}
	}

	protected storageRemoveManager(name: string): void {
		this.storage.removeItem(`${this.storageKeys.managerPrefix}${name}`)
		const index = this.managerNames.indexOf(name)
		if (index > -1) {
			this.managerNames.splice(index, 1)
			this.storage.setItem(
				this.storageKeys.managerNames,
				JSON.stringify(this.managerNames)
			)
		}
	}

	protected storageReadManager(
		name: string,
		{ force = false }: { force?: boolean } = {}
	): Result<Manager, Error> {
		const raw = this.storage.getItem(`${this.storageKeys.managerPrefix}${name}`)
		if (!raw && !force) {
			const res = Err(new Error(`No manager found by the name of ${name}.`))
			return this.notifyIfError(res)
		}
		const r = this.createManager(
			!raw && force ? { name } : this.parseJsonManager(raw!).unwrap(),
			force
		)
		if (r instanceof Error) return Err(r)
		return Ok(r)
	}

	parseJsonManager(
		raw: string
	): Result<any, Error> {
		if (!raw) {
			return Err(new Error(`Nothing to parse.`))
		}
		try {
			const parsed = JSON.parse(raw)
			const res = this.hooks.onParse?.(parsed)
			if (res instanceof Error) {
				return this.notifyIfError(Err(res))
			}
			if (res === undefined) throw new Error(`onParse must return a value.`)
			return Ok(res ?? parsed)
		} catch (e) {
			return Err(e as Error)
		}
	}

	load(
		manager: Manager,
		{
			doActivate = true
		}: {
			doActivate?: boolean
		} = {}
	): void {
		this.setManager(manager.name, manager)
		if (doActivate) {
			this.setActiveManager(manager.name)
		}
		this.save(manager.name)
	}

	protected loadOrCreateDefault(): void {
		const r = this.storageReadManager("default", { force: true })
		this.notifyIfError(r)
		if (r.isOk) {
			this.load(r.value)
		}
	}

	save(name: string): void {
		if (!this.managers[name]) {
			this.notifyIfError(Err(new Error(`Manager ${name} not found`)))
		}
		const clone = managerToStorableClone(this.managers[name])
		this.hooks.onSave?.(clone)
		this.storageSaveManager(name, clone)
	}

	protected notifyIfError<T extends Result<any, Error>>(res: T): T {
		if (!res.isOk) {
			this.hooks.onError?.(res.error)
		}
		return res
	}

	changeManager(name: string, opts: { force?: boolean } = {}): Result<void, Error> {
		if (this.managerNames.includes(name)) {
			this.setActiveManager(name)
			return Ok()
		} else {
			const m = this.storageReadManager(name, opts)
			if (m.isOk) {
				this.load(m.value)
				this.setActiveManager(name)
			}
			return Ok()
		}
	}

	deleteManager(name: string): Result<void, Error> {
		const index = this.managerNames.indexOf(name)
		let nextName = this.managerNames[index - 1] ?? this.managerNames[index + 1] ?? "default"
		this.storageRemoveManager(name)
		this.setManager(name, undefined)

		if (nextName === name) nextName = "default"
		const res = this.changeManager(nextName, { force: true })
		this.notifyIfError(res)
		return res
	}

	renameManager(name: string): void {
		this.storageRemoveManager(this.activeManagerName)
		this.setManager(name, this.managers[this.activeManagerName])
		this.setManager(this.activeManagerName, undefined)
		this.setActiveManager(name)
		this.save(name)
	}

	duplicateManager(oldName: string, newName: string): Result<Manager, Error> {
		const m = this.managers[oldName]
		if (!m) {
			const res = Err(new Error(`No manager found by the name of ${oldName}.`))
			return this.notifyIfError(res)
		}
		const clone = managerToStorableClone(m)
		clone.name = newName
		const instance = this.createManager(clone as any, false)
		if (instance instanceof Error) return this.notifyIfError(Err(instance))
		else if (instance) this.load(instance)

		return Ok(instance)
	}

	exportManagers(names: string[]): Result<object, Error> {
		const obj = { managers: [] as any[] }
		for (const name of names) {
			const m = this.managers[name]
			if (!m) {
				const res = Err(new Error(`No manager found by the name of ${name}.`))
				return this.notifyIfError(res)
			}
			const clone = managerToStorableClone(m)
			this.hooks.onSave?.(clone)
			obj.managers.push(clone)
		}
		this.hooks.onExport?.(obj)
		return Ok(obj)
	}

	importManagers(content: string): Result<void, Error> {
		const p = JSON.parse(content)
		if (!p.managers || !isArray(p.manager)) {
			return Err(new Error(`Not a valid manager file.`))
		}
		const ok: Manager[] = []
		for (const parsedM of p.managers) {
			const m = this.parseJsonManager(JSON.stringify(parsedM))
			this.notifyIfError(m)

			if (m.isOk) {
				const instance = this.createManager(m.value as any, false)
				if (instance instanceof Error) return this.notifyIfError(Err(instance))
				ok.push(instance)
			}
		}
		for (const instance of ok) {
			this.load(instance)
		}
		return Ok()
	}

	/** Clears all managers and resets the state. `init` must be called again if you want to use the class instance again. */
	clearAll(): void {
		// todo, check we can init again after this
		this.storage.removeItem(this.storageKeys.managerNames)
		this.storage.removeItem(this.storageKeys.activeManager)
		for (const name of this.managerNames) {
			this.storageRemoveManager(name)
		}
		this.setManagerNames([])
		this.setActiveManager("default")
	}
}
