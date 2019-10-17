(this["webpackJsonpclient-hackheroes2019"]=this["webpackJsonpclient-hackheroes2019"]||[]).push([[0],{37:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),i=a.n(c),l=a(1),s=a(3),o=a(2),u=a(4),d=a(12),m=a(11),p=a(34),b=a.n(p),h=a(15),f=a.n(h),E=a(5),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"loader-wrapper"},r.a.createElement("div",{id:"loader"}),r.a.createElement("div",{className:"loader-section section-left"}),r.a.createElement("div",{className:"loader-section section-right"}))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"banner",className:"image"},r.a.createElement("img",{src:"/res/icons/logo.svg",alt:"temp"}))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"searchbar"},r.a.createElement("input",{type:"text",placeholder:"Szukaj..."}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fas fa-search"})))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement(d.b,{to:"/homepage"},r.a.createElement("div",{className:"option"},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement(d.b,{to:"/tasks"},r.a.createElement("div",{className:"option"},r.a.createElement("i",{className:"fas fa-tasks"}))),r.a.createElement(d.b,{to:"/prizes"},r.a.createElement("div",{className:"option"},r.a.createElement("i",{className:"fas fa-trophy"}))),r.a.createElement(d.b,{to:"/profile"},r.a.createElement("div",{className:"option"},r.a.createElement("i",{className:"fas fa-user-cog"}))))}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement(j,null),r.a.createElement(O,null),r.a.createElement(y,null))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"topbar"},r.a.createElement("div",{id:"info"},r.a.createElement("div",{id:"app-name"}),r.a.createElement("div",{id:"app-version"})))}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="//cdn.jsdelivr.net/github-cards/latest/widget.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",{id:"mobile"},r.a.createElement("div",{id:"title"},"EcoQuest"),r.a.createElement("div",{id:"body"},"Aplikacja jest przystosowana do dzia\u0142ania jedynie na smartphony i urz\u0105dzenia mobilne. ",r.a.createElement("br",null),"Odwied\u017a nasze repozytorium, aby dowiedzie\u0107 si\u0119 wi\u0119cej. ",r.a.createElement("br",null),r.a.createElement("div",{className:"github-card","data-github":"ClayCore/HackHeroes2019","data-width":"600","data-height":"132","data-theme":"default"})),r.a.createElement("div",{id:"footer"},"EcoQuest\u2122 \u2014 2019 \u2014 Wszelkie Prawa Zastrze\u017cone"))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"wrapper"},r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(w,null),r.a.createElement(k,null),this.props.children)}}]),t}(n.Component),D=a(19),z=a.n(D),_=(a(65),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],user_name:"",user_avatar:"",quest_info:[],user_points:0,prize_info:[]},a}return Object(u.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.data;t&&t.map((function(t){e.setState({user_name:t.displayname,user_avatar:t.avatar_link})}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"user-info",className:"tile"},r.a.createElement("div",{id:"user-info",className:"tile-content"},r.a.createElement("div",{id:"info"},r.a.createElement("header",null,"Witaj ",r.a.createElement("span",{id:"user-name"},this.state.user_name)),r.a.createElement("div",{id:"avatar"},r.a.createElement("img",{alt:"AVATAR",src:this.state.user_avatar,width:"300",height:"300"}))),r.a.createElement("div",{className:"panels"},r.a.createElement("div",{id:"date"},"Data: ",new z.a.tz("Europe/Warsaw").format("DD/MM/YYYY")," ",r.a.createElement("br",null),"Godzina: ",new z.a.tz("Europe/Warsaw").format("HH:mm:ss"))))),r.a.createElement("div",{id:"current-quest",className:"tile"},r.a.createElement("div",{className:"tile-content",id:"current-quest"},r.a.createElement("header",null,"Zadanie na dzi\u015b:"),r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"quest-info"},"Temporary value"),r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{className:"overlay"},r.a.createElement("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("polyline",{points:"20 6 9 17 4 12"}))))))),r.a.createElement("div",{id:"user-profile-info",className:"tile"},r.a.createElement("div",{className:"tile-content",id:"user-profile-info"},"Ilo\u015b\u0107 punkt\xf3w: ",r.a.createElement("span",{id:"user-points"}))),r.a.createElement("div",{id:"user-prize-info",className:"tile"},r.a.createElement("div",{className:"tile-content",id:"user-prize-info"},"Na co mo\u017cesz wyda\u0107 punkty:",r.a.createElement("div",{id:"available-prizes"}))))}}]),t}(n.Component)),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"content"},"HAHAHA")}}]),t}(n.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"content"},"HAHAHA")}}]),t}(n.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"content"},"HAHAHA")}}]),t}(n.Component),L="https://ecoquest-client.herokuapp.com",x=L+"/api/getData",I=L+"/api/putData",M=L+"/api/deleteData",S=L+"/api/updatedataData",q=1e3;function W(){var e=window.screen.width*window.devicePixelRatio,t=b.a.name.includes("Mobile");return e<800||t}function F(){var e=window.location.pathname,t=e.substring(0,e.lastIndexOf("/"));return"web/"===t||""!==t&&void 0}var T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).getDataFromDb=function(){fetch(x).then((function(e){return e.json()})).then((function(e){return a.setState({data:e.data,isLoading:!1})})).catch((function(e){a.setState({error:e,isLoading:!1})}))},a.putDataToDb=function(e){for(var t=a.state.data.map((function(e){return e.id})),n=0;t.includes(n);)++n;f.a.post(I,{id:n,message:e})},a.deleteFromDb=function(e){var t=null;a.state.data.forEach((function(a){a.id===e&&(t=a._id)})),f.a.delete(M,{data:{objIdToDelete:t}})},a.updateDb=function(e,t){var n=null;a.state.data.forEach((function(t){t.id===e&&(n=t._id)})),f.a.post(S,{id:n,update:{message:t}})},a.componentDidMount=function(){if(a.getDataFromDb(),!a.state.interval_set){var e=setInterval(a.getDataFromDb,q);a.setState({interval_set:e})}},a.componentWillUnmount=function(){a.state.interval_set&&(clearInterval(a.state.interval_set),a.setState({interval_set:null}))},a.render=function(){var e=a.state,t=e.data,n=e.isLoading,c=e.error,i=[];return c?r.a.createElement("h1",null,r.a.createElement("center",null,c.message)):n?r.a.createElement("div",{id:"wrapper"},r.a.createElement(v,null)):t?t.length<=0?r.a.createElement("h1",null,t):(i=t,r.a.createElement(d.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(N,null,r.a.createElement(_,{data:i}))),r.a.createElement(m.a,{path:"/homepage"},r.a.createElement(N,null,r.a.createElement(_,{data:i}))),r.a.createElement(m.a,{path:"/tasks"},r.a.createElement(N,null,r.a.createElement(C,{user_data:a.state.data}))),r.a.createElement(m.a,{path:"/prizes"},r.a.createElement(N,null,r.a.createElement(A,{user_data:a.state.data}))),r.a.createElement(m.a,{path:"/profile"},r.a.createElement(N,null,r.a.createElement(H,{user_data:a.state.data})))))):r.a.createElement("h1",null,"Data is undefined or null")},a.state={data:[],interval_set:!1,isLoading:!0,error:null},a}return Object(u.a)(t,e),t}(n.Component);!function(){var e="css/master.css",t="css/loader.css",a="css/mobile/master.css",n="css/mobile/loader.css";function c(e){return document.querySelector(e)}function l(e){var t=window.setInterval((function(){void 0!==c("body")&&(window.clearInterval(t),e.call(this))}),1e3)}function s(e){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e,document.head.appendChild(t)}document.addEventListener("DOMContentLoaded",(function(){var o="../".repeat(2),u="../".repeat(1);W()?F()?(s(o+a),s(o+n)):W()&&(s(u+a),s(u+n),l((function(){c("body").classList.add("loaded"),c("body").classList.add("changed")}))):F()?(s(o+e),s(o+t)):(s(u+e),s(u+t),l((function(){c("body").classList.add("loaded"),c("body").classList.add("changed")}))),i.a.render(r.a.createElement(T,null),c("#root"))}))}()}},[[37,1,2]]]);
//# sourceMappingURL=main.d9c97024.chunk.js.map