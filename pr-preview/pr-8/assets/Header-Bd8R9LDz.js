import{q as x,r as p,t as V,R as k,h as r,T as ee,S as U,x as F,U as xe,v as h,K as H,V as te,W as I,X as Ve,N as T,y as W,P as w,Y as Be,Z as we,$ as ae,I as K,a0 as ke,F as ne,a1 as C,L as Ie,a2 as Pe,a3 as Ce,a4 as pe,a5 as se,a6 as Re,a7 as ze,a8 as Ee,a9 as Ae,aa as Le,ab as Ne,ac as He,i as $e,e as je,ad as Oe,f as E,z as j,A,J as Y,H as X,j as L,g as Ue,E as Fe,ae as We}from"./index-C-ACd-fZ.js";import{_ as De}from"./Dashboard-CKIW5MG1.js";import{m as le,a as oe,u as re,b as ie,c as qe,d as Me,e as Ge,f as Je}from"./color-9hprVtkH.js";import{m as Ke,b as Ye,c as O,u as Xe,d as Ze,V as Qe}from"./ssrBoot-7ArTjSWX.js";const ue=x({text:String,...p(),...le()},"VToolbarTitle"),ce=V()({name:"VToolbarTitle",props:ue(),setup(e,o){let{slots:t}=o;return k(()=>{const s=!!(t.default||t.text||e.text);return r(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[s&&r("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,t.default?.()])]})}),{}}}),et=x({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function S(e,o,t){return V()({name:e,props:et({mode:t,origin:o}),setup(s,u){let{slots:l}=u;const a={onBeforeEnter(n){s.origin&&(n.style.transformOrigin=s.origin)},onLeave(n){if(s.leaveAbsolute){const{offsetTop:v,offsetLeft:c,offsetWidth:i,offsetHeight:g}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${v}px`,n.style.left=`${c}px`,n.style.width=`${i}px`,n.style.height=`${g}px`}s.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(s.leaveAbsolute&&n?._transitionInitialStyles){const{position:v,top:c,left:i,width:g,height:y}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=v||"",n.style.top=c||"",n.style.left=i||"",n.style.width=g||"",n.style.height=y||""}}};return()=>{const n=s.group?ee:U;return F(n,{name:s.disabled?"":e,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:a},l.default)}}})}function de(e,o){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return V()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(s,u){let{slots:l}=u;return()=>F(U,{name:s.disabled?"":e,css:!s.disabled,...s.disabled?{}:o},l.default)}})}function ve(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=xe(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const n=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const v=`${a[s]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=n.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=v})},onAfterEnter:l,onEnterCancelled:l,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[s]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:u,onLeaveCancelled:u};function u(a){e&&a._parent&&a._parent.classList.remove(e),l(a)}function l(a){const n=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,n!=null&&(a.style[t]=n),delete a._initialStyle}}S("fab-transition","center center","out-in");S("dialog-bottom-transition");S("dialog-top-transition");S("fade-transition");S("scale-transition");S("scroll-x-transition");S("scroll-x-reverse-transition");S("scroll-y-transition");S("scroll-y-reverse-transition");S("slide-x-transition");S("slide-x-reverse-transition");S("slide-y-transition");S("slide-y-reverse-transition");const tt=de("expand-transition",ve());de("expand-x-transition",ve("",!0));function at(e){return{aspectStyles:h(()=>{const o=Number(e.aspectRatio);return o?{paddingBottom:String(1/o*100)+"%"}:void 0})}}const fe=x({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...p(),...Ke()},"VResponsive"),Z=V()({name:"VResponsive",props:fe(),setup(e,o){let{slots:t}=o;const{aspectStyles:s}=at(e),{dimensionStyles:u}=Ye(e);return k(()=>r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[u.value,e.style]},[r("div",{class:"v-responsive__sizer",style:s.value},null),t.additional?.(),t.default&&r("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])),{}}}),nt=x({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),N=(e,o)=>{let{slots:t}=o;const{transition:s,disabled:u,group:l,...a}=e,{component:n=l?ee:U,...v}=typeof s=="object"?s:{};return F(n,H(typeof s=="string"?{name:u?"":s}:v,typeof s=="string"?{}:{disabled:u,group:l},a),t)};function st(e,o){if(!te)return;const t=o.modifiers||{},s=o.value,{handler:u,options:l}=typeof s=="object"?s:{handler:s,options:{}},a=new IntersectionObserver(function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const c=e._observe?.[o.instance.$.uid];if(!c)return;const i=n.some(g=>g.isIntersecting);u&&(!t.quiet||c.init)&&(!t.once||i||c.init)&&u(i,n,v),i&&t.once?ge(e,o):c.init=!0},l);e._observe=Object(e._observe),e._observe[o.instance.$.uid]={init:!1,observer:a},a.observe(e)}function ge(e,o){const t=e._observe?.[o.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[o.instance.$.uid])}const lt={mounted:st,unmounted:ge},ot=lt,rt=x({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...fe(),...p(),...oe(),...nt()},"VImg"),me=V()({name:"VImg",directives:{intersect:ot},props:rt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,o){let{emit:t,slots:s}=o;const{backgroundColorClasses:u,backgroundColorStyles:l}=re(I(e,"color")),{roundedClasses:a}=ie(e),n=Ve("VImg"),v=T(""),c=W(),i=T(e.eager?"loading":"idle"),g=T(),y=T(),d=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=h(()=>d.value.aspect||g.value/y.value||0);w(()=>e.src,()=>{B(i.value!=="idle")}),w(b,(f,_)=>{!f&&_&&c.value&&P(c.value)}),Be(()=>B());function B(f){if(!(e.eager&&f)&&!(te&&!f&&!e.eager)){if(i.value="loading",d.value.lazySrc){const _=new Image;_.src=d.value.lazySrc,P(_,null)}d.value.src&&we(()=>{t("loadstart",c.value?.currentSrc||d.value.src),setTimeout(()=>{if(!n.isUnmounted)if(c.value?.complete){if(c.value.naturalWidth||m(),i.value==="error")return;b.value||P(c.value,null),i.value==="loading"&&R()}else b.value||P(c.value),z()})})}}function R(){n.isUnmounted||(z(),P(c.value),i.value="loaded",t("load",c.value?.currentSrc||d.value.src))}function m(){n.isUnmounted||(i.value="error",t("error",c.value?.currentSrc||d.value.src))}function z(){const f=c.value;f&&(v.value=f.currentSrc||f.src)}let $=-1;ae(()=>{clearTimeout($)});function P(f){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const M=()=>{if(clearTimeout($),n.isUnmounted)return;const{naturalHeight:G,naturalWidth:J}=f;G||J?(g.value=J,y.value=G):!f.complete&&i.value==="loading"&&_!=null?$=window.setTimeout(M,_):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,y.value=1)};M()}const D=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),he=()=>{if(!d.value.src||i.value==="idle")return null;const f=r("img",{class:["v-img__img",D.value],style:{objectPosition:e.position},src:d.value.src,srcset:d.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:R,onError:m},null),_=s.sources?.();return r(N,{transition:e.transition,appear:!0},{default:()=>[K(_?r("picture",{class:"v-img__picture"},[_,f]):f,[[Ie,i.value==="loaded"]])]})},be=()=>r(N,{transition:e.transition},{default:()=>[d.value.lazySrc&&i.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",D.value],style:{objectPosition:e.position},src:d.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Se=()=>s.placeholder?r(N,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!s.error)&&r("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,_e=()=>s.error?r(N,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&r("div",{class:"v-img__error"},[s.error()])]}):null,Te=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,q=T(!1);{const f=w(b,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{q.value=!0})}),f())})}return k(()=>{const f=Z.filterProps(e);return K(r(Z,H({class:["v-img",{"v-img--booting":!q.value},u.value,a.value,e.class],style:[{width:C(e.width==="auto"?g.value:e.width)},l.value,e.style]},f,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(ne,null,[r(he,null,null),r(be,null,null),r(Te,null,null),r(Se,null,null),r(_e,null,null)]),default:s.default}),[[ke("intersect"),{handler:B,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:c,state:i,naturalWidth:g,naturalHeight:y}}}),it=[null,"prominent","default","comfortable","compact"],ye=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>it.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...qe(),...p(),...Me(),...oe(),...le({tag:"header"}),...Pe()},"VToolbar"),Q=V()({name:"VToolbar",props:ye(),setup(e,o){let{slots:t}=o;const{backgroundColorClasses:s,backgroundColorStyles:u}=re(I(e,"color")),{borderClasses:l}=Ge(e),{elevationClasses:a}=Je(e),{roundedClasses:n}=ie(e),{themeClasses:v}=Ce(e),{rtlClasses:c}=pe(),i=T(!!(e.extended||t.extension?.())),g=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return se({VBtn:{variant:"text"}}),k(()=>{const d=!!(e.title||t.title),b=!!(t.image||e.image),B=t.extension?.();return i.value=!!(e.extended||B),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,l.value,a.value,n.value,v.value,c.value,e.class],style:[u.value,e.style]},{default:()=>[b&&r("div",{key:"image",class:"v-toolbar__image"},[t.image?r(O,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):r(me,{key:"image-img",cover:!0,src:e.image},null)]),r(O,{defaults:{VTabs:{height:C(g.value)}}},{default:()=>[r("div",{class:"v-toolbar__content",style:{height:C(g.value)}},[t.prepend&&r("div",{class:"v-toolbar__prepend"},[t.prepend?.()]),d&&r(ce,{key:"title",text:e.title},{text:t.title}),t.default?.(),t.append&&r("div",{class:"v-toolbar__append"},[t.append?.()])])]}),r(O,{defaults:{VTabs:{height:C(y.value)}}},{default:()=>[r(tt,null,{default:()=>[i.value&&r("div",{class:"v-toolbar__extension",style:{height:C(y.value)}},[B])]})]})]})}),{contentHeight:g,extensionHeight:y}}}),ut=x({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ct(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let s=0;const u=W(null),l=T(0),a=T(0),n=T(0),v=T(!1),c=T(!1),i=h(()=>Number(e.scrollThreshold)),g=h(()=>Re((i.value-l.value)/i.value||0)),y=()=>{const d=u.value;!d||t&&!t.value||(s=l.value,l.value="window"in d?d.pageYOffset:d.scrollTop,c.value=l.value<s,n.value=Math.abs(l.value-i.value))};return w(c,()=>{a.value=a.value||l.value}),w(v,()=>{a.value=0}),ze(()=>{w(()=>e.scrollTarget,d=>{const b=d?document.querySelector(d):window;b&&b!==u.value&&(u.value?.removeEventListener("scroll",y),u.value=b,u.value.addEventListener("scroll",y,{passive:!0}))},{immediate:!0})}),ae(()=>{u.value?.removeEventListener("scroll",y)}),t&&w(t,y,{immediate:!0}),{scrollThreshold:i,currentScroll:l,currentThreshold:n,isScrollActive:v,scrollRatio:g,isScrollingUp:c,savedScroll:a}}const dt=x({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ye(),...Ee(),...ut(),height:{type:[Number,String],default:64}},"VAppBar"),vt=V()({name:"VAppBar",props:dt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const s=W(),u=Ae(e,"modelValue"),l=h(()=>{const m=new Set(e.scrollBehavior?.split(" ")??[]);return{hide:m.has("hide"),inverted:m.has("inverted"),collapse:m.has("collapse"),elevate:m.has("elevate"),fadeImage:m.has("fade-image")}}),a=h(()=>{const m=l.value;return m.hide||m.inverted||m.collapse||m.elevate||m.fadeImage||!u.value}),{currentScroll:n,scrollThreshold:v,isScrollingUp:c,scrollRatio:i}=ct(e,{canScroll:a}),g=h(()=>e.collapse||l.value.collapse&&(l.value.inverted?i.value>0:i.value===0)),y=h(()=>e.flat||l.value.elevate&&(l.value.inverted?n.value>0:n.value===0)),d=h(()=>l.value.fadeImage?l.value.inverted?1-i.value:i.value:void 0),b=h(()=>{if(l.value.hide&&l.value.inverted)return 0;const m=s.value?.contentHeight??0,z=s.value?.extensionHeight??0;return m+z});Le(h(()=>!!e.scrollBehavior),()=>{He(()=>{l.value.hide?l.value.inverted?u.value=n.value>v.value:u.value=c.value||n.value<v.value:u.value=!0})});const{ssrBootStyles:B}=Xe(),{layoutItemStyles:R}=Ne({id:e.name,order:h(()=>parseInt(e.order,10)),position:I(e,"location"),layoutSize:b,elementSize:T(void 0),active:u,absolute:I(e,"absolute")});return k(()=>{const m=Q.filterProps(e);return r(Q,H({ref:s,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...R.value,"--v-toolbar-image-opacity":d.value,height:void 0,...B.value},e.style]},m,{collapse:g.value,flat:y.value}),t)}),{}}}),ft=V()({name:"VAppBarTitle",props:ue(),setup(e,o){let{slots:t}=o;return k(()=>r(ce,H(e,{class:"v-app-bar-title"}),t)),{}}}),gt=x({...p(),...Ze({variant:"text"})},"VToolbarItems"),mt=V()({name:"VToolbarItems",props:gt(),setup(e,o){let{slots:t}=o;return se({VBtn:{color:I(e,"color"),height:"inherit",variant:I(e,"variant")}}),k(()=>r("div",{class:["v-toolbar-items",e.class],style:e.style},[t.default?.()])),{}}}),yt={__name:"Header",setup(e){const o=$e(je),t=o.brand?.name,{push:s}=Oe(),u=l=>{l.toLowerCase().startsWith("http")?window.open(l,"_self"):s(l)};return(l,a)=>(E(),j(vt,{color:"primary"},{default:A(()=>[r(ft,{class:"cursor-pointer"},{default:A(()=>[Y(X(L(t)),1)]),_:1}),L(o).routes?(E(),j(mt,{key:0},{default:A(()=>[(E(!0),Ue(ne,null,Fe(L(o).routes,n=>(E(),j(Qe,{key:n.to,variant:"text",onClick:v=>u(n.to)},{default:A(()=>[Y(X(n.title),1)]),_:2},1032,["onClick"]))),128))]),_:1})):We("v-if",!0),r(me,{class:"mx-12 logo",src:L(o).brand?.logo},null,8,["src"])]),_:1}))}},Tt=De(yt,[["__scopeId","data-v-5e38a5f8"]]);export{Tt as default};
