(this["webpackJsonpclient-side"]=this["webpackJsonpclient-side"]||[]).push([[0],{18:function(e,a,t){},41:function(e,a,t){},45:function(e,a,t){e.exports=t(79)},50:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),o=(t(50),t(51),t(52),t(10)),m=t(6),s=t(3),i=Object(n.createContext)(),u=t(27),p=function(e,a){switch(a.type){case"LOGIN_SUCCESS":return localStorage.setItem("token",a.payload.token),localStorage.setItem("user",a.payload.user),Object(u.a)({},e,{token:a.payload.token,user:a.payload.user,loading:!1});case"LOGIN_ERROR":return localStorage.removeItem("token"),localStorage.removeItem("user"),Object(u.a)({},e,{token:null,user:null,message:a.payload,loading:!1});default:return e}},d=t(42),f=t.n(d).a.create({baseURL:"".concat("https://gamanfy.herokuapp.com/"),withCredentials:!0}),E=function(){return f.post("/auth/user/logout",{})},g=function(){return f.post("/auth-co/company/logout",{})},b=function(e,a,t){return f.post("/auth-co/confirmation/".concat(e,"/").concat(a),{email:t})},h=function(e){var a={user:localStorage.getItem("userId"),token:localStorage.getItem("token"),loading:!0},t=Object(n.useReducer)(p,a),r=Object(s.a)(t,2),c=r[0],o=r[1],u=Object(m.g)();return l.a.createElement(i.Provider,{value:{token:c.token,user:c.user,loading:c.loading,authenticate:function(e){(function(e){return f.post("/auth/user/login",e)})(e).then((function(e){console.log(e),console.log(e),o({type:"LOGIN_SUCCESS",payload:e.data}),u.push("/")})).catch((function(e){o({type:"LOGIN_ERROR",payload:e})}))},authenticateCompany:function(e){(function(e){return f.post("/auth-co/company/login",e)})(e).then((function(e){o({type:"LOGIN_SUCCESS",payload:e.data})})).catch((function(e){o({type:"LOGIN_ERROR",payload:e})}))}}},e.children)},v=t(25),y=function(e){var a=Object(n.useContext)(i),t=e.component,r=Object(v.a)(e,["component"]);return l.a.createElement(l.a.Fragment,null,a.token?l.a.createElement(m.a,{to:"/"}):l.a.createElement(m.b,Object.assign({render:function(e){return l.a.createElement(t,e)}},r)))},N=function(e){var a=Object(n.useContext)(i),t=e.component,r=Object(v.a)(e,["component"]);return l.a.createElement(l.a.Fragment,null,a.token?l.a.createElement(m.b,Object.assign({render:function(e){return l.a.createElement(t,e)}},r)):l.a.createElement(m.a,{to:"/"}))},x=function(e){e?f.defaults.headers.common["x-auth-token"]=e:delete f.defaults.headers.common["x-auth-token"]},k=t(20),j=t(21),C=t(23),S=t(22),O=(t(76),function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg"},l.a.createElement("a",{className:"navbar-brand",href:"/"}),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},l.a.createElement("img",{className:"mt-4 ml-5",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("ul",{className:"navbar-nav mt-3"},l.a.createElement("li",{className:"nav-item active "},l.a.createElement("b",null,l.a.createElement("a",{className:"nav-link text-light mr-4",href:"/"},"\xbfC\xf3mo funciona?",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link text-light mr-4",href:"/"},"Soy influencer")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link text-light mr-4",href:"/"},"Soy una empresa")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link text-light mr-4",href:"/"},"Blog")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"/auth/login",style:{textDecoration:"underline"},className:"nav-link text-light"},"Login"))))))}),w=(t(77),function(e){Object(C.a)(t,e);var a=Object(S.a)(t);function t(){return Object(k.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-container"},l.a.createElement(O,null),l.a.createElement("section",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"mt-4"},"Crea tu cuenta y empieza a",l.a.createElement("br",null)," descubrir el mejor talento")),l.a.createElement("hr",{className:"hr-left"})," ",l.a.createElement("p",null,"En muy pocos pasos tendr\xe1s todo listo para comenzar ")," ",l.a.createElement("hr",{className:"hr-right"}),l.a.createElement("div",null,l.a.createElement("h2",null,"Para empezar, elige tu perfil")),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"mr-5 homeContainer"},l.a.createElement("h3",null,"Soy influencer"),l.a.createElement("p",{className:"homeContainer-text"},"Quiero ayudar a mis amigos y conocidos a conseguir trabajo"),l.a.createElement("p",{className:"p-cacc"},l.a.createElement("a",{className:"btn-cacc",href:"/auth/user/signup"},"Crear cuenta de influencer   ",l.a.createElement("i",{className:"fas fa-arrow-right"})))),l.a.createElement("div",{className:" ml-5 homeContainer"},l.a.createElement("h3",null,"Soy empresa"),l.a.createElement("p",{className:"homeContainer-text"},"Quiero publicar ofertas de empleo y econtrar al candidato ideal"),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("a",{className:"btn-cacc mx-auto",href:"/auth-co/company/signup"},"Crear cuenta de empresa   ",l.a.createElement("i",{className:"fas fa-arrow-right"})))))))}}]),t}(n.Component)),I=t(11),A=(t(18),function(){var e=Object(n.useContext)(i).authenticate,a=Object(I.a)(),t=a.register,r=a.handleSubmit,c=a.errors;return l.a.createElement("div",null,l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("form",{className:"signUp-form form-group mx-auto",onSubmit:r((function(a){e(a)})),autoComplete:"off"},l.a.createElement("h3",null,"Login"),l.a.createElement("div",null,l.a.createElement("input",{className:"form-control signup-fields mx-auto",type:"text",name:"email",placeholder:"Email",ref:t({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email adress"}})}),c.email&&l.a.createElement("span",null," ",c.email.message?c.email.message:"This field is required"," ")),l.a.createElement("div",null,l.a.createElement("input",{className:"form-control signup-fields mx-auto",type:"password",name:"password",ref:t({required:!0}),placeholder:"Password"}),c.password&&l.a.createElement("span",null,"This field is required")),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox-label",disabled:!0}),l.a.createElement("input",{className:"checkbox-round",type:"checkbox",name:"remember",ref:t})," Recu\xe9rdame")),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Entrar en mi cuenta"})," ")))}),q=function(){var e=Object(m.g)(),a=Object(I.a)(),t=a.register,r=a.handleSubmit,c=a.errors,o=a.watch,i=Object(n.useState)(!1),u=Object(s.a)(i,2),p=u[0],d=u[1],g=Object(n.useState)(!1),b=Object(s.a)(g,2),h=(b[0],b[1]),v=Object(n.useState)(""),y=Object(s.a)(v,2),N=y[0],x=y[1];return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("div",null,l.a.createElement("form",{className:"signUp-form form-group mx-auto",onSubmit:r((function(a){return function(e){return f.post("/auth/user/signup",e)}(a).then((function(a){200===a.status?e.push("/auth/user/token-sent"):h(!1)})).catch((function(e){200===e.response.status||x("Este email ya est\xe1 en uso")})),N})),autoComplete:"off"},l.a.createElement("div",null,l.a.createElement("p",{className:"p-signup"},"Para crear tu cuenta, completa este formulario",l.a.createElement("br",null),"con tus datos de contacto."),l.a.createElement("p",{className:"p-signup"},"No te preocupes, m\xe1s adelante podr\xe1s a\xf1adir ",l.a.createElement("br",null)," los datos de tu empresa.")),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"firstName",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Nombre"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"lastName",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Apellidos"})),l.a.createElement("span",null,N),l.a.createElement("div",null,c.email&&l.a.createElement("span",null," ",c.email.message?c.email.message:"Este campo es obligatorio"," "),l.a.createElement("input",{type:"text",name:"email",placeholder:"Email",className:"form-control signup-fields mx-auto",ref:t({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"La direcci\xf3n no es v\xe1lida"}})})),l.a.createElement("div",null,c.password&&l.a.createElement("span",null,"Este campo es obligatorio"),l.a.createElement("input",{type:"password",name:"password",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Contrase\xf1a"})),l.a.createElement("div",null,c.repeatPassword&&l.a.createElement("span",null,c.repeatPassword.message?c.repeatPassword.message:"Este campo es obligatorio"),l.a.createElement("input",{type:"password",name:"repeatPassword",className:"form-control signup-fields mx-auto",ref:t({validate:function(e){return e===o("password")||"Las contrase\xf1as deben coincidir"}}),placeholder:"Repite la Contrase\xf1a"})),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox-label",disabled:!0}),l.a.createElement("input",{className:"checkbox-round",type:"checkbox",name:"isCompany",onClick:function(){return d(!p)},ref:t})," Eres una empresa de selecci\xf3n (Headhunter) ?")),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox-label",disabled:!0}),l.a.createElement("input",{className:"checkbox-round",type:"checkbox",name:"remember",ref:t})," Recu\xe9rdame")),l.a.createElement("div",null,l.a.createElement("p",{className:"user-terms"},"Al pulsar el bot\xf3n de 'Crear mi cuenta' aceptas y reconoces nuestros ",l.a.createElement("u",null,"T\xe9rminos de uso")," y ",l.a.createElement("u",null,"Politica de privacidad"))),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Crear mi cuenta"})," ")),l.a.createElement("button",{type:"button",className:"btn btn-lg btn-block  text-uppercase btn-danger text-light ",onClick:E},"Desconectar"))))},T=t(14),P=(t(41),function(){var e=Object(I.a)(),a=e.register,t=e.handleSubmit,r=Object(n.useState)(!1),c=Object(s.a)(r,2),o=c[0],m=c[1],i=l.a.useState(!1),u=Object(s.a)(i,2),p=u[0],d=u[1],E=Object(n.useState)({}),g=Object(s.a)(E,2),b=g[0],h=g[1],v=function(){d(!1)};return l.a.createElement("div",{className:"container d-lg-flex h-100"},l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),o?l.a.createElement("p",null,"Nuevo email de confirmaci\xf3n enviado correctamente a ",l.a.createElement("input",{className:"resend-email",type:"text",name:"userEmail",defaultValue:b})):l.a.createElement("div",{className:"card row justify-content-center align-self-center col-lg-6 col-sm-3"},l.a.createElement("img",{className:"tick-logo",src:"/Anotaci\xf3n 2020-06-03 114022.png",alt:"logo-gamanfy"}),l.a.createElement("div",null,l.a.createElement("p",{className:" card-body p-signup mr-5 ml-5",style:{fontWeight:"700"}},"Acabamos de crear tu cuenta"),l.a.createElement("p",{className:" dar-body p-signup mr-5 ml-5"}," Para empezar a ver las mejores ofertas de empleo, verifica tu bandeja den entrada y haz click en el link que te hemos enviado para completar la validaci\xf3n.")),l.a.createElement("p",{className:"card-body user-terms mt-5"},"\xbfNo ves nuestro correo en tu bandeja de entrada? Prueba a ",l.a.createElement("u",null,l.a.createElement("input",{className:"email-resend",type:"submit",onClick:function(){d(!0)},value:"Reenviar el email de verificaci\xf3n"}))),l.a.createElement(T.a,{show:p,onHide:v},l.a.createElement(T.a.Header,null,l.a.createElement(T.a.Title,null," ",l.a.createElement("p",{className:"p-signup"},"Escriba su direcci\xf3n de correo")," ")),l.a.createElement("form",{onSubmit:t((function(e){var a;(a=e.email,f.post("auth/resend",{email:a})).then(h(e.email)).then(m(!0))}))}," ",l.a.createElement("input",{className:"signup-fields ml-5 mt-3",type:"email",name:"email",placeholder:"Email",ref:a({required:!0}),autoComplete:"off"}),l.a.createElement(T.a.Body,null),l.a.createElement(T.a.Footer,null,l.a.createElement("button",{onClick:v,className:"btn-danger p-1",style:{borderRadius:"3px"}},"Cancel"),l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Reenviar"}))))))}),_=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello this is a private route"))},R=t(5),F=function(e){console.log(e);var a=Object(m.g)(),t=Object(I.a)(),r=t.register,c=t.handleSubmit,o=Object(n.useState)(!1),i=Object(s.a)(o,2),u=(i[0],i[1]),p=Object(n.useState)(["CIF","NIF"]),d=Object(s.a)(p,2),E=d[0],g=(d[1],Object(n.useState)([". . .","Administraci\xf3n Gubernamental","Aeron\xe1utica y aviaci\xf3n","Agricultura","Alimentaci\xf3n y bebidas","Almacenamiento","Arquitectura y planificaci\xf3n","Artes esc\xe9nicas","Artesan\xeda","Art\xedculos de consumo","Art\xedculos de lujo y joyas","Art\xedculos deportivos","Atenci\xf3n a la salud mental","Atenci\xf3n sanitaria y hospitalaria","Automaci\xf3n industrial","Banca","Bellas artes","Bienes inmobiliarios","Biotecnolog\xeda","Construcci\xf3n","Consultor\xeda","Contabilidad","Cosm\xe9tica","Deportes","Derecho","Desarrollo de programaci\xf3n","Dise\xf1o","Dise\xf1o gr\xe1fico","Dotaci\xf3n y selecci\xf3n de personal","Educaci\xf3n primaria/secundaria","Energ\xeda renovable y medioambiente","Ense\xf1anza superior","Entretenimiento","Equipos inform\xe1ticos"])),b=Object(s.a)(g,2),h=b[0],v=(b[1],E.map((function(e){return e}))),y=function(e){return console.log(E[e.target.value])},N=h.map((function(e){return e})),x=function(t){(function(e,a,t){return f.post("/auth/user/".concat(e,"/").concat(a,"/complete-profile"),t)})(e.match.params.userId,e.match.params.isCompany,t).then((function(e){200===e.status?a.push("/"):u(!1)})).catch((function(e){200===e.response.status||u(!1)}))};return l.a.createElement("div",null,h?l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("div",null,l.a.createElement("form",{className:"signUp-form form-group mx-auto",onSubmit:c(x),autoComplete:"off"},l.a.createElement("div",null,l.a.createElement("p",{className:"p-signup"},"Para completar tu cuenta, completa este formulario",l.a.createElement("br",null),"con tus datos.")),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"companyName",className:"form-control signup-fields mx-auto",ref:r({required:!0}),placeholder:"Nombre de la empresa"})),l.a.createElement("div",null,l.a.createElement("label",null,"Select your document Type",l.a.createElement("select",{name:"documentType",className:"form-control signup-fields mx-auto",ref:r({required:!0}),onChange:function(e){return y(e)}},v.map((function(e,a){return l.a.createElement("option",{key:a,value:e},e)}))))),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"documentNumber",className:"form-control signup-fields mx-auto",ref:r({required:!0}),placeholder:"N\xfamero de Documento"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"city",className:"form-control signup-fields mx-auto",ref:r({required:!0}),placeholder:"ciudad"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"country",className:"form-control signup-fields mx-auto",ref:r({required:!0}),placeholder:"Pa\xeds"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"website",className:"form-control signup-fields mx-auto",ref:r({required:!0}),placeholder:"P\xe1gina web"})),l.a.createElement("div",null,l.a.createElement("label",null,"Select your Sector",l.a.createElement("select",{name:"sector",className:"form-control signup-fields mx-auto",ref:r({required:!0}),onChange:function(e){return console.log(h)}},N.map((function(e,a){return l.a.createElement("option",{key:a,value:e},e)}))))),l.a.createElement("div",null,l.a.createElement("p",{className:"user-terms"},"Al pulsar el bot\xf3n de 'Completar mi perfil' aceptas y reconoces nuestros ",l.a.createElement("u",null,"T\xe9rminos de uso")," y ",l.a.createElement("u",null,"Politica de privacidad"))),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Completar mi perfil"})," ")))):l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("div",null,l.a.createElement("form",{className:"signUp-form form-group mx-auto",onSubmit:c(x),autoComplete:"off"},l.a.createElement("div",null,l.a.createElement("p",{className:"p-signup"},"Para completar tu cuenta, completa este formulario",l.a.createElement("br",null),"con tus datos.")),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"companyName",className:"form-control signup-fields mx-auto",ref:r({required:!0}),placeholder:"Nombre de la empresa"})),l.a.createElement("div",null,l.a.createElement("label",null,"Select your document Type",l.a.createElement("select",{name:"documentType",className:"form-control signup-fields mx-auto",ref:r({required:!0}),onChange:function(e){return y(e)}},v.map((function(e,a){return l.a.createElement("option",{key:a,value:e},e)}))))),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"documentNumber",className:"form-control signup-fields mx-auto",ref:r({required:!0}),placeholder:"N\xfamero de Documento"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"city",className:"form-control signup-fields mx-auto",ref:r({required:!0}),placeholder:"ciudad"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"country",className:"form-control signup-fields mx-auto",ref:r({required:!0}),placeholder:"Pa\xeds"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"website",className:"form-control signup-fields mx-auto",ref:r({required:!0}),placeholder:"P\xe1gina web"})),l.a.createElement("div",null,l.a.createElement("p",{className:"user-terms"},"Al pulsar el bot\xf3n de 'Completar mi perfil' aceptas y reconoces nuestros ",l.a.createElement("u",null,"T\xe9rminos de uso")," y ",l.a.createElement("u",null,"Politica de privacidad"))),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Completar mi perfil"})," ")))))},D=function(e){Object(C.a)(t,e);var a=Object(S.a)(t);function t(e){var n;return Object(k.a)(this,t),(n=a.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var a=n.state,t=a.userId,l=a.email;(function(e,a,t){return f.post("/auth/confirmation/".concat(e,"/").concat(a),{email:t})})(t,a.userToken,l).then((function(e){console.log(e),n.setState({infoSent:!0}).then(n.history.push("/auth/".concat(n.state.userId,"/complete-profile")))}))},n.handleChange=function(e){var a=e.target,t=a.name,l=a.value;n.setState(Object(R.a)({},t,l))},n.handleClick=function(e){n.handleFormSubmit(e),n.setState({infoSent:!0})},console.log(e),n.state={email:"",userToken:n.props.match.params.userToken,userId:n.props.match.params.userId,isCompany:n.props.match.params.isCompany,infoSent:!1},n}return Object(j.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.userToken,n=e.userId,r=e.infoSent;return l.a.createElement("div",{className:"background-color"},!1===r?l.a.createElement("div",{className:"col-sm-12 my-auto"},l.a.createElement("div",{className:"col-sm-12 h-100 d-lg-flex"},l.a.createElement("div",{className:"mx-auto mt-5",style:{height:"40vh"}},l.a.createElement("form",{className:"form-group col-sm-12 d-table",onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"form-control mb-3",id:"formGroupExampleInput",placeholder:"E-mail @",name:"email",value:a,onChange:this.handleChange}),l.a.createElement("input",{type:"hidden",className:"form-control mb-3",id:"formGroupExampleInput2",name:"userToken",defaultValue:t}),l.a.createElement("input",{type:"hidden",className:"form-control mb-3",id:"formGroupExampleInput2",name:"userId",defaultValue:n})),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Verificar mi cuenta",onClick:this.handleClick})," ")))))):l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement(o.b,{className:"p-cacc",to:"/auth/user/".concat(this.state.userId,"/").concat(this.state.isCompany,"/complete-profile")},l.a.createElement("button",{className:"btn-cacc-su w-100"},"Tu cuenta ha sido verificada, por favor haz click en ",l.a.createElement("u",null,"link")," para completar tu perfil"))))}}]),t}(n.Component),L=function(){var e=Object(n.useContext)(i).authenticateCompany,a=Object(m.g)(),t=Object(I.a)(),r=t.register,c=t.handleSubmit,o=t.errors;return l.a.createElement("div",null,l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("form",{className:"signUp-form form-group mx-auto",onSubmit:c((function(t){e(t),a.push("/")})),autoComplete:"off"},l.a.createElement("h3",null,"Login"),l.a.createElement("div",null,l.a.createElement("input",{className:"form-control signup-fields mx-auto",type:"text",name:"email",placeholder:"Email",ref:r({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email adress"}})}),o.email&&l.a.createElement("span",null," ",o.email.message?o.email.message:"This field is required"," ")),l.a.createElement("div",null,l.a.createElement("input",{className:"form-control signup-fields mx-auto",type:"password",name:"password",ref:r({required:!0}),placeholder:"Password"}),o.password&&l.a.createElement("span",null,"This field is required")),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox-label",disabled:!0}),l.a.createElement("input",{className:"checkbox-round",type:"checkbox",name:"remember",ref:r})," Recu\xe9rdame")),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Entrar en mi cuenta"})," ")))},G=function(){var e=Object(m.g)(),a=Object(I.a)(),t=a.register,r=a.handleSubmit,c=a.errors,o=a.watch,i=Object(n.useState)(!1),u=Object(s.a)(i,2),p=(u[0],u[1]),d=Object(n.useState)(""),E=Object(s.a)(d,2),b=E[0],h=E[1];return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),l.a.createElement("div",null,l.a.createElement("form",{className:"signUp-form form-group mx-auto",onSubmit:r((function(a){return function(e){return f.post("/auth-co/company/signup",e)}(a).then((function(a){200===a.status?e.push("/auth-co/company/token-sent"):p(!1)})).catch((function(e){if(200!==e.response.status)return console.log(e.response),void h("Este email ya est\xe1 en uso")})),b})),autoComplete:"off"},l.a.createElement("div",null,l.a.createElement("p",{className:"p-signup"},"Para crear tu cuenta, completa este formulario",l.a.createElement("br",null),"con tus datos de contacto."),l.a.createElement("p",{className:"p-signup"},"No te preocupes, m\xe1s adelante podr\xe1s a\xf1adir ",l.a.createElement("br",null)," los datos de tu empresa.")),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"firstName",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Nombre"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"lastName",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Apellidos"})),l.a.createElement("span",null,b),l.a.createElement("div",null,c.email&&l.a.createElement("span",null," ",c.email.message?c.email.message:"Este campo es obligatorio"," "),l.a.createElement("input",{type:"text",name:"email",placeholder:"Email",className:"form-control signup-fields mx-auto",ref:t({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"La direcci\xf3n no es v\xe1lida"}})})),l.a.createElement("div",null,c.password&&l.a.createElement("span",null,"Este campo es obligatorio"),l.a.createElement("input",{type:"password",name:"password",className:"form-control signup-fields mx-auto",ref:t({required:!0}),placeholder:"Contrase\xf1a"})),l.a.createElement("div",null,c.repeatPassword&&l.a.createElement("span",null,c.repeatPassword.message?c.repeatPassword.message:"Este campo es obligatorio"),l.a.createElement("input",{type:"password",name:"repeatPassword",className:"form-control signup-fields mx-auto",ref:t({validate:function(e){return e===o("password")||"Las contrase\xf1as deben coincidir"}}),placeholder:"Repite la Contrase\xf1a"})),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox-label",disabled:!0}),l.a.createElement("input",{className:"checkbox-round",type:"checkbox",name:"remember",ref:t})," Recu\xe9rdame")),l.a.createElement("div",null,l.a.createElement("p",{className:"user-terms"},"Al pulsar el bot\xf3n de 'Crear mi cuenta' aceptas y reconoces nuestros ",l.a.createElement("u",null,"T\xe9rminos de uso")," y ",l.a.createElement("u",null,"Politica de privacidad"))),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Crear mi cuenta"})," ")),l.a.createElement("button",{type:"button",className:"btn btn-lg btn-block  text-uppercase btn-danger text-light ",onClick:g},"Desconectar"))))},Z=function(){var e=Object(I.a)(),a=e.register,t=e.handleSubmit,r=Object(n.useState)(!1),c=Object(s.a)(r,2),o=c[0],m=c[1],i=Object(n.useState)(!1),u=Object(s.a)(i,2),p=u[0],d=u[1],E=Object(n.useState)({}),g=Object(s.a)(E,2),b=g[0],h=g[1],v=function(){d(!1)};return l.a.createElement("div",{className:"container d-lg-flex h-100"},l.a.createElement("img",{className:"gamanfy-logo",src:"/gamanfy_logo_blanco[6882].png",alt:"logo-gamanfy"}),o?l.a.createElement("p",null,"Nuevo email de confirmaci\xf3n enviado correctamente a ",l.a.createElement("input",{className:"resend-email",type:"text",name:"userEmail",defaultValue:b})):l.a.createElement("div",{className:"card row justify-content-center align-self-center col-lg-6 col-sm-3"},l.a.createElement("img",{className:"tick-logo",src:"/Anotaci\xf3n 2020-06-03 114022.png",alt:"logo-gamanfy"}),l.a.createElement("div",null,l.a.createElement("p",{className:" card-body p-signup mr-5 ml-5",style:{fontWeight:"700"}},"Acabamos de crear tu cuenta"),l.a.createElement("p",{className:" dar-body p-signup mr-5 ml-5"}," Para empezar a encontrar el mejor talento, verifica tu bandeja de entrada y haz click en el link que te hemos enviado para completar la validaci\xf3n.")),l.a.createElement("p",{className:"card-body user-terms mt-5"},"\xbfNo ves nuestro correo en tu bandeja de entrada? Prueba a ",l.a.createElement("u",null,l.a.createElement("input",{className:"email-resend",type:"submit",onClick:function(){d(!0)},value:"Reenviar el email de verificaci\xf3n"}))),l.a.createElement(T.a,{show:p,onHide:v},l.a.createElement(T.a.Header,null,l.a.createElement(T.a.Title,null," ",l.a.createElement("p",{className:"p-signup"},"Escriba su direcci\xf3n de correo")," ")),l.a.createElement("form",{onSubmit:t((function(e){var a;(a=e.email,f.post("/auth-co/resend",{email:a})).then(h(e.email)).then(m(!0))}))}," ",l.a.createElement("input",{className:"signup-fields ml-5 mt-3",type:"email",name:"email",placeholder:"Email",ref:a({required:!0}),autoComplete:"off"}),l.a.createElement(T.a.Body,null),l.a.createElement(T.a.Footer,null,l.a.createElement("button",{onClick:v,className:"btn-danger p-1",style:{borderRadius:"3px"}},"Cancel"),l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Reenviar"}))))))},z=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello this is a private route"))},U=t(7),B=t.n(U),V=t(16),H=function(e){Object(C.a)(t,e);var a=Object(S.a)(t);function t(e){var n;return Object(k.a)(this,t),(n=a.call(this,e)).handleFormSubmit=function(){var e=Object(V.a)(B.a.mark((function e(a){var t,l,r,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t=n.state,l=t.email,r=t.companyToken,c=t.companyId,b(c,r,l).then((function(e){console.log(e),n.setState({infoSent:!0})}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.handleChange=function(e){var a=e.target,t=a.name,l=a.value;n.setState(Object(R.a)({},t,l))},n.handleClick=function(e){n.handleFormSubmit(e),n.setState({infoSent:!0})},console.log(e),n.state={email:"",companyToken:n.props.match.params.companyToken,companyId:n.props.match.params.companyId,infoSent:!1},n}return Object(j.a)(t,[{key:"render",value:function(){var e=this.state,a=e.companyId,t=e.email,n=e.companyToken,r=e.infoSent;return l.a.createElement("div",{className:"background-color"},!1===r?l.a.createElement("div",{className:"col-sm-12 my-auto"},l.a.createElement("div",{className:"col-sm-12 h-100 d-table"},l.a.createElement("div",{className:"mx-auto mt-5",style:{height:"40vh"}},l.a.createElement("form",{className:"form-group col-sm-12 d-table",onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"form-control mb-3",id:"formGroupExampleInput",placeholder:"E-mail @",name:"email",value:t,onChange:this.handleChange}),l.a.createElement("input",{type:"hidden",className:"form-control mb-3",id:"formGroupExampleInput2",name:"companyToken",defaultValue:n}),l.a.createElement("input",{type:"hidden",className:"form-control mb-3",id:"formGroupExampleInput2",name:"companyId",defaultValue:a})),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("input",{type:"submit",className:"btn-cacc-su",value:"Verificar mi cuenta",onClick:this.handleClick})," ")))))):l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement(o.b,{className:"p-cacc",to:"/auth/user/".concat(this.state.userId,"/complete-profile")},l.a.createElement("button",{className:"btn-cacc-su w-100"},"Tu cuenta ha sido verificada, por favor haz click en ",l.a.createElement("u",null,"link")," para completar tu perfil"))))}}]),t}(n.Component),$=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"mr-5 homeContainer"},l.a.createElement("h3",null,"Soy influencer"),l.a.createElement("p",{className:"p-cacc"},l.a.createElement("a",{className:"btn-cacc",href:"/auth/user/login"},"Login ",l.a.createElement("i",{className:"fas fa-arrow-right"})))),l.a.createElement("div",{className:" ml-5 homeContainer"},l.a.createElement("h3",null,"Soy empresa"),l.a.createElement("p",{className:"p-cacc"}," ",l.a.createElement("a",{className:"btn-cacc mx-auto",href:"/auth-co/company/login"},"Login ",l.a.createElement("i",{className:"fas fa-arrow-right"}))))))},W=localStorage.getItem("token");W&&x(W);var J=function(){return l.a.createElement(o.a,null,l.a.createElement(h,null,l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:w}),l.a.createElement(y,{exact:!0,path:"/auth/user/signup",component:q}),l.a.createElement(y,{exact:!0,path:"/auth/user/token-sent",component:P}),l.a.createElement(y,{exact:!0,path:"/auth/login",component:$}),l.a.createElement(y,{exact:!0,path:"/auth/user/login",component:A}),l.a.createElement(y,{exact:!0,path:"/auth/confirmation/:userId/:userToken",component:D}),l.a.createElement(N,{exact:!0,path:"/user/:userId/dashboard",component:_}),l.a.createElement(y,{exact:!0,path:"/auth-co/company/signup",component:G}),l.a.createElement(y,{exact:!0,path:"/auth-co/company/token-sent",component:Z}),l.a.createElement(y,{exact:!0,path:"/auth-co/company/login",component:L}),l.a.createElement(y,{exact:!0,path:"/auth/user/:userId/:isCompany/complete-profile",component:F}),l.a.createElement(y,{exact:!0,path:"/auth-co/confirmation/:companyId/:companyToken",component:H}),l.a.createElement(N,{exact:!0,path:"/company/:companyId/dashboard",component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.d5af8527.chunk.js.map