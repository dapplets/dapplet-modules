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

/***/ "./src/button.ts":
/*!***********************!*\
  !*** ./src/button.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Button {
    mount() {
        if (!this.el)
            this._createElement();
        const { img, label, loading, disabled } = this.state;
        const htmlString = `<div style="position:fixed;
            width:60px;
            height:60px;
            bottom:40px;
            left:40px;
            background-color:#fff;
            color:#FFF;
            border-radius:50px;
            border-color: #d10019;
            border-style: solid;
            text-align:center;
            box-shadow: 2px 2px 3px #999;
            cursor: pointer;">
        <img style="margin-top:11px;" height="32" src="${img}">
        </div>`;
        this.el.innerHTML = htmlString;
    }
    unmount() {
        this.el && this.el.remove();
    }
    _createElement() {
        var _a, _b;
        this.el = document.createElement('div');
        this.el.addEventListener("click", e => {
            var _a, _b;
            if (!this.state.disabled) {
                (_b = (_a = this.state).exec) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
            }
        });
        this.mount();
        (_b = (_a = this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
    }
}
exports.Button = Button;


/***/ }),

/***/ "./src/close_cross.svg":
/*!*****************************!*\
  !*** ./src/close_cross.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMjQiIGhlaWdodD0iMTAyNCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+Cjx0aXRsZT48L3RpdGxlPgo8ZyBpZD0iaWNvbW9vbi1pZ25vcmUiPgo8L2c+CjxwYXRoIGZpbGw9IiNkMTAwMTkiIGQ9Ik01NzIuMzMxIDUxMmwyNDcuMTY4LTI0Ny4xNjhjMTYuNjQtMTYuNjQgMTYuNjQtNDMuNjQ4IDAtNjAuMzMxcy00My42NDgtMTYuNjQtNjAuMzMxIDBsLTI0Ny4xNjggMjQ3LjE2OC0yNDcuMTY4LTI0Ny4xNjhjLTE2LjY0LTE2LjY0LTQzLjY0OC0xNi42NC02MC4zMzEgMHMtMTYuNjQgNDMuNjQ4IDAgNjAuMzMxbDI0Ny4xNjggMjQ3LjE2OC0yNDcuMTY4IDI0Ny4xNjhjLTE2LjY0IDE2LjY0LTE2LjY0IDQzLjY0OCAwIDYwLjMzMSA4LjMyIDguMzIgMTkuMiAxMi41MDEgMzAuMTY1IDEyLjUwMXMyMS44NDUtNC4xODEgMzAuMTY1LTEyLjUwMWwyNDcuMTY4LTI0Ny4xNjggMjQ3LjE2OCAyNDcuMTY4YzguMzIgOC4zMiAxOS4yIDEyLjUwMSAzMC4xNjUgMTIuNTAxczIxLjg0NS00LjE4MSAzMC4xNjUtMTIuNTAxYzE2LjY0LTE2LjY0IDE2LjY0LTQzLjY0OCAwLTYwLjMzMWwtMjQ3LjE2OC0yNDcuMTY4eiI+PC9wYXRoPgo8L3N2Zz4K");

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
const button_1 = __webpack_require__(/*! ./button */ "./src/button.ts");
const popup_1 = __webpack_require__(/*! ./popup */ "./src/popup.ts");
let CommonAdapter = class CommonAdapter {
    // ToDo: refactor it
    constructor() {
        // ToDo: refactor it
        this.widgets = {
            button: this.adapter.createWidgetFactory(button_1.Button),
            popup: this.adapter.createWidgetFactory(popup_1.Popup)
        };
        this.config = [{
                containerSelector: "html",
                contextSelector: "body",
                insPoints: {
                    BODY: {}
                },
                //ToDo: remove any twitter dependencies
                contextType: 'tweet',
                contextEvent: 'TWEET_EVENT',
                contextBuilder: (node) => ({}),
            }];
        this.adapter.attachConfig(this.config);
    }
    // ToDo: refactor it
    attachFeature(feature) {
        this.adapter.attachFeature(feature);
    }
    // ToDo: refactor it
    detachFeature(feature) {
        this.adapter.detachFeature(feature);
    }
};
__decorate([
    Inject("dynamic-adapter.dapplet-base.eth"),
    __metadata("design:type", Object)
], CommonAdapter.prototype, "adapter", void 0);
CommonAdapter = __decorate([
    Injectable,
    __metadata("design:paramtypes", [])
], CommonAdapter);
exports.default = CommonAdapter;


/***/ }),

/***/ "./src/popup.ts":
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const close_cross_svg_1 = __webpack_require__(/*! ./close_cross.svg */ "./src/close_cross.svg");
class Popup {
    mount() {
        if (!this.el)
            this._createElement();
        const { text, link, img, closed } = this.state;
        const htmlString = `<style>
            .dapplet-widget-basic-container {
                position: absolute;
                overflow-wrap: break-word;
                width: 380px;
                min-height: 60px;
                top: 80px;
                left: 50%;
                margin-left: -212px;
                padding: 20px;
                background-color: #fff;
                color: #d10019;
                border: 2px solid #d10019;
                border-radius: 15px;
                text-align: center;
                box-shadow: 2px 2px 3px #999;
                font-size: 19px;
                font-weight: 600;
                font-family: system-ui, -apple-system, sans-serif, BlinkMacSystemFont, Roboto, Ubuntu;
            }
            .dapplet-widget-close-icon {
                width: 18px;
                height: 18px;
                position: absolute;
                right: 12px;
                top: 12px;
                cursor: pointer;
            }
            .dapplet-widget-mascot-img img {
                width: 18px;
                height: 18px;
                position: absolute;
                left: 12px;
                top: 12px;
                cursor: pointer;
            }
            .dapplet-widget-basic-container a {
                text-decoration: none;
                color: #d10019;
            }
            .dapplet-widget-basic-container a:active {
                text-decoration: none;
                color: #d10019;
            }
            .dapplet-widget-basic-container a:visited {
                text-decoration: none;
                color: #d10019;
            }
            .displayed {
                display: block;
            }
            .no-displayed {
                display: none;
            }
        </style>
        <div class="dapplet-widget-basic-container ${closed ? 'no-displayed' : 'displayed'} ">  
            <div class="dapplet-widget-close">
                <img src=${close_cross_svg_1.default}  class="dapplet-widget-close-icon">
            </div>
            <div class="dapplet-widget-mascot-img">
                <img src=${img}>
            </div>
            <div>
                <a href=${link} target="_blank">${text}</a>
            </div>
        </div>`;
        this.el.innerHTML = htmlString;
    }
    unmount() {
        this.el && this.el.remove();
    }
    _createElement() {
        var _a, _b;
        this.el = document.createElement('div');
        this.el.addEventListener("click", e => {
            const target = e.target;
            if (!target.classList.contains('dapplet-widget-close-icon'))
                return;
            // if (target.classList.contains('dapplet-widget-close-icon')) {
            //     const popupContainer: HTMLElement = this.el.querySelector('.dapplet-widget-basic-container');
            //     popupContainer.classList.add('no-displayed');
            // }
            this.state.closed = true;
        });
        this.mount();
        (_b = (_a = this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
}
exports.Popup = Popup;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jbG9zZV9jcm9zcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG9DQUFvQyxxQkFBcUIsSUFBSTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBZSxtRkFBb0IsZzVCOzs7Ozs7Ozs7Ozs7QUNBdEI7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMsaUNBQVU7QUFDbkMsZ0JBQWdCLG1CQUFPLENBQUMsK0JBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsMEJBQTBCLG1CQUFPLENBQUMsZ0RBQW1CO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQkFBMEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsc0NBQXNDO0FBQzNGO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsMkJBQTJCLElBQUk7QUFDL0I7QUFDQTtBQUNBLDBCQUEwQixLQUFLLG1CQUFtQixLQUFLO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJ1dHRvbiB7XG4gICAgbW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbClcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgeyBpbWcsIGxhYmVsLCBsb2FkaW5nLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGA8ZGl2IHN0eWxlPVwicG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICB3aWR0aDo2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjYwcHg7XG4gICAgICAgICAgICBib3R0b206NDBweDtcbiAgICAgICAgICAgIGxlZnQ6NDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiNGRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwcHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNkMTAwMTk7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1wiPlxuICAgICAgICA8aW1nIHN0eWxlPVwibWFyZ2luLXRvcDoxMXB4O1wiIGhlaWdodD1cIjMyXCIgc3JjPVwiJHtpbWd9XCI+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgICB9XG4gICAgdW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZSgpO1xuICAgIH1cbiAgICBfY3JlYXRlRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5leGVjKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy5zdGF0ZS5jdHgsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb3VudCgpO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5pbml0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy5zdGF0ZS5jdHgsIHRoaXMuc3RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBDRXRMU0JIWlc1bGNtRjBaV1FnWW5rZ1NXTnZUVzl2Ymk1cGJ5QXRMVDRLUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJakV3TWpRaUlHaGxhV2RvZEQwaU1UQXlOQ0lnZG1sbGQwSnZlRDBpTUNBd0lERXdNalFnTVRBeU5DSStDangwYVhSc1pUNDhMM1JwZEd4bFBnbzhaeUJwWkQwaWFXTnZiVzl2YmkxcFoyNXZjbVVpUGdvOEwyYytDanh3WVhSb0lHWnBiR3c5SWlOa01UQXdNVGtpSUdROUlrMDFOekl1TXpNeElEVXhNbXd5TkRjdU1UWTRMVEkwTnk0eE5qaGpNVFl1TmpRdE1UWXVOalFnTVRZdU5qUXRORE11TmpRNElEQXROakF1TXpNeGN5MDBNeTQyTkRndE1UWXVOalF0TmpBdU16TXhJREJzTFRJME55NHhOamdnTWpRM0xqRTJPQzB5TkRjdU1UWTRMVEkwTnk0eE5qaGpMVEUyTGpZMExURTJMalkwTFRRekxqWTBPQzB4Tmk0Mk5DMDJNQzR6TXpFZ01ITXRNVFl1TmpRZ05ETXVOalE0SURBZ05qQXVNek14YkRJME55NHhOamdnTWpRM0xqRTJPQzB5TkRjdU1UWTRJREkwTnk0eE5qaGpMVEUyTGpZMElERTJMalkwTFRFMkxqWTBJRFF6TGpZME9DQXdJRFl3TGpNek1TQTRMak15SURndU16SWdNVGt1TWlBeE1pNDFNREVnTXpBdU1UWTFJREV5TGpVd01YTXlNUzQ0TkRVdE5DNHhPREVnTXpBdU1UWTFMVEV5TGpVd01Xd3lORGN1TVRZNExUSTBOeTR4TmpnZ01qUTNMakUyT0NBeU5EY3VNVFk0WXpndU16SWdPQzR6TWlBeE9TNHlJREV5TGpVd01TQXpNQzR4TmpVZ01USXVOVEF4Y3pJeExqZzBOUzAwTGpFNE1TQXpNQzR4TmpVdE1USXVOVEF4WXpFMkxqWTBMVEUyTGpZMElERTJMalkwTFRRekxqWTBPQ0F3TFRZd0xqTXpNV3d0TWpRM0xqRTJPQzB5TkRjdU1UWTRlaUkrUEM5d1lYUm9QZ284TDNOMlp6NEtcIiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vYnV0dG9uXCIpO1xuY29uc3QgcG9wdXBfMSA9IHJlcXVpcmUoXCIuL3BvcHVwXCIpO1xubGV0IENvbW1vbkFkYXB0ZXIgPSBjbGFzcyBDb21tb25BZGFwdGVyIHtcbiAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICB0aGlzLndpZGdldHMgPSB7XG4gICAgICAgICAgICBidXR0b246IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KGJ1dHRvbl8xLkJ1dHRvbiksXG4gICAgICAgICAgICBwb3B1cDogdGhpcy5hZGFwdGVyLmNyZWF0ZVdpZGdldEZhY3RvcnkocG9wdXBfMS5Qb3B1cClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBbe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcImh0bWxcIixcbiAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xuICAgICAgICAgICAgICAgICAgICBCT0RZOiB7fVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9Ub0RvOiByZW1vdmUgYW55IHR3aXR0ZXIgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgY29udGV4dFR5cGU6ICd0d2VldCcsXG4gICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnVFdFRVRfRVZFTlQnLFxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAobm9kZSkgPT4gKHt9KSxcbiAgICAgICAgICAgIH1dO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoQ29uZmlnKHRoaXMuY29uZmlnKTtcbiAgICB9XG4gICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcbiAgICBhdHRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgfVxuICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XG4gICAgZGV0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKGZlYXR1cmUpO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBJbmplY3QoXCJkeW5hbWljLWFkYXB0ZXIuZGFwcGxldC1iYXNlLmV0aFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgQ29tbW9uQWRhcHRlci5wcm90b3R5cGUsIFwiYWRhcHRlclwiLCB2b2lkIDApO1xuQ29tbW9uQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xuICAgIEluamVjdGFibGUsXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgQ29tbW9uQWRhcHRlcik7XG5leHBvcnRzLmRlZmF1bHQgPSBDb21tb25BZGFwdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjbG9zZV9jcm9zc19zdmdfMSA9IHJlcXVpcmUoXCIuL2Nsb3NlX2Nyb3NzLnN2Z1wiKTtcbmNsYXNzIFBvcHVwIHtcbiAgICBtb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsKVxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IHRleHQsIGxpbmssIGltZywgY2xvc2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBodG1sU3RyaW5nID0gYDxzdHlsZT5cbiAgICAgICAgICAgIC5kYXBwbGV0LXdpZGdldC1iYXNpYy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgIHRvcDogODBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNkMTAwMTk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2QxMDAxOTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWYsIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBVYnVudHU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGFwcGxldC13aWRnZXQtY2xvc2UtaWNvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0LW1hc2NvdC1pbWcgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEycHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kYXBwbGV0LXdpZGdldC1iYXNpYy1jb250YWluZXIgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDEwMDE5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0LWJhc2ljLWNvbnRhaW5lciBhOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDEwMDE5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0LWJhc2ljLWNvbnRhaW5lciBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2QxMDAxOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXNwbGF5ZWQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vLWRpc3BsYXllZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRhcHBsZXQtd2lkZ2V0LWJhc2ljLWNvbnRhaW5lciAke2Nsb3NlZCA/ICduby1kaXNwbGF5ZWQnIDogJ2Rpc3BsYXllZCd9IFwiPiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFwcGxldC13aWRnZXQtY2xvc2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2Nsb3NlX2Nyb3NzX3N2Z18xLmRlZmF1bHR9ICBjbGFzcz1cImRhcHBsZXQtd2lkZ2V0LWNsb3NlLWljb25cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhcHBsZXQtd2lkZ2V0LW1hc2NvdC1pbWdcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2ltZ30+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0ke2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPiR7dGV4dH08L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgIH1cbiAgICB1bm1vdW50KCkge1xuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgfVxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcHBsZXQtd2lkZ2V0LWNsb3NlLWljb24nKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGFwcGxldC13aWRnZXQtY2xvc2UtaWNvbicpKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgcG9wdXBDb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuZGFwcGxldC13aWRnZXQtYmFzaWMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAvLyAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheWVkJyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICB9XG59XG5leHBvcnRzLlBvcHVwID0gUG9wdXA7XG4iXSwic291cmNlUm9vdCI6IiJ9