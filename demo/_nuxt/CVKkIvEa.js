import{r as e}from"./DiNi8asB.js";import{$n as t,D as n,Nt as r,On as i,Zn as a,_ as o,b as s,bt as c,ct as l,et as u,fn as d,g as f,gn as p,mt as m,o as h,qt as g,tr as _,v,vn as y,wt as b,xt as x,y as S,z as C}from"./B8D2lM98.js";import{C as w,w as T}from"./BC7yJqS7.js";import{t as E}from"./BwZvZm7q.js";import{n as D,r as O}from"./DIaa6uKV.js";import{t as k}from"./ClJo4eSk.js";import{t as A}from"./CRTeuyN8.js";import{t as j}from"./DLNmc5u_.js";import{t as M}from"./BOwmyn0k.js";import{t as N}from"./B4nctGtP.js";import{t as P}from"./Celf-WvD.js";function F(){let e=p({});function t(t,n){return e[t]=n,e[t]}return{slotVars:e,setSlotVar:t}}function I(e,t){let n=``;for(let r=0;r<e.length;r++){let i=e[r];n+=i+(r<t.length?t[r]:``)}return n}function L(e){return e!==void 0}function R(e,{tabs:t=!0,count:n=void 0}={}){let r=n;if(!L(r)){let n=t?/^[\t]*(?=[^\t])/gm:/^[ ]*(?=[^ ])/gm,i=e.match(n);if(i===null)return e;r=i.reduce((e,t)=>Math.min(e,t.length),1/0)}let i=RegExp(`^${t?`\\t`:` `}{0,${r===1/0?``:r}}`,`gm`);return e.replace(i,``)}function z(e){return e.replace(/(^\n*?(?=[^\n]|$))([\s\S]*?)(\n*?\s*?$)/,`$2`)}function B(e,...t){return R(z(I(e,t)))}function V(e,t=0,{first:n=!1}={}){let r=n?/(^|\n)/g:/\n/g,i=`	`.repeat(t),a=n?`$1${i}`:`
${i}`;return e.replace(r,a)}function H(e,t,n={}){let r=[...arguments[3]??[]];if(n.before){let i=t?t(e,r,`before`):e;n.save&&(e=i)}let i;if(Array.isArray(e)){let a=[],o=0;for(let i of e){let e=[...r,o.toString()],s=typeof i==`object`&&i?H(i,t,n,e):t?t(i,e):i;n.save&&s!==void 0&&a.push(s),o++}i=n.save?a:void 0}else if(e!==null){let a={};for(let i of P(e)){let o=[...r,i.toString()],s=e[i],c=typeof s==`object`&&s?H(s,t,n,o):t?t(s,o):s;n.save&&c!==void 0&&(a[i]=c)}i=n.save?a:void 0}else if(e===null){let a=t?t(e,r):e;i=n.save?a:void 0}if(n.after){let e=t?t(i,r,`after`):i;n.save&&(i=e)}return i}function U(e,{oneline:t=!1,stringify:n=!1}={}){let r=e;return n&&(n===!0&&(n=e=>typeof e==`function`||typeof e==`symbol`?e.toString():e),r=H(e,(e,t)=>t.length===0?e:n(e),{save:!0,after:!0})),t?JSON.stringify(r,null,`|`).replace(/\n\|*/g,` `):JSON.stringify(r,null,`	`)}function W(e,t,n){e[t]=n}var G=class{timeout=5e3;debug=!1;id=0;queue;history;maxHistory=100;listeners=[];stringifier;constructor({timeout:e,stringifier:t,maxHistory:n}={}){this.queue=p([]),this.history=p([]),e&&(this.timeout=e),n&&(this.maxHistory=n),t&&(this.stringifier=t)}_checkEntry(e){if(e.cancellable!==void 0&&O(e.cancellable))throw Error(B`Cancellable cannot be a blank string:
					${V(U(e),5)}
				`);if(!e.options.includes(e.default))throw Error(B`Entry options does not include default option "${e.default}":
					${V(U(e),5)}
				`);if(e.cancellable){if(typeof e.cancellable==`string`&&!e.options.includes(e.cancellable))throw Error(B`Entry options does not include cancellable option "${e.cancellable}":
						${V(U(e),6)}
					`)}else if(e.options.includes(`Cancel`))throw Error(B`You specified that the entry should not be cancellable, but the options include the "Cancel" option:
						${V(U(e),6)}
					`);if(e.timeout!==void 0&&e.requiresAction)throw Error(B`Cannot timeout notification that requires action:
					${V(U(e),5)}
					`);let t=e.dangerous.find(t=>!e.options.includes(t));if(e.dangerous!==void 0&&t)throw Error(B`Dangerous options list contains an unknown option "${t}":
					${V(U(e),5)}
				`)}_createEntry(e){let t={requiresAction:!1,options:[`Ok`,`Cancel`],default:`Ok`,...e,component:e.component&&typeof e.component!=`string`?d(e.component):void 0,dangerous:e.dangerous??[],timeout:e.timeout===!0?this.timeout:e.timeout!==void 0&&e.timeout!==!1?e.timeout:void 0};return(e.cancellable===!0||e.cancellable===void 0&&t.options?.includes(`Cancel`))&&(t.cancellable=`Cancel`),this._checkEntry(t),j(t),this.id++,t.id=this.id,t}async notify(e){let t=this._createEntry(e);t.promise=new Promise(e=>{t.resolve=e}),t.timeout!==void 0&&(t._timer={elapsedBeforePause:0},this.resume(t)),this.queue.push(t);for(let e of this.listeners)e(t,`added`);return t.promise.then(e=>{t.resolution=e;for(let e of this.listeners)e(t,`resolved`);if(this.history.push(t),this.history.length>this.maxHistory){this.history.splice(0,1);for(let e of this.listeners)e(t,`deleted`)}return this.queue.splice(this.queue.indexOf(t),1),e})}pause(e){if(e.timeout===void 0)throw Error(`Cannot pause notification with no timeout: ${e.id}`);if(e.isPaused)throw Error(`Cannot pause notification that is already paused: ${e.id}`);e.isPaused=!0,clearTimeout(e._timer.id),e._timer.elapsedBeforePause+=Date.now()-e.startTime}resume(e){if(e.timeout===void 0)throw Error(`Cannot resume notification with no timeout: ${e.id}`);e.isPaused=!1,e.startTime=Date.now();let t=e.timeout-e._timer.elapsedBeforePause;clearTimeout(e._timer.id),e._timer.id=setTimeout(()=>{e.cancellable?e.resolve(e.cancellable):e.resolve(e.default)},t)}static resolveToDefault(e){e.resolve(e.default)}static dismiss(e){e.cancellable&&e.resolve(e.cancellable)}stringify(e){if(this.stringifier)return this.stringifier(e);let t=``;return e.title&&(t+=`${e.title}
`),t+=`${e.message}
`,e.code&&(t+=`code:${e.code}
`),t}clear(){W(this,`history`,[])}},K=e({default:()=>$}),q=[`role`,`aria-labelledby`,`aria-describedby`,`data-id`],J={class:`notification--header flex-reverse flex justify-between items-center`},Y={class:`notification--actions flex`},X=[`id`],Z={class:`notification--footer flex items-end justify-between`},Q={key:0,class:`code text-xs text-neutral-700 dark:text-neutral-300`},ee={key:1,class:`notification--options flex flex-wrap justify-end gap-2`},$=Object.assign({name:`WNotification`,inheritAttrs:!1},{__name:`WNotification`,props:{notification:{type:null,required:!0},handler:{type:Object,required:!1,default:void 0}},setup(e,{expose:d}){let p=r(),{setSlotVar:O,slotVars:j}=F(),P=e,I=(e,t)=>e.dangerous.includes(t)?`danger`:e.default===t?`primary`:`secondary`,L=f(()=>P.notification.options.map(e=>I(P.notification,e))),R=y(null);return l(()=>{P.notification.requiresAction&&R.value?.focus()}),d({focus:()=>{R.value?.focus()}}),(r,l)=>e.notification?(m(),s(`div`,u({key:0,role:e.notification.requiresAction?`alertdialog`:`status`,"aria-labelledby":e.notification.title?`title-${e.notification.id}`:void 0,"aria-describedby":e.notification.message?`msg-${e.notification.id}`:void 0,class:i(E)(`
		notification
		bg-neutral-50
		dark:bg-neutral-900
		text-fg
		dark:text-bg
		border
		border-neutral-400
		dark:border-neutral-700
		rounded-sm
		focus-outline
		flex
		flex-col
		gap-2
		p-1
		text-sm
		focus:border-accent-500
		focus-within:border-accent-500
	`,i(p).class,e.notification.notificationAttrs?.class)},{...i(p),...e.notification?.notificationAttrs??{},class:void 0},{tabindex:`0`,"data-id":e.notification.id,ref_key:`notificationEl`,ref:R,onKeydown:l[2]||=w(T(t=>i(G).resolveToDefault(e.notification),[`self`]),[`enter`])}),[x(r.$slots,`top`,{notification:e.notification}),o(`div`,J,[e.notification.title?x(r.$slots,`title`,t(C(i(O)(`title`,{id:`title-${e.notification.id}`,title:e.notification.title,class:`
					notification--title
					focus-outline
					rounded-sm
					font-bold
				`}))),()=>[o(`div`,t(C(i(j).title)),_(e.notification.title),17)],void 0,0):S(``,!0),l[3]||=o(`div`,{class:`notification--spacer flex-1`},null,-1),o(`div`,Y,[n(D,{border:!1,"aria-label":`Copy notification content`,class:`notification--title-button notification--copy-button text-neutral-700 dark:text-neutral-300`,onClick:l[0]||=t=>i(M)(e.handler?e.handler.stringify(e.notification):JSON.stringify(e.notification))},{default:g(()=>[n(k,null,{default:g(()=>[n(i(N))]),_:1})]),_:1}),e.notification.cancellable?(m(),v(D,{key:0,"aria-label":`Dismiss notification`,class:`notification--title-button notification--cancel-button`,border:!1,onClick:l[1]||=t=>i(G).dismiss(e.notification)},{default:g(()=>[n(k,null,{default:g(()=>[n(i(A))]),_:1})]),_:1})):S(``,!0)])]),e.notification.message&&!e.notification.component?x(r.$slots,`message`,t(C(i(O)(`message`,{class:`
				notification--message
				shrink-1
				overflow-auto
				whitespace-pre-wrap
				text-neutral-800
				dark:text-neutral-200
				mb-1
			`,message:e.notification.message}))),()=>[o(`div`,u(i(j).message,{id:`msg-${e.notification.id}`}),_(e.notification.message),17,X)],void 0,0):S(``,!0),e.notification.component?(m(),v(b(e.notification.component),t(u({key:1},{notification:e.notification,message:e.notification.message,messageClasses:`
					notification--message
					whitespace-pre-wrap
					text-neutral-800
					dark:text-neutral-200
					mb-1
				`,...e.notification.componentProps??{}})),null,16)):S(``,!0),o(`div`,Z,[e.notification.code?(m(),s(`div`,Q,` Code: `+_(e.notification.code),1)):S(``,!0),l[4]||=o(`div`,{class:`notification--footer-spacer flex-1 py-1`},null,-1),e.notification.options?(m(),s(`div`,ee,[(m(!0),s(h,null,c(e.notification.options,(t,n)=>(m(),v(D,{label:t,class:a(i(E)(`
					notification--button
					notification--option-button
					px-2
				`,e.notification.default===t&&`notification--default`)),color:L.value[n],key:t,onClick:n=>e.notification.resolve(t)},null,8,[`label`,`class`,`color`,`onClick`]))),128))])):S(``,!0)])],16,q)):S(``,!0)}});export{U as a,B as c,W as i,$ as n,H as o,G as r,V as s,K as t};