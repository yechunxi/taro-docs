"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56409],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,c(c({ref:e},p),{},{components:n})):r.createElement(k,c({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,c[1]=o;for(var u=2;u<l;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(t,e,n){var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(83117),a=n(67294),l=n(72389),c=n(24726),o=n(86010),i="tabItem_LplD";function u(t){var e,n,l,u=t.lazy,p=t.block,s=t.defaultValue,d=t.values,m=t.groupId,k=t.className,h=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:h.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,c.lx)(g,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===s?s:null!=(e=null!=s?s:null==(n=h.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=h[0])?void 0:l.props.value;if(null!==v&&!g.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,c.UB)(),y=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,a.useState)(v),x=w[0],T=w[1],P=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==x&&g.some((function(t){return t.value===E}))&&T(E)}var O=function(t){var e=t.currentTarget,n=P.indexOf(e),r=g[n].value;r!==x&&(S(e),T(r),null!=m&&N(m,r))},A=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=P.indexOf(t.currentTarget)+1;n=P[r]||P[0];break;case"ArrowLeft":var a=P.indexOf(t.currentTarget)-1;n=P[a]||P[P.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},g.map((function(t){var e=t.value,n=t.label,l=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return P.push(t)},onKeyDown:A,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),u?(0,a.cloneElement)(h.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function p(t){var e=(0,l.Z)();return a.createElement(u,(0,r.Z)({key:String(e)},t))}},85240:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return k}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),c=n(9877),o=n(58215),i=["components"],u={title:"Switch",sidebar_label:"Switch"},p=void 0,s={unversionedId:"components/forms/switch",id:"components/forms/switch",title:"Switch",description:"Switch picker.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/forms/switch.md",sourceDirName:"components/forms",slug:"/components/forms/switch",permalink:"/taro/en/docs/next/components/forms/switch",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/components/forms/switch.md",tags:[],version:"current",frontMatter:{title:"Switch",sidebar_label:"Switch"},sidebar:"components",previous:{title:"Slider",permalink:"/taro/en/docs/next/components/forms/slider"},next:{title:"Textarea",permalink:"/taro/en/docs/next/components/forms/textarea"}},d=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"SwitchProps",id:"switchprops",children:[{value:"Property Support",id:"property-support",children:[],level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],m={toc:d};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Switch picker."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/switch.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<SwitchProps>\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(c.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>default style</Text>\n        <Switch checked/>\n        <Switch/>\n        <Text>recommend style</Text>\n        <Switch checked/>\n        <Switch/>\n      </View>\n    )\n  }\n}\n"))),(0,l.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class=\'components-page\'>\n    <text>default style</text>\n    <switch :checked="true" />\n    <switch />\n    <text>recommend style</text>\n    <switch :checked="true" />\n    <switch />\n  </view>\n</template>\n')))),(0,l.kt)("h2",{id:"switchprops"},"SwitchProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"checked"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether the item is selected")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"disabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to disable the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"type"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"switch" | "checkbox"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"switch"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The style. Valid values include `switch` and `checkbox`.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"color"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"#04BE02"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The color of the switch component. It is the same as the color of the css component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"A change event triggered when checked changes.")))),(0,l.kt)("h3",{id:"property-support"},"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwitchProps.checked"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwitchProps.disabled"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwitchProps.type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwitchProps.color"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwitchProps.onChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h3",{id:"onchangeeventdetail"},"onChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean"))))),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Switch"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);