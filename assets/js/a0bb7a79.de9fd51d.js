"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[2659],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return s}});var l=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=l.createContext({}),d=function(t){var e=l.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return l.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),c=d(a),s=r,u=c["".concat(p,".").concat(s)]||c[s]||m[s]||n;return a?l.createElement(u,i(i({ref:e},k),{},{components:a})):l.createElement(u,i({ref:e},k))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<n;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2652:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return k},default:function(){return c}});var l=a(83117),r=a(80102),n=(a(67294),a(3905)),i=["components"],o={title:"InterstitialAd",sidebar_label:"InterstitialAd"},p=void 0,d={unversionedId:"apis/ad/InterstitialAd",id:"version-3.x/apis/ad/InterstitialAd",title:"InterstitialAd",description:"\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u3002\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u662f\u4e00\u4e2a\u539f\u751f\u7ec4\u4ef6\uff0c\u5c42\u7ea7\u6bd4\u666e\u901a\u7ec4\u4ef6\u9ad8\u3002\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u6bcf\u6b21\u521b\u5efa\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5168\u65b0\u7684\u5b9e\u4f8b\uff08\u5c0f\u7a0b\u5e8f\u7aef\u7684\u63d2\u5c4f\u5e7f\u544a\u5b9e\u4f8b\u4e0d\u5141\u8bb8\u8de8\u9875\u9762\u4f7f\u7528\uff09\uff0c\u9ed8\u8ba4\u662f\u9690\u85cf\u7684\uff0c\u9700\u8981\u8c03\u7528 InterstitialAd.show() \u5c06\u5176\u663e\u793a\u3002",source:"@site/versioned_docs/version-3.x/apis/ad/InterstitialAd.md",sourceDirName:"apis/ad",slug:"/apis/ad/InterstitialAd",permalink:"/taro/docs/apis/ad/InterstitialAd",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/ad/InterstitialAd.md",tags:[],version:"3.x",frontMatter:{title:"InterstitialAd",sidebar_label:"InterstitialAd"},sidebar:"API",previous:{title:"createInterstitialAd",permalink:"/taro/docs/apis/ad/createInterstitialAd"},next:{title:"RewardedVideoAd",permalink:"/taro/docs/apis/ad/RewardedVideoAd"}},k=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"destroy",id:"destroy",children:[],level:3},{value:"offClose",id:"offclose",children:[],level:3},{value:"offError",id:"offerror",children:[],level:3},{value:"offLoad",id:"offload",children:[],level:3},{value:"onClose",id:"onclose",children:[],level:3},{value:"onError",id:"onerror",children:[],level:3},{value:"onLoad",id:"onload",children:[],level:3},{value:"load",id:"load",children:[],level:3},{value:"show",id:"show",children:[],level:3}],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"OffCloseCallback",id:"offclosecallback",children:[],level:3},{value:"OffErrorCallback",id:"offerrorcallback",children:[],level:3},{value:"OffLoadCallback",id:"offloadcallback",children:[],level:3},{value:"OnCloseCallback",id:"onclosecallback",children:[],level:3},{value:"OnErrorCallback",id:"onerrorcallback",children:[],level:3},{value:"OnLoadCallback",id:"onloadcallback",children:[],level:3},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],m={toc:k};function c(t){var e=t.components,o=(0,r.Z)(t,i);return(0,n.kt)("wrapper",(0,l.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u3002\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u662f\u4e00\u4e2a\u539f\u751f\u7ec4\u4ef6\uff0c\u5c42\u7ea7\u6bd4\u666e\u901a\u7ec4\u4ef6\u9ad8\u3002\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u6bcf\u6b21\u521b\u5efa\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5168\u65b0\u7684\u5b9e\u4f8b\uff08\u5c0f\u7a0b\u5e8f\u7aef\u7684\u63d2\u5c4f\u5e7f\u544a\u5b9e\u4f8b\u4e0d\u5141\u8bb8\u8de8\u9875\u9762\u4f7f\u7528\uff09\uff0c\u9ed8\u8ba4\u662f\u9690\u85cf\u7684\uff0c\u9700\u8981\u8c03\u7528 InterstitialAd.show() \u5c06\u5176\u663e\u793a\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.html"},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,n.kt)("h3",{id:"destroy"},"destroy"),(0,n.kt)("p",null,"\u9500\u6bc1\u63d2\u5c4f\u5e7f\u544a\u5b9e\u4f8b\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.destroy.html"},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,n.kt)("h3",{id:"offclose"},"offClose"),(0,n.kt)("p",null,"\u53d6\u6d88\u76d1\u542c\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed\u4e8b\u4ef6"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offClose.html"},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OffCloseCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"OffCloseCallback"))))),(0,n.kt)("h3",{id:"offerror"},"offError"),(0,n.kt)("p",null,"\u53d6\u6d88\u76d1\u542c\u63d2\u5c4f\u9519\u8bef\u4e8b\u4ef6"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offError.html"},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OffErrorCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"OffErrorCallback"))))),(0,n.kt)("h3",{id:"offload"},"offLoad"),(0,n.kt)("p",null,"\u53d6\u6d88\u76d1\u542c\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u4e8b\u4ef6"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offLoad.html"},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OffLoadCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"OffLoadCallback"))))),(0,n.kt)("h3",{id:"onclose"},"onClose"),(0,n.kt)("p",null,"\u76d1\u542c\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed\u4e8b\u4ef6\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onClose.html"},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnCloseCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"OnCloseCallback"))))),(0,n.kt)("h3",{id:"onerror"},"onError"),(0,n.kt)("p",null,"\u76d1\u542c\u63d2\u5c4f\u9519\u8bef\u4e8b\u4ef6\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onError.html"},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnErrorCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"OnErrorCallback"))))),(0,n.kt)("h3",{id:"onload"},"onLoad"),(0,n.kt)("p",null,"\u76d1\u542c\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u4e8b\u4ef6\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onLoad.html"},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnLoadCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"OnLoadCallback"))))),(0,n.kt)("h3",{id:"load"},"load"),(0,n.kt)("p",null,"\u52a0\u8f7d\u63d2\u5c4f\u5e7f\u544a\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.load.html"},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Promise<any>\n")),(0,n.kt)("h3",{id:"show"},"show"),(0,n.kt)("p",null,"\u663e\u793a\u63d2\u5c4f\u5e7f\u544a\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9519\u8bef\u7801\u4fe1\u606f\u8868")),(0,n.kt)("p",null,"\u5982\u679c\u63d2\u5c4f\u5e7f\u544a\u663e\u793a\u5931\u8d25\uff0cInterstitialAd.show() \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2arejected Promise\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u83b7\u53d6\u5230\u9519\u8bef\u7801\u53ca\u5bf9\u5e94\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u4ee3\u7801"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5f02\u5e38\u60c5\u51b5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7406\u7531"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2001"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u9891\u7387\u9650\u5236"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7a0b\u5e8f\u542f\u52a8\u4e00\u5b9a\u65f6\u95f4\u5185\u4e0d\u5141\u8bb8\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2002"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u9891\u7387\u9650\u5236"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ddd\u79bb\u5c0f\u7a0b\u5e8f\u63d2\u5c4f\u5e7f\u544a\u6216\u8005\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u4e0a\u6b21\u64ad\u653e\u65f6\u95f4\u95f4\u9694\u4e0d\u8db3\uff0c\u4e0d\u5141\u8bb8\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2003"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u9891\u7387\u9650\u5236"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u6216\u8005\u63d2\u5c4f\u5e7f\u544a\uff0c\u4e0d\u5141\u8bb8\u518d\u6b21\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2004"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5e7f\u544a\u6e32\u67d3\u5931\u8d25"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5\uff0c\u6216\u56e0\u5c0f\u7a0b\u5e8f\u9875\u9762\u5207\u6362\u5bfc\u81f4\u5e7f\u544a\u6e32\u67d3\u5931\u8d25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2005"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5e7f\u544a\u8c03\u7528\u5f02\u5e38"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d2\u5c4f\u5e7f\u544a\u5b9e\u4f8b\u4e0d\u5141\u8bb8\u8de8\u9875\u9762\u8c03\u7528")))),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.show.html"},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Promise<any>\n")),(0,n.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.kt)("h3",{id:"offclosecallback"},"OffCloseCallback"),(0,n.kt)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: TaroGeneral.CallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"res"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CallbackResult"))))),(0,n.kt)("h3",{id:"offerrorcallback"},"OffErrorCallback"),(0,n.kt)("p",null,"\u63d2\u5c4f\u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: TaroGeneral.CallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"res"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CallbackResult"))))),(0,n.kt)("h3",{id:"offloadcallback"},"OffLoadCallback"),(0,n.kt)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: TaroGeneral.CallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"res"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CallbackResult"))))),(0,n.kt)("h3",{id:"onclosecallback"},"OnCloseCallback"),(0,n.kt)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: TaroGeneral.CallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"res"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CallbackResult"))))),(0,n.kt)("h3",{id:"onerrorcallback"},"OnErrorCallback"),(0,n.kt)("p",null,"\u63d2\u5c4f\u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnErrorCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"result"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"OnErrorCallbackResult"))))),(0,n.kt)("h3",{id:"onloadcallback"},"OnLoadCallback"),(0,n.kt)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: TaroGeneral.CallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"res"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CallbackResult"))))),(0,n.kt)("h3",{id:"onerrorcallbackresult"},"OnErrorCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errCode"),(0,n.kt)("td",{parentName:"tr",align:null},"string or number or symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u7801",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"td",href:"https://nervjs.github.io/taro/docs/apis/General#AdErrCode"},"\u53c2\u8003\u5730\u5740"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u4fe1\u606f")))),(0,n.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"API"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,n.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"InterstitialAd.destroy"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"InterstitialAd.offClose"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"InterstitialAd.offError"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"InterstitialAd.offLoad"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"InterstitialAd.onClose"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"InterstitialAd.onError"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"InterstitialAd.onLoad"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"InterstitialAd.load"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"InterstitialAd.show"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))))}c.isMDXComponent=!0},5030:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);