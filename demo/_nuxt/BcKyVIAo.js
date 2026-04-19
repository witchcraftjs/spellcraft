import{i as _,D as k,a as P,b as $,c as q,d as B}from"./BJIMoQ7C.js";import{u as C}from"./L08Gibo2.js";import{P as D}from"./DiBjWpqu.js";import{d as m,z as u,O as i,E as l,a5 as s,a7 as p,l as t,aa as x,ab as w,o as T,W as V,$ as h,Z as c,D as d,B as v,R as O,F as g,C as y}from"./D-J5zQKJ.js";import{T as S}from"./BOmPsWgo.js";import{u as M}from"./DT6-d9UI.js";import{t as b}from"./jiRaHU2K.js";import{_ as j}from"./CL5LyKdq.js";import"./Bx58M4aK.js";import"./C4jNaWal.js";import"./FUKBWQwh.js";import"./CHIgUVhi.js";var R=m({__name:"DialogClose",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(a){const r=a;C();const e=_();return(o,n)=>(u(),i(t(D),p(r,{type:o.as==="button"?"button":void 0,onClick:n[0]||(n[0]=f=>t(e).onOpenChange(!1))}),{default:l(()=>[s(o.$slots,"default")]),_:3},16,["type"]))}}),z=R,E=m({__name:"DialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(a){const r=a;return(e,o)=>(u(),i(t(S),x(w(r)),{default:l(()=>[s(e.$slots,"default")]),_:3},16))}}),N=E,I=m({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(a){const r=a,e=_(),{forwardRef:o,currentElement:n}=C();return e.contentId||=M(void 0,"reka-dialog-content"),T(()=>{e.triggerElement.value=n.value}),(f,F)=>(u(),i(t(D),p(r,{ref:t(o),type:f.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":t(e).open.value||!1,"aria-controls":t(e).open.value?t(e).contentId:void 0,"data-state":t(e).open.value?"open":"closed",onClick:t(e).onOpenToggle}),{default:l(()=>[s(f.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),W=I;const te=Object.assign({name:"WPopup",inheritAttrs:!1},{__name:"WPopup",props:h({title:{type:String,required:!1},description:{type:String,required:!1},backdropClass:{type:String,required:!1},contentProps:{type:Object,required:!1},rootProps:{type:Object,required:!1},to:{type:String,required:!1,default:"#root"}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const r=V(a,"modelValue",{type:Boolean,default:!1});return(e,o)=>(u(),i(t(k),p(a.rootProps,{open:r.value,"onUpdate:open":o[1]||(o[1]=n=>r.value=n)}),{default:l(()=>[e.$slots.button?(u(),i(t(W),{key:0,"as-child":""},{default:l(()=>[s(e.$slots,"button")]),_:3})):c("",!0),d(t(N),{to:a.to},{default:l(()=>[d(t(P),{"as-child":""},{default:l(()=>[s(e.$slots,"backdrop",{class:"popup--backdrop absolute inset-0 bg-black/50"},()=>[o[2]||(o[2]=v("div",{class:"popup--backdrop absolute inset-0 bg-black/50"},null,-1))])]),_:3}),d(t($),p({...a.contentProps,class:void 0},{class:t(b)(`
				popup--content
				z-100
				focus:outline-none
				fixed
				top-1/2
				left-1/2
				-translate-x-1/2
				-translate-y-1/2
				animate-contentShow
				max-w-[100dvw]
				max-h-[100dvh]
				overflow-auto
				scrollbar-hidden
				p-5
			`,a.contentProps?.class)}),{default:l(()=>[v("div",{class:O(t(b)(`
					popup--content-inner
					flex
					flex-col
					bg-neutral-100
					dark:bg-neutral-800
					rounded-md
					flex
					flex-col
					gap-3
					p-2
				`))},[s(e.$slots,"popup",{},()=>[s(e.$slots,"title",{},()=>[a.title?(u(),i(t(q),{key:0,class:"text-lg font-bold"},{default:l(()=>[g(y(a.title),1)]),_:1})):c("",!0)]),s(e.$slots,"description",{},()=>[a.description?(u(),i(t(B),{key:0},{default:l(()=>[g(y(a.description),1)]),_:1})):c("",!0)]),s(e.$slots,"extra")]),d(t(z),{"as-child":""},{default:l(()=>[s(e.$slots,"close",{},()=>[d(j,{class:"justify-self-end",onClick:o[0]||(o[0]=n=>r.value=!1)},{default:l(()=>[...o[3]||(o[3]=[g(" Close ",-1)])]),_:1})])]),_:3})],2)]),_:3},16,["class"])]),_:3},8,["to"])]),_:3},16,["open"]))}});export{te as default};
