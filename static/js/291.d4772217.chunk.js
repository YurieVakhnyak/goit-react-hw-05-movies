"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[291],{6015:function(n,e,t){t.d(e,{Ee:function(){return s},Zb:function(){return h},ds:function(){return o},xv:function(){return f}});var r,i,c,u,a=t(168),l=t(6444),o=l.ZP.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),f=l.ZP.p(i||(i=(0,a.Z)(["\n  font-size: small;\n"]))),s=l.ZP.img(c||(c=(0,a.Z)(["\n  width: 100px;\n  height: 150px;\n"]))),h=l.ZP.div(u||(u=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  font-weight: 500;\n  width: 150px;\n  height: 200px;\n"])))},3291:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r,i=t(9439),c=t(7689),u=t(2791),a=t(6015),l=t(168),o=t(6444).ZP.ul(r||(r=(0,l.Z)(["\n  margin-left: 20px;\n  font-weight: 500;\n"]))),f=t(184);function s(){var n=(0,c.UO)().id,e=(0,u.useState)(null),t=(0,i.Z)(e,2),r=t[0],l=t[1],s=(0,u.useState)(null),h=(0,i.Z)(s,2),d=h[0],p=h[1];if((0,u.useEffect)((function(){var e=new URLSearchParams({api_key:"b30750fbe582936755a0930282f9befd"}),t="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?").concat(e);l(null),fetch(t).then((function(n){return n.ok?n.json():Promise.reject(new Error("\u0429\u043e\u0441\u044c \u043d\u0435 \u0442\u0430\u043a..."))})).then((function(n){l(n)})).catch((function(n){p(n)}))}),[n]),r){var x=r.results;return x.length>0?(0,f.jsx)("main",{children:(0,f.jsx)("ul",{children:x.map((function(n){var e=n.author,t=n.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)(o,{children:e}),(0,f.jsx)(a.xv,{children:t})]},e)}))})}):(0,f.jsx)("main",{children:d?d.message:(0,f.jsx)("p",{children:"We couldn't find any reviews"})})}}}}]);
//# sourceMappingURL=291.d4772217.chunk.js.map