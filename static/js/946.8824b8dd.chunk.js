"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[946],{1153:function(n,t,e){e.d(t,{u:function(){return s}});var r,o,i,a=e(168),c=e(6444),u=c.ZP.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  width: 250px;\n  transform: translate(30%, -100%);\n  z-index: 99;\n  background-color: cadetblue;\n  color: white;\n"]))),l=c.ZP.p(o||(o=(0,a.Z)(["\n  font-size: small;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  /* \u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0456 \u0441\u0442\u0438\u043b\u0456 */\n  display: -moz-box;\n  -moz-box-orient: vertical;\n  -moz-box-lines: 3;\n"]))),f=c.ZP.img(i||(i=(0,a.Z)(["\n  width: 220px;\n  height: 110px;\n"]))),p=e(1140),d=e(184);function s(n){var t=n.hoveredImageUrl,e=n.title,r=n.overview;return(0,d.jsxs)(u,{children:[(0,d.jsx)(f,{src:t,alt:e,onError:function(n){n.target.onerror=null,n.target.src=p}}),(0,d.jsx)(l,{children:r})]})}},2546:function(n,t,e){e.d(t,{H:function(){return u}});var r=e(6243),o=e(1153),i=e(9501),a=e(7201),c=e(184),u=function(n){var t=n.movie,e=n.hoveredId,u=n.setHoveredId,l=n.hoveredImageUrl,f=n.setHoveredImageUrl,p=n.location,d=t.id,s=t.title,h=t.release_date,v=t.overview,m=t.vote_average,g=t.backdrop_path;return(0,c.jsxs)(r.WN,{children:[(0,c.jsx)(r.X5,{}),(0,c.jsxs)(r.Fg,{to:"/movies/".concat(d),state:{from:p},onMouseEnter:function(){return function(n,t){u(n),(0,i.ot)(t,f)}(d,g)},onMouseLeave:function(){u(null)},children:[s,", (",(null===h||void 0===h?void 0:h.slice(0,4))||"no data","),"," ",(0,a.kr)(m)]}),e===d&&l&&(0,c.jsx)(o.u,{hoveredImageUrl:l,title:s,overview:v})]},d)}},6243:function(n,t,e){e.d(t,{Fg:function(){return f},WN:function(){return d},X5:function(){return p}});var r,o,i,a=e(168),c=e(6444),u=e(8617),l=e(1087),f=(0,c.ZP)(l.rU)(r||(r=(0,a.Z)(["\n  padding: 5px;\n  position: relative;\n"]))),p=(0,c.ZP)(u.LhU)(o||(o=(0,a.Z)(["\n  padding: 5px 0 5px 0;\n  // color: darkblue;\n"]))),d=c.ZP.li(i||(i=(0,a.Z)(["\n  display: flex;\n  align-items: start;\n  gap: 5px;\n"])))},7398:function(n,t,e){e.d(t,{Dx:function(){return f},W2:function(){return u},kS:function(){return l}});var r,o,i,a=e(168),c=e(6444),u=c.ZP.main(r||(r=(0,a.Z)(["\n  padding-left: 20px;\n  padding-top: 5px;\n  background-color: cadetblue;\n"]))),l=c.ZP.main(o||(o=(0,a.Z)(["\n  display: flex;\n  justify-content: space-around;\n  max-width: 500px;\n  padding: 5px 0 5px 0;\n"]))),f=c.ZP.h1(i||(i=(0,a.Z)(["\n  font-size: xx-large;\n"])))},2703:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,o,i,a=e(9439),c=e(7398),u=e(1087),l=e(7689),f=e(2791),p=e(168),d=e(6444),s=d.ZP.form(r||(r=(0,p.Z)(["\n  min-width: 200px;\n  max-width: 280px;\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  margin-bottom: 20px;\n"]))),h=d.ZP.input(o||(o=(0,p.Z)(["\n  min-height: 30px;\n  min-width: 260px;\n  border-radius: 5px;\n  padding: 0 5px 0 15px;\n"]))),v=d.ZP.p(i||(i=(0,p.Z)(["\n  font-weight: 500;\n  font-size: large;\n  margin-left: 5px;\n"]))),m=e(184),g=function(n){var t=n.value,e=n.onSearch;return(0,m.jsxs)(s,{children:[(0,m.jsx)(v,{children:"Search movie"}),(0,m.jsx)(h,{type:"text",placeholder:"Enter movie name",defaultValue:t,onChange:function(n){return e(n.target.value)}})]})},b=e(2546),x=e(9501),S=e(7201),j=e(3585),Z=function(){var n,t=(0,f.useState)(null),e=(0,a.Z)(t,2),r=e[0],o=e[1],i=(0,f.useState)(null),p=(0,a.Z)(i,2),d=p[0],s=p[1],h=(0,f.useState)(null),v=(0,a.Z)(h,2),Z=v[0],O=v[1],y=(0,f.useState)(null),w=(0,a.Z)(y,2),P=w[0],E=w[1],k=(0,u.lr)(),I=(0,a.Z)(k,2),U=I[0],T=I[1],J=(0,l.TH)(),X=function(n){T(""!==n?{query:n}:{})},q=null!==(n=U.get("query"))&&void 0!==n?n:"";if((0,f.useEffect)((function(){var n=new URLSearchParams({api_key:j.$h,query:q}),t="".concat(j.jE,"/search/movie?").concat(n);""===q&&null===q||(0,x.rQ)(t,o,E)}),[q]),r){var A=(0,S.L1)(r.results,"release_date");return(0,m.jsxs)(c.W2,{children:[(0,m.jsx)(g,{value:q,onSearch:X}),(0,m.jsx)("ul",{children:A.map((function(n){return(0,m.jsx)(b.H,{movie:n,hoveredId:d,setHoveredId:s,hoveredImageUrl:Z,setHoveredImageUrl:O,location:J},n.id)}))})]})}return(0,m.jsx)(c.W2,{children:P?P.message:(0,m.jsx)(g,{onSearch:q,onSearchParams:X})})}},3585:function(n,t,e){e.d(t,{$h:function(){return r},I4:function(){return o},jE:function(){return i},si:function(){return c},uc:function(){return a}});var r="b30750fbe582936755a0930282f9befd",o=new URLSearchParams({api_key:r}),i="https://api.themoviedb.org/3",a="https://image.tmdb.org/t/p/w500",c="https://image.tmdb.org/t/p/w200"},9501:function(n,t,e){e.d(t,{Jn:function(){return c},VH:function(){return u},ot:function(){return a},rQ:function(){return i}});var r=e(3585),o=e(5938);function i(n,t,e){fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong...."))})).then((function(n){t(n)})).catch((function(n){e(n)}))}function a(n,t){var e=r.si+n;fetch(e).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))}function c(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?t?r.si+n:r.uc+n:o}function u(n,t,e){var o="tv"===t?"tv":"movie",i="cast"===e?"credits":"reviews";return"".concat(r.jE,"/").concat(o,"/").concat(n,"/").concat(i,"?").concat(r.I4)}},7201:function(n,t,e){e.d(t,{F8:function(){return i},L1:function(){return a},R1:function(){return l},kr:function(){return o},oY:function(){return u}});var r=e(8683);function o(n){if(n){var t=Math.floor(10*n);return"".concat(t,"%")}return"--%"}function i(n){return n?new Date(n).toUTCString().slice(5,16):"no data"}function a(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e?1:-1;return n.sort((function(n,e){return n[t]<e[t]?-1*r:n[t]>e[t]?1*r:0}))}function c(n){return n.map((function(n){return null!==n?(0,r.Z)({},n):n}))}var u=function(n,t,e){var o;switch(n){case"Trends":default:o=t;break;case"Rating":o=a(t.map((function(n){return n.vote_count<10?(0,r.Z)((0,r.Z)({},n),{},{vote_average:0}):n})),"vote_average",e);break;case"Date":o=a(c(t),"release_date",e);break;case"Title":o=a(c(t),"title",e)}return o};function l(n){var t=[];return n.forEach((function(n){var e=n.author,r=n.content;t.find((function(n){return n.author===e&&n.content===r}))||t.push({author:e,content:r})})),t}},9983:function(n,t,e){e.d(t,{w_:function(){return l}});var r=e(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},a.apply(this,arguments)},c=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e};function u(n){return n&&n.map((function(n,t){return r.createElement(n.tag,a({key:t},n.attr),u(n.child))}))}function l(n){return function(t){return r.createElement(f,a({attr:a({},n.attr)},t),u(n.child))}}function f(n){var t=function(t){var e,o=n.attr,i=n.size,u=n.title,l=c(n,["attr","size","title"]),f=i||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:e,style:a(a({color:n.color||t.color},t.style),n.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),n.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(n){return t(n)})):t(o)}},1140:function(n,t,e){n.exports=e.p+"static/media/NoFilmImage.e2e10cb9ad1ccc405126.png"},5938:function(n){n.exports="data:image/png;base64,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"},8683:function(n,t,e){function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=946.8824b8dd.chunk.js.map