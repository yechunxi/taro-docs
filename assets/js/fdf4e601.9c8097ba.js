"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[47960],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),k=p(t),m=a,d=k["".concat(l,".").concat(m)]||k[m]||u[m]||o;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=k;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},86422:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return k}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],c={title:"Taro.createWorker(scriptPath)",sidebar_label:"createWorker"},l=void 0,p={unversionedId:"apis/worker/createWorker",id:"version-3.x/apis/worker/createWorker",title:"Taro.createWorker(scriptPath)",description:"\u521b\u5efa\u4e00\u4e2a Worker \u7ebf\u7a0b\u3002\u76ee\u524d\u9650\u5236\u6700\u591a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a Worker\uff0c\u521b\u5efa\u4e0b\u4e00\u4e2a Worker \u524d\u8bf7\u5148\u8c03\u7528 Worker.terminate",source:"@site/versioned_docs/version-3.x/apis/worker/createWorker.md",sourceDirName:"apis/worker",slug:"/apis/worker/createWorker",permalink:"/taro/docs/apis/worker/createWorker",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/worker/createWorker.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createWorker(scriptPath)",sidebar_label:"createWorker"},sidebar:"API",previous:{title:"startFacialRecognitionVerifyAndUploadVideo",permalink:"/taro/docs/apis/open-api/facial/startFacialRecognitionVerifyAndUploadVideo"},next:{title:"Worker",permalink:"/taro/docs/apis/worker/"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],u={toc:s};function k(e){var r=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,c,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a Worker \u7ebf\u7a0b\u3002\u76ee\u524d\u9650\u5236\u6700\u591a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a Worker\uff0c\u521b\u5efa\u4e0b\u4e00\u4e2a Worker \u524d\u8bf7\u5148\u8c03\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/worker/Worker#terminate"},"Worker.terminate")),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:t(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:t(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:t(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(scriptPath: string) => Worker\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scriptPath"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"worker \u5165\u53e3\u6587\u4ef6\u7684",(0,o.kt)("strong",{parentName:"td"},"\u7edd\u5bf9\u8def\u5f84"))))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const worker = Taro.createWorker('workers/request/index.js') // \u6587\u4ef6\u540d\u6307\u5b9a worker \u7684\u5165\u53e3\u6587\u4ef6\u8def\u5f84\uff0c\u7edd\u5bf9\u8def\u5f84\n  worker.onMessage(function (res) {\n  console.log(res)\n})\nworker.postMessage({\n  msg: 'hello worker'\n})\nworker.terminate()\n")))}k.isMDXComponent=!0},5030:function(e,r,t){r.Z=t.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,r,t){r.Z=t.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,r,t){r.Z=t.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);