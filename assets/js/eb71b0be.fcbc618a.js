"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[3793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"RPA"},i=void 0,s={unversionedId:"explanations/rpa",id:"explanations/rpa",title:"RPA",description:"Wechaty is a RPA SDK.",source:"@site/docs/explanations/rpa.md",sourceDirName:"explanations",slug:"/explanations/rpa",permalink:"/docs/explanations/rpa",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/explanations/rpa.md",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1631298410,formattedLastUpdatedAt:"Sep 10, 2021",frontMatter:{title:"RPA"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/explanations/"},next:{title:"Concepts",permalink:"/docs/explanations/concepts"}},l={},c=[{value:"1. What is RPA (Robotic Process Automation)",id:"what-is-rpa",level:2},{value:"2. Why Conversational RPA",id:"conversational-rpa",level:2},{value:"RPA Blogs",id:"rpa-blogs",level:2},{value:"Contact Us",id:"contact-us",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Wechaty is a RPA SDK."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"What is ",(0,n.kt)("a",{parentName:"li",href:"#what-is-rpa"},"RPA"),"?"),(0,n.kt)("li",{parentName:"ol"},"Why ",(0,n.kt)("a",{parentName:"li",href:"#conversational-rpa"},"Conversational RPA"),"?")),(0,n.kt)("h2",{id:"what-is-rpa"},"1. What is RPA (Robotic Process Automation)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Robotic Process Automation is the technology that allows anyone today to configure computer software, or a \u201crobot\u201d to emulate and integrate the actions of a human interacting within digital systems to execute a business process. RPA robots utilize the user interface to capture data and manipulate applications just like humans do. They interpret, trigger responses and communicate with other systems in order to perform on a vast variety of repetitive tasks. Only substantially better: an RPA software robot never sleeps and makes zero mistakes.\n","\u2014"," ",(0,n.kt)("a",{parentName:"p",href:"https://www.uipath.com/rpa/robotic-process-automation"},"UIPath"))),(0,n.kt)("h2",{id:"conversational-rpa"},"2. Why Conversational RPA"),(0,n.kt)("p",null,"Conversational RPA (cRPA) Connecting any chatbot system to Conversational AI. We developed this as an SDK published in GitHub and this module can be set for any Conversationl AI/Chatbot system that the enterprise prefers."),(0,n.kt)("h2",{id:"rpa-blogs"},"RPA Blogs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), Huan, Jan 14, 2021"))),(0,n.kt)("h2",{id:"contact-us"},"Contact Us"),(0,n.kt)("p",null,"You can ",(0,n.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}d.isMDXComponent=!0}}]);