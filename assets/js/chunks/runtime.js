var Yt=Array.isArray,qt=Array.prototype.indexOf,se=Array.prototype.includes,Rn=Array.from,xn=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyDescriptors,Vt=Object.prototype,Bt=Array.prototype,rt=Object.getPrototypeOf,Xe=Object.isExtensible;
function On(e) {
  return typeof e=="function"
}
const Nn=()=> {
};
function kn(e) {
  return e()
}
function Ut(e) {
  for(var t=0;t<e.length;t++)e[t]()
}
function st() {
  var e,t,n=new Promise((r,s)=>{e=r,t=s});
  return {
    promise:n,resolve:e,reject:t
  }
}
const m=2,ge=4,ve=8,Le=1<<24,q=16,j=32,ne=64,at=128,k=512,E=1024,T=2048,M=4096,F=8192,V=16384,Ye=32768,me=65536,Ze=1<<17,it=1<<18,de=1<<19,ft=1<<20,Dn=1<<25,J=32768,De=1<<21,qe=1<<22,B=1<<23,Z=Symbol("$state"),In=Symbol("legacy props"),Cn=Symbol(""),re=new class extends Error {
  name="StaleReactionError";
  message="The reaction that called `getAbortSignal()` was re-run or destroyed"
}
,Re=3,lt=8;
function Gt() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}
function Kt(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown")
}
function $t() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}
function zt(e) {
  throw new Error("https://svelte.dev/e/effect_orphan")
}
function Xt() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}
function Fn() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}
function Mn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value")
}
function Zt() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}
function Wt() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed")
}
function Jt() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}
function jn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
}
const Ln=1,Yn=2,qn=4,Hn=8,Vn=16,Bn=1,Un=2,Gn=4,Kn=8,$n=16,zn=4,Xn=1,Zn=2,Qt="[",en="[!",tn="]",He= {
}
,g=Symbol(),Wn="http://www.w3.org/1999/xhtml",Jn="@attach";
function Ve(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}
function Qn() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}
function er() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let Q=!1;
function tr(e) {
  Q=e
}
let S;
function ae(e) {
  if(e===null)throw Ve(),He;
  return S=e
}
function nr() {
  return ae(K(S))
}
function rr(e) {
  if(Q) {
    if(K(S)!==null)throw Ve(),He;
    S=e
  }
}
function sr(e=1) {
  if(Q) {
    for(var t=e,n=S;t--;)n=K(n);
    S=n
  }
}
function ar(e=!0) {
  for(var t=0,n=S;;) {
    if(n.nodeType===lt) {
      var r=n.data;
      if(r===tn) {
        if(t===0)return n;
        t-=1
      }
      else(r===Qt||r===en)&&(t+=1)
    }
    var s=K(n);
    e&&n.remove(),n=s
  }
}
function ir(e) {
  if(!e||e.nodeType!==lt)throw Ve(),He;
  return e.data
}
function ut(e) {
  return e===this.v
}
function nn(e,t) {
  return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"
}
function ot(e) {
  return!nn(e,this.v)
}
let xe=!1;
function fr() {
  xe=!0
}
let b=null;
function be(e) {
  b=e
}
function lr(e,t=!1,n) {
  b= {
    p:b,i:!1,c:null,e:null,s:e,x:null,l:xe&&!t? {
      s:null,u:null,$:[]
    }
    :null
  }
}
function ur(e) {
  var t=b,n=t.e;
  if(n!==null) {
    t.e=null;
    for(var r of n)Rt(r)
  }
  return t.i=!0,b=t.p, {
  }
}
function he() {
  return!xe||b!==null&&b.l===null
}
let z=[];
function ct() {
  var e=z;
  z=[],Ut(e)
}
function We(e) {
  if(z.length===0&&!ce) {
    var t=z;
    queueMicrotask(()=>{t===z&&ct()})
  }
  z.push(e)
}
function rn() {
  for(;z.length>0;)ct()
}
function sn(e) {
  var t=h;
  if(t===null)return v.f|=B,e;
  if((t.f&Ye)===0) {
    if((t.f&at)===0)throw e;
    t.b.error(e)
  }
  else Te(e,t)
}
function Te(e,t) {
  for(;t!==null;) {
    if((t.f&at)!==0)try {
      t.b.error(e);
      return
    }
    catch(n) {
      e=n
    }
    t=t.parent
  }
  throw e
}
const an=-7169;
function y(e,t) {
  e.f=e.f&an|t
}
function Be(e) {
  (e.f&k)!==0||e.deps===null?y(e,E):y(e,M)
}
function _t(e) {
  if(e!==null)for(const t of e)(t.f&m)===0||(t.f&J)===0||(t.f^=J,_t(t.deps))
}
function fn(e,t,n) {
  (e.f&T)!==0?t.add(e):(e.f&M)!==0&&n.add(e),_t(e.deps),y(e,E)
}
const ye=new Set;
let p=null,I=null,x=[],Oe=null,Ie=!1,ce=!1;
class fe {
  committed=!1;
  current=new Map;
  previous=new Map;
  #r=new Set;
  #s=new Set;
  #t=0;
  #a=0;
  #f=null;
  #l=new Set;
  #n=new Set;
  #e=new Map;
  is_fork=!1;
  #i=!1;
  is_deferred() {
    return this.is_fork||this.#a>0
  }
  skip_effect(t) {
    this.#e.has(t)||this.#e.set(t,{d:[],m:[]})
  }
  unskip_effect(t) {
    var n=this.#e.get(t);
    if(n) {
      this.#e.delete(t);
      for(var r of n.d)y(r,T),Y(r);
      for(r of n.m)y(r,M),Y(r)
    }
  }
  process(t) {
    x=[],this.apply();
    var n=[],r=[];
    for(const s of t)this.#u(s,n,r);
    if(this.is_deferred()) {
      this.#o(r),this.#o(n);
      for(const[s,a]of this.#e)pt(s,a)
    }
    else {
      for(const s of this.#r)s();
      this.#r.clear(),this.#t===0&&this.#c(),p=null,Je(r),Je(n),this.#f?.resolve()
    }
    I=null
  }
  #u(t,n,r) {
    t.f^=E;
    for(var s=t.first,a=null;s!==null;) {
      var f=s.f,l=(f&(j|ne))!==0,i=l&&(f&E)!==0,u=i||(f&F)!==0||this.#e.has(s);
      if(!u&&s.fn!==null) {
        l?s.f^=E:a!==null&&(f&(ge|ve|Le))!==0?a.b.defer_effect(s):(f&ge)!==0?n.push(s):pe(s)&&((f&q)!==0&&this.#n.add(s),_e(s));
        var o=s.first;
        if(o!==null) {
          s=o;
          continue
        }
      }
      var _=s.parent;
      for(s=s.next;s===null&&_!==null;)_===a&&(a=null),s=_.next,_=_.parent
    }
  }
  #o(t) {
    for(var n=0;n<t.length;n+=1)fn(t[n],this.#l,this.#n)
  }
  capture(t,n) {
    n!==g&&!this.previous.has(t)&&this.previous.set(t,n),(t.f&B)===0&&(this.current.set(t,t.v),I?.set(t,t.v))
  }
  activate() {
    p=this,this.apply()
  }
  deactivate() {
    p===this&&(p=null,I=null)
  }
  flush() {
    if(this.activate(),x.length>0) {
      if(vt(),p!==null&&p!==this)return
    }
    else this.#t===0&&this.process([]);
    this.deactivate()
  }
  discard() {
    for(const t of this.#s)t(this);
    this.#s.clear()
  }
  #c() {
    if(ye.size>1) {
      this.previous.clear();
      var t=I,n=!0;
      for(const s of ye) {
        if(s===this) {
          n=!1;
          continue
        }
        const a=[];
        for(const[l,i]of this.current) {
          if(s.current.has(l))if(n&&i!==s.current.get(l))s.current.set(l,i);
          else continue;
          a.push(l)
        }
        if(a.length===0)continue;
        const f=[...s.current.keys()].filter(l=>!this.current.has(l));
        if(f.length>0) {
          var r=x;
          x=[];
          const l=new Set,i=new Map;
          for(const u of a)dt(u,f,l,i);
          if(x.length>0) {
            p=s,s.apply();
            for(const u of x)s.#u(u,[],[]);
            s.deactivate()
          }
          x=r
        }
      }
      p=null,I=t
    }
    this.committed=!0,ye.delete(this)
  }
  increment(t) {
    this.#t+=1,t&&(this.#a+=1)
  }
  decrement(t) {
    this.#t-=1,t&&(this.#a-=1),!this.#i&&(this.#i=!0,We(()=>{this.#i=!1,this.is_deferred()?x.length>0&&this.flush():this.revive()}))
  }
  revive() {
    for(const t of this.#l)this.#n.delete(t),y(t,T),Y(t);
    for(const t of this.#n)y(t,M),Y(t);
    this.flush()
  }
  oncommit(t) {
    this.#r.add(t)
  }
  ondiscard(t) {
    this.#s.add(t)
  }
  settled() {
    return(this.#f??=st()).promise
  }
  static ensure() {
    if(p===null) {
      const t=p=new fe;
      ye.add(p),ce||We(()=>{p===t&&t.flush()})
    }
    return p
  }
  apply() {
  }
}
function ln(e) {
  var t=ce;
  ce=!0;
  try {
    for(var n;;) {
      if(rn(),x.length===0&&(p?.flush(),x.length===0))return Oe=null,n;
      vt()
    }
  }
  finally {
    ce=t
  }
}
function vt() {
  Ie=!0;
  var e=null;
  try {
    for(var t=0;x.length>0;) {
      var n=fe.ensure();
      if(t++>1e3) {
        var r,s;
        un()
      }
      n.process(x),U.clear()
    }
  }
  finally {
    Ie=!1,Oe=null
  }
}
function un() {
  try {
    Xt()
  }
  catch(e) {
    Te(e,Oe)
  }
}
let L=null;
function Je(e) {
  var t=e.length;
  if(t!==0) {
    for(var n=0;n<t;) {
      var r=e[n++];
      if((r.f&(V|F))===0&&pe(r)&&(L=new Set,_e(r),r.deps===null&&r.first===null&&r.nodes===null&&(r.teardown===null&&r.ac===null?Nt(r):r.fn=null),L?.size>0)) {
        U.clear();
        for(const s of L) {
          if((s.f&(V|F))!==0)continue;
          const a=[s];
          let f=s.parent;
          for(;f!==null;)L.has(f)&&(L.delete(f),a.push(f)),f=f.parent;
          for(let l=a.length-1;l>=0;l--) {
            const i=a[l];
            (i.f&(V|F))===0&&_e(i)
          }
        }
        L.clear()
      }
    }
    L=null
  }
}
function dt(e,t,n,r) {
  if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions) {
    const a=s.f;
    (a&m)!==0?dt(s,t,n,r):(a&(qe|q))!==0&&(a&T)===0&&ht(s,t,r)&&(y(s,T),Y(s))
  }
}
function ht(e,t,n) {
  const r=n.get(e);
  if(r!==void 0)return r;
  if(e.deps!==null)for(const s of e.deps) {
    if(se.call(t,s))return!0;
    if((s.f&m)!==0&&ht(s,t,n))return n.set(s,!0),!0
  }
  return n.set(e,!1),!1
}
function Y(e) {
  for(var t=Oe=e;t.parent!==null;) {
    t=t.parent;
    var n=t.f;
    if(Ie&&t===h&&(n&q)!==0&&(n&it)===0)return;
    if((n&(ne|j))!==0) {
      if((n&E)===0)return;
      t.f^=E
    }
  }
  x.push(t)
}
function pt(e,t) {
  if(!((e.f&j)!==0&&(e.f&E)!==0)) {
    (e.f&T)!==0?t.d.push(e):(e.f&M)!==0&&t.m.push(e),y(e,E);
    for(var n=e.first;n!==null;)pt(n,t),n=n.next
  }
}
function on(e,t,n,r) {
  const s=he()?Ue:vn;
  var a=e.filter(c=>!c.settled);
  if(n.length===0&&a.length===0) {
    r(t.map(s));
    return
  }
  var f=p,l=h,i=cn(),u=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(c=>c.promise)):null;
  function o(c) {
    i();
    try {
      r(c)
    }
    catch(w) {
      (l.f&V)===0&&Te(w,l)
    }
    f?.deactivate(),Ce()
  }
  if(n.length===0) {
    u.then(()=>o(t.map(s)));
    return
  }
  function _() {
    i(),Promise.all(n.map(c=>_n(c))).then(c=>o([...t.map(s),...c])).catch(c=>Te(c,l))
  }
  u?u.then(_):_()
}
function cn() {
  var e=h,t=v,n=b,r=p;
  return function(a=!0) {
    ie(e),G(t),be(n),a&&r?.activate()
  }
}
function Ce() {
  ie(null),G(null),be(null)
}
function Ue(e) {
  var t=m|T,n=v!==null&&(v.f&m)!==0?v:null;
  return h!==null&&(h.f|=de), {
    ctx:b,deps:null,effects:null,equals:ut,f:t,fn:e,reactions:null,rv:0,v:g,wv:0,parent:n??h,ac:null
  }
}
function _n(e,t,n) {
  let r=h;
  r===null&&Gt();
  var s=r.b,a=void 0,f=Ke(g),l=!v,i=new Map;
  return gn(()=>{var u=st();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject).then(()=>{o===p&&o.committed&&o.deactivate(),Ce()})}catch(w){u.reject(w),Ce()}var o=p;if(l){var _=s.is_rendered();s.update_pending_count(1),o.increment(_),i.get(o)?.reject(re),i.delete(o),i.set(o,u)}const c=(w,d=void 0)=>{if(o.activate(),d)d!==re&&(f.f|=B,Fe(f,d));else{(f.f&B)!==0&&(f.f^=B),Fe(f,w);for(const[O,we]of i){if(i.delete(O),O===o)break;we.reject(re)}}l&&(s.update_pending_count(-1),o.decrement(_))};u.promise.then(c,w=>c(null,w||"unknown"))}),En(()=>{for(const u of i.values())u.reject(re)}),new Promise(u=>{function o(_){function c(){_===a?u(f):o(a)}_.then(c,c)}o(a)})
}
function or(e) {
  const t=Ue(e);
  return It(t),t
}
function vn(e) {
  const t=Ue(e);
  return t.equals=ot,t
}
function wt(e) {
  var t=e.effects;
  if(t!==null) {
    e.effects=null;
    for(var n=0;n<t.length;n+=1)ee(t[n])
  }
}
function dn(e) {
  for(var t=e.parent;t!==null;) {
    if((t.f&m)===0)return(t.f&V)===0?t:null;
    t=t.parent
  }
  return null
}
function Ge(e) {
  var t,n=h;
  ie(dn(e));
  try {
    e.f&=~J,wt(e),t=Mt(e)
  }
  finally {
    ie(n)
  }
  return t
}
function yt(e) {
  var t=Ge(e);
  if(!e.equals(t)&&(e.wv=Pt(),(!p?.is_fork||e.deps===null)&&(e.v=t,e.deps===null))) {
    y(e,E);
    return
  }
  te||(I!==null?(St()||p?.is_fork)&&I.set(e,t):Be(e))
}
let Pe=new Set;
const U=new Map;
let Et=!1;
function Ke(e,t) {
  var n= {
    f:0,v:e,reactions:null,equals:ut,rv:0,wv:0
  };
  return n
}
function H(e,t) {
  const n=Ke(e);
  return It(n),n
}
function cr(e,t=!1,n=!0) {
  const r=Ke(e);
  return t||(r.equals=ot),xe&&n&&b!==null&&b.l!==null&&(b.l.s??=[]).push(r),r
}
function $(e,t,n=!1) {
  v!==null&&(!C||(v.f&Ze)!==0)&&he()&&(v.f&(m|q|qe|Ze))!==0&&(D===null||!se.call(D,e))&&Jt();
  let r=n?le(t):t;
  return Fe(e,r)
}
function Fe(e,t) {
  if(!e.equals(t)) {
    var n=e.v;
    te?U.set(e,t):U.set(e,n),e.v=t;
    var r=fe.ensure();
    if(r.capture(e,n),(e.f&m)!==0) {
      const s=e;
      (e.f&T)!==0&&Ge(s),Be(s)
    }
    e.wv=Pt(),gt(e,T),he()&&h!==null&&(h.f&E)!==0&&(h.f&(j|ne))===0&&(N===null?An([e]):N.push(e)),!r.is_fork&&Pe.size>0&&!Et&&hn()
  }
  return t
}
function hn() {
  Et=!1;
  for(const e of Pe)(e.f&E)!==0&&y(e,M),pe(e)&&_e(e);
  Pe.clear()
}
function ke(e) {
  $(e,e.v+1)
}
function gt(e,t) {
  var n=e.reactions;
  if(n!==null)for(var r=he(),s=n.length,a=0;a<s;a++) {
    var f=n[a],l=f.f;
    if(!(!r&&f===h)) {
      var i=(l&T)===0;
      if(i&&y(f,t),(l&m)!==0) {
        var u=f;
        I?.delete(u),(l&J)===0&&(l&k&&(f.f|=J),gt(u,M))
      }
      else i&&((l&q)!==0&&L!==null&&L.add(f),Y(f))
    }
  }
}
function le(e) {
  if(typeof e!="object"||e===null||Z in e)return e;
  const t=rt(e);
  if(t!==Vt&&t!==Bt)return e;
  var n=new Map,r=Yt(e),s=H(0),a=W,f=l=> {
    if(W===a)return l();
    var i=v,u=W;
    G(null),nt(a);
    var o=l();
    return G(i),nt(u),o
  };
  return r&&n.set("length",H(e.length)),new Proxy(e,{defineProperty(l,i,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Zt();var o=n.get(i);return o===void 0?o=f(()=>{var _=H(u.value);return n.set(i,_),_}):$(o,u.value,!0),!0},deleteProperty(l,i){var u=n.get(i);if(u===void 0){if(i in l){const o=f(()=>H(g));n.set(i,o),ke(s)}}else $(u,g),ke(s);return!0},get(l,i,u){if(i===Z)return e;var o=n.get(i),_=i in l;if(o===void 0&&(!_||oe(l,i)?.writable)&&(o=f(()=>{var w=le(_?l[i]:g),d=H(w);return d}),n.set(i,o)),o!==void 0){var c=ue(o);return c===g?void 0:c}return Reflect.get(l,i,u)},getOwnPropertyDescriptor(l,i){var u=Reflect.getOwnPropertyDescriptor(l,i);if(u&&"value"in u){var o=n.get(i);o&&(u.value=ue(o))}else if(u===void 0){var _=n.get(i),c=_?.v;if(_!==void 0&&c!==g)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(l,i){if(i===Z)return!0;var u=n.get(i),o=u!==void 0&&u.v!==g||Reflect.has(l,i);if(u!==void 0||h!==null&&(!o||oe(l,i)?.writable)){u===void 0&&(u=f(()=>{var c=o?le(l[i]):g,w=H(c);return w}),n.set(i,u));var _=ue(u);if(_===g)return!1}return o},set(l,i,u,o){var _=n.get(i),c=i in l;if(r&&i==="length")for(var w=u;w<_.v;w+=1){var d=n.get(w+"");d!==void 0?$(d,g):w in l&&(d=f(()=>H(g)),n.set(w+"",d))}if(_===void 0)(!c||oe(l,i)?.writable)&&(_=f(()=>H(void 0)),$(_,le(u)),n.set(i,_));else{c=_.v!==g;var O=f(()=>le(u));$(_,O)}var we=Reflect.getOwnPropertyDescriptor(l,i);if(we?.set&&we.set.call(o,u),!c){if(r&&typeof i=="string"){var ze=n.get("length"),Ne=Number(i);Number.isInteger(Ne)&&Ne>=ze.v&&$(ze,Ne+1)}ke(s)}return!0},ownKeys(l){ue(s);var i=Reflect.ownKeys(l).filter(_=>{var c=n.get(_);return c===void 0||c.v!==g});for(var[u,o]of n)o.v!==g&&!(u in l)&&i.push(u);return i},setPrototypeOf(){Wt()}})
}
function Qe(e) {
  try {
    if(e!==null&&typeof e=="object"&&Z in e)return e[Z]
  }
  catch {
  }
  return e
}
function _r(e,t) {
  return Object.is(Qe(e),Qe(t))
}
var et,pn,wn,mt,bt;
function vr() {
  if(et===void 0) {
    et=window,pn=document,wn=/Firefox/.test(navigator.userAgent);
    var e=Element.prototype,t=Node.prototype,n=Text.prototype;
    mt=oe(t,"firstChild").get,bt=oe(t,"nextSibling").get,Xe(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Xe(n)&&(n.__t=void 0)
  }
}
function Ae(e="") {
  return document.createTextNode(e)
}
function Me(e) {
  return mt.call(e)
}
function K(e) {
  return bt.call(e)
}
function dr(e,t) {
  if(!Q)return Me(e);
  var n=Me(S);
  if(n===null)n=S.appendChild(Ae());
  else if(t&&n.nodeType!==Re) {
    var r=Ae();
    return n?.before(r),ae(r),r
  }
  return t&&$e(n),ae(n),n
}
function hr(e,t=!1) {
  if(!Q) {
    var n=Me(e);
    return n instanceof Comment&&n.data===""?K(n):n
  }
  if(t) {
    if(S?.nodeType!==Re) {
      var r=Ae();
      return S?.before(r),ae(r),r
    }
    $e(S)
  }
  return S
}
function pr(e,t=1,n=!1) {
  let r=Q?S:e;
  for(var s;t--;)s=r,r=K(r);
  if(!Q)return r;
  if(n) {
    if(r?.nodeType!==Re) {
      var a=Ae();
      return r===null?s?.after(a):r.before(a),ae(a),a
    }
    $e(r)
  }
  return ae(r),r
}
function wr(e) {
  e.textContent=""
}
function yr() {
  return!1
}
function $e(e) {
  if(e.nodeValue.length<65536)return;
  let t=e.nextSibling;
  for(;t!==null&&t.nodeType===Re;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling
}
function Tt(e) {
  var t=v,n=h;
  G(null),ie(null);
  try {
    return e()
  }
  finally {
    G(t),ie(n)
  }
}
function At(e) {
  h===null&&(v===null&&zt(),$t()),te&&Kt()
}
function yn(e,t) {
  var n=t.last;
  n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)
}
function P(e,t,n) {
  var r=h;
  r!==null&&(r.f&F)!==0&&(e|=F);
  var s= {
    ctx:b,deps:null,nodes:null,f:e|T|k,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null
  };
  if(n)try {
    _e(s),s.f|=Ye
  }
  catch(l) {
    throw ee(s),l
  }
  else t!==null&&Y(s);
  var a=s;
  if(n&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&de)===0&&(a=a.first,(e&q)!==0&&(e&me)!==0&&a!==null&&(a.f|=me)),a!==null&&(a.parent=r,r!==null&&yn(a,r),v!==null&&(v.f&m)!==0&&(e&ne)===0)) {
    var f=v;
    (f.effects??=[]).push(a)
  }
  return s
}
function St() {
  return v!==null&&!C
}
function En(e) {
  const t=P(ve,null,!1);
  return y(t,E),t.teardown=e,t
}
function Er(e) {
  At();
  var t=h.f,n=!v&&(t&j)!==0&&(t&Ye)===0;
  if(n) {
    var r=b;
    (r.e??=[]).push(e)
  }
  else return Rt(e)
}
function Rt(e) {
  return P(ge|ft,e,!1)
}
function gr(e) {
  return At(),P(ve|ft,e,!0)
}
function mr(e) {
  fe.ensure();
  const t=P(ne|de,e,!0);
  return(n={})=>new Promise(r=>{n.outro?Tn(t,()=>{ee(t),r(void 0)}):(ee(t),r(void 0))})
}
function br(e) {
  return P(ge,e,!1)
}
function gn(e) {
  return P(qe|de,e,!0)
}
function Tr(e,t=0) {
  return P(ve|t,e,!0)
}
function Ar(e,t=[],n=[],r=[]) {
  on(r,t,n,s=>{P(ve,()=>e(...s.map(ue)),!0)})
}
function Sr(e,t=0) {
  var n=P(q|t,e,!0);
  return n
}
function Rr(e,t=0) {
  var n=P(Le|t,e,!0);
  return n
}
function xr(e) {
  return P(j|de,e,!0)
}
function xt(e) {
  var t=e.teardown;
  if(t!==null) {
    const n=te,r=v;
    tt(!0),G(null);
    try {
      t.call(null)
    }
    finally {
      tt(n),G(r)
    }
  }
}
function Ot(e,t=!1) {
  var n=e.first;
  for(e.first=e.last=null;n!==null;) {
    const s=n.ac;
    s!==null&&Tt(()=>{s.abort(re)});
    var r=n.next;
    (n.f&ne)!==0?n.parent=null:ee(n,t),n=r
  }
}
function mn(e) {
  for(var t=e.first;t!==null;) {
    var n=t.next;
    (t.f&j)===0&&ee(t),t=n
  }
}
function ee(e,t=!0) {
  var n=!1;
  (t||(e.f&it)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(bn(e.nodes.start,e.nodes.end),n=!0),Ot(e,t&&!n),Se(e,0),y(e,V);
  var r=e.nodes&&e.nodes.t;
  if(r!==null)for(const a of r)a.stop();
  xt(e);
  var s=e.parent;
  s!==null&&s.first!==null&&Nt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null
}
function bn(e,t) {
  for(;e!==null;) {
    var n=e===t?null:K(e);
    e.remove(),e=n
  }
}
function Nt(e) {
  var t=e.parent,n=e.prev,r=e.next;
  n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))
}
function Tn(e,t,n=!0) {
  var r=[];
  kt(e,r,!0);
  var s=()=> {
    n&&ee(e),t&&t()
  }
  ,a=r.length;
  if(a>0) {
    var f=()=>--a||s();
    for(var l of r)l.out(f)
  }
  else s()
}
function kt(e,t,n) {
  if((e.f&F)===0) {
    e.f^=F;
    var r=e.nodes&&e.nodes.t;
    if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);
    for(var s=e.first;s!==null;) {
      var a=s.next,f=(s.f&me)!==0||(s.f&j)!==0&&(e.f&q)!==0;
      kt(s,t,f?n:!1),s=a
    }
  }
}
function Or(e) {
  Dt(e,!0)
}
function Dt(e,t) {
  if((e.f&F)!==0) {
    e.f^=F,(e.f&E)===0&&(y(e,T),Y(e));
    for(var n=e.first;n!==null;) {
      var r=n.next,s=(n.f&me)!==0||(n.f&j)!==0;
      Dt(n,s?t:!1),n=r
    }
    var a=e.nodes&&e.nodes.t;
    if(a!==null)for(const f of a)(f.is_global||t)&&f.in()
  }
}
function Nr(e,t) {
  if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;) {
    var s=n===r?null:K(n);
    t.append(n),n=s
  }
}
let Ee=!1,te=!1;
function tt(e) {
  te=e
}
let v=null,C=!1;
function G(e) {
  v=e
}
let h=null;
function ie(e) {
  h=e
}
let D=null;
function It(e) {
  v!==null&&(D===null?D=[e]:D.push(e))
}
let A=null,R=0,N=null;
function An(e) {
  N=e
}
let Ct=1,X=0,W=X;
function nt(e) {
  W=e
}
function Pt() {
  return++Ct
}
function pe(e) {
  var t=e.f;
  if((t&T)!==0)return!0;
  if(t&m&&(e.f&=~J),(t&M)!==0) {
    for(var n=e.deps,r=n.length,s=0;s<r;s++) {
      var a=n[s];
      if(pe(a)&&yt(a),a.wv>e.wv)return!0
    }
    (t&k)!==0&&I===null&&y(e,E)
  }
  return!1
}
function Ft(e,t,n=!0) {
  var r=e.reactions;
  if(r!==null&&!(D!==null&&se.call(D,e)))for(var s=0;s<r.length;s++) {
    var a=r[s];
    (a.f&m)!==0?Ft(a,t,!1):t===a&&(n?y(a,T):(a.f&E)!==0&&y(a,M),Y(a))
  }
}
function Mt(e) {
  var t=A,n=R,r=N,s=v,a=D,f=b,l=C,i=W,u=e.f;
  A=null,R=0,N=null,v=(u&(j|ne))===0?e:null,D=null,be(e.ctx),C=!1,W=++X,e.ac!==null&&(Tt(()=>{e.ac.abort(re)}),e.ac=null);
  try {
    e.f|=De;
    var o=e.fn,_=o(),c=e.deps,w=p?.is_fork;
    if(A!==null) {
      var d;
      if(w||Se(e,R),c!==null&&R>0)for(c.length=R+A.length,d=0;d<A.length;d++)c[R+d]=A[d];
      else e.deps=c=A;
      if(St()&&(e.f&k)!==0)for(d=R;d<c.length;d++)(c[d].reactions??=[]).push(e)
    }
    else!w&&c!==null&&R<c.length&&(Se(e,R),c.length=R);
    if(he()&&N!==null&&!C&&c!==null&&(e.f&(m|M|T))===0)for(d=0;d<N.length;d++)Ft(N[d],e);
    if(s!==null&&s!==e) {
      if(X++,s.deps!==null)for(let O=0;O<n;O+=1)s.deps[O].rv=X;
      if(t!==null)for(const O of t)O.rv=X;
      N!==null&&(r===null?r=N:r.push(...N))
    }
    return(e.f&B)!==0&&(e.f^=B),_
  }
  catch(O) {
    return sn(O)
  }
  finally {
    e.f^=De,A=t,R=n,N=r,v=s,D=a,be(f),C=l,W=i
  }
}
function Sn(e,t) {
  let n=t.reactions;
  if(n!==null) {
    var r=qt.call(n,e);
    if(r!==-1) {
      var s=n.length-1;
      s===0?n=t.reactions=null:(n[r]=n[s],n.pop())
    }
  }
  if(n===null&&(t.f&m)!==0&&(A===null||!se.call(A,t))) {
    var a=t;
    (a.f&k)!==0&&(a.f^=k,a.f&=~J),Be(a),wt(a),Se(a,0)
  }
}
function Se(e,t) {
  var n=e.deps;
  if(n!==null)for(var r=t;r<n.length;r++)Sn(e,n[r])
}
function _e(e) {
  var t=e.f;
  if((t&V)===0) {
    y(e,E);
    var n=h,r=Ee;
    h=e,Ee=!0;
    try {
      (t&(q|Le))!==0?mn(e):Ot(e),xt(e);
      var s=Mt(e);
      e.teardown=typeof s=="function"?s:null,e.wv=Ct;
      var a
    }
    finally {
      Ee=r,h=n
    }
  }
}
async function kr() {
  await Promise.resolve(),ln()
}
function Dr() {
  return fe.ensure().settled()
}
function ue(e) {
  var t=e.f,n=(t&m)!==0;
  if(v!==null&&!C) {
    var r=h!==null&&(h.f&V)!==0;
    if(!r&&(D===null||!se.call(D,e))) {
      var s=v.deps;
      if((v.f&De)!==0)e.rv<X&&(e.rv=X,A===null&&s!==null&&s[R]===e?R++:A===null?A=[e]:A.push(e));
      else {
        (v.deps??=[]).push(e);
        var a=e.reactions;
        a===null?e.reactions=[v]:se.call(a,v)||a.push(v)
      }
    }
  }
  if(te&&U.has(e))return U.get(e);
  if(n) {
    var f=e;
    if(te) {
      var l=f.v;
      return((f.f&E)===0&&f.reactions!==null||Lt(f))&&(l=Ge(f)),U.set(f,l),l
    }
    var i=(f.f&k)===0&&!C&&v!==null&&(Ee||(v.f&k)!==0),u=f.deps===null;
    pe(f)&&(i&&(f.f|=k),yt(f)),i&&!u&&jt(f)
  }
  if(I?.has(e))return I.get(e);
  if((e.f&B)!==0)throw e.v;
  return e.v
}
function jt(e) {
  if(e.deps!==null) {
    e.f|=k;
    for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&m)!==0&&(t.f&k)===0&&jt(t)
  }
}
function Lt(e) {
  if(e.v===g)return!0;
  if(e.deps===null)return!1;
  for(const t of e.deps)if(U.has(t)||(t.f&m)!==0&&Lt(t))return!0;
  return!1
}
function Ir(e) {
  var t=C;
  try {
    return C=!0,e()
  }
  finally {
    C=t
  }
}
function Cr(e) {
  if(!(typeof e!="object"||!e||e instanceof EventTarget)) {
    if(Z in e)je(e);
    else if(!Array.isArray(e))for(let t in e) {
      const n=e[t];
      typeof n=="object"&&n&&Z in n&&je(n)
    }
  }
}
function je(e,t=new Set) {
  if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)) {
    t.add(e),e instanceof Date&&e.getTime();
    for(let r in e)try {
      je(e[r],t)
    }
    catch {
    }
    const n=rt(e);
    if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype) {
      const r=Ht(n);
      for(let s in r) {
        const a=r[s].get;
        if(a)try {
          a.call(e)
        }
        catch {
        }
      }
    }
  }
}
export {
  pn as $,Er as A,b as B,xe as C,qn as D,me as E,ae as F,Me as G,nr as H,ir as I,en as J,ar as K,tr as L,lt as M,tn as N,Fe as O,Dn as P,vn as Q,Yt as R,Z as S,Rn as T,Ln as U,Vn as V,cr as W,Ke as X,Yn as Y,F as Z,j as _,fr as a,g as a$,Hn as a0,wr as a1,K as a2,or as a3,St as a4,ke as a5,h as a6,fe as a7,fn as a8,ie as a9,Bn as aA,Ue as aB,$n as aC,te as aD,In as aE,hr as aF,gr as aG,Ut as aH,kn as aI,Cr as aJ,En as aK,Tt as aL,xn as aM,wn as aN,Xn as aO,Zn as aP,Ye as aQ,Re as aR,$e as aS,ln as aT,kr as aU,it as aV,Rr as aW,Qn as aX,_r as aY,on as aZ,Jn as a_,G as aa,be as ab,sn as ac,v as ad,y as ae,T as af,Y as ag,M as ah,Te as ai,jn as aj,de as ak,at as al,er as am,vr as an,Qt as ao,He as ap,Fn as aq,mr as ar,Ve as as,oe as at,Mn as au,Gn as av,le as aw,V as ax,Kn as ay,Un as az,Sr as b,Wn as b0,rt as b1,Cn as b2,Ht as b3,bn as b4,q as b5,zn as b6,On as b7,Nn as b8,et as b9,nn as ba,Dr as bb,ur as c,H as d,br as e,dr as f,pr as g,ue as h,rr as i,p as j,Or as k,ee as l,Tn as m,sr as n,Ae as o,lr as p,We as q,Tr as r,$ as s,Ar as t,Ir as u,xr as v,Q as w,S as x,Nr as y,yr as z
};