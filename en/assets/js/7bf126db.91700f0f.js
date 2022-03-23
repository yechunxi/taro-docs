"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[55898],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"CanvasGradient",sidebar_label:"CanvasGradient"},p=void 0,d={unversionedId:"apis/canvas/CanvasGradient",id:"version-3.x/apis/canvas/CanvasGradient",title:"CanvasGradient",description:"The gradient object.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/canvas/CanvasGradient.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/CanvasGradient",permalink:"/taro/en/docs/apis/canvas/CanvasGradient",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/canvas/CanvasGradient.md",tags:[],version:"3.x",frontMatter:{title:"CanvasGradient",sidebar_label:"CanvasGradient"},sidebar:"API",previous:{title:"CanvasContext",permalink:"/taro/en/docs/apis/canvas/CanvasContext"},next:{title:"Color",permalink:"/taro/en/docs/apis/canvas/Color"}},c=[{value:"Methods",id:"methods",children:[{value:"addColorStop",id:"addcolorstop",children:[{value:"Sample Code",id:"sample-code",children:[],level:4},{value:"API Support",id:"api-support",children:[],level:4}],level:3}],level:2},{value:"API Support",id:"api-support-1",children:[],level:2}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The gradient object."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/CanvasGradient.html"},"Reference"))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"addcolorstop"},"addColorStop"),(0,o.kt)("p",null,"Adds color gradient points. Areas less than the minimum stop are rendered with the color of the minimum stop. Areas greater than the maximum stop are rendered with the color of the maximum stop."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/CanvasGradient.addColorStop.html"},"Reference"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(stop: number, color: string) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"stop"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Represents a position between the start and end of the gradient. Value range: 0-1.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"color"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The color of the gradient point.")))),(0,o.kt)("h4",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const ctx = Taro.createCanvasContext('myCanvas')\n// Create circular gradient\nconst grd = ctx.createLinearGradient(30, 10, 120, 10)\ngrd.addColorStop(0, 'red')\ngrd.addColorStop(0.16, 'orange')\ngrd.addColorStop(0.33, 'yellow')\ngrd.addColorStop(0.5, 'green')\ngrd.addColorStop(0.66, 'cyan')\ngrd.addColorStop(0.83, 'blue')\ngrd.addColorStop(1, 'purple')\n// Fill with gradient\nctx.setFillStyle(grd)\nctx.fillRect(10, 10, 150, 80)\nctx.draw()\n")),(0,o.kt)("h4",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"CanvasGradient.addColorStop"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))),(0,o.kt)("h2",{id:"api-support-1"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"CanvasGradient.addColorStop"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);