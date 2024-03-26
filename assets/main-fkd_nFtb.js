function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{c as l}from"./Dashboard-D_40ZX11.js";import{_ as a}from"./index-DlaEC2ps.js";const p={id:Symbol(),title:"Tools",layout:{x:0,y:0,w:3,h:12},widget:{link:"https://cdn.skypack.dev/@eox/itemfilter",properties:{config:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0},{key:"themes",title:"Theme",type:"multiselect",featured:!0}],aggregateResults:"themes",enableHighlighting:!0}},onMounted:async function(t,o,i){t.apply(o?.stac),t.config.onSelect=async e=>{await o.loadSelectedSTAC(e.href)}},tagName:"eox-itemfilter"},type:"web-component"},d=({mapInstance:t,currentUrl:o})=>({layout:{x:9,y:0,w:3,h:12},defineWidget:i=>{const e=i?.links.find(r=>r.rel=="wms")??!1;return e?{id:`${e["wms:layers"][0]} Map`,title:"Map",type:"web-component",widget:{link:"https://cdn.skypack.dev/@eox/map",properties:{class:"fill-height fill-width",center:[15,48],layers:[{type:"Tile",source:{type:"TileWMS",url:e.href,params:{LAYERS:e["wms:layers"],TILED:!0},ratio:1,serverType:"geoserver"}}]},tagName:"eox-map"}}:{id:"Information",title:"Information",type:"web-component",widget:{link:()=>a(()=>import("./eox-stacinfo-DQG2MPAj.js"),__vite__mapDeps([])),tagName:"eox-stacinfo",properties:{for:o,allowHtml:"true",styleOverride:"#properties li > .value {font-weight: normal !important;}",header:"[]",subheader:"[]",properties:'["description"]',featured:"[]",footer:"[]"}}}}}),m=({currentUrl:t,mapInstance:o})=>({id:Symbol(),title:"Container",type:"internal",layout:{x:4,y:8,w:4,h:3},widget:{name:"WidgetsContainer",props:{widgets:[{id:"Information",title:"Information",type:"web-component",widget:{link:()=>a(()=>import("./eox-stacinfo-DQG2MPAj.js"),__vite__mapDeps([])),tagName:"eox-stacinfo",properties:{for:t,allowHtml:"true",styleOverride:"#properties li > .value {font-weight: normal !important;}",header:"[]",subheader:"[]",properties:'["description"]',featured:"[]",footer:"[]"}}},{defineWidget:i=>{const e=i?.assets?.legend?.href??!1;return e?{id:e,title:"Legend",type:"web-component",widget:{link:"https://unpkg.com/progressive-image-element@latest/dist/index.js",tagName:"progressive-image",properties:{src:e},onMounted(r){const n=document.createElement("img");n.src=e,r.appendChild(n)}}}:{id:"reset-zoom",title:"Reset Zoom",type:"web-component",widget:{link:new URL("/config-template/reset-zoom-btn/ResetZoom.S2AXqNgZ.js",import.meta.url).href,tagName:"reset-zoom-btn",properties:{map:o,to:6}}}}}]}}});let s=null;const c=({mapInstance:t})=>({id:Symbol(),widget:{link:()=>a(()=>import("./eox-map-CwzY1Njm.js"),__vite__mapDeps([])),properties:{class:"fill-height fill-width overflow-none",center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}]},tagName:"eox-map",onMounted(o,i,e){o.zoom=e.currentRoute.value.query.z,t.value=o.map,t.value?.on("moveend",s=r=>{e.push({query:{z:`${r.map.getView().getZoom()}`}})})},onUnmounted(o,i,e){t.value?.un("moveend",s)}},type:"web-component"}),y=l(t=>({id:"template-id",stacEndpoint:"https://eodash.github.io/catalog-template/template_catalog/catalog.json",routes:[],brand:{name:"Dashboard",font:{family:"Poppins"},theme:{colors:{primary:"#880808",secondary:"#AA4A44",background:"#d3d3d3",surface:"#d3d3d3"}}},template:{gap:6,background:c(t.states),widgets:[p,d(t.states),m(t.states)]}}));export{y as default};
