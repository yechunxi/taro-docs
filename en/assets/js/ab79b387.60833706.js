"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[54277],{79874:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36694:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={title:"\u51fd\u6570\u5f0f\u7ec4\u4ef6"},i=void 0,p={unversionedId:"functional-component",id:"version-1.x/functional-component",title:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",description:"\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6",source:"@site/versioned_docs/version-1.x/functional-component.md",sourceDirName:".",slug:"/functional-component",permalink:"/taro-docs/en/docs/1.x/functional-component",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/functional-component.md",tags:[],version:"1.x",frontMatter:{title:"\u51fd\u6570\u5f0f\u7ec4\u4ef6"},sidebar:"version-1.x/docs",previous:{title:"\u5217\u8868\u6e32\u67d3",permalink:"/taro-docs/en/docs/1.x/list"},next:{title:"Context",permalink:"/taro-docs/en/docs/1.x/context"}},c={},u=[{value:"\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6",level:2},{value:"\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6",level:2},{value:"\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6",level:2}],s={toc:u};function m(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6"}),"\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.3.0-beta.0")," \u8d77\u652f\u6301")),(0,r.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u975e\u5e38\u7b80\u5355\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"function Welcome(props) {\n  return <View>Hello, {props.name}</View>;\n}\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\uff0c\u5e76\u4e14\u8fd4\u56de\u7684\u662f\u4e00\u4e2a JSX \u5143\u7d20\u3002\u8fd9\u6837\u7684\u51fd\u6570\u5c31\u662f\u51fd\u6570\u5f0f\u7ec4\u4ef6\u3002\u76f8\u5bf9\u4e8e\u7684 ES6 Class \u7ec4\u4ef6\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class Welcome extends React.Component {\n  render() {\n    return <View>Hello, {this.props.name}</View>;\n  }\n}\n")),(0,r.kt)("p",null,"\u5728 Taro \u4e2d\u4f7f\u7528\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6709\u4ee5\u4e0b\u9650\u5236\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u51fd\u6570\u7684\u547d\u540d\u9700\u8981\u9075\u5faa",(0,r.kt)("a",o({parentName:"li"},{href:"https://baike.baidu.com/item/%E5%B8%95%E6%96%AF%E5%8D%A1%E5%91%BD%E5%90%8D%E6%B3%95/9464494?fr=aladdin"}),"\u5e15\u65af\u5361\u5f0f\u547d\u540d\u6cd5"),"\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u6587\u4ef6\u4e2d\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6216\u4e00\u4e2a Class \u7ec4\u4ef6")),(0,r.kt)("h2",o({},{id:"\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6"}),"\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.3.0-beta.0")," \u8d77\u652f\u6301")),(0,r.kt)("p",null,"\u7531\u4e8e\u4e00\u4e2a\u6587\u4ef6\u4e0d\u80fd\u5b9a\u4e49\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u4f46\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u7ec4\u4ef6\u5185\u90e8\u7684\u62bd\u8c61\u7ec4\u4ef6\uff0c\u8fd9\u65f6\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6\u5c31\u662f\u4f60\u60f3\u8981\u7b54\u6848\u3002\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a Class \u7ec4\u4ef6\uff0c\u5b83\u5305\u62ec\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," \u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Footer"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class SomePage extends Taro.Component {\n  renderHeader () {\n    const { header } = this.state\n    return <View>{header}</View>\n  }\n\n  renderFooter (footer) {\n    return <View>{footer}</View>\n  }\n\n  render () {\n    return (\n      <View>\n        {this.renderHeader()}\n        {...}\n        {this.renderFooter('footer')}\n      </View>\n    )\n  }\n}\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"renderHeader")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"renderFooter")," \u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbf\u95ee\u7c7b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u4e0d\u9650\u91cf\u7684\u53c2\u6570\uff0c\u8fd9\u7c7b\u578b\u7684\u51fd\u6570\u4e5f\u53ef\u4ee5\u8c03\u7528\u65e0\u9650\u6b21\u6570\u3002\u4f46\u8fd9\u6837\u7684\u5199\u6cd5\u4e5f\u5b58\u5728\u4e00\u4e9b\u9650\u5236\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u51fd\u6570\u7684\u547d\u540d\u5fc5\u987b\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"render")," \u5f00\u5934\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"render")," \u540e\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u9700\u8981\u5927\u5199"),(0,r.kt)("li",{parentName:"ol"},"\u51fd\u6570\u7684\u53c2\u6570\u4e0d\u5f97\u4f20\u5165 JSX \u5143\u7d20\u6216 JSX \u5143\u7d20\u5f15\u7528"),(0,r.kt)("li",{parentName:"ol"},"\u51fd\u6570\u4e0d\u80fd\u9012\u5f52\u5730\u8c03\u7528\u81ea\u8eab")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f62\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"renderHeader")," \u8fd9\u6837\u7684\u51fd\u6570\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4f1a\u7f16\u8bd1\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"template"),"\uff0c\u800c\u5c0f\u7a0b\u5e8f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"template")," \u662f\u65e0\u6cd5\u505a\u5230\u9012\u5f52\u8c03\u7528\u81ea\u8eab\u7684\u3002\u5f53\u4f60\u6709\u8fd9\u6837\u7684\u9700\u6c42\u65f6\uff0c\u53ef\u4ee5\u65b0\u5efa\u4e24\u4e2a\u4e00\u6a21\u4e00\u6837\u7684\u7ec4\u4ef6\u548c\u6587\u4ef6\uff1aComponentA \u548c ComponentB\uff0c\u5728 ComponentA \u4e2d\u8c03\u7528 ComponentB\uff0c\u5728 ComponentB \u4e2d\u8c03\u7528 ComponnetA\u3002")),(0,r.kt)("h2",o({},{id:"\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6"}),"\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.3.0-beta.2")," \u8d77\u652f\u6301")),(0,r.kt)("p",null,"\u5728\u4e00\u4e2a\u666e\u901a\u7684\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u53e6\u5916\u7684\u62bd\u8c61\u7ec4\u4ef6\u591a\u6b21\u8c03\u7528\uff0c\u540c\u65f6\u6211\u4eec\u8fd8\u5e0c\u671b\u8fd9\u4e2a\u62bd\u8c61\u7ec4\u4ef6\u80fd\u8bbf\u95ee\u5230\u6211\u4eec\u5f53\u524d\u4f5c\u7528\u57df\u7684\u503c\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"function Header ({ user }) {\n  const name = user.name\n  const renderTitle = () => {\n    // renderTitle \u6bcf\u6b21\u90fd\u80fd\u83b7\u53d6\u5230\u5f53\u524d\u4f5c\u7528\u57df `name` \u7684\u503c\n    return <View>Welcome, {name}</View>\n  }\n  return (\n    <View>\n      {/* \u91cd\u8981\u4eba\u58eb\u6211\u4eec\u8981\u6b22\u8fce\u4ed6\u4e09\u6b21 */ }\n      {renderTitle()}\n      {renderTitle()}\n      {renderTitle()}\n    </View>\n  )\n}\n")),(0,r.kt)("p",null,"\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6\u9075\u5faa\u6240\u6709\u7c7b\u51fd\u6570\u5f0f\u7684\u9650\u5236\uff0c\u5305\u62ec\u547d\u540d\uff0c\u4f20\u53c2\uff0c\u8c03\u7528\uff0c\u5e76\u4e14\u5b83\u53ea\u80fd\u5728\u4e00\u4e2a\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6216\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.Component")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," \u51fd\u6570\u4e2d\u5b9a\u4e49\u53ca\u8c03\u7528\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e00\u822c\u60c5\u51b5\u4e0b\u53ea\u5efa\u8bae\u5728\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff0c\u800c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.Component")," \u4e2d\u53ef\u4ee5\u663e\u5f0f\u5730\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6\u548c\u5b83\u7684\u53c2\u6570\u548c\u7b7e\u540d\uff0c\u8fd9\u6837\u51fd\u6570\u7684\u4f5c\u7528\u57df\u66f4\u4e3a\u6e05\u6670\u4e5f\u66f4\u6613\u7ef4\u62a4\u3002")))}m.isMDXComponent=!0}}]);