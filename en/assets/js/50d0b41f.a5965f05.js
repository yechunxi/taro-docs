"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[55639],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,h=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),r=n(67294),i=n(72389),l=n(24726),o=n(86010),c="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,d=e.block,p=e.defaultValue,s=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=s?s:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),b=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,r.useState)(g),x=w[0],M=w[1],T=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=b[m];null!=P&&P!==x&&f.some((function(e){return e.value===P}))&&M(P)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==x&&(O(t),M(a),null!=m&&N(m,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},47349:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return h}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(9877),o=n(58215),c=["components"],u={title:"MatchMedia",sidebar_label:"MatchMedia"},d=void 0,p={unversionedId:"components/viewContainer/match-media",id:"version-3.x/components/viewContainer/match-media",title:"MatchMedia",description:"media query match detection node. You can specify a set of media query rules that will be satisfied before this node is displayed.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/viewContainer/match-media.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/match-media",permalink:"/taro/en/docs/components/viewContainer/match-media",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/components/viewContainer/match-media.md",tags:[],version:"3.x",frontMatter:{title:"MatchMedia",sidebar_label:"MatchMedia"},sidebar:"components",previous:{title:"CoverImage",permalink:"/taro/en/docs/components/viewContainer/cover-image"},next:{title:"ShareElement",permalink:"/taro/en/docs/components/viewContainer/share-element"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"matchMediaProps",id:"matchmediaprops",children:[{value:"API Support",id:"api-support",children:[],level:3}],level:2}],m={toc:s};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"media query")," match detection node. You can specify a set of ",(0,i.kt)("inlineCode",{parentName:"p"},"media query")," rules that will be satisfied before this node is displayed."),(0,i.kt)("p",null,"This node enables the effect that an area is only displayed when the page is within a certain width and height range."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"},"Reference"))),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<MatchMediaProps>\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'class App extends Components {\n  render () {\n    return (\n      <View>\n        <MatchMedia minWidth="300" maxWidth="600">\n          <view>Displayed when the page width is between 300 ~ 500 px</view>\n        </MatchMedia>\n        <MatchMedia minHeight="400" orientation="landscape">\n          <view>Displayed here when the page height is not less than 400 px and the screen orientation is portrait</view>\n        </MatchMedia>\n      </View>\n    )\n  }\n}\n'))),(0,i.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <match-media min-width="300" max-width="500">\n      <view>Displayed when the page width is between 300 ~ 500 px</view>\n    </match-media>\n    <match-media min-height="400" orientation="landscape">\n      <view>Displayed here when the page height is not less than 400 px and the screen orientation is portrait</view>\n    </match-media>\n  </view>\n</template>\n')))),(0,i.kt)("h2",{id:"matchmediaprops"},"matchMediaProps"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",{style:{textAlign:"center"}},"Required"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"minWidth"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Specify the display condition for the minimum page width in px")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"maxWidth"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Specify the display condition for the maximum page width in px")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"width"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Specify the display condition for the page width in px")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"minHeight"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Specify the display condition for the minimum page height in px")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"maxHeight"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Specify the display condition for the maximum page height in px")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Height"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Specify the display condition for the page height in px")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"orientation"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Specify the display condition for the screen orientation")))),(0,i.kt)("h3",{id:"api-support"},"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.minWidth"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.maxWidth"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.width"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.minHeight"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.maxHeight"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.Height"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.orientation"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}h.isMDXComponent=!0}}]);