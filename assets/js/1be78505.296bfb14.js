"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29514,14491],{5113:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var a=n(93106),r=n(4706),l=n(27127),o=n(93072),c=n(85082),i=n(7236),s=n(39849),u=n(39446),d=n(30781),m=n(20243),p=n(74956),b=n(37471);var f="backToTopButton_vZ6Z",h="backToTopButtonShow_QzAN";function v(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:l,cancelScroll:o}=(0,p.Ct)();return(0,p.RF)((({scrollY:t},a)=>{const l=null==a?void 0:a.scrollY;l&&(r.current?r.current=!1:t>=l?(o(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,b.S)((e=>{e.location.hash&&(r.current=!0,n(!1))})),{shown:t,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,f,e&&h),type:"button",onClick:t})}var g=n(24755),E=n(87776),y=n(78771),k=n(11451);function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function O(e){return a.createElement("svg",_({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var C="collapseSidebarButton_BKgN",S="collapseSidebarButtonIcon_cRXl";function I({onClick:e}){return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",C),onClick:e},a.createElement(O,{className:S}))}var x=n(88802),w=n(54066);const N=Symbol("EmptyContext"),P=a.createContext(N);function j({children:e}){const[t,n]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return a.createElement(P.Provider,{value:r},e)}var Z=n(78058),T=n(79736),A=n(66281),L=n(85959);function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function H({categoryLabel:e,onClick:t}){return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function W(e){var{item:t,onItemClick:n,activePath:l,level:c,index:s}=e,u=B(e,["item","onItemClick","activePath","level","index"]);const{items:d,label:m,collapsible:p,className:b,href:f}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,y.L)(),v=function(e){const t=(0,L.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,l),E=(0,T.Mg)(f,l),{collapsed:k,setCollapsed:_}=(0,Z.u)({initialState:()=>!!p&&(!g&&t.collapsed)}),{expandedItem:O,setExpandedItem:C}=function(){const e=(0,a.useContext)(P);if(e===N)throw new w.i6("DocSidebarItemsExpandedStateProvider");return e}(),S=(e=!k)=>{C(e?null:s),_(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const r=(0,w.D9)(e);(0,a.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:g,collapsed:k,updateCollapsed:S}),(0,a.useEffect)((()=>{p&&null!=O&&O!==s&&h&&_(!0)}),[p,O,s,_,h]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},b)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":E})},a.createElement(A.Z,M({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!f&&p,"menu__link--active":g}),onClick:p?e=>{null==n||n(t),f?S(!1):(e.preventDefault(),S())}:()=>{null==n||n(t)},"aria-current":E?"page":void 0,"aria-expanded":p?!k:void 0,href:p?null!=v?v:"#":v},u),m),f&&p&&a.createElement(H,{categoryLabel:m,onClick:e=>{e.preventDefault(),S()}})),a.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(ee,{items:d,tabIndex:k?-1:0,onItemClick:n,activePath:l,level:c+1})))}var F=n(50429),R=n(34782),D="menuExternalLink_UQcg";function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z.apply(this,arguments)}function U(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function q(e){var{item:t,onItemClick:n,activePath:l,level:c,index:s}=e,u=U(e,["item","onItemClick","activePath","level","index"]);const{href:d,label:m,className:p,autoAddBaseUrl:b}=t,f=(0,i._F)(t,l),h=(0,F.Z)(d);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",p),key:m},a.createElement(A.Z,z({className:(0,r.Z)("menu__link",!h&&D,{"menu__link--active":f}),autoAddBaseUrl:b,"aria-current":f?"page":void 0,to:d},h&&{onClick:n?()=>n(t):void 0},u),m,!h&&a.createElement(R.Z,null)))}var K="menuHtmlItem_g034";function V({item:e,level:t,index:n}){const{value:l,defaultStyle:c,className:i}=e;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(t),c&&[K,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:l}})}function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Y.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Q(e){var{item:t}=e,n=G(e,["item"]);switch(t.type){case"category":return a.createElement(W,Y({item:t},n));case"html":return a.createElement(V,Y({item:t},n));default:return a.createElement(q,Y({item:t},n))}}function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},X.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $(e){var{items:t}=e,n=J(e,["items"]);return a.createElement(j,null,t.map(((e,t)=>a.createElement(Q,X({key:t,item:e,index:t},n)))))}var ee=(0,a.memo)($),te="menu_Amqb",ne="menuWithAnnouncementBar_tdoX";function ae({path:e,sidebar:t,className:n}){const l=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,p.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",te,l&&ne,n)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(ee,{items:t,activePath:e,level:1})))}var re="sidebar_HOgA",le="sidebarWithHideableNavbar_toAO",oe="sidebarHidden_Ogj4",ce="sidebarLogo_HE0t";function ie({path:e,sidebar:t,onCollapse:n,isHidden:l}){const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:c}}}=(0,y.L)();return a.createElement("div",{className:(0,r.Z)(re,o&&le,l&&oe)},o&&a.createElement(k.Z,{tabIndex:-1,className:ce}),a.createElement(ae,{path:e,sidebar:t}),c&&a.createElement(I,{onClick:n}))}var se=a.memo(ie),ue=n(11139),de=n(81319);const me=({sidebar:e,path:t})=>{const n=(0,de.e)();return a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(ee,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function pe(e){return a.createElement(ue.Zo,{component:me,props:e})}var be=a.memo(pe);function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fe.apply(this,arguments)}function he(e){const t=(0,E.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(se,fe({},e)),r&&a.createElement(be,fe({},e)))}var ve="expandButton_LKnE",ge="expandButtonIcon__ZIq";function Ee({toggleSidebar:e}){return a.createElement("div",{className:ve,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},a.createElement(O,{className:ge}))}var ye="docSidebarContainer_OKSM",ke="docSidebarContainerHidden_otfM";function _e({children:e}){const t=(0,u.V)();var n;return a.createElement(a.Fragment,{key:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar"},e)}function Oe({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:l}=(0,g.TH)(),[c,i]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{c&&i(!1),n((e=>!e))}),[n,c]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,ye,t&&ke),onTransitionEnd:e=>{e.currentTarget.classList.contains(ye)&&t&&i(!0)}},a.createElement(_e,null,a.createElement(he,{sidebar:e,path:l,onCollapse:s,isHidden:c})),c&&a.createElement(Ee,{toggleSidebar:s}))}var Ce={docMainContainer:"docMainContainer_PpD4",docMainContainerEnhanced:"docMainContainerEnhanced_yT7x",docItemWrapperEnhanced:"docItemWrapperEnhanced_gPY0"};function Se({hiddenSidebarContainer:e,children:t}){const n=(0,u.V)();return a.createElement("main",{className:(0,r.Z)(Ce.docMainContainer,(e||!n)&&Ce.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Ce.docItemWrapper,e&&Ce.docItemWrapperEnhanced)},t))}var Ie="docPage_ACPr",xe="docsWrapper_toeG";function we({children:e}){const t=(0,u.V)(),[n,r]=(0,a.useState)(!1);return a.createElement(d.Z,{wrapperClassName:xe},a.createElement(v,null),a.createElement("div",{className:Ie},t&&a.createElement(Oe,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}),a.createElement(Se,{hiddenSidebarContainer:n},e)))}var Ne=n(14491),Pe=n(59207);function je(){return je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},je.apply(this,arguments)}function Ze(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Pe.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Te(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(Ne.default,null);const{docElement:c,sidebarName:d,sidebarItems:m}=n;return a.createElement(a.Fragment,null,a.createElement(Ze,je({},e)),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(u.b,{name:d,items:m},a.createElement(we,null,c)))))}},39849:function(e,t,n){n.d(t,{E:function(){return c},q:function(){return o}});var a=n(93106),r=n(54066);const l=a.createContext(null);function o({children:e,version:t}){return a.createElement(l.Provider,{value:t},e)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},14491:function(e,t,n){n.r(t);var a=n(93106),r=n(30781),l=n(24755),o=n(21186),c=n(97988);t.default=function(){const{pathname:e=""}=(0,l.TH)(),{siteConfig:{baseUrl:t=""}}=(0,o.Z)(),n=(0,c.Z)(e);if(n.endsWith(".html")){const e=function(e,t){let n=t||"/",a=new RegExp(n+"{1,}","g");return e.join(n).replace(a,n)}([t,t]);return a.createElement(l.l_,{to:n.slice(n.startsWith(e)?t.length-1:0,-5)})}return a.createElement(r.Z,{title:"Page Not Found"},a.createElement("div",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},"404"),a.createElement("p",null,"We could not find what you were looking for."),a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);