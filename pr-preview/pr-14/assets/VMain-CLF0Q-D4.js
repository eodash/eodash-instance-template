import{p as r,b as i,d as u,g as c,N as d,u as y,a as e}from"./index-BUzUaDke.js";import{m as v,u as f}from"./dimensions-B3JjqHgC.js";import{u as p}from"./ssrBoot-DLIwLvmK.js";const V=r({scrollable:Boolean,...i(),...v(),...u({tag:"main"})},"VMain"),M=c()({name:"VMain",props:V(),setup(a,o){let{slots:s}=o;const{dimensionStyles:l}=f(a),{mainStyles:t,layoutIsReady:n}=d(),{ssrBootStyles:m}=p();return y(()=>e(a.tag,{class:["v-main",{"v-main--scrollable":a.scrollable},a.class],style:[t.value,m.value,l.value,a.style]},{default:()=>[a.scrollable?e("div",{class:"v-main__scroller"},[s.default?.()]):s.default?.()]})),n}});export{M as V};
