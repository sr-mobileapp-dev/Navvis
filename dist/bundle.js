/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@navvis/indoorviewer/app.api.js":
/*!******************************************************!*\
  !*** ./node_modules/@navvis/indoorviewer/app.api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.ID="ID",t.IMPORTANCE="IMPORTANCE"}(e.PoiSortableField||(e.PoiSortableField={})),function(t){t.ASCENDING="ASC",t.DESCENDING="DESC"}(e.SortOrder||(e.SortOrder={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(2).polyfill();var r=n(5);e.CustomLayer=r.CustomLayer;var i=n(8);e.SiteModelType=i.SiteModelType;var o=n(0);e.PoiSortableField=o.PoiSortableField;var s=n(0);e.SortOrder=s.SortOrder;var u=n(9);e.LicenseFeatureType=u.LicenseFeatureType;var c=n(10);e.PoiClickOrigin=c.PoiClickOrigin;var a=n(11);e.BlendingMode=a.BlendingMode;var l=n(12);e.UiLanguage=l.UiLanguage,e.DataLanguage=l.DataLanguage,e.DecimalSeparators=l.DecimalSeparators;var f=n(13);e.InstructionType=f.InstructionType;var p=n(14);e.ViewType=p.ViewType,e.getApi=function(t,e){if(void 0===e&&(e={}),e.hasOwnProperty("base_url"))throw Error("'base_url' configuration property is unnecessary when using getApi(). Please remove.");if(e.hasOwnProperty("onLoadComplete"))throw Error("'onLoadComplete' configuration property is unnecessary when using getApi(). Please use Promise.then() instead.");return new Promise(function(n,r){var i=document.createElement("script");i.src=t+("/"===t.slice(-1)?"":"/")+"IndoorViewerAPI.js",i.onerror=function(t){console.error("Fetching "+i.src+" failed.",t),r(t)},i.onload=function(){window.IV.loaded(function(){e=Object.assign(e,{base_url:t,onLoadComplete:function(){window.IV.injector.get("LicenseService").initialized.then(function(){var t=window.IV.injector.get("ApiService");n(t)}).catch(function(t){console.error("Loading the IndoorViewer API failed.",t),r(t)})}}),new window.IndoorViewer(e)})},document.head.appendChild(i)})}},function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.6+9869a4bc
 */var r;r=function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=0,o=void 0,s=void 0,u=function(t,e){A[i]=t,A[i+1]=e,2===(i+=2)&&(s?s(d):E())},c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,f="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),p="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(d,1)}}var A=new Array(1e3);function d(){for(var t=0;t<i;t+=2){(0,A[t])(A[t+1]),A[t]=void 0,A[t+1]=void 0}i=0}var I,v,y,N,E=void 0;function _(t,e){var n=this,r=new this.constructor(T);void 0===r[O]&&B(r);var i=n._state;if(i){var o=arguments[i-1];u(function(){return k(i,r,o,n._result)})}else P(n,r,t,e);return r}function S(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(T);return C(e,t),e}f?E=function(){return e.nextTick(d)}:l?(v=0,y=new l(d),N=document.createTextNode(""),y.observe(N,{characterData:!0}),E=function(){N.data=v=++v%2}):p?((I=new MessageChannel).port1.onmessage=d,E=function(){return I.port2.postMessage(0)}):E=void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(d)}:h()}catch(t){return h()}}():h();var O=Math.random().toString(36).substring(2);function T(){}var g=void 0,b=1,R=2,L={error:null};function w(t){try{return t.then}catch(t){return L.error=t,L}}function m(e,n,r){n.constructor===e.constructor&&r===_&&n.constructor.resolve===S?function(t,e){e._state===b?U(t,e._result):e._state===R?H(t,e._result):P(e,void 0,function(e){return C(t,e)},function(e){return H(t,e)})}(e,n):r===L?(H(e,L.error),L.error=null):void 0===r?U(e,n):t(r)?function(t,e,n){u(function(t){var r=!1,i=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?C(t,n):U(t,n))},function(e){r||(r=!0,H(t,e))},t._label);!r&&i&&(r=!0,H(t,i))},t)}(e,n,r):U(e,n)}function C(t,e){var n,r;t===e?H(t,new TypeError("You cannot resolve a promise with itself")):(r=typeof(n=e),null===n||"object"!==r&&"function"!==r?U(t,e):m(t,e,w(e)))}function M(t){t._onerror&&t._onerror(t._result),D(t)}function U(t,e){t._state===g&&(t._result=e,t._state=b,0!==t._subscribers.length&&u(D,t))}function H(t,e){t._state===g&&(t._state=R,t._result=e,u(M,t))}function P(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+b]=n,i[o+R]=r,0===o&&t._state&&u(D,t)}function D(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,i=void 0,o=t._result,s=0;s<e.length;s+=3)r=e[s],i=e[s+n],r?k(n,r,i,o):i(o);t._subscribers.length=0}}function k(e,n,r,i){var o=t(r),s=void 0,u=void 0,c=void 0,a=void 0;if(o){if((s=function(t,e){try{return t(e)}catch(t){return L.error=t,L}}(r,i))===L?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void H(n,new TypeError("A promises callback cannot return that same promise."))}else s=i,c=!0;n._state!==g||(o&&c?C(n,s):a?H(n,u):e===b?U(n,s):e===R&&H(n,s))}var G=0;function B(t){t[O]=G++,t._state=void 0,t._result=void 0,t._subscribers=[]}var j=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(T),this.promise[O]||B(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?U(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&U(this.promise,this._result))):H(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===g&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===S){var i=w(t);if(i===_&&t._state!==g)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===V){var o=new n(T);m(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===g&&(this._remaining--,t===R?H(r,n):this._result[e]=n),0===this._remaining&&U(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;P(t,void 0,function(t){return n._settledAt(b,e,t)},function(t){return n._settledAt(R,e,t)})},t}(),V=function(){function e(t){this[O]=G++,this._result=this._state=void 0,this._subscribers=[],T!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){C(t,e)},function(e){H(t,e)})}catch(e){H(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return V.prototype.then=_,V.all=function(t){return new j(this,t).promise},V.race=function(t){var e=this;return r(t)?new e(function(n,r){for(var i=t.length,o=0;o<i;o++)e.resolve(t[o]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},V.resolve=S,V.reject=function(t){var e=new this(T);return H(e,t),e},V._setScheduler=function(t){s=t},V._setAsap=function(t){u=t},V._asap=u,V.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=V},V.Promise=V,V},t.exports=r()}).call(this,n(3),n(4))},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,a=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?a=c.concat(a):f=-1,a.length&&h())}function h(){if(!l){var t=u(p);l=!0;for(var e=a.length;e;){for(c=a,a=[];++f<e;)c&&c[f].run();f=-1,e=a.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function A(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new A(t,e)),1!==a.length||l||u(h)},A.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,n){var r=t.call(this,e,e.scene,n)||this;return r.view=e,e.addToScene(r),r}return i(e,t),e}(n(6).AbstractSceneLayer);e.CustomLayer=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),i=function(){function t(t,e,n){this.view=t,this.scene=e,this.sceneGroup=this.view.createSceneGroup(),this._visible=!1,this.signalConnections=new r.SignalConnections,this.visible=!n||void 0===n.visible||!!n.visible}return t.prototype.onDestroy=function(){this.signalConnections.disconnectAll()},t.prototype.onBeforeRender=function(t){},t.prototype.onBeforeRenderViewport=function(t){this.sceneGroup.visible=this.isVisibleInViewport(t)},t.prototype.onAfterRender=function(t){},t.prototype.onAfterRenderViewport=function(t){},t.prototype.onTransitionStart=function(t){},t.prototype.onTransitionEnd=function(t){},t.prototype.onCameraMoveEnd=function(t){},t.prototype.onViewportCameraMoveEnd=function(t,e){},t.prototype.onKeyDown=function(t){return!1},t.prototype.onKeyUp=function(t){return!1},t.prototype.onClick=function(t){return!1},t.prototype.onDoubleClick=function(t){return!1},t.prototype.onHold=function(t){return!1},t.prototype.onMouseMove=function(t){},t.prototype.onMouseWheel=function(t,e){return!1},t.prototype.onContextMenu=function(t){},t.prototype.isVisibleInViewport=function(t){return this._visible&&(!this._targetViewport||this._targetViewport===t)},t.prototype.trackSignal=function(t){var e=this;return{connect:function(n,r){var i=t.connect(n,r);return e.signalConnections.add(i),i}}},Object.defineProperty(t.prototype,"targetViewport",{get:function(){return this._targetViewport},set:function(t){this._targetViewport=t,this.view.invalidateScene()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this._visible},set:function(t){if(t&&!this._visible)this.scene.add(this.sceneGroup);else{if(t||!this._visible)return;this.scene.remove(this.sceneGroup)}this._visible=t,this.visibilityChanged(),this.view.invalidateScene()},enumerable:!0,configurable:!0}),t.prototype.visibilityChanged=function(){},t}();e.AbstractSceneLayer=i},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,n){void 0===t&&(t=null),void 0===e&&(e=null),void 0===n&&(n=0),this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=t||this,this.next=e||this,this.order=n}return t.prototype.isEnabled=function(){return this.enabled&&!this.newLink},t.prototype.setEnabled=function(t){this.enabled=t},t.prototype.unlink=function(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next},t.prototype.insert=function(e,n){for(var r=this.prev;r!==this&&!(r.order<=n);)r=r.prev;var i=new t(r,r.next,n);return i.callback=e,r.next=i,i.next.prev=i,i},t}(),s=function(){function t(t,e){this.link=e}return t.prototype.disconnect=function(){return null!==this.link&&(this.link.unlink(),this.link=null,!0)},Object.defineProperty(t.prototype,"enabled",{get:function(){return null!==this.link&&this.link.isEnabled()},set:function(t){this.link&&this.link.setEnabled(t)},enumerable:!0,configurable:!0}),t}(),u=function(){function t(){this.list=[]}return t.prototype.add=function(t){this.list.push(t)},t.prototype.disconnectAll=function(){for(var t=0,e=this.list;t<e.length;t++){e[t].disconnect()}this.list=[]},t}();e.SignalConnections=u;var c=function(){function t(){this.head=new o,this.hasNewLinks=!1,this.emitDepth=0,this.emit=this.emitInternal.bind(this)}return t.prototype.connect=function(t,e){void 0===e&&(e=0);var n=this.head.insert(t,e);return this.emitDepth>0&&(this.hasNewLinks=!0,n.newLink=!0),new s(this.head,n)},t.prototype.disconnect=function(t){for(var e=this.head.next;e!==this.head;e=e.next)if(e.callback===t)return e.unlink(),!0;return!1},t.prototype.disconnectAll=function(){for(;this.head.next!==this.head;)this.head.next.unlink()},t.prototype.emitInternal=function(){this.emitDepth++;for(var t=this.head.next;t!==this.head;t=t.next)t.isEnabled()&&t.callback&&t.callback.apply(null,arguments);this.emitDepth--,this.unsetNewLink()},t.prototype.emitCollecting=function(t,e){this.emitDepth++;for(var n=this.head.next;n!==this.head;n=n.next)if(n.isEnabled()&&n.callback){var r=n.callback.apply(null,e);if(!t.handleResult(r))break}this.emitDepth--,this.unsetNewLink()},t.prototype.unsetNewLink=function(){if(this.hasNewLinks&&0==this.emitDepth){for(var t=this.head.next;t!==this.head;t=t.next)t.newLink=!1;this.hasNewLinks=!1}},t}();e.Signal=c;var a=function(){return function(t){var e=this;this.emit=function(){t.emitCollecting(e,arguments)}}}();e.Collector=a;var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.handleResult=function(t){return this.result=t,!0},e.prototype.getResult=function(){return this.result},e.prototype.reset=function(){delete this.result},e}(a);e.CollectorLast=l;var f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.result=!1,e}return i(e,t),e.prototype.handleResult=function(t){return this.result=t,!!this.result},e.prototype.getResult=function(){return this.result},e.prototype.reset=function(){this.result=!1},e}(a);e.CollectorUntil0=f;var p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.result=!1,e}return i(e,t),e.prototype.handleResult=function(t){return this.result=t,!this.result},e.prototype.getResult=function(){return this.result},e.prototype.reset=function(){this.result=!1},e}(a);e.CollectorWhile0=p;var h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.result=[],e}return i(e,t),e.prototype.handleResult=function(t){return this.result.push(t),!0},e.prototype.getResult=function(){return this.result},e.prototype.reset=function(){this.result.length=0},e}(a);e.CollectorArray=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.BUILDING="BUILDING",t.FLOOR="FLOOR",t.ROOM="ROOM",t.FREE_SPACE_NAVIGATION="FREE_SPACE_NAVIGATION",t.CUSTOM="CUSTOM"}(e.SiteModelType||(e.SiteModelType={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.ROUTING="routing",t.ANALYST="analyst",t.JAVASCRIPT_API="api",t.USER_MANAGEMENT="user_management"}(e.LicenseFeatureType||(e.LicenseFeatureType={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.VIEW=0]="VIEW",t[t.SEARCH=1]="SEARCH",t[t.SITE_MODEL_DETAILS=2]="SITE_MODEL_DETAILS"}(e.PoiClickOrigin||(e.PoiClickOrigin={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.NoBlending=0]="NoBlending",t[t.NormalBlending=1]="NormalBlending",t[t.AdditiveBlending=2]="AdditiveBlending",t[t.SubtractiveBlending=3]="SubtractiveBlending",t[t.MultiplyBlending=4]="MultiplyBlending"}(e.BlendingMode||(e.BlendingMode={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.ENGLISH="en",t.GERMAN="de",t.POLISH="pl",t.CHINESE_TRADITIONAL="zh_tw",t.CHINESE="zh",t.JAPANESE="ja",t.CZECH="cs",t.HUNGARIAN="hu",t.TURKISH="tr"}(e.UiLanguage||(e.UiLanguage={})),function(t){t.COMMA=",",t.POINT="."}(e.DecimalSeparators||(e.DecimalSeparators={})),function(t){t.ABKHAZ="ab",t.AFAR="aa",t.AFRIKAANS="af",t.AKAN="ak",t.ALBANIAN="sq",t.AMHARIC="am",t.ARABIC="ar",t.ARAGONESE="an",t.ARMENIAN="hy",t.ASSAMESE="as",t.AVARIC="av",t.AVESTAN="ae",t.AYMARA="ay",t.AZERBAIJANI="az",t.BAMBARA="bm",t.BASHKIR="ba",t.BASQUE="eu",t.BELARUSIAN="be",t.BENGALI="bn",t.BIHARI="bh",t.BISLAMA="bi",t.BOSNIAN="bs",t.BRETON="br",t.BULGARIAN="bg",t.BURMESE="my",t.CATALAN="ca",t.VALENCIAN="ca",t.CHAMORRO="ch",t.CHECHEN="ce",t.CHICHEWA="ny",t.CHEWA="ny",t.NYANJA="ny",t.CHINESE="zh",t.CHINESE_TRADITIONAL="zh_tw",t.CHUVASH="cv",t.CORNISH="kw",t.CORSICAN="co",t.CREE="cr",t.CROATIAN="hr",t.CZECH="cs",t.DANISH="da",t.DIVEHI="dv",t.DHIVEHI="dv",t.MALDIVIAN="dv",t.DUTCH="nl",t.ENGLISH="en",t.ESPERANTO="eo",t.ESTONIAN="et",t.EWE="ee",t.FAROESE="fo",t.FIJIAN="fj",t.FINNISH="fi",t.FRENCH="fr",t.FULA="ff",t.FULAH="ff",t.PULAAR="ff",t.PULAR="ff",t.GALICIAN="gl",t.GEORGIAN="ka",t.GERMAN="de",t.GREEK_MODERN="el",t["GUARANÍ"]="gn",t.GUJARATI="gu",t.HAITIAN="ht",t.HAITIAN_CREOLE="ht",t.HAUSA="ha",t.HEBREW_MODERN="he",t.HERERO="hz",t.HINDI="hi",t.HIRI_MOTU="ho",t.HUNGARIAN="hu",t.INTERLINGUA="ia",t.INDONESIAN="id",t.INTERLINGUE="ie",t.IRISH="ga",t.IGBO="ig",t.INUPIAQ="ik",t.IDO="io",t.ICELANDIC="is",t.ITALIAN="it",t.INUKTITUT="iu",t.JAPANESE="ja",t.JAVANESE="jv",t.KALAALLISUT="kl",t.GREENLANDIC="kl",t.KANNADA="kn",t.KANURI="kr",t.KASHMIRI="ks",t.KAZAKH="kk",t.KHMER="km",t.KIKUYU="ki",t.GIKUYU="ki",t.KINYARWANDA="rw",t.KIRGHIZ="ky",t.KYRGYZ="ky",t.KOMI="kv",t.KONGO="kg",t.KOREAN="ko",t.KURDISH="ku",t.KWANYAMA="kj",t.KUANYAMA="kj",t.LATIN="la",t.LUXEMBOURGISH="lb",t.LETZEBURGESCH="lb",t.LUGANDA="lg",t.LIMBURGISH="li",t.LIMBURGAN="li",t.LIMBURGER="li",t.LINGALA="ln",t.LAO="lo",t.LITHUANIAN="lt",t.LUBA_KATANGA="lu",t.LATVIAN="lv",t.MANX="gv",t.MACEDONIAN="mk",t.MALAGASY="mg",t.MALAY="ms",t.MALAYALAM="ml",t.MALTESE="mt",t.MAORI="mi",t.MARATHI="mr",t.MARSHALLESE="mh",t.MONGOLIAN="mn",t.NAURU="na",t.NAVAJO="nv",t.NAVAHO="nv",t.NORWEGIAN_BOKMAL="nb",t.NDEBELE_NORTH="nd",t.NEPALI="ne",t.NDONGA="ng",t.NORWEGIAN_NYNORSK="nn",t.NORWEGIAN="no",t.NUOSU="ii",t.NDEBELE_SOUTH="nr",t.OCCITAN="oc",t.OJIBWE="oj",t.OJIBWA="oj",t.SLAVONIC_OLD_CHURCH="cu",t.OROMO="om",t.ORIYA="or",t.OSSETIAN="os",t.OSSETIC="os",t.PANJABI="pa",t.PUNJABI="pa",t.PALI="pi",t.PERSIAN="fa",t.POLISH="pl",t.PASHTO="ps",t.PUSHTO="ps",t.PORTUGUESE="pt",t.QUECHUA="qu",t.ROMANSH="rm",t.KIRUNDI="rn",t.ROMANIAN="ro",t.MOLDAVIAN="ro",t.MOLDOVAN="ro",t.RUSSIAN="ru",t.SANSKRIT="sa",t.SARDINIAN="sc",t.SINDHI="sd",t.SAMI_NORTHERN="se",t.SAMOAN="sm",t.SANGO="sg",t.SERBIAN="sr",t.SCOTTISH_GAELIC="gd",t.GAELIC="gd",t.SHONA="sn",t.SINHALA="si",t.SINHALESE="si",t.SLOVAK="sk",t.SLOVENE="sl",t.SOMALI="so",t.SOTHO_SOUTHERN="st",t.SPANISH="es",t.CASTILIAN="es",t.SUNDANESE="su",t.SWAHILI="sw",t.SWATI="ss",t.SWEDISH="sv",t.TAMIL="ta",t.TELUGU="te",t.TAJIK="tg",t.THAI="th",t.TIGRINYA="ti",t.TIBETAN_STANDARD="bo",t.TIBETAN_CENTRAL="bo",t.TURKMEN="tk",t.TAGALOG="tl",t.TSWANA="tn",t.TONGA="to",t.TURKISH="tr",t.TSONGA="ts",t.TATAR="tt",t.TWI="tw",t.TAHITIAN="ty",t.UIGHUR="ug",t.UYGHUR="ug",t.UKRAINIAN="uk",t.URDU="ur",t.UZBEK="uz",t.VENDA="ve",t.VIETNAMESE="vi",t.VOLAPUEK="vo",t.WALLOON="wa",t.WELSH="cy",t.WOLOF="wo",t.FRISIAN_WESTERN="fy",t.XHOSA="xh",t.YIDDISH="yi",t.YORUBA="yo",t.ZHUANG="za",t.CHUANG="za"}(e.DataLanguage||(e.DataLanguage={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.ENTER_BUILDING="walk_inside",t.EXIT_BUILDING="walk_outside",t.ENTER_ELEVATOR_UP="enter_elevator_up",t.ENTER_ELEVATOR_DOWN="enter_elevator_down",t.EXIT_ELEVATOR="exit_elevator",t.ENTER_STAIRS_UP="enter_stairs_up",t.ENTER_STAIRS_DOWN="enter_stairs_down",t.EXIT_STAIRS="exit_stairs",t.CHANGE_FLOOR_UP="change_floor_up",t.CHANGE_FLOOR_DOWN="change_floor_down",t.START="start",t.END="end",t.EDGE="edge",t.SOURCE_PROJECTION="source_projection_to_navgraph",t.DESTINATION_PROJECTION="destination_projection_to_navgraph"}(e.InstructionType||(e.InstructionType={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.MAP="map",t.PANORAMA="panorama"}(e.ViewType||(e.ViewType={}))}])});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/index.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/index.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body {\n  margin: 0; }\n\nindoorviewer {\n  height: 100vh; }\n\n.vTag-modal {\n  display: none;\n  position: fixed;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n\n.issue-modal-bg {\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.text-style {\n  width: 100%;\n  resize: none; }\n\n.issue-modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; }\n\n.detail-content {\n  background-color: #fefefe;\n  margin: 10px;\n  padding-left: 20px;\n  padding-bottom: 5px;\n  border: 0px solid #888;\n  height: 100%;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n\n.issue-icon {\n  width: 32px;\n  height: 32px; }\n\n.heading {\n  padding-left: 15px; }\n\nspan.ng-binding {\n  display: none; }\n", "", {"version":3,"sources":["/Users/omid/codes/navvis/app/src/src/index.scss"],"names":[],"mappings":"AAAA;EACC,UAAS,EACT;;AAED;EACC,cAAa,EACb;;AAED;EACC,cAAa;EACb,gBAAe;EACf,mBAAkB;EAClB,QAAO;EACP,OAAM;EACN,YAAW;EACX,aAAY;EACZ,eAAc,EAEd;;AAED;EACC,wBAA8B;EAC9B,qCAAoC,EACpC;;AAED;EACC,YAAW;EACX,aAAY,EACZ;;AAED;EACC,0BAAyB;EACzB,aAAY;EACZ,cAAa;EACb,uBAAsB;EACtB,WAAU,EACV;;AAED;EACC,0BAAyB;EACzB,aAAY;EACZ,mBAAkB;EAClB,oBAAmB;EACnB,uBAAsB;EACtB,aAAY;EACZ,+BAA8B;EAC9B,gCAA+B,EAC/B;;AAED;EACC,eAAc;EACd,aAAY;EACZ,gBAAe;EACf,kBAAiB,EACjB;;AAED;;EAEC,YAAW;EACX,sBAAqB;EACrB,gBAAe,EACf;;AAED;EACC,YAAU;EACV,aAAW,EACX;;AAED;EACC,mBAAiB,EACjB;;AAGD;EACI,cAAa,EAChB","file":"index.scss","sourcesContent":["body {\n\tmargin: 0;\n}\n\nindoorviewer {\n\theight: 100vh;\n}\n\n.vTag-modal {\n\tdisplay: none;\n\tposition: fixed;\n\tpadding-top: 100px;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: auto;\n\n}\n\n.issue-modal-bg {\n\tbackground-color: rgb(0, 0, 0);\n\tbackground-color: rgba(0, 0, 0, 0.4);\n}\n\n.text-style {\n\twidth: 100%;\n\tresize: none;\n}\n\n.issue-modal-content {\n\tbackground-color: #fefefe;\n\tmargin: auto;\n\tpadding: 20px;\n\tborder: 1px solid #888;\n\twidth: 80%;\n}\n\n.detail-content {\n\tbackground-color: #fefefe;\n\tmargin: 10px;\n\tpadding-left: 20px;\n\tpadding-bottom: 5px;\n\tborder: 0px solid #888;\n\theight: 100%;\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n}\n\n.close {\n\tcolor: #aaaaaa;\n\tfloat: right;\n\tfont-size: 28px;\n\tfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n\tcolor: #000;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.issue-icon {\n\twidth:32px;\n\theight:32px;\n}\n\n.heading {\n\tpadding-left:15px;\n}\n\n\nspan.ng-binding {\n    display: none;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Dialogs/VTAGDialog.ts":
/*!***********************************!*\
  !*** ./src/Dialogs/VTAGDialog.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VTAGDialog = /** @class */ (function () {
    function VTAGDialog() {
        var _this = this;
        this.title = "";
        this.url = "";
        this.htmlModalElement = document.getElementById("vTage-entry");
        var span = document.getElementById("vTage-modal-close");
        span.onclick = function () { return _this.hideDialog(); };
        var saveBtn = document.getElementById("save");
        saveBtn.onclick = function () { return _this.saveVTag(); };
        this.htmlModalElement.onclick = function () {
            if (event.target === _this.htmlModalElement) {
                _this.hideDialog();
            }
        };
    }
    VTAGDialog.prototype.showDialog = function () {
        document.getElementById("title").value = this.title;
        document.getElementById("URL").value =
            this.url;
        this.htmlModalElement.style.display = "block";
    };
    VTAGDialog.prototype.saveVTag = function () {
        var title = document.getElementById("title").value;
        var url = document.getElementById("URL").value;
        this.completionHandler(title, url);
        this.hideDialog();
    };
    VTAGDialog.prototype.hideDialog = function () {
        document.getElementById("title").value = "";
        document.getElementById("URL").value = "";
        this.htmlModalElement.style.display = "none";
    };
    return VTAGDialog;
}());
exports.default = VTAGDialog;


/***/ }),

/***/ "./src/Layers/ContextMenu.ts":
/*!***********************************!*\
  !*** ./src/Layers/ContextMenu.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var indoorviewer_1 = __webpack_require__(/*! @navvis/indoorviewer */ "./node_modules/@navvis/indoorviewer/app.api.js");
var VTAGDialog_1 = __webpack_require__(/*! ../Dialogs/VTAGDialog */ "./src/Dialogs/VTAGDialog.ts");
var VTagContextMenuEntryLayer = /** @class */ (function (_super) {
    __extends(VTagContextMenuEntryLayer, _super);
    function VTagContextMenuEntryLayer(iv, mainView) {
        var _this = _super.call(this, mainView) || this;
        _this.LOCALE = "en";
        _this.ivApi = iv;
        _this.fetchPoiType("VTAG").then(function (poiType) {
            _this.poiType = poiType;
        });
        return _this;
    }
    VTagContextMenuEntryLayer.prototype.onContextMenu = function (pos) {
        var _this = this;
        return [{
                name: "add VTage",
                icon: "fa-globe",
                callback: function () {
                    _this.createVTAG();
                }
            }
        ];
    };
    VTagContextMenuEntryLayer.prototype.createVTAG = function () {
        var _this = this;
        var dialog = new VTAGDialog_1.default();
        //Todo: Switch to new API implementation when it is available.
        var currentCursorPosition = this.ivApi.legacyApi.getCurrentCursorPosition();
        dialog.completionHandler = function (title, url) {
            _this.createPoi(title, url, currentCursorPosition)
                .catch(function (e) { return console.error(e); });
        };
        dialog.showDialog();
    };
    VTagContextMenuEntryLayer.prototype.createPoi = function (title, description, cursorPosition) {
        var _this = this;
        var poi = this.ivApi.poi.repository.create();
        poi.titles[this.LOCALE] = title;
        poi.descriptions[this.LOCALE] = "<iframe frameborder=\"0\" src=\"" + description + "\" style=\"display:block; width:100%; height:100vh;\"></iframe>";
        poi.icon = undefined;
        var localToGlobal = this.ivApi.transform.service.localToGlobal;
        poi.globalLocation = localToGlobal.transform(cursorPosition.location);
        poi.globalOrientation =
            localToGlobal.transformQuaternion(cursorPosition.orientation);
        poi.datasetLocation = cursorPosition.datasetLocation;
        poi.datasetOrientation = cursorPosition.datasetOrientation;
        poi.orientation = cursorPosition.orientation;
        poi.poiType = this.poiType;
        return this.ivApi.poi.repository.save(poi).then(function (pois) {
            var savedPoi = pois[0];
            _this.ivApi.poi.service.goToPoi(savedPoi).catch(function (e) { return console.error(e); });
            _this.completionHandler();
            return savedPoi;
        });
    };
    VTagContextMenuEntryLayer.prototype.fetchPoiType = function (name) {
        var _this = this;
        return this.ivApi.poi.poiTypeRepository.findAll().then(function (poiTypes) {
            var filteredPois = poiTypes.filter(function (poiType) { return poiType.name[_this.LOCALE] === name; });
            return filteredPois[0];
        });
    };
    return VTagContextMenuEntryLayer;
}(indoorviewer_1.CustomLayer));
exports.VTagContextMenuEntryLayer = VTagContextMenuEntryLayer;


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader?sourceMap!../node_modules/sass-loader/dist/cjs.js?sourceMap!./index.scss */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
var indoorviewer_1 = __webpack_require__(/*! @navvis/indoorviewer */ "./node_modules/@navvis/indoorviewer/app.api.js");
var ContextMenu_1 = __webpack_require__(/*! ./Layers/ContextMenu */ "./src/Layers/ContextMenu.ts");
var TestApp = /** @class */ (function () {
    function TestApp() {
        var _this = this;
        indoorviewer_1.getApi("https://safavieh.iv.navvis.com/")
            .then(function (iv) {
            _this.ivApi = iv;
            new ContextMenu_1.VTagContextMenuEntryLayer(_this.ivApi, _this.ivApi.view.mainView);
        });
    }
    return TestApp;
}());
window.TestApp = new TestApp();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BuYXZ2aXMvaW5kb29ydmlld2VyL2FwcC5hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9EaWFsb2dzL1ZUQUdEaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheWVycy9Db250ZXh0TWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2Nzcz9iNDY0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtR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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7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QUNwRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQztBQUVLLE1BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuSXZBcGk9ZSgpOnQuSXZBcGk9ZSgpfSh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIGk9ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsbiksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgaSBpbiB0KW4uZChyLGksZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxpKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxmdW5jdGlvbih0KXt0LklEPVwiSURcIix0LklNUE9SVEFOQ0U9XCJJTVBPUlRBTkNFXCJ9KGUuUG9pU29ydGFibGVGaWVsZHx8KGUuUG9pU29ydGFibGVGaWVsZD17fSkpLGZ1bmN0aW9uKHQpe3QuQVNDRU5ESU5HPVwiQVNDXCIsdC5ERVNDRU5ESU5HPVwiREVTQ1wifShlLlNvcnRPcmRlcnx8KGUuU29ydE9yZGVyPXt9KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxuKDIpLnBvbHlmaWxsKCk7dmFyIHI9big1KTtlLkN1c3RvbUxheWVyPXIuQ3VzdG9tTGF5ZXI7dmFyIGk9big4KTtlLlNpdGVNb2RlbFR5cGU9aS5TaXRlTW9kZWxUeXBlO3ZhciBvPW4oMCk7ZS5Qb2lTb3J0YWJsZUZpZWxkPW8uUG9pU29ydGFibGVGaWVsZDt2YXIgcz1uKDApO2UuU29ydE9yZGVyPXMuU29ydE9yZGVyO3ZhciB1PW4oOSk7ZS5MaWNlbnNlRmVhdHVyZVR5cGU9dS5MaWNlbnNlRmVhdHVyZVR5cGU7dmFyIGM9bigxMCk7ZS5Qb2lDbGlja09yaWdpbj1jLlBvaUNsaWNrT3JpZ2luO3ZhciBhPW4oMTEpO2UuQmxlbmRpbmdNb2RlPWEuQmxlbmRpbmdNb2RlO3ZhciBsPW4oMTIpO2UuVWlMYW5ndWFnZT1sLlVpTGFuZ3VhZ2UsZS5EYXRhTGFuZ3VhZ2U9bC5EYXRhTGFuZ3VhZ2UsZS5EZWNpbWFsU2VwYXJhdG9ycz1sLkRlY2ltYWxTZXBhcmF0b3JzO3ZhciBmPW4oMTMpO2UuSW5zdHJ1Y3Rpb25UeXBlPWYuSW5zdHJ1Y3Rpb25UeXBlO3ZhciBwPW4oMTQpO2UuVmlld1R5cGU9cC5WaWV3VHlwZSxlLmdldEFwaT1mdW5jdGlvbih0LGUpe2lmKHZvaWQgMD09PWUmJihlPXt9KSxlLmhhc093blByb3BlcnR5KFwiYmFzZV91cmxcIikpdGhyb3cgRXJyb3IoXCInYmFzZV91cmwnIGNvbmZpZ3VyYXRpb24gcHJvcGVydHkgaXMgdW5uZWNlc3Nhcnkgd2hlbiB1c2luZyBnZXRBcGkoKS4gUGxlYXNlIHJlbW92ZS5cIik7aWYoZS5oYXNPd25Qcm9wZXJ0eShcIm9uTG9hZENvbXBsZXRlXCIpKXRocm93IEVycm9yKFwiJ29uTG9hZENvbXBsZXRlJyBjb25maWd1cmF0aW9uIHByb3BlcnR5IGlzIHVubmVjZXNzYXJ5IHdoZW4gdXNpbmcgZ2V0QXBpKCkuIFBsZWFzZSB1c2UgUHJvbWlzZS50aGVuKCkgaW5zdGVhZC5cIik7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4scil7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpLnNyYz10KyhcIi9cIj09PXQuc2xpY2UoLTEpP1wiXCI6XCIvXCIpK1wiSW5kb29yVmlld2VyQVBJLmpzXCIsaS5vbmVycm9yPWZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJGZXRjaGluZyBcIitpLnNyYytcIiBmYWlsZWQuXCIsdCkscih0KX0saS5vbmxvYWQ9ZnVuY3Rpb24oKXt3aW5kb3cuSVYubG9hZGVkKGZ1bmN0aW9uKCl7ZT1PYmplY3QuYXNzaWduKGUse2Jhc2VfdXJsOnQsb25Mb2FkQ29tcGxldGU6ZnVuY3Rpb24oKXt3aW5kb3cuSVYuaW5qZWN0b3IuZ2V0KFwiTGljZW5zZVNlcnZpY2VcIikuaW5pdGlhbGl6ZWQudGhlbihmdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5JVi5pbmplY3Rvci5nZXQoXCJBcGlTZXJ2aWNlXCIpO24odCl9KS5jYXRjaChmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiTG9hZGluZyB0aGUgSW5kb29yVmlld2VyIEFQSSBmYWlsZWQuXCIsdCkscih0KX0pfX0pLG5ldyB3aW5kb3cuSW5kb29yVmlld2VyKGUpfSl9LGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaSl9KX19LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSxuKXtcbi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zdGVmYW5wZW5uZXIvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgdjQuMi42Kzk4NjlhNGJjXG4gKi92YXIgcjtyPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fXZhciByPUFycmF5LmlzQXJyYXk/QXJyYXkuaXNBcnJheTpmdW5jdGlvbih0KXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9LGk9MCxvPXZvaWQgMCxzPXZvaWQgMCx1PWZ1bmN0aW9uKHQsZSl7QVtpXT10LEFbaSsxXT1lLDI9PT0oaSs9MikmJihzP3MoZCk6RSgpKX0sYz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDAsYT1jfHx7fSxsPWEuTXV0YXRpb25PYnNlcnZlcnx8YS5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLGY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGYmJnZvaWQgMCE9PWUmJlwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChlKSxwPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OENsYW1wZWRBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGltcG9ydFNjcmlwdHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBNZXNzYWdlQ2hhbm5lbDtmdW5jdGlvbiBoKCl7dmFyIHQ9c2V0VGltZW91dDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdChkLDEpfX12YXIgQT1uZXcgQXJyYXkoMWUzKTtmdW5jdGlvbiBkKCl7Zm9yKHZhciB0PTA7dDxpO3QrPTIpeygwLEFbdF0pKEFbdCsxXSksQVt0XT12b2lkIDAsQVt0KzFdPXZvaWQgMH1pPTB9dmFyIEksdix5LE4sRT12b2lkIDA7ZnVuY3Rpb24gXyh0LGUpe3ZhciBuPXRoaXMscj1uZXcgdGhpcy5jb25zdHJ1Y3RvcihUKTt2b2lkIDA9PT1yW09dJiZCKHIpO3ZhciBpPW4uX3N0YXRlO2lmKGkpe3ZhciBvPWFyZ3VtZW50c1tpLTFdO3UoZnVuY3Rpb24oKXtyZXR1cm4gayhpLHIsbyxuLl9yZXN1bHQpfSl9ZWxzZSBQKG4scix0LGUpO3JldHVybiByfWZ1bmN0aW9uIFModCl7aWYodCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQuY29uc3RydWN0b3I9PT10aGlzKXJldHVybiB0O3ZhciBlPW5ldyB0aGlzKFQpO3JldHVybiBDKGUsdCksZX1mP0U9ZnVuY3Rpb24oKXtyZXR1cm4gZS5uZXh0VGljayhkKX06bD8odj0wLHk9bmV3IGwoZCksTj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSx5Lm9ic2VydmUoTix7Y2hhcmFjdGVyRGF0YTohMH0pLEU9ZnVuY3Rpb24oKXtOLmRhdGE9dj0rK3YlMn0pOnA/KChJPW5ldyBNZXNzYWdlQ2hhbm5lbCkucG9ydDEub25tZXNzYWdlPWQsRT1mdW5jdGlvbigpe3JldHVybiBJLnBvcnQyLnBvc3RNZXNzYWdlKDApfSk6RT12b2lkIDA9PT1jP2Z1bmN0aW9uKCl7dHJ5e3ZhciB0PUZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKS5yZXF1aXJlKFwidmVydHhcIik7cmV0dXJuIHZvaWQgMCE9PShvPXQucnVuT25Mb29wfHx0LnJ1bk9uQ29udGV4dCk/ZnVuY3Rpb24oKXtvKGQpfTpoKCl9Y2F0Y2godCl7cmV0dXJuIGgoKX19KCk6aCgpO3ZhciBPPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKTtmdW5jdGlvbiBUKCl7fXZhciBnPXZvaWQgMCxiPTEsUj0yLEw9e2Vycm9yOm51bGx9O2Z1bmN0aW9uIHcodCl7dHJ5e3JldHVybiB0LnRoZW59Y2F0Y2godCl7cmV0dXJuIEwuZXJyb3I9dCxMfX1mdW5jdGlvbiBtKGUsbixyKXtuLmNvbnN0cnVjdG9yPT09ZS5jb25zdHJ1Y3RvciYmcj09PV8mJm4uY29uc3RydWN0b3IucmVzb2x2ZT09PVM/ZnVuY3Rpb24odCxlKXtlLl9zdGF0ZT09PWI/VSh0LGUuX3Jlc3VsdCk6ZS5fc3RhdGU9PT1SP0godCxlLl9yZXN1bHQpOlAoZSx2b2lkIDAsZnVuY3Rpb24oZSl7cmV0dXJuIEModCxlKX0sZnVuY3Rpb24oZSl7cmV0dXJuIEgodCxlKX0pfShlLG4pOnI9PT1MPyhIKGUsTC5lcnJvciksTC5lcnJvcj1udWxsKTp2b2lkIDA9PT1yP1UoZSxuKTp0KHIpP2Z1bmN0aW9uKHQsZSxuKXt1KGZ1bmN0aW9uKHQpe3ZhciByPSExLGk9ZnVuY3Rpb24odCxlLG4scil7dHJ5e3QuY2FsbChlLG4scil9Y2F0Y2godCl7cmV0dXJuIHR9fShuLGUsZnVuY3Rpb24obil7cnx8KHI9ITAsZSE9PW4/Qyh0LG4pOlUodCxuKSl9LGZ1bmN0aW9uKGUpe3J8fChyPSEwLEgodCxlKSl9LHQuX2xhYmVsKTshciYmaSYmKHI9ITAsSCh0LGkpKX0sdCl9KGUsbixyKTpVKGUsbil9ZnVuY3Rpb24gQyh0LGUpe3ZhciBuLHI7dD09PWU/SCh0LG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpKToocj10eXBlb2Yobj1lKSxudWxsPT09bnx8XCJvYmplY3RcIiE9PXImJlwiZnVuY3Rpb25cIiE9PXI/VSh0LGUpOm0odCxlLHcoZSkpKX1mdW5jdGlvbiBNKHQpe3QuX29uZXJyb3ImJnQuX29uZXJyb3IodC5fcmVzdWx0KSxEKHQpfWZ1bmN0aW9uIFUodCxlKXt0Ll9zdGF0ZT09PWcmJih0Ll9yZXN1bHQ9ZSx0Ll9zdGF0ZT1iLDAhPT10Ll9zdWJzY3JpYmVycy5sZW5ndGgmJnUoRCx0KSl9ZnVuY3Rpb24gSCh0LGUpe3QuX3N0YXRlPT09ZyYmKHQuX3N0YXRlPVIsdC5fcmVzdWx0PWUsdShNLHQpKX1mdW5jdGlvbiBQKHQsZSxuLHIpe3ZhciBpPXQuX3N1YnNjcmliZXJzLG89aS5sZW5ndGg7dC5fb25lcnJvcj1udWxsLGlbb109ZSxpW28rYl09bixpW28rUl09ciwwPT09byYmdC5fc3RhdGUmJnUoRCx0KX1mdW5jdGlvbiBEKHQpe3ZhciBlPXQuX3N1YnNjcmliZXJzLG49dC5fc3RhdGU7aWYoMCE9PWUubGVuZ3RoKXtmb3IodmFyIHI9dm9pZCAwLGk9dm9pZCAwLG89dC5fcmVzdWx0LHM9MDtzPGUubGVuZ3RoO3MrPTMpcj1lW3NdLGk9ZVtzK25dLHI/ayhuLHIsaSxvKTppKG8pO3QuX3N1YnNjcmliZXJzLmxlbmd0aD0wfX1mdW5jdGlvbiBrKGUsbixyLGkpe3ZhciBvPXQocikscz12b2lkIDAsdT12b2lkIDAsYz12b2lkIDAsYT12b2lkIDA7aWYobyl7aWYoKHM9ZnVuY3Rpb24odCxlKXt0cnl7cmV0dXJuIHQoZSl9Y2F0Y2godCl7cmV0dXJuIEwuZXJyb3I9dCxMfX0ocixpKSk9PT1MPyhhPSEwLHU9cy5lcnJvcixzLmVycm9yPW51bGwpOmM9ITAsbj09PXMpcmV0dXJuIHZvaWQgSChuLG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuXCIpKX1lbHNlIHM9aSxjPSEwO24uX3N0YXRlIT09Z3x8KG8mJmM/QyhuLHMpOmE/SChuLHUpOmU9PT1iP1UobixzKTplPT09UiYmSChuLHMpKX12YXIgRz0wO2Z1bmN0aW9uIEIodCl7dFtPXT1HKyssdC5fc3RhdGU9dm9pZCAwLHQuX3Jlc3VsdD12b2lkIDAsdC5fc3Vic2NyaWJlcnM9W119dmFyIGo9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dGhpcy5faW5zdGFuY2VDb25zdHJ1Y3Rvcj10LHRoaXMucHJvbWlzZT1uZXcgdChUKSx0aGlzLnByb21pc2VbT118fEIodGhpcy5wcm9taXNlKSxyKGUpPyh0aGlzLmxlbmd0aD1lLmxlbmd0aCx0aGlzLl9yZW1haW5pbmc9ZS5sZW5ndGgsdGhpcy5fcmVzdWx0PW5ldyBBcnJheSh0aGlzLmxlbmd0aCksMD09PXRoaXMubGVuZ3RoP1UodGhpcy5wcm9taXNlLHRoaXMuX3Jlc3VsdCk6KHRoaXMubGVuZ3RoPXRoaXMubGVuZ3RofHwwLHRoaXMuX2VudW1lcmF0ZShlKSwwPT09dGhpcy5fcmVtYWluaW5nJiZVKHRoaXMucHJvbWlzZSx0aGlzLl9yZXN1bHQpKSk6SCh0aGlzLnByb21pc2UsbmV3IEVycm9yKFwiQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5XCIpKX1yZXR1cm4gdC5wcm90b3R5cGUuX2VudW1lcmF0ZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDt0aGlzLl9zdGF0ZT09PWcmJmU8dC5sZW5ndGg7ZSsrKXRoaXMuX2VhY2hFbnRyeSh0W2VdLGUpfSx0LnByb3RvdHlwZS5fZWFjaEVudHJ5PWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcixyPW4ucmVzb2x2ZTtpZihyPT09Uyl7dmFyIGk9dyh0KTtpZihpPT09XyYmdC5fc3RhdGUhPT1nKXRoaXMuX3NldHRsZWRBdCh0Ll9zdGF0ZSxlLHQuX3Jlc3VsdCk7ZWxzZSBpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBpKXRoaXMuX3JlbWFpbmluZy0tLHRoaXMuX3Jlc3VsdFtlXT10O2Vsc2UgaWYobj09PVYpe3ZhciBvPW5ldyBuKFQpO20obyx0LGkpLHRoaXMuX3dpbGxTZXR0bGVBdChvLGUpfWVsc2UgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBuKGZ1bmN0aW9uKGUpe3JldHVybiBlKHQpfSksZSl9ZWxzZSB0aGlzLl93aWxsU2V0dGxlQXQocih0KSxlKX0sdC5wcm90b3R5cGUuX3NldHRsZWRBdD1mdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpcy5wcm9taXNlO3IuX3N0YXRlPT09ZyYmKHRoaXMuX3JlbWFpbmluZy0tLHQ9PT1SP0gocixuKTp0aGlzLl9yZXN1bHRbZV09biksMD09PXRoaXMuX3JlbWFpbmluZyYmVShyLHRoaXMuX3Jlc3VsdCl9LHQucHJvdG90eXBlLl93aWxsU2V0dGxlQXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzO1AodCx2b2lkIDAsZnVuY3Rpb24odCl7cmV0dXJuIG4uX3NldHRsZWRBdChiLGUsdCl9LGZ1bmN0aW9uKHQpe3JldHVybiBuLl9zZXR0bGVkQXQoUixlLHQpfSl9LHR9KCksVj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dGhpc1tPXT1HKyssdGhpcy5fcmVzdWx0PXRoaXMuX3N0YXRlPXZvaWQgMCx0aGlzLl9zdWJzY3JpYmVycz1bXSxUIT09dCYmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJmZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3JcIil9KCksdGhpcyBpbnN0YW5jZW9mIGU/ZnVuY3Rpb24odCxlKXt0cnl7ZShmdW5jdGlvbihlKXtDKHQsZSl9LGZ1bmN0aW9uKGUpe0godCxlKX0pfWNhdGNoKGUpe0godCxlKX19KHRoaXMsdCk6ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpfSgpKX1yZXR1cm4gZS5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfSxlLnByb3RvdHlwZS5maW5hbGx5PWZ1bmN0aW9uKGUpe3ZhciBuPXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHQoZSk/dGhpcy50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiBuLnJlc29sdmUoZSgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHR9KX0sZnVuY3Rpb24odCl7cmV0dXJuIG4ucmVzb2x2ZShlKCkpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyB0fSl9KTp0aGlzLnRoZW4oZSxlKX0sZX0oKTtyZXR1cm4gVi5wcm90b3R5cGUudGhlbj1fLFYuYWxsPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaih0aGlzLHQpLnByb21pc2V9LFYucmFjZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzO3JldHVybiByKHQpP25ldyBlKGZ1bmN0aW9uKG4scil7Zm9yKHZhciBpPXQubGVuZ3RoLG89MDtvPGk7bysrKWUucmVzb2x2ZSh0W29dKS50aGVuKG4scil9KTpuZXcgZShmdW5jdGlvbih0LGUpe3JldHVybiBlKG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuXCIpKX0pfSxWLnJlc29sdmU9UyxWLnJlamVjdD1mdW5jdGlvbih0KXt2YXIgZT1uZXcgdGhpcyhUKTtyZXR1cm4gSChlLHQpLGV9LFYuX3NldFNjaGVkdWxlcj1mdW5jdGlvbih0KXtzPXR9LFYuX3NldEFzYXA9ZnVuY3Rpb24odCl7dT10fSxWLl9hc2FwPXUsVi5wb2x5ZmlsbD1mdW5jdGlvbigpe3ZhciB0PXZvaWQgMDtpZih2b2lkIDAhPT1uKXQ9bjtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmKXQ9c2VsZjtlbHNlIHRyeXt0PUZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaCh0KXt0aHJvdyBuZXcgRXJyb3IoXCJwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnRcIil9dmFyIGU9dC5Qcm9taXNlO2lmKGUpe3ZhciByPW51bGw7dHJ5e3I9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUucmVzb2x2ZSgpKX1jYXRjaCh0KXt9aWYoXCJbb2JqZWN0IFByb21pc2VdXCI9PT1yJiYhZS5jYXN0KXJldHVybn10LlByb21pc2U9Vn0sVi5Qcm9taXNlPVYsVn0sdC5leHBvcnRzPXIoKX0pLmNhbGwodGhpcyxuKDMpLG4oNCkpfSxmdW5jdGlvbih0LGUpe3ZhciBuLHIsaT10LmV4cG9ydHM9e307ZnVuY3Rpb24gbygpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gcygpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiB1KHQpe2lmKG49PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KHQsMCk7aWYoKG49PT1vfHwhbikmJnNldFRpbWVvdXQpcmV0dXJuIG49c2V0VGltZW91dCxzZXRUaW1lb3V0KHQsMCk7dHJ5e3JldHVybiBuKHQsMCl9Y2F0Y2goZSl7dHJ5e3JldHVybiBuLmNhbGwobnVsbCx0LDApfWNhdGNoKGUpe3JldHVybiBuLmNhbGwodGhpcyx0LDApfX19IWZ1bmN0aW9uKCl7dHJ5e249XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0Om99Y2F0Y2godCl7bj1vfXRyeXtyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6c31jYXRjaCh0KXtyPXN9fSgpO3ZhciBjLGE9W10sbD0hMSxmPS0xO2Z1bmN0aW9uIHAoKXtsJiZjJiYobD0hMSxjLmxlbmd0aD9hPWMuY29uY2F0KGEpOmY9LTEsYS5sZW5ndGgmJmgoKSl9ZnVuY3Rpb24gaCgpe2lmKCFsKXt2YXIgdD11KHApO2w9ITA7Zm9yKHZhciBlPWEubGVuZ3RoO2U7KXtmb3IoYz1hLGE9W107KytmPGU7KWMmJmNbZl0ucnVuKCk7Zj0tMSxlPWEubGVuZ3RofWM9bnVsbCxsPSExLGZ1bmN0aW9uKHQpe2lmKHI9PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dCh0KTtpZigocj09PXN8fCFyKSYmY2xlYXJUaW1lb3V0KXJldHVybiByPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQodCk7dHJ5e3IodCl9Y2F0Y2goZSl7dHJ5e3JldHVybiByLmNhbGwobnVsbCx0KX1jYXRjaChlKXtyZXR1cm4gci5jYWxsKHRoaXMsdCl9fX0odCl9fWZ1bmN0aW9uIEEodCxlKXt0aGlzLmZ1bj10LHRoaXMuYXJyYXk9ZX1mdW5jdGlvbiBkKCl7fWkubmV4dFRpY2s9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspZVtuLTFdPWFyZ3VtZW50c1tuXTthLnB1c2gobmV3IEEodCxlKSksMSE9PWEubGVuZ3RofHxsfHx1KGgpfSxBLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxpLnRpdGxlPVwiYnJvd3NlclwiLGkuYnJvd3Nlcj0hMCxpLmVudj17fSxpLmFyZ3Y9W10saS52ZXJzaW9uPVwiXCIsaS52ZXJzaW9ucz17fSxpLm9uPWQsaS5hZGRMaXN0ZW5lcj1kLGkub25jZT1kLGkub2ZmPWQsaS5yZW1vdmVMaXN0ZW5lcj1kLGkucmVtb3ZlQWxsTGlzdGVuZXJzPWQsaS5lbWl0PWQsaS5wcmVwZW5kTGlzdGVuZXI9ZCxpLnByZXBlbmRPbmNlTGlzdGVuZXI9ZCxpLmxpc3RlbmVycz1mdW5jdGlvbih0KXtyZXR1cm5bXX0saS5iaW5kaW5nPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxpLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxpLmNoZGlyPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0saS51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24odCxlKXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaCh0KXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfXQuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsaT10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KHI9ZnVuY3Rpb24odCxlKXtyZXR1cm4ocj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSllLmhhc093blByb3BlcnR5KG4pJiYodFtuXT1lW25dKX0pKHQsZSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9dH1yKHQsZSksdC5wcm90b3R5cGU9bnVsbD09PWU/T2JqZWN0LmNyZWF0ZShlKToobi5wcm90b3R5cGU9ZS5wcm90b3R5cGUsbmV3IG4pfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLG4pe3ZhciByPXQuY2FsbCh0aGlzLGUsZS5zY2VuZSxuKXx8dGhpcztyZXR1cm4gci52aWV3PWUsZS5hZGRUb1NjZW5lKHIpLHJ9cmV0dXJuIGkoZSx0KSxlfShuKDYpLkFic3RyYWN0U2NlbmVMYXllcik7ZS5DdXN0b21MYXllcj1vfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9big3KSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsbil7dGhpcy52aWV3PXQsdGhpcy5zY2VuZT1lLHRoaXMuc2NlbmVHcm91cD10aGlzLnZpZXcuY3JlYXRlU2NlbmVHcm91cCgpLHRoaXMuX3Zpc2libGU9ITEsdGhpcy5zaWduYWxDb25uZWN0aW9ucz1uZXcgci5TaWduYWxDb25uZWN0aW9ucyx0aGlzLnZpc2libGU9IW58fHZvaWQgMD09PW4udmlzaWJsZXx8ISFuLnZpc2libGV9cmV0dXJuIHQucHJvdG90eXBlLm9uRGVzdHJveT1mdW5jdGlvbigpe3RoaXMuc2lnbmFsQ29ubmVjdGlvbnMuZGlzY29ubmVjdEFsbCgpfSx0LnByb3RvdHlwZS5vbkJlZm9yZVJlbmRlcj1mdW5jdGlvbih0KXt9LHQucHJvdG90eXBlLm9uQmVmb3JlUmVuZGVyVmlld3BvcnQ9ZnVuY3Rpb24odCl7dGhpcy5zY2VuZUdyb3VwLnZpc2libGU9dGhpcy5pc1Zpc2libGVJblZpZXdwb3J0KHQpfSx0LnByb3RvdHlwZS5vbkFmdGVyUmVuZGVyPWZ1bmN0aW9uKHQpe30sdC5wcm90b3R5cGUub25BZnRlclJlbmRlclZpZXdwb3J0PWZ1bmN0aW9uKHQpe30sdC5wcm90b3R5cGUub25UcmFuc2l0aW9uU3RhcnQ9ZnVuY3Rpb24odCl7fSx0LnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24odCl7fSx0LnByb3RvdHlwZS5vbkNhbWVyYU1vdmVFbmQ9ZnVuY3Rpb24odCl7fSx0LnByb3RvdHlwZS5vblZpZXdwb3J0Q2FtZXJhTW92ZUVuZD1mdW5jdGlvbih0LGUpe30sdC5wcm90b3R5cGUub25LZXlEb3duPWZ1bmN0aW9uKHQpe3JldHVybiExfSx0LnByb3RvdHlwZS5vbktleVVwPWZ1bmN0aW9uKHQpe3JldHVybiExfSx0LnByb3RvdHlwZS5vbkNsaWNrPWZ1bmN0aW9uKHQpe3JldHVybiExfSx0LnByb3RvdHlwZS5vbkRvdWJsZUNsaWNrPWZ1bmN0aW9uKHQpe3JldHVybiExfSx0LnByb3RvdHlwZS5vbkhvbGQ9ZnVuY3Rpb24odCl7cmV0dXJuITF9LHQucHJvdG90eXBlLm9uTW91c2VNb3ZlPWZ1bmN0aW9uKHQpe30sdC5wcm90b3R5cGUub25Nb3VzZVdoZWVsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuITF9LHQucHJvdG90eXBlLm9uQ29udGV4dE1lbnU9ZnVuY3Rpb24odCl7fSx0LnByb3RvdHlwZS5pc1Zpc2libGVJblZpZXdwb3J0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl92aXNpYmxlJiYoIXRoaXMuX3RhcmdldFZpZXdwb3J0fHx0aGlzLl90YXJnZXRWaWV3cG9ydD09PXQpfSx0LnByb3RvdHlwZS50cmFja1NpZ25hbD1mdW5jdGlvbih0KXt2YXIgZT10aGlzO3JldHVybntjb25uZWN0OmZ1bmN0aW9uKG4scil7dmFyIGk9dC5jb25uZWN0KG4scik7cmV0dXJuIGUuc2lnbmFsQ29ubmVjdGlvbnMuYWRkKGkpLGl9fX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwidGFyZ2V0Vmlld3BvcnRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RhcmdldFZpZXdwb3J0fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5fdGFyZ2V0Vmlld3BvcnQ9dCx0aGlzLnZpZXcuaW52YWxpZGF0ZVNjZW5lKCl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwidmlzaWJsZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdmlzaWJsZX0sc2V0OmZ1bmN0aW9uKHQpe2lmKHQmJiF0aGlzLl92aXNpYmxlKXRoaXMuc2NlbmUuYWRkKHRoaXMuc2NlbmVHcm91cCk7ZWxzZXtpZih0fHwhdGhpcy5fdmlzaWJsZSlyZXR1cm47dGhpcy5zY2VuZS5yZW1vdmUodGhpcy5zY2VuZUdyb3VwKX10aGlzLl92aXNpYmxlPXQsdGhpcy52aXNpYmlsaXR5Q2hhbmdlZCgpLHRoaXMudmlldy5pbnZhbGlkYXRlU2NlbmUoKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS52aXNpYmlsaXR5Q2hhbmdlZD1mdW5jdGlvbigpe30sdH0oKTtlLkFic3RyYWN0U2NlbmVMYXllcj1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsaT10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KHI9ZnVuY3Rpb24odCxlKXtyZXR1cm4ocj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSllLmhhc093blByb3BlcnR5KG4pJiYodFtuXT1lW25dKX0pKHQsZSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9dH1yKHQsZSksdC5wcm90b3R5cGU9bnVsbD09PWU/T2JqZWN0LmNyZWF0ZShlKToobi5wcm90b3R5cGU9ZS5wcm90b3R5cGUsbmV3IG4pfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxuKXt2b2lkIDA9PT10JiYodD1udWxsKSx2b2lkIDA9PT1lJiYoZT1udWxsKSx2b2lkIDA9PT1uJiYobj0wKSx0aGlzLmVuYWJsZWQ9ITAsdGhpcy5uZXdMaW5rPSExLHRoaXMuY2FsbGJhY2s9bnVsbCx0aGlzLnByZXY9dHx8dGhpcyx0aGlzLm5leHQ9ZXx8dGhpcyx0aGlzLm9yZGVyPW59cmV0dXJuIHQucHJvdG90eXBlLmlzRW5hYmxlZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuYWJsZWQmJiF0aGlzLm5ld0xpbmt9LHQucHJvdG90eXBlLnNldEVuYWJsZWQ9ZnVuY3Rpb24odCl7dGhpcy5lbmFibGVkPXR9LHQucHJvdG90eXBlLnVubGluaz1mdW5jdGlvbigpe3RoaXMuY2FsbGJhY2s9bnVsbCx0aGlzLm5leHQucHJldj10aGlzLnByZXYsdGhpcy5wcmV2Lm5leHQ9dGhpcy5uZXh0fSx0LnByb3RvdHlwZS5pbnNlcnQ9ZnVuY3Rpb24oZSxuKXtmb3IodmFyIHI9dGhpcy5wcmV2O3IhPT10aGlzJiYhKHIub3JkZXI8PW4pOylyPXIucHJldjt2YXIgaT1uZXcgdChyLHIubmV4dCxuKTtyZXR1cm4gaS5jYWxsYmFjaz1lLHIubmV4dD1pLGkubmV4dC5wcmV2PWksaX0sdH0oKSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe3RoaXMubGluaz1lfXJldHVybiB0LnByb3RvdHlwZS5kaXNjb25uZWN0PWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPT10aGlzLmxpbmsmJih0aGlzLmxpbmsudW5saW5rKCksdGhpcy5saW5rPW51bGwsITApfSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJlbmFibGVkXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBudWxsIT09dGhpcy5saW5rJiZ0aGlzLmxpbmsuaXNFbmFibGVkKCl9LHNldDpmdW5jdGlvbih0KXt0aGlzLmxpbmsmJnRoaXMubGluay5zZXRFbmFibGVkKHQpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHR9KCksdT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLmxpc3Q9W119cmV0dXJuIHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXt0aGlzLmxpc3QucHVzaCh0KX0sdC5wcm90b3R5cGUuZGlzY29ubmVjdEFsbD1mdW5jdGlvbigpe2Zvcih2YXIgdD0wLGU9dGhpcy5saXN0O3Q8ZS5sZW5ndGg7dCsrKXtlW3RdLmRpc2Nvbm5lY3QoKX10aGlzLmxpc3Q9W119LHR9KCk7ZS5TaWduYWxDb25uZWN0aW9ucz11O3ZhciBjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuaGVhZD1uZXcgbyx0aGlzLmhhc05ld0xpbmtzPSExLHRoaXMuZW1pdERlcHRoPTAsdGhpcy5lbWl0PXRoaXMuZW1pdEludGVybmFsLmJpbmQodGhpcyl9cmV0dXJuIHQucHJvdG90eXBlLmNvbm5lY3Q9ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgbj10aGlzLmhlYWQuaW5zZXJ0KHQsZSk7cmV0dXJuIHRoaXMuZW1pdERlcHRoPjAmJih0aGlzLmhhc05ld0xpbmtzPSEwLG4ubmV3TGluaz0hMCksbmV3IHModGhpcy5oZWFkLG4pfSx0LnByb3RvdHlwZS5kaXNjb25uZWN0PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLmhlYWQubmV4dDtlIT09dGhpcy5oZWFkO2U9ZS5uZXh0KWlmKGUuY2FsbGJhY2s9PT10KXJldHVybiBlLnVubGluaygpLCEwO3JldHVybiExfSx0LnByb3RvdHlwZS5kaXNjb25uZWN0QWxsPWZ1bmN0aW9uKCl7Zm9yKDt0aGlzLmhlYWQubmV4dCE9PXRoaXMuaGVhZDspdGhpcy5oZWFkLm5leHQudW5saW5rKCl9LHQucHJvdG90eXBlLmVtaXRJbnRlcm5hbD1mdW5jdGlvbigpe3RoaXMuZW1pdERlcHRoKys7Zm9yKHZhciB0PXRoaXMuaGVhZC5uZXh0O3QhPT10aGlzLmhlYWQ7dD10Lm5leHQpdC5pc0VuYWJsZWQoKSYmdC5jYWxsYmFjayYmdC5jYWxsYmFjay5hcHBseShudWxsLGFyZ3VtZW50cyk7dGhpcy5lbWl0RGVwdGgtLSx0aGlzLnVuc2V0TmV3TGluaygpfSx0LnByb3RvdHlwZS5lbWl0Q29sbGVjdGluZz1mdW5jdGlvbih0LGUpe3RoaXMuZW1pdERlcHRoKys7Zm9yKHZhciBuPXRoaXMuaGVhZC5uZXh0O24hPT10aGlzLmhlYWQ7bj1uLm5leHQpaWYobi5pc0VuYWJsZWQoKSYmbi5jYWxsYmFjayl7dmFyIHI9bi5jYWxsYmFjay5hcHBseShudWxsLGUpO2lmKCF0LmhhbmRsZVJlc3VsdChyKSlicmVha310aGlzLmVtaXREZXB0aC0tLHRoaXMudW5zZXROZXdMaW5rKCl9LHQucHJvdG90eXBlLnVuc2V0TmV3TGluaz1mdW5jdGlvbigpe2lmKHRoaXMuaGFzTmV3TGlua3MmJjA9PXRoaXMuZW1pdERlcHRoKXtmb3IodmFyIHQ9dGhpcy5oZWFkLm5leHQ7dCE9PXRoaXMuaGVhZDt0PXQubmV4dCl0Lm5ld0xpbms9ITE7dGhpcy5oYXNOZXdMaW5rcz0hMX19LHR9KCk7ZS5TaWduYWw9Yzt2YXIgYT1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT10aGlzO3RoaXMuZW1pdD1mdW5jdGlvbigpe3QuZW1pdENvbGxlY3RpbmcoZSxhcmd1bWVudHMpfX19KCk7ZS5Db2xsZWN0b3I9YTt2YXIgbD1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKCl7cmV0dXJuIG51bGwhPT10JiZ0LmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8dGhpc31yZXR1cm4gaShlLHQpLGUucHJvdG90eXBlLmhhbmRsZVJlc3VsdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5yZXN1bHQ9dCwhMH0sZS5wcm90b3R5cGUuZ2V0UmVzdWx0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVzdWx0fSxlLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe2RlbGV0ZSB0aGlzLnJlc3VsdH0sZX0oYSk7ZS5Db2xsZWN0b3JMYXN0PWw7dmFyIGY9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe3ZhciBlPW51bGwhPT10JiZ0LmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8dGhpcztyZXR1cm4gZS5yZXN1bHQ9ITEsZX1yZXR1cm4gaShlLHQpLGUucHJvdG90eXBlLmhhbmRsZVJlc3VsdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5yZXN1bHQ9dCwhIXRoaXMucmVzdWx0fSxlLnByb3RvdHlwZS5nZXRSZXN1bHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXN1bHR9LGUucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5yZXN1bHQ9ITF9LGV9KGEpO2UuQ29sbGVjdG9yVW50aWwwPWY7dmFyIHA9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe3ZhciBlPW51bGwhPT10JiZ0LmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8dGhpcztyZXR1cm4gZS5yZXN1bHQ9ITEsZX1yZXR1cm4gaShlLHQpLGUucHJvdG90eXBlLmhhbmRsZVJlc3VsdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5yZXN1bHQ9dCwhdGhpcy5yZXN1bHR9LGUucHJvdG90eXBlLmdldFJlc3VsdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnJlc3VsdH0sZS5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLnJlc3VsdD0hMX0sZX0oYSk7ZS5Db2xsZWN0b3JXaGlsZTA9cDt2YXIgaD1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKCl7dmFyIGU9bnVsbCE9PXQmJnQuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzO3JldHVybiBlLnJlc3VsdD1bXSxlfXJldHVybiBpKGUsdCksZS5wcm90b3R5cGUuaGFuZGxlUmVzdWx0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnJlc3VsdC5wdXNoKHQpLCEwfSxlLnByb3RvdHlwZS5nZXRSZXN1bHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXN1bHR9LGUucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5yZXN1bHQubGVuZ3RoPTB9LGV9KGEpO2UuQ29sbGVjdG9yQXJyYXk9aH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGZ1bmN0aW9uKHQpe3QuQlVJTERJTkc9XCJCVUlMRElOR1wiLHQuRkxPT1I9XCJGTE9PUlwiLHQuUk9PTT1cIlJPT01cIix0LkZSRUVfU1BBQ0VfTkFWSUdBVElPTj1cIkZSRUVfU1BBQ0VfTkFWSUdBVElPTlwiLHQuQ1VTVE9NPVwiQ1VTVE9NXCJ9KGUuU2l0ZU1vZGVsVHlwZXx8KGUuU2l0ZU1vZGVsVHlwZT17fSkpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZnVuY3Rpb24odCl7dC5ST1VUSU5HPVwicm91dGluZ1wiLHQuQU5BTFlTVD1cImFuYWx5c3RcIix0LkpBVkFTQ1JJUFRfQVBJPVwiYXBpXCIsdC5VU0VSX01BTkFHRU1FTlQ9XCJ1c2VyX21hbmFnZW1lbnRcIn0oZS5MaWNlbnNlRmVhdHVyZVR5cGV8fChlLkxpY2Vuc2VGZWF0dXJlVHlwZT17fSkpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZnVuY3Rpb24odCl7dFt0LlZJRVc9MF09XCJWSUVXXCIsdFt0LlNFQVJDSD0xXT1cIlNFQVJDSFwiLHRbdC5TSVRFX01PREVMX0RFVEFJTFM9Ml09XCJTSVRFX01PREVMX0RFVEFJTFNcIn0oZS5Qb2lDbGlja09yaWdpbnx8KGUuUG9pQ2xpY2tPcmlnaW49e30pKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGZ1bmN0aW9uKHQpe3RbdC5Ob0JsZW5kaW5nPTBdPVwiTm9CbGVuZGluZ1wiLHRbdC5Ob3JtYWxCbGVuZGluZz0xXT1cIk5vcm1hbEJsZW5kaW5nXCIsdFt0LkFkZGl0aXZlQmxlbmRpbmc9Ml09XCJBZGRpdGl2ZUJsZW5kaW5nXCIsdFt0LlN1YnRyYWN0aXZlQmxlbmRpbmc9M109XCJTdWJ0cmFjdGl2ZUJsZW5kaW5nXCIsdFt0Lk11bHRpcGx5QmxlbmRpbmc9NF09XCJNdWx0aXBseUJsZW5kaW5nXCJ9KGUuQmxlbmRpbmdNb2RlfHwoZS5CbGVuZGluZ01vZGU9e30pKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGZ1bmN0aW9uKHQpe3QuRU5HTElTSD1cImVuXCIsdC5HRVJNQU49XCJkZVwiLHQuUE9MSVNIPVwicGxcIix0LkNISU5FU0VfVFJBRElUSU9OQUw9XCJ6aF90d1wiLHQuQ0hJTkVTRT1cInpoXCIsdC5KQVBBTkVTRT1cImphXCIsdC5DWkVDSD1cImNzXCIsdC5IVU5HQVJJQU49XCJodVwiLHQuVFVSS0lTSD1cInRyXCJ9KGUuVWlMYW5ndWFnZXx8KGUuVWlMYW5ndWFnZT17fSkpLGZ1bmN0aW9uKHQpe3QuQ09NTUE9XCIsXCIsdC5QT0lOVD1cIi5cIn0oZS5EZWNpbWFsU2VwYXJhdG9yc3x8KGUuRGVjaW1hbFNlcGFyYXRvcnM9e30pKSxmdW5jdGlvbih0KXt0LkFCS0hBWj1cImFiXCIsdC5BRkFSPVwiYWFcIix0LkFGUklLQUFOUz1cImFmXCIsdC5BS0FOPVwiYWtcIix0LkFMQkFOSUFOPVwic3FcIix0LkFNSEFSSUM9XCJhbVwiLHQuQVJBQklDPVwiYXJcIix0LkFSQUdPTkVTRT1cImFuXCIsdC5BUk1FTklBTj1cImh5XCIsdC5BU1NBTUVTRT1cImFzXCIsdC5BVkFSSUM9XCJhdlwiLHQuQVZFU1RBTj1cImFlXCIsdC5BWU1BUkE9XCJheVwiLHQuQVpFUkJBSUpBTkk9XCJhelwiLHQuQkFNQkFSQT1cImJtXCIsdC5CQVNIS0lSPVwiYmFcIix0LkJBU1FVRT1cImV1XCIsdC5CRUxBUlVTSUFOPVwiYmVcIix0LkJFTkdBTEk9XCJiblwiLHQuQklIQVJJPVwiYmhcIix0LkJJU0xBTUE9XCJiaVwiLHQuQk9TTklBTj1cImJzXCIsdC5CUkVUT049XCJiclwiLHQuQlVMR0FSSUFOPVwiYmdcIix0LkJVUk1FU0U9XCJteVwiLHQuQ0FUQUxBTj1cImNhXCIsdC5WQUxFTkNJQU49XCJjYVwiLHQuQ0hBTU9SUk89XCJjaFwiLHQuQ0hFQ0hFTj1cImNlXCIsdC5DSElDSEVXQT1cIm55XCIsdC5DSEVXQT1cIm55XCIsdC5OWUFOSkE9XCJueVwiLHQuQ0hJTkVTRT1cInpoXCIsdC5DSElORVNFX1RSQURJVElPTkFMPVwiemhfdHdcIix0LkNIVVZBU0g9XCJjdlwiLHQuQ09STklTSD1cImt3XCIsdC5DT1JTSUNBTj1cImNvXCIsdC5DUkVFPVwiY3JcIix0LkNST0FUSUFOPVwiaHJcIix0LkNaRUNIPVwiY3NcIix0LkRBTklTSD1cImRhXCIsdC5ESVZFSEk9XCJkdlwiLHQuREhJVkVIST1cImR2XCIsdC5NQUxESVZJQU49XCJkdlwiLHQuRFVUQ0g9XCJubFwiLHQuRU5HTElTSD1cImVuXCIsdC5FU1BFUkFOVE89XCJlb1wiLHQuRVNUT05JQU49XCJldFwiLHQuRVdFPVwiZWVcIix0LkZBUk9FU0U9XCJmb1wiLHQuRklKSUFOPVwiZmpcIix0LkZJTk5JU0g9XCJmaVwiLHQuRlJFTkNIPVwiZnJcIix0LkZVTEE9XCJmZlwiLHQuRlVMQUg9XCJmZlwiLHQuUFVMQUFSPVwiZmZcIix0LlBVTEFSPVwiZmZcIix0LkdBTElDSUFOPVwiZ2xcIix0LkdFT1JHSUFOPVwia2FcIix0LkdFUk1BTj1cImRlXCIsdC5HUkVFS19NT0RFUk49XCJlbFwiLHRbXCJHVUFSQU7DjVwiXT1cImduXCIsdC5HVUpBUkFUST1cImd1XCIsdC5IQUlUSUFOPVwiaHRcIix0LkhBSVRJQU5fQ1JFT0xFPVwiaHRcIix0LkhBVVNBPVwiaGFcIix0LkhFQlJFV19NT0RFUk49XCJoZVwiLHQuSEVSRVJPPVwiaHpcIix0LkhJTkRJPVwiaGlcIix0LkhJUklfTU9UVT1cImhvXCIsdC5IVU5HQVJJQU49XCJodVwiLHQuSU5URVJMSU5HVUE9XCJpYVwiLHQuSU5ET05FU0lBTj1cImlkXCIsdC5JTlRFUkxJTkdVRT1cImllXCIsdC5JUklTSD1cImdhXCIsdC5JR0JPPVwiaWdcIix0LklOVVBJQVE9XCJpa1wiLHQuSURPPVwiaW9cIix0LklDRUxBTkRJQz1cImlzXCIsdC5JVEFMSUFOPVwiaXRcIix0LklOVUtUSVRVVD1cIml1XCIsdC5KQVBBTkVTRT1cImphXCIsdC5KQVZBTkVTRT1cImp2XCIsdC5LQUxBQUxMSVNVVD1cImtsXCIsdC5HUkVFTkxBTkRJQz1cImtsXCIsdC5LQU5OQURBPVwia25cIix0LktBTlVSST1cImtyXCIsdC5LQVNITUlSST1cImtzXCIsdC5LQVpBS0g9XCJra1wiLHQuS0hNRVI9XCJrbVwiLHQuS0lLVVlVPVwia2lcIix0LkdJS1VZVT1cImtpXCIsdC5LSU5ZQVJXQU5EQT1cInJ3XCIsdC5LSVJHSElaPVwia3lcIix0LktZUkdZWj1cImt5XCIsdC5LT01JPVwia3ZcIix0LktPTkdPPVwia2dcIix0LktPUkVBTj1cImtvXCIsdC5LVVJESVNIPVwia3VcIix0LktXQU5ZQU1BPVwia2pcIix0LktVQU5ZQU1BPVwia2pcIix0LkxBVElOPVwibGFcIix0LkxVWEVNQk9VUkdJU0g9XCJsYlwiLHQuTEVUWkVCVVJHRVNDSD1cImxiXCIsdC5MVUdBTkRBPVwibGdcIix0LkxJTUJVUkdJU0g9XCJsaVwiLHQuTElNQlVSR0FOPVwibGlcIix0LkxJTUJVUkdFUj1cImxpXCIsdC5MSU5HQUxBPVwibG5cIix0LkxBTz1cImxvXCIsdC5MSVRIVUFOSUFOPVwibHRcIix0LkxVQkFfS0FUQU5HQT1cImx1XCIsdC5MQVRWSUFOPVwibHZcIix0Lk1BTlg9XCJndlwiLHQuTUFDRURPTklBTj1cIm1rXCIsdC5NQUxBR0FTWT1cIm1nXCIsdC5NQUxBWT1cIm1zXCIsdC5NQUxBWUFMQU09XCJtbFwiLHQuTUFMVEVTRT1cIm10XCIsdC5NQU9SST1cIm1pXCIsdC5NQVJBVEhJPVwibXJcIix0Lk1BUlNIQUxMRVNFPVwibWhcIix0Lk1PTkdPTElBTj1cIm1uXCIsdC5OQVVSVT1cIm5hXCIsdC5OQVZBSk89XCJudlwiLHQuTkFWQUhPPVwibnZcIix0Lk5PUldFR0lBTl9CT0tNQUw9XCJuYlwiLHQuTkRFQkVMRV9OT1JUSD1cIm5kXCIsdC5ORVBBTEk9XCJuZVwiLHQuTkRPTkdBPVwibmdcIix0Lk5PUldFR0lBTl9OWU5PUlNLPVwibm5cIix0Lk5PUldFR0lBTj1cIm5vXCIsdC5OVU9TVT1cImlpXCIsdC5OREVCRUxFX1NPVVRIPVwibnJcIix0Lk9DQ0lUQU49XCJvY1wiLHQuT0pJQldFPVwib2pcIix0Lk9KSUJXQT1cIm9qXCIsdC5TTEFWT05JQ19PTERfQ0hVUkNIPVwiY3VcIix0Lk9ST01PPVwib21cIix0Lk9SSVlBPVwib3JcIix0Lk9TU0VUSUFOPVwib3NcIix0Lk9TU0VUSUM9XCJvc1wiLHQuUEFOSkFCST1cInBhXCIsdC5QVU5KQUJJPVwicGFcIix0LlBBTEk9XCJwaVwiLHQuUEVSU0lBTj1cImZhXCIsdC5QT0xJU0g9XCJwbFwiLHQuUEFTSFRPPVwicHNcIix0LlBVU0hUTz1cInBzXCIsdC5QT1JUVUdVRVNFPVwicHRcIix0LlFVRUNIVUE9XCJxdVwiLHQuUk9NQU5TSD1cInJtXCIsdC5LSVJVTkRJPVwicm5cIix0LlJPTUFOSUFOPVwicm9cIix0Lk1PTERBVklBTj1cInJvXCIsdC5NT0xET1ZBTj1cInJvXCIsdC5SVVNTSUFOPVwicnVcIix0LlNBTlNLUklUPVwic2FcIix0LlNBUkRJTklBTj1cInNjXCIsdC5TSU5ESEk9XCJzZFwiLHQuU0FNSV9OT1JUSEVSTj1cInNlXCIsdC5TQU1PQU49XCJzbVwiLHQuU0FOR089XCJzZ1wiLHQuU0VSQklBTj1cInNyXCIsdC5TQ09UVElTSF9HQUVMSUM9XCJnZFwiLHQuR0FFTElDPVwiZ2RcIix0LlNIT05BPVwic25cIix0LlNJTkhBTEE9XCJzaVwiLHQuU0lOSEFMRVNFPVwic2lcIix0LlNMT1ZBSz1cInNrXCIsdC5TTE9WRU5FPVwic2xcIix0LlNPTUFMST1cInNvXCIsdC5TT1RIT19TT1VUSEVSTj1cInN0XCIsdC5TUEFOSVNIPVwiZXNcIix0LkNBU1RJTElBTj1cImVzXCIsdC5TVU5EQU5FU0U9XCJzdVwiLHQuU1dBSElMST1cInN3XCIsdC5TV0FUST1cInNzXCIsdC5TV0VESVNIPVwic3ZcIix0LlRBTUlMPVwidGFcIix0LlRFTFVHVT1cInRlXCIsdC5UQUpJSz1cInRnXCIsdC5USEFJPVwidGhcIix0LlRJR1JJTllBPVwidGlcIix0LlRJQkVUQU5fU1RBTkRBUkQ9XCJib1wiLHQuVElCRVRBTl9DRU5UUkFMPVwiYm9cIix0LlRVUktNRU49XCJ0a1wiLHQuVEFHQUxPRz1cInRsXCIsdC5UU1dBTkE9XCJ0blwiLHQuVE9OR0E9XCJ0b1wiLHQuVFVSS0lTSD1cInRyXCIsdC5UU09OR0E9XCJ0c1wiLHQuVEFUQVI9XCJ0dFwiLHQuVFdJPVwidHdcIix0LlRBSElUSUFOPVwidHlcIix0LlVJR0hVUj1cInVnXCIsdC5VWUdIVVI9XCJ1Z1wiLHQuVUtSQUlOSUFOPVwidWtcIix0LlVSRFU9XCJ1clwiLHQuVVpCRUs9XCJ1elwiLHQuVkVOREE9XCJ2ZVwiLHQuVklFVE5BTUVTRT1cInZpXCIsdC5WT0xBUFVFSz1cInZvXCIsdC5XQUxMT09OPVwid2FcIix0LldFTFNIPVwiY3lcIix0LldPTE9GPVwid29cIix0LkZSSVNJQU5fV0VTVEVSTj1cImZ5XCIsdC5YSE9TQT1cInhoXCIsdC5ZSURESVNIPVwieWlcIix0LllPUlVCQT1cInlvXCIsdC5aSFVBTkc9XCJ6YVwiLHQuQ0hVQU5HPVwiemFcIn0oZS5EYXRhTGFuZ3VhZ2V8fChlLkRhdGFMYW5ndWFnZT17fSkpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZnVuY3Rpb24odCl7dC5FTlRFUl9CVUlMRElORz1cIndhbGtfaW5zaWRlXCIsdC5FWElUX0JVSUxESU5HPVwid2Fsa19vdXRzaWRlXCIsdC5FTlRFUl9FTEVWQVRPUl9VUD1cImVudGVyX2VsZXZhdG9yX3VwXCIsdC5FTlRFUl9FTEVWQVRPUl9ET1dOPVwiZW50ZXJfZWxldmF0b3JfZG93blwiLHQuRVhJVF9FTEVWQVRPUj1cImV4aXRfZWxldmF0b3JcIix0LkVOVEVSX1NUQUlSU19VUD1cImVudGVyX3N0YWlyc191cFwiLHQuRU5URVJfU1RBSVJTX0RPV049XCJlbnRlcl9zdGFpcnNfZG93blwiLHQuRVhJVF9TVEFJUlM9XCJleGl0X3N0YWlyc1wiLHQuQ0hBTkdFX0ZMT09SX1VQPVwiY2hhbmdlX2Zsb29yX3VwXCIsdC5DSEFOR0VfRkxPT1JfRE9XTj1cImNoYW5nZV9mbG9vcl9kb3duXCIsdC5TVEFSVD1cInN0YXJ0XCIsdC5FTkQ9XCJlbmRcIix0LkVER0U9XCJlZGdlXCIsdC5TT1VSQ0VfUFJPSkVDVElPTj1cInNvdXJjZV9wcm9qZWN0aW9uX3RvX25hdmdyYXBoXCIsdC5ERVNUSU5BVElPTl9QUk9KRUNUSU9OPVwiZGVzdGluYXRpb25fcHJvamVjdGlvbl90b19uYXZncmFwaFwifShlLkluc3RydWN0aW9uVHlwZXx8KGUuSW5zdHJ1Y3Rpb25UeXBlPXt9KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxmdW5jdGlvbih0KXt0Lk1BUD1cIm1hcFwiLHQuUEFOT1JBTUE9XCJwYW5vcmFtYVwifShlLlZpZXdUeXBlfHwoZS5WaWV3VHlwZT17fSkpfV0pfSk7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuaW5kb29ydmlld2VyIHtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4udlRhZy1tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4uaXNzdWUtbW9kYWwtYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG5cXG4udGV4dC1zdHlsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTsgfVxcblxcbi5pc3N1ZS1tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MCU7IH1cXG5cXG4uZGV0YWlsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBib3JkZXI6IDBweCBzb2xpZCAjODg4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDsgfVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYWFhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5pc3N1ZS1pY29uIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4OyB9XFxuXFxuLmhlYWRpbmcge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4OyB9XFxuXFxuc3Bhbi5uZy1iaW5kaW5nIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL29taWQvY29kZXMvbmF2dmlzL2FwcC9zcmMvc3JjL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDQyxVQUFTLEVBQ1Q7O0FBRUQ7RUFDQyxjQUFhLEVBQ2I7O0FBRUQ7RUFDQyxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsUUFBTztFQUNQLE9BQU07RUFDTixZQUFXO0VBQ1gsYUFBWTtFQUNaLGVBQWMsRUFFZDs7QUFFRDtFQUNDLHdCQUE4QjtFQUM5QixxQ0FBb0MsRUFDcEM7O0FBRUQ7RUFDQyxZQUFXO0VBQ1gsYUFBWSxFQUNaOztBQUVEO0VBQ0MsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLFdBQVUsRUFDVjs7QUFFRDtFQUNDLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLCtCQUE4QjtFQUM5QixnQ0FBK0IsRUFDL0I7O0FBRUQ7RUFDQyxlQUFjO0VBQ2QsYUFBWTtFQUNaLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ2pCOztBQUVEOztFQUVDLFlBQVc7RUFDWCxzQkFBcUI7RUFDckIsZ0JBQWUsRUFDZjs7QUFFRDtFQUNDLFlBQVU7RUFDVixhQUFXLEVBQ1g7O0FBRUQ7RUFDQyxtQkFBaUIsRUFDakI7O0FBR0Q7RUFDSSxjQUFhLEVBQ2hCXCIsXCJmaWxlXCI6XCJpbmRleC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuaW5kb29ydmlld2VyIHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udlRhZy1tb2RhbCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0cGFkZGluZy10b3A6IDEwMHB4O1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG5cXG59XFxuXFxuLmlzc3VlLW1vZGFsLWJnIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4udGV4dC1zdHlsZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cmVzaXplOiBub25lO1xcbn1cXG5cXG4uaXNzdWUtbW9kYWwtY29udGVudCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbi5kZXRhaWwtY29udGVudCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG5cXHRtYXJnaW46IDEwcHg7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcdHBhZGRpbmctYm90dG9tOiA1cHg7XFxuXFx0Ym9yZGVyOiAwcHggc29saWQgIzg4ODtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jbG9zZSB7XFxuXFx0Y29sb3I6ICNhYWFhYWE7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlzc3VlLWljb24ge1xcblxcdHdpZHRoOjMycHg7XFxuXFx0aGVpZ2h0OjMycHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG5cXHRwYWRkaW5nLWxlZnQ6MTVweDtcXG59XFxuXFxuXFxuc3Bhbi5uZy1iaW5kaW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZUQUdEaWFsb2dcbntcblxuICAgIGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdHRoaXMuaHRtbE1vZGFsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidlRhZ2UtZW50cnlcIik7XG5cdFx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidlRhZ2UtbW9kYWwtY2xvc2VcIik7XG5cdFx0c3Bhbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oaWRlRGlhbG9nKCk7XG5cblx0XHRjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlXCIpO1xuXHRcdHNhdmVCdG4ub25jbGljayA9ICgpID0+IHRoaXMuc2F2ZVZUYWcoKTtcblxuXHRcdHRoaXMuaHRtbE1vZGFsRWxlbWVudC5vbmNsaWNrID0gKCkgPT5cblx0XHR7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmh0bWxNb2RhbEVsZW1lbnQpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuaGlkZURpYWxvZygpO1xuXHRcdFx0fVxuXHRcdH07XG4gICAgfVxuICAgIFxuXG5cdHB1YmxpYyB0aXRsZTogc3RyaW5nID0gXCJcIjtcblxuXHRwdWJsaWMgdXJsOiBzdHJpbmcgPSBcIlwiO1xuXG5cdHB1YmxpYyBjb21wbGV0aW9uSGFuZGxlcjogKHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKSA9PiB2b2lkO1xuXG5cdHByaXZhdGUgaHRtbE1vZGFsRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cblx0XG5cdHB1YmxpYyBzaG93RGlhbG9nKCk6IHZvaWRcblx0e1xuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpKS52YWx1ZSA9IHRoaXMudGl0bGU7XG5cdFx0KDxIVE1MVGV4dEFyZWFFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVVJMXCIpKS52YWx1ZSA9XG5cdFx0XHR0aGlzLnVybDtcblx0XHR0aGlzLmh0bWxNb2RhbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fVxuXHRwdWJsaWMgc2F2ZVZUYWcoKTogdm9pZFxuXHR7XG5cdFx0Y29uc3QgdGl0bGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKSkudmFsdWU7XG5cdFx0Y29uc3QgdXJsID0gKDxIVE1MVGV4dEFyZWFFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgXCJVUkxcIikpLnZhbHVlO1xuXHRcdHRoaXMuY29tcGxldGlvbkhhbmRsZXIodGl0bGUsIHVybCk7XG5cdFx0dGhpcy5oaWRlRGlhbG9nKCk7XG5cdH1cblx0cHJpdmF0ZSBoaWRlRGlhbG9nKCk6IHZvaWRcblx0e1xuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpKS52YWx1ZSA9IFwiXCI7XG5cdFx0KDxIVE1MVGV4dEFyZWFFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVVJMXCIpKS52YWx1ZSA9IFwiXCI7XG5cdFx0dGhpcy5odG1sTW9kYWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb250ZXh0TWVudUVudHJ5SW50ZXJmYWNlLCBDdXN0b21MYXllcixcbiAgICBNb3VzZUV2ZW50Q29vcmRpbmF0ZXNJbnRlcmZhY2UsIE1haW5WaWV3SW50ZXJmYWNlLCBBcGlJbnRlcmZhY2UsIEN1cnNvckRhdGFJbnRlcmZhY2UsIFBvaUludGVyZmFjZSwgUG9pVHlwZUludGVyZmFjZVxuICB9IGZyb20gXCJAbmF2dmlzL2luZG9vcnZpZXdlclwiO1xuXG5pbXBvcnQgVlRBR0RpYWxvZyBmcm9tICcuLi9EaWFsb2dzL1ZUQUdEaWFsb2cnXG5cblxuZXhwb3J0IGNsYXNzIFZUYWdDb250ZXh0TWVudUVudHJ5TGF5ZXIgZXh0ZW5kcyBDdXN0b21MYXllclxue1xuXG5cdHB1YmxpYyBpdkFwaTogQXBpSW50ZXJmYWNlO1xuXHRcblx0cHVibGljIGNvbXBsZXRpb25IYW5kbGVyOiAoKSA9PiB2b2lkO1xuXG4gICAgcHVibGljIExPQ0FMRSA9IFwiZW5cIjtcblx0XG5cdHB1YmxpYyBwb2lUeXBlOiBQb2lUeXBlSW50ZXJmYWNlO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihpdjogQXBpSW50ZXJmYWNlLCBtYWluVmlldzpNYWluVmlld0ludGVyZmFjZSlcblx0e1xuICAgICAgICBzdXBlcihtYWluVmlldyk7XG5cdFx0dGhpcy5pdkFwaSA9IGl2O1xuXHRcdHRoaXMuZmV0Y2hQb2lUeXBlKFwiVlRBR1wiKS50aGVuKChwb2lUeXBlOlBvaVR5cGVJbnRlcmZhY2UpPT57XG5cdFx0XHR0aGlzLnBvaVR5cGUgPSBwb2lUeXBlO1xuXHRcdH0pXG4gICAgfVxuICAgIHB1YmxpYyBvbkNvbnRleHRNZW51KHBvczogTW91c2VFdmVudENvb3JkaW5hdGVzSW50ZXJmYWNlKTogQ29udGV4dE1lbnVFbnRyeUludGVyZmFjZVtdXG4gICAgeyBcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBuYW1lOiBcImFkZCBWVGFnZVwiLFxuICAgICAgICAgICAgaWNvbjogXCJmYS1nbG9iZVwiLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVWVEFHKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBjcmVhdGVWVEFHKCk6IHZvaWRcblx0e1xuXHRcdGNvbnN0IGRpYWxvZyA9IG5ldyBWVEFHRGlhbG9nKCk7XG5cdFx0Ly9Ub2RvOiBTd2l0Y2ggdG8gbmV3IEFQSSBpbXBsZW1lbnRhdGlvbiB3aGVuIGl0IGlzIGF2YWlsYWJsZS5cbiAgICAgICAgY29uc3QgY3VycmVudEN1cnNvclBvc2l0aW9uID0gdGhpcy5pdkFwaS5sZWdhY3lBcGkuZ2V0Q3VycmVudEN1cnNvclBvc2l0aW9uKCk7XG4gICAgICAgIFxuXG5cdFx0ZGlhbG9nLmNvbXBsZXRpb25IYW5kbGVyID0gKHRpdGxlOmFueSwgdXJsOmFueSkgPT5cblx0XHR7XG5cdFx0XHQgdGhpcy5jcmVhdGVQb2kodGl0bGUsIHVybCwgY3VycmVudEN1cnNvclBvc2l0aW9uKVxuXHRcdFx0IFx0LmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUpKTtcblx0XHR9O1xuXHRcdGRpYWxvZy5zaG93RGlhbG9nKCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgY3JlYXRlUG9pKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG5cdFx0Y3Vyc29yUG9zaXRpb246IEN1cnNvckRhdGFJbnRlcmZhY2UpOiBQcm9taXNlPFBvaUludGVyZmFjZT5cblx0e1xuXHRcdGNvbnN0IHBvaSA9IHRoaXMuaXZBcGkucG9pLnJlcG9zaXRvcnkuY3JlYXRlKCk7XG5cdFx0cG9pLnRpdGxlc1t0aGlzLkxPQ0FMRV0gPSB0aXRsZTtcblx0XHRwb2kuZGVzY3JpcHRpb25zW3RoaXMuTE9DQUxFXSA9ICBgPGlmcmFtZSBmcmFtZWJvcmRlcj1cIjBcIiBzcmM9XCIke2Rlc2NyaXB0aW9ufVwiIHN0eWxlPVwiZGlzcGxheTpibG9jazsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMHZoO1wiPjwvaWZyYW1lPmA7XG5cdFx0cG9pLmljb24gPSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgbG9jYWxUb0dsb2JhbCA9IHRoaXMuaXZBcGkudHJhbnNmb3JtLnNlcnZpY2UubG9jYWxUb0dsb2JhbDtcblx0XHRwb2kuZ2xvYmFsTG9jYXRpb24gPSBsb2NhbFRvR2xvYmFsLnRyYW5zZm9ybShjdXJzb3JQb3NpdGlvbi5sb2NhdGlvbik7XG5cdFx0cG9pLmdsb2JhbE9yaWVudGF0aW9uID1cblx0XHRcdGxvY2FsVG9HbG9iYWwudHJhbnNmb3JtUXVhdGVybmlvbihjdXJzb3JQb3NpdGlvbi5vcmllbnRhdGlvbik7XG5cdFx0cG9pLmRhdGFzZXRMb2NhdGlvbiA9IGN1cnNvclBvc2l0aW9uLmRhdGFzZXRMb2NhdGlvbjtcblx0XHRwb2kuZGF0YXNldE9yaWVudGF0aW9uID0gY3Vyc29yUG9zaXRpb24uZGF0YXNldE9yaWVudGF0aW9uO1xuXHRcdHBvaS5vcmllbnRhdGlvbiA9IGN1cnNvclBvc2l0aW9uLm9yaWVudGF0aW9uO1xuXHRcdHBvaS5wb2lUeXBlID0gdGhpcy5wb2lUeXBlO1xuXHRcdHJldHVybiB0aGlzLml2QXBpLnBvaS5yZXBvc2l0b3J5LnNhdmUocG9pKS50aGVuKChwb2lzKSA9PlxuXHRcdHtcblx0XHRcdGNvbnN0IHNhdmVkUG9pID0gcG9pc1swXTtcblx0XHRcdHRoaXMuaXZBcGkucG9pLnNlcnZpY2UuZ29Ub1BvaShzYXZlZFBvaSkuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuXHRcdFx0dGhpcy5jb21wbGV0aW9uSGFuZGxlcigpO1xuXHRcdFx0cmV0dXJuIHNhdmVkUG9pO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHRwcml2YXRlIGZldGNoUG9pVHlwZShuYW1lOiBTdHJpbmcpOiBQcm9taXNlPFBvaVR5cGVJbnRlcmZhY2U+XG5cdHtcblx0XHRyZXR1cm4gdGhpcy5pdkFwaS5wb2kucG9pVHlwZVJlcG9zaXRvcnkuZmluZEFsbCgpLnRoZW4oKHBvaVR5cGVzKSA9PlxuXHRcdHtcblx0XHRcdGNvbnN0IGZpbHRlcmVkUG9pcyA9IHBvaVR5cGVzLmZpbHRlcigocG9pVHlwZSkgPT4gcG9pVHlwZS5uYW1lW3RoaXMuTE9DQUxFXSA9PT0gbmFtZSk7XG5cblx0XHRcdHJldHVybiBmaWx0ZXJlZFBvaXNbMF07XG5cdFx0fSk7XG5cdH1cbiAgICBcblxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL2luZGV4LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vaW5kZXguc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHtnZXRBcGksIEFwaUludGVyZmFjZX0gZnJvbSBcIkBuYXZ2aXMvaW5kb29ydmlld2VyXCI7XG5pbXBvcnQge1ZUYWdDb250ZXh0TWVudUVudHJ5TGF5ZXJ9IGZyb20gXCIuL0xheWVycy9Db250ZXh0TWVudVwiXG5cbmNsYXNzIFRlc3RBcHBcbntcblx0cHVibGljIGl2QXBpOiBBcGlJbnRlcmZhY2U7XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0Z2V0QXBpKFwiaHR0cHM6Ly9zYWZhdmllaC5pdi5uYXZ2aXMuY29tL1wiKVxuXHRcdFx0LnRoZW4oKGl2OiBBcGlJbnRlcmZhY2UpID0+IHtcblx0XHRcdFx0dGhpcy5pdkFwaSA9IGl2O1xuXHRcdFx0XHRuZXcgVlRhZ0NvbnRleHRNZW51RW50cnlMYXllcih0aGlzLml2QXBpLCB0aGlzLml2QXBpLnZpZXcubWFpblZpZXcpXG5cdFx0XHR9KTtcblx0fVxufVxuXG4oPGFueT53aW5kb3cpLlRlc3RBcHAgPSBuZXcgVGVzdEFwcCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==