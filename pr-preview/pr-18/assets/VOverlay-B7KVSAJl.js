import{b5 as ke,b6 as Oe,p as G,r as V,L as j,ao as se,w as L,b7 as _,b8 as De,b9 as ve,ba as te,bb as ne,bc as de,c as P,D as ce,bd as me,C as F,al as ye,ap as ue,be as Pe,bf as Ve,bg as Ce,x as pe,bh as ge,d as W,bi as Ie,s as Y,H as We,Z as je,at as Ae,q as qe,bj as ze,bk as $e,e as Ye,ac as Ge,h as Ue,g as Xe,y as Ze,i as Ke,j as Qe,Q as Je,R as et,ad as tt,am as nt,bl as ot,a as at,b as D,bm as rt,t as it,B as lt,v as st,F as ct,ab as ut,bn as ft}from"./index-BJoh-Mee.js";import{g as vt,B as oe,e as he,n as dt,m as mt,u as yt,b as gt,a as ht,s as bt}from"./forwardRefs-CfQZasYv.js";import{m as wt,M as Et}from"./transition-Cuz8w0hI.js";const Z=new WeakMap;function St(e,t){Object.keys(t).forEach(n=>{if(ke(n)){const o=Oe(n),r=Z.get(e);if(t[n]==null)r?.forEach(l=>{const[a,s]=l;a===o&&(e.removeEventListener(o,s),r.delete(l))});else if(!r||![...r].some(l=>l[0]===o&&l[1]===t[n])){e.addEventListener(o,t[n]);const l=r||new Set;l.add([o,t[n]]),Z.has(e)||Z.set(e,l)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function xt(e,t){Object.keys(t).forEach(n=>{if(ke(n)){const o=Oe(n),r=Z.get(e);r?.forEach(l=>{const[a,s]=l;a===o&&(e.removeEventListener(o,s),r.delete(l))})}else e.removeAttribute(n)})}function Te(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Ot(e):fe(e))return e;e=e.parentElement}return document.scrollingElement}function K(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(fe(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function fe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Ot(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function Pt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function Ct(){return!0}function Le(e,t,n){if(!e||Be(e,n)===!1)return!1;const o=Te(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const r=(typeof n.value=="object"&&n.value.include||(()=>[]))();return r.push(t),!r.some(l=>l?.contains(e.target))}function Be(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Ct)(e)}function pt(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Le(e,t,n)&&setTimeout(()=>{Be(e,n)&&o&&o(e)},0)}function be(e,t){const n=Te(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const At={mounted(e,t){const n=r=>pt(r,e,t),o=r=>{e._clickOutside.lastMousedownWasOutside=Le(r,e,t)};be(e,r=>{r.addEventListener("click",n,!0),r.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(be(e,n=>{if(!n||!e._clickOutside?.[t.instance.$.uid])return;const{onClick:o,onMousedown:r}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[t.instance.$.uid])}};function ae(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Tt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function we(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,r=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,l=n==="top"?0:n==="bottom"?t.height:n;return ae({x:r,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,r=n==="left"?0:n==="right"?t.width:n,l=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return ae({x:r,y:l},t)}return ae({x:t.width/2,y:t.height/2},t)}const Me={static:Mt,connected:Ft},Lt=G({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Me},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Bt(e,t){const n=V({}),o=V();j&&se(()=>!!(t.isActive.value&&e.locationStrategy),l=>{L(()=>e.locationStrategy,l),_(()=>{window.removeEventListener("resize",r),o.value=void 0}),window.addEventListener("resize",r,{passive:!0}),typeof e.locationStrategy=="function"?o.value=e.locationStrategy(t,e,n)?.updateLocation:o.value=Me[e.locationStrategy](t,e,n)?.updateLocation});function r(l){o.value?.(l)}return{contentStyles:n,updateLocation:o}}function Mt(){}function Rt(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=dt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Ft(e,t,n){(Array.isArray(e.target.value)||Pt(e.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:l}=De(()=>{const u=ve(t.location,e.isRtl.value),c=t.origin==="overlap"?u:t.origin==="auto"?te(u):ve(t.origin,e.isRtl.value);return u.side===c.side&&u.align===ne(c).align?{preferredAnchor:de(u),preferredOrigin:de(c)}:{preferredAnchor:u,preferredOrigin:c}}),[a,s,d,m]=["minWidth","minHeight","maxWidth","maxHeight"].map(u=>P(()=>{const c=parseFloat(t[u]);return isNaN(c)?1/0:c})),y=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const u=t.offset.split(" ").map(parseFloat);return u.length<2&&u.push(0),u}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let C=!1;const k=new ResizeObserver(()=>{C&&S()});L([e.target,e.contentEl],(u,c)=>{let[x,A]=u,[h,w]=c;h&&!Array.isArray(h)&&k.unobserve(h),x&&!Array.isArray(x)&&k.observe(x),w&&k.unobserve(w),A&&k.observe(A)},{immediate:!0}),_(()=>{k.disconnect()});function S(){if(C=!1,requestAnimationFrame(()=>C=!0),!e.target.value||!e.contentEl.value)return;const u=vt(e.target.value),c=Rt(e.contentEl.value,e.isRtl.value),x=K(e.contentEl.value),A=12;x.length||(x.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(c.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),c.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const h=x.reduce((E,g)=>{const f=g.getBoundingClientRect(),v=new oe({x:g===document.documentElement?0:f.x,y:g===document.documentElement?0:f.y,width:g.clientWidth,height:g.clientHeight});return E?new oe({x:Math.max(E.left,v.left),y:Math.max(E.top,v.top),width:Math.min(E.right,v.right)-Math.max(E.left,v.left),height:Math.min(E.bottom,v.bottom)-Math.max(E.top,v.top)}):v},void 0);h.x+=A,h.y+=A,h.width-=A*2,h.height-=A*2;let w={anchor:r.value,origin:l.value};function H(E){const g=new oe(c),f=we(E.anchor,u),v=we(E.origin,g);let{x:M,y:T}=Tt(f,v);switch(E.anchor.side){case"top":T-=y.value[0];break;case"bottom":T+=y.value[0];break;case"left":M-=y.value[0];break;case"right":M+=y.value[0];break}switch(E.anchor.align){case"top":T-=y.value[1];break;case"bottom":T+=y.value[1];break;case"left":M-=y.value[1];break;case"right":M+=y.value[1];break}return g.x+=M,g.y+=T,g.width=Math.min(g.width,d.value),g.height=Math.min(g.height,m.value),{overflows:he(g,h),x:M,y:T}}let B=0,p=0;const i={x:0,y:0},N={x:!1,y:!1};let J=-1;for(;!(J++>10);){const{x:E,y:g,overflows:f}=H(w);B+=E,p+=g,c.x+=E,c.y+=g;{const v=me(w.anchor),M=f.x.before||f.x.after,T=f.y.before||f.y.after;let z=!1;if(["x","y"].forEach(O=>{if(O==="x"&&M&&!N.x||O==="y"&&T&&!N.y){const R={anchor:{...w.anchor},origin:{...w.origin}},U=O==="x"?v==="y"?ne:te:v==="y"?te:ne;R.anchor=U(R.anchor),R.origin=U(R.origin);const{overflows:I}=H(R);(I[O].before<=f[O].before&&I[O].after<=f[O].after||I[O].before+I[O].after<(f[O].before+f[O].after)/2)&&(w=R,z=N[O]=!0)}}),z)continue}f.x.before&&(B+=f.x.before,c.x+=f.x.before),f.x.after&&(B-=f.x.after,c.x-=f.x.after),f.y.before&&(p+=f.y.before,c.y+=f.y.before),f.y.after&&(p-=f.y.after,c.y-=f.y.after);{const v=he(c,h);i.x=h.width-v.x.before-v.x.after,i.y=h.height-v.y.before-v.y.after,B+=v.x.before,c.x+=v.x.before,p+=v.y.before,c.y+=v.y.before}break}const ee=me(w.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:F(re(p)),left:e.isRtl.value?void 0:F(re(B)),right:e.isRtl.value?F(re(-B)):void 0,minWidth:F(ee==="y"?Math.min(a.value,u.width):a.value),maxWidth:F(Ee(ye(i.x,a.value===1/0?0:a.value,d.value))),maxHeight:F(Ee(ye(i.y,s.value===1/0?0:s.value,m.value)))}),{available:i,contentBox:c}}return L(()=>[r.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>S()),ce(()=>{const u=S();if(!u)return;const{available:c,contentBox:x}=u;x.height>c.y&&requestAnimationFrame(()=>{S(),requestAnimationFrame(()=>{S()})})}),{updateLocation:S}}function re(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ee(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ie=!0;const Q=[];function Nt(e){!ie||Q.length?(Q.push(e),le()):(ie=!1,e(),le())}let Se=-1;function le(){cancelAnimationFrame(Se),Se=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?le():ie=!0})}const Re={none:null,close:Dt,block:Vt,reposition:It},_t=G({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Re}},"VOverlay-scroll-strategies");function Ht(e,t){if(!j)return;let n;ue(async()=>{n?.stop(),t.isActive.value&&e.scrollStrategy&&(n=Pe(),await new Promise(o=>setTimeout(o)),n.active&&n.run(()=>{typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):Re[e.scrollStrategy]?.(t,e,n)}))}),_(()=>{n?.stop()})}function Dt(e){function t(n){e.isActive.value=!1}Fe(e.targetEl.value??e.contentEl.value,t)}function Vt(e,t){const n=e.root.value?.offsetParent,o=[...new Set([...K(e.targetEl.value,t.contained?n:void 0),...K(e.contentEl.value,t.contained?n:void 0)])].filter(a=>!a.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,l=(a=>fe(a)&&a)(n||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((a,s)=>{a.style.setProperty("--v-body-scroll-x",F(-a.scrollLeft)),a.style.setProperty("--v-body-scroll-y",F(-a.scrollTop)),a!==document.documentElement&&a.style.setProperty("--v-scrollbar-offset",F(r)),a.classList.add("v-overlay-scroll-blocked")}),_(()=>{o.forEach((a,s)=>{const d=parseFloat(a.style.getPropertyValue("--v-body-scroll-x")),m=parseFloat(a.style.getPropertyValue("--v-body-scroll-y")),y=a.style.scrollBehavior;a.style.scrollBehavior="auto",a.style.removeProperty("--v-body-scroll-x"),a.style.removeProperty("--v-body-scroll-y"),a.style.removeProperty("--v-scrollbar-offset"),a.classList.remove("v-overlay-scroll-blocked"),a.scrollLeft=-d,a.scrollTop=-m,a.style.scrollBehavior=y}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function It(e,t,n){let o=!1,r=-1,l=-1;function a(s){Nt(()=>{const d=performance.now();e.updateLocation.value?.(s),o=(performance.now()-d)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{n.run(()=>{Fe(e.targetEl.value??e.contentEl.value,s=>{o?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{a(s)})})):a(s)})})}),_(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(r)})}function Fe(e,t){const n=[document,...K(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),_(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const Wt=Symbol.for("vuetify:v-menu"),jt=G({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function qt(e,t){let n=()=>{};function o(a){n?.();const s=Number(a?e.openDelay:e.closeDelay);return new Promise(d=>{n=Ve(s,()=>{t?.(a),d(a)})})}function r(){return o(!0)}function l(){return o(!1)}return{clearDelay:n,runOpenDelay:r,runCloseDelay:l}}const zt=G({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...jt()},"VOverlay-activator");function $t(e,t){let{isActive:n,isTop:o}=t;const r=Ce("useActivator"),l=V();let a=!1,s=!1,d=!0;const m=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),y=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!m.value),{runOpenDelay:C,runCloseDelay:k}=qt(e,i=>{i===(e.openOnHover&&a||m.value&&s)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==i&&(d=!0),n.value=i)}),S=V(),u={onClick:i=>{i.stopPropagation(),l.value=i.currentTarget||i.target,n.value||(S.value=[i.clientX,i.clientY]),n.value=!n.value},onMouseenter:i=>{i.sourceCapabilities?.firesTouchEvents||(a=!0,l.value=i.currentTarget||i.target,C())},onMouseleave:i=>{a=!1,k()},onFocus:i=>{Ie(i.target,":focus-visible")!==!1&&(s=!0,i.stopPropagation(),l.value=i.currentTarget||i.target,C())},onBlur:i=>{s=!1,i.stopPropagation(),k()}},c=P(()=>{const i={};return y.value&&(i.onClick=u.onClick),e.openOnHover&&(i.onMouseenter=u.onMouseenter,i.onMouseleave=u.onMouseleave),m.value&&(i.onFocus=u.onFocus,i.onBlur=u.onBlur),i}),x=P(()=>{const i={};if(e.openOnHover&&(i.onMouseenter=()=>{a=!0,C()},i.onMouseleave=()=>{a=!1,k()}),m.value&&(i.onFocusin=()=>{s=!0,C()},i.onFocusout=()=>{s=!1,k()}),e.closeOnContentClick){const N=pe(Wt,null);i.onClick=()=>{n.value=!1,N?.closeParents()}}return i}),A=P(()=>{const i={};return e.openOnHover&&(i.onMouseenter=()=>{d&&(a=!0,d=!1,C())},i.onMouseleave=()=>{a=!1,k()}),i});L(o,i=>{i&&(e.openOnHover&&!a&&(!m.value||!s)||m.value&&!s&&(!e.openOnHover||!a))&&(n.value=!1)}),L(n,i=>{i||setTimeout(()=>{S.value=void 0})},{flush:"post"});const h=ge();ue(()=>{h.value&&ce(()=>{l.value=h.el})});const w=ge(),H=P(()=>e.target==="cursor"&&S.value?S.value:w.value?w.el:Ne(e.target,r)||l.value),B=P(()=>Array.isArray(H.value)?void 0:H.value);let p;return L(()=>!!e.activator,i=>{i&&j?(p=Pe(),p.run(()=>{Yt(e,r,{activatorEl:l,activatorEvents:c})})):p&&p.stop()},{flush:"post",immediate:!0}),_(()=>{p?.stop()}),{activatorEl:l,activatorRef:h,target:H,targetEl:B,targetRef:w,activatorEvents:c,contentEvents:x,scrimEvents:A}}function Yt(e,t,n){let{activatorEl:o,activatorEvents:r}=n;L(()=>e.activator,(d,m)=>{if(m&&d!==m){const y=s(m);y&&a(y)}d&&ce(()=>l())},{immediate:!0}),L(()=>e.activatorProps,()=>{l()}),_(()=>{a()});function l(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&St(d,W(r.value,m))}function a(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&xt(d,W(r.value,m))}function s(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const m=Ne(d,t);return o.value=m?.nodeType===Node.ELEMENT_NODE?m:void 0,o.value}}function Ne(e,t){if(!e)return;let n;if(e==="parent"){let o=t?.proxy?.$el?.parentNode;for(;o?.hasAttribute("data-no-activator");)o=o.parentNode;n=o}else typeof e=="string"?n=document.querySelector(e):"$el"in e?n=e.$el:n=e;return n}function Gt(){if(!j)return Y(!1);const{ssr:e}=We();if(e){const t=Y(!1);return je(()=>{t.value=!0}),t}else return Y(!0)}const xe=Symbol.for("vuetify:stack"),$=Ae([]);function Ut(e,t,n){const o=Ce("useStack"),r=!n,l=pe(xe,void 0),a=Ae({activeChildren:new Set});qe(xe,a);const s=Y(+t.value);se(e,()=>{const y=$.at(-1)?.[1];s.value=y?y+10:+t.value,r&&$.push([o.uid,s.value]),l?.activeChildren.add(o.uid),_(()=>{if(r){const C=$e($).findIndex(k=>k[0]===o.uid);$.splice(C,1)}l?.activeChildren.delete(o.uid)})});const d=Y(!0);r&&ue(()=>{const y=$.at(-1)?.[0]===o.uid;setTimeout(()=>d.value=y)});const m=P(()=>!a.activeChildren.size);return{globalTop:ze(d),localTop:m,stackStyles:P(()=>({zIndex:s.value}))}}function Xt(e){return{teleportTarget:P(()=>{const n=e();if(n===!0||!j)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let r=o.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",o.appendChild(r)),r})}}function Zt(e){const{modelValue:t,color:n,...o}=e;return D(ut,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&D("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Kt=G({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...zt(),...Ye(),...Ge(),...mt(),...Lt(),..._t(),...Ue(),...wt()},"VOverlay"),tn=Xe()({name:"VOverlay",directives:{ClickOutside:At},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Kt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:r}=t;const l=Ze(e,"modelValue"),a=P({get:()=>l.value,set:b=>{b&&e.disabled||(l.value=b)}}),{themeClasses:s}=Ke(e),{rtlClasses:d,isRtl:m}=Qe(),{hasContent:y,onAfterLeave:C}=yt(e,a),k=Je(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:S,localTop:u,stackStyles:c}=Ut(a,et(e,"zIndex"),e._disableGlobalStack),{activatorEl:x,activatorRef:A,target:h,targetEl:w,targetRef:H,activatorEvents:B,contentEvents:p,scrimEvents:i}=$t(e,{isActive:a,isTop:u}),{teleportTarget:N}=Xt(()=>{const b=e.attach||e.contained;if(b)return b;const q=x?.value?.getRootNode();return q instanceof ShadowRoot?q:!1}),{dimensionStyles:J}=tt(e),ee=Gt(),{scopeId:E}=gt();L(()=>e.disabled,b=>{b&&(a.value=!1)});const g=V(),f=V(),v=V(),{contentStyles:M,updateLocation:T}=Bt(e,{isRtl:m,contentEl:v,target:h,isActive:a});Ht(e,{root:g,contentEl:v,targetEl:w,isActive:a,updateLocation:T});function z(b){r("click:outside",b),e.persistent?X():a.value=!1}function O(b){return a.value&&S.value&&(!e.scrim||b.target===f.value)}j&&L(a,b=>{b?window.addEventListener("keydown",R):window.removeEventListener("keydown",R)},{immediate:!0}),nt(()=>{j&&window.removeEventListener("keydown",R)});function R(b){b.key==="Escape"&&S.value&&(e.persistent?X():(a.value=!1,v.value?.contains(document.activeElement)&&x.value?.focus()))}const U=ot();se(()=>e.closeOnBack,()=>{ft(U,b=>{S.value&&a.value?(b(!1),e.persistent?X():a.value=!1):b()})});const I=V();L(()=>a.value&&(e.absolute||e.contained)&&N.value==null,b=>{if(b){const q=kt(g.value);q&&q!==document.scrollingElement&&(I.value=q.scrollTop)}});function X(){e.noClickAnimation||v.value&&ht(v.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:bt})}function _e(){r("afterEnter")}function He(){C(),r("afterLeave")}return at(()=>D(ct,null,[n.activator?.({isActive:a.value,targetRef:H,props:W({ref:A},B.value,e.activatorProps)}),ee.value&&y.value&&D(rt,{disabled:!N.value,to:N.value},{default:()=>[D("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":a.value,"v-overlay--contained":e.contained},s.value,d.value,e.class],style:[c.value,{"--v-overlay-opacity":e.opacity,top:F(I.value)},e.style],ref:g},E,o),[D(Zt,W({color:k,modelValue:a.value&&!!e.scrim,ref:f},i.value),null),D(Et,{appear:!0,persisted:!0,transition:e.transition,target:h.value,onAfterEnter:_e,onAfterLeave:He},{default:()=>[it(D("div",W({ref:v,class:["v-overlay__content",e.contentClass],style:[J.value,M.value]},p.value,e.contentProps),[n.default?.({isActive:a})]),[[lt,a.value],[st("click-outside"),{handler:z,closeConditional:O,include:()=>[x.value]}]])]})])]})])),{activatorEl:x,scrimEl:f,target:h,animateClick:X,contentEl:v,globalTop:S,localTop:u,updateLocation:T}}});export{tn as V,Kt as m};
