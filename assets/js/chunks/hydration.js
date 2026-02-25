import {
  a4 as G,h as q,r as J,X as P,u as K,a5 as S,q as v,x as l,w as u,a6 as y,b as U,H as X,M as k,J as z,v as d,a7 as T,m as R,o as V,a8 as Q,a9 as Y,aa as x,ab as C,ac as Z,ad as ee,B as j,y as te,ae as I,af as se,ag as L,ah as ie,O as ne,l as w,F as m,n as re,K as ae,ai as M,aj as he,E as fe,ak as oe,al as _e,am as de,an as N,G as le,ao as ue,a2 as ce,ap as D,L as p,aq as pe,a1 as ge,T as ve,ar as ye,p as me,N as Ee,as as be,c as Te
}
from"./runtime.js";
import {
  c as Re,r as B,h as g,i as we,d as Ne
}
from"./dom-events.js";
function De(i) {
  let e=0,t=P(0),n;
  return()=> {
    G()&&(q(t),J(()=>(e===0&&(n=K(()=>i(()=>S(t)))),e+=1,()=>{v(()=>{e-=1,e===0&&(n?.(),n=void 0,S(t))})})))
  }
}
var Ae=fe|oe|_e;
function ke(i,e,t) {
  new Fe(i,e,t)
}
class Fe {
  parent;
  is_pending=!1;
  #t;
  #y=u?l:null;
  #i;
  #_;
  #n;
  #s=null;
  #e=null;
  #r=null;
  #a=null;
  #o=null;
  #d=0;
  #h=0;
  #u=!1;
  #l=!1;
  #c=new Set;
  #p=new Set;
  #f=null;
  #b=De(()=>(this.#f=P(this.#d),()=>{this.#f=null}));
  constructor(e,t,n) {
    this.#t=e,this.#i=t,this.#_=n,this.parent=y.b,this.is_pending=!!this.#i.pending,this.#n=U(()=>{if(y.b=this,u){const s=this.#y;X(),s.nodeType===k&&s.data===z?this.#R():(this.#T(),this.#h===0&&(this.is_pending=!1))}else{var f=this.#m();try{this.#s=d(()=>n(f))}catch(s){this.error(s)}this.#h>0?this.#v():this.is_pending=!1}return()=>{this.#o?.remove()}},Ae),u&&(this.#t=l)
  }
  #T() {
    try {
      this.#s=d(()=>this.#_(this.#t))
    }
    catch(e) {
      this.error(e)
    }
  }
  #R() {
    const e=this.#i.pending;
    e&&(this.#e=d(()=>e(this.#t)),v(()=>{var t=this.#m();this.#s=this.#g(()=>(T.ensure(),d(()=>this.#_(t)))),this.#h>0?this.#v():(R(this.#e,()=>{this.#e=null}),this.is_pending=!1)}))
  }
  #m() {
    var e=this.#t;
    return this.is_pending&&(this.#o=V(),this.#t.before(this.#o),e=this.#o),e
  }
  defer_effect(e) {
    Q(e,this.#c,this.#p)
  }
  is_rendered() {
    return!this.is_pending&&(!this.parent||this.parent.is_rendered())
  }
  has_pending_snippet() {
    return!!this.#i.pending
  }
  #g(e) {
    var t=y,n=ee,f=j;
    Y(this.#n),x(this.#n),C(this.#n.ctx);
    try {
      return e()
    }
    catch(s) {
      return Z(s),null
    }
    finally {
      Y(t),x(n),C(f)
    }
  }
  #v() {
    const e=this.#i.pending;
    this.#s!==null&&(this.#a=document.createDocumentFragment(),this.#a.append(this.#o),te(this.#s,this.#a)),this.#e===null&&(this.#e=d(()=>e(this.#t)))
  }
  #E(e) {
    if(!this.has_pending_snippet()) {
      this.parent&&this.parent.#E(e);
      return
    }
    if(this.#h+=e,this.#h===0) {
      this.is_pending=!1;
      for(const t of this.#c)I(t,se),L(t);
      for(const t of this.#p)I(t,ie),L(t);
      this.#c.clear(),this.#p.clear(),this.#e&&R(this.#e,()=>{this.#e=null}),this.#a&&(this.#t.before(this.#a),this.#a=null)
    }
  }
  update_pending_count(e) {
    this.#E(e),this.#d+=e,!(!this.#f||this.#u)&&(this.#u=!0,v(()=>{this.#u=!1,this.#f&&ne(this.#f,this.#d)}))
  }
  get_effect_pending() {
    return this.#b(),q(this.#f)
  }
  error(e) {
    var t=this.#i.onerror;
    let n=this.#i.failed;
    if(this.#l||!t&&!n)throw e;
    this.#s&&(w(this.#s),this.#s=null),this.#e&&(w(this.#e),this.#e=null),this.#r&&(w(this.#r),this.#r=null),u&&(m(this.#y),re(),m(ae()));
    var f=!1,s=!1;
    const r=()=> {
      if(f) {
        de();
        return
      }
      f=!0,s&&he(),T.ensure(),this.#d=0,this.#r!==null&&R(this.#r,()=>{this.#r=null}),this.is_pending=this.has_pending_snippet(),this.#s=this.#g(()=>(this.#l=!1,d(()=>this.#_(this.#t)))),this.#h>0?this.#v():this.is_pending=!1
    };
    v(()=>{try{s=!0,t?.(e,r),s=!1}catch(o){M(o,this.#n&&this.#n.parent)}n&&(this.#r=this.#g(()=>{T.ensure(),this.#l=!0;try{return d(()=>{n(this.#t,()=>e,()=>r)})}catch(o){return M(o,this.#n.parent),null}finally{this.#l=!1}}))})
  }
}
let H=!0;
function xe(i,e) {
  var t=e==null?"":typeof e=="object"?e+"":e;
  t!==(i.__t??=i.nodeValue)&&(i.__t=t,i.nodeValue=t+"")
}
function Oe(i,e) {
  return W(i,e)
}
function Ce(i,e) {
  N(),e.intro=e.intro??!1;
  const t=e.target,n=u,f=l;
  try {
    for(var s=le(t);s&&(s.nodeType!==k||s.data!==ue);)s=ce(s);
    if(!s)throw D;
    p(!0),m(s);
    const r=W(i,{...e,anchor:s});
    return p(!1),r
  }
  catch(r) {
    if(r instanceof Error&&r.message.split(`
`).some(o=>o.startsWith("https://svelte.dev/e/")))throw r;
    return r!==D&&console.warn("Failed to hydrate: ",r),e.recover===!1&&pe(),N(),ge(t),p(!1),Oe(i,e)
  }
  finally {
    p(n),m(f)
  }
}
const c=new Map;
function W(i,{target:e,anchor:t,props:n={},events:f,context:s,intro:r=!0}) {
  N();
  var o=new Set,E=_=> {
    for(var h=0;h<_.length;h++) {
      var a=_[h];
      if(!o.has(a)) {
        o.add(a);
        var F=we(a);
        e.addEventListener(a,g,{passive:F});
        var O=c.get(a);
        O===void 0?(document.addEventListener(a,g,{passive:F}),c.set(a,1)):c.set(a,O+1)
      }
    }
  };
  E(ve(Re)),B.add(E);
  var b=void 0,$=ye(()=>{var _=t??e.appendChild(V());return ke(_,{pending:()=>{}},h=>{if(s){me({});var a=j;a.c=s}if(f&&(n.$$events=f),u&&Ne(h,null),H=r,b=i(h,n)||{},H=!0,u&&(y.nodes.end=l,l===null||l.nodeType!==k||l.data!==Ee))throw be(),D;s&&Te()}),()=>{for(var h of o){e.removeEventListener(h,g);var a=c.get(h);--a===0?(document.removeEventListener(h,g),c.delete(h)):c.set(h,a)}B.delete(E),_!==t&&_.parentNode?.removeChild(_)}});
  return A.set(b,$),b
}
let A=new WeakMap;
function Ie(i,e) {
  const t=A.get(i);
  return t?(A.delete(i),t(e)):Promise.resolve()
}
export {
  H as a,Ce as h,Oe as m,xe as s,Ie as u
};