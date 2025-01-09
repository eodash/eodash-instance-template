import{_ as b,W as g,Z as a,$ as r,a0 as l,a7 as f,a2 as o,aa as p,a5 as u,a1 as c,a3 as d,d as h,a4 as y,F as x,a6 as _,ab as v}from"./index-4ddEMaIb.js";import{V as w}from"./VMain-DaXTomRY.js";import"./ssrBoot-Cd_oB1vI.js";class k extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(s,n,t){n!==t&&(this[s]=t),this.render()}}class L extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;

          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(s,n,t){n!==t&&(this[s]=t),this.render()}}customElements.define("eox-layout",k);customElements.define("eox-layout-item",L);const $=["gap"],A=["id","h","w","x","y"],C={__name:"DashboardLayout",setup(i){const{bgWidget:s,importedWidgets:n,gap:t}=g();return(E,T)=>(a(),r(w,null,{default:l(()=>[f("eox-layout",{gap:o(t),style:p(`padding: ${o(t)}px`)},[o(s)?.component?(a(),u("eox-layout-item",{key:0,class:"bg-panel bg-surface",style:p(`margin: -${o(t)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(a(),r(c,{suspensible:""},{default:l(()=>[(a(),r(d(o(s)?.component),h({id:"bg-widget"},o(s)?.props),null,16))]),_:1}))],4)):y("v-if",!0),(a(!0),u(x,null,_(o(n),(e,m)=>(a(),r(v,{key:m,name:"fade"},{default:l(()=>[e.value.component?(a(),u("eox-layout-item",{id:e.value.id.toString(),key:e.value.id,class:"panel bg-surface",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(a(),r(c,{suspensible:""},{default:l(()=>[(a(),r(d(e.value.component),h({key:e.value.id,ref_for:!0},e.value.props),null,16))]),_:2},1024))],8,A)):y("v-if",!0)]),_:2},1024))),128))],12,$)]),_:1}))}},D=b(C,[["__scopeId","data-v-ebeeb1d1"]]);export{D as default};
