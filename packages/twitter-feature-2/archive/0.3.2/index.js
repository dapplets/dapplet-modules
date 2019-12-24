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
var ethereum_png_1 = __webpack_require__(/*! ./ethereum.png */ "./src/ethereum.png");
var TwitterFeature = /** @class */ (function () {
    function TwitterFeature() {
        var button = this.adapter.actionFactories().button;
        this.config = {
            connections: {
                likes: Core.connect("wss://examples.dapplets.org")
            },
            TWEET_SOUTH: [
                button(function (ctx, setState, _a) {
                    var likes = _a.likes;
                    return ({
                        "DEFAULT": {
                            label: likes.like_num,
                            img: ethereum_png_1.default,
                            disabled: false,
                            exec: function () { return Core.sendWalletConnectTx('1', ctx, function (e) { return setState({
                                CREATED: "DEFAULT"
                            }[e.type] || e.type); }); }
                        },
                        "PENDING": { label: 'Pending', loading: true, disabled: true },
                        "PAIRING": { label: 'Pairing', loading: true, disabled: true },
                        "REJECTED": { label: 'Error' }
                    });
                })
            ]
        };
    }
    TwitterFeature.prototype.activate = function () {
        this.adapter.attachFeature(this);
    };
    TwitterFeature.prototype.deactivate = function () {
        this.adapter.detachFeature(this);
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
}());
exports.default = TwitterFeature;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V0aGVyZXVtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLCtFQUFnQixvOEg7Ozs7Ozs7Ozs7OztBQ0FsQjtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxxQkFBcUIsbUJBQU8sQ0FBQywwQ0FBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MseURBQXlEO0FBQ3hHO0FBQ0EsNkJBQTZCLG9CQUFvQixFQUFFLEVBQUU7QUFDckQseUJBQXlCO0FBQ3pCLG9DQUFvQyxrREFBa0Q7QUFDdEYsb0NBQW9DLGtEQUFrRDtBQUN0RixxQ0FBcUM7QUFDckMscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FZQUFBQlhBdm1IQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5WnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVE00SURjNUxqRTFPVGd5TkN3Z01qQXhOaTh3T1M4eE5DMHdNVG93T1Rvd01TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRjZ0tGZHBibVJ2ZDNNcElpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rUTVOelJHTURRNVFVWTNNekV4UlRrNE9EWkRRME0zUWpNeU5qUXlSalpHSWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tRNU56UkdNRFJCUVVZM016RXhSVGs0T0RaRFEwTTNRak15TmpReVJqWkdJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UkRrM05FWXdORGRCUmpjek1URkZPVGc0TmtORFF6ZENNekkyTkRKR05rWWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZSRGszTkVZd05EaEJSamN6TVRGRk9UZzROa05EUXpkQ016STJOREpHTmtZaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6NjNJdGJiQUFBSU8wbEVRVlI0MnRSYUMxU1Q1eG4rQ0NUaEZralEwZE1pYXNUWldhMVFvRlFtQ09wYTFwNk9kY082SGp2UFFjUlRjWXJiY1ZvdkFTOVVSTXJOTTYxRnhTQmVwdWowbklDVkVLSlVVYkJqcmhOQlNBS29FR0VpU0c0RVNNaS85NDJtWldpQVlDTHBkODUvU1BKLy8vZTl6L3U5dCtmOUlSUkZFVnRkcmEydEhueiswVWhiN2tFak5oelYxZFZManhia0g1WklKQjYyMnNObUFCcWJtaWIrNTlhdDdScU54aTh0TFczSFR3cUFYcThucGFXaW5RYmk4QXFMeFNJbFF1SHFrcEtTb0o4TWdCczN2bnVuVlM2UFo5THB4dThNSnBQeEpReVZTdVZvOXdDNnU3dHBWeXNxTXBrTUJ0MzBtN096TTJtUVNCWWNQSFRvVTdzSElCWmZpbE5wTlBOb3RCK1h4bWpCOHZBZ2gvUHlkb05EZTlrdEFGbGpvOCt0bXBwMEZ5YnptWHVPQUtpbnArZTFQZW5wMit3U0FEcXVTQ1JLaFk4Y2MzTlk3dTZrVkNUNjdNS0ZDMEYyQjZDcTZrWmtpL3pCSCtsMCtyRHp3QitZNlJrWkdRcUZnbVkzQU1CeG1lQzRHYzRNeG9qcmdYT1RScGtzTWpjM2Q1bmRBQkNKTDMybTZla0pHdXk0d3cxMDZDUDUrU24xOWZVVHh4MkFWQ0o5N1haTnpYYm41eml1dVlFT3JkVnFmZFBTMDNrWW9jWU5nTDVmUjByTFJMc2RIQnc0bGo2TERpMFdpMWNYRlJVRmp4dUE2MVZWa2ZJSGJaODZPVG1ONlhsd2FIcEdWbFlHK0pERFN3ZlExZFhGcUxoMkxSTk1aOHpsQVpxZHJGRVdjZURBMTdFdkhVQnBtVGloUjZzTkhNNXh3YlNNbDdtQjl1L3A0VW55QzQ2bTFOYlZlYjgwQUEwTkRaUHFhbXVUekRrdWdzSjhvTlAxRTIxdnIvRzdPU0RvMEwyOXZUNlFvYmVPeGFFdEJ0RGYzMDlFWldXN1FLZ0p6d2pqNkdnVUhBUWl0WFcxUkZoYVNpVDE5ZVRSbzBla3Q2L1BDT0o1SjRZT2Zmbnk1UVNCUUdCeGhuYXdGUFhsOHZLSU12R2xjaGVvTUUwRG5SZ1YvTGhiUVpxYkdzbmR1M2NKRUJuaUJHRGE1SEtpN080bU5Kamo2dXBLUENBSHVNQmZCR0l3R0g1VWpFNUh2TDI5cTRvRmd2bHNObHRua3hQbzdPeDB1bjY5TWh1ektXb1RCVWV0ZHp6cUlKV1ZsVUJpaEtTMnR0YW9iVHJNTVdtYkJuTndQaFJ6cEwyOW5Ud0FVQ3FsOGdtbmZXcGVEQUI3dDdsNTd2NzkrK050ZGdKL1AzMzZ6M2ZxN21TN3Via1ppN2YyOWpZaWxjbElXMXNiR1lEdnFQSEJ0bzZmNVMwdFJLMVNFWWNoNVRWZWFHNTRJdTV3MFVFWkF3TURSS2ZYUHp4MzltekE3Tm16MjZ3S0FBaUpiMkhobVg5VGxHRkNhMnNya1lIZ0hSMGRUMHpJVEFGbkRzQlFJSGlTN3VBSExFOVBvZ01mbXhjV2xsZVFueDgvWEFTekNJQmFvM0dDb3owSkpQM2plL2Z1RVFYYU5BamtPRUlDR3duQVVDQzRKZ0xCazhqS3lucC8yYkpsSlZieGdaYjc5My8yemNXTDNLdFhyeEtsUW1HMGI4Y3habDl6UUUzK2dxY0tVYXUvdXJwNjFtaVVPeW9BTTJmT2JEdDE4dVF2NDJKajEwRGtlSUFSeHRxc1NnZFJDTmQ5MDkrL0JPcWplWHYzN3MyMG1na05hVmI1d3VKYnJsZFdyblJ4Y1hIRTAzZ1JFOEw5SWFNVEx3NUh0bkhqeGgxcjE2NDlqdUhXcWxGSXBWTFJsRW9semNmSFI0L2ZNWDcvNC96NStRZSsrbW9YeFB3d3JPK2ZsNkJHQWdBbE5jNVJnNjMvamNmalpmajUrWFhoNzhEV25KRDhCd1VGUFJ5Slk0ektoRURUMVBmZjM1b3RFQlQ5QVdNNUx2cHhUTXlWTTRXRjRTdmo0K01vZzZGWnJWYVAydDVONWhJUzhzNTVvVkFZeXVmenQ1aUVMeEVLMzRwYnNTSUpUb0UyS29JMDJpYXFWdHRMejh6SzV1OUovL0tibXpkdnZqSDRYazFOalhkOGZIeW0zL1RwL1cvTW1rVUZCQVlhcjdlQ2dpaklycFFyS0FCeUI0V0t3QzFmZWZYVm1uMzc5djIrRHhLZWFRMnBWTXBaczJiTmJ2YUVDYXJDd3NJRm81WExvazZ3WEM1M1M5NjIvZDdtclR3MVA3OGd0YVdsaFRQNHZxQ282TzMzb3FKRTNHblRxRGZuelBrL0FLQk5DaEpYWjBKQ1FoSTg1Mlo2Qmt5VFpPZmtmREluSUtBQlRKSGE4UG5uR3kyUnllSjJka1hGdGZBdHZDUjlVdkkyYXNmT0ZFbFJjZkVuWUxNLzNBZHlnZ0l0Z1JPNDgvUFhYNmRZTEpaUjZ3c1hManhlVVZIaE4zaXQ0dUxpZ0YrOSsyNnh6NlJKMU9TcFU2bEZpeFlKa2R4WUlvL0ZVUWpuSHo5eFluT0RSSmJLWk5DTmRRK0h6YjRRSGg2Vy9IWnc4RTJUM1Vxa1VuWk9kdmFtOHZMeThQWHIxNmNzWDc2OHhIUVA2aVZ2QUxtMVZDUmFDVFdRQzBZeXlNQVBUNTQ0RVJ3U0V0SmkwMnIwYVJ1RmZ2RFE0WXNRUlJaaE1ZZVpFNnBKTFhmS2xLOUJpM3U0M0tuL0hSVEJDSGFvamNYZzQ4ZmtZRzd1aW9Kang1SWdHRXpCTWhxZEduNm5ObTNZc0NReE1mR3N6Y3RwMDdoOSt6YjNWT0daZndHcCtZSFFZM1FCZ2U0SCtQdW56SStNT09MRlpodE1wd1poTnhUeXg2N21wcVlGR0hZZG41NkdDcUxYdk5EUTNJS0NnbFZqNGRZT0w5TFdFQWlLbDl6NDUzZW5CM01EWEEvTnlvUEZLbDhRR2NHREUyck55Y25obFYrNUVnc2szZ2xabkdsUHFEeVIyTmVmUDNjdWRCcVgyejJtTXVSRkFDRHpPblE0ancrMVMrelFscUtKcklqS1JCcElkbTZlSHMrK1pWSW9sZnFjckt6NU1URXhsZVBTVnNHKy8yK2pveFBCT2FWREZXSGl4VkRudXcwdERkRHVRWGl5ZVBIaUhTOGl2RlU2YzVNbis2b2lJeUlTdEgxOUJuT1o5M2tsQkpmTC9UYVp4MHV6aTk0b2hGRHhETC9wS2IxQVJrWWFBMkJhWUY2ZHFWOThFY2ZoY1BSMkFRRE5KVHI2dzFSM1Y5ZHJHRktIRzhnbkVsYXQra3RZV0ZpVFhiMGY4UEx5NnY5MVZGUXM1QVBsTU15T3pKMDdsNzl1M2JwamR2ZUNBMGRBZ0w4c01EQXdFWnRaUXdlR1RFaGNkYnRUVS8vS0dJWkRqQ3NBSE85SHZYZlVlK0xFVTlpMUdEdzBhclZoODZaTnEyZk1tTkZsYlRabjFZRWhNenI2TjZ2aFl5UG1naWNoVTBGKzk5RkhxVXVYTHYzVzJ2dlo1RVUzaE1qSEVKbitoUFUrWnVVcHZwTXJrNU9UZDlwaUw1djlGd21hVU42Ui9NekE0R0NsU0NUNmhhMzJJYmI4Vnhna1BFQVhQN0RsSHY4VFlBQ3B2Ry82bzU0WU5nQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGV0aGVyZXVtX3BuZ18xID0gcmVxdWlyZShcIi4vZXRoZXJldW0ucG5nXCIpO1xyXG52YXIgVHdpdHRlckZlYXR1cmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUd2l0dGVyRmVhdHVyZSgpIHtcclxuICAgICAgICB2YXIgYnV0dG9uID0gdGhpcy5hZGFwdGVyLmFjdGlvbkZhY3RvcmllcygpLmJ1dHRvbjtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGxpa2VzOiBDb3JlLmNvbm5lY3QoXCJ3c3M6Ly9leGFtcGxlcy5kYXBwbGV0cy5vcmdcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgVFdFRVRfU09VVEg6IFtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbihmdW5jdGlvbiAoY3R4LCBzZXRTdGF0ZSwgX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGlrZXMgPSBfYS5saWtlcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJERUZBVUxUXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsaWtlcy5saWtlX251bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogZXRoZXJldW1fcG5nXzEuZGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENvcmUuc2VuZFdhbGxldENvbm5lY3RUeCgnMScsIGN0eCwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUkVBVEVEOiBcIkRFRkFVTFRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVtlLnR5cGVdIHx8IGUudHlwZSk7IH0pOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUEVORElOR1wiOiB7IGxhYmVsOiAnUGVuZGluZycsIGxvYWRpbmc6IHRydWUsIGRpc2FibGVkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUEFJUklOR1wiOiB7IGxhYmVsOiAnUGFpcmluZycsIGxvYWRpbmc6IHRydWUsIGRpc2FibGVkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUkVKRUNURURcIjogeyBsYWJlbDogJ0Vycm9yJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFR3aXR0ZXJGZWF0dXJlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoRmVhdHVyZSh0aGlzKTtcclxuICAgIH07XHJcbiAgICBUd2l0dGVyRmVhdHVyZS5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuZGV0YWNoRmVhdHVyZSh0aGlzKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3QoXCJ0d2l0dGVyLWFkYXB0ZXIuZGFwcGxldC1iYXNlLmV0aFwiKSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG4gICAgXSwgVHdpdHRlckZlYXR1cmUucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcclxuICAgIFR3aXR0ZXJGZWF0dXJlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgSW5qZWN0YWJsZSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXHJcbiAgICBdLCBUd2l0dGVyRmVhdHVyZSk7XHJcbiAgICByZXR1cm4gVHdpdHRlckZlYXR1cmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFR3aXR0ZXJGZWF0dXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9