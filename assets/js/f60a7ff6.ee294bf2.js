"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[7818],{79874:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),y=a,d=f["".concat(s,".").concat(y)]||f[y]||u[y]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25288:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"\u5f02\u6b65\u7f16\u7a0b"},c=void 0,s={unversionedId:"async-await",id:"version-1.x/async-await",title:"\u5f02\u6b65\u7f16\u7a0b",description:"Taro \u652f\u6301\u4f7f\u7528 async functions \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f async functions \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 @tarojs/async-await",source:"@site/versioned_docs/version-1.x/async-await.md",sourceDirName:".",slug:"/async-await",permalink:"/taro-docs/docs/1.x/async-await",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/async-await.md",tags:[],version:"1.x",frontMatter:{title:"\u5f02\u6b65\u7f16\u7a0b"},sidebar:"version-1.x/docs",previous:{title:"\u57fa\u4e8e Taro \u5f00\u53d1\u7b2c\u4e09\u65b9\u591a\u7aef UI \u5e93",permalink:"/taro-docs/docs/1.x/ui-lib"},next:{title:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u539f\u751f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u548c\u63d2\u4ef6",permalink:"/taro-docs/docs/1.x/mini-third-party"}},p={},l=[],u={toc:l};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro \u652f\u6301\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"async functions")," \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"async functions")," \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/async-await")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ yarn add @tarojs/async-await\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install --save @tarojs/async-await\n")),(0,r.kt)("p",null,"\u968f\u540e\u5728\u9879\u76ee\u5165\u53e3\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u76f4\u63a5 ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," \uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"async functions")," \u529f\u80fd\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-javascript"}),"// src/app.js\nimport '@tarojs/async-await'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u503c\u5f97\u6ce8\u610f\u7684\u4e8b\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/async-await")," \u4e00\u5b9a\u8981\u8bb0\u5f97\u6309\u7167",(0,r.kt)("a",a({parentName:"p"},{href:"/taro-docs/docs/1.x/before-dev-remind"}),"\u5f00\u53d1\u524d\u6ce8\u610f"),"\u4e2d\u63d0\u793a\u7684\u5185\u5bb9\u8fdb\u884c\u64cd\u4f5c\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u62a5\u9519")))}f.isMDXComponent=!0}}]);