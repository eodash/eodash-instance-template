function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./user_config-BmVivzpU.js","./index-B89YP-st.js","./index-sUO7BWtI.css","./MobileLayout-CgJ5Xi6U.js","./VMain-DbH8-Fnd.js","./ssrBoot-pLF7zlKv.js","./color-BEDZZtQp.js","./ssrBoot-BdorctIc.css","./VMain-Byt37V4c.css","./MobileLayout-WyEXb2ji.css","./DashboardLayout-DK88AJpj.js","./DashboardLayout-BFl1iksG.css","./Header-CZKwI9WA.js","./Header-CvxgFWiI.css","./Footer-CsguCh3G.js","./Footer-CfszXuCo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as g,e as y,_ as s,s as v,w as _,u as E,a as C,b as T,d as i,c as D,o as A,f as w,g as O,h as c,j as n,n as R,F as L,l as P,k as V}from"./index-B89YP-st.js";const I=async()=>{const o=g(y),t=e=>{Object.keys(o).forEach(a=>{o[a]=e[a]})};try{t((await s(()=>import(new URL(""+new URL("../config.js",import.meta.url).href,import.meta.url).href),__vite__mapDeps([]),import.meta.url)).default)}catch{try{t((await s(()=>import("./user_config-BmVivzpU.js"),__vite__mapDeps([0,1,2]),import.meta.url)).default)}catch{console.error("no dashboard configuration assigned")}}return o},U=o=>o(v),j=(o,t)=>{const e=o.__vccOpts||o;for(const[a,r]of t)e[a]=r;return e},x={__name:"Dashboard",async setup(o){let t,e;V(b=>({"127c4b03":n(l)}));const a=([t,e]=_(()=>I()),t=await t,e(),t),r=E("dashboardTheme",a.brand?.theme);r.global.name.value="dashboardTheme";const l=([t,e]=_(()=>P(a.brand?.font?.family,a.brand?.font?.link)),t=await t,e(),t),{loadSTAC:d}=C();[t,e]=_(()=>d()),await t,e();const{smAndDown:u}=T(),p=u.value?i(()=>s(()=>import("./MobileLayout-CgJ5Xi6U.js"),__vite__mapDeps([3,1,2,4,5,6,7,8,9]),import.meta.url)):i(()=>s(()=>import("./DashboardLayout-DK88AJpj.js"),__vite__mapDeps([10,1,2,4,5,6,7,8,11]),import.meta.url)),f=i(()=>s(()=>import("./Header-CZKwI9WA.js"),__vite__mapDeps([12,1,2,6,5,7,13]),import.meta.url)),h=i(()=>s(()=>import("./Footer-CsguCh3G.js"),__vite__mapDeps([14,1,2,6,15]),import.meta.url)),{mainRect:m}=D();return A(()=>{r.global.name.value="light"}),(b,k)=>(w(),O(L,null,[c(n(f)),c(n(p),{style:R(`height: calc(100dvh - ${n(m).top+n(m).bottom}px)`)},null,8,["style"]),c(n(h))],64))}},S=j(x,[["__scopeId","data-v-3c83a0bb"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));export{z as D,j as _,U as d};
