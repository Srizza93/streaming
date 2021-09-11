(()=>{var e,t={506:(e,t,n)=>{"use strict";var r=n(3379),o=n.n(r),i=n(7795),a=n.n(i),s=n(569),l=n.n(s),c=n(3565),u=n.n(c),d=n(9216),p=n.n(d),b=n(4589),f=n.n(b),m=n(982),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),o()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var h=n(6252),v={class:"sub-root"},w={class:"movie-details_trailer"};const y={name:"Youtube",props:{ykey:{type:String,required:!0}}};var x=n(6763),k={};k.styleTagTransform=f(),k.setAttributes=u(),k.insert=l().bind(null,"head"),k.domAPI=a(),k.insertStyleElement=p(),o()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals,y.render=function(e,t,n,r,o,i){return(0,h.wg)(),(0,h.j4)("div",w,[(0,h.Wm)("iframe",{class:"youtube_iframe",src:n.ykey,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,["src"])])};const T={name:"WatchMovie",components:{Youtube:y},data:function(){return{youtubeKey:{id:1,link:"https://www.youtube.com/embed/9qH-mWfTMm0?controls=0&autoplay=1&cc_load_policy=1&rel=0"},arrow:{id:2,link:"left-arrow.png",alt:"left arrow"}}},created:function(){this.addHtmlLangandDir(),this.mouseIsMoving()},methods:{getImgUrl:function(e){return n(7473)("./"+e)},addHtmlLangandDir:function(){var e=document.querySelector("html");e.setAttribute("dir","ltr"),e.setAttribute("lang","en")},mouseIsMoving:function(){document.addEventListener("mousemove",this.showArrow)},showArrow:function(){clearTimeout(e),document.querySelector(".back-to-details").classList.add("show-arrow");var e=setTimeout(this.hideArrow,3e3)},hideArrow:function(){document.querySelector(".back-to-details").classList.remove("show-arrow")},backToMovieDetails:function(){var e=new URLSearchParams(window.location.search).get("movie");window.open("./movie-page.html?movie="+encodeURI(e))}}};var O=n(4103),Z={};Z.styleTagTransform=f(),Z.setAttributes=u(),Z.insert=l().bind(null,"head"),Z.domAPI=a(),Z.insertStyleElement=p(),o()(O.Z,Z),O.Z&&O.Z.locals&&O.Z.locals,T.render=function(e,t,n,r,o,i){var a=(0,h.up)("youtube");return(0,h.wg)(),(0,h.j4)("div",v,[(0,h.Wm)("a",{class:"back-to-details small-screens-back-to-details",onClick:t[1]||(t[1]=function(e){return i.backToMovieDetails()})},[(0,h.Wm)("img",{class:"back-to-details_arrow",src:i.getImgUrl(o.arrow.link),alt:o.arrow.alt},null,8,["src","alt"])]),(0,h.Wm)(a,{ykey:o.youtubeKey.link},null,8,["ykey"])])};const A=T;var _,S=n(9963);document.body.appendChild(((_=document.createElement("div")).classList.add("app-root"),_)),(0,S.ri)(A).mount(".app-root")},4103:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"\n.app-root,\n.sub-root,\n.movie-details_trailer {\n  height: 100%;\n}\n.back-to-details {\n  opacity: 0;\n  position: fixed;\n  top: 30px;\n  left: 0;\n  padding: 5px;\n  margin: 25px 0;\n  border: 2px solid #1c55ff;\n  border-radius: 0 10px 10px 0;\n  font-size: 40px;\n  font-weight: bold;\n  color: #1c55ff;\n  text-decoration: none;\n  cursor: pointer;\n  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\n  background-color: white;\n  transition-duration: 5s;\n}\n.show-arrow {\n  opacity: 1;\n}\n.back-to-details:hover {\n  opacity: 0.7;\n}\n.back-to-details_arrow {\n  width: 30px;\n  height: auto;\n}\n@media only screen and (max-width: 750px) {\n.small-screens-back-to-details {\n    opacity: 1;\n}\n}\n",""]);const i=o},6763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"\n.movie-details_trailer {\n  object-fit: fill;\n  width: 100%;\n  height: 350px;\n}\n.youtube_iframe {\n  width: 100%;\n  height: 100%;\n}\n",""]);const i=o},982:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'html,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 14px;\n  background-color: #141414;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.app-root {\n  display: flex;\n  flex-direction: column;\n}\n\n.triangle {\n  content: " ";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -15px;\n  border-width: 15px;\n  border-style: solid;\n  border-color: #1C55FF transparent transparent transparent;\n}\n',""]);const i=o},7176:(e,t,n)=>{"use strict";e.exports=n.p+"a5f299e208492ae9a56b.png"},1932:(e,t,n)=>{"use strict";e.exports=n.p+"06976666ce4df2372b58.png"},7989:(e,t,n)=>{"use strict";e.exports=n.p+"038ffbb792cbae4c405d.png"},7243:(e,t,n)=>{"use strict";e.exports=n.p+"4bc13dbb8032bf4dce7a.png"},6555:(e,t,n)=>{"use strict";e.exports=n.p+"7024e1a53b28f4454afe.png"},8853:(e,t,n)=>{"use strict";e.exports=n.p+"169d49666a6b09e74a19.png"},7473:(e,t,n)=>{var r={"./account.png":7176,"./bell.png":1932,"./left-arrow.png":7989,"./logo.png":7243,"./magnifying.png":6555,"./white-magnifying.png":8853};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=7473}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={672:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,l]=n,c=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r);for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0;return r.O(u)},n=self.webpackChunkstreaming=self.webpackChunkstreaming||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[237,963,575],(()=>r(506)));o=r.O(o)})();