"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[58931],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72636:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Taro.login(option)",sidebar_label:"login"},i=void 0,p={unversionedId:"apis/open-api/login/login",id:"apis/open-api/login/login",title:"Taro.login(option)",description:"\u8c03\u7528\u63a5\u53e3\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1\uff08code\uff09\u3002\u901a\u8fc7\u51ed\u8bc1\u8fdb\u800c\u6362\u53d6\u7528\u6237\u767b\u5f55\u6001\u4fe1\u606f\uff0c\u5305\u62ec\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\uff08openid\uff09\u53ca\u672c\u6b21\u767b\u5f55\u7684\u4f1a\u8bdd\u5bc6\u94a5\uff08session_key\uff09\u7b49\u3002\u7528\u6237\u6570\u636e\u7684\u52a0\u89e3\u5bc6\u901a\u8baf\u9700\u8981\u4f9d\u8d56\u4f1a\u8bdd\u5bc6\u94a5\u5b8c\u6210\u3002\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8be6\u89c1 \u5c0f\u7a0b\u5e8f\u767b\u5f55\u3002",source:"@site/docs/apis/open-api/login/login.md",sourceDirName:"apis/open-api/login",slug:"/apis/open-api/login/",permalink:"/taro-docs/docs/next/apis/open-api/login/",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/open-api/login/login.md",tags:[],version:"current",frontMatter:{title:"Taro.login(option)",sidebar_label:"login"},sidebar:"API",previous:{title:"pluginLogin",permalink:"/taro-docs/docs/next/apis/open-api/login/pluginLogin"},next:{title:"checkSession",permalink:"/taro-docs/docs/next/apis/open-api/login/checkSession"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:s};function d(e){var{components:t}=e,o=l(e,["components"]);return(0,r.kt)("wrapper",a({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8c03\u7528\u63a5\u53e3\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1\uff08code\uff09\u3002\u901a\u8fc7\u51ed\u8bc1\u8fdb\u800c\u6362\u53d6\u7528\u6237\u767b\u5f55\u6001\u4fe1\u606f\uff0c\u5305\u62ec\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\uff08openid\uff09\u53ca\u672c\u6b21\u767b\u5f55\u7684\u4f1a\u8bdd\u5bc6\u94a5\uff08session_key\uff09\u7b49\u3002\u7528\u6237\u6570\u636e\u7684\u52a0\u89e3\u5bc6\u901a\u8baf\u9700\u8981\u4f9d\u8d56\u4f1a\u8bdd\u5bc6\u94a5\u5b8c\u6210\u3002\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8be6\u89c1 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html"}),"\u5c0f\u7a0b\u5e8f\u767b\u5f55"),"\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"complete"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"fail"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"timeout"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms")))),(0,r.kt)("h3",a({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"code"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7528\u6237\u767b\u5f55\u51ed\u8bc1\uff08\u6709\u6548\u671f\u4e94\u5206\u949f\uff09\u3002\u5f00\u53d1\u8005\u9700\u8981\u5728\u5f00\u53d1\u8005\u670d\u52a1\u5668\u540e\u53f0\u8c03\u7528 ",(0,r.kt)("a",a({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html"}),"auth.code2Session"),"\uff0c\u4f7f\u7528 code \u6362\u53d6 openid \u548c session_key \u7b49\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"errMsg"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8c03\u7528\u7ed3\u679c")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.login({\n  success: function (res) {\n    if (res.code) {\n      //\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\n      Taro.request({\n        url: 'https://test.com/onLogin',\n        data: {\n          code: res.code\n        }\n      })\n    } else {\n      console.log('\u767b\u5f55\u5931\u8d25\uff01' + res.errMsg)\n    }\n  }\n})\n")))}d.isMDXComponent=!0},80068:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},96636:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);