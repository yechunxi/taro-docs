"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[57637],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(v,c(c({ref:t},s),{},{components:r})):n.createElement(v,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25909:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],l={title:"Taro.onLocalServiceDiscoveryStop(callback)",sidebar_label:"onLocalServiceDiscoveryStop"},i=void 0,p={unversionedId:"apis/network/mdns/onLocalServiceDiscoveryStop",id:"apis/network/mdns/onLocalServiceDiscoveryStop",title:"Taro.onLocalServiceDiscoveryStop(callback)",description:"Listens on the mDNS service search stop event.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/network/mdns/onLocalServiceDiscoveryStop.md",sourceDirName:"apis/network/mdns",slug:"/apis/network/mdns/onLocalServiceDiscoveryStop",permalink:"/taro/en/docs/next/apis/network/mdns/onLocalServiceDiscoveryStop",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/network/mdns/onLocalServiceDiscoveryStop.md",tags:[],version:"current",frontMatter:{title:"Taro.onLocalServiceDiscoveryStop(callback)",sidebar_label:"onLocalServiceDiscoveryStop"},sidebar:"API",previous:{title:"onLocalServiceFound",permalink:"/taro/en/docs/next/apis/network/mdns/onLocalServiceFound"},next:{title:"offLocalServiceResolveFail",permalink:"/taro/en/docs/next/apis/network/mdns/offLocalServiceResolveFail"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Callback",id:"callback",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Listens on the mDNS service search stop event."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/mdns/wx.onLocalServiceDiscoveryStop.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"callback"},"Callback"),(0,a.kt)("p",null,"The callback function for the event that the mDNS service search stops."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: CallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"res"),(0,a.kt)("td",null,(0,a.kt)("code",null,"CallbackResult"))))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.onLocalServiceDiscoveryStop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);