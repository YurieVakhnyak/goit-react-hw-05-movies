"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{5076:function(n,t,e){e.d(t,{z:function(){return i}});var r,o=e(168),i=e(6444).ZP.button(r||(r=(0,o.Z)(["\n  display: flex;\n  gap: 7px;\n  justify-content: center;\n  align-items: center;\n  min-width: 90px;\n  height: 25px;\n  background-color: lightseagreen;\n  border-radius: 5px;\n  border-color: lightseagreen;\n  font-size: medium;\n  &: hover {\n    cursor: pointer;\n    color: darkblue;\n  }\n"])))},1153:function(n,t,e){e.d(t,{u:function(){return p}});var r,o,i,c=e(168),a=e(6444),u=a.ZP.div(r||(r=(0,c.Z)(["\n  position: absolute;\n  width: 250px;\n  transform: translate(30%, -100%);\n  z-index: 99;\n  background-color: cadetblue;\n  color: white;\n"]))),d=a.ZP.p(o||(o=(0,c.Z)(["\n  font-size: small;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  /* \u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0456 \u0441\u0442\u0438\u043b\u0456 */\n  display: -moz-box;\n  -moz-box-orient: vertical;\n  -moz-box-lines: 3;\n"]))),l=a.ZP.img(i||(i=(0,c.Z)(["\n  width: 220px;\n  height: 110px;\n"]))),s=e(1140),f=e(184);function p(n){var t=n.hoveredImageUrl,e=n.title,r=n.overview;return(0,f.jsxs)(u,{children:[(0,f.jsx)(l,{src:t,alt:e,onError:function(n){n.target.onerror=null,n.target.src=s}}),(0,f.jsx)(d,{children:r})]})}},2546:function(n,t,e){e.d(t,{H:function(){return u}});var r=e(6243),o=e(1153),i=e(9501),c=e(7201),a=e(184),u=function(n){var t=n.movie,e=n.hoveredId,u=n.setHoveredId,d=n.hoveredImageUrl,l=n.setHoveredImageUrl,s=n.location,f=t.id,p=t.title,h=t.release_date,v=t.overview,x=t.vote_average,m=t.backdrop_path;return(0,a.jsxs)(r.WN,{children:[(0,a.jsx)(r.X5,{}),(0,a.jsxs)(r.Fg,{to:"/movies/".concat(f),state:{from:s},onMouseEnter:function(){return function(n,t){u(n),(0,i.ot)(t,l)}(f,m)},onMouseLeave:function(){u(null)},children:[p,", (",(null===h||void 0===h?void 0:h.slice(0,4))||"no data","),"," ",(0,c.kr)(x)]}),e===f&&d&&(0,a.jsx)(o.u,{hoveredImageUrl:d,title:p,overview:v})]},f)}},6243:function(n,t,e){e.d(t,{Fg:function(){return l},WN:function(){return f},X5:function(){return s}});var r,o,i,c=e(168),a=e(6444),u=e(8617),d=e(1087),l=(0,a.ZP)(d.rU)(r||(r=(0,c.Z)(["\n  padding: 5px;\n  position: relative;\n"]))),s=(0,a.ZP)(u.LhU)(o||(o=(0,c.Z)(["\n  padding: 5px 0 5px 0;\n  // color: darkblue;\n"]))),f=a.ZP.li(i||(i=(0,c.Z)(["\n  display: flex;\n  align-items: start;\n  gap: 5px;\n"])))},733:function(n,t,e){e.d(t,{I:function(){return a}});var r=e(6355),o=e(5076),i=e(3023),c=e(184);function a(n){var t=n.setFieldSorted,e=n.toggleOrder,a=n.fieldSorted,u=n.order,d=function(n){return n===a?"active":"inactive"};return(0,c.jsxs)(i.A1,{children:[(0,c.jsx)(o.z,{className:d("Trends"),onClick:function(){t("Trends")},children:"Trends"}),(0,c.jsxs)(o.z,{className:d("Rating"),onClick:function(){t("Rating"),e()},children:["Rating","Rating"===a&&(u?(0,c.jsx)(r.DKZ,{}):(0,c.jsx)(r.sEQ,{}))]}),(0,c.jsxs)(o.z,{className:d("Date"),onClick:function(){t("Date"),e()},children:["Date","Date"===a&&(u?(0,c.jsx)(r.DKZ,{}):(0,c.jsx)(r.sEQ,{}))]}),(0,c.jsxs)(o.z,{className:d("Title"),onClick:function(){t("Title"),e()},children:["Title","Title"===a&&(u?(0,c.jsx)(r.sEQ,{}):(0,c.jsx)(r.DKZ,{}))]})]})}},317:function(n,t,e){e.d(t,{t:function(){return x}});var r,o,i,c,a=e(168),u=e(6444),d=e(5076),l=u.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  height: 50px;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 480px;\n"]))),s=u.ZP.h1(o||(o=(0,a.Z)(["\n  font-size: xx-large;\n  vertical-align: super;\n"]))),f=u.ZP.h1(i||(i=(0,a.Z)(["\n  margin-top: 10px;\n"]))),p=(0,u.ZP)(d.z)(c||(c=(0,a.Z)(["\n  min-width: 100px;\n  &:focus {\n    color: black;\n  }\n"]))),h=e(7201),v=e(184),x=function(n){var t=n.setPeriod,e=n.period,r=n.type;return(0,v.jsxs)(l,{children:[(0,v.jsx)(s,{children:(0,h.R1)(e,r)}),(0,v.jsx)(f,{children:(0,v.jsx)(p,{onClick:function(){t("day"===e?"week":"day")},children:"Timeframe"})})]})}},9544:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(9439),o=e(2791),i=e(7689),c=e(9501),a=e(7201),u=e(733),d=e(7398),l=e(2546),s=e(317),f=e(184);function p(){var n=(0,o.useState)(null),t=(0,r.Z)(n,2),e=t[0],p=t[1],h=(0,o.useState)(null),v=(0,r.Z)(h,2),x=v[0],m=v[1],g=(0,o.useState)(!0),Z=(0,r.Z)(g,2),S=Z[0],j=Z[1],k=(0,o.useState)("day"),b=(0,r.Z)(k,2),I=b[0],T=b[1],w=(0,o.useState)(null),P=(0,r.Z)(w,2),U=P[0],E=P[1],J=(0,o.useState)(null),X=(0,r.Z)(J,2),y=X[0],q=X[1],A=(0,o.useState)(null),F=(0,r.Z)(A,2),R=F[0],D=F[1],O=(0,i.TH)();if((0,o.useEffect)((function(){var n=(0,c.Uv)("movie",I);(0,c.rQ)(n,p,D)}),[I]),e){var L=e.results,V=(0,a.oY)(x,L,S);return(0,f.jsxs)(d.W2,{children:[(0,f.jsx)(u.I,{setFieldSorted:m,toggleOrder:function(){j(!S)},fieldSorted:x,order:S}),(0,f.jsx)(s.t,{setPeriod:T,period:I,type:"movie"}),(0,f.jsx)("ul",{children:V.map((function(n){return(0,f.jsx)(l.H,{movie:n,hoveredId:U,setHoveredId:E,hoveredImageUrl:y,setHoveredImageUrl:q,location:O},n.id)}))})]})}return(0,f.jsx)(d.W2,{children:R?R.message:(0,f.jsx)("p",{children:"Searching..."})})}},7398:function(n,t,e){e.d(t,{Dx:function(){return d},W2:function(){return u}});var r,o,i,c=e(168),a=e(6444),u=a.ZP.main(r||(r=(0,c.Z)(["\n  padding-left: 20px;\n  padding-top: 5px;\n  background-color: cadetblue;\n"]))),d=(a.ZP.main(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: space-around;\n  max-width: 500px;\n  padding: 5px 0 5px 0;\n"]))),a.ZP.h1(i||(i=(0,c.Z)(["\n  font-size: xx-large;\n"]))))},3023:function(n,t,e){e.d(t,{A1:function(){return v},Dk:function(){return f},KN:function(){return h},m$:function(){return x},re:function(){return p},yk:function(){return s}});var r,o,i,c,a,u,d=e(168),l=e(6444),s=l.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-left: 20px;\n  text-align: center;\n\n  @media (max-width: 900px) {\n    flex-wrap: wrap;\n  }\n"]))),f=l.ZP.div(o||(o=(0,d.Z)(["\n  column-count: 1;\n  column-gap: 20px;\n\n  @media (min-width: 750px) {\n    column-count: 2;\n  }\n"]))),p=l.ZP.div(i||(i=(0,d.Z)(["\n  max-width: 450px;\n  min-width: 300px;\n  @media (min-width: 900px) {\n    padding-top: 80px;\n  }\n"]))),h=l.ZP.div(c||(c=(0,d.Z)(["\n  padding: 5px;\n"]))),v=l.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: left;\n  gap: 5px;\n"]))),x=l.ZP.div(u||(u=(0,d.Z)(["\n  text-align: left;\n  min-width: 300px;\n"])))},3585:function(n,t,e){e.d(t,{$h:function(){return r},I4:function(){return o},jE:function(){return i},si:function(){return a},uc:function(){return c}});var r="b30750fbe582936755a0930282f9befd",o=new URLSearchParams({api_key:r}),i="https://api.themoviedb.org/3",c="https://image.tmdb.org/t/p/w500",a="https://image.tmdb.org/t/p/w200"},9501:function(n,t,e){e.d(t,{Jn:function(){return a},Uv:function(){return d},VH:function(){return u},ot:function(){return c},rQ:function(){return i}});var r=e(3585),o=e(5938);function i(n,t,e){fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong...."))})).then((function(n){t(n)})).catch((function(n){e(n)}))}function c(n,t){var e=r.si+n;fetch(e).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))}function a(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?t?r.si+n:r.uc+n:o}function u(n,t,e){var o="tv"===t?"tv":"movie",i="cast"===e?"credits":"reviews";return"".concat(r.jE,"/").concat(o,"/").concat(n,"/").concat(i,"?").concat(r.I4)}function d(n,t){var e="tv"===n?"tv":"movie";return"".concat(r.jE,"/trending/").concat(e,"/").concat(t,"?").concat(r.I4)}},7201:function(n,t,e){e.d(t,{F8:function(){return i},G6:function(){return d},L1:function(){return c},R1:function(){return l},kr:function(){return o},oY:function(){return u}});var r=e(8683);function o(n){if(n){var t=Math.floor(10*n);return"".concat(t,"%")}return"--%"}function i(n){return n?new Date(n).toUTCString().slice(5,16):"no data"}function c(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e?1:-1;return n.sort((function(n,e){return n[t]<e[t]?-1*r:n[t]>e[t]?1*r:0}))}function a(n){return n.map((function(n){return null!==n?(0,r.Z)({},n):n}))}var u=function(n,t,e){var o;switch(n){case"Trends":default:o=t;break;case"Rating":o=c(t.map((function(n){return n.vote_count<10?(0,r.Z)((0,r.Z)({},n),{},{vote_average:0}):n})),"vote_average",e);break;case"Date":o=c(a(t),"release_date",e);break;case"Title":o=c(a(t),"title",e)}return o};function d(n){var t=[];return n.forEach((function(n){var e=n.author,r=n.content;t.find((function(n){return n.author===e&&n.content===r}))||t.push({author:e,content:r})})),t}var l=function(n,t){var e="week"===n?"week":"today";return"".concat("tv"===t?"TV Shows":"Movies"," trending ").concat(e)}},1140:function(n,t,e){n.exports=e.p+"static/media/NoFilmImage.e2e10cb9ad1ccc405126.png"},5938:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=544.fc80d5cc.chunk.js.map