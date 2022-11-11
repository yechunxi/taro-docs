"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[94153],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=d(n),u=a,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||l;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},76571:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(93106),a=n(4706),l="tabItem_hkNs";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i({children:t,hidden:e,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:e}),t)}},7907:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(93106),a=n(4706),l=n(53620),o=n(55080),i=n(39564),p=n(48297),d="tabList_HZIO",c="tabItem_bO0X";function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},m.apply(this,arguments)}function s(t){var e;const{lazy:n,block:l,defaultValue:s,values:u,groupId:k,className:g}=t,N=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=u?u:N.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),b=(0,o.l)(f,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const v=null===s?s:null!==(h=null!=s?s:null===(e=N.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==h?h:N[0].props.value;if(null!==v&&!f.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:E}=(0,i.U)(),[O,w]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=k){const t=y[k];null!=t&&t!==O&&f.some((e=>e.value===t))&&w(t)}const P=t=>{const e=t.currentTarget,n=x.indexOf(e),r=f[n].value;r!==O&&(C(e),w(r),null!=k&&E(k,String(r)))},T=t=>{let e=null;switch(t.key){case"ArrowRight":{const r=x.indexOf(t.currentTarget)+1;var n;e=null!==(n=x[r])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(t.currentTarget)-1;var r;e=null!==(r=x[n])&&void 0!==r?r:x[x.length-1];break}}null==e||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},g)},f.map((({value:t,label:e,attributes:n})=>r.createElement("li",m({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:t=>x.push(t),onKeyDown:T,onFocus:P,onClick:P},n,{className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":O===t})}),null!=e?e:t)))),n?(0,r.cloneElement)(N.filter((t=>t.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==O})))))}function u(t){const e=(0,l.Z)();return r.createElement(s,m({key:String(e)},t))}},94170:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874),a=n(7907),l=n(76571);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={title:"Editor",sidebar_label:"Editor"},d=void 0,c={unversionedId:"components/forms/editor",id:"components/forms/editor",title:"Editor",description:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u5bf9\u56fe\u7247\u3001\u6587\u5b57\u8fdb\u884c\u7f16\u8f91\u3002",source:"@site/docs/components/forms/editor.md",sourceDirName:"components/forms",slug:"/components/forms/editor",permalink:"/taro-docs/docs/next/components/forms/editor",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/forms/editor.md",tags:[],version:"current",frontMatter:{title:"Editor",sidebar_label:"Editor"},sidebar:"components",previous:{title:"Checkbox",permalink:"/taro-docs/docs/next/components/forms/checkbox"},next:{title:"Form",permalink:"/taro-docs/docs/next/components/forms/form"}},m={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"EditorProps",id:"editorprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"editorEventDetail",id:"editoreventdetail",level:3}],u={toc:s};function k(t){var{components:e}=t,p=i(t,["components"]);return(0,r.kt)("wrapper",o({},u,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u5bf9\u56fe\u7247\u3001\u6587\u5b57\u8fdb\u884c\u7f16\u8f91\u3002"),(0,r.kt)("p",null,"\u7f16\u8f91\u5668\u5bfc\u51fa\u5185\u5bb9\u652f\u6301\u5e26\u6807\u7b7e\u7684 html\u548c\u7eaf\u6587\u672c\u7684 text\uff0c\u7f16\u8f91\u5668\u5185\u90e8\u91c7\u7528 delta \u683c\u5f0f\u8fdb\u884c\u5b58\u50a8\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 setContents \u63a5\u53e3\u8bbe\u7f6e\u5185\u5bb9\u65f6\uff0c\u89e3\u6790\u63d2\u5165\u7684 html \u53ef\u80fd\u4f1a\u7531\u4e8e\u4e00\u4e9b\u975e\u6cd5\u6807\u7b7e\u5bfc\u81f4\u89e3\u6790\u9519\u8bef\uff0c\u5efa\u8bae\u5f00\u53d1\u8005\u5728\u5c0f\u7a0b\u5e8f\u5185\u4f7f\u7528\u65f6\u901a\u8fc7 delta \u8fdb\u884c\u63d2\u5165\u3002"),(0,r.kt)("p",null,"\u5bcc\u6587\u672c\u7ec4\u4ef6\u5185\u90e8\u5f15\u5165\u4e86\u4e00\u4e9b\u57fa\u672c\u7684\u6837\u5f0f\u4f7f\u5f97\u5185\u5bb9\u53ef\u4ee5\u6b63\u786e\u7684\u5c55\u793a\uff0c\u5f00\u53d1\u65f6\u53ef\u4ee5\u8fdb\u884c\u8986\u76d6\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u5176\u5b83\u7ec4\u4ef6\u6216\u73af\u5883\u4e2d\u4f7f\u7528\u5bcc\u6587\u672c\u7ec4\u4ef6\u5bfc\u51fa\u7684 html \u65f6\uff0c\u9700\u8981\u989d\u5916\u5f15\u5165 \u8fd9\u6bb5\u6837\u5f0f\uff0c\u5e76\u7ef4\u62a4 ",(0,r.kt)("inlineCode",{parentName:"p"},"<ql-container><ql-editor></ql-editor></ql-container>")," \u7684\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u56fe\u7247\u63a7\u4ef6\u4ec5\u521d\u59cb\u5316\u65f6\u8bbe\u7f6e\u6709\u6548\u3002"),(0,r.kt)("p",null,"*\u7f16\u8f91\u5668\u5185\u652f\u6301\u90e8\u5206 HTML \u6807\u7b7e\u548c\u5185\u8054\u6837\u5f0f\uff0c\u4e0d\u652f\u6301 ",(0,r.kt)("strong",{parentName:"p"},"class")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"id*")),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<EditorProps>\n")),(0,r.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  state = {\n    placeholder: '\u6765\uff0c\u8f93\u5165\u9694\u58c1\u7684\u540d\u5b57\u8bd5\u8bd5...'\n  }\n\n  editorReady = e => {\n    Taro.createSelectorQuery().select('#editor').context((res) => {\n      this.editorCtx = res.context\n    }).exec()\n  }\n\n  undo = e => {\n    this.editorCtx.undo()\n  }\n\n  render () {\n    return (\n      <View>\n        <Editor id='editor' className='editor' placeholder={this.state.placeholder} onReady={this.editorReady}></Editor>\n        <Button type='warn' onClick={this.undo}>\u64a4\u9500</Button>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="container">\n    <editor id="editor" class="editor" :placeholder="placeholder" @ready="editorReady"></editor>\n    <button type="warn" @tap="undo">\u64a4\u9500</button>\n  </view>\n</template>\n\n<script>\n  import Taro from \'@tarojs/taro\'\n  export default {\n    data() {\n      return {\n        placeholder: \'\u6765\uff0c\u8f93\u5165\u9694\u58c1\u7684\u540d\u5b57\u8bd5\u8bd5...\'\n      }\n    },\n    methods: {\n      editorReady() {\n        Taro.createSelectorQuery().select(\'#editor\').context((res) => {\n          this.editorCtx = res.context\n        }).exec()\n      },\n      undo() {\n        this.editorCtx.undo()\n      }\n    }\n  }\n<\/script>\n')))),(0,r.kt)("h2",o({},{id:"editorprops"}),"EditorProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"readOnly"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u7f16\u8f91\u5668\u4e3a\u53ea\u8bfb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"placeholder"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u63d0\u793a\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"showImgSize"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u56fe\u7247\u5927\u5c0f\u63a7\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"showImgToolbar"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u5de5\u5177\u680f\u63a7\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"showImgResize"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u4fee\u6539\u5c3a\u5bf8\u63a7\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"onReady"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7f16\u8f91\u5668\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"onFocus"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<editorEventDetail>")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7f16\u8f91\u5668\u805a\u7126\u65f6\u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"onBlur"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<editorEventDetail>")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7f16\u8f91\u5668\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1",(0,r.kt)("br",null),"detail = { html, text, delta }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"onInput"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<editorEventDetail>")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7f16\u8f91\u5668\u5185\u5bb9\u6539\u53d8\u65f6\u89e6\u53d1",(0,r.kt)("br",null),"detail = { html, text, delta }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"onStatusChange"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u901a\u8fc7 Context \u65b9\u6cd5\u6539\u53d8\u7f16\u8f91\u5668\u5185\u6837\u5f0f\u65f6\u89e6\u53d1\uff0c\u8fd4\u56de\u9009\u533a\u5df2\u8bbe\u7f6e\u7684\u6837\u5f0f")))),(0,r.kt)("h3",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.readOnly"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.placeholder"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.showImgSize"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.showImgToolbar"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.showImgResize"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.onReady"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.onFocus"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.onBlur"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.onInput"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EditorProps.onStatusChange"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"editoreventdetail"}),"editorEventDetail"))}k.isMDXComponent=!0},80068:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);