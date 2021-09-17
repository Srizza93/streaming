(()=>{"use strict";var e,n={5025:(e,n,t)=>{t(1618);var r=t(8388),i=t(6252),o={class:"sub-root"},s=t(2753),a=(t(3352),t(3577)),c={class:"movies"},l={key:0},u={class:"movies_list_title"},p={key:0,class:"no-results-container"},d=[(0,i._)("span",{class:"no-results"},"No results found...",-1)],v=t(2137),f=(t(5666),t(1013),t(8010),t(5610),t(7460),t(5623),t(1514),t(6e3),t(5374),t(3938),t(3238),t(5849),t(2327),{class:"movie"}),m={class:"movie-inner"},h={class:"movie-inner_front"},g=["src","alt"],w={class:"movie-inner_back"},y=(0,i._)("span",{class:"movie-inner_back_definitions"},"Title: ",-1),_={class:"movie-inner_back_overview"},b=(0,i._)("span",{class:"movie-inner_back_definitions"},"Overview: ",-1),x={key:0},k={key:1},S=(0,i._)("span",{class:"star"},null,-1),A=(0,i.Uk)("  "),M={class:"movie-details_info_first-line_score"},R={class:"movie-inner_back__genre"},L={class:"movie-inner_back_play-icon"},T=["src"];t(5163);const Z={name:"Movie",data:function(){return{playIcon:"play-icon.jpeg"}},props:{title:{type:String,required:!0},img:{type:String,required:!0},overview:{type:String,required:!0},average:{type:Number,required:!0},genre:{type:String,required:!0}},methods:{getImgUrl:function(e){return t(4194)("./"+e)},textIsShort:function(){return this.$props.overview.length<200},breakTextAt200Char:function(){return this.$props.overview.substring(0,200)}}};var O=t(3379),C=t.n(O),j=t(7795),q=t.n(j),I=t(569),z=t.n(I),E=t(3565),P=t.n(E),U=t(9216),D=t.n(U),N=t(4589),W=t.n(N),K=t(8747),G={};G.styleTagTransform=W(),G.setAttributes=P(),G.insert=z().bind(null,"head"),G.domAPI=q(),G.insertStyleElement=D(),C()(K.Z,G),K.Z&&K.Z.locals&&K.Z.locals,Z.render=function(e,n,t,r,o,s){return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",m,[(0,i._)("div",h,[(0,i._)("img",{class:"movie-inner_movie_img",src:t.img,alt:t.title},null,8,g)]),(0,i._)("div",w,[(0,i._)("h3",null,[y,(0,i.Uk)(" "+(0,a.zw)(t.title),1)]),(0,i._)("div",_,[b,s.textIsShort()?((0,i.wg)(),(0,i.iD)("span",x,(0,a.zw)(t.overview),1)):((0,i.wg)(),(0,i.iD)("span",k,[(0,i.Uk)((0,a.zw)(s.breakTextAt200Char()),1),(0,i._)("a",{class:"read-more",onClick:n[0]||(n[0]=function(n){return e.$emit("openMoviePage",{event:n,id:e.id})})},"...read more")]))]),(0,i._)("div",null,[S,A,(0,i._)("span",M,(0,a.zw)(t.average),1)]),(0,i._)("h4",R,(0,a.zw)(t.genre),1),(0,i._)("div",L,[(0,i._)("img",{class:"play-icon",src:s.getImgUrl(o.playIcon),alt:"play-icon",onClick:n[1]||(n[1]=function(n){return e.$emit("openMoviePage",{event:n,id:e.id})})},null,8,T)])])])])};const $=Z;var H=t(894);const F={name:"Movies",components:{Movie:$},data:function(){return{apiKey:"b9b95774804923e6978e27bc40df2c97",movies:[{id:1,name:"Now Playing",list:[]},{id:2,name:"Popular",list:[]},{id:3,name:"Top Rated",list:[]},{id:4,name:"Upcoming",list:[]}],genres:[]}},setup:function(){return{store:(0,H.oR)()}},computed:{filteredMovies:function(){var e=this.$store.state.keyWord;return e?this.movies.map((function(n){return{id:n.id,list:Array.from(n.list).filter((function(n){if(n.genre)return n.title.toLowerCase().includes(e.toLowerCase())||n.genre.toLowerCase().includes(e.toLowerCase())})),name:n.name}})):this.movies},noResultsFound:function(){return Array.from(this.filteredMovies).every((function(e){return 0===e.list.length}))}},created:function(){this.fetchGenre(),this.fetchMovies()},updated:function(){this.sizeIsScrollable()},methods:{xtmlHttpRequestGenre:function(){var e="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(this.apiKey,"&language=en-US"),n=this,t=new XMLHttpRequest;t.open("GET",e,!0),t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(t.response),r=Object.assign({},e);n.genres=r.genres}},t.send(null)},xtmlHttpRequestMovies:function(){var e=this;["now_playing","popular","top_rated","upcoming"].forEach(function(){var n=(0,v.Z)(regeneratorRuntime.mark((function n(t,r){var i,o,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=new XMLHttpRequest,o=e,s="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(e.apiKey,"&language=en-US"),i.open("GET",s,!0),i.onreadystatechange=function(){4==this.readyState&&200==this.status&&(o.movies[r].list=JSON.parse(i.response).results,o.assignGenreToMovies(r))},i.send(null);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())},fetchGenre:function(){var e=this;return(0,v.Z)(regeneratorRuntime.mark((function n(){var t,r,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(e.apiKey,"&language=en-US"),n.next=4,fetch(t);case 4:return r=n.sent,n.next=7,r.json();case 7:i=n.sent,e.genres=i.genres,n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("Can't get data from API: "+n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()},fetchMovies:function(){var e=this;return(0,v.Z)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=["now_playing","popular","top_rated","upcoming"];try{t.forEach(function(){var n=(0,v.Z)(regeneratorRuntime.mark((function n(t,r){var i,o,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(e.apiKey,"&language=en-US"),n.next=3,fetch(i);case 3:return o=n.sent,n.next=6,o.json();case 6:s=n.sent,e.movies[r].list=s.results,e.assignGenreToMovies(r);case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}catch(e){console.log("Can't get data from API: "+e)}case 2:case"end":return n.stop()}}),n)})))()},assignGenreToMovies:function(e){var n=this;this.movies[e].list.forEach((function(e){var t=n.genres.find((function(n){return n.id===e.genre_ids[0]}));e.genre=t.name}))},navigateMovie:function(e,n){window.open("./movie-page.html?movie="+encodeURI(e+","+n))},handleScrollingArrows:function(e){var n=e.target;this.hideLeftArrow(n),this.hideRightArrow(n)},sizeIsScrollable:function(){var e=this;document.querySelectorAll(".movies_list_container").forEach((function(n){e.hideRightArrow(n)}))},hideLeftArrow:function(e){var n=Array.from(e.children).find((function(e){return e.className.includes("prev")}));0===e.scrollLeft?n.classList.add("hide-arrow"):n.classList.remove("hide-arrow")},hideRightArrow:function(e){var n=Array.from(e.children).find((function(e){return e.className.includes("next")}));e.scrollLeft===e.scrollWidth-e.offsetWidth?n.classList.add("hide-arrow"):n.classList.remove("hide-arrow")},scrollLeft:function(e){e.target.parentNode.scrollLeft-=600},scrollRight:function(e){e.target.parentNode.scrollLeft+=600}}};var Y=t(9931),B={};B.styleTagTransform=W(),B.setAttributes=P(),B.insert=z().bind(null,"head"),B.domAPI=q(),B.insertStyleElement=D(),C()(Y.Z,B),Y.Z&&Y.Z.locals&&Y.Z.locals,F.render=function(e,n,t,r,o,s){var v=(0,i.up)("movie");return(0,i.wg)(),(0,i.iD)("div",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.filteredMovies,(function(e){return(0,i.wg)(),(0,i.iD)("div",{class:"movies_list",key:e.id},[e.list.length?((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("h2",u,(0,a.zw)(e.name),1),(0,i._)("div",{class:"movies_list_container",onScroll:n[2]||(n[2]=function(){return s.handleScrollingArrows&&s.handleScrollingArrows.apply(s,arguments)})},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.list,(function(e){return(0,i.wg)(),(0,i.j4)(v,{key:e.id,img:"https://image.tmdb.org/t/p/w500/"+e.poster_path,title:e.title,overview:e.overview,average:e.vote_average,genre:e.genre,onOpenMoviePage:function(n){return s.navigateMovie(e.id,e.genre)}},null,8,["img","title","overview","average","genre","onOpenMoviePage"])})),128)),(0,i._)("a",{class:"slideshow_arrow prev hide-arrow",onClick:n[0]||(n[0]=function(){return s.scrollLeft&&s.scrollLeft.apply(s,arguments)})},"❮"),(0,i._)("a",{class:"slideshow_arrow next",onClick:n[1]||(n[1]=function(){return s.scrollRight&&s.scrollRight.apply(s,arguments)})},"❯")],32)])):(0,i.kq)("v-if",!0)])})),128)),s.noResultsFound?((0,i.wg)(),(0,i.iD)("div",p,d)):(0,i.kq)("v-if",!0)])};const J=F;var X=t(5647),Q=t(5419);const V={name:"App",components:{Bar:s.Z,Youtube:X.Z,Movies:J,AppFooter:Q.Z},data:function(){return{searchedWord:"",youtubeKey:"https://www.youtube.com/embed/9qH-mWfTMm0?controls=0&autoplay=1&cc_load_policy=1&rel=0"}},created:function(){var e=document.querySelector("html");e.setAttribute("dir","ltr"),e.setAttribute("lang","en")},render:function(e,n,t,r,s,a){var c=(0,i.up)("bar"),l=(0,i.up)("youtube"),u=(0,i.up)("movies"),p=(0,i.up)("app-footer");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(c),(0,i.Wm)(l,{ykey:s.youtubeKey},null,8,["ykey"]),(0,i.Wm)(u),(0,i.Wm)(p)])}},ee=(0,H.MT)({state:{keyWord:""}});var ne=t(9963);document.body.appendChild((0,r.Z)()),(0,ne.ri)(V).use(ee).mount(".app-root")},8747:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(3645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,'\n.movie {\n  display: flex;\n  flex-direction: row;\n  background-color: transparent;\n  margin: 10px 10px 10px 0;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.movie-inner {\n  position: relative;\n  width: 250px;\n  height: 375px;\n  text-align: left;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.movie:hover .movie-inner {\n  transform: rotateY(180deg);\n}\n.movie-inner_front,\n.movie-inner_back {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.movie-inner_back {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  border: 1px solid white;\n  background-color: #141414;\n  color: white;\n  transform: rotateY(180deg);\n}\n.movie-inner_movie_img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.movie-inner_back_overview {\n  padding: 5px 0;\n}\n.movie-inner_back_definitions {\n  color: #777;\n}\n.read-more {\n  color: #0071c2;\n  text-decoration: underline;\n  white-space: nowrap;\n}\n.read-more:hover {\n  opacity: 0.7;\n}\n.movie-inner_back__genre {\n  margin: 5px 0;\n}\n.movie-inner_back_play-icon {\n  margin-left: auto;\n  margin-top: auto;\n}\n.movie-inner_back_play-icon:hover {\n  opacity: 0.7;\n}\n.play-icon {\n  width: 50px;\n  height: auto;\n}\n.star {\n  color: #ff8c00;\n}\n.star::before {\n  content: "\\2605";\n}\n',""]);const o=i},9931:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(3645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"\n.movies {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 50px;\n}\n.movies_list {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.movies_list_container {\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.movies_list_container::-webkit-scrollbar {\n  display: none;\n}\n.movies_list_title {\n  color: white;\n  padding: 25px 25px 0 25px;\n}\n.slideshow_arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: Calc(50% + 51.43px);\n  width: 50px;\n  height: 75px;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 65px;\n  border-radius: 0 3px 3px 0;\n  opacity: 1;\n  transition-duration: 3s;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.slideshow_arrow:hover {\n  font-size: 80px;\n}\n.prev {\n  left: 0;\n}\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n.hide-arrow {\n  opacity: 0;\n}\n.no-results-container {\n  display: flex;\n  justify-content: center;\n  margin: 50px 0;\n}\n.no-results {\n  font-size: 26px;\n  color: white;\n}\n@media only screen and (max-width: 750px) {\n.slideshow_arrow {\n    font-size: 40px;\n}\n.slideshow_arrow:hover {\n    font-size: 65px;\n}\n}\n",""]);const o=i}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={id:e,exports:{}};return n[e](o,o.exports,r),o.exports}r.m=n,e=[],r.O=(n,t,i,o)=>{if(!t){var s=1/0;for(u=0;u<e.length;u++){for(var[t,i,o]=e[u],a=!0,c=0;c<t.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](t[c])))?t.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(u--,1);var l=i();void 0!==l&&(n=l)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,i,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var i,o,[s,a,c]=t,l=0;for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(c)var u=c(r);for(n&&n(t);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[s[l]]=0;return r.O(u)},t=self.webpackChunkvue_3=self.webpackChunkvue_3||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var i=r.O(void 0,[347,596,804,545,798,342],(()=>r(5025)));i=r.O(i)})();