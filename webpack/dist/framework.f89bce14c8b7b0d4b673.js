(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(s,n,t){"use strict";function e(){window.nRoyal={CheckUserOnCookies:function(){return""!=window.nRoyal.getCookieForm("UserSession")},getCookieForm:function(s){for(var n=s+"=",t=decodeURIComponent(document.cookie).split(";"),e=0;e<t.length;e++){for(var o=t[e];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(n))return o.substring(n.length,o.length)}return""},setCookieForm:function(s,n){var t=new Date;t.setTime(t.getTime()+6e5);var e="expires="+t.toUTCString();document.cookie=s+"="+n+";"+e+";path=/"},toggleClass:function(n,t){var e=!1,o=[];Object.keys(n.classList).map(function(s){n.classList[s]==t?e=!0:o.push(n.classList[s])}),0==e&&o.push(t+" ");var i="";Object.keys(o).map(function(s){i+=" "+o[s]}),n.className=i},checkClass:function(n,t){var e=!1;return Object.keys(n.classList).map(function(s){n.classList[s]==t&&(e=!0)}),e},addClass:function(n,s){var t=[];Object.keys(n.classList).map(function(s){t.push(n.classList[s])}),t.push(s+" ");var e="";Object.keys(t).map(function(s){e+=" "+t[s]}),n.className=e},removeClass:function(n,t){var e=[];Object.keys(n.classList).map(function(s){n.classList[s]!=t&&e.push(n.classList[s])});var o="";Object.keys(e).map(function(s){o+=" "+e[s]}),n.className=o}}}t.r(n),t.d(n,"initFrame",function(){return e})}}]);