"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[4520],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,d=s["".concat(p,".").concat(u)]||s[u]||f[u]||o;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94259:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"Label",sidebar_label:"Label"},p=void 0,c={unversionedId:"components/forms/label",id:"version-1.x/components/forms/label",title:"Label",description:"\u7528\u6765\u6539\u8fdb\u8868\u5355\u7ec4\u4ef6\u7684\u53ef\u7528\u6027\uff0c\u4f7f\u7528 for \u5c5e\u6027\u627e\u5230\u5bf9\u5e94\u7684 id\uff0c\u6216\u8005\u5c06\u63a7\u4ef6\u653e\u5728\u8be5\u6807\u7b7e\u4e0b\uff0c\u5f53\u70b9\u51fb\u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u5bf9\u5e94\u7684\u63a7\u4ef6\u3002for \u4f18\u5148\u7ea7\u9ad8\u4e8e\u5185\u90e8\u63a7\u4ef6\uff0c\u5185\u90e8\u6709\u591a\u4e2a\u63a7\u4ef6\u7684\u65f6\u5019\u9ed8\u8ba4\u89e6\u53d1\u7b2c\u4e00\u4e2a\u63a7\u4ef6\u3002",source:"@site/versioned_docs/version-1.x/components/forms/label.md",sourceDirName:"components/forms",slug:"/components/forms/label",permalink:"/taro/en/docs/1.x/components/forms/label",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-1.x/components/forms/label.md",tags:[],version:"1.x",frontMatter:{title:"Label",sidebar_label:"Label"},sidebar:"version-1.x/components",previous:{title:"Input",permalink:"/taro/en/docs/1.x/components/forms/input"},next:{title:"Picker",permalink:"/taro/en/docs/1.x/components/forms/picker"}},m=[{value:"\u7528\u6765\u6539\u8fdb\u8868\u5355\u7ec4\u4ef6\u7684\u53ef\u7528\u6027\uff0c\u4f7f\u7528 for \u5c5e\u6027\u627e\u5230\u5bf9\u5e94\u7684 id\uff0c\u6216\u8005\u5c06\u63a7\u4ef6\u653e\u5728\u8be5\u6807\u7b7e\u4e0b\uff0c\u5f53\u70b9\u51fb\u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u5bf9\u5e94\u7684\u63a7\u4ef6\u3002for \u4f18\u5148\u7ea7\u9ad8\u4e8e\u5185\u90e8\u63a7\u4ef6\uff0c\u5185\u90e8\u6709\u591a\u4e2a\u63a7\u4ef6\u7684\u65f6\u5019\u9ed8\u8ba4\u89e6\u53d1\u7b2c\u4e00\u4e2a\u63a7\u4ef6\u3002",id:"\u7528\u6765\u6539\u8fdb\u8868\u5355\u7ec4\u4ef6\u7684\u53ef\u7528\u6027\u4f7f\u7528-for-\u5c5e\u6027\u627e\u5230\u5bf9\u5e94\u7684-id\u6216\u8005\u5c06\u63a7\u4ef6\u653e\u5728\u8be5\u6807\u7b7e\u4e0b\u5f53\u70b9\u51fb\u65f6\u5c31\u4f1a\u89e6\u53d1\u5bf9\u5e94\u7684\u63a7\u4ef6for-\u4f18\u5148\u7ea7\u9ad8\u4e8e\u5185\u90e8\u63a7\u4ef6\u5185\u90e8\u6709\u591a\u4e2a\u63a7\u4ef6\u7684\u65f6\u5019\u9ed8\u8ba4\u89e6\u53d1\u7b2c\u4e00\u4e2a\u63a7\u4ef6",children:[],level:5}],f={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h5",{id:"\u7528\u6765\u6539\u8fdb\u8868\u5355\u7ec4\u4ef6\u7684\u53ef\u7528\u6027\u4f7f\u7528-for-\u5c5e\u6027\u627e\u5230\u5bf9\u5e94\u7684-id\u6216\u8005\u5c06\u63a7\u4ef6\u653e\u5728\u8be5\u6807\u7b7e\u4e0b\u5f53\u70b9\u51fb\u65f6\u5c31\u4f1a\u89e6\u53d1\u5bf9\u5e94\u7684\u63a7\u4ef6for-\u4f18\u5148\u7ea7\u9ad8\u4e8e\u5185\u90e8\u63a7\u4ef6\u5185\u90e8\u6709\u591a\u4e2a\u63a7\u4ef6\u7684\u65f6\u5019\u9ed8\u8ba4\u89e6\u53d1\u7b2c\u4e00\u4e2a\u63a7\u4ef6"},"\u7528\u6765\u6539\u8fdb\u8868\u5355\u7ec4\u4ef6\u7684\u53ef\u7528\u6027\uff0c\u4f7f\u7528 for \u5c5e\u6027\u627e\u5230\u5bf9\u5e94\u7684 id\uff0c\u6216\u8005\u5c06\u63a7\u4ef6\u653e\u5728\u8be5\u6807\u7b7e\u4e0b\uff0c\u5f53\u70b9\u51fb\u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u5bf9\u5e94\u7684\u63a7\u4ef6\u3002for \u4f18\u5148\u7ea7\u9ad8\u4e8e\u5185\u90e8\u63a7\u4ef6\uff0c\u5185\u90e8\u6709\u591a\u4e2a\u63a7\u4ef6\u7684\u65f6\u5019\u9ed8\u8ba4\u89e6\u53d1\u7b2c\u4e00\u4e2a\u63a7\u4ef6\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"for"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u7ed1\u5b9a\u63a7\u4ef6\u7684 id"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5404\u7aef\u652f\u6301\u5ea6")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5c5e\u6027"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"left"},"ReactNative"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"for"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:"left"},"x"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 Label \u7ec4\u4ef6\nimport { RadioGroup, Radio, Label } from '@tarojs/components'\n\nclass App extends Components {\n\n  render () {\n    return (\n      <RadioGroup>\n        <Label className='example-body__label' for='1' key='1'>\n          <Radio value='USA'>USA</Radio>\n        </Label>\n        <Label className='example-body__label' for='2' key='2'>\n          <Radio value='CHN' checked>\n          CHN\n          </Radio>\n        </Label>\n      </RadioGroup>\n    )\n  }\n}\n")))}s.isMDXComponent=!0}}]);