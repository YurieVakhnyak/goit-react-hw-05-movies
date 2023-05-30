"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[294],{5076:function(n,t,e){e.d(t,{z:function(){return o}});var r,i=e(168),o=e(6444).ZP.button(r||(r=(0,i.Z)(["\n  display: flex;\n  gap: 7px;\n  justify-content: center;\n  align-items: center;\n  min-width: 90px;\n  height: 25px;\n  background-color: lightseagreen;\n  border-radius: 5px;\n  border-color: lightseagreen;\n  font-size: medium;\n  &: hover {\n    cursor: pointer;\n    color: darkblue;\n  }\n"])))},1153:function(n,t,e){e.d(t,{u:function(){return f}});var r,i,o,a=e(168),c=e(6444),u=c.ZP.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  width: 250px;\n  transform: translate(50%, -117%);\n  z-index: 99;\n  background-color: cadetblue;\n  color: white;\n"]))),d=c.ZP.p(i||(i=(0,a.Z)(["\n  font-size: small;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  /* \u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0456 \u0441\u0442\u0438\u043b\u0456 */\n  display: -moz-box;\n  -moz-box-orient: vertical;\n  -moz-box-lines: 3;\n"]))),s=c.ZP.img(o||(o=(0,a.Z)(["\n  width: 220px;\n  height: 110px;\n"]))),l=e(1140),p=e(184);function f(n){var t=n.hoveredImageUrl,e=n.title,r=n.overview;return(0,p.jsxs)(u,{children:[(0,p.jsx)(s,{src:t,alt:e,onError:function(n){n.target.onerror=null,n.target.src=l}}),(0,p.jsx)(d,{children:r})]})}},6243:function(n,t,e){e.d(t,{Fg:function(){return s},WN:function(){return p},X5:function(){return l}});var r,i,o,a=e(168),c=e(6444),u=e(8617),d=e(1087),s=(0,c.ZP)(d.rU)(r||(r=(0,a.Z)(["\n  padding: 5px;\n  position: relative;\n  vertical-align: middle;\n"]))),l=(0,c.ZP)(u.LhU)(i||(i=(0,a.Z)(["\n  vertical-align: middle;\n"]))),p=c.ZP.li(o||(o=(0,a.Z)(["\n  min-height: 30px;\n"])))},26:function(n,t,e){e.d(t,{I:function(){return x}});var r,i,o,a,c=e(168),u=e(6444),d=e(6355),s=e(5076),l=u.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  gap: 10px;\n\n  @media (max-width: 430px) {\n    gap: 10px;\n    margin-bottom: 5px;\n  }\n"]))),p=(0,u.ZP)(s.z)(i||(i=(0,c.Z)(["\n  position: relative;\n  @media (max-width: 430px) {\n    min-width: 80px;\n  }\n"]))),f=(0,u.ZP)(d.sEQ)(o||(o=(0,c.Z)(["\n  position: absolute;\n right: 5%;\n  }\n"]))),h=(0,u.ZP)(d.DKZ)(a||(a=(0,c.Z)(["\n  position: absolute; \n  right: 5%;\n  }\n"]))),v=e(184);function x(n){var t=n.sortProps,e=t.type,r=t.setFieldSorted,i=t.toggleOrder,o=t.fieldSorted,a=t.order,c=function(n){return n===o?"active":"inactive"};return(0,v.jsxs)(l,{children:[(0,v.jsx)(p,{className:c("Trends"),onClick:function(){r("Trends")},children:"Trends"}),(0,v.jsxs)(p,{className:c("Rating"),onClick:function(){r("Rating"),i()},children:["Rating","Rating"===o&&(a?(0,v.jsx)(f,{}):(0,v.jsx)(h,{}))]}),(0,v.jsxs)(p,{className:c("Date"),onClick:function(){r("tv"===e?"AirDate":"Date"),i()},children:["Date",("Date"===o||"AirDate"===o)&&(a?(0,v.jsx)(f,{}):(0,v.jsx)(h,{}))]}),(0,v.jsxs)(p,{className:c("Title"),onClick:function(){r("tv"===e?"Name":"Title"),i()},children:["Title",("Title"===o||"Name"===o)&&(a?(0,v.jsx)(h,{}):(0,v.jsx)(f,{}))]})]})}},317:function(n,t,e){e.d(t,{t:function(){return g}});var r,i,o,a,c=e(9439),u=e(168),d=e(6444),s=e(5076),l=d.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  gap: 30px;\n\n  min-height: 50px;\n  justify-content: space-around;\n  align-items: center;\n  min-width: 350px;\n  max-width: 530px;\n  @media (max-width: 520px) {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 10px;\n  }\n"]))),p=d.ZP.h1(i||(i=(0,u.Z)(["\n  font-size: xx-large;\n  vertical-align: super;\n  @media (max-width: 520px) {\n    font-size: 28px;\n  }\n"]))),f=d.ZP.div(o||(o=(0,u.Z)(["\n  margin-top: 10px;\n  @media (max-width: 421px) {\n    margin-bottom: 5px;\n  }\n  @media (max-width: 520px) {\n    margin-top: 0px;\n  }\n"]))),h=(0,d.ZP)(s.z)(a||(a=(0,u.Z)(["\n  min-width: 100px;\n  &:focus {\n    // color: darkblue;\n    // color: white;\n  }\n  &:hover {\n    color: blue;\n  }\n"]))),v=e(2791),x=e(7201),m=e(184),g=function(n){var t=n.setPeriod,e=n.period,r=n.type,i=(0,v.useState)(!1),o=(0,c.Z)(i,2),a=o[0],u=o[1];return(0,m.jsxs)(l,{children:[(0,m.jsx)(p,{children:(0,x.R1)(e,r,a)}),(0,m.jsx)(f,{children:(0,m.jsx)(h,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},onClick:function(){t("day"===e?"week":"day")},children:"Timeframe"})})]})}},7398:function(n,t,e){e.d(t,{Dx:function(){return l},Hg:function(){return s},W2:function(){return d}});var r,i,o,a,c=e(168),u=e(6444),d=u.ZP.main(r||(r=(0,c.Z)(["\n  padding-left: 20px;\n  padding-top: 5px;\n  background-color: cadetblue;\n"]))),s=u.ZP.div(i||(i=(0,c.Z)(["\n  padding-top: 10px;\n"]))),l=(u.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: space-around;\n  max-width: 500px;\n  padding: 5px 0 5px 0;\n"]))),u.ZP.h1(a||(a=(0,c.Z)(["\n  font-size: xx-large;\n"]))))},9294:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r=e(9439),i=e(2791),o=e(9501),a=e(7201),c=e(26),u=e(7398),d=e(6243),s=e(1153),l=e(7689),p=e(184),f=function(n){var t=n.movie,e=n.index,c=(0,i.useState)(null),u=(0,r.Z)(c,2),f=u[0],h=u[1],v=(0,i.useState)(null),x=(0,r.Z)(v,2),m=x[0],g=x[1],Z=(0,l.TH)(),S=t.id,b=t.name,j=t.first_air_date,k=t.overview,w=t.vote_average,P=t.backdrop_path;return(0,p.jsxs)(d.WN,{children:[(0,p.jsx)(d.X5,{}),(0,p.jsxs)(d.Fg,{to:"/tv-shows/".concat(S),state:{from:Z},onMouseEnter:function(){return function(n,t){h(n),(0,o.ot)(t,g)}(S,P)},onMouseLeave:function(){h(null)},children:[e+1,". ",b,", (",(null===j||void 0===j?void 0:j.slice(0,4))||"no data","),"," ",(0,a.kr)(w)]}),f===S&&m&&(0,p.jsx)(s.u,{hoveredImageUrl:m,title:b,overview:k})]},S)},h=function(n){var t=n.movies;return(0,p.jsx)("ul",{children:t.map((function(n,t){return(0,p.jsx)(f,{movie:n,index:t},n.id)}))})},v=e(317);function x(){var n=(0,i.useState)(null),t=(0,r.Z)(n,2),e=t[0],d=t[1],s=(0,i.useState)(null),l=(0,r.Z)(s,2),f=l[0],x=l[1],m=(0,i.useState)(!0),g=(0,r.Z)(m,2),Z=g[0],S=g[1],b=(0,i.useState)("day"),j=(0,r.Z)(b,2),k=j[0],w=j[1],P=(0,i.useState)(null),T=(0,r.Z)(P,2),E=T[0],I=T[1],U="tv";(0,i.useEffect)((function(){var n=(0,o.Uv)(U,k);(0,o.rQ)(n,d,I)}),[k]);var J={type:U,setFieldSorted:x,fieldSorted:f,toggleOrder:function(){S(!Z)},order:Z};if(e){var X=e.results,q=(0,a.oY)(f,X,Z);return(0,p.jsxs)(u.W2,{children:[(0,p.jsx)(u.Hg,{children:(0,p.jsx)(c.I,{sortProps:J})}),(0,p.jsx)(v.t,{setPeriod:w,period:k,type:U}),(0,p.jsx)(h,{movies:q})]})}return(0,p.jsx)(u.W2,{children:E?E.message:(0,p.jsx)("p",{children:"Searching..."})})}},3585:function(n,t,e){e.d(t,{$h:function(){return r},I4:function(){return i},jE:function(){return o},si:function(){return c},uc:function(){return a}});var r="b30750fbe582936755a0930282f9befd",i=new URLSearchParams({api_key:r,language:"en"}),o="https://api.themoviedb.org/3",a="https://image.tmdb.org/t/p/w500",c="https://image.tmdb.org/t/p/w200"},9501:function(n,t,e){e.d(t,{Jn:function(){return u},Uv:function(){return s},VH:function(){return d},ot:function(){return c},rQ:function(){return a}});var r=e(3585),i=e(5938),o=e(1140);function a(n,t,e){fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong...."))})).then((function(n){t(n)})).catch((function(n){e(n)}))}function c(n,t){var e=r.si+n;fetch(e).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))}function u(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"person";return n?t?r.si+n:r.uc+n:"person"===e?i:o}function d(n,t,e){var i="tv"===t?"tv":"movie",o="cast"===e?"credits":"reviews";return"".concat(r.jE,"/").concat(i,"/").concat(n,"/").concat(o,"?").concat(r.I4)}function s(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en",i=new URLSearchParams(r.I4);i.set("language",e);var o="tv"===n?"tv":"person"===n?"person":"movie",a="".concat(r.jE,"/trending/").concat(o,"/").concat(t,"?").concat(i);return a}},7201:function(n,t,e){e.d(t,{F8:function(){return c},G6:function(){return l},L1:function(){return u},R1:function(){return p},kr:function(){return a},oY:function(){return s},pD:function(){return h}});var r=e(8683),i=e(2791),o=e(184);function a(n){if(n){var t=Math.floor(10*n);return"".concat(t,"%")}return"--%"}function c(n){return n?new Date(n).toUTCString().slice(5,16):"no data"}function u(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e?1:-1;return n.sort((function(n,e){return n[t]<e[t]?-1*r:n[t]>e[t]?1*r:0}))}function d(n){return n.map((function(n){return null!==n?(0,r.Z)({},n):n}))}var s=function(n,t,e){var i;switch(n){case"Trends":default:i=t;break;case"Rating":i=u(t.map((function(n){return n.vote_count<10?(0,r.Z)((0,r.Z)({},n),{},{vote_average:0}):n})),"vote_average",e);break;case"Date":i=u(d(t),"release_date",e);break;case"AirDate":i=u(d(t),"first_air_date",e);break;case"Title":i=u(d(t),"title",e);break;case"Name":i=u(d(t),"name",e)}return i};function l(n){var t=[];return n.forEach((function(n){var e=n.author,r=n.content;t.find((function(n){return n.author===e&&n.content===r}))||t.push({author:e,content:r})})),t}var p=function(n,t,e){var r;switch(t){case"tv":r="TV Shows";break;case"movie":default:r="Movies";break;case"person":r="People"}var a="week"===n?"week":"today";return(0,o.jsxs)(i.Fragment,{children:[r," trending"," ",(0,o.jsx)("span",{style:{textDecoration:e?"underline":"none"},children:a})]})},f=e(500);function h(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return f.getName(n,t)}f.registerLocale(e(1086))},1140:function(n,t,e){n.exports=e.p+"static/media/NoFilmImage.e2e10cb9ad1ccc405126.png"},5938:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=294.e7baac21.chunk.js.map