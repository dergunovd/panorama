var serviceWorkerOption = {
  "assets": [
    "/panorama.js",
    "/images/room0/py.jpg",
    "/images/room2/py.jpg",
    "/images/room1/py.jpg",
    "/images/room1/pz.jpg",
    "/images/room1/nx.jpg",
    "/images/room2/nz.jpg",
    "/images/room2/px.jpg",
    "/images/room0/px.jpg",
    "/images/room0/py.webp",
    "/images/room1/nz.jpg",
    "/images/room1/px.jpg",
    "/images/room2/py.webp",
    "/images/room0/nx.jpg",
    "/images/room1/py.webp",
    "/images/room0/pz.jpg",
    "/images/room1/pz.webp",
    "/images/room0/nz.jpg",
    "/images/room1/ny.jpg",
    "/images/room2/pz.jpg",
    "/images/room0/ny.jpg",
    "/images/room2/nx.jpg",
    "/index.html",
    "/images/arrow.svg",
    "/images/room1/nx.webp",
    "/images/room1/px.webp",
    "/images/room2/nz.webp",
    "/images/room2/px.webp",
    "/images/room2/ny.jpg",
    "/images/room1/nz.webp",
    "/images/room0/px.webp",
    "/images/door.svg",
    "/images/room0/nx.webp",
    "/images/room0/pz.webp",
    "/images/room0/nz.webp",
    "/images/room2/pz.webp",
    "/images/room2/nx.webp",
    "/images/room1/ny.webp",
    "/images/room0/ny.webp",
    "/images/room2/ny.webp"
  ]
};
        
        !function(e){var o={};function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=o,r.d=function(e,o,n){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)r.d(n,t,function(o){return e[o]}.bind(null,t));return n},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s=0)}([function(e,o,r){"use strict";var n=["/","/index.html","/panorama.js","/images/room0/px.webp","/images/room0/nx.webp","/images/room0/py.webp","/images/room0/ny.webp","/images/room0/pz.webp","/images/room0/nz.webp","/images/room1/px.webp","/images/room1/nx.webp","/images/room1/py.webp","/images/room1/ny.webp","/images/room1/pz.webp","/images/room1/nz.webp","/images/room2/px.webp","/images/room2/nx.webp","/images/room2/py.webp","/images/room2/ny.webp","/images/room2/pz.webp","/images/room2/nz.webp","/images/room0/px.jpg","/images/room0/nx.jpg","/images/room0/py.jpg","/images/room0/ny.jpg","/images/room0/pz.jpg","/images/room0/nz.jpg","/images/room1/px.jpg","/images/room1/nx.jpg","/images/room1/py.jpg","/images/room1/ny.jpg","/images/room1/pz.jpg","/images/room1/nz.jpg","/images/room2/px.jpg","/images/room2/nx.jpg","/images/room2/py.jpg","/images/room2/ny.jpg","/images/room2/pz.jpg","/images/room2/nz.jpg"];self.addEventListener("install",function(e){e.waitUntil(caches.open("panorama-demo").then(function(e){return e.addAll(n)}))}),self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request,{ignoreSearch:!0}).then(function(o){return o||fetch(e.request)}))})}]);