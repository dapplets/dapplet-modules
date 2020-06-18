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
exports.Button = void 0;
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
let CommonAdapter = /** @class */ (() => {
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
                    contextType: 'post',
                    contextEvent: 'POST_EVENT',
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
    return CommonAdapter;
})();
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
exports.Popup = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jbG9zZV9jcm9zcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsb0NBQW9DLHFCQUFxQixJQUFJO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFlLG1GQUFvQixnNUI7Ozs7Ozs7Ozs7OztBQ0F0QjtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNuQyxnQkFBZ0IsbUJBQU8sQ0FBQywrQkFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3REYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsMEJBQTBCLG1CQUFPLENBQUMsZ0RBQW1CO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQkFBMEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsc0NBQXNDO0FBQzNGO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsMkJBQTJCLElBQUk7QUFDL0I7QUFDQTtBQUNBLDBCQUEwQixLQUFLLG1CQUFtQixLQUFLO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQnV0dG9uID0gdm9pZCAwO1xuY2xhc3MgQnV0dG9uIHtcbiAgICBtb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsKVxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IGltZywgbGFiZWwsIGxvYWRpbmcsIGRpc2FibGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBodG1sU3RyaW5nID0gYDxkaXYgc3R5bGU9XCJwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgIHdpZHRoOjYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6NjBweDtcbiAgICAgICAgICAgIGJvdHRvbTo0MHB4O1xuICAgICAgICAgICAgbGVmdDo0MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgICAgICAgICAgY29sb3I6I0ZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTBweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2QxMDAxOTtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XCI+XG4gICAgICAgIDxpbWcgc3R5bGU9XCJtYXJnaW4tdG9wOjExcHg7XCIgaGVpZ2h0PVwiMzJcIiBzcmM9XCIke2ltZ31cIj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgIH1cbiAgICB1bm1vdW50KCkge1xuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgfVxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmV4ZWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUENFdExTQkhaVzVsY21GMFpXUWdZbmtnU1dOdlRXOXZiaTVwYnlBdExUNEtQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkMmxrZEdnOUlqRXdNalFpSUdobGFXZG9kRDBpTVRBeU5DSWdkbWxsZDBKdmVEMGlNQ0F3SURFd01qUWdNVEF5TkNJK0NqeDBhWFJzWlQ0OEwzUnBkR3hsUGdvOFp5QnBaRDBpYVdOdmJXOXZiaTFwWjI1dmNtVWlQZ284TDJjK0NqeHdZWFJvSUdacGJHdzlJaU5rTVRBd01Ua2lJR1E5SWswMU56SXVNek14SURVeE1td3lORGN1TVRZNExUSTBOeTR4Tmpoak1UWXVOalF0TVRZdU5qUWdNVFl1TmpRdE5ETXVOalE0SURBdE5qQXVNek14Y3kwME15NDJORGd0TVRZdU5qUXROakF1TXpNeElEQnNMVEkwTnk0eE5qZ2dNalEzTGpFMk9DMHlORGN1TVRZNExUSTBOeTR4TmpoakxURTJMalkwTFRFMkxqWTBMVFF6TGpZME9DMHhOaTQyTkMwMk1DNHpNekVnTUhNdE1UWXVOalFnTkRNdU5qUTRJREFnTmpBdU16TXhiREkwTnk0eE5qZ2dNalEzTGpFMk9DMHlORGN1TVRZNElESTBOeTR4TmpoakxURTJMalkwSURFMkxqWTBMVEUyTGpZMElEUXpMalkwT0NBd0lEWXdMak16TVNBNExqTXlJRGd1TXpJZ01Ua3VNaUF4TWk0MU1ERWdNekF1TVRZMUlERXlMalV3TVhNeU1TNDRORFV0TkM0eE9ERWdNekF1TVRZMUxURXlMalV3TVd3eU5EY3VNVFk0TFRJME55NHhOamdnTWpRM0xqRTJPQ0F5TkRjdU1UWTRZemd1TXpJZ09DNHpNaUF4T1M0eUlERXlMalV3TVNBek1DNHhOalVnTVRJdU5UQXhjekl4TGpnME5TMDBMakU0TVNBek1DNHhOalV0TVRJdU5UQXhZekUyTGpZMExURTJMalkwSURFMkxqWTBMVFF6TGpZME9DQXdMVFl3TGpNek1Xd3RNalEzTGpFMk9DMHlORGN1TVRZNGVpSStQQzl3WVhSb1BnbzhMM04yWno0S1wiIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9idXR0b25cIik7XG5jb25zdCBwb3B1cF8xID0gcmVxdWlyZShcIi4vcG9wdXBcIik7XG5sZXQgQ29tbW9uQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKCgpID0+IHtcbiAgICBsZXQgQ29tbW9uQWRhcHRlciA9IGNsYXNzIENvbW1vbkFkYXB0ZXIge1xuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XG4gICAgICAgICAgICB0aGlzLndpZGdldHMgPSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uOiB0aGlzLmFkYXB0ZXIuY3JlYXRlV2lkZ2V0RmFjdG9yeShidXR0b25fMS5CdXR0b24pLFxuICAgICAgICAgICAgICAgIHBvcHVwOiB0aGlzLmFkYXB0ZXIuY3JlYXRlV2lkZ2V0RmFjdG9yeShwb3B1cF8xLlBvcHVwKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gW3tcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwiaHRtbFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJPRFk6IHt9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vVG9EbzogcmVtb3ZlIGFueSB0d2l0dGVyIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0RXZlbnQ6ICdQT1NUX0VWRU5UJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6IChub2RlKSA9PiAoe30pLFxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaENvbmZpZyh0aGlzLmNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcbiAgICAgICAgYXR0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0KFwiZHluYW1pYy1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgQ29tbW9uQWRhcHRlci5wcm90b3R5cGUsIFwiYWRhcHRlclwiLCB2b2lkIDApO1xuICAgIENvbW1vbkFkYXB0ZXIgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0YWJsZSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuICAgIF0sIENvbW1vbkFkYXB0ZXIpO1xuICAgIHJldHVybiBDb21tb25BZGFwdGVyO1xufSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbW1vbkFkYXB0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG9wdXAgPSB2b2lkIDA7XG5jb25zdCBjbG9zZV9jcm9zc19zdmdfMSA9IHJlcXVpcmUoXCIuL2Nsb3NlX2Nyb3NzLnN2Z1wiKTtcbmNsYXNzIFBvcHVwIHtcbiAgICBtb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsKVxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IHRleHQsIGxpbmssIGltZywgY2xvc2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBodG1sU3RyaW5nID0gYDxzdHlsZT5cbiAgICAgICAgICAgIC5kYXBwbGV0LXdpZGdldC1iYXNpYy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgIHRvcDogODBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNkMTAwMTk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2QxMDAxOTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWYsIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBVYnVudHU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGFwcGxldC13aWRnZXQtY2xvc2UtaWNvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0LW1hc2NvdC1pbWcgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEycHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kYXBwbGV0LXdpZGdldC1iYXNpYy1jb250YWluZXIgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDEwMDE5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0LWJhc2ljLWNvbnRhaW5lciBhOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDEwMDE5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0LWJhc2ljLWNvbnRhaW5lciBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2QxMDAxOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXNwbGF5ZWQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vLWRpc3BsYXllZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRhcHBsZXQtd2lkZ2V0LWJhc2ljLWNvbnRhaW5lciAke2Nsb3NlZCA/ICduby1kaXNwbGF5ZWQnIDogJ2Rpc3BsYXllZCd9IFwiPiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFwcGxldC13aWRnZXQtY2xvc2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2Nsb3NlX2Nyb3NzX3N2Z18xLmRlZmF1bHR9ICBjbGFzcz1cImRhcHBsZXQtd2lkZ2V0LWNsb3NlLWljb25cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhcHBsZXQtd2lkZ2V0LW1hc2NvdC1pbWdcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2ltZ30+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0ke2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPiR7dGV4dH08L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgIH1cbiAgICB1bm1vdW50KCkge1xuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgfVxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcHBsZXQtd2lkZ2V0LWNsb3NlLWljb24nKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGFwcGxldC13aWRnZXQtY2xvc2UtaWNvbicpKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgcG9wdXBDb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuZGFwcGxldC13aWRnZXQtYmFzaWMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAvLyAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheWVkJyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICB9XG59XG5leHBvcnRzLlBvcHVwID0gUG9wdXA7XG4iXSwic291cmNlUm9vdCI6IiJ9