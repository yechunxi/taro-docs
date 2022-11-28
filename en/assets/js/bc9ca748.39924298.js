"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18813],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),s=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return l.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(i,".").concat(k)]||d[k]||p[k]||a;return n?l.createElement(m,o(o({ref:e},c),{},{components:n})):l.createElement(m,o({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26116:function(t,e,n){n.d(e,{Z:function(){return u}});var l=n(93106),r=n(4706),a="tabItem_TXiJ";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},o.apply(this,arguments)}function u({children:t,hidden:e,className:n}){return l.createElement("div",o({role:"tabpanel",className:(0,r.Z)(a,n)},{hidden:e}),t)}},76038:function(t,e,n){n.d(e,{Z:function(){return k}});var l=n(93106),r=n(4706),a=n(85959),o=n(52546),u=n(25612),i=n(74956),s="tabList_gMY0",c="tabItem_sIv8";function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},p.apply(this,arguments)}function d(t){var e;const{lazy:n,block:a,defaultValue:d,values:k,groupId:m,className:h}=t,y=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=k?k:y.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),v=(0,o.l)(b,((t,e)=>t.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var f;const g=null===d?d:null!==(f=null!=d?d:null===(e=y.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==f?f:y[0].props.value;if(null!==g&&!b.some((t=>t.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:N}=(0,u.U)(),[T,O]=(0,l.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=m){const t=x[m];null!=t&&t!==T&&b.some((e=>e.value===t))&&O(t)}const E=t=>{const e=t.currentTarget,n=P.indexOf(e),l=b[n].value;l!==T&&(w(e),O(l),null!=m&&N(m,String(l)))},j=t=>{let e=null;switch(t.key){case"Enter":E(t);break;case"ArrowRight":{const l=P.indexOf(t.currentTarget)+1;var n;e=null!==(n=P[l])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(t.currentTarget)-1;var l;e=null!==(l=P[n])&&void 0!==l?l:P[P.length-1];break}}null==e||e.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},h)},b.map((({value:t,label:e,attributes:n})=>l.createElement("li",p({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:t=>P.push(t),onKeyDown:j,onClick:E},n,{className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":T===t})}),null!=e?e:t)))),n?(0,l.cloneElement)(y.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},y.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function k(t){const e=(0,a.Z)();return l.createElement(d,p({key:String(e)},t))}},23291:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});n(93106);var l=n(79874),r=n(76038),a=n(26116);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},o.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={title:"RichText",sidebar_label:"RichText"},s=void 0,c={unversionedId:"components/base/rich-text",id:"version-3.x/components/base/rich-text",title:"RichText",description:"Rich text.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/base/rich-text.md",sourceDirName:"components/base",slug:"/components/base/rich-text",permalink:"/taro-docs/en/docs/components/base/rich-text",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/base/rich-text.md",tags:[],version:"3.x",frontMatter:{title:"RichText",sidebar_label:"RichText"},sidebar:"components",previous:{title:"Progress",permalink:"/taro-docs/en/docs/components/base/progress"},next:{title:"Button",permalink:"/taro-docs/en/docs/components/forms/button"}},p={},d=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"RichTextProps",id:"richtextprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"TSpace",id:"tspace",level:3},{value:"Text",id:"text",level:3},{value:"HTMLElement",id:"htmlelement",level:3},{value:"Nodes",id:"nodes",level:2},{value:"Type",id:"type-1",level:3},{value:"API Support",id:"api-support",level:2}],k={toc:d};function m(t){var{components:e}=t,n=u(t,["components"]);return(0,l.kt)("wrapper",o({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rich text."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/rich-text.html"}),"Reference"))),(0,l.kt)("h2",o({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<RichTextProps>\n")),(0,l.kt)("h2",o({},{id:"examples"}),"Examples"),(0,l.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  state = {\n    nodes: [{\n      name: 'div',\n      attrs: {\n        class: 'div_class',\n        style: 'line-height: 60px; color: red;'\n      },\n      children: [{\n        type: 'text',\n        text: 'Hello World!'\n      }]\n    }]\n  }\n  render () {\n    return (\n      <RichText nodes={this.state.nodes} />\n    )\n  }\n}\n"))),(0,l.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"components-page\">\n    <rich-text :nodes=\"nodes\"></rich-text>\n  </view>\n</template>\n\n<script>\nexport default {\n  name: 'Index',\n  data() {\n    return {\n      nodes: [{\n        name: 'div',\n        attrs: {\n          class: 'div_class',\n          style: 'line-height: 60px; color: red;'\n        },\n        children: [{\n          type: 'text',\n          text: 'Hello World!'\n        }]\n      }]\n    }\n  },\n  onReady () {\n    console.log('onReady')\n  }\n}\n<\/script>\n")))),(0,l.kt)("h2",o({},{id:"richtextprops"}),"RichTextProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"nodes"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Nodes")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The node list/HTML string")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"space"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"ensp" | "emsp" | "nbsp"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Displays consecutive spaces")))),(0,l.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"RichTextProps.space"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",o({},{id:"tspace"}),"TSpace"),(0,l.kt)("p",null,"Valid values of space"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"ensp"),(0,l.kt)("td",null,"En space")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"emsp"),(0,l.kt)("td",null,"Em space")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"nbsp"),(0,l.kt)("td",null,"The size of the space is set according to the font setting")))),(0,l.kt)("h3",o({},{id:"text"}),"Text"),(0,l.kt)("p",null,"text node"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",null,"Description"),(0,l.kt)("th",null,"Remarks"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"type"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"text"')),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",null,"Text type"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"text"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'""')),(0,l.kt)("td",null,"Text string"),(0,l.kt)("td",null,(0,l.kt)("code",null,"support entities"))))),(0,l.kt)("h3",o({},{id:"htmlelement"}),"HTMLElement"),(0,l.kt)("p",null,"element node(defaulted)"),(0,l.kt)("p",null,"The class and style properties are supported globally. ",(0,l.kt)("strong",{parentName:"p"},"The id property is not supported.")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"),(0,l.kt)("th",null,"Remarks"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"type"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"node"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"HTML type"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"name"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Tag name"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Supports some trusted HTML nodes."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"attrs"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Property"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Supports some trusted properties. The name complies with the Pascal naming convention."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"children"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Nodes")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Child node list"),(0,l.kt)("td",null,(0,l.kt)("code",null,"The structure of child nodes is the same as that of nodes."))))),(0,l.kt)("h2",o({},{id:"nodes"}),"Nodes"),(0,l.kt)("p",null,"node type"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Currently, two nodes are supported, which are distinguished according to the type: element node and text node. It is the element node by default. HTML nodes are displayed in the rich text area. Element node: type = node*")),(0,l.kt)("h3",o({},{id:"type-1"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(Text | HTMLElement)[] | string\n")),(0,l.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"RichText"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);