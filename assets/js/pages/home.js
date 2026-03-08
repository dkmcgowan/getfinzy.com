import {
  d as me,m as He,a as w,b as Se,k as pe,o as ee,f as g
}
from"../chunks/dom-events.js";
import"../chunks/logo.js";
import {
  t as F,w as xe,H as be,a6 as _e,b4 as Re,x as we,M as je,a2 as De,as as Te,ap as Fe,F as Ee,G as se,E as Ie,b5 as Ue,aQ as Oe,e as ke,u as We,b6 as qe,b7 as Ge,q as Ne,b8 as ae,aL as $e,s as j,h as r,d as N,f as a,b9 as Ke,n as D,i as e,g as n,a3 as Qe,aF as he,p as Ae,A as Ce,c as Me,$ as Ye
}
from"../chunks/runtime.js";
import {
  s as Y,c as Je,a as I,d as Xe,h as et
}
from"../chunks/dom-attributes.js";
import {
  a as tt,s as K
}
from"../chunks/hydration.js";
import {
  p as ce,i as Q
}
from"../chunks/component-wrapper.js";
import {
  I as B,e as O,A as le,G as ie,a as at,L as Pe,i as W
}
from"../chunks/icons.js";
import {
  L as ve
}
from"../chunks/each.js";
import {
  s as rt
}
from"../chunks/conditional.js";
import {
  b as re
}
from"../chunks/init.js";
function lt(l,t,o=!1,u=!1,h=!1) {
  var d=l,c="";
  F(()=>{var p=_e;if(c===(c=t()??"")){xe&&be();return}if(p.nodes!==null&&(Re(p.nodes.start,p.nodes.end),p.nodes=null),c!==""){if(xe){we.data;for(var s=be(),v=s;s!==null&&(s.nodeType!==je||s.data!=="");)v=s,s=De(s);if(s===null)throw Te(),Fe;me(we,v),d=Ee(s);return}var x=c+"";o?x=`<svg>${x}</svg>`:u&&(x=`<math>${x}</math>`);var _=He(x);if((o||u)&&(_=se(_)),me(se(_),_.lastChild),o||u)for(;se(_);)d.before(se(_));else d.before(_)}})
}
const ot=()=>performance.now(),G= {
  tick:l=>requestAnimationFrame(l),now:()=>ot(),tasks:new Set
};
function ze() {
  const l=G.now();
  G.tasks.forEach(t=>{t.c(l)||(G.tasks.delete(t),t.f())}),G.tasks.size!==0&&G.tick(ze)
}
function st(l) {
  let t;
  return G.tasks.size===0&&G.tick(ze), {
    promise:new Promise(o=>{G.tasks.add(t={c:l,f:o})}),abort() {
      G.tasks.delete(t)
    }
  }
}
function de(l,t) {
  $e(()=>{l.dispatchEvent(new CustomEvent(t))})
}
function it(l) {
  if(l==="float")return"cssFloat";
  if(l==="offset")return"cssOffset";
  if(l.startsWith("--"))return l;
  const t=l.split("-");
  return t.length===1?t[0]:t[0]+t.slice(1).map(o=>o[0].toUpperCase()+o.slice(1)).join("")
}
function ge(l) {
  const t= {
  }
  ,o=l.split(";");
  for(const u of o) {
    const[h,d]=u.split(":");
    if(!h||d===void 0)break;
    const c=it(h.trim());
    t[c]=d.trim()
  }
  return t
}
const dt=l=>l;
function nt(l,t,o,u) {
  var h=(l&qe)!==0,d="both",c,p=t.inert,s=t.style.overflow,v,x;
  function _() {
    return $e(()=>c??=o()(t,u?.()??{},{direction:d}))
  }
  var P= {
    is_global:h,in() {
      t.inert=p,v=ue(t,_(),x,1,()=>{de(t,"introend"),v?.abort(),v=c=void 0,t.style.overflow=s})
    }
    ,out($) {
      t.inert=!0,x=ue(t,_(),v,0,()=>{de(t,"outroend"),$?.()})
    }
    ,stop:()=> {
      v?.abort(),x?.abort()
    }
  }
  ,m=_e;
  if((m.nodes.t??=[]).push(P),tt) {
    var y=h;
    if(!y) {
      for(var i=m.parent;i&&(i.f&Ie)!==0;)for(;(i=i.parent)&&(i.f&Ue)===0;);
      y=!i||(i.f&Oe)!==0
    }
    y&&ke(()=>{We(()=>P.in())})
  }
}
function ue(l,t,o,u,h) {
  var d=u===1;
  if(Ge(t)) {
    var c,p=!1;
    return Ne(()=>{if(!p){var $=t({direction:d?"in":"out"});c=ue(l,$,o,u,h)}}), {
      abort:()=> {
        p=!0,c?.abort()
      }
      ,deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()
    }
  }
  if(o?.deactivate(),!t?.duration&&!t?.delay)return de(l,d?"introstart":"outrostart"),h(), {
    abort:ae,deactivate:ae,reset:ae,t:()=>u
  };
  const {
    delay:s=0,css:v,tick:x,easing:_=dt
  }
  =t;
  var P=[];
  if(d&&o===void 0&&(x&&x(0,1),v)) {
    var m=ge(v(0,1));
    P.push(m,m)
  }
  var y=()=>1-u,i=l.animate(P,{duration:s,fill:"forwards"});
  return i.onfinish=()=> {
    i.cancel(),de(l,d?"introstart":"outrostart");
    var $=o?.t()??1-u;
    o?.abort();
    var k=u-$,L=t.duration*Math.abs(k),H=[];
    if(L>0) {
      var S=!1;
      if(v)for(var T=Math.ceil(L/16.666666666666668),M=0;M<=T;M+=1) {
        var z=$+k*_(M/T),b=ge(v(z,1-z));
        H.push(b),S||=b.overflow==="hidden"
      }
      S&&(l.style.overflow="hidden"),y=()=> {
        var f=i.currentTime;
        return $+k*_(f/L)
      }
      ,x&&st(()=>{if(i.playState!=="running")return!1;var f=y();return x(f,1-f),!0})
    }
    i=l.animate(H,{duration:L,fill:"forwards"}),i.onfinish=()=> {
      y=()=>u,x?.(u,1-u),h()
    }
  }
  , {
    abort:()=> {
      i&&(i.cancel(),i.effect=null,i.onfinish=ae)
    }
    ,deactivate:()=> {
      h=ae
    }
    ,reset:()=> {
      u===0&&x?.(1,0)
    }
    ,t:()=>y()
  }
}
const ct= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z","clip-rule":"evenodd"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z","clip-rule":"evenodd"
    }
    ]
  }
}
,vt= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z","clip-rule":"evenodd"
    }
    ]
  }
}
,ut= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5 8.25 12l7.5-7.5"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z","clip-rule":"evenodd"
    }
    ]
  }
}
,pt= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z","clip-rule":"evenodd"
    }
    ]
  }
}
,ht= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z","clip-rule":"evenodd"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z","clip-rule":"evenodd"
    }
    ]
  }
}
,ft= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M7.25 11.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
    }
    , {
      "fill-rule":"evenodd",d:"M6 1a2.5 2.5 0 0 0-2.5 2.5v9A2.5 2.5 0 0 0 6 15h4a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 10 1H6Zm4 1.5h-.5V3a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z","clip-rule":"evenodd"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
    }
    , {
      "fill-rule":"evenodd",d:"M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
    }
    , {
      "fill-rule":"evenodd",d:"M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z","clip-rule":"evenodd"
    }
    ]
  }
}
,mt= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M7.25 11.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
    }
    , {
      "fill-rule":"evenodd",d:"M2 3.5A2.5 2.5 0 0 1 4.5 1h7A2.5 2.5 0 0 1 14 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-9Zm2.5-1h7a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z","clip-rule":"evenodd"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M5 1a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H5ZM3.5 4A1.5 1.5 0 0 1 5 2.5h10A1.5 1.5 0 0 1 16.5 4v12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 16V4Zm5.25 11.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M10.5 18a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
    }
    , {
      "fill-rule":"evenodd",d:"M7.125 1.5A3.375 3.375 0 0 0 3.75 4.875v14.25A3.375 3.375 0 0 0 7.125 22.5h9.75a3.375 3.375 0 0 0 3.375-3.375V4.875A3.375 3.375 0 0 0 16.875 1.5h-9.75ZM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 0 1 6 19.125V4.875Z","clip-rule":"evenodd"
    }
    ]
  }
}
,xt= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M2.53 3.956A1 1 0 0 0 1 4.804v6.392a1 1 0 0 0 1.53.848l5.113-3.196c.16-.1.279-.233.357-.383v2.73a1 1 0 0 0 1.53.849l5.113-3.196a1 1 0 0 0 0-1.696L9.53 3.956A1 1 0 0 0 8 4.804v2.731a.992.992 0 0 0-.357-.383L2.53 3.956Z"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M3.288 4.818A1.5 1.5 0 0 0 1 6.095v7.81a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905a1.5 1.5 0 0 0 0-2.552l-6.323-3.906A1.5 1.5 0 0 0 10 6.095v2.972a1.506 1.506 0 0 0-.389-.343L3.288 4.818Z"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z"
    }
    ]
  }
}
,bt= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z","clip-rule":"evenodd"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z","clip-rule":"evenodd"
    }
    ]
  }
}
,wt= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M5 12h14"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"
    }
    ]
  }
}
,gt= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z","clip-rule":"evenodd"
    }
    ]
  }
}
,yt= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z","clip-rule":"evenodd"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z","clip-rule":"evenodd"
    }
    ]
  }
}
,_t= {
  default: {
    a: {
      fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      "stroke-linecap":"round","stroke-linejoin":"round",d:"M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
    }
    ]
  }
  ,micro: {
    a: {
      viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M12 5H4v4h8V5Z"
    }
    , {
      "fill-rule":"evenodd",d:"M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4v1.5h2.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5H6V12H2a1 1 0 0 1-1-1V3Zm1.5 7.5v-7h11v7h-11Z","clip-rule":"evenodd"
    }
    ]
  }
  ,mini: {
    a: {
      viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M4 5h12v7H4V5Z"
    }
    , {
      "fill-rule":"evenodd",d:"M1 3.5A1.5 1.5 0 0 1 2.5 2h15A1.5 1.5 0 0 1 19 3.5v10a1.5 1.5 0 0 1-1.5 1.5H12v1.5h3.25a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5H8V15H2.5A1.5 1.5 0 0 1 1 13.5v-10Zm16.5 0h-15v10h15v-10Z","clip-rule":"evenodd"
    }
    ]
  }
  ,solid: {
    a: {
      viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"
    }
    ,path:[ {
      d:"M19.5 6h-15v9h15V6Z"
    }
    , {
      "fill-rule":"evenodd",d:"M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z","clip-rule":"evenodd"
    }
    ]
  }
};
var kt=Se('<svg viewBox="0 0 448 512" fill="currentColor"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path></svg>');
function Ve(l,t) {
  let o=ce(t,"class",3,"");
  var u=kt();
  F(()=>Y(u,0,Je(o()))),w(l,u)
}
var $t=g('<div class="border-t border-border"></div>'),At=g('<a role="menuitem" class="block px-4 py-2 text-sm hover:bg-surface-hover transition-colors"> </a>'),Ct=g('<!> <div class="px-4 pt-2.5 pb-1 text-xs font-semibold text-muted uppercase tracking-wide"> </div> <!>',1),Mt=g('<div class="flex flex-col gap-4"><div class="flex flex-wrap gap-3"><a href="https://apps.apple.com/us/app/id6759632535" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-5 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"><!> App Store</a> <a href="https://play.google.com/store/apps/details?id=com.dkmcgowan.finzy" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-5 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"><!> Google Play</a> <a href="https://www.amazon.com/gp/product/B0GRRLSYDX" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-5 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"><!> Amazon</a> <a href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-5 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"><svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" class="w-5 h-5"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"></path></svg> Microsoft</a></div> <div class="flex flex-wrap gap-2.5"><a href="https://github.com/dkmcgowan/finzy/releases/latest/download/finzy-windows-installer.exe" class="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 hover:bg-surface-hover border border-border rounded-full text-sm transition-colors"><!> Windows</a> <a href="https://github.com/dkmcgowan/finzy/releases/latest/download/finzy-macos.dmg" class="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 hover:bg-surface-hover border border-border rounded-full text-sm transition-colors"><!> macOS</a> <div class="relative" role="group"><button type="button" aria-haspopup="true"><!> Linux <span><!></span></button> <div role="menu"></div></div></div></div>');
function Pt(l) {
  const t=[ {
    label:"x64 (Intel/AMD)",formats:[ {
      label:".deb (Debian/Ubuntu)",url:"https://github.com/dkmcgowan/finzy/releases/latest/download/finzy-linux-x64.deb"
    }
    , {
      label:".rpm (Fedora/RHEL)",url:"https://github.com/dkmcgowan/finzy/releases/latest/download/finzy-linux-x64.rpm"
    }
    , {
      label:".pkg.tar.zst (Arch)",url:"https://github.com/dkmcgowan/finzy/releases/latest/download/finzy-linux-x64.pkg.tar.zst"
    }
    , {
      label:".tar.gz (Portable)",url:"https://github.com/dkmcgowan/finzy/releases/latest/download/finzy-linux-x64.tar.gz"
    }
    ]
  }
  , {
    label:"ARM64",formats:[ {
      label:".deb (Debian/Ubuntu)",url:"https://github.com/dkmcgowan/finzy/releases/latest/download/finzy-linux-arm64.deb"
    }
    , {
      label:".rpm (Fedora/RHEL)",url:"https://github.com/dkmcgowan/finzy/releases/latest/download/finzy-linux-arm64.rpm"
    }
    , {
      label:".pkg.tar.zst (Arch)",url:"https://github.com/dkmcgowan/finzy/releases/latest/download/finzy-linux-arm64.pkg.tar.zst"
    }
    , {
      label:".tar.gz (Portable)",url:"https://github.com/dkmcgowan/finzy/releases/latest/download/finzy-linux-arm64.tar.gz"
    }
    ]
  }
  ];
  let o=N(!1),u=N(!1),h=Qe(()=>r(o)||r(u));
  var d=Mt();
  ee("click",Ke,()=>{j(o,!1)});
  var c=a(d),p=a(c),s=a(p);
  B(s,{get src(){return le},class:"w-5 h-5"}),D(),e(p);
  var v=n(p,2),x=a(v);
  B(x,{get src(){return ie},class:"w-5 h-5"}),D(),e(v);
  var _=n(v,2),P=a(_);
  B(P,{get src(){return at},class:"w-5 h-5"}),D(),e(_),e(c);
  var m=n(c,2),y=a(m),i=a(y);
  Ve(i,{class:"w-3.5 h-3.5 opacity-70"}),D(),e(y);
  var $=n(y,2),k=a($);
  B(k,{get src(){return le},class:"w-3.5 h-3.5 opacity-70"}),D(),e($);
  var L=n($,2),H=a(L);
  H.__click=f=> {
    f.stopPropagation(),j(o,!r(o))
  };
  var S=a(H);
  B(S,{get src(){return Pe},class:"w-3.5 h-3.5 opacity-70"});
  var T=n(S,2);
  let M;
  var z=a(T);
  B(z,{get src(){return vt},theme:"solid",class:"w-3 h-3"}),e(T),e(H);
  var b=n(H,2);
  O(b,21,()=>t,W,(f,A,V)=>{var C=Ct(),R=he(C);{var Z=X=>{var q=$t();w(X,q)};Q(R,X=>{V>0&&X(Z)})}var te=n(R,2),J=a(te,!0);e(te);var ne=n(te,2);O(ne,17,()=>r(A).formats,W,(X,q)=>{var U=At();U.__click=()=>{j(o,!1)};var oe=a(U,!0);e(U),F(()=>{I(U,"href",r(q).url),K(oe,r(q).label)}),w(X,U)}),F(()=>K(J,r(A).label)),w(f,C)}),e(b),e(L),e(m),e(d),F(()=>{I(H,"aria-expanded",r(h)),Y(H,1,`inline-flex items-center gap-2 px-4 py-2 bg-surface/80 border border-border rounded-full text-sm transition-colors cursor-default
          ${r(h)?"bg-surface-hover":"hover:bg-surface-hover"}`),M=Y(T,1,"w-3 h-3 transition-transform duration-300",null,M,{"rotate-180":r(h)}),Y(b,1,`absolute bottom-full mb-2 left-0 w-56 bg-surface border border-border rounded-2xl shadow-xl overflow-hidden z-10 transition-all duration-150
          ${r(h)?"opacity-100 visible":"opacity-0 invisible"}`)}),ee("pointerenter",L,f=>{f.pointerType==="mouse"&&j(u,!0)}),ee("pointerleave",L,f=>{f.pointerType==="mouse"&&j(u,!1)}),w(l,d)
}
pe(["click"]);
const Ze=""+new URL("../../images/phone-home.webp",import.meta.url).href,Le=""+new URL("../../images/phone-library.webp",import.meta.url).href;
var zt=g(`<section class="relative min-h-dvh flex items-center overflow-hidden"><!> <div class="absolute top-1/3 right-1/4 w-125 h-125 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow pointer-events-none"></div> <div class="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"><div class="max-w-xl"><div class="animate-fade-in-up flex items-center gap-3 mb-5 sm:mb-8"><!> <span class="text-xl font-semibold text-text-muted">Finzy</span></div> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-in-up" style="animation-delay: 100ms;">A beautiful<br/> <span class="bg-gradient-to-r from-accent-dim to-accent bg-clip-text text-transparent">Jellyfin client</span></h1> <p class="text-base sm:text-lg text-text-muted mt-4 mb-8 sm:mt-6 sm:mb-10 max-w-md leading-relaxed animate-fade-in-up" style="animation-delay: 200ms;">Stream your media library with HDR, Dolby Vision, offline downloads, and a gorgeous experience across all your
        devices.</p> <div class="animate-fade-in-up" style="animation-delay: 300ms;"><!></div></div> <div class="relative flex justify-center lg:justify-end animate-fade-in-up" style="animation-delay: 400ms;"><div class="relative w-56 sm:w-70 md:w-75"><div class="absolute -left-8 top-3 w-full rounded-[2.5rem] overflow-hidden border border-border/30 opacity-40 blur-[1px] rotate-[-4deg]"><img alt="" class="w-full block" loading="lazy"/></div> <div class="relative rounded-[2.5rem] overflow-hidden border-2 border-border/60 shadow-[0_0_80px_-20px] shadow-accent/20"><img alt="Finzy home screen" class="w-full block"/></div></div></div></div></section>`);
function Vt(l) {
  var t=zt(),o=a(t);
  ve(o,{gradient:!1,class:"absolute -right-20 top-1/2 -translate-y-1/2 w-150 md:w-200 lg:w-250 opacity-[0.04] select-none pointer-events-none"});
  var u=n(o,4),h=a(u),d=a(h),c=a(d);
  ve(c,{class:"w-10 h-10"}),D(2),e(d);
  var p=n(d,6),s=a(p);
  Pt(s),e(p),e(h);
  var v=n(h,2),x=a(v),_=a(x),P=a(_);
  e(_);
  var m=n(_,2),y=a(m);
  e(m),e(x),e(v),e(u),e(t),F(()=>{I(P,"src",Le),I(y,"src",Ze)}),w(l,t)
}
var Zt=g("<div><!></div>");
function E(l,t) {
  Ae(t,!0);
  let o=ce(t,"delay",3,0),u=ce(t,"class",3,""),h=N(void 0),d=N(!1);
  Ce(()=>{if(!r(h))return;const s=new IntersectionObserver(([v])=>{v.isIntersecting&&(j(d,!0),s.disconnect())},{threshold:.1});return s.observe(r(h)),()=>s.disconnect()});
  var c=Zt(),p=a(c);
  rt(p,()=>t.children),e(c),re(c,s=>j(h,s),()=>r(h)),F(()=>{Y(c,1,`${u()??""} transition-all duration-600 ease-out`),Xe(c,`opacity: ${r(d)?1:0}; transform: translateY(${r(d)?0:24}px); transition-delay: ${o()??""}ms;`)}),w(l,c),Me()
}
var Lt=g('<p class="text-accent font-medium text-sm tracking-wide uppercase mb-3">Features</p> <h2 class="text-4xl md:text-5xl font-bold mb-4">Everything you need to stream</h2> <p class="text-text-muted text-lg mb-10 sm:mb-16 max-w-lg">Built for people who care about quality as much as convenience.</p>',1),Bt=g('<div class="glass-card rounded-2xl p-8 h-full flex flex-col justify-between overflow-hidden relative"><div class="relative z-10"><h3 class="text-xl font-semibold mb-2">Wide Codec Support</h3> <p class="text-sm text-text-muted leading-relaxed max-w-[280px]">Play without transcoding. Your server does less work — you get better quality.</p></div> <div class="codec-wall mt-4 svelte-1dpem8h" aria-hidden="true"><span class="text-accent">HEVC</span> <span class="text-accent/80">AV1</span> <span class="text-text/70">H.264</span> <span class="text-text/70">VP9</span> <span class="text-accent/60">AAC</span> <span class="text-text/50">FLAC</span> <span class="text-text/50">OPUS</span> <span class="text-text/50">EAC3</span> <span class="text-text/40">DTS</span> <span class="text-text/40">MPEG-4</span> <span class="text-text/30">VP8</span> <span class="text-text/30">ALAC</span> <span class="text-text/30">TrueHD</span> <span class="text-text/20">MPEG-2</span> <span class="text-text/20">VC-1</span> <span class="text-text/20">AC3</span> <span class="text-text/15">PCM</span> <span class="text-text/10">Vorbis</span> <span class="text-text/10">MP3</span> <span class="text-text/10">WMA</span></div> <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent z-[1] pointer-events-none"></div></div>'),Ht=g('<div class="glass-card rounded-2xl p-6 h-full flex flex-col justify-between overflow-hidden relative"><div class="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-accent/15 blur-2xl pointer-events-none"></div> <p class="text-xs text-text-muted uppercase tracking-wider">Display</p> <div class="mt-auto"><p class="text-3xl font-bold bg-gradient-to-r from-accent-dim to-accent bg-clip-text text-transparent leading-tight">HDR10+</p> <p class="text-sm text-text-muted/80 mt-1">Dolby Vision</p></div></div>'),St=g('<div class="glass-card rounded-2xl p-6 h-full flex flex-col justify-between"><div class="space-y-2 mb-4" aria-hidden="true"><div class="h-1.5 w-3/4 rounded-full bg-white/8"></div> <div class="h-1.5 w-1/2 rounded-full bg-white/5"></div></div> <div><p class="text-base font-semibold">Subtitles</p> <p class="text-xs text-text-muted mt-1">SSA/ASS &middot; SRT &middot; PGS</p></div></div>'),Rt=g('<div class="glass-card rounded-2xl p-6 h-full flex flex-col"><p class="text-base font-semibold mb-5">Cross-Platform</p> <div class="flex flex-col gap-3 mt-auto"><div class="flex items-center gap-3 text-sm text-text-muted"><div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><!></div> <span>iOS &middot; macOS</span></div> <div class="flex items-center gap-3 text-sm text-text-muted"><div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><!></div> <span>Android</span></div> <div class="flex items-center gap-3 text-sm text-text-muted"><div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><!></div> <span>Windows</span></div> <div class="flex items-center gap-3 text-sm text-text-muted"><div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><!></div> <span>Linux</span></div></div></div>'),jt=g('<div class="glass-card rounded-2xl p-6 h-full flex flex-col justify-between overflow-hidden"><p class="text-base font-semibold">Sign in with Jellyfin</p> <div class="mt-auto -mr-6 min-w-0 rounded-l-lg bg-white/[0.04] border border-white/[0.06] border-r-0 px-3 py-2 flex items-center gap-2 overflow-hidden" aria-hidden="true"><!> <span class="text-[11px] text-text-muted/70 font-mono whitespace-nowrap">your-server.example.com/web/#/loginFinzy</span></div></div>'),Dt=g('<div class="glass-card rounded-2xl p-6 h-full flex flex-col justify-between"><p class="text-base font-semibold">Offline</p> <div class="mt-4 space-y-2" aria-hidden="true"><div class="h-1 rounded-full bg-white/10 overflow-hidden"><div class="h-full w-3/4 rounded-full bg-accent/60"></div></div> <p class="text-[10px] text-text-muted/60">Download &amp; watch anywhere</p></div></div>'),Tt=g('<div class="glass-card rounded-2xl p-6 h-full flex flex-col justify-between"><p class="text-base font-semibold">Live TV & DVR</p> <div class="mt-4 space-y-1.5" aria-hidden="true"><div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-red-500"></div> <span class="text-[10px] text-text-muted/70">Live channels & EPG</span></div> <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-accent/60"></div> <span class="text-[10px] text-text-muted/60">Schedule recordings</span></div></div></div>'),Ft=g('<div class="glass-card rounded-2xl p-6 h-full flex flex-col overflow-hidden relative"><div class="absolute -top-2 -right-3 text-accent/[0.07] pointer-events-none"><!></div> <div class="relative z-10 mt-auto"><p class="text-3xl font-bold tabular-nums">0.25–3<span class="text-lg text-text-muted font-normal">x</span></p> <p class="text-xs text-text-muted mt-1">Playback speed</p></div></div>'),Et=g('<div class="glass-card rounded-2xl px-8 py-6 h-full flex items-center justify-between"><div><p class="text-base font-semibold">& much more</p> <p class="text-xs text-text-muted mt-0.5">Quick Connect, trickplay thumbnails, multi-profile support, skip intros, and more.</p></div> <div class="flex gap-1.5" aria-hidden="true"><div class="w-1.5 h-1.5 rounded-full bg-accent/60"></div> <div class="w-1.5 h-1.5 rounded-full bg-accent/40"></div> <div class="w-1.5 h-1.5 rounded-full bg-accent/20"></div></div></div>'),It=g('<section class="px-6 py-6 sm:py-8 md:py-10 max-w-5xl mx-auto"><!> <div class="bento-grid svelte-1dpem8h"><!> <!> <!> <!> <!> <!> <!> <!> <!></div></section>');
function Ut(l) {
  var t=It(),o=a(t);
  E(o,{children:(m,y)=>{var i=Lt();D(4),w(m,i)},$$slots:{default:!0}});
  var u=n(o,2),h=a(u);
  E(h,{class:"bento-codec",children:(m,y)=>{var i=Bt();w(m,i)},$$slots:{default:!0}});
  var d=n(h,2);
  E(d,{delay:50,class:"bento-hdr",children:(m,y)=>{var i=Ht();w(m,i)},$$slots:{default:!0}});
  var c=n(d,2);
  E(c,{delay:100,class:"bento-sub",children:(m,y)=>{var i=St();w(m,i)},$$slots:{default:!0}});
  var p=n(c,2);
  E(p,{delay:80,class:"bento-cross",children:(m,y)=>{var i=Rt(),$=n(a(i),2),k=a($),L=a(k),H=a(L);B(H,{get src(){return le},class:"w-4 h-4"}),e(L),D(2),e(k);var S=n(k,2),T=a(S),M=a(T);B(M,{get src(){return ie},class:"w-4 h-4"}),e(T),D(2),e(S);var z=n(S,2),b=a(z),f=a(b);Ve(f,{class:"w-4 h-4"}),e(b),D(2),e(z);var A=n(z,2),V=a(A),C=a(V);B(C,{get src(){return Pe},class:"w-4 h-4"}),e(V),D(2),e(A),e($),e(i),w(m,i)},$$slots:{default:!0}});
  var s=n(p,2);
  E(s,{delay:150,class:"bento-auth",children:(m,y)=>{var i=jt(),$=n(a(i),2),k=a($);B(k,{get src(){return bt},theme:"solid",class:"w-3 h-3 text-[#e5a00d]/70 flex-shrink-0"}),D(2),e($),e(i),w(m,i)},$$slots:{default:!0}});
  var v=n(s,2);
  E(v,{delay:180,class:"bento-offline",children:(m,y)=>{var i=Dt();w(m,i)},$$slots:{default:!0}});
  var x=n(v,2);
  E(x,{delay:210,class:"bento-watch",children:(m,y)=>{var i=Tt();w(m,i)},$$slots:{default:!0}});
  var _=n(x,2);
  E(_,{delay:240,class:"bento-speed",children:(m,y)=>{var i=Ft(),$=a(i),k=a($);B(k,{get src(){return xt},theme:"solid",class:"w-20 h-20"}),e($),D(2),e(i),w(m,i)},$$slots:{default:!0}});
  var P=n(_,2);
  E(P,{delay:270,class:"bento-more",children:(m,y)=>{var i=Et();w(m,i)},$$slots:{default:!0}}),e(u),e(t),w(l,t)
}
const Ot=""+new URL("../../images/phone-media-card.webp",import.meta.url).href,Wt=""+new URL("../../images/phone-season.webp",import.meta.url).href,qt=""+new URL("../../images/tablet-home.webp",import.meta.url).href,Gt=""+new URL("../../images/tablet-library.webp",import.meta.url).href,Nt=""+new URL("../../images/tablet-media-card.webp",import.meta.url).href,Kt=""+new URL("../../images/tablet-season.webp",import.meta.url).href,Qt=""+new URL("../../images/desktop-home.webp",import.meta.url).href,Yt=""+new URL("../../images/desktop-library.webp",import.meta.url).href,Jt=""+new URL("../../images/desktop-media-card.webp",import.meta.url).href,Xt=""+new URL("../../images/desktop-season.webp",import.meta.url).href,ea=""+new URL("../../images/tv-home.webp",import.meta.url).href,ta=""+new URL("../../images/tv-library.webp",import.meta.url).href,aa=""+new URL("../../images/tv-media-card.webp",import.meta.url).href,ra=""+new URL("../../images/tv-season.webp",import.meta.url).href;
var la=g('<button><!> <span class="hidden sm:inline"> </span></button>'),oa=g('<p class="text-accent font-medium text-sm tracking-wide uppercase mb-3">Preview</p> <h2 class="text-4xl md:text-5xl font-bold mb-4">Designed with care</h2> <p class="text-text-muted text-lg max-w-lg mb-6 sm:mb-10">An experience that feels right at home on every device.</p> <div class="flex items-center gap-4"><div class="flex gap-1 bg-white/[0.04] rounded-xl p-1 w-fit"></div> <div class="hidden md:flex items-center gap-1 ml-auto"><button><!></button> <button><!></button></div></div>',1),sa=g('<div class="flex-shrink-0 snap-start h-[420px] lg:h-[480px]"><div class="h-full rounded-[2rem] overflow-hidden border border-border/40 shadow-2xl shadow-black/50"><img loading="lazy" class="h-full w-auto block"/></div></div>'),ia=g('<div class="flex gap-5 overflow-x-auto pb-4 scrollbar-hide animate-fade-in-up content-pad svelte-klxgu9"></div>'),da=g('<div class="flex-shrink-0 snap-start h-[420px] lg:h-[480px]"><div class="h-full rounded-2xl overflow-hidden border border-border/40 shadow-2xl shadow-black/50"><img loading="lazy" class="h-full w-auto block"/></div></div>'),na=g('<div class="flex gap-5 overflow-x-auto pb-4 scrollbar-hide animate-fade-in-up content-pad svelte-klxgu9"></div>'),ca=g('<div class="flex-shrink-0 snap-start h-[420px] lg:h-[480px]"><div class="h-full rounded-xl overflow-hidden border border-border/40 shadow-2xl shadow-black/50"><img loading="lazy" class="h-full w-auto block"/></div></div>'),va=g('<div class="flex gap-5 overflow-x-auto pb-4 scrollbar-hide animate-fade-in-up content-pad svelte-klxgu9"></div>'),ua=g('<div class="flex-shrink-0 snap-start h-[420px] lg:h-[480px]"><div class="h-full rounded-xl overflow-hidden border-2 border-border/30 shadow-2xl shadow-black/50 bg-black"><img loading="lazy" class="h-full w-auto block"/></div></div>'),pa=g('<div class="flex gap-5 overflow-x-auto pb-4 scrollbar-hide animate-fade-in-up content-pad svelte-klxgu9"></div>'),ha=g('<section class="py-6 sm:py-8 md:py-10 overflow-hidden"><div class="max-w-5xl mx-auto px-6 mb-8 sm:mb-12"><!></div> <!> <!> <!> <!></section>');
function fa(l,t) {
  Ae(t,!0);
  const o=[ {
    id:"phone",icon:ft,label:"Phone"
  }
  , {
    id:"tablet",icon:mt,label:"Tablet"
  }
  , {
    id:"desktop",icon:ht,label:"Desktop"
  }
  , {
    id:"tv",icon:_t,label:"TV"
  }
  ],u=[ {
    src:Ze,alt:"Finzy home screen"
  }
  , {
    src:Le,alt:"Finzy library view"
  }
  , {
    src:Ot,alt:"Finzy media card detail"
  }
  , {
    src:Wt,alt:"Finzy season view"
  }
  ],h=[ {
    src:qt,alt:"Finzy on tablet - home"
  }
  , {
    src:Gt,alt:"Finzy on tablet - library"
  }
  , {
    src:Nt,alt:"Finzy on tablet - media card"
  }
  , {
    src:Kt,alt:"Finzy on tablet - season"
  }
  ],d=[ {
    src:Qt,alt:"Finzy on desktop - home"
  }
  , {
    src:Yt,alt:"Finzy on desktop - library"
  }
  , {
    src:Jt,alt:"Finzy on desktop - media card"
  }
  , {
    src:Xt,alt:"Finzy on desktop - season"
  }
  ],c=[ {
    src:ea,alt:"Finzy on TV - home"
  }
  , {
    src:ta,alt:"Finzy on TV - library"
  }
  , {
    src:aa,alt:"Finzy on TV - media card"
  }
  , {
    src:ra,alt:"Finzy on TV - season"
  }
  ];
  let p=N("phone"),s=N(void 0),v=N(!1),x=N(!1);
  function _() {
    r(s)&&(j(v,r(s).scrollLeft>10),j(x,r(s).scrollLeft<r(s).scrollWidth-r(s).clientWidth-10))
  }
  function P(b) {
    r(s)&&r(s).scrollBy({left:b==="left"?-400:400,behavior:"smooth"})
  }
  Ce(()=>{r(p);const b=r(s);if(b){const f=requestAnimationFrame(()=>{requestAnimationFrame(()=>{b===r(s)&&_()})});return()=>cancelAnimationFrame(f)}else j(v,!1),j(x,!1)});
  var m=ha(),y=a(m),i=a(y);
  E(i,{children:(b,f)=>{var A=oa(),V=n(he(A),6),C=a(V);O(C,21,()=>o,W,(X,q)=>{var U=la();U.__click=()=>j(p,r(q).id,!0);var oe=a(U);B(oe,{get src(){return r(q).icon},theme:"solid",class:"w-4 h-4"});var fe=n(oe,2),Be=a(fe,!0);e(fe),e(U),F(()=>{Y(U,1,`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer
                ${r(p)===r(q).id?"bg-white/10 text-text":"text-text-muted hover:text-text/80"}`),K(Be,r(q).label)}),w(X,U)}),e(C);var R=n(C,2),Z=a(R);Z.__click=()=>P("left");var te=a(Z);B(te,{get src(){return ut},theme:"solid",class:"w-4 h-4"}),e(Z);var J=n(Z,2);J.__click=()=>P("right");var ne=a(J);B(ne,{get src(){return pt},theme:"solid",class:"w-4 h-4"}),e(J),e(R),e(V),F(()=>{Z.disabled=!r(v),Y(Z,1,`w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center transition-colors cursor-pointer
              ${r(v)?"hover:bg-white/10 text-text":"text-text-muted/30"}`),J.disabled=!r(x),Y(J,1,`w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center transition-colors cursor-pointer
              ${r(x)?"hover:bg-white/10 text-text":"text-text-muted/30"}`)}),w(b,A)},$$slots:{default:!0}}),e(y);
  var $=n(y,2);
  {
    var k=b=> {
      var f=ia();
      O(f,21,()=>u,W,(A,V)=>{var C=sa(),R=a(C),Z=a(R);e(R),e(C),F(()=>{I(Z,"src",r(V).src),I(Z,"alt",r(V).alt)}),w(A,C)}),e(f),re(f,A=>j(s,A),()=>r(s)),ee("scroll",f,_),w(b,f)
    };
    Q($,b=>{r(p)==="phone"&&b(k)})
  }
  var L=n($,2);
  {
    var H=b=> {
      var f=na();
      O(f,21,()=>h,W,(A,V)=>{var C=da(),R=a(C),Z=a(R);e(R),e(C),F(()=>{I(Z,"src",r(V).src),I(Z,"alt",r(V).alt)}),w(A,C)}),e(f),re(f,A=>j(s,A),()=>r(s)),ee("scroll",f,_),w(b,f)
    };
    Q(L,b=>{r(p)==="tablet"&&b(H)})
  }
  var S=n(L,2);
  {
    var T=b=> {
      var f=va();
      O(f,21,()=>d,W,(A,V)=>{var C=ca(),R=a(C),Z=a(R);e(R),e(C),F(()=>{I(Z,"src",r(V).src),I(Z,"alt",r(V).alt)}),w(A,C)}),e(f),re(f,A=>j(s,A),()=>r(s)),ee("scroll",f,_),w(b,f)
    };
    Q(S,b=>{r(p)==="desktop"&&b(T)})
  }
  var M=n(S,2);
  {
    var z=b=> {
      var f=pa();
      O(f,21,()=>c,W,(A,V)=>{var C=ua(),R=a(C),Z=a(R);e(R),e(C),F(()=>{I(Z,"src",r(V).src),I(Z,"alt",r(V).alt)}),w(A,C)}),e(f),re(f,A=>j(s,A),()=>r(s)),ee("scroll",f,_),w(b,f)
    };
    Q(M,b=>{r(p)==="tv"&&b(z)})
  }
  e(m),w(l,m),Me()
}
pe(["click"]);
const ye= {
  default: {
    a: {
      viewBox:"0 0 512 512",fill:"currentColor"
    }
    ,path:[ {
      d:"M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z"
    }
    ]
  }
};
var ma=g('<p class="text-accent font-medium text-sm tracking-wide uppercase mb-3">Reviews</p> <h2 class="text-4xl md:text-5xl font-bold mb-4">Loved by users</h2> <p class="text-text-muted text-lg mb-10 sm:mb-16 max-w-lg">See what people are saying about their experience with Finzy.</p>',1),xa=g('<div class="flex items-center gap-1.5 mb-4"><!> <span class="text-sm font-medium text-accent"> </span></div>'),ba=g('<div class="flex gap-0.5 mb-4"></div>'),wa=g('<div class="glass-card rounded-2xl p-6 h-full flex flex-col"><!> <p class="text-text-muted text-sm leading-relaxed mb-6 flex-1"> </p> <div class="flex items-center justify-between"><span class="text-sm font-semibold"> </span> <div class="flex items-center gap-1.5 text-text-muted/60"><!> <span class="text-xs"> </span></div></div></div>'),ga=g('<section class="px-6 py-6 sm:py-8 md:py-10 max-w-5xl mx-auto" style="display:none"><!> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div></section>');
function ya(l) {
  const t=[ {
    text:"Impressively way better than the official Jellyfin client!",name:"Adam P.",source:"Play Store",icon:ie
  }
  , {
    text:"Really works better than the native Jellyfin app. If the developer keeps going this can be a killer app",name:"Mr. Wick 03",source:"App Store",icon:le
  }
  , {
    text:"Holy shit. This comment just made me install it and give it a shot. I've never had a video open so fast. It was amazing.",name:"u/Khatib",source:"Reddit",icon:ye,upvotes:69
  }
  , {
    text:"Replaced the official Jellyfin client with your app and WOW! Even Infuse didn't feel this smooth while also looking nice! Great work!!",name:"u/mustbeSaransh",source:"Reddit",icon:ye,upvotes:50
  }
  , {
    text:"Honestly, mind blown. Fastest Jellyfin access I've had on any platform. Some wizardry is afoot.",name:"Natalie M.",source:"Play Store",icon:ie
  }
  , {
    text:"If you're having troubles with the default Jellyfin app just ditch it and switch to this. Finzy is faster, and easier to use. Worth the $5",name:"boyknight53",source:"App Store",icon:le
  }
  ];
  var o=ga(),u=a(o);
  E(u,{children:(d,c)=>{var p=ma();D(4),w(d,p)},$$slots:{default:!0}});
  var h=n(u,2);
  O(h,5,()=>t,W,(d,c,p)=>{E(d,{delay:p*50,children:(s,v)=>{var x=wa(),_=a(x);{var P=z=>{var b=xa(),f=a(b);B(f,{get src(){return ct},theme:"solid",class:"w-4 h-4 text-accent"});var A=n(f,2),V=a(A,!0);e(A),e(b),F(()=>K(V,r(c).upvotes)),w(z,b)},m=z=>{var b=ba();O(b,4,()=>Array(5),W,(f,A)=>{B(f,{get src(){return yt},theme:"solid",class:"w-4 h-4 text-accent"})}),e(b),w(z,b)};Q(_,z=>{r(c).source==="Reddit"?z(P):z(m,!1)})}var y=n(_,2),i=a(y);e(y);var $=n(y,2),k=a($),L=a(k,!0);e(k);var H=n(k,2),S=a(H);B(S,{get src(){return r(c).icon},class:"w-3.5 h-3.5"});var T=n(S,2),M=a(T,!0);e(T),e(H),e($),e(x),F(()=>{K(i,`"${r(c).text??""}"`),K(L,r(c).name),K(M,r(c).source)}),w(s,x)},$$slots:{default:!0}})}),e(h),e(o),w(l,o)
}
function _a(l) {
  const t=l-1;
  return t*t*t+1
}
function ka(l,{delay:t=0,duration:o=400,easing:u=_a,axis:h="y"}={}) {
  const d=getComputedStyle(l),c=+d.opacity,p=h==="y"?"height":"width",s=parseFloat(d[p]),v=h==="y"?["top","bottom"]:["left","right"],x=v.map(k=>`${k[0].toUpperCase()}${k.slice(1)}`),_=parseFloat(d[`padding${x[0]}`]),P=parseFloat(d[`padding${x[1]}`]),m=parseFloat(d[`margin${x[0]}`]),y=parseFloat(d[`margin${x[1]}`]),i=parseFloat(d[`border${x[0]}Width`]),$=parseFloat(d[`border${x[1]}Width`]);
  return {
    delay:t,duration:o,easing:u,css:k=>`overflow: hidden;opacity: ${Math.min(k*20,1)*c};${p}: ${k*s}px;padding-${v[0]}: ${k*_}px;padding-${v[1]}: ${k*P}px;margin-${v[0]}: ${k*m}px;margin-${v[1]}: ${k*y}px;border-${v[0]}-width: ${k*i}px;border-${v[1]}-width: ${k*$}px;min-${p}: 0`
  }
}
var $a=g('<p class="text-accent font-medium text-sm tracking-wide uppercase mb-3">FAQ</p> <h2 class="text-4xl md:text-5xl font-bold mb-4">Common questions</h2> <p class="text-text-muted text-lg mb-10 sm:mb-16 max-w-lg">Everything you need to know about Finzy.</p>',1),Aa=g('<div class="px-6 pb-4 text-text-muted text-sm leading-relaxed"><!></div>'),Ca=g('<div class="glass-card rounded-2xl"><button class="w-full px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"><span class="font-medium"> </span> <span class="flex-shrink-0 w-5 h-5 text-accent"><!></span></button> <!></div>'),Ma=g('<section class="px-6 py-6 sm:py-8 md:py-10 max-w-5xl mx-auto"><!> <div class="flex flex-col gap-2.5"></div></section>');
function Pa(l) {
  const t=[ {
    q:"Do I need Jellyfin account to stream remotely?",a:"No. The remote viewing checks are done client-side in the official Jellyfin apps, not on your server. Finzy connects directly to your server's API, so there are no such checks."
  }
  , {
    q:"Is Finzy free?",a:"Finzy is open-source and free to download from GitHub. The App Store and Play Store versions are paid (one-time purchase, price varies by region)."
  }
  , {
    q:"Does Finzy work on Apple TV?",a:"Not currently. Flutter (the framework Finzy is built with) doesn't support tvOS."
  }
  , {
    q:"Does Finzy work on Android TV / Shield?",a:"Yes! The app is available for Android TV including the Shield."
  }
  , {
    q:"What video player does Finzy use?",a:'mpv on most platforms, with ExoPlayer available on Android for HDR support and better performance. ExoPlayer also has libass support via <a href="https://github.com/peerless2012/libass-android" target="_blank" rel="noopener" class="text-accent hover:underline">libass-android</a>.'
  }
  , {
    q:"Is Finzy officially supported by Jellyfin?",a:"Finzy is a third-party client built on Jellyfin's open API. Jellyfin is open-source and welcomes third-party clients, so there are no restrictions on using Finzy with your server."
  }
  ];
  let o=N(null);
  function u(p) {
    j(o,r(o)===p?null:p,!0)
  }
  var h=Ma(),d=a(h);
  E(d,{children:(p,s)=>{var v=$a();D(4),w(p,v)},$$slots:{default:!0}});
  var c=n(d,2);
  O(c,21,()=>t,W,(p,s,v)=>{E(p,{delay:v*50,children:(x,_)=>{var P=Ca(),m=a(P);m.__click=()=>u(v);var y=a(m),i=a(y,!0);e(y);var $=n(y,2),k=a($);{var L=M=>{B(M,{get src(){return wt},class:"w-5 h-5"})},H=M=>{B(M,{get src(){return gt},class:"w-5 h-5"})};Q(k,M=>{r(o)===v?M(L):M(H,!1)})}e($),e(m);var S=n(m,2);{var T=M=>{var z=Aa(),b=a(z);lt(b,()=>r(s).a),e(z),nt(3,z,()=>ka,()=>({duration:200})),w(M,z)};Q(S,M=>{r(o)===v&&M(T)})}e(P),F(()=>{I(m,"aria-expanded",r(o)===v),K(i,r(s).q)}),w(x,P)},$$slots:{default:!0}})}),e(c),e(h),w(l,h)
}
pe(["click"]);
var za=g('<footer class="py-10 sm:py-16 px-6"><div class="max-w-5xl mx-auto"><div class="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8 sm:mb-12"></div> <div class="flex flex-col sm:flex-row items-center justify-between gap-8"><div class="flex items-center gap-2.5"><!> <span class="font-medium text-text-muted">Finzy</span></div> <nav class="flex items-center gap-8 text-sm text-text-muted"><a href="https://github.com/dkmcgowan/finzy" target="_blank" rel="noopener noreferrer" class="hover:text-text transition-colors">GitHub</a> <a href="/privacy" class="hover:text-text transition-colors">Privacy Policy</a></nav></div></div></footer>');
function Va(l) {
  var t=za(),o=a(t),u=n(a(o),2),h=a(u),d=a(h);
  ve(d,{class:"w-7 h-7"}),D(2),e(h),D(2),e(u),e(o),e(t),w(l,t)
}
var Za=g('<div class="noise-overlay" aria-hidden="true"></div>');
function La(l) {
  var t=Za();
  w(l,t)
}
var Ba=g('<meta name="description" content="Finzy is a beautiful Jellyfin client available on iOS, Android, Windows, macOS, and Linux. HDR, Dolby Vision, offline downloads, and more."/>'),Ha=g("<!> <!> <!> <!> <!> <!> <!>",1);
function Wa(l) {
  var t=Ha();
  et("1uha8ag",v=>{var x=Ba();ke(()=>{Ye.title="Finzy - A Beautiful Jellyfin Client"}),w(v,x)});
  var o=he(t);
  La(o);
  var u=n(o,2);
  Vt(u);
  var h=n(u,2);
  Ut(h);
  var d=n(h,2);
  fa(d,{});
  var c=n(d,2);
  ya(c);
  var p=n(c,2);
  Pa(p);
  var s=n(p,2);
  Va(s),w(l,t)
}
export {
  Wa as component
};