import{g,bO as c,ab as p,az as h,p as b,bP as S}from"./index-DGMBu-Jj.js";const _=b({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function s(o,d,i){return g()({name:o,props:_({mode:i,origin:d}),setup(n,r){let{slots:a}=r;const t={onBeforeEnter(e){n.origin&&(e.style.transformOrigin=n.origin)},onLeave(e){if(n.leaveAbsolute){const{offsetTop:l,offsetLeft:f,offsetWidth:y,offsetHeight:u}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${l}px`,e.style.left=`${f}px`,e.style.width=`${y}px`,e.style.height=`${u}px`}n.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(n.leaveAbsolute&&e?._transitionInitialStyles){const{position:l,top:f,left:y,width:u,height:x}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=l||"",e.style.top=f||"",e.style.left=y||"",e.style.width=u||"",e.style.height=x||""}}};return()=>{const e=n.group?c:p;return h(e,{name:n.disabled?"":o,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:t},a.default)}}})}function m(o,d){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return g()({name:o,props:{mode:{type:String,default:i},disabled:Boolean,group:Boolean},setup(n,r){let{slots:a}=r;const t=n.group?c:p;return()=>h(t,{name:n.disabled?"":o,css:!n.disabled,...n.disabled?{}:d},a.default)}})}function v(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=S(`offset-${i}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},onEnter(t){const e=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const l=`${t[n]}px`;t.style[i]="0",t.offsetHeight,t.style.transition=e.transition,o&&t._parent&&t._parent.classList.add(o),requestAnimationFrame(()=>{t.style[i]=l})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[n]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(t){o&&t._parent&&t._parent.classList.remove(o),a(t)}function a(t){const e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,e!=null&&(t.style[i]=e),delete t._initialStyle}}s("fab-transition","center center","out-in");s("dialog-bottom-transition");s("dialog-top-transition");const L=s("fade-transition");s("scale-transition");s("scroll-x-transition");s("scroll-x-reverse-transition");s("scroll-y-transition");s("scroll-y-reverse-transition");s("slide-x-transition");s("slide-x-reverse-transition");s("slide-y-transition");s("slide-y-reverse-transition");const T=m("expand-transition",v());m("expand-x-transition",v("",!0));export{L as V,T as a};
