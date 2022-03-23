"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[70060],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69236:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],i={title:"\u5e38\u89c1\u95ee\u9898"},u=void 0,p={unversionedId:"specials",id:"specials",title:"\u5e38\u89c1\u95ee\u9898",description:"- Issue #46\uff0credux-saga \u7684\u5f15\u5165\u95ee\u9898\u5904\u7406",source:"@site/docs/specials.md",sourceDirName:".",slug:"/specials",permalink:"/taro/docs/next/specials",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/specials.md",tags:[],version:"current",frontMatter:{title:"\u5e38\u89c1\u95ee\u9898"}},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/46"},"Issue #46"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"redux-saga")," \u7684\u5f15\u5165\u95ee\u9898\u5904\u7406")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 H5 \u6a21\u5f0f\u4e0b\uff0ctabBar \u53ef\u80fd\u4f1a\u6321\u4f4f\u9875\u9762 fixed \u5143\u7d20\u95ee\u9898\uff1a\u8fd9\u662f\u56e0\u4e3a\u4e0e\u5c0f\u7a0b\u5e8f\u7684 tabBar \u4e0d\u540c\uff0c\u5728 H5 \u4e0b tabBar \u662f\u4e00\u4e2a\u666e\u901a\u7684\u7ec4\u4ef6\uff0c\u5f53\u9875\u9762\u4e2d\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"fixed(bottom)")," \u5b9a\u4f4d\u7684\u5143\u7d20\u65f6\uff0c\u5176\u8868\u73b0\u4f1a\u4e0e\u5c0f\u7a0b\u5e8f\u4e2d\u4e0d\u4e00\u81f4\u3002Taro \u63d0\u4f9b\u4e86\u4e00\u4e2a\u9002\u914d\u7684\u65b9\u6cd5\uff1a"))),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".fixed {\n  bottom: 0;\n  /* \u5728 H5 \u6a21\u5f0f\u4e0b\u5c06\u4f1a\u7f16\u8bd1\u6210 margin-bottom: 50px\uff0c\u5728\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\u4e0b\u5219\u4f1a\u5ffd\u7565 */\n  margin-bottom: taro-tabbar-height;\n}\n")))}f.isMDXComponent=!0}}]);