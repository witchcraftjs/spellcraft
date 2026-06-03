import{al as w,ao as p,k as f,F as V,a3 as A,I as B,ak as n,j as $,H as D,X as c,aC as M,aE as q,L as C,h as I,ac as K,n as v,aA as x,a2 as g,g as j,K as E}from"./CIkOm3BO.js";import{I as F}from"./CirRfpkc.js";import{c as L}from"./CD0Jx8XC.js";import{t as k}from"./CLwyhV7-.js";import{_ as R}from"./BVWdv_YN.js";import N from"./DQrAq-Ch.js";function O(e,...d){for(const u of d){const r=e.indexOf(u);r>-1&&e.splice(r,1)}return e}const S=["data-disabled","data-read-only","aria-label"],H=["data-border","tabindex","onKeydown","onFocus"],W={class:"multivalues--label truncate"},Q=Object.assign({name:"WMultiValues",inheritAttrs:!1},{__name:"WMultiValues",props:D({disabled:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},border:{type:Boolean,required:!1,default:!0},unstyle:{type:Boolean,required:!1},label:{type:String,required:!1},itemAttrs:{type:Object,required:!1}},{modelValue:{type:Array,default:()=>[]},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const d=w(),u=e,r=j(()=>!u.disabled&&!u.readonly),t=p(e,"modelValue",{type:Array,default:()=>[]}),o=g([]),a=g(0);function m(l){r.value&&(O(t.value,l),t.value.length>0&&(a.value>=t.value.length&&(a.value=t.value.length-1),E(()=>{o.value[a.value]?.focus()})))}function h(l){if(u.disabled)return;const s=t.value.length;s!==0&&(l.key==="ArrowRight"?(a.value=(a.value+1)%s,o.value[a.value]?.focus(),l.preventDefault()):l.key==="ArrowLeft"?(a.value=(a.value-1+s)%s,o.value[a.value]?.focus(),l.preventDefault()):l.key==="Delete"||l.key==="Backspace"?r.value&&(m(t.value[a.value]),l.preventDefault()):l.key==="Home"?(a.value=0,o.value[a.value]?.focus(),l.preventDefault()):l.key==="End"&&(a.value=s-1,o.value[a.value]?.focus(),l.preventDefault()))}return(l,s)=>t.value&&t.value?.length>0?(c(),f("div",B({key:0,role:"list",class:n(k)(`
		multivalues
		group
		flex
		flex-initial
		items-center
		justify-center
		gap-1
		overflow-x-scroll
		scrollbar-hidden
	`,n(d)?.class),"data-disabled":e.disabled,"data-read-only":e.readonly,"aria-label":e.label?`Values for ${e.label}`:void 0},{...n(d),class:void 0},{onKeydown:h}),[(c(!0),f(V,null,A(t.value,(i,b)=>(c(),f("div",{role:"listitem","data-border":e.border,class:C(n(k)(`
				multivalues--item
				flex-basis-0
				min-w-2
				flex
				max-w-fit
				flex-1
				items-center
				gap-0.5
				overflow-hidden
				px-1
				text-xs
				leading-none
				focus-outline
				outlined:outline-offset-0
			`,!(e.disabled||e.readonly)&&`
				group-focus:text-accent-500
				focus:text-accent-500`,e.border&&`
				rounded-sm
				border-neutral-400
				border
				focus:border-accent-400
			`,e.border&&(e.disabled||e.readonly)&&`
				border-neutral-200
				focus:border-neutral-200
				dark:border-neutral-800
				dark:focus:border-neutral-800
			`,e.itemAttrs?.class)),tabindex:r.value?a.value===b?0:-1:void 0,key:i,ref_for:!0,ref_key:"itemRefs",ref:o,onKeydown:M(q(y=>n(L)(i.toString()),["ctrl","prevent"]),["c"]),onFocus:y=>a.value=b},[I("span",W,K(i),1),v(R,{class:"multivalues--remove-button !p-0 text-sm !leading-none","aria-label":`Remove ${i}`,border:!1,disabled:e.disabled||e.readonly,tabindex:"-1",onClick:y=>m(i)},{default:x(()=>[v(N,null,{default:x(()=>[v(n(F))]),_:1})]),_:1},8,["aria-label","disabled","onClick"])],42,H))),128))],16,S)):$("",!0)}});export{Q as default};
