"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[946],{1153:function(n,e,t){t.d(e,{u:function(){return p}});var r,o,a,i=t(168),c=t(6444),u=c.ZP.div(r||(r=(0,i.Z)(["\n  position: absolute;\n  width: 250px;\n  transform: translate(50%, -117%);\n  z-index: 99;\n  background-color: cadetblue;\n  color: white;\n"]))),l=c.ZP.p(o||(o=(0,i.Z)(["\n  font-size: small;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  /* \u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0456 \u0441\u0442\u0438\u043b\u0456 */\n  display: -moz-box;\n  -moz-box-orient: vertical;\n  -moz-box-lines: 3;\n"]))),d=c.ZP.img(a||(a=(0,i.Z)(["\n  width: 220px;\n  height: 110px;\n"]))),s=t(1140),f=t(184);function p(n){var e=n.hoveredImageUrl,t=n.title,r=n.overview;return(0,f.jsxs)(u,{children:[(0,f.jsx)(d,{src:e,alt:t,onError:function(n){n.target.onerror=null,n.target.src=s}}),(0,f.jsx)(l,{children:r})]})}},2546:function(n,e,t){t.d(e,{H:function(){return u}});var r=t(6243),o=t(1153),a=t(9501),i=t(7201),c=t(184),u=function(n){var e=n.movie,t=n.index,u=n.hoveredId,l=n.setHoveredId,d=n.hoveredImageUrl,s=n.setHoveredImageUrl,f=n.location,p=e.id,h=e.title,v=e.release_date,m=e.overview,g=e.vote_average,x=e.backdrop_path;return(0,c.jsxs)(r.WN,{children:[(0,c.jsx)(r.X5,{}),(0,c.jsxs)(r.Fg,{to:"/movies/".concat(p),state:{from:f},onMouseEnter:function(){return function(n,e){l(n),(0,a.ot)(e,s)}(p,x)},onMouseLeave:function(){l(null)},children:[t+1,". ",h,", (",(null===v||void 0===v?void 0:v.slice(0,4))||"no data","),"," ",(0,i.kr)(g)]}),u===p&&d&&(0,c.jsx)(o.u,{hoveredImageUrl:d,title:h,overview:m})]},p)}},6243:function(n,e,t){t.d(e,{Fg:function(){return d},WN:function(){return f},X5:function(){return s}});var r,o,a,i=t(168),c=t(6444),u=t(8617),l=t(1087),d=(0,c.ZP)(l.rU)(r||(r=(0,i.Z)(["\n  padding: 5px;\n  position: relative;\n  vertical-align: middle;\n"]))),s=(0,c.ZP)(u.LhU)(o||(o=(0,i.Z)(["\n  vertical-align: middle;\n"]))),f=c.ZP.li(a||(a=(0,i.Z)(["\n  min-height: 30px;\n"])))},7398:function(n,e,t){t.d(e,{Dx:function(){return s},Hg:function(){return d},W2:function(){return l}});var r,o,a,i,c=t(168),u=t(6444),l=u.ZP.main(r||(r=(0,c.Z)(["\n  padding-left: 20px;\n  padding-top: 5px;\n  background-color: cadetblue;\n"]))),d=u.ZP.div(o||(o=(0,c.Z)(["\n  padding-top: 10px;\n"]))),s=(u.ZP.div(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: space-around;\n  max-width: 500px;\n  padding: 5px 0 5px 0;\n"]))),u.ZP.h1(i||(i=(0,c.Z)(["\n  font-size: xx-large;\n"]))))},2703:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,o,a,i=t(9439),c=t(7398),u=t(1087),l=t(7689),d=t(2791),s=t(168),f=t(6444),p=f.ZP.form(r||(r=(0,s.Z)(["\n  min-width: 200px;\n  max-width: 280px;\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  margin-bottom: 20px;\n"]))),h=f.ZP.input(o||(o=(0,s.Z)(["\n  min-height: 30px;\n  min-width: 260px;\n  border-radius: 5px;\n  padding: 0 5px 0 15px;\n"]))),v=f.ZP.p(a||(a=(0,s.Z)(["\n  font-weight: 500;\n  font-size: large;\n  margin-left: 5px;\n"]))),m=t(184),g=function(n){var e=n.value,t=n.onSearch;return(0,m.jsxs)(p,{children:[(0,m.jsx)(v,{children:"Search movie"}),(0,m.jsx)(h,{type:"text",placeholder:"Enter movie name",defaultValue:e,onChange:function(n){return t(n.target.value)}})]})},x=t(2546),S=t(9501),b=t(7201),Z=t(3585),k=function(){var n,e=(0,d.useState)(null),t=(0,i.Z)(e,2),r=t[0],o=t[1],a=(0,d.useState)(null),s=(0,i.Z)(a,2),f=s[0],p=s[1],h=(0,d.useState)(null),v=(0,i.Z)(h,2),k=v[0],w=v[1],j=(0,d.useState)(null),E=(0,i.Z)(j,2),I=E[0],U=E[1],P=(0,u.lr)(),y=(0,i.Z)(P,2),T=y[0],O=y[1],J=(0,l.TH)(),X=function(n){O(""!==n?{query:n}:{})},q=null!==(n=T.get("query"))&&void 0!==n?n:"";if((0,d.useEffect)((function(){var n=new URLSearchParams({api_key:Z.$h,query:q}),e="".concat(Z.jE,"/search/movie?").concat(n);""===q&&null===q||(0,S.rQ)(e,o,U)}),[q]),r){var A=(0,b.L1)(r.results,"release_date");return(0,m.jsxs)(c.W2,{children:[(0,m.jsx)(g,{value:q,onSearch:X}),(0,m.jsx)("ul",{children:A.map((function(n,e){return(0,m.jsx)(x.H,{movie:n,index:e,hoveredId:f,setHoveredId:p,hoveredImageUrl:k,setHoveredImageUrl:w,location:J},n.id)}))})]})}return(0,m.jsx)(c.W2,{children:I?I.message:(0,m.jsx)(g,{onSearch:q,onSearchParams:X})})}},3585:function(n,e,t){t.d(e,{$h:function(){return r},I4:function(){return o},jE:function(){return a},si:function(){return c},uc:function(){return i}});var r="b30750fbe582936755a0930282f9befd",o=new URLSearchParams({api_key:r,language:"en"}),a="https://api.themoviedb.org/3",i="https://image.tmdb.org/t/p/w500",c="https://image.tmdb.org/t/p/w200"},9501:function(n,e,t){t.d(e,{Jn:function(){return u},Uv:function(){return d},VH:function(){return l},ot:function(){return c},rQ:function(){return i}});var r=t(3585),o=t(5938),a=t(1140);function i(n,e,t){fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong...."))})).then((function(n){e(n)})).catch((function(n){t(n)}))}function c(n,e){var t=r.si+n;fetch(t).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).then((function(n){return e(n)})).catch((function(n){return console.error(n)}))}function u(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"person";return n?e?r.si+n:r.uc+n:"person"===t?o:a}function l(n,e,t){var o="tv"===e?"tv":"movie",a="cast"===t?"credits":"reviews";return"".concat(r.jE,"/").concat(o,"/").concat(n,"/").concat(a,"?").concat(r.I4)}function d(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en",o=new URLSearchParams(r.I4);o.set("language",t);var a="tv"===n?"tv":"person"===n?"person":"movie",i="".concat(r.jE,"/trending/").concat(a,"/").concat(e,"?").concat(o);return i}},7201:function(n,e,t){t.d(e,{F8:function(){return a},G6:function(){return l},L1:function(){return i},R1:function(){return d},kr:function(){return o},oY:function(){return u},pD:function(){return f}});var r=t(8683);function o(n){if(n){var e=Math.floor(10*n);return"".concat(e,"%")}return"--%"}function a(n){return n?new Date(n).toUTCString().slice(5,16):"no data"}function i(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t?1:-1;return n.sort((function(n,t){return n[e]<t[e]?-1*r:n[e]>t[e]?1*r:0}))}function c(n){return n.map((function(n){return null!==n?(0,r.Z)({},n):n}))}var u=function(n,e,t){var o;switch(n){case"Trends":default:o=e;break;case"Rating":o=i(e.map((function(n){return n.vote_count<10?(0,r.Z)((0,r.Z)({},n),{},{vote_average:0}):n})),"vote_average",t);break;case"Date":o=i(c(e),"release_date",t);break;case"AirDate":o=i(c(e),"first_air_date",t);break;case"Title":o=i(c(e),"title",t);break;case"Name":o=i(c(e),"name",t)}return o};function l(n){var e=[];return n.forEach((function(n){var t=n.author,r=n.content;e.find((function(n){return n.author===t&&n.content===r}))||e.push({author:t,content:r})})),e}var d=function(n,e){var t;switch(e){case"tv":t="TV Shows";break;case"movie":default:t="Movies";break;case"person":t="People"}var r="week"===n?"week":"today";return"".concat(t," trending ").concat(r)},s=t(500);function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return s.getName(n,e)}s.registerLocale(t(1086))},9983:function(n,e,t){t.d(e,{w_:function(){return l}});var r=t(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},i.apply(this,arguments)},c=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t};function u(n){return n&&n.map((function(n,e){return r.createElement(n.tag,i({key:e},n.attr),u(n.child))}))}function l(n){return function(e){return r.createElement(d,i({attr:i({},n.attr)},e),u(n.child))}}function d(n){var e=function(e){var t,o=n.attr,a=n.size,u=n.title,l=c(n,["attr","size","title"]),d=a||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,l,{className:t,style:i(i({color:n.color||e.color},e.style),n.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),n.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(n){return e(n)})):e(o)}},1140:function(n,e,t){n.exports=t.p+"static/media/NoFilmImage.e2e10cb9ad1ccc405126.png"},5938:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAADdCAYAAAChfnC6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAvhSURBVHhe7Z0LT9TaGobLUUBARAUCioiICSb+/59iIuF+B7lfFATN3ufpaT3D0JnpzHS+tVb7PomhBbebaZ9+l9XV1b5//kskhCH/Sb4KYYakE+ZIOmGOpBPmSDphjqQT5kg6YY6kE+ZIOmGOpBPmSDphjqQT5kg6YY6kE+ZIOmGOpBPmSDphjqQT5kg6YY6kE+ZIOmGOpBPmSDphjqQT5kg6YY6kE+ZIOmGOpBPmSDphjqQT5kg6YY6kE+ZIOmGOVuKs4/fv39GPHz+i29vb6OfPn9Hd3V10f38f/fnzJ/4ZX2t58uRJ1NfXFw0MDET9/f3x16dPn0ZDQ0PR8PDw333xfyovHWJdXV1F5+fnsWi/fv1KfvI/oTqhVkyEGxwcjEZHR6OxsbFoZGSk8hJWUrqLi4vo9PQ0ury8/CtZp4LlJRUR4RBvfHw8mpiYiL9XNSojHalxf38/Ojo6ireh16I1I5VwcnIympqailNxVSi9dKTP7e3tOLqBS9EagYBINz09XYnoV1rpamXzUbQskI/6b2ZmptTylU46Uufq6mpQstWTRr7Z2dm4+SgbpZKOyEbdFqps9SAf0i0sLJSq4y2FdKTS5eXluBMti3C1IN/c3FzccJSB4KUrW3RrRJmiXrDSUbstLS3Fdw/KLlwK4iEc4oVc6wUpHen027dvUeBBumNCT7fBSXd8fBytra1VJro1AvEYWJ6fn0++Ew5BSXd4eBhtbm5WXriUtM5bXFxMvhMGwUxtknCP4VgwHkltGxJBSCfhGhOieN5LJ+FaE5p4XkvHgZRw+UjFW19fT77jL95Kx7DIysqKhGsDjhVTt8gOPuOtdIzDifZBPLIDUc9XvJSO2iSdaCnaB/HIEr7inXSkBq5SpdXu8bWx8Eo66ridnR0JVxBcvD7Wd15Jx4wRURxcvLu7u96VKt5Ixz1Vn4vfUElnUvuEN9JpPK43cEy5mH26oL2QbmtrK755LXoD4m1sbCR77nEuHeGfAU1Fud7CVH5KGB9wLt3e3p6inAFpU+EDTqUjynH1KcrZQLTzobZzKt3JyYnuPBjCxc04qGucSndwcKAoZwwPMjEI7xJn0hHma5flEna4vkvhTDqW6lKUs4djzhJpLssap9IJN5BhSLOucCIdqVXDJO4g2rm86J1Ip9TqnrOzs2TLHmfSCbdQ07nqYs2l48MqtfoBC3y7wFw6VjEX7qG8cXUuzKXj6lI95wfX19fJli3m0rls1cVDKHNcjNeZS8cbaIQ/uAgCptJxVVV1TTlf4S1B1phKR5RT5+oXLu5/m0rnenaDeAgN3c3NTbJnh6l0inL+UfpGQk2Ef5ReOjUR/uEi+5hKJwSophPmmEqn218ClF6FOabS9fX1JVvCF1xkH1PpBgYGki3hCy5ebqearuKUXrr+/v5kS/gAowlDQ0PJnh2m0o2MjCjaecbg4GCyZYepdIRyNRN+8ezZs2TLDlPpQM2EX5B9rDGXjg+pOxN+QKlT+kYCRkdHky3hmufPnydbtphL9/Lly2RLuIRs4+pcmEtHOHcR0sVjXGUdc+ng1atXyZZwBUMlw8PDyZ4tTqR7/fq1mgnHvHjxItmyx4l0Y2NjSrEO4YLnwneFE+lAKdYdpFYufFc4k04p1g0cc5epFZxJx5XmqpCtOlNTU8mWG5xJB5OTk4p2xvhwsTuVbnx8XA2FIVzg09PTyZ47nEqHcIp2drhuIFKcSgezs7OaY2cAF/aHDx+SPbc4lw7evXunaNdjqON8iHLghXR0U6rtegcX9MePH5M993ghHbx//17RrgdwTKmbfRqe8ka6iYkJb8J/mSCDUDf7hDfSwcLCQrIlioAoRwbxrXTxSjoOztzcnNJsAXAMyRxkEN/wSjrgIGnsrnu4gBcXF5M9v/BOOpifn3fyPGZZ4IL9/PlzsucfXkoHX758SbZEOyAcJYrPkym8lY708OnTp2RP5AHhuLfqehZJK7yVDiiE1Vjkg2NELUy36jteSwc0FoymS7zGcGy4QKmFQ8B76QDxFPGySYXztVPNou+fgNbZPz4+jtbW1jQrJSFNqaFEuJSgpIOLi4toZWUl2asuCPfmzRvvbnHlITjpgHeMLS8vxy9Tq2LUQzjqXB/vNuQhSOlSlpaW4shXFfGQjaEkBn5DfqgpaOng8PAw2tzcLL14ITYMjQheOiDdrq+vx29pLpt8aXRj/C3UdFpPKaRLIert7OzEJ6oM8vE56E5pFhCvLJRKOuBVktvb29HR0VGw4iEbK5YyFBJy7daI0kmXQspFPhoNCEFAZGN2DU9tUb+VldJKl5JGvtPTUy/TLr8TIBk368ssW0rppUtBvpOTkzjtEgXBpYBpVGMxG2aFlDGNNqIy0tWCdAhI6rUSMI1oqWisWlWFqJZFJaWrhQh4fn4eXV1dRZeXl/FdjlralTGVK4X/nlXMWVSaNX6rFNEaUXnpsiD6IeHd3V28jZj8qRWKw5a+/Qex+MO7z3g5C2LxJho60DINdRSFpBPmBDGfTpQLSSfMCTq9Um/d399Ht7e3cf1FPeX7QyntQHdNc8M7WakTy9KEBCMdhTw39DkRFPlsZ0HhPjMzE+wqn+lwDoPZ9Z00IB5DLgy3hDrk4r10SMYJODs7i8WDVsMYdJkIx2sDQhh4TUXLO26YdtHpZwxtzM9L6ZBrf3//79XeSrJGpCcH6TgpRD8fBOTzZY0NdvM5GXTmNloIEd4r6TgZvbpPWh8d0oFaCwmJXgjGVyTjcxb9+SD9N4l8Pk+H8ka6ra2t6ODgIN4u+mRkkUoIiMdALl/5f/OVpiTvSUMiGpnapgbBqDv5WYrF54L0sxH53r596518zqWjjlldXY1PjtVJaUStiCn8To1OGn+/VqpaXH8W4Pfjd6ex8qmrdyYdJyv0yZahgHw+TQp1Ip1P0a1KIJ8Pz8qaS1eVp7d8JY16PFXmqtYzlY4ntpRO/YGl2FyM75lJV7UHo0OAqOdipQAT6b5+/VrKZ1LLgIs6r+fSSTj/QTzL1Z96OrWJlCrh/IfzQ61NzW1Bz6TjA6iGCwdL8XoiHcMi6lLDIxWPQfteUrh0RDeNw4UL540ZPgSOXlGodNxhoI6TcGHD+SNwEEB6QaHSSbjywHlkmd1GExq6oTDpqAMaTSEX4cKQV9EUIh1zx75//64oV0KY1Vx0R1uIdFbjO8IeAgkdbZH1XdfS0eUorZYbxEunohVB19Kx3KrSavlJJ90WQVfSkVa5byfKT5FptmPpMF93HaoF53pjYyPZ65yOpSPUSrjqQTfb7d2KjqRjiIRnU0X1INBQx3dDR9Jhumq56sK576apaFs6ajminFJrdeHcU893OoTStnR7e3uKciIWjtkondC2dLzoV1FOdBPt2pIO4ToNqaJ84AJLnLVLW9KxwI2inEjBhd3d3WQvP7mlw2qGSoSoBS/IgO2QWzoaCCHqIdqlS7zlJbd0LL+q1CqyIAO2U+vnko5/NGvRZSFS2smEuaRrN2eLakEGbMeRXNIptYpWkF7zTntqKZ1Sq8gDQSnvJJCW0rEquBB5YOX4PLSUjvcdKLWKPJAR86TYptKRp6+vr5M9IVrTtXQ85aUZJSIvZMQ8KbapdEU+6yiqQZ6B4qbS0USonhPtQh/QjJbpVYh2IEi1GvFoKJ1Sq+gUbiY0o6F0vFhNiE6gpmtW1zWUTuNzohua1XUNpVM9J7qhWV2XKV2r8ChEM1qN12VKpygnuqXZJJFM6XhDsxDd0uiZmkzpGv1lIdqhLelubm7UuYquaUs6jdGJbiFoEbyyeCQdXatmlogiaBS8Hkl3d3cXGb13WJQcglfW0Nsj6ehcFelEERC8CGL1PJJO9ZwoCoJX1vBbZnoVoiiyglhmI6HhElEUWXcmFOlEz2g0bJIZ6YQoilzdq6QTRZI1/PZAOoTTcIkokqyxukeRTgPDokhypVdFOlEkWT49kE6dq+gF9V49kE6TN0UvqPfqUXoVotco0ome0zTSqYkQvaDeK6VXYc4D6dS9il7QtHsVwoIH0uluhOgF9V4p0ome07SRUPcqLFCkE8ZE0b+Zyr/Z2X1R/gAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=946.2e5e4447.chunk.js.map