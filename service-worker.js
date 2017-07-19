"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","9af2ba143eb40c6f26b8486480746f70"],["static/css/main.d4057fd4.css","6033f6c13f2c5698da676c11b9e6db94"],["static/js/main.1325d815.js","4733898582a749a68da24cf24846e09e"],["static/media/addhome.6265dee1.svg","6265dee1b927ba9e5d43041774ddae7b"],["static/media/check.ab4414b7.svg","ab4414b7592c6cb6849123b018d6b1dd"],["static/media/clear.836f44ab.svg","836f44abdeba25a20d7e0ba22aca6c44"],["static/media/detik_home.d6af2a1f.png","d6af2a1fc6dfd1a04f20d1b97dc10c16"],["static/media/dk-logo.ce3fd1ca.png","ce3fd1cad157f0acc95b63efb6240b80"],["static/media/download.6f265606.svg","6f26560659881de8028a1eb7a0f57cd0"],["static/media/facebook_home.2b089e04.png","2b089e0408844a4a6a954d8e1a46c309"],["static/media/google_home.1c36ba83.png","1c36ba834cbf234bbd153dcfb0189a46"],["static/media/history.fe2f81b7.svg","fe2f81b79d32f3209db361c49ef5785d"],["static/media/kompas_home.b59edf33.png","b59edf33e19100a8296ab7d5e5fded7c"],["static/media/kompas_link1.d0af1dcf.png","d0af1dcf2d88bfaf4fc5adc2903e4051"],["static/media/kompas_link2.542d30f3.png","542d30f3e5f889ce7d8c57c9b3ebaac2"],["static/media/kompas_update.1f6603f7.png","1f6603f7bc2fef90645c8f032579f60e"],["static/media/kompas_update2.7d8f4761.png","7d8f47619b6f42aed1f229aecfc491ff"],["static/media/liputan6_home.685b3734.png","685b3734ce8dc015b88ca7987fbb0442"],["static/media/loading.4e239a30.gif","4e239a307e8d3121fff869f3314c4e02"],["static/media/menu_back.758a43c3.svg","758a43c3e7f81ca044802660ea18ea8c"],["static/media/menu_info.8b6fe623.svg","8b6fe6235b4ee3316dde82d9d16093cc"],["static/media/menu_next.326964a5.svg","326964a53e35d7482a811aef7e69262e"],["static/media/menu_refresh.c1a110e3.svg","c1a110e3d213db3ad987e09528b776c4"],["static/media/offline.ca194919.svg","ca194919e41b41dc9e6e71d9ab2eda71"],["static/media/online.78f046a1.svg","78f046a1b9c09af59d00134a929985b6"],["static/media/settings.7cc489b8.svg","7cc489b8fdcd8a76155d7b0643e456a6"],["static/media/share.1fc22bcd.svg","1fc22bcd43e5b362110d8973df2db3a8"],["static/media/subscribe.c9eab304.svg","c9eab304a02c6adb5a26647764be3b8a"],["static/media/tribunnews_home.a6c4e6c5.png","a6c4e6c5b39117527ff136eb8f5e3749"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/project-zerda/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});