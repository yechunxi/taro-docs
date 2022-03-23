"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[84359],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return m}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var k=l.createContext({}),i=function(t){var e=l.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},o=function(t){var e=i(t.components);return l.createElement(k.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,k=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),p=i(n),m=r,s=p["".concat(k,".").concat(m)]||p[m]||c[m]||a;return n?l.createElement(s,d(d({ref:e},o),{},{components:n})):l.createElement(s,d({ref:e},o))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,d=new Array(a);d[0]=p;var u={};for(var k in e)hasOwnProperty.call(e,k)&&(u[k]=e[k]);u.originalType=t,u.mdxType="string"==typeof t?t:r,d[1]=u;for(var i=2;i<a;i++)d[i]=n[i];return l.createElement.apply(null,d)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55147:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return k},metadata:function(){return i},toc:function(){return o},default:function(){return p}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),d=["components"],u={title:"Input",sidebar_label:"Input"},k=void 0,i={unversionedId:"components/forms/input",id:"version-2.x/components/forms/input",title:"Input",description:"\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236",source:"@site/versioned_docs/version-2.x/components/forms/input.md",sourceDirName:"components/forms",slug:"/components/forms/input",permalink:"/taro/docs/2.x/components/forms/input",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/components/forms/input.md",tags:[],version:"2.x",frontMatter:{title:"Input",sidebar_label:"Input"},sidebar:"version-2.x/components",previous:{title:"Form",permalink:"/taro/docs/2.x/components/forms/form"},next:{title:"Label",permalink:"/taro/docs/2.x/components/forms/label"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"InputProps",id:"inputprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:3},{value:"inputEventDetail",id:"inputeventdetail",children:[],level:3},{value:"inputForceEventDetail",id:"inputforceeventdetail",children:[],level:3},{value:"inputValueEventDetail",id:"inputvalueeventdetail",children:[],level:3},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[],level:2}],c={toc:o};function p(t){var e=t.components,n=(0,r.Z)(t,d);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/input.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<InputProps>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n\n  render () {\n    return (\n        <View className='example-body'>\n          <Text>\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 input</Text>\n            <Input type='text' placeholder='\u5c06\u4f1a\u83b7\u53d6\u7126\u70b9' focus/>\n            <Text>\u63a7\u5236\u6700\u5927\u8f93\u5165\u957f\u5ea6\u7684 input</Text>\n           <Input type='text' placeholder='\u6700\u5927\u8f93\u5165\u957f\u5ea6\u4e3a 10' maxlength='10'/>\n            <Text>\u6570\u5b57\u8f93\u5165\u7684 input</Text>\n            <Input type='number' placeholder='\u8fd9\u662f\u4e00\u4e2a\u6570\u5b57\u8f93\u5165\u6846'/>\n            <Text>\u5bc6\u7801\u8f93\u5165\u7684 input</Text>\n            <Input type='password' password placeholder='\u8fd9\u662f\u4e00\u4e2a\u5bc6\u7801\u8f93\u5165\u6846'/>\n            <Text>\u5e26\u5c0f\u6570\u70b9\u7684 input</Text>\n            <Input type='digit' placeholder='\u5e26\u5c0f\u6570\u70b9\u7684\u6570\u5b57\u952e\u76d8'/>\n            <Text>\u8eab\u4efd\u8bc1\u8f93\u5165\u7684 input</Text>\n            <Input type='idcard' placeholder='\u8eab\u4efd\u8bc1\u8f93\u5165\u952e\u76d8'/>\n            <Text>\u63a7\u5236\u5360\u4f4d\u7b26\u989c\u8272\u7684 input</Text>\n            <Input type='text' placeholder='\u5360\u4f4d\u7b26\u5b57\u4f53\u662f\u7ea2\u8272\u7684' placeholderStyle='color:red'/>\n        </View>\n    )\n  }\n}\n")),(0,a.kt)("h2",{id:"inputprops"},"InputProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8f93\u5165\u6846\u7684\u521d\u59cb\u5185\u5bb9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"number" | "text" | "idcard" | "digit"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"text"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"input \u7684\u7c7b\u578b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"password"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u662f\u5bc6\u7801\u7c7b\u578b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholder"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8f93\u5165\u6846\u4e3a\u7a7a\u65f6\u5360\u4f4d\u7b26")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholderStyle"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholderClass"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"input-placeholder"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f\u7c7b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disabled"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u7981\u7528")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxlength"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"140")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6700\u5927\u8f93\u5165\u957f\u5ea6\uff0c\u8bbe\u7f6e\u4e3a -1 \u7684\u65f6\u5019\u4e0d\u9650\u5236\u6700\u5927\u957f\u5ea6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursorSpacing"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb\uff0c\u5355\u4f4d px \u3002\u53d6 input \u8ddd\u79bb\u5e95\u90e8\u7684\u8ddd\u79bb\u548c cursor-spacing \u6307\u5b9a\u7684\u8ddd\u79bb\u7684\u6700\u5c0f\u503c\u4f5c\u4e3a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoFocus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"(\u5373\u5c06\u5e9f\u5f03\uff0c\u8bf7\u76f4\u63a5\u4f7f\u7528 focus )\u81ea\u52a8\u805a\u7126\uff0c\u62c9\u8d77\u952e\u76d8")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"focus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u83b7\u53d6\u7126\u70b9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"confirmType"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"send" | "search" | "next" | "go" | "done"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"done")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u952e\u76d8\u53f3\u4e0b\u89d2\u6309\u94ae\u7684\u6587\u5b57")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"confirmHold"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u70b9\u51fb\u952e\u76d8\u53f3\u4e0b\u89d2\u6309\u94ae\u65f6\u662f\u5426\u4fdd\u6301\u952e\u76d8\u4e0d\u6536\u8d77")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursor"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9afocus\u65f6\u7684\u5149\u6807\u4f4d\u7f6e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"selectionStart"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"-1")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5149\u6807\u8d77\u59cb\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0eselection-end\u642d\u914d\u4f7f\u7528")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"selectionEnd"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"-1")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5149\u6807\u7ed3\u675f\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0eselection-start\u642d\u914d\u4f7f\u7528")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"adjustPosition"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u952e\u76d8\u5f39\u8d77\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u4e0a\u63a8\u9875\u9762")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"holdKeyboard"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"focus \u65f6\uff0c\u70b9\u51fb\u9875\u9762\u7684\u65f6\u5019\u4e0d\u6536\u8d77\u952e\u76d8")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onInput"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<inputEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f53\u952e\u76d8\u8f93\u5165\u65f6\uff0c\u89e6\u53d1input\u4e8b\u4ef6\uff0cevent.detail = ","{value, cursor, keyCode}","\uff0c\u5904\u7406\u51fd\u6570\u53ef\u4ee5\u76f4\u63a5 return \u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5c06\u66ff\u6362\u8f93\u5165\u6846\u7684\u5185\u5bb9\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onFocus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<inputForceEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8f93\u5165\u6846\u805a\u7126\u65f6\u89e6\u53d1\uff0cevent.detail = ","{ value, height }","\uff0cheight \u4e3a\u952e\u76d8\u9ad8\u5ea6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onBlur"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<inputValueEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1",(0,a.kt)("br",null),(0,a.kt)("br",null),"event.detail = ","{value: value}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onConfirm"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<inputValueEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u70b9\u51fb\u5b8c\u6210\u6309\u94ae\u65f6\u89e6\u53d1",(0,a.kt)("br",null),(0,a.kt)("br",null),"event.detail = ","{value: value}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onKeyboardHeightChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u952e\u76d8\u9ad8\u5ea6\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6",(0,a.kt)("br",null),(0,a.kt)("br",null),"event.detail = ","{height: height, duration: duration}")))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.type"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f(\u90e8\u5206\u652f\u6301)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.password"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.placeholder"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.placeholderStyle"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.placeholderClass"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.disabled"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.maxlength"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.cursorSpacing"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.autoFocus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.focus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.confirmType"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.confirmHold"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.cursor"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.selectionStart"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.selectionEnd"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.adjustPosition"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.holdKeyboard"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.onInput"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.onFocus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.onBlur"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.onConfirm"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"(\u501f\u7528",(0,a.kt)("a",{parentName:"td",href:"/taro/docs/2.x/components/forms/form"},"Form \u7ec4\u4ef6"),"\u7684",(0,a.kt)("inlineCode",{parentName:"td"},"onSubmit"),"\u4e8b\u4ef6\u6765\u66ff\u4ee3)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"InputProps.onKeyboardHeightChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"inputeventdetail"},"inputEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8f93\u5165\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"cursor"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u5149\u6807\u4f4d\u7f6e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"keyCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u952e\u503c")))),(0,a.kt)("h3",{id:"inputforceeventdetail"},"inputForceEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8f93\u5165\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u952e\u76d8\u9ad8\u5ea6")))),(0,a.kt)("h3",{id:"inputvalueeventdetail"},"inputValueEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8f93\u5165\u503c")))),(0,a.kt)("h3",{id:"onkeyboardheightchangeeventdetail"},"onKeyboardHeightChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u952e\u76d8\u9ad8\u5ea6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"duration"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u6301\u7eed\u65f6\u95f4")))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Input"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);