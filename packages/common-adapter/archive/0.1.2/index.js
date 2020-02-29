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
        (_b = (_a = this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a);
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
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPg0KPHRpdGxlPjwvdGl0bGU+DQo8ZyBpZD0iaWNvbW9vbi1pZ25vcmUiPg0KPC9nPg0KPHBhdGggZmlsbD0iI2QxMDAxOSIgZD0iTTU3Mi4zMzEgNTEybDI0Ny4xNjgtMjQ3LjE2OGMxNi42NC0xNi42NCAxNi42NC00My42NDggMC02MC4zMzFzLTQzLjY0OC0xNi42NC02MC4zMzEgMGwtMjQ3LjE2OCAyNDcuMTY4LTI0Ny4xNjgtMjQ3LjE2OGMtMTYuNjQtMTYuNjQtNDMuNjQ4LTE2LjY0LTYwLjMzMSAwcy0xNi42NCA0My42NDggMCA2MC4zMzFsMjQ3LjE2OCAyNDcuMTY4LTI0Ny4xNjggMjQ3LjE2OGMtMTYuNjQgMTYuNjQtMTYuNjQgNDMuNjQ4IDAgNjAuMzMxIDguMzIgOC4zMiAxOS4yIDEyLjUwMSAzMC4xNjUgMTIuNTAxczIxLjg0NS00LjE4MSAzMC4xNjUtMTIuNTAxbDI0Ny4xNjgtMjQ3LjE2OCAyNDcuMTY4IDI0Ny4xNjhjOC4zMiA4LjMyIDE5LjIgMTIuNTAxIDMwLjE2NSAxMi41MDFzMjEuODQ1LTQuMTgxIDMwLjE2NS0xMi41MDFjMTYuNjQtMTYuNjQgMTYuNjQtNDMuNjQ4IDAtNjAuMzMxbC0yNDcuMTY4LTI0Ny4xNjh6Ij48L3BhdGg+DQo8L3N2Zz4NCg==");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jbG9zZV9jcm9zcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG9DQUFvQyxxQkFBcUIsSUFBSTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBZSxtRkFBb0IsNDVCOzs7Ozs7Ozs7Ozs7QUNBdEI7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMsaUNBQVU7QUFDbkMsZ0JBQWdCLG1CQUFPLENBQUMsK0JBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xEYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELDBCQUEwQixtQkFBTyxDQUFDLGdEQUFtQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMEJBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELHNDQUFzQztBQUMzRjtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSyxtQkFBbUIsS0FBSztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgQnV0dG9uIHtcclxuICAgIG1vdW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbClcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHsgaW1nLCBsYWJlbCwgbG9hZGluZywgZGlzYWJsZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGA8ZGl2IHN0eWxlPVwicG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjYwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo2MHB4O1xyXG4gICAgICAgICAgICBib3R0b206NDBweDtcclxuICAgICAgICAgICAgbGVmdDo0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiNGRkY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZDEwMDE5O1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1wiPlxyXG4gICAgICAgIDxpbWcgc3R5bGU9XCJtYXJnaW4tdG9wOjExcHg7XCIgaGVpZ2h0PVwiMzJcIiBzcmM9XCIke2ltZ31cIj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICAgIH1cclxuICAgIHVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuZXhlYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW91bnQoKTtcclxuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5pbml0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQQ0V0TFNCSFpXNWxjbUYwWldRZ1lua2dTV052VFc5dmJpNXBieUF0TFQ0TkNqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE1ESTBJaUJvWldsbmFIUTlJakV3TWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TURJMElERXdNalFpUGcwS1BIUnBkR3hsUGp3dmRHbDBiR1UrRFFvOFp5QnBaRDBpYVdOdmJXOXZiaTFwWjI1dmNtVWlQZzBLUEM5blBnMEtQSEJoZEdnZ1ptbHNiRDBpSTJReE1EQXhPU0lnWkQwaVRUVTNNaTR6TXpFZ05URXliREkwTnk0eE5qZ3RNalEzTGpFMk9HTXhOaTQyTkMweE5pNDJOQ0F4Tmk0Mk5DMDBNeTQyTkRnZ01DMDJNQzR6TXpGekxUUXpMalkwT0MweE5pNDJOQzAyTUM0ek16RWdNR3d0TWpRM0xqRTJPQ0F5TkRjdU1UWTRMVEkwTnk0eE5qZ3RNalEzTGpFMk9HTXRNVFl1TmpRdE1UWXVOalF0TkRNdU5qUTRMVEUyTGpZMExUWXdMak16TVNBd2N5MHhOaTQyTkNBME15NDJORGdnTUNBMk1DNHpNekZzTWpRM0xqRTJPQ0F5TkRjdU1UWTRMVEkwTnk0eE5qZ2dNalEzTGpFMk9HTXRNVFl1TmpRZ01UWXVOalF0TVRZdU5qUWdORE11TmpRNElEQWdOakF1TXpNeElEZ3VNeklnT0M0ek1pQXhPUzR5SURFeUxqVXdNU0F6TUM0eE5qVWdNVEl1TlRBeGN6SXhMamcwTlMwMExqRTRNU0F6TUM0eE5qVXRNVEl1TlRBeGJESTBOeTR4TmpndE1qUTNMakUyT0NBeU5EY3VNVFk0SURJME55NHhOamhqT0M0ek1pQTRMak15SURFNUxqSWdNVEl1TlRBeElETXdMakUyTlNBeE1pNDFNREZ6TWpFdU9EUTFMVFF1TVRneElETXdMakUyTlMweE1pNDFNREZqTVRZdU5qUXRNVFl1TmpRZ01UWXVOalF0TkRNdU5qUTRJREF0TmpBdU16TXhiQzB5TkRjdU1UWTRMVEkwTnk0eE5qaDZJajQ4TDNCaGRHZytEUW84TDNOMlp6NE5DZz09XCIiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9idXR0b25cIik7XHJcbmNvbnN0IHBvcHVwXzEgPSByZXF1aXJlKFwiLi9wb3B1cFwiKTtcclxubGV0IENvbW1vbkFkYXB0ZXIgPSBjbGFzcyBDb21tb25BZGFwdGVyIHtcclxuICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxyXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IHtcclxuICAgICAgICAgICAgYnV0dG9uOiB0aGlzLmFkYXB0ZXIuY3JlYXRlV2lkZ2V0RmFjdG9yeShidXR0b25fMS5CdXR0b24pLFxyXG4gICAgICAgICAgICBwb3B1cDogdGhpcy5hZGFwdGVyLmNyZWF0ZVdpZGdldEZhY3RvcnkocG9wdXBfMS5Qb3B1cClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gW3tcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcImh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJib2R5XCIsXHJcbiAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBCT0RZOiB7fVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAndHdlZXQnLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnVFdFRVRfRVZFTlQnLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6IChub2RlKSA9PiAoe30pLFxyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoQ29uZmlnKHRoaXMuY29uZmlnKTtcclxuICAgIH1cclxuICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XHJcbiAgICBhdHRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoRmVhdHVyZShmZWF0dXJlKTtcclxuICAgIH1cclxuICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XHJcbiAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuZGV0YWNoRmVhdHVyZShmZWF0dXJlKTtcclxuICAgIH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbmplY3QoXCJkeW5hbWljLWFkYXB0ZXIuZGFwcGxldC1iYXNlLmV0aFwiKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIENvbW1vbkFkYXB0ZXIucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcclxuQ29tbW9uQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcclxuXSwgQ29tbW9uQWRhcHRlcik7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbW1vbkFkYXB0ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNsb3NlX2Nyb3NzX3N2Z18xID0gcmVxdWlyZShcIi4vY2xvc2VfY3Jvc3Muc3ZnXCIpO1xyXG5jbGFzcyBQb3B1cCB7XHJcbiAgICBtb3VudCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcclxuICAgICAgICBjb25zdCB7IHRleHQsIGxpbmssIGltZywgY2xvc2VkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGh0bWxTdHJpbmcgPSBgPHN0eWxlPlxyXG4gICAgICAgICAgICAuZGFwcGxldC13aWRnZXQtYmFzaWMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzgwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMTJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkMTAwMTk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDEwMDE5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZiwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFVidW50dTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGFwcGxldC13aWRnZXQtY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXBwbGV0LXdpZGdldC1tYXNjb3QtaW1nIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0LWJhc2ljLWNvbnRhaW5lciBhIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDEwMDE5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXBwbGV0LXdpZGdldC1iYXNpYy1jb250YWluZXIgYTphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkMTAwMTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0LWJhc2ljLWNvbnRhaW5lciBhOnZpc2l0ZWQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkMTAwMTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRpc3BsYXllZCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubm8tZGlzcGxheWVkIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXBwbGV0LXdpZGdldC1iYXNpYy1jb250YWluZXIgJHtjbG9zZWQgPyAnbm8tZGlzcGxheWVkJyA6ICdkaXNwbGF5ZWQnfSBcIj4gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFwcGxldC13aWRnZXQtY2xvc2VcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7Y2xvc2VfY3Jvc3Nfc3ZnXzEuZGVmYXVsdH0gIGNsYXNzPVwiZGFwcGxldC13aWRnZXQtY2xvc2UtaWNvblwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhcHBsZXQtd2lkZ2V0LW1hc2NvdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7aW1nfT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPSR7bGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+JHt0ZXh0fTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XHJcbiAgICB9XHJcbiAgICB1bm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXBwbGV0LXdpZGdldC1jbG9zZS1pY29uJykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXBwbGV0LXdpZGdldC1jbG9zZS1pY29uJykpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmRhcHBsZXQtd2lkZ2V0LWJhc2ljLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAvLyAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheWVkJyk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbG9zZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW91bnQoKTtcclxuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5pbml0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qb3B1cCA9IFBvcHVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9