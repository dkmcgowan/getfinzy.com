import {
  q,o as rr,b as er,aV as tr,w as y,M as ir,a2 as V,L as C,F as D,x as fr,G as sr,aW as B,l as k,v as G,e as Z,R as ar,aX as ur,aY as lr,aK as or,aZ as cr,h as nr,a_ as vr,a$ as dr,b0 as _r,b1 as br,b2 as gr,b3 as hr
}
from"./runtime.js";
import {
  g as pr,j as Ar,k as yr,n as Er,l as Nr
}
from"./dom-events.js";
function Tr(r,i) {
  if(i) {
    const e=document.body;
    r.autofocus=!0,q(()=>{document.activeElement===e&&r.focus()})
  }
}
let F=!1;
function Sr() {
  F||(F=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{if(!r.defaultPrevented)for(const i of r.target.elements)i.__on_r?.()})},{capture:!0}))
}
function Fr(r,i) {
  let e=null,t=y;
  var f;
  if(y) {
    e=fr;
    for(var s=sr(document.head);s!==null&&(s.nodeType!==ir||s.data!==r);)s=V(s);
    if(s===null)C(!1);
    else {
      var u=V(s);
      s.remove(),D(u)
    }
  }
  y||(f=document.head.appendChild(rr()));
  try {
    er(()=>i(f),tr)
  }
  finally {
    t&&(C(!0),D(e))
  }
}
function Lr(r,i) {
  var e=void 0,t;
  B(()=>{e!==(e=i())&&(t&&(k(t),t=null),e&&(t=G(()=>{Z(()=>e(r))})))})
}
function z(r) {
  var i,e,t="";
  if(typeof r=="string"||typeof r=="number")t+=r;
  else if(typeof r=="object")if(Array.isArray(r)) {
    var f=r.length;
    for(i=0;i<f;i++)r[i]&&(e=z(r[i]))&&(t&&(t+=" "),t+=e)
  }
  else for(e in r)r[e]&&(t&&(t+=" "),t+=e);
  return t
}
function Or() {
  for(var r,i,e=0,t="",f=arguments.length;e<f;e++)(r=arguments[e])&&(i=z(r))&&(t&&(t+=" "),t+=i);
  return t
}
function Cr(r) {
  return typeof r=="object"?Or(r):r??""
}
const H=[...` 	
\r\f \v\uFEFF`];
function Ir(r,i,e) {
  var t=r==null?"":""+r;
  if(i&&(t=t?t+" "+i:i),e) {
    for(var f in e)if(e[f])t=t?t+" "+f:f;
    else if(t.length)for(var s=f.length,u=0;(u=t.indexOf(f,u))>=0;) {
      var c=u+s;
      (u===0||H.includes(t[u-1]))&&(c===t.length||H.includes(t[c]))?t=(u===0?"":t.substring(0,u))+t.substring(c+1):u=c
    }
  }
  return t===""?null:t
}
function R(r,i=!1) {
  var e=i?" !important;":";",t="";
  for(var f in r) {
    var s=r[f];
    s!=null&&s!==""&&(t+=" "+f+": "+s+e)
  }
  return t
}
function M(r) {
  return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r
}
function wr(r,i) {
  if(i) {
    var e="",t,f;
    if(Array.isArray(i)?(t=i[0],f=i[1]):t=i,r) {
      r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();
      var s=!1,u=0,c=!1,d=[];
      t&&d.push(...Object.keys(t).map(M)),f&&d.push(...Object.keys(f).map(M));
      var n=0,g=-1;
      const N=r.length;
      for(var v=0;v<N;v++) {
        var a=r[v];
        if(c?a==="/"&&r[v-1]==="*"&&(c=!1):s?s===a&&(s=!1):a==="/"&&r[v+1]==="*"?c=!0:a==='"'||a==="'"?s=a:a==="("?u++:a===")"&&u--,!c&&s===!1&&u===0) {
          if(a===":"&&g===-1)g=v;
          else if(a===";"||v===N-1) {
            if(g!==-1) {
              var E=M(r.substring(n,g).trim());
              if(!d.includes(E)) {
                a!==";"&&v++;
                var A=r.substring(n,v).trim();
                e+=" "+A+";"
              }
            }
            n=v+1,g=-1
          }
        }
      }
    }
    return t&&(e+=R(t)),f&&(e+=R(f,!0)),e=e.trim(),e===""?null:e
  }
  return r==null?null:String(r)
}
function Mr(r,i,e,t,f,s) {
  var u=r.__className;
  if(y||u!==e||u===void 0) {
    var c=Ir(e,t,s);
    (!y||c!==r.getAttribute("class"))&&(c==null?r.removeAttribute("class"):i?r.className=c:r.setAttribute("class",c)),r.__className=e
  }
  else if(s&&f!==s)for(var d in s) {
    var n=!!s[d];
    (f==null||n!==!!f[d])&&r.classList.toggle(d,n)
  }
  return s
}
function P(r,i={},e,t) {
  for(var f in e) {
    var s=e[f];
    i[f]!==s&&(e[f]==null?r.style.removeProperty(f):r.style.setProperty(f,s,t))
  }
}
function Pr(r,i,e,t) {
  var f=r.__style;
  if(y||f!==i) {
    var s=wr(i,t);
    (!y||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r.__style=i
  }
  else t&&(Array.isArray(t)?(P(r,e?.[0],t[0]),P(r,e?.[1],t[1],"important")):P(r,e,t));
  return t
}
function $(r,i,e=!1) {
  if(r.multiple) {
    if(i==null)return;
    if(!ar(i))return ur();
    for(var t of r.options)t.selected=i.includes(Y(t));
    return
  }
  for(t of r.options) {
    var f=Y(t);
    if(lr(f,i)) {
      t.selected=!0;
      return
    }
  }
  (!e||i!==void 0)&&(r.selectedIndex=-1)
}
function kr(r) {
  var i=new MutationObserver(()=>{$(r,r.__value)});
  i.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),or(()=>{i.disconnect()})
}
function Y(r) {
  return"__value"in r?r.__value:r.value
}
const L=Symbol("class"),O=Symbol("style"),W=Symbol("is custom element"),X=Symbol("is html");
function $r(r) {
  if(y) {
    var i=!1,e=()=> {
      if(!i) {
        if(i=!0,r.hasAttribute("value")) {
          var t=r.value;
          I(r,"value",null),r.value=t
        }
        if(r.hasAttribute("checked")) {
          var f=r.checked;
          I(r,"checked",null),r.checked=f
        }
      }
    };
    r.__on_r=e,q(e),Sr()
  }
}
function jr(r,i) {
  i?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")
}
function I(r,i,e,t) {
  var f=J(r);
  y&&(f[i]=r.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&r.nodeName==="LINK")||f[i]!==(f[i]=e)&&(i==="loading"&&(r[gr]=e),e==null?r.removeAttribute(i):typeof e!="string"&&Q(r).includes(i)?r[i]=e:r.setAttribute(i,e))
}
function Ur(r,i,e,t,f=!1,s=!1) {
  if(y&&f&&r.tagName==="INPUT") {
    var u=r,c=u.type==="checkbox"?"defaultChecked":"defaultValue";
    c in e||$r(u)
  }
  var d=J(r),n=d[W],g=!d[X];
  let v=y&&n;
  v&&C(!1);
  var a=i|| {
  }
  ,E=r.tagName==="OPTION";
  for(var A in i)A in e||(e[A]=null);
  e.class?e.class=Cr(e.class):e[L]&&(e.class=null),e[O]&&(e.style??=null);
  var N=Q(r);
  for(const l in e) {
    let o=e[l];
    if(E&&l==="value"&&o==null) {
      r.value=r.__value="",a[l]=o;
      continue
    }
    if(l==="class") {
      var S=r.namespaceURI==="http://www.w3.org/1999/xhtml";
      Mr(r,S,o,t,i?.[L],e[L]),a[l]=o,a[L]=e[L];
      continue
    }
    if(l==="style") {
      Pr(r,o,i?.[O],e[O]),a[l]=o,a[O]=e[O];
      continue
    }
    var h=a[l];
    if(!(o===h&&!(o===void 0&&r.hasAttribute(l)))) {
      a[l]=o;
      var j=l[0]+l[1];
      if(j!=="$$")if(j==="on") {
        const p= {
        }
        ,T="$$"+l;
        let _=l.slice(2);
        var w=Nr(_);
        if(pr(_)&&(_=_.slice(0,-7),p.capture=!0),!w&&h) {
          if(o!=null)continue;
          r.removeEventListener(_,a[T],p),a[T]=null
        }
        if(o!=null)if(w)r[`__${_}`]=o,yr([_]);
        else {
          let m=function(x) {
            a[l].call(this,x)
          };
          a[T]=Ar(_,r,m,p)
        }
        else w&&(r[`__${_}`]=void 0)
      }
      else if(l==="style")I(r,l,o);
      else if(l==="autofocus")Tr(r,!!o);
      else if(!n&&(l==="__value"||l==="value"&&o!=null))r.value=r.__value=o;
      else if(l==="selected"&&E)jr(r,o);
      else {
        var b=l;
        g||(b=Er(b));
        var U=b==="defaultValue"||b==="defaultChecked";
        if(o==null&&!n&&!U)if(d[l]=null,b==="value"||b==="checked") {
          let p=r;
          const T=i===void 0;
          if(b==="value") {
            let _=p.defaultValue;
            p.removeAttribute(b),p.defaultValue=_,p.value=p.__value=T?_:null
          }
          else {
            let _=p.defaultChecked;
            p.removeAttribute(b),p.defaultChecked=_,p.checked=T?_:!1
          }
        }
        else r.removeAttribute(l);
        else U||N.includes(b)&&(n||typeof o!="string")?(r[b]=o,b in d&&(d[b]=dr)):typeof o!="function"&&I(r,b,o)
      }
    }
  }
  return v&&C(!0),a
}
function Hr(r,i,e=[],t=[],f=[],s,u=!1,c=!1) {
  cr(f,e,t,d=>{var n=void 0,g={},v=r.nodeName==="SELECT",a=!1;if(B(()=>{var A=i(...d.map(nr)),N=Ur(r,n,A,s,u,c);a&&v&&"value"in A&&$(r,A.value);for(let h of Object.getOwnPropertySymbols(g))A[h]||k(g[h]);for(let h of Object.getOwnPropertySymbols(A)){var S=A[h];h.description===vr&&(!n||S!==n[h])&&(g[h]&&k(g[h]),g[h]=G(()=>Lr(r,()=>S))),N[h]=S}n=N}),v){var E=r;Z(()=>{$(E,n.value,!0),kr(E)})}a=!0})
}
function J(r) {
  return r.__attributes??= {
    [W]:r.nodeName.includes("-"),[X]:r.namespaceURI===_r
  }
}
var K=new Map;
function Q(r) {
  var i=r.getAttribute("is")||r.nodeName,e=K.get(i);
  if(e)return e;
  K.set(i,e=[]);
  for(var t,f=r,s=Element.prototype;s!==f;) {
    t=hr(f);
    for(var u in t)t[u].set&&e.push(u);
    f=br(f)
  }
  return e
}
export {
  I as a,Hr as b,Cr as c,Pr as d,Fr as h,Mr as s
};