(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{93:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n.n(a),l=n(16),i=n.n(l),c=n(17),o=n.n(c),s=n(18),u=n.n(s),m=n(34),d=n.n(m),p=n(19),h=n.n(p),f=n(0),E=n.n(f),v=n(75),g=E.a.lazy(function(){return n.e(7).then(n.bind(null,91))}),b=function(e){function n(e){var t;return r()(this,n),(t=o()(this,u()(n).call(this,e))).state={},t}return h()(n,e),i()(n,[{key:"render",value:function(){return E.a.createElement("header",{ref:"header",className:"header"},E.a.createElement("div",{className:"header-wrap"},E.a.createElement("div",{className:"header-wrap-icon"},E.a.createElement("a",{href:"#",className:"icon-large",onClick:this.toggleSideBar.bind(this)},E.a.createElement("span",{className:"icon-large"},"Royal Resorts"),E.a.createElement("span",{className:"icon-small"},"RR")),E.a.createElement("a",{onClick:this.toggleSideBar.bind(this),role:"button",className:"navbar-burger icon-small","aria-label":"menu","aria-expanded":"false"},E.a.createElement("span",{"aria-hidden":"true"}),E.a.createElement("span",{"aria-hidden":"true"}),E.a.createElement("span",{"aria-hidden":"true"}))),E.a.createElement("div",{className:"header-wrap-container"},E.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},E.a.createElement("div",{className:"navbar-brand"},E.a.createElement("a",{className:"navbar-item",href:"#"},E.a.createElement("img",{src:"https://www.royalresorts.com/wp-content/uploads/2016/01/Royal-Resorts-Logo.png"})),E.a.createElement("a",{onClick:this.toggleSideBar.bind(this),role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},E.a.createElement("span",{"aria-hidden":"true"}),E.a.createElement("span",{"aria-hidden":"true"}),E.a.createElement("span",{"aria-hidden":"true"}))),E.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},E.a.createElement("div",{className:"navbar-end"},E.a.createElement(f.Suspense,{fallback:E.a.createElement("div",null,"Loading...")},E.a.createElement(g,null))))))))}},{key:"toggleSideBar",value:function(e){e.preventDefault(),window.nRoyal.toggleClass(document.getElementsByTagName("body")[0],"sidebar-open")}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){console.log("cargo")}}]),n}(f.Component),y=function(e){function n(e){var t;return r()(this,n),(t=o()(this,u()(n).call(this,e))).state={},t}return h()(n,e),i()(n,[{key:"render",value:function(){return E.a.createElement("footer",{ref:"footer",className:"footer"},E.a.createElement("div",{className:"content has-text-centered"},E.a.createElement("p",null,E.a.createElement("strong",null,"Narilearsi")," by"," ",E.a.createElement("a",{href:"https://jgthms.com"},"Jeremy Thomas"),". The source code is licensed",E.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),". The website content is licensed"," ",E.a.createElement("a",{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),".")))}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}}]),n}(f.Component),N=n(9),k=function(e){var t=e.text,n=e.textIcon,a=void 0===n?null:n,r=null!=t&&""!=t?t:"Default";return E.a.createElement("a",{className:"item parentAside"},E.a.createElement("span",null,r),null==a?E.a.createElement("i",{className:"fas fa-question"}):E.a.createElement("i",{className:a}))};n.e(0).then(n.t.bind(null,92,7));var w=function(e){function n(e){var t;return r()(this,n),(t=o()(this,u()(n).call(this,e))).state={},t}return h()(n,e),i()(n,[{key:"render",value:function(){return E.a.createElement("aside",{className:"menu ",id:"MenuPrincipal"},this.props.user.logged&&E.a.createElement("div",{className:"card user"},E.a.createElement("div",{className:"card-content"},E.a.createElement("div",{className:"media"},E.a.createElement("div",{className:"media-left"},E.a.createElement("figure",{className:"image is-48x48"},E.a.createElement("img",{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}))),E.a.createElement("div",{className:"media-content"},E.a.createElement("p",{className:"title is-5"},this.props.user.info.name),E.a.createElement("p",{className:"subtitle is-6"},this.props.user.info.email))))),E.a.createElement("p",{className:"menu-label"},"Administration "),E.a.createElement("ul",{className:"menu-list"},E.a.createElement("li",null,E.a.createElement(k,{text:"Contacts",textIcon:"fas fa-address-book"})),E.a.createElement("li",null,E.a.createElement(k,{text:"Sections",textIcon:"fab fa-microsoft"}))),E.a.createElement("p",{className:"menu-label"},"General"),E.a.createElement("ul",{className:"menu-list"},E.a.createElement("li",null,E.a.createElement(k,{text:"Pages",textIcon:"far fa-file-alt"})),E.a.createElement("li",null,E.a.createElement(k,{text:"Gallery",textIcon:"far fa-images"}))))}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}}]),n}(f.Component),x=Object(N.b)(function(e){return{user:e.users}})(w),C=n(77),D=n.n(C),M=n(72),I=[{path:"/Dashboard",component:function(e){function n(e){var t;return r()(this,n),(t=o()(this,u()(n).call(this,e))).state={cargado:!1},t}return h()(n,e),i()(n,[{key:"render",value:function(){return E.a.createElement("div",{className:"dashboard"},E.a.createElement("div",null,"este es mi home y mi div.home"))}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=document.getElementById("footer");window.innerHeight;null!=e&&console.log(e.clientHeight),null!=t&&console.log(t.clientHeight)}}]),n}(f.Component)},{path:"/about",component:function(e){function n(e){var t;return r()(this,n),(t=o()(this,u()(n).call(this,e))).state={cargado:!1},t}return h()(n,e),i()(n,[{key:"render",value:function(){return E.a.createElement("div",{className:"About"},E.a.createElement("div",null,"este es mi About y mi div.about"))}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}}]),n}(f.Component)}];function B(t){return E.a.createElement(M.a,{path:t.path,render:function(e){return E.a.createElement(t.component,D()({},e,{routes:t.routes}))}})}var H=function(e){function n(e){var t;return r()(this,n),(t=o()(this,u()(n).call(this,e))).state={},t}return h()(n,e),i()(n,[{key:"render",value:function(){return E.a.createElement("div",{ref:"content",className:"appContent"},I.map(function(e,t){return E.a.createElement(B,D()({key:t},e))}))}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}}]),n}(f.Component),W=n(7);n.e(1).then(n.t.bind(null,89,7)),n.e(2).then(n.bind(null,90)).then(function(e){e.initFrame()});var R=function(e){function n(e){var t;return r()(this,n),(t=o()(this,u()(n).call(this,e))).state={},t.updateDimensions=t.updateDimensions.bind(d()(t)),t}return h()(n,e),i()(n,[{key:"render",value:function(){var t=this;return E.a.createElement(v.a,null,E.a.createElement("div",{className:"App"},E.a.createElement(b,{ref:function(e){return t.Header=e}}),E.a.createElement(H,{ref:function(e){return t.Wrapper=e}}),E.a.createElement(x,null),E.a.createElement(y,{ref:function(e){return t.Footer=e},id:"footer"})))}},{key:"componentDidMount",value:function(){this.props.fetchUser(),this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"updateDimensions",value:function(){var e=0,t=0;null!=this.Header&&(e=this.Header.refs.header.clientHeight),null!=this.Footer&&(t=this.Footer.refs.footer.clientHeight),this.Wrapper.refs.content.style.height=parseInt(parseInt(window.innerHeight)-parseInt(e)-parseInt(t))+"px"}}]),n}(f.Component);t.default=Object(N.b)(null,{fetchUser:W.c})(R)}}]);