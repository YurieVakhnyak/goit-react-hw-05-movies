"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[946],{1153:function(n,t,e){e.d(t,{u:function(){return p}});var r,o,a,i=e(168),c=e(6444),u=c.ZP.div(r||(r=(0,i.Z)(["\n  position: absolute;\n  width: 250px;\n  transform: translate(50%, -117%);\n  z-index: 99;\n  background-color: cadetblue;\n  color: white;\n"]))),l=c.ZP.p(o||(o=(0,i.Z)(["\n  font-size: small;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  /* \u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0456 \u0441\u0442\u0438\u043b\u0456 */\n  display: -moz-box;\n  -moz-box-orient: vertical;\n  -moz-box-lines: 3;\n"]))),s=c.ZP.img(a||(a=(0,i.Z)(["\n  width: 220px;\n  height: 110px;\n"]))),d=e(1140),f=e(184);function p(n){var t=n.hoveredImageUrl,e=n.title,r=n.overview;return(0,f.jsxs)(u,{children:[(0,f.jsx)(s,{src:t,alt:e,onError:function(n){n.target.onerror=null,n.target.src=d}}),(0,f.jsx)(l,{children:r})]})}},6243:function(n,t,e){e.d(t,{Fg:function(){return s},WN:function(){return f},X5:function(){return d}});var r,o,a,i=e(168),c=e(6444),u=e(8617),l=e(1087),s=(0,c.ZP)(l.rU)(r||(r=(0,i.Z)(["\n  padding: 5px;\n  position: relative;\n  vertical-align: middle;\n"]))),d=(0,c.ZP)(u.LhU)(o||(o=(0,i.Z)(["\n  vertical-align: middle;\n"]))),f=c.ZP.li(a||(a=(0,i.Z)(["\n  min-height: 30px;\n"])))},61:function(n,t,e){e.d(t,{O:function(){return f}});var r=e(9439),o=e(6243),a=e(1153),i=e(9501),c=e(7201),u=e(2791),l=e(7689),s=e(184),d=function(n){var t=n.movie,e=n.index,d=(0,u.useState)(null),f=(0,r.Z)(d,2),p=f[0],h=f[1],v=(0,u.useState)(null),m=(0,r.Z)(v,2),g=m[0],x=m[1],S=(0,l.TH)(),b=t.id,Z=t.title,k=t.release_date,w=t.overview,j=t.vote_average,E=t.backdrop_path;return(0,s.jsxs)(o.WN,{children:[(0,s.jsx)(o.X5,{}),(0,s.jsxs)(o.Fg,{to:"/movies/".concat(b),state:{from:S},onMouseEnter:function(){return function(n,t){h(n),(0,i.ot)(t,x)}(b,E)},onMouseLeave:function(){h(null)},children:[e+1,". ",Z,", (",(null===k||void 0===k?void 0:k.slice(0,4))||"no data","),"," ",(0,c.kr)(j)]}),p===b&&g&&(0,s.jsx)(a.u,{hoveredImageUrl:g,title:Z,overview:w})]})},f=function(n){var t=n.movies;return(0,s.jsx)("ul",{children:t.map((function(n,t){return(0,s.jsx)(d,{movie:n,index:t},n.id)}))})}},7398:function(n,t,e){e.d(t,{Dx:function(){return d},Hg:function(){return s},W2:function(){return l}});var r,o,a,i,c=e(168),u=e(6444),l=u.ZP.main(r||(r=(0,c.Z)(["\n  padding-left: 20px;\n  padding-top: 5px;\n  background-color: cadetblue;\n"]))),s=u.ZP.div(o||(o=(0,c.Z)(["\n  padding-top: 10px;\n"]))),d=(u.ZP.div(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: space-around;\n  max-width: 500px;\n  padding: 5px 0 5px 0;\n"]))),u.ZP.h1(i||(i=(0,c.Z)(["\n  font-size: xx-large;\n"]))))},2703:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,o,a,i=e(8683),c=e(9439),u=e(7398),l=e(1087),s=e(7689),d=e(2791),f=e(168),p=e(6444),h=p.ZP.form(r||(r=(0,f.Z)(["\n  min-width: 200px;\n  max-width: 280px;\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  margin-bottom: 20px;\n"]))),v=p.ZP.input(o||(o=(0,f.Z)(["\n  min-height: 30px;\n  min-width: 260px;\n  border-radius: 5px;\n  padding: 0 5px 0 15px;\n"]))),m=p.ZP.p(a||(a=(0,f.Z)(["\n  font-weight: 500;\n  font-size: large;\n  margin-left: 5px;\n"]))),g=e(184),x=function(n){var t=n.value,e=n.onSearch;return(0,g.jsxs)(h,{children:[(0,g.jsx)(m,{children:"Search movie"}),(0,g.jsx)(v,{type:"text",placeholder:"Enter movie name",defaultValue:t,onChange:function(n){return e(n.target.value)}})]})},S=e(61),b=e(9501),Z=e(7201),k=e(3585),w=function(){var n,t=(0,d.useState)(null),e=(0,c.Z)(t,2),r=e[0],o=e[1],a=(0,d.useState)(null),f=(0,c.Z)(a,2),p=f[0],h=f[1],v=(0,d.useState)(null),m=(0,c.Z)(v,2),w=m[0],j=m[1],E=(0,d.useState)(null),I=(0,c.Z)(E,2),P=I[0],U=I[1],y=(0,l.lr)(),O=(0,c.Z)(y,2),T=O[0],J=O[1],X=(0,s.TH)(),q=function(n){J(""!==n?{query:n}:{})},A=null!==(n=T.get("query"))&&void 0!==n?n:"";(0,d.useEffect)((function(){var n=new URLSearchParams({api_key:k.$h,query:A}),t="".concat(k.jE,"/search/movie?").concat(n);""===A&&null===A||(0,b.rQ)(t,o,U)}),[A]);var L={hoveredId:p,setHoveredId:h,hoveredImageUrl:w,setHoveredImageUrl:j,location:X};if(r){var F=(0,Z.L1)(r.results,"release_date");return(0,g.jsxs)(u.W2,{children:[(0,g.jsx)(x,{value:A,onSearch:q}),(0,g.jsx)(S.O,(0,i.Z)((0,i.Z)({},L),{},{movies:F}))]})}return(0,g.jsx)(u.W2,{children:P?P.message:(0,g.jsx)(x,{onSearch:A,onSearchParams:q})})}},3585:function(n,t,e){e.d(t,{$h:function(){return r},I4:function(){return o},jE:function(){return a},si:function(){return c},uc:function(){return i}});var r="b30750fbe582936755a0930282f9befd",o=new URLSearchParams({api_key:r,language:"en"}),a="https://api.themoviedb.org/3",i="https://image.tmdb.org/t/p/w500",c="https://image.tmdb.org/t/p/w200"},9501:function(n,t,e){e.d(t,{Jn:function(){return u},Uv:function(){return s},VH:function(){return l},ot:function(){return c},rQ:function(){return i}});var r=e(3585),o=e(5938),a=e(1140);function i(n,t,e){fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong...."))})).then((function(n){t(n)})).catch((function(n){e(n)}))}function c(n,t){var e=r.si+n;fetch(e).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))}function u(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"person";return n?t?r.si+n:r.uc+n:"person"===e?o:a}function l(n,t,e){var o="tv"===t?"tv":"movie",a="cast"===e?"credits":"reviews";return"".concat(r.jE,"/").concat(o,"/").concat(n,"/").concat(a,"?").concat(r.I4)}function s(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en",o=new URLSearchParams(r.I4);o.set("language",e);var a="tv"===n?"tv":"person"===n?"person":"movie",i="".concat(r.jE,"/trending/").concat(a,"/").concat(t,"?").concat(o);return i}},7201:function(n,t,e){e.d(t,{F8:function(){return a},G6:function(){return l},L1:function(){return i},R1:function(){return s},kr:function(){return o},oY:function(){return u},pD:function(){return f}});var r=e(8683);function o(n){if(n){var t=Math.floor(10*n);return"".concat(t,"%")}return"--%"}function a(n){return n?new Date(n).toUTCString().slice(5,16):"no data"}function i(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e?1:-1;return n.sort((function(n,e){return n[t]<e[t]?-1*r:n[t]>e[t]?1*r:0}))}function c(n){return n.map((function(n){return null!==n?(0,r.Z)({},n):n}))}var u=function(n,t,e){var o;switch(n){case"Trends":default:o=t;break;case"Rating":o=i(t.map((function(n){return n.vote_count<10?(0,r.Z)((0,r.Z)({},n),{},{vote_average:0}):n})),"vote_average",e);break;case"Date":o=i(c(t),"release_date",e);break;case"AirDate":o=i(c(t),"first_air_date",e);break;case"Title":o=i(c(t),"title",e);break;case"Name":o=i(c(t),"name",e)}return o};function l(n){var t=[];return n.forEach((function(n){var e=n.author,r=n.content;t.find((function(n){return n.author===e&&n.content===r}))||t.push({author:e,content:r})})),t}var s=function(n,t){var e;switch(t){case"tv":e="TV Shows";break;case"movie":default:e="Movies";break;case"person":e="People"}var r="week"===n?"week":"today";return"".concat(e," trending ").concat(r)},d=e(500);function f(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return d.getName(n,t)}d.registerLocale(e(1086))},9983:function(n,t,e){e.d(t,{w_:function(){return l}});var r=e(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},i.apply(this,arguments)},c=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e};function u(n){return n&&n.map((function(n,t){return r.createElement(n.tag,i({key:t},n.attr),u(n.child))}))}function l(n){return function(t){return r.createElement(s,i({attr:i({},n.attr)},t),u(n.child))}}function s(n){var t=function(t){var e,o=n.attr,a=n.size,u=n.title,l=c(n,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:e,style:i(i({color:n.color||t.color},t.style),n.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),n.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(n){return t(n)})):t(o)}},1140:function(n,t,e){n.exports=e.p+"static/media/NoFilmImage.e2e10cb9ad1ccc405126.png"},5938:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=946.0222ea81.chunk.js.map