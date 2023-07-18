"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[10683],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(g,o(o({ref:e},s),{},{components:n})):r.createElement(g,o({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16830:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(93106),a=n(4706),l="tabItem_xXVp";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i({children:t,hidden:e,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:e}),t)}},27164:function(t,e,n){n.d(e,{Z:function(){return O}});var r=n(93106),a=n(4706),l=n(93741),o=n(24755),i=n(36196),c=n(53964),p=n(40898);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){var e,n;return null!==(n=null===(e=r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==n?n:[]}(t).map((({props:{value:t,label:e,attributes:n,default:r}})=>({value:t,label:e,attributes:n,default:r})))}function m(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=null!=e?e:u(n);return function(t){const e=(0,c.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function d({value:t,tabValues:e}){return e.some((e=>e.value===t))}function g({queryString:t=!1,groupId:e}){const n=(0,o.k6)(),a=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),l=(0,i._X)(a),c=(0,r.useCallback)((t=>{if(!a)return;const e=new URLSearchParams(n.location.search);e.set(a,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[a,n]);return[l,c]}function k(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,l=m(t),[o,i]=(0,r.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const r=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[c,s]=g({queryString:n,groupId:a}),[u,k]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,a]=(0,p.Nk)(e);return[n,(0,r.useCallback)((t=>{e&&a.set(t)}),[e,a])]}({groupId:a}),f=(()=>{const t=null!=c?c:u;return d({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!d({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),s(t),k(t)}),[s,k,l]),tabValues:l}}var f=n(43751),b="tabList_ulmA",N="tabItem_Zt3y";function y(){return y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y.apply(this,arguments)}function h({className:t,block:e,selectedValue:n,selectValue:o,tabValues:i}){const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),s=t=>{const e=t.currentTarget,r=c.indexOf(e),a=i[r].value;a!==n&&(p(e),o(a))},u=t=>{let e=null;switch(t.key){case"Enter":s(t);break;case"ArrowRight":{const r=c.indexOf(t.currentTarget)+1;var n;e=null!==(n=c[r])&&void 0!==n?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;var r;e=null!==(r=c[n])&&void 0!==r?r:c[c.length-1];break}}null==e||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":e},t)},i.map((({value:t,label:e,attributes:l})=>r.createElement("li",y({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>c.push(t),onKeyDown:u,onClick:s},l,{className:(0,a.Z)("tabs__item",N,null==l?void 0:l.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function v({lazy:t,children:e,selectedValue:n}){const a=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function w(t){const e=k(t);return r.createElement("div",{className:(0,a.Z)("tabs-container",b)},r.createElement(h,y({},t,e)),r.createElement(v,y({},t,e)))}function O(t){const e=(0,f.Z)();return r.createElement(w,y({key:String(e)},t))}},95858:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});n(93106);var r=n(79874),a=n(27164),l=n(16830);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const c={title:"Icon",sidebar_label:"Icon"},p=void 0,s={unversionedId:"components/base/icon",id:"components/base/icon",title:"Icon",description:"\u56fe\u6807\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px",source:"@site/docs/components/base/icon.md",sourceDirName:"components/base",slug:"/components/base/icon",permalink:"/taro-docs/docs/next/components/base/icon",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/base/icon.md",tags:[],version:"current",frontMatter:{title:"Icon",sidebar_label:"Icon"},sidebar:"components",previous:{title:"View",permalink:"/taro-docs/docs/next/components/viewContainer/view"},next:{title:"Text",permalink:"/taro-docs/docs/next/components/base/text"}},u={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"IconProps",id:"iconprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"TIconType",id:"ticontype",level:3}],d={toc:m};function g(t){var{components:e}=t,c=i(t,["components"]);return(0,r.kt)("wrapper",o({},d,c,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u56fe\u6807\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(50154).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(88789).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:n(75629).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(47067).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:n(45225).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<IconProps>\n")),(0,r.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Icon size='60' type='success' />\n        <Icon size='60' type='info' />\n        <Icon size='60' type='warn' color='#ccc' />\n        <Icon size='60' type='warn' />\n        <Icon size='60' type='waiting' />\n        <Icon size='20' type='success_no_circle' />\n        <Icon size='20' type='warn' />\n        <Icon size='20' type='success' />\n        <Icon size='20' type='download' />\n        <Icon size='20' type='clear' color='red' />\n        <Icon size='20' type='search' />\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("template",null,(0,r.kt)("view",{class:"components-page"},(0,r.kt)("icon",{size:"60",type:"success"}),(0,r.kt)("icon",{size:"60",type:"info"}),(0,r.kt)("icon",{size:"60",type:"warn",color:"#ccc"}),(0,r.kt)("icon",{size:"60",type:"warn"}),(0,r.kt)("icon",{size:"60",type:"waiting"}),(0,r.kt)("icon",{size:"20",type:"success_no_circle"}),(0,r.kt)("icon",{size:"20",type:"warn"}),(0,r.kt)("icon",{size:"20",type:"success"}),(0,r.kt)("icon",{size:"20",type:"download"}),(0,r.kt)("icon",{size:"20",type:"clear",color:"red"}),(0,r.kt)("icon",{size:"20",type:"search"}))))),(0,r.kt)("h2",o({},{id:"iconprops"}),"IconProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"type"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"keyof TIconType")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"icon \u7684\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"size"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"23")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"icon \u7684\u5927\u5c0f\uff0c\u5355\u4f4dpx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"color"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"icon \u7684\u989c\u8272\uff0c\u540c css \u7684 color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"ariaLabel"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u5c5e\u6027\uff09\u5143\u7d20\u7684\u989d\u5916\u63cf\u8ff0")))),(0,r.kt)("h3",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"IconProps.type"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"IconProps.size"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"IconProps.color"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"IconProps.ariaLabel"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"ticontype"}),"TIconType"),(0,r.kt)("p",null,"icon \u7684\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6210\u529f\u56fe\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"success_no_circle"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6210\u529f\u56fe\u6807\uff08\u4e0d\u5e26\u5916\u5708\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"info"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u4fe1\u606f\u56fe\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"warn"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u8b66\u544a\u56fe\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"waiting"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7b49\u5f85\u56fe\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"cancel"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u53d6\u6d88\u56fe\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"download"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u4e0b\u8f7d\u56fe\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"search"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u641c\u7d22\u56fe\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"clear"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6e05\u9664\u56fe\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"circle"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5706\u73af\u56fe\u6807(\u591a\u9009\u63a7\u4ef6\u56fe\u6807\u672a\u9009\u62e9)\u300c\u5fae\u4fe1\u6587\u6863\u672a\u6807\u6ce8\u5c5e\u6027\u300d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"info_circle"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5e26\u5706\u73af\u7684\u4fe1\u606f\u56fe\u6807\u300c\u5fae\u4fe1\u6587\u6863\u672a\u6807\u6ce8\u5c5e\u6027\u300d")))))}g.isMDXComponent=!0},88789:function(t,e,n){e.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},80068:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},45225:function(t,e,n){e.Z=n.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},47067:function(t,e,n){e.Z=n.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},96636:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},50154:function(t,e,n){e.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},75629:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},88421:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);