"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[89579],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,v=f["".concat(i,".").concat(d)]||f[d]||u[d]||c;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58659:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(83117),a=n(80102),c=(n(67294),n(3905)),o=["components"],l={title:"OffscreenCanvas",sidebar_label:"OffscreenCanvas"},i=void 0,s={unversionedId:"apis/canvas/OffscreenCanvas",id:"version-2.x/apis/canvas/OffscreenCanvas",title:"OffscreenCanvas",description:"\u79bb\u5c4f canvas \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createOffscreenCanvas \u521b\u5efa\u3002",source:"@site/versioned_docs/version-2.x/apis/canvas/OffscreenCanvas.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/OffscreenCanvas",permalink:"/taro/en/docs/2.x/apis/canvas/OffscreenCanvas",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/apis/canvas/OffscreenCanvas.md",tags:[],version:"2.x",frontMatter:{title:"OffscreenCanvas",sidebar_label:"OffscreenCanvas"},sidebar:"version-2.x/API",previous:{title:"ImageData",permalink:"/taro/en/docs/2.x/apis/canvas/ImageData"},next:{title:"RenderingContext",permalink:"/taro/en/docs/2.x/apis/canvas/RenderingContext"}},p=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"getContext",id:"getcontext",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:4}],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u79bb\u5c4f canvas \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createOffscreenCanvas \u521b\u5efa\u3002"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.html"},"\u53c2\u8003\u6587\u6863"))),(0,c.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,c.kt)("h3",{id:"getcontext"},"getContext"),(0,c.kt)("p",null,"\u8be5\u65b9\u6cd5\u8fd4\u56de OffscreenCanvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587"),(0,c.kt)("hr",null),(0,c.kt)("p",null,"\u5f53\u524d\u4ec5\u652f\u6301\u83b7\u53d6 WebGL \u7ed8\u56fe\u4e0a\u4e0b\u6587"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"(contextType: string) => RenderingContext\n")),(0,c.kt)("table",null,(0,c.kt)("thead",null,(0,c.kt)("tr",null,(0,c.kt)("th",null,"\u53c2\u6570"),(0,c.kt)("th",null,"\u7c7b\u578b"))),(0,c.kt)("tbody",null,(0,c.kt)("tr",null,(0,c.kt)("td",null,"contextType"),(0,c.kt)("td",null,(0,c.kt)("code",null,"string"))))),(0,c.kt)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"center"},"API"),(0,c.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,c.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,c.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"OffscreenCanvas.getContext"),(0,c.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,c.kt)("td",{parentName:"tr",align:"center"}),(0,c.kt)("td",{parentName:"tr",align:"center"})))),(0,c.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"center"},"API"),(0,c.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,c.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,c.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"OffscreenCanvas.getContext"),(0,c.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,c.kt)("td",{parentName:"tr",align:"center"}),(0,c.kt)("td",{parentName:"tr",align:"center"})))))}f.isMDXComponent=!0}}]);