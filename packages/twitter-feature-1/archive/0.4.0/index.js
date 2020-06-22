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

/***/ "./src/gnosis.png":
/*!************************!*\
  !*** ./src/gnosis.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

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
const gnosis_png_1 = __webpack_require__(/*! ./gnosis.png */ "./src/gnosis.png");
const EVENTS_DEF = {
    TX_SENT: (op, m) => m.type === "TX_SENT",
    WC_CONNECT: (op, m) => m.type === "WC_CONNECT",
    SWARM_NODE: (op, m) => m.type === "SWARM_NODE",
    SWARM_SENT: "SWARM_SENT"
};
let TwitterFeature = /** @class */ (() => {
    let TwitterFeature = class TwitterFeature {
        constructor() {
            const wallet = Core.wallet();
            const server = Core.connect({ url: "wss://examples.dapplets.org/feature-1" });
            const { button, badge } = this.adapter.widgets;
            this.config = {
                POST_STARTER: [
                    {
                        label: 'Attach tweet to prediction market',
                        exec: (ctx) => {
                            const overlay = Core.overlay({ url: 'https://examples.dapplets.org', title: 'Gnosis' });
                            overlay.sendAndListen('tweet_select', ctx, {
                                'pm_attach': (op, { market, tweet }) => {
                                    wallet.sendAndListen('1', ctx, {
                                        created: () => {
                                            overlay.send('tx_created');
                                        }
                                    });
                                }
                            });
                        }
                    }
                ],
                POST_SOUTH: [
                    button({
                        initial: "DEFAULT",
                        "DEFAULT": {
                            label: server.pm_num,
                            img: gnosis_png_1.default,
                            disabled: false,
                            exec: (ctx, me) => {
                                const overlay = Core.overlay({ url: 'https://examples.dapplets.org', title: 'Gnosis' });
                                overlay.sendAndListen('tweet_select', ctx, {
                                    'pm_attach': (op, { market, tweet }) => {
                                        me.state = 'PENDING';
                                        wallet.sendAndListen('1', ctx, {
                                            rejected: () => me.state = 'ERR',
                                            created: () => {
                                                me.state = 'DEFAULT';
                                                overlay.send('tx_created');
                                            }
                                        });
                                    }
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
                            img: gnosis_png_1.default,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvZ25vc2lzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSwrRUFBZ0IsdzVHOzs7Ozs7Ozs7Ozs7QUNBbEI7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQscUJBQXFCLG1CQUFPLENBQUMsc0NBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0NBQStDO0FBQ3hGLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCx3REFBd0Q7QUFDbEg7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsd0RBQXdEO0FBQ3RIO0FBQ0EsdURBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLGlDQUFpQztBQUNqQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FZQUFBQlhBdm1IQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUoza2xFUVZSbzNzVmFlNHhjVlJrL003dExpNWhJb2xBd0tpU2swWWdFTkpHSENMV2d4QlNEZnhFMVl0US9TQWpSQUVVZUNTVWFBc1lvZjVCVWdRUmZDZHc3ajUzZDdxT1BMYTVCbkhOblozZW51OTIybEMwdEJBcEpnVWlzRk5MdTdzeU92Ky83empuMzN0bloyYnN6SzA3eTVjN2VPZmQ4cjkvM09uZVYybEZKdFUzOWszUlZxbThpcFhyTEtaVWJTNnZzV0pmS2xrQkJkK3hLdjlFYVdrdlB5TE9kVTl1Q0QreFRxbmM4cFRLbEhwVUpldFRndEZyeHMzZFc4VnA2aHA2bFBUcFZaTlhXcGl0Wk1WTWl5NmFjY0gyVDNjb1BQcWY4MGtibDZ5dEExNE91QlYySCs1ZmgvbWZ3WEk5YlQ4K1NJdmx5bXZlTTdyK21DdGpOQjJFdGdrRytsSFpDekp4UUVPNW1DUGxiMEE3UWE4clQ3NmxjdWE1R1hxbXJYWWR4UFZMSHZYbjhkaFEwQUhvY3oyeFJKeFpDenhUR1VvQmV1aTBsRWltd2EwYXh0ZXpITDUwRFFaNEFIUURqdXZyYnEzVTFzTCtPdjRuZUEvM0QwSXVnVWRDN2dFNWQ5ZTJycXoyemRkVTdnWFhGZzdqL0ZKUzUwdTFMOEZvdHRGcGFuYXd4VUpHTjZkTUxKWHo5SzlCSnRSY1d6bytUd0VkZzRSRUljb2ZLNkhPVlA5YXRjbE1JNXNrdVJ4a0V0aDlzd0Q0M1lQMkRFTDZNNnp4N3lOT244ZjB2K1AwckFxMEF5UUN3R3A1V0VUbmFVSUNzUVBqTUdzajR3ZGZBYUlJaElkWW15SHdidjM5S3RmUHhnNi9pK1QrQlBsUzdYeVpGUHNEM24wVmlwRnNOVGFuVks4QjRueUs4ZC9GR1EvdlQyUGdSTUpoamkvbDZEMmh6VEJpYktndHdmMkZDZ2p4S0JaTm04NVJtSVZnRzYrT0svSm5qWk9nQTdROXZsajRya0lMSFJ3KzNWbUxKRFU2UDVUQzcrUHIzYktGQ2hUYS9LeUowaXFGRlhrcWEyMTJRWW4yMklZdFJMUGo2Qk1lVHIvZERpUXVORXQwdGxWaHl3d3FmSDF1UGpiWWJxeUNEQkQvbCs4TVZFcjZMMTdXYng2MGl0QWNWdmx4Z1lLb3ZoU2YyY0xDTEVoYzRPQkd2UkFyUVlySElGczR3T3cvVkdVTEM0R3lHUTdzNWU3bTZRbGkzaVVMNFRLbWhnOFFYbWFxMGdlOVJDbStwZ0kzNHZzbVV3NzhmM00yWmhuSzdIM3pMNFhMM1RMSU1rVlNKUEdJblo1T0YzZ3ArWjFRL2UrRnB5TEplSFQ4dTNtckdMNTU1S3RJZXhMUEZ2ZXhTVDUvQzkwMU9DV0xjaVJkc2NTUitsQUFzTC9LNlpMbnRUZ1pTMENyYlVnRXJmRVp2d0dhWFJwVFl5a0hzNmYrRVNnUm50YTJBRlo3VGRHQ0Z2d2VHcWFzZDB5VDhrN0hnem9IWDhJelVwRVorc1UzenpvMi80YlRwQnpkRk5yckxLRUdldUtGdE9Ma0FKc3NIb2VWWitDbXgvSjdES1NQSDNWTGRnKzlLSE1CVGpjRWNXdDlrbjB4d01ZUjhpekhvb2NwbXhsSGVkYXJCRSszQmFWbllPTXR2VnlNdnA5U3pMMWdGL3FxZVAwYjNkNm9kNDhoV1pVRkpsSS81b3NMc294L2paa3cydk0wSW1lNFlUa2xnVTYrYm5xaTB6c2p5UTlPdVZMSDJsZ2FER1FWY2UydzMxZG9FMFZHWGgzUEJPbXh3VWR0d1NnSWJLN3l2ZndLNjJPVC84N2dlN0QxYVo4UGFoaS9LSTI3OTRGcnVIQWRuNklFOEdCcExCTlRidjk0UUU4bmdsQVEybzdNaFJLbnFreEpoVGZpN3FVVVRNT2o1cmlZNEJlZ0xRWUErbm42WXJjL3RyaDRDazQrYlRSNVN1MmZwM3IrY3haUEFLUWxzZGgrMHd2K0M3eGNtNmY2MmlBSXY4ajFwWmE0Mm51bHlNSkp5anA3a244ZFNiUFcraXQya2w5c0oyV1Nid0twWWc3RHZnOWszRThPcEZXeEdEbG5oNytlNDg0dW5UY040WTBTQlFCUmdtWDVuMmh3cHVLd0F1VU9HbFBPeG9JSy82N0ladSt3Q3crRHIrUHNENVJVWE9hMkp4VGV2Q0tkV3NDbTlHUlpLR25iODRqeno5dlhib0kzbU40eWordC9NazU3MTlMaktUc2graFFtalFOYTFEVi9FZ3BPU2Q0dHpodEdWRVVzOHcxN3c0QVZpS01MZTBocE8rcXdtc1BtRDJ1bGc4eUQzUFAxVFlqUmE0d2NoL2oxNG5uc2llRWFNcW5sQTRobmNLV0F0aEFGOFlKb0VwUGwxZ2FGRXpOd0F6blBCTXp5QWVKbzhRZlFDR0Y2NERKeHVOUHZlRjRQTjRmZHBYZHI5NXVzU0JDektjSU9xbXoxZzkvb1NHMVNNVlJVdjhkQWpzS2JaUXhSdzZmTTZrMzNtQkNxd05PUE9OSEhoWkxaSmVjR1BjZjJPNmk5M083aGtkSS96aEJUQmQ5Z0FucTZ4WWFLcHNsQk94WWFheGsrMjlFbXNMeHJjTDdBc29zQ0gzQkUzS0dBTDJQVnErS0FvNEVNQjBscndmdElwc1dRc0JFUnMvWWczZ0ZzNWs1RkJwS3Q4S3N6endWV0E3Ym9XbytaTldQOEtDKzlCZUd0TWlaTXpUUlJ3RUxxS21YcEZhS3hyQWhNOFNFcUlKWjVFVUg4YUtYRjlFNlowRm5RNzE0c29uTEpqQXNQUkk3WTFlTURBNzNuUXJad1dmYjBKZks3bWVkalgweHlzWEgxWmprV1doWWpqQXdHZUNkWTFLT0NDK1BQWS9GMkhPZkdDOFFRVUVVc2VNOFA4NDZDSGNYOGJycytCVHFuaFF6YUFvM1hpWmpSZ0g0dW55a0FDbGhMQzRBSHhFazE5TnBCOXRyZ0lMMW12eGpMUWJ4NVNhcmJTRU1SNWswWXpwVS93V1k1WWUxNGVMTllpM2xqZ05FZU1DR3E3WHBLRHEvQTg2QXhiWE9yRTVpVXpoUlZPb0ZrMVBPWU1aT2ZNMzlXUXA3a0tMUmk1bnBEakhYZkdtakxubXk0clBPY0NtUzFoWFZnMFNsQkFNYU16UW96Sk9jTjRrWDhUSlU2NVlrZXdFZUZySW5qUndtSXhHWmw5eFZCM3VvUVM2NFhDVnVMbmtxdVJTajJuZlJKR05RYzVVakxQN241YlR0NjA5VkRWUVNLcDhCNTduL2F1Y216NCtzdExXNG4reUF5Y0NiNkFSY2ROMGFnYXF5MG1Wb0lac3BCVkRqcjJadEVLc1JpQlJGTHIxOWo2VXBOR1ZMWjhqclFTNVpnSFVzWUxQYTU1NGdkTU5rcXVRRVFSb3dUWGxKandxOXlIbFRqTkNjTFh2NHcxaTBzbU10Y1RCVnZNNGV2cVhiNjJKTUdiczNBc1hiU2tsWTRwUUZvNUpZQmRLZjN6L3ljbHhJdVVzYVMxLzVHcitEdjNxMllqcFNnUkZyWExwQjYwbXprNm9CQnlWZE9kdm9ZVW11YWpsV2FIdlRFRlpMUzByY1dqSmdndGptc2ZtZVZ0QW1Icm94ZzJwczVsRmVCVHNyS0JFYjB5MHA3cW5UUnA5WC91aGREeXhJL2JFRXhwY3B5UzVuclY4bURMS2tFdkZtd3M1TWE3c09GYnBnck9SZnFqMmhvSHE2MGprdk5sQmk2WUF3V0J6M0lIeWNzZWY5aDR5S0RKbzlkRzNCSVhUZFdOTWx3RHEzc200MGozVytPY256RnpCaGx6Y044cWp0ZHRYZURVV2dxUEdqM015SFJHYXNlL0VLKzFOY0Q3ZkdTVXZUYzhFeTJ2ZkFyZTh2aVAzSmFOOVB1Ky9pTVBGVkxvR3B1dmxaU0o5bFExMXp2UlZTRDZEaDhsMmc5MUI0UDdWSHZ2eUtKS1JNK043RURpNjJjNVEvSFJPMEdnYUx2TGhSQml1dWJhQy9sZU5kUFZQQ3ROaWxCbkszMytJOWozRXBkdEtKRU1WRHA0eWRmc2hWK0IzOHFMTjhhUGtUZSt3WWRPcEFRZlJVN0plUkpuajJKdENkRWFzalN0bzhaTW1yT251ZVpFWCt3bEZYeFZiK3FqYjFPSVNhNGM3Zld2NFlIYzQ4SDhFTC9ueXZBUnlLTHJSTVVMYi9ERTVmSDc0MThqcmk2SnZCL3U0c0hLUW1aTlgzUTMvUitKc2h4V2pjNDJEdVBuUXFITFFiZUJ2Z2Y2UHVnSG9Gc2g1RWJrOHA3WStueFpxbjhuL3dEUzBic3RZaHkrT3UxWjhkMXczNFIwa3lTMGZXVVVwWS9zdjFXYWVxYWlqREpkY3N6U1FKUlZPbm16dVF6OUYxUzg2Z1F0WWdDNkFBQUFBRWxGVGtTdVFtQ0NcIiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGdub3Npc19wbmdfMSA9IHJlcXVpcmUoXCIuL2dub3Npcy5wbmdcIik7XG5jb25zdCBFVkVOVFNfREVGID0ge1xuICAgIFRYX1NFTlQ6IChvcCwgbSkgPT4gbS50eXBlID09PSBcIlRYX1NFTlRcIixcbiAgICBXQ19DT05ORUNUOiAob3AsIG0pID0+IG0udHlwZSA9PT0gXCJXQ19DT05ORUNUXCIsXG4gICAgU1dBUk1fTk9ERTogKG9wLCBtKSA9PiBtLnR5cGUgPT09IFwiU1dBUk1fTk9ERVwiLFxuICAgIFNXQVJNX1NFTlQ6IFwiU1dBUk1fU0VOVFwiXG59O1xubGV0IFR3aXR0ZXJGZWF0dXJlID0gLyoqIEBjbGFzcyAqLyAoKCkgPT4ge1xuICAgIGxldCBUd2l0dGVyRmVhdHVyZSA9IGNsYXNzIFR3aXR0ZXJGZWF0dXJlIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSBDb3JlLndhbGxldCgpO1xuICAgICAgICAgICAgY29uc3Qgc2VydmVyID0gQ29yZS5jb25uZWN0KHsgdXJsOiBcIndzczovL2V4YW1wbGVzLmRhcHBsZXRzLm9yZy9mZWF0dXJlLTFcIiB9KTtcbiAgICAgICAgICAgIGNvbnN0IHsgYnV0dG9uLCBiYWRnZSB9ID0gdGhpcy5hZGFwdGVyLndpZGdldHM7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBQT1NUX1NUQVJURVI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBdHRhY2ggdHdlZXQgdG8gcHJlZGljdGlvbiBtYXJrZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlYzogKGN0eCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBDb3JlLm92ZXJsYXkoeyB1cmw6ICdodHRwczovL2V4YW1wbGVzLmRhcHBsZXRzLm9yZycsIHRpdGxlOiAnR25vc2lzJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnNlbmRBbmRMaXN0ZW4oJ3R3ZWV0X3NlbGVjdCcsIGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG1fYXR0YWNoJzogKG9wLCB7IG1hcmtldCwgdHdlZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LnNlbmRBbmRMaXN0ZW4oJzEnLCBjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc2VuZCgndHhfY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFBPU1RfU09VVEg6IFtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw6IFwiREVGQVVMVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJERUZBVUxUXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2VydmVyLnBtX251bSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGdub3Npc19wbmdfMS5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjOiAoY3R4LCBtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gQ29yZS5vdmVybGF5KHsgdXJsOiAnaHR0cHM6Ly9leGFtcGxlcy5kYXBwbGV0cy5vcmcnLCB0aXRsZTogJ0dub3NpcycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc2VuZEFuZExpc3RlbigndHdlZXRfc2VsZWN0JywgY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG1fYXR0YWNoJzogKG9wLCB7IG1hcmtldCwgdHdlZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLnN0YXRlID0gJ1BFTkRJTkcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5zZW5kQW5kTGlzdGVuKCcxJywgY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdGVkOiAoKSA9PiBtZS5zdGF0ZSA9ICdFUlInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5zdGF0ZSA9ICdERUZBVUxUJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc2VuZCgndHhfY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBFTkRJTkdcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUGVuZGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRVJSXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGdub3Npc19wbmdfMS5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWM6IChjdHgsIG1lKSA9PiBtZS5zdGF0ZSA9ICdERUZBVUxUJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgUE9TVF9DT01CTzogW10sXG4gICAgICAgICAgICAgICAgRE1fU09VVEg6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRlKCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaEZlYXR1cmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0KFwidHdpdHRlci1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgVHdpdHRlckZlYXR1cmUucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcbiAgICBUd2l0dGVyRmVhdHVyZSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBJbmplY3RhYmxlLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG4gICAgXSwgVHdpdHRlckZlYXR1cmUpO1xuICAgIHJldHVybiBUd2l0dGVyRmVhdHVyZTtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyRmVhdHVyZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=