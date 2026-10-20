import{r as e}from"./DiNi8asB.js";import{$ as t,D as n,E as r,Ft as i,Ht as a,Nt as o,On as s,Zn as c,_ as l,b as u,ct as ee,er as d,g as f,gn as te,mt as p,qt as m,tr as h,vn as g,xt as _,y as ne}from"./B8D2lM98.js";import{t as v}from"./BwZvZm7q.js";import{t as re}from"./d78yy0w7.js";import{n as y}from"./DIaa6uKV.js";import{t as ie}from"./ClJo4eSk.js";import{t as ae}from"./Cxk7Ihgk.js";import{n as oe}from"./C7z5MQPz.js";import{t as b}from"./DZhkxGZv.js";import{t as x}from"./B_w-8Dgt.js";import{t as se}from"./DLNmc5u_.js";import{t as ce}from"./BOwmyn0k.js";import{t as le}from"./7pH3781W.js";import{t as S}from"./Dsx2eH-Y.js";import{t as ue}from"./B4nctGtP.js";function C(e,t){try{let n=typeof e==`string`?new x(e):new x(`srgb`,[e.r/255,e.g/255,e.b/255],t?e.a:1),r=n.hsv;return!r||r[1]===void 0||r[2]===void 0?void 0:{h:S(r[0]??0,0,2**53-1),s:S(r[1],0,100),v:S(r[2],0,100),a:S(t?n.alpha:1,0,1)}}catch{return}}function w(e,t){try{let n=typeof e==`string`?new x(e):new x(`hsv`,[e.h,e.s,e.v],t?e.a:1),r=n.srgb;return!r||r[0]===void 0||r[1]===void 0||r[2]===void 0?void 0:{r:S(r[0]/1*255,0,255),g:S(r[1]/1*255,0,255),b:S(r[2]/1*255,0,255),a:S(t?n.alpha:1,0,1)}}catch{return}}function T(e,t){let n=e.toFixed(t);return Number.parseFloat(n).toString()}function de(e,t,n){let r=T(e.r,n),i=T(e.g,n),a=T(e.b,n),o=e.a===void 0?void 0:T(e.a,n);return t?`rgba(${r}, ${i}, ${a}, ${o})`:`rgb(${r}, ${i}, ${a})`}var E=e({default:()=>k}),fe=[`id`,`aria-label`],pe=[`aria-description`,`aria-valuetext`],me=[`aria-valuenow`,`aria-label`,`aria-description`],he=[`aria-label`,`aria-valuenow`,`aria-description`],ge={class:`color-picker--footer flex w-full flex-1 gap-2`},_e={class:`color-picker--preview-wrapper bg-transparency-squares relative aspect-square h-[calc(var(--slider-size,var(--_slider-size))*3)] rounded-full shadow-xs`},ve={class:`color-picker--input-group flex flex-1 items-center gap-2`},ye={class:`color-picker--save-cancel-group flex w-full items-center justify-center gap-2`},D=`
	slider
	no-touch-action
	h-4
	w-full
	relative
	flex
`,O=`
	handle
	h-[var(--slider-size,var(--_slider-size))]
	w-[var(--slider-size,var(--_slider-size))]
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
`,k=Object.assign({name:`WColorPicker`},{__name:`WColorPicker`,props:t({id:{type:String,required:!1},label:{type:String,required:!1},allowAlpha:{type:Boolean,required:!1,default:!0},stringPrecision:{type:Number,required:!1,default:3},customRepresentation:{type:Object,required:!1,default:void 0},border:{type:Boolean,required:!1,default:!0},copyTransform:{type:Function,required:!1,default:(e,t)=>t},valid:{type:Boolean,required:!1,default:!0}},{modelValue:{type:Object,required:!1,default:()=>({r:0,g:0,b:0})},modelModifiers:{},tempValue:{type:null,required:!1,default:()=>void 0},tempValueModifiers:{}}),emits:t([`save`,`cancel`],[`update:modelValue`,`update:tempValue`]),setup(e,{emit:t}){let S=o(),T=re(),E=t,k=e,A=ae(k),j=T(`color-picker.aria.description`),M=i(e,`modelValue`,{type:Object,required:!1,default:()=>({r:0,g:0,b:0})}),N=i(e,`tempValue`,{type:null,required:!1,default:()=>void 0}),P=g(null),F=g(null),I=g(null),L=null,R=null,z=null,B={hue:{el:F,xKey:`h`,xSteps:360},alpha:{el:I,xSteps:1,xKey:`a`},all:{el:P,xSteps:100,ySteps:100,xKey:`s`,yKey:`v`}},V=te({percent:{h:0,s:0,v:0,a:0},val:{h:0,s:0,v:0,a:0}}),H=f(()=>{let e=w(V.val,k.allowAlpha);return e||b(),e}),U=f(()=>{let e=H.value;return e||b(),`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`}),W=f(()=>k.customRepresentation?k.customRepresentation.fromHsvaToString({...V.val},k.allowAlpha):de(H.value,k.allowAlpha,k.stringPrecision)),G=g(W.value);function be(){G.value!==W.value&&(G.value=W.value)}function xe(e,t){if(!L)return;let n=L,{height:r,width:i}=e;n.clearRect(0,0,i,r);let a=n.createLinearGradient(0,0,0,r);a.addColorStop(0,`white`),a.addColorStop(1,`black`);let o=n.createLinearGradient(0,0,i,0);o.addColorStop(0,`hsla(${t} 100% 50% / 0)`),o.addColorStop(1,`hsla(${t} 100% 50% /1)`),n.fillStyle=a,n.fillRect(0,0,i,r),n.fillStyle=o,n.globalCompositeOperation=`multiply`,n.fillRect(0,0,i,r),n.globalCompositeOperation=`source-over`}function K(e,t,n,r=360){if(!t)return;let{height:i,width:a}=e;t.clearRect(0,0,a,i);let o=le(n)?n.length-1:r,s=t.createLinearGradient(0,0,a,0);for(let e=0;e<o+1;e++){let t=n instanceof Function?n(e):n[e];t===void 0&&b(),s.addColorStop(e/o,t)}t.fillStyle=s,t.fillRect(0,0,a,i)}function Se(e,t,n=100,r=100,i=!1){let a=e/t,o=a*n,s=Math.round(o*r)/r,c={val:s,percent:n===r?s:Math.round(a*100*r)/r};return i&&(c.val=n-s),c}let q=g(``),J=!1;function Y(e,t){requestAnimationFrame(()=>{if(t===``)return;let n=B[t]?.el.value;if(!n||!B[t])return;let{x:r,y:i,width:a,height:o}=n.getBoundingClientRect(),s=B[t];if(s.xKey!==void 0){let t=e.clientX-r;t=t<0?0:t>a?a:t;let n=Se(t,a,s.xSteps??100);V.percent[s.xKey]=n.percent,V.val[s.xKey]=n.val}if(s.yKey!==void 0){let t=e.clientY-i;t=t<0?0:t>o?o:t;let n=Se(t,o,s.ySteps??100,100,!0);V.percent[s.yKey]=n.percent,V.val[s.yKey]=n.val}})}let X={keydown:(e,t)=>{if(se(e.target),e.target?.getBoundingClientRect){if([`ArrowRight`,`ArrowLeft`,`ArrowUp`,`ArrowDown`].includes(e.key)){e.preventDefault();let{x:n,y:r,width:i,height:a}=e.target.getBoundingClientRect(),o=e.key===`ArrowRight`?1:e.key===`ArrowLeft`?-1:0,s=e.key===`ArrowUp`?-1:+(e.key===`ArrowDown`);e.shiftKey&&(o*=10),e.shiftKey&&(s*=10),Y({clientX:n+i/2+o,clientY:r+a/2+s},t)}e.key===`Enter`&&(e.preventDefault(),we())}},pointerdown:(e,t)=>{let n=`#${A} .color-picker--${t}-handle`,r=document.querySelector(n);r instanceof HTMLElement&&r.focus(),!J&&(e.preventDefault(),q.value=t,J=!0,document.addEventListener(`pointermove`,X.pointermove),document.addEventListener(`pointerup`,X.pointerup),Y(e,q.value))},pointerleave:e=>{J&&e.preventDefault()},pointermove:e=>{e.preventDefault(),Y(e,q.value)},pointerup:e=>{e.preventDefault(),J=!1,q.value=``,document.removeEventListener(`pointermove`,X.pointermove),document.removeEventListener(`pointerup`,X.pointerup)}};function Z(e){if(I.value){let t=new x(`hsv`,[e.h,e.s,e.v],e.a).to(`hsl`),n=t.clone();n.alpha=0;let r=t.clone();r.alpha=1,K(I.value,z,[n.toString(),r.toString()])}K(F.value,R,e=>`hsl(${e} 100% 50%)`),xe(P.value,e.h)}function Ce(e){V.percent.h=Math.round(e.h/360*1e4)/100,V.percent.s=e.s,V.percent.v=100-e.v,V.percent.a=k.allowAlpha?e.a===void 0?1:e.a*100:1,V.val={...e,a:k.allowAlpha?e.a:1}}function Q(e){let t=C(e,k.allowAlpha);t&&(Z(t),Ce(t))}function we(){let e=w(V.val,k.allowAlpha);e&&(M.value=e,N.value=void 0,E(`save`,e))}function Te(e){let t=e.target?.value,n=k.customRepresentation?.fromStringToHsva?k.customRepresentation.fromStringToHsva(t):C(t,k.allowAlpha);n&&(Z(n),Ce(n))}let $=!1;ee(()=>{Q(M.value),N.value!==void 0&&Q(N.value);let e=document.querySelector(`#${A} .color-picker--all-handle`);e instanceof HTMLElement&&e.focus(),L=P.value?.getContext(`2d`)??null,R=F.value?.getContext(`2d`)??null,z=I.value?.getContext(`2d`)??null}),a(M,()=>{Q(M.value)}),a(N,()=>{N.value!==void 0&&($=!0,Q(N.value),setTimeout(()=>{$=!1},0))}),a(V,()=>{if(Z(V.val),G.value=W.value,$)return;let e=w(V.val,k.allowAlpha);e&&(N.value=e)});let Ee=f(()=>V.percent.v<50||V.val.a===void 0||V.val.a<.5);return(t,i)=>(p(),u(`div`,{id:s(A),"aria-label":s(T)(`color-picker.aria`),class:c(s(v)(`color-picker
			[--_slider-size:calc(var(--spacing)_*_4)]
			[--_contrast-dark:var(--color-neutral-100)]
			[--_contrast-light:var(--color-neutral-800)]
			[--_fg:rgb(var(--_contrast-dark))]
			[--_bg:rgb(var(--_contrast-light))]
			[--slider-size:calc(var(--spacing)_*_4)]
			[--contrast-dark:var(--color-neutral-100)]
			[--contrast-light:var(--color-neutral-800)]
			[--fg:rgb(var(--contrast-dark,var(--_contrast-dark)))]
			[--bg:rgb(var(--contrast-light,var(--_contrast-light)))]
			max-w-[300px]
			flex flex-col items-center justify-center
			bg-neutral-50
			dark:bg-neutral-800
			gap-3
			p-3
		`,Ee.value&&`
			[--fg:rgb(var(--contrast-light,var(--_contrast-light)))]
			[--bg:rgb(var(--contrast-dark,var(--_contrast-dark)))]
			[--_fg:rgb(var(--_contrast-light))]
			[--_bg:rgb(var(--_contrast-dark))]
		`,e.border&&`
			border
			rounded-sm
			border-neutral-300
			dark:border-neutral-900
			shadow-md
			shadow-black/30
		`,s(S)?.class))},[l(`div`,{class:c(`color-picker--all-picker
			no-touch-action
			w-full
			aspect-square
			relative
			flex
			rounded-sm
			focus:border-accent-500
		`),onPointerdown:i[1]||=e=>X.pointerdown(e,`all`),onPointerleave:i[2]||=e=>X.pointerleave(e)},[l(`canvas`,{class:`size-full shadow-xs shadow-black/50 rounded-sm`,ref_key:`pickerEl`,ref:P},null,512),l(`div`,{role:`slider`,"aria-description":s(j),"aria-valuetext":`${s(T)(`color-picker.aria.saturation`)}: ${V.percent.s}, ${s(T)(`color-picker.aria.value`)}: ${V.percent.v}`,class:c(s(v)(`
					color-picker--all-handle
					${O}
					border-[var(--fg,var(--_fg))]
					hover:shadow-black
					active:shadow-black
				`)),tabindex:`0`,style:d(`
					left: calc(${V.percent.s}% - var(--slider-size,var(--_slider-size))/2);
					top: calc(${V.percent.v}% - var(--slider-size,var(--_slider-size))/2);
					background: ${U.value};
				`),onKeydown:i[0]||=e=>X.keydown(e,`all`)},null,46,pe)],32),l(`div`,{class:c(`color-picker--hue-slider ${D}`),onPointerdown:i[4]||=e=>X.pointerdown(e,`hue`)},[l(`canvas`,{class:`size-full shadow-xs shadow-black/50 rounded-sm`,ref_key:`hueSliderEl`,ref:F},null,512),l(`div`,{role:`slider`,"aria-valuenow":`${V.percent.h}`,"aria-valuemin":0,"aria-valuemax":100,"aria-label":s(T)(`color-picker.aria.hue`),"aria-description":s(j),tabindex:`0`,class:c(`
				color-picker--hue-handle
				${O}
			`),style:d(`left: calc(${V.percent.h}% - var(--slider-size,var(--_slider-size))/2)`),onKeydown:i[3]||=e=>X.keydown(e,`hue`)},null,46,me)],34),e.allowAlpha?(p(),u(`div`,{key:0,class:c(`
			color-picker--alpha-slider
			${D}
		`),onPointerdown:i[6]||=e=>X.pointerdown(e,`alpha`)},[l(`canvas`,{class:`size-full shadow-xs shadow-black/50 rounded-sm bg-transparency-squares`,ref_key:`alphaSliderEl`,ref:I},null,512),l(`div`,{role:`slider`,"aria-label":s(T)(`color-picker.aria.alpha-slider`),"aria-valuenow":`${V.percent.a}`,"aria-valuemin":0,"aria-valuemax":100,"aria-description":s(j),tabindex:`0`,class:c(`color-picker--alpha-handle ${O}`),style:d(`left: calc(${V.percent.a}% - var(--slider-size,var(--_slider-size))/2)`),onKeydown:i[5]||=e=>X.keydown(e,`alpha`)},null,46,he)],34)):ne(``,!0),l(`div`,ge,[l(`div`,_e,[l(`div`,{class:`color-picker--footer--preview size-full rounded-full border-2 border-neutral-600 dark:border-neutral-300`,style:d(`background: ${U.value}`)},null,4)]),l(`div`,ve,[_(t.$slots,`input`,{},()=>[n(oe,{valid:e.valid,class:`color-picker--input w-full`,"aria-label":e.label,modelValue:G.value,"onUpdate:modelValue":i[7]||=e=>G.value=e,onInput:Te,onBlur:be},null,8,[`valid`,`aria-label`,`modelValue`]),n(y,{class:`color-picker--copy-button`,"aria-label":s(T)(`copy`),onClick:i[8]||=t=>s(ce)(e.copyTransform?.(V.val,W.value)??W.value)},{default:m(()=>[n(ie,null,{default:m(()=>[n(s(ue))]),_:1})]),_:1},8,[`aria-label`])])])]),_(t.$slots,`buttons`,{},()=>[l(`div`,ye,[n(y,{class:`color-picker--save-button`,onClick:i[9]||=e=>we()},{default:m(()=>[r(h(s(T)(`save`)),1)]),_:1}),n(y,{class:`color-picker--cancel-button`,onClick:i[10]||=e=>E(`cancel`)},{default:m(()=>[r(h(s(T)(`cancel`)),1)]),_:1})])])],10,fe))}});export{k as n,E as t};