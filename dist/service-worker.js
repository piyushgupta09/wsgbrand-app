if(!self.define){let s,l={};const n=(n,r)=>(n=new URL(n+".js",r).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(r,i)=>{const e=s||("document"in self?document.currentScript.src:"")||location.href;if(l[e])return;let u={};const o=s=>n(s,e),j={module:{uri:e},exports:u,require:o};l[e]=Promise.all(r.map((s=>j[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-6567b62a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"wsgbrand-app-v1"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/172.f6e8b4a7.css",revision:null},{url:"/css/228.51bf1e5e.css",revision:null},{url:"/css/296.eda0af44.css",revision:null},{url:"/css/364.16abe4e9.css",revision:null},{url:"/css/412.16abe4e9.css",revision:null},{url:"/css/472.eda0af44.css",revision:null},{url:"/css/564.16abe4e9.css",revision:null},{url:"/css/600.35fba4c4.css",revision:null},{url:"/css/620.4300aa6a.css",revision:null},{url:"/css/680.d7dba4df.css",revision:null},{url:"/css/708.4300aa6a.css",revision:null},{url:"/css/736.8e168e63.css",revision:null},{url:"/css/788.4ad4080d.css",revision:null},{url:"/css/880.eda0af44.css",revision:null},{url:"/css/92.4300aa6a.css",revision:null},{url:"/css/app.b44ea835.css",revision:null},{url:"/css/chunk-vendors.1203c19c.css",revision:null},{url:"/fonts/bootstrap-icons.70a9dee9.woff",revision:null},{url:"/fonts/bootstrap-icons.bfa90bda.woff2",revision:null},{url:"/img/brand.6a14a56c.png",revision:null},{url:"/img/logo.ea68f244.png",revision:null},{url:"/index.html",revision:"cae494565e117d5c4dce325bb7b9c2e7"},{url:"/js/100.f4a919b7.js",revision:null},{url:"/js/104.62f782f5.js",revision:null},{url:"/js/120.e952d63e.js",revision:null},{url:"/js/172.e393242a.js",revision:null},{url:"/js/228.2b81314e.js",revision:null},{url:"/js/240.4ac4fa57.js",revision:null},{url:"/js/260.a552ef67.js",revision:null},{url:"/js/272.f244ca4b.js",revision:null},{url:"/js/296.3a2e855c.js",revision:null},{url:"/js/312.929cda2e.js",revision:null},{url:"/js/336.7ca18adf.js",revision:null},{url:"/js/364.8820d62e.js",revision:null},{url:"/js/374.648bce60.js",revision:null},{url:"/js/4.c8ee6b7f.js",revision:null},{url:"/js/412.1f22fddf.js",revision:null},{url:"/js/416.bb20e69e.js",revision:null},{url:"/js/44.99235bdf.js",revision:null},{url:"/js/472.dafe480b.js",revision:null},{url:"/js/552.1a093db2.js",revision:null},{url:"/js/554.863f9b81.js",revision:null},{url:"/js/564.ff358b14.js",revision:null},{url:"/js/576.94289728.js",revision:null},{url:"/js/584.2f9708ae.js",revision:null},{url:"/js/600.4435b71b.js",revision:null},{url:"/js/618.b1b29da4.js",revision:null},{url:"/js/620.d5647933.js",revision:null},{url:"/js/636.c2bf56d9.js",revision:null},{url:"/js/64.12425f48.js",revision:null},{url:"/js/68.951878ab.js",revision:null},{url:"/js/680.3220dfb0.js",revision:null},{url:"/js/708.062f0181.js",revision:null},{url:"/js/72.588b1d48.js",revision:null},{url:"/js/724.07b6cea6.js",revision:null},{url:"/js/728.b12d7d14.js",revision:null},{url:"/js/730.b04c5b07.js",revision:null},{url:"/js/736.14da9546.js",revision:null},{url:"/js/740.f9d1010e.js",revision:null},{url:"/js/744.1f3f1f89.js",revision:null},{url:"/js/788.b3769873.js",revision:null},{url:"/js/796.bdce9ea7.js",revision:null},{url:"/js/80.0b65327c.js",revision:null},{url:"/js/800.eda56943.js",revision:null},{url:"/js/808.0f68737d.js",revision:null},{url:"/js/88.cc444870.js",revision:null},{url:"/js/880.7d439dd0.js",revision:null},{url:"/js/884.7290695b.js",revision:null},{url:"/js/92.d1fb592d.js",revision:null},{url:"/js/960.e620c743.js",revision:null},{url:"/js/app.867163b0.js",revision:null},{url:"/js/chunk-vendors.756bbfe2.js",revision:null},{url:"/logo.png",revision:"d2d76a34be418f28c55c2ae0b7c982e3"},{url:"/manifest.json",revision:"6c5fd78f1faac732ed49b346771669e2"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/sw.js",revision:"af81e09b1fc51673615c76814123e9b4"}],{})}));
//# sourceMappingURL=service-worker.js.map
