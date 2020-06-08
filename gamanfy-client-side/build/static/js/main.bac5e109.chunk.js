(this["webpackJsonpclient-side"]=this["webpackJsonpclient-side"]||[]).push([[0],{23:function(e,a,t){},41:function(e,a,t){},45:function(e,a,t){e.exports=t(79)},50:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),o=(t(50),t(51),t(52),t(16)),m=t(7),s=t(3),i=Object(n.createContext)(),u=t(27),p=function(e,a){switch(a.type){case"LOGIN_SUCCESS":return localStorage.setItem("token",a.payload.token),localStorage.setItem("user",a.payload.user),Object(u.a)({},e,{token:a.payload.token,user:a.payload.user,loading:!1});case"LOGIN_ERROR":return localStorage.removeItem("token"),localStorage.removeItem("user"),Object(u.a)({},e,{token:null,user:null,message:a.payload,loading:!1});default:return e}},d=t(42),E=t.n(d).a.create({baseURL:"".concat("https://gamanfy.herokuapp.com/"),withCredentials:!0}),f=function(){return E.post("/auth/user/logout",{})},g=function(e,a){return E.post("/auth/confirmation/".concat(e),{email:a})},b=function(){return E.post("/auth-co/company/logout",{})},h=function(e,a){return E.post("/auth-co/confirmation/".concat(e),{email:a})},v=function(e){var a={user:localStorage.getItem("user"),token:localStorage.getItem("token"),loading:!0},t=Object(n.useReducer)(p,a),r=Object(s.a)(t,2),c=r[0],o=r[1];return l.a.createElement(i.Provider,{value:{token:c.token,user:c.user,authenticate:function(e){(function(e){return E.post("/auth/user/login",e)})(e).then((function(e){o({type:"LOGIN_SUCCESS",payload:e.data})})).catch((function(e){o({type:"LOGIN_ERROR",payload:e})}))},authenticateCompany:function(e){(function(e){return E.post("/auth-co/company/login",e)})(e).then((function(e){o({type:"LOGIN_SUCCESS",payload:e.data})})).catch((function(e){o({type:"LOGIN_ERROR",payload:e})}))}}},e.children)},N=t(25),y=function(e){var a=Object(n.useContext)(i),t=e.component,r=Object(N.a)(e,["component"]);return l.a.createElement(l.a.Fragment,null,a.token?l.a.createElement(m.a,{to:"/"}):l.a.createElement(m.b,Object.assign({render:function(e){return l.a.createElement(t,e)}},r)))},x=function(e){var a=Object(n.useContext)(i),t=e.component,r=Object(N.a)(e,["component"]);return l.a.createElement(l.a.Fragment,null,a.token?l.a.createElement(m.b,Object.assign({render:function(e){return l.a.createElement(t,e)}},r)):l.a.createElement(m.a,{to:"/"}))},k=function(e){e?E.defaults.headers.common["x-auth-token"]=e:delete E.defaults.headers.common["x-auth-token"]},j=t(19),O=t(20),S=t(22),C=t(21),w=(t(76),function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg"},l.a.createElement("a",{className:"navbar-brand",href:"/"}),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},l.a.createElement("img",{className:"mt-4 ml-5",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("ul",{className:"navbar-nav mt-3"},l.a.createElement("li",{className:"nav-item active "},l.a.createElement("b",null,l.a.createElement("a",{className:"nav-link text-light mr-4",href:"/"},"\xbfC\xf3mo funciona?",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link text-light mr-4",href:"/"},"Soy influencer")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link text-light mr-4",href:"/"},"Soy una empresa")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link text-light mr-4",href:"/"},"Blog")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"/auth/user/login",style:{textDecoration:"underline"},className:"nav-link text-light"},"Login"))))))}),R=(t(77),function(e){Object(S.a)(t,e);var a=Object(C.a)(t);function t(){return Object(j.a)(this,t),a.apply(this,arguments)}return Object(O.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-container"},l.a.createElement(w,null),l.a.createElement("section",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"mt-4"},"Crea tu cuenta y empieza a",l.a.createElement("br",null)," descubrir el mejor talento")),l.a.createElement("hr",{className:"hr-left"})," ",l.a.createElement("p",null,"En muy pocos pasos tendr\xe1s todo listo para comenzar ")," ",l.a.createElement("hr",{className:"hr-right"}),l.a.createElement("div",null,l.a.createElement("h2",null,"Para empezar, elige tu perfil")),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"mr-5 homeContainer"},l.a.createElement("h3",null,"Soy influencer"),l.a.createElement("p",{className:"homeContainer-text"},"Quiero ayudar a mis amigos y conocidos a conseguir trabajo"),l.a.createElement("p",{className:"p-cacc"},l.a.createElement("a",{className:"btn-cacc",href:"/auth/user/signup"},"Crear cuenta de influencer   ",l.a.createElement("i",{className:"fas fa-arrow-right"})))),l.a.createElement("div",{className:" ml-5 homeContainer"},l.a.createElement("h3",null,"Soy empresa"),l.a.createElement("p",{className:"homeContainer-text"},"Quiero publicar ofertas de empleo y econtrar al candidato ideal"),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("a",{className:"btn-cacc mx-auto",href:"/auth-co/company/signup"},"Crear cuenta de empresa   ",l.a.createElement("i",{className:"fas fa-arrow-right"})))))))}}]),t}(n.Component)),_=t(13),I=(t(23),function(){var e=Object(n.useContext)(i).authenticate,a=Object(m.g)(),t=Object(_.a)(),r=t.register,c=t.handleSubmit,o=t.errors;return l.a.createElement("div",null,l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("form",{className:"signUp-form form-group mx-auto",onSubmit:c((function(t){e(t),a.push("/")})),autoComplete:"off"},l.a.createElement("div",null,l.a.createElement("input",{className:"form-control signup-fields mx-auto",type:"text",name:"email",placeholder:"Email",ref:r({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email adress"}})}),o.email&&l.a.createElement("span",null," ",o.email.message?o.email.message:"This field is required"," ")),l.a.createElement("div",null,l.a.createElement("input",{className:"form-control signup-fields mx-auto",type:"password",name:"password",ref:r({required:!0}),placeholder:"Password"}),o.password&&l.a.createElement("span",null,"This field is required")),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox-label",disabled:!0}),l.a.createElement("input",{className:"checkbox-round",type:"checkbox",name:"remember",ref:r})," Recu\xe9rdame")),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Entrar en mi cuenta"})," ")))}),T=function(){var e=Object(m.g)(),a=Object(_.a)(),t=a.register,r=a.handleSubmit,c=a.errors,o=a.watch,i=Object(n.useState)(!1),u=Object(s.a)(i,2),p=u[0],d=u[1],g=Object(n.useState)(!1),b=Object(s.a)(g,2),h=(b[0],b[1]),v=Object(n.useState)(""),N=Object(s.a)(v,2),y=N[0],x=N[1];return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("div",null,l.a.createElement("form",{className:"signUp-form form-group mx-auto",onSubmit:r((function(a){return function(e){return E.post("/auth/user/signup",e)}(a).then((function(a){return console.log("resolved",a),200===a.status?e.push("/auth/user/token-sent"):h(!1)})).catch((function(e){if(200!==e.response.status)return x("Este email ya est\xe1 en uso"),void console.log(e)})),y})),autoComplete:"off"},l.a.createElement("div",null,l.a.createElement("p",{className:"p-signup"},"Para crear tu cuenta, completa este formulario",l.a.createElement("br",null),"con tus datos de contacto."),l.a.createElement("p",{className:"p-signup"},"No te preocupes, m\xe1s adelante podr\xe1s a\xf1adir ",l.a.createElement("br",null)," los datos de tu empresa.")),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"firstName",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Nombre"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"lastName",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Apellidos"})),l.a.createElement("span",null,y),l.a.createElement("div",null,c.email&&l.a.createElement("span",null," ",c.email.message?c.email.message:"Este campo es obligatorio"," "),l.a.createElement("input",{type:"text",name:"email",placeholder:"Email",className:"form-control signup-fields mx-auto",ref:t({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"La direcci\xf3n no es v\xe1lida"}})})),l.a.createElement("div",null,c.password&&l.a.createElement("span",null,"Este campo es obligatorio"),l.a.createElement("input",{type:"password",name:"password",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Contrase\xf1a"})),l.a.createElement("div",null,c.repeatPassword&&l.a.createElement("span",null,c.repeatPassword.message?c.repeatPassword.message:"Este campo es obligatorio"),l.a.createElement("input",{type:"password",name:"repeatPassword",className:"form-control signup-fields mx-auto",ref:t({validate:function(e){return e===o("password")||"Las contrase\xf1as deben coincidir"}}),placeholder:"Repite la Contrase\xf1a"})),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox-label",disabled:!0}),l.a.createElement("input",{className:"checkbox-round",type:"checkbox",name:"isCompany",onClick:function(){return d(!p)},ref:t})," Eres una empresa de selecci\xf3n (Headhunter) ?")),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox-label",disabled:!0}),l.a.createElement("input",{className:"checkbox-round",type:"checkbox",name:"remember",ref:t})," Recu\xe9rdame")),l.a.createElement("div",null,l.a.createElement("p",{className:"user-terms"},"Al pulsar el bot\xf3n de 'Crear mi cuenta' aceptas y reconoces nuestros ",l.a.createElement("u",null,"T\xe9rminos de uso")," y ",l.a.createElement("u",null,"Politica de privacidad"))),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Crear mi cuenta"})," ")),l.a.createElement("button",{type:"button",className:"btn btn-lg btn-block  text-uppercase btn-danger text-light ",onClick:f},"Desconectar"))))},q=t(14),A=(t(41),function(){var e=Object(_.a)(),a=e.register,t=e.handleSubmit,r=Object(n.useState)(!1),c=Object(s.a)(r,2),o=c[0],m=c[1],i=l.a.useState(!1),u=Object(s.a)(i,2),p=u[0],d=u[1],f=Object(n.useState)({}),g=Object(s.a)(f,2),b=g[0],h=g[1],v=function(){d(!1)};return l.a.createElement("div",{className:"container d-lg-flex h-100"},l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),o?l.a.createElement("p",null,"Nuevo email de confirmaci\xf3n enviado correctamente a ",l.a.createElement("input",{className:"resend-email",type:"text",name:"userEmail",defaultValue:b})):l.a.createElement("div",{className:"card row justify-content-center align-self-center col-lg-6 col-sm-3"},l.a.createElement("img",{className:"tick-logo",src:"/Anotaci\xf3n 2020-06-03 114022.png",alt:"logo-gamanfy"}),l.a.createElement("div",null,l.a.createElement("p",{className:" card-body p-signup mr-5 ml-5",style:{fontWeight:"700"}},"Acabamos de crear tu cuenta"),l.a.createElement("p",{className:" dar-body p-signup mr-5 ml-5"}," Para empezar a ver las mejores ofertas de empleo, verifica tu bandeja den entrada y haz click en el link que te hemos enviado para completar la validaci\xf3n.")),l.a.createElement("p",{className:"card-body user-terms mt-5"},"\xbfNo ves nuestro correo en tu bandeja de entrada? Prueba a ",l.a.createElement("u",null,l.a.createElement("input",{className:"email-resend",type:"submit",onClick:function(){d(!0)},value:"Reenviar el email de verificaci\xf3n"}))),l.a.createElement(q.a,{show:p,onHide:v},l.a.createElement(q.a.Header,null,l.a.createElement(q.a.Title,null," ",l.a.createElement("p",{className:"p-signup"},"Escriba su direcci\xf3n de correo")," ")),l.a.createElement("form",{onSubmit:t((function(e){var a;(a=e.email,E.post("auth/resend",{email:a})).then(h(e.email)).then(m(!0))}))}," ",l.a.createElement("input",{className:"signup-fields ml-5 mt-3",type:"email",name:"email",placeholder:"Email",ref:a({required:!0}),autoComplete:"off"}),l.a.createElement(q.a.Body,null),l.a.createElement(q.a.Footer,null,l.a.createElement("button",{onClick:v,className:"btn-danger p-1",style:{borderRadius:"3px"}},"Cancel"),l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Reenviar"}))))))}),P=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello this is a private route"))},L=t(6),F=t(5),Z=t.n(F),G=t(12),D=function(e){Object(S.a)(t,e);var a=Object(C.a)(t);function t(e){var n;return Object(j.a)(this,t),(n=a.call(this,e)).handleFormSubmit=function(){var e=Object(G.a)(Z.a.mark((function e(a){var t,l,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t=n.state,l=t.email,r=t.userToken,g(r,l).then((function(e){console.log(e),n.setState({infoSent:!0}),n.history.push("/auth/user/login")}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.handleChange=function(e){var a=e.target,t=a.name,l=a.value;n.setState(Object(L.a)({},t,l))},console.log(e),n.state={email:"",userToken:n.props.match.params.userToken},n}return Object(O.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.userToken;return l.a.createElement("div",{className:"background-color"},l.a.createElement("div",{className:"col-sm-12 my-auto"},l.a.createElement("div",{className:"col-sm-12 h-100 d-lg-flex"},l.a.createElement("div",{className:"mx-auto mt-5",style:{height:"40vh"}},l.a.createElement("form",{className:"form-group col-sm-12 d-table",onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"form-control mb-3",id:"formGroupExampleInput",placeholder:"E-mail @",name:"email",value:a,onChange:this.handleChange}),l.a.createElement("input",{type:"hidden",className:"form-control mb-3",id:"formGroupExampleInput2",name:"userToken",defaultValue:t})),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Verificar mi cuenta"})," ")))))),l.a.createElement("div",{className:" col-md-4 text-center",role:"group","aria-label":"Basic example"}),l.a.createElement("div",{className:"col-md-4 text-center"}))}}]),t}(n.Component),z=function(){var e=Object(n.useContext)(i).authenticate,a=Object(m.g)(),t=Object(_.a)(),r=t.register,c=t.handleSubmit,o=t.errors;return l.a.createElement("div",null,l.a.createElement("h1",null,"LOGIN"),l.a.createElement("form",{onSubmit:c((function(t){e(t),a.push("/")})),autoComplete:"off"},l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"email",placeholder:"Email",ref:r({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email adress"}})}),o.email&&l.a.createElement("span",null," ",o.email.message?o.email.message:"This field is required"," ")),l.a.createElement("div",null,l.a.createElement("input",{type:"password",name:"password",ref:r({required:!0}),placeholder:"Password"}),o.password&&l.a.createElement("span",null,"This field is required")),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"remember",ref:r})," Remember me")),l.a.createElement("input",{type:"submit"})))},B=function(){var e=Object(m.g)(),a=Object(_.a)(),t=a.register,r=a.handleSubmit,c=a.errors,o=a.watch,i=Object(n.useState)(!1),u=Object(s.a)(i,2),p=(u[0],u[1]),d=Object(n.useState)(""),f=Object(s.a)(d,2),g=f[0],h=f[1];return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("div",null,l.a.createElement("form",{className:"signUp-form form-group mx-auto",onSubmit:r((function(a){return function(e){return E.post("/auth-co/company/signup",e)}(a).then((function(a){return 200===a.status?e.push("/auth-co/company/token-sent"):p(!1)})).catch((function(e){if(200!==e.response.status)return console.log(e.response),void h("Este email ya est\xe1 en uso")})),g})),autoComplete:"off"},l.a.createElement("div",null,l.a.createElement("p",{className:"p-signup"},"Para crear tu cuenta, completa este formulario",l.a.createElement("br",null),"con tus datos de contacto."),l.a.createElement("p",{className:"p-signup"},"No te preocupes, m\xe1s adelante podr\xe1s a\xf1adir ",l.a.createElement("br",null)," los datos de tu empresa.")),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"firstName",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Nombre"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"lastName",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Apellidos"})),l.a.createElement("span",null,g),l.a.createElement("div",null,c.email&&l.a.createElement("span",null," ",c.email.message?c.email.message:"Este campo es obligatorio"," "),l.a.createElement("input",{type:"text",name:"email",placeholder:"Email",className:"form-control signup-fields mx-auto",ref:t({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"La direcci\xf3n no es v\xe1lida"}})})),l.a.createElement("div",null,c.password&&l.a.createElement("span",null,"Este campo es obligatorio"),l.a.createElement("input",{type:"password",name:"password",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Contrase\xf1a"})),l.a.createElement("div",null,c.repeatPassword&&l.a.createElement("span",null,c.repeatPassword.message?c.repeatPassword.message:"Este campo es obligatorio"),l.a.createElement("input",{type:"password",name:"repeatPassword",className:"form-control signup-fields mx-auto",ref:t({validate:function(e){return e===o("password")||"Las contrase\xf1as deben coincidir"}}),placeholder:"Repite la Contrase\xf1a"})),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox-label",disabled:!0}),l.a.createElement("input",{className:"checkbox-round",type:"checkbox",name:"remember",ref:t})," Recu\xe9rdame")),l.a.createElement("div",null,l.a.createElement("p",{className:"user-terms"},"Al pulsar el bot\xf3n de 'Crear mi cuenta' aceptas y reconoces nuestros ",l.a.createElement("u",null,"T\xe9rminos de uso")," y ",l.a.createElement("u",null,"Politica de privacidad"))),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Crear mi cuenta"})," ")),l.a.createElement("button",{type:"button",className:"btn btn-lg btn-block  text-uppercase btn-danger text-light ",onClick:b},"Desconectar"))))},H=function(){var e=Object(_.a)(),a=e.register,t=e.handleSubmit,r=Object(n.useState)(!1),c=Object(s.a)(r,2),o=c[0],m=c[1],i=l.a.useState(!1),u=Object(s.a)(i,2),p=u[0],d=u[1],f=Object(n.useState)({}),g=Object(s.a)(f,2),b=g[0],h=g[1],v=function(){d(!1)};return l.a.createElement("div",{className:"container d-lg-flex h-100"},l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),o?l.a.createElement("p",null,"Nuevo email de confirmaci\xf3n enviado correctamente a ",l.a.createElement("input",{className:"resend-email",type:"text",name:"userEmail",defaultValue:b})):l.a.createElement("div",{className:"card row justify-content-center align-self-center col-lg-6 col-sm-3"},l.a.createElement("img",{className:"tick-logo",src:"/Anotaci\xf3n 2020-06-03 114022.png",alt:"logo-gamanfy"}),l.a.createElement("div",null,l.a.createElement("p",{className:" card-body p-signup mr-5 ml-5",style:{fontWeight:"700"}},"Acabamos de crear tu cuenta"),l.a.createElement("p",{className:" dar-body p-signup mr-5 ml-5"}," Para empezar a encontrar el mejor talento, verifica tu bandeja de entrada y haz click en el link que te hemos enviado para completar la validaci\xf3n.")),l.a.createElement("p",{className:"card-body user-terms mt-5"},"\xbfNo ves nuestro correo en tu bandeja de entrada? Prueba a ",l.a.createElement("u",null,l.a.createElement("input",{className:"email-resend",type:"submit",onClick:function(){d(!0)},value:"Reenviar el email de verificaci\xf3n"}))),l.a.createElement(q.a,{show:p,onHide:v},l.a.createElement(q.a.Header,null,l.a.createElement(q.a.Title,null," ",l.a.createElement("p",{className:"p-signup"},"Escriba su direcci\xf3n de correo")," ")),l.a.createElement("form",{onSubmit:t((function(e){var a;(a=e.email,E.post("/auth-co/resend",{email:a})).then(h(e.email)).then(m(!0))}))}," ",l.a.createElement("input",{className:"signup-fields ml-5 mt-3",type:"email",name:"email",placeholder:"Email",ref:a({required:!0}),autoComplete:"off"}),l.a.createElement(q.a.Body,null),l.a.createElement(q.a.Footer,null,l.a.createElement("button",{onClick:v,className:"btn-danger p-1",style:{borderRadius:"3px"}},"Cancel"),l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Reenviar"}))))))},U=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello this is a private route"))},V=function(e){Object(S.a)(t,e);var a=Object(C.a)(t);function t(e){var n;return Object(j.a)(this,t),(n=a.call(this,e)).handleFormSubmit=function(){var e=Object(G.a)(Z.a.mark((function e(a){var t,l,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t=n.state,l=t.email,r=t.companyToken,h(r,l).then((function(e){console.log(e),n.setState({infoSent:!0}),n.props.history.push("/auth/user/login")}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.handleChange=function(e){var a=e.target,t=a.name,l=a.value;n.setState(Object(L.a)({},t,l))},console.log(e),n.state={email:"",companyToken:n.props.match.params.companyToken},n}return Object(O.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.companyToken;return l.a.createElement("div",{className:"background-color"},l.a.createElement("div",{className:"col-sm-12 my-auto"},l.a.createElement("div",{className:"col-sm-12 h-100 d-table"},l.a.createElement("div",{className:"mx-auto mt-5",style:{height:"40vh"}},l.a.createElement("form",{className:"form-group col-sm-12 d-table",onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"form-control mb-3",id:"formGroupExampleInput",placeholder:"E-mail @",name:"email",value:a,onChange:this.handleChange}),l.a.createElement("input",{type:"hidden",className:"form-control mb-3",id:"formGroupExampleInput2",name:"companyToken",defaultValue:t})),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Verificar mi cuenta"})," ")))))),l.a.createElement("div",{className:" col-md-4 text-center",role:"group","aria-label":"Basic example"}),l.a.createElement("div",{className:"col-md-4 text-center"}))}}]),t}(n.Component),$=localStorage.getItem("token");$&&k($);var W=function(){return l.a.createElement(o.a,null,l.a.createElement(v,null,l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:R}),l.a.createElement(y,{exact:!0,path:"/auth/user/signup",component:T}),l.a.createElement(y,{exact:!0,path:"/auth/user/token-sent",component:A}),l.a.createElement(y,{exact:!0,path:"/auth/user/login",component:I}),l.a.createElement(y,{exact:!0,path:"/auth/confirmation/:userToken",component:D}),l.a.createElement(x,{exact:!0,path:"/user/:userId/dashboard",component:P}),l.a.createElement(y,{exact:!0,path:"/auth-co/company/signup",component:B}),l.a.createElement(y,{exact:!0,path:"/auth-co/company/token-sent",component:H}),l.a.createElement(y,{exact:!0,path:"/auth-co/company/login",component:z}),l.a.createElement(y,{exact:!0,path:"/auth-co/confirmation/:companyToken",component:V}),l.a.createElement(x,{exact:!0,path:"/company/:companyId/dashboard",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.bac5e109.chunk.js.map