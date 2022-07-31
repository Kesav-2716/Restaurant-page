(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(920),t.b),l=i()(o()),p=s()(d);l.push([e.id,"*{\n    margin:0;\n    padding: 0;\n}\nbody{\n    background-image: url("+p+");\n    background-repeat: no-repeat;\n   background-size: cover;\n   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n/* Home Page Css*/\n\nh1{\n    text-align: center;\n    font-size: 40px;\n    padding: 2px 0 0 0;\n    color: rgb(165, 63, 134);\n   \n}\nheader ul{\n    list-style-type: none;\n    display: flex;\n    justify-content: space-around;\n}\nli{\n    margin: 15px 0 10px 0;\n    font-size: 25px;\n    cursor: pointer;\n    position: relative;\n}\nli:after{\n    content: \"\";\n    position: absolute;\n    background-color: rgb(187, 37, 37);\n    height: 3px;\n    width: 0;\n    left: 0;\n    bottom: -3px;\n    transition: 0.2s;\n}\nli:hover:after{\n   width: 100%;\n}\n.first{\n    width: 50%;\n    height: 50%;\n    margin:50px 0 0 200px;\n    border-radius: 30px;\n}\n.welcome,.par1,h3,.time{\n    text-align: center;\n    padding: 15px 0 0 0;\n    font-size: 25px;\n    margin-left: 500px;\n    \n}\n.welcome{\n    margin-top: 100px;\n    padding: 100px 0 0 0;\n    font-size: 50px;\n}\n.par1{\n    font-size: 20px;\n}\n.time{\n    margin-top: 120px;\n   letter-spacing: 0.5px;\n}\n\n/* Food Page Css*/\n\n.item{\n    padding: 30px 0 10px 0;\n    margin-left: 900px;\n}\nimg{\n    height: 400px;\n    width: 700px;\n    margin-left: 600px;\n    margin-top:60px;\n    border-radius: 40px;\n}\n\n/* Con Page Css*/\n\n.con{\n    margin: 100px 0 20px 750px;\n    font-size: 50px;\n}\n.address{\n    margin: 0 0 0 820px;\n    font-size: 30px;\n}\n/* About Page Css*/\n\n.ah1{\n    margin: 100px 0 0 800px;\n}\n.ab{\n    margin: 20px 20px 0 500px;\n    font-size: 20px;\n    letter-spacing: 0.5px;\n    line-height: 30px;\n    text-indent: 150px;\n    text-align: justify;\n}\n.ah2{\n    margin:  30px 0 0 800px;\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},920:(e,n,t)=>{e.exports=t.p+"1fb176dd6fac44298579"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(){const e=document.querySelector("#container");e.replaceChildren();const n=document.createElement("h2");n.textContent="Welcome To All",n.classList.add("welcome"),e.appendChild(n);const t=document.createElement("p");t.textContent="“Food is for eating, and good food is to be enjoyed… I think food is, actually, very beautiful in itself.”",t.classList.add("par1"),e.appendChild(t);const r=document.createElement("h3");r.textContent="Let's Eat And Enjoy It...🤤🤪",r.classList.add("last"),e.appendChild(r);const o=document.createElement("h4");o.classList.add("time"),o.textContent="Shop Open-Time:10.00AM To 10.00PM",e.appendChild(o)}function n(){const e=document.querySelector("#container");e.replaceChildren();const n=document.createElement("img");n.src="../src/assets/item1.jpg",n.alt="Food-Item-image",e.appendChild(n)}function r(){const e=document.querySelector("#container");e.replaceChildren();const n=document.createElement("h2");n.textContent="Adddress",n.classList.add("con"),e.appendChild(n);const t=document.createElement("p");t.textContent="No-8,Subburaj Nagar,",t.classList.add("address"),e.appendChild(t);const r=document.createElement("p");r.textContent="New Colony,8Th Street,",r.classList.add("address"),e.appendChild(r);const o=document.createElement("p");o.textContent="Theni-625513.",o.classList.add("address"),e.appendChild(o);const a=document.createElement("p");a.textContent="Ph-no:9787135525,6553635358",a.classList.add("address"),e.appendChild(a)}function o(){const e=document.querySelector("#container");e.replaceChildren();const n=document.createElement("h2");n.textContent="About Us",n.classList.add("ah1"),e.appendChild(n);const t=document.createElement("p");t.textContent="For example, with an easy online ordering system featured prominently on your site, a guest decides to order right from you, instead of using a third party site. During this process, they sign up for your newsletter, and create an account to become a part of your loyalty program. Now you can use that email data to re-target that guest with an email marketing campaign encouraging them to purchase a gift card, or a small welcome gift with your loyalty program. The guest can then use that gift card or coupon code to come back and order delivery for date night at home, being rewarded as a regular by accruing loyalty points. Then, theyll tell their friends, or bring them along to the restaurant, and the guest experience flow begins again.",t.classList.add("ab"),e.appendChild(t);const r=document.createElement("h2");r.textContent="Thank You!!!😍",r.classList.add("ah2"),e.appendChild(r)}var a=t(379),i=t.n(a),c=t(795),s=t.n(c),d=t(569),l=t.n(d),p=t(565),u=t.n(p),m=t(216),h=t.n(m),f=t(589),g=t.n(f),x=t(426),y={};y.styleTagTransform=g(),y.setAttributes=u(),y.insert=l().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=h(),i()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals,console.log("hi"),e(),document.querySelector(".home").addEventListener("click",e),document.querySelector(".foods").addEventListener("click",n),document.querySelector(".contact").addEventListener("click",r),document.querySelector(".about").addEventListener("click",o)})()})();