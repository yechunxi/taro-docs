"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[25544],{79874:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=k(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var k={};for(var i in t)hasOwnProperty.call(t,i)&&(k[i]=t[i]);k.originalType=e,k.mdxType="string"==typeof e?e:a,o[1]=k;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74910:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return k},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"Worker",sidebar_label:"Worker"},k=void 0,i={unversionedId:"apis/worker/Worker",id:"version-2.x/apis/worker/Worker",title:"Worker",description:"\u65b9\u6cd5",source:"@site/versioned_docs/version-2.x/apis/worker/Worker.md",sourceDirName:"apis/worker",slug:"/apis/worker/",permalink:"/taro-docs/docs/2.x/apis/worker/",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/worker/Worker.md",tags:[],version:"2.x",frontMatter:{title:"Worker",sidebar_label:"Worker"},sidebar:"version-2.x/API",previous:{title:"createWorker",permalink:"/taro-docs/docs/2.x/apis/worker/createWorker"},next:{title:"getExtConfigSync",permalink:"/taro-docs/docs/2.x/apis/ext/getExtConfigSync"}},p={},c=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"onMessage",id:"onmessage",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:4},{value:"postMessage",id:"postmessage",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",level:4},{value:"terminate",id:"terminate",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-2",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"OnMessageCallback",id:"onmessagecallback",level:3},{value:"OnMessageCallbackResult",id:"onmessagecallbackresult",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-3",level:2}],s={toc:c};function u(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",a({},{id:"onmessage"}),"onMessage"),(0,n.kt)("p",null,"\u76d1\u542c\u4e3b\u7ebf\u7a0b/Worker \u7ebf\u7a0b\u5411\u5f53\u524d\u7ebf\u7a0b\u53d1\u9001\u7684\u6d88\u606f\u7684\u4e8b\u4ef6\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.onMessage.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OnMessageCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnMessageCallback")),(0,n.kt)("td",null,"\u4e3b\u7ebf\u7a0b/Worker \u7ebf\u7a0b\u5411\u5f53\u524d\u7ebf\u7a0b\u53d1\u9001\u7684\u6d88\u606f\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h4",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Worker.onMessage"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"postmessage"}),"postMessage"),(0,n.kt)("p",null,"\u5411\u4e3b\u7ebf\u7a0b/Worker \u7ebf\u7a0b\u53d1\u9001\u7684\u6d88\u606f\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.postMessage.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(message: Record<string, any>) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"message"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"\u9700\u8981\u53d1\u9001\u7684\u6d88\u606f\uff0c\u5fc5\u987b\u662f\u4e00\u4e2a\u53ef\u5e8f\u5217\u5316\u7684 JavaScript key-value \u5f62\u5f0f\u7684\u5bf9\u8c61\u3002")))),(0,n.kt)("h4",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("p",null,"worker \u7ebf\u7a0b\u4e2d"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"worker.postMessage({\n  msg: 'hello from worker'\n})\n")),(0,n.kt)("p",null,"\u4e3b\u7ebf\u7a0b\u4e2d"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const worker = Taro.createWorker('workers/request/index.js')\nworker.postMessage({\n  msg: 'hello from main'\n})\n")),(0,n.kt)("h4",a({},{id:"api-\u652f\u6301\u5ea6-1"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Worker.postMessage"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"terminate"}),"terminate"),(0,n.kt)("p",null,"\u7ed3\u675f\u5f53\u524d Worker \u7ebf\u7a0b\u3002\u4ec5\u9650\u5728\u4e3b\u7ebf\u7a0b worker \u5bf9\u8c61\u4e0a\u8c03\u7528\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.terminate.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,n.kt)("h4",a({},{id:"api-\u652f\u6301\u5ea6-2"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Worker.terminate"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",a({},{id:"onmessagecallback"}),"OnMessageCallback"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnMessageCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnMessageCallbackResult"))))),(0,n.kt)("h3",a({},{id:"onmessagecallbackresult"}),"OnMessageCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"message"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"\u4e3b\u7ebf\u7a0b/Worker \u7ebf\u7a0b\u5411\u5f53\u524d\u7ebf\u7a0b\u53d1\u9001\u7684\u6d88\u606f")))),(0,n.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6-3"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Worker.onMessage"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Worker.postMessage"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Worker.terminate"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);