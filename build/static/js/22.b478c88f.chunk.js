(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[22],{141:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={Home:{metaInfo:{title:"Online Exam Platform - Exam from anywhere anytime.",description:"Online Exam Platform - participate into exam from anywhere anytime with extensive solve immediately. Question and answer is authentic with help of talented mentor."}},Exams:{metaInfo:{title:"Lists Of all available exams",description:"Lists of all avaiable exams. Participate into the exams."}},Dashboard:{metaInfo:{title:"Dashboard- Get all your desired content in one place"}},Profile:{metaInfo:{title:"Profile- Know yourself and edit them"}},Settings:{metaInfo:{title:"Settings: Change the life as you want "}},Category:{metaInfo:{title:"Category- Create, edit and delete category"}},Question:{metaInfo:{title:"Question- Create, upload, edit and delete question"}},ExamBuilder:{metaInfo:{title:"ExamBuilder- Build exam easily"}},ExamEdit:{metaInfo:{title:"ExamEdit- edit and delete exam easily"}},Login:{metaInfo:{title:"Login- Login to access the app"}},Signup:{metaInfo:{title:"Signup- To use the app fully, You have to signup "}}}},149:function(e,a,t){"use strict";var n=t(0),m=t.n(n),s=t(190),l="yas",r=t(141).a.Home.metaInfo,c=r.title,i=r.description;a.a=function(e){var a=e.meta,t=void 0===a?[]:a,n=e.defer,r=void 0!==n&&n,o=e.lang,d=void 0===o?"bn":o,u=e.title,E=void 0===u?c:u,h=e.description,b=void 0===h?i:h;return m.a.createElement(s.b,{defer:r,title:E,htmlAttributes:{lang:d},titleTemplate:"%s | ".concat("ExamA+"),meta:[{name:"description",content:b},{property:"og:description",content:b},{property:"og:title",content:E},{property:"og:type",content:"website"},{property:"og:image",content:"".concat("https://bcs.rajdoctors.com","/logo.png")},{name:"author",content:l}].concat(t)})}},363:function(e,a,t){},365:function(e,a,t){},605:function(e,a,t){"use strict";t.r(a);var n=t(0),m=t.n(n),s=t(140),l=t(366),r=t(174),c=t(347),i=t(19),o=(t(363),t(43)),d=t(44),u=t(46),E=t(45),h=t(47),b=t(158),p=t(187),N=t(169),f=t(342),g=t(23),v=t(36),x=t(21),k=t(138),y=t(27),I=t.n(y),z=t(601),j=t(595),O=t(175),L=t(364),w=t(53),S=t(146),M=t.n(S);function P(e){var a=e.firstName,t=e.lastName,n=e.email,s=e.mobile,l=e.userFrom,r=e.address;return m.a.createElement("div",{className:"card mb-3"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-3"},m.a.createElement("h6",{className:"mb-0"},"Full Name")),m.a.createElement("div",{className:"col-sm-9 text-secondary"},a+" "+t)),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-3"},m.a.createElement("h6",{className:"mb-0"},"Email")),m.a.createElement("div",{className:"col-sm-9 text-secondary"},n)),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-3"},m.a.createElement("h6",{className:"mb-0"},"Mobile")),m.a.createElement("div",{className:"col-sm-9 text-secondary"},s)),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-3"},m.a.createElement("h6",{className:"mb-0"},"User From")),m.a.createElement("div",{className:"col-sm-9 text-secondary"},M()(l).format("MMM Do YY"))),m.a.createElement("hr",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-3"},m.a.createElement("h6",{className:"mb-0"},"Address")),m.a.createElement("div",{className:"col-sm-9 text-secondary"},r))))}var C=["boy","boy1","girl","girl1","hacker","man","woman","woman1","woman2","soccer-player","bear"];function B(e){var a=e.isProfile,t=e.size,s=void 0===t?"100":t,l=Object(g.c)(),r=Object(g.d)((function(e){return e.user})),c=Object(n.useState)(!1),i=Object(k.a)(c,2),o=i[0],d=i[1],u=Object(n.useState)(r.avatar),E=Object(k.a)(u,2),h=E[0],b=E[1],p=function(){return d(!1)};return m.a.createElement("div",null,m.a.createElement(z.a,{show:o,onHide:p},m.a.createElement(z.a.Header,{closeButton:!0},m.a.createElement(z.a.Title,null,"Pick Your desired avatar")),m.a.createElement(z.a.Body,null,m.a.createElement("div",null,C.map((function(e,a){return m.a.createElement(j.a,{key:a,thumbnail:!0,src:"/assets/image/avatar/"+e+".png",roundedCircle:!0,className:"mb-2 mr-2 "+(h===e&&"bg-primary p-2"),style:{width:"64px",height:"64px",cursor:"pointer"},onClick:function(){b(e)}})})))),m.a.createElement(z.a.Footer,null,m.a.createElement(O.a,{variant:"secondary",onClick:p},"Close"),m.a.createElement(O.a,{variant:"primary",onClick:function(){setTimeout(p,500),I.a.post("https://bcs.backend.rajdoctors.com/users/avatar/"+h).then((function(e){l(Object(w.b)())})).catch((function(e){console.log(e)}))}},"Save Changes"))),m.a.createElement("div",{className:"d-flex flex-column align-items-center text-center mb-3"+(a?"":" bottom-border")},m.a.createElement("div",null,m.a.createElement("img",{src:"/assets/image/avatar/"+(r.avatar?r.avatar:"boy")+".png",alt:"Avatar",className:"rounded-circle",width:s}),a&&m.a.createElement(L.a,{size:"1.7rem",style:{cursor:"pointer"},onClick:function(){return d(!0)}})),m.a.createElement("div",{className:a?"mt-3":"mt-3 text-white"},m.a.createElement("h4",null,r.userName),m.a.createElement("p",{className:"mb-1"},Object(x.c)(r.role)),m.a.createElement("p",{className:"font-size-sm"},r.address))),a&&m.a.createElement(P,{firstName:r.firstName,lastName:r.lastName,email:r.email,userFrom:r.userFrom,mobile:r.mobile,address:r.address}))}var D=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(E.a)(a).call(this,e))).classes={sideNav:["flex-column","mt-4"].join(" "),sideNavLink:["text-white","p-3","mb-2"].join(" "),fa:["text-light","fa-lg","mr-3"].join(" ")},t.faIcons=[],t.menuName=[],t.navLinks=[],t.menuIntlId=[],t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(x.a)(x.b.student,this.props.token)&&(this.faIcons=[m.a.createElement(N.c,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.a,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.o,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.n,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Exams","Profile","Settings"],this.menuIntlId=["btn.db","btn.exams","profile","settings"],this.navLinks=["/dashboard","/exams","/profile","/settings"]),Object(x.a)(x.b.mentor,this.props.token)&&(this.faIcons=[m.a.createElement(N.c,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.g,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.f,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.o,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.n,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Question","Exam Builder","Profile","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/question","/exambuilder","/profile","/settings"]),Object(x.a)(x.b.admin,this.props.token)&&(this.faIcons=[m.a.createElement(N.c,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.b,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.g,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.f,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.b,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.o,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.n,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Category","Question","Exam Builder","Exam Edit","Profile","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/category","/question","/exambuilder","/examedit","/profile","/settings"]),m.a.createElement("div",{className:"px-4"},m.a.createElement(p.a.Brand,{className:"text-white d-block mx-auto text-center py-3 mb-4 bottom-border"},m.a.createElement(v.NavLink,{to:"/",className:"text-white"},"ExamA+")),m.a.createElement("h3",{className:"text-white text-center mb-2"},m.a.createElement(f.a,{id:"goodDay",defaultMessage:"Good Day"})),m.a.createElement(B,null),m.a.createElement(b.a,{className:this.classes.sideNav},this.faIcons.map((function(a,t){return m.a.createElement(b.a.Item,{key:t},m.a.createElement(v.NavLink,{to:e.navLinks[t],className:"nav-link "+e.classes.sideNavLink+" sidebar-link",activeClassName:"current"},a,e.menuIntlId.length>1?m.a.createElement(f.a,{id:e.menuIntlId[t],defaultMessage:e.menuName[t]}):e.menuName[t]))}))))}}]),a}(n.Component),T=Object(g.b)((function(e){return{token:e.auth.token}}))(D),F=t(150),A=t(56),Y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(E.a)(a).call(this,e))).classes={sideNav:["flex-column","mt-2"].join(" "),sideNavLink:["text-white","p-1","mb-2"].join(" "),fa:["text-light","fa-lg","mr-3"].join(" ")},t.faIcons=[],t.menuName=[],t.navLinks=[],t.menuIntlId=[],t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.onGetUserLoader(),this.props.onUserExamStatLoader()}},{key:"render",value:function(){var e=this;return this.faIcons=[m.a.createElement(N.c,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.f,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.o,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.o,{size:"1.6em",className:"mr-2"})],this.menuName=["Home","Exams","Signup","Login"],this.menuIntlId=["btn.home","btn.exams","btn.signup","btn.login"],this.navLinks=["/","/exams","/signup","/login"],Object(x.a)(x.b.student,this.props.token)&&(this.faIcons=[m.a.createElement(N.c,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.a,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.o,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.n,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Exams","Profile","Settings"],this.menuIntlId=["btn.db","btn.exams","profile","settings"],this.navLinks=["/dashboard","/exams","/profile","/settings"]),Object(x.a)(x.b.mentor,this.props.token)&&(this.faIcons=[m.a.createElement(N.c,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.g,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.f,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.o,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.n,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Question","Exam Builder","Profile","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/question","/exambuilder","/profile","/settings"]),Object(x.a)(x.b.admin,this.props.token)&&(this.faIcons=[m.a.createElement(N.c,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.b,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.g,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.f,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.b,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.o,{size:"1.6em",className:"mr-2"}),m.a.createElement(N.n,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Category","Question","Exam Builder","Exam Edit","Profile","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/category","/question","/exambuilder","/examedit","/profile","/settings"]),m.a.createElement("div",{style:Q},m.a.createElement(B,null),m.a.createElement(b.a,{className:this.classes.sideNav},this.faIcons.map((function(a,t){return m.a.createElement(b.a.Item,{key:t},m.a.createElement(v.NavLink,{exact:!0,to:e.navLinks[t],className:"nav-link "+e.classes.sideNavLink+" sidebar-link",activeClassName:"current"},a,e.menuIntlId.length>1?m.a.createElement(f.a,{id:e.menuIntlId[t],defaultMessage:e.menuName[t]}):e.menuName[t]))})),m.a.createElement("div",{className:"hideInMd"},this.props.token?m.a.createElement(b.a.Item,{className:"ml-md-auto"},m.a.createElement(v.NavLink,{to:{pathname:"/logout"},className:"nav-link"},m.a.createElement(F.a,{icon:"sign-out-alt",size:"lg",className:"text-danger"}))):m.a.createElement(m.a.Fragment,null))))}}]),a}(n.Component),H=Object(g.b)((function(e){return{token:e.auth.token,user:e.user}}),(function(e){return{onGetUserLoader:function(){return e(Object(w.b)())},onUserExamStatLoader:function(){return e(A.c)}}}))(Y),Q={fontSize:"14px"},q=function(e){var a=Object(g.d)((function(e){return e.auth.token}));return m.a.createElement("div",{className:"bg-dark py-2 top-navbar mb-3 w-100"},m.a.createElement(r.a,{className:"align-items-center"},m.a.createElement(s.a,{md:4,style:{paddingLeft:"3rem"}},m.a.createElement("h4",{className:"text-light text-uppercase mb-0"},m.a.createElement(f.a,{id:e.pageName,defaultMessage:e.pageName}))),m.a.createElement(s.a,{md:8,className:"hideInSm pr-5"},m.a.createElement(b.a,{className:"",style:{fontSize:"1.2rem"}},m.a.createElement(b.a.Item,{className:""},m.a.createElement(v.NavLink,{to:{pathname:"/"},className:"nav-link"},m.a.createElement(f.a,{id:"btn.home",defaultMessage:"Home"}))),m.a.createElement(b.a.Item,{className:""},m.a.createElement(v.NavLink,{to:{pathname:"/exams"},className:"nav-link"},m.a.createElement(f.a,{id:"btn.exams",defaultMessage:"Exams"}))),a?m.a.createElement(b.a.Item,{className:""},m.a.createElement(v.NavLink,{to:{pathname:"/logout"},className:"nav-link"},m.a.createElement(F.a,{icon:"sign-out-alt",size:"lg",className:""}))):m.a.createElement(m.a.Fragment,null,m.a.createElement(b.a.Item,{className:""},m.a.createElement(v.NavLink,{to:{pathname:"/signup"},className:"nav-link"},m.a.createElement(f.a,{id:"btn.signup",defaultMessage:"Signup"}))),m.a.createElement(b.a.Item,{className:""},m.a.createElement(v.NavLink,{to:{pathname:"/login"},className:"nav-link"},m.a.createElement(f.a,{id:"btn.login",defaultMessage:"Login"}))))))))},U=(t(365),["Assignment","Weekly","Monthly","Assesment","Term","Test","Final"]);function G(){var e=Object(g.d)((function(e){return e.dashboard.userExamStat})),a=e?_.map(e.examTitles,"title"):[],t=e?_.map(e.examTitles,"type"):[],n=e?_.map(e.stat,(function(e){return"Mark: ".concat(e.averageScore," Out of ").concat(e.totalMark)})):[],s=e?_.map(e.stat,"lastAttemptTime"):[];return m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h6",{className:"card-title"},"All Exam Results"),m.a.createElement("div",{id:"content"},m.a.createElement("ul",{className:"timeline"},a.map((function(e,a){return m.a.createElement("li",{key:e,className:"event","data-date":M()(s[a]).format("YYYY-MM-DD, h:mm a")},m.a.createElement("h3",null,e),m.a.createElement("p",{className:"text-danger"},U[t[a]]),m.a.createElement("p",{className:"text-secondary"},n[a]))})))))))))}var J=t(149),W=t(141);function K(){return m.a.createElement("div",null,m.a.createElement(J.a,W.a.Profile.metaInfo),m.a.createElement(B,{isProfile:!0,size:"300"}),m.a.createElement(G,null))}var R=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(3),t.e(23)]).then(t.bind(null,612))})),V=Object(n.lazy)((function(){return Promise.all([t.e(3),t.e(4),t.e(10),t.e(25)]).then(t.bind(null,602))})),X=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(6),t.e(24)]).then(t.bind(null,606))})),Z=Object(n.lazy)((function(){return Promise.all([t.e(3),t.e(15)]).then(t.bind(null,290))})),$=Object(n.lazy)((function(){return Promise.all([t.e(2),t.e(4),t.e(19),t.e(27)]).then(t.bind(null,610))})),ee=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(3),t.e(4),t.e(6),t.e(21)]).then(t.bind(null,603))})),ae=Object(n.lazy)((function(){return t.e(28).then(t.bind(null,599))})),te=Object(n.lazy)((function(){return t.e(18).then(t.bind(null,609))})),ne=Object(n.lazy)((function(){return t.e(30).then(t.bind(null,600))})),me=(a.default=function(e){var a=e.match.url.split("/",2)[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement(c.slide,{styles:me},m.a.createElement(H,null)),m.a.createElement(l.a,{fluid:"true"},m.a.createElement(r.a,{className:"no-gutters"},m.a.createElement(s.a,{xl:2,lg:3,md:4,className:"sidebar"},m.a.createElement(T,null)),m.a.createElement(s.a,{xl:10,lg:9,md:8,sm:12},m.a.createElement("div",null,m.a.createElement(q,{pageName:a}),m.a.createElement("div",{className:"px-1 ml-md-4",style:{marginTop:"70px"}},m.a.createElement(n.Suspense,{fallback:m.a.createElement("div",{className:"text-center",style:{marginTop:"45vh"}},"Loading...")},m.a.createElement(i.d,{path:"/dashboard",exact:!0,component:V}),m.a.createElement(i.d,{path:"/profile",exact:!0,component:K}),m.a.createElement(i.d,{path:"/category",exact:!0,component:R}),m.a.createElement(i.d,{path:"/question",exact:!0,component:ee}),m.a.createElement(i.d,{path:"/exambuilder",exact:!0,component:X}),m.a.createElement(i.d,{path:"/examedit",exact:!0,component:Z}),m.a.createElement(i.d,{path:"/exams/:id",exact:!0,render:function(e){return m.a.createElement($,Object.assign({free:!1},e))}}),m.a.createElement(i.d,{path:"/exams",exact:!0,component:Z}),m.a.createElement(i.d,{path:"/exams/free/:id",exact:!0,render:function(e){return m.a.createElement($,Object.assign({free:!0},e))}}),m.a.createElement(i.d,{path:"/result",exact:!0,component:te}),m.a.createElement(i.d,{path:"/result/rank/:id",exact:!0,component:ae}),m.a.createElement(i.d,{path:"/settings",exact:!0,component:ne}))))))))},{bmBurgerButton:{position:"fixed",width:"30px",height:"25px",right:"28px",top:"10px"},bmBurgerBars:{background:"#67aaaa"},bmBurgerBarsHover:{background:"#a90000"},bmCrossButton:{height:"24px",width:"24px"},bmCross:{background:"#bdc3c7"},bmMenuWrap:{position:"fixed",height:"100%"},bmMenu:{background:"#373a47",padding:"2.5em 1.5em 0",fontSize:"1.15em"},bmMorphShape:{fill:"#373a47"},bmItemList:{color:"#b8b7ad",padding:"0.8em"},bmItem:{display:"inline-block"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}})}}]);
//# sourceMappingURL=22.b478c88f.chunk.js.map