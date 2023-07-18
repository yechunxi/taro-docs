"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51518],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58193:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"React 18"},i=void 0,l={unversionedId:"react-18",id:"version-3.x/react-18",title:"React 18",description:"Taro v3.5 \u5f00\u59cb\u652f\u6301\u3002",source:"@site/versioned_docs/version-3.x/react-18.md",sourceDirName:".",slug:"/react-18",permalink:"/taro-docs/en/docs/react-18",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/react-18.md",tags:[],version:"3.x",frontMatter:{title:"React 18"},sidebar:"docs",previous:{title:"PReact",permalink:"/taro-docs/en/docs/preact"},next:{title:"Overview",permalink:"/taro-docs/en/docs/vue-overall"}},u={},p=[{value:"\u76f8\u5173\u8d44\u6599",id:"\u76f8\u5173\u8d44\u6599",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa\u65b0\u9879\u76ee",id:"\u521b\u5efa\u65b0\u9879\u76ee",level:3},{value:"\u65e7\u9879\u76ee\u5347\u7ea7",id:"\u65e7\u9879\u76ee\u5347\u7ea7",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],s={toc:p};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",a({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Taro v3.5 \u5f00\u59cb\u652f\u6301\u3002")),(0,n.kt)("p",null,"\u4ece Taro v3.5 \u5f00\u59cb\uff0cTaro \u5c06\u9ed8\u8ba4\u4f7f\u7528 React 18 \u7248\u672c\u3002\u4f60\u53ef\u4ee5\u5728 Taro \u4f7f\u7528 React18 \u4e2d\u6fc0\u52a8\u4eba\u5fc3\u7684\u65b0\u7279\u6027\u4e86\u3002"),(0,n.kt)("h3",a({},{id:"\u76f8\u5173\u8d44\u6599"}),"\u76f8\u5173\u8d44\u6599"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"https://reactjs.org/blog/2022/03/29/react-v18.html"}),"React v18.0"))),(0,n.kt)("h2",a({},{id:"\u4f7f\u7528\u65b9\u6cd5"}),"\u4f7f\u7528\u65b9\u6cd5"),(0,n.kt)("h3",a({},{id:"\u521b\u5efa\u65b0\u9879\u76ee"}),"\u521b\u5efa\u65b0\u9879\u76ee"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# @tarojs/cli \u5347\u7ea7\u5230 v3.5\n$ taro init myProject\n# \u9009\u62e9\u300creact\u300d\u6846\u67b6\n")),(0,n.kt)("h3",a({},{id:"\u65e7\u9879\u76ee\u5347\u7ea7"}),"\u65e7\u9879\u76ee\u5347\u7ea7"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-bash"}),'$ taro update project 3.5\n# \u9879\u76ee package.json \u4e2d react / react-dom \u7248\u672c\u5347\u7ea7\u4e3a "^18"\n')),(0,n.kt)("admonition",a({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5347\u7ea7\u4e86 Taro v3.5\uff0c\u4f46\u4e0d\u60f3\u4f7f\u7528 React v18\uff0c\u53ef\u4ee5\u5c06\u9879\u76ee ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d ",(0,n.kt)("inlineCode",{parentName:"p"},"react / react-dom")," \u7248\u672c\u964d\u7ea7\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"^17")," \u5e76\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u3002")),(0,n.kt)("h2",a({},{id:"\u6ce8\u610f\u4e8b\u9879"}),"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u65f6\uff0cWebpack4 \u6682\u4e0d\u652f\u6301\u4f7f\u7528 React18\uff0c",(0,n.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/12134#issuecomment-1197904281"}),"#12134"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9009\u62e9\u5347\u7ea7\u5230 React 18\uff0c\u90a3\u4e48\u9879\u76ee\u4e2d\u4f7f\u7528\u7684\u5176\u4ed6 React \u751f\u6001\u5e93\u540c\u6b65\u4e5f\u9700\u8981\u652f\u6301 React 18 \u7248\u672c\uff0c\u4ee5\u51cf\u5c11\u8fd0\u884c\u65f6\u95ee\u9898\uff0c\u6bd4\u5982 ",(0,n.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro-docs/issues/117"}),"issue 117"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u53d7\u5c0f\u7a0b\u5e8f\u73af\u5883\u9650\u5236\uff0c\u8bf8\u5982\u65b0 SSR Suspense \u7b49\u7279\u6027\u5c06\u4e0d\u80fd\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},"RN \u6682\u4e0d\u652f\u6301 React v18\uff0c\u9700\u8981\u7b49\u5f85 RN \u5b98\u65b9\u8f93\u51fa\u652f\u6301\u65b9\u6848\u3002")))}f.isMDXComponent=!0}}]);