import{p as V,b as I,d as N,g as p,u as B,a as o,e as F,H as k,f as O,h as Y,s as y,c as r,J as j,x,r as R,a0 as J,w as S,O as K,a1 as Q,a2 as X,t as $,a3 as G,a4 as W,a5 as Z,m as E,q as ee,L as te,P as ae,Q as le,R as H,X as oe,Y as se,T as w}from"./index-CwrvWB_L.js";import{V as A}from"./VImg-CQ-A7DW-.js";import{a as ne}from"./index-DqcZjERB.js";import{m as re,b as ue,c as ie,a as ce,d as de,e as ve,f as me}from"./color-CwozkxI5.js";import{V as _}from"./dimensions-BKnfN3cs.js";import{u as ge}from"./ssrBoot-D8dpAoR-.js";import"./index-DbgqwKyu.js";const L=V({text:String,...I(),...N()},"VToolbarTitle"),D=p()({name:"VToolbarTitle",props:L(),setup(e,u){let{slots:t}=u;return B(()=>{const i=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[i&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,t.default?.()])]})}),{}}}),fe=[null,"prominent","default","comfortable","compact"],U=V({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>fe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...re(),...I(),...ue(),...ie(),...N({tag:"header"}),...F()},"VToolbar"),C=p()({name:"VToolbar",props:U(),setup(e,u){let{slots:t}=u;const{backgroundColorClasses:i,backgroundColorStyles:s}=ce(k(e,"color")),{borderClasses:a}=de(e),{elevationClasses:m}=ve(e),{roundedClasses:d}=me(e),{themeClasses:g}=O(e),{rtlClasses:h}=Y(),n=y(!!(e.extended||t.extension?.())),f=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=r(()=>n.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return j({VBtn:{variant:"text"}}),B(()=>{const c=!!(e.title||t.title),b=!!(t.image||e.image),T=t.extension?.();return n.value=!!(e.extended||T),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,a.value,m.value,d.value,g.value,h.value,e.class],style:[s.value,e.style]},{default:()=>[b&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(_,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(A,{key:"image-img",cover:!0,src:e.image},null)]),o(_,{defaults:{VTabs:{height:x(f.value)}}},{default:()=>[o("div",{class:"v-toolbar__content",style:{height:x(f.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[t.prepend?.()]),c&&o(D,{key:"title",text:e.title},{text:t.title}),t.default?.(),t.append&&o("div",{class:"v-toolbar__append"},[t.append?.()])])]}),o(_,{defaults:{VTabs:{height:x(v.value)}}},{default:()=>[o(ne,null,{default:()=>[n.value&&o("div",{class:"v-toolbar__extension",style:{height:x(v.value)}},[T])]})]})]})}),{contentHeight:f,extensionHeight:v}}}),he=V({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function be(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=u;let i=0;const s=R(null),a=y(0),m=y(0),d=y(0),g=y(!1),h=y(!1),n=r(()=>Number(e.scrollThreshold)),f=r(()=>J((n.value-a.value)/n.value||0)),v=()=>{const c=s.value;!c||t&&!t.value||(i=a.value,a.value="window"in c?c.pageYOffset:c.scrollTop,h.value=a.value<i,d.value=Math.abs(a.value-n.value))};return S(h,()=>{m.value=m.value||a.value}),S(g,()=>{m.value=0}),K(()=>{S(()=>e.scrollTarget,c=>{const b=c?document.querySelector(c):window;b&&b!==s.value&&(s.value?.removeEventListener("scroll",v),s.value=b,s.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),Q(()=>{s.value?.removeEventListener("scroll",v)}),t&&S(t,v,{immediate:!0}),{scrollThreshold:n,currentScroll:a,currentThreshold:d,isScrollActive:g,scrollRatio:f,isScrollingUp:h,savedScroll:m}}const ye=V({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...U(),...X(),...he(),height:{type:[Number,String],default:64}},"VAppBar"),Te=p()({name:"VAppBar",props:ye(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const i=R(),s=$(e,"modelValue"),a=r(()=>{const l=new Set(e.scrollBehavior?.split(" ")??[]);return{hide:l.has("hide"),fullyHide:l.has("fully-hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),m=r(()=>{const l=a.value;return l.hide||l.fullyHide||l.inverted||l.collapse||l.elevate||l.fadeImage||!s.value}),{currentScroll:d,scrollThreshold:g,isScrollingUp:h,scrollRatio:n}=be(e,{canScroll:m}),f=r(()=>a.value.hide||a.value.fullyHide),v=r(()=>e.collapse||a.value.collapse&&(a.value.inverted?n.value>0:n.value===0)),c=r(()=>e.flat||a.value.fullyHide&&!s.value||a.value.elevate&&(a.value.inverted?d.value>0:d.value===0)),b=r(()=>a.value.fadeImage?a.value.inverted?1-n.value:n.value:void 0),T=r(()=>{const l=Number(i.value?.contentHeight??e.height),P=Number(i.value?.extensionHeight??0);return f.value?d.value<g.value||a.value.fullyHide?l+P:l:l+P});G(r(()=>!!e.scrollBehavior),()=>{W(()=>{f.value?a.value.inverted?s.value=d.value>g.value:s.value=h.value||d.value<g.value:s.value=!0})});const{ssrBootStyles:M}=ge(),{layoutItemStyles:q,layoutIsReady:z}=Z({id:e.name,order:r(()=>parseInt(e.order,10)),position:k(e,"location"),layoutSize:T,elementSize:y(void 0),active:s,absolute:k(e,"absolute")});return B(()=>{const l=C.filterProps(e);return o(C,E({ref:i,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...q.value,"--v-toolbar-image-opacity":b.value,height:void 0,...M.value},e.style]},l,{collapse:v.value,flat:c.value}),t)}),z}}),xe=p()({name:"VAppBarTitle",props:L(),setup(e,u){let{slots:t}=u;return B(()=>o(D,E(e,{class:"v-app-bar-title"}),t)),{}}}),He={__name:"Header",setup(e){const u=ee(te),t=u.brand?.name;return(i,s)=>(ae(),le(Te,{color:"primary"},{default:H(()=>[o(xe,null,{default:H(()=>[oe(se(w(t)),1)]),_:1}),o(A,{class:"mx-12",style:{"max-width":"140px"},src:w(u).brand?.logo},null,8,["src"])]),_:1}))}};export{He as default};
