"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[2197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),d=p,y=l["".concat(c,".").concat(d)]||l[d]||h[d]||n;return r?a.createElement(y,o(o({ref:t},u),{},{components:r})):a.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,o=new Array(n);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:p,o[1]=i;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(87462),p=(r(67294),r(3905));const n={title:"FAQ - Wechaty Puppet Services",sidebar_label:"Puppet Services: FAQ"},o=void 0,i={unversionedId:"puppet-services/faq",id:"puppet-services/faq",title:"FAQ - Wechaty Puppet Services",description:'What is a "Wechaty Puppet"?',source:"@site/docs/puppet-services/faq.md",sourceDirName:"puppet-services",slug:"/puppet-services/faq",permalink:"/zh/docs/puppet-services/faq",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-services/faq.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1641447011,formattedLastUpdatedAt:"2022\u5e741\u67086\u65e5",frontMatter:{title:"FAQ - Wechaty Puppet Services",sidebar_label:"Puppet Services: FAQ"},sidebar:"docs",previous:{title:"Puppet Service: DIY",permalink:"/zh/docs/puppet-services/diy"},next:{title:"Specs: Overview",permalink:"/zh/docs/specs/"}},c={},s=[{value:"What is a &quot;Wechaty Puppet&quot;?",id:"what-is-a-wechaty-puppet",level:2},{value:"What is a &quot;Wechaty Puppet Provider&quot; and  <em>&quot;Wechaty Puppet Service&quot;</em>?",id:"what-is-a-wechaty-puppet-provider-and--wechaty-puppet-service",level:2},{value:"How To Become a Wechaty Puppet Service Provider",id:"how-to-become-a-wechaty-puppet-service-provider",level:2},{value:"Learn More",id:"learn-more",level:2}],u={toc:s},l="wrapper";function h(e){let{components:t,...r}=e;return(0,p.kt)(l,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"what-is-a-wechaty-puppet"},'What is a "Wechaty Puppet"?'),(0,p.kt)("p",null,"For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA modules for each, and we call those modules Wechaty Puppet. Wechaty Puppet is the core concept in the Wechaty ecosystem, which is in charge of connecting the Wechaty API to the underlying IM Platform bot account."),(0,p.kt)("h2",{id:"what-is-a-wechaty-puppet-provider-and--wechaty-puppet-service"},'What is a "Wechaty Puppet Provider" and  ',(0,p.kt)("em",{parentName:"h2"},'"Wechaty Puppet Service"'),"?"),(0,p.kt)("p",null,"Different IM systems need different Wechaty Puppets. They have different names and after implementing the Wechaty Puppet API, they are called Wechaty Puppet Providers. For example, the Wechaty Puppet Provider who is supporting WeChat is named wechaty-puppet-wechat, supporting Whatsapp is named wechaty-puppet-whatsapp, and supporting Lark is named wechaty-puppet-lark."),(0,p.kt)("h2",{id:"how-to-become-a-wechaty-puppet-service-provider"},"How To Become a Wechaty Puppet Service Provider"),(0,p.kt)("p",null,"If you want to become a Wechaty Puppet Service Provider, please do not hesitate to file an issue to introduce yourself in this repository, then contact ",(0,p.kt)("a",{parentName:"p",href:"mailto:rui@chatie.io"},"rui@chatie.io"),"!"),(0,p.kt)("p",null,"Please feel free to list yourself to our list at ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/"},"Wechaty Puppet Provider Repo"),", and add your introduction in this README by submitting a Pull Request!"),(0,p.kt)("h2",{id:"learn-more"},"Learn More"),(0,p.kt)("p",null,"You can read more about this from this blog post : ",(0,p.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service")),(0,p.kt)("p",null,"More Puppet Service Providers are welcomed, please learn more from ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services"},"here")," and feel free to contact us by joining our Gitter network if you aren\u2019t already a member."))}h.isMDXComponent=!0}}]);