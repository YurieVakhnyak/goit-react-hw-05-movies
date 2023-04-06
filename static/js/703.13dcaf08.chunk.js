"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{7398:function(n,e,t){t.d(e,{AY:function(){return p},Dx:function(){return l},W2:function(){return f},WN:function(){return s}});var r,o,i,a,u=t(168),c=t(6444),f=c.ZP.main(r||(r=(0,u.Z)(["\n  padding-left: 20px;\n  padding-top: 5px;\n  background-color: cadetblue;\n"]))),l=c.ZP.h1(o||(o=(0,u.Z)(["\n  padding: 10px 0 10px 0;\n  font-size: xx-large;\n"]))),s=c.ZP.li(i||(i=(0,u.Z)(["\n  display: flex;\n  align-items: start;\n  gap: 5px;\n"]))),p=c.ZP.div(a||(a=(0,u.Z)(["\n  display: flex;\n  gap: 15px;\n  margin: 0 0 10px 5px;\n"])))},2703:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,o,i,a=t(9439),u=t(7398),c=t(1087),f=t(7689),l=t(2791),s=t(8617),p=t(168),d=t(6444),h=d.ZP.form(r||(r=(0,p.Z)(["\n  min-width: 200px;\n  max-width: 280px;\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  margin-bottom: 20px;\n"]))),g=d.ZP.input(o||(o=(0,p.Z)(["\n  min-height: 30px;\n  min-width: 260px;\n  border-radius: 5px;\n  padding: 0 5px 0 15px;\n"]))),m=d.ZP.p(i||(i=(0,p.Z)(["\n  font-weight: 500;\n  font-size: large;\n  margin-left: 5px;\n"]))),x=t(184),v=function(n){var e=n.value,t=n.onSearch;return(0,x.jsxs)(h,{children:[(0,x.jsx)(m,{children:"Search movie"}),(0,x.jsx)(g,{type:"text",placeholder:"Enter movie name",defaultValue:e,onChange:function(n){return t(n.target.value)}})]})},b=t(9501),j=t(7201),w=t(3585),y=function(){var n,e=(0,l.useState)(null),t=(0,a.Z)(e,2),r=t[0],o=t[1],i=(0,l.useState)(null),p=(0,a.Z)(i,2),d=p[0],h=p[1],g=(0,c.lr)(),m=(0,a.Z)(g,2),y=m[0],P=m[1],Z=(0,f.TH)(),O=function(n){P(""!==n?{query:n}:{})},k=null!==(n=y.get("query"))&&void 0!==n?n:"";if((0,l.useEffect)((function(){var n=new URLSearchParams({api_key:w.$h,query:k}),e="".concat(w.jE,"/search/movie?").concat(n);""===k&&null===k||(0,b.r)(e,o,h)}),[k]),r){var S=(0,j.L1)(r.results,"release_date");return(0,x.jsxs)(u.W2,{children:[(0,x.jsx)(v,{value:k,onSearch:O}),(0,x.jsx)("ul",{children:S.map((function(n){var e=n.id,t=n.title,r=n.release_date;return(0,x.jsxs)(u.WN,{children:[(0,x.jsx)(s.LhU,{}),(0,x.jsxs)(c.rU,{to:"".concat(e),state:{from:Z},children:[t," (",(null===r||void 0===r?void 0:r.slice(0,4))||"no data",")"]})]},e)}))})]})}return(0,x.jsx)(u.W2,{children:d?d.message:(0,x.jsx)(v,{onSearch:k,onSearchParams:O})})}},3585:function(n,e,t){t.d(e,{$h:function(){return r},I4:function(){return o},jE:function(){return i},si:function(){return u},uc:function(){return a}});var r="b30750fbe582936755a0930282f9befd",o=new URLSearchParams({api_key:r}),i="https://api.themoviedb.org/3",a="https://image.tmdb.org/t/p/w500",u="https://image.tmdb.org/t/p/w200"},9501:function(n,e,t){t.d(e,{o:function(){return i},r:function(){return o}});var r=t(3585);function o(n,e,t){fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong...."))})).then((function(n){e(n)})).catch((function(n){t(n)}))}function i(n,e){var t=r.si+n;fetch(t).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).then((function(n){return e(n)})).catch((function(n){return console.error(n)}))}},7201:function(n,e,t){t.d(e,{F8:function(){return i},L1:function(){return a},kr:function(){return o},oY:function(){return u}});var r=t(8683);function o(n){if(n){var e=Math.floor(10*n);return"".concat(e,"%")}return"no data"}function i(n){return n?new Date(n).toUTCString().slice(5,16):"no data"}function a(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t?1:-1;return n.sort((function(n,t){return n[e]<t[e]?-1*r:n[e]>t[e]?1*r:0}))}var u=function(n,e,t){var o;switch(n){case"Rating":o=a(e.map((function(n){return n.vote_count<10?(0,r.Z)((0,r.Z)({},n),{},{vote_average:0}):n})),"vote_average",t);break;case"Date":o=a(e,"release_date",t);break;case"Title":o=a(e,"title",t);break;default:o=e}return o}},8683:function(n,e,t){function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=703.13dcaf08.chunk.js.map