"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[442],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8489:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"integration",title:"Integration"},p=void 0,s={unversionedId:"integration",id:"integration",isDocsHomePage:!1,title:"Integration",description:"Available Distributions",source:"@site/docs/integration.md",sourceDirName:".",slug:"/integration",permalink:"/PptxGenJS/docs/integration",tags:[],version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1651944302,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"integration",title:"Integration"},sidebar:"docs",previous:{title:"Installation",permalink:"/PptxGenJS/docs/installation"},next:{title:"Creating a Presentation",permalink:"/PptxGenJS/docs/usage-pres-create"}},u=[{value:"Available Distributions",id:"available-distributions",children:[]},{value:"Integration with Angular/React",id:"integration-with-angularreact",children:[{value:"React Example",id:"react-example",children:[]}]},{value:"Webpack Troubleshooting",id:"webpack-troubleshooting",children:[{value:"Related Issues",id:"related-issues",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"available-distributions"},"Available Distributions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser ",(0,a.kt)("inlineCode",{parentName:"li"},"dist/pptxgen.min.js")),(0,a.kt)("li",{parentName:"ul"},"CommonJS ",(0,a.kt)("inlineCode",{parentName:"li"},"dist/pptxgen.cjs.js")),(0,a.kt)("li",{parentName:"ul"},"ES6 Module ",(0,a.kt)("inlineCode",{parentName:"li"},"dist/pptxgen.es.js"))),(0,a.kt)("h2",{id:"integration-with-angularreact"},"Integration with Angular/React"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is a working demo available: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/tree/master/demos/react-demo"},"demos/react-demo"))),(0,a.kt)("h3",{id:"react-example"},"React Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import pptxgen from "pptxgenjs";\nlet pptx = new pptxgen();\n\nlet slide = pptx.addSlide();\nslide.addText("React Demo!", { x: 1, y: 1, w: 10, fontSize: 36, fill: { color: "F1F1F1" }, align: "center" });\n\npptx.writeFile({ fileName: "react-demo.pptx" });\n')),(0,a.kt)("h2",{id:"webpack-troubleshooting"},"Webpack Troubleshooting"),(0,a.kt)("p",null,"Some users have modified their webpack config to avoid a module resolution error using:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'node: { fs: "empty" }'))),(0,a.kt)("h3",{id:"related-issues"},"Related Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/issues/72"},"See Issue #72 for more information")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/issues/220"},"See Issue #220 for more information")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/issues/308"},"See Issue #308 for more information"))))}d.isMDXComponent=!0}}]);