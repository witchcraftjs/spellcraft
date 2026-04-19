import{c as w,P as I,u as T}from"./DiBjWpqu.js";import{i as V}from"./CHIgUVhi.js";import{i as g,u as E,g as O,w as N,f as P}from"./xfDSTvGd.js";import{V as D,u as G}from"./CiZY_i37.js";import{u as _}from"./L08Gibo2.js";import{u as W,P as z}from"./DT6-d9UI.js";import{d as S,o as H,a2 as L,z as y,O as q,E as m,D as v,l as a,a5 as C,m as h,a6 as U,Z as Y,a7 as k,S as Z,Y as J,a8 as Q,N as X,A,B as K,a9 as ee,W as ae,F as te,C as le,$ as oe}from"./D-J5zQKJ.js";import{u as re}from"./HJq1u14D.js";import{u as se}from"./B5w3gUgn.js";import{t as x}from"./jiRaHU2K.js";import ue from"./DZazbqIP.js";function R(t,r){return V(t)?!1:Array.isArray(t)?t.some(e=>g(e,r)):g(t,r)}const[de]=w("RovingFocusGroup");var ne=S({__name:"RovingFocusItem",props:{tabStopId:{type:String,required:!1},focusable:{type:Boolean,required:!1,default:!0},active:{type:Boolean,required:!1},allowShiftKey:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const r=t,e=de(),d=W(),c=h(()=>r.tabStopId||d),p=h(()=>e.currentTabStopId.value===c.value),{getItems:u,CollectionItem:i}=E();H(()=>{r.focusable&&e.onFocusableItemAdd()}),L(()=>{r.focusable&&e.onFocusableItemRemove()});function b(l){if(l.key==="Tab"&&l.shiftKey){e.onItemShiftTab();return}if(l.target!==l.currentTarget)return;const s=O(l,e.orientation.value,e.dir.value);if(s!==void 0){if(l.metaKey||l.ctrlKey||l.altKey||!r.allowShiftKey&&l.shiftKey)return;l.preventDefault();let n=[...u().map(f=>f.ref).filter(f=>f.dataset.disabled!=="")];if(s==="last")n.reverse();else if(s==="prev"||s==="next"){s==="prev"&&n.reverse();const f=n.indexOf(l.currentTarget);n=e.loop.value?N(n,f+1):n.slice(f+1)}U(()=>P(n))}}return(l,s)=>(y(),q(a(i),null,{default:m(()=>[v(a(I),{tabindex:p.value?0:-1,"data-orientation":a(e).orientation.value,"data-active":l.active?"":void 0,"data-disabled":l.focusable?void 0:"",as:l.as,"as-child":l.asChild,onMousedown:s[0]||(s[0]=n=>{l.focusable?a(e).onItemFocus(c.value):n.preventDefault()}),onFocus:s[1]||(s[1]=n=>a(e).onItemFocus(c.value)),onKeydown:b},{default:m(()=>[C(l.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),ie=ne;const[ce]=w("CheckboxGroupRoot");function B(t){return t==="indeterminate"}function M(t){return B(t)?"indeterminate":t?"checked":"unchecked"}const[fe,me]=w("CheckboxRoot");var pe=S({inheritAttrs:!1,__name:"CheckboxRoot",props:{defaultValue:{type:null,required:!1},modelValue:{type:null,required:!1,default:void 0},disabled:{type:Boolean,required:!1},value:{type:null,required:!1,default:"on"},id:{type:String,required:!1},trueValue:{type:null,required:!1,default:()=>!0},falseValue:{type:null,required:!1,default:()=>!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(t,{emit:r}){const e=t,d=r,{forwardRef:c,currentElement:p}=_(),u=ce(null),i=T(e,"modelValue",d,{defaultValue:e.defaultValue??e.falseValue,passive:e.modelValue===void 0}),b=h(()=>u?.disabled.value||e.disabled),l=h(()=>g(i.value,e.trueValue)),s=h(()=>V(u?.modelValue.value)?i.value==="indeterminate"?"indeterminate":l.value:R(u.modelValue.value,e.value));function n(){if(V(u?.modelValue.value))i.value==="indeterminate"?i.value=e.trueValue:i.value=l.value?e.falseValue:e.trueValue;else{const o=[...u.modelValue.value||[]];if(R(o,e.value)){const F=o.findIndex(j=>g(j,e.value));o.splice(F,1)}else o.push(e.value);u.modelValue.value=o}}const f=G(p),$=h(()=>e.id&&p.value?document.querySelector(`[for="${e.id}"]`)?.innerText:void 0);return me({disabled:b,state:s}),(o,F)=>(y(),q(Q(a(u)?.rovingFocus.value?a(ie):a(I)),k(o.$attrs,{id:o.id,ref:a(c),role:"checkbox","as-child":o.asChild,as:o.as,type:o.as==="button"?"button":void 0,"aria-checked":a(B)(s.value)?"mixed":s.value,"aria-required":o.required,"aria-label":o.$attrs["aria-label"]||$.value,"data-state":a(M)(s.value),"data-disabled":b.value?"":void 0,disabled:b.value,focusable:a(u)?.rovingFocus.value?!b.value:void 0,onKeydown:Z(J(()=>{},["prevent"]),["enter"]),onClick:n}),{default:m(()=>[C(o.$slots,"default",{modelValue:a(i),state:s.value}),a(f)&&o.name&&!a(u)?(y(),q(a(D),{key:0,type:"checkbox",checked:!!s.value,name:o.name,value:o.value,disabled:b.value,required:o.required},null,8,["checked","name","value","disabled","required"])):Y("v-if",!0)]),_:3},16,["id","as-child","as","type","aria-checked","aria-required","aria-label","data-state","data-disabled","disabled","focusable","onKeydown"]))}}),be=pe,ve=S({__name:"CheckboxIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const{forwardRef:r}=_(),e=fe();return(d,c)=>(y(),q(a(z),{present:d.forceMount||a(B)(a(e).state.value)||a(e).state.value===!0},{default:m(()=>[v(a(I),k({ref:a(r),"data-state":a(M)(a(e).state.value),"data-disabled":a(e).disabled.value?"":void 0,style:{pointerEvents:"none"},"as-child":d.asChild,as:d.as},d.$attrs),{default:m(()=>[C(d.$slots,"default")]),_:3},16,["data-state","data-disabled","as-child","as"])]),_:3},8,["present"]))}}),he=ve;const ye={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block",width:"auto"},viewBox:"0 0 24 24"};function ke(t,r){return y(),A("svg",ye,[...r[0]||(r[0]=[K("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 6L9 17l-5-5"},null,-1)])])}const Ce=X({name:"lucide-check",render:ke}),ge=Object.assign({name:"WCheckbox",inheritAttrs:!1},{__name:"WCheckbox",props:oe({disabled:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},border:{type:Boolean,required:!1,default:!0},unstyle:{type:Boolean,required:!1},id:{type:String,required:!1},label:{type:String,required:!1},labelAttrs:{type:Object,required:!1},wrapperAttrs:{type:Object,required:!1}},{modelValue:{type:[Boolean,String],default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const r=ee(),e=t,d=ae(t,"modelValue",{type:[Boolean,String],default:!1}),c=re(e);return se(c,d),(p,u)=>(y(),A("div",k({class:a(x)(`
		checkbox--wrapper
		flex
		items-center
		gap-1
	`,(t.disabled||t.readonly)&&`
			cursor-not-allowed
			text-neutral-500
		`,t.wrapperAttrs?.class)},{...t.wrapperAttrs,class:void 0},{ref:"el"}),[C(p.$slots,"left"),K("label",k({class:a(x)(`
			checkbox--label
			flex
			items-center
			gap-1
		`,t.labelAttrs?.class)},{...t.labelAttrs,class:void 0}),[v(a(be),k({id:a(c),disabled:t.disabled||t.readonly,class:!t.unstyle&&a(x)(`
				checkbox
				flex
				items-center
				justify-center
				focus-outline-no-offset
				m-0
				h-[1.2em]
				w-[1.2em]
				aspect-square
				bg-neutral-500/10
				text-white
				dark:text-white
				border
				border-neutral-500
				data-[state=checked]:border-accent-800/50
				data-[state=checked]:bg-accent-500
				data-[state=checked]:shadow-2xs
				data-[state=checked]:shadow-black/20
				data-[state=unchecked]:inset-shadow-2xs
				data-[state=unchecked]:inset-shadow-black/20
				focus:border-accent-600
				rounded-sm
				relative
				transition-colors
				dark:disabled:bg-neutral-800
				cursor-pointer
				disabled:text-neutral-500
				disabled:bg-neutral-500/50
				disabled:cursor-not-allowed
				disabled:data-[state=checked]:border-neutral-500
			`,a(r)?.class)},{...a(r),class:void 0},{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=i=>d.value=i)}),{default:m(()=>[v(a(he),{class:"checkbox--indicator"},{default:m(()=>[v(ue,{class:"scale-110 mt-[2px] ml-[0.5px] [&_path]:stroke-3"},{default:m(()=>[v(a(Ce))]),_:1})]),_:1})]),_:1},16,["id","disabled","class","modelValue"]),C(p.$slots,"default"),te(" "+le(t.label),1)],16)],16))}}),Ke=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"}));export{Ce as I,Ke as W,ge as _};
