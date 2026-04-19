import{c as be}from"./DyCH_Usl.js";import{i as we}from"./B9Vz3BzZ.js";import{u as X}from"./B8YfHvdD.js";import{C as q}from"./475SGCPX.js";import{c as w}from"./krPynjdP.js";import{I as ye}from"./B-Vyz8Rx.js";import{u as ke}from"./HJq1u14D.js";import{u as $e}from"./CryW2h21.js";import{c as xe}from"./CD0Jx8XC.js";import{t as Se}from"./jiRaHU2K.js";import{_ as G}from"./CL5LyKdq.js";import Ce from"./DZazbqIP.js";import Ae from"./CREnrYbk.js";import{a9 as Re,W as oe,i as V,o as Ve,U as Y,A as ne,B as g,X as P,R as k,l as d,Z as qe,a5 as ie,$ as se,m as B,T as Ee,z as ce,D as S,E as M,F as ue,C as de}from"./D-J5zQKJ.js";import"./C7vdP-Nq.js";import"./B5w3gUgn.js";function pe(a,v){try{const f=typeof a=="string"?new q(a):new q("srgb",[a.r/255,a.g/255,a.b/255],v?a.a:1),l=f.hsv;return!l||l[1]===void 0||l[2]===void 0?void 0:{h:w(l[0]??0,0,Number.MAX_SAFE_INTEGER),s:w(l[1],0,100),v:w(l[2],0,100),a:w(v?f.alpha:1,0,1)}}catch{return}}function W(a,v){try{const f=typeof a=="string"?new q(a):new q("hsv",[a.h,a.s,a.v],v?a.a:1),l=f.srgb;return!l||l[0]===void 0||l[1]===void 0||l[2]===void 0?void 0:{r:w(l[0]/1*255,0,255),g:w(l[1]/1*255,0,255),b:w(l[2]/1*255,0,255),a:w(v?f.alpha:1,0,1)}}catch{return}}function I(a,v){const f=a.toFixed(v);return Number.parseFloat(f).toString()}function Te(a,v,f){const l=I(a.r,f),$=I(a.g,f),s=I(a.b,f),C=a.a!==void 0?I(a.a,f):void 0;return v?`rgba(${l}, ${$}, ${s}, ${C})`:`rgb(${l}, ${$}, ${s})`}const ze=["id","aria-label"],Ke=["aria-description","aria-valuetext"],De=["aria-valuenow","aria-label","aria-description"],Le=["aria-label","aria-valuenow","aria-description"],Pe={class:"color-picker--footer flex w-full flex-1 gap-2"},Be={class:"color-picker--preview-wrapper bg-transparency-squares relative aspect-square h-[calc(var(--slider-size)*3)] rounded-full shadow-xs"},Me={class:"color-picker--input-group flex flex-1 items-center gap-2"},Ie={class:"color-picker--save-cancel-group flex w-full items-center justify-center gap-2"},fe=`
	slider
	no-touch-action
	h-4
	w-full
	relative
	flex
`,Z=`
	handle
	h-[var(--slider-size)]
	w-[var(--slider-size)]
	shadow-xs
	shadow-black/50
	border-2 border-neutral-700
	rounded-full
	absolute
	cursor-pointer
	outline-hidden
	focus:border-accent-500
	active:border-accent-500
	hover:border-accent-500
`,tr=Object.assign({name:"WColorPicker"},{__name:"WColorPicker",props:se({id:{type:String,required:!1},label:{type:String,required:!1},allowAlpha:{type:Boolean,required:!1,default:!0},stringPrecision:{type:Number,required:!1,default:3},customRepresentation:{type:Object,required:!1,default:void 0},border:{type:Boolean,required:!1,default:!0},copyTransform:{type:Function,required:!1,default:(a,v)=>v},valid:{type:Boolean,required:!1,default:!0}},{modelValue:{type:Object,required:!1,default:()=>({r:0,g:0,b:0})},modelModifiers:{},tempValue:{type:null,required:!1,default:()=>{}},tempValueModifiers:{}}),emits:se(["save","cancel"],["update:modelValue","update:tempValue"]),setup(a,{emit:v}){const f=Re(),l=$e(),$=v,s=a,C=ke(s),F=l("color-picker.aria.description"),E=oe(a,"modelValue",{type:Object,required:!1,default:()=>({r:0,g:0,b:0})}),y=oe(a,"tempValue",{type:null,required:!1,default:()=>{}}),T=V(null),z=V(null),A=V(null);let N=null,J=null,Q=null;const j={hue:{el:z,xKey:"h",xSteps:360},alpha:{el:A,xSteps:1,xKey:"a"},all:{el:T,xSteps:100,ySteps:100,xKey:"s",yKey:"v"}},o=Ee({percent:{h:0,s:0,v:0,a:0},val:{h:0,s:0,v:0,a:0}}),_=B(()=>{const e=W(o.val,s.allowAlpha);return e||X(),e}),ee=B(()=>{const e=_.value;return e||X(),`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`}),x=B(()=>s.customRepresentation?s.customRepresentation.fromHsvaToString({...o.val},s.allowAlpha):Te(_.value,s.allowAlpha,s.stringPrecision)),R=V(x.value);function ve(){R.value!==x.value&&(R.value=x.value)}function me(e,r){if(!N)return;const t=N,{height:n,width:m}=e;t.clearRect(0,0,m,n);const u=t.createLinearGradient(0,0,0,n);u.addColorStop(0,"white"),u.addColorStop(1,"black");const p=t.createLinearGradient(0,0,m,0);p.addColorStop(0,`hsla(${r} 100% 50% / 0)`),p.addColorStop(1,`hsla(${r} 100% 50% /1)`),t.fillStyle=u,t.fillRect(0,0,m,n),t.fillStyle=p,t.globalCompositeOperation="multiply",t.fillRect(0,0,m,n),t.globalCompositeOperation="source-over"}function re(e,r,t,n=360){if(!r)return;const{height:m,width:u}=e;r.clearRect(0,0,u,m);const p=we(t)?t.length-1:n,c=r.createLinearGradient(0,0,u,0);for(let i=0;i<p+1;i++){const b=t instanceof Function?t(i):t[i];b===void 0&&X(),c.addColorStop(i/p,b)}r.fillStyle=c,r.fillRect(0,0,u,m)}function te(e,r,t=100,n=100,m=!1){const u=e/r,p=u*t,c=Math.round(p*n)/n,i=t===n?c:Math.round(u*100*n)/n,b={val:c,percent:i};return m&&(b.val=t-c),b}const K=V("");let D=!1;function H(e,r){requestAnimationFrame(()=>{if(r==="")return;const t=j[r]?.el.value;if(!t||!j[r])return;const{x:n,y:m,width:u,height:p}=t.getBoundingClientRect(),c=j[r];if(c.xKey!==void 0){let i=e.clientX-n;i=i<0?0:i>u?u:i;const b=te(i,u,c.xSteps??100);o.percent[c.xKey]=b.percent,o.val[c.xKey]=b.val}if(c.yKey!==void 0){let i=e.clientY-m;i=i<0?0:i>p?p:i;const b=te(i,p,c.ySteps??100,100,!0);o.percent[c.yKey]=b.percent,o.val[c.yKey]=b.val}})}const h={keydown:(e,r)=>{if(be(e.target),e.target?.getBoundingClientRect){if(["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"].includes(e.key)){e.preventDefault();const{x:t,y:n,width:m,height:u}=e.target.getBoundingClientRect();let p=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0,c=e.key==="ArrowUp"?-1:e.key==="ArrowDown"?1:0;e.shiftKey&&(p*=10),e.shiftKey&&(c*=10),H({clientX:t+m/2+p,clientY:n+u/2+c},r)}e.key==="Enter"&&(e.preventDefault(),le())}},pointerdown:(e,r)=>{const t=`#${C} .color-picker--${r}-handle`,n=document.querySelector(t);n instanceof HTMLElement&&n.focus(),!D&&(e.preventDefault(),K.value=r,D=!0,document.addEventListener("pointermove",h.pointermove),document.addEventListener("pointerup",h.pointerup),H(e,K.value))},pointerleave:e=>{D&&e.preventDefault()},pointermove:e=>{e.preventDefault(),H(e,K.value)},pointerup:e=>{e.preventDefault(),D=!1,K.value="",document.removeEventListener("pointermove",h.pointermove),document.removeEventListener("pointerup",h.pointerup)}};function O(e){if(A.value){const r=new q("hsv",[e.h,e.s,e.v],e.a).to("hsl"),t=r.clone();t.alpha=0;const n=r.clone();n.alpha=1,re(A.value,Q,[t.toString(),n.toString()])}re(z.value,J,r=>`hsl(${r} 100% 50%)`),me(T.value,e.h)}function ae(e){o.percent.h=Math.round(e.h/360*1e4)/100,o.percent.s=e.s,o.percent.v=100-e.v,o.percent.a=s.allowAlpha&&e.a!==void 0?e.a*100:1,o.val={...e,a:s.allowAlpha?e.a:1}}function L(e){const r=pe(e,s.allowAlpha);r&&(O(r),ae(r))}function le(){const e=W(o.val,s.allowAlpha);e&&(E.value=e,y.value=void 0,$("save",e))}function ge(e){const r=e.target?.value,t=s.customRepresentation?.fromStringToHsva?s.customRepresentation.fromStringToHsva(r):pe(r,s.allowAlpha);t&&(O(t),ae(t))}let U=!1;Ve(()=>{L(E.value),y.value!==void 0&&L(y.value);const e=document.querySelector(`#${C} .color-picker--all-handle`);e instanceof HTMLElement&&e.focus(),N=T.value?.getContext("2d")??null,J=z.value?.getContext("2d")??null,Q=A.value?.getContext("2d")??null}),Y(E,()=>{L(E.value)}),Y(y,()=>{y.value!==void 0&&(U=!0,L(y.value),setTimeout(()=>{U=!1},0))}),Y(o,()=>{if(O(o.val),R.value=x.value,U)return;const e=W(o.val,s.allowAlpha);e&&(y.value=e)});const he=B(()=>o.percent.v<50||o.val.a===void 0||o.val.a<.5);return(e,r)=>(ce(),ne("div",{id:d(C),"aria-label":d(l)("color-picker.aria"),class:k(d(Se)(`color-picker
			[--slider-size:calc(var(--spacing)_*_4)]
			[--contrast-dark:var(--color-neutral-100)]
			[--contrast-light:var(--color-neutral-800)]
			[--fg:rgb(var(--contrast-dark))]
			[--bg:rgb(var(--contrast-light))]
			max-w-[300px]
			flex flex-col items-center justify-center
			bg-neutral-50
			dark:bg-neutral-800
			gap-3
			p-3
		`,he.value&&`
			[--fg:rgb(var(--contrast-light))]
			[--bg:rgb(var(--contrast-dark))]
		`,a.border&&`
			border
			rounded-sm
			border-neutral-300
			dark:border-neutral-900
			shadow-md
			shadow-black/30
		`,d(f)?.class))},[g("div",{class:k(`color-picker--all-picker
			no-touch-action
			w-full
			aspect-square
			relative
			flex
			rounded-sm
			focus:border-accent-500
		`),onPointerdown:r[1]||(r[1]=t=>h.pointerdown(t,"all")),onPointerleave:r[2]||(r[2]=t=>h.pointerleave(t))},[g("canvas",{class:"size-full shadow-xs shadow-black/50 rounded-sm",ref_key:"pickerEl",ref:T},null,512),g("div",{role:"slider","aria-description":d(F),"aria-valuetext":`${d(l)("color-picker.aria.saturation")}: ${o.percent.s}, ${d(l)("color-picker.aria.value")}: ${o.percent.v}`,class:k(`
					color-picker--all-handle
					${Z}
					border-[var(--fg)]
					hover:shadow-black
					active:shadow-black
				`),tabindex:"0",style:P(`
					left: calc(${o.percent.s}% - var(--slider-size)/2);
					top: calc(${o.percent.v}% - var(--slider-size)/2);
					background: ${ee.value};
				`),onKeydown:r[0]||(r[0]=t=>h.keydown(t,"all"))},null,46,Ke)],32),g("div",{class:k(`color-picker--hue-slider ${fe}`),onPointerdown:r[4]||(r[4]=t=>h.pointerdown(t,"hue"))},[g("canvas",{class:"size-full shadow-xs shadow-black/50 rounded-sm",ref_key:"hueSliderEl",ref:z},null,512),g("div",{role:"slider","aria-valuenow":`${o.percent.h}`,"aria-valuemin":0,"aria-valuemax":100,"aria-label":d(l)("color-picker.aria.hue"),"aria-description":d(F),tabindex:"0",class:k(`
				color-picker--hue-handle
				${Z}
			`),style:P(`left: calc(${o.percent.h}% - var(--slider-size)/2)`),onKeydown:r[3]||(r[3]=t=>h.keydown(t,"hue"))},null,46,De)],34),a.allowAlpha?(ce(),ne("div",{key:0,class:k(`
			color-picker--alpha-slider
			${fe}
		`),onPointerdown:r[6]||(r[6]=t=>h.pointerdown(t,"alpha"))},[g("canvas",{class:"size-full shadow-xs shadow-black/50 rounded-sm bg-transparency-squares",ref_key:"alphaSliderEl",ref:A},null,512),g("div",{role:"slider","aria-label":d(l)("color-picker.aria.alpha-slider"),"aria-valuenow":`${o.percent.a}`,"aria-valuemin":0,"aria-valuemax":100,"aria-description":d(F),tabindex:"0",class:k(`color-picker--alpha-handle ${Z}`),style:P(`left: calc(${o.percent.a}% - var(--slider-size)/2)`),onKeydown:r[5]||(r[5]=t=>h.keydown(t,"alpha"))},null,46,Le)],34)):qe("",!0),g("div",Pe,[g("div",Be,[g("div",{class:"color-picker--footer--preview size-full rounded-full border-2 border-neutral-600 dark:border-neutral-300",style:P(`background: ${ee.value}`)},null,4)]),g("div",Me,[ie(e.$slots,"input",{},()=>[S(Ae,{valid:a.valid,class:"color-picker--input w-full","aria-label":a.label,modelValue:R.value,"onUpdate:modelValue":r[7]||(r[7]=t=>R.value=t),onInput:ge,onBlur:ve},null,8,["valid","aria-label","modelValue"]),S(G,{class:"color-picker--copy-button","aria-label":d(l)("copy"),onClick:r[8]||(r[8]=t=>d(xe)(a.copyTransform?.(o.val,x.value)??x.value))},{default:M(()=>[S(Ce,null,{default:M(()=>[S(d(ye))]),_:1})]),_:1},8,["aria-label"])])])]),ie(e.$slots,"buttons",{},()=>[g("div",Ie,[S(G,{class:"color-picker--save-button",onClick:r[9]||(r[9]=t=>le())},{default:M(()=>[ue(de(d(l)("save")),1)]),_:1}),S(G,{class:"color-picker--cancel-button",onClick:r[10]||(r[10]=t=>$("cancel"))},{default:M(()=>[ue(de(d(l)("cancel")),1)]),_:1})])])],10,ze))}});export{tr as default};
