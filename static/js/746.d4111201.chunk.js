"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[746],{7398:function(e,n,t){t.d(n,{Dx:function(){return l},W2:function(){return o},WN:function(){return s}});var r,a,u,c=t(168),i=t(6444),o=i.ZP.main(r||(r=(0,c.Z)(["\n  padding-left: 20px;\n  padding-top: 5px;\n  background-color: cadetblue;\n"]))),l=i.ZP.h1(a||(a=(0,c.Z)(["\n  padding: 10px 0 10px 0;\n  font-size: xx-large;\n"]))),s=i.ZP.li(u||(u=(0,c.Z)(["\n  display: flex;\n  align-items: start;\n  gap: 5px;\n"])))},8746:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(9439),a=t(7398),u=t(1087),c=t(7689),i=t(2791),o=t(8617),l=t(184),s=function(e){var n=e.value,t=e.onSearch;return(0,l.jsxs)("form",{children:[(0,l.jsx)("p",{children:"Search movie"}),(0,l.jsx)("input",{type:"text",defaultValue:n,onChange:function(e){return t(e.target.value)}})]})},f=function(){var e,n=(0,i.useState)(null),t=(0,r.Z)(n,2),f=t[0],h=t[1],d=(0,i.useState)(null),p=(0,r.Z)(d,2),x=p[0],m=p[1],g=(0,u.lr)(),j=(0,r.Z)(g,2),v=j[0],k=j[1],S=(0,c.TH)(),Z=function(e){k(""!==e?{query:e}:{})},b=null!==(e=v.get("query"))&&void 0!==e?e:"";return(0,i.useEffect)((function(){var e=new URLSearchParams({api_key:"b30750fbe582936755a0930282f9befd",query:b});h(null),""===b&&null===b||fetch("https://api.themoviedb.org/3/search/movie?".concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something happened..."))})).then((function(e){h(e)})).catch((function(e){m(e)}))}),[b]),f?(0,l.jsxs)(a.W2,{children:[(0,l.jsx)(s,{value:b,onSearch:Z}),(0,l.jsx)("ul",{children:f.results.map((function(e){var n=e.id,t=e.title,r=e.release_date;return(0,l.jsxs)(a.WN,{children:[(0,l.jsx)(o.LhU,{}),(0,l.jsxs)(u.rU,{to:"".concat(n),state:{from:S},children:[t," (",r.slice(0,4),")"]})]},n)}))})]}):(0,l.jsx)(a.W2,{children:x?x.message:(0,l.jsx)(s,{onSearch:b,onSearchParams:Z})})}}}]);
//# sourceMappingURL=746.d4111201.chunk.js.map