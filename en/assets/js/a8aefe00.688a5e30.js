"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[39785],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=u(n),s=a,g=c["".concat(p,".").concat(s)]||c[s]||m[s]||i;return n?r.createElement(g,o(o({ref:e},d),{},{components:n})):r.createElement(g,o({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7235:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Taro.getAppAuthorizeSetting()",sidebar_label:"getAppAuthorizeSetting"},p=void 0,u={unversionedId:"apis/base/system/getAppAuthorizeSetting",id:"version-3.x/apis/base/system/getAppAuthorizeSetting",title:"Taro.getAppAuthorizeSetting()",description:"\u83b7\u53d6\u5fae\u4fe1APP\u6388\u6743\u8bbe\u7f6e",source:"@site/versioned_docs/version-3.x/apis/base/system/getAppAuthorizeSetting.md",sourceDirName:"apis/base/system",slug:"/apis/base/system/getAppAuthorizeSetting",permalink:"/taro/en/docs/apis/base/system/getAppAuthorizeSetting",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/base/system/getAppAuthorizeSetting.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getAppAuthorizeSetting()",sidebar_label:"getAppAuthorizeSetting"},sidebar:"API",previous:{title:"getAppBaseInfo",permalink:"/taro/en/docs/apis/base/system/getAppBaseInfo"},next:{title:"updateWeChatApp",permalink:"/taro/en/docs/apis/base/update/updateWeChatApp"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Result",id:"result",children:[],level:3},{value:"Authorized",id:"authorized",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],m={toc:d};function c(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u83b7\u53d6\u5fae\u4fe1APP\u6388\u6743\u8bbe\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"'authorized' \u8868\u793a\u5df2\u7ecf\u83b7\u5f97\u6388\u6743\uff0c\u65e0\u9700\u518d\u6b21\u8bf7\u6c42\u6388\u6743\uff1b"),(0,i.kt)("li",{parentName:"ul"},"'denied' \u8868\u793a\u8bf7\u6c42\u6388\u6743\u88ab\u62d2\u7edd\uff0c\u65e0\u6cd5\u518d\u6b21\u8bf7\u6c42\u6388\u6743\uff1b\uff08\u6b64\u60c5\u51b5\u9700\u8981\u5f15\u5bfc\u7528\u6237",(0,i.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html"},"\u6253\u5f00\u7cfb\u7edf\u8bbe\u7f6e"),"\uff0c\u5728\u8bbe\u7f6e\u9875\u4e2d\u6253\u5f00\u6743\u9650\uff09"),(0,i.kt)("li",{parentName:"ul"},"'non determined' \u8868\u793a\u5c1a\u672a\u8bf7\u6c42\u6388\u6743\uff0c\u4f1a\u5728\u5fae\u4fe1\u4e0b\u4e00\u6b21\u8c03\u7528\u7cfb\u7edf\u76f8\u5e94\u6743\u9650\u65f6\u8bf7\u6c42\uff1b\uff08\u4ec5 iOS \u4f1a\u51fa\u73b0\u3002\u6b64\u79cd\u60c5\u51b5\u4e0b\u5f15\u5bfc\u7528\u6237\u6253\u5f00\u7cfb\u7edf\u8bbe\u7f6e\uff0c\u4e0d\u5c55\u793a\u5f00\u5173\uff09")),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"H5: \u6682\u672a\u652f\u6301\u8bbe\u7f6e\u6743\u9650")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppAuthorizeSetting.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Result\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"albumAuthorized"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Authorized")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u76f8\u518c\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bluetoothAuthorized"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Authorized")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u84dd\u7259\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cameraAuthorized"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Authorized")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u6444\u50cf\u5934\u7684\u5f00\u5173")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"locationAuthorized"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Authorized")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u5b9a\u4f4d\u7684\u5f00\u5173")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"locationReducedAccuracy"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4f4d\u51c6\u786e\u5ea6\u3002true \u8868\u793a\u6a21\u7cca\u5b9a\u4f4d\uff0cfalse \u8868\u793a\u7cbe\u786e\u5b9a\u4f4d\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"microphoneAuthorized"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Authorized")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5fae\u4fe1\u4f7f\u7528\u9ea6\u514b\u98ce\u7684\u5f00\u5173")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"notificationAuthorized"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Authorized")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u7684\u5f00\u5173")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"notificationAlertAuthorized"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Authorized")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u63d0\u9192\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"notificationBadgeAuthorized"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Authorized")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u6807\u8bb0\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"notificationSoundAuthorized"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Authorized")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5fae\u4fe1\u901a\u77e5\u5e26\u6709\u58f0\u97f3\u7684\u5f00\u5173\uff08\u4ec5 iOS \u6709\u6548\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"phoneCalendarAuthorized"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Authorized")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5fae\u4fe1\u8bfb\u5199\u65e5\u5386\u7684\u5f00\u5173")))),(0,i.kt)("h3",{id:"authorized"},"Authorized"),(0,i.kt)("p",null,"\u6388\u6743\u5408\u6cd5\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authorized"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5df2\u7ecf\u83b7\u5f97\u6388\u6743\uff0c\u65e0\u9700\u518d\u6b21\u8bf7\u6c42\u6388\u6743")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"denied"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u8bf7\u6c42\u6388\u6743\u88ab\u62d2\u7edd\uff0c\u65e0\u6cd5\u518d\u6b21\u8bf7\u6c42\u6388\u6743 \uff08\u6b64\u60c5\u51b5\u9700\u8981\u5f15\u5bfc\u7528\u6237\u6253\u5f00",(0,i.kt)("a",{parentName:"td",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html"},"\u6253\u5f00\u7cfb\u7edf\u8bbe\u7f6e"),"\uff0c\u5728\u8bbe\u7f6e\u9875\u4e2d\u6253\u5f00\u6743\u9650\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"not determined"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5c1a\u672a\u8bf7\u6c42\u6388\u6743\uff0c\u4f1a\u5728\u5fae\u4fe1\u4e0b\u4e00\u6b21\u8c03\u7528\u7cfb\u7edf\u76f8\u5e94\u6743\u9650\u65f6\u8bf7\u6c42 \uff08\u4ec5 iOS \u4f1a\u51fa\u73b0\u3002\u6b64\u79cd\u60c5\u51b5\u4e0b\u5f15\u5bfc\u7528\u6237",(0,i.kt)("a",{parentName:"td",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html"},"\u6253\u5f00\u7cfb\u7edf\u8bbe\u7f6e"),"\uff0c\u4e0d\u5c55\u793a\u5f00\u5173\uff09")))),(0,i.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const appAuthorizeSetting = Taro.getAppAuthorizeSetting()\n\nconsole.log(appAuthorizeSetting.albumAuthorized)\nconsole.log(appAuthorizeSetting.bluetoothAuthorized)\nconsole.log(appAuthorizeSetting.cameraAuthorized)\nconsole.log(appAuthorizeSetting.locationAuthorized)\nconsole.log(appAuthorizeSetting.locationReducedAccuracy)\nconsole.log(appAuthorizeSetting.microphoneAuthorized)\nconsole.log(appAuthorizeSetting.notificationAlertAuthorized)\nconsole.log(appAuthorizeSetting.notificationAuthorized)\nconsole.log(appAuthorizeSetting.notificationBadgeAuthorized)\nconsole.log(appAuthorizeSetting.notificationSoundAuthorized)\nconsole.log(appAuthorizeSetting.phoneCalendarAuthorized)\n")))}c.isMDXComponent=!0},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);