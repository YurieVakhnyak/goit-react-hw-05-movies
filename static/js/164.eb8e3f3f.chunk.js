"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[164],{6117:function(n,t,e){e.d(t,{F:function(){return u},q:function(){return i}});var r,o,c=e(168),a=e(6444),i=a.ZP.h3(r||(r=(0,c.Z)(["\n  margin: 5px 0 10px 20px;\n  font-weight: 500;\n"]))),u=a.ZP.p(o||(o=(0,c.Z)(["\n  margin-left: 20px;\n  font-weight: 400;\n  font-size: small;\n  column-gap: 5px;\n  column-count: 1;\n\n  @media (min-width: 550px) {\n    column-count: 2;\n  }\n  @media (min-width: 900px) {\n    column-count: 3;\n  }\n  @media (min-width: 1400px) {\n    column-count: 4;\n  }\n"])))},3164:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(9439),o=e(7689),c=e(2791),a=e(6117),i=e(9501),u=e(7201),f=e(5984),p=e(184);function d(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],d=t[1],h=(0,c.useState)(null),l=(0,r.Z)(h,2),s=l[0],m=l[1],v=(0,o.UO)().id;if((0,c.useEffect)((function(){var n=(0,i.VH)(v,"tv","reviews");(0,i.rQ)(n,d,m)}),[v]),e){var g=e.results,S=(0,u.G6)(g);return S.length>0?(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:S.map((function(n){var t=n.author,e=n.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)(a.q,{children:t}),(0,p.jsx)(a.F,{children:e})]},(0,f.x0)())}))})}):(0,p.jsx)("main",{children:s?s.message:(0,p.jsx)("p",{children:"We couldn't find any reviews"})})}}},3585:function(n,t,e){e.d(t,{$h:function(){return r},I4:function(){return o},jE:function(){return c},si:function(){return i},uc:function(){return a}});var r="b30750fbe582936755a0930282f9befd",o=new URLSearchParams({api_key:r,language:"en"}),c="https://api.themoviedb.org/3",a="https://image.tmdb.org/t/p/w500",i="https://image.tmdb.org/t/p/w200"},9501:function(n,t,e){e.d(t,{Jn:function(){return u},Uv:function(){return p},VH:function(){return f},ot:function(){return i},rQ:function(){return a}});var r=e(3585),o=e(5938),c=e(1140);function a(n,t,e){fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong...."))})).then((function(n){t(n)})).catch((function(n){e(n)}))}function i(n,t){var e=r.si+n;fetch(e).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))}function u(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"person";return n?t?r.si+n:r.uc+n:"person"===e?o:c}function f(n,t,e){var o="tv"===t?"tv":"movie",c="cast"===e?"credits":"reviews";return"".concat(r.jE,"/").concat(o,"/").concat(n,"/").concat(c,"?").concat(r.I4)}function p(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en",o=new URLSearchParams(r.I4);o.set("language",e);var c="tv"===n?"tv":"person"===n?"person":"movie",a="".concat(r.jE,"/trending/").concat(c,"/").concat(t,"?").concat(o);return a}},7201:function(n,t,e){e.d(t,{F8:function(){return i},G6:function(){return d},L1:function(){return u},R1:function(){return h},kr:function(){return a},oY:function(){return p},pD:function(){return s}});var r=e(8683),o=e(2791),c=e(184);function a(n){if(n){var t=Math.floor(10*n);return"".concat(t,"%")}return"--%"}function i(n){return n?new Date(n).toUTCString().slice(5,16):"no data"}function u(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e?1:-1;return n.sort((function(n,e){return n[t]<e[t]?-1*r:n[t]>e[t]?1*r:0}))}function f(n){return n.map((function(n){return null!==n?(0,r.Z)({},n):n}))}var p=function(n,t,e){var o;switch(n){case"Trends":default:o=t;break;case"Rating":o=u(t.map((function(n){return n.vote_count<10?(0,r.Z)((0,r.Z)({},n),{},{vote_average:0}):n})),"vote_average",e);break;case"Date":o=u(f(t),"release_date",e);break;case"AirDate":o=u(f(t),"first_air_date",e);break;case"Title":o=u(f(t),"title",e);break;case"Name":o=u(f(t),"name",e)}return o};function d(n){var t=[];return n.forEach((function(n){var e=n.author,r=n.content;t.find((function(n){return n.author===e&&n.content===r}))||t.push({author:e,content:r})})),t}var h=function(n,t,e){var r;switch(t){case"tv":r="TV Shows";break;case"movie":default:r="Movies";break;case"person":r="People"}var a="week"===n?"week":"today";return(0,c.jsxs)(o.Fragment,{children:[r," trending"," ",(0,c.jsx)("span",{style:{textDecoration:e?"underline":"none"},children:a})]})},l=e(500);function s(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return l.getName(n,t)}l.registerLocale(e(1086))},1140:function(n,t,e){n.exports=e.p+"static/media/NoFilmImage.e2e10cb9ad1ccc405126.png"},5938:function(n){n.exports="data:image/png;base64,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"},5984:function(n,t,e){e.d(t,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=164.eb8e3f3f.chunk.js.map