import{r as e}from"./DiNi8asB.js";import{D as t,Ht as n,On as r,Zn as i,_ as a,b as o,bt as s,et as c,fn as l,g as u,it as d,mt as f,o as p,qt as m,tr as h,vn as g,xt as _,y as v,yn as y}from"./B8D2lM98.js";import{w as ee}from"./BC7yJqS7.js";import{t as b}from"./BwZvZm7q.js";import{t as x}from"./d78yy0w7.js";import{n as S}from"./DIaa6uKV.js";import{t as C}from"./ClJo4eSk.js";import{t as te}from"./CRTeuyN8.js";import{t as ne}from"./Cxk7Ihgk.js";var w={style:{"vertical-align":`-0.125em`,height:`1em`,display:`inline-block`,width:`auto`},viewBox:`0 0 24 24`};function T(e,t){return f(),o(`svg`,w,[...t[0]||=[a(`g`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`2`},[a(`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`}),a(`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`})],-1)]])}var E=l({name:`lucide-file`,render:T}),D={style:{"vertical-align":`-0.125em`,height:`1em`,display:`inline-block`,width:`auto`},viewBox:`0 0 24 24`};function O(e,t){return f(),o(`svg`,D,[...t[0]||=[a(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`2`,d:`M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`},null,-1)]])}var k=l({name:`lucide-upload`,render:O}),A=e({default:()=>V}),re=[`for`],ie={class:`text-ellipsis overflow-hidden shrink-1 hidden @min-[15ch]:block`},ae={key:1,class:`file-input--label-count`},oe={key:2,class:`file-input--label-name text-ellipsis overflow-hidden shrink-9999 hidden @3xs:block`},se={key:3,class:`file-input--label-name text-ellipsis overflow-hidden shrink-9999 @3xs:hidden`},ce={key:0,class:`file-input--formats-label flex-col items-center text-sm max-w-full hidden @min-[15ch]:flex`},j={class:`text-ellipsis overflow-hidden max-w-full`},M={class:`file-input--formats-list overflow-hidden text-ellipsis max-w-full`},N=[`id`,`accept`,`multiple`,`aria-invalid`,`aria-errormessage`],P={class:`flex flex-initial basis-full justify-start items-center max-w-full gap-2 px-1`},F=[`title`],I={class:`file-input--preview flex flex-initial basis-full justify-center`},L={key:0,class:`file-input--preview-image bg-transparency-squares flex h-[80px] flex-wrap items-center justify-center`},R=[`src`],z={key:1,class:`file-input--preview-no-image flex h-[80px] flex-1 basis-full flex-wrap items-center justify-center`},B={key:1,class:`file-input--errors flex flex-col gap-2 text-sm text-red-600 dark:text-red-400 items-center px-2`},V=Object.assign({name:`WFileInput`,inheritAttrs:!1},{__name:`WFileInput`,props:{id:{type:String,required:!1},multiple:{type:Boolean,required:!1,default:!1},formats:{type:Array,required:!1,default:()=>[`image/*`,`.jpeg`,`.jpg`,`.png`]},compact:{type:Boolean,required:!1,default:!1},schema:{type:Object,required:!1},inputAttrs:{type:Object,required:!1},wrapperAttrs:{type:Object,required:!1},safeToPreviewMimeTypes:{type:Array,required:!1,default:()=>[`image/jpeg`,`image/jpg`,`image/png`,`image/gif`,`image/webp`,`image/bmp`,`image/x-icon`,`image/vnd.microsoft.icon`,`image/apng`,`image/avif`,`image/jxl`]}},emits:[`input`,`errors`],setup(e,{expose:l,emit:w}){let T=x(),D=g(null),O=e,A=ne(O),V=w,H=y([]),U=g(!1),W=y([]),G=g(!1),K=g(!1),q=g([]);n(H,async()=>{if(K.value=!0,!O.schema||H.length===0){q.value=[],K.value=!1;return}let e=await O.schema[`~standard`].validate(H.map(e=>e.file));if(e&&`issues`in e&&e.issues){K.value=!1,q.value=e.issues.map((e,t)=>({message:e.message,file:H[t]}));return}q.value=[],K.value=!1});let J=u(()=>[...W,...q.value.map(e=>Error(e.message))]);function Y(){D.value&&(D.value.value=``);for(let e of H)e.previewUrl&&URL.revokeObjectURL(e.previewUrl);H.splice(0,H.length)}n([H,K],()=>{K.value||V(`input`,H.map(e=>e.file),Y)}),n([J,K],()=>{K.value||J.value.length>0&&(G.value=!0,V(`errors`,[...J.value],X,Y))});function X(){G.value=!1,W.splice(0,W.length)}let le=u(()=>O.formats?.filter(e=>!e.startsWith(`.`))??[]),Z=u(()=>O.formats?.filter(e=>e.startsWith(`.`))??[]);d(()=>{for(let e of H)e.previewUrl&&URL.revokeObjectURL(e.previewUrl)});function ue(e){e.previewUrl&&URL.revokeObjectURL(e.previewUrl);let t=H.indexOf(e);t>-1&&H.splice(t,1)}let Q=u(()=>Z.value.join(`, `));function de(e){if(`dataTransfer`in e&&e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length>0)return D.value.files=e.dataTransfer.files,e.preventDefault(),U.value=!1,$(D.value.files)}async function fe(e){if(e.preventDefault(),D.value.files)return $(D.value.files)}function $(e){let t=[];for(let n of e){let e=n.type.toLowerCase(),r=O.safeToPreviewMimeTypes.includes(e),i=e.startsWith(`image/`),a=O.formats.length===0,o=le.value.find(e=>e.endsWith(`/*`)?n.type.startsWith(e.slice(0,-2)):e===n.type)!==void 0,s=Z.value.find(e=>n.name.endsWith(e))!==void 0;if(!a&&(!o||!s)){let e=`File type ${n.name.match(/.*(\..*)/)?.[1]??`Unknown`}${n.type===``?``:` (${n.type})`} is not allowed. Allowed file types are: ${Q.value}.`,r=Error(e);r.file=n,r.isValidExtension=s,r.isValidMimeType=o,t.push(r);continue}let c=r?URL.createObjectURL(n):void 0;t.length>0||H.find(e=>e.file===n)||(O.multiple||H.length<1?H.push({file:n,isImg:i,isSafeToPreviewAsImg:r,previewUrl:c}):H.splice(0,H.length,{file:n,isImg:i,isSafeToPreviewAsImg:r,previewUrl:c}))}if(t.length>0)return W.splice(0,W.length,...t),!1;W.length>0&&X()}return l({clearFiles:Y,clearErrors:X}),(n,l)=>(f(),o(`div`,c({class:r(b)(`
		file-input
		justify-center
		border-2
		border-dashed
		border-accent-500/80
		focus-outline-within
		transition-[border-color,box-shadow]
		ease-out
		hover:bg-accent-500/10
		outlined-focus-within
	`,e.compact&&`rounded-sm`,!e.compact&&`
			flex
			w-full
			flex-col
			items-stretch
			gap-2
			rounded-xl
			p-2
		`,U.value&&`bg-accent-500/10`,J.value.length>0&&G.value&&`errored border-red-400 hover:border-red-500`,e.wrapperAttrs?.class)},{...e.wrapperAttrs,class:void 0},{onDrop:de,onDragover:l[1]||=ee(e=>U.value=!0,[`prevent`]),onDragleave:l[2]||=e=>U.value=!1}),[a(`div`,{class:i(r(b)(`
			file-input--wrapper
			relative
			justify-center
		`,e.compact&&`flex gap-2`,!e.compact&&`
				file-input
				flex
				flex-col
				items-center
			`))},[a(`label`,{for:r(A),class:i(r(b)(`
				file-input--label
				pointer-events-none
				flex
				gap-1
				items-center
				justify-center
				whitespace-nowrap
				max-w-full
				px-1
			`))},[e.compact||e.multiple||r(H).length===0?_(n.$slots,`icon`,{},()=>[t(C,null,{default:m(()=>[t(r(k))]),_:1})],void 0,0):v(``,!0),_(n.$slots,`label`,{},()=>[a(`div`,ie,h(e.compact?e.multiple?r(T)(`file-input.compact-choose-file-plural`):r(T)(`file-input.compact-choose-file`):e.multiple?r(T)(`file-input.non-compact-choose-file-plural`):r(T)(`file-input.non-compact-choose-file`)),1)]),e.compact&&e.multiple?(f(),o(`div`,ae,h(` (${r(H).length})`),1)):v(``,!0),e.compact&&!e.multiple&&r(H).length>0?(f(),o(`div`,oe,h(` (${r(H)[0]?.file.name})`),1)):v(``,!0),e.compact&&!e.multiple&&r(H).length>0?(f(),o(`div`,se,h(` (...)`))):v(``,!0)],10,re),!e.compact&&e.formats?.length>0?(f(),o(`label`,ce,[_(n.$slots,`formats`,{},()=>[a(`div`,j,h(r(T)(`file-input.accepted-formats`))+`:`,1)]),a(`div`,M,h(Z.value.join(`, `)),1)])):v(``,!0),a(`input`,c({id:r(A),class:r(b)(`
				file-input--input
				absolute
				inset-[calc(var(--spacing)*-2)]
				cursor-pointer
				z-0
				text-[0]
				opacity-0
			`,e.inputAttrs?.class),type:`file`,accept:e.formats.join(`, `),multiple:e.multiple},{...e.inputAttrs,class:void 0},{"aria-invalid":J.value.length>0,"aria-errormessage":J.value.map(e=>e.message).join(`, `),ref_key:`el`,ref:D,onInput:fe,onClick:l[0]||=e=>e.target.value=null}),null,16,N)],2),!e.compact&&r(H).length>0?(f(),o(`div`,{key:0,class:i(r(b)(`file-input--previews
			flex items-stretch justify-center gap-4 flex-wrap
			`,e.multiple&&`
				w-full
			`))},[(f(!0),o(p,null,s(r(H),e=>(f(),o(`div`,{class:`file-input--preview-wrapper z-1 relative flex min-w-0 max-w-[150px] flex-initial flex-col items-center gap-1 p-1 rounded-sm border border-neutral-300 dark:border-neutral-800 shadow-md shadow-neutral-800/30 bg-neutral-100 dark:bg-neutral-900 [&:hover_.file-input--remove-button]:opacity-100`,key:e.file.name},[a(`div`,P,[t(S,{border:!1,class:`file-input--remove-button rounded-full p-0`,"aria-label":`Remove file ${e.file.name}`,onClick:t=>ue(e)},{default:m(()=>[t(C,null,{default:m(()=>[t(r(te))]),_:1})]),_:1},8,[`aria-label`,`onClick`]),a(`div`,{class:`file-input--preview-filename min-w-0 flex-1 basis-0 truncate break-all rounded-sm text-sm`,title:e.file.name},h(e.file.name),9,F)]),a(`div`,I,[e.isImg?(f(),o(`div`,L,[a(`img`,{class:`max-h-full w-auto`,src:e.previewUrl},null,8,R)])):v(``,!0),e.isImg?v(``,!0):(f(),o(`div`,z,[t(C,null,{default:m(()=>[t(r(E),{class:`text-4xl opacity-50`})]),_:1})]))])]))),128))],2)):v(``,!0),!e.compact&&J.value.length>0?(f(),o(`div`,B,[(f(!0),o(p,null,s(J.value,e=>(f(),o(`div`,{class:`file-input--error text-center`,key:e.message},h(e.message),1))),128))])):v(``,!0)],16))}});export{V as n,k as r,A as t};