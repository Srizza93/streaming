(self.webpackChunkstreaming=self.webpackChunkstreaming||[]).push([[718],{580:(n,t,i)=>{"use strict";i.d(t,{Z:()=>o});const o={name:"Youtube",props:{ykey:{type:String,required:!0}}}},581:(n,t,i)=>{"use strict";i.d(t,{s:()=>a});var o=i(252),e={class:"movie-details_trailer"};function a(n,t,i,a,r,s){return(0,o.wg)(),(0,o.j4)("div",e,[(0,o.Wm)("iframe",{class:"youtube_iframe",src:i.ykey,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,["src"])])}},198:(n,t,i)=>{"use strict";i.d(t,{Z:()=>o});const o=function(){var n=document.createElement("div");return n.classList.add("app-root"),n}},713:(n,t,i)=>{"use strict";i.d(t,{Z:()=>a});var o=i(645),e=i.n(o)()((function(n){return n[1]}));e.push([n.id,"\n.footer[data-v-0c87fe0d] {\n  display: flex;\n  flex-direction: column;\n  margin: 50px;\n  background-color: #141414;\n  color: grey;\n  white-space: nowrap;\n}\n.footer_links[data-v-0c87fe0d] {\n  display: flex;\n  flex-direction: row;\n}\n.footer_links-container[data-v-0c87fe0d] {\n  display: flex;\n  width: 100%;\n  min-height: 100px;\n  margin-top: 25px;\n  text-align: center;\n  overflow-y: hidden;\n}\n.footer_ul[data-v-0c87fe0d] {\n  padding: 0 40px 0 0;\n  text-align: left;\n}\n.footer_ul_li[data-v-0c87fe0d] {\n  list-style: none;\n  line-height: 23px;\n}\n.footer_ul_li_link[data-v-0c87fe0d] {\n  cursor: pointer;\n  color: grey;\n  text-decoration: none;\n}\n.footer_ul_li_link[data-v-0c87fe0d]:hover {\n  color: #1c55ff;\n}\n.footer_copyright[data-v-0c87fe0d] {\n  display: flex;\n  flex-direction: column;\n  margin: 50px 40px 0 0;\n}\n@media only screen and (max-width: 600px) {\n.footer[data-v-0c87fe0d] {\n    flex-wrap: wrap;\n    height: 100%;\n    white-space: normal;\n}\n.footer_links[data-v-0c87fe0d] {\n    flex-direction: column;\n}\n}\n",""]);const a=e},392:(n,t,i)=>{"use strict";i.d(t,{Z:()=>a});var o=i(645),e=i.n(o)()((function(n){return n[1]}));e.push([n.id,'\n.navigation-bar {\n  background-color: white;\n  position: relative;\n}\n.navigation-bar_list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\n  font-size: 16px;\n  white-space: nowrap;\n}\n.navigation-bar_list_item {\n  list-style-type: none;\n}\n.navigation-bar_list_item_button {\n  color: white;\n  margin: 0 10px;\n}\n.navigation-bar_list_buttons {\n  display: flex;\n  flex-direction: row;\n  font-weight: bold;\n}\n.navigation-bar_list_item_link {\n  display: block;\n  position: relative;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n.navigation-bar_list_item_link_menu {\n  color: black;\n}\n.navigation-bar_list_item_link:hover {\n  opacity: 0.7;\n}\n.icons_dropdown-content {\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  max-width: 250px;\n  margin-top: 25px;\n  right: 25px;\n  border: 1px solid white;\n  background-color: black;\n  opacity: 0.8;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.icons_dropdown-content_menu {\n  display: flex;\n  position: initial;\n  margin: 15px 14px;\n  max-width: initial;\n  background-color: transparent;\n  color: black;\n  box-shadow: none;\n}\n.icons_dropdown-content_form {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n\n  padding: 15px;\n}\n.navigation-bar_list_item_link_input {\n  width: 100%;\n  height: 25px;\n  border: 0;\n  border-radius: 5px;\n  background-color: black;\n  color: white;\n}\n.navigation-bar_list_item_link_submit {\n  width: 20px;\n  height: 30px;\n  padding: 2px;\n  border: 0;\n  cursor: pointer;\n}\n.icons_dropdown-content_notifications {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  word-break: break-word;\n  white-space: break-spaces;\n}\n.navigation-bar_list_item_notification {\n  color: white;\n  padding: 5px 5px 0 0;\n  text-decoration: none;\n}\n.navigation-bar_list_item_notification:hover {\n  color: white;\n}\n.icons_dropdown-content_notifications_length {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 5px;\n  left: 30px;\n  width: 18px;\n  height: 18px;\n  margin-left: auto;\n  border-radius: 50%;\n  background-color: red;\n  font-size: 12px;\n  color: white;\n  text-align: center;\n  cursor: pointer;\n}\n.icons_dropdown-content_notifications_length:hover {\n  opacity: 0.7;\n}\n.icons_dropdown-content_notifications_notification-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 15px;\n  margin: 0;\n}\n.icons_dropdown-content_notifications_notification-container:hover {\n  background-color: #1c55ff;\n}\n.icons_dropdown-content_notifications_close-button {\n  margin: 5px;\n  margin-left: auto;\n  cursor: pointer;\n}\n.icons_dropdown-content_notifications_close-button:hover {\n  opacity: 0.7;\n}\n.icons_dropdown-content_notifications_cross::before {\n  content: "x";\n  color: white;\n  font-weight: 300;\n  font-family: Arial, sans-serif;\n}\n.hide-notifications {\n  display: none;\n}\n.icons_dropdown-content_account {\n  padding: 15px;\n}\n.icons_dropdown-content_account_li {\n  list-style-type: none;\n  padding: 5px 0;\n}\n.icons_dropdown-content_account_li_link {\n  padding: 0;\n}\n.icons_dropdown-content_account_li_link:hover {\n  color: #1c55ff;\n}\n.navigation-bar_list_item_link_img {\n  width: 25px;\n  height: auto;\n  margin: 14px 16px;\n}\n.navigation-bar_list_item_link_text {\n  margin: 0 15px;\n}\n.images-margin-left {\n  margin-left: auto;\n}\n.navigation-bar_list_item_more {\n  font-weight: bold;\n  color: black;\n  margin: 20px 0;\n}\n.navigation-bar_list_item_more_triangle {\n  content: " ";\n  position: absolute;\n  left: 19px;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #1c55ff transparent transparent transparent;\n}\n.hide-on-big-screen {\n  display: none;\n}\n@media only screen and (max-width: 750px) {\n.hide-on-big-screen {\n    display: block;\n}\n.icons_dropdown-content_menu {\n    display: none;\n    position: absolute;\n    margin: 25px 14px 15px 14px;\n    background-color: black;\n    left: 5px;\n    max-width: 150px;\n}\n.navigation-bar_list_item_link_menu {\n    color: white;\n}\n.navigation-bar_list_buttons {\n    flex-direction: column;\n    padding: 5px;\n    line-height: 40px;\n}\n}\n.show-dropdown {\n  display: flex;\n}\n',""]);const a=e},386:(n,t,i)=>{"use strict";i.d(t,{Z:()=>a});var o=i(645),e=i.n(o)()((function(n){return n[1]}));e.push([n.id,"\n.movie-details_trailer {\n  object-fit: fill;\n  width: 100%;\n  height: 350px;\n}\n.youtube_iframe {\n  width: 100%;\n  height: 100%;\n}\n",""]);const a=e},982:(n,t,i)=>{"use strict";i.d(t,{Z:()=>a});var o=i(645),e=i.n(o)()((function(n){return n[1]}));e.push([n.id,'html,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 14px;\n  background-color: #141414;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.app-root {\n  display: flex;\n  flex-direction: column;\n}\n\n.triangle {\n  content: " ";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -15px;\n  border-width: 15px;\n  border-style: solid;\n  border-color: #1C55FF transparent transparent transparent;\n}\n',""]);const a=e},29:(n,t,i)=>{"use strict";var o=i(379),e=i.n(o),a=i(795),r=i.n(a),s=i(569),l=i.n(s),c=i(565),d=i.n(c),p=i(216),g=i.n(p),_=i(589),m=i.n(_),u=i(386),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=g(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals},618:(n,t,i)=>{"use strict";var o=i(379),e=i.n(o),a=i(795),r=i.n(a),s=i(569),l=i.n(s),c=i(565),d=i.n(c),p=i(216),g=i.n(p),_=i(589),m=i.n(_),u=i(982),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=g(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals},514:(n,t,i)=>{"use strict";i.d(t,{Z:()=>j});var o=i(252),e=i(577),a=(0,o.HX)("data-v-0c87fe0d");(0,o.dD)("data-v-0c87fe0d");var r={class:"footer"},s={class:"footer_links"},l={class:"footer_ul"},c=(0,o.Wm)("div",{class:"footer_copyright"},[(0,o.Wm)("span",null,"Copyright © 1993–2021 streaming. All rights reserved."),(0,o.Wm)("span",null,"Powered by themoviedb - www.themoviedb.org")],-1);(0,o.Cn)();var d=a((function(n,t,i,a,d,p){return(0,o.wg)(),(0,o.j4)("div",r,[(0,o.Wm)("div",s,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(d.links,(function(n){return(0,o.wg)(),(0,o.j4)("div",{class:"footer_links-container",key:n.id+n.name},[(0,o.Wm)("ul",l,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(n.list,(function(n){return(0,o.wg)(),(0,o.j4)("li",{key:"locations-"+n.id,class:"footer_ul_li"},[(0,o.Wm)("a",{class:"footer_ul_li_link",href:n.link},(0,e.zw)(n.text),9,["href"])])})),128))])])})),128))]),c])}));const p={name:"Footer",data:function(){return{links:{locations:{id:1,name:"locations",list:[{id:1,link:"./index.html",text:"Audio and subtitles"},{id:2,link:"./index.html",text:"Media Center"},{id:3,link:"./index.html",text:"Privacy"}]},services:{id:2,name:"services",list:[{id:1,link:"./index.html",text:"Auto-description"},{id:2,link:"./index.html",text:"Legal notes"},{id:3,link:"./index.html",text:"Customer service"}]},company:{id:3,name:"company",list:[{id:1,link:"./index.html",text:"About us"},{id:2,link:"./index.html",text:"Careers"},{id:3,link:"./index.html",text:"World"}]},general:{id:3,name:"general",list:[{id:1,link:"./index.html",text:"Reviews"},{id:2,link:"./index.html",text:"Partners"},{id:3,link:"./index.html",text:"Discounts"}]},news:{id:4,name:"news",list:[{id:1,link:"./index.html",text:"COVID"},{id:2,link:"./index.html",text:"Growth"},{id:3,link:"./index.html",text:"Plans"}]}}}}};var g=i(379),_=i.n(g),m=i(795),u=i.n(m),f=i(569),x=i.n(f),b=i(565),w=i.n(b),h=i(216),v=i.n(h),k=i(589),y=i.n(k),W=i(713),Z={};Z.styleTagTransform=y(),Z.setAttributes=w(),Z.insert=x().bind(null,"head"),Z.domAPI=u(),Z.insertStyleElement=v(),_()(W.Z,Z),W.Z&&W.Z.locals&&W.Z.locals,p.render=d,p.__scopeId="data-v-0c87fe0d";const j=p},469:(n,t,i)=>{"use strict";i.d(t,{Z:()=>K});var o=i(252),e=i(577),a={class:"navigation-bar"},r={class:"navigation-bar_list"},s={class:"navigation-bar_list_item"},l={class:"navigation-bar_list_item_link",href:"./index.html"},c={class:"navigation-bar_list_item"},d=(0,o.Wm)("span",null,"More",-1),p=(0,o.Wm)("div",{class:"navigation-bar_list_item_more_triangle hide-on-big-screen"},null,-1),g={class:"icons_dropdown-content icons_dropdown-content_menu"},_={class:"navigation-bar_list_buttons"},m={class:"\n                  navigation-bar_list_item_link\n                  navigation-bar_list_item_link_menu\n                ",href:"./index.html"},u={class:"navigation-bar_list_item images-margin-left"},f={class:"icons_dropdown-content"},x={class:"icons_dropdown-content_form",action:"example.php"},b=(0,o.Wm)("input",{class:"navigation-bar_list_item_link_input",type:"text",id:"sdata",name:"sdata",placeholder:"Titles, Actors, Genres..."},null,-1),w={class:"navigation-bar_list_item"},h={class:"icons_dropdown-content_notifications_length"},v={class:"icons_dropdown-content_notifications_number"},k={class:"icons_dropdown-content icons_dropdown-content-notifications"},y={class:"icons_dropdown-content_notifications"},W={class:"navigation-bar_list_item_notification",href:"./index.html"},Z={class:"icons_dropdown-content_notifications_close-button"},j={class:"navigation-bar_list_item"},D={class:"icons_dropdown-content"},A={class:"icons_dropdown-content_account"},C={class:"\n                  icons_dropdown-content_account_li_link\n                  navigation-bar_list_item_notification\n                ",href:"./index.html"};const L={name:"NavigationBar",data:function(){return{logo:{id:1,text:"Logo",link:"logo.png"},buttons:[{id:1,text:"Home"},{id:2,text:"Watch again"},{id:3,text:"Series"},{id:4,text:"Movies"},{id:5,text:"News"},{id:6,text:"My list"}],icons:[{id:1,text:"Magnifying glass",link:"magnifying.png"},{id:2,text:"Notifications",link:"bell.png"},{id:3,text:"Account",link:"account.png"},{id:4,text:"White magnifying glass",link:"white-magnifying.png"}],notifications:[{id:1,text:"Welcome to streaming!!!"},{id:2,text:"Suicide Squad is suggested for you"},{id:3,text:"La casa del papel will be available on 23rd December"}],account:[{id:1,text:"Sign in"},{id:2,text:"Log in"},{id:3,text:"Account"},{id:4,text:"Customer Service"}]}},mounted:function(){this.dropdownBlur()},methods:{getImgUrl:function(n){return i(473)("./"+n)},toggleDropdown:function(n){var t=n.currentTarget.parentNode.getElementsByClassName("icons_dropdown-content")[0],i=document.querySelector(".show-dropdown");t.classList.toggle("show-dropdown"),i&&i.classList.remove("show-dropdown")},dropdownBlur:function(){document.addEventListener("click",this.eventDelegation)},eventDelegation:function(n){var t=n.target.closest("div"),i=Array.from(t.classList).join("");i.includes("icons_dropdown-content")||i.includes("navigation-bar_list_item_link")||this.closeDropdowns()},closeDropdowns:function(){document.querySelectorAll(".icons_dropdown-content").forEach((function(n){n.classList.remove("show-dropdown")}))},deleteNotification:function(n){var t=n.target.parentNode.parentNode.textContent;this.notifications=this.notifications.filter((function(n){return n.text!==t}));var i=document.querySelector(".icons_dropdown-content_notifications_length"),o=document.querySelector(".icons_dropdown-content-notifications");this.notifications.length<=0&&(o.classList.add("hide-notifications"),i.classList.add("hide-notifications"))}}};var N=i(379),S=i.n(N),T=i(795),E=i.n(T),I=i(569),z=i.n(I),U=i(565),O=i.n(U),H=i(216),M=i.n(H),P=i(589),Y=i.n(P),q=i(392),F={};F.styleTagTransform=Y(),F.setAttributes=O(),F.insert=z().bind(null,"head"),F.domAPI=E(),F.insertStyleElement=M(),S()(q.Z,F),q.Z&&q.Z.locals&&q.Z.locals,L.render=function(n,t,i,L,N,S){return(0,o.wg)(),(0,o.j4)("div",a,[(0,o.Wm)("ul",r,[(0,o.Wm)("li",s,[(0,o.Wm)("a",l,[(0,o.Wm)("img",{class:"navigation-bar_list_item_link_img",src:S.getImgUrl(N.logo.link),alt:N.logo.text},null,8,["src","alt"])])]),(0,o.Wm)("li",c,[(0,o.Wm)("div",{class:"\n            navigation-bar_list_item_more navigation-bar_list_item_link\n            hide-on-big-screen\n          ",onClick:t[1]||(t[1]=function(){return S.toggleDropdown&&S.toggleDropdown.apply(S,arguments)}),tabindex:"0"},[d,p]),(0,o.Wm)("div",g,[(0,o.Wm)("ul",_,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(N.buttons,(function(n){return(0,o.wg)(),(0,o.j4)("li",{class:"navigation-bar_list_item navigation-bar_list_item_button",key:n.id+n.text},[(0,o.Wm)("a",m,(0,e.zw)(n.text),1)])})),128))])])]),(0,o.Wm)("li",u,[(0,o.Wm)("div",{class:"navigation-bar_list_item_link",onClick:t[2]||(t[2]=function(){return S.toggleDropdown&&S.toggleDropdown.apply(S,arguments)}),tabindex:"0"},[(0,o.Wm)("img",{class:"navigation-bar_list_item_link_img",src:S.getImgUrl(N.icons[0].link),alt:"Magnifying glass"},null,8,["src"])]),(0,o.Wm)("div",f,[(0,o.Wm)("form",x,[b,(0,o.Wm)("input",{class:"navigation-bar_list_item_link_submit",type:"image",src:S.getImgUrl(N.icons[3].link)},null,8,["src"])])])]),(0,o.Wm)("li",w,[(0,o.Wm)("div",{class:"navigation-bar_list_item_link",onClick:t[3]||(t[3]=function(){return S.toggleDropdown&&S.toggleDropdown.apply(S,arguments)}),tabindex:"0"},[(0,o.Wm)("img",{class:"navigation-bar_list_item_link_img",src:S.getImgUrl(N.icons[1].link),alt:"notifications"},null,8,["src"]),(0,o.Wm)("span",h,[(0,o.Wm)("span",v,(0,e.zw)(N.notifications.length),1)])]),(0,o.Wm)("div",k,[(0,o.Wm)("div",y,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(N.notifications,(function(n){return(0,o.wg)(),(0,o.j4)("div",{class:"\n                icons_dropdown-content_notifications_notification-container\n              ",key:n.id+n.text},[(0,o.Wm)("a",W,(0,e.zw)(n.text),1),(0,o.Wm)("div",Z,[(0,o.Wm)("div",{class:"icons_dropdown-content_notifications_cross",onClick:t[4]||(t[4]=function(){return S.deleteNotification&&S.deleteNotification.apply(S,arguments)})})])])})),128))])])]),(0,o.Wm)("li",j,[(0,o.Wm)("div",{class:"navigation-bar_list_item_link",onClick:t[5]||(t[5]=function(){return S.toggleDropdown&&S.toggleDropdown.apply(S,arguments)}),tabindex:"0"},[(0,o.Wm)("img",{class:"navigation-bar_list_item_link_img",src:S.getImgUrl(N.icons[2].link),alt:"account"},null,8,["src"])]),(0,o.Wm)("div",D,[(0,o.Wm)("ul",A,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(N.account,(function(n){return(0,o.wg)(),(0,o.j4)("li",{class:"icons_dropdown-content_account_li",key:n.id+n.text},[(0,o.Wm)("a",C,(0,e.zw)(n.text),1)])})),128))])])])])])};const K=L},388:(n,t,i)=>{"use strict";i.d(t,{Z:()=>a});var o=i(986),e=i(174);i(850),e.Z.render=o.s;const a=e.Z},174:(n,t,i)=>{"use strict";i.d(t,{Z:()=>o.Z});var o=i(580)},986:(n,t,i)=>{"use strict";i.d(t,{s:()=>o.s});var o=i(581)},850:(n,t,i)=>{"use strict";i(29)},176:(n,t,i)=>{"use strict";n.exports=i.p+"a5f299e208492ae9a56b.png"},932:(n,t,i)=>{"use strict";n.exports=i.p+"06976666ce4df2372b58.png"},989:(n,t,i)=>{"use strict";n.exports=i.p+"038ffbb792cbae4c405d.png"},243:(n,t,i)=>{"use strict";n.exports=i.p+"4bc13dbb8032bf4dce7a.png"},555:(n,t,i)=>{"use strict";n.exports=i.p+"7024e1a53b28f4454afe.png"},960:(n,t,i)=>{"use strict";n.exports=i.p+"50c1be863e7952bdcc33.jpeg"},853:(n,t,i)=>{"use strict";n.exports=i.p+"169d49666a6b09e74a19.png"},473:(n,t,i)=>{var o={"./account.png":176,"./bell.png":932,"./left-arrow.png":989,"./logo.png":243,"./magnifying.png":555,"./white-magnifying.png":853};function e(n){var t=a(n);return i(t)}function a(n){if(!i.o(o,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return o[n]}e.keys=function(){return Object.keys(o)},e.resolve=a,n.exports=e,e.id=473},194:(n,t,i)=>{var o={"./account.png":176,"./bell.png":932,"./left-arrow.png":989,"./logo.png":243,"./magnifying.png":555,"./play-icon.jpeg":960,"./white-magnifying.png":853};function e(n){var t=a(n);return i(t)}function a(n){if(!i.o(o,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return o[n]}e.keys=function(){return Object.keys(o)},e.resolve=a,n.exports=e,e.id=194}}]);