"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[81713],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),u=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),s=a,b=d["".concat(g,".").concat(s)]||d[s]||p[s]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48046:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return g},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),o=["components"],i={title:"Taro.getLogManager(res)",sidebar_label:"getLogManager"},g=void 0,u={unversionedId:"apis/base/debug/getLogManager",id:"version-2.x/apis/base/debug/getLogManager",title:"Taro.getLogManager(res)",description:"\u83b7\u53d6\u65e5\u5fd7\u7ba1\u7406\u5668\u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-2.x/apis/base/debug/getLogManager.md",sourceDirName:"apis/base/debug",slug:"/apis/base/debug/getLogManager",permalink:"/taro/docs/2.x/apis/base/debug/getLogManager",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/apis/base/debug/getLogManager.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getLogManager(res)",sidebar_label:"getLogManager"},sidebar:"version-2.x/API",previous:{title:"getRealtimeLogManager",permalink:"/taro/docs/2.x/apis/base/debug/getRealtimeLogManager"},next:{title:"LogManager",permalink:"/taro/docs/2.x/apis/base/debug/LogManager"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"level",id:"level",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u83b7\u53d6\u65e5\u5fd7\u7ba1\u7406\u5668\u5bf9\u8c61\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(res?: Option) => LogManager\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"level"),(0,l.kt)("td",null,(0,l.kt)("code",null,"0 | 1")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426")))),(0,l.kt)("h3",{id:"level"},"level"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"0"),(0,l.kt)("td",null,"\u8868\u793a\u4f1a\u628a App\u3001Page \u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u548c wx \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u51fd\u6570\u8c03\u7528\u5199\u5165\u65e5\u5fd7")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"\u8868\u793a\u4e0d\u4f1a\u628a App\u3001Page \u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u548c wx \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u51fd\u6570\u8c03\u7528\u5199\u5165\u65e5\u5fd7")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const logger = Taro.getLogManager({level: 1})\n\nlogger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])\nlogger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])\nlogger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])\nlogger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.getLogManager"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);