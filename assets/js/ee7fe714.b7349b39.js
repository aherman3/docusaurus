"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[5860],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),s=a(16550),i=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,p]=h({queryString:a,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),b(e)}),[p,b,o]),tabValues:o}}var g=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==s&&(c(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(f,(0,n.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},57544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const s={title:"Busy Bot"},i=void 0,p={unversionedId:"examples/advanced/busy-bot",id:"examples/advanced/busy-bot",title:"Busy Bot",description:"Powered by Wechaty",source:"@site/docs/examples/advanced/busy-bot.mdx",sourceDirName:"examples/advanced",slug:"/examples/advanced/busy-bot",permalink:"/docs/examples/advanced/busy-bot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/examples/advanced/busy-bot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1631790719,formattedLastUpdatedAt:"Sep 16, 2021",frontMatter:{title:"Busy Bot"},sidebar:"docs",previous:{title:"Contact Bot",permalink:"/docs/examples/basic/contact-bot"},next:{title:"Media File Bot",permalink:"/docs/examples/advanced/media-file-bot"}},u={},c=[{value:"Try out the bot",id:"try-out-the-bot",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"1. Clone the repository",id:"1-clone-the-repository",level:3},{value:"2. Install dependencies",id:"2-install-dependencies",level:3},{value:"3. Run the bot",id:"3-run-the-bot",level:3},{value:"Building the bot",id:"building-the-bot",level:2},{value:"1. Initialize project",id:"1-initialize-project",level:3},{value:"2. Install dependencies",id:"2-install-dependencies-1",level:3},{value:"3. Writing code for bot",id:"3-writing-code-for-bot",level:3},{value:"4. Running the bot",id:"4-running-the-bot",level:3},{value:"References",id:"references",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.javascript.com/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-JavaScript-blue.svg",alt:"JavaScript"}))),(0,r.kt)("p",null,"Busy bot sends an auto response message for you when you are busy."),(0,r.kt)("h2",{id:"try-out-the-bot"},"Try out the bot"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/sbis04/wechaty-busy-bot/tree/main/?fontsize=12&hidenavigation=1&module=%2Fbusy-bot.js&theme=dark"},(0,r.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wechaty-busy-bot"}))),(0,r.kt)("p",null,"You can try out the ",(0,r.kt)("strong",{parentName:"p"},"Wechaty Busy bot")," using this interactive CodeSandbox."),(0,r.kt)("p",null,"Just scan the generated QR code with ",(0,r.kt)("strong",{parentName:"p"},"WeChat")," app, and you are ready to play with the bot!"),(0,r.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/sbis04/wechaty-busy-bot/tree/main/?fontsize=12&hidenavigation=1&module=%2Fbusy-bot.js&theme=dark",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.dev/"},"Node.js")," v16+"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-services/"},"Wechaty Puppet Service TOKEN")," (if you want to use RPA protocols other than Web)")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Before getting started make sure you have ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," installed on your system. If you do not have ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," installed (or have a version below 12),\nthen you need to install the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,r.kt)("admonition",{title:"Node.js installation docs",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," in other platforms can be found ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),"."))),(0,r.kt)("p",null,"You can head over to ",(0,r.kt)("a",{parentName:"p",href:"#building-the-bot"},"Building the bot")," section to learn how to build the bot on your own."),(0,r.kt)("p",null,"Otherwise if you want to try out the bot on your local system, follow the steps below:"),(0,r.kt)("h3",{id:"1-clone-the-repository"},"1. Clone the repository"),(0,r.kt)("p",null,"Use the following command to clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Github repository")," and navigate to the directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/wechaty/wechaty-getting-started.git\ncd wechaty-getting-started\n")),(0,r.kt)("h3",{id:"2-install-dependencies"},"2. Install dependencies"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," packages required for running the bot using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("h3",{id:"3-run-the-bot"},"3. Run the bot"),(0,r.kt)("p",null,"You have to export/set environment variables."),(0,r.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There are various Wechaty puppets available, you can know more about them ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started#working-with-different-puppets"},"here"))),(0,r.kt)("p",null,"For running the bot, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx ts-node examples/advanced/busy-bot.js\n")),(0,r.kt)("p",null,"This will generate a QR code. Scan it using ",(0,r.kt)("strong",{parentName:"p"},"Wechat/Whatsapp")," and you are ready to go."),(0,r.kt)("h2",{id:"building-the-bot"},"Building the bot"),(0,r.kt)("p",null,"Let's get started with building ",(0,r.kt)("strong",{parentName:"p"},"busy-bot")," using Wechaty."),(0,r.kt)("h3",{id:"1-initialize-project"},"1. Initialize project"),(0,r.kt)("p",null,"Create a new folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"busy-bot")," and move into that directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir busy-bot\ncd busy-bot\n")),(0,r.kt)("p",null,"Use the following command to initialize an npm project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,r.kt)("h3",{id:"2-install-dependencies-1"},"2. Install dependencies"),(0,r.kt)("p",null,"For building the busy bot, you will require these dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"wechaty"),": Official Wechaty package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/qrcode-terminal"},"qrcode-terminal"),": Displays the QR code")),(0,r.kt)("p",null,"For installing these dependencies run the following commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"For installing wechaty"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"For installing qrcode-terminal"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install qrcode-terminal\n")),(0,r.kt)("p",null,"You will also need to add dependencies for using any ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"Wechaty Puppet")," which helps to integrate Wechaty with various ",(0,r.kt)("strong",{parentName:"p"},"instant messaging (IM) systems")," (such as WeChat, WhatsApp, and WeCom):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.whatsapp.com/"},"WhatsApp")),", install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-whatsapp"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-whatsapp\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.wechat.com/"},"WeChat")),", you can try the following puppets:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Web Protocol:")," Install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-wechat"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-wechat\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"iPad Protocol:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"padlocal: Install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-padlocal"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-padlocal\n")),(0,r.kt)("p",{parentName:"li"},"Then get a token like ",(0,r.kt)("inlineCode",{parentName:"p"},"puppet_padlocal_XXX"),", know more about puppet service padlocal ",(0,r.kt)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/padlocal"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"paimon: Install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-service"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-service\n")),(0,r.kt)("p",{parentName:"li"},"Then get a token like ",(0,r.kt)("inlineCode",{parentName:"p"},"puppet_paimon_XXX"),", know more about puppet service paimon ",(0,r.kt)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/paimon"},"here"),".")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://work.weixin.qq.com/"},"WeCom")),", install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-service"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-service\n")),(0,r.kt)("p",{parentName:"li"},"Then get a token like ",(0,r.kt)("inlineCode",{parentName:"p"},"puppet_wxwork_XXXXX"),", more about puppet service wxwork ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-services/wxwork/"},"here"),"."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can find more information about the puppets ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"here"),".")),(0,r.kt)("p",null,"Now, you are ready to write main code for bot."),(0,r.kt)("h3",{id:"3-writing-code-for-bot"},"3. Writing code for bot"),(0,r.kt)("p",null,"Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"busy-bot.js"),". You will be writing code here."),(0,r.kt)("p",null,"Let's import required packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"busy-bot.js")," and initialize the bot by providing it a name and puppet to be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Wechaty, log }  from 'wechaty';\n\nimport qrTerm  from 'qrcode-terminal';\n\nconst bot = new Wechaty({\n  name: \"busy-bot\",\n})\n")),(0,r.kt)("p",null,"Assigning proper functions to call when an event is triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'bot\n  .on("scan", (qrcode, status) => {\n    qrTerm.generate(qrcode, { small: true });\n    console.log(`${status}: ${qrcode} - Scan QR Code of the url to login:`);\n  })\n  .on("logout", (user) => log.info("Bot", `${user.name()} logouted`))\n  .on("error", (e) => log.info("Bot", "error: %s", e))\n\n  .on("login", async function (user) {\n    const msg = `${user.name()} logined`;\n\n    log.info("Bot", msg);\n    await this.say(msg);\n  });\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"scan")," is triggered, it generates QR code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logout")," will display the name of the user along with the status ",(0,r.kt)("inlineCode",{parentName:"li"},"logouted"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," is used to notify if the bot encounters an error."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"login")," will display status logined if a user has logged in.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Global Event: message")),(0,r.kt)("p",null,"This event handles auto response for you depending on the text ",(0,r.kt)("inlineCode",{parentName:"p"},"filehelper")," has recieved. You have to do the following configurations for the filehelper:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'#busy' - set busy mode ON"),(0,r.kt)("li",{parentName:"ul"},"'#busy I'm busy' - set busy mode ON and set a Auto Reply Message"),(0,r.kt)("li",{parentName:"ul"},"'#free' - set busy mode OFF"),(0,r.kt)("li",{parentName:"ul"},"'#status' - check the current Busy Mode and Auto Reply Message.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\nlet busyIndicator = false;\nlet busyAnnouncement = `Automatic Reply: I cannot read your message because I\'m busy now, will talk to you when I get back.`;\n\nbot.on("message", async function (msg) {\n  log.info("Bot", "(message) %s", msg);\n\n  const filehelper = bot.Contact.load("filehelper");\n\n  const sender = msg.from();\n  const receiver = msg.to();\n  const text = msg.text();\n  const room = msg.room();\n\n  if (!sender || !receiver) {\n    return;\n  }\n\n  if (receiver.id === "filehelper") {\n    if (text === "#status") {\n      await filehelper.say("in busy mode: " + busyIndicator);\n      await filehelper.say("auto reply: " + busyAnnouncement);\n    } else if (text === "#free") {\n      busyIndicator = false;\n      await filehelper.say("auto reply stopped.");\n    } else if (/^#busy/i.test(text)) {\n      busyIndicator = true;\n      await filehelper.say("in busy mode: ON");\n\n      const matches = text.match(/^#busy (.+)$/i);\n      if (!matches || !matches[1]) {\n        await filehelper.say(\'auto reply message: "\' + busyAnnouncement + \'"\');\n      } else {\n        busyAnnouncement = matches[1];\n        await filehelper.say(\'set auto reply to: "\' + busyAnnouncement + \'"\');\n      }\n    }\n\n    return;\n  }\n\n  if (sender.type() !== bot.Contact.Type.Personal) {\n    return;\n  }\n\n  if (!busyIndicator) {\n    return; // free\n  }\n\n  if (msg.self()) {\n    return;\n  }\n\n  /**\n   * 1. Send busy anoncement to contact\n   */\n  if (!room) {\n    await msg.say(busyAnnouncement);\n    return;\n  }\n\n  /**\n   * 2. If there\'s someone mentioned me in a room,\n   *  then send busy announcement to room and mention the contact who mentioned me.\n   */\n  const contactList = await msg.mention();\n  const contactIdList = contactList.map((c) => c.id);\n  if (contactIdList.includes(this.userSelf().id)) {\n    await msg.say(busyAnnouncement, sender);\n  }\n});\n')),(0,r.kt)("p",null,"Use the following for starting the bot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"bot.start().catch((e) => console.error(e));\n")),(0,r.kt)("h3",{id:"4-running-the-bot"},"4. Running the bot"),(0,r.kt)("p",null,"In order to run the bot, you have to export/set environment variables with the type of puppet you want to use."),(0,r.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n")))),(0,r.kt)("p",null,"Run the bot using the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx ts-node busy-bot.js\n")),(0,r.kt)("p",null,"Scan the generated QR code with ",(0,r.kt)("strong",{parentName:"p"},"Wechat")," app and you are ready to play with the bot."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting started Github repository"))))}h.isMDXComponent=!0}}]);