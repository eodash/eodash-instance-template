import{G as v,E as b,R as d,aF as l,aG as g,aC as _}from"./index-cHNbZU0U.js";const h=v({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),O=(e,t)=>{let{slots:s}=t;const{transition:n,disabled:o,group:r,...i}=e,{component:a=r?l:g,...u}=typeof n=="object"?n:{};return b(a,d(typeof n=="string"?{name:o?"":n}:u,typeof n=="string"?{}:{disabled:o,group:r},i),s)};function y(e,t){if(!_)return;const s=t.modifiers||{},n=t.value,{handler:o,options:r}=typeof n=="object"?n:{handler:n,options:{}},i=new IntersectionObserver(function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=e._observe?.[t.instance.$.uid];if(!c)return;const f=a.some(p=>p.isIntersecting);o&&(!s.quiet||c.init)&&(!s.once||f||c.init)&&o(f,a,u),f&&s.once?m(e,t):c.init=!0},r);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function m(e,t){const s=e._observe?.[t.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const T={mounted:y,unmounted:m},P=T;export{O as M,P as i,h as m};
