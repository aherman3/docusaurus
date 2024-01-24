"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(b,l(l({ref:t},i),{},{components:a})):n.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),u=a(16550),c=a(91980),s=a(67392),i=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,s]=b({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var y=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:u,selectValue:c,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),n=s[a].value;n!==u&&(p(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":u===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function k(e){const t=(0,y.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},97250:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const u={title:"Create a bot"},c=void 0,s={unversionedId:"howto/degraded/degraded-wechaty",id:"howto/degraded/degraded-wechaty",title:"Create a bot",description:"We have the world's shortest lines code of chatbot in all programming languages!",source:"@site/docs/howto/degraded/degraded-wechaty.md",sourceDirName:"howto/degraded",slug:"/howto/degraded/degraded-wechaty",permalink:"/zh/docs/howto/degraded/degraded-wechaty",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/degraded/degraded-wechaty.md",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1634707553,formattedLastUpdatedAt:"2021\u5e7410\u670820\u65e5",frontMatter:{title:"Create a bot"}},i={},p=[],d={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We have the world's shortest lines code of chatbot in all programming languages!")),(0,r.kt)(o.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  // TODO: init your bot at here...\n  // bot.on('scan', console.info)\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Wechaty }  from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  // TODO: init your bot at here...\n  // bot.on('scan', console.info)\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n"))),(0,r.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n  bot = Wechaty()\n  # TODO: init your bot at here\n  await bot.start()\n\nasyncio.run(main())\n"))),(0,r.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  bot = wechaty.NewWechaty()\n  // TODO: init your bot at here...\n  bot.Start()\n}\n'))),(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = new Wechaty()\n    // TODO: init your bot at here...\n    bot.start(true);\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$bot = \\IO\\Github\\Wechaty\\Wechaty::getInstance();\n// TODO: init your bot at here...\n$bot->start();\n"))),(0,r.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    bot = new Wechaty()\n    // TODO: init your bot at here\n    bot.start()\n    Thread.currentThread().join()\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var bot = new Wechaty()\n// TODO: init your bot at here...\nbot.Start();\n"))),(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use std::env;\n\nuse wechaty::prelude::*;\nuse wechaty_puppet_service::PuppetService;\n\nlet bot = Wechaty::new();\n// TODO: init your bot at here...\nbot\n  .start()\n  .await;\n")))))}b.isMDXComponent=!0}}]);