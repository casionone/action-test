(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6031],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),l=c(n),h=r,b=l["".concat(u,".").concat(h)]||l[h]||p[h]||i;return n?a.createElement(b,s(s({ref:t},m),{},{components:n})):a.createElement(b,s({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=l;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},4475:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return l}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),s=["components"],o={title:"v1.2.0 Release",date:new Date("2021-08-01T11:14:52.000Z"),hide_table_of_contents:!1,author:"xmw1992",author_url:"https://github.com/xwm1992",author_image_url:"https://avatars.githubusercontent.com/u/13237619"},u=void 0,c={unversionedId:"release-notes/v1.2.0",id:"release-notes/v1.2.0",isDocsHomePage:!1,title:"v1.2.0 Release",description:"Feature",source:"@site/events/release-notes/v1.2.0.md",sourceDirName:"release-notes",slug:"/release-notes/v1.2.0",permalink:"/zh/events/release-notes/v1.2.0",tags:[],version:"current",frontMatter:{title:"v1.2.0 Release",date:"2021-08-01T11:14:52.000Z",hide_table_of_contents:!1,author:"xmw1992",author_url:"https://github.com/xwm1992",author_image_url:"https://avatars.githubusercontent.com/u/13237619"},sidebar:"tutorialSidebar",next:{title:"v1.1.1 Release",permalink:"/zh/events/release-notes/v1.1.1"}},m=[{value:"Feature",id:"feature",children:[]},{value:"Improvement",id:"improvement",children:[]},{value:"Bug",id:"bug",children:[]},{value:"Document and code style improvement",id:"document-and-code-style-improvement",children:[]}],p={toc:m};function l(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"feature"},"Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/74"},"ISSUE #74")," Suggest support rocketmq as store"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/176"},"ISSUE #176")," Support Spi for extended implementation to accommodate a variety of MQ"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/190"},"ISSUE #190")," Support pub/sub ,heartbeat manage and subscribe manage for http"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/201"},"ISSUE #201")," Support running eventmesh in docker")),(0,i.kt)("h2",{id:"improvement"},"Improvement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/391"},"ISSUE #391")," Optimize interface design in eventmesh-connector-api"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/378"},"ISSUE #378")," downstream broadcast msg asynchronously"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/186"},"ISSUE #186")," Separate the eventmesh-connector-defibus and eventmesh-connector-rocketmq config from eventmesh-runtime"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/366"},"ISSUE #366")," Clear some legacy concept"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/256"},"ISSUE #256")," Upgrade Openmessaging-api to 2.2.1-pubsub version")),(0,i.kt)("h2",{id:"bug"},"Bug"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/397"},"ISSUE #397")," Remove subscription session failed error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/386"},"ISSUE #386")," ConsumerGroup Queue Offset is not synced up correctly after PullConsumer has consumer all the messages in the topic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/382"},"ISSUE #382")," java.lang.NumberFormatException when parsing Long"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/368"},"ISSUE #368")," Racing Condition problem in EventMesh SDK's LiteConsumer HTTP Client"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/211"},"ISSUE #211")," Rocketmq-connector throw nullpointer exception"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/203"},"ISSUE #203")," The consumer pull request message's attribute 'bizSeqNo' is null"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/212"},"ISSUE #212")," For multiple listening instances, only the last started instance can receive messages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/216"},"ISSUE #216")," EventMesh ProxyTcpRetryer throws NumberFormatException"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/226"},"ISSUE #226")," eventMesh-rocketmq-connector tcp pub throw operation time out exception"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/188"},"ISSUE #188")," Test send sync RR(request-response) msg failed, just send one message, but receive msgs continuously"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/184"},"ISSUE #184")," Eventmesh-connector-rocketmq can not send and receive msg successfully"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/220"},"ISSUE #220")," pub/sub client fails to start"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/222"},"ISSUE #222")," When onChange is NEW, eventMesh occurred NullPointException")),(0,i.kt)("h2",{id:"document-and-code-style-improvement"},"Document and code style improvement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/393"},"ISSUE #393")," The topic name in test file is long and obscure"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/302"},"ISSUE #302"),' Add "Incubating" to the project name in docs'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/306"},"ISSUE #306")," Modify the package name to org.apache and improve the test cases"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/304"},"ISSUE #304")," Lack Notice file of eventmesh project"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/295"},"ISSUE #295")," Lack of licenses in each source file under the eventmesh-runtime module"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/265"},"ISSUE #265")," Specification of code structure and file naming"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/219"},"ISSUE #219")," Supply detail information or read.me for eventmesh running in docker"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/242"},"ISSUE #242")," Lack protocol document in English")))}l.isMDXComponent=!0}}]);