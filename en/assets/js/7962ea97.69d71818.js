"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[49109],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=d(n),p=l,m=s["".concat(i,".").concat(p)]||s[p]||k[p]||a;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,o[1]=u;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},16830:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(93106),l=n(4706),a="tabItem_xXVp";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u({children:t,hidden:e,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,l.Z)(a,n)},{hidden:e}),t)}},27164:function(t,e,n){n.d(e,{Z:function(){return x}});var r=n(93106),l=n(4706),a=n(93741),o=n(24755),u=n(36196),i=n(53964),d=n(40898);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t){return function(t){var e,n;return null!==(n=null===(e=r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==n?n:[]}(t).map((({props:{value:t,label:e,attributes:n,default:r}})=>({value:t,label:e,attributes:n,default:r})))}function s(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=null!=e?e:k(n);return function(t){const e=(0,i.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p({value:t,tabValues:e}){return e.some((e=>e.value===t))}function m({queryString:t=!1,groupId:e}){const n=(0,o.k6)(),l=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),a=(0,u._X)(l),i=(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){c(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[l,n]);return[a,i]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,a=s(t),[o,u]=(0,r.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const r=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:a}))),[i,c]=m({queryString:n,groupId:l}),[k,g]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,l]=(0,d.Nk)(e);return[n,(0,r.useCallback)((t=>{e&&l.set(t)}),[e,l])]}({groupId:l}),h=(()=>{const t=null!=i?i:k;return p({value:t,tabValues:a})?t:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!p({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);u(t),c(t),g(t)}),[c,g,a]),tabValues:a}}var h=n(43751),N="tabList_ulmA",y="tabItem_Zt3y";function v(){return v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},v.apply(this,arguments)}function b({className:t,block:e,selectedValue:n,selectValue:o,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=t=>{const e=t.currentTarget,r=i.indexOf(e),l=u[r].value;l!==n&&(d(e),o(l))},k=t=>{let e=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":{const r=i.indexOf(t.currentTarget)+1;var n;e=null!==(n=i[r])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(t.currentTarget)-1;var r;e=null!==(r=i[n])&&void 0!==r?r:i[i.length-1];break}}null==e||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":e},t)},u.map((({value:t,label:e,attributes:a})=>r.createElement("li",v({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>i.push(t),onKeyDown:k,onClick:c},a,{className:(0,l.Z)("tabs__item",y,null==a?void 0:a.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function f({lazy:t,children:e,selectedValue:n}){const l=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=l.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function P(t){const e=g(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",N)},r.createElement(b,v({},t,e)),r.createElement(f,v({},t,e)))}function x(t){const e=(0,h.Z)();return r.createElement(P,v({key:String(e)},t))}},82028:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874),l=n(27164),a=n(16830);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const i={title:"LivePusher",sidebar_label:"LivePusher"},d=void 0,c={unversionedId:"components/media/live-pusher",id:"version-3.x/components/media/live-pusher",title:"LivePusher",description:"Real-time audio/video recording. User Authorization is required for scope.camera and scope.record.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/media/live-pusher.md",sourceDirName:"components/media",slug:"/components/media/live-pusher",permalink:"/taro-docs/en/docs/components/media/live-pusher",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/media/live-pusher.md",tags:[],version:"3.x",frontMatter:{title:"LivePusher",sidebar_label:"LivePusher"},sidebar:"components",previous:{title:"LivePlayer",permalink:"/taro-docs/en/docs/components/media/live-player"},next:{title:"Lottie",permalink:"/taro-docs/en/docs/components/media/lottie"}},k={},s=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"LivePusherProps",id:"livepusherprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"orientation",id:"orientation",level:3},{value:"localMirror",id:"localmirror",level:3},{value:"audioReverbType",id:"audioreverbtype",level:3},{value:"audioVolumeType",id:"audiovolumetype",level:3},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",level:3},{value:"onNetstatusEventDetail",id:"onnetstatuseventdetail",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:3},{value:"onBgmProgressEventDetail",id:"onbgmprogresseventdetail",level:3},{value:"API Support",id:"api-support",level:2}],p={toc:s};function m(t){var{components:e}=t,n=u(t,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Real-time audio/video recording. User Authorization is required for ",(0,r.kt)("inlineCode",{parentName:"p"},"scope.camera")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scope.record"),"."),(0,r.kt)("p",null,"Currently, it is open only to Mini Programs in the following categories owned by Chinese entities. The component needs to pass the category review, and then on the Mini Program Console, you can activate the permissions for this component by choosing ",(0,r.kt)("strong",{parentName:"p"},"Development > API Settings"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/live-pusher.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<LivePusherProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <LivePusher url='url' mode='RTC' autopush  />\n    )\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <live-pusher url="url" mode="RTC" :autopush="true"  />\n</template>\n')))),(0,r.kt)("h2",o({},{id:"livepusherprops"}),"LivePusherProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"url"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The stream pushing address. Only `flv` and `rtmp` formats are supported. ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"mode"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"SD" | "HD" | "FHD" | "RTC"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"RTC"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Values include ",(0,r.kt)("code",null,"SD")," (Standard definition), ",(0,r.kt)("code",null,"HD")," (High definition), ",(0,r.kt)("code",null,"FHD")," (Full high definition), and ",(0,r.kt)("code",null,"RTC")," (Real-time call).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"autopush"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Auto stream pushing.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"muted"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to mute the component.",(0,r.kt)("br",null),(0,r.kt)("strong",null,"Not recommend"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"enableCamera"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"true")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Enables the camera.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"autoFocus"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"true")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Auto focusing.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"orientation"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"vertical" | "horizontal"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"vertical"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The orientation of the image.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"beauty"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Beautifying. Values range from 0 to 9. 0 indicates disabled.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"whiteness"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Whitening. Values range from 0 to 9. 0 indicates disabled.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"aspect"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"9:16" | "3:4"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"9:16"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The aspect ratio. Available values include ",(0,r.kt)("code",null,"3:4")," and ",(0,r.kt)("code",null,"9:16"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"minBitrate"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"200")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The minimum bitrate.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"maxBitrate"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"1000")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The maximum bitrate.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"audioQuality"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"high"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,'High quality (48KHz) or low quality (16KHz). Values include "high" and "low".')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"waitingImage"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The waiting image for stream pushing when the component enters the background.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"waitingImageHash"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The MD5 value of resources on the waiting image.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"zoom"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Adjusts the focal length.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"devicePosition"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"front"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Front or back. Values include ",(0,r.kt)("code",null,"front")," and ",(0,r.kt)("code",null,"back"),". ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"backgroundMute"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to mute the component after the component enters the background.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"mirror"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to mirror the stream pushing image. The effects are reflected in live-player.",(0,r.kt)("br",null),(0,r.kt)("strong",null,"Not recommended."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"remoteMirror"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to mirror the  pushstream screen. ",(0,r.kt)("br",null),(0,r.kt)("strong",null,"Note:")," Same as attribute mirror, Plan to dispose of mirror")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"localMirror"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"auto" | "enable" | "disable"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"auto"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to mirror the local preview image.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"audioReverbType"),(0,r.kt)("td",null,(0,r.kt)("code",null,"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Audio reverberation types.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"enableMic"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"true")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Turning the microphone on or off")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"enableAgc"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to turn on audio auto gain.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"enableAns"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to turn on audio noise suppression")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"audioVolumeType"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"media" | "voicecall"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"voicecall"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Volume type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"videoWidth"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"360")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The resolution width of the video stream pushed up")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"videoHeight"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"640")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The resolution height of the video stream pushed up")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onStateChange"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The status change event. detail = ","{code}")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onNetstatus"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onNetstatusEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The notification of the network status. detail = ","{info}")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onError"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The rendering error event. detail = ","{errMsg, errCode}")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onBgmStart"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<any>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the background music starts playing.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onBgmProgress"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onBgmProgressEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the progress of the background music changes. detail = ","{progress, duration}")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onBgmComplete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<any>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the background music stops playing.")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.url"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.mode"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.autopush"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.muted"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.enableCamera"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.autoFocus"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.orientation"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.beauty"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.whiteness"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.aspect"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.minBitrate"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.maxBitrate"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.audioQuality"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.waitingImage"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.waitingImageHash"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.zoom"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.devicePosition"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.backgroundMute"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.mirror"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.remoteMirror"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.localMirror"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.audioReverbType"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.enableMic"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.enableAgc"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.enableAns"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.audioVolumeType"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.videoWidth"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.videoHeight"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.onStateChange"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.onNetstatus"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.onError"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.onBgmStart"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.onBgmProgress"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusherProps.onBgmComplete"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"orientation"}),"orientation"),(0,r.kt)("p",null,"Valid values of orientation"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"vertical"),(0,r.kt)("td",null,"Vertical")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"horizontal"),(0,r.kt)("td",null,"Horizontal")))),(0,r.kt)("h3",o({},{id:"localmirror"}),"localMirror"),(0,r.kt)("p",null,"Valid values of localMirror"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"auto"),(0,r.kt)("td",null,"Front camera mirroring, rear camera not mirroring")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"enable"),(0,r.kt)("td",null,"Both front and rear cameras mirrored")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"disable"),(0,r.kt)("td",null,"Neither the front nor the rear camera is mirrored")))),(0,r.kt)("h3",o({},{id:"audioreverbtype"}),"audioReverbType"),(0,r.kt)("p",null,"Valid values of audioReverbType"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"Off")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"KTV")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"Small room")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"Assembly Hall")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"The muffled")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"Loud and clear")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"Metallic sound")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"Magnetic")))),(0,r.kt)("h3",o({},{id:"audiovolumetype"}),"audioVolumeType"),(0,r.kt)("p",null,"Valid values of audioVolumeType"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"media"),(0,r.kt)("td",null,"Media volume")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"voicecall"),(0,r.kt)("td",null,"Call volume")))),(0,r.kt)("h3",o({},{id:"onstatechangeeventdetail"}),"onStateChangeEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"code"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Status Code")))),(0,r.kt)("h3",o({},{id:"onnetstatuseventdetail"}),"onNetstatusEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"info"),(0,r.kt)("td",null,(0,r.kt)("code",null,"netStatus")),(0,r.kt)("td",null,"Network Status")))),(0,r.kt)("h3",o({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Error message")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errCode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string | number")),(0,r.kt)("td",null,"Error code")))),(0,r.kt)("h3",o({},{id:"onbgmprogresseventdetail"}),"onBgmProgressEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"progress"),(0,r.kt)("td",null,(0,r.kt)("code",null,"any")),(0,r.kt)("td",null,"Progress")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"duration"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Duration")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePusher"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);