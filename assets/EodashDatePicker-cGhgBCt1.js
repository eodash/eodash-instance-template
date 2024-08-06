import{p as B,o as $,g as I,y as _,ax as j,c as v,r as V,d as h,a as M,b as p,ay as R,az as O,T as U,aA as F,x as H,Z as N,aB as Y,aC as z,w as G,$ as w,a6 as W,a1 as y,a3 as C,aD as J,F as K,W as L,a9 as k,aE as Z,aF as q,t as S,a0 as T,M as D,aG as Q,V as P,aH as X,aI as x,aJ as tt}from"./index-CumGM5sn.js";import{t as et,e as at}from"./helpers-7QlJKT4W.js";import{m as ot,V as E}from"./VOverlay-BSfa9QNi.js";import{b as nt,f as st}from"./forwardRefs-BnY3MBOr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./transition-BudQ8UIf.js";const rt=B({id:String,text:String,...$(ot({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),it=I()({name:"VTooltip",props:rt(),emits:{"update:modelValue":t=>!0},setup(t,r){let{slots:i}=r;const o=_(t,"modelValue"),{scopeId:n}=nt(),l=j(),e=v(()=>t.id||`v-tooltip-${l}`),a=V(),s=v(()=>t.location.split(" ").length>1?t.location:t.location+" center"),c=v(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),d=v(()=>t.transition?t.transition:o.value?"scale-transition":"fade-transition"),f=v(()=>h({"aria-describedby":e.value},t.activatorProps));return M(()=>{const b=E.filterProps(t);return p(E,h({ref:a,class:["v-tooltip",t.class],style:t.style,id:e.value},b,{modelValue:o.value,"onUpdate:modelValue":m=>o.value=m,transition:d.value,absolute:!0,location:s.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:f.value,_disableGlobalStack:!0},n),{activator:i.activator,default:function(){for(var m=arguments.length,u=new Array(m),g=0;g<m;g++)u[g]=arguments[g];return i.default?.(...u)??t.text}})}),st({},a)}});function lt(t,r){const i=typeof t=="string"?R(t):t,o=ct(i,r);return{mounted:o,updated:o,unmounted(n){O(null,n)}}}function ct(t,r){return function(i,o,n){const l=typeof r=="function"?r(o):r,e=o.value?.text??o.value??l?.text,a=U(o.value)?o.value:{},s=()=>e??i.innerHTML,c=(n.ctx===o.instance.$?ut(n,o.instance.$)?.provides:n.ctx?.provides)??o.instance.$.provides,d=F(t,h(l,a),s);d.appContext=Object.assign(Object.create(null),o.instance.$.appContext,{provides:c}),O(d,i)}}function ut(t,r){const i=new Set,o=l=>{for(const e of l){if(!e)continue;if(e===t)return!0;i.add(e);let a;if(e.suspense?a=o([e.ssContent]):Array.isArray(e.children)?a=o(e.children):e.component?.vnode&&(a=o([e.component?.subTree])),a)return a;i.delete(e)}return!1};if(!o([r.subTree]))throw new Error("Could not find original vnode");const n=Array.from(i).reverse();for(const l of n)if(l.component)return l.component;return r}const A=lt(it,t=>({activator:"parent",location:t.arg?.replace("-"," ")??"top",text:typeof t.value=="boolean"?void 0:t.value})),dt={class:"flex rounded-lg border border-gray-300 dark:border-gray-600",style:{margin:"2px"}},ft=["value"],ht={__name:"EodashDatePicker",setup(t){function r(e){if(n.value&&n.value.length>0){let a=e?1/0:-1/0;n.value.forEach(s=>{s?.dates&&s.dates.forEach(c=>{c instanceof Date&&(!e&&c.getTime()>a||e&&c.getTime()<a)&&(a=c.getTime())})}),a!==0&&(l.value=new Date(a))}}const i=H(L),o=V({input:"YYYY-MM-DD"}),n=V([]),l=v({get(){return x.value?new Date(x.value):new Date},set(e){e instanceof Date&&!isNaN(e.getTime())?x.value=new Date(e.getTime()-e.getTimezoneOffset()*6e4).toISOString():x.value=new Date().toISOString()}});return N(()=>{const{selectedStac:e}=Y(z());G([e],async([a])=>{if(a){const s=et(`./${a.id}/collection.json`,i.stacEndpoint),c=at(e.value,s),d=["#009E73","#0072B2","#E69F00","#CC79A7","#56B4E9","#D55E00"];for(let f=0;f<c.length;f++){const m=(await tt.get(c[f]).then(u=>u.data)).links.filter(u=>u.rel==="item"&&"datetime"in u).map(u=>new Date(u.datetime));n.value=[{bar:{style:{backgroundColor:d[f%d.length]}},dates:m}]}}},{immediate:!0})}),(e,a)=>(w(),W(K,null,[p(C(q),{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=s=>l.value=s),masks:o.value,attributes:n.value},{default:y(({inputValue:s,inputEvents:c})=>[k("div",dt,[k("input",h({value:s},Z(c,!0),{style:{margin:"1px"},class:"flex-grow px-1 py-1 bg-white dark:bg-gray-700"}),null,16,ft)])]),_:1},8,["modelValue","masks","attributes"]),p(J,{align:"center",justify:"center",style:{"margin-top":"6px"}},{default:y(()=>[S((w(),T(P,{style:{padding:"0px","margin-right":"4px"},density:"compact",onClick:a[1]||(a[1]=s=>r(!0))},{default:y(()=>[p(D,{icon:[C(Q)]},null,8,["icon"])]),_:1})),[[A,"Set date to oldest available dataset","bottom"]]),S((w(),T(P,{style:{padding:"0px","margin-left":"4px"},density:"compact",onClick:a[2]||(a[2]=s=>r(!1))},{default:y(()=>[p(D,{icon:[C(X)]},null,8,["icon"])]),_:1})),[[A,"Set date to latest available dataset","bottom"]])]),_:1})],64))}};export{ht as default};
