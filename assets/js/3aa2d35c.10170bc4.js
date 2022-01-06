(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9561],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2949:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={},s="EventMesh pluggable protocols (CloudEvents)",u={unversionedId:"features/eventmesh-cloudevents-sdk-binding",id:"features/eventmesh-cloudevents-sdk-binding",isDocsHomePage:!1,title:"EventMesh pluggable protocols (CloudEvents)",description:"Introduction",source:"@site/docs/features/eventmesh-cloudevents-sdk-binding.md",sourceDirName:"features",slug:"/features/eventmesh-cloudevents-sdk-binding",permalink:"/docs/features/eventmesh-cloudevents-sdk-binding",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/features/eventmesh-cloudevents-sdk-binding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"EventMesh Metrics (OpenTelemetry+Prometheus)",permalink:"/docs/features/eventmesh-metrics-export-design"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Requirements",id:"requirements",children:[{value:"Functional Requirements",id:"functional-requirements",children:[]},{value:"Performance Requirements",id:"performance-requirements",children:[]}]},{value:"Design Details",id:"design-details",children:[{value:"Pluggable Protocols",id:"pluggable-protocols",children:[]},{value:"Process of CloudEvents under EventMesh",id:"process-of-cloudevents-under-eventmesh",children:[]}]},{value:"Appendix",id:"appendix",children:[{value:"References",id:"references",children:[]}]}],d={toc:p};function c(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"eventmesh-pluggable-protocols-cloudevents"},"EventMesh pluggable protocols (CloudEvents)"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"EventMesh(incubating)")," is a dynamic cloud-native eventing infrastructure."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cloudevents/spec"},"CloudEvents")," is a specification for describing event data in common formats to provide interoperability across services, platforms and systems."),(0,i.kt)("p",null,"As of May 2021, EventMesh contains the following major components: ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-runtime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-sdk-java")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-connector-rocketmq"),".\nFor a customer to use EventMesh, ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-runtime")," can be deployed as microservices to transmit\ncustomer's events between event producers and consumers. Customer's applications can then interact\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-runtime")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-sdk-java")," to publish/subscribe for events on given topics."),(0,i.kt)("p",null,"CloudEvents support has been a highly desired feature by EventMesh users. There are many reasons\nfor users to prefer using a SDK with CloudEvents support:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CloudEvents is a more widely accepted and supported way to describe events. ",(0,i.kt)("inlineCode",{parentName:"li"},"eventmesh-sdk-java"),"\ncurrently uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"LiteMessage")," structure to describe events, which is less standardized."),(0,i.kt)("li",{parentName:"ul"},"CloudEvents's Java SDK has a wider range of distribution methods. For example, EventMesh users\ncurrently need to use the SDK tarball or build from source for every EventMesh release. With\nCloudEvents support, it's easier for users to take a dependency on EventMesh's SDK using CloudEvents's public distributions (e.g. through a Maven configuration)."),(0,i.kt)("li",{parentName:"ul"},"CloudEvents's SDK supports multiple languages. Although EventMesh currently only supports a Java SDK, in future if more languages need to be supported, the extensions can be easier with experience on binding Java SDK with CloudEvents.")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"functional-requirements"},"Functional Requirements"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Requirement ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F-1"),(0,i.kt)("td",{parentName:"tr",align:null},"EventMesh users should be able to depend on a public SDK to publish/subscribe events in CloudEvents format"),(0,i.kt)("td",{parentName:"tr",align:null},"Functionality")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F-2"),(0,i.kt)("td",{parentName:"tr",align:null},"EventMesh users should continue to have access to existing EventMesh client features (e.g. load balancing) with an SDK that supports CloudEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Feature Parity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F-3"),(0,i.kt)("td",{parentName:"tr",align:null},"EventMesh developers should be able to sync ",(0,i.kt)("inlineCode",{parentName:"td"},"eventmesh-sdk-java")," and an SDK with CloudEvents support without much effort/pain"),(0,i.kt)("td",{parentName:"tr",align:null},"Maintainability")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F-4"),(0,i.kt)("td",{parentName:"tr",align:null},"EventMesh support pluggable protocols for developers integrate other protocols (e.g. CloudEvents\\EventMesh Message\\OpenMessage\\MQTT ...)"),(0,i.kt)("td",{parentName:"tr",align:null},"Functionality")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F-5"),(0,i.kt)("td",{parentName:"tr",align:null},"EventMesh support the unified api for publish/subscribe events to/from event store"),(0,i.kt)("td",{parentName:"tr",align:null},"Functionality")))),(0,i.kt)("h3",{id:"performance-requirements"},"Performance Requirements"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Requirement ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P-1"),(0,i.kt)("td",{parentName:"tr",align:null},"Client side latency for SDK with CloudEvents support should be similar to current SDK"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"design-details"},"Design Details"),(0,i.kt)("p",null,"Binding with the CloudEvents Java SDK (similar to what Kafka already did, see Reference for more details)\nshould be an easy way to achieve the requirements."),(0,i.kt)("h3",{id:"pluggable-protocols"},"Pluggable Protocols"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pluggable-protocols",src:n(2687).Z})),(0,i.kt)("h3",{id:"process-of-cloudevents-under-eventmesh"},"Process of CloudEvents under EventMesh"),(0,i.kt)("h4",{id:"for-tcp"},"For TCP"),(0,i.kt)("h5",{id:"sdk-side-for-publish"},"SDK side for publish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add the CloudEvents identifier in ",(0,i.kt)("inlineCode",{parentName:"li"},"package")," header"),(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"CloudEventBuilder")," build the CloudEvent and put it into the ",(0,i.kt)("inlineCode",{parentName:"li"},"package")," body ")),(0,i.kt)("h5",{id:"sdk-side-for-subscribe"},"SDK side for subscribe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add ",(0,i.kt)("inlineCode",{parentName:"li"},"convert")," function under the ",(0,i.kt)("inlineCode",{parentName:"li"},"ReceiveMsgHook")," interface, for converting the ",(0,i.kt)("inlineCode",{parentName:"li"},"package")," body to the specific protocol with the identifier in ",(0,i.kt)("inlineCode",{parentName:"li"},"package")," header"),(0,i.kt)("li",{parentName:"ul"},"different protocols should implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"ReceiveMsgHook"),"  interface ")),(0,i.kt)("h5",{id:"server-side-for-publish"},"Server side for publish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"design the protocol convert api contains ",(0,i.kt)("inlineCode",{parentName:"li"},"decodeMessage")," interface which convert the package's body to CloudEvent "),(0,i.kt)("li",{parentName:"ul"},"update ",(0,i.kt)("inlineCode",{parentName:"li"},"Session.upstreamMsg()")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"MessageTransferTask")," change the input parameter Message to CloudEvent, the CloudEvent use the last step ",(0,i.kt)("inlineCode",{parentName:"li"},"decodeMessage")," api convert"),(0,i.kt)("li",{parentName:"ul"},"update ",(0,i.kt)("inlineCode",{parentName:"li"},"SessionSender.send()"),"  change the input parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"Message")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"CloudEvent")),(0,i.kt)("li",{parentName:"ul"},"update ",(0,i.kt)("inlineCode",{parentName:"li"},"MeshMQProducer")," api support send ",(0,i.kt)("inlineCode",{parentName:"li"},"CloudEvents")," in runtime"),(0,i.kt)("li",{parentName:"ul"},"support the implementation in ",(0,i.kt)("inlineCode",{parentName:"li"},"connector-plugin")," for send ",(0,i.kt)("inlineCode",{parentName:"li"},"CloudEvents")," to EventStore")),(0,i.kt)("h5",{id:"server-side-for-subscribe"},"Server side for subscribe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"support change the ",(0,i.kt)("inlineCode",{parentName:"p"},"RocketMessage")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"CloudEvent")," in connector-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"overwrite the ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncMessageListener.consume()")," function, change the input parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"CloudEvent"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"update the ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshMQPushConsumer.updateOffset()")," implementation change the the input parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"CloudEvent"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"update ",(0,i.kt)("inlineCode",{parentName:"p"},"DownStreamMsgContext")," , change the input parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"CloudEvent"),", update the ",(0,i.kt)("inlineCode",{parentName:"p"},"DownStreamMsgContext.ackMsg")," "))),(0,i.kt)("h4",{id:"for-http"},"For HTTP"),(0,i.kt)("h5",{id:"sdk-side-for-publish-1"},"SDK side for publish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"support ",(0,i.kt)("inlineCode",{parentName:"li"},"LiteProducer.publish(cloudEvent)")),(0,i.kt)("li",{parentName:"ul"},"add the CloudEvents identifier in http request header")),(0,i.kt)("h5",{id:"sdk-side-for-subscribe-1"},"SDK side for subscribe"),(0,i.kt)("h5",{id:"server-side-for-publish-1"},"Server side for publish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"support build the ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpCommand.body")," by pluggable protocol plugins according the protocol type in ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpCommand")," header"),(0,i.kt)("li",{parentName:"ul"},"support publish the CloudEvent in message processors")),(0,i.kt)("h5",{id:"server-side-for-subscribe-1"},"Server side for subscribe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"update the ",(0,i.kt)("inlineCode",{parentName:"p"},"EventMeshConsumer.subscribe()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"update ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsgContext")," , change the input parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"CloudEvent"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"update ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncHttpPushRequest.tryHTTPRequest()")))),(0,i.kt)("h2",{id:"appendix"},"Appendix"),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloudevents.github.io/sdk-java/kafka"},"https://cloudevents.github.io/sdk-java/kafka"))))}c.isMDXComponent=!0},2687:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pluggable-protocols-006804094b52dd966d0f4c7f1de36f81.png"}}]);