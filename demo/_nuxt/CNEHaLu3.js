import{H as q,I as A,J as E,K as $,j as k,L as S,r as h,M as f,x as i,B as m,N as T,O as F,P as x,v as L,Q as P,R as a,S as B,T as W,U as I,V as D,y as b,W as j,X as M,Y as H,Z as O,$ as R}from"#entry";import J from"./ClHnuT-g.js";import"./C2-tFza1.js";const K={class:"color-input--swatch-wrapper flex w-full"},Q={class:"color-input--popup-wrapper p-5"},d=`
	color-input--swatch
	after:content-vertical-holder
	min-w-4
	flex-1
	relative
	before:content-['']
	before:absolute
	before:inset-0
	before:bg-transparency-squares
	before:z-[-1]
`,G=Object.assign({name:"LibColorInput"},{__name:"WColorInput",props:q({label:{type:String,required:!1},id:{type:String,required:!1},allowAlpha:{type:Boolean,required:!1,default:!0},border:{type:Boolean,required:!1,default:!0},copyTransform:{type:Function,required:!1,default:(l,c)=>c},stringPrecision:{type:Number,required:!1,default:3},customRepresentation:{type:Object,required:!1,default:void 0}},{modelValue:{type:Object,required:!1,default:()=>({r:0,g:0,b:0})},modelModifiers:{},tempValue:{type:null,required:!1,default:()=>{}},tempValueModifiers:{}}),emits:q(["save","cancel"],["update:modelValue","update:tempValue"]),setup(l,{emit:c}){const g=F(),w=A(),p=c;function z(){s.value=n.value,t.value=!1,e.value=void 0,p("save")}function N(){t.value=!1,e.value=void 0,p("cancel")}const y=E(),s=$(l,"modelValue",{type:Object,required:!1,default:()=>({r:0,g:0,b:0})}),e=$(l,"tempValue",{type:null,required:!1,default:()=>{}}),u=k(()=>new S("srgb",[s.value.r/255,s.value.g/255,s.value.b/255],s.value.a??1).toString()),V=k(()=>e.value?new S("srgb",[e.value.r/255,e.value.g/255,e.value.b/255],e.value.a??1).toString():""),n=h({...s.value}),t=h(!1),U=()=>{t.value&&(s.value=n.value),t.value=!t.value};return(C,o)=>(i(),f(T,{class:"color-input--popup",modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=r=>t.value=r),onClose:o[3]||(o[3]=r=>{e.value=void 0,p("cancel")})},{button:m(({extractEl:r})=>[x((i(),f(W,I({id:l.id??a(g),class:a(D)(`
				p-0
				color-input--button
				flex flex-nowrap
				min-w-4
				overflow-hidden
				[&_.button--label]:items-stretch
				[&_.button--label]:gap-0
				after:hidden
			`,a(y).class),"aria-label":a(w)("color-input.aria-and-title-prefix")+u.value,title:a(w)("color-input.aria-and-title-prefix")+u.value},{...a(y),class:void 0},{onClick:U}),{label:m(()=>[b("div",K,[j(C.$slots,"default",M(H({stringColor:u.value,classes:d})),()=>[b("div",{class:R(d),style:O(`background:${u.value}`)},null,4)]),e.value?j(C.$slots,"temp",M(I({key:0},{tempStringColor:V.value,classes:d})),()=>[b("div",{class:R(d),style:O(`background:${V.value}`)},null,4)]):P("",!0)])]),_:3},16,["id","class","aria-label","title"])),[[a(B),r]])]),popup:m(({extractEl:r})=>[x((i(),L("div",Q,[t.value?(i(),f(J,{key:0,id:l.id??a(g),"allow-alpha":l.allowAlpha,"custom-representation":l.customRepresentation,"string-precision":l.stringPrecision,modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=v=>n.value=v),"temp-value":e.value,"onUpdate:tempValue":o[1]||(o[1]=v=>e.value=v),onSave:z,onCancel:N},null,8,["id","allow-alpha","custom-representation","string-precision","modelValue","temp-value"])):P("",!0)])),[[a(B),r]])]),_:3},8,["modelValue"]))}});export{G as default};
