"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[1419],{26535:function(e,t,a){a.r(t);var l=a(93106),n=a(30781),r=a(48446);const c={};r.forEach((e=>{(e.value||[]).forEach((e=>{var t;c[null==e?void 0:e.key]=!0;const a=(null==e||null===(t=e.value)||void 0===t?void 0:t.properties)||{};Object.keys(a).forEach((e=>{c[e]=!0}))}))})),t.default=function(){const[e,t]=(0,l.useState)(""),a=(e=>{const t=[];return e.match(/^bind/)||r.forEach((a=>{const l=a.value.filter((t=>t.key.toLowerCase()===e.toLowerCase()||t.value.properties[e]||t.value.properties[e.replace(/^on/,"bind")]||Object.keys(t.value.properties).some((t=>t.toLowerCase()===e.toLowerCase()||t.toLowerCase()===e.replace(/^on/,"bind").toLowerCase()))));l.length&&t.push({key:a.key,value:l})})),t})(e),s=[];return a.forEach((e=>{e.value.forEach((e=>{s.includes(e.key)||s.push(e.key)}))})),l.createElement(n.Z,{permalink:"/caniuse"},l.createElement("div",{className:"can-i-use-wrap"},l.createElement("div",{className:"d-flex align-items-center justify-content-center w-100 mb-5"},l.createElement("details",null,l.createElement("summary",null,l.createElement("label",{htmlFor:"can-i-use"},"Can I use"),l.createElement("input",{list:"use-list",id:"can-i-use",name:"can-i-use",type:"text",value:e,onChange:e=>{t(e.target.value)}}),l.createElement("label",null,"?")),"\u5f53\u524d\u652f\u6301",l.createElement("strong",null,"\u7ec4\u4ef6\u5e93"),"\u7cbe\u786e\u67e5\u8be2\uff0c\u53ef\u5339\u914d\u7ec4\u4ef6\u540d\u3001\u5c5e\u6027\u540d"),l.createElement("datalist",{id:"use-list"},Object.keys(c).map((e=>l.createElement("option",{value:e}))))),l.createElement("div",{className:"w-100"},s.map((e=>l.createElement(l.Fragment,{key:e},l.createElement("h3",null,e),l.createElement("table",{className:"mb-5"},l.createElement("thead",null,l.createElement("tr",null,a.map((e=>l.createElement("th",{width:1e3/a.length+"px",key:e.key},e.key))))),l.createElement("tbody",null,l.createElement("tr",null,a.map((t=>{const a=t.value.find((t=>t.key===e));return l.createElement("td",{key:t.key},a?"\u2705":"\u274c")})))))))))))}}}]);