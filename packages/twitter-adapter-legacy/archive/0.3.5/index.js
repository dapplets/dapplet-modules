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
        var _a;
        if (!this.el)
            this._createElement();
        const { img, label, loading, disabled } = this.state;
        const htmlString = `<button class="ProfileTweet-actionButton" type="button">
                <div class="IconContainer">
                    ${loading ? `<svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;">
                        <circle cx="50" cy="50" fill="none" stroke="#1da1f2" stroke-width="14" r="40" stroke-dasharray="188.49555921538757 64.83185307179586" transform="rotate(77.5793 50 50)">
                            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                        </circle>
                    </svg>` : `<img height="18" src="${img}">`}
                </div>
                ${((_a = label) === null || _a === void 0 ? void 0 : _a.toString()) ? `<span class="ProfileTweet-actionCount">
                    <span ${disabled ? 'style="color:#aaa;"' : ''} class="ProfileTweet-actionCountForPresentation" aria-hidden="true">${label}</span>
                </span>` : ''}
            </button>`;
        this.el.innerHTML = htmlString;
    }
    unmount() {
        this.el && this.el.remove();
    }
    _createElement() {
        var _a, _b;
        this.el = document.createElement('div');
        this.el.classList.add(this.state.clazz, 'ProfileTweet-action');
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
const picture_1 = __webpack_require__(/*! ./picture */ "./src/picture.ts");
let TwitterAdapter = class TwitterAdapter {
    // ToDo: refactor it
    constructor() {
        // ToDo: refactor it
        this.widgets = {
            button: this.adapter.createWidgetFactory(button_1.Button),
            picture: this.adapter.createWidgetFactory(picture_1.Picture)
        };
        this.config = [{
                containerSelector: "#timeline",
                contextSelector: "[id^=stream-item-tweet-]",
                insPoints: {
                    TWEET_SOUTH: {
                        selector: "div.js-actions"
                    },
                    TWEET_COMBO: {
                        selector: "" //ToDo
                    },
                    PICTURE: {
                        selector: "div.js-tweet-text-container"
                    }
                },
                contextType: 'tweet',
                contextEvent: 'TWEET_EVENT',
                contextBuilder: (tweetNode) => ({
                    id: tweetNode.getAttribute('data-item-id'),
                    text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
                    authorFullname: tweetNode.querySelector('strong.fullname').innerText,
                    authorUsername: tweetNode.querySelector('span.username').innerText,
                    authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
                }),
            }, {
                containerSelector: "#dm_dialog",
                contextSelector: "li.DMInbox-conversationItem",
                insPoints: {
                    DM_SOUTH: {
                        selector: "div.DMInboxItem"
                    },
                    DM_EAST: {
                        selector: "" //ToDo
                    }
                },
                contextType: 'thread',
                contextEvent: 'THREAD_EVENT',
                contextBuilder: (tweetNode) => ({
                    threadId: tweetNode.getAttribute('data-thread-id'),
                    lastMessageId: tweetNode.getAttribute('data-last-message-id'),
                    fullname: tweetNode.querySelector('div.DMInboxItem-title .fullname') && tweetNode.querySelector('div.DMInboxItem-title .fullname').innerText,
                    username: tweetNode.querySelector('div.DMInboxItem-title .username') && tweetNode.querySelector('div.DMInboxItem-title .username').innerText,
                    text: tweetNode.querySelector('.DMInboxItem-snippet').innerText
                })
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
    onContextCreated(handler) {
        this.adapter.onContextCreated(handler);
    }
    onContextDestroyed(handler) {
        this.adapter.onContextDestroyed(handler);
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
exports.default = TwitterAdapter;


/***/ }),

/***/ "./src/picture.ts":
/*!************************!*\
  !*** ./src/picture.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Picture {
    mount() {
        if (!this.el)
            this._createElement();
        const { img, disabled } = this.state;
        const htmlString = `<img src="${img}" />`;
        this.el.innerHTML = htmlString;
    }
    unmount() {
        this.el && this.el.remove();
    }
    _createElement() {
        var _a, _b;
        this.el = document.createElement('div');
        this.el.classList.add(this.state.clazz);
        this.el.addEventListener("click", e => {
            var _a, _b;
            if (!this.state.disabled) {
                (_b = (_a = this.state).exec) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
            }
        });
        this.el.style.position = 'absolute';
        this.el.style.bottom = '15px';
        this.el.style.right = '15px';
        this.el.style.zIndex = '3';
        this.mount();
        (_b = (_a = this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
}
exports.Picture = Picture;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBO0FBQ0Esc0JBQXNCLCtLQUErSztBQUNyTTtBQUNBLHdIQUF3SCx1QkFBdUI7QUFDL0k7QUFDQSx1REFBdUQsSUFBSTtBQUMzRDtBQUNBLGtCQUFrQjtBQUNsQiw0QkFBNEIsOEJBQThCLFFBQVEsc0VBQXNFLE1BQU07QUFDOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNuQyxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgQnV0dG9uIHtcclxuICAgIG1vdW50KCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAoIXRoaXMuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcclxuICAgICAgICBjb25zdCB7IGltZywgbGFiZWwsIGxvYWRpbmcsIGRpc2FibGVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGh0bWxTdHJpbmcgPSBgPGJ1dHRvbiBjbGFzcz1cIlByb2ZpbGVUd2VldC1hY3Rpb25CdXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiSWNvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7bG9hZGluZyA/IGA8c3ZnIHdpZHRoPVwiMThweFwiIGhlaWdodD1cIjE4cHhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCIgY2xhc3M9XCJsZHMtcm9sbGluZ1wiIHN0eWxlPVwiYmFja2dyb3VuZDogbm9uZTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzFkYTFmMlwiIHN0cm9rZS13aWR0aD1cIjE0XCIgcj1cIjQwXCIgc3Ryb2tlLWRhc2hhcnJheT1cIjE4OC40OTU1NTkyMTUzODc1NyA2NC44MzE4NTMwNzE3OTU4NlwiIHRyYW5zZm9ybT1cInJvdGF0ZSg3Ny41NzkzIDUwIDUwKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJyb3RhdGVcIiBjYWxjTW9kZT1cImxpbmVhclwiIHZhbHVlcz1cIjAgNTAgNTA7MzYwIDUwIDUwXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPmAgOiBgPGltZyBoZWlnaHQ9XCIxOFwiIHNyYz1cIiR7aW1nfVwiPmB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICR7KChfYSA9IGxhYmVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgPyBgPHNwYW4gY2xhc3M9XCJQcm9maWxlVHdlZXQtYWN0aW9uQ291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAke2Rpc2FibGVkID8gJ3N0eWxlPVwiY29sb3I6I2FhYTtcIicgOiAnJ30gY2xhc3M9XCJQcm9maWxlVHdlZXQtYWN0aW9uQ291bnRGb3JQcmVzZW50YXRpb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj4ke2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5gIDogJyd9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPmA7XHJcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xyXG4gICAgfVxyXG4gICAgdW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlRWxlbWVudCgpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQodGhpcy5zdGF0ZS5jbGF6eiwgJ1Byb2ZpbGVUd2VldC1hY3Rpb24nKTtcclxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5leGVjKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy5zdGF0ZS5jdHgsIHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tb3VudCgpO1xyXG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vYnV0dG9uXCIpO1xyXG5jb25zdCBwaWN0dXJlXzEgPSByZXF1aXJlKFwiLi9waWN0dXJlXCIpO1xyXG5sZXQgVHdpdHRlckFkYXB0ZXIgPSBjbGFzcyBUd2l0dGVyQWRhcHRlciB7XHJcbiAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcclxuICAgICAgICB0aGlzLndpZGdldHMgPSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjogdGhpcy5hZGFwdGVyLmNyZWF0ZVdpZGdldEZhY3RvcnkoYnV0dG9uXzEuQnV0dG9uKSxcclxuICAgICAgICAgICAgcGljdHVyZTogdGhpcy5hZGFwdGVyLmNyZWF0ZVdpZGdldEZhY3RvcnkocGljdHVyZV8xLlBpY3R1cmUpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IFt7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCIjdGltZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJbaWRePXN0cmVhbS1pdGVtLXR3ZWV0LV1cIixcclxuICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIFRXRUVUX1NPVVRIOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5qcy1hY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFRXRUVUX0NPTUJPOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIlwiIC8vVG9Eb1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUElDVFVSRToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuanMtdHdlZXQtdGV4dC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ3R3ZWV0JyxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ1RXRUVUX0VWRU5UJyxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodHdlZXROb2RlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0d2VldE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWl0ZW0taWQnKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmpzLXR3ZWV0LXRleHQtY29udGFpbmVyJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvckZ1bGxuYW1lOiB0d2VldE5vZGUucXVlcnlTZWxlY3Rvcignc3Ryb25nLmZ1bGxuYW1lJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvclVzZXJuYW1lOiB0d2VldE5vZGUucXVlcnlTZWxlY3Rvcignc3Bhbi51c2VybmFtZScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JJbWc6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcuYXZhdGFyJykuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcIiNkbV9kaWFsb2dcIixcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJsaS5ETUluYm94LWNvbnZlcnNhdGlvbkl0ZW1cIixcclxuICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIERNX1NPVVRIOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5ETUluYm94SXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBETV9FQVNUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIlwiIC8vVG9Eb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ3RocmVhZCcsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0RXZlbnQ6ICdUSFJFQURfRVZFTlQnLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6ICh0d2VldE5vZGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQ6IHR3ZWV0Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhyZWFkLWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1lc3NhZ2VJZDogdHdlZXROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXN0LW1lc3NhZ2UtaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICBmdWxsbmFtZTogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ETUluYm94SXRlbS10aXRsZSAuZnVsbG5hbWUnKSAmJiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LkRNSW5ib3hJdGVtLXRpdGxlIC5mdWxsbmFtZScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ETUluYm94SXRlbS10aXRsZSAudXNlcm5hbWUnKSAmJiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LkRNSW5ib3hJdGVtLXRpdGxlIC51c2VybmFtZScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignLkRNSW5ib3hJdGVtLXNuaXBwZXQnKS5pbm5lclRleHRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgIHRoaXMuYWRhcHRlci5hdHRhY2hDb25maWcodGhpcy5jb25maWcpO1xyXG4gICAgfVxyXG4gICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcclxuICAgIGF0dGFjaEZlYXR1cmUoZmVhdHVyZSkge1xyXG4gICAgICAgIHRoaXMuYWRhcHRlci5hdHRhY2hGZWF0dXJlKGZlYXR1cmUpO1xyXG4gICAgfVxyXG4gICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcclxuICAgIGRldGFjaEZlYXR1cmUoZmVhdHVyZSkge1xyXG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKGZlYXR1cmUpO1xyXG4gICAgfVxyXG4gICAgb25Db250ZXh0Q3JlYXRlZChoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5hZGFwdGVyLm9uQ29udGV4dENyZWF0ZWQoaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBvbkNvbnRleHREZXN0cm95ZWQoaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuYWRhcHRlci5vbkNvbnRleHREZXN0cm95ZWQoaGFuZGxlcik7XHJcbiAgICB9XHJcbn07XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5qZWN0KFwiZHluYW1pYy1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBUd2l0dGVyQWRhcHRlci5wcm90b3R5cGUsIFwiYWRhcHRlclwiLCB2b2lkIDApO1xyXG5Ud2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcclxuXSwgVHdpdHRlckFkYXB0ZXIpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyQWRhcHRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgUGljdHVyZSB7XHJcbiAgICBtb3VudCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcclxuICAgICAgICBjb25zdCB7IGltZywgZGlzYWJsZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGA8aW1nIHNyYz1cIiR7aW1nfVwiIC8+YDtcclxuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XHJcbiAgICB9XHJcbiAgICB1bm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCh0aGlzLnN0YXRlLmNsYXp6KTtcclxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5leGVjKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy5zdGF0ZS5jdHgsIHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5ib3R0b20gPSAnMTVweCc7XHJcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5yaWdodCA9ICcxNXB4JztcclxuICAgICAgICB0aGlzLmVsLnN0eWxlLnpJbmRleCA9ICczJztcclxuICAgICAgICB0aGlzLm1vdW50KCk7XHJcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuaW5pdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGljdHVyZSA9IFBpY3R1cmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=