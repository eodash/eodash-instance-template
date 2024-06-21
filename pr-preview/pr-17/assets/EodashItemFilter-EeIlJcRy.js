import{$ as p,a0 as c,at as d}from"./index-Cvb3b3yK.js";import m from"./DynamicWebComponent-DhSpMLP7.js";const f={__name:"EodashItemFilter",setup(u){const r=()=>d(()=>import("./eox-itemfilter-DzNaeUZj.js"),[]),o={config:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}],aggregateResults:"themes",enableHighlighting:!0,expandMultipleFilters:!1,expandMultipleResults:!1}},a=(t,i)=>{t.style.height="100%";const s=document.createElement("style");s.innerHTML=`
    section {
      margin: 0 !important;
    }
    section button#filter-reset {
      padding: 0 8px;
      top: 8px;
      right: 8px;
    }
  `,t?.shadowRoot?.appendChild(s);const l=document.createElement("div");l.setAttribute("slot","filterstitle"),l.innerHTML='<h4 style="margin: 14px 8px">Indicators</h4>',t.appendChild(l);const n=document.createElement("div");n.setAttribute("slot","resultstitle"),t.appendChild(n),t.apply(i.stac?.filter(e=>e.rel==="child")),t.config.onSelect=async e=>{console.log(e),await i.loadSelectedSTAC(e.href)}};return(t,i)=>(p(),c(m,{link:r,"tag-name":"eox-itemfilter",properties:o,"on-mounted":a}))}};export{f as default};
