(self.webpackChunkgatsby_openseadragon=self.webpackChunkgatsby_openseadragon||[]).push([[332],{9662:function(t,n,e){var r=e(614),o=e(6330);t.exports=function(t){if(r(t))return t;throw TypeError(o(t)+" is not a function")}},9483:function(t,n,e){var r=e(4411),o=e(6330);t.exports=function(t){if(r(t))return t;throw TypeError(o(t)+" is not a constructor")}},9670:function(t,n,e){var r=e(111);t.exports=function(t){if(r(t))return t;throw TypeError(String(t)+" is not an object")}},1318:function(t,n,e){var r=e(5656),o=e(7466),i=e(1400),u=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,e){var r=e(1694),o=e(614),i=e(4326),u=e(5112)("toStringTag"),c="Arguments"==i(function(){return arguments}());t.exports=r?i:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(e){}}(n=Object(t),u))?e:c?i(n):"Object"==(r=i(n))&&o(n.callee)?"Arguments":r}},9920:function(t,n,e){var r=e(6656),o=e(3887),i=e(1236),u=e(3070);t.exports=function(t,n){for(var e=o(n),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||c(t,s,a(n,s))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),u=e(8113),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s?o=(r=s.split("."))[0]<4?1:r[0]+r[1]:u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),u=e(1320),c=e(3505),a=e(9920),f=e(4705);t.exports=function(t,n){var e,s,l,p,v,y=t.target,m=t.global,h=t.stat;if(e=m?r:h?r[y]||c(y,{}):(r[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(m?s:y+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},6530:function(t,n,e){var r=e(9781),o=e(6656),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},5005:function(t,n,e){var r=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},8173:function(t,n,e){var r=e(9662);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:function(t,n,e){var r=e(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(r(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7293),o=e(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,e){var r=e(614),o=e(5465),i=Function.toString;r(o.inspectSource)||(o.inspectSource=function(t){return i.call(t)}),t.exports=o.inspectSource},9909:function(t,n,e){var r,o,i,u=e(8536),c=e(7854),a=e(111),f=e(8880),s=e(6656),l=e(5465),p=e(6200),v=e(3501),y="Object already initialized",m=c.WeakMap;if(u||l.state){var h=l.state||(l.state=new m),g=h.get,d=h.has,b=h.set;r=function(t,n){if(d.call(h,t))throw new TypeError(y);return n.facade=t,b.call(h,t,n),n},o=function(t){return g.call(h,t)||{}},i=function(t){return d.call(h,t)}}else{var x=p("state");v[x]=!0,r=function(t,n){if(s(t,x))throw new TypeError(y);return n.facade=t,f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,n,e){var r=e(7293),o=e(614),i=e(648),u=e(5005),c=e(2788),a=[],f=u("Reflect","construct"),s=/^\s*(?:class|function)\b/,l=s.exec,p=!s.exec((function(){})),v=function(t){if(!o(t))return!1;try{return f(Object,a,t),!0}catch(n){return!1}};t.exports=!f||r((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?function(t){if(!o(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!l.call(s,c(t))}:v},4705:function(t,n,e){var r=e(7293),o=e(614),i=/#|\.prototype\./,u=function(t,n){var e=a[c(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},111:function(t,n,e){var r=e(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(614),o=e(5005),i=e(3307);t.exports=i?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return r(n)&&Object(t)instanceof n}},3366:function(t,n,e){var r=e(7854);t.exports=r.Promise},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(614),i=e(2788),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},8523:function(t,n,e){"use strict";var r=e(9662),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(9670),u=e(4948),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n),i(e),o)try{return c(t,n,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(5296),i=e(9114),u=e(5656),c=e(4948),a=e(6656),f=e(4664),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n),f)try{return s(t,n)}catch(e){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,e){var r=e(6656),o=e(5656),i=e(1318).indexOf,u=e(3501);t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)!r(u,e)&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},2140:function(t,n,e){var r=e(614),o=e(111);t.exports=function(t,n){var e,i;if("string"===n&&r(e=t.toString)&&!o(i=e.call(t)))return i;if(r(e=t.valueOf)&&!o(i=e.call(t)))return i;if("string"!==n&&r(e=t.toString)&&!o(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},3887:function(t,n,e){var r=e(5005),o=e(8006),i=e(5181),u=e(9670);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},9478:function(t,n,e){var r=e(9670),o=e(111),i=e(8523);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},1320:function(t,n,e){var r=e(7854),o=e(614),i=e(6656),u=e(8880),c=e(3505),a=e(2788),f=e(9909),s=e(6530).CONFIGURABLE,l=f.get,p=f.enforce,v=String(String).split("String");(t.exports=function(t,n,e,a){var f,l=!!a&&!!a.unsafe,y=!!a&&!!a.enumerable,m=!!a&&!!a.noTargetGet,h=a&&void 0!==a.name?a.name:n;o(e)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||s&&e.name!==h)&&u(e,"name",h),(f=p(e)).source||(f.source=v.join("string"==typeof h?h:""))),t!==r?(l?!m&&t[n]&&(y=!0):delete t[n],y?t[n]=e:u(t,n,e)):y?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||a(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854);t.exports=function(t,n){try{Object.defineProperty(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.18.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:function(t,n,e){var r=e(9670),o=e(9483),i=e(5112)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[i])?n:o(e)}},1400:function(t,n,e){var r=e(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},7466:function(t,n,e){var r=e(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,n,e){var r=e(111),o=e(2190),i=e(8173),u=e(2140),c=e(5112)("toPrimitive");t.exports=function(t,n){if(!r(t)||o(t))return t;var e,a=i(t,c);if(a){if(void 0===n&&(n="default"),e=a.call(t,n),!r(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),u(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:String(n)}},1694:function(t,n,e){var r={};r[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},6330:function(t){t.exports=function(t){try{return String(t)}catch(n){return"Object"}}},9711:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(6656),u=e(9711),c=e(133),a=e(3307),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)&&(c||"string"==typeof f[t])||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},7727:function(t,n,e){"use strict";var r=e(2109),o=e(1913),i=e(3366),u=e(7293),c=e(5005),a=e(614),f=e(6707),s=e(9478),l=e(1320);if(r({target:"Promise",proto:!0,real:!0,forced:!!i&&u((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=f(this,c("Promise")),e=a(t);return this.then(e?function(e){return s(n,t()).then((function(){return e}))}:t,e?function(e){return s(n,t()).then((function(){throw e}))}:t)}}),!o&&a(i)){var p=c("Promise").prototype.finally;i.prototype.finally!==p&&l(i.prototype,"finally",p,{unsafe:!0})}},7002:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(7294),o=e(5444),i="layout-module--nav-link-item--31U8T",u="layout-module--nav-link-text--ExV28",c=function(t){var n=t.pageTitle,e=t.children,c=(0,o.K2)("3159585216");return r.createElement("div",{className:"layout-module--container--YM7Lx"},r.createElement("title",null,c.site.siteMetadata.title),r.createElement("header",{className:"layout-module--site-title--16llq"},c.site.siteMetadata.title),r.createElement("nav",null,r.createElement("ul",{className:"layout-module--nav-links--1VlO2"},r.createElement("li",{className:i},r.createElement(o.rU,{to:"/",className:u},"Home")),r.createElement("li",{className:i},r.createElement(o.rU,{to:"/viewer",className:u},"OpenSeaDragon Viewer")))),r.createElement("main",null,r.createElement("h1",{className:"layout-module--heading--2By-2"},n),e))}},2805:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return u}});var r=e(7294),o=e(7002),i=(e(7727),function(){fetch("https://digitalcollections.tricolib.brynmawr.edu/node/335321/manifest",{mode:"no-cors"}).finally((function(t){return console.log(t.json())})),fetch("https://digitalcollections.tricolib.brynmawr.edu/_flysystem/fedora/2023-03/1257_1.jp2").finally((function(t){return console.log(t.json())}));var t=r.useRef(null);return r.useEffect((function(){"undefined"!=typeof window&&"undefined"!=typeof document&&e.e(318).then(e.t.bind(e,2438,23)).then((function(n){new n.default({element:t.current,sequenceMode:!0,tileSources:["https://digitalcollections.tricolib.brynmawr.edu/cantaloupe/iiif/2/https%3A%2F%2Fdigitalcollections.tricolib.brynmawr.edu%2F_flysystem%2Ffedora%2F2023-03%2F1257_1.jp2"],showNavigator:!0,prefixUrl:"https://github.swarthmore.edu/pages/jtruitt1/gatsby-openseadragon/public/"})}))}),[]),r.createElement("div",{id:"openseadragon",ref:t,style:{height:600,width:"100%"}})}),u=function(t){t.data;return r.createElement(o.Z,{pageTitle:"OpenSeaDragon Viewer"},r.createElement(i,null))}}}]);
//# sourceMappingURL=component---src-pages-viewer-js-8cbb44eb019f1f618bd3.js.map