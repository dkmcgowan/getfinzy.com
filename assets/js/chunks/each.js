import {
  a as e,b as c
}
from"./dom-events.js";
import {
  t as d,f as v,g as m,i as u
}
from"./runtime.js";
import {
  p as i,i as x
}
from"./component-wrapper.js";
import {
  s as _,c as b,a as h
}
from"./dom-attributes.js";
var w=c('<defs><linearGradient id="logo-gradient" x1="110.25" y1="213.3" x2="496.14" y2="436.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#AA5CC3"></stop><stop offset="1" stop-color="#00A4DC"></stop></linearGradient></defs>'),L=c('<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!><path fill-rule="evenodd" d="M256 56C122 56 56 122 56 256C56 390 122 456 256 456C390 456 456 390 456 256C456 122 390 56 256 56ZM214 168C214 156 228 148 240 156L342 240C354 250 354 262 342 272L240 356C228 364 214 356 214 344Z"></path></svg>');
function G(f,t) {
  let l=i(t,"class",3,""),o=i(t,"gradient",3,!0);
  var s=L(),r=v(s);
  {
    var p=a=> {
      var g=w();
      e(a,g)
    };
    x(r,a=>{o()&&a(p)})
  }
  var n=m(r);
  u(s),d(()=>{_(s,0,b(l())),h(n,"fill",o()?"url(#logo-gradient)":"currentColor")}),e(f,s)
}
export {
  G as L
};