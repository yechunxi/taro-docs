"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[80385],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),c=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(n),m=r,g=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return p}});var a=n(83117),r=n(67294),l=n(72389),i=n(24726),o=n(86010),d="tabItem_LplD";function c(t){var e,n,l,c=t.lazy,p=t.block,u=t.defaultValue,s=t.values,m=t.groupId,g=t.className,k=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=s?s:k.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,i.lx)(h,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===u?u:null!=(e=null!=u?u:null==(n=k.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=k[0])?void 0:l.props.value;if(null!==y&&!h.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),b=N.tabGroupChoices,v=N.setTabGroupChoices,w=(0,r.useState)(y),x=w[0],P=w[1],A=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=b[m];null!=I&&I!==x&&h.some((function(t){return t.value===I}))&&P(I)}var E=function(t){var e=t.currentTarget,n=A.indexOf(e),a=h[n].value;a!==x&&(T(e),P(a),null!=m&&v(m,a))},O=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=A.indexOf(t.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var r=A.indexOf(t.currentTarget)-1;n=A[r]||A[A.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},g)},h.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return A.push(t)},onKeyDown:O,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),c?(0,r.cloneElement)(k.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function p(t){var e=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}},68563:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(9877),o=n(58215),d=["components"],c={title:"Image",sidebar_label:"Image"},p=void 0,u={unversionedId:"components/media/image",id:"components/media/image",title:"Image",description:"Image. This component supports JPG, PNG, and SVG images. Cloud file IDs are supported from 2.3.0 and later.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/media/image.md",sourceDirName:"components/media",slug:"/components/media/image",permalink:"/taro/en/docs/next/components/media/image",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/components/media/image.md",tags:[],version:"current",frontMatter:{title:"Image",sidebar_label:"Image"},sidebar:"components",previous:{title:"Audio",permalink:"/taro/en/docs/next/components/media/audio"},next:{title:"LivePlayer",permalink:"/taro/en/docs/next/components/media/live-player"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"ImageProps",id:"imageprops",children:[{value:"Property Support",id:"property-support",children:[],level:3},{value:"mode",id:"mode",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],m={toc:s};function g(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Image. This component supports JPG, PNG, and SVG images. Cloud file IDs are supported from 2.3.0 and later."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," To implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"mode")," feature of the mini program, a ",(0,l.kt)("inlineCode",{parentName:"p"},"div")," container is used in the H5 component to corp the display area of the internal ",(0,l.kt)("inlineCode",{parentName:"p"},"img"),", so please do not use the element selector to reset the style of the ",(0,l.kt)("inlineCode",{parentName:"p"},"img"),"! "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/image.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<ImageProps>\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Image\n          style='width: 300px;height: 100px;background: #fff;'\n          src='nerv_logo.png'\n        />\n        <Image\n          style='width: 300px;height: 100px;background: #fff;'\n          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'\n        />\n      </View>\n    )\n  }\n}\n"))),(0,l.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <image\n      style="width: 300px;height: 100px;background: #fff;"\n      src="nerv_logo.png"\n    />\n    <image\n      style="width: 300px;height: 100px;background: #fff;"\n      src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"\n    />\n  </view>\n</template>\n')))),(0,l.kt)("h2",{id:"imageprops"},"ImageProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The image resource address")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"scaleToFill" | "aspectFit" | "aspectFill" | "widthFix" | "heightFix" | "top" | "bottom" | "center" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"scaleToFill"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the clipping mode or the scale mode of an image")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"webp"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"WebP format is not parsed by default, only web resources are supported.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"lazyLoad"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Enables lazy loading of images. An image is not loaded until it enters a specific range (within three consecutive screens).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"showMenuByLongpress"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Enables the feature of displaying the Mini Program code menu when an image is tapped and held.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when an error occurs. event.detail = ","{errMsg}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onLoad"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onLoadEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when an image is completely loaded. event.detail = ","{height, width}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"imgProps"),(0,l.kt)("td",null,(0,l.kt)("code",null,"ImgHTMLAttributes<HTMLImageElement>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Additional attributes for `img` tags")))),(0,l.kt)("h3",{id:"property-support"},"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.src"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.mode"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f(Partial support scaleToFill, aspectFit, aspectFill, widthFix)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.webp"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.lazyLoad"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.showMenuByLongpress"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.onError"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.onLoad"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ImageProps.imgProps"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("p",null,"Valid values of mode"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"scaleToFill"),(0,l.kt)("td",null,"A scale mode, where the image is scaled without maintaining the aspect ratio to fully stretch to fill the screen with elements of the image.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"aspectFit"),(0,l.kt)("td",null,"A scale mode, where the image is scaled with the aspect ratio unchanged to fully display its longer edge. In this case, the image can be completely displayed.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"aspectFill"),(0,l.kt)("td",null,"A scale mode, where the image is scaled with the aspect ratio unchanged to fully display its shorter edge. In this case, the image is completely displayed in the horizontal or vertical direction, and it is truncated in the other direction.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"widthFix"),(0,l.kt)("td",null,"A scale mode, where the width of the image remains unchanged with the height adjusted automatically, and the aspect ratio of the original image is maintained.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"heightFix"),(0,l.kt)("td",null,"A scale mode, where the height of the image remains unchanged with the width adjusted automatically, and the aspect ratio of the original image is maintained.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"top"),(0,l.kt)("td",null,"A clipping mode, where only the upper area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bottom"),(0,l.kt)("td",null,"A clipping mode, where only the lower area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"center"),(0,l.kt)("td",null,"A clipping mode, where only the central area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"left"),(0,l.kt)("td",null,"A clipping mode, where only the left area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"right"),(0,l.kt)("td",null,"A clipping mode, where only the right area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"top left"),(0,l.kt)("td",null,"A clipping mode, where only the upper left area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"top right"),(0,l.kt)("td",null,"A clipping mode, where only the upper right area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bottom left"),(0,l.kt)("td",null,"A clipping mode, where only the lower left area of the image is displayed without scaling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bottom right"),(0,l.kt)("td",null,"A clipping mode, where only the lower right area of the image is displayed without scaling.")))),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Image"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}g.isMDXComponent=!0}}]);