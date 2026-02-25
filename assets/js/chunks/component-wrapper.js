import {
  b as O,w as p,H as x,E as y,I as m,J as w,K as D,F as L,L as R,at as B,au as N,av as Y,h as E,aw as C,s as M,a6 as F,ax as K,ay as U,u as z,C as H,az as $,aA as q,aB as G,Q as J,aC as Q,aD as Z,S as j,aE as V
}
from"./runtime.js";
import {
  B as W
}
from"./transitions.js";
function ae(e,r,s=!1) {
  p&&x();
  var t=new W(e),f=s?y:0;
  function _(i,n) {
    if(p) {
      const o=m(e)===w;
      if(i===o) {
        var u=D();
        L(u),t.anchor=u,R(!1),t.ensure(i,n),R(!0);
        return
      }
    }
    t.ensure(i,n)
  }
  O(()=>{var i=!1;r((n,u=!0)=>{i=!0,_(u,n)}),i||_(!1,null)},f)
}
let P=!1;
function X(e) {
  var r=P;
  try {
    return P=!1,[e(),P]
  }
  finally {
    P=r
  }
}
const k= {
  get(e,r) {
    if(!e.exclude.includes(r))return e.props[r]
  }
  ,set(e,r) {
    return!1
  }
  ,getOwnPropertyDescriptor(e,r) {
    if(!e.exclude.includes(r)&&r in e.props)return {
      enumerable:!0,configurable:!0,value:e.props[r]
    }
  }
  ,has(e,r) {
    return e.exclude.includes(r)?!1:r in e.props
  }
  ,ownKeys(e) {
    return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))
  }
};
function ne(e,r,s) {
  return new Proxy({props:e,exclude:r},k)
}
function se(e,r,s,t) {
  var f=!H||(s&$)!==0,_=(s&U)!==0,i=(s&Q)!==0,n=t,u=!0,o=()=>(u&&(u=!1,n=i?z(t):t),n),l;
  if(_) {
    var A=j in e||V in e;
    l=B(e,r)?.set??(A&&r in e?a=>e[r]=a:void 0)
  }
  var c,b=!1;
  _?[c,b]=X(()=>e[r]):c=e[r],c===void 0&&t!==void 0&&(c=o(),l&&(f&&N(),l(c)));
  var d;
  if(f?d=()=>{var a=e[r];return a===void 0?o():(u=!0,a)}:d=()=>{var a=e[r];return a!==void 0&&(n=void 0),a===void 0?n:a},f&&(s&Y)===0)return d;
  if(l) {
    var I=e.$$legacy;
    return(function(a,S){return arguments.length>0?((!f||!S||I||b)&&l(S?d():a),a):d()})
  }
  var h=!1,v=((s&q)!==0?G:J)(()=>(h=!1,d()));
  _&&E(v);
  var T=F;
  return(function(a,S){if(arguments.length>0){const g=S?E(v):f&&_?C(a):a;return M(v,g),h=!0,n!==void 0&&(n=g),a}return Z&&h||(T.f&K)!==0?v.v:E(v)})
}
export {
  ae as i,se as p,ne as r
};