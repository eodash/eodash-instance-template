import{e as _,f,aj as p,r as w,az as x,q as r,ae as l,ay as h,al as m,x as e,ap as g,an as k,ao as v,t as y,F as C,ak as A,y as V,v as E,aA as L,R as $}from"./index-1JPqI4wf.js";import{_ as B}from"./Dashboard-Ix2HfqEO.js";import{V as I,f as M}from"./VBtn-CG4BSYhn.js";import{V as z}from"./VMain-C8u2fKID.js";import"./color-BVMHSTBp.js";import"./ssrBoot-B4kGcuPd.js";class D extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(a,o,s){o!==s&&(this[a]=s),this.render()}}class H extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          background: lightgrey;
          border: 1px solid darkgrey;
          border-radius: 4px;
          padding: 4px 8px;
          overflow: hidden;


          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(a,o,s){o!==s&&(this[a]=s),this.render()}}customElements.define("eox-layout",D);customElements.define("eox-layout-item",H);const P=["gap"],R={class:"bg-widget",x:"0",y:"0",h:"12",w:"12"},S=["x","y","h","w"],T={__name:"DashboardLayout",setup(u){const a=_(f),[o]=p([a.template?.background]),s=a.template?.widgets,d=p(s),c=w([]),{slideBtns:n,slideInOut:b}=x(c,s);return(N,W)=>(r(),l(z,null,{default:h(()=>[m("eox-layout",{gap:e(a).template.gap??2},[m("eox-layout-item",R,[(r(),l(g(e(o).component),k(v(e(o).props)),null,16))]),(r(!0),y(C,null,A(e(s),(i,t)=>(r(),y("eox-layout-item",{ref_for:!0,ref_key:"itemEls",ref:c,key:t,class:"custom-widget",x:i.layout.x,y:i.layout.y,h:i.layout.h,w:i.layout.w},[e(n)[t].enabled?(r(),l(I,{key:0,position:"absolute",variant:"tonal",style:V(e(n)[t].style),class:"slide-btn",onClick:j=>e(b)(t)},{default:h(()=>[E(M,{icon:e(n)[t].active?e(n)[t].icon.in:e(n)[t].icon.out},null,8,["icon"])]),_:2},1032,["style","onClick"])):L("v-if",!0),(r(),l(g(e(d)[t].value.component),$({key:e(d)[t].value.id},e(d)[t].value.props),null,16))],8,S))),128))],8,P)]),_:1}))}},Q=B(T,[["__scopeId","data-v-5c2121da"]]);export{Q as default};
