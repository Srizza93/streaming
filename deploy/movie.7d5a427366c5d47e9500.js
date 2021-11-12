(()=>{"use strict";var e,n={819:(e,n,t)=>{t(1618);var i=t(8388),o=t(6252),r={class:"sub-root"},a=t(2753),s=t(3577),l={class:"movie-details"},c={class:"movie-details_info"},u={class:"movie-details_info_first-line"},d={class:"movie-details_info_title"},p=(0,o._)("span",{class:"star"},null,-1),v=(0,o.Uk)("  "),m={class:"movie-details_info_first-line_score"},f={class:"movie-details_info_details"},_={class:"movie-details_info_details_detail"},h={class:"movie-details_info_details_detail"},g={class:"movie-details_info_details_detail"},y={class:"movie-details_info_details_detail"},b={class:"movie-details_info_details_detail"},w={class:"movie-details_info_details_detail"},x={class:"movie-inner_back_play-icon"},k=["src"],j=t(2137);t(5666),t(3238),t(7460),t(4078),t(684),t(2077),t(3526),t(2482),t(3938),t(1013),t(5610),t(3352),t(5613);const O={name:"MovieDetails",components:{Youtube:t(5647).Z},data:function(){return{movie:"",genre:"",youtubeKey:"",playIcon:"play-icon.jpeg"}},created:function(){this.getDataFromApi()},methods:{getMovie:function(){var e=new URLSearchParams(window.location.search).get("movie").split(",");return this.genre=e[1],e[0]},getDataFromApi:function(){var e=this;return(0,j.Z)(regeneratorRuntime.mark((function n(){var t,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e.getMovie(),"?api_key=").concat("b9b95774804923e6978e27bc40df2c97","&append_to_response=videos"),n.prev=2,n.next=5,fetch(t);case 5:return i=n.sent,n.next=8,i.json();case 8:o=n.sent,e.youtubeKey=o.videos.results[0].key,e.movie=o,n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),console.log("Can't get data from API: "+n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])})))()},getYoutubeUrl:function(e){return"https://www.youtube.com/embed/".concat(e,"?controls=0&autoplay=1&cc_load_policy=1&rel=0")},getImgUrl:function(e){return t(4194)("./"+e)},playMovie:function(e){window.open("./watch-movie.html?movie="+encodeURI(e))}},computed:{productions:function(){var e=Object(this.movie.production_companies);return(e=Array.from(e).map((function(e){return e.name}))).join(" - ")},year:function(){return String(this.movie.release_date).substring(0,4)},countries:function(){var e=Object(this.movie.production_countries);return(e=Array.from(e).map((function(e){return e.name}))).join(" - ")}}};var A=t(3379),z=t.n(A),Z=t(7795),M=t.n(Z),I=t(569),P=t.n(I),S=t(3565),U=t.n(S),D=t(9216),C=t.n(D),T=t(4589),E=t.n(T),F=t(3701),R={};R.styleTagTransform=E(),R.setAttributes=U(),R.insert=P().bind(null,"head"),R.domAPI=M(),R.insertStyleElement=C(),z()(F.Z,R),F.Z&&F.Z.locals&&F.Z.locals,O.render=function(e,n,t,i,r,a){var j=(0,o.up)("youtube");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(j,{ykey:a.getYoutubeUrl(r.youtubeKey)},null,8,["ykey"]),(0,o._)("div",c,[(0,o._)("div",u,[(0,o._)("h1",d,(0,s.zw)(r.movie.title),1),(0,o._)("div",null,[p,v,(0,o._)("span",m,(0,s.zw)(r.movie.vote_average),1)])]),(0,o._)("div",f,[(0,o._)("p",_,(0,s.zw)(r.movie.overview),1),(0,o._)("span",h,(0,s.zw)(r.genre),1),(0,o._)("span",g,(0,s.zw)(a.productions),1),(0,o._)("span",y,(0,s.zw)(a.countries),1),(0,o._)("span",b,(0,s.zw)(a.year),1),(0,o._)("h3",w,(0,s.zw)(r.movie.tagline),1)])]),(0,o._)("div",x,[(0,o._)("img",{class:"play-icon",src:a.getImgUrl(r.playIcon),onClick:n[0]||(n[0]=function(e){return a.playMovie(r.movie.id)}),alt:"play-icon"},null,8,k)])])};const W=O;var K=t(5419);const Y={name:"MoviePage",components:{Bar:a.Z,MovieDetails:W,AppFooter:K.Z},created:function(){var e=document.querySelector("html");e.setAttribute("dir","ltr"),e.setAttribute("lang","en")},render:function(e,n,t,i,a,s){var l=(0,o.up)("bar"),c=(0,o.up)("movie-details"),u=(0,o.up)("app-footer");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(l),(0,o.Wm)(c),(0,o.Wm)(u)])}};var $=t(9963);document.body.appendChild((0,i.Z)()),(0,$.ri)(Y).mount(".app-root")},3701:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(3645),o=t.n(i)()((function(e){return e[1]}));o.push([e.id,'\n.movie-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  line-height: 20px;\n  font-size: 16px;\n}\n.movie-details_info {\n  display: flex;\n  flex-direction: column;\n  max-width: 700px;\n  margin: 50px;\n}\n.movie-details_info_first-line {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n.movie-details_info_first-line_score {\n  font-size: 20px;\n}\n.movie-details_info_title {\n  line-height: 35px;\n}\n.star {\n  color: #ff8c00;\n}\n.star::before {\n  content: "\\2605";\n}\n.movie-details_info_details {\n  display: flex;\n  flex-direction: column;\n}\n.movie-details_info_details_detail {\n  margin: 15px 0;\n}\n.movie-inner_back_play-icon {\n  margin: auto 50px auto auto;\n  cursor: pointer;\n}\n.movie-inner_back_play-icon:hover {\n  opacity: 0.7;\n}\n.play-icon {\n  width: 150px;\n  height: auto;\n}\n',""]);const r=o}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={id:e,exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=(n,t,o,r)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,o,r]=e[u],s=!0,l=0;l<t.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](t[l])))?t.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,o,r]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={929:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var o,r,[a,s,l]=t,c=0;for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var u=l(i);for(n&&n(t);c<a.length;c++)r=a[c],i.o(e,r)&&e[r]&&e[r][0](),e[a[c]]=0;return i.O(u)},t=self.webpackChunkvue_3=self.webpackChunkvue_3||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=i.O(void 0,[347,596,804,93,545,527,342],(()=>i(819)));o=i.O(o)})();