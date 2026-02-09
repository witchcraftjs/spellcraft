import{a0 as V,J as ge,I as he,K as te,i as R,o as be,a1 as U,x as re,y as le,z as h,Z as D,$ as k,Q as p,R as me,W as oe,V as we,N as ne,k as P,O as ye,a2 as ke,a3 as $e,a4 as xe,a5 as X,B as S,a6 as Se,C as B,a7 as Ce,a8 as Ae,T as G,D as ie,A as se}from"./CW93qMzb.js";import{I as Re}from"./SDgxQVS6.js";function w(r,d,u){return r<=d?d:r>=u?u:r}function ce(r,d){try{const u=typeof r=="string"?new V(r):new V("srgb",[r.r/255,r.g/255,r.b/255],d?r.a:1),l=u.hsv;return!l||l[1]===void 0||l[2]===void 0?void 0:{h:w(l[0]??0,0,Number.MAX_SAFE_INTEGER),s:w(l[1],0,100),v:w(l[2],0,100),a:w(d?u.alpha:1,0,1)}}catch{return}}function Y(r,d){try{const u=typeof r=="string"?new V(r):new V("hsv",[r.h,r.s,r.v],d?r.a:1),l=u.srgb;return!l||l[0]===void 0||l[1]===void 0||l[2]===void 0?void 0:{r:w(l[0]/1*255,0,255),g:w(l[1]/1*255,0,255),b:w(l[2]/1*255,0,255),a:w(d?u.alpha:1,0,1)}}catch{return}}function I(r,d){const u=r.toFixed(d);return Number.parseFloat(u).toString()}function Ve(r,d,u){const l=I(r.r,u),$=I(r.g,u),i=I(r.b,u),C=r.a!==void 0?I(r.a,u):void 0;return d?`rgba(${l}, ${$}, ${i}, ${C})`:`rgb(${l}, ${$}, ${i})`}const qe=["id","aria-label"],Ee=["aria-description","aria-label"],Te=["aria-valuenow","aria-label","aria-description"],Ke=["aria-label","aria-valuenow","aria-description"],ze={class:"color-picker--footer flex w-full flex-1 gap-2"},De={class:"color-picker--preview-wrapper bg-transparency-squares relative aspect-square h-[calc(var(--slider-size)*3)] rounded-full shadow-xs"},Pe={class:"color-picker--input-group flex flex-1 items-center gap-2"},Be={class:"color-picker--save-cancel-group flex w-full items-center justify-center gap-2"},ue=`
	slider
	no-touch-action
	h-4
	w-full
	relative
	flex
`,W=`
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
`,Le=Object.assign({name:"LibColorPicker"},{__name:"WColorPicker",props:ne({label:{type:String,required:!1},id:{type:String,required:!1},allowAlpha:{type:Boolean,required:!1,default:!0},stringPrecision:{type:Number,required:!1,default:3},customRepresentation:{type:Object,required:!1,default:void 0},border:{type:Boolean,required:!1,default:!0},copyTransform:{type:Function,required:!1,default:(r,d)=>d},valid:{type:Boolean,required:!1,default:!0}},{modelValue:{type:Object,required:!1,default:()=>({r:0,g:0,b:0})},modelModifiers:{},tempValue:{type:null,required:!1,default:()=>{}},tempValueModifiers:{}}),emits:ne(["save","cancel"],["update:modelValue","update:tempValue"]),setup(r,{emit:d}){const u=ge(),l=he(),$=d,i=r,C=l("color-picker.aria.description"),M=ye(),q=te(r,"modelValue",{type:Object,required:!1,default:()=>({r:0,g:0,b:0})}),y=te(r,"tempValue",{type:null,required:!1,default:()=>{}}),L=R(null),N=R(null),E=R(null),F={hue:{el:N,xKey:"h",xSteps:360},alpha:{el:E,xSteps:1,xKey:"a"},all:{el:L,xSteps:100,ySteps:100,xKey:"s",yKey:"v"}},o=ke({percent:{h:0,s:0,v:0,a:0},val:{h:0,s:0,v:0,a:0}}),J=P(()=>{const e=Y(o.val,i.allowAlpha);return e||X(),e}),Q=P(()=>{const e=J.value;return e||X(),`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`}),x=P(()=>i.customRepresentation?i.customRepresentation.fromHsvaToString({...o.val},i.allowAlpha):Ve(J.value,i.allowAlpha,i.stringPrecision)),A=R(x.value);function de(){A.value!==x.value&&(A.value=x.value)}function ve(e,a){const t=e.getContext("2d"),{height:n,width:g}=e;t.clearRect(0,0,g,n);const v=t.createLinearGradient(0,0,0,n);v.addColorStop(0,"white"),v.addColorStop(1,"black");const f=t.createLinearGradient(0,0,g,0);f.addColorStop(0,`hsla(${a} 100% 50% / 0)`),f.addColorStop(1,`hsla(${a} 100% 50% /1)`),t.fillStyle=v,t.fillRect(0,0,g,n),t.fillStyle=f,t.globalCompositeOperation="multiply",t.fillRect(0,0,g,n),t.globalCompositeOperation="source-over"}function Z(e,a,t=360){const n=e.getContext("2d"),{height:g,width:v}=e;n.clearRect(0,0,v,g);const f=xe(a)?a.length-1:t,c=n.createLinearGradient(0,0,v,0);for(let s=0;s<f+1;s++){const m=a instanceof Function?a(s):a[s];m===void 0&&X(),c.addColorStop(s/f,m)}n.fillStyle=c,n.fillRect(0,0,v,g)}function _(e,a,t=100,n=100,g=!1){const v=e/a,f=v*t,c=Math.round(f*n)/n,s=t===n?c:Math.round(v*100*n)/n,m={val:c,percent:s};return g&&(m.val=t-c),m}const T=R("");let K=!1;function j(e,a){requestAnimationFrame(()=>{if(a==="")return;const t=F[a]?.el.value;if(!t||!F[a])return;const{x:n,y:g,width:v,height:f}=t.getBoundingClientRect(),c=F[a];if(c.xKey!==void 0){let s=e.clientX-n;s=s<0?0:s>v?v:s;const m=_(s,v,c.xSteps??100);o.percent[c.xKey]=m.percent,o.val[c.xKey]=m.val}if(c.yKey!==void 0){let s=e.clientY-g;s=s<0?0:s>f?f:s;const m=_(s,f,c.ySteps??100,100,!0);o.percent[c.yKey]=m.percent,o.val[c.yKey]=m.val}})}const b={keydown:(e,a)=>{if($e(e.target),e.target?.getBoundingClientRect){if(["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"].includes(e.key)){e.preventDefault();const{x:t,y:n,width:g,height:v}=e.target.getBoundingClientRect();let f=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0,c=e.key==="ArrowUp"?-1:e.key==="ArrowDown"?1:0;e.shiftKey&&(f*=10),e.shiftKey&&(c*=10),j({clientX:t+g/2+f,clientY:n+v/2+c},a)}e.key==="Enter"&&(e.preventDefault(),ae())}},pointerdown:(e,a)=>{const t=`#${i.id??M} .color-picker--${a}-handle`,n=document.querySelector(t);n instanceof HTMLElement&&n.focus(),!K&&(e.preventDefault(),T.value=a,K=!0,document.addEventListener("pointermove",b.pointermove),document.addEventListener("pointerup",b.pointerup),j(e,T.value))},pointerleave:e=>{K&&e.preventDefault()},pointermove:e=>{e.preventDefault(),j(e,T.value)},pointerup:e=>{e.preventDefault(),K=!1,T.value="",document.removeEventListener("pointermove",b.pointermove),document.removeEventListener("pointerup",b.pointerup)}};function H(e){if(E.value){const a=new V("hsv",[e.h,e.s,e.v],e.a).to("hsl"),t=a.clone();t.alpha=0;const n=a.clone();n.alpha=1,Z(E.value,[t.toString(),n.toString()])}Z(N.value,a=>`hsl(${a} 100% 50%)`),ve(L.value,e.h)}function ee(e){o.percent.h=Math.round(e.h/360*1e4)/100,o.percent.s=e.s,o.percent.v=100-e.v,o.percent.a=i.allowAlpha&&e.a!==void 0?e.a*100:1,o.val={...e,a:i.allowAlpha?e.a:1}}function z(e){const a=ce(e,i.allowAlpha);a&&(H(a),ee(a))}function ae(){const e=Y(o.val,i.allowAlpha);e&&(q.value=e,y.value=void 0,$("save",e))}function pe(e){const a=e.target?.value,t=i.customRepresentation?.fromStringToHsva?i.customRepresentation.fromStringToHsva(a):ce(a,i.allowAlpha);t&&(H(t),ee(t))}let O=!1;be(()=>{z(q.value),y.value!==void 0&&z(y.value);const e=document.querySelector(`#${i.id??M} .color-picker--all-handle`);e instanceof HTMLElement&&e.focus()}),U(q,()=>{z(q.value)}),U(y,()=>{y.value!==void 0&&(O=!0,z(y.value),setTimeout(()=>{O=!1},0))}),U(o,()=>{if(H(o.val),A.value=x.value,O)return;const e=Y(o.val,i.allowAlpha);e&&(y.value=e)});const fe=P(()=>o.percent.v<50||o.val.a===void 0||o.val.a<.5);return(e,a)=>(re(),le("div",{id:r.id??p(M),"aria-label":p(l)("color-picker.aria"),class:k(p(we)(`color-picker
			[--slider-size:calc(var(--spacing)_*_4)]
			[--contrast-dark:var(--color-neutral-100)]
			[--contrast-light:var(--color-neutral-800)]
			[--fg:rgb(var(--contrast-dark))]
			[--bg:rgb(var(--contrast-light))]
			max-w-[300px]
			flex flex-col items-center justify-center
			bg-neutral-50
			dark:bg-neutral-950
			gap-3
			p-3
		`,fe.value&&`
			[--fg:rgb(var(--contrast-light))]
			[--bg:rgb(var(--contrast-dark))]
		`,r.border&&`
			border rounded-sm border-neutral-600
		`,p(u)?.class))},[h("div",{class:k(`color-picker--all-picker
			no-touch-action
			w-full
			aspect-square
			relative
			flex
			rounded-sm
			focus:border-accent-500
		`),onPointerdown:a[1]||(a[1]=t=>b.pointerdown(t,"all")),onPointerleave:a[2]||(a[2]=t=>b.pointerleave(t))},[h("canvas",{class:"size-full shadow-xs shadow-black/50 rounded-sm",ref_key:"pickerEl",ref:L},null,512),h("div",{"aria-live":"assertive","aria-description":p(C),"aria-label":`${p(l)("color-picker.aria.saturation")}: ${o.percent.s}, ${p(l)("color-picker.aria.value")}: ${o.percent.s}`,class:k(`
					color-picker--all-handle
					${W}
					border-[var(--fg)]
					hover:shadow-black
					active:shadow-black
				`),tabindex:"0",style:D(`
					left: calc(${o.percent.s}% - var(--slider-size)/2);
					top: calc(${o.percent.v}% - var(--slider-size)/2);
					background: ${Q.value};
				`),onKeydown:a[0]||(a[0]=t=>b.keydown(t,"all"))},null,46,Ee)],32),h("div",{class:k(`color-picker--hue-slider ${ue}`),onPointerdown:a[4]||(a[4]=t=>b.pointerdown(t,"hue"))},[h("canvas",{class:"size-full shadow-xs shadow-black/50 rounded-sm",ref_key:"hueSliderEl",ref:N},null,512),h("div",{role:"slider","aria-valuenow":`${o.percent.h}`,"aria-valuemin":0,"aria-valuemax":100,"aria-label":p(l)("color-picker.aria.hue"),"aria-description":p(C),tabindex:"0",class:k(`
				color-picker--hue-handle
				${W}
			`),style:D(`left: calc(${o.percent.h}% - var(--slider-size)/2)`),onKeydown:a[3]||(a[3]=t=>b.keydown(t,"hue"))},null,46,Te)],34),r.allowAlpha?(re(),le("div",{key:0,class:k(`
			color-picker--alpha-slider
			${ue}
		`),onPointerdown:a[6]||(a[6]=t=>b.pointerdown(t,"alpha"))},[h("canvas",{class:"size-full shadow-xs shadow-black/50 rounded-sm bg-transparency-squares",ref_key:"alphaSliderEl",ref:E},null,512),h("div",{role:"slider","aria-label":p(l)("color-picker.aria.alpha-slider"),"aria-valuenow":`${o.percent.h}`,"aria-valuemin":0,"aria-valuemax":100,"aria-description":p(C),tabindex:"0",class:k(`color-picker--alpha-handle ${W}`),style:D(`left: calc(${o.percent.a}% - var(--slider-size)/2)`),onKeydown:a[5]||(a[5]=t=>b.keydown(t,"alpha"))},null,46,Ke)],34)):me("",!0),h("div",ze,[h("div",De,[h("div",{class:"color-picker--footer--preview size-full rounded-full border-2 border-neutral-600 dark:border-neutral-300",style:D(`background: ${Q.value}`)},null,4)]),h("div",Pe,[oe(e.$slots,"input",{},()=>[S(Se,{valid:r.valid,class:"color-picker--input w-full","aria-label":r.label,modelValue:A.value,"onUpdate:modelValue":a[7]||(a[7]=t=>A.value=t),onInput:pe,onBlur:de},null,8,["valid","aria-label","modelValue"]),S(G,{class:"color-picker--copy-button","aria-label":p(l)("copy"),onClick:a[8]||(a[8]=t=>p(Ae)(r.copyTransform?.(o.val,x.value)??x.value))},{default:B(()=>[S(Ce,null,{default:B(()=>[S(p(Re))]),_:1})]),_:1},8,["aria-label"])])])]),oe(e.$slots,"buttons",{},()=>[h("div",Be,[S(G,{class:"color-picker--save-button",onClick:a[9]||(a[9]=t=>ae())},{default:B(()=>[ie(se(p(l)("save")),1)]),_:1}),S(G,{class:"color-picker--cancel-button",onClick:a[10]||(a[10]=t=>$("cancel"))},{default:B(()=>[ie(se(p(l)("cancel")),1)]),_:1})])])],10,qe))}});export{Le as default};
