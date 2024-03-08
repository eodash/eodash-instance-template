import{q as l,ag as c,v as u,az as r,an as v,aA as d,aB as f,aC as C,aD as b}from"./index-B1UZdoYC.js";const k=l({border:[Boolean,Number,String]},"border");function x(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c();return{borderClasses:u(()=>{const t=r(e)?e.value:e.border,n=[];if(t===!0||t==="")n.push(`${s}--border`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))n.push(`border-${o}`);return n})}}const y=l({elevation:{type:[Number,String],validator(e){const s=parseInt(e);return!isNaN(s)&&s>=0&&s<=24}}},"elevation");function h(e){return{elevationClasses:u(()=>{const a=r(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const S=l({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function B(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c();return{roundedClasses:u(()=>{const t=r(e)?e.value:e.rounded,n=r(e)?e.value:e.tile,o=[];if(t===!0||t==="")o.push(`${s}--rounded`);else if(typeof t=="string"||t===0)for(const g of String(t).split(" "))o.push(`rounded-${g}`);else n&&o.push("rounded-0");return o})}}const $=l({tag:{type:String,default:"div"}},"tag");function i(e){return v(()=>{const s=[],a={};if(e.value.background)if(d(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&f(e.value.background)){const t=C(e.value.background);if(t.a==null||t.a===1){const n=b(t);a.color=n,a.caretColor=n}}}else s.push(`bg-${e.value.background}`);return e.value.text&&(d(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:a}})}function N(e,s){const a=u(()=>({text:r(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:n}=i(a);return{textColorClasses:t,textColorStyles:n}}function P(e,s){const a=u(()=>({background:r(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:n}=i(a);return{backgroundColorClasses:t,backgroundColorStyles:n}}export{S as a,B as b,k as c,y as d,x as e,h as f,i as g,N as h,$ as m,P as u};
