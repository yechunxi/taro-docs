"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[53608],{49002:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(93106),n=a(72503),l=a(53572),c=a(30730),i=a(10540);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s({year:e,posts:t}){return r.createElement(r.Fragment,null,r.createElement("h3",null,e),r.createElement("ul",null,t.map((e=>r.createElement("li",{key:e.metadata.date},r.createElement(n.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function m({years:e}){return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},e.map(((e,t)=>r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(s,o({},e))))))))}function u({archive:e}){const t=(0,l.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,l.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),n=function(e){const t=e.reduceRight(((e,t)=>{const a=t.metadata.date.split("-")[0];var r;const n=null!==(r=e.get(a))&&void 0!==r?r:[];return e.set(a,[t,...n])}),new Map);return Array.from(t,(([e,t])=>({year:e,posts:t})))}(e.blogPosts);return r.createElement(r.Fragment,null,r.createElement(c.d,{title:t,description:a}),r.createElement(i.Z,null,r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},t),r.createElement("p",{className:"hero__subtitle"},a))),r.createElement("main",null,n.length>0&&r.createElement(m,{years:n}))))}}}]);