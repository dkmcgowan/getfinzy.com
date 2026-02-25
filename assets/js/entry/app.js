const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../pages/layout.js","../chunks/dom-events.js","../chunks/runtime.js","../chunks/conditional.js","../chunks/transitions.js","../chunks/dom-attributes.js","../../css/main.css","../pages/error.js","../chunks/logo.js","../chunks/hydration.js","../chunks/sveltekit.js","../chunks/lifecycle.js","../pages/home.js","../chunks/component-wrapper.js","../chunks/icons.js","../chunks/each.js","../chunks/init.js","../../css/home.css","../pages/privacy.js","../../css/privacy.css","../pages/scan.js"])))=>i.map(i=>d[i]);
import {
  w as q,H as G,b as W,E as H,s as k,aE as Y,h as f,aT as z,aM as J,W as K,p as Q,aG as X,A as Z,aU as $,aF as O,g as ee,c as te,d as x,f as re,i as se,t as ne,a3 as A
}
from"../chunks/runtime.js";
import {
  h as ae,m as oe,u as ce,s as ie
}
from"../chunks/hydration.js";
import {
  a as E,e as L,f as M,t as le
}
from"../chunks/dom-events.js";
import {
  o as ue
}
from"../chunks/lifecycle.js";
import {
  p as S,i as T
}
from"../chunks/component-wrapper.js";
import {
  B as me
}
from"../chunks/transitions.js";
import {
  b as j
}
from"../chunks/init.js";
function C(a,e,s) {
  q&&G();
  var i=new me(a);
  W(()=>{var o=e()??null;i.ensure(o,o&&(r=>s(r,o)))},H)
}
function fe(a) {
  return class extends de {
    constructor(e) {
      super({component:a,...e})
    }
  }
}
class de {
  #t;
  #e;
  constructor(e) {
    var s=new Map,i=(r,t)=> {
      var n=K(t,!1,!1);
      return s.set(r,n),n
    };
    const o=new Proxy({...e.props||{},$$events:{}},{get(r,t){return f(s.get(t)??i(t,Reflect.get(r,t)))},has(r,t){return t===Y?!0:(f(s.get(t)??i(t,Reflect.get(r,t))),Reflect.has(r,t))},set(r,t,n){return k(s.get(t)??i(t,n),n),Reflect.set(r,t,n)}});
    this.#e=(e.hydrate?ae:oe)(e.component,{target:e.target,anchor:e.anchor,props:o,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&z(),this.#t=o.$$events;
    for(const r of Object.keys(this.#e))r==="$set"||r==="$destroy"||r==="$on"||J(this,r,{get(){return this.#e[r]},set(t){this.#e[r]=t},enumerable:!0});
    this.#e.$set=r=> {
      Object.assign(o,r)
    }
    ,this.#e.$destroy=()=> {
      ce(this.#e)
    }
  }
  $set(e) {
    this.#e.$set(e)
  }
  $on(e,s) {
    this.#t[e]=this.#t[e]||[];
    const i=(...o)=>s.call(this,...o);
    return this.#t[e].push(i),()=> {
      this.#t[e]=this.#t[e].filter(o=>o!==i)
    }
  }
  $destroy() {
    this.#e.$destroy()
  }
}
const he="modulepreload",_e=function(a,e) {
  return new URL(a,e).href
}
,I= {
}
,p=function(e,s,i) {
  let o=Promise.resolve();
  if(s&&s.length>0) {
    let w=function(l) {
      return Promise.all(l.map(m=>Promise.resolve(m).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))
    };
    const t=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),R=n?.nonce||n?.getAttribute("nonce");
    o=w(s.map(l=>{if(l=_e(l,i),l in I)return;I[l]=!0;const m=l.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(i)for(let h=t.length-1;h>=0;h--){const c=t[h];if(c.href===l&&(!m||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":he,m||(u.as="script"),u.crossOrigin="",u.href=l,R&&u.setAttribute("nonce",R),document.head.appendChild(u),m)return new Promise((h,c)=>{u.addEventListener("load",h),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${l}`)))})}))
  }
  function r(t) {
    const n=new Event("vite:preloadError",{cancelable:!0});
    if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t
  }
  return o.then(t=>{for(const n of t||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})
}
,Ae= {
};
var ve=M('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ge=M("<!> <!>",1);
function ye(a,e) {
  Q(e,!0);
  let s=S(e,"components",23,()=>[]),i=S(e,"data_0",3,null),o=S(e,"data_1",3,null);
  X(()=>e.stores.page.set(e.page)),Z(()=>{e.stores,e.page,e.constructors,s(),e.form,i(),o(),e.stores.page.notify()});
  let r=x(!1),t=x(!1),n=x(null);
  ue(()=>{const c=e.stores.page.subscribe(()=>{f(r)&&(k(t,!0),$().then(()=>{k(n,document.title||"untitled page",!0)}))});return k(r,!0),c});
  const R=A(()=>e.constructors[1]);
  var w=ge(),l=O(w);
  {
    var m=c=> {
      const _=A(()=>e.constructors[0]);
      var v=L(),b=O(v);
      C(b,()=>f(_),(g,y)=>{j(y(g,{get data(){return i()},get form(){return e.form},get params(){return e.page.params},children:(P,be)=>{var D=L(),V=O(D);C(V,()=>f(R),(B,F)=>{j(F(B,{get data(){return o()},get form(){return e.form},get params(){return e.page.params}}),U=>s()[1]=U,()=>s()?.[1])}),E(P,D)},$$slots:{default:!0}}),P=>s()[0]=P,()=>s()?.[0])}),E(c,v)
    }
    ,d=c=> {
      const _=A(()=>e.constructors[0]);
      var v=L(),b=O(v);
      C(b,()=>f(_),(g,y)=>{j(y(g,{get data(){return i()},get form(){return e.form},get params(){return e.page.params}}),P=>s()[0]=P,()=>s()?.[0])}),E(c,v)
    };
    T(l,c=>{e.constructors[1]?c(m):c(d,!1)})
  }
  var u=ee(l,2);
  {
    var h=c=> {
      var _=ve(),v=re(_);
      {
        var b=g=> {
          var y=le();
          ne(()=>ie(y,f(n))),E(g,y)
        };
        T(v,g=>{f(t)&&g(b)})
      }
      se(_),E(c,_)
    };
    T(u,c=>{f(r)&&c(h)})
  }
  E(a,w),te()
}
const Le=fe(ye),Se=[()=>p(()=>import("../pages/layout.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>p(()=>import("../pages/error.js"),__vite__mapDeps([7,1,2,8,9,10,11]),import.meta.url),()=>p(()=>import("../pages/home.js"),__vite__mapDeps([12,1,2,8,5,9,13,4,14,15,3,16,17]),import.meta.url),()=>p(()=>import("../pages/privacy.js"),__vite__mapDeps([18,1,2,8,5,15,13,4,19]),import.meta.url),()=>p(()=>import("../pages/scan.js"),__vite__mapDeps([20,1,2,13,4,5,15,14,9]),import.meta.url)],Te=[],je= {
  "/":[2],"/privacy":[3],"/scan":[4]
}
,N= {
  handleError:(({error:a})=>{console.error(a)}),reroute:(()=>{}),transport: {
  }
}
,Ee=Object.fromEntries(Object.entries(N.transport).map(([a,e])=>[a,e.decode])),Ce=Object.fromEntries(Object.entries(N.transport).map(([a,e])=>[a,e.encode])),De=!1,Ie=(a,e)=>Ee[a](e);
export {
  Ie as decode,Ee as decoders,je as dictionary,Ce as encoders,De as hash,N as hooks,Ae as matchers,Se as nodes,Le as root,Te as server_loads
};