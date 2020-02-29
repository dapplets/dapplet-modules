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
        this.el.classList.add('ProfileTweet-action');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBO0FBQ0Esc0JBQXNCLCtLQUErSztBQUNyTTtBQUNBLHdIQUF3SCx1QkFBdUI7QUFDL0k7QUFDQSx1REFBdUQsSUFBSTtBQUMzRDtBQUNBLGtCQUFrQjtBQUNsQiw0QkFBNEIsOEJBQThCLFFBQVEsc0VBQXNFLE1BQU07QUFDOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNuQyxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEJ1dHRvbiB7XHJcbiAgICBtb3VudCgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsKVxyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3QgeyBpbWcsIGxhYmVsLCBsb2FkaW5nLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBodG1sU3RyaW5nID0gYDxidXR0b24gY2xhc3M9XCJQcm9maWxlVHdlZXQtYWN0aW9uQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkljb25Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2xvYWRpbmcgPyBgPHN2ZyB3aWR0aD1cIjE4cHhcIiBoZWlnaHQ9XCIxOHB4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiIGNsYXNzPVwibGRzLXJvbGxpbmdcIiBzdHlsZT1cImJhY2tncm91bmQ6IG5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMxZGExZjJcIiBzdHJva2Utd2lkdGg9XCIxNFwiIHI9XCI0MFwiIHN0cm9rZS1kYXNoYXJyYXk9XCIxODguNDk1NTU5MjE1Mzg3NTcgNjQuODMxODUzMDcxNzk1ODZcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNzcuNTc5MyA1MCA1MClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgY2FsY01vZGU9XCJsaW5lYXJcIiB2YWx1ZXM9XCIwIDUwIDUwOzM2MCA1MCA1MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIjBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gIDogYDxpbWcgaGVpZ2h0PVwiMThcIiBzcmM9XCIke2ltZ31cIj5gfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAkeygoX2EgPSBsYWJlbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpID8gYDxzcGFuIGNsYXNzPVwiUHJvZmlsZVR3ZWV0LWFjdGlvbkNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gJHtkaXNhYmxlZCA/ICdzdHlsZT1cImNvbG9yOiNhYWE7XCInIDogJyd9IGNsYXNzPVwiUHJvZmlsZVR3ZWV0LWFjdGlvbkNvdW50Rm9yUHJlc2VudGF0aW9uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JHtsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+YCA6ICcnfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5gO1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICAgIH1cclxuICAgIHVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdQcm9maWxlVHdlZXQtYWN0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuZXhlYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW91bnQoKTtcclxuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5pbml0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBidXR0b25fMSA9IHJlcXVpcmUoXCIuL2J1dHRvblwiKTtcclxuY29uc3QgcGljdHVyZV8xID0gcmVxdWlyZShcIi4vcGljdHVyZVwiKTtcclxubGV0IFR3aXR0ZXJBZGFwdGVyID0gY2xhc3MgVHdpdHRlckFkYXB0ZXIge1xyXG4gICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XHJcbiAgICAgICAgdGhpcy53aWRnZXRzID0ge1xyXG4gICAgICAgICAgICBidXR0b246IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KGJ1dHRvbl8xLkJ1dHRvbiksXHJcbiAgICAgICAgICAgIHBpY3R1cmU6IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KHBpY3R1cmVfMS5QaWN0dXJlKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBbe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwiI3RpbWVsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiW2lkXj1zdHJlYW0taXRlbS10d2VldC1dXCIsXHJcbiAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9TT1VUSDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuanMtYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9DT01CTzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJcIiAvL1RvRG9cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFBJQ1RVUkU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmpzLXR3ZWV0LXRleHQtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dFR5cGU6ICd0d2VldCcsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0RXZlbnQ6ICdUV0VFVF9FVkVOVCcsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlcjogKHR3ZWV0Tm9kZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdHdlZXROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pdGVtLWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5qcy10d2VldC10ZXh0LWNvbnRhaW5lcicpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JGdWxsbmFtZTogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0cm9uZy5mdWxsbmFtZScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JVc2VybmFtZTogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4udXNlcm5hbWUnKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9ySW1nOiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignaW1nLmF2YXRhcicpLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCIjZG1fZGlhbG9nXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwibGkuRE1JbmJveC1jb252ZXJzYXRpb25JdGVtXCIsXHJcbiAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBETV9TT1VUSDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuRE1JbmJveEl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgRE1fRUFTVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJcIiAvL1RvRG9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dFR5cGU6ICd0aHJlYWQnLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnVEhSRUFEX0VWRU5UJyxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodHdlZXROb2RlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRocmVhZElkOiB0d2VldE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRocmVhZC1pZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNZXNzYWdlSWQ6IHR3ZWV0Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFzdC1tZXNzYWdlLWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbG5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuRE1JbmJveEl0ZW0tdGl0bGUgLmZ1bGxuYW1lJykgJiYgdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ETUluYm94SXRlbS10aXRsZSAuZnVsbG5hbWUnKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuRE1JbmJveEl0ZW0tdGl0bGUgLnVzZXJuYW1lJykgJiYgdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ETUluYm94SXRlbS10aXRsZSAudXNlcm5hbWUnKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5ETUluYm94SXRlbS1zbmlwcGV0JykuaW5uZXJUZXh0XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoQ29uZmlnKHRoaXMuY29uZmlnKTtcclxuICAgIH1cclxuICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XHJcbiAgICBhdHRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoRmVhdHVyZShmZWF0dXJlKTtcclxuICAgIH1cclxuICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XHJcbiAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuZGV0YWNoRmVhdHVyZShmZWF0dXJlKTtcclxuICAgIH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbmplY3QoXCJkeW5hbWljLWFkYXB0ZXIuZGFwcGxldC1iYXNlLmV0aFwiKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZSwgXCJhZGFwdGVyXCIsIHZvaWQgMCk7XHJcblR3aXR0ZXJBZGFwdGVyID0gX19kZWNvcmF0ZShbXHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxyXG5dLCBUd2l0dGVyQWRhcHRlcik7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFR3aXR0ZXJBZGFwdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQaWN0dXJlIHtcclxuICAgIG1vdW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbClcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHsgaW1nLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBodG1sU3RyaW5nID0gYDxpbWcgc3JjPVwiJHtpbWd9XCIgLz5gO1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICAgIH1cclxuICAgIHVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuZXhlYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRoaXMuZWwuc3R5bGUuYm90dG9tID0gJzE1cHgnO1xyXG4gICAgICAgIHRoaXMuZWwuc3R5bGUucmlnaHQgPSAnMTVweCc7XHJcbiAgICAgICAgdGhpcy5lbC5zdHlsZS56SW5kZXggPSAnMyc7XHJcbiAgICAgICAgdGhpcy5tb3VudCgpO1xyXG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9