var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{aG as i,G as p}from"./index-6e705c16.js";const c=e=>new Promise(((c,l)=>{var b;i((b=((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&n(e,r,t[r]);return e})({},e),t(b,r({dataType:"json",responseType:"json",success(e){e.statusCode>=200&&e.statusCode<300?c(e.data):(401===e.statusCode||p({icon:"none",title:e.data.msg||"请求错误"}),l(e))},fail(e){p({icon:"none",title:"网络错误，换个网络试试"}),l(e)}}))))}));export{c as h};