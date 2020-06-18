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
let TwitterFeature = /** @class */ (() => {
    let TwitterFeature = class TwitterFeature {
        constructor() {
            const wallet = Core.wallet();
            const server = Core.connect({ url: "wss://examples.dapplets.org/feature-2" });
            const { button } = this.adapter.widgets;
            this.config = {
                POST_STARTER: [
                    {
                        label: 'Add tweet to the Ethereum registry',
                        exec: (ctx, me) => {
                            wallet.sendAndListen('1', ctx, {});
                        }
                    }
                ],
                POST_SOUTH: [
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
                POST_COMBO: [],
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
    return TwitterFeature;
})();
exports.default = TwitterFeature;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvZXRoZXJldW0ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLCtFQUFnQixvOEg7Ozs7Ozs7Ozs7OztBQ0FsQjtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx1QkFBdUIsbUJBQU8sQ0FBQywwQ0FBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0NBQStDO0FBQ3hGLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQVlBQUFCWEF2bUhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UTTRJRGM1TGpFMU9UZ3lOQ3dnTWpBeE5pOHdPUzh4TkMwd01Ub3dPVG93TVNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGNnS0ZkcGJtUnZkM01wSWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tRNU56UkdNRFE1UVVZM016RXhSVGs0T0RaRFEwTTNRak15TmpReVJqWkdJaUI0YlhCTlRUcEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa1E1TnpSR01EUkJRVVkzTXpFeFJUazRPRFpEUTBNM1FqTXlOalF5UmpaR0lqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSRGszTkVZd05EZEJSamN6TVRGRk9UZzROa05EUXpkQ016STJOREpHTmtZaUlITjBVbVZtT21SdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJEazNORVl3TkRoQlJqY3pNVEZGT1RnNE5rTkRRemRDTXpJMk5ESkdOa1lpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo2M0l0YmJBQUFJTzBsRVFWUjQydFJhQzFTVDV4bitDQ1RoRmtqUTBkTWlhc1RaV2ExUW9GUW1DT3BhMXA2T2RjTzZIanZQUWNSVGNZcmJjVm92QVM5VVJNck5NNjFGeFNCZXB1ajBuSUNWRUtKVVViQmpyaE5CU0FLb0VHRWlTRzRFU01pLzk0Mm1aV2lBWUNMcGQ4NS9TUEovLy9lOXovdTl0K2Y5SVJSRkVWdGRyYTJ0SG56KzBVaGI3a0VqTmh6VjFkVkxqeGJrSDVaSUpCNjIyc05tQUJxYm1pYis1OWF0N1JxTnhpOHRMVzNIVHdxQVhxOG5wYVdpblFiaThBcUx4U0lsUXVIcWtwS1NvSjhNZ0JzM3ZudW5WUzZQWjlMcHh1OE1KcFB4SlF5VlN1Vm85d0M2dTd0cFZ5c3FNcGtNQnQzMG03T3pNMm1RU0JZY1BIVG9VN3NISUJaZmlsTnBOUE5vdEIrWHhtakI4dkFnaC9QeWRvTkRlOWt0QUZsam84K3RtcHAwRnliem1YdU9BS2lucCtlMVBlbnAyK3dTQURxdVNDUktoWThjYzNOWTd1NmtWQ1Q2N01LRkMwRjJCNkNxNmtaa2kvekJIK2wwK3JEendCK1k2UmtaR1FxRmdtWTNBTUJ4bWVDNEdjNE14b2pyZ1hPVFJwa3NNamMzZDVuZEFCQ0pMMzJtNmVrSkd1eTR3dzEwNkNQNStTbjE5ZlVUeHgyQVZDSjk3WFpOelhibjV6aXV1WUVPcmRWcWZkUFMwM2tZb2NZTmdMNWZSMHJMUkxzZEhCdzRsajZMRGkwV2kxY1hGUlVGanh1QTYxVlZrZklIYlo4Nk9UbU42WGx3YUhwR1ZsWUcrSkREU3dmUTFkWEZxTGgyTFJOTVo4emxBWnFkckZFV2NlREExN0V2SFVCcG1UaWhSNnNOSE01eHdiU01sN21COXUvcDRVbnlDNDZtMU5iVmViODBBQTBORFpQcWFtdVR6RGt1Z3NKOG9OUDFFMjF2ci9HN09TRG8wTDI5dlQ2UW9iZU94YUV0QnREZjMwOUVaV1c3UUtnSnp3amo2R2dVSEFRaXRYVzFSRmhhU2lUMTllVFJvMGVrdDYvUENPSjVKNFlPZmZueTVRU0JRR0J4aG5hd0ZQWGw4dktJTXZHbGNoZW9NRTBEblJnVi9MaGJRWnFiR3NuZHUzY0pFQm5pQkdEYTVIS2k3TzRtTkpqajZ1cEtQQ0FIdU1CZkJHSXdHSDVVakU1SHZMMjlxNG9GZ3Zsc05sdG5reFBvN094MHVuNjlNaHV6S1dvVEJVZXRkenpxSUpXVmxVQmloS1MydHRhb2JUck1NV21iQm5Od1BoUnpwTDI5blR3QVVDcWw4Z21uZldwZURBQjd0N2w1N3Y3OSsrTnRkZ0ovUDMzNnozZnE3bVM3dWJrWmk3ZjI5allpbGNsSVcxc2JHWUR2cVBIQnRvNmY1UzB0UksxU0VZY2g1VFZlYUc1NEl1NXcwVUVaQXdNRFJLZlhQengzOW16QTdObXoyNndLQUFpSmIySGhtWDlUbEdGQ2Eyc3JrWUhnSFIwZFQweklUQUZuRHNCUUlIaVM3dUFITEU5UG9nTWZteGNXbGxlUW54OC9YQVN6Q0lCYW8zR0NvejBKSlAzamUvZnVFUVhhTkFqa09FSUNHd25BVUNDNEpnTEJrOGpLeW5wLzJiSmxKVmJ4Z1piNzkzLzJ6Y1dMM0t0WHJ4S2xRbUcwYjhjeFpsOXpRRTMrZ3FjS1VhdS91cnA2MW1pVU95b0FNMmZPYkR0MTh1UXY0MkpqMTBEa2VJQVJ4dHFzU2dkUkNOZDkwOSsvQk9xamVYdjM3czIwbWdrTmFWYjV3dUpicmxkV3JuUnhjWEhFMDNnUkU4TDlJYU1UTHc1SHRuSGp4aDFyMTY0OWp1SFdxbEZJcFZMUmxFb2x6Y2ZIUjQvZk1YNy80L3o1K1FlKyttb1h4UHd3ck8rZmw2QkdBZ0FsTmM1Umc2My9qY2ZqWmZqNStYWGg3OERXbkpEOEJ3VUZQUnlKWTR6S2hFRFQxUGZmMzVvdEVCVDlBV001THZweFRNeVZNNFdGNFN2ajQrTW9nNkZaclZhUDJ0NU41aElTOHM1NW9WQVl5dWZ6dDVpRUx4RUszNHBic1NJSlRvRTJLb0kwMmlhcVZ0dEx6OHpLNXU5Si8vS2JtemR2dmpINFhrMU5qWGQ4Zkh5bTMvVHAvVy9NbWtVRkJBWWFyN2VDZ2lqSXJwUXJLQUJ5QjRXS3dDMWZlZlhWbW4zNzl2MitEeEtlYVEycFZNcFpzMmJOYnZhRUNhckN3c0lGbzVYTG9rNndYQzUzUzk2Mi9kN21yVHcxUDc4Z3RhV2xoVFA0dnFDbzZPMzNvcUpFM0duVHFEZm56UGsvQUtCTkNoSlhaMEpDUWhJODUyWjZCa3lUWk9ma2ZESW5JS0FCVEpIYThQbm5HeTJSeWVKMmRrWEZ0ZkF0dkNSOVV2STJhc2ZPRkVsUmNmRW5ZTE0vM0FkeWdnSXRnUk80OC9QWFg2ZFlMSlpSNndzWExqeGVVVkhoTjNpdDR1TGlnRis5KzI2eHo2UkoxT1NwVTZsRml4WUprZHhZSW8vRlVRam5Iejl4WW5PRFJKYktaTkNOZFErSHpiNFFIaDZXL0hadzhFMlQzVXFrVW5aT2R2YW04dkx5OFBYcjE2Y3NYNzY4eEhRUDZpVnZBTG0xVkNSYUNUV1FDMFl5eU1BUFQ1NDRFUndTRXRKaTAycjBhUnVGZnZEUTRZc1FSUlpoTVllWkU2cEpMWGZLbEs5QmkzdTQzS24vSFJUQkNIYW9qY1hnNDhma1lHN3Vpb0pqeDVJZ0dFekJNaHFkR242bk5tM1lzQ1F4TWZHc3pjdHAwN2g5K3piM1ZPR1pmd0dwK1lIUVkzUUJnZTRIK1B1bnpJK01PT0xGWmh0TXB3WmhOeFR5eDY3bXBxWUZHSFlkbjU2R0NxTFh2TkRRM0lLQ2dsVmo0ZFlPTDlMV0VBaUtsOXo0NTNlbkIzTURYQS9OeW9QRktsOFFHY0dERTJyTnljbmhsVis1RWdzazNnbFpuR2xQcUR5UjJOZWZQM2N1ZEJxWDJ6Mm1NdVJGQUNEek9uUTRqdysxUyt6UWxxS0pySWpLUkJwSWRtNmVIcysrWlZJb2xmcWNyS3o1TVRFeGxlUFNWc0crLzIram94UEJPYVZERldIaXhWRG51dzB0RGREdVFYaXllUEhpSFM4aXZGVTZjNU1uKzZvaUl5SVN0SDE5Qm5PWjkza2xCSmZML1RhWngwdXppOTRvaEZEeERML3BLYjFBUmtZYUEyQmFZRjZkcVY5OEVjZmhjUFIyQVFETkpUcjZ3MVIzVjlkckdGS0hHOGduRWxhdCtrdFlXRmlUWGIwZjhQTHk2djkxVkZRczVBUGxNTXlPekowN2w3OXUzYnBqZHZlQ0EwZEFnTDhzTURBd0VadFpRd2VHVEVoY2RidFRVLy9LR0laRGpDc0FITzlIdlhmVWUrTEVVOWkxR0R3MGFyVmg4NlpOcTJmTW1ORmxiVFpuMVlFaE16cjZONnZoWXlQbWdpY2hVMEYrOTlGSHFVdVhMdjNXMnZ2WjVFVTNoTWpIRUpuK2hQVStadVVwdnBNcms1T1RkOXBpTDV2OUZ3bWFVTjZSL016QTRHQ2xTQ1Q2aGEzMkliYjhWeGdrUEVBWFA3RGxIdjhUWUFDcHZHLzZvNTRZTmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGV0aGVyZXVtX3BuZ18xID0gcmVxdWlyZShcIi4vZXRoZXJldW0ucG5nXCIpO1xubGV0IFR3aXR0ZXJGZWF0dXJlID0gLyoqIEBjbGFzcyAqLyAoKCkgPT4ge1xuICAgIGxldCBUd2l0dGVyRmVhdHVyZSA9IGNsYXNzIFR3aXR0ZXJGZWF0dXJlIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSBDb3JlLndhbGxldCgpO1xuICAgICAgICAgICAgY29uc3Qgc2VydmVyID0gQ29yZS5jb25uZWN0KHsgdXJsOiBcIndzczovL2V4YW1wbGVzLmRhcHBsZXRzLm9yZy9mZWF0dXJlLTJcIiB9KTtcbiAgICAgICAgICAgIGNvbnN0IHsgYnV0dG9uIH0gPSB0aGlzLmFkYXB0ZXIud2lkZ2V0cztcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIFBPU1RfU1RBUlRFUjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZCB0d2VldCB0byB0aGUgRXRoZXJldW0gcmVnaXN0cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlYzogKGN0eCwgbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQuc2VuZEFuZExpc3RlbignMScsIGN0eCwge30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBQT1NUX1NPVVRIOiBbXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsOiBcIkRFRkFVTFRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiREVGQVVMVFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNlcnZlci5saWtlX251bSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGV0aGVyZXVtX3BuZ18xLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWM6IChjdHgsIG1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLnN0YXRlID0gJ1BFTkRJTkcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQuc2VuZEFuZExpc3RlbignMScsIGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0ZWQ6ICgpID0+IG1lLnN0YXRlID0gJ0VSUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiAoKSA9PiBtZS5zdGF0ZSA9ICdERUZBVUxUJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQRU5ESU5HXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1BlbmRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkVSUlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBldGhlcmV1bV9wbmdfMS5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWM6IChjdHgsIG1lKSA9PiBtZS5zdGF0ZSA9ICdERUZBVUxUJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgUE9TVF9DT01CTzogW10sXG4gICAgICAgICAgICAgICAgRE1fU09VVEg6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRlKCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaEZlYXR1cmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0KFwidHdpdHRlci1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgVHdpdHRlckZlYXR1cmUucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcbiAgICBUd2l0dGVyRmVhdHVyZSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBJbmplY3RhYmxlLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG4gICAgXSwgVHdpdHRlckZlYXR1cmUpO1xuICAgIHJldHVybiBUd2l0dGVyRmVhdHVyZTtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyRmVhdHVyZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=