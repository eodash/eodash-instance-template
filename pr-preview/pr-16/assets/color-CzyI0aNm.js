import{p as l,ac as c,c as u,aQ as r,aH as g,aR as d,aS as v,aT as C,aU as b}from"./index-cdZWs1ov.js";const k=l({border:[Boolean,Number,String]},"border");function x(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c();return{borderClasses:u(()=>{const t=r(e)?e.value:e.border,o=[];if(t===!0||t==="")o.push(`${s}--border`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))o.push(`border-${a}`);return o})}}const y=l({elevation:{type:[Number,String],validator(e){const s=parseInt(e);return!isNaN(s)&&s>=0&&s<=24}}},"elevation");function S(e){return{elevationClasses:u(()=>{const n=r(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const h=l({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function $(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c();return{roundedClasses:u(()=>{const t=r(e)?e.value:e.rounded,o=r(e)?e.value:e.tile,a=[];if(t===!0||t==="")a.push(`${s}--rounded`);else if(typeof t=="string"||t===0)for(const f of String(t).split(" "))a.push(`rounded-${f}`);else(o||t===!1)&&a.push("rounded-0");return a})}}function i(e){return g(()=>{const s=[],n={};if(e.value.background)if(d(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&v(e.value.background)){const t=C(e.value.background);if(t.a==null||t.a===1){const o=b(t);n.color=o,n.caretColor=o}}}else s.push(`bg-${e.value.background}`);return e.value.text&&(d(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:n}})}function B(e,s){const n=u(()=>({text:r(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:o}=i(n);return{textColorClasses:t,textColorStyles:o}}function N(e,s){const n=u(()=>({background:r(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:o}=i(n);return{backgroundColorClasses:t,backgroundColorStyles:o}}export{N as a,y as b,h as c,x as d,S as e,$ as f,i as g,k as m,B as u};
