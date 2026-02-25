import {
  b as p,E as t
}
from"./runtime.js";
import {
  B as c
}
from"./transitions.js";
function E(r,s,...a) {
  var e=new c(r);
  p(()=>{const n=s()??null;e.ensure(n,n&&(o=>n(o,...a)))},t)
}
export {
  E as s
};