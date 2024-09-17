import{p,e as I,f as N,g as V,a as _,b as o,ae as q,af as z,ag as F,h as W,Q as $,R as k,ah as K,ai as O,aj as Q,i as Y,j as Z,s as y,c as n,S as G,ak as B,C as T,r as E,al as J,w as x,Z as X,am as ee,an as te,y as ae,ao as le,ap as oe,aq as se,d as R,_ as ne,x as re,W as ue,$ as ie,a0 as ce,a1 as P,a8 as de,aa as ve,a3 as C}from"./index-zN5zdc8C.js";import{V as A}from"./VImg-CjwmZEsh.js";import{a as me}from"./index-PlZ1wb09.js";import{u as ge}from"./ssrBoot-CDVX6Dj0.js";import"./transition-zR7mH-0i.js";const L=p({text:String,...I(),...N()},"VToolbarTitle"),D=V()({name:"VToolbarTitle",props:L(),setup(e,r){let{slots:t}=r;return _(()=>{const d=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[d&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,t.default?.()])]})}),{}}}),fe=[null,"prominent","default","comfortable","compact"],U=p({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>fe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...q(),...I(),...z(),...F(),...N({tag:"header"}),...W()},"VToolbar"),w=V()({name:"VToolbar",props:U(),setup(e,r){let{slots:t}=r;const{backgroundColorClasses:d,backgroundColorStyles:u}=$(k(e,"color")),{borderClasses:a}=K(e),{elevationClasses:v}=O(e),{roundedClasses:i}=Q(e),{themeClasses:f}=Y(e),{rtlClasses:S}=Z(),c=y(!!(e.extended||t.extension?.())),m=n(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=n(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return G({VBtn:{variant:"text"}}),_(()=>{const h=!!(e.title||t.title),s=!!(t.image||e.image),g=t.extension?.();return c.value=!!(e.extended||g),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},d.value,a.value,v.value,i.value,f.value,S.value,e.class],style:[u.value,e.style]},{default:()=>[s&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(B,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(A,{key:"image-img",cover:!0,src:e.image},null)]),o(B,{defaults:{VTabs:{height:T(m.value)}}},{default:()=>[o("div",{class:"v-toolbar__content",style:{height:T(m.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[t.prepend?.()]),h&&o(D,{key:"title",text:e.title},{text:t.title}),t.default?.(),t.append&&o("div",{class:"v-toolbar__append"},[t.append?.()])])]}),o(B,{defaults:{VTabs:{height:T(b.value)}}},{default:()=>[o(me,null,{default:()=>[c.value&&o("div",{class:"v-toolbar__extension",style:{height:T(b.value)}},[g])]})]})]})}),{contentHeight:m,extensionHeight:b}}}),he=p({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function be(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=r;let d=0,u=0;const a=E(null),v=y(0),i=y(0),f=y(0),S=y(!1),c=y(!1),m=n(()=>Number(e.scrollThreshold)),b=n(()=>J((m.value-v.value)/m.value||0)),h=()=>{const s=a.value;if(!s||t&&!t.value)return;d=v.value,v.value="window"in s?s.pageYOffset:s.scrollTop;const g=s instanceof Window?document.documentElement.scrollHeight:s.scrollHeight;if(u!==g){u=g;return}c.value=v.value<d,f.value=Math.abs(v.value-m.value)};return x(c,()=>{i.value=i.value||v.value}),x(S,()=>{i.value=0}),X(()=>{x(()=>e.scrollTarget,s=>{const g=s?document.querySelector(s):window;g&&g!==a.value&&(a.value?.removeEventListener("scroll",h),a.value=g,a.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),ee(()=>{a.value?.removeEventListener("scroll",h)}),t&&x(t,h,{immediate:!0}),{scrollThreshold:m,currentScroll:v,currentThreshold:f,isScrollActive:S,scrollRatio:b,isScrollingUp:c,savedScroll:i}}const ye=p({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...U(),...te(),...he(),height:{type:[Number,String],default:64}},"VAppBar"),Se=V()({name:"VAppBar",props:ye(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:t}=r;const d=E(),u=ae(e,"modelValue"),a=n(()=>{const l=new Set(e.scrollBehavior?.split(" ")??[]);return{hide:l.has("hide"),fullyHide:l.has("fully-hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),v=n(()=>{const l=a.value;return l.hide||l.fullyHide||l.inverted||l.collapse||l.elevate||l.fadeImage||!u.value}),{currentScroll:i,scrollThreshold:f,isScrollingUp:S,scrollRatio:c}=be(e,{canScroll:v}),m=n(()=>a.value.hide||a.value.fullyHide),b=n(()=>e.collapse||a.value.collapse&&(a.value.inverted?c.value>0:c.value===0)),h=n(()=>e.flat||a.value.fullyHide&&!u.value||a.value.elevate&&(a.value.inverted?i.value>0:i.value===0)),s=n(()=>a.value.fadeImage?a.value.inverted?1-c.value:c.value:void 0),g=n(()=>{if(a.value.hide&&a.value.inverted)return 0;const l=d.value?.contentHeight??0,H=d.value?.extensionHeight??0;return m.value?i.value<f.value||a.value.fullyHide?l+H:l:l+H});le(n(()=>!!e.scrollBehavior),()=>{oe(()=>{m.value?a.value.inverted?u.value=i.value>f.value:u.value=S.value||i.value<f.value:u.value=!0})});const{ssrBootStyles:j}=ge(),{layoutItemStyles:M}=se({id:e.name,order:n(()=>parseInt(e.order,10)),position:k(e,"location"),layoutSize:g,elementSize:y(void 0),active:u,absolute:k(e,"absolute")});return _(()=>{const l=w.filterProps(e);return o(w,R({ref:d,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...M.value,"--v-toolbar-image-opacity":s.value,height:void 0,...j.value},e.style]},l,{collapse:b.value,flat:h.value}),t)}),{}}}),Te=V()({name:"VAppBarTitle",props:L(),setup(e,r){let{slots:t}=r;return _(()=>o(D,R(e,{class:"v-app-bar-title"}),t)),{}}}),xe={__name:"Header",setup(e){const r=re(ue),t=r.brand?.name;return(d,u)=>(ie(),ce(Se,{color:"primary"},{default:P(()=>[o(Te,null,{default:P(()=>[de(ve(C(t)),1)]),_:1}),o(A,{class:"mx-12 logo",src:C(r).brand?.logo},null,8,["src"])]),_:1}))}},He=ne(xe,[["__scopeId","data-v-d3a5e05e"]]);export{He as default};
