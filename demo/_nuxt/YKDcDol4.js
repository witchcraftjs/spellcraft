import{r as e}from"./DiNi8asB.js";import{$ as t,Ft as n,Ht as r,Nt as i,On as a,Wt as o,Zn as s,_ as c,b as l,ct as u,et as d,g as f,it as p,mt as m,tr as h,vn as g}from"./B8D2lM98.js";import{C as _,w as v}from"./BC7yJqS7.js";import{t as y}from"./BwZvZm7q.js";import{t as b}from"./d78yy0w7.js";import{t as x}from"./Celf-WvD.js";var S=e({default:()=>E}),C=[`aria-readonly`,`tabindex`,`title`,`aria-pressed`,`aria-disabled`],w={class:`sr-only`,"aria-live":`polite`},T={class:`recorder--value before:content-vertical-holder truncate`},E=Object.assign({name:`WRecorder`,inheritAttrs:!1},{__name:`WRecorder`,props:t({disabled:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},border:{type:Boolean,required:!1,default:!0},unstyle:{type:Boolean,required:!1},recordingValue:{type:String,required:!1},recordingTitle:{type:String,required:!1,default:``},recorder:{type:null,required:!1,default:void 0},binders:{type:null,required:!1,default:void 0}},{recording:{type:Boolean,required:!1,default:!1},recordingModifiers:{},modelValue:{type:String,required:!0},modelModifiers:{}}),emits:t([`recorder:blur`,`recorder:pointerdown`,`focus:parent`],[`update:recording`,`update:modelValue`]),setup(e,{emit:t}){let S=b(),E=t,D=i(),O=e,k=n(e,`recording`,{type:Boolean,required:!1,default:!1}),A=n(e,`modelValue`,{type:String,required:!0}),j=g(null),M=g(null),N=f(()=>!O.disabled&&!O.readonly),P=g(A.value);r([()=>O.binders,()=>O.recorder],()=>{if(k.value)throw Error(`Component was not designed to allow swapping out of binders/recorders while recording`)}),r(A,()=>{P.value=A.value});let F={},I=!1,L=()=>{if(I){if(I=!1,O.recorder)for(let e of x(F))j.value?.removeEventListener(e,F[e]),delete F[e];O.binders&&j.value&&O.binders.unbind(j.value)}},R=()=>{if(!O.recorder&&!O.binders)throw Error(`Recording is true but no recorder or binders props was passed`);if(O.recorder&&O.binders)throw Error(`Recording is true and was passed both a recorder and a binders prop. Both cannot be used at the same time.`);if(I=!0,O.recorder)for(let e of x(O.recorder))j.value?.addEventListener(e,O.recorder[e],{passive:!1}),F[e]=O.recorder[e];O.binders&&j.value&&O.binders.bind(j.value)};o(()=>{if(!N.value){L(),k.value=!1;return}k.value?R():(O.recorder||O.binders)&&I&&(L(),E(`focus:parent`))}),p(()=>{L()}),u(()=>{k.value&&R()});let z=e=>{N.value&&(O.recorder||O.binders)&&E(`recorder:blur`,e)},B=(e,t=!1)=>{if(N.value&&(k.value||j.value?.focus(),O.recorder||O.binders)){if(t)return;E(`recorder:pointerdown`,{event:e,indicator:M.value,input:j.value})}};return(t,n)=>(m(),l(`div`,d({class:a(y)(`
			recorder
			flex items-center
			gap-2
			px-2
			grow-[999999]
			focus-outline-no-offset
			rounded-sm
		`,e.border&&`
			border
			border-neutral-500
			focus:border-accent-500
		`,(e.disabled||e.readonly)&&`
			text-neutral-400
			dark:text-neutral-600
		`,(e.disabled||e.readonly)&&e.border&&`
			bg-neutral-50
			dark:bg-neutral-950
			border-neutral-400
			dark:border-neutral-600
		`,a(D).class),"aria-readonly":e.readonly,tabindex:e.disabled?-1:0,title:k.value?e.recordingTitle:P.value,contenteditable:`false`},{...a(D),class:void 0},{role:`button`,"aria-pressed":k.value,"aria-disabled":e.disabled,ref_key:`recorderEl`,ref:j,onBlur:n[1]||=e=>z(e),onKeydownCapture:n[2]||=_(v(e=>B(e,!0),[`prevent`]),[`space`])}),[c(`span`,w,h(k.value?e.recordingTitle||a(S)(`recorder.recording`):``),1),c(`div`,{class:s(a(y)(`
			recorder--indicator
			inline-block
			bg-red-700
			rounded-full
			w-[1em]
			h-[1em]
			shrink-0
		`,k.value&&`
				animate-blinkInf
				bg-red-500
			`,(e.disabled||e.readonly)&&`
				bg-neutral-500
			`,!(e.disabled||e.readonly)&&`
				hover:bg-red-500
			`)),ref_key:`recorderIndicatorEl`,ref:M,onPointerdownCapture:n[0]||=v(e=>B(e),[`prevent`])},null,34),c(`div`,T,h(k.value?e.recordingValue??a(S)(`recorder.recording`):P.value),1)],16,C))}});export{E as n,S as t};