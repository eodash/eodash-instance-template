function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{q as s,ae as d,_ as p}from"./index-1JPqI4wf.js";import u from"./DynamicWebComponent-Cfg7lMl8.js";const h={__name:"EodashItemFilter",setup(_){const o=()=>p(()=>import("./eox-itemfilter-DzNaeUZj.js"),__vite__mapDeps([])),a={config:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0},{key:"themes",title:"Theme",type:"multiselect",featured:!0}],aggregateResults:"themes",enableHighlighting:!0}},n=(i,t,c)=>{i.apply(t.stac?.filter(e=>e.rel==="child"));const{query:r}=c.currentRoute.value;if("indicator"in r){const e=t.stac?.find(l=>l.id===r.indicator);e&&(i.selectedResult=e,t.loadSelectedSTAC(e.href))}i.config.onSelect=async e=>{console.log(e),await t.loadSelectedSTAC(e.href)}};return(i,t)=>(s(),d(u,{link:o,"tag-name":"eox-itemfilter",properties:a,"on-mounted":n}))}};export{h as default};
