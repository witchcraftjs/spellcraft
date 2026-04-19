import{a9 as I,W as k,i as m,U as q,ao as L,c as P,o as A,A as T,B as g,C as E,l as t,Y as x,R as W,a7 as j,S as z,$ as V,m as K,z as U}from"./D-J5zQKJ.js";import{k as M}from"./B39yYSFt.js";import{u as $}from"./CryW2h21.js";import{t as R}from"./jiRaHU2K.js";import"./C7vdP-Nq.js";const D=["aria-readonly","tabindex","title","aria-pressed","aria-disabled"],N={class:"sr-only","aria-live":"polite"},O={class:"recorder--value before:content-vertical-holder truncate"},Q=Object.assign({name:"WRecorder",inheritAttrs:!1},{__name:"WRecorder",props:V({disabled:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},border:{type:Boolean,required:!1,default:!0},unstyle:{type:Boolean,required:!1},recordingValue:{type:String,required:!1},recordingTitle:{type:String,required:!1,default:""},recorder:{type:null,required:!1,default:void 0},binders:{type:null,required:!1,default:void 0}},{recording:{type:Boolean,required:!1,default:!1},recordingModifiers:{},modelValue:{type:String,required:!0},modelModifiers:{}}),emits:V(["recorder:blur","recorder:pointerdown","focus:parent"],["update:recording","update:modelValue"]),setup(r,{emit:S}){const y=$(),u=S,w=I(),e=r,o=k(r,"recording",{type:Boolean,required:!1,default:!1}),c=k(r,"modelValue",{type:String,required:!0}),d=m(null),p=m(null),f=K(()=>!e.disabled&&!e.readonly),b=m(c.value);q([()=>e.binders,()=>e.recorder],()=>{if(o.value)throw new Error("Component was not designed to allow swapping out of binders/recorders while recording")}),q(c,()=>{b.value=c.value});const l={};let s=!1;const v=()=>{if(s){if(s=!1,e.recorder)for(const a of M(l))d.value?.removeEventListener(a,l[a]),delete l[a];e.binders&&d.value&&e.binders.unbind(d.value)}},h=()=>{if(!e.recorder&&!e.binders)throw new Error("Recording is true but no recorder or binders props was passed");if(e.recorder&&e.binders)throw new Error("Recording is true and was passed both a recorder and a binders prop. Both cannot be used at the same time.");if(s=!0,e.recorder)for(const a of M(e.recorder))d.value?.addEventListener(a,e.recorder[a],{passive:!1}),l[a]=e.recorder[a];e.binders&&d.value&&e.binders.bind(d.value)};L(()=>{if(!f.value){v(),o.value=!1;return}o.value?h():(e.recorder||e.binders)&&s&&(v(),u("focus:parent"))}),P(()=>{v()}),A(()=>{o.value&&h()});const C=a=>{f.value&&(e.recorder||e.binders)&&u("recorder:blur",a)},B=(a,n=!1)=>{if(f.value&&(o.value||d.value?.focus(),e.recorder||e.binders)){if(n)return;u("recorder:pointerdown",{event:a,indicator:p.value,input:d.value})}};return(a,n)=>(U(),T("div",j({class:t(R)(`
			recorder
			flex items-center
			gap-2
			px-2
			grow-[999999]
			focus-outline-no-offset
			rounded-sm
		`,r.border&&`
			border
			border-neutral-500
			focus:border-accent-500
		`,(r.disabled||r.readonly)&&`
			text-neutral-400
			dark:text-neutral-600
		`,(r.disabled||r.readonly)&&r.border&&`
			bg-neutral-50
			dark:bg-neutral-950
			border-neutral-400
			dark:border-neutral-600
		`,t(w).class),"aria-readonly":r.readonly,tabindex:r.disabled?-1:0,title:o.value?r.recordingTitle:b.value,contenteditable:"false"},{...t(w),class:void 0},{role:"button","aria-pressed":o.value,"aria-disabled":r.disabled,ref_key:"recorderEl",ref:d,onBlur:n[1]||(n[1]=i=>C(i)),onKeydownCapture:n[2]||(n[2]=z(x(i=>B(i,!0),["prevent"]),["space"]))}),[g("span",N,E(o.value?r.recordingTitle||t(y)("recorder.recording"):""),1),g("div",{class:W(t(R)(`
			recorder--indicator
			inline-block
			bg-red-700
			rounded-full
			w-[1em]
			h-[1em]
			shrink-0
		`,o.value&&`
				animate-blinkInf
				bg-red-500
			`,(r.disabled||r.readonly)&&`
				bg-neutral-500
			`,!(r.disabled||r.readonly)&&`
				hover:bg-red-500
			`)),ref_key:"recorderIndicatorEl",ref:p,onPointerdownCapture:n[0]||(n[0]=x(i=>B(i),["prevent"]))},null,34),g("div",O,E(o.value?r.recordingValue??t(y)("recorder.recording"):b.value),1)],16,D))}});export{Q as default};
