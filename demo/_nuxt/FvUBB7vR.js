import{c as be}from"./DyCH_Usl.js";import{i as we}from"./B9Vz3BzZ.js";import{u as U}from"./B8YfHvdD.js";import{C as q}from"./475SGCPX.js";import{c as w}from"./krPynjdP.js";import{I as ye}from"./vEIQhVfJ.js";import{u as ke}from"./DB7JXF76.js";import{u as xe}from"./BbHlLnxg.js";import{c as $e}from"./CD0Jx8XC.js";import{t as Se}from"./CLwyhV7-.js";import{_ as G}from"./BVWdv_YN.js";import Ce from"./DQrAq-Ch.js";import Ae from"./qY033B00.js";import{al as Re,ao as oe,a2 as V,R as Ve,aw as Y,k as ne,h as g,N as P,L as k,ak as d,j as qe,a4 as ie,H as se,g as M,a0 as Ee,X as ce,n as S,aA as B,m as ue,ac as de}from"./CIkOm3BO.js";import"./CxvoaRQt.js";import"./DdBiT363.js";function pe(t,v){try{const f=typeof t=="string"?new q(t):new q("srgb",[t.r/255,t.g/255,t.b/255],v?t.a:1),l=f.hsv;return!l||l[1]===void 0||l[2]===void 0?void 0:{h:w(l[0]??0,0,Number.MAX_SAFE_INTEGER),s:w(l[1],0,100),v:w(l[2],0,100),a:w(v?f.alpha:1,0,1)}}catch{return}}function W(t,v){try{const f=typeof t=="string"?new q(t):new q("hsv",[t.h,t.s,t.v],v?t.a:1),l=f.srgb;return!l||l[0]===void 0||l[1]===void 0||l[2]===void 0?void 0:{r:w(l[0]/1*255,0,255),g:w(l[1]/1*255,0,255),b:w(l[2]/1*255,0,255),a:w(v?f.alpha:1,0,1)}}catch{return}}function I(t,v){const f=t.toFixed(v);return Number.parseFloat(f).toString()}function Te(t,v,f){const l=I(t.r,f),x=I(t.g,f),s=I(t.b,f),C=t.a!==void 0?I(t.a,f):void 0;return v?`rgba(${l}, ${x}, ${s}, ${C})`:`rgb(${l}, ${x}, ${s})`}const Ke=["id","aria-label"],ze=["aria-description","aria-valuetext"],Le=["aria-valuenow","aria-label","aria-description"],De=["aria-label","aria-valuenow","aria-description"],Pe={class:"color-picker--footer flex w-full flex-1 gap-2"},Me={class:"color-picker--preview-wrapper bg-transparency-squares relative aspect-square h-[calc(var(--slider-size)*3)] rounded-full shadow-xs"},Be={class:"color-picker--input-group flex flex-1 items-center gap-2"},Ie={class:"color-picker--save-cancel-group flex w-full items-center justify-center gap-2"},fe=`
	slider
	no-touch-action
	h-4
	w-full
	relative
	flex
`,J=`
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
`,ra=Object.assign({name:"WColorPicker"},{__name:"WColorPicker",props:se({id:{type:String,required:!1},label:{type:String,required:!1},allowAlpha:{type:Boolean,required:!1,default:!0},stringPrecision:{type:Number,required:!1,default:3},customRepresentation:{type:Object,required:!1,default:void 0},border:{type:Boolean,required:!1,default:!0},copyTransform:{type:Function,required:!1,default:(t,v)=>v},valid:{type:Boolean,required:!1,default:!0}},{modelValue:{type:Object,required:!1,default:()=>({r:0,g:0,b:0})},modelModifiers:{},tempValue:{type:null,required:!1,default:()=>{}},tempValueModifiers:{}}),emits:se(["save","cancel"],["update:modelValue","update:tempValue"]),setup(t,{emit:v}){const f=Re(),l=xe(),x=v,s=t,C=ke(s),N=l("color-picker.aria.description"),E=oe(t,"modelValue",{type:Object,required:!1,default:()=>({r:0,g:0,b:0})}),y=oe(t,"tempValue",{type:null,required:!1,default:()=>{}}),T=V(null),K=V(null),A=V(null);let j=null,Q=null,Z=null;const F={hue:{el:K,xKey:"h",xSteps:360},alpha:{el:A,xSteps:1,xKey:"a"},all:{el:T,xSteps:100,ySteps:100,xKey:"s",yKey:"v"}},o=Ee({percent:{h:0,s:0,v:0,a:0},val:{h:0,s:0,v:0,a:0}}),_=M(()=>{const e=W(o.val,s.allowAlpha);return e||U(),e}),ee=M(()=>{const e=_.value;return e||U(),`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`}),$=M(()=>s.customRepresentation?s.customRepresentation.fromHsvaToString({...o.val},s.allowAlpha):Te(_.value,s.allowAlpha,s.stringPrecision)),R=V($.value);function ve(){R.value!==$.value&&(R.value=$.value)}function me(e,a){if(!j)return;const r=j,{height:n,width:m}=e;r.clearRect(0,0,m,n);const u=r.createLinearGradient(0,0,0,n);u.addColorStop(0,"white"),u.addColorStop(1,"black");const p=r.createLinearGradient(0,0,m,0);p.addColorStop(0,`hsla(${a} 100% 50% / 0)`),p.addColorStop(1,`hsla(${a} 100% 50% /1)`),r.fillStyle=u,r.fillRect(0,0,m,n),r.fillStyle=p,r.globalCompositeOperation="multiply",r.fillRect(0,0,m,n),r.globalCompositeOperation="source-over"}function ae(e,a,r,n=360){if(!a)return;const{height:m,width:u}=e;a.clearRect(0,0,u,m);const p=we(r)?r.length-1:n,c=a.createLinearGradient(0,0,u,0);for(let i=0;i<p+1;i++){const b=r instanceof Function?r(i):r[i];b===void 0&&U(),c.addColorStop(i/p,b)}a.fillStyle=c,a.fillRect(0,0,u,m)}function re(e,a,r=100,n=100,m=!1){const u=e/a,p=u*r,c=Math.round(p*n)/n,i=r===n?c:Math.round(u*100*n)/n,b={val:c,percent:i};return m&&(b.val=r-c),b}const z=V("");let L=!1;function H(e,a){requestAnimationFrame(()=>{if(a==="")return;const r=F[a]?.el.value;if(!r||!F[a])return;const{x:n,y:m,width:u,height:p}=r.getBoundingClientRect(),c=F[a];if(c.xKey!==void 0){let i=e.clientX-n;i=i<0?0:i>u?u:i;const b=re(i,u,c.xSteps??100);o.percent[c.xKey]=b.percent,o.val[c.xKey]=b.val}if(c.yKey!==void 0){let i=e.clientY-m;i=i<0?0:i>p?p:i;const b=re(i,p,c.ySteps??100,100,!0);o.percent[c.yKey]=b.percent,o.val[c.yKey]=b.val}})}const h={keydown:(e,a)=>{if(be(e.target),e.target?.getBoundingClientRect){if(["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"].includes(e.key)){e.preventDefault();const{x:r,y:n,width:m,height:u}=e.target.getBoundingClientRect();let p=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0,c=e.key==="ArrowUp"?-1:e.key==="ArrowDown"?1:0;e.shiftKey&&(p*=10),e.shiftKey&&(c*=10),H({clientX:r+m/2+p,clientY:n+u/2+c},a)}e.key==="Enter"&&(e.preventDefault(),le())}},pointerdown:(e,a)=>{const r=`#${C} .color-picker--${a}-handle`,n=document.querySelector(r);n instanceof HTMLElement&&n.focus(),!L&&(e.preventDefault(),z.value=a,L=!0,document.addEventListener("pointermove",h.pointermove),document.addEventListener("pointerup",h.pointerup),H(e,z.value))},pointerleave:e=>{L&&e.preventDefault()},pointermove:e=>{e.preventDefault(),H(e,z.value)},pointerup:e=>{e.preventDefault(),L=!1,z.value="",document.removeEventListener("pointermove",h.pointermove),document.removeEventListener("pointerup",h.pointerup)}};function O(e){if(A.value){const a=new q("hsv",[e.h,e.s,e.v],e.a).to("hsl"),r=a.clone();r.alpha=0;const n=a.clone();n.alpha=1,ae(A.value,Z,[r.toString(),n.toString()])}ae(K.value,Q,a=>`hsl(${a} 100% 50%)`),me(T.value,e.h)}function te(e){o.percent.h=Math.round(e.h/360*1e4)/100,o.percent.s=e.s,o.percent.v=100-e.v,o.percent.a=s.allowAlpha&&e.a!==void 0?e.a*100:1,o.val={...e,a:s.allowAlpha?e.a:1}}function D(e){const a=pe(e,s.allowAlpha);a&&(O(a),te(a))}function le(){const e=W(o.val,s.allowAlpha);e&&(E.value=e,y.value=void 0,x("save",e))}function ge(e){const a=e.target?.value,r=s.customRepresentation?.fromStringToHsva?s.customRepresentation.fromStringToHsva(a):pe(a,s.allowAlpha);r&&(O(r),te(r))}let X=!1;Ve(()=>{D(E.value),y.value!==void 0&&D(y.value);const e=document.querySelector(`#${C} .color-picker--all-handle`);e instanceof HTMLElement&&e.focus(),j=T.value?.getContext("2d")??null,Q=K.value?.getContext("2d")??null,Z=A.value?.getContext("2d")??null}),Y(E,()=>{D(E.value)}),Y(y,()=>{y.value!==void 0&&(X=!0,D(y.value),setTimeout(()=>{X=!1},0))}),Y(o,()=>{if(O(o.val),R.value=$.value,X)return;const e=W(o.val,s.allowAlpha);e&&(y.value=e)});const he=M(()=>o.percent.v<50||o.val.a===void 0||o.val.a<.5);return(e,a)=>(ce(),ne("div",{id:d(C),"aria-label":d(l)("color-picker.aria"),class:k(d(Se)(`color-picker
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
		`,t.border&&`
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
		`),onPointerdown:a[1]||(a[1]=r=>h.pointerdown(r,"all")),onPointerleave:a[2]||(a[2]=r=>h.pointerleave(r))},[g("canvas",{class:"size-full shadow-xs shadow-black/50 rounded-sm",ref_key:"pickerEl",ref:T},null,512),g("div",{role:"slider","aria-description":d(N),"aria-valuetext":`${d(l)("color-picker.aria.saturation")}: ${o.percent.s}, ${d(l)("color-picker.aria.value")}: ${o.percent.v}`,class:k(`
					color-picker--all-handle
					${J}
					border-[var(--fg)]
					hover:shadow-black
					active:shadow-black
				`),tabindex:"0",style:P(`
					left: calc(${o.percent.s}% - var(--slider-size)/2);
					top: calc(${o.percent.v}% - var(--slider-size)/2);
					background: ${ee.value};
				`),onKeydown:a[0]||(a[0]=r=>h.keydown(r,"all"))},null,46,ze)],32),g("div",{class:k(`color-picker--hue-slider ${fe}`),onPointerdown:a[4]||(a[4]=r=>h.pointerdown(r,"hue"))},[g("canvas",{class:"size-full shadow-xs shadow-black/50 rounded-sm",ref_key:"hueSliderEl",ref:K},null,512),g("div",{role:"slider","aria-valuenow":`${o.percent.h}`,"aria-valuemin":0,"aria-valuemax":100,"aria-label":d(l)("color-picker.aria.hue"),"aria-description":d(N),tabindex:"0",class:k(`
				color-picker--hue-handle
				${J}
			`),style:P(`left: calc(${o.percent.h}% - var(--slider-size)/2)`),onKeydown:a[3]||(a[3]=r=>h.keydown(r,"hue"))},null,46,Le)],34),t.allowAlpha?(ce(),ne("div",{key:0,class:k(`
			color-picker--alpha-slider
			${fe}
		`),onPointerdown:a[6]||(a[6]=r=>h.pointerdown(r,"alpha"))},[g("canvas",{class:"size-full shadow-xs shadow-black/50 rounded-sm bg-transparency-squares",ref_key:"alphaSliderEl",ref:A},null,512),g("div",{role:"slider","aria-label":d(l)("color-picker.aria.alpha-slider"),"aria-valuenow":`${o.percent.a}`,"aria-valuemin":0,"aria-valuemax":100,"aria-description":d(N),tabindex:"0",class:k(`color-picker--alpha-handle ${J}`),style:P(`left: calc(${o.percent.a}% - var(--slider-size)/2)`),onKeydown:a[5]||(a[5]=r=>h.keydown(r,"alpha"))},null,46,De)],34)):qe("",!0),g("div",Pe,[g("div",Me,[g("div",{class:"color-picker--footer--preview size-full rounded-full border-2 border-neutral-600 dark:border-neutral-300",style:P(`background: ${ee.value}`)},null,4)]),g("div",Be,[ie(e.$slots,"input",{},()=>[S(Ae,{valid:t.valid,class:"color-picker--input w-full","aria-label":t.label,modelValue:R.value,"onUpdate:modelValue":a[7]||(a[7]=r=>R.value=r),onInput:ge,onBlur:ve},null,8,["valid","aria-label","modelValue"]),S(G,{class:"color-picker--copy-button","aria-label":d(l)("copy"),onClick:a[8]||(a[8]=r=>d($e)(t.copyTransform?.(o.val,$.value)??$.value))},{default:B(()=>[S(Ce,null,{default:B(()=>[S(d(ye))]),_:1})]),_:1},8,["aria-label"])])])]),ie(e.$slots,"buttons",{},()=>[g("div",Ie,[S(G,{class:"color-picker--save-button",onClick:a[9]||(a[9]=r=>le())},{default:B(()=>[ue(de(d(l)("save")),1)]),_:1}),S(G,{class:"color-picker--cancel-button",onClick:a[10]||(a[10]=r=>x("cancel"))},{default:B(()=>[ue(de(d(l)("cancel")),1)]),_:1})])])],10,Ke))}});export{ra as default};
