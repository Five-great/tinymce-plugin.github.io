var v=Object.defineProperty,R=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var p=(e,o,a)=>o in e?v(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,d=(e,o)=>{for(var a in o||(o={}))w.call(o,a)&&p(e,a,o[a]);if(u)for(var a of u(o))E.call(o,a)&&p(e,a,o[a]);return e},m=(e,o)=>R(e,f(o));import"./pinia.js";import{J as c}from"./vue.js";const g="modulepreload",h={},k="/",l=function(o,a){return!a||a.length===0?o():Promise.all(a.map(i=>{if(i=''+k+i,i in h)return;h[i]=!0;const s=i.endsWith(".css"),t=s?'[rel="stylesheet"]':"";if(document.querySelector('link[href="'+i+'"]'+t))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":g,s||(n.as="script",n.crossOrigin=""),n.href=i,document.head.appendChild(n),s)return new Promise((r,_)=>{n.addEventListener("load",r),n.addEventListener("error",()=>_(new Error("Unable to preload CSS for i")))})})).then(()=>o())},A=(e,o,a,i={template:"<div>loading</div>"},s={template:"<div>err</div>"})=>{e.addRoute({name:"404",path:"/:path(.*)",component:a["/assets/chunk/test.js"]||{template:"<div>404</div>"}}),o.routes.map(t=>{e.hasRoute(t.path)&&e.removeRoute(t.path),t.children&&t.children.length>0?(e.addRoute(m(d({},t),{component:{template:'<div class="'+t.name+' w1300" ><router-view></router-view></div>'}})),t.children.map(n=>{n.children&&n.children.length>0?(e.addRoute(t.name,m(d({},n),{component:{template:'<div class="'+n.name+' w1300" ><router-view></router-view></div>'}})),n.children.map(r=>{e.addRoute(n.name,m(d({},r),{component:c({loader:()=>l(()=>import("/assets/chunk/"+r.name+".js"),[]),loadingComponent:i,errorComponent:s,delay:50,timeout:36e4})}))})):e.addRoute(t.name,m(d({},n),{component:c({loader:()=>l(()=>import("/assets/chunk/"+n.name+".js"),[]),loadingComponent:i,errorComponent:s,delay:50,timeout:36e4})}))})):e.addRoute(m(d({},t),{component:c({loader:()=>l(()=>import("/assets/chunk/"+t.name+".js"),[]),loadingComponent:i,errorComponent:s,delay:100,timeout:36e4})}))}),o.routes_en.map(t=>{e.hasRoute(t.path)&&e.removeRoute(t.path),t.children&&t.children.length>0?(e.addRoute(m(d({},t),{component:{template:'<div class="'+t.name+' w1300" ><router-view></router-view></div>'}})),t.children.map(n=>{n.children&&n.children.length>0?(e.addRoute(t.name,m(d({},n),{component:{template:'<div class="'+n.name+' w1300" ><router-view></router-view></div>'}})),n.children.map(r=>{e.addRoute(n.name,m(d({},r),{component:c({loader:()=>l(()=>import("/assets/chunk/"+r.name+".js"),[]),loadingComponent:i,errorComponent:s,delay:50,timeout:36e4})}))})):e.addRoute(t.name,m(d({},n),{component:c({loader:()=>l(()=>import("/assets/chunk/"+n.name+".js"),[]),loadingComponent:i,errorComponent:s,delay:50,timeout:36e4})}))})):e.addRoute(m(d({},t),{component:c({loader:()=>l(()=>import("/assets/chunk/"+t.name+".js"),[]),loadingComponent:i,errorComponent:s,delay:100,timeout:36e4})}))})};export{l as _,A as g};