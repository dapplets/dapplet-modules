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
let TwitterFeature = class TwitterFeature {
    constructor() {
        const overlay = Core.overlay({ url: 'https://localhost:8080', title: 'Gnosis' });
        const wallet = Core.wallet({}, EVENTS_DEF);
        const server = Core.connect({ url: "wss://localhost:8080/feature-1" });
        const { button } = this.adapter.widgets;
        this.config = {
            //TWEET_EVENT: [server.bind],
            TWEET_SOUTH: [
                button({
                    initial: "DEFAULT",
                    "DEFAULT": {
                        label: server.pm_num,
                        img: gnosis_png_1.default,
                        disabled: false,
                        exec: (ctx, me) => {
                            let err = me.setState(me.state == 'DEFAULT' ? 'ERR2' : 'DEFAULT');
                            console.log('err', me.state);
                            setTimeout(() => err.label = "ABCD", 1000);
                            /*
                            overlay.sendAndListen('tweet_select', ctx, {
                                'pm_attach': (op, { market, tweet }) => {
                                    console.log('pm_attach', op, { market, tweet });
                                    wallet.sendAndListen('1', ctx, {
                                        rejected: () => me.state = 'ERR',
                                        created: () => {
                                            me.state = 'DEFAULT';
                                            overlay.send('tx_created');
                                        }
                                    });
                                }
                            })
                            */
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
                        exec: (ctx, me) => me.setState('DEFAULT'),
                        NEXT: "ERR2"
                    },
                    "ERR2": {
                        label: 'Error2',
                        img: gnosis_png_1.default,
                        exec: (ctx, me) => me.setState('DEFAULT')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvZ25vc2lzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSwrRUFBZ0IsdzVHOzs7Ozs7Ozs7Ozs7QUNBbEI7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQscUJBQXFCLG1CQUFPLENBQUMsc0NBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpREFBaUQ7QUFDdkYscUNBQXFDO0FBQ3JDLHFDQUFxQyx3Q0FBd0M7QUFDN0UsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxnQkFBZ0I7QUFDbkUsa0VBQWtFLGdCQUFnQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQVlBQUFCWEF2bUhBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBSjNrbEVRVlJvM3NWYWU0eGNWUmsvTTd0TGk1aElvbEF3S2lTazBZZ0VOSkdIQ0xXZ3hCU0RmeEUxWXRRL1NBalJBRVVlQ1NVYUFzWW9mNUJVZ1FSZkNkdzdqNTNkN3FPUExhNUJuSE5uWjNlbnU5MjJsQzB0QkFwSmdVaXNGTkx1N3N5T3YrLzd6am4zM3RuWjJic3pLMDd5NWM3ZU9mZDhyOS8zT25lVjJsRkp0VTM5azNSVnFtOGlwWHJMS1pVYlM2dnNXSmZLbGtCQmQreEt2OUVhV2t2UHlMT2RVOXVDRCt4VHFuYzhwVEtsSHBVSmV0VGd0RnJ4czNkVzhWcDZocDZsUFRwVlpOWFdwaXRaTVZNaXk2YWNjSDJUM2NvUFBxZjgwa2JsNnl0QTE0T3VCVjJIKzVmaC9tZndYSTliVDgrU0l2bHltdmVNN3IrbUN0ak5CMkV0Z2tHK2xIWkN6SnhRRU81bUNQbGIwQTdRYThyVDc2bGN1YTVHWHFtclhZZHhQVkxIdlhuOGRoUTBBSG9jejJ4Ukp4WkN6eFRHVW9CZXVpMGxFaW13YTBheHRlekhMNTBEUVo0QUhRRGp1dnJicTNVMXNMK092NG5lQS8zRDBJdWdVZEM3Z0U1ZDllMnJxejJ6ZGRVN2dYWEZnN2ovRkpTNTB1MUw4Rm90dEZwYW5hd3hVSkdONmRNTEpYejlLOUJKdFJjV3pvK1R3RWRnNFJFSWNvZks2SE9WUDlhdGNsTUk1c2t1UnhrRXRoOXN3RDQzWVAyREVMNk02eng3eU5PbjhmMHYrUDByQXEwQXlRQ3dHcDVXRVRuYVVJQ3NRUGpNR3NqNHdkZkFhSUloSWRZbXlId2J2MzlLdGZQeGc2L2krVCtCUGxTN1h5WkZQc0QzbjBWaXBGc05UYW5WSzhCNG55SzhkL0ZHUS92VDJQZ1JNSmhqaS9sNkQyaHpUQmliS2d0d2YyRkNnanhLQlpObTg1Um1JVmdHNitPSy9KbmpaT2dBN1E5dmxqNHJrSUxIUncrM1ZtTEpEVTZQNVRDNytQcjNiS0ZDaFRhL0t5SjBpcUZGWGtxYTIxMlFZbjIySVl0UkxQajZCTWVUci9kRGlRdU5FdDB0bFZoeXd3cWZIMXVQamJZYnF5Q0RCRC9sKzhNVkVyNkwxN1dieDYwaXRBY1Z2bHhnWUtvdmhTZjJjTENMRWhjNE9CR3ZSQXJRWXJISUZzNHdPdy9WR1VMQzRHeUdRN3M1ZTdtNlFsaTNpVUw0VEttaGc4UVhtYXEwZ2U5UkNtK3BnSTM0dnNtVXc3OGYzTTJaaG5LN0gzekw0WEwzVExJTWtWU0pQR0luWjVPRjNncCtaMVEvZStGcHlMSmVIVDh1M21yR0w1NTVLdElleExQRnZleFNUNS9DOTAxT0NXTGNpUmRzY1NSK2xBQXNML0s2WkxudFRnWlMwQ3JiVWdFcmZFWnZ3R2FYUnBUWXlrSHM2ZitFU2dSbnRhMkFGWjdUZEdDRnZ3ZUdxYXNkMHlUOGs3SGd6b0hYOEl6VXBFWitzVTN6em8yLzRiVHBCemRGTnJyTEtFR2V1S0Z0T0xrQUpzc0hvZVZaK0NteC9KN0RLU1BIM1ZMZGcrOUtITUJUamNFY1d0OWtuMHh3TVlSOGl6SG9vY3BteGxIZWRhckJFKzNCYVZuWU9NdHZWeU12cDlTekwxZ0YvcXFlUDBiM2Q2b2Q0OGhXWlVGSmxJLzVvc0xzb3gvalprdzJ2TTBJbWU0WVRrbGdVNitibnFpMHpzanlROU91VkxIMmxnYURHUVZjZTJ3MzFkb0UwVkdYaDNQQk9teHdVZHR3U2dJYks3eXZmd0s2Mk9ULzg3Z2U3RDFhWjhQYWhpL0tJMjc5NEZydUhBZG42SUU4R0JwTEJOVGJ2OTRRRThuZ2xBUTJvN01oUktucWt4SmhUZmk3cVVVVE1PajVyaVk0QmVnTFFZQStubjZZcmMvdHJoNENrNCtiVFI1U3UyZnAzcitjeFpQQUtRbHNkaCswd3YrQzd4Y202ZjYyaUFJdjhqMXBaYTQybnVseU1KSnlqcDdrbjhkU2JQVytpdDJrbDlzSjJXU2J3S3BZZzdEdmc5azNFOE9wRld4R0Rsbmg3K2U0ODR1blRjTjRZMFNCUUJSZ21YNW4yaHdwdUt3QXVVT0dsUE94b0lLLzY3SVp1K3dDdytEcitQc0Q1UlVYT2EySnhUZXZDS2RXc0NtOUdSWktHbmI4NGp6ejl2WGJvSTNtTjR5ait0L01rNTcxOUxqS1RzaCtoUW1qUU5hMURWL0VncE9TZDR0emh0R1ZFVXM4dzE3dzRBVmlLTUxlMGhwTytxd21zUG1EMnVsZzh5RDNQUDFUWWpSYTR3Y2gvajE0bm5zaWVFYU1xbmxBNGhuY0tXQXRoQUY4WUpvRXBQbDFnYUZFek53QXpuUEJNenlBZUpvOFFmUUNHRjY0REp4dU5QdmVGNFBONGZkcFhkcjk1dXNTQkN6S2NJT3FtejFnOS9vU0cxU01WUlV2OGRBanNLYlpReFJ3NmZNNmszM21CQ3F3Tk9QT05ISGhaTFpKZWNHUGNmMk82aTkzTzdoa2RJL3poQlRCZDlnQW5xNnhZYUtwc2xCT3hZYWF4aysyOUVtc0x4cmNMN0Fzb3NDSDNCRTNLR0FMMlBWcStLQW80RU1CMGxyd2Z0SXBzV1FzQkVScy9ZZzNnRnM1azVGQnBLdDhLc3p6d1ZXQTdib1dvK1pOV1A4S0MrOUJlR3RNaVpNelRSUndFTHFLbVhwRmFLeHJBaE04U0VxSUpaNUVVSDhhS1hGOUU2WjBGblE3MTRzb25MSmpBc1BSSTdZMWVNREE3M25Rclp3V2ZiMEpmSzdtZWRqWDB4eXNYSDFaamtXV2hZampBd0dlQ2RZMUtPQ0MrUFBZL0YySE9mR0M4UVFVRVVzZU04UDg0NkNIY1g4YnJzK0JUcW5oUXphQW8zWGlaalJnSDR1bnlrQUNsaExDNEFIeEVrMTlOcEI5dHJnSUwxbXZ4akxRYng1U2FyYlNFTVI1azBZenBVL3dXWTVZZTE0ZUxOWWkzbGpnTkVlTUNHcTdYcEtEcS9BODZBeGJYT3JFNWlVemhSVk9vRmsxUE9ZTVpPZk0zOVdRcDdrS0xSaTVucERqSFhmR21qTG5teTRyUE9jQ21TMWhYVmcwU2xCQU1hTXpRb3pKT2NONGtYOFRKVTY1WWtld0VlRnJJbmpSd21JeEdabDl4VkIzdW9RUzY0WENWdUxua3F1UlNqMm5mUkpHTlFjNVVqTFA3bjViVHQ2MDlWRFZRU0twOEI1N24vYXVjbXo0K3N0TFc0bit5QXljQ2I2QVJjZE4wYWdhcXkwbVZvSVpzcEJWRGpyMlp0RUtzUmlCUkZMcjE5ajZVcE5HVkxaOGpyUVM1WmdIVXNZTFBhNTU0Z2RNTmtxdVFFUVJvd1RYbEpqd3E5eUhsVGpOQ2NMWHY0dzFpMHNtTXRjVEJWdk00ZXZxWGI2MkpNR2JzM0FzWGJTa2xZNHBRRm81SllCZEtmM3oveWNseEl1VXNhUzEvNUdyK0R2M3EyWWpwU2dSRnJYTHBCNjBtems2b0JCeVZkT2R2b1lVbXVhamxXYUh2VEVGWkxTMHJjV2pKZ2d0am1zZm1lVnRBbUhyb3hnMnBzNWxGZUJUc3JLQkViMHkwcDdxblRScDlYL3VoZER5eEkvYkVFeHBjcHlTNW5yVjhtRExLa0V2Rm13czVNYTdzT0ZicGdyT1JmcWoyaG9IcTYwamt2TmxCaTZZQXdXQnozSUh5Y3NlZjloNHlLREpvOWRHM0JJWFRkV05NbHdEcTNzbTQwajNXK09jbnpGekJobHpjTjhxanRkdFhlRFVXZ3FQR2ozTXlIUkdhc2UvRUsrMU5jRDdmR1NVdlRjOEV5MnZmQXJlOHZpUDNKYU45UHUrL2lNUEZWTG9HcHV2bFpTSjlsUTExenZSVlNENkRoOGwyZzkxQjRQN1ZIdnZ5S0pLUk0rTjdFRGk2MmM1US9IUk8wR2dhTHZMaFJCaXV1YmFDL2xlTmRQVlBDdE5pbEJuSzMzK0k5ajNFcGR0S0pFTVZEcDR5ZGZzaFYrQjM4cUxOOGFQa1RlK3dZZE9wQVFmUlU3SmVSSm5qMkp0Q2RFYXNqU3RvOFpNbXJPbnVlWkVYK3dsRlh4VmIrcWpiMU9JU2E0YzdmV3Y0WUhjNDhIOEVML255dkFSeUtMclJNVUxiL0RFNWZINzQxOGpyaTZKdkIvdTRzSEtRbVpOWDNRMy9SK0pzaHhXamM0MkR1UG5RcUhMUWJlQnZnZjZQdWdIb0ZzaDVFYms4cDdZK254WnFuOG4vd0RTMGJzdFloeStPdTFaOGQxdzM0UjBreVMwZldVVXBZL3N2MVdhZXFhaWpESmRjc3pTUUpSVk9ubXp1UXo5RjFTODZnUXRZZ0M2QUFBQUFFbEZUa1N1UW1DQ1wiIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGdub3Npc19wbmdfMSA9IHJlcXVpcmUoXCIuL2dub3Npcy5wbmdcIik7XHJcbmNvbnN0IEVWRU5UU19ERUYgPSB7XHJcbiAgICBUWF9TRU5UOiAob3AsIG0pID0+IG0udHlwZSA9PT0gXCJUWF9TRU5UXCIsXHJcbiAgICBXQ19DT05ORUNUOiAob3AsIG0pID0+IG0udHlwZSA9PT0gXCJXQ19DT05ORUNUXCIsXHJcbiAgICBTV0FSTV9OT0RFOiAob3AsIG0pID0+IG0udHlwZSA9PT0gXCJTV0FSTV9OT0RFXCIsXHJcbiAgICBTV0FSTV9TRU5UOiBcIlNXQVJNX1NFTlRcIlxyXG59O1xyXG5sZXQgVHdpdHRlckZlYXR1cmUgPSBjbGFzcyBUd2l0dGVyRmVhdHVyZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gQ29yZS5vdmVybGF5KHsgdXJsOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MCcsIHRpdGxlOiAnR25vc2lzJyB9KTtcclxuICAgICAgICBjb25zdCB3YWxsZXQgPSBDb3JlLndhbGxldCh7fSwgRVZFTlRTX0RFRik7XHJcbiAgICAgICAgY29uc3Qgc2VydmVyID0gQ29yZS5jb25uZWN0KHsgdXJsOiBcIndzczovL2xvY2FsaG9zdDo4MDgwL2ZlYXR1cmUtMVwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgYnV0dG9uIH0gPSB0aGlzLmFkYXB0ZXIud2lkZ2V0cztcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcclxuICAgICAgICAgICAgLy9UV0VFVF9FVkVOVDogW3NlcnZlci5iaW5kXSxcclxuICAgICAgICAgICAgVFdFRVRfU09VVEg6IFtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbDogXCJERUZBVUxUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJERUZBVUxUXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNlcnZlci5wbV9udW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzogZ25vc2lzX3BuZ18xLmRlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlYzogKGN0eCwgbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnIgPSBtZS5zZXRTdGF0ZShtZS5zdGF0ZSA9PSAnREVGQVVMVCcgPyAnRVJSMicgOiAnREVGQVVMVCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VycicsIG1lLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZXJyLmxhYmVsID0gXCJBQkNEXCIsIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc2VuZEFuZExpc3RlbigndHdlZXRfc2VsZWN0JywgY3R4LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BtX2F0dGFjaCc6IChvcCwgeyBtYXJrZXQsIHR3ZWV0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BtX2F0dGFjaCcsIG9wLCB7IG1hcmtldCwgdHdlZXQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5zZW5kQW5kTGlzdGVuKCcxJywgY3R4LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RlZDogKCkgPT4gbWUuc3RhdGUgPSAnRVJSJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5zdGF0ZSA9ICdERUZBVUxUJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnNlbmQoJ3R4X2NyZWF0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUEVORElOR1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUGVuZGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkVSUlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGdub3Npc19wbmdfMS5kZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGVjOiAoY3R4LCBtZSkgPT4gbWUuc2V0U3RhdGUoJ0RFRkFVTFQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTkVYVDogXCJFUlIyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRVJSMlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRXJyb3IyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBnbm9zaXNfcG5nXzEuZGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlYzogKGN0eCwgbWUpID0+IG1lLnNldFN0YXRlKCdERUZBVUxUJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBUV0VFVF9DT01CTzogW10sXHJcbiAgICAgICAgICAgIERNX1NPVVRIOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoRmVhdHVyZSh0aGlzKTtcclxuICAgIH1cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRldGFjaEZlYXR1cmUodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5qZWN0KFwidHdpdHRlci1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBUd2l0dGVyRmVhdHVyZS5wcm90b3R5cGUsIFwiYWRhcHRlclwiLCB2b2lkIDApO1xyXG5Ud2l0dGVyRmVhdHVyZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcclxuXSwgVHdpdHRlckZlYXR1cmUpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyRmVhdHVyZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==