"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[72542],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),k=r,h=p["".concat(u,".").concat(k)]||p[k]||s[k]||o;return n?l.createElement(h,a(a({ref:t},d),{},{components:n})):l.createElement(h,a({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22569:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var l=n(83117),r=n(80102),o=(n(67294),n(3905)),a=["components"],i={title:"Taro.onBluetoothDeviceFound(callback)",sidebar_label:"onBluetoothDeviceFound"},u=void 0,c={unversionedId:"apis/device/bluetooth/onBluetoothDeviceFound",id:"apis/device/bluetooth/onBluetoothDeviceFound",title:"Taro.onBluetoothDeviceFound(callback)",description:"Listens on the new device discovery event.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/bluetooth/onBluetoothDeviceFound.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/onBluetoothDeviceFound",permalink:"/taro/en/docs/next/apis/device/bluetooth/onBluetoothDeviceFound",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/device/bluetooth/onBluetoothDeviceFound.md",tags:[],version:"current",frontMatter:{title:"Taro.onBluetoothDeviceFound(callback)",sidebar_label:"onBluetoothDeviceFound"},sidebar:"API",previous:{title:"openBluetoothAdapter",permalink:"/taro/en/docs/next/apis/device/bluetooth/openBluetoothAdapter"},next:{title:"onBluetoothAdapterStateChange",permalink:"/taro/en/docs/next/apis/device/bluetooth/onBluetoothAdapterStateChange"}},d=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3},{value:"CallbackResultBlueToothDevice",id:"callbackresultbluetoothdevice",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Listens on the new device discovery event."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If a device is called back in ",(0,o.kt)("inlineCode",{parentName:"li"},"Taro.onBluetoothDeviceFound"),", this device is added to the array obtained by the ",(0,o.kt)("inlineCode",{parentName:"li"},"Taro.getBluetoothDevices")," API."),(0,o.kt)("li",{parentName:"ul"},"Some Android models require location permissions before they can discover devices. Be sure to grant location permissions in such cases.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("p",null,"The callback function for the new device discovery event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"result"),(0,o.kt)("td",null,(0,o.kt)("code",null,"CallbackResult"))))),(0,o.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"devices"),(0,o.kt)("td",null,(0,o.kt)("code",null,"CallbackResultBlueToothDevice[]")),(0,o.kt)("td",null,"The list of newly discovered devices")))),(0,o.kt)("h3",{id:"callbackresultbluetoothdevice"},"CallbackResultBlueToothDevice"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"RSSI"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"The signal strength of the current Bluetooth device")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"advertisData"),(0,o.kt)("td",null,(0,o.kt)("code",null,"ArrayBuffer")),(0,o.kt)("td",null,"The ManufacturerData field in the broadcast data field of the current Bluetooth device")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"advertisServiceUUIDs"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string[]")),(0,o.kt)("td",null,"The ServiceUUIDs field in the broadcast data field of the current Bluetooth device")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"deviceId"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Device ID")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"localName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The LocalName field in the broadcast data field of the current Bluetooth device")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"name"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The name of the Bluetooth device. Some devices may not have a name.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"serviceData"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Record<string, any>")),(0,o.kt)("td",null,"The ServiceData field in the broadcast data field of the current Bluetooth device")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// Example of an ArrayBuffer converted to a hexadecimal string\nfunction ab2hex(buffer) {\n  var hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.onBluetoothDeviceFound(function (res) {\n  var devices = res.devices;\n  console.log('new device list has founded')\n  console.dir(devices)\n  console.log(ab2hex(devices[0].advertisData))\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.onBluetoothDeviceFound"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);