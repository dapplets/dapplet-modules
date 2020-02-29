(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/ethereum.png":
/*!**************************!*\
  !*** ./src/ethereum.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5NzRGMDQ5QUY3MzExRTk4ODZDQ0M3QjMyNjQyRjZGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ5NzRGMDRBQUY3MzExRTk4ODZDQ0M3QjMyNjQyRjZGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDk3NEYwNDdBRjczMTFFOTg4NkNDQzdCMzI2NDJGNkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDk3NEYwNDhBRjczMTFFOTg4NkNDQzdCMzI2NDJGNkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz63ItbbAAAIO0lEQVR42tRa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");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethereum_png_1 = __webpack_require__(/*! ./ethereum.png */ "./src/ethereum.png");
let TwitterFeature = class TwitterFeature {
    constructor() {
        const wallet = Core.wallet();
        const server = Core.connect({ url: "wss://localhost:8080/feature-2" });
        const { button } = this.adapter.widgets;
        this.config = {
            TWEET_SOUTH: [
                button({
                    initial: "DEFAULT",
                    "DEFAULT": {
                        label: server.like_num,
                        img: ethereum_png_1.default,
                        disabled: false,
                        exec: (ctx, me) => {
                            me.state = 'PENDING';
                            wallet.sendAndListen('1', ctx, {
                                rejected: () => me.state = 'ERR',
                                created: () => me.state = 'DEFAULT'
                            });
                        }
                    },
                    "PENDING": {
                        label: 'Pending',
                        loading: true,
                        disabled: true
                    },
                    "ERR": {
                        label: 'Error',
                        img: ethereum_png_1.default,
                        exec: (ctx, me) => me.state = 'DEFAULT'
                    }
                })
            ],
            TWEET_COMBO: [],
            DM_SOUTH: []
        };
    }
    activate() {
        this.adapter.attachFeature(this);
    }
    deactivate() {
        this.adapter.detachFeature(this);
    }
};
__decorate([
    Inject("twitter-adapter.dapplet-base.eth"),
    __metadata("design:type", Object)
], TwitterFeature.prototype, "adapter", void 0);
TwitterFeature = __decorate([
    Injectable,
    __metadata("design:paramtypes", [])
], TwitterFeature);
exports.default = TwitterFeature;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvZXRoZXJldW0ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLCtFQUFnQixvOEg7Ozs7Ozs7Ozs7OztBQ0FsQjtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx1QkFBdUIsbUJBQU8sQ0FBQywwQ0FBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHdDQUF3QztBQUM3RSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRNNElEYzVMakUxT1RneU5Dd2dNakF4Tmk4d09TOHhOQzB3TVRvd09Ub3dNU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UY2dLRmRwYm1SdmQzTXBJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa1E1TnpSR01EUTVRVVkzTXpFeFJUazRPRFpEUTBNM1FqTXlOalF5UmpaR0lpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rUTVOelJHTURSQlFVWTNNekV4UlRrNE9EWkRRME0zUWpNeU5qUXlSalpHSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlJEazNORVl3TkRkQlJqY3pNVEZGT1RnNE5rTkRRemRDTXpJMk5ESkdOa1lpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UkRrM05FWXdORGhCUmpjek1URkZPVGc0TmtORFF6ZENNekkyTkRKR05rWWlMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejYzSXRiYkFBQUlPMGxFUVZSNDJ0UmFDMVNUNXhuK0NDVGhGa2pRMGRNaWFzVFpXYTFRb0ZRbUNPcGExcDZPZGNPNkhqdlBRY1JUY1lyYmNWb3ZBUzlVUk1yTk02MUZ4U0JlcHVqMG5JQ1ZFS0pVVWJCanJoTkJTQUtvRUdFaVNHNEVTTWkvOTQybVpXaUFZQ0xwZDg1L1NQSi8vL2U5ei91OXQrZjlJUlJGRVZ0ZHJhMnRIbnorMFVoYjdrRWpOaHpWMWRWTGp4YmtINVpJSkI2MjJzTm1BQnFibWliKzU5YXQ3UnFOeGk4dExXM0hUd3FBWHE4bnBhV2luUWJpOEFxTHhTSWxRdUhxa3BLU29KOE1nQnMzdm51blZTNlBaOUxweHU4TUpwUHhKUXlWU3VWbzl3QzZ1N3RwVnlzcU1wa01CdDMwbTdPek0ybVFTQlljUEhUb1U3c0hJQlpmaWxOcE5QTm90QitYeG1qQjh2QWdoL1B5ZG9ORGU5a3RBRmxqbzgrdG1wcDBGeWJ6bVh1T0FLaW5wK2UxUGVucDIrd1NBRHF1U0NSS2hZOGNjM05ZN3U2a1ZDVDY3TUtGQzBGMkI2Q3E2a1praS96QkgrbDArckR6d0IrWTZSa1pHUXFGZ21ZM0FNQnhtZUM0R2M0TXhvanJnWE9UUnBrc01qYzNkNW5kQUJDSkwzMm02ZWtKR3V5NHd3MTA2Q1A1K1NuMTlmVVR4eDJBVkNKOTdYWk56WGJuNXppdXVZRU9yZFZxZmRQUzAza1lvY1lOZ0w1ZlIwckxSTHNkSEJ3NGxqNkxEaTBXaTFjWEZSVUZqeHVBNjFWVmtmSUhiWjg2T1RtTjZYbHdhSHBHVmxZRytKRERTd2ZRMWRYRnFMaDJMUk5NWjh6bEFacWRyRkVXY2VEQTE3RXZIVUJwbVRpaFI2c05ITTV4d2JTTWw3bUI5dS9wNFVueUM0Nm0xTmJWZWI4MEFBME5EWlBxYW11VHpEa3Vnc0o4b05QMUUyMXZyL0c3T1NEbzBMMjl2VDZRb2JlT3hhRXRCdERmMzA5RVpXVzdRS2dKendqajZHZ1VIQVFpdFhXMVJGaGFTaVQxOWVUUm8wZWt0Ni9QQ09KNUo0WU9mZm55NVFTQlFHQnhobmF3RlBYbDh2S0lNdkdsY2hlb01FMERuUmdWL0xoYlFacWJHc25kdTNjSkVCbmlCR0RhNUhLaTdPNG1OSmpqNnVwS1BDQUh1TUJmQkdJd0dINVVqRTVIdkwyOXE0b0ZndmxzTmx0bmt4UG83T3gwdW42OU1odXpLV29UQlVldGR6enFJSldWbFVCaWhLUzJ0dGFvYlRyTU1XbWJCbk53UGhSenBMMjluVHdBVUNxbDhnbW5mV3BlREFCN3Q3bDU3djc5KytOdGRnSi9QMzM2ejNmcTdtUzd1YmtaaTdmMjlqWWlsY2xJVzFzYkdZRHZxUEhCdG82ZjVTMHRSSzFTRVljaDVUVmVhRzU0SXU1dzBVRVpBd01EUktmWFB6eDM5bXpBN05tejI2d0tBQWlKYjJIaG1YOVRsR0ZDYTJzcmtZSGdIUjBkVDB6SVRBRm5Ec0JRSUhpUzd1QUhMRTlQb2dNZm14Y1dsbGVRbng4L1hBU3pDSUJhbzNHQ296MEpKUDNqZS9mdUVRWGFOQWprT0VJQ0d3bkFVQ0M0SmdMQms4akt5bnAvMmJKbEpWYnhnWmI3OTMvMnpjV0wzS3RYcnhLbFFtRzBiOGN4Wmw5elFFMytncWNLVWF1L3VycDYxbWlVT3lvQU0yZk9iRHQxOHVRdjQySmoxMERrZUlBUnh0cXNTZ2RSQ05kOTA5Ky9CT3FqZVh2MzdzMjBtZ2tOYVZiNXd1SmJybGRXcm5SeGNYSEUwM2dSRThMOUlhTVRMdzVIdG5IanhoMXIxNjQ5anVIV3FsRklwVkxSbEVvbHpjZkhSNC9mTVg3LzQvejUrUWUrK21vWHhQd3dyTytmbDZCR0FnQWxOYzVSZzYzL2pjZmpaZmo1K1hYaDc4RFduSkQ4QndVRlBSeUpZNHpLaEVEVDFQZmYzNW90RUJUOUFXTTVMdnB4VE15Vk00V0Y0U3ZqNCtNb2c2RlpyVmFQMnQ1TjVoSVM4czU1b1ZBWXl1Znp0NWlFTHhFSzM0cGJzU0lKVG9FMktvSTAyaWFxVnR0THo4eks1dTlKLy9LYm16ZHZ2akg0WGsxTmpYZDhmSHltMy9UcC9XL01ta1VGQkFZYXI3ZUNnaWpJcnBRcktBQnlCNFdLd0MxZmVmWFZtbjM3OXYyK0R4S2VhUTJwVk1wWnMyYk5idmFFQ2FyQ3dzSUZvNVhMb2s2d1hDNTNTOTYyL2Q3bXJUdzFQNzhndGFXbGhUUDR2cUNvNk8zM29xSkUzR25UcURmbnpQay9BS0JOQ2hKWFowSkNRaEk4NTJaNkJreVRaT2ZrZkRJbklLQUJUSkhhOFBubkd5MlJ5ZUoyZGtYRnRmQXR2Q1I5VXZJMmFzZk9GRWxSY2ZFbllMTS8zQWR5Z2dJdGdSTzQ4L1BYWDZkWUxKWlI2d3NYTGp4ZVVWSGhOM2l0NHVMaWdGKzkrMjZ4ejZSSjFPU3BVNmxGaXhZSmtkeFlJby9GVVFqbkh6OXhZbk9EUkpiS1pOQ05kUStIemI0UUhoNlcvSFp3OEUyVDNVcWtVblpPZHZhbTh2THk4UFhyMTZjc1g3Njh4SFFQNmlWdkFMbTFWQ1JhQ1RXUUMwWXl5TUFQVDU0NEVSd1NFdEppMDJyMGFSdUZmdkRRNFlzUVJSWmhNWWVaRTZwSkxYZktsSzlCaTN1NDNLbi9IUlRCQ0hhb2pjWGc0OGZrWUc3dWlvSmp4NUlnR0V6Qk1ocWRHbjZuTm0zWXNDUXhNZkdzemN0cDA3aDkremIzVk9HWmZ3R3ArWUhRWTNRQmdlNEgrUHVuekkrTU9PTEZaaHRNcHdaaE54VHl4NjdtcHFZRkdIWWRuNTZHQ3FMWHZORFEzSUtDZ2xWajRkWU9MOUxXRUFpS2w5ejQ1M2VuQjNNRFhBL055b1BGS2w4UUdjR0RFMnJOeWNuaGxWKzVFZ3NrM2dsWm5HbFBxRHlSMk5lZlAzY3VkQnFYMnoybU11UkZBQ0R6T25RNGp3KzFTK3pRbHFLSnJJaktSQnBJZG02ZUhzKytaVklvbGZxY3JLejVNVEV4bGVQU1ZzRysvMitqb3hQQk9hVkRGV0hpeFZEbnV3MHREZER1UVhpeWVQSGlIUzhpdkZVNmM1TW4rNm9pSXlJU3RIMTlCbk9aOTNrbEJKZkwvVGFaeDB1emk5NG9oRkR4REwvcEtiMUFSa1lhQTJCYVlGNmRxVjk4RWNmaGNQUjJBUUROSlRyNncxUjNWOWRyR0ZLSEc4Z25FbGF0K2t0WVdGaVRYYjBmOFBMeTZ2OTFWRlFzNUFQbE1NeU96SjA3bDc5dTNicGpkdmVDQTBkQWdMOHNNREF3RVp0WlF3ZUdURWhjZGJ0VFUvL0tHSVpEakNzQUhPOUh2WGZVZStMRVU5aTFHRHcwYXJWaDg2Wk5xMmZNbU5GbGJUWm4xWUVoTXpyNk42dmhZeVBtZ2ljaFUwRis5OUZIcVV1WEx2M1cydnZaNUVVM2hNakhFSm4raFBVK1p1VXB2cE1yazVPVGQ5cGlMNXY5RndtYVVONlIvTXpBNEdDbFNDVDZoYTMySWJiOFZ4Z2tQRUFYUDdEbEh2OFRZQUNwdkcvNm81NFlOZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGV0aGVyZXVtX3BuZ18xID0gcmVxdWlyZShcIi4vZXRoZXJldW0ucG5nXCIpO1xyXG5sZXQgVHdpdHRlckZlYXR1cmUgPSBjbGFzcyBUd2l0dGVyRmVhdHVyZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCB3YWxsZXQgPSBDb3JlLndhbGxldCgpO1xyXG4gICAgICAgIGNvbnN0IHNlcnZlciA9IENvcmUuY29ubmVjdCh7IHVybDogXCJ3c3M6Ly9sb2NhbGhvc3Q6ODA4MC9mZWF0dXJlLTJcIiB9KTtcclxuICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gdGhpcy5hZGFwdGVyLndpZGdldHM7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XHJcbiAgICAgICAgICAgIFRXRUVUX1NPVVRIOiBbXHJcbiAgICAgICAgICAgICAgICBidXR0b24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw6IFwiREVGQVVMVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiREVGQVVMVFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzZXJ2ZXIubGlrZV9udW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzogZXRoZXJldW1fcG5nXzEuZGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGVjOiAoY3R4LCBtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuc3RhdGUgPSAnUEVORElORyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQuc2VuZEFuZExpc3RlbignMScsIGN0eCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdGVkOiAoKSA9PiBtZS5zdGF0ZSA9ICdFUlInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6ICgpID0+IG1lLnN0YXRlID0gJ0RFRkFVTFQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQRU5ESU5HXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQZW5kaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRVJSXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzogZXRoZXJldW1fcG5nXzEuZGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlYzogKGN0eCwgbWUpID0+IG1lLnN0YXRlID0gJ0RFRkFVTFQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgVFdFRVRfQ09NQk86IFtdLFxyXG4gICAgICAgICAgICBETV9TT1VUSDogW11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaEZlYXR1cmUodGhpcyk7XHJcbiAgICB9XHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5fX2RlY29yYXRlKFtcclxuICAgIEluamVjdChcInR3aXR0ZXItYWRhcHRlci5kYXBwbGV0LWJhc2UuZXRoXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwgVHdpdHRlckZlYXR1cmUucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcclxuVHdpdHRlckZlYXR1cmUgPSBfX2RlY29yYXRlKFtcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXHJcbl0sIFR3aXR0ZXJGZWF0dXJlKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVHdpdHRlckZlYXR1cmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=