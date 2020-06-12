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

/***/ "./src/badge.ts":
/*!**********************!*\
  !*** ./src/badge.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
class Badge {
    mount() {
        var _a;
        if (!this.el)
            this._createElement();
        const { img, vertical, horizontal, hidden } = this.state;
        if (!hidden) {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                this.el.appendChild(imgTag);
            }
            const imgTag = this.el.firstChild;
            switch (this.insPointName) {
                case 'TWEET_AVATAR_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '16px';
                    imgTag.style.height = '16px';
                    break;
                case 'PROFILE_AVATAR_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '32px';
                    imgTag.style.height = '32px';
                    break;
                case 'PROFILE_BUTTON_GROUP':
                    imgTag.src = img;
                    imgTag.style.width = '18px';
                    imgTag.style.height = '18px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '9px';
                    imgTag.style[horizontal] = '10px';
                    break;
            }
        }
        else {
            (_a = this.el.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        }
    }
    unmount() {
        this.el && this.el.remove();
    }
    _createElement() {
        var _a, _b;
        switch (this.insPointName) {
            case 'PROFILE_AVATAR_BADGE':
                this.el = document.createElement('div');
                this.el.style.position = 'absolute';
                this.el.style[this.state.vertical] = '6px';
                this.el.style[this.state.horizontal] = '6px';
                break;
            case 'TWEET_AVATAR_BADGE':
                this.el = document.createElement('div');
                this.el.style.position = 'absolute';
                this.el.style[this.state.vertical] = '-3px';
                this.el.style[this.state.horizontal] = '-3px';
                this.el.style['zIndex'] = '1';
                break;
            default:
                this.el = document.createElement('div');
        }
        this.mount();
        (_b = (_a = this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
    }
}
exports.Badge = Badge;


/***/ }),

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
        const { img, label, loading, disabled, hidden } = this.state;
        if (hidden) {
            this.el.innerHTML = '';
            return;
        }
        if (this.insPointName === 'TWEET_SOUTH') {
            const htmlString = `<span class="_15y0l"><button class="wpO6b" type="button">
                        ${loading ? `<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;">
                                <circle cx="50" cy="50" fill="none" stroke="#1da1f2" stroke-width="14" r="40" stroke-dasharray="188.49555921538757 64.83185307179586" transform="rotate(77.5793 50 50)">
                                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                                </circle>
                            </svg>` : `<img height="24" src="${img}" />`}
                    </button></span>`;
            this.el.innerHTML = htmlString;
        }
        else if (this.insPointName === 'PROFILE_BUTTON_GROUP') {
            const htmlString = `<span style="margin-left: 8px;" class="vBF20 _1OSdk"><button class="_5f5mN jIbKX _6VtSN yZn4P">${label}</button></span>`;
            this.el.innerHTML = htmlString;
        }
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
const badge_1 = __webpack_require__(/*! ./badge */ "./src/badge.ts");
let TwitterAdapter = /** @class */ (() => {
    let TwitterAdapter = class TwitterAdapter {
        // ToDo: refactor it
        constructor() {
            // ToDo: refactor it
            this.widgets = {
                button: this.adapter.createWidgetFactory(button_1.Button),
                badge: this.adapter.createWidgetFactory(badge_1.Badge)
            };
            this.config = [{
                    containerSelector: "main[role=main]",
                    contextSelector: "article._8Rm4L.M9sTE.L_LMM.SgTZ1.ePUX4",
                    insPoints: {
                        TWEET_SOUTH: {
                            selector: "section.ltpMr.Slqrh > *:nth-last-child(2)"
                        },
                        TWEET_AVATAR_BADGE: {
                            selector: "header canvas"
                        }
                    },
                    contextType: 'post',
                    contextEvent: 'POST_EVENT',
                    contextBuilder: (p) => {
                        var _a, _b, _c, _d, _e, _f;
                        return ({
                            id: (_a = p.querySelector('div.eo2As a.c-Yi7')) === null || _a === void 0 ? void 0 : _a.getAttribute('href').split('/')[2],
                            authorUsername: (_b = p.querySelector('header a.sqdOP')) === null || _b === void 0 ? void 0 : _b.innerText,
                            authorImg: (_c = p.querySelector('header canvas')) === null || _c === void 0 ? void 0 : _c.toDataURL(),
                            location: (_d = p.querySelector('header a.O4GlU')) === null || _d === void 0 ? void 0 : _d.innerText,
                            img: (_e = p.querySelector('div._97aPb img')) === null || _e === void 0 ? void 0 : _e.getAttribute('src'),
                            text: (_f = p.querySelector('div.eo2As span._8Pl3R > span')) === null || _f === void 0 ? void 0 : _f.innerText
                        });
                    }
                }, {
                    containerSelector: "main[role=main]",
                    contextSelector: "div > header",
                    insPoints: {
                        PROFILE_AVATAR_BADGE: {
                            selector: "div.XjzKX > * > *:last-child"
                        },
                        PROFILE_BUTTON_GROUP: {
                            selector: "div.nZSzR > *:nth-last-child(1)",
                            insert: "begin"
                        }
                    },
                    contextType: 'profile',
                    contextEvent: 'PROFILE_EVENT',
                    contextBuilder: (h) => {
                        var _a, _b;
                        return ({
                            authorUsername: (_a = h.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.innerText,
                            authorImg: (_b = h.querySelector('div.RR-M- img')) === null || _b === void 0 ? void 0 : _b.getAttribute('src')
                        });
                    }
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
    ], TwitterAdapter.prototype, "adapter", void 0);
    TwitterAdapter = __decorate([
        Injectable,
        __metadata("design:paramtypes", [])
    ], TwitterAdapter);
    return TwitterAdapter;
})();
exports.default = TwitterAdapter;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdDQUF3QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0tBQStLO0FBQ3pNO0FBQ0EsZ0lBQWdJLHVCQUF1QjtBQUN2SjtBQUNBLCtEQUErRCxJQUFJO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELG1FQUFtRSxNQUFNO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNuQyxnQkFBZ0IsbUJBQU8sQ0FBQywrQkFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJhZGdlID0gdm9pZCAwO1xuY2xhc3MgQmFkZ2Uge1xuICAgIG1vdW50KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5lbClcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgeyBpbWcsIHZlcnRpY2FsLCBob3Jpem9udGFsLCBoaWRkZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWwuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaW1nVGFnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGltZ1RhZyA9IHRoaXMuZWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5pbnNQb2ludE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdUV0VFVF9BVkFUQVJfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMTZweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMTZweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1BST0ZJTEVfQVZBVEFSX0JBREdFJzpcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzMycHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzMycHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdQUk9GSUxFX0JVVFRPTl9HUk9VUCc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcxOHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcxOHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICc5cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbaG9yaXpvbnRhbF0gPSAnMTBweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKF9hID0gdGhpcy5lbC5maXJzdENoaWxkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZSgpO1xuICAgIH1cbiAgICBfY3JlYXRlRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgc3dpdGNoICh0aGlzLmluc1BvaW50TmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9BVkFUQVJfQkFER0UnOlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlW3RoaXMuc3RhdGUudmVydGljYWxdID0gJzZweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZVt0aGlzLnN0YXRlLmhvcml6b250YWxdID0gJzZweCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUV0VFVF9BVkFUQVJfQkFER0UnOlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlW3RoaXMuc3RhdGUudmVydGljYWxdID0gJy0zcHgnO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuc3R5bGVbdGhpcy5zdGF0ZS5ob3Jpem9udGFsXSA9ICctM3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlWyd6SW5kZXgnXSA9ICcxJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuaW5pdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICB9XG59XG5leHBvcnRzLkJhZGdlID0gQmFkZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQnV0dG9uID0gdm9pZCAwO1xuY2xhc3MgQnV0dG9uIHtcbiAgICBtb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsKVxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IGltZywgbGFiZWwsIGxvYWRpbmcsIGRpc2FibGVkLCBoaWRkZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5zUG9pbnROYW1lID09PSAnVFdFRVRfU09VVEgnKSB7XG4gICAgICAgICAgICBjb25zdCBodG1sU3RyaW5nID0gYDxzcGFuIGNsYXNzPVwiXzE1eTBsXCI+PGJ1dHRvbiBjbGFzcz1cIndwTzZiXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtsb2FkaW5nID8gYDxzdmcgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiBjbGFzcz1cImxkcy1yb2xsaW5nXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMWRhMWYyXCIgc3Ryb2tlLXdpZHRoPVwiMTRcIiByPVwiNDBcIiBzdHJva2UtZGFzaGFycmF5PVwiMTg4LjQ5NTU1OTIxNTM4NzU3IDY0LjgzMTg1MzA3MTc5NTg2XCIgdHJhbnNmb3JtPVwicm90YXRlKDc3LjU3OTMgNTAgNTApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInJvdGF0ZVwiIGNhbGNNb2RlPVwibGluZWFyXCIgdmFsdWVzPVwiMCA1MCA1MDszNjAgNTAgNTBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCIwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YCA6IGA8aW1nIGhlaWdodD1cIjI0XCIgc3JjPVwiJHtpbWd9XCIgLz5gfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj48L3NwYW4+YDtcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmluc1BvaW50TmFtZSA9PT0gJ1BST0ZJTEVfQlVUVE9OX0dST1VQJykge1xuICAgICAgICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGA8c3BhbiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA4cHg7XCIgY2xhc3M9XCJ2QkYyMCBfMU9TZGtcIj48YnV0dG9uIGNsYXNzPVwiXzVmNW1OIGpJYktYIF82VnRTTiB5Wm40UFwiPiR7bGFiZWx9PC9idXR0b24+PC9zcGFuPmA7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZSgpO1xuICAgIH1cbiAgICBfY3JlYXRlRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5leGVjKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy5zdGF0ZS5jdHgsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb3VudCgpO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5pbml0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy5zdGF0ZS5jdHgsIHRoaXMuc3RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9idXR0b25cIik7XG5jb25zdCBiYWRnZV8xID0gcmVxdWlyZShcIi4vYmFkZ2VcIik7XG5sZXQgVHdpdHRlckFkYXB0ZXIgPSAvKiogQGNsYXNzICovICgoKSA9PiB7XG4gICAgbGV0IFR3aXR0ZXJBZGFwdGVyID0gY2xhc3MgVHdpdHRlckFkYXB0ZXIge1xuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XG4gICAgICAgICAgICB0aGlzLndpZGdldHMgPSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uOiB0aGlzLmFkYXB0ZXIuY3JlYXRlV2lkZ2V0RmFjdG9yeShidXR0b25fMS5CdXR0b24pLFxuICAgICAgICAgICAgICAgIGJhZGdlOiB0aGlzLmFkYXB0ZXIuY3JlYXRlV2lkZ2V0RmFjdG9yeShiYWRnZV8xLkJhZGdlKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gW3tcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJhcnRpY2xlLl84Um00TC5NOXNURS5MX0xNTS5TZ1RaMS5lUFVYNFwiLFxuICAgICAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRXRUVUX1NPVVRIOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic2VjdGlvbi5sdHBNci5TbHFyaCA+ICo6bnRoLWxhc3QtY2hpbGQoMilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRXRUVUX0FWQVRBUl9CQURHRToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImhlYWRlciBjYW52YXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0RXZlbnQ6ICdQT1NUX0VWRU5UJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6IChwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAoX2EgPSBwLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5lbzJBcyBhLmMtWWk3JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnLycpWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvclVzZXJuYW1lOiAoX2IgPSBwLnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBhLnNxZE9QJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9ySW1nOiAoX2MgPSBwLnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBjYW52YXMnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvRGF0YVVSTCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAoX2QgPSBwLnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBhLk80R2xVJykpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiAoX2UgPSBwLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5fOTdhUGIgaW1nJykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5nZXRBdHRyaWJ1dGUoJ3NyYycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IChfZiA9IHAucXVlcnlTZWxlY3RvcignZGl2LmVvMkFzIHNwYW4uXzhQbDNSID4gc3BhbicpKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJkaXYgPiBoZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9GSUxFX0FWQVRBUl9CQURHRToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5YanpLWCA+ICogPiAqOmxhc3QtY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBST0ZJTEVfQlVUVE9OX0dST1VQOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2Lm5aU3pSID4gKjpudGgtbGFzdC1jaGlsZCgxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogXCJiZWdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAncHJvZmlsZScsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ1BST0ZJTEVfRVZFTlQnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlcjogKGgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JVc2VybmFtZTogKF9hID0gaC5xdWVyeVNlbGVjdG9yKCdoMicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvckltZzogKF9iID0gaC5xdWVyeVNlbGVjdG9yKCdkaXYuUlItTS0gaW1nJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaENvbmZpZyh0aGlzLmNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcbiAgICAgICAgYXR0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0KFwiZHluYW1pYy1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcbiAgICBUd2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBJbmplY3RhYmxlLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIpO1xuICAgIHJldHVybiBUd2l0dGVyQWRhcHRlcjtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyQWRhcHRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=