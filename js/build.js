var float=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return{}.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i={},u=i;function c(t){var e=t.timing,n=t.depict,o=t.duration,r=performance.now();requestAnimationFrame(function t(i){var u=(i-r)/o;u>=1&&(u=1);var c=e(u);n(c),u<1&&requestAnimationFrame(t)})}i.createBreakpoint=function(t){var e,n=t.width,o=t.before,r=t.after;innerWidth>n&&(e=!0,r.forEach(function(t){return t()})),window.addEventListener("resize",function(){innerWidth<=n&&e?(o.forEach(function(t){return t()}),e=!1):innerWidth>=n&&!e&&(r.forEach(function(t){return t()}),e=!0)})},i.animate=c,i.fadeIn=function(t,e){e||(e=200),t.style.height="auto";var n=t.offsetHeight;t.style.height=0,c({duration:e,timing:function(t){return t},depict:function(e){return t.style.height=e*n+"px"}})},i.fadeOut=function(t,e){e||(e=200);var n=t.offsetHeight;c({duration:e,timing:function(t){return 1-t},depict:function(e){return t.style.height=e*n+"px"}})},i.displayByStep=function(t,e,n){var o=document.querySelectorAll(t),r="block";!0===n&&(r="none"),[].forEach.call(o,function(t,n){return setTimeout(function(){return t.style.display=r},++n*e)})},i.createSticker=function(t,e,n){var o,i=(o=arguments,[].map.call(o,function(t){return"object"===r()(t)&&1===t.ELEMENT_NODE?t:"string"==typeof t?document.querySelector(t):void 0}));t=i[0],i[1],i[2];var u=i[3]=function(t){var e=function t(e){return"static"!=getComputedStyle(e.parentNode).position?e.parentNode:t(e.parentNode)}(t);return e||document.body}(t),c=["DOMContentLoaded","scroll","resize"],a=function(){var e,n,o,r,c,a,f,l;e=i.map(function(t){return t.getBoundingClientRect()}),n=e[0],o=e[1],r=e[2],c=e[3],a=getComputedStyle(t.parentNode),f=parseInt(a.paddingLeft),l=parseInt(a.paddingRight),t.style.width=t.parentNode.clientWidth-f-l+"px",n.top<=0&&n.bottom>=r.bottom||n.top<0&&r.bottom<innerHeight?(t.style.position="absolute",t.style.top=r.bottom-c.top+parseInt(getComputedStyle(u).paddingTop)-n.bottom+n.top+"px"):o.bottom<=0?(t.style.position="fixed",t.style.top=0):t.style.position=""};return{add:function(){c.forEach(function(t){return addEventListener(t,a)})},remove:function(){c.forEach(function(t){return removeEventListener(t,a)}),t.style.position="",t.style.width="",t.style.top=""}}},i.request=function(t){var e=t.method,n=t.url,o=t.body,r=t.callback,i=new XMLHttpRequest;i.open(e||"GET",n,!0),i.addEventListener("load",function(){i.status<400?r(null,i.responseText):r(new Error(i.responseStatus))}),i.addEventListener("error",function(){r(new Error("Network error"))}),i.send(o||null)};var a=document.querySelector("#menu-icon"),f=document.querySelector("#menu"),l=!1;a.addEventListener("click",function(){l?(u.fadeOut(f),a.classList.remove("open"),l=!1):(u.fadeIn(f),a.classList.add("open"),l=!0)});var s=u.createSticker(".sticker","aside>section",".main");u.createBreakpoint({width:769,before:[function(){return s.remove()},function(){return f.style.height=0}],after:[function(){return s.add()},function(){return f.style.height="auto"},function(){return a.classList.remove("open")}]}),["#search","#email"].forEach(function(t){var e=document.querySelector(t);e.addEventListener("submit",function(t){t.preventDefault(),u.request({method:"POST",url:"/test",body:e.text.value,callback:function(t,n){t?console.log(t):console.log(n),e.text.value=""}})})})}]);
