import{aK as Se,aw as yr,H as fs,c as hs,r as ds,aC as ps,a5 as gs,a7 as Xn,a9 as Jn,d as ys,a2 as ms,Z as bs}from"./index-DGMBu-Jj.js";import{r as fe,x as A,E as Le}from"./lit-element-BrwkOUt4.js";import{a as mn,o as jt}from"./unsafe-html-4xauUBrQ.js";import{n as K,s as ws}from"./directive-DPIcWbGP.js";import{d as Qe,_ as Dt,c as xs,a as vs,s as _s}from"./radio.style-B65jFEeK.js";import"./toolcool-range-slider.min-B05a1lHj.js";import{o as Ms}from"./orient2d-DArCjZZA.js";const Ss=`
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
`,nt=`
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
`;class $s extends fe{static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1}#e(e){this.dispatchEvent(new CustomEvent("details-toggled",{detail:e,bubbles:!0,composed:!0}))}render(){return A`
      <style>
        ${!this.unstyled&&nt}
      </style>

      ${K(this.filterObject.featured,()=>A`<slot name="filter"></slot>`,()=>A`<details
            @toggle="${this.#e}"
            class="details-filter"
            ?open=${this.filterObject.expanded||Le}
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
    `}}customElements.define("eox-itemfilter-expandcontainer",$s);function be(t){return Array.isArray?Array.isArray(t):wr(t)==="[object Array]"}function Ls(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Cs(t){return t==null?"":Ls(t)}function le(t){return typeof t=="string"}function mr(t){return typeof t=="number"}function As(t){return t===!0||t===!1||Es(t)&&wr(t)=="[object Boolean]"}function br(t){return typeof t=="object"}function Es(t){return br(t)&&t!==null}function X(t){return t!=null}function bn(t){return!t.trim().length}function wr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Rs="Incorrect 'index' type",Ps=t=>`Invalid value for key ${t}`,Ts=t=>`Pattern length exceeds max of ${t}.`,ks=t=>`Missing ${t} property in key`,Os=t=>`Property 'weight' in key '${t}' must be a positive integer`,Zn=Object.prototype.hasOwnProperty;class js{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let s=xr(r);this._keys.push(s),this._keyMap[s.id]=s,n+=s.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function xr(t){let e=null,n=null,r=null,s=1,o=null;if(le(t)||be(t))r=t,e=Qn(t),n=vn(t);else{if(!Zn.call(t,"name"))throw new Error(ks("name"));const a=t.name;if(r=a,Zn.call(t,"weight")&&(s=t.weight,s<=0))throw new Error(Os(a));e=Qn(a),n=vn(a),o=t.getFn}return{path:e,id:n,weight:s,src:r,getFn:o}}function Qn(t){return be(t)?t:t.split(".")}function vn(t){return be(t)?t.join("."):t}function Ds(t,e){let n=[],r=!1;const s=(o,a,c)=>{if(X(o))if(!a[c])n.push(o);else{let u=a[c];const f=o[u];if(!X(f))return;if(c===a.length-1&&(le(f)||mr(f)||As(f)))n.push(Cs(f));else if(be(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)s(f[h],a,c+1)}else a.length&&s(f,a,c+1)}};return s(t,le(e)?e.split("."):e,0),r?n:n[0]}const Ns={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Is={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Bs={location:0,threshold:.6,distance:100},Hs={useExtendedSearch:!1,getFn:Ds,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var L={...Is,...Ns,...Bs,...Hs};const qs=/[^ ]+/g;function Us(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(s){const o=s.match(qs).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class kn{constructor({getFn:e=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){this.norm=Us(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,le(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();le(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!X(e)||bn(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((s,o)=>{let a=s.getFn?s.getFn(e):this.getFn(e,s.path);if(X(a)){if(be(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(X(h))if(le(h)&&!bn(h)){let p={v:h,i:f,n:this.norm.get(h)};c.push(p)}else be(h)&&h.forEach((p,b)=>{u.push({nestedArrIndex:b,value:p})})}r.$[o]=c}else if(le(a)&&!bn(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function vr(t,e,{getFn:n=L.getFn,fieldNormWeight:r=L.fieldNormWeight}={}){const s=new kn({getFn:n,fieldNormWeight:r});return s.setKeys(t.map(xr)),s.setSources(e),s.create(),s}function Ws(t,{getFn:e=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){const{keys:r,records:s}=t,o=new kn({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(s),o}function $t(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:s=L.distance,ignoreLocation:o=L.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return s?a+c/s:c?1:a}function Gs(t=[],e=L.minMatchCharLength){let n=[],r=-1,s=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(s=o-1,s-r+1>=e&&n.push([r,s]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Oe=32;function Ks(t,e,n,{location:r=L.location,distance:s=L.distance,threshold:o=L.threshold,findAllMatches:a=L.findAllMatches,minMatchCharLength:c=L.minMatchCharLength,includeMatches:u=L.includeMatches,ignoreLocation:f=L.ignoreLocation}={}){if(e.length>Oe)throw new Error(Ts(Oe));const h=e.length,p=t.length,b=Math.max(0,Math.min(r,p));let y=o,x=b;const _=c>1||u,E=_?Array(p):[];let $;for(;($=t.indexOf(e,x))>-1;){let D=$t(e,{currentLocation:$,expectedLocation:b,distance:s,ignoreLocation:f});if(y=Math.min(D,y),x=$+h,_){let U=0;for(;U<h;)E[$+U]=1,U+=1}}x=-1;let T=[],R=1,k=h+p;const O=1<<h-1;for(let D=0;D<h;D+=1){let U=0,W=k;for(;U<W;)$t(e,{errors:D,currentLocation:b+W,expectedLocation:b,distance:s,ignoreLocation:f})<=y?U=W:k=W,W=Math.floor((k-U)/2+U);k=W;let Ne=Math.max(1,b-W+1),Ee=a?p:Math.min(b+W,p)+h,se=Array(Ee+2);se[Ee+1]=(1<<D)-1;for(let B=Ee;B>=Ne;B-=1){let z=B-1,Be=n[t.charAt(z)];if(_&&(E[z]=+!!Be),se[B]=(se[B+1]<<1|1)&Be,D&&(se[B]|=(T[B+1]|T[B])<<1|1|T[B+1]),se[B]&O&&(R=$t(e,{errors:D,currentLocation:z,expectedLocation:b,distance:s,ignoreLocation:f}),R<=y)){if(y=R,x=z,x<=b)break;Ne=Math.max(1,2*b-x)}}if($t(e,{errors:D+1,currentLocation:b,expectedLocation:b,distance:s,ignoreLocation:f})>y)break;T=se}const Z={isMatch:x>=0,score:Math.max(.001,R)};if(_){const D=Gs(E,c);D.length?u&&(Z.indices=D):Z.isMatch=!1}return Z}function zs(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const s=t.charAt(n);e[s]=(e[s]||0)|1<<r-n-1}return e}class _r{constructor(e,{location:n=L.location,threshold:r=L.threshold,distance:s=L.distance,includeMatches:o=L.includeMatches,findAllMatches:a=L.findAllMatches,minMatchCharLength:c=L.minMatchCharLength,isCaseSensitive:u=L.isCaseSensitive,ignoreLocation:f=L.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:s,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(b,y)=>{this.chunks.push({pattern:b,alphabet:zs(b),startIndex:y})},p=this.pattern.length;if(p>Oe){let b=0;const y=p%Oe,x=p-y;for(;b<x;)h(this.pattern.substr(b,Oe),b),b+=Oe;if(y){const _=p-Oe;h(this.pattern.substr(_),_)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let x={isMatch:!0,score:0};return r&&(x.indices=[[0,e.length-1]]),x}const{location:s,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options;let h=[],p=0,b=!1;this.chunks.forEach(({pattern:x,alphabet:_,startIndex:E})=>{const{isMatch:$,score:T,indices:R}=Ks(e,x,_,{location:s+E,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});$&&(b=!0),p+=T,$&&R&&(h=[...h,...R])});let y={isMatch:b,score:b?p/this.chunks.length:1};return b&&r&&(y.indices=h),y}}class Ce{constructor(e){this.pattern=e}static isMultiMatch(e){return er(e,this.multiRegex)}static isSingleMatch(e){return er(e,this.singleRegex)}search(){}}function er(t,e){const n=t.match(e);return n?n[1]:null}class Vs extends Ce{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ys extends Ce{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Fs extends Ce{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Xs extends Ce{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Js extends Ce{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Zs extends Ce{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Mr extends Ce{constructor(e,{location:n=L.location,threshold:r=L.threshold,distance:s=L.distance,includeMatches:o=L.includeMatches,findAllMatches:a=L.findAllMatches,minMatchCharLength:c=L.minMatchCharLength,isCaseSensitive:u=L.isCaseSensitive,ignoreLocation:f=L.ignoreLocation}={}){super(e),this._bitapSearch=new _r(e,{location:n,threshold:r,distance:s,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Sr extends Ce{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const s=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,s.push([r,n-1]);const a=!!s.length;return{isMatch:a,score:a?0:1,indices:s}}}const _n=[Vs,Sr,Fs,Xs,Zs,Js,Ys,Mr],tr=_n.length,Qs=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,eo="|";function to(t,e={}){return t.split(eo).map(n=>{let r=n.trim().split(Qs).filter(o=>o&&!!o.trim()),s=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,f=-1;for(;!u&&++f<tr;){const h=_n[f];let p=h.isMultiMatch(c);p&&(s.push(new h(p,e)),u=!0)}if(!u)for(f=-1;++f<tr;){const h=_n[f];let p=h.isSingleMatch(c);if(p){s.push(new h(p,e));break}}}return s})}const no=new Set([Mr.type,Sr.type]);class ro{constructor(e,{isCaseSensitive:n=L.isCaseSensitive,includeMatches:r=L.includeMatches,minMatchCharLength:s=L.minMatchCharLength,ignoreLocation:o=L.ignoreLocation,findAllMatches:a=L.findAllMatches,location:c=L.location,threshold:u=L.threshold,distance:f=L.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:s,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=to(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:s}=this.options;e=s?e:e.toLowerCase();let o=0,a=[],c=0;for(let u=0,f=n.length;u<f;u+=1){const h=n[u];a.length=0,o=0;for(let p=0,b=h.length;p<b;p+=1){const y=h[p],{isMatch:x,indices:_,score:E}=y.search(e);if(x){if(o+=1,c+=E,r){const $=y.constructor.type;no.has($)?a=[...a,..._]:a.push(_)}}else{c=0,o=0,a.length=0;break}}if(o){let p={isMatch:!0,score:c/o};return r&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const Mn=[];function io(...t){Mn.push(...t)}function Sn(t,e){for(let n=0,r=Mn.length;n<r;n+=1){let s=Mn[n];if(s.condition(t,e))return new s(t,e)}return new _r(t,e)}const Rt={AND:"$and",OR:"$or"},$n={PATH:"$path",PATTERN:"$val"},Ln=t=>!!(t[Rt.AND]||t[Rt.OR]),so=t=>!!t[$n.PATH],oo=t=>!be(t)&&br(t)&&!Ln(t),nr=t=>({[Rt.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function $r(t,e,{auto:n=!0}={}){const r=s=>{let o=Object.keys(s);const a=so(s);if(!a&&o.length>1&&!Ln(s))return r(nr(s));if(oo(s)){const u=a?s[$n.PATH]:o[0],f=a?s[$n.PATTERN]:s[u];if(!le(f))throw new Error(Ps(u));const h={keyId:vn(u),pattern:f};return n&&(h.searcher=Sn(f,e)),h}let c={children:[],operator:o[0]};return o.forEach(u=>{const f=s[u];be(f)&&f.forEach(h=>{c.children.push(r(h))})}),c};return Ln(t)||(t=nr(t)),r(t)}function ao(t,{ignoreFieldNorm:e=L.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:s,norm:o,score:a})=>{const c=s?s.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function lo(t,e){const n=t.matches;e.matches=[],X(n)&&n.forEach(r=>{if(!X(r.indices)||!r.indices.length)return;const{indices:s,value:o}=r;let a={indices:s,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function co(t,e){e.score=t.score}function uo(t,e,{includeMatches:n=L.includeMatches,includeScore:r=L.includeScore}={}){const s=[];return n&&s.push(lo),r&&s.push(co),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return s.length&&s.forEach(u=>{u(o,c)}),c})}class Ae{constructor(e,n={},r){this.options={...L,...n},this.options.useExtendedSearch,this._keyStore=new js(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof kn))throw new Error(Rs);this._myIndex=n||vr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){X(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,s=this._docs.length;r<s;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,s-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:s,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=le(e)?le(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ao(u,{ignoreFieldNorm:c}),o&&u.sort(a),mr(n)&&n>-1&&(u=u.slice(0,n)),uo(u,this._docs,{includeMatches:r,includeScore:s})}_searchStringList(e){const n=Sn(e,this.options),{records:r}=this._myIndex,s=[];return r.forEach(({v:o,i:a,n:c})=>{if(!X(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&s.push({item:o,idx:a,matches:[{score:f,value:o,norm:c,indices:h}]})}),s}_searchLogical(e){const n=$r(e,this.options),r=(c,u,f)=>{if(!c.children){const{keyId:p,searcher:b}=c,y=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:b});return y&&y.length?[{idx:f,item:u,matches:y}]:[]}const h=[];for(let p=0,b=c.children.length;p<b;p+=1){const y=c.children[p],x=r(y,u,f);if(x.length)h.push(...x);else if(c.operator===Rt.AND)return[]}return h},s=this._myIndex.records,o={},a=[];return s.forEach(({$:c,i:u})=>{if(X(c)){let f=r(n,c,u);f.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=Sn(e,this.options),{keys:r,records:s}=this._myIndex,o=[];return s.forEach(({$:a,i:c})=>{if(!X(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!X(n))return[];let s=[];if(be(n))n.forEach(({v:o,i:a,n:c})=>{if(!X(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&s.push({score:f,key:e,value:o,idx:a,norm:c,indices:h})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:f}=r.searchIn(o);c&&s.push({score:u,key:e,value:o,norm:a,indices:f})}return s}}Ae.version="7.0.0";Ae.createIndex=vr;Ae.parseIndex=Ws;Ae.config=L;Ae.parseQuery=$r;io(ro);function Lr(t,e){const n=new Ae(e.filterProperties,{keys:["title"]}),r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function fo(t,e){const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const Cn=Math.min,We=Math.max,Pt=Math.round,Lt=Math.floor,ce=t=>({x:t,y:t});function Cr(t){return t.split("-")[0]}function ho(t){return t.split("-")[1]}function po(t){return t==="x"?"y":"x"}function go(t){return t==="y"?"height":"width"}function Ar(t){return["top","bottom"].includes(Cr(t))?"y":"x"}function yo(t){return po(Ar(t))}function Er(t){const{x:e,y:n,width:r,height:s}=t;return{width:r,height:s,top:n,left:e,right:e+r,bottom:n+s,x:e,y:n}}function rr(t,e,n){let{reference:r,floating:s}=t;const o=Ar(e),a=yo(e),c=go(a),u=Cr(e),f=o==="y",h=r.x+r.width/2-s.width/2,p=r.y+r.height/2-s.height/2,b=r[c]/2-s[c]/2;let y;switch(u){case"top":y={x:h,y:r.y-s.height};break;case"bottom":y={x:h,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:p};break;case"left":y={x:r.x-s.width,y:p};break;default:y={x:r.x,y:r.y}}switch(ho(e)){case"start":y[a]-=b*(n&&f?-1:1);break;case"end":y[a]+=b*(n&&f?-1:1);break}return y}const mo=async(t,e,n)=>{const{placement:r="bottom",strategy:s="absolute",middleware:o=[],platform:a}=n,c=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:p}=rr(f,r,u),b=r,y={},x=0;for(let _=0;_<c.length;_++){const{name:E,fn:$}=c[_],{x:T,y:R,data:k,reset:O}=await $({x:h,y:p,initialPlacement:r,placement:b,strategy:s,middlewareData:y,rects:f,platform:a,elements:{reference:t,floating:e}});h=T??h,p=R??p,y={...y,[E]:{...y[E],...k}},O&&x<=50&&(x++,typeof O=="object"&&(O.placement&&(b=O.placement),O.rects&&(f=O.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):O.rects),{x:h,y:p}=rr(f,b,u)),_=-1)}return{x:h,y:p,placement:b,strategy:s,middlewareData:y}};function Nt(){return typeof window<"u"}function Ve(t){return Rr(t)?(t.nodeName||"").toLowerCase():"#document"}function J(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function he(t){var e;return(e=(Rr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Rr(t){return Nt()?t instanceof Node||t instanceof J(t).Node:!1}function re(t){return Nt()?t instanceof Element||t instanceof J(t).Element:!1}function ue(t){return Nt()?t instanceof HTMLElement||t instanceof J(t).HTMLElement:!1}function ir(t){return!Nt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof J(t).ShadowRoot}function rt(t){const{overflow:e,overflowX:n,overflowY:r,display:s}=ie(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(s)}function bo(t){return["table","td","th"].includes(Ve(t))}function It(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function On(t){const e=jn(),n=re(t)?ie(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function wo(t){let e=$e(t);for(;ue(e)&&!Ke(e);){if(On(e))return e;if(It(e))return null;e=$e(e)}return null}function jn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ke(t){return["html","body","#document"].includes(Ve(t))}function ie(t){return J(t).getComputedStyle(t)}function Bt(t){return re(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function $e(t){if(Ve(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ir(t)&&t.host||he(t);return ir(e)?e.host:e}function Pr(t){const e=$e(t);return Ke(e)?t.ownerDocument?t.ownerDocument.body:t.body:ue(e)&&rt(e)?e:Pr(e)}function et(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=Pr(t),o=s===((r=t.ownerDocument)==null?void 0:r.body),a=J(s);if(o){const c=An(a);return e.concat(a,a.visualViewport||[],rt(s)?s:[],c&&n?et(c):[])}return e.concat(s,et(s,[],n))}function An(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Tr(t){const e=ie(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const s=ue(t),o=s?t.offsetWidth:n,a=s?t.offsetHeight:r,c=Pt(n)!==o||Pt(r)!==a;return c&&(n=o,r=a),{width:n,height:r,$:c}}function Dn(t){return re(t)?t:t.contextElement}function Ge(t){const e=Dn(t);if(!ue(e))return ce(1);const n=e.getBoundingClientRect(),{width:r,height:s,$:o}=Tr(e);let a=(o?Pt(n.width):n.width)/r,c=(o?Pt(n.height):n.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const xo=ce(0);function kr(t){const e=J(t);return!jn()||!e.visualViewport?xo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function vo(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==J(t)?!1:e}function je(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),o=Dn(t);let a=ce(1);e&&(r?re(r)&&(a=Ge(r)):a=Ge(t));const c=vo(o,n,r)?kr(o):ce(0);let u=(s.left+c.x)/a.x,f=(s.top+c.y)/a.y,h=s.width/a.x,p=s.height/a.y;if(o){const b=J(o),y=r&&re(r)?J(r):r;let x=b,_=An(x);for(;_&&r&&y!==x;){const E=Ge(_),$=_.getBoundingClientRect(),T=ie(_),R=$.left+(_.clientLeft+parseFloat(T.paddingLeft))*E.x,k=$.top+(_.clientTop+parseFloat(T.paddingTop))*E.y;u*=E.x,f*=E.y,h*=E.x,p*=E.y,u+=R,f+=k,x=J(_),_=An(x)}}return Er({width:h,height:p,x:u,y:f})}function Nn(t,e){const n=Bt(t).scrollLeft;return e?e.left+n:je(he(t)).left+n}function Or(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=r.left+e.scrollLeft-(n?0:Nn(t,r)),o=r.top+e.scrollTop;return{x:s,y:o}}function _o(t){let{elements:e,rect:n,offsetParent:r,strategy:s}=t;const o=s==="fixed",a=he(r),c=e?It(e.floating):!1;if(r===a||c&&o)return n;let u={scrollLeft:0,scrollTop:0},f=ce(1);const h=ce(0),p=ue(r);if((p||!p&&!o)&&((Ve(r)!=="body"||rt(a))&&(u=Bt(r)),ue(r))){const y=je(r);f=Ge(r),h.x=y.x+r.clientLeft,h.y=y.y+r.clientTop}const b=a&&!p&&!o?Or(a,u,!0):ce(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+b.x,y:n.y*f.y-u.scrollTop*f.y+h.y+b.y}}function Mo(t){return Array.from(t.getClientRects())}function So(t){const e=he(t),n=Bt(t),r=t.ownerDocument.body,s=We(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=We(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Nn(t);const c=-n.scrollTop;return ie(r).direction==="rtl"&&(a+=We(e.clientWidth,r.clientWidth)-s),{width:s,height:o,x:a,y:c}}function $o(t,e){const n=J(t),r=he(t),s=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,c=0,u=0;if(s){o=s.width,a=s.height;const f=jn();(!f||f&&e==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}return{width:o,height:a,x:c,y:u}}function Lo(t,e){const n=je(t,!0,e==="fixed"),r=n.top+t.clientTop,s=n.left+t.clientLeft,o=ue(t)?Ge(t):ce(1),a=t.clientWidth*o.x,c=t.clientHeight*o.y,u=s*o.x,f=r*o.y;return{width:a,height:c,x:u,y:f}}function sr(t,e,n){let r;if(e==="viewport")r=$o(t,n);else if(e==="document")r=So(he(t));else if(re(e))r=Lo(e,n);else{const s=kr(t);r={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Er(r)}function jr(t,e){const n=$e(t);return n===e||!re(n)||Ke(n)?!1:ie(n).position==="fixed"||jr(n,e)}function Co(t,e){const n=e.get(t);if(n)return n;let r=et(t,[],!1).filter(c=>re(c)&&Ve(c)!=="body"),s=null;const o=ie(t).position==="fixed";let a=o?$e(t):t;for(;re(a)&&!Ke(a);){const c=ie(a),u=On(a);!u&&c.position==="fixed"&&(s=null),(o?!u&&!s:!u&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||rt(a)&&!u&&jr(t,a))?r=r.filter(h=>h!==a):s=c,a=$e(a)}return e.set(t,r),r}function Ao(t){let{element:e,boundary:n,rootBoundary:r,strategy:s}=t;const a=[...n==="clippingAncestors"?It(e)?[]:Co(e,this._c):[].concat(n),r],c=a[0],u=a.reduce((f,h)=>{const p=sr(e,h,s);return f.top=We(p.top,f.top),f.right=Cn(p.right,f.right),f.bottom=Cn(p.bottom,f.bottom),f.left=We(p.left,f.left),f},sr(e,c,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Eo(t){const{width:e,height:n}=Tr(t);return{width:e,height:n}}function Ro(t,e,n){const r=ue(e),s=he(e),o=n==="fixed",a=je(t,!0,o,e);let c={scrollLeft:0,scrollTop:0};const u=ce(0);if(r||!r&&!o)if((Ve(e)!=="body"||rt(s))&&(c=Bt(e)),r){const b=je(e,!0,o,e);u.x=b.x+e.clientLeft,u.y=b.y+e.clientTop}else s&&(u.x=Nn(s));const f=s&&!r&&!o?Or(s,c):ce(0),h=a.left+c.scrollLeft-u.x-f.x,p=a.top+c.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function wn(t){return ie(t).position==="static"}function or(t,e){if(!ue(t)||ie(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return he(t)===n&&(n=n.ownerDocument.body),n}function Dr(t,e){const n=J(t);if(It(t))return n;if(!ue(t)){let s=$e(t);for(;s&&!Ke(s);){if(re(s)&&!wn(s))return s;s=$e(s)}return n}let r=or(t,e);for(;r&&bo(r)&&wn(r);)r=or(r,e);return r&&Ke(r)&&wn(r)&&!On(r)?n:r||wo(t)||n}const Po=async function(t){const e=this.getOffsetParent||Dr,n=this.getDimensions,r=await n(t.floating);return{reference:Ro(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function To(t){return ie(t).direction==="rtl"}const ko={convertOffsetParentRelativeRectToViewportRelativeRect:_o,getDocumentElement:he,getClippingRect:Ao,getOffsetParent:Dr,getElementRects:Po,getClientRects:Mo,getDimensions:Eo,getScale:Ge,isElement:re,isRTL:To};function Nr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Oo(t,e){let n=null,r;const s=he(t);function o(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function a(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),o();const f=t.getBoundingClientRect(),{left:h,top:p,width:b,height:y}=f;if(c||e(),!b||!y)return;const x=Lt(p),_=Lt(s.clientWidth-(h+b)),E=Lt(s.clientHeight-(p+y)),$=Lt(h),R={rootMargin:-x+"px "+-_+"px "+-E+"px "+-$+"px",threshold:We(0,Cn(1,u))||1};let k=!0;function O(Z){const D=Z[0].intersectionRatio;if(D!==u){if(!k)return a();D?a(!1,D):r=setTimeout(()=>{a(!1,1e-7)},1e3)}D===1&&!Nr(f,t.getBoundingClientRect())&&a(),k=!1}try{n=new IntersectionObserver(O,{...R,root:s.ownerDocument})}catch{n=new IntersectionObserver(O,R)}n.observe(t)}return a(!0),o}function jo(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Dn(t),h=s||o?[...f?et(f):[],...et(e)]:[];h.forEach($=>{s&&$.addEventListener("scroll",n,{passive:!0}),o&&$.addEventListener("resize",n)});const p=f&&c?Oo(f,n):null;let b=-1,y=null;a&&(y=new ResizeObserver($=>{let[T]=$;T&&T.target===f&&y&&(y.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var R;(R=y)==null||R.observe(e)})),n()}),f&&!u&&y.observe(f),y.observe(e));let x,_=u?je(t):null;u&&E();function E(){const $=je(t);_&&!Nr(_,$)&&n(),_=$,x=requestAnimationFrame(E)}return n(),()=>{var $;h.forEach(T=>{s&&T.removeEventListener("scroll",n),o&&T.removeEventListener("resize",n)}),p?.(),($=y)==null||$.disconnect(),y=null,u&&cancelAnimationFrame(x)}}const Do=(t,e,n)=>{const r=new Map,s={platform:ko,...n},o={...s.platform,_c:r};return mo(t,e,{...s,platform:o})};function No(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return jo(e,n,()=>{n.matches(":popover-open")&&Do(e,n,{strategy:"fixed"}).then(({x:s,y:o})=>{Object.assign(n.style,{left:`${s}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Ir(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Lr({target:{value:""}},t)}function Io(t,e){e.inlineMode&&t.stopPropagation()}function Bo(t){t.inlineMode&&(t.showDropdown=!0)}function Ho(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function qo(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Ir(e),e.showDropdown=!1)}function Uo(t,e){e.inlineMode&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Ir(e),e.showDropdown=!1)}function Wo(t,e){var n,r,s=0,o,a,c,u,f,h,p,b=t[0],y=t[1],x=e.length;for(n=0;n<x;n++){r=0;var _=e[n],E=_.length-1;if(h=_[0],h[0]!==_[E][0]&&h[1]!==_[E][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-b,c=h[1]-y,r;r<E;r++){if(p=_[r+1],u=p[0]-b,f=p[1]-y,c===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&c<=0||f<=0&&c>=0){if(o=Ms(a,u,c,f,0,0),o===0)return 0;(o>0&&f>0&&c<=0||o<0&&f<=0&&c>0)&&s++}h=p,c=f,a=u}}return s%2!==0}function De(t,e,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function Go(t,e,n={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!ar(t[0])||!ar(t[1]))throw new Error("coordinates must contain numbers");return De({type:"Point",coordinates:t},e,n)}function Ko(t,e,n={}){if(t.length<2)throw new Error("coordinates must be an array of two or more positions");return De({type:"LineString",coordinates:t},e,n)}function En(t,e={}){const n={type:"FeatureCollection"};return e.id&&(n.id=e.id),e.bbox&&(n.bbox=e.bbox),n.features=t,n}function zo(t,e,n={}){return De({type:"MultiLineString",coordinates:t},e,n)}function ar(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function Br(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Vo(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function ze(t){return t.type==="Feature"?t.geometry:t}function te(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Br(t),s=ze(e),o=s.type,a=e.bbox;let c=s.coordinates;if(a&&Yo(r,a)===!1)return!1;o==="Polygon"&&(c=[c]);let u=!1;for(var f=0;f<c.length;++f){const h=Wo(r,c[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function Yo(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Hr{constructor(e=[],n=Fo){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,s=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(s,a)>=0)break;n[e]=a,e=o}n[e]=s}_down(e){const{data:n,compare:r}=this,s=this.length>>1,o=n[e];for(;e<s;){let a=(e<<1)+1,c=n[a];const u=a+1;if(u<this.length&&r(n[u],c)<0&&(a=u,c=n[u]),r(c,o)>=0)break;n[e]=c,e=a}n[e]=o}}function Fo(t,e){return t<e?-1:t>e?1:0}function qr(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function Xo(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class lr{constructor(e,n,r,s){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=s,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function Jo(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)cr(n[r],e)}else cr(t,e)}let Ct=0,At=0,Et=0;function cr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let s=0;s<r.length;s++)for(let o=0;o<r[s].length;o++){let a=r[s][o][0],c=null;At=At+1;for(let u=0;u<r[s][o].length-1;u++){c=r[s][o][u+1];const f=new lr(a,Ct,At,Et),h=new lr(c,Ct,At,Et+1);f.otherEvent=h,h.otherEvent=f,qr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(f),e.push(h),a=c,Et=Et+1}}Ct=Ct+1}class Zo{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function Qo(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,s=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,c=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,f=e.rightSweepEvent.p.y,h=(f-c)*(s-n)-(u-a)*(o-r),p=(u-a)*(r-c)-(f-c)*(n-a),b=(s-n)*(r-c)-(o-r)*(n-a);if(h===0)return!1;const y=p/h,x=b/h;if(y>=0&&y<=1&&x>=0&&x<=1){const _=n+y*(s-n),E=r+y*(o-r);return[_,E]}return!1}function ea(t,e){e=e||!1;const n=[],r=new Hr([],Xo);for(;t.length;){const s=t.pop();if(s.isLeftEndpoint){const o=new Zo(s);for(let a=0;a<r.data.length;a++){const c=r.data[a];if(e&&c.leftSweepEvent.featureId===s.featureId)continue;const u=Qo(o,c);u!==!1&&n.push(u)}r.push(o)}else s.isLeftEndpoint===!1&&r.pop()}return n}function ta(t,e){const n=new Hr([],qr);return Jo(t,n),ea(n,e)}var na=ta;function In(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:s=!0}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(De(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(De(e));const a=na(En(o),s);let c=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,c.push(f))})}else c=a;return En(c.map(u=>Go(u)))}function Ur(t,e,n){if(t!==null)for(var r,s,o,a,c,u,f,h=0,p=0,b,y=t.type,x=y==="FeatureCollection",_=y==="Feature",E=x?t.features.length:1,$=0;$<E;$++){f=x?t.features[$].geometry:_?t.geometry:t,b=f?f.type==="GeometryCollection":!1,c=b?f.geometries.length:1;for(var T=0;T<c;T++){var R=0,k=0;if(a=b?f.geometries[T]:f,a!==null){u=a.coordinates;var O=a.type;switch(h=0,O){case null:break;case"Point":if(e(u,p,$,R,k)===!1)return!1;p++,R++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],p,$,R,k)===!1)return!1;p++,O==="MultiPoint"&&R++}O==="LineString"&&R++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(s=0;s<u[r].length-h;s++){if(e(u[r][s],p,$,R,k)===!1)return!1;p++}O==="MultiLineString"&&R++,O==="Polygon"&&k++}O==="Polygon"&&R++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(k=0,s=0;s<u[r].length;s++){for(o=0;o<u[r][s].length-h;o++){if(e(u[r][s][o],p,$,R,k)===!1)return!1;p++}k++}R++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(Ur(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function ra(t,e){var n,r,s,o,a,c,u,f,h,p,b=0,y=t.type==="FeatureCollection",x=t.type==="Feature",_=y?t.features.length:1;for(n=0;n<_;n++){for(c=y?t.features[n].geometry:x?t.geometry:t,f=y?t.features[n].properties:x?t.properties:{},h=y?t.features[n].bbox:x?t.bbox:void 0,p=y?t.features[n].id:x?t.id:void 0,u=c?c.type==="GeometryCollection":!1,a=u?c.geometries.length:1,s=0;s<a;s++){if(o=u?c.geometries[s]:c,o===null){if(e(null,b,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,b,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],b,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}b++}}function Tt(t,e){ra(t,function(n,r,s,o,a){var c=n===null?null:n.type;switch(c){case null:case"Point":case"LineString":case"Polygon":return e(De(n,s,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(c){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(e(De(p,s),r,f)===!1)return!1}})}function Rn(t,e={}){const n=ze(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return ia(n,e);case"MultiPolygon":return sa(n,e);default:throw new Error("invalid poly")}}function ia(t,e={}){const r=ze(t).coordinates,s=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Wr(r,s)}function sa(t,e={}){const r=ze(t).coordinates,s=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(Wr(a,s))}),En(o)}function Wr(t,e){return t.length>1?zo(t,e):Ko(t[0],e)}function oa(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Tt(t,s=>{Tt(e,o=>{if(r===!1)return!1;r=aa(s.geometry,o.geometry,n)})}),r}function aa(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!fa(t.coordinates,e.coordinates);case"LineString":return!ur(e,t);case"Polygon":return!te(t,e)}break;case"LineString":switch(e.type){case"Point":return!ur(t,e);case"LineString":return!la(t,e,n);case"Polygon":return!fr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!te(e,t);case"LineString":return!fr(t,e,n);case"Polygon":return!ca(e,t,n)}}return!1}function ur(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(ua(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function la(t,e,n){return In(t,e,{ignoreSelfIntersections:n}).features.length>0}function fr(t,e,n){for(const s of e.coordinates)if(te(s,t))return!0;return In(e,Rn(t),{ignoreSelfIntersections:n}).features.length>0}function ca(t,e,n){for(const s of t.coordinates[0])if(te(s,e))return!0;for(const s of e.coordinates[0])if(te(s,t))return!0;return In(Rn(t),Rn(e),{ignoreSelfIntersections:n}).features.length>0}function ua(t,e,n){const r=n[0]-t[0],s=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-s*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function fa(t,e){return t[0]===e[0]&&t[1]===e[1]}function ha(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Tt(t,s=>{Tt(e,o=>{if(r===!0)return!0;r=!oa(s.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var da=ha;function kt(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return Ur(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Ot(t,e,n={}){const r=Br(t),s=Vo(e);for(let o=0;o<s.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===s.length-2&&(a="end"),o===0&&o+1===s.length-1&&(a="both")),pa(s[o],s[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function pa(t,e,n,r,s){const o=n[0],a=n[1],c=t[0],u=t[1],f=e[0],h=e[1],p=n[0]-c,b=n[1]-u,y=f-c,x=h-u,_=p*x-b*y;if(s!==null){if(Math.abs(_)>s)return!1}else if(_!==0)return!1;if(Math.abs(y)===Math.abs(x)&&Math.abs(y)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(y)>=Math.abs(x)?y>0?c<o&&o<=f:f<=o&&o<c:x>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(y)>=Math.abs(x)?y>0?c<=o&&o<f:f<o&&o<=c:x>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(y)>=Math.abs(x)?y>0?c<o&&o<f:f<o&&o<c:x>0?u<a&&a<h:h<a&&a<u}else return Math.abs(y)>=Math.abs(x)?y>0?c<=o&&o<=f:f<=o&&o<=c:x>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function ga(t,e){var n=ze(t),r=ze(e),s=n.type,o=r.type;switch(s){case"Point":switch(o){case"MultiPoint":return ya(n,r);case"LineString":return Ot(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return te(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return ma(n,r);case"LineString":return ba(n,r);case"Polygon":case"MultiPolygon":return wa(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return xa(n,r);case"Polygon":case"MultiPolygon":return va(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return _a(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+s+" geometry not supported")}}function ya(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(Kr(e.coordinates[n],t.coordinates)){r=!0;break}return r}function ma(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,s=0;s<e.coordinates.length;s++)Kr(t.coordinates[n],e.coordinates[s])&&(r=!0);if(!r)return!1}return!0}function ba(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Ot(t.coordinates[r],e))return!1;n||(n=Ot(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function wa(t,e){for(var n=!0,r=!1,s=0;s<t.coordinates.length;s++){if(r=te(t.coordinates[s],e),!r){n=!1;break}r=te(t.coordinates[s],e,{ignoreBoundary:!0})}return n&&r}function xa(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Ot(t.coordinates[n],e))return!1;return!0}function va(t,e){var n=kt(e),r=kt(t);if(!Gr(n,r))return!1;for(var s=!1,o=0;o<t.coordinates.length;o++){if(!te(t.coordinates[o],e))return!1;if(s||(s=te(t.coordinates[o],e,{ignoreBoundary:!0})),!s&&o<t.coordinates.length-1){var a=Ma(t.coordinates[o],t.coordinates[o+1]);s=te(a,e,{ignoreBoundary:!0})}}return s}function _a(t,e){var n=kt(t),r=kt(e);if(!Gr(r,n))return!1;for(var s=0;s<t.coordinates[0].length;s++)if(!te(t.coordinates[0][s],e))return!1;return!0}function Gr(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Kr(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ma(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Sa=ga;const $a=(t,e)=>e?da(t,e):!0,La=(t,e)=>e?Sa(t,e):!0;function Ca(t,e="highlight",n="title"){const r=(o,a,c)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=c},s=(o,a=[])=>{let c="",u=0;return a.forEach(f=>{const h=f[1]+1;c+=[o.substring(u,f[0]),`<mark class="${e}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),c+=o.substring(u),c};return t.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const c={...o};return a.forEach(u=>{u.key===n&&r(c,u.key,s(u.value,u.indices))}),c})}let zr;const Aa=(t,e)=>{zr=new Ae(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Ea=async(t,e,n)=>{const r=Object.entries(e).filter(([,c])=>c.type==="text"||c.type==="select"||c.type==="multiselect").reduce((c,[u,f])=>{const h="$or",p=[],b=(y,x)=>{const _={};f.type==="text"?_[y]=`${x}`:_[u]=`="${y}"`,p.push(_)};return Object.entries(f.state).filter(([,y])=>y).forEach(([y,x])=>b(y,x)),p.length>0&&c.push({[h]:p}),c},[]);let s;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)s=t;else{const c={$and:[...r]},u=zr.search(c);s=n.enableHighlighting?Ca(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(e).filter(([,c])=>c.type==="range").reduce((c,[u,f])=>(c[u]={min:f.state.min,max:f.state.max,format:f.format},c),{});if(Object.keys(o).length>0){const c=[];for(let u=0;u<s.length;u++){const f={};for(const[h,p]of Object.entries(o)){const b=x=>p.format==="date"?Qe(x).unix():x,y=tt(h,s[u]);y?Array.isArray(y)?f[h]=o[h].min<=b(y[1])&&b(y[0])<=o[h].max:b(y)>=o[h].min&&b(y)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&c.push(s[u])}s=[...c]}const a=Object.entries(e).filter(([,c])=>c.type==="spatial").reduce((c,[u,f])=>(c[u]={geometry:f.state.geometry,mode:f.state.mode},c),{});if(Object.values(a).map(c=>c.geometry).filter(c=>!!c).length>0){const c=[];for(let u=0;u<s.length;u++){const f={};for(const h of Object.keys(a)){const p=tt(h,s[u]),b=a[h].mode||"within";p&&(b==="within"?La(p,a[h].geometry):$a(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&c.push(s[u])}s=[...c]}return s};function Ra(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Ht(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function hr(t,e){return t*2+e}function Pa(t){return Object.keys(t).map(e=>({title:A`${t[e].title||t[e].key}:
        <strong>${t[e].stringifiedState}</strong>`,key:e})).filter(e=>t[e.key].dirty)}function Pn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Ta(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function Vr(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r?.classList.contains("details-filter")){if(!r.open||e?.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(s=>{const o=s.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!r?.open||e?.expandMultipleResults)return;n.querySelectorAll("details").forEach(s=>{s!==r&&s.removeAttribute("open")})}}function tt(t,e){return t?.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}class ka extends fe{static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}constructor(){super(),this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=this.#i.bind(this),this._handleKeyDown=this.#r.bind(this)}set showDropdown(e){this.renderRoot.querySelector("[popover]").togglePopover(e)}get showDropdown(){return this.renderRoot.querySelector("[popover]")?.matches(":popover-open")}#e(){setTimeout(()=>this._overlayCleanup=No(this))}#t(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),this.#e()}connectedCallback(){super.connectedCallback(),this.inlineMode&&this.#t()}#n(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()}disconnectedCallback(){this.inlineMode&&this.#n(),super.disconnectedCallback()}_overlayCleanup(){}#i(e){Uo(e,this)}#r(e){qo(e,this)}#s(e){Ho(e,this)}#a(){Bo(this)}#o(e){Io(e,this)}#l(e){fo(e,this)}#c(e){Lr(e,this)}updateInline(){this.inlineMode&&this.requestUpdate()}updated(e){e.has("inlineMode")&&(this.inlineMode?this.#t():this.#n())}render(){return A`
      <style>
        ${!this.unstyled&&nt}
      </style>
      ${this.inlineMode?A`
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

                  ${K(Pn(this.filters),()=>A`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${Pn(this.filters)?"dirty-filter-input":""}"
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
          `:A`<slot name="section"></slot>`}
    `}}customElements.define("eox-itemfilter-container",ka);function Oa(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",Ht(t.filterObject),t.requestUpdate()}function ja(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Tn="ddd, D MMM YYYY HH:mm:ss";function Da(t){if(t.filterObject=Ht(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function Na(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Qe.unix(n).format(Tn)} - ${Qe.unix(r).format(Tn)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function Ia(t,e,n){const r=n.filterObject.format==="date",s=n.filterObject.state[t],o=r?Qe.unix(s).format(Tn):s;return A`<div class="range-${e}">${o}</div>`}function Ba(t){Ha(-1,t),Ht(t.filterObject),t.requestUpdate()}function Ha(t,e){e.selectedItems=[],Bn(e),Fr(e)}function Yr(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,s)=>s!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),Bn(e),Fr(e)}function qa(t,e){e.query=t.target.value,e.showSuggestions=!0}function Ua(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&Yr(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function Wa(t,e){(t.has("suggestions")||t.has("query"))&&Bn(e)}function Ga(t,e){const n=t.filterObject?.sort||((r,s)=>r.localeCompare(s));return e.sort(n).map(r=>r)}function Bn(t){let e;t.query&&(e=new Ae(t.suggestions,{threshold:.4}).search(t.query).map(r=>r.item)),t.filteredSuggestions=Ga(t,e||t.suggestions),t.filterObject?.filterKeys&&(t.filteredSuggestions=t.filterObject?.filterKeys.map(n=>`${n}`),t.filterObject.state=t.filterObject?.filterKeys.map(n=>`${n}`).reduce((n,r)=>(r in n||(n[r]=void 0),n),t.filterObject.state)),t.highlightedIndex=-1}function Fr(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Ka(t){Ht(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function za(t){t.renderRoot.querySelector("#eox-map").innerHTML="",Xr(t)}function Va(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function Xr(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&Ya(t.geometry),r=Ra(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const s=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{s(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{s(o.features.getArray()[0])})},1e3)}function Ya(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}class Fa extends fe{static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}#e=()=>{ja(this)};reset(){Oa(this)}debouncedInputHandler=Dt(this.#e,500,{leading:!0});createRenderRoot(){return this}render(){return K(this.filterObject,()=>A`
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
      `)}}customElements.define("eox-itemfilter-text",Fa);function Xa(t,e,n){return t.filter(r=>{const s=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(c=>n.filters[n.config.aggregateResults].state[c])),(o?.length?o.includes(e):!0)&&Array.isArray(s)?s.includes(e):s===e})}function Ja(t,e){return A`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||Le}
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
        ${Jr(t,e)}
      </div>
    </details>
  `}function Jr(t,e){const n=e.results,r=t?e.aggregateResults(n,t):n,s=e.config,o=a=>e.selectedResult?.[s.idProperty]===a[s.idProperty]?"highlighted":Le;return A`
    <ul class=${e.resultType}>
      ${xs(r,a=>a.id,a=>A`
          <li
            class=${o(a)}
            @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
          >
            <span id="${a.id}">
              ${K(s.subTitleProperty||s.imageProperty,()=>A`
                  ${tt(s.imageProperty,a)?A`
                        <img
                          class="image"
                          src="${tt(s.imageProperty,a)}"
                        />
                      `:A`
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
                      >${mn(a[s.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${mn(a[s.subTitleProperty])}</span
                    >
                  </div>
                `,()=>A`
                  <span class="title"
                    >${mn(a[s.titleProperty])}</span
                  >
                `)}
            </span>
          </li>
        `)}
    </ul>
  `}class Za extends fe{static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String}}}constructor(){super(),this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list"}#e(e){return Jr(e,this)}#t(e){return Ja(e,this)}aggregateResults(e,n){return Xa(e,n,this)}createRenderRoot(){return this}handleAccordion(e){Vr(e,this.config,this)}render(){return A`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${K(this.results.length<1,()=>A`<small class="no-results">No matching items</small>`,()=>Le)}
          <ul id="results" part="results">
            ${K(this.config.aggregateResults,()=>jt(this.resultAggregation.filter(e=>this.aggregateResults(this.results,e).length),e=>A`${K(this.aggregateResults(this.results,e).length===1&&this.config.autoSpreadSingle,()=>A`<div style="margin-left: -8px">
                          ${this.#e(e)}
                        </div>`,()=>this.#t(e))}`),()=>this.#e())}
          </ul>
        </div>
      </section>
    `}}customElements.define("eox-itemfilter-results",Za);class Qa extends fe{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(e){Wa(e,this)}#e(e){qa(e,this)}#t(e){Ua(e,this)}#n(e){Yr(e,this)}reset(){Ba(this)}debouncedInputHandler=Dt(this.#n,500,{leading:!0});firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(e=>this.filterObject.state[e]?e:null).filter(e=>!!e),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const e=this.type.includes("multi")?"checkbox":"radio",n=this.filteredSuggestions.length>5?"select-overflow":Le;return A`
      <style>
        ${!this.unstyled&&nt}
        ${!this.unstyled&&vs}
        ${!this.unstyled&&_s}
      </style>
      ${K(this.suggestions.length>10,()=>A`<div class="autocomplete-container">
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
          ${this.filteredSuggestions.map(r=>A`
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
    `}}customElements.define("eox-itemfilter-select",Qa);class el extends fe{static properties={filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}};constructor(){super(),this.filterObject={},this.tabIndex=0,this.inputHandler=this.#e.bind(this),this.debouncedInputHandler=Dt(this.inputHandler,500,{leading:!1})}#e(e){Na(e,this)}#t(e,n){return Ia(e,n,this)}reset(){Da(this)}createRenderRoot(){return this}render(){return K(this.filterObject,()=>A`
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
      `)}}customElements.define("eox-itemfilter-range",el);class tl extends fe{static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}constructor(){super(),this.filterObject={},this.tabIndex=0}reset(){Ka(this)}createRenderRoot(){return this}#e(e){Va(e,this)}render(){return K(this.filterObject,()=>A`
        <form style="display: inline">
          ${jt(["intersects","within"],e=>A`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===e||Le}"
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
      `)}}customElements.define("eox-itemfilter-spatial",tl);class nl extends fe{static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}constructor(){super(),this.geometry=null,this.eoxMap=null}firstUpdated(){this.#e()}#e(){Xr(this)}reset(){za(this)}render(){return A`<div id="eox-map"></div>`}}customElements.define("eox-itemfilter-spatial-filter",nl);function rl(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target.classList.add("highlighted"),e.requestUpdate()}function il(t,e){const{code:n,target:r}=t;r.id==="eox-itemfilter-input-search"&&(e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&sl(n,t.target.value??"",e)))}function sl(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const s=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];s.classList.contains("highlighted")||s.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let s=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(s=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),s=s+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&s<0&&(s=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&s>n.renderRoot.querySelectorAll(".chip").length-1&&(s=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[s].classList.add("highlighted")}}class ol extends fe{static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}constructor(){super(),this.items={},this.controller={}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this.#e.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this.#e.bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}#e(e){il(e,this)}#t(e){rl(e,this)}render(){return A`
      <style>
        ${nt}
      </style>
      <span class="chip-container">
        ${jt(this.items,e=>A`
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
    `}}customElements.define("eox-itemfilter-chips",ol);const al=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),dr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var xn,pr;function ll(){if(pr)return xn;pr=1;var t=200,e="__lodash_hash_undefined__",n=1/0,r="[object Function]",s="[object GeneratorFunction]",o=/[\\^$.*+?()[\]{}|]/g,a=/^\[object .+?Constructor\]$/,c=typeof Se=="object"&&Se&&Se.Object===Object&&Se,u=typeof self=="object"&&self&&self.Object===Object&&self,f=c||u||Function("return this")();function h(g,w){var S=g?g.length:0;return!!S&&b(g,w,0)>-1}function p(g,w,S,j){for(var H=g.length,V=S+-1;++V<H;)if(w(g[V],V,g))return V;return-1}function b(g,w,S){if(w!==w)return p(g,y,S);for(var j=S-1,H=g.length;++j<H;)if(g[j]===w)return j;return-1}function y(g){return g!==g}function x(g,w){return g.has(w)}function _(g,w){return g?.[w]}function E(g){var w=!1;if(g!=null&&typeof g.toString!="function")try{w=!!(g+"")}catch{}return w}function $(g){var w=-1,S=Array(g.size);return g.forEach(function(j){S[++w]=j}),S}var T=Array.prototype,R=Function.prototype,k=Object.prototype,O=f["__core-js_shared__"],Z=function(){var g=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||"");return g?"Symbol(src)_1."+g:""}(),D=R.toString,U=k.hasOwnProperty,W=k.toString,Ne=RegExp("^"+D.call(U).replace(o,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ee=T.splice,se=Ye(f,"Map"),Ie=Ye(f,"Set"),B=Ye(Object,"create");function z(g){var w=-1,S=g?g.length:0;for(this.clear();++w<S;){var j=g[w];this.set(j[0],j[1])}}function Be(){this.__data__=B?B(null):{}}function qt(g){return this.has(g)&&delete this.__data__[g]}function Ut(g){var w=this.__data__;if(B){var S=w[g];return S===e?void 0:S}return U.call(w,g)?w[g]:void 0}function Wt(g){var w=this.__data__;return B?w[g]!==void 0:U.call(w,g)}function Gt(g,w){var S=this.__data__;return S[g]=B&&w===void 0?e:w,this}z.prototype.clear=Be,z.prototype.delete=qt,z.prototype.get=Ut,z.prototype.has=Wt,z.prototype.set=Gt;function we(g){var w=-1,S=g?g.length:0;for(this.clear();++w<S;){var j=g[w];this.set(j[0],j[1])}}function Kt(){this.__data__=[]}function zt(g){var w=this.__data__,S=Re(w,g);if(S<0)return!1;var j=w.length-1;return S==j?w.pop():Ee.call(w,S,1),!0}function Vt(g){var w=this.__data__,S=Re(w,g);return S<0?void 0:w[S][1]}function Yt(g){return Re(this.__data__,g)>-1}function Ft(g,w){var S=this.__data__,j=Re(S,g);return j<0?S.push([g,w]):S[j][1]=w,this}we.prototype.clear=Kt,we.prototype.delete=zt,we.prototype.get=Vt,we.prototype.has=Yt,we.prototype.set=Ft;function P(g){var w=-1,S=g?g.length:0;for(this.clear();++w<S;){var j=g[w];this.set(j[0],j[1])}}function it(){this.__data__={hash:new z,map:new(se||we),string:new z}}function Xt(g){return qe(this,g).delete(g)}function oe(g){return qe(this,g).get(g)}function st(g){return qe(this,g).has(g)}function ot(g,w){return qe(this,g).set(g,w),this}P.prototype.clear=it,P.prototype.delete=Xt,P.prototype.get=oe,P.prototype.has=st,P.prototype.set=ot;function He(g){var w=-1,S=g?g.length:0;for(this.__data__=new P;++w<S;)this.add(g[w])}function at(g){return this.__data__.set(g,e),this}function lt(g){return this.__data__.has(g)}He.prototype.add=He.prototype.push=at,He.prototype.has=lt;function Re(g,w){for(var S=g.length;S--;)if(rn(g[S][0],w))return S;return-1}function Jt(g){if(!ct(g)||tn(g))return!1;var w=sn(g)||E(g)?Ne:a;return w.test(Fe(g))}function Zt(g,w,S){var j=-1,H=h,V=g.length,ut=!0,ne=[],ae=ne;if(V>=t){var ft=Qt(g);if(ft)return $(ft);ut=!1,H=x,ae=new He}else ae=ne;e:for(;++j<V;){var xe=g[j],ve=xe;if(xe=xe!==0?xe:0,ut&&ve===ve){for(var ht=ae.length;ht--;)if(ae[ht]===ve)continue e;ne.push(xe)}else H(ae,ve,S)||(ae!==ne&&ae.push(ve),ne.push(xe))}return ne}var Qt=Ie&&1/$(new Ie([,-0]))[1]==n?function(g){return new Ie(g)}:on;function qe(g,w){var S=g.__data__;return en(w)?S[typeof w=="string"?"string":"hash"]:S.map}function Ye(g,w){var S=_(g,w);return Jt(S)?S:void 0}function en(g){var w=typeof g;return w=="string"||w=="number"||w=="symbol"||w=="boolean"?g!=="__proto__":g===null}function tn(g){return!!Z&&Z in g}function Fe(g){if(g!=null){try{return D.call(g)}catch{}try{return g+""}catch{}}return""}function nn(g){return g&&g.length?Zt(g):[]}function rn(g,w){return g===w||g!==g&&w!==w}function sn(g){var w=ct(g)?W.call(g):"";return w==r||w==s}function ct(g){var w=typeof g;return!!g&&(w=="object"||w=="function")}function on(){}return xn=nn,xn}var cl=ll();const Zr=yr(cl);var Ze={exports:{}};Ze.exports;var gr;function ul(){return gr||(gr=1,function(t,e){var n=200,r="Expected a function",s="__lodash_hash_undefined__",o=1,a=2,c=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",b="[object Error]",y="[object Function]",x="[object GeneratorFunction]",_="[object Map]",E="[object Number]",$="[object Object]",T="[object Promise]",R="[object RegExp]",k="[object Set]",O="[object String]",Z="[object Symbol]",D="[object WeakMap]",U="[object ArrayBuffer]",W="[object DataView]",Ne="[object Float32Array]",Ee="[object Float64Array]",se="[object Int8Array]",Ie="[object Int16Array]",B="[object Int32Array]",z="[object Uint8Array]",Be="[object Uint8ClampedArray]",qt="[object Uint16Array]",Ut="[object Uint32Array]",Wt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gt=/^\w*$/,we=/^\./,Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zt=/[\\^$.*+?()[\]{}|]/g,Vt=/\\(\\)?/g,Yt=/^\[object .+?Constructor\]$/,Ft=/^(?:0|[1-9]\d*)$/,P={};P[Ne]=P[Ee]=P[se]=P[Ie]=P[B]=P[z]=P[Be]=P[qt]=P[Ut]=!0,P[u]=P[f]=P[U]=P[h]=P[W]=P[p]=P[b]=P[y]=P[_]=P[E]=P[$]=P[R]=P[k]=P[O]=P[D]=!1;var it=typeof Se=="object"&&Se&&Se.Object===Object&&Se,Xt=typeof self=="object"&&self&&self.Object===Object&&self,oe=it||Xt||Function("return this")(),st=e&&!e.nodeType&&e,ot=st&&!0&&t&&!t.nodeType&&t,He=ot&&ot.exports===st,at=He&&it.process,lt=function(){try{return at&&at.binding("util")}catch{}}(),Re=lt&&lt.isTypedArray;function Jt(i,l){for(var d=-1,m=i?i.length:0,M=Array(m);++d<m;)M[d]=l(i[d],d,i);return M}function Zt(i,l){for(var d=-1,m=l.length,M=i.length;++d<m;)i[M+d]=l[d];return i}function Qt(i,l){for(var d=-1,m=i?i.length:0;++d<m;)if(l(i[d],d,i))return!0;return!1}function qe(i){return function(l){return l?.[i]}}function Ye(i,l){for(var d=-1,m=Array(i);++d<i;)m[d]=l(d);return m}function en(i){return function(l){return i(l)}}function tn(i,l){return i?.[l]}function Fe(i){var l=!1;if(i!=null&&typeof i.toString!="function")try{l=!!(i+"")}catch{}return l}function nn(i){var l=-1,d=Array(i.size);return i.forEach(function(m,M){d[++l]=[M,m]}),d}function rn(i,l){return function(d){return i(l(d))}}function sn(i){var l=-1,d=Array(i.size);return i.forEach(function(m){d[++l]=m}),d}var ct=Array.prototype,on=Function.prototype,g=Object.prototype,w=oe["__core-js_shared__"],S=function(){var i=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),j=on.toString,H=g.hasOwnProperty,V=g.toString,ut=RegExp("^"+j.call(H).replace(zt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ne=oe.Symbol,ae=oe.Uint8Array,ft=g.propertyIsEnumerable,xe=ct.splice,ve=ne?ne.isConcatSpreadable:void 0,ht=rn(Object.keys,Object),an=Ue(oe,"DataView"),Xe=Ue(oe,"Map"),ln=Ue(oe,"Promise"),cn=Ue(oe,"Set"),un=Ue(oe,"WeakMap"),Je=Ue(Object,"create"),ei=Te(an),ti=Te(Xe),ni=Te(ln),ri=Te(cn),ii=Te(un),dt=ne?ne.prototype:void 0,fn=dt?dt.valueOf:void 0,Hn=dt?dt.toString:void 0;function Pe(i){var l=-1,d=i?i.length:0;for(this.clear();++l<d;){var m=i[l];this.set(m[0],m[1])}}function si(){this.__data__=Je?Je(null):{}}function oi(i){return this.has(i)&&delete this.__data__[i]}function ai(i){var l=this.__data__;if(Je){var d=l[i];return d===s?void 0:d}return H.call(l,i)?l[i]:void 0}function li(i){var l=this.__data__;return Je?l[i]!==void 0:H.call(l,i)}function ci(i,l){var d=this.__data__;return d[i]=Je&&l===void 0?s:l,this}Pe.prototype.clear=si,Pe.prototype.delete=oi,Pe.prototype.get=ai,Pe.prototype.has=li,Pe.prototype.set=ci;function de(i){var l=-1,d=i?i.length:0;for(this.clear();++l<d;){var m=i[l];this.set(m[0],m[1])}}function ui(){this.__data__=[]}function fi(i){var l=this.__data__,d=gt(l,i);if(d<0)return!1;var m=l.length-1;return d==m?l.pop():xe.call(l,d,1),!0}function hi(i){var l=this.__data__,d=gt(l,i);return d<0?void 0:l[d][1]}function di(i){return gt(this.__data__,i)>-1}function pi(i,l){var d=this.__data__,m=gt(d,i);return m<0?d.push([i,l]):d[m][1]=l,this}de.prototype.clear=ui,de.prototype.delete=fi,de.prototype.get=hi,de.prototype.has=di,de.prototype.set=pi;function pe(i){var l=-1,d=i?i.length:0;for(this.clear();++l<d;){var m=i[l];this.set(m[0],m[1])}}function gi(){this.__data__={hash:new Pe,map:new(Xe||de),string:new Pe}}function yi(i){return yt(this,i).delete(i)}function mi(i){return yt(this,i).get(i)}function bi(i){return yt(this,i).has(i)}function wi(i,l){return yt(this,i).set(i,l),this}pe.prototype.clear=gi,pe.prototype.delete=yi,pe.prototype.get=mi,pe.prototype.has=bi,pe.prototype.set=wi;function pt(i){var l=-1,d=i?i.length:0;for(this.__data__=new pe;++l<d;)this.add(i[l])}function xi(i){return this.__data__.set(i,s),this}function vi(i){return this.__data__.has(i)}pt.prototype.add=pt.prototype.push=xi,pt.prototype.has=vi;function ge(i){this.__data__=new de(i)}function _i(){this.__data__=new de}function Mi(i){return this.__data__.delete(i)}function Si(i){return this.__data__.get(i)}function $i(i){return this.__data__.has(i)}function Li(i,l){var d=this.__data__;if(d instanceof de){var m=d.__data__;if(!Xe||m.length<n-1)return m.push([i,l]),this;d=this.__data__=new pe(m)}return d.set(i,l),this}ge.prototype.clear=_i,ge.prototype.delete=Mi,ge.prototype.get=Si,ge.prototype.has=$i,ge.prototype.set=Li;function Ci(i,l){var d=ye(i)||pn(i)?Ye(i.length,String):[],m=d.length,M=!!m;for(var v in i)H.call(i,v)&&!(M&&(v=="length"||Gn(v,m)))&&d.push(v);return d}function gt(i,l){for(var d=i.length;d--;)if(Vn(i[d][0],l))return d;return-1}var Ai=Ki(Pi);function Ei(i,l,d,m,M){var v=-1,C=i.length;for(d||(d=Ji),M||(M=[]);++v<C;){var N=i[v];d(N)?Zt(M,N):M[M.length]=N}return M}var Ri=zi();function Pi(i,l){return i&&Ri(i,l,_t)}function qn(i,l){l=mt(l,i)?[l]:Un(l);for(var d=0,m=l.length;i!=null&&d<m;)i=i[bt(l[d++])];return d&&d==m?i:void 0}function Ti(i){return V.call(i)}function ki(i,l){return i!=null&&l in Object(i)}function hn(i,l,d,m,M){return i===l?!0:i==null||l==null||!xt(i)&&!vt(l)?i!==i&&l!==l:Oi(i,l,hn,d,m,M)}function Oi(i,l,d,m,M,v){var C=ye(i),N=ye(l),I=f,q=f;C||(I=_e(i),I=I==u?$:I),N||(q=_e(l),q=q==u?$:q);var Y=I==$&&!Fe(i),F=q==$&&!Fe(l),G=I==q;if(G&&!Y)return v||(v=new ge),C||ss(i)?Wn(i,l,d,m,M,v):Vi(i,l,I,d,m,M,v);if(!(M&a)){var Q=Y&&H.call(i,"__wrapped__"),ee=F&&H.call(l,"__wrapped__");if(Q||ee){var Me=Q?i.value():i,me=ee?l.value():l;return v||(v=new ge),d(Me,me,m,M,v)}}return G?(v||(v=new ge),Yi(i,l,d,m,M,v)):!1}function ji(i,l,d,m){var M=d.length,v=M;if(i==null)return!v;for(i=Object(i);M--;){var C=d[M];if(C[2]?C[1]!==i[C[0]]:!(C[0]in i))return!1}for(;++M<v;){C=d[M];var N=C[0],I=i[N],q=C[1];if(C[2]){if(I===void 0&&!(N in i))return!1}else{var Y=new ge,F;if(!(F===void 0?hn(q,I,m,o|a,Y):F))return!1}}return!0}function Di(i){if(!xt(i)||Qi(i))return!1;var l=Yn(i)||Fe(i)?ut:Yt;return l.test(Te(i))}function Ni(i){return vt(i)&&gn(i.length)&&!!P[V.call(i)]}function Ii(i){return typeof i=="function"?i:i==null?cs:typeof i=="object"?ye(i)?Ui(i[0],i[1]):qi(i):us(i)}function Bi(i){if(!es(i))return ht(i);var l=[];for(var d in Object(i))H.call(i,d)&&d!="constructor"&&l.push(d);return l}function Hi(i,l){var d=-1,m=wt(i)?Array(i.length):[];return Ai(i,function(M,v,C){m[++d]=l(M,v,C)}),m}function qi(i){var l=Fi(i);return l.length==1&&l[0][2]?zn(l[0][0],l[0][1]):function(d){return d===i||ji(d,i,l)}}function Ui(i,l){return mt(i)&&Kn(l)?zn(bt(i),l):function(d){var m=as(d,i);return m===void 0&&m===l?ls(d,i):hn(l,m,void 0,o|a)}}function Wi(i){return function(l){return qn(l,i)}}function Gi(i){if(typeof i=="string")return i;if(yn(i))return Hn?Hn.call(i):"";var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function Un(i){return ye(i)?i:ts(i)}function Ki(i,l){return function(d,m){if(d==null)return d;if(!wt(d))return i(d,m);for(var M=d.length,v=-1,C=Object(d);++v<M&&m(C[v],v,C)!==!1;);return d}}function zi(i){return function(l,d,m){for(var M=-1,v=Object(l),C=m(l),N=C.length;N--;){var I=C[++M];if(d(v[I],I,v)===!1)break}return l}}function Wn(i,l,d,m,M,v){var C=M&a,N=i.length,I=l.length;if(N!=I&&!(C&&I>N))return!1;var q=v.get(i);if(q&&v.get(l))return q==l;var Y=-1,F=!0,G=M&o?new pt:void 0;for(v.set(i,l),v.set(l,i);++Y<N;){var Q=i[Y],ee=l[Y];if(m)var Me=C?m(ee,Q,Y,l,i,v):m(Q,ee,Y,i,l,v);if(Me!==void 0){if(Me)continue;F=!1;break}if(G){if(!Qt(l,function(me,ke){if(!G.has(ke)&&(Q===me||d(Q,me,m,M,v)))return G.add(ke)})){F=!1;break}}else if(!(Q===ee||d(Q,ee,m,M,v))){F=!1;break}}return v.delete(i),v.delete(l),F}function Vi(i,l,d,m,M,v,C){switch(d){case W:if(i.byteLength!=l.byteLength||i.byteOffset!=l.byteOffset)return!1;i=i.buffer,l=l.buffer;case U:return!(i.byteLength!=l.byteLength||!m(new ae(i),new ae(l)));case h:case p:case E:return Vn(+i,+l);case b:return i.name==l.name&&i.message==l.message;case R:case O:return i==l+"";case _:var N=nn;case k:var I=v&a;if(N||(N=sn),i.size!=l.size&&!I)return!1;var q=C.get(i);if(q)return q==l;v|=o,C.set(i,l);var Y=Wn(N(i),N(l),m,M,v,C);return C.delete(i),Y;case Z:if(fn)return fn.call(i)==fn.call(l)}return!1}function Yi(i,l,d,m,M,v){var C=M&a,N=_t(i),I=N.length,q=_t(l),Y=q.length;if(I!=Y&&!C)return!1;for(var F=I;F--;){var G=N[F];if(!(C?G in l:H.call(l,G)))return!1}var Q=v.get(i);if(Q&&v.get(l))return Q==l;var ee=!0;v.set(i,l),v.set(l,i);for(var Me=C;++F<I;){G=N[F];var me=i[G],ke=l[G];if(m)var Fn=C?m(ke,me,G,l,i,v):m(me,ke,G,i,l,v);if(!(Fn===void 0?me===ke||d(me,ke,m,M,v):Fn)){ee=!1;break}Me||(Me=G=="constructor")}if(ee&&!Me){var Mt=i.constructor,St=l.constructor;Mt!=St&&"constructor"in i&&"constructor"in l&&!(typeof Mt=="function"&&Mt instanceof Mt&&typeof St=="function"&&St instanceof St)&&(ee=!1)}return v.delete(i),v.delete(l),ee}function yt(i,l){var d=i.__data__;return Zi(l)?d[typeof l=="string"?"string":"hash"]:d.map}function Fi(i){for(var l=_t(i),d=l.length;d--;){var m=l[d],M=i[m];l[d]=[m,M,Kn(M)]}return l}function Ue(i,l){var d=tn(i,l);return Di(d)?d:void 0}var _e=Ti;(an&&_e(new an(new ArrayBuffer(1)))!=W||Xe&&_e(new Xe)!=_||ln&&_e(ln.resolve())!=T||cn&&_e(new cn)!=k||un&&_e(new un)!=D)&&(_e=function(i){var l=V.call(i),d=l==$?i.constructor:void 0,m=d?Te(d):void 0;if(m)switch(m){case ei:return W;case ti:return _;case ni:return T;case ri:return k;case ii:return D}return l});function Xi(i,l,d){l=mt(l,i)?[l]:Un(l);for(var m,M=-1,C=l.length;++M<C;){var v=bt(l[M]);if(!(m=i!=null&&d(i,v)))break;i=i[v]}if(m)return m;var C=i?i.length:0;return!!C&&gn(C)&&Gn(v,C)&&(ye(i)||pn(i))}function Ji(i){return ye(i)||pn(i)||!!(ve&&i&&i[ve])}function Gn(i,l){return l=l??c,!!l&&(typeof i=="number"||Ft.test(i))&&i>-1&&i%1==0&&i<l}function mt(i,l){if(ye(i))return!1;var d=typeof i;return d=="number"||d=="symbol"||d=="boolean"||i==null||yn(i)?!0:Gt.test(i)||!Wt.test(i)||l!=null&&i in Object(l)}function Zi(i){var l=typeof i;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?i!=="__proto__":i===null}function Qi(i){return!!S&&S in i}function es(i){var l=i&&i.constructor,d=typeof l=="function"&&l.prototype||g;return i===d}function Kn(i){return i===i&&!xt(i)}function zn(i,l){return function(d){return d==null?!1:d[i]===l&&(l!==void 0||i in Object(d))}}var ts=dn(function(i){i=os(i);var l=[];return we.test(i)&&l.push(""),i.replace(Kt,function(d,m,M,v){l.push(M?v.replace(Vt,"$1"):m||d)}),l});function bt(i){if(typeof i=="string"||yn(i))return i;var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function Te(i){if(i!=null){try{return j.call(i)}catch{}try{return i+""}catch{}}return""}function ns(i,l){return Ei(rs(i,l))}function rs(i,l){var d=ye(i)?Jt:Hi;return d(i,Ii(l))}function dn(i,l){if(typeof i!="function"||l&&typeof l!="function")throw new TypeError(r);var d=function(){var m=arguments,M=l?l.apply(this,m):m[0],v=d.cache;if(v.has(M))return v.get(M);var C=i.apply(this,m);return d.cache=v.set(M,C),C};return d.cache=new(dn.Cache||pe),d}dn.Cache=pe;function Vn(i,l){return i===l||i!==i&&l!==l}function pn(i){return is(i)&&H.call(i,"callee")&&(!ft.call(i,"callee")||V.call(i)==u)}var ye=Array.isArray;function wt(i){return i!=null&&gn(i.length)&&!Yn(i)}function is(i){return vt(i)&&wt(i)}function Yn(i){var l=xt(i)?V.call(i):"";return l==y||l==x}function gn(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=c}function xt(i){var l=typeof i;return!!i&&(l=="object"||l=="function")}function vt(i){return!!i&&typeof i=="object"}function yn(i){return typeof i=="symbol"||vt(i)&&V.call(i)==Z}var ss=Re?en(Re):Ni;function os(i){return i==null?"":Gi(i)}function as(i,l,d){var m=i==null?void 0:qn(i,l);return m===void 0?d:m}function ls(i,l){return i!=null&&Xi(i,l,ki)}function _t(i){return wt(i)?Ci(i):Bi(i)}function cs(i){return i}function us(i){return mt(i)?qe(bt(i)):Wi(i)}t.exports=ns}(Ze,Ze.exports)),Ze.exports}var fl=ul();const Qr=yr(fl);function hl(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},c=f=>o.format==="date"?Qe(f).unix():parseFloat(f);e.forEach(f=>{if(o.type==="range"){const h=tt(o.key,f);if(Array.isArray(h)){const p=[c(h[0]),c(h[1])];a.min=a.min!==void 0?Math.min(a.min,p[0]):p[0],a.max=a.max!==void 0?Math.max(a.max,p[1]):p[1]}else{const p=c(h);a.min=a.min!==void 0?Math.min(a.min,p):p,a.max=a.max!==void 0?Math.max(a.max,p):p}return}Array.isArray(f[o.key])?f[o.key].forEach(h=>{a[h]=void 0}):o.type==="spatial"?(a.geometry=o?.state?.geometry||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):o.key?.includes(".")?Zr(Qr(n.items,o.key)).filter(h=>h).forEach(h=>{a[h]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const s=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{s.includes(a)||s.push(a)}):(o.type==="select"||o.type==="multiselect")&&(s.includes(o.key)||s.push(o.key))}),Aa(e,Object.assign({keys:s},t.fuseConfig)),r}async function dl(t,e,n){let r;n.externalFilter?r=await Ta(e,n.filters,t):r=await Ea(e,n.filters,t),n.results=n.sortResults(r)}function pl(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return A`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return A`
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
      `;case"range":return A`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return A`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return A``}}function gl(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function yl(t,e,n){return A`
    ${K(t.dirty,()=>A`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const s=r.target.parentElement.querySelector("[slot=filter]");s&&typeof s.reset=="function"&&s.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":Le}
        </button>
      `)}
  `}function ml(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}class bl extends fe{static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},unstyled:{type:Boolean}}}#e=[];#t=[];#n=al;constructor(){super(),this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Dt(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.unstyled=!1}apply(){this.#e=hl(this.#n,this.#t,this),this.search()}async searchHandler(){await dl(this.#n,this.#t,this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(e){return gl(e,this.#n)}#i(e,n){return pl(e,n,this)}#r(e,n){return yl(e,n,this)}resetFilters(){ml(this)}firstUpdated(e){let n={};dr.map(r=>{n={...n,[r]:this[r]}}),this.#n=n,this.#t=this.items?.map((r,s)=>Object.assign({id:r[this.idProperty]||`item-${s}`},r))||[],this.apply()}updated(e){dr.map(n=>{if(e.has(n))return this.firstUpdated(),!0})}updateResult(e){this.selectedResult=e.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){return A`
      <style>
        ${Ss}
        ${!this.unstyled&&nt}
        ${!this.unstyled&&ws}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":Le}
        @submit="${e=>e.preventDefault()}"
      >
        ${K(this.filterProperties,()=>A`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${K(!this.inlineMode,()=>A`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${jt(Object.values(this.filters),(e,n)=>A` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${e}
                          @details-toggled=${r=>Vr(r,this.#n,this)}
                          data-details="${e.key}"
                        >
                          ${this.#r(e,hr(n,1))}
                          ${this.#i(e,hr(n,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${K(!this.inlineMode&&this.#n.filterProperties&&!this.inlineMode&&this.#n.filterProperties&&Pn(this.filters),()=>A`
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
        ${K(this.#n?.showResults&&this.results,()=>A`
            <eox-itemfilter-results
              .config=${this.#n}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${this.#e}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              @result=${this.updateResult}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}customElements.define("eox-itemfilter",bl);const wl=[".items"],xl={slot:"filterstitle",style:{margin:"14px 8px"}},vl={slot:"resultstitle",style:{margin:"14px 8px"}},El={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:"Results"},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:void 0},imageProperty:{type:String,default:""},subTitleProperty:{type:String,default:""},resultType:{type:String,default:""},cssVars:{type:[String,Object],default:""},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},emits:["select"],setup(t,{emit:e}){const n=e,r=t,s=async p=>{p?(h.resetSelectedCompareSTAC(),await h.loadSelectedSTAC(p.href),n("select",p)):h.selectedStac=null},o=p=>{p&&(h.loadSelectedCompareSTAC(p.href),n("select",p))},a=async p=>{const b=p.detail;r.enableCompare?o(b):s(b)},{smAndDown:c}=fs(),u=hs(()=>({titleProperty:r.titleProperty,enableHighlighting:r.enableHighlighting,expandMultipleFilters:r.expandMultipleFilters,expandMultipleResults:r.expandMultipleResults,subTitleProperty:r.subTitleProperty,resultType:r.resultType,imageProperty:r.imageProperty,aggregateResults:r.aggregateResults,style:r.cssVars,filterProperties:c.value?"":r.filterProperties})),f=ds(null),h=ps();return(p,b)=>(bs(),gs("eox-itemfilter",ys({class:"fill-height"},u.value,{ref_key:"eoxItemFilter",ref:f,style:{overflow:"auto","--background-color":"none"},onSelect:a,".items":ms(h).stac?.filter(y=>y.rel==="child")}),[Xn("h4",xl,Jn(t.filtersTitle),1),Xn("h4",vl,Jn(t.resultsTitle),1)],48,wl))}};export{El as default};
