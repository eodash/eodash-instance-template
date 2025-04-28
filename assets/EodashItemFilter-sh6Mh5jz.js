import{aK as Ce,aL as yr,E as fs,c as hs,r as ds,az as ps,a1 as gs,a7 as Jn,a9 as Zn,m as ys,a4 as ms,$ as bs}from"./index-D18_tOQA.js";import{i as fe,x as L,E as Ee}from"./lit-element-18UBsFm1.js";import{a as Ct,o as jt}from"./unsafe-html-BbqaAb1r.js";import{n as q,s as ws}from"./directive-CiXpmpUr.js";import{d as Ze,_ as It,c as vs,a as xs,s as As}from"./radio.style-CB-OkRxT.js";import"./toolcool-range-slider.min-CpSFU9Ph.js";import{o as _s}from"./orient2d-DArCjZZA.js";import{f as Rt,a as An,b as Cs,m as Ms,l as Es}from"./index-BSpBAx16.js";const Ls=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  overflow-y: auto;
}
details {
  width: 100%;
}
`,tt=`
:host, :root {
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--secondary-color) 30%,
    transparent
  );
  --item-select-color: var(--primary-color);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
}
* {
  font-family: Roboto, sans-serif;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
}
eox-itemfilter-container {
  min-width: 200px;
  display: var(--filter-display);
}
eox-itemfilter-results {
  flex-grow: 1;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
.cards li span {
  display: block;
  flex-basis: 100%;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem var(--padding);
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: 13px;
  align-items: center;
  text-transform: var(--text-transform);
}
.cards .title {
  font-size: 16px;
  font-weight: 600;
  text-wrap: auto;
  line-height: 19px;
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.cards .subtitle {
  font-size: 14px;
  color: #757575;
  text-wrap: auto;
  line-height: 19px;
}
.image {
  width: 24px;
  height: 24px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 8px;
}
.cards .image {
  width: 100%;
  height: 190px;
  margin-bottom: 8px;
}
.cards .result-action {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 12px;
  padding: 6px;
  background: white;
  border-radius: 50%;
}
.title-container {
  display: flex;
  flex-direction: column;
}
h6.main-heading {
  font-size: 1rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-top: var(--padding);
  padding: 0 var(--padding);
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  margin-left: auto;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 var(--padding);
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul:not(#filters) > li {
  padding: 5px 0;
}
ul#results li {
  padding: 5px var(--padding);
  display: flex;
  justify-content: space-between;
}
ul#results li .result-action {
  display: flex;
  align-items: center;
  height: fit-content;
  line-height: 1;
  opacity: .5;
  transition: opacity .3s ease-in-out;
}
ul#results li .result-action:hover {
  opacity: 1;
}
ul#results li.highlighted .result-action > * {
  filter: invert(1);
}
ul#results ul.cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  margin: 20px 0;
  cursor: initial;
}
ul#results ul.cards li {
  flex-basis: calc(33.3% - 77px);
  min-width: 0;
  align-self: flex-start;
  position: relative;
}
@media screen and (max-width: 768px) {
  ul#results ul.cards li {
    flex-basis: calc(50% - 70px);
  }
}
@media screen and (max-width: 480px) {
  ul#results ul.cards li {
    flex-basis: 100%;
  }
}
section {
  position: relative;
  background-color: var(--background-color);
}
button#filter-reset {
  position: absolute;
  top: 0;
  right: var(--padding);
  padding: 2px 10px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: var(--primary-color);
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 16px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: -5px;
  height: 14px;
  width: 14px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 14px;
  width: 14px;
}
.inline-content {
  border: 1.5px solid var(--secondary-color);
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  background: var(--inline-bg-color);
  margin-top: 4px;
  padding: 8px;
}
.inline-container {
  position: relative;
  align-items: center;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 24px;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.inline-container:hover {
  border: 1px solid var(--primary-color);
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
.inline-container::-webkit-scrollbar {
  height: 2px;
}
.inline-container::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 2px;
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.chip-title {
  pointer-events: none;
  text-transform: var(--text-transform);
}
.chip {
  display: flex;
  align-items: center;
  background: var(--item-color);
  border-radius: 30px;
  margin-right: 4px;
  padding: 5px 10px;
  font-size: small;
  cursor: default;
  white-space: nowrap;
}
.chip.highlighted {
  background: var(--primary-color);
  color: white;
}
.chip-close {
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  right: -25px;
  background: white;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 24px;
  width: 24px;
}
.chip-close:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
  height: 24px;
  width: 24px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
.chip-container {
  position: relative;
  max-width: 75%;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:hover,
.autocomplete-input:hover {
  border: 1px solid var(--primary-color);
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: var(--background-color);
  background: var(--item-select-color);
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
}
.select-overflow {
  max-height: 185px;
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: red;
  font-size: x-small;
  top: -8px;
}
input {
  background-color: var(--background-color);
}
`;class Ss extends fe{static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1}#e(e){this.dispatchEvent(new CustomEvent("details-toggled",{detail:e,bubbles:!0,composed:!0}))}render(){return L`
      <style>
        ${!this.unstyled&&tt}
      </style>

      ${q(this.filterObject.featured,()=>L`<slot name="filter"></slot>`,()=>L`<details
            @toggle="${this.#e}"
            class="details-filter"
            ?open=${this.filterObject.expanded||Ee}
          >
            <summary>
              <span
                class="title"
                style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
              >
                ${this.filterObject.title||this.filterObject.key||"Filter"}
                <slot name="reset-button"></slot>
              </span>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}customElements.define("eox-itemfilter-expandcontainer",Ss);function be(t){return Array.isArray?Array.isArray(t):wr(t)==="[object Array]"}function $s(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Rs(t){return t==null?"":$s(t)}function le(t){return typeof t=="string"}function mr(t){return typeof t=="number"}function Ps(t){return t===!0||t===!1||Ds(t)&&wr(t)=="[object Boolean]"}function br(t){return typeof t=="object"}function Ds(t){return br(t)&&t!==null}function X(t){return t!=null}function wn(t){return!t.trim().length}function wr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ts="Incorrect 'index' type",Bs=t=>`Invalid value for key ${t}`,ks=t=>`Pattern length exceeds max of ${t}.`,Os=t=>`Missing ${t} property in key`,js=t=>`Property 'weight' in key '${t}' must be a positive integer`,Qn=Object.prototype.hasOwnProperty;class Is{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let s=vr(r);this._keys.push(s),this._keyMap[s.id]=s,n+=s.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function vr(t){let e=null,n=null,r=null,s=1,o=null;if(le(t)||be(t))r=t,e=er(t),n=_n(t);else{if(!Qn.call(t,"name"))throw new Error(Os("name"));const a=t.name;if(r=a,Qn.call(t,"weight")&&(s=t.weight,s<=0))throw new Error(js(a));e=er(a),n=_n(a),o=t.getFn}return{path:e,id:n,weight:s,src:r,getFn:o}}function er(t){return be(t)?t:t.split(".")}function _n(t){return be(t)?t.join("."):t}function Ns(t,e){let n=[],r=!1;const s=(o,a,c)=>{if(X(o))if(!a[c])n.push(o);else{let u=a[c];const f=o[u];if(!X(f))return;if(c===a.length-1&&(le(f)||mr(f)||Ps(f)))n.push(Rs(f));else if(be(f)){r=!0;for(let h=0,g=f.length;h<g;h+=1)s(f[h],a,c+1)}else a.length&&s(f,a,c+1)}};return s(t,le(e)?e.split("."):e,0),r?n:n[0]}const Fs={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Hs={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},qs={location:0,threshold:.6,distance:100},Us={useExtendedSearch:!1,getFn:Ns,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var M={...Hs,...Fs,...qs,...Us};const Ws=/[^ ]+/g;function Gs(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(s){const o=s.match(Ws).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class Bn{constructor({getFn:e=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){this.norm=Gs(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,le(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();le(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!X(e)||wn(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((s,o)=>{let a=s.getFn?s.getFn(e):this.getFn(e,s.path);if(X(a)){if(be(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(X(h))if(le(h)&&!wn(h)){let g={v:h,i:f,n:this.norm.get(h)};c.push(g)}else be(h)&&h.forEach((g,b)=>{u.push({nestedArrIndex:b,value:g})})}r.$[o]=c}else if(le(a)&&!wn(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function xr(t,e,{getFn:n=M.getFn,fieldNormWeight:r=M.fieldNormWeight}={}){const s=new Bn({getFn:n,fieldNormWeight:r});return s.setKeys(t.map(vr)),s.setSources(e),s.create(),s}function Ks(t,{getFn:e=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){const{keys:r,records:s}=t,o=new Bn({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(s),o}function Mt(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:s=M.distance,ignoreLocation:o=M.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return s?a+c/s:c?1:a}function zs(t=[],e=M.minMatchCharLength){let n=[],r=-1,s=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(s=o-1,s-r+1>=e&&n.push([r,s]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Be=32;function Vs(t,e,n,{location:r=M.location,distance:s=M.distance,threshold:o=M.threshold,findAllMatches:a=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,includeMatches:u=M.includeMatches,ignoreLocation:f=M.ignoreLocation}={}){if(e.length>Be)throw new Error(ks(Be));const h=e.length,g=t.length,b=Math.max(0,Math.min(r,g));let y=o,v=b;const A=c>1||u,$=A?Array(g):[];let E;for(;(E=t.indexOf(e,v))>-1;){let O=Mt(e,{currentLocation:E,expectedLocation:b,distance:s,ignoreLocation:f});if(y=Math.min(O,y),v=E+h,A){let U=0;for(;U<h;)$[E+U]=1,U+=1}}v=-1;let D=[],R=1,T=h+g;const B=1<<h-1;for(let O=0;O<h;O+=1){let U=0,W=T;for(;U<W;)Mt(e,{errors:O,currentLocation:b+W,expectedLocation:b,distance:s,ignoreLocation:f})<=y?U=W:T=W,W=Math.floor((T-U)/2+U);T=W;let Oe=Math.max(1,b-W+1),$e=a?g:Math.min(b+W,g)+h,se=Array($e+2);se[$e+1]=(1<<O)-1;for(let N=$e;N>=Oe;N-=1){let K=N-1,Ie=n[t.charAt(K)];if(A&&($[K]=+!!Ie),se[N]=(se[N+1]<<1|1)&Ie,O&&(se[N]|=(D[N+1]|D[N])<<1|1|D[N+1]),se[N]&B&&(R=Mt(e,{errors:O,currentLocation:K,expectedLocation:b,distance:s,ignoreLocation:f}),R<=y)){if(y=R,v=K,v<=b)break;Oe=Math.max(1,2*b-v)}}if(Mt(e,{errors:O+1,currentLocation:b,expectedLocation:b,distance:s,ignoreLocation:f})>y)break;D=se}const Z={isMatch:v>=0,score:Math.max(.001,R)};if(A){const O=zs($,c);O.length?u&&(Z.indices=O):Z.isMatch=!1}return Z}function Ys(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const s=t.charAt(n);e[s]=(e[s]||0)|1<<r-n-1}return e}const Pt=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):t=>t;class Ar{constructor(e,{location:n=M.location,threshold:r=M.threshold,distance:s=M.distance,includeMatches:o=M.includeMatches,findAllMatches:a=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,isCaseSensitive:u=M.isCaseSensitive,ignoreDiacritics:f=M.ignoreDiacritics,ignoreLocation:h=M.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:s,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h},e=u?e:e.toLowerCase(),e=f?Pt(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const g=(y,v)=>{this.chunks.push({pattern:y,alphabet:Ys(y),startIndex:v})},b=this.pattern.length;if(b>Be){let y=0;const v=b%Be,A=b-v;for(;y<A;)g(this.pattern.substr(y,Be),y),y+=Be;if(v){const $=b-Be;g(this.pattern.substr($),$)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:s}=this.options;if(e=n?e:e.toLowerCase(),e=r?Pt(e):e,this.pattern===e){let A={isMatch:!0,score:0};return s&&(A.indices=[[0,e.length-1]]),A}const{location:o,distance:a,threshold:c,findAllMatches:u,minMatchCharLength:f,ignoreLocation:h}=this.options;let g=[],b=0,y=!1;this.chunks.forEach(({pattern:A,alphabet:$,startIndex:E})=>{const{isMatch:D,score:R,indices:T}=Vs(e,A,$,{location:o+E,distance:a,threshold:c,findAllMatches:u,minMatchCharLength:f,includeMatches:s,ignoreLocation:h});D&&(y=!0),b+=R,D&&T&&(g=[...g,...T])});let v={isMatch:y,score:y?b/this.chunks.length:1};return y&&s&&(v.indices=g),v}}class Le{constructor(e){this.pattern=e}static isMultiMatch(e){return tr(e,this.multiRegex)}static isSingleMatch(e){return tr(e,this.singleRegex)}search(){}}function tr(t,e){const n=t.match(e);return n?n[1]:null}class Xs extends Le{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Js extends Le{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Zs extends Le{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Qs extends Le{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class eo extends Le{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class to extends Le{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class _r extends Le{constructor(e,{location:n=M.location,threshold:r=M.threshold,distance:s=M.distance,includeMatches:o=M.includeMatches,findAllMatches:a=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,isCaseSensitive:u=M.isCaseSensitive,ignoreDiacritics:f=M.ignoreDiacritics,ignoreLocation:h=M.ignoreLocation}={}){super(e),this._bitapSearch=new Ar(e,{location:n,threshold:r,distance:s,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Cr extends Le{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const s=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,s.push([r,n-1]);const a=!!s.length;return{isMatch:a,score:a?0:1,indices:s}}}const Cn=[Xs,Cr,Zs,Qs,to,eo,Js,_r],nr=Cn.length,no=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ro="|";function io(t,e={}){return t.split(ro).map(n=>{let r=n.trim().split(no).filter(o=>o&&!!o.trim()),s=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,f=-1;for(;!u&&++f<nr;){const h=Cn[f];let g=h.isMultiMatch(c);g&&(s.push(new h(g,e)),u=!0)}if(!u)for(f=-1;++f<nr;){const h=Cn[f];let g=h.isSingleMatch(c);if(g){s.push(new h(g,e));break}}}return s})}const so=new Set([_r.type,Cr.type]);class oo{constructor(e,{isCaseSensitive:n=M.isCaseSensitive,ignoreDiacritics:r=M.ignoreDiacritics,includeMatches:s=M.includeMatches,minMatchCharLength:o=M.minMatchCharLength,ignoreLocation:a=M.ignoreLocation,findAllMatches:c=M.findAllMatches,location:u=M.location,threshold:f=M.threshold,distance:h=M.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:s,minMatchCharLength:o,findAllMatches:c,ignoreLocation:a,location:u,threshold:f,distance:h},e=n?e:e.toLowerCase(),e=r?Pt(e):e,this.pattern=e,this.query=io(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:s,ignoreDiacritics:o}=this.options;e=s?e:e.toLowerCase(),e=o?Pt(e):e;let a=0,c=[],u=0;for(let f=0,h=n.length;f<h;f+=1){const g=n[f];c.length=0,a=0;for(let b=0,y=g.length;b<y;b+=1){const v=g[b],{isMatch:A,indices:$,score:E}=v.search(e);if(A){if(a+=1,u+=E,r){const D=v.constructor.type;so.has(D)?c=[...c,...$]:c.push($)}}else{u=0,a=0,c.length=0;break}}if(a){let b={isMatch:!0,score:u/a};return r&&(b.indices=c),b}}return{isMatch:!1,score:1}}}const Mn=[];function ao(...t){Mn.push(...t)}function En(t,e){for(let n=0,r=Mn.length;n<r;n+=1){let s=Mn[n];if(s.condition(t,e))return new s(t,e)}return new Ar(t,e)}const Dt={AND:"$and",OR:"$or"},Ln={PATH:"$path",PATTERN:"$val"},Sn=t=>!!(t[Dt.AND]||t[Dt.OR]),lo=t=>!!t[Ln.PATH],co=t=>!be(t)&&br(t)&&!Sn(t),rr=t=>({[Dt.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Mr(t,e,{auto:n=!0}={}){const r=s=>{let o=Object.keys(s);const a=lo(s);if(!a&&o.length>1&&!Sn(s))return r(rr(s));if(co(s)){const u=a?s[Ln.PATH]:o[0],f=a?s[Ln.PATTERN]:s[u];if(!le(f))throw new Error(Bs(u));const h={keyId:_n(u),pattern:f};return n&&(h.searcher=En(f,e)),h}let c={children:[],operator:o[0]};return o.forEach(u=>{const f=s[u];be(f)&&f.forEach(h=>{c.children.push(r(h))})}),c};return Sn(t)||(t=rr(t)),r(t)}function uo(t,{ignoreFieldNorm:e=M.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:s,norm:o,score:a})=>{const c=s?s.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function fo(t,e){const n=t.matches;e.matches=[],X(n)&&n.forEach(r=>{if(!X(r.indices)||!r.indices.length)return;const{indices:s,value:o}=r;let a={indices:s,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function ho(t,e){e.score=t.score}function po(t,e,{includeMatches:n=M.includeMatches,includeScore:r=M.includeScore}={}){const s=[];return n&&s.push(fo),r&&s.push(ho),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return s.length&&s.forEach(u=>{u(o,c)}),c})}class Se{constructor(e,n={},r){this.options={...M,...n},this.options.useExtendedSearch,this._keyStore=new Is(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Bn))throw new Error(Ts);this._myIndex=n||xr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){X(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,s=this._docs.length;r<s;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,s-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:s,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=le(e)?le(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return uo(u,{ignoreFieldNorm:c}),o&&u.sort(a),mr(n)&&n>-1&&(u=u.slice(0,n)),po(u,this._docs,{includeMatches:r,includeScore:s})}_searchStringList(e){const n=En(e,this.options),{records:r}=this._myIndex,s=[];return r.forEach(({v:o,i:a,n:c})=>{if(!X(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&s.push({item:o,idx:a,matches:[{score:f,value:o,norm:c,indices:h}]})}),s}_searchLogical(e){const n=Mr(e,this.options),r=(c,u,f)=>{if(!c.children){const{keyId:g,searcher:b}=c,y=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:b});return y&&y.length?[{idx:f,item:u,matches:y}]:[]}const h=[];for(let g=0,b=c.children.length;g<b;g+=1){const y=c.children[g],v=r(y,u,f);if(v.length)h.push(...v);else if(c.operator===Dt.AND)return[]}return h},s=this._myIndex.records,o={},a=[];return s.forEach(({$:c,i:u})=>{if(X(c)){let f=r(n,c,u);f.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=En(e,this.options),{keys:r,records:s}=this._myIndex,o=[];return s.forEach(({$:a,i:c})=>{if(!X(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!X(n))return[];let s=[];if(be(n))n.forEach(({v:o,i:a,n:c})=>{if(!X(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&s.push({score:f,key:e,value:o,idx:a,norm:c,indices:h})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:f}=r.searchIn(o);c&&s.push({score:u,key:e,value:o,norm:a,indices:f})}return s}}Se.version="7.1.0";Se.createIndex=xr;Se.parseIndex=Ks;Se.config=M;Se.parseQuery=Mr;ao(oo);function Er(t,e){const n=new Se(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function go(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const $n=Math.min,qe=Math.max,Tt=Math.round,Et=Math.floor,ce=t=>({x:t,y:t});function Lr(t){return t.split("-")[0]}function yo(t){return t.split("-")[1]}function mo(t){return t==="x"?"y":"x"}function bo(t){return t==="y"?"height":"width"}function Sr(t){return["top","bottom"].includes(Lr(t))?"y":"x"}function wo(t){return mo(Sr(t))}function $r(t){const{x:e,y:n,width:r,height:s}=t;return{width:r,height:s,top:n,left:e,right:e+r,bottom:n+s,x:e,y:n}}function ir(t,e,n){let{reference:r,floating:s}=t;const o=Sr(e),a=wo(e),c=bo(a),u=Lr(e),f=o==="y",h=r.x+r.width/2-s.width/2,g=r.y+r.height/2-s.height/2,b=r[c]/2-s[c]/2;let y;switch(u){case"top":y={x:h,y:r.y-s.height};break;case"bottom":y={x:h,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:g};break;case"left":y={x:r.x-s.width,y:g};break;default:y={x:r.x,y:r.y}}switch(yo(e)){case"start":y[a]-=b*(n&&f?-1:1);break;case"end":y[a]+=b*(n&&f?-1:1);break}return y}const vo=async(t,e,n)=>{const{placement:r="bottom",strategy:s="absolute",middleware:o=[],platform:a}=n,c=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:g}=ir(f,r,u),b=r,y={},v=0;for(let A=0;A<c.length;A++){const{name:$,fn:E}=c[A],{x:D,y:R,data:T,reset:B}=await E({x:h,y:g,initialPlacement:r,placement:b,strategy:s,middlewareData:y,rects:f,platform:a,elements:{reference:t,floating:e}});h=D??h,g=R??g,y={...y,[$]:{...y[$],...T}},B&&v<=50&&(v++,typeof B=="object"&&(B.placement&&(b=B.placement),B.rects&&(f=B.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):B.rects),{x:h,y:g}=ir(f,b,u)),A=-1)}return{x:h,y:g,placement:b,strategy:s,middlewareData:y}};function Nt(){return typeof window<"u"}function Ke(t){return Rr(t)?(t.nodeName||"").toLowerCase():"#document"}function J(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function he(t){var e;return(e=(Rr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Rr(t){return Nt()?t instanceof Node||t instanceof J(t).Node:!1}function re(t){return Nt()?t instanceof Element||t instanceof J(t).Element:!1}function ue(t){return Nt()?t instanceof HTMLElement||t instanceof J(t).HTMLElement:!1}function sr(t){return!Nt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof J(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:n,overflowY:r,display:s}=ie(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(s)}function xo(t){return["table","td","th"].includes(Ke(t))}function Ft(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function kn(t){const e=On(),n=re(t)?ie(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Ao(t){let e=Me(t);for(;ue(e)&&!We(e);){if(kn(e))return e;if(Ft(e))return null;e=Me(e)}return null}function On(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function We(t){return["html","body","#document"].includes(Ke(t))}function ie(t){return J(t).getComputedStyle(t)}function Ht(t){return re(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Me(t){if(Ke(t)==="html")return t;const e=t.assignedSlot||t.parentNode||sr(t)&&t.host||he(t);return sr(e)?e.host:e}function Pr(t){const e=Me(t);return We(e)?t.ownerDocument?t.ownerDocument.body:t.body:ue(e)&&nt(e)?e:Pr(e)}function Qe(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=Pr(t),o=s===((r=t.ownerDocument)==null?void 0:r.body),a=J(s);if(o){const c=Rn(a);return e.concat(a,a.visualViewport||[],nt(s)?s:[],c&&n?Qe(c):[])}return e.concat(s,Qe(s,[],n))}function Rn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Dr(t){const e=ie(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const s=ue(t),o=s?t.offsetWidth:n,a=s?t.offsetHeight:r,c=Tt(n)!==o||Tt(r)!==a;return c&&(n=o,r=a),{width:n,height:r,$:c}}function jn(t){return re(t)?t:t.contextElement}function Ue(t){const e=jn(t);if(!ue(e))return ce(1);const n=e.getBoundingClientRect(),{width:r,height:s,$:o}=Dr(e);let a=(o?Tt(n.width):n.width)/r,c=(o?Tt(n.height):n.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const _o=ce(0);function Tr(t){const e=J(t);return!On()||!e.visualViewport?_o:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Co(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==J(t)?!1:e}function ke(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),o=jn(t);let a=ce(1);e&&(r?re(r)&&(a=Ue(r)):a=Ue(t));const c=Co(o,n,r)?Tr(o):ce(0);let u=(s.left+c.x)/a.x,f=(s.top+c.y)/a.y,h=s.width/a.x,g=s.height/a.y;if(o){const b=J(o),y=r&&re(r)?J(r):r;let v=b,A=Rn(v);for(;A&&r&&y!==v;){const $=Ue(A),E=A.getBoundingClientRect(),D=ie(A),R=E.left+(A.clientLeft+parseFloat(D.paddingLeft))*$.x,T=E.top+(A.clientTop+parseFloat(D.paddingTop))*$.y;u*=$.x,f*=$.y,h*=$.x,g*=$.y,u+=R,f+=T,v=J(A),A=Rn(v)}}return $r({width:h,height:g,x:u,y:f})}function In(t,e){const n=Ht(t).scrollLeft;return e?e.left+n:ke(he(t)).left+n}function Br(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=r.left+e.scrollLeft-(n?0:In(t,r)),o=r.top+e.scrollTop;return{x:s,y:o}}function Mo(t){let{elements:e,rect:n,offsetParent:r,strategy:s}=t;const o=s==="fixed",a=he(r),c=e?Ft(e.floating):!1;if(r===a||c&&o)return n;let u={scrollLeft:0,scrollTop:0},f=ce(1);const h=ce(0),g=ue(r);if((g||!g&&!o)&&((Ke(r)!=="body"||nt(a))&&(u=Ht(r)),ue(r))){const y=ke(r);f=Ue(r),h.x=y.x+r.clientLeft,h.y=y.y+r.clientTop}const b=a&&!g&&!o?Br(a,u,!0):ce(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+b.x,y:n.y*f.y-u.scrollTop*f.y+h.y+b.y}}function Eo(t){return Array.from(t.getClientRects())}function Lo(t){const e=he(t),n=Ht(t),r=t.ownerDocument.body,s=qe(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=qe(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+In(t);const c=-n.scrollTop;return ie(r).direction==="rtl"&&(a+=qe(e.clientWidth,r.clientWidth)-s),{width:s,height:o,x:a,y:c}}function So(t,e){const n=J(t),r=he(t),s=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,c=0,u=0;if(s){o=s.width,a=s.height;const f=On();(!f||f&&e==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}return{width:o,height:a,x:c,y:u}}function $o(t,e){const n=ke(t,!0,e==="fixed"),r=n.top+t.clientTop,s=n.left+t.clientLeft,o=ue(t)?Ue(t):ce(1),a=t.clientWidth*o.x,c=t.clientHeight*o.y,u=s*o.x,f=r*o.y;return{width:a,height:c,x:u,y:f}}function or(t,e,n){let r;if(e==="viewport")r=So(t,n);else if(e==="document")r=Lo(he(t));else if(re(e))r=$o(e,n);else{const s=Tr(t);r={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return $r(r)}function kr(t,e){const n=Me(t);return n===e||!re(n)||We(n)?!1:ie(n).position==="fixed"||kr(n,e)}function Ro(t,e){const n=e.get(t);if(n)return n;let r=Qe(t,[],!1).filter(c=>re(c)&&Ke(c)!=="body"),s=null;const o=ie(t).position==="fixed";let a=o?Me(t):t;for(;re(a)&&!We(a);){const c=ie(a),u=kn(a);!u&&c.position==="fixed"&&(s=null),(o?!u&&!s:!u&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||nt(a)&&!u&&kr(t,a))?r=r.filter(h=>h!==a):s=c,a=Me(a)}return e.set(t,r),r}function Po(t){let{element:e,boundary:n,rootBoundary:r,strategy:s}=t;const a=[...n==="clippingAncestors"?Ft(e)?[]:Ro(e,this._c):[].concat(n),r],c=a[0],u=a.reduce((f,h)=>{const g=or(e,h,s);return f.top=qe(g.top,f.top),f.right=$n(g.right,f.right),f.bottom=$n(g.bottom,f.bottom),f.left=qe(g.left,f.left),f},or(e,c,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Do(t){const{width:e,height:n}=Dr(t);return{width:e,height:n}}function To(t,e,n){const r=ue(e),s=he(e),o=n==="fixed",a=ke(t,!0,o,e);let c={scrollLeft:0,scrollTop:0};const u=ce(0);if(r||!r&&!o)if((Ke(e)!=="body"||nt(s))&&(c=Ht(e)),r){const b=ke(e,!0,o,e);u.x=b.x+e.clientLeft,u.y=b.y+e.clientTop}else s&&(u.x=In(s));const f=s&&!r&&!o?Br(s,c):ce(0),h=a.left+c.scrollLeft-u.x-f.x,g=a.top+c.scrollTop-u.y-f.y;return{x:h,y:g,width:a.width,height:a.height}}function vn(t){return ie(t).position==="static"}function ar(t,e){if(!ue(t)||ie(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return he(t)===n&&(n=n.ownerDocument.body),n}function Or(t,e){const n=J(t);if(Ft(t))return n;if(!ue(t)){let s=Me(t);for(;s&&!We(s);){if(re(s)&&!vn(s))return s;s=Me(s)}return n}let r=ar(t,e);for(;r&&xo(r)&&vn(r);)r=ar(r,e);return r&&We(r)&&vn(r)&&!kn(r)?n:r||Ao(t)||n}const Bo=async function(t){const e=this.getOffsetParent||Or,n=this.getDimensions,r=await n(t.floating);return{reference:To(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ko(t){return ie(t).direction==="rtl"}const Oo={convertOffsetParentRelativeRectToViewportRelativeRect:Mo,getDocumentElement:he,getClippingRect:Po,getOffsetParent:Or,getElementRects:Bo,getClientRects:Eo,getDimensions:Do,getScale:Ue,isElement:re,isRTL:ko};function jr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function jo(t,e){let n=null,r;const s=he(t);function o(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function a(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),o();const f=t.getBoundingClientRect(),{left:h,top:g,width:b,height:y}=f;if(c||e(),!b||!y)return;const v=Et(g),A=Et(s.clientWidth-(h+b)),$=Et(s.clientHeight-(g+y)),E=Et(h),R={rootMargin:-v+"px "+-A+"px "+-$+"px "+-E+"px",threshold:qe(0,$n(1,u))||1};let T=!0;function B(Z){const O=Z[0].intersectionRatio;if(O!==u){if(!T)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},1e3)}O===1&&!jr(f,t.getBoundingClientRect())&&a(),T=!1}try{n=new IntersectionObserver(B,{...R,root:s.ownerDocument})}catch{n=new IntersectionObserver(B,R)}n.observe(t)}return a(!0),o}function Io(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=jn(t),h=s||o?[...f?Qe(f):[],...Qe(e)]:[];h.forEach(E=>{s&&E.addEventListener("scroll",n,{passive:!0}),o&&E.addEventListener("resize",n)});const g=f&&c?jo(f,n):null;let b=-1,y=null;a&&(y=new ResizeObserver(E=>{let[D]=E;D&&D.target===f&&y&&(y.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var R;(R=y)==null||R.observe(e)})),n()}),f&&!u&&y.observe(f),y.observe(e));let v,A=u?ke(t):null;u&&$();function $(){const E=ke(t);A&&!jr(A,E)&&n(),A=E,v=requestAnimationFrame($)}return n(),()=>{var E;h.forEach(D=>{s&&D.removeEventListener("scroll",n),o&&D.removeEventListener("resize",n)}),g?.(),(E=y)==null||E.disconnect(),y=null,u&&cancelAnimationFrame(v)}}const No=(t,e,n)=>{const r=new Map,s={platform:Oo,...n},o={...s.platform,_c:r};return vo(t,e,{...s,platform:o})};function Fo(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Io(e,n,()=>{n.matches(":popover-open")&&No(e,n,{strategy:"fixed"}).then(({x:s,y:o})=>{Object.assign(n.style,{left:`${s}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Ir(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Er({target:{value:""}},t)}function Ho(t,e){e.inlineMode&&t.stopPropagation()}function qo(t){t.inlineMode&&(t.showDropdown=!0)}function Uo(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function Wo(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Ir(e),e.showDropdown=!1)}function Go(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Ir(e),e.showDropdown=!1)}function Ko(t,e){var n,r,s=0,o,a,c,u,f,h,g,b=t[0],y=t[1],v=e.length;for(n=0;n<v;n++){r=0;var A=e[n],$=A.length-1;if(h=A[0],h[0]!==A[$][0]&&h[1]!==A[$][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-b,c=h[1]-y,r;r<$;r++){if(g=A[r+1],u=g[0]-b,f=g[1]-y,c===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&c<=0||f<=0&&c>=0){if(o=_s(a,u,c,f,0,0),o===0)return 0;(o>0&&f>0&&c<=0||o<0&&f<=0&&c>0)&&s++}h=g,c=f,a=u}}return s%2!==0}function Nr(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function zo(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ge(t){return t.type==="Feature"?t.geometry:t}function te(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Nr(t),s=Ge(e),o=s.type,a=e.bbox;let c=s.coordinates;if(a&&Vo(r,a)===!1)return!1;o==="Polygon"&&(c=[c]);let u=!1;for(var f=0;f<c.length;++f){const h=Ko(r,c[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function Vo(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Fr{constructor(e=[],n=Yo){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,s=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(s,a)>=0)break;n[e]=a,e=o}n[e]=s}_down(e){const{data:n,compare:r}=this,s=this.length>>1,o=n[e];for(;e<s;){let a=(e<<1)+1,c=n[a];const u=a+1;if(u<this.length&&r(n[u],c)<0&&(a=u,c=n[u]),r(c,o)>=0)break;n[e]=c,e=a}n[e]=o}}function Yo(t,e){return t<e?-1:t>e?1:0}function Hr(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function Xo(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class lr{constructor(e,n,r,s){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=s,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function Jo(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)cr(n[r],e)}else cr(t,e)}let Lt=0,St=0,$t=0;function cr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let s=0;s<r.length;s++)for(let o=0;o<r[s].length;o++){let a=r[s][o][0],c=null;St=St+1;for(let u=0;u<r[s][o].length-1;u++){c=r[s][o][u+1];const f=new lr(a,Lt,St,$t),h=new lr(c,Lt,St,$t+1);f.otherEvent=h,h.otherEvent=f,Hr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(f),e.push(h),a=c,$t=$t+1}}Lt=Lt+1}class Zo{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function Qo(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,s=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,c=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,f=e.rightSweepEvent.p.y,h=(f-c)*(s-n)-(u-a)*(o-r),g=(u-a)*(r-c)-(f-c)*(n-a),b=(s-n)*(r-c)-(o-r)*(n-a);if(h===0)return!1;const y=g/h,v=b/h;if(y>=0&&y<=1&&v>=0&&v<=1){const A=n+y*(s-n),$=r+y*(o-r);return[A,$]}return!1}function ea(t,e){e=e||!1;const n=[],r=new Fr([],Xo);for(;t.length;){const s=t.pop();if(s.isLeftEndpoint){const o=new Zo(s);for(let a=0;a<r.data.length;a++){const c=r.data[a];if(e&&c.leftSweepEvent.featureId===s.featureId)continue;const u=Qo(o,c);u!==!1&&n.push(u)}r.push(o)}else s.isLeftEndpoint===!1&&r.pop()}return n}function ta(t,e){const n=new Fr([],Hr);return Jo(t,n),ea(n,e)}var na=ta;function Nn(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:s=!0}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Rt(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Rt(e));const a=na(An(o),s);let c=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,c.push(f))})}else c=a;return An(c.map(u=>Cs(u)))}function qr(t,e,n){if(t!==null)for(var r,s,o,a,c,u,f,h=0,g=0,b,y=t.type,v=y==="FeatureCollection",A=y==="Feature",$=v?t.features.length:1,E=0;E<$;E++){f=v?t.features[E].geometry:A?t.geometry:t,b=f?f.type==="GeometryCollection":!1,c=b?f.geometries.length:1;for(var D=0;D<c;D++){var R=0,T=0;if(a=b?f.geometries[D]:f,a!==null){u=a.coordinates;var B=a.type;switch(h=0,B){case null:break;case"Point":if(e(u,g,E,R,T)===!1)return!1;g++,R++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],g,E,R,T)===!1)return!1;g++,B==="MultiPoint"&&R++}B==="LineString"&&R++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(s=0;s<u[r].length-h;s++){if(e(u[r][s],g,E,R,T)===!1)return!1;g++}B==="MultiLineString"&&R++,B==="Polygon"&&T++}B==="Polygon"&&R++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(T=0,s=0;s<u[r].length;s++){for(o=0;o<u[r][s].length-h;o++){if(e(u[r][s][o],g,E,R,T)===!1)return!1;g++}T++}R++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(qr(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function ra(t,e){var n,r,s,o,a,c,u,f,h,g,b=0,y=t.type==="FeatureCollection",v=t.type==="Feature",A=y?t.features.length:1;for(n=0;n<A;n++){for(c=y?t.features[n].geometry:v?t.geometry:t,f=y?t.features[n].properties:v?t.properties:{},h=y?t.features[n].bbox:v?t.bbox:void 0,g=y?t.features[n].id:v?t.id:void 0,u=c?c.type==="GeometryCollection":!1,a=u?c.geometries.length:1,s=0;s<a;s++){if(o=u?c.geometries[s]:c,o===null){if(e(null,b,f,h,g)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,b,f,h,g)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],b,f,h,g)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}b++}}function Bt(t,e){ra(t,function(n,r,s,o,a){var c=n===null?null:n.type;switch(c){case null:case"Point":case"LineString":case"Polygon":return e(Rt(n,s,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(c){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],g={type:u,coordinates:h};if(e(Rt(g,s),r,f)===!1)return!1}})}function Pn(t,e={}){const n=Ge(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return ia(n,e);case"MultiPolygon":return sa(n,e);default:throw new Error("invalid poly")}}function ia(t,e={}){const r=Ge(t).coordinates,s=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Ur(r,s)}function sa(t,e={}){const r=Ge(t).coordinates,s=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(Ur(a,s))}),An(o)}function Ur(t,e){return t.length>1?Ms(t,e):Es(t[0],e)}function oa(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Bt(t,s=>{Bt(e,o=>{if(r===!1)return!1;r=aa(s.geometry,o.geometry,n)})}),r}function aa(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!fa(t.coordinates,e.coordinates);case"LineString":return!ur(e,t);case"Polygon":return!te(t,e)}break;case"LineString":switch(e.type){case"Point":return!ur(t,e);case"LineString":return!la(t,e,n);case"Polygon":return!fr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!te(e,t);case"LineString":return!fr(t,e,n);case"Polygon":return!ca(e,t,n)}}return!1}function ur(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(ua(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function la(t,e,n){return Nn(t,e,{ignoreSelfIntersections:n}).features.length>0}function fr(t,e,n){for(const s of e.coordinates)if(te(s,t))return!0;return Nn(e,Pn(t),{ignoreSelfIntersections:n}).features.length>0}function ca(t,e,n){for(const s of t.coordinates[0])if(te(s,e))return!0;for(const s of e.coordinates[0])if(te(s,t))return!0;return Nn(Pn(t),Pn(e),{ignoreSelfIntersections:n}).features.length>0}function ua(t,e,n){const r=n[0]-t[0],s=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-s*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function fa(t,e){return t[0]===e[0]&&t[1]===e[1]}function ha(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Bt(t,s=>{Bt(e,o=>{if(r===!0)return!0;r=!oa(s.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var da=ha;function kt(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return qr(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Ot(t,e,n={}){const r=Nr(t),s=zo(e);for(let o=0;o<s.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===s.length-2&&(a="end"),o===0&&o+1===s.length-1&&(a="both")),pa(s[o],s[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function pa(t,e,n,r,s){const o=n[0],a=n[1],c=t[0],u=t[1],f=e[0],h=e[1],g=n[0]-c,b=n[1]-u,y=f-c,v=h-u,A=g*v-b*y;if(s!==null){if(Math.abs(A)>s)return!1}else if(A!==0)return!1;if(Math.abs(y)===Math.abs(v)&&Math.abs(y)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(y)>=Math.abs(v)?y>0?c<o&&o<=f:f<=o&&o<c:v>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(y)>=Math.abs(v)?y>0?c<=o&&o<f:f<o&&o<=c:v>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(y)>=Math.abs(v)?y>0?c<o&&o<f:f<o&&o<c:v>0?u<a&&a<h:h<a&&a<u}else return Math.abs(y)>=Math.abs(v)?y>0?c<=o&&o<=f:f<=o&&o<=c:v>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function ga(t,e){var n=Ge(t),r=Ge(e),s=n.type,o=r.type;switch(s){case"Point":switch(o){case"MultiPoint":return ya(n,r);case"LineString":return Ot(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return te(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return ma(n,r);case"LineString":return ba(n,r);case"Polygon":case"MultiPolygon":return wa(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return va(n,r);case"Polygon":case"MultiPolygon":return xa(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Aa(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+s+" geometry not supported")}}function ya(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(Gr(e.coordinates[n],t.coordinates)){r=!0;break}return r}function ma(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,s=0;s<e.coordinates.length;s++)Gr(t.coordinates[n],e.coordinates[s])&&(r=!0);if(!r)return!1}return!0}function ba(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Ot(t.coordinates[r],e))return!1;n||(n=Ot(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function wa(t,e){for(var n=!0,r=!1,s=0;s<t.coordinates.length;s++){if(r=te(t.coordinates[s],e),!r){n=!1;break}r=te(t.coordinates[s],e,{ignoreBoundary:!0})}return n&&r}function va(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Ot(t.coordinates[n],e))return!1;return!0}function xa(t,e){var n=kt(e),r=kt(t);if(!Wr(n,r))return!1;for(var s=!1,o=0;o<t.coordinates.length;o++){if(!te(t.coordinates[o],e))return!1;if(s||(s=te(t.coordinates[o],e,{ignoreBoundary:!0})),!s&&o<t.coordinates.length-1){var a=_a(t.coordinates[o],t.coordinates[o+1]);s=te(a,e,{ignoreBoundary:!0})}}return s}function Aa(t,e){var n=kt(t),r=kt(e);if(!Wr(r,n))return!1;for(var s=0;s<t.coordinates[0].length;s++)if(!te(t.coordinates[0][s],e))return!1;return!0}function Wr(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Gr(t,e){return t[0]===e[0]&&t[1]===e[1]}function _a(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Ca=ga;const Ma=(t,e)=>e?da(t,e):!0,Ea=(t,e)=>e?Ca(t,e):!0;function La(t,e="highlight",n="title"){const r=(o,a,c)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=c},s=(o,a=[])=>{let c="",u=0;return a.forEach(f=>{const h=f[1]+1;c+=[o.substring(u,f[0]),`<mark class="${e}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),c+=o.substring(u),c};return t.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const c={...o};return a.forEach(u=>{u.key===n&&r(c,u.key,s(u.value,u.indices))}),c})}let Kr;const Sa=(t,e)=>{Kr=new Se(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},$a=async(t,e,n)=>{const r=Object.entries(e).filter(([,c])=>c.type==="text"||c.type==="select"||c.type==="multiselect").reduce((c,[u,f])=>{const h="$or",g=[],b=(y,v)=>{const A={};f.type==="text"?A[y]=`${v}`:A[u]=`="${y}"`,g.push(A)};return Object.entries(f.state).filter(([,y])=>y).forEach(([y,v])=>b(y,v)),g.length>0&&c.push({[h]:g}),c},[]);let s;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)s=t;else{const c={$and:[...r]},u=Kr.search(c);s=n.enableHighlighting?La(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(e).filter(([,c])=>c.type==="range").reduce((c,[u,f])=>(c[u]={min:f.state.min,max:f.state.max,format:f.format},c),{});if(Object.keys(o).length>0){const c=[];for(let u=0;u<s.length;u++){const f={};for(const[h,g]of Object.entries(o)){const b=v=>g.format==="date"?Ze(v).unix():v,y=et(h,s[u]);y?Array.isArray(y)?f[h]=o[h].min<=b(y[1])&&b(y[0])<=o[h].max:b(y)>=o[h].min&&b(y)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&c.push(s[u])}s=[...c]}const a=Object.entries(e).filter(([,c])=>c.type==="spatial").reduce((c,[u,f])=>(c[u]={geometry:f.state.geometry,mode:f.state.mode},c),{});if(Object.values(a).map(c=>c.geometry).filter(c=>!!c).length>0){const c=[];for(let u=0;u<s.length;u++){const f={};for(const h of Object.keys(a)){const g=et(h,s[u]),b=a[h].mode||"within";g&&(b==="within"?Ea(g,a[h].geometry):Ma(g,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&c.push(s[u])}s=[...c]}return s};function Ra(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function qt(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function hr(t,e){return t*2+e}function Pa(t){return Object.keys(t).map(e=>({title:L`${t[e].title||t[e].key}:
        <strong>${t[e].stringifiedState}</strong>`,key:e})).filter(e=>t[e.key].dirty)}function Dn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Da(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function zr(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r?.classList.contains("details-filter")){if(!r.open||e?.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(s=>{const o=s.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!r?.open||e?.expandMultipleResults)return;n.querySelectorAll("details").forEach(s=>{s!==r&&s.removeAttribute("open")})}}function et(t,e){return t?.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}class Ta extends fe{static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}constructor(){super(),this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=this.#i.bind(this),this._handleKeyDown=this.#r.bind(this)}set showDropdown(e){this.renderRoot.querySelector("[popover]").togglePopover(e)}get showDropdown(){return this.renderRoot.querySelector("[popover]")?.matches(":popover-open")}#e(){setTimeout(()=>this._overlayCleanup=Fo(this))}#t(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),this.#e()}connectedCallback(){super.connectedCallback(),this.inlineMode&&this.#t()}#n(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()}disconnectedCallback(){this.inlineMode&&this.#n(),super.disconnectedCallback()}_overlayCleanup(){}#i(e){Go(e,this)}#r(e){Wo(e,this)}#s(e){Uo(e,this)}#a(){qo(this)}#o(e){Ho(e,this)}#l(e){go(e,this)}#c(e){Er(e,this)}updateInline(){this.inlineMode&&this.requestUpdate()}updated(e){e.has("inlineMode")&&(this.inlineMode?this.#t():this.#n())}render(){return L`
      <style>
        ${!this.unstyled&&tt}
      </style>
      ${this.inlineMode?L`
            <div
              class="inline-container-wrapper"
              @click="${this.#s}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Pa(this.filters)}
                      .controller=${{remove:e=>this.#l(e)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${q(Dn(this.filters),()=>L`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${Dn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${this.#s}"
                    @focus="${this.#a}"
                    @input="${this.#c}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div popover="manual">
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${this.#r}"
                  @click="${this.#o}"
                  @focus="${this.#o}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:L`<slot name="section"></slot>`}
    `}}customElements.define("eox-itemfilter-container",Ta);function Ba(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",qt(t.filterObject),t.requestUpdate()}function ka(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Tn="ddd, D MMM YYYY HH:mm:ss";function Oa(t){if(t.filterObject=qt(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function ja(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Ze.unix(n).format(Tn)} - ${Ze.unix(r).format(Tn)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function Ia(t,e,n){const r=n.filterObject.format==="date",s=n.filterObject.state[t],o=r?Ze.unix(s).format(Tn):s;return L`<div class="range-${e}">${o}</div>`}function Na(t){Fa(-1,t),qt(t.filterObject),t.requestUpdate()}function Fa(t,e){e.selectedItems=[],Fn(e),Yr(e)}function Vr(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,s)=>s!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),Fn(e),Yr(e)}function Ha(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function qa(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&Vr(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function Ua(t,e){(t.has("suggestions")||t.has("query"))&&Fn(e)}function Wa(t,e){const n=t.filterObject?.sort||((r,s)=>r.localeCompare(s));return e.sort(n).map(r=>r)}function Fn(t){let e;t.query&&(e=new Se(t.suggestions,{threshold:.4}).search(t.query).map(r=>r.item)),t.filteredSuggestions=Wa(t,e||t.suggestions),t.filterObject?.filterKeys&&(t.filteredSuggestions=t.filterObject?.filterKeys.map(n=>`${n}`),t.filterObject.state=t.filterObject?.filterKeys.map(n=>`${n}`).reduce((n,r)=>(r in n||(n[r]=void 0),n),t.filterObject.state)),t.highlightedIndex=-1}function Yr(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Ga(t){qt(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function Ka(t){t.renderRoot.querySelector("#eox-map").innerHTML="",Xr(t)}function za(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function Xr(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&Va(t.geometry),r=Ra(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const s=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{s(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{s(o.features.getArray()[0])})},1e3)}function Va(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}class Ya extends fe{static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.isValid=!1}#e=()=>{ka(this)};reset(){Ba(this)}debouncedInputHandler=It(this.#e,500,{leading:!0});createRenderRoot(){return this}render(){return q(this.filterObject,()=>L`
        <style></style>
        <div class="text-container">
          <div class="text-container-wrapper">
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${this.filterObject.validation?.pattern||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${e=>e.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `)}}customElements.define("eox-itemfilter-text",Ya);function Xa(t,e,n){return t.filter(r=>{const s=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(c=>n.filters[n.config.aggregateResults].state[c])),(o?.length?o.includes(e):!0)&&Array.isArray(s)?s.includes(e):s===e})}function Ja(t,e){return L`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||Ee}
    >
      <summary>
        <span class="title">
          ${t}
          <span class="count"
            >${e.aggregateResults(e.results,t).length}</span
          >
        </span>
      </summary>
      <div>
        ${Jr(e,t)}
      </div>
    </details>
  `}function Jr(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,s=t.config,o=a=>t.selectedResult?.[s.idProperty]===a[s.idProperty]?"highlighted":Ee;return L`
    <ul class=${t.resultType}>
      ${vs(r,a=>a.id,a=>L`
          <li
            class=${o(a)}
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <span id="${a.id}">
              ${q(s.subTitleProperty||s.imageProperty,()=>L`
                  ${et(s.imageProperty,a)?L`
                        <img
                          class="image"
                          src="${et(s.imageProperty,a)}"
                        />
                      `:L`
                        <svg
                          class="image"
                          width="800"
                          height="600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="800"
                            height="600"
                            fill="var(--primary-color)"
                          />
                        </svg>
                      `}
                  <div class="title-container">
                    <span class="title"
                      >${Ct(a[s.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${Ct(a[s.subTitleProperty])}</span
                    >
                  </div>
                `,()=>L`
                  <span class="title"
                    >${Ct(a[s.titleProperty])}</span
                  >
                `)}
            </span>
            ${q(t.enableResultAction,()=>L`
                <span
                  class="result-action"
                  @click=${c=>{c.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >${Ct(t.resultActionIcon)}</span
                >
              `)}
          </li>
        `)}
    </ul>
  `}class Za extends fe{static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}constructor(){super(),this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}#e(e){return Jr(this,e)}#t(e){return Ja(e,this)}aggregateResults(e,n){return Xa(e,n,this)}createRenderRoot(){return this}handleAccordion(e){zr(e,this.config,this)}render(){return L`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${q(this.results.length<1,()=>L`<small class="no-results">No matching items</small>`,()=>Ee)}
          <ul id="results" part="results">
            ${q(this.config.aggregateResults,()=>jt(this.resultAggregation.filter(e=>this.aggregateResults(this.results,e).length),e=>L`${q(this.aggregateResults(this.results,e).length===1&&this.config.autoSpreadSingle,()=>L`<div style="margin-left: -8px">
                          ${this.#e(e)}
                        </div>`,()=>this.#t(e))}`),()=>this.#e())}
          </ul>
        </div>
      </section>
    `}}customElements.define("eox-itemfilter-results",Za);class Qa extends fe{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(e){Ua(e,this)}#e(e){Ha(e,this)}#t(e){qa(e,this)}#n(e){Vr(e,this)}reset(){Na(this)}debouncedInputHandler=It(this.#n,500,{leading:!0});firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(e=>this.filterObject.state[e]?e:null).filter(e=>!!e),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const e=this.type.includes("multi")?"checkbox":"radio",n=this.filteredSuggestions.length>5?"select-overflow":Ee;return L`
      <style>
        ${!this.unstyled&&tt}
        ${!this.unstyled&&xs}
        ${!this.unstyled&&As}
      </style>
      ${q(this.suggestions.length>10,()=>L`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${this.#e}
                @keydown=${this.#t}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${n}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(r=>L`
              <li
                data-identifier="${r.toString().toLowerCase()}"
                data-title="${r}"
              >
                <label>
                  <input
                    type="${e}"
                    name=${r}
                    .checked=${this.selectedItems.includes(r)}
                    @change=${()=>this.debouncedInputHandler(r)}
                    @keydown=${s=>{s.key===" "&&this.inlineMode&&this.debouncedInputHandler(r)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${r}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}customElements.define("eox-itemfilter-select",Qa);class el extends fe{static properties={filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}};constructor(){super(),this.filterObject={},this.tabIndex=0,this.inputHandler=this.#e.bind(this),this.debouncedInputHandler=It(this.inputHandler,500,{leading:!1})}#e(e){ja(e,this)}#t(e,n){return Ia(e,n,this)}reset(){Oa(this)}createRenderRoot(){return this}render(){return q(this.filterObject,()=>L`
        ${this.#t("min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${this.#t("max","after")}
      `)}}customElements.define("eox-itemfilter-range",el);class tl extends fe{static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}constructor(){super(),this.filterObject={},this.tabIndex=0}reset(){Ga(this)}createRenderRoot(){return this}#e(e){za(e,this)}render(){return q(this.filterObject,()=>L`
        <form style="display: inline">
          ${jt(["intersects","within"],e=>L`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===e||Ee}"
                  value="${e}"
                  @click=${()=>this.#e(e)}
                />
                <small>${e} filter geometry</small>
              </label>
            `)}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${this.filterObject.state?.geometry}"
          @filter="${e=>{this.filterObject.state.geometry=e.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
        ></eox-itemfilter-spatial>
      `)}}customElements.define("eox-itemfilter-spatial",tl);class nl extends fe{static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}constructor(){super(),this.geometry=null,this.eoxMap=null}firstUpdated(){this.#e()}#e(){Xr(this)}reset(){Ka(this)}render(){return L`<div id="eox-map"></div>`}}customElements.define("eox-itemfilter-spatial-filter",nl);function rl(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function il(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&sl(n,t.target.value??"",e))}function sl(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const s=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];s.classList.contains("highlighted")||s.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let s=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(s=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),s=s+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&s<0&&(s=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&s>n.renderRoot.querySelectorAll(".chip").length-1&&(s=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[s].classList.add("highlighted")}}class ol extends fe{static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}constructor(){super(),this.items={},this.controller={}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this.#e.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this.#e.bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}#e(e){il(e,this)}#t(e){rl(e,this)}render(){return L`
      <style>
        ${tt}
      </style>
      <span class="chip-container">
        ${jt(this.items,e=>L`
            <span class="chip" @click=${this.#t.bind(this)}>
              <span class="chip-title">${e.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${e.key}
                  @click=${n=>{n.stopPropagation(),this.controller.remove(n),this.requestUpdate()}}
                ></span>
            </span>
            </span>
          `)}
      </span>
    `}}customElements.define("eox-itemfilter-chips",ol);const al=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),dr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var xn,pr;function ll(){if(pr)return xn;pr=1;var t=200,e="__lodash_hash_undefined__",n=1/0,r="[object Function]",s="[object GeneratorFunction]",o=/[\\^$.*+?()[\]{}|]/g,a=/^\[object .+?Constructor\]$/,c=typeof Ce=="object"&&Ce&&Ce.Object===Object&&Ce,u=typeof self=="object"&&self&&self.Object===Object&&self,f=c||u||Function("return this")();function h(p,w){var C=p?p.length:0;return!!C&&b(p,w,0)>-1}function g(p,w,C,k){for(var F=p.length,z=C+-1;++z<F;)if(w(p[z],z,p))return z;return-1}function b(p,w,C){if(w!==w)return g(p,y,C);for(var k=C-1,F=p.length;++k<F;)if(p[k]===w)return k;return-1}function y(p){return p!==p}function v(p,w){return p.has(w)}function A(p,w){return p?.[w]}function $(p){var w=!1;if(p!=null&&typeof p.toString!="function")try{w=!!(p+"")}catch{}return w}function E(p){var w=-1,C=Array(p.size);return p.forEach(function(k){C[++w]=k}),C}var D=Array.prototype,R=Function.prototype,T=Object.prototype,B=f["__core-js_shared__"],Z=function(){var p=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||"");return p?"Symbol(src)_1."+p:""}(),O=R.toString,U=T.hasOwnProperty,W=T.toString,Oe=RegExp("^"+O.call(U).replace(o,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$e=D.splice,se=ze(f,"Map"),je=ze(f,"Set"),N=ze(Object,"create");function K(p){var w=-1,C=p?p.length:0;for(this.clear();++w<C;){var k=p[w];this.set(k[0],k[1])}}function Ie(){this.__data__=N?N(null):{}}function Ut(p){return this.has(p)&&delete this.__data__[p]}function Wt(p){var w=this.__data__;if(N){var C=w[p];return C===e?void 0:C}return U.call(w,p)?w[p]:void 0}function Gt(p){var w=this.__data__;return N?w[p]!==void 0:U.call(w,p)}function Kt(p,w){var C=this.__data__;return C[p]=N&&w===void 0?e:w,this}K.prototype.clear=Ie,K.prototype.delete=Ut,K.prototype.get=Wt,K.prototype.has=Gt,K.prototype.set=Kt;function we(p){var w=-1,C=p?p.length:0;for(this.clear();++w<C;){var k=p[w];this.set(k[0],k[1])}}function zt(){this.__data__=[]}function Vt(p){var w=this.__data__,C=Re(w,p);if(C<0)return!1;var k=w.length-1;return C==k?w.pop():$e.call(w,C,1),!0}function Yt(p){var w=this.__data__,C=Re(w,p);return C<0?void 0:w[C][1]}function Xt(p){return Re(this.__data__,p)>-1}function Jt(p,w){var C=this.__data__,k=Re(C,p);return k<0?C.push([p,w]):C[k][1]=w,this}we.prototype.clear=zt,we.prototype.delete=Vt,we.prototype.get=Yt,we.prototype.has=Xt,we.prototype.set=Jt;function P(p){var w=-1,C=p?p.length:0;for(this.clear();++w<C;){var k=p[w];this.set(k[0],k[1])}}function rt(){this.__data__={hash:new K,map:new(se||we),string:new K}}function Zt(p){return Fe(this,p).delete(p)}function oe(p){return Fe(this,p).get(p)}function it(p){return Fe(this,p).has(p)}function st(p,w){return Fe(this,p).set(p,w),this}P.prototype.clear=rt,P.prototype.delete=Zt,P.prototype.get=oe,P.prototype.has=it,P.prototype.set=st;function Ne(p){var w=-1,C=p?p.length:0;for(this.__data__=new P;++w<C;)this.add(p[w])}function ot(p){return this.__data__.set(p,e),this}function at(p){return this.__data__.has(p)}Ne.prototype.add=Ne.prototype.push=ot,Ne.prototype.has=at;function Re(p,w){for(var C=p.length;C--;)if(on(p[C][0],w))return C;return-1}function Qt(p){if(!lt(p)||rn(p))return!1;var w=an(p)||$(p)?Oe:a;return w.test(Ve(p))}function en(p,w,C){var k=-1,F=h,z=p.length,ct=!0,ne=[],ae=ne;if(z>=t){var ut=tn(p);if(ut)return E(ut);ct=!1,F=v,ae=new Ne}else ae=ne;e:for(;++k<z;){var ve=p[k],xe=ve;if(ve=ve!==0?ve:0,ct&&xe===xe){for(var ft=ae.length;ft--;)if(ae[ft]===xe)continue e;ne.push(ve)}else F(ae,xe,C)||(ae!==ne&&ae.push(xe),ne.push(ve))}return ne}var tn=je&&1/E(new je([,-0]))[1]==n?function(p){return new je(p)}:ln;function Fe(p,w){var C=p.__data__;return nn(w)?C[typeof w=="string"?"string":"hash"]:C.map}function ze(p,w){var C=A(p,w);return Qt(C)?C:void 0}function nn(p){var w=typeof p;return w=="string"||w=="number"||w=="symbol"||w=="boolean"?p!=="__proto__":p===null}function rn(p){return!!Z&&Z in p}function Ve(p){if(p!=null){try{return O.call(p)}catch{}try{return p+""}catch{}}return""}function sn(p){return p&&p.length?en(p):[]}function on(p,w){return p===w||p!==p&&w!==w}function an(p){var w=lt(p)?W.call(p):"";return w==r||w==s}function lt(p){var w=typeof p;return!!p&&(w=="object"||w=="function")}function ln(){}return xn=sn,xn}var cl=ll();const Zr=yr(cl);var Je={exports:{}};Je.exports;var gr;function ul(){return gr||(gr=1,function(t,e){var n=200,r="Expected a function",s="__lodash_hash_undefined__",o=1,a=2,c=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",g="[object Date]",b="[object Error]",y="[object Function]",v="[object GeneratorFunction]",A="[object Map]",$="[object Number]",E="[object Object]",D="[object Promise]",R="[object RegExp]",T="[object Set]",B="[object String]",Z="[object Symbol]",O="[object WeakMap]",U="[object ArrayBuffer]",W="[object DataView]",Oe="[object Float32Array]",$e="[object Float64Array]",se="[object Int8Array]",je="[object Int16Array]",N="[object Int32Array]",K="[object Uint8Array]",Ie="[object Uint8ClampedArray]",Ut="[object Uint16Array]",Wt="[object Uint32Array]",Gt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Kt=/^\w*$/,we=/^\./,zt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vt=/[\\^$.*+?()[\]{}|]/g,Yt=/\\(\\)?/g,Xt=/^\[object .+?Constructor\]$/,Jt=/^(?:0|[1-9]\d*)$/,P={};P[Oe]=P[$e]=P[se]=P[je]=P[N]=P[K]=P[Ie]=P[Ut]=P[Wt]=!0,P[u]=P[f]=P[U]=P[h]=P[W]=P[g]=P[b]=P[y]=P[A]=P[$]=P[E]=P[R]=P[T]=P[B]=P[O]=!1;var rt=typeof Ce=="object"&&Ce&&Ce.Object===Object&&Ce,Zt=typeof self=="object"&&self&&self.Object===Object&&self,oe=rt||Zt||Function("return this")(),it=e&&!e.nodeType&&e,st=it&&!0&&t&&!t.nodeType&&t,Ne=st&&st.exports===it,ot=Ne&&rt.process,at=function(){try{return ot&&ot.binding("util")}catch{}}(),Re=at&&at.isTypedArray;function Qt(i,l){for(var d=-1,m=i?i.length:0,_=Array(m);++d<m;)_[d]=l(i[d],d,i);return _}function en(i,l){for(var d=-1,m=l.length,_=i.length;++d<m;)i[_+d]=l[d];return i}function tn(i,l){for(var d=-1,m=i?i.length:0;++d<m;)if(l(i[d],d,i))return!0;return!1}function Fe(i){return function(l){return l?.[i]}}function ze(i,l){for(var d=-1,m=Array(i);++d<i;)m[d]=l(d);return m}function nn(i){return function(l){return i(l)}}function rn(i,l){return i?.[l]}function Ve(i){var l=!1;if(i!=null&&typeof i.toString!="function")try{l=!!(i+"")}catch{}return l}function sn(i){var l=-1,d=Array(i.size);return i.forEach(function(m,_){d[++l]=[_,m]}),d}function on(i,l){return function(d){return i(l(d))}}function an(i){var l=-1,d=Array(i.size);return i.forEach(function(m){d[++l]=m}),d}var lt=Array.prototype,ln=Function.prototype,p=Object.prototype,w=oe["__core-js_shared__"],C=function(){var i=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),k=ln.toString,F=p.hasOwnProperty,z=p.toString,ct=RegExp("^"+k.call(F).replace(Vt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ne=oe.Symbol,ae=oe.Uint8Array,ut=p.propertyIsEnumerable,ve=lt.splice,xe=ne?ne.isConcatSpreadable:void 0,ft=on(Object.keys,Object),cn=He(oe,"DataView"),Ye=He(oe,"Map"),un=He(oe,"Promise"),fn=He(oe,"Set"),hn=He(oe,"WeakMap"),Xe=He(Object,"create"),ei=De(cn),ti=De(Ye),ni=De(un),ri=De(fn),ii=De(hn),ht=ne?ne.prototype:void 0,dn=ht?ht.valueOf:void 0,Hn=ht?ht.toString:void 0;function Pe(i){var l=-1,d=i?i.length:0;for(this.clear();++l<d;){var m=i[l];this.set(m[0],m[1])}}function si(){this.__data__=Xe?Xe(null):{}}function oi(i){return this.has(i)&&delete this.__data__[i]}function ai(i){var l=this.__data__;if(Xe){var d=l[i];return d===s?void 0:d}return F.call(l,i)?l[i]:void 0}function li(i){var l=this.__data__;return Xe?l[i]!==void 0:F.call(l,i)}function ci(i,l){var d=this.__data__;return d[i]=Xe&&l===void 0?s:l,this}Pe.prototype.clear=si,Pe.prototype.delete=oi,Pe.prototype.get=ai,Pe.prototype.has=li,Pe.prototype.set=ci;function de(i){var l=-1,d=i?i.length:0;for(this.clear();++l<d;){var m=i[l];this.set(m[0],m[1])}}function ui(){this.__data__=[]}function fi(i){var l=this.__data__,d=pt(l,i);if(d<0)return!1;var m=l.length-1;return d==m?l.pop():ve.call(l,d,1),!0}function hi(i){var l=this.__data__,d=pt(l,i);return d<0?void 0:l[d][1]}function di(i){return pt(this.__data__,i)>-1}function pi(i,l){var d=this.__data__,m=pt(d,i);return m<0?d.push([i,l]):d[m][1]=l,this}de.prototype.clear=ui,de.prototype.delete=fi,de.prototype.get=hi,de.prototype.has=di,de.prototype.set=pi;function pe(i){var l=-1,d=i?i.length:0;for(this.clear();++l<d;){var m=i[l];this.set(m[0],m[1])}}function gi(){this.__data__={hash:new Pe,map:new(Ye||de),string:new Pe}}function yi(i){return gt(this,i).delete(i)}function mi(i){return gt(this,i).get(i)}function bi(i){return gt(this,i).has(i)}function wi(i,l){return gt(this,i).set(i,l),this}pe.prototype.clear=gi,pe.prototype.delete=yi,pe.prototype.get=mi,pe.prototype.has=bi,pe.prototype.set=wi;function dt(i){var l=-1,d=i?i.length:0;for(this.__data__=new pe;++l<d;)this.add(i[l])}function vi(i){return this.__data__.set(i,s),this}function xi(i){return this.__data__.has(i)}dt.prototype.add=dt.prototype.push=vi,dt.prototype.has=xi;function ge(i){this.__data__=new de(i)}function Ai(){this.__data__=new de}function _i(i){return this.__data__.delete(i)}function Ci(i){return this.__data__.get(i)}function Mi(i){return this.__data__.has(i)}function Ei(i,l){var d=this.__data__;if(d instanceof de){var m=d.__data__;if(!Ye||m.length<n-1)return m.push([i,l]),this;d=this.__data__=new pe(m)}return d.set(i,l),this}ge.prototype.clear=Ai,ge.prototype.delete=_i,ge.prototype.get=Ci,ge.prototype.has=Mi,ge.prototype.set=Ei;function Li(i,l){var d=ye(i)||yn(i)?ze(i.length,String):[],m=d.length,_=!!m;for(var x in i)F.call(i,x)&&!(_&&(x=="length"||Gn(x,m)))&&d.push(x);return d}function pt(i,l){for(var d=i.length;d--;)if(Vn(i[d][0],l))return d;return-1}var Si=Gi(Pi);function $i(i,l,d,m,_){var x=-1,S=i.length;for(d||(d=Ji),_||(_=[]);++x<S;){var j=i[x];d(j)?en(_,j):_[_.length]=j}return _}var Ri=Ki();function Pi(i,l){return i&&Ri(i,l,xt)}function qn(i,l){l=yt(l,i)?[l]:Un(l);for(var d=0,m=l.length;i!=null&&d<m;)i=i[mt(l[d++])];return d&&d==m?i:void 0}function Di(i){return z.call(i)}function Ti(i,l){return i!=null&&l in Object(i)}function pn(i,l,d,m,_){return i===l?!0:i==null||l==null||!wt(i)&&!vt(l)?i!==i&&l!==l:Bi(i,l,pn,d,m,_)}function Bi(i,l,d,m,_,x){var S=ye(i),j=ye(l),I=f,H=f;S||(I=Ae(i),I=I==u?E:I),j||(H=Ae(l),H=H==u?E:H);var V=I==E&&!Ve(i),Y=H==E&&!Ve(l),G=I==H;if(G&&!V)return x||(x=new ge),S||ss(i)?Wn(i,l,d,m,_,x):zi(i,l,I,d,m,_,x);if(!(_&a)){var Q=V&&F.call(i,"__wrapped__"),ee=Y&&F.call(l,"__wrapped__");if(Q||ee){var _e=Q?i.value():i,me=ee?l.value():l;return x||(x=new ge),d(_e,me,m,_,x)}}return G?(x||(x=new ge),Vi(i,l,d,m,_,x)):!1}function ki(i,l,d,m){var _=d.length,x=_;if(i==null)return!x;for(i=Object(i);_--;){var S=d[_];if(S[2]?S[1]!==i[S[0]]:!(S[0]in i))return!1}for(;++_<x;){S=d[_];var j=S[0],I=i[j],H=S[1];if(S[2]){if(I===void 0&&!(j in i))return!1}else{var V=new ge,Y;if(!(Y===void 0?pn(H,I,m,o|a,V):Y))return!1}}return!0}function Oi(i){if(!wt(i)||Qi(i))return!1;var l=Yn(i)||Ve(i)?ct:Xt;return l.test(De(i))}function ji(i){return vt(i)&&mn(i.length)&&!!P[z.call(i)]}function Ii(i){return typeof i=="function"?i:i==null?cs:typeof i=="object"?ye(i)?qi(i[0],i[1]):Hi(i):us(i)}function Ni(i){if(!es(i))return ft(i);var l=[];for(var d in Object(i))F.call(i,d)&&d!="constructor"&&l.push(d);return l}function Fi(i,l){var d=-1,m=bt(i)?Array(i.length):[];return Si(i,function(_,x,S){m[++d]=l(_,x,S)}),m}function Hi(i){var l=Yi(i);return l.length==1&&l[0][2]?zn(l[0][0],l[0][1]):function(d){return d===i||ki(d,i,l)}}function qi(i,l){return yt(i)&&Kn(l)?zn(mt(i),l):function(d){var m=as(d,i);return m===void 0&&m===l?ls(d,i):pn(l,m,void 0,o|a)}}function Ui(i){return function(l){return qn(l,i)}}function Wi(i){if(typeof i=="string")return i;if(bn(i))return Hn?Hn.call(i):"";var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function Un(i){return ye(i)?i:ts(i)}function Gi(i,l){return function(d,m){if(d==null)return d;if(!bt(d))return i(d,m);for(var _=d.length,x=-1,S=Object(d);++x<_&&m(S[x],x,S)!==!1;);return d}}function Ki(i){return function(l,d,m){for(var _=-1,x=Object(l),S=m(l),j=S.length;j--;){var I=S[++_];if(d(x[I],I,x)===!1)break}return l}}function Wn(i,l,d,m,_,x){var S=_&a,j=i.length,I=l.length;if(j!=I&&!(S&&I>j))return!1;var H=x.get(i);if(H&&x.get(l))return H==l;var V=-1,Y=!0,G=_&o?new dt:void 0;for(x.set(i,l),x.set(l,i);++V<j;){var Q=i[V],ee=l[V];if(m)var _e=S?m(ee,Q,V,l,i,x):m(Q,ee,V,i,l,x);if(_e!==void 0){if(_e)continue;Y=!1;break}if(G){if(!tn(l,function(me,Te){if(!G.has(Te)&&(Q===me||d(Q,me,m,_,x)))return G.add(Te)})){Y=!1;break}}else if(!(Q===ee||d(Q,ee,m,_,x))){Y=!1;break}}return x.delete(i),x.delete(l),Y}function zi(i,l,d,m,_,x,S){switch(d){case W:if(i.byteLength!=l.byteLength||i.byteOffset!=l.byteOffset)return!1;i=i.buffer,l=l.buffer;case U:return!(i.byteLength!=l.byteLength||!m(new ae(i),new ae(l)));case h:case g:case $:return Vn(+i,+l);case b:return i.name==l.name&&i.message==l.message;case R:case B:return i==l+"";case A:var j=sn;case T:var I=x&a;if(j||(j=an),i.size!=l.size&&!I)return!1;var H=S.get(i);if(H)return H==l;x|=o,S.set(i,l);var V=Wn(j(i),j(l),m,_,x,S);return S.delete(i),V;case Z:if(dn)return dn.call(i)==dn.call(l)}return!1}function Vi(i,l,d,m,_,x){var S=_&a,j=xt(i),I=j.length,H=xt(l),V=H.length;if(I!=V&&!S)return!1;for(var Y=I;Y--;){var G=j[Y];if(!(S?G in l:F.call(l,G)))return!1}var Q=x.get(i);if(Q&&x.get(l))return Q==l;var ee=!0;x.set(i,l),x.set(l,i);for(var _e=S;++Y<I;){G=j[Y];var me=i[G],Te=l[G];if(m)var Xn=S?m(Te,me,G,l,i,x):m(me,Te,G,i,l,x);if(!(Xn===void 0?me===Te||d(me,Te,m,_,x):Xn)){ee=!1;break}_e||(_e=G=="constructor")}if(ee&&!_e){var At=i.constructor,_t=l.constructor;At!=_t&&"constructor"in i&&"constructor"in l&&!(typeof At=="function"&&At instanceof At&&typeof _t=="function"&&_t instanceof _t)&&(ee=!1)}return x.delete(i),x.delete(l),ee}function gt(i,l){var d=i.__data__;return Zi(l)?d[typeof l=="string"?"string":"hash"]:d.map}function Yi(i){for(var l=xt(i),d=l.length;d--;){var m=l[d],_=i[m];l[d]=[m,_,Kn(_)]}return l}function He(i,l){var d=rn(i,l);return Oi(d)?d:void 0}var Ae=Di;(cn&&Ae(new cn(new ArrayBuffer(1)))!=W||Ye&&Ae(new Ye)!=A||un&&Ae(un.resolve())!=D||fn&&Ae(new fn)!=T||hn&&Ae(new hn)!=O)&&(Ae=function(i){var l=z.call(i),d=l==E?i.constructor:void 0,m=d?De(d):void 0;if(m)switch(m){case ei:return W;case ti:return A;case ni:return D;case ri:return T;case ii:return O}return l});function Xi(i,l,d){l=yt(l,i)?[l]:Un(l);for(var m,_=-1,S=l.length;++_<S;){var x=mt(l[_]);if(!(m=i!=null&&d(i,x)))break;i=i[x]}if(m)return m;var S=i?i.length:0;return!!S&&mn(S)&&Gn(x,S)&&(ye(i)||yn(i))}function Ji(i){return ye(i)||yn(i)||!!(xe&&i&&i[xe])}function Gn(i,l){return l=l??c,!!l&&(typeof i=="number"||Jt.test(i))&&i>-1&&i%1==0&&i<l}function yt(i,l){if(ye(i))return!1;var d=typeof i;return d=="number"||d=="symbol"||d=="boolean"||i==null||bn(i)?!0:Kt.test(i)||!Gt.test(i)||l!=null&&i in Object(l)}function Zi(i){var l=typeof i;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?i!=="__proto__":i===null}function Qi(i){return!!C&&C in i}function es(i){var l=i&&i.constructor,d=typeof l=="function"&&l.prototype||p;return i===d}function Kn(i){return i===i&&!wt(i)}function zn(i,l){return function(d){return d==null?!1:d[i]===l&&(l!==void 0||i in Object(d))}}var ts=gn(function(i){i=os(i);var l=[];return we.test(i)&&l.push(""),i.replace(zt,function(d,m,_,x){l.push(_?x.replace(Yt,"$1"):m||d)}),l});function mt(i){if(typeof i=="string"||bn(i))return i;var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function De(i){if(i!=null){try{return k.call(i)}catch{}try{return i+""}catch{}}return""}function ns(i,l){return $i(rs(i,l))}function rs(i,l){var d=ye(i)?Qt:Fi;return d(i,Ii(l))}function gn(i,l){if(typeof i!="function"||l&&typeof l!="function")throw new TypeError(r);var d=function(){var m=arguments,_=l?l.apply(this,m):m[0],x=d.cache;if(x.has(_))return x.get(_);var S=i.apply(this,m);return d.cache=x.set(_,S),S};return d.cache=new(gn.Cache||pe),d}gn.Cache=pe;function Vn(i,l){return i===l||i!==i&&l!==l}function yn(i){return is(i)&&F.call(i,"callee")&&(!ut.call(i,"callee")||z.call(i)==u)}var ye=Array.isArray;function bt(i){return i!=null&&mn(i.length)&&!Yn(i)}function is(i){return vt(i)&&bt(i)}function Yn(i){var l=wt(i)?z.call(i):"";return l==y||l==v}function mn(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=c}function wt(i){var l=typeof i;return!!i&&(l=="object"||l=="function")}function vt(i){return!!i&&typeof i=="object"}function bn(i){return typeof i=="symbol"||vt(i)&&z.call(i)==Z}var ss=Re?nn(Re):ji;function os(i){return i==null?"":Wi(i)}function as(i,l,d){var m=i==null?void 0:qn(i,l);return m===void 0?d:m}function ls(i,l){return i!=null&&Xi(i,l,Ti)}function xt(i){return bt(i)?Li(i):Ni(i)}function cs(i){return i}function us(i){return yt(i)?Fe(mt(i)):Ui(i)}t.exports=ns}(Je,Je.exports)),Je.exports}var fl=ul();const Qr=yr(fl);function hl(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},c=f=>o.format==="date"?Ze(f).unix():parseFloat(f);e.forEach(f=>{if(o.type==="range"){const h=et(o.key,f);if(Array.isArray(h)){const g=[c(h[0]),c(h[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=c(h);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(h=>{a[h]=void 0}):o.type==="spatial"?(a.geometry=o?.state?.geometry||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):o.key?.includes(".")?Zr(Qr(n.items,o.key)).filter(h=>h).forEach(h=>{a[h]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const s=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{s.includes(a)||s.push(a)}):(o.type==="select"||o.type==="multiselect")&&(s.includes(o.key)||s.push(o.key))}),Sa(e,Object.assign({keys:s},t.fuseConfig)),r}async function dl(t,e,n){let r;n.externalFilter?r=await Da(e,n.filters,t):r=await $a(e,n.filters,t),n.results=n.sortResults(r)}function pl(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return L`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return L`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Zr(Qr(n.items,t.key)).filter(s=>s)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return L`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return L`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return L``}}function gl(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function yl(t,e,n){return L`
    ${q(t.dirty,()=>L`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const s=r.target.parentElement.querySelector("[slot=filter]");s&&typeof s.reset=="function"&&s.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":Ee}
        </button>
      `)}
  `}function ml(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}class bl extends fe{static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}#e=[];#t=[];#n=al;constructor(){super(),this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=It(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="#004170" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}apply(){this.#e=hl(this.#n,this.#t,this),this.search()}async searchHandler(){await dl(this.#n,this.#t,this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(e){return gl(e,this.#n)}#i(e,n){return pl(e,n,this)}#r(e,n){return yl(e,n,this)}resetFilters(){ml(this)}firstUpdated(e){let n={};dr.map(r=>{n={...n,[r]:this[r]}}),this.#n=n,this.#t=this.items?.map((r,s)=>Object.assign({id:r[this.idProperty]||`item-${s}`},r))||[],this.apply()}updated(e){dr.map(n=>e.has(n)?(this.firstUpdated(void 0),!0):!1)}updateResult(e){this.selectedResult=e.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(e){this.dispatchEvent(new CustomEvent("click:result-action",{detail:e.detail,bubbles:!0,composed:!0}))}render(){return L`
      <style>
        ${Ls}
        ${!this.unstyled&&tt}
        ${!this.unstyled&&ws}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":Ee}
        @submit="${e=>e.preventDefault()}"
      >
        ${q(this.filterProperties,()=>L`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${q(!this.inlineMode,()=>L`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${jt(Object.values(this.filters),(e,n)=>L` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${e}
                          @details-toggled=${r=>zr(r,this.#n,this)}
                          data-details="${e.key}"
                        >
                          ${this.#r(e,hr(n,1))}
                          ${this.#i(e,hr(n,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${q(!this.inlineMode&&this.#n.filterProperties&&!this.inlineMode&&this.#n.filterProperties&&Dn(this.filters),()=>L`
                    <button
                      type="button"
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
              </section>
            </eox-itemfilter-container>
          `)}
        ${q(this.#n?.showResults&&this.results,()=>L`
            <eox-itemfilter-results
              .config=${this.#n}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${this.#e}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @click:result-action=${this.emitResultAction}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}customElements.define("eox-itemfilter",bl);const wl=[".items"],vl={slot:"filterstitle",style:{margin:"14px 8px"}},xl={slot:"resultstitle",style:{margin:"14px 8px"}},Rl={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:"Results"},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:void 0},imageProperty:{type:String,default:""},subTitleProperty:{type:String,default:""},resultType:{type:String,default:""},cssVars:{type:[String,Object],default:""},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},emits:["select"],setup(t,{emit:e}){const n=e,r=t,s=async g=>{g?(h.resetSelectedCompareSTAC(),await h.loadSelectedSTAC(g.href),n("select",g)):h.selectedStac=null},o=g=>{g&&(h.loadSelectedCompareSTAC(g.href),n("select",g))},a=async g=>{const b=g.detail;r.enableCompare?o(b):s(b)},{smAndDown:c}=fs(),u=hs(()=>({titleProperty:r.titleProperty,enableHighlighting:r.enableHighlighting,expandMultipleFilters:r.expandMultipleFilters,expandMultipleResults:r.expandMultipleResults,subTitleProperty:r.subTitleProperty,resultType:r.resultType,imageProperty:r.imageProperty,aggregateResults:r.aggregateResults,style:r.cssVars,filterProperties:c.value?"":r.filterProperties})),f=ds(null),h=ps();return(g,b)=>(bs(),gs("eox-itemfilter",ys({class:"fill-height"},u.value,{ref_key:"eoxItemFilter",ref:f,style:{overflow:"auto","--background-color":"none"},onSelect:a,".items":ms(h).stac?.filter(y=>y.rel==="child")}),[Jn("h4",vl,Zn(t.filtersTitle),1),Jn("h4",xl,Zn(t.resultsTitle),1)],48,wl))}};export{Rl as default};
