"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[195],{7500:function(n,e,t){t.d(e,{w:function(){return a}});var r=t(1087),i=t(5076),o=t(6355),c=t(184),a=function(n){var e=n.backLinkHref;return(0,c.jsx)(r.rU,{to:e,children:(0,c.jsxs)(i.z,{children:[(0,c.jsx)(o.BMs,{}),"Go back"]})})}},5076:function(n,e,t){t.d(e,{z:function(){return o}});var r,i=t(168),o=t(6444).ZP.button(r||(r=(0,i.Z)(["\n  display: flex;\n  gap: 2px;\n  justify-content: center;\n  align-items: center;\n  min-width: 90px;\n  height: 23px;\n  background-color: lightseagreen;\n  border-radius: 5px;\n  border-color: lightseagreen;\n  &: hover {\n    cursor: pointer;\n    color: darkblue;\n  }\n"])))},7398:function(n,e,t){t.d(e,{AY:function(){return h},Dx:function(){return p},Fg:function(){return d},W2:function(){return f},WN:function(){return x}});var r,i,o,c,a,u=t(168),l=t(6444),s=t(1087),d=(0,l.ZP)(s.rU)(r||(r=(0,u.Z)(["\n  padding: 3px;\n  position: relative;\n\n  &:hover {\n    // styles for hover state\n  }\n"]))),f=l.ZP.main(i||(i=(0,u.Z)(["\n  padding-left: 20px;\n  padding-top: 5px;\n  background-color: cadetblue;\n"]))),p=l.ZP.h1(o||(o=(0,u.Z)(["\n  padding: 10px 0 10px 0;\n  font-size: xx-large;\n"]))),x=l.ZP.li(c||(c=(0,u.Z)(["\n  display: flex;\n  align-items: start;\n  gap: 5px;\n"]))),h=l.ZP.div(a||(a=(0,u.Z)(["\n  display: flex;\n  gap: 15px;\n  margin: 0 0 10px 5px;\n"])))},5841:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(9439),i=t(7689),o=t(2791),c=t(1087),a=t(7398),u=t(7500),l=t(9501),s=t(7201),d=t(3585),f=t(7366),p=t(1140),x=t(184);function h(){var n,e,t=(0,o.useState)(null),h=(0,r.Z)(t,2),v=h[0],m=h[1],g=(0,o.useState)(null),b=(0,r.Z)(g,2),j=b[0],w=b[1],Z=(0,i.UO)().id,y=(0,i.TH)(),k=null!==(n=null===(e=y.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,o.useEffect)((function(){var n="".concat(d.jE,"/movie/").concat(Z,"?").concat(d.I4);(0,l.r)(n,m,w)}),[Z]),v){var P,O,_=v.backdrop_path,E=v.title,U=v.release_date,C=v.vote_average,L=v.overview,S=v.genres,z="".concat(d.uc).concat(_);return(0,x.jsxs)(a.W2,{children:[(0,x.jsxs)(f.xu,{children:[(0,x.jsxs)(f.Xq,{children:[(0,x.jsx)(u.w,{backLinkHref:k}),(0,x.jsx)(f.Xb,{src:_?z:p,alt:E})]}),(0,x.jsxs)(f.vD,{children:[(0,x.jsx)(a.Dx,{children:E}),(0,x.jsxs)("p",{children:["User score: ",(0,s.kr)(C)]}),(0,x.jsxs)("p",{children:["Release date: ",(0,s.F8)(U)]}),(0,x.jsx)(f.Im,{children:"Overview"}),(0,x.jsx)("p",{children:L}),(0,x.jsx)(f.Im,{children:"Genres"}),(0,x.jsx)(f.LK,{children:S.map((function(n){var e=n.id,t=n.name;return(0,x.jsx)("li",{children:t},e)}))})]})]}),(0,x.jsxs)(f.Ei,{children:[(0,x.jsx)(f.Im,{children:"Additionals information"}),(0,x.jsxs)(f.bU,{children:[(0,x.jsx)(c.rU,{to:"get-movie-credits",state:{from:null===(P=y.state)||void 0===P?void 0:P.from},children:"Cast"}),(0,x.jsx)(c.rU,{to:"get-movie-reviews",state:{from:null===(O=y.state)||void 0===O?void 0:O.from},children:"Reviews"})]})]}),(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading subpage..."}),children:(0,x.jsx)(i.j3,{})})]})}return(0,x.jsx)(a.W2,{children:j?j.message:(0,x.jsx)("p",{children:"Searching..."})})}},7366:function(n,e,t){t.d(e,{Ei:function(){return h},Im:function(){return j},LK:function(){return g},Xb:function(){return v},Xq:function(){return b},bU:function(){return m},vD:function(){return p},xu:function(){return x}});var r,i,o,c,a,u,l,s,d=t(168),f=t(6444),p=f.ZP.div(r||(r=(0,d.Z)(["\n  max-width: 500px;\n  margin-left: 20px;\n"]))),x=f.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 5px;\n"]))),h=f.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  background-color: lightseagreen;\n  padding: 5px 0 10px 20px;\n"]))),v=f.ZP.img(c||(c=(0,d.Z)(["\n  @media (max-width: 500px) {\n    width: 400px;\n  }\n  @media (max-width: 400px) {\n    width: 350px;\n  }\n"]))),m=f.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),g=f.ZP.ul(u||(u=(0,d.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),b=f.ZP.div(l||(l=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),j=f.ZP.h2(s||(s=(0,d.Z)(["\n  padding-left: 0px;\n  margin: 7px 0 7px 0;\n  font-size: x-large;\n"])))},3585:function(n,e,t){t.d(e,{$h:function(){return r},I4:function(){return i},jE:function(){return o},si:function(){return a},uc:function(){return c}});var r="b30750fbe582936755a0930282f9befd",i=new URLSearchParams({api_key:r}),o="https://api.themoviedb.org/3",c="https://image.tmdb.org/t/p/w500",a="https://image.tmdb.org/t/p/w200"},9501:function(n,e,t){t.d(e,{o:function(){return o},r:function(){return i}});var r=t(3585);function i(n,e,t){fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong...."))})).then((function(n){e(n)})).catch((function(n){t(n)}))}function o(n,e){var t=r.si+n;fetch(t).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).then((function(n){return e(n)})).catch((function(n){return console.error(n)}))}},7201:function(n,e,t){t.d(e,{F8:function(){return o},L1:function(){return c},kr:function(){return i},oY:function(){return a}});var r=t(8683);function i(n){if(n){var e=Math.floor(10*n);return"".concat(e,"%")}return"no data"}function o(n){return n?new Date(n).toUTCString().slice(5,16):"no data"}function c(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t?1:-1;return n.sort((function(n,t){return n[e]<t[e]?-1*r:n[e]>t[e]?1*r:0}))}var a=function(n,e,t){var i;switch(n){case"Rating":i=c(e.map((function(n){return n.vote_count<10?(0,r.Z)((0,r.Z)({},n),{},{vote_average:0}):n})),"vote_average",t);break;case"Date":i=c(e,"release_date",t);break;case"Title":i=c(e,"title",t);break;default:i=e}return i}},9983:function(n,e,t){t.d(e,{w_:function(){return l}});var r=t(2791),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),c=function(){return c=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},c.apply(this,arguments)},a=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};function u(n){return n&&n.map((function(n,e){return r.createElement(n.tag,c({key:e},n.attr),u(n.child))}))}function l(n){return function(e){return r.createElement(s,c({attr:c({},n.attr)},e),u(n.child))}}function s(n){var e=function(e){var t,i=n.attr,o=n.size,u=n.title,l=a(n,["attr","size","title"]),s=o||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,l,{className:t,style:c(c({color:n.color||e.color},e.style),n.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),n.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(n){return e(n)})):e(i)}},1140:function(n,e,t){n.exports=t.p+"static/media/NoFilmImage.e2e10cb9ad1ccc405126.png"}}]);
//# sourceMappingURL=195.eacfa92b.chunk.js.map