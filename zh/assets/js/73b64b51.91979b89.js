(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3857],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6558:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={},l="eventmesh-HTTP-trace-design",p={unversionedId:"features/eventmesh-trace-design",id:"features/eventmesh-trace-design",isDocsHomePage:!1,title:"eventmesh-HTTP-trace-design",description:"Introduction",source:"@site/docs/features/eventmesh-trace-design.md",sourceDirName:"features",slug:"/features/eventmesh-trace-design",permalink:"/zh/docs/features/eventmesh-trace-design",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/features/eventmesh-trace-design.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Stream (Camel+Spring Cloud Stream)",permalink:"/zh/docs/features/eventmesh-stream-design"},next:{title:"HTTPS",permalink:"/zh/docs/features/https"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"An overview of OpenTelemetry",id:"an-overview-of-opentelemetry",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Design Details",id:"design-details",children:[]},{value:"Problems",id:"problems",children:[]},{value:"Solutions",id:"solutions",children:[]},{value:"Appendix",id:"appendix",children:[]}],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-http-trace-design"},"eventmesh-HTTP-trace-design"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"EventMesh(incubating)")," is a dynamic cloud-native eventing infrastructure."),(0,a.kt)("h2",{id:"an-overview-of-opentelemetry"},"An overview of OpenTelemetry"),(0,a.kt)("p",null,"OpenTelemetry is a collection of tools, APIs, and SDKs. You can use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) for analysis in order to understand your software's performance and behavior."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"set tracer"),(0,a.kt)("li",{parentName:"ul"},"different exporter"),(0,a.kt)("li",{parentName:"ul"},"start and end span in server")),(0,a.kt)("h2",{id:"design-details"},"Design Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SpanProcessor:   BatchSpanProcessor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Exporter:  log(default), would be changed from properties"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Configure the batch spans processor. This span processor exports span in batches.\nBatchSpanProcessor batchSpansProcessor =\n    BatchSpanProcessor.builder(exporter)\n        .setMaxExportBatchSize(512) // set the maximum batch size to use\n        .setMaxQueueSize(2048) // set the queue size. This must be >= the export batch size\n        .setExporterTimeout(\n            30, TimeUnit.SECONDS) // set the max amount of time an export can run before getting\n        // interrupted\n        .setScheduleDelay(5, TimeUnit.SECONDS) // set time between two different exports\n        .build();\nOpenTelemetrySdk.builder()\n    .setTracerProvider(\n        SdkTracerProvider.builder().addSpanProcessor(batchSpansProcessor).build())\n    .build();\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'When using the method \'init()\' of the class "EventMeshHTTPServer", the class "AbstractHTTPServer\u201d will get the tracer')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"super.openTelemetryTraceFactory = new OpenTelemetryTraceFactory(eventMeshHttpConfiguration);\nsuper.tracer = openTelemetryTraceFactory.getTracer(this.getClass().toString());\nsuper.textMapPropagator = openTelemetryTraceFactory.getTextMapPropagator();\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'then the trace in class "AbstractHTTPServer\u201d will work.')),(0,a.kt)("h2",{id:"problems"},"Problems"),(0,a.kt)("h4",{id:"how-to-set-different-exporter-in-class-opentelemetrytracefactorysolved"},"How to set different exporter in class 'OpenTelemetryTraceFactory'?(Solved)"),(0,a.kt)("p",null,"After I get the exporter type from properties, how to deal with it."),(0,a.kt)("p",null,"The 'logExporter' only needs to new it."),(0,a.kt)("p",null,"But the 'zipkinExporter' needs to new and use the \"getZipkinExporter()\" method."),(0,a.kt)("h2",{id:"solutions"},"Solutions"),(0,a.kt)("h4",{id:"solution-of-different-exporter"},"Solution of different exporter"),(0,a.kt)("p",null,"Use reflection to get an exporter."),(0,a.kt)("p",null,"First of all, different exporter must implement the interface 'EventMeshExporter'."),(0,a.kt)("p",null,"Then we get the exporter name from the configuration and reflect to the class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//different spanExporter\nString exporterName = configuration.eventMeshTraceExporterType;\n//use reflection to get spanExporter\nString className = String.format("org.apache.eventmesh.runtime.exporter.%sExporter",exporterName);\nEventMeshExporter eventMeshExporter = (EventMeshExporter) Class.forName(className).newInstance();\nspanExporter = eventMeshExporter.getSpanExporter(configuration);\n')),(0,a.kt)("p",null,"Additional, this will surround with try catch.If the specified exporter cannot be obtained successfully, the default exporter log will be used instead"),(0,a.kt)("h4",{id:"improvement-of-different-exporter"},"Improvement of different exporter"),(0,a.kt)("p",null,"SPI(To be completed)"),(0,a.kt)("h2",{id:"appendix"},"Appendix"),(0,a.kt)("h4",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md"},"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation/tree/main/instrumentation/netty"},"https://github.com/open-telemetry/opentelemetry-java-instrumentation/tree/main/instrumentation/netty")))}m.isMDXComponent=!0}}]);