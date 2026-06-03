import{E as N,X as n,k as a,h as o,aw as M,Q as _,L as $,ak as i,a4 as L,j as f,ac as d,I as q,F as D,a3 as z,aE as ee,a9 as S,g as F,a2 as A,n as v,aA as k}from"./CIkOm3BO.js";import{I as te}from"./CirRfpkc.js";import{u as le}from"./DB7JXF76.js";import{u as ie}from"./BbHlLnxg.js";import{t as x}from"./CLwyhV7-.js";import{_ as se}from"./BVWdv_YN.js";import R from"./DQrAq-Ch.js";const ne={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block",width:"auto"},viewBox:"0 0 24 24"};function ae(l,m){return n(),a("svg",ne,[...m[0]||(m[0]=[o("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[o("path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}),o("path",{d:"M14 2v5a1 1 0 0 0 1 1h5"})],-1)])])}const re=N({name:"lucide-file",render:ae}),oe={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block",width:"auto"},viewBox:"0 0 24 24"};function ce(l,m){return n(),a("svg",oe,[...m[0]||(m[0]=[o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},null,-1)])])}const ue=N({name:"lucide-upload",render:ce}),fe=["for"],de={class:"text-ellipsis overflow-hidden shrink-1 hidden @min-[15ch]:block"},me={key:1,class:"file-input--label-count"},pe={key:2,class:"file-input--label-name text-ellipsis overflow-hidden shrink-9999 hidden @3xs:block"},ve={key:3,class:"file-input--label-name text-ellipsis overflow-hidden shrink-9999 @3xs:hidden"},he={key:0,class:"file-input--formats-label flex-col items-center text-sm max-w-full hidden @min-[15ch]:flex"},ge={class:"text-ellipsis overflow-hidden max-w-full"},xe={class:"file-input--formats-list overflow-hidden text-ellipsis max-w-full"},we=["id","accept","multiple","aria-invalid","aria-errormessage"],be={class:"flex flex-initial basis-full justify-start items-center max-w-full gap-2 px-1"},ye=["title"],ke={class:"file-input--preview flex flex-initial basis-full justify-center"},je={key:0,class:"file-input--preview-image bg-transparency-squares flex h-[80px] flex-wrap items-center justify-center"},Ie=["src"],Ue={key:1,class:"file-input--preview-no-image flex h-[80px] flex-1 basis-full flex-wrap items-center justify-center"},$e={key:1,class:"file-input--errors flex flex-col gap-2 text-sm text-red-600 dark:text-red-400 items-center px-2"},Le=Object.assign({name:"WFileInput",inheritAttrs:!1},{__name:"WFileInput",props:{id:{type:String,required:!1},multiple:{type:Boolean,required:!1,default:!1},formats:{type:Array,required:!1,default:()=>["image/*",".jpeg",".jpg",".png"]},compact:{type:Boolean,required:!1,default:!1},inputAttrs:{type:Object,required:!1},wrapperAttrs:{type:Object,required:!1}},emits:["input","errors"],setup(l,{expose:m,emit:P}){const h=ie(),p=A(null),g=l,O=le(g),W=P,s=S([]),c=S([]),j=A(!1),w=A(!1);function T(){p.value&&(p.value.value="");for(const e of s)e.previewUrl&&URL.revokeObjectURL(e.previewUrl);s.splice(0,s.length)}M(s,()=>{W("input",s.map(e=>e.file),T)}),M(c,()=>{c.length>0&&(j.value=!0,W("errors",[...c],I))});function I(){j.value=!1,c.splice(0,c.length)}const H=F(()=>g.formats?.filter(e=>!e.startsWith("."))??[]),U=F(()=>g.formats?.filter(e=>e.startsWith("."))??[]);_(()=>{for(const e of s)e.previewUrl&&URL.revokeObjectURL(e.previewUrl)});function X(e){e.previewUrl&&URL.revokeObjectURL(e.previewUrl);const r=s.indexOf(e);r>-1&&s.splice(r,1)}const Q=F(()=>U.value.join(", "));function G(e){if("dataTransfer"in e&&e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length>0)return p.value.files=e.dataTransfer.files,e.preventDefault(),w.value=!1,V(p.value.files)}async function J(e){if(e.preventDefault(),p.value.files)return V(p.value.files)}function V(e){const r=[];for(const t of e){const b=t.type.startsWith("image"),K=g.formats.length===0,B=H.value.find(u=>u.endsWith("/*")?t.type.startsWith(u.slice(0,-2)):u===t.type)!==void 0,C=U.value.find(u=>t.name.endsWith(u))!==void 0;if(!K&&(!B||!C)){const u=t.name.match(/.*(\..*)/)?.[1]??"Unknown",Y=t.type===""?"":` (${t.type})`,Z=`File type ${u}${Y} is not allowed. Allowed file types are: ${Q.value}.`,y=new Error(Z);y.file=t,y.isValidExtension=C,y.isValidMimeType=B,r.push(y);continue}const E=b?URL.createObjectURL(t):void 0;r.length>0||s.find(u=>u.file===t)||(g.multiple||s.length<1?s.push({file:t,isImg:b,previewUrl:E}):s.splice(0,s.length,{file:t,isImg:b,previewUrl:E}))}if(r.length>0)return c.splice(0,c.length,...r),!1;c.length>0&&I()}return m({clearFiles:T,clearErrors:I}),(e,r)=>(n(),a("div",q({class:i(x)(`
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
	`,l.compact&&"rounded-sm",!l.compact&&`
			flex
			w-full
			flex-col
			items-stretch
			gap-2
			rounded-xl
			p-2
		`,w.value&&"bg-accent-500/10",i(c).length>0&&j.value&&"errored border-red-400 hover:border-red-500",l.wrapperAttrs?.class)},{...l.wrapperAttrs,class:void 0},{onDrop:G,onDragover:r[1]||(r[1]=ee(t=>w.value=!0,["prevent"])),onDragleave:r[2]||(r[2]=t=>w.value=!1)}),[o("div",{class:$(i(x)(`
			file-input--wrapper
			relative
			justify-center
			@container
		`,l.compact&&"flex gap-2",!l.compact&&`
				file-input
				flex
				flex-col
				items-center
			`))},[o("label",{for:i(O),class:$(i(x)(`
				file-input--label
				pointer-events-none
				flex
				gap-1
				items-center
				justify-center
				whitespace-nowrap
				max-w-full
			`))},[l.compact||l.multiple||i(s).length===0?L(e.$slots,"icon",{key:0},()=>[v(R,null,{default:k(()=>[v(i(ue))]),_:1})]):f("",!0),L(e.$slots,"label",{},()=>[o("div",de,d(l.compact?l.multiple?i(h)("file-input.compact-choose-file-plural"):i(h)("file-input.compact-choose-file"):l.multiple?i(h)("file-input.non-compact-choose-file-plural"):i(h)("file-input.non-compact-choose-file")),1)]),l.compact&&l.multiple?(n(),a("div",me,d(` (${i(s).length})`),1)):f("",!0),l.compact&&!l.multiple&&i(s).length>0?(n(),a("div",pe,d(` (${i(s)[0]?.file.name})`),1)):f("",!0),l.compact&&!l.multiple&&i(s).length>0?(n(),a("div",ve,d(" (...)"))):f("",!0)],10,fe),!l.compact&&l.formats?.length>0?(n(),a("label",he,[L(e.$slots,"formats",{},()=>[o("div",ge,d(i(h)("file-input.accepted-formats"))+":",1)]),o("div",xe,d(U.value.join(", ")),1)])):f("",!0),o("input",q({id:i(O),class:i(x)(`
				file-input--input
				absolute
				inset-[calc(var(--spacing)*-2)]
				cursor-pointer
				z-0
				text-[0]
				opacity-0
			`,l.inputAttrs?.class),type:"file",accept:l.formats.join(", "),multiple:l.multiple},{...l.inputAttrs,class:void 0},{"aria-invalid":i(c).length>0,"aria-errormessage":i(c).map(t=>t.message).join(", "),ref_key:"el",ref:p,onInput:J,onClick:r[0]||(r[0]=t=>t.target.value=null)}),null,16,we)],2),!l.compact&&i(s).length>0?(n(),a("div",{key:0,class:$(i(x)(`file-input--previews
			flex items-stretch justify-center gap-4 flex-wrap
			`,l.multiple&&`
				w-full
			`))},[(n(!0),a(D,null,z(i(s),t=>(n(),a("div",{class:"file-input--preview-wrapper z-1 relative flex min-w-0 max-w-[150px] flex-initial flex-col items-center gap-1 p-1 rounded-sm border border-neutral-300 dark:border-neutral-800 shadow-md shadow-neutral-800/30 bg-neutral-100 dark:bg-neutral-900 [&:hover_.file-input--remove-button]:opacity-100",key:t.file.name},[o("div",be,[v(se,{border:!1,class:"file-input--remove-button rounded-full p-0","aria-label":`Remove file ${t.file.name}`,onClick:b=>X(t)},{default:k(()=>[v(R,null,{default:k(()=>[v(i(te))]),_:1})]),_:1},8,["aria-label","onClick"]),o("div",{class:"file-input--preview-filename min-w-0 flex-1 basis-0 truncate break-all rounded-sm text-sm",title:t.file.name},d(t.file.name),9,ye)]),o("div",ke,[t.isImg?(n(),a("div",je,[o("img",{class:"max-h-full w-auto",src:t.previewUrl},null,8,Ie)])):f("",!0),t.isImg?f("",!0):(n(),a("div",Ue,[v(R,null,{default:k(()=>[v(i(re),{class:"text-4xl opacity-50"})]),_:1})]))])]))),128))],2)):f("",!0),!l.compact&&i(c).length>0?(n(),a("div",$e,[(n(!0),a(D,null,z(i(c),t=>(n(),a("div",{class:"file-input--error text-center",key:t.message},d(t.message),1))),128))])):f("",!0)],16))}}),Be=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"}));export{ue as I,Be as W,Le as _};
