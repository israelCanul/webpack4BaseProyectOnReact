(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?i(e):t}(this,s(a).call(this,e))).state={heightCardUserInfo:0},t.toggleCardUser=t.toggleCardUser.bind(i(t)),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,r["Component"]),function(e,t,a){t&&c(e.prototype,t),a&&c(e,a)}(a,[{key:"componentDidMount",value:function(){this.setState({heightCardUserInfo:this.cardUser.clientHeight}),this.cardUser.style.height=this.cardUser.clientHeight+"px",this.cardUser.className=this.cardUser.className+" noActive"}},{key:"toggleCardUser",value:function(e){window.nRoyal.toggleClass(this.cardUser,"noActive")}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"navbar-item is-hoverable userInfo"},window.nRoyal.CheckUserOnCookies()?n.a.createElement("figure",{className:"image is-32x32 ",onClick:this.toggleCardUser},n.a.createElement("img",{style:{maxHeight:"32px"},className:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})):n.a.createElement("div",{className:"buttons"},n.a.createElement("a",{className:"button is-primary"},"Log in")),n.a.createElement("div",{className:"card card-user",ref:function(e){return t.cardUser=e}},n.a.createElement("header",{className:"card-header"},n.a.createElement("p",{className:"card-header-title"},"Component"),n.a.createElement("a",{href:"#",className:"card-header-icon","aria-label":"more options"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down","aria-hidden":"true"})))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",n.a.createElement("a",{href:"#"},"@bulmaio"),". ",n.a.createElement("a",{href:"#"},"#css")," ",n.a.createElement("a",{href:"#"},"#responsive"),n.a.createElement("br",null),n.a.createElement("time",{dateTime:"2016-1-1"},"11:09 PM - 1 Jan 2016"))),n.a.createElement("footer",{className:"card-footer"},n.a.createElement("a",{href:"#",className:"card-footer-item"},"Save"),n.a.createElement("a",{href:"#",className:"card-footer-item"},"Edit"),n.a.createElement("a",{href:"#",className:"card-footer-item"},"Delete"))))}}]),a}();t.default=u}}]);