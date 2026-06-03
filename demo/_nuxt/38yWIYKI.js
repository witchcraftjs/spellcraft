import{i as _,c as D,b as P,D as q,d as $,a as x}from"./BBDYkYGh.js";import{u as C}from"./CisdvJxT.js";import{P as k}from"./D8Eww6YR.js";import{p as g,X as u,i,aA as l,a4 as s,I as p,ak as t,M as B,v as h,R as w,ao as T,H as V,j as c,n as d,h as v,L as M,m,ac as y}from"./CIkOm3BO.js";import{T as S}from"./C8LAllZi.js";import{u as j}from"./C3nqiY3_.js";import{t as b}from"./CLwyhV7-.js";import{_ as O}from"./BVWdv_YN.js";import"./dbufJ0wh.js";import"./DUXH5lsf.js";import"./FUKBWQwh.js";import"./CHIgUVhi.js";var R=g({__name:"DialogClose",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(a){const r=a;C();const e=_();return(o,n)=>(u(),i(t(k),p(r,{type:o.as==="button"?"button":void 0,onClick:n[0]||(n[0]=f=>t(e).onOpenChange(!1))}),{default:l(()=>[s(o.$slots,"default")]),_:3},16,["type"]))}}),I=R,N=g({__name:"DialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(a){const r=a;return(e,o)=>(u(),i(t(S),B(h(r)),{default:l(()=>[s(e.$slots,"default")]),_:3},16))}}),z=N,E=g({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(a){const r=a,e=_(),{forwardRef:o,currentElement:n}=C();return e.contentId||=j(void 0,"reka-dialog-content"),w(()=>{e.triggerElement.value=n.value}),(f,W)=>(u(),i(t(k),p(r,{ref:t(o),type:f.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":t(e).open.value||!1,"aria-controls":t(e).open.value?t(e).contentId:void 0,"data-state":t(e).open.value?"open":"closed",onClick:t(e).onOpenToggle}),{default:l(()=>[s(f.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),A=E;const te=Object.assign({name:"WPopup",inheritAttrs:!1},{__name:"WPopup",props:V({title:{type:String,required:!1},description:{type:String,required:!1},backdropClass:{type:String,required:!1},contentProps:{type:Object,required:!1},rootProps:{type:Object,required:!1},to:{type:String,required:!1,default:"#root"}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const r=T(a,"modelValue",{type:Boolean,default:!1});return(e,o)=>(u(),i(t(D),p(a.rootProps,{open:r.value,"onUpdate:open":o[1]||(o[1]=n=>r.value=n)}),{default:l(()=>[e.$slots.button?(u(),i(t(A),{key:0,"as-child":""},{default:l(()=>[s(e.$slots,"button")]),_:3})):c("",!0),d(t(z),{to:a.to},{default:l(()=>[d(t(P),{"as-child":""},{default:l(()=>[s(e.$slots,"backdrop",{class:"popup--backdrop absolute inset-0 bg-black/50"},()=>[o[2]||(o[2]=v("div",{class:"popup--backdrop absolute inset-0 bg-black/50"},null,-1))])]),_:3}),d(t(q),p({...a.contentProps,class:void 0},{class:t(b)(`
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
			`,a.contentProps?.class)}),{default:l(()=>[v("div",{class:M(t(b)(`
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
				`))},[s(e.$slots,"popup",{},()=>[s(e.$slots,"title",{},()=>[a.title?(u(),i(t($),{key:0,class:"text-lg font-bold"},{default:l(()=>[m(y(a.title),1)]),_:1})):c("",!0)]),s(e.$slots,"description",{},()=>[a.description?(u(),i(t(x),{key:0},{default:l(()=>[m(y(a.description),1)]),_:1})):c("",!0)]),s(e.$slots,"extra")]),d(t(I),{"as-child":""},{default:l(()=>[s(e.$slots,"close",{},()=>[d(O,{class:"justify-self-end",onClick:o[0]||(o[0]=n=>r.value=!1)},{default:l(()=>[...o[3]||(o[3]=[m(" Close ",-1)])]),_:1})])]),_:3})],2)]),_:3},16,["class"])]),_:3},8,["to"])]),_:3},16,["open"]))}});export{te as default};
