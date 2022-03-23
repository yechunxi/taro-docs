"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[94184],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93543:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Implementation Details"},p=void 0,m={unversionedId:"implement-note",id:"implement-note",title:"Implementation Details",description:"This article will introduce some of the implementation details of Taro, drive developers to understand the specific functions of Taro related dependency packages, and give developers a better understanding of the Taro project.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/implement-note.md",sourceDirName:".",slug:"/implement-note",permalink:"/taro/en/docs/next/implement-note",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/implement-note.md",tags:[],version:"current",frontMatter:{title:"Implementation Details"},sidebar:"docs",previous:{title:"Single-step Debugging Configuration",permalink:"/taro/en/docs/next/debug-config"},next:{title:"Taro DOM Reference",permalink:"/taro/en/docs/next/taro-dom"}},s=[{value:"CLI",id:"cli",children:[],level:2},{value:"Mini Program",id:"mini-program",children:[{value:"Compile time",id:"compile-time",children:[],level:3}],level:2},{value:"Runtime",id:"runtime",children:[{value:"Platfrom Plugin",id:"platfrom-plugin",children:[],level:3}],level:2},{value:"H5",id:"h5",children:[{value:"Compile time",id:"compile-time-1",children:[],level:3},{value:"Component Library",id:"component-library",children:[],level:3},{value:"API",id:"api",children:[],level:3},{value:"Router",id:"router",children:[],level:3}],level:2},{value:"Typings",id:"typings",children:[],level:2},{value:"Reverse conversion",id:"reverse-conversion",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article will introduce some of the implementation details of Taro, drive developers to understand the specific functions of Taro related dependency packages, and give developers a better understanding of the Taro project."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Occasional updates."))),(0,i.kt)("h2",{id:"cli"},"CLI"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/cli")," is the Taro CLI tool, which is based on the plug-in kernel implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/service")," package."),(0,i.kt)("p",null,"The CLI is pre-mounted with a set of built-in plugins, each command and each build platform is a separate Taro plugin."),(0,i.kt)("h2",{id:"mini-program"},"Mini Program"),(0,i.kt)("h3",{id:"compile-time"},"Compile time"),(0,i.kt)("p",null,"When compiling mini program, the CLI calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner")," package. The ",(0,i.kt)("inlineCode",{parentName:"p"},"mini-runner")," mainly does these things."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It is responsible for adapting Webpack to the developer's ",(0,i.kt)("a",{parentName:"li",href:"./config"},"build configuration")," to adjust the Webpack configuration. 2."),(0,i.kt)("li",{parentName:"ol"},"Injects custom PostCSS plugins. (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"postcss-pxtransform"),")"),(0,i.kt)("li",{parentName:"ol"},"Inject custom Webpack plugins. 4."),(0,i.kt)("li",{parentName:"ol"},"Inject custom Webpack Loaders. (Loaders are located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/taro-loader")," package)"),(0,i.kt)("li",{parentName:"ol"},"Call Webpack to start the build."),(0,i.kt)("li",{parentName:"ol"},"Modify the Webpack build product to adjust the final build result.")),(0,i.kt)("h2",{id:"runtime"},"Runtime"),(0,i.kt)("p",null,"In order for frameworks like React, Vue, etc. to run directly on the mini program side, we need to ",(0,i.kt)("strong",{parentName:"p"},"emulate the browser environment")," in the logic layer of the mini program, including implementing the DOM, BOM API, etc."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/runtime")," is the core of Taro's runtime adapter, which implements a streamlined DOM, BOM API, event system, bridge layer for web framework and mini program framework, etc."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ReactDOM is large and contains a lot of compatibility code. So Taro has implemented a custom renderer instead of ReactDOM with react-reconciler, which is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/react")," package.")),(0,i.kt)("p",null,"At this point the web framework can render a Taro DOM tree using the Taro mockup API, but ",(0,i.kt)("strong",{parentName:"p"},"this all runs at the logic level of the mini program"),". How does Taro use a static template file to render a dynamic Taro DOM tree when the mini program xml template needs to be written dead ahead of time?"),(0,i.kt)("p",null,"Taro chose to take advantage of the fact that mini program ",(0,i.kt)("inlineCode",{parentName:"p"},"<template>"),"s can reference other ",(0,i.kt)("inlineCode",{parentName:"p"},"<templates>")," by rendering each DOM node of the Taro DOM tree as a ",(0,i.kt)("inlineCode",{parentName:"p"},"<template>"),". This is done by simply ",(0,i.kt)("inlineCode",{parentName:"p"},"setData"),"ing the serialized data of the Taro DOM tree, which triggers the cross-referencing of ",(0,i.kt)("inlineCode",{parentName:"p"},"<template>")," and renders the final UI."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The project's ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/base.xml")," file is a collection of these ",(0,i.kt)("inlineCode",{parentName:"p"},"<templates>"),".")),(0,i.kt)("h3",{id:"platfrom-plugin"},"Platfrom Plugin"),(0,i.kt)("p",null,"Taro internally supports 6 mini program platforms by default, since ",(0,i.kt)("a",{parentName:"p",href:"https://docs.taro.zone/blog/2021-03-10-taro-3-1-lts#1-%E5%BC%80%E6%94%BE%E5%BC%8F%E6%9E%B6%E6%9E%84"},"Taro v3.1")," support for each mini program platform is available as a Taro plugin."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-weapp"),"\tWechat mini program  plugin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-alipay"),"\tAlipay mini program  plugin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-swan"),"\tBaidu smart program  plugin "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-tt"),"\tByteDance mini program plugin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-qq"),"\tQQ mini program  plugin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-jd"),"\tJingdong mini program  plugin")),(0,i.kt)("p",null,"Platform plugins are platform specific and inject logic for compile-time and run-time respectively, see ",(0,i.kt)("a",{parentName:"p",href:"./platform-plugin"},"Platform Plug-ins Overview")," for details\u3002"),(0,i.kt)("h2",{id:"h5"},"H5"),(0,i.kt)("h3",{id:"compile-time-1"},"Compile time"),(0,i.kt)("p",null,"When compiling H5, the CLI calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," package. The ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-runner")," does these main things."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It is responsible for adjusting the Webpack configuration based on the developer's ",(0,i.kt)("a",{parentName:"li",href:"./config"},"compile configuration")," to adjust the Webpack configuration."),(0,i.kt)("li",{parentName:"ol"},"Injects custom PostCSS plugins. (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"postcss-pxtransform"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"postcss-plugin-constparse"),")"),(0,i.kt)("li",{parentName:"ol"},"Inject custom Webpack plugins."),(0,i.kt)("li",{parentName:"ol"},"Inject custom Webpack Loaders. (Loaders are located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/taro-loader")," package)"),(0,i.kt)("li",{parentName:"ol"},"Call Webpack to start the build."),(0,i.kt)("li",{parentName:"ol"},"Modify the Webpack build product to adjust the final build result.")),(0,i.kt)("h3",{id:"component-library"},"Component Library"),(0,i.kt)("p",null,"Taro implements a base component library on the H5 side that follows the WeChat mini program specification."),(0,i.kt)("p",null,"By default, the Web Components component library provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," is used."),(0,i.kt)("p",null,"When developing with React, developers can also use the ",(0,i.kt)("a",{parentName:"p",href:"./h5#react-compatible-components-library"},"compatibility component library"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/components-react")," will replace ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/components"),"."),(0,i.kt)("h3",{id:"api"},"API"),(0,i.kt)("p",null,"Developers refer to the Taro object from ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," and use the API it provides."),(0,i.kt)("p",null,"In H5 environments, ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," takes platform-independent APIs from ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/api")," and APIs that follow the mini program specification from ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/taro-h5"),", and finally aggregates them into a Taro object to expose to developers."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Developers typically call the API as ",(0,i.kt)("inlineCode",{parentName:"p"},"Taro.xxx"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-taroapi")," plugin converts this to ",(0,i.kt)("inlineCode",{parentName:"p"},"import { xxx } from '@tarojs/taro';")," and then calls it again to ensure that Tree Shaking takes effect.")),(0,i.kt)("h3",{id:"router"},"Router"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/router")," Implemented a routing library that follows the mini program specification."),(0,i.kt)("h2",{id:"typings"},"Typings"),(0,i.kt)("p",null,"Taro's Typings file is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/taro/types"),"."),(0,i.kt)("p",null,"Because the APIs for the various mini program are updated quickly, Typings are very much in need of community help to maintain them."),(0,i.kt)("h2",{id:"reverse-conversion"},"Reverse conversion"),(0,i.kt)("p",null,"Reverse conversion, native WeChat mini program conversion to Taro, currently supports conversion to React."),(0,i.kt)("p",null,"Reverse conversion is divided into two modules, compile-time and runtime, located in ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/taroize")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/with-weapp")," respectively."))}d.isMDXComponent=!0}}]);