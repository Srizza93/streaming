(()=>{var n,e={58:(n,e,t)=>{"use strict";t(618);var r=t(388),i=(t(926),t(252)),o={class:"sub-root"},a=t(201),s=t(577),c={class:"movies"},u={class:"movie"},l={class:"movie-inner"},p={class:"movie-inner_front"},v={class:"movie-inner_back"},m=(0,i.Wm)("span",{class:"movie-inner_back_definitions"},"Title: ",-1),d={class:"movie-inner_back_overview"},g=(0,i.Wm)("span",{class:"movie-inner_back_definitions"},"Overview: ",-1),f={key:0},h={class:"movie-inner_back_genre"},b=(0,i.Wm)("span",{class:"movie-inner_back_definitions"},"Genre: ",-1),w={class:"movie-inner_back_duration"},y=(0,i.Wm)("span",{class:"movie-inner_back_definitions"},"Duration: ",-1),_={class:"movie-inner_back_play-icon"};const k={name:"Movie",data:function(){return{playIcon:"play-icon.jpeg"}},props:{title:{type:String,required:!0},img:{type:String,required:!0},overview:{type:String,required:!0},genre:{type:String,required:!0},duration:{type:Number,required:!0}},methods:{getImgUrl:function(n){return t(194)("./"+n)},textIsShort:function(){return this.$props.overview.length<300},breakTextAt250Char:function(){return this.$props.overview.substring(0,250)+'... <a class="read-more">read more</a>'}}};var x=t(379),j=t.n(x),W=t(795),O=t.n(W),M=t(569),T=t.n(M),Z=t(565),S=t.n(Z),A=t(216),P=t.n(A),I=t(589),U=t.n(I),E=t(466),C={};C.styleTagTransform=U(),C.setAttributes=S(),C.insert=T().bind(null,"head"),C.domAPI=O(),C.insertStyleElement=P(),j()(E.Z,C),E.Z&&E.Z.locals&&E.Z.locals,k.render=function(n,e,t,r,o,a){return(0,i.wg)(),(0,i.j4)("div",u,[(0,i.Wm)("div",l,[(0,i.Wm)("div",p,[(0,i.Wm)("img",{class:"movie-inner_movie_img",src:t.img,alt:t.title},null,8,["src","alt"])]),(0,i.Wm)("div",v,[(0,i.Wm)("h3",null,[m,(0,i.Uk)(" "+(0,s.zw)(t.title),1)]),(0,i.Wm)("div",d,[g,a.textIsShort()?((0,i.wg)(),(0,i.j4)("span",f,(0,s.zw)(t.overview),1)):((0,i.wg)(),(0,i.j4)("span",{key:1,innerHTML:a.breakTextAt250Char()},null,8,["innerHTML"]))]),(0,i.Wm)("div",h,[b,(0,i.Uk)(" "+(0,s.zw)(t.genre),1)]),(0,i.Wm)("div",w,[y,(0,i.Uk)(" "+(0,s.zw)(t.duration)+"min ",1)]),(0,i.Wm)("div",_,[(0,i.Wm)("img",{class:"play-icon",src:a.getImgUrl(o.playIcon),onClick:e[1]||(e[1]=function(e){return n.$emit("openMoviePage",{event:e,id:n.id})})},null,8,["src"])])])])])};const q=k;function $(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function z(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){$(o,r,i,a,s,"next",n)}function s(n){$(o,r,i,a,s,"throw",n)}a(void 0)}))}}t(666);const D={name:"Movies",components:{Movie:q},data:function(){return{movies:[],images:[]}},methods:{getDataFromApi:function(){var n=this;return z(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:["tt12801262","tt3228774","tt3480822","tt3554046","tt10648714","tt1099212","tt0109830","tt0068646","tt0293429","tt0241527","tt0172495","tt0468569","tt4160708","tt3758814","tt10954652","tt6402468","tt9243804","tt1893273","tt10895576","tt11083552","tt10327252","tt11580854","tt0111161","tt0050083","tt0133093","tt0080684","tt0167261"].forEach(function(){var e=z(regeneratorRuntime.mark((function e(t){var r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("b9b95774804923e6978e27bc40df2c97","&language=en-US"),e.prev=1,e.next=4,fetch(t);case 4:return r=e.sent,e.next=7,r.json();case 7:i=e.sent,n.movies.push(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})))()},navigateMovie:function(n){window.open("./movie-page.html?movie="+encodeURI(n))}},created:function(){this.getDataFromApi()}};var R=t(962),F={};F.styleTagTransform=U(),F.setAttributes=S(),F.insert=T().bind(null,"head"),F.domAPI=O(),F.insertStyleElement=P(),j()(R.Z,F),R.Z&&R.Z.locals&&R.Z.locals,D.render=function(n,e,t,r,o,a){var u=(0,i.up)("movie");return(0,i.wg)(),(0,i.j4)("div",c,[(0,i.Wm)("span",null,(0,s.zw)(o.images),1),((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(o.movies,(function(n){return(0,i.wg)(),(0,i.j4)(u,{key:n.id,img:"https://image.tmdb.org/t/p/w500/"+n.poster_path,title:n.title,overview:n.overview,genre:n.genres[0].name,duration:n.runtime,onOpenMoviePage:function(e){return a.navigateMovie(n.imdb_id)}},null,8,["img","title","overview","genre","duration","onOpenMoviePage"])})),128))])};const H=D;var N=t(7);const Y={name:"App",components:{Bar:a.Z,Youtube:N.Z,Movies:H},data:function(){return{youtubeKey:"https://www.youtube.com/embed/9qH-mWfTMm0?controls=0&autoplay=1&cc_load_policy=1&rel=0"}},render:function(n,e,t,r,a,s){var c=(0,i.up)("bar"),u=(0,i.up)("youtube"),l=(0,i.up)("movies");return(0,i.wg)(),(0,i.j4)("div",o,[(0,i.Wm)(c),(0,i.Wm)(u,{ykey:a.youtubeKey},null,8,["ykey"]),(0,i.Wm)(l)])}};var K=t(963);document.body.appendChild((0,r.Z)()),(0,K.ri)(Y).mount(".app-root")},466:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,"\n.movie {\n  background-color: transparent;\n  width: fit-content;\n  height: 300px;\n  margin: 5px;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.movie-inner {\n  position: relative;\n  width: 250px;\n  height: 300px;\n  text-align: left;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.movie:hover .movie-inner {\n  transform: rotateY(180deg);\n}\n.movie-inner_front,\n.movie-inner_back {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.movie-inner_back {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  background-color: #141414;\n  color: white;\n  transform: rotateY(180deg);\n}\n.movie-inner_movie_img {\n  width: 250px;\n  height: 300px;\n}\n.movie-inner_back_overview {\n  padding: 5px 0;\n}\n.movie-inner_back_genre {\n  padding: 5px 0;\n}\n.movie-inner_back_duration {\n  padding: 0;\n}\n.movie-inner_back_definitions {\n  color: #777;\n}\n.read-more {\n  color: #0071c2;\n  text-decoration: underline;\n}\n.read-more:hover {\n  opacity: 0.7;\n}\n.movie-inner_back_play-icon {\n  margin-left: auto;\n}\n.movie-inner_back_play-icon:hover {\n  opacity: 0.7;\n}\n.play-icon {\n  width: 50px;\n  height: auto;\n}\n",""]);const o=i},962:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,"\n.movies {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  position: absolute;\n  margin-top: -30px;\n}\n",""]);const o=i},960:(n,e,t)=>{"use strict";n.exports=t.p+"50c1be863e7952bdcc33.jpeg"},194:(n,e,t)=>{var r={"./account.png":176,"./bell.png":932,"./logo.png":243,"./magnifying.png":555,"./play-icon.jpeg":960};function i(n){var e=o(n);return t(e)}function o(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=o,n.exports=i,i.id=194}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,n=[],r.O=(e,t,i,o)=>{if(!t){var a=1/0;for(l=0;l<n.length;l++){for(var[t,i,o]=n[l],s=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((n=>r.O[n](t[c])))?t.splice(c--,1):(s=!1,o<a&&(a=o));if(s){n.splice(l--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[t,i,o]},r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{var n={179:0};r.O.j=e=>0===n[e];var e=(e,t)=>{var i,o,[a,s,c]=t,u=0;for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(c)var l=c(r);for(e&&e(t);u<a.length;u++)o=a[u],r.o(n,o)&&n[o]&&n[o][0](),n[a[u]]=0;return r.O(l)},t=self.webpackChunkstreaming=self.webpackChunkstreaming||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var i=r.O(void 0,[249,878],(()=>r(58)));i=r.O(i)})();