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
class Button {
    mount() {
        if (!this.el)
            this._createElement();
        const { img, label, loading, disabled } = this.state;
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
    unmount() {
        this.el && this.el.remove();
    }
    _createElement() {
        var _a, _b;
        this.el = document.createElement('div');
        this.el.classList.add('css-1dbjc4n', 'r-1iusvr4', 'r-18u37iz', 'r-16y2uox', 'r-1h0z5md');
        this.el.addEventListener("click", e => {
            var _a, _b;
            if (!this.state.disabled) {
                (_b = (_a = this.state).exec) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
            }
        });
        const styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        styleTag.innerText = `
            .dapplet-widget > div[role="button"] > div:hover > .css-1dbjc4n.r-xoduu5 > .r-sdzlij {
                background-color: rgba(29, 161, 242, 0.1); 
                transition-property: background-color, box-shadow; 
                transition-duration: 0.2s;
            }
            .dapplet-widget > div[role="button"] > div:hover {
                color:rgba(29,161,242,1.00);
            }`;
        document.head.appendChild(styleTag);
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
const badge_1 = __webpack_require__(/*! ./badge */ "./src/badge.ts");
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
                        selector: "div[role=group]"
                    },
                    TWEET_COMBO: {
                        selector: "" //ToDo
                    },
                    PICTURE: {
                        selector: "div[lang]"
                    },
                    TWEET_AVATAR_BADGE: {
                        selector: "div.css-1dbjc4n.r-18kxxzh.r-1wbh5a2.r-13qz1uu"
                    },
                    TWEET_USERNAME_BADGE: {
                        selector: "div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-1f6r7vd",
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
                        authorUsername: (_d = tweetNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 > span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0')) === null || _d === void 0 ? void 0 : _d.innerText,
                        authorImg: (_e = tweetNode.querySelector('div.css-1dbjc4n.r-1awozwy.r-18kxxzh.r-5f2r5o img')) === null || _e === void 0 ? void 0 : _e.getAttribute('src')
                    };
                }
            },
            {
                containerSelector: "main[role=main]",
                contextSelector: "div.css-1dbjc4n.r-ku1wi2.r-1j3t67a.r-m611by",
                insPoints: {
                    PROFILE_AVATAR_BADGE: {
                        selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1wtj0ep",
                        insert: 'end'
                    },
                    PROFILE_USERNAME_BADGE: {
                        selector: "div.css-1dbjc4n.r-15d164r.r-1g94qm0 div.css-901oao.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-1vr29t4.r-ad9z0x.r-bcqeeo.r-qvutc0",
                        insert: "end"
                    },
                    PROFILE_BUTTON_GROUP: {
                        selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs",
                        insert: "begin"
                    }
                },
                contextType: 'profile',
                contextEvent: 'PROFILE_EVENT',
                // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                contextBuilder: (titleInfoNode) => {
                    var _a, _b;
                    // Adding of left margin to username in title
                    titleInfoNode.querySelector('div.css-1dbjc4n.r-15d164r.r-1g94qm0 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l').style.margin = '0px 0px 0px 32px';
                    return {
                        profileFullname: (_a = titleInfoNode.querySelector('a:nth-child(1) div span span')) === null || _a === void 0 ? void 0 : _a.innerText,
                        profileUsername: (_b = titleInfoNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 span')) === null || _b === void 0 ? void 0 : _b.innerText
                    };
                }
            },
            {
                containerSelector: "main[role=main]",
                contextSelector: "div.css-1dbjc4n.r-aqfbo4.r-14lw9ot.r-my5ep6.r-rull8r.r-qklmqi.r-gtdqiz.r-ipm5af.r-1g40b8q",
                insPoints: {
                    HEADING_USERNAME_BADGE: {
                        selector: "h2[role=heading] div.r-18u37iz  > div.css-1dbjc4n.r-1awozwy.r-xoduu5.r-18u37iz.r-dnmrzs",
                        insert: "end"
                    }
                },
                contextType: 'heading',
                contextEvent: 'HEADING_EVENT',
                // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                contextBuilder: (titleInfoNode) => {
                    var _a;
                    return {
                        profileFullname: (_a = titleInfoNode.querySelector('span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0 > span > span')) === null || _a === void 0 ? void 0 : _a.innerText,
                    };
                }
            },
            {
                containerSelector: "main[role=main]",
                contextSelector: "div.css-1dbjc4n.r-1mi0q7o.r-1j3t67a.r-m611by",
                insPoints: {
                    SUSPENDED_USERNAME_BADGE: {
                        selector: "div.css-901oao.css-bfa6kz.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-vw2c0b.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpY3R1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekphO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQix3Q0FBd0MsSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJhZGdlIHtcbiAgICBtb3VudCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuZWwpXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHsgaW1nLCB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCwgaGlkZGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGltZ1RhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbWdUYWcgPSB0aGlzLmVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaW5zUG9pbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnVFdFRVRfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMTVweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMTVweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnMnB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJzNweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1RXRUVUX0FWQVRBUl9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcyNHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyNHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICctMnB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJy03cHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdQUk9GSUxFX0FWQVRBUl9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICczMnB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICczMnB4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9VU0VSTkFNRV9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcyMHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyMHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICcycHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdIRUFESU5HX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzI0cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzI0cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbdmVydGljYWxdID0gJzNweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVtob3Jpem9udGFsXSA9ICcxcHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTVVNQRU5ERURfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMjBweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnM3B4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9CVVRUT05fR1JPVVAnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMThweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMThweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnOXB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJzEwcHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuZWwuZmlyc3RDaGlsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHN3aXRjaCAodGhpcy5pbnNQb2ludE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1NVU1BFTkRFRF9VU0VSTkFNRV9CQURHRSc6XG4gICAgICAgICAgICBjYXNlICdQUk9GSUxFX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUubWFyZ2luID0gJzJweCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIRUFESU5HX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9BVkFUQVJfQkFER0UnOlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BST0ZJTEVfQlVUVE9OX0dST1VQJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiZGFwcGxldC13aWRnZXQtcHJvZmlsZS1idXR0b25cIiwgXCJjc3MtMTh0OTRvNFwiLCBcImNzcy0xZGJqYzRuXCIsIFwici0xbml3aHpnXCIsIFwici0xeGw1bmpvXCIsIFwici1zZHpsaWpcIiwgXCJyLTFwaGJvdHlcIiwgXCJyLXJzOTliN1wiLCBcInItMXcycG1nXCIsIFwici0xNWQxNjRyXCIsIFwici16c28yMzlcIiwgXCJyLTF2dXNjZmRcIiwgXCJyLTUzeGI3aFwiLCBcInItbWsweWl0XCIsIFwici1vN3lucWNcIiwgXCJyLTY0MTZlZ1wiLCBcInItbHJ2aWJyXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzdHlsZVRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgICAgICAgICBzdHlsZVRhZy5pbm5lclRleHQgPSBgLmRhcHBsZXQtd2lkZ2V0LXByb2ZpbGUtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA5MywgMzQsIDAuMSlcbiAgICAgICAgICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5CYWRnZSA9IEJhZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBCdXR0b24ge1xuICAgIG1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuZWwpXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHsgaW1nLCBsYWJlbCwgbG9hZGluZywgZGlzYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGh0bWxTdHJpbmcgPSBgPGRpdiBhcmlhLWhhc3BvcHVwPVwiZmFsc2VcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1mb2N1c2FibGU9XCJ0cnVlXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjc3MtMTh0OTRvNCBjc3MtMWRiamM0biByLTE3NzdmY2kgci0xMWNwb2sxIHItMW55NGwzbCByLWJ6dGtvMyByLWxydmliclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGlyPVwibHRyXCIgY2xhc3M9XCJjc3MtOTAxb2FvIHItMWF3b3p3eSByLTFyZTdlemggci02a29hbGogci0xcWQweGhhIHItYTAyM2U2IHItMTZkYmE0MSByLTFoMHo1bWQgci1hZDl6MHggci1iY3FlZW8gci1vN3lucWMgci1jbHA3YjEgci0zczJ1MnEgci1xdnV0YzBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNzcy0xZGJqYzRuIHIteG9kdXU1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3NzLTFkYmpjNG4gci1zZHpsaWogci0xcDBkdGFpIHIteG9kdXU1IHItMWQyZjQ5MCByLXhmNGl1dyByLXU4czFkIHItemNobG5qIHItaXBtNWFmIHItbzd5bnFjIHItNjQxNmVnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2xvYWRpbmcgPyBgPHN2ZyB3aWR0aD1cIjE4cHhcIiBoZWlnaHQ9XCIxOHB4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiIGNsYXNzPVwibGRzLXJvbGxpbmdcIiBzdHlsZT1cImJhY2tncm91bmQ6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzFkYTFmMlwiIHN0cm9rZS13aWR0aD1cIjE0XCIgcj1cIjQwXCIgc3Ryb2tlLWRhc2hhcnJheT1cIjE4OC40OTU1NTkyMTUzODc1NyA2NC44MzE4NTMwNzE3OTU4NlwiIHRyYW5zZm9ybT1cInJvdGF0ZSg3Ny41NzkzIDUwIDUwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInJvdGF0ZVwiIGNhbGNNb2RlPVwibGluZWFyXCIgdmFsdWVzPVwiMCA1MCA1MDszNjAgNTAgNTBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCIwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmAgOiBgPGltZyBoZWlnaHQ9XCIxOFwiIHNyYz1cIiR7aW1nfVwiIGNsYXNzPVwici00cXRxcDkgci15eXl5b28gci0xeHZsaTV0IHItZG5tcnpzIHItYm53cWltIHItMXBsY3J1aSByLWxydmliciByLTFoZHYwcWlcIj5gfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICR7KGxhYmVsID09PSBudWxsIHx8IGxhYmVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYWJlbC50b1N0cmluZygpKSA/IGA8ZGl2IGNsYXNzPVwiY3NzLTFkYmpjNG4gci14b2R1dTUgci0xdWRoMDh4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjc3MtOTAxb2FvIGNzcy0xNm15NDA2IHItMXFkMHhoYSByLWFkOXoweCByLTFuMHhxNmUgci1iY3FlZW8gci1kM2hiZTEgci0xd2dnMmIyIHItYXh4aTJ6IHItcXZ1dGMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICR7ZGlzYWJsZWQgPyAnc3R5bGU9XCJjb2xvcjojYWFhO1wiJyA6ICcnfSBjbGFzcz1cImNzcy05MDFvYW8gY3NzLTE2bXk0MDYgci0xcWQweGhhIHItYWQ5ejB4IHItYmNxZWVvIHItcXZ1dGMwXCI+JHtsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgIH1cbiAgICB1bm1vdW50KCkge1xuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgfVxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnY3NzLTFkYmpjNG4nLCAnci0xaXVzdnI0JywgJ3ItMTh1MzdpeicsICdyLTE2eTJ1b3gnLCAnci0xaDB6NW1kJyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmV4ZWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlVGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICBzdHlsZVRhZy5pbm5lclRleHQgPSBgXG4gICAgICAgICAgICAuZGFwcGxldC13aWRnZXQgPiBkaXZbcm9sZT1cImJ1dHRvblwiXSA+IGRpdjpob3ZlciA+IC5jc3MtMWRiamM0bi5yLXhvZHV1NSA+IC5yLXNkemxpaiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOSwgMTYxLCAyNDIsIDAuMSk7IFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7IFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGFwcGxldC13aWRnZXQgPiBkaXZbcm9sZT1cImJ1dHRvblwiXSA+IGRpdjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6cmdiYSgyOSwxNjEsMjQyLDEuMDApO1xuICAgICAgICAgICAgfWA7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICB9XG59XG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vYnV0dG9uXCIpO1xuY29uc3QgcGljdHVyZV8xID0gcmVxdWlyZShcIi4vcGljdHVyZVwiKTtcbmNvbnN0IGJhZGdlXzEgPSByZXF1aXJlKFwiLi9iYWRnZVwiKTtcbmxldCBUd2l0dGVyQWRhcHRlciA9IGNsYXNzIFR3aXR0ZXJBZGFwdGVyIHtcbiAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICB0aGlzLndpZGdldHMgPSB7XG4gICAgICAgICAgICBidXR0b246IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KGJ1dHRvbl8xLkJ1dHRvbiksXG4gICAgICAgICAgICBwaWN0dXJlOiB0aGlzLmFkYXB0ZXIuY3JlYXRlV2lkZ2V0RmFjdG9yeShwaWN0dXJlXzEuUGljdHVyZSksXG4gICAgICAgICAgICBiYWRnZTogdGhpcy5hZGFwdGVyLmNyZWF0ZVdpZGdldEZhY3RvcnkoYmFkZ2VfMS5CYWRnZSksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29uZmlnID0gW3tcbiAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl1cIixcbiAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiYXJ0aWNsZS5jc3MtMWRiamM0blwiLFxuICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xuICAgICAgICAgICAgICAgICAgICBUV0VFVF9TT1VUSDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9Z3JvdXBdXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgVFdFRVRfQ09NQk86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIlwiIC8vVG9Eb1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBQSUNUVVJFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbbGFuZ11cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9BVkFUQVJfQkFER0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLTE4a3h4emguci0xd2JoNWEyLnItMTNxejF1dVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFRXRUVUX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci0xOHUzN2l6LnItMXdiaDVhMi5yLTFmNnI3dmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogJ2JlZ2luJyAvLyBlbmRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29udGV4dFR5cGU6ICd0d2VldCcsXG4gICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnVFdFRVRfRVZFTlQnLFxuICAgICAgICAgICAgICAgIC8vIFRvRG86IFRoaXMgc2VsZWN0b3JzIGFyZSB1bnN0YWJsZSwgYmVjYXVzZSBUd2l0dGVyIGhhcyBjaGFuZ2VkIGNsYXNzIG5hbWVzIHRvIGF1dG8tZ2VuZXJhdGVkLlxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodHdlZXROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBvZiByaWdodCBtYXJnaW4gdG8gbGFzdCB0d2l0dGVyJ3MgbmF0aXZlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSAoX2EgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMW1sd2xxZS5yLTE4dTM3aXouci0xOGt4eHpoLnItMWgwejVtZCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKCdyLTE4a3h4emgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoJ3ItMW1sd2xxZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0LmFkZCgnci0xaXVzdnI0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyLTE2eTJ1b3gnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhIHRpbWUnKS5wYXJlbnROb2RlLmhyZWYuc3BsaXQoJy8nKS5wb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IChfYiA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXZbbGFuZ10nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvckZ1bGxuYW1lOiAoX2MgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignYTpudGgtY2hpbGQoMSkgZGl2IHNwYW4gc3BhbicpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yVXNlcm5hbWU6IChfZCA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTkwMW9hby5jc3MtYmZhNmt6LnItMXJlN2V6aC5yLTE4dTM3aXouci0xcWQweGhhLnItYTAyM2U2LnItMTZkYmE0MS5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMCA+IHNwYW4uY3NzLTkwMW9hby5jc3MtMTZteTQwNi5yLTFxZDB4aGEuci1hZDl6MHguci1iY3FlZW8uci1xdnV0YzAnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvckltZzogKF9lID0gdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtMWRiamM0bi5yLTFhd296d3kuci0xOGt4eHpoLnItNWYycjVvIGltZycpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXG4gICAgICAgICAgICAgICAgY29udGV4dFNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLWt1MXdpMi5yLTFqM3Q2N2Euci1tNjExYnlcIixcbiAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgUFJPRklMRV9BVkFUQVJfQkFER0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLW9iZDBxdC5yLTE4dTM3aXouci0xdzZlNnJqLnItMXd0ajBlcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiAnZW5kJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBQUk9GSUxFX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci0xNWQxNjRyLnItMWc5NHFtMCBkaXYuY3NzLTkwMW9hby5yLWhreXJhYi5yLTFxZDB4aGEuci0xYjZ5ZDF3LnItMXZyMjl0NC5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImVuZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFBST0ZJTEVfQlVUVE9OX0dST1VQOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci1vYmQwcXQuci0xOHUzN2l6LnItMXc2ZTZyai5yLTFoMHo1bWQuci1kbm1yenNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogXCJiZWdpblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAncHJvZmlsZScsXG4gICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnUFJPRklMRV9FVkVOVCcsXG4gICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6ICh0aXRsZUluZm9Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBvZiBsZWZ0IG1hcmdpbiB0byB1c2VybmFtZSBpbiB0aXRsZVxuICAgICAgICAgICAgICAgICAgICB0aXRsZUluZm9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtMWRiamM0bi5yLTE1ZDE2NHIuci0xZzk0cW0wID4gZGl2LmNzcy0xZGJqYzRuLnItMXdiaDVhMi5yLWRubXJ6cy5yLTFueTRsM2wnKS5zdHlsZS5tYXJnaW4gPSAnMHB4IDBweCAwcHggMzJweCc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlRnVsbG5hbWU6IChfYSA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignYTpudGgtY2hpbGQoMSkgZGl2IHNwYW4gc3BhbicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZVVzZXJuYW1lOiAoX2IgPSB0aXRsZUluZm9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtOTAxb2FvLmNzcy1iZmE2a3ouci0xcmU3ZXpoLnItMTh1Mzdpei5yLTFxZDB4aGEuci1hMDIzZTYuci0xNmRiYTQxLnItYWQ5ejB4LnItYmNxZWVvLnItcXZ1dGMwIHNwYW4nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXG4gICAgICAgICAgICAgICAgY29udGV4dFNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLWFxZmJvNC5yLTE0bHc5b3Quci1teTVlcDYuci1ydWxsOHIuci1xa2xtcWkuci1ndGRxaXouci1pcG01YWYuci0xZzQwYjhxXCIsXG4gICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIEhFQURJTkdfVVNFUk5BTUVfQkFER0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImgyW3JvbGU9aGVhZGluZ10gZGl2LnItMTh1MzdpeiAgPiBkaXYuY3NzLTFkYmpjNG4uci0xYXdvend5LnIteG9kdXU1LnItMTh1Mzdpei5yLWRubXJ6c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImVuZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAnaGVhZGluZycsXG4gICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnSEVBRElOR19FVkVOVCcsXG4gICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6ICh0aXRsZUluZm9Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVGdWxsbmFtZTogKF9hID0gdGl0bGVJbmZvTm9kZS5xdWVyeVNlbGVjdG9yKCdzcGFuLmNzcy05MDFvYW8uY3NzLTE2bXk0MDYuci0xcWQweGhhLnItYWQ5ejB4LnItYmNxZWVvLnItcXZ1dGMwID4gc3BhbiA+IHNwYW4nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcIm1haW5bcm9sZT1tYWluXVwiLFxuICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci0xbWkwcTdvLnItMWozdDY3YS5yLW02MTFieVwiLFxuICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xuICAgICAgICAgICAgICAgICAgICBTVVNQRU5ERURfVVNFUk5BTUVfQkFER0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtOTAxb2FvLmNzcy1iZmE2a3ouci1oa3lyYWIuci0xcWQweGhhLnItMWI2eWQxdy5yLXZ3MmMwYi5yLWFkOXoweC5yLWJjcWVlby5yLTNzMnUycS5yLXF2dXRjMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImVuZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAnc3VzcGVuZGVkJyxcbiAgICAgICAgICAgICAgICBjb250ZXh0RXZlbnQ6ICdTVVNQRU5ERURfRVZFTlQnLFxuICAgICAgICAgICAgICAgIC8vIFRvRG86IFRoaXMgc2VsZWN0b3JzIGFyZSB1bnN0YWJsZSwgYmVjYXVzZSBUd2l0dGVyIGhhcyBjaGFuZ2VkIGNsYXNzIG5hbWVzIHRvIGF1dG8tZ2VuZXJhdGVkLlxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodGl0bGVJbmZvTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlVXNlcm5hbWU6IChfYSA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy05MDFvYW8uY3NzLWJmYTZrei5yLWhreXJhYi5yLTFxZDB4aGEuci0xYjZ5ZDF3LnItdncyYzBiLnItYWQ5ejB4LnItYmNxZWVvLnItM3MydTJxLnItcXZ1dGMwID4gc3BhbiA+IHNwYW4nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaENvbmZpZyh0aGlzLmNvbmZpZyk7XG4gICAgfVxuICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XG4gICAgYXR0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hdHRhY2hGZWF0dXJlKGZlYXR1cmUpO1xuICAgIH1cbiAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgIGRldGFjaEZlYXR1cmUoZmVhdHVyZSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGV0YWNoRmVhdHVyZShmZWF0dXJlKTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgSW5qZWN0KFwiZHluYW1pYy1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZSwgXCJhZGFwdGVyXCIsIHZvaWQgMCk7XG5Ud2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xuICAgIEluamVjdGFibGUsXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgVHdpdHRlckFkYXB0ZXIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVHdpdHRlckFkYXB0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFBpY3R1cmUge1xuICAgIG1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuZWwpXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHsgaW1nLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGA8aW1nIHNyYz1cIiR7aW1nfVwiIC8+YDtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgIH1cbiAgICB1bm1vdW50KCkge1xuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgfVxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmV4ZWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5ib3R0b20gPSAnMTVweCc7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUucmlnaHQgPSAnMTVweCc7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICB9XG59XG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==