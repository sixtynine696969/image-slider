(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n:root {\n    --image-width: calc(1920px / 3);\n    --image-height: calc(1080px / 3);\n}\n\n.slider {\n    display: grid;\n    grid-template-columns: 50px max-content 50px;\n    grid-template-rows: 50px var(--image-height) 50px;\n\n    border: 1px solid black;\n    border-radius: 50px;\n\n    box-shadow: 8px 9px 13px 0px black;\n}\n\n.top {\n    grid-column: span 3;\n}\n\nbutton.previous-control, button.next-control {\n    border: none;\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2.5rem;\n}\n\n.image-display {\n    position: relative;\n    display: flex;\n    justify-content: center;\n\n    border: 10px ridge gray;\n    border-radius: 10px;\n}\n\n.image-display img {\n    position: absolute;\n    height: 100%;\n    width: auto;\n    opacity: 0;\n    transition: all 0.5s linear;\n}\n\n.image-display img.visible {\n    position: static;\n    opacity: 1;\n}\n\n/* .image-display img:nth-child(2n+1) {\n    display: none;\n} */\n\n.navigation-container {\n    grid-column: span 3;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.navigation-container .nav-circle {\n    width: 15px;\n    height: 15px;\n    background-color: white;\n    border-radius: 100%;\n    border: 2px solid black;\n}\n\n.navigation-container .nav-circle.selected {\n    background-color: black;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var v=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(426),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),n()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const f=document.querySelectorAll(".slider > button"),g=document.querySelectorAll(".nav-circle"),y=document.querySelectorAll(".image-display > img"),h=y[y.length-1].dataset.imageIndex;let b;function x(e){return document.querySelector(`img[data-image-index="${e+1}"]`)}function S(){const e=document.querySelector(".visible"),n=document.querySelector(".selected"),t=Number(e.dataset.imageIndex);w(e,n,x(t)?t+1:1)}function q(){clearInterval(b),b=setInterval(S,5e3)}function w(e,n,t){e.classList.remove("visible"),document.querySelector(`img[data-image-index="${t}"]`).classList.add("visible"),n.classList.remove("selected"),document.querySelector(`button[data-image-nav="${t}"]`).classList.add("selected")}g.forEach((e=>{e.addEventListener("click",(e=>{const n=e.target,t=Number(n.dataset.imageNav);var r;document.querySelector(".visible").classList.remove("visible"),document.querySelector(".selected").classList.remove("selected"),r=t,document.querySelector(`img[data-image-index="${r}"]`).classList.add("visible"),document.querySelector(`button[data-image-nav="${r}"]`).classList.add("selected"),q()}))})),f.forEach((e=>{e.addEventListener("click",(e=>{const n=document.querySelector(".visible"),t=document.querySelector(".selected"),r=Number(n.dataset.imageIndex);let o;var a;e.target.classList.contains("previous-control")?(a=r,o=document.querySelector(`img[data-image-index="${a-1}"]`)?r-1:h):o=x(r)?r+1:1,w(n,t,o),q()}))})),q()})()})();