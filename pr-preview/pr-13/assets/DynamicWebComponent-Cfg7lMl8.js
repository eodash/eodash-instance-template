function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{h as m,l as p,r as d,ag as f,T as _,aq as g,q as u,t as y,ae as k,R as h,ap as v,_ as E}from"./index-1JPqI4wf.js";const P={class:"d-flex flex-column fill-height overflow-auto"},N={__name:"DynamicWebComponent",props:{link:{type:[String,Function],required:!0},constructorProp:String,tagName:{type:String,required:!0},properties:{type:Object,default:()=>({})},onMounted:Function,onUnmounted:Function},async setup(o){let t,s;const e=o,l=async()=>typeof e.link=="string"?await E(()=>import(e.link),__vite__mapDeps([])):await e.link(),i=customElements.get(e.tagName)?null:([t,s]=m(()=>l().catch(n=>{console.error(n)})),t=await t,s(),t);if(!customElements.get(e.tagName)&&e.constructorProp){const n=i[e.constructorProp];customElements.define(e.tagName,n)}const a=p(),r=d(null),c=f();return _(()=>{e.onMounted?.(r.value,a,c)}),g(()=>{e.onUnmounted?.(r.value,a,c)}),(n,x)=>(u(),y("span",P,[(u(),k(v(o.tagName),h(o.properties,{ref_key:"elementRef",ref:r}),null,16))]))}};export{N as default};
