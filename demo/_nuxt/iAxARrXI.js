import{n as e,r as t}from"./DiNi8asB.js";import{$ as n,$n as r,D as i,E as a,Ft as o,On as s,Zn as c,_ as l,ct as u,et as d,k as f,mt as p,qt as m,tr as h,v as g,xt as _,y as v,z as y}from"./B8D2lM98.js";import{t as b}from"./BwZvZm7q.js";import{n as x}from"./DIaa6uKV.js";import{t as S}from"./DFsjrv8q.js";import{t as C}from"./CPHI10JZ.js";import{t as w}from"./BmL0Fpnx.js";import{a as T,i as E,n as D,o as O,r as k,t as A}from"./C3XGwxS_.js";var j=f({__name:`DialogClose`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`}},setup(e){let t=e;w();let n=O();return(r,i)=>(p(),g(s(S),d(t,{type:e.as===`button`?`button`:void 0,onClick:i[0]||=e=>s(n).onOpenChange(!1)}),{default:m(()=>[_(r.$slots,`default`)]),_:3},16,[`type`]))}}),M=f({__name:`DialogPortal`,props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){let t=e;return(e,n)=>(p(),g(s(C),r(y(t)),{default:m(()=>[_(e.$slots,`default`)]),_:3},16))}}),N=f({__name:`DialogTrigger`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`}},setup(t){let n=t,r=O(),{forwardRef:i,currentElement:a}=w();return r.contentId||=e(void 0,`reka-dialog-content`),u(()=>{r.triggerElement.value=a.value}),(e,a)=>(p(),g(s(S),d(n,{ref:s(i),type:t.as===`button`?`button`:void 0,"aria-haspopup":`dialog`,"aria-expanded":s(r).open.value||!1,"aria-controls":s(r).open.value?s(r).contentId:void 0,"data-state":s(r).open.value?`open`:`closed`,onClick:s(r).onOpenToggle}),{default:m(()=>[_(e.$slots,`default`)]),_:3},16,[`type`,`aria-expanded`,`aria-controls`,`data-state`,`onClick`]))}}),P=t({default:()=>F}),F=Object.assign({name:`WPopup`,inheritAttrs:!1},{__name:`WPopup`,props:n({title:{type:String,required:!1},description:{type:String,required:!1},backdropClass:{type:String,required:!1},contentProps:{type:Object,required:!1},rootProps:{type:Object,required:!1},to:{type:String,required:!1,default:`#root`},unstyle:{type:Boolean,required:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=o(e,`modelValue`,{type:Boolean,default:!1});return(n,r)=>(p(),g(s(T),d(e.rootProps,{open:t.value,"onUpdate:open":r[1]||=e=>t.value=e}),{default:m(()=>[n.$slots.button?(p(),g(s(N),{key:0,"as-child":``},{default:m(()=>[_(n.$slots,`button`)]),_:3})):v(``,!0),i(s(M),{to:e.to},{default:m(()=>[i(s(D),{"as-child":``},{default:m(()=>[_(n.$slots,`backdrop`,{class:`popup--backdrop absolute inset-0 bg-black/50`},()=>[r[2]||=l(`div`,{class:`popup--backdrop absolute inset-0 bg-black/50`},null,-1)])]),_:3}),i(s(E),d({...e.contentProps,class:void 0},{class:s(b)(`
					popup--content-wrapper
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
				`,!e.unstyle&&`
					p-5
					bg-neutral-100
					dark:bg-neutral-800
					rounded-md
				`,e.contentProps?.class)}),{default:m(()=>[l(`div`,{class:c(s(b)(`
					popup--content-inner
					flex
					flex-col
					gap-3
				`))},[_(n.$slots,`popup`,{},()=>[_(n.$slots,`title`,{},()=>[e.title?(p(),g(s(A),{key:0,class:`text-lg font-bold`},{default:m(()=>[a(h(e.title),1)]),_:1})):v(``,!0)]),_(n.$slots,`description`,{},()=>[e.description?(p(),g(s(k),{key:0},{default:m(()=>[a(h(e.description),1)]),_:1})):v(``,!0)]),_(n.$slots,`extra`)]),i(s(j),{"as-child":``},{default:m(()=>[_(n.$slots,`close`,{},()=>[i(x,{class:`justify-self-end`,onClick:r[0]||=e=>t.value=!1},{default:m(()=>[...r[3]||=[a(` Close `,-1)]]),_:1})])]),_:3})],2)]),_:3},16,[`class`])]),_:3},8,[`to`])]),_:3},16,[`open`]))}});export{F as n,P as t};