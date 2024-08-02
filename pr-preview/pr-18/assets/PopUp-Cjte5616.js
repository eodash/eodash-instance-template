import{g as V,b as p,d as h,ab as w,p as E,y as R,r as O,L as M,w as x,a as T,D as q,ak as W,N as I,ae as N,e as j,ac as U,af as X,b0 as Y,b1 as z,ag as H,f as Q,h as G,i as J,Q as K,R as Z,ah as _,ad as ee,ai as te,b2 as ae,b3 as oe,aj as se,aV as ne,aW as re,X as ie,$ as P,a6 as k,a1 as S,a0 as le,a3 as b,a4 as ce,a5 as C,b4 as ue}from"./index-BJoh-Mee.js";import{m as de,V as B}from"./VOverlay-B7KVSAJl.js";import{a as y,d as me,s as D,c as fe,g as ge,n as ve,b as pe,f as he}from"./forwardRefs-CfQZasYv.js";import"./transition-Cuz8w0hI.js";const ye=E({target:[Object,Array]},"v-dialog-transition"),Pe=V()({name:"VDialogTransition",props:ye(),setup(e,i){let{slots:o}=i;const r={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,c){await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),t.style.visibility="";const{x:a,y:l,sx:d,sy:m,speed:s}=L(e.target,t),u=y(t,[{transform:`translate(${a}px, ${l}px) scale(${d}, ${m})`,opacity:0},{}],{duration:225*s,easing:me});A(t)?.forEach(n=>{y(n,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:D})}),u.finished.then(()=>c())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,c){await new Promise(n=>requestAnimationFrame(n));const{x:a,y:l,sx:d,sy:m,speed:s}=L(e.target,t);y(t,[{},{transform:`translate(${a}px, ${l}px) scale(${d}, ${m})`,opacity:0}],{duration:125*s,easing:fe}).finished.then(()=>c()),A(t)?.forEach(n=>{y(n,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:D})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>e.target?p(w,h({name:"dialog-transition"},r,{css:!1}),o):p(w,{name:"dialog-transition"},o)}});function A(e){const i=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;return i&&[...i]}function L(e,i){const o=ge(e),r=ve(i),[t,c]=getComputedStyle(i).transformOrigin.split(" ").map(F=>parseFloat(F)),[a,l]=getComputedStyle(i).getPropertyValue("--v-overlay-anchor-origin").split(" ");let d=o.left+o.width/2;a==="left"||l==="left"?d-=o.width/2:(a==="right"||l==="right")&&(d+=o.width/2);let m=o.top+o.height/2;a==="top"||l==="top"?m-=o.height/2:(a==="bottom"||l==="bottom")&&(m+=o.height/2);const s=o.width/r.width,u=o.height/r.height,n=Math.max(1,s,u),f=s/n||0,v=u/n||0,g=r.width*r.height/(window.innerWidth*window.innerHeight),$=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:d-(t+r.left),y:m-(c+r.top),sx:f,sy:v,speed:$}}const be=E({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...de({origin:"center center",scrollStrategy:"block",transition:{component:Pe},zIndex:2400})},"VDialog"),Ve=V()({name:"VDialog",props:be(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,i){let{emit:o,slots:r}=i;const t=R(e,"modelValue"),{scopeId:c}=pe(),a=O();function l(s){const u=s.relatedTarget,n=s.target;if(u!==n&&a.value?.contentEl&&a.value?.globalTop&&![document,a.value.contentEl].includes(n)&&!a.value.contentEl.contains(n)){const f=I(a.value.contentEl);if(!f.length)return;const v=f[0],g=f[f.length-1];u===v?g.focus():v.focus()}}M&&x(()=>t.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0});function d(){a.value?.contentEl&&!a.value.contentEl.contains(document.activeElement)&&a.value.contentEl.focus({preventScroll:!0})}function m(){o("afterLeave")}return x(t,async s=>{s||(await q(),a.value.activatorEl?.focus({preventScroll:!0}))}),T(()=>{const s=B.filterProps(e),u=h({"aria-haspopup":"dialog","aria-expanded":String(t.value)},e.activatorProps),n=h({tabindex:-1},e.contentProps);return p(B,h({ref:a,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},s,{modelValue:t.value,"onUpdate:modelValue":f=>t.value=f,"aria-modal":"true",activatorProps:u,contentProps:n,role:"dialog",onAfterEnter:d,onAfterLeave:m},c),{activator:r.activator,default:function(){for(var f=arguments.length,v=new Array(f),g=0;g<f;g++)v[g]=arguments[g];return p(W,{root:"VDialog"},{default:()=>[r.default?.(...v)]})}})}),he({},a)}}),Ee=E({color:String,...N(),...j(),...U(),...X(),...Y(),...z(),...H(),...Q(),...G()},"VSheet"),we=V()({name:"VSheet",props:Ee(),setup(e,i){let{slots:o}=i;const{themeClasses:r}=J(e),{backgroundColorClasses:t,backgroundColorStyles:c}=K(Z(e,"color")),{borderClasses:a}=_(e),{dimensionStyles:l}=ee(e),{elevationClasses:d}=te(e),{locationStyles:m}=ae(e),{positionClasses:s}=oe(e),{roundedClasses:u}=se(e);return T(()=>p(e.tag,{class:["v-sheet",r.value,t.value,a.value,d.value,s.value,u.value,e.class],style:[c.value,l.value,m.value,e.style]},o)),{}}}),xe={key:1},De={__name:"PopUp",props:ne({widget:{type:Object,default:void 0}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const i=re(e,"modelValue"),o=e,[r]=ie([o?.widget]);return(t,c)=>(P(),k("span",null,[p(Ve,{"max-width":"500px","max-height":"500px",absolute:"",scrollable:"","scroll-strategy":"block","close-on-back":"",modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=a=>i.value=a)},{default:S(()=>[p(we,null,{default:S(()=>[e.widget?(P(),le(ce(b(r).component),h({key:b(r).id},b(r).props),null,16)):C("v-if",!0),t.$slots.default?(P(),k("span",xe,[ue(t.$slots,"default")])):C("v-if",!0)]),_:3})]),_:3},8,["modelValue"])]))}};export{De as default};
