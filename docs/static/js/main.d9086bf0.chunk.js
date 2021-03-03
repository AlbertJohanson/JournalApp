(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),o=a.n(c),i=a(8),u=a(6),l=a.n(u),s=a(12),m=a(21),p=a(23),d=a(22),f=a(9),b=a(19),h=a.n(b);a(158),a(73);p.a.initializeApp({apiKey:"AIzaSyDKR2C-FjEAHbDYR3vlRW-M1hQff1o7Pv0",authDomain:"journalapp-84d90.firebaseapp.com",projectId:"journalapp-84d90",storageBucket:"journalapp-84d90.appspot.com",messagingSenderId:"533681209747",appId:"1:533681209747:web:94b5373862f0a119b96866"});var v=p.a.firestore(),E=new p.a.auth.GoogleAuthProvider,j="[Auth] login",_="[Auth] logout",g="[UI] Set Error",y="[UI] Remove Error",O="[UI] Start loading",w="[UI] Finish loading",N="[Notes] New note",x="[Notes]Set active note",k="[Notes] Load notes",C="[Notes] Update notes",S="[Notes] Delete notes",A="[Notes] Logout Cleaning",I=a(4),D=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/ajweb/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/ajweb/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(I.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e,t){return{type:x,payload:Object(I.a)({id:e},t)}},L=function(e,t){return{type:N,payload:Object(I.a)({id:e},t)}},U=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:n=t.sent,a(q(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q=function(e){return{type:k,payload:e}},F=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(I.a)({},e)).id,t.next=6,v.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(W(e.id,c)),h.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},W=function(e,t){return{type:C,payload:{id:e,note:Object(I.a)({id:e},t)}}},T=function(e){return{type:S,payload:e}},z=function(e){return{type:g,payload:e}},B=function(){return{type:O,payload:!0}},G=function(){return{type:w,payload:!1}},J=function(e,t){return{type:j,payload:{uid:e,displayName:t}}},K=function(){return{type:_}},M=a(34),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(m.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},i=function(e){var t=e.target;c(Object(I.a)(Object(I.a)({},r),{},Object(M.a)({},t.name,t.value)))};return[r,i,o]},H={email:"",password:""},Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).loading,a=X(H),n=Object(m.a)(a,2),c=n[0],o=n[1],u=c.email,l=c.password,s=function(t){t.preventDefault(),e(function(e,t){return function(a){a(B()),p.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(J(t.uid,t.displayName)),a(G())})).catch((function(e){a(G()),h.a.fire("Error",e.message,"error")}))}}(u,l))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{className:"animate__animated animate__fadeIn animate__faster",onSubmit:s},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:s,disabled:t},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with social networks"),r.a.createElement("div",{className:"google-btn",onClick:function(t){t.preventDefault(),e((function(e){p.a.auth().signInWithPopup(E).then((function(t){var a=t.user;e(J(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(d.b,{to:"/auth/register",className:"link"},"Create new account")))},V=a(59),Y=a.n(V),Z={name:"",email:"",password:"",password2:""},$=function(){var e=Object(i.b)(),t=X(Z),a=Object(m.a)(t,2),n=a[0],c=a[1],o=n.name,u=n.email,f=n.password,b=n.password2,v=function(){return 0===o.trim().length?(e(z(h.a.fire("Error","Name is required"))),!1):Y.a.isEmail(u)?f!==b||f.length<5?(e(z(h.a.fire("Error","Passwords are not the same"))),!1):(e({type:y,payload:t}),!0):(e(z(h.a.fire("Error","Email is not valid"))),!1);var t};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{className:"animate__animated animate__fadeIn animate__faster",onSubmit:function(t){t.preventDefault(),v()&&e(function(e,t,a){return function(n){n(B()),p.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(s.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:console.log(r),n(J(r.uid,r.displayName));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){n(G()),h.a.fire("Error",e.message,"error")}))}}(u,f,o))}},r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:o,onChange:c}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:c}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:f,onChange:c}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:b,onChange:c}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(d.b,{to:"/auth/login",className:"link"},"Already registered?")))},ee=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/auth/login",component:Q}),r.a.createElement(f.b,{exact:!0,path:"/auth/register",component:$}),r.a.createElement(f.a,{to:"/auth/login"}))))},te=a(60),ae=a.n(te),ne=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,u=Object(i.b)(),l=ae()(a);return r.a.createElement("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){u(R(t,{date:a,title:n,body:c,url:o}))}},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},n),r.a.createElement("p",{className:"journal__entry-content"},c)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,l.format("ddd")),r.a.createElement("h4",null,l.format("Do"))))},re=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries animate__animated animate__fadeIn animate__faster"},e.map((function(e){return r.a.createElement(ne,Object.assign({key:e.id},e))})))},ce=function(){var e=Object(i.c)((function(e){return e.auth})).name,t=Object(i.b)();return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null,e)),r.a.createElement("button",{className:"btn",onClick:function(){t(function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:t(K()),t({type:A,payload:void 0});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){t(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,v.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,t(R(c.id,r)),t(L(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New entry")),r.a.createElement(re,null))},oe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"28 de agosto 2020"),r.a.createElement("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,h.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){h.a.showLoading()}}),t.next=4,D(e);case 4:c=t.sent,r.url=c,a(F(r)),h.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture"),r.a.createElement("button",{className:"btn",onClick:function(){e(F(t))}},"Save")))},ie=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,a=X(t),c=Object(m.a)(a,3),o=c[0],u=c[1],p=c[2],d=o.title,f=o.body,b=o.id,h=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==h.current&&(p(t),h.current=t.id)}),[t,p]),Object(n.useEffect)((function(){e(R(o.id,Object(I.a)({},o)))}),[o,e]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(oe,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:d,onChange:u}),r.a.createElement("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:f,onChange:u}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:t.url,alt:"imagen"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,v.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 3:a(T(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(b))}},"Delete"))},ue=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select something",r.a.createElement("br",null),"pr create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},le=function(){var e=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster"},r.a.createElement(ce,null),r.a.createElement("main",null,e?r.a.createElement(ie,null):r.a.createElement(ue,null)))},se=a(35),me=a(18),pe=a.n(me),de=function(e){var t=e.isAuthenticated,a=e.component,n=Object(se.a)(e,["isAuthenticated","component"]);return r.a.createElement(f.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(f.a,{to:"/auth/login"})}}))};de.prototype={isAuthenticated:pe.a.bool.isRequired,component:pe.a.func.isRequired};var fe=function(e){var t=e.isAuthenticated,a=e.component,n=Object(se.a)(e,["isAuthenticated","component"]);return r.a.createElement(f.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(f.a,{to:"/"}):r.a.createElement(a,e)}}))};fe.prototype={isAuthenticated:pe.a.bool.isRequired,component:pe.a.func.isRequired};var be=function(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),b=Object(m.a)(u,2),h=b[0],v=b[1];return Object(n.useEffect)((function(){p.a.auth().onAuthStateChanged(function(){var t=Object(s.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(J(a.uid,a.displayName)),v(!0),e(U(a.uid))):v(!1),o(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,o,v]),c?r.a.createElement("h1",null,"Espere...."):r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(f.d,null,r.a.createElement(fe,{path:"/auth",isAuthenticated:h,component:ee}),r.a.createElement(de,{exact:!0,isAuthenticated:h,path:"/",component:le}),r.a.createElement(f.a,{to:"/auth/login"}))))},he=a(24),ve=a(61),Ee=a(43),je={notes:[],active:null},_e={loading:!1,msgError:null},ge="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,ye=Object(he.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{uid:t.payload.uid,name:t.payload.displayName};case _:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(I.a)(Object(I.a)({},e),{},{msgError:t.payload});case y:return Object(I.a)(Object(I.a)({},e),{},{msgError:null});case O:return Object(I.a)(Object(I.a)({},e),{},{loading:!0});case w:return Object(I.a)(Object(I.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(I.a)(Object(I.a)({},e),{},{active:Object(I.a)({},t.payload)});case N:return Object(I.a)(Object(I.a)({},e),{},{notes:[t.payload].concat(Object(Ee.a)(e.notes))});case k:return Object(I.a)(Object(I.a)({},e),{},{notes:Object(Ee.a)(t.payload)});case C:return Object(I.a)(Object(I.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case S:return Object(I.a)(Object(I.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case A:return Object(I.a)(Object(I.a)({},e),{},{notes:[],active:null});default:return e}}}),Oe=Object(he.e)(ye,ge(Object(he.a)(ve.a))),we=function(){return r.a.createElement(i.a,{store:Oe},r.a.createElement(be,null))};a(155),a(156);o.a.render(r.a.createElement(we,null),document.getElementById("root"))},62:function(e,t,a){e.exports=a(157)}},[[62,1,2]]]);
//# sourceMappingURL=main.d9086bf0.chunk.js.map