import"./pinia.js";import{_ as o}from"../index.js";import{a1 as a,K as r,a2 as t,L as m,T as n}from"./vue.js";import"./tinymce-plugin-routes.js";const s={name:"DemoIframe"},c=m("iframe",{id:"demoIframeID",name:"demoIframeID",src:"/tinymce/index.html",frameborder:"0",scrolling:"no",width:"100%",onload:"autoIframeHeight(this)"},null,-1);function d(i,p,f,l,_,u){const e=a("PagesRouter");return n(),r("div",null,[c,t(e,{pagesName:"demo"})])}var $=o(s,[["render",d]]);export{$ as default};