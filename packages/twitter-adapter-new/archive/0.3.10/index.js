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
                case 'TWEET_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '15px';
                    imgTag.style.height = '15px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '2px';
                    imgTag.style[horizontal] = '3px';
                    break;
                case 'TWEET_AVATAR_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '24px';
                    imgTag.style.height = '24px';
                    imgTag.style.position = 'absolute';
                    imgTag.style[vertical] = '-2px';
                    imgTag.style[horizontal] = '-7px';
                    break;
                case 'PROFILE_AVATAR_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '32px';
                    imgTag.style.height = '32px';
                    break;
                case 'PROFILE_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '20px';
                    imgTag.style.height = '20px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '2px';
                    break;
                case 'HEADING_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '24px';
                    imgTag.style.height = '24px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '3px';
                    imgTag.style[horizontal] = '1px';
                    break;
                case 'SUSPENDED_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '20px';
                    imgTag.style.height = '20px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '3px';
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
            case 'SUSPENDED_USERNAME_BADGE':
            case 'PROFILE_USERNAME_BADGE':
                this.el = document.createElement('span');
                this.el.style.margin = '2px';
                break;
            case 'HEADING_USERNAME_BADGE':
                this.el = document.createElement('span');
                break;
            case 'PROFILE_AVATAR_BADGE':
                this.el = document.createElement('div');
                this.el.style.position = 'absolute';
                break;
            case 'PROFILE_BUTTON_GROUP':
                this.el = document.createElement('div');
                this.el.classList.add("dapplet-widget-profile-button", "css-18t94o4", "css-1dbjc4n", "r-1niwhzg", "r-1xl5njo", "r-sdzlij", "r-1phboty", "r-rs99b7", "r-1w2pmg", "r-15d164r", "r-zso239", "r-1vuscfd", "r-53xb7h", "r-mk0yit", "r-o7ynqc", "r-6416eg", "r-lrvibr");
                const styleTag = document.createElement('style');
                styleTag.type = 'text/css';
                styleTag.innerText = `.dapplet-widget-profile-button:hover {
                        background-color: rgba(244, 93, 34, 0.1)
                    }`;
                document.head.appendChild(styleTag);
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
            const htmlString = `<div aria-haspopup="false" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr">
                    <div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0">
                        <div class="css-1dbjc4n r-xoduu5">
                            <div class="css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
                            ${loading ? `<svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;">
                                <circle cx="50" cy="50" fill="none" stroke="#1da1f2" stroke-width="14" r="40" stroke-dasharray="188.49555921538757 64.83185307179586" transform="rotate(77.5793 50 50)">
                                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                                </circle>
                            </svg>` : `<img height="18" src="${img}" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi">`}
                        </div>
                        
                        ${(label === null || label === void 0 ? void 0 : label.toString()) ? `<div class="css-1dbjc4n r-xoduu5 r-1udh08x">
                                <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0">
                                    <span ${disabled ? 'style="color:#aaa;"' : ''} class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">${label}</span>
                                </span>
                            </div>` : ''}
                    </div>
                </div>`;
            this.el.innerHTML = htmlString;
        }
        else if (this.insPointName === 'PROFILE_BUTTON_GROUP') {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                imgTag.src = img;
                imgTag.style.width = '18px';
                imgTag.style.height = '18px';
                imgTag.style.position = 'relative';
                imgTag.style.top = '9px';
                imgTag.style.left = '10px';
                this.el.appendChild(imgTag);
            }
        }
    }
    unmount() {
        this.el && this.el.remove();
    }
    _createElement() {
        var _a, _b;
        const styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        this.el = document.createElement('div');
        if (this.insPointName === 'TWEET_SOUTH') {
            this.el.classList.add('css-1dbjc4n', 'r-1iusvr4', 'r-18u37iz', 'r-16y2uox', 'r-1h0z5md');
            styleTag.innerText = `
                .dapplet-widget > div[role="button"] > div:hover > .css-1dbjc4n.r-xoduu5 > .r-sdzlij {
                    background-color: rgba(29, 161, 242, 0.1); 
                    transition-property: background-color, box-shadow; 
                    transition-duration: 0.2s;
                }
                .dapplet-widget > div[role="button"] > div:hover {
                    color:rgba(29,161,242,1.00);
                }`;
        }
        else if (this.insPointName === 'PROFILE_BUTTON_GROUP') {
            this.el.classList.add("dapplet-widget-profile-button", "css-18t94o4", "css-1dbjc4n", "r-1niwhzg", "r-1xl5njo", "r-sdzlij", "r-1phboty", "r-rs99b7", "r-1w2pmg", "r-15d164r", "r-zso239", "r-1vuscfd", "r-53xb7h", "r-mk0yit", "r-o7ynqc", "r-6416eg", "r-lrvibr", "r-p1n3y5");
            styleTag.innerText = `.dapplet-widget-profile-button:hover {
                background-color: rgba(29, 161, 242, 0.1)
            }`;
        }
        this.el.addEventListener("click", e => {
            var _a, _b;
            if (!this.state.disabled) {
                (_b = (_a = this.state).exec) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
            }
        });
        document.head.appendChild(styleTag);
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
const picture_1 = __webpack_require__(/*! ./picture */ "./src/picture.ts");
const badge_1 = __webpack_require__(/*! ./badge */ "./src/badge.ts");
let TwitterAdapter = /** @class */ (() => {
    let TwitterAdapter = class TwitterAdapter {
        // ToDo: refactor it
        constructor() {
            // ToDo: refactor it
            this.widgets = {
                button: this.adapter.createWidgetFactory(button_1.Button),
                picture: this.adapter.createWidgetFactory(picture_1.Picture),
                badge: this.adapter.createWidgetFactory(badge_1.Badge),
            };
            this.config = [{
                    containerSelector: "main[role=main]",
                    contextSelector: "article.css-1dbjc4n",
                    insPoints: {
                        TWEET_SOUTH: {
                            selector: "div[role=group] > *:last-child"
                        },
                        TWEET_COMBO: {
                            selector: "" //ToDo
                        },
                        PICTURE: {
                            selector: "div[lang] > *:last-child"
                        },
                        TWEET_AVATAR_BADGE: {
                            selector: "div.css-1dbjc4n.r-18kxxzh.r-1wbh5a2.r-13qz1uu > *:last-child"
                        },
                        TWEET_USERNAME_BADGE: {
                            selector: "div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-1f6r7vd > *:first-child",
                            insert: 'begin' // end
                        }
                    },
                    contextType: 'tweet',
                    contextEvent: 'TWEET_EVENT',
                    // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                    contextBuilder: (tweetNode) => {
                        var _a, _b, _c, _d, _e;
                        // Adding of right margin to last twitter's native button
                        const classList = (_a = tweetNode.querySelector('div.css-1dbjc4n.r-1mlwlqe.r-18u37iz.r-18kxxzh.r-1h0z5md')) === null || _a === void 0 ? void 0 : _a.classList;
                        if (classList) {
                            classList.remove('r-18kxxzh');
                            classList.remove('r-1mlwlqe');
                            classList.add('r-1iusvr4');
                            classList.add('r-16y2uox');
                        }
                        return {
                            id: tweetNode.querySelector('a time').parentNode.href.split('/').pop(),
                            text: (_b = tweetNode.querySelector('div[lang]')) === null || _b === void 0 ? void 0 : _b.innerText,
                            authorFullname: (_c = tweetNode.querySelector('a:nth-child(1) div span span')) === null || _c === void 0 ? void 0 : _c.innerText,
                            authorUsername: (_d = tweetNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 > span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0')) === null || _d === void 0 ? void 0 : _d.innerText.replace('@', ''),
                            authorImg: (_e = tweetNode.querySelector('div.css-1dbjc4n.r-1awozwy.r-18kxxzh.r-5f2r5o img')) === null || _e === void 0 ? void 0 : _e.getAttribute('src')
                        };
                    }
                },
                {
                    containerSelector: "main[role=main]",
                    contextSelector: "div.css-1dbjc4n.r-ku1wi2.r-1j3t67a.r-m611by",
                    insPoints: {
                        PROFILE_AVATAR_BADGE: {
                            selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1wtj0ep > *:last-child",
                            insert: 'end'
                        },
                        PROFILE_USERNAME_BADGE: {
                            selector: "div.css-1dbjc4n.r-15d164r.r-1g94qm0 div.css-901oao.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-1vr29t4.r-ad9z0x.r-bcqeeo.r-qvutc0 > *:last-child",
                            insert: "end"
                        },
                        PROFILE_BUTTON_GROUP: {
                            selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs > *:first-child",
                            insert: "begin"
                        }
                    },
                    contextType: 'profile',
                    contextEvent: 'PROFILE_EVENT',
                    // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                    contextBuilder: (titleInfoNode) => {
                        var _a, _b, _c;
                        // Adding of left margin to username in title
                        titleInfoNode.querySelector('div.css-1dbjc4n.r-15d164r.r-1g94qm0 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l').style.margin = '0px 0px 0px 32px';
                        return {
                            authorFullname: (_a = titleInfoNode.querySelector('div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > div > span:nth-child(1) > span')) === null || _a === void 0 ? void 0 : _a.innerText,
                            authorUsername: (_b = titleInfoNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 span')) === null || _b === void 0 ? void 0 : _b.innerText.replace('@', ''),
                            authorImg: (_c = titleInfoNode.querySelector('a > div.css-1dbjc4n.r-1adg3ll.r-1udh08x > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img')) === null || _c === void 0 ? void 0 : _c.getAttribute('src')
                        };
                    }
                },
                {
                    containerSelector: "main[role=main]",
                    contextSelector: "div.css-1dbjc4n.r-aqfbo4.r-14lw9ot.r-my5ep6.r-rull8r.r-qklmqi.r-gtdqiz.r-ipm5af.r-1g40b8q",
                    insPoints: {
                        HEADING_USERNAME_BADGE: {
                            selector: "h2[role=heading] div.r-18u37iz  > div.css-1dbjc4n.r-1awozwy.r-xoduu5.r-18u37iz.r-dnmrzs > *:last-child",
                            insert: "end"
                        }
                    },
                    contextType: 'heading',
                    contextEvent: 'HEADING_EVENT',
                    // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                    contextBuilder: (titleInfoNode) => {
                        var _a;
                        return {
                            profileFullname: (_a = titleInfoNode.querySelector('span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0 > span > span')) === null || _a === void 0 ? void 0 : _a.innerText.replace('@', ''),
                        };
                    }
                },
                {
                    containerSelector: "main[role=main]",
                    contextSelector: "div.css-1dbjc4n.r-1mi0q7o.r-1j3t67a.r-m611by",
                    insPoints: {
                        SUSPENDED_USERNAME_BADGE: {
                            selector: "div.css-901oao.css-bfa6kz.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-vw2c0b.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0 > *:last-child",
                            insert: "end"
                        }
                    },
                    contextType: 'suspended',
                    contextEvent: 'SUSPENDED_EVENT',
                    // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                    contextBuilder: (titleInfoNode) => {
                        var _a;
                        return {
                            profileUsername: (_a = titleInfoNode.querySelector('div.css-901oao.css-bfa6kz.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-vw2c0b.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0 > span > span')) === null || _a === void 0 ? void 0 : _a.innerText,
                        };
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


/***/ }),

/***/ "./src/picture.ts":
/*!************************!*\
  !*** ./src/picture.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
class Picture {
    mount() {
        if (!this.el)
            this._createElement();
        const { img, disabled, hidden } = this.state;
        if (hidden) {
            const htmlString = `<img src="${img}" />`;
            this.el.innerHTML = htmlString;
        }
        else {
            this.el.innerHTML = '';
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
        this.el.style.position = 'absolute';
        this.el.style.bottom = '15px';
        this.el.style.right = '15px';
        this.el.style.zIndex = '3';
        this.mount();
        (_b = (_a = this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
    }
}
exports.Picture = Picture;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpY3R1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUdhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0NBQXdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrS0FBK0s7QUFDN007QUFDQSxnSUFBZ0ksdUJBQXVCO0FBQ3ZKO0FBQ0EsK0RBQStELElBQUk7QUFDbkU7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0EsNENBQTRDLDhCQUE4QixRQUFRLHVFQUF1RSxNQUFNO0FBQy9KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEQ7QUFDQSxzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25GYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNuQyxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQywrQkFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM3SmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3QkFBd0I7QUFDdkM7QUFDQSw0Q0FBNEMsSUFBSTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5CYWRnZSA9IHZvaWQgMDtcbmNsYXNzIEJhZGdlIHtcbiAgICBtb3VudCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuZWwpXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHsgaW1nLCB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCwgaGlkZGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGltZ1RhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbWdUYWcgPSB0aGlzLmVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaW5zUG9pbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnVFdFRVRfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMTVweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMTVweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnMnB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJzNweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1RXRUVUX0FWQVRBUl9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcyNHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyNHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICctMnB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJy03cHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdQUk9GSUxFX0FWQVRBUl9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICczMnB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICczMnB4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9VU0VSTkFNRV9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcyMHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyMHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICcycHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdIRUFESU5HX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzI0cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzI0cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbdmVydGljYWxdID0gJzNweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVtob3Jpem9udGFsXSA9ICcxcHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTVVNQRU5ERURfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMjBweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnM3B4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9CVVRUT05fR1JPVVAnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMThweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMThweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnOXB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJzEwcHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuZWwuZmlyc3RDaGlsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHN3aXRjaCAodGhpcy5pbnNQb2ludE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1NVU1BFTkRFRF9VU0VSTkFNRV9CQURHRSc6XG4gICAgICAgICAgICBjYXNlICdQUk9GSUxFX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUubWFyZ2luID0gJzJweCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIRUFESU5HX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9BVkFUQVJfQkFER0UnOlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BST0ZJTEVfQlVUVE9OX0dST1VQJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiZGFwcGxldC13aWRnZXQtcHJvZmlsZS1idXR0b25cIiwgXCJjc3MtMTh0OTRvNFwiLCBcImNzcy0xZGJqYzRuXCIsIFwici0xbml3aHpnXCIsIFwici0xeGw1bmpvXCIsIFwici1zZHpsaWpcIiwgXCJyLTFwaGJvdHlcIiwgXCJyLXJzOTliN1wiLCBcInItMXcycG1nXCIsIFwici0xNWQxNjRyXCIsIFwici16c28yMzlcIiwgXCJyLTF2dXNjZmRcIiwgXCJyLTUzeGI3aFwiLCBcInItbWsweWl0XCIsIFwici1vN3lucWNcIiwgXCJyLTY0MTZlZ1wiLCBcInItbHJ2aWJyXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzdHlsZVRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgICAgICAgICBzdHlsZVRhZy5pbm5lclRleHQgPSBgLmRhcHBsZXQtd2lkZ2V0LXByb2ZpbGUtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA5MywgMzQsIDAuMSlcbiAgICAgICAgICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5CYWRnZSA9IEJhZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJ1dHRvbiA9IHZvaWQgMDtcbmNsYXNzIEJ1dHRvbiB7XG4gICAgbW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbClcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgeyBpbWcsIGxhYmVsLCBsb2FkaW5nLCBkaXNhYmxlZCwgaGlkZGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmluc1BvaW50TmFtZSA9PT0gJ1RXRUVUX1NPVVRIJykge1xuICAgICAgICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGA8ZGl2IGFyaWEtaGFzcG9wdXA9XCJmYWxzZVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLWZvY3VzYWJsZT1cInRydWVcIiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNzcy0xOHQ5NG80IGNzcy0xZGJqYzRuIHItMTc3N2ZjaSByLTExY3BvazEgci0xbnk0bDNsIHItYnp0a28zIHItbHJ2aWJyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGlyPVwibHRyXCIgY2xhc3M9XCJjc3MtOTAxb2FvIHItMWF3b3p3eSByLTFyZTdlemggci02a29hbGogci0xcWQweGhhIHItYTAyM2U2IHItMTZkYmE0MSByLTFoMHo1bWQgci1hZDl6MHggci1iY3FlZW8gci1vN3lucWMgci1jbHA3YjEgci0zczJ1MnEgci1xdnV0YzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjc3MtMWRiamM0biByLXhvZHV1NVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjc3MtMWRiamM0biByLXNkemxpaiByLTFwMGR0YWkgci14b2R1dTUgci0xZDJmNDkwIHIteGY0aXV3IHItdThzMWQgci16Y2hsbmogci1pcG01YWYgci1vN3lucWMgci02NDE2ZWdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2xvYWRpbmcgPyBgPHN2ZyB3aWR0aD1cIjE4cHhcIiBoZWlnaHQ9XCIxOHB4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiIGNsYXNzPVwibGRzLXJvbGxpbmdcIiBzdHlsZT1cImJhY2tncm91bmQ6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMxZGExZjJcIiBzdHJva2Utd2lkdGg9XCIxNFwiIHI9XCI0MFwiIHN0cm9rZS1kYXNoYXJyYXk9XCIxODguNDk1NTU5MjE1Mzg3NTcgNjQuODMxODUzMDcxNzk1ODZcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNzcuNTc5MyA1MCA1MClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgY2FsY01vZGU9XCJsaW5lYXJcIiB2YWx1ZXM9XCIwIDUwIDUwOzM2MCA1MCA1MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIjBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gIDogYDxpbWcgaGVpZ2h0PVwiMThcIiBzcmM9XCIke2ltZ31cIiBjbGFzcz1cInItNHF0cXA5IHIteXl5eW9vIHItMXh2bGk1dCByLWRubXJ6cyByLWJud3FpbSByLTFwbGNydWkgci1scnZpYnIgci0xaGR2MHFpXCI+YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhsYWJlbCA9PT0gbnVsbCB8fCBsYWJlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGFiZWwudG9TdHJpbmcoKSkgPyBgPGRpdiBjbGFzcz1cImNzcy0xZGJqYzRuIHIteG9kdXU1IHItMXVkaDA4eFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNzcy05MDFvYW8gY3NzLTE2bXk0MDYgci0xcWQweGhhIHItYWQ5ejB4IHItMW4weHE2ZSByLWJjcWVlbyByLWQzaGJlMSByLTF3Z2cyYjIgci1heHhpMnogci1xdnV0YzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICR7ZGlzYWJsZWQgPyAnc3R5bGU9XCJjb2xvcjojYWFhO1wiJyA6ICcnfSBjbGFzcz1cImNzcy05MDFvYW8gY3NzLTE2bXk0MDYgci0xcWQweGhhIHItYWQ5ejB4IHItYmNxZWVvIHItcXZ1dGMwXCI+JHtsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbnNQb2ludE5hbWUgPT09ICdQUk9GSUxFX0JVVFRPTl9HUk9VUCcpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMThweCc7XG4gICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcxOHB4JztcbiAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS50b3AgPSAnOXB4JztcbiAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUubGVmdCA9ICcxMHB4JztcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGltZ1RhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZSgpO1xuICAgIH1cbiAgICBfY3JlYXRlRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3Qgc3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZVRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZiAodGhpcy5pbnNQb2ludE5hbWUgPT09ICdUV0VFVF9TT1VUSCcpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnY3NzLTFkYmpjNG4nLCAnci0xaXVzdnI0JywgJ3ItMTh1MzdpeicsICdyLTE2eTJ1b3gnLCAnci0xaDB6NW1kJyk7XG4gICAgICAgICAgICBzdHlsZVRhZy5pbm5lclRleHQgPSBgXG4gICAgICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0ID4gZGl2W3JvbGU9XCJidXR0b25cIl0gPiBkaXY6aG92ZXIgPiAuY3NzLTFkYmpjNG4uci14b2R1dTUgPiAuci1zZHpsaWoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgMC4xKTsgXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7IFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGFwcGxldC13aWRnZXQgPiBkaXZbcm9sZT1cImJ1dHRvblwiXSA+IGRpdjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMjksMTYxLDI0MiwxLjAwKTtcbiAgICAgICAgICAgICAgICB9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmluc1BvaW50TmFtZSA9PT0gJ1BST0ZJTEVfQlVUVE9OX0dST1VQJykge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiZGFwcGxldC13aWRnZXQtcHJvZmlsZS1idXR0b25cIiwgXCJjc3MtMTh0OTRvNFwiLCBcImNzcy0xZGJqYzRuXCIsIFwici0xbml3aHpnXCIsIFwici0xeGw1bmpvXCIsIFwici1zZHpsaWpcIiwgXCJyLTFwaGJvdHlcIiwgXCJyLXJzOTliN1wiLCBcInItMXcycG1nXCIsIFwici0xNWQxNjRyXCIsIFwici16c28yMzlcIiwgXCJyLTF2dXNjZmRcIiwgXCJyLTUzeGI3aFwiLCBcInItbWsweWl0XCIsIFwici1vN3lucWNcIiwgXCJyLTY0MTZlZ1wiLCBcInItbHJ2aWJyXCIsIFwici1wMW4zeTVcIik7XG4gICAgICAgICAgICBzdHlsZVRhZy5pbm5lclRleHQgPSBgLmRhcHBsZXQtd2lkZ2V0LXByb2ZpbGUtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgMC4xKVxuICAgICAgICAgICAgfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuZXhlYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBidXR0b25fMSA9IHJlcXVpcmUoXCIuL2J1dHRvblwiKTtcbmNvbnN0IHBpY3R1cmVfMSA9IHJlcXVpcmUoXCIuL3BpY3R1cmVcIik7XG5jb25zdCBiYWRnZV8xID0gcmVxdWlyZShcIi4vYmFkZ2VcIik7XG5sZXQgVHdpdHRlckFkYXB0ZXIgPSAvKiogQGNsYXNzICovICgoKSA9PiB7XG4gICAgbGV0IFR3aXR0ZXJBZGFwdGVyID0gY2xhc3MgVHdpdHRlckFkYXB0ZXIge1xuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XG4gICAgICAgICAgICB0aGlzLndpZGdldHMgPSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uOiB0aGlzLmFkYXB0ZXIuY3JlYXRlV2lkZ2V0RmFjdG9yeShidXR0b25fMS5CdXR0b24pLFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KHBpY3R1cmVfMS5QaWN0dXJlKSxcbiAgICAgICAgICAgICAgICBiYWRnZTogdGhpcy5hZGFwdGVyLmNyZWF0ZVdpZGdldEZhY3RvcnkoYmFkZ2VfMS5CYWRnZSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBbe1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl1cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFNlbGVjdG9yOiBcImFydGljbGUuY3NzLTFkYmpjNG5cIixcbiAgICAgICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUV0VFVF9TT1VUSDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPWdyb3VwXSA+ICo6bGFzdC1jaGlsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgVFdFRVRfQ09NQk86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJcIiAvL1RvRG9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBQSUNUVVJFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2xhbmddID4gKjpsYXN0LWNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBUV0VFVF9BVkFUQVJfQkFER0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci0xOGt4eHpoLnItMXdiaDVhMi5yLTEzcXoxdXUgPiAqOmxhc3QtY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRXRUVUX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMTh1Mzdpei5yLTF3Ymg1YTIuci0xZjZyN3ZkID4gKjpmaXJzdC1jaGlsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogJ2JlZ2luJyAvLyBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFR5cGU6ICd0d2VldCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ1RXRUVUX0VWRU5UJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodHdlZXROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIG9mIHJpZ2h0IG1hcmdpbiB0byBsYXN0IHR3aXR0ZXIncyBuYXRpdmUgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSAoX2EgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMW1sd2xxZS5yLTE4dTM3aXouci0xOGt4eHpoLnItMWgwejVtZCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoJ3ItMThreHh6aCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoJ3ItMW1sd2xxZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3ItMWl1c3ZyNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3ItMTZ5MnVveCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2EgdGltZScpLnBhcmVudE5vZGUuaHJlZi5zcGxpdCgnLycpLnBvcCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IChfYiA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXZbbGFuZ10nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JGdWxsbmFtZTogKF9jID0gdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2E6bnRoLWNoaWxkKDEpIGRpdiBzcGFuIHNwYW4nKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JVc2VybmFtZTogKF9kID0gdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtOTAxb2FvLmNzcy1iZmE2a3ouci0xcmU3ZXpoLnItMTh1Mzdpei5yLTFxZDB4aGEuci1hMDIzZTYuci0xNmRiYTQxLnItYWQ5ejB4LnItYmNxZWVvLnItcXZ1dGMwID4gc3Bhbi5jc3MtOTAxb2FvLmNzcy0xNm15NDA2LnItMXFkMHhoYS5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMCcpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuaW5uZXJUZXh0LnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9ySW1nOiAoX2UgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMWF3b3p3eS5yLTE4a3h4emguci01ZjJyNW8gaW1nJykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcIm1haW5bcm9sZT1tYWluXVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnIta3Uxd2kyLnItMWozdDY3YS5yLW02MTFieVwiLFxuICAgICAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFBST0ZJTEVfQVZBVEFSX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItb2JkMHF0LnItMTh1Mzdpei5yLTF3NmU2cmouci0xd3RqMGVwID4gKjpsYXN0LWNoaWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiAnZW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBST0ZJTEVfVVNFUk5BTUVfQkFER0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci0xNWQxNjRyLnItMWc5NHFtMCBkaXYuY3NzLTkwMW9hby5yLWhreXJhYi5yLTFxZDB4aGEuci0xYjZ5ZDF3LnItMXZyMjl0NC5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMCA+ICo6bGFzdC1jaGlsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogXCJlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBST0ZJTEVfQlVUVE9OX0dST1VQOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItb2JkMHF0LnItMTh1Mzdpei5yLTF3NmU2cmouci0xaDB6NW1kLnItZG5tcnpzID4gKjpmaXJzdC1jaGlsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogXCJiZWdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAncHJvZmlsZScsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ1BST0ZJTEVfRVZFTlQnLFxuICAgICAgICAgICAgICAgICAgICAvLyBUb0RvOiBUaGlzIHNlbGVjdG9ycyBhcmUgdW5zdGFibGUsIGJlY2F1c2UgVHdpdHRlciBoYXMgY2hhbmdlZCBjbGFzcyBuYW1lcyB0byBhdXRvLWdlbmVyYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6ICh0aXRsZUluZm9Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBvZiBsZWZ0IG1hcmdpbiB0byB1c2VybmFtZSBpbiB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVJbmZvTm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTFkYmpjNG4uci0xNWQxNjRyLnItMWc5NHFtMCA+IGRpdi5jc3MtMWRiamM0bi5yLTF3Ymg1YTIuci1kbm1yenMuci0xbnk0bDNsJykuc3R5bGUubWFyZ2luID0gJzBweCAwcHggMHB4IDMycHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JGdWxsbmFtZTogKF9hID0gdGl0bGVJbmZvTm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTFkYmpjNG4uci0xYXdvend5LnItMTh1Mzdpei5yLWRubXJ6cyA+IGRpdiA+IHNwYW46bnRoLWNoaWxkKDEpID4gc3BhbicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvclVzZXJuYW1lOiAoX2IgPSB0aXRsZUluZm9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtOTAxb2FvLmNzcy1iZmE2a3ouci0xcmU3ZXpoLnItMTh1Mzdpei5yLTFxZDB4aGEuci1hMDIzZTYuci0xNmRiYTQxLnItYWQ5ejB4LnItYmNxZWVvLnItcXZ1dGMwIHNwYW4nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlubmVyVGV4dC5yZXBsYWNlKCdAJywgJycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvckltZzogKF9jID0gdGl0bGVJbmZvTm9kZS5xdWVyeVNlbGVjdG9yKCdhID4gZGl2LmNzcy0xZGJqYzRuLnItMWFkZzNsbC5yLTF1ZGgwOHggPiBkaXYuci0xcDBkdGFpLnItMXBpMnRzeC5yLTFkMmY0OTAuci11OHMxZC5yLWlwbTVhZi5yLTEzcXoxdXUgPiBkaXYgPiBpbWcnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci1hcWZibzQuci0xNGx3OW90LnItbXk1ZXA2LnItcnVsbDhyLnItcWtsbXFpLnItZ3RkcWl6LnItaXBtNWFmLnItMWc0MGI4cVwiLFxuICAgICAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhFQURJTkdfVVNFUk5BTUVfQkFER0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJoMltyb2xlPWhlYWRpbmddIGRpdi5yLTE4dTM3aXogID4gZGl2LmNzcy0xZGJqYzRuLnItMWF3b3p3eS5yLXhvZHV1NS5yLTE4dTM3aXouci1kbm1yenMgPiAqOmxhc3QtY2hpbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IFwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFR5cGU6ICdoZWFkaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnSEVBRElOR19FVkVOVCcsXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvRG86IFRoaXMgc2VsZWN0b3JzIGFyZSB1bnN0YWJsZSwgYmVjYXVzZSBUd2l0dGVyIGhhcyBjaGFuZ2VkIGNsYXNzIG5hbWVzIHRvIGF1dG8tZ2VuZXJhdGVkLlxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlcjogKHRpdGxlSW5mb05vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUZ1bGxuYW1lOiAoX2EgPSB0aXRsZUluZm9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uY3NzLTkwMW9hby5jc3MtMTZteTQwNi5yLTFxZDB4aGEuci1hZDl6MHguci1iY3FlZW8uci1xdnV0YzAgPiBzcGFuID4gc3BhbicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0LnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcIm1haW5bcm9sZT1tYWluXVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMW1pMHE3by5yLTFqM3Q2N2Euci1tNjExYnlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTVVNQRU5ERURfVVNFUk5BTUVfQkFER0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTkwMW9hby5jc3MtYmZhNmt6LnItaGt5cmFiLnItMXFkMHhoYS5yLTFiNnlkMXcuci12dzJjMGIuci1hZDl6MHguci1iY3FlZW8uci0zczJ1MnEuci1xdnV0YzAgPiAqOmxhc3QtY2hpbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IFwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFR5cGU6ICdzdXNwZW5kZWQnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0RXZlbnQ6ICdTVVNQRU5ERURfRVZFTlQnLFxuICAgICAgICAgICAgICAgICAgICAvLyBUb0RvOiBUaGlzIHNlbGVjdG9ycyBhcmUgdW5zdGFibGUsIGJlY2F1c2UgVHdpdHRlciBoYXMgY2hhbmdlZCBjbGFzcyBuYW1lcyB0byBhdXRvLWdlbmVyYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6ICh0aXRsZUluZm9Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVVc2VybmFtZTogKF9hID0gdGl0bGVJbmZvTm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTkwMW9hby5jc3MtYmZhNmt6LnItaGt5cmFiLnItMXFkMHhoYS5yLTFiNnlkMXcuci12dzJjMGIuci1hZDl6MHguci1iY3FlZW8uci0zczJ1MnEuci1xdnV0YzAgPiBzcGFuID4gc3BhbicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaENvbmZpZyh0aGlzLmNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcbiAgICAgICAgYXR0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0KFwiZHluYW1pYy1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcbiAgICBUd2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBJbmplY3RhYmxlLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIpO1xuICAgIHJldHVybiBUd2l0dGVyQWRhcHRlcjtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyQWRhcHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QaWN0dXJlID0gdm9pZCAwO1xuY2xhc3MgUGljdHVyZSB7XG4gICAgbW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbClcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgeyBpbWcsIGRpc2FibGVkLCBoaWRkZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxTdHJpbmcgPSBgPGltZyBzcmM9XCIke2ltZ31cIiAvPmA7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuZXhlYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmJvdHRvbSA9ICcxNXB4JztcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5yaWdodCA9ICcxNXB4JztcbiAgICAgICAgdGhpcy5lbC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuaW5pdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICB9XG59XG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==