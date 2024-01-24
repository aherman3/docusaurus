"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var f=a(72389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",w.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=y(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",w.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},86552:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={title:"Deploy in WeChat"},s=void 0,u={unversionedId:"howto/deploy-wechat",id:"howto/deploy-wechat",title:"Deploy in WeChat",description:"With all-in-one system and massive audience base, deploying Wechaty in WeChat can prove to be a good choice.In this how to guide, you will learn how to deploy the bot in WeChat locally and integrate bot from the list of examples present in starter templete.",source:"@site/docs/howto/deploy-wechat.mdx",sourceDirName:"howto",slug:"/howto/deploy-wechat",permalink:"/zh/docs/howto/deploy-wechat",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/deploy-wechat.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1634964975,formattedLastUpdatedAt:"2021\u5e7410\u670823\u65e5",frontMatter:{title:"Deploy in WeChat"},sidebar:"docs",previous:{title:"Send and receive files",permalink:"/zh/docs/howto/file-box"},next:{title:"Deploy in PadLocal",permalink:"/zh/docs/howto/deploy-padlocal"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Integration",id:"integration",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"References",id:"references",level:2},{value:"Blogs",id:"blogs",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With all-in-one system and massive audience base, deploying Wechaty in WeChat can prove to be a good choice.In this how to guide, you will learn how to deploy the bot in WeChat locally and integrate bot from the list of examples present in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deploy in WeChat",src:a(79983).Z,width:"1613",height:"382"})),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your system must have ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 12)."),(0,r.kt)("li",{parentName:"ol"},"Your system must have ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,r.kt)("li",{parentName:"ol"},"You must be familiar with ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-puppet-wechat"},"wechaty puppet wechat"),".")),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nnpm start\n"))),(0,r.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nnpm start\n"))),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat\nset WECHATY_PUPPET=wechaty-puppet-wechat\nnpm start\n")))),(0,r.kt)("h2",{id:"integration"},"Integration"),(0,r.kt)("p",null,"Let's take up an example on how to integrate bot from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete")," to WeChat. The step is similar for all other bots as well."),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Offical Wechaty package: ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"package/wechaty"),"."),(0,r.kt)("li",{parentName:"ol"},"QRCode terminal edition: ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/qrcode-terminal"},"package/qrcode-terminal"),".")),(0,r.kt)("p",null,"You can follow up the steps mentioned below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize the project by creating a new folder ",(0,r.kt)("inlineCode",{parentName:"li"},"my-bot"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"mkdir my-bot\ncd my-bot\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the dependencies using the following commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"npm install wechaty\nnpm install qrcode-terminal\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add the dependencies for using the bot with WeChat:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"npm install wechaty-puppet-wechat\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create a new folder ",(0,r.kt)("inlineCode",{parentName:"li"},"src")," and add a file ",(0,r.kt)("inlineCode",{parentName:"li"},"my-bot.js"),". Add your functions to the snippet below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Contact,\n  Message,\n  ScanStatus,\n  Wechaty,\n  log,\n} from 'wechaty'\n\nimport { qrTerm } = from 'qrcode-terminal'\n\nconsole.log(welcome)\nconst bot = new Wechaty()\n\n/*\n *Your function goes here\n */\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"After you are done with the file, you can run the bot using the following commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nnode src/my-bot.js\n")),(0,r.kt)("p",null,"Scan it using your WeChat and you are ready to play with the bot!"),(0,r.kt)("p",null,"You can deploy the bot with popular container solutions as well such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#a"},"Deploy with Heroku")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#b"},"Deploy with Docker"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find out some more information about puppet from ",(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"docs/puppet-providers"),"."),(0,r.kt)("li",{parentName:"ul"},"Find out the more bot repository from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started"),".")),(0,r.kt)("h2",{id:"blogs"},"Blogs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/17/python-wechaty-use-web/"},"Teach you to use python-wecahty and web protocol to develop robots"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/16/go-wechaty-use-web/"},"Teach you to use go-wecahty and web protocol to develop robots"),".")))}h.isMDXComponent=!0},79983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-wechat-02a5347111d1c2a2959ec88d5ad32af9.webp"}}]);