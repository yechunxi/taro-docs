"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[27918],{65542:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ee}});var a=n(93106),r=n(54660),l=n(52700);const o=a.createContext(null);function c({children:e,content:t}){const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return a.createElement(o.Provider,{value:n},e)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();var l;return a.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:null!==(l=n.image)&&void 0!==l?l:t.image})}var d=n(4706),u=n(89001),m=n(64107),f=n(77763);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}function p(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(f.Z,v({},t,{subLabel:a.createElement(m.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(f.Z,v({},n,{subLabel:a.createElement(m.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=s();return a.createElement(p,{previous:e.previous,next:e.next})}var h=n(82684),g=n(13645),E=n(85140),y=n(66022),L=n(122),O=n(78554);function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}const k={unreleased:function({siteTitle:e,versionMetadata:t}){return a.createElement(m.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return a.createElement(m.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){const t=k[e.versionMetadata.banner];return a.createElement(t,N({},e))}function w({versionLabel:e,to:t,onClick:n}){return a.createElement(m.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:a.createElement("b",null,a.createElement(g.Z,{to:t,onClick:n},a.createElement(m.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=(0,h.Z)(),{pluginId:r}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,L.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,E.Jo)(r),s=null!=o?o:(i=c).docs.find((e=>e.id===i.mainDocId));var i;return a.createElement("div",{className:(0,d.Z)(e,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(_,{siteTitle:n,versionMetadata:t})),a.createElement("div",{className:"margin-top--md"},a.createElement(w,{versionLabel:c.label,to:s.path,onClick:()=>l(c.name)})))}function C({className:e}){const t=(0,O.E)();return t.banner?a.createElement(x,{className:e,versionMetadata:t}):null}function Z({className:e}){const t=(0,O.E)();return t.badge?a.createElement("span",{className:(0,d.Z)(e,y.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(m.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}function H({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return a.createElement(m.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function j({lastUpdatedBy:e}){return a.createElement(m.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,e)}}," by {user}")}function T({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:n}){return a.createElement("span",{className:y.k.common.lastUpdated},a.createElement(m.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?a.createElement(H,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:n?a.createElement(j,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var U=n(42989),A=n(54041),P="lastUpdated_Ui5R";function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(this,arguments)}function I(e){return a.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(A.Z,M({},e))))}function S({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:n,formattedLastUpdatedAt:r}){return a.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},e&&a.createElement(U.Z,{editUrl:e})),a.createElement("div",{className:(0,d.Z)("col",P)},(t||n)&&a.createElement(T,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:n})))}function B(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l,tags:o}=e,c=o.length>0,i=!!(t||n||l);return c||i?a.createElement("footer",{className:(0,d.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(I,{tags:o}),i&&a.createElement(S,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var V=n(35005),D=n(36037),R="tocCollapsibleButton_vuFV",F="tocCollapsibleButtonExpanded_rKeV";function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $(e){var{collapsed:t}=e,n=q(e,["collapsed"]);return a.createElement("button",z({type:"button"},n,{className:(0,d.Z)("clean-btn",R,!t&&F,n.className)}),a.createElement(m.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var G="tocCollapsible_XsS_",J="tocCollapsibleContent_pgDT",Y="tocCollapsibleExpanded_Y17o";function K({toc:e,className:t,minHeadingLevel:n,maxHeadingLevel:r}){const{collapsed:l,toggleCollapsed:o}=(0,V.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(G,!l&&Y,t)},a.createElement($,{collapsed:l,onClick:o}),a.createElement(V.z,{lazy:!0,className:J,collapsed:l},a.createElement(D.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:r})))}var Q="tocMobile_TAyH";function X(){const{toc:e,frontMatter:t}=s();return a.createElement(K,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(y.k.docs.docTocMobile,Q)})}var W=n(73529);function ee(){const{toc:e,frontMatter:t}=s();return a.createElement(W.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}var te=n(33598),ne=n(24399);function ae({children:e}){const t=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(y.k.docs.docMarkdown,"markdown")},t&&a.createElement("header",null,a.createElement(te.Z,{as:"h1"},t)),a.createElement(ne.Z,null,e))}var re=n(73103),le=n(9798),oe=n(37461);function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ce.apply(this,arguments)}function se(e){return a.createElement("svg",ce({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var ie="breadcrumbHomeIcon_QZHO";function de(){const e=(0,oe.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(g.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(se,{className:ie})))}var ue="breadcrumbsContainer_mBGU";function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},me.apply(this,arguments)}function fe({children:e,href:t,isLast:n}){const r="breadcrumbs__link";return n?a.createElement("span",{className:r,itemProp:"name"},e):t?a.createElement(g.Z,{className:r,href:t,itemProp:"item"},a.createElement("span",{itemProp:"name"},e)):a.createElement("span",{className:r},e)}function ve({children:e,active:t,index:n,addMicrodata:r}){return a.createElement("li",me({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})}),e,a.createElement("meta",{itemProp:"position",content:String(n+1)}))}function pe(){const e=(0,re.s1)(),t=(0,le.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(y.k.docs.docBreadcrumbs,ue),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(de,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(ve,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(fe,{href:t.href,isLast:r},t.label))})))):null}var be="docItemContainer_bqly",he="docItemCol_un5t";function ge({children:e}){const t=function(){const{frontMatter:e,toc:t}=s(),n=(0,u.i)(),r=e.hide_table_of_contents,l=!r&&t.length>0;return{hidden:r,mobile:l?a.createElement(X,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(ee,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!t.hidden&&he)},a.createElement(C,null),a.createElement("div",{className:be},a.createElement("article",null,a.createElement(pe,null),a.createElement(Z,null),t.mobile,a.createElement(ae,null,e),a.createElement(B,null)),a.createElement(b,null))),t.desktop&&a.createElement("div",{className:"col col--3"},t.desktop))}function Ee(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(i,null),a.createElement(ge,null,a.createElement(n,null))))}},73529:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(93106),r=n(4706),l=n(36037),o="tableOfContents_Y0VM";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function i(e){var{className:t}=e,n=s(e,["className"]);return a.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},a.createElement(l.Z,c({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},36037:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(93106),r=n(48648);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e){const t=e.map((e=>o({},e,{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n}=e,r=c(e,["parentIndex"]);n>=0?t[n].children.push(r):a.push(r)})),a}function i({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const a=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[o({},e,{children:a})]:a}))}function d(e){const t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function u(e,{anchorTopOffset:t}){const n=e.find((e=>d(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(n))?n:null!==(a=e[e.indexOf(n)-1])&&void 0!==a?a:null;var a}var r;return null!==(r=e[e.length-1])&&void 0!==r?r:null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let a=e;a<=t;a+=1)n.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=u(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function v({toc:e,className:t,linkClassName:n,isChild:r}){return e.length?a.createElement("ul",{className:r?void 0:t},e.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(v,{isChild:!0,toc:e.children,className:t,linkClassName:n}))))):null}var p=a.memo(v);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(e){var{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d}=e,u=h(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const m=(0,r.L)(),v=null!=c?c:m.tableOfContents.minHeadingLevel,g=null!=d?d:m.tableOfContents.maxHeadingLevel,E=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,a.useMemo)((()=>i({toc:s(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:t,minHeadingLevel:v,maxHeadingLevel:g});return f((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:g}}),[l,o,v,g])),a.createElement(p,b({toc:E,className:n,linkClassName:l},u))}},78554:function(e,t,n){n.d(t,{E:function(){return c},q:function(){return o}});var a=n(93106),r=n(52700);const l=a.createContext(null);function o({children:e,version:t}){return a.createElement(l.Provider,{value:t},e)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);