"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[49869],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),v=a,m=s["".concat(c,".").concat(v)]||s[v]||u[v]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},60784:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},c=void 0,p={unversionedId:"apis/device/deviceMotion/onDeviceMotionChange",id:"version-1.x/apis/device/deviceMotion/onDeviceMotionChange",title:"Taro.onDeviceMotionChange(callback)",description:"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e wx.startDeviceMotionListeningListening() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 wx.stopDeviceMotionListeningListening() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-1.x/apis/device/deviceMotion/onDeviceMotionChange.md",sourceDirName:"apis/device/deviceMotion",slug:"/apis/device/deviceMotion/onDeviceMotionChange",permalink:"/taro/docs/1.x/apis/device/deviceMotion/onDeviceMotionChange",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-1.x/apis/device/deviceMotion/onDeviceMotionChange.md",tags:[],version:"1.x",frontMatter:{title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},sidebar:"version-1.x/API",previous:{title:"stopDeviceMotionListening",permalink:"/taro/docs/1.x/apis/device/deviceMotion/stopDeviceMotionListening"},next:{title:"closeBluetoothAdapter",permalink:"/taro/docs/1.x/apis/device/bluetooth/closeBluetoothAdapter"}},d=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"callback(res)",id:"callbackres",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570-1",children:[{value:"object res",id:"object-res",children:[],level:5}],level:4}],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e wx.startDeviceMotionListeningListening() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 wx.stopDeviceMotionListeningListening() \u505c\u6b62\u76d1\u542c\u3002"),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("h3",{id:"callbackres"},"callback(res)"),(0,i.kt)("p",null,"\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570\u3002"),(0,i.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,i.kt)("h5",{id:"object-res"},"object res"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alpha"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53\u624b\u673a\u5750\u6807 X/Y \u548c \u5730\u7403 X/Y \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 Z \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a alpha\uff0c\u8303\u56f4\u503c\u4e3a [0, 2*PI)\u3002\u9006\u65f6\u9488\u8f6c\u52a8\u4e3a\u6b63\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"beta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53\u624b\u673a\u5750\u6807 Y/Z \u548c\u5730\u7403 Y/Z \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 X \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a beta\u3002\u8303\u56f4\u503c\u4e3a [-1*PI, PI) \u3002\u9876\u90e8\u671d\u7740\u5730\u7403\u8868\u9762\u8f6c\u52a8\u4e3a\u6b63\u3002\u4e5f\u6709\u53ef\u80fd\u671d\u7740\u7528\u6237\u4e3a\u6b63\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gamma"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53\u624b\u673a X/Z \u548c\u5730\u7403 X/Z \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 Y \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a gamma\u3002\u8303\u56f4\u503c\u4e3a [-1*PI/2, PI/2)\u3002\u53f3\u8fb9\u671d\u7740\u5730\u7403\u8868\u9762\u8f6c\u52a8\u4e3a\u6b63\u3002")))),(0,i.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Taro.onDeviceMotionChange"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);