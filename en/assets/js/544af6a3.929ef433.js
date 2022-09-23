"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[25976],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,k=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28514:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Taro.getUserProfile(option)",sidebar_label:"getUserProfile"},i=void 0,s={unversionedId:"apis/open-api/user-info/getUserProfile",id:"version-3.x/apis/open-api/user-info/getUserProfile",title:"Taro.getUserProfile(option)",description:"Gets information about the user. The authorization dialog pops up with each request and returns userInfo when the user agrees.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/open-api/user-info/getUserProfile.md",sourceDirName:"apis/open-api/user-info",slug:"/apis/open-api/user-info/getUserProfile",permalink:"/taro-docs/en/docs/apis/open-api/user-info/getUserProfile",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/open-api/user-info/getUserProfile.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getUserProfile(option)",sidebar_label:"getUserProfile"},sidebar:"API",previous:{title:"getAccountInfoSync",permalink:"/taro-docs/en/docs/apis/open-api/account/getAccountInfoSync"},next:{title:"getUserInfo",permalink:"/taro-docs/en/docs/apis/open-api/user-info/getUserInfo"}},u={},c=[{value:"getUserProfile",id:"getuserprofile",level:2},{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2},{value:"Other",id:"other",level:2}],p={toc:c};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Gets information about the user. The authorization dialog pops up with each request and returns ",(0,r.kt)("inlineCode",{parentName:"p"},"userInfo")," when the user agrees."),(0,r.kt)("admonition",a({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"WeChat Foundation Library 2.10.4 started to support"),(0,r.kt)("p",{parentName:"admonition"},"Taro 2.2.17\uff0c3.0.29\uff0c3.1\uff0c3.2 already supported.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801"}),"WeChat adjustment background and instructions"))),(0,r.kt)("h2",a({},{id:"getuserprofile"}),"getUserProfile"),(0,r.kt)("p",null,"The user's personal information (avatar, nickname, gender and region) can be retrieved via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.getUserProfile")," interface. This interface is supported by WeChat since version ",(0,r.kt)("strong",{parentName:"p"},"2.10.4")," of the base library and returns only the user's personal information, not the user identifier. The desc attribute of this interface (declaring what the user's personal information will be used for) will be displayed in a pop-up window later, so please fill in the form carefully."),(0,r.kt)("p",null,"Each time a developer obtains personal information from a user through this interface, user confirmation is required, so please keep the user's quickly filled in avatar nickname safe to avoid repeated pop-ups."),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"lang"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"en" | "zh_CN" | "zh_TW"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The language of the displayed user information")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"desc"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"\u58f0\u660e\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u540e\u7684\u7528\u9014\uff0c\u4e0d\u8d85\u8fc7 30 \u4e2a\u5b57\u7b26")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",a({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"cloudID"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The Cloud ID corresponding to sensitive data. It is returned only in Mini Programs for which ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/wxcloud/basis/getting-started.html"},"Cloud Base")," is enabled. The open data can be directly obtained via cloud call. See ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#method-cloud"},"details"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"encryptedData"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The complete encrypted user data, including the sensitive data. For details, see ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#Encryption-Algorithm-for-Encrypted-Data"},"signature, verification, encryption, and decryption of user data"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"iv"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The initial vector of the encryption algorithm. For details, see ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#Encryption-Algorithm-for-Encrypted-Data"},"signature, verification, encryption, and decryption of user data"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"rawData"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Raw data string that excludes sensitive information and is used to calculate signatures.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"signature"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The string generated with SHA-1 (rawData + sessionkey), which is used to verify the user information. For details, see ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#Encryption-Algorithm-for-Encrypted-Data"},"signature, verification, encryption, and decryption of user data"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userInfo"),(0,r.kt)("td",null," UserInfo "),(0,r.kt)("td",null,"User information object, excluding openid and other sensitive information.")))),(0,r.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.getUserProfile({\n  desc: 'For completing member profiles',\n  success: (res) => {\n    this.setState({\n      userInfo: res.userInfo,\n      hasUserInfo: true\n    })\n  }\n})\n")),(0,r.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getUserProfile"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h2",a({},{id:"other"}),"Other"),(0,r.kt)("p",null,"issue : ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/8810"}),"Taro\u4ec0\u4e48\u65f6\u5019\u652f\u6301 getUserProfile \u65b9\u6cd5")))}d.isMDXComponent=!0}}]);