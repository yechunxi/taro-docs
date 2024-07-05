"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[74635],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72069:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={slug:"2020-02-13-taro-next-alpha",title:"Taro Next \u53d1\u5e03\u9884\u89c8\u7248\uff1a\u540c\u65f6\u652f\u6301 React / Vue / Nerv",authors:"yuche"},i=void 0,u={permalink:"/taro-docs/blog/2020-02-13-taro-next-alpha",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2020-02-13-taro-next-alpha.md",source:"@site/blog/2020-02-13-taro-next-alpha.md",title:"Taro Next \u53d1\u5e03\u9884\u89c8\u7248\uff1a\u540c\u65f6\u652f\u6301 React / Vue / Nerv",description:"image",date:"2020-02-13T00:00:00.000Z",formattedDate:"2020\u5e742\u670813\u65e5",tags:[],readingTime:7.695,hasTruncateMarker:!0,authors:[{name:"yuche",title:"Taro \u8363\u8a89\u6280\u672f\u59d4\u5458\u4f1a\u4e3b\u5e2d",url:"https://github.com/yuche",imageURL:"https://static.geekbang.org/ck/5cb53de0e50c0.jpeg?imageView2/0/w/800",key:"yuche"}],frontMatter:{slug:"2020-02-13-taro-next-alpha",title:"Taro Next \u53d1\u5e03\u9884\u89c8\u7248\uff1a\u540c\u65f6\u652f\u6301 React / Vue / Nerv",authors:"yuche"},prevItem:{title:"Taro Next H5 \u8de8\u6846\u67b6\u7ec4\u4ef6\u5e93\u5b9e\u8df5",permalink:"/taro-docs/blog/2020-4-13-taro-components"},nextItem:{title:"Taro 2.0\uff1a\u62e5\u62b1\u793e\u533a\uff0c\u62e5\u62b1\u53d8\u5316",permalink:"/taro-docs/blog/2020-01-08-taro-2-0"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://img14.360buyimg.com/ling/jfs/t1/103557/3/12087/1051626/5e44b357E4cab8765/d8c821c4a3e1060d.png",alt:"image"}))),(0,n.kt)("p",null,"\u81ea Taro 2.0 \u8d77\uff0c\u6211\u4eec\u5c06\u4f1a\u542f\u52a8\u5bf9\u6574\u4e2a Taro \u7cfb\u7edf\u67b6\u6784\u7684\u9769\u65b0\uff0c\u8fd9\u6b21\u9769\u65b0\u6211\u4eec\u5c06\u5176\u79f0\u4e4b\u4e3a Taro Next\u3002Taro Next \u9769\u65b0\u5b8c\u6210\u4e4b\u540e\uff0cTaro \u672c\u8eab\u7684\u62d3\u5c55\u6027\u3001\u7a33\u5b9a\u6027\u3001\u53ef\u7ef4\u62a4\u6027\u90fd\u4f1a\u5927\u5e45\u63d0\u9ad8\uff0c\u76f8\u5e94\u5730\uff0c\u4f7f\u7528 Taro \u7684\u5f00\u53d1\u8005\u4e5f\u4f1a\u83b7\u5f97\u66f4\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\uff0c\u964d\u4f4e\u66f4\u591a\u5f00\u53d1\u6210\u672c\u548c\u5b66\u4e60\u6210\u672c\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u76ee\u524d\u5df2\u7ecf\u5b8c\u6210\u4e86",(0,n.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u7cfb\u7edf\u548c\u5c0f\u7a0b\u5e8f\u7aef\u7684\u91cd\u6784"),"\uff0c\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"npm i -g @tarojs/cli@next")," \u5b89\u88c5 Taro CLI \u9884\u89c8\uff08alpha\uff09\u7248\u4e4b\u540e\uff0c\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"taro init")," \u521b\u5efa\u65b0\u9879\u76ee\u5373\u53ef\u4f53\u9a8c Taro Next \u7684\u65b0\u7279\u6027\u3002"))}f.isMDXComponent=!0}}]);