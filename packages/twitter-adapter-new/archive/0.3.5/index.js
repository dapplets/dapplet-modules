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
        var _a;
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
                    
                    ${((_a = label) === null || _a === void 0 ? void 0 : _a.toString()) ? `<div class="css-1dbjc4n r-xoduu5 r-1udh08x">
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
                contextSelector: "article.css-1dbjc4n.r-1loqt21.r-1udh08x.r-o7ynqc.r-1j63xyz",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpY3R1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6SmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEJhZGdlIHtcclxuICAgIG1vdW50KCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAoIXRoaXMuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcclxuICAgICAgICBjb25zdCB7IGltZywgdmVydGljYWwsIGhvcml6b250YWwsIGhpZGRlbiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoIWhpZGRlbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZWwuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGltZ1RhZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaW1nVGFnID0gdGhpcy5lbC5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaW5zUG9pbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdUV0VFVF9VU0VSTkFNRV9CQURHRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMTVweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcxNXB4JztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnMnB4JztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbaG9yaXpvbnRhbF0gPSAnM3B4JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1RXRUVUX0FWQVRBUl9CQURHRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMjRweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyNHB4JztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnLTJweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJy03cHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9BVkFUQVJfQkFER0UnOlxyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzMycHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMzJweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdQUk9GSUxFX1VTRVJOQU1FX0JBREdFJzpcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcyMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICcycHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSEVBRElOR19VU0VSTkFNRV9CQURHRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMjRweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyNHB4JztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnM3B4JztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbaG9yaXpvbnRhbF0gPSAnMXB4JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1NVU1BFTkRFRF9VU0VSTkFNRV9CQURHRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnM3B4JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1BST0ZJTEVfQlVUVE9OX0dST1VQJzpcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcxOHB4JztcclxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzE4cHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICc5cHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVtob3Jpem9udGFsXSA9ICcxMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgKF9hID0gdGhpcy5lbC5maXJzdENoaWxkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlRWxlbWVudCgpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pbnNQb2ludE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnU1VTUEVOREVEX1VTRVJOQU1FX0JBREdFJzpcclxuICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9VU0VSTkFNRV9CQURHRSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5tYXJnaW4gPSAnMnB4JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdIRUFESU5HX1VTRVJOQU1FX0JBREdFJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9BVkFUQVJfQkFER0UnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9CVVRUT05fR1JPVVAnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiZGFwcGxldC13aWRnZXQtcHJvZmlsZS1idXR0b25cIiwgXCJjc3MtMTh0OTRvNFwiLCBcImNzcy0xZGJqYzRuXCIsIFwici0xbml3aHpnXCIsIFwici0xeGw1bmpvXCIsIFwici1zZHpsaWpcIiwgXCJyLTFwaGJvdHlcIiwgXCJyLXJzOTliN1wiLCBcInItMXcycG1nXCIsIFwici0xNWQxNjRyXCIsIFwici16c28yMzlcIiwgXCJyLTF2dXNjZmRcIiwgXCJyLTUzeGI3aFwiLCBcInItbWsweWl0XCIsIFwici1vN3lucWNcIiwgXCJyLTY0MTZlZ1wiLCBcInItbHJ2aWJyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVUYWcudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVRhZy5pbm5lclRleHQgPSBgLmRhcHBsZXQtd2lkZ2V0LXByb2ZpbGUtYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDkzLCAzNCwgMC4xKVxyXG4gICAgICAgICAgICAgICAgICAgIH1gO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3VudCgpO1xyXG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CYWRnZSA9IEJhZGdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBCdXR0b24ge1xyXG4gICAgbW91bnQoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmICghdGhpcy5lbClcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHsgaW1nLCBsYWJlbCwgbG9hZGluZywgZGlzYWJsZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGA8ZGl2IGFyaWEtaGFzcG9wdXA9XCJmYWxzZVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLWZvY3VzYWJsZT1cInRydWVcIiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNzcy0xOHQ5NG80IGNzcy0xZGJqYzRuIHItMTc3N2ZjaSByLTExY3BvazEgci0xbnk0bDNsIHItYnp0a28zIHItbHJ2aWJyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRpcj1cImx0clwiIGNsYXNzPVwiY3NzLTkwMW9hbyByLTFhd296d3kgci0xcmU3ZXpoIHItNmtvYWxqIHItMXFkMHhoYSByLWEwMjNlNiByLTE2ZGJhNDEgci0xaDB6NW1kIHItYWQ5ejB4IHItYmNxZWVvIHItbzd5bnFjIHItY2xwN2IxIHItM3MydTJxIHItcXZ1dGMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNzcy0xZGJqYzRuIHIteG9kdXU1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjc3MtMWRiamM0biByLXNkemxpaiByLTFwMGR0YWkgci14b2R1dTUgci0xZDJmNDkwIHIteGY0aXV3IHItdThzMWQgci16Y2hsbmogci1pcG01YWYgci1vN3lucWMgci02NDE2ZWdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtsb2FkaW5nID8gYDxzdmcgd2lkdGg9XCIxOHB4XCIgaGVpZ2h0PVwiMThweFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiBjbGFzcz1cImxkcy1yb2xsaW5nXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBub25lO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzFkYTFmMlwiIHN0cm9rZS13aWR0aD1cIjE0XCIgcj1cIjQwXCIgc3Ryb2tlLWRhc2hhcnJheT1cIjE4OC40OTU1NTkyMTUzODc1NyA2NC44MzE4NTMwNzE3OTU4NlwiIHRyYW5zZm9ybT1cInJvdGF0ZSg3Ny41NzkzIDUwIDUwKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgY2FsY01vZGU9XCJsaW5lYXJcIiB2YWx1ZXM9XCIwIDUwIDUwOzM2MCA1MCA1MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIjBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmAgOiBgPGltZyBoZWlnaHQ9XCIxOFwiIHNyYz1cIiR7aW1nfVwiIGNsYXNzPVwici00cXRxcDkgci15eXl5b28gci0xeHZsaTV0IHItZG5tcnpzIHItYm53cWltIHItMXBsY3J1aSByLWxydmliciByLTFoZHYwcWlcIj5gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICR7KChfYSA9IGxhYmVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgPyBgPGRpdiBjbGFzcz1cImNzcy0xZGJqYzRuIHIteG9kdXU1IHItMXVkaDA4eFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjc3MtOTAxb2FvIGNzcy0xNm15NDA2IHItMXFkMHhoYSByLWFkOXoweCByLTFuMHhxNmUgci1iY3FlZW8gci1kM2hiZTEgci0xd2dnMmIyIHItYXh4aTJ6IHItcXZ1dGMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gJHtkaXNhYmxlZCA/ICdzdHlsZT1cImNvbG9yOiNhYWE7XCInIDogJyd9IGNsYXNzPVwiY3NzLTkwMW9hbyBjc3MtMTZteTQwNiByLTFxZDB4aGEgci1hZDl6MHggci1iY3FlZW8gci1xdnV0YzBcIj4ke2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xyXG4gICAgfVxyXG4gICAgdW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlRWxlbWVudCgpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2Nzcy0xZGJqYzRuJywgJ3ItMWl1c3ZyNCcsICdyLTE4dTM3aXonLCAnci0xNnkydW94JywgJ3ItMWgwejVtZCcpO1xyXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmV4ZWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgc3R5bGVUYWcudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgc3R5bGVUYWcuaW5uZXJUZXh0ID0gYFxyXG4gICAgICAgICAgICAuZGFwcGxldC13aWRnZXQgPiBkaXZbcm9sZT1cImJ1dHRvblwiXSA+IGRpdjpob3ZlciA+IC5jc3MtMWRiamM0bi5yLXhvZHV1NSA+IC5yLXNkemxpaiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgMC4xKTsgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93OyBcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0ID4gZGl2W3JvbGU9XCJidXR0b25cIl0gPiBkaXY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6cmdiYSgyOSwxNjEsMjQyLDEuMDApO1xyXG4gICAgICAgICAgICB9YDtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlVGFnKTtcclxuICAgICAgICB0aGlzLm1vdW50KCk7XHJcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuaW5pdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9idXR0b25cIik7XHJcbmNvbnN0IHBpY3R1cmVfMSA9IHJlcXVpcmUoXCIuL3BpY3R1cmVcIik7XHJcbmNvbnN0IGJhZGdlXzEgPSByZXF1aXJlKFwiLi9iYWRnZVwiKTtcclxubGV0IFR3aXR0ZXJBZGFwdGVyID0gY2xhc3MgVHdpdHRlckFkYXB0ZXIge1xyXG4gICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XHJcbiAgICAgICAgdGhpcy53aWRnZXRzID0ge1xyXG4gICAgICAgICAgICBidXR0b246IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KGJ1dHRvbl8xLkJ1dHRvbiksXHJcbiAgICAgICAgICAgIHBpY3R1cmU6IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KHBpY3R1cmVfMS5QaWN0dXJlKSxcclxuICAgICAgICAgICAgYmFkZ2U6IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KGJhZGdlXzEuQmFkZ2UpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBbe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiYXJ0aWNsZS5jc3MtMWRiamM0bi5yLTFsb3F0MjEuci0xdWRoMDh4LnItbzd5bnFjLnItMWo2M3h5elwiLFxyXG4gICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVFdFRVRfU09VVEg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9Z3JvdXBdXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFRXRUVUX0NPTUJPOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIlwiIC8vVG9Eb1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUElDVFVSRToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbbGFuZ11cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgVFdFRVRfQVZBVEFSX0JBREdFOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLTE4a3h4emguci0xd2JoNWEyLnItMTNxejF1dVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9VU0VSTkFNRV9CQURHRToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci0xOHUzN2l6LnItMXdiaDVhMi5yLTFmNnI3dmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiAnYmVnaW4nIC8vIGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ3R3ZWV0JyxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ1RXRUVUX0VWRU5UJyxcclxuICAgICAgICAgICAgICAgIC8vIFRvRG86IFRoaXMgc2VsZWN0b3JzIGFyZSB1bnN0YWJsZSwgYmVjYXVzZSBUd2l0dGVyIGhhcyBjaGFuZ2VkIGNsYXNzIG5hbWVzIHRvIGF1dG8tZ2VuZXJhdGVkLlxyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6ICh0d2VldE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBvZiByaWdodCBtYXJnaW4gdG8gbGFzdCB0d2l0dGVyJ3MgbmF0aXZlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IChfYSA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTFkYmpjNG4uci0xbWx3bHFlLnItMTh1Mzdpei5yLTE4a3h4emguci0xaDB6NW1kJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKCdyLTE4a3h4emgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZSgnci0xbWx3bHFlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3ItMWl1c3ZyNCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyLTE2eTJ1b3gnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhIHRpbWUnKS5wYXJlbnROb2RlLmhyZWYuc3BsaXQoJy8nKS5wb3AoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogKF9iID0gdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2RpdltsYW5nXScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JGdWxsbmFtZTogKF9jID0gdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2E6bnRoLWNoaWxkKDEpIGRpdiBzcGFuIHNwYW4nKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yVXNlcm5hbWU6IChfZCA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTkwMW9hby5jc3MtYmZhNmt6LnItMXJlN2V6aC5yLTE4dTM3aXouci0xcWQweGhhLnItYTAyM2U2LnItMTZkYmE0MS5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMCA+IHNwYW4uY3NzLTkwMW9hby5jc3MtMTZteTQwNi5yLTFxZDB4aGEuci1hZDl6MHguci1iY3FlZW8uci1xdnV0YzAnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9ySW1nOiAoX2UgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMWF3b3p3eS5yLTE4a3h4emguci01ZjJyNW8gaW1nJykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnIta3Uxd2kyLnItMWozdDY3YS5yLW02MTFieVwiLFxyXG4gICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUFJPRklMRV9BVkFUQVJfQkFER0U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItb2JkMHF0LnItMTh1Mzdpei5yLTF3NmU2cmouci0xd3RqMGVwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFBST0ZJTEVfVVNFUk5BTUVfQkFER0U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMTVkMTY0ci5yLTFnOTRxbTAgZGl2LmNzcy05MDFvYW8uci1oa3lyYWIuci0xcWQweGhhLnItMWI2eWQxdy5yLTF2cjI5dDQuci1hZDl6MHguci1iY3FlZW8uci1xdnV0YzBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBQUk9GSUxFX0JVVFRPTl9HUk9VUDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci1vYmQwcXQuci0xOHUzN2l6LnItMXc2ZTZyai5yLTFoMHo1bWQuci1kbm1yenNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImJlZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dFR5cGU6ICdwcm9maWxlJyxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ1BST0ZJTEVfRVZFTlQnLFxyXG4gICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlcjogKHRpdGxlSW5mb05vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBvZiBsZWZ0IG1hcmdpbiB0byB1c2VybmFtZSBpbiB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMTVkMTY0ci5yLTFnOTRxbTAgPiBkaXYuY3NzLTFkYmpjNG4uci0xd2JoNWEyLnItZG5tcnpzLnItMW55NGwzbCcpLnN0eWxlLm1hcmdpbiA9ICcwcHggMHB4IDBweCAzMnB4JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlRnVsbG5hbWU6IChfYSA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignYTpudGgtY2hpbGQoMSkgZGl2IHNwYW4gc3BhbicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlVXNlcm5hbWU6IChfYiA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy05MDFvYW8uY3NzLWJmYTZrei5yLTFyZTdlemguci0xOHUzN2l6LnItMXFkMHhoYS5yLWEwMjNlNi5yLTE2ZGJhNDEuci1hZDl6MHguci1iY3FlZW8uci1xdnV0YzAgc3BhbicpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5uZXJUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItYXFmYm80LnItMTRsdzlvdC5yLW15NWVwNi5yLXJ1bGw4ci5yLXFrbG1xaS5yLWd0ZHFpei5yLWlwbTVhZi5yLTFnNDBiOHFcIixcclxuICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIEhFQURJTkdfVVNFUk5BTUVfQkFER0U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaDJbcm9sZT1oZWFkaW5nXSBkaXYuci0xOHUzN2l6ICA+IGRpdi5jc3MtMWRiamM0bi5yLTFhd296d3kuci14b2R1dTUuci0xOHUzN2l6LnItZG5tcnpzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogXCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ2hlYWRpbmcnLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnSEVBRElOR19FVkVOVCcsXHJcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBUaGlzIHNlbGVjdG9ycyBhcmUgdW5zdGFibGUsIGJlY2F1c2UgVHdpdHRlciBoYXMgY2hhbmdlZCBjbGFzcyBuYW1lcyB0byBhdXRvLWdlbmVyYXRlZC5cclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodGl0bGVJbmZvTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlRnVsbG5hbWU6IChfYSA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3Rvcignc3Bhbi5jc3MtOTAxb2FvLmNzcy0xNm15NDA2LnItMXFkMHhoYS5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMCA+IHNwYW4gPiBzcGFuJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMW1pMHE3by5yLTFqM3Q2N2Euci1tNjExYnlcIixcclxuICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIFNVU1BFTkRFRF9VU0VSTkFNRV9CQURHRToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTkwMW9hby5jc3MtYmZhNmt6LnItaGt5cmFiLnItMXFkMHhoYS5yLTFiNnlkMXcuci12dzJjMGIuci1hZDl6MHguci1iY3FlZW8uci0zczJ1MnEuci1xdnV0YzBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAnc3VzcGVuZGVkJyxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ1NVU1BFTkRFRF9FVkVOVCcsXHJcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBUaGlzIHNlbGVjdG9ycyBhcmUgdW5zdGFibGUsIGJlY2F1c2UgVHdpdHRlciBoYXMgY2hhbmdlZCBjbGFzcyBuYW1lcyB0byBhdXRvLWdlbmVyYXRlZC5cclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodGl0bGVJbmZvTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlVXNlcm5hbWU6IChfYSA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy05MDFvYW8uY3NzLWJmYTZrei5yLWhreXJhYi5yLTFxZDB4aGEuci0xYjZ5ZDF3LnItdncyYzBiLnItYWQ5ejB4LnItYmNxZWVvLnItM3MydTJxLnItcXZ1dGMwID4gc3BhbiA+IHNwYW4nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoQ29uZmlnKHRoaXMuY29uZmlnKTtcclxuICAgIH1cclxuICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XHJcbiAgICBhdHRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoRmVhdHVyZShmZWF0dXJlKTtcclxuICAgIH1cclxuICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XHJcbiAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuZGV0YWNoRmVhdHVyZShmZWF0dXJlKTtcclxuICAgIH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbmplY3QoXCJkeW5hbWljLWFkYXB0ZXIuZGFwcGxldC1iYXNlLmV0aFwiKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZSwgXCJhZGFwdGVyXCIsIHZvaWQgMCk7XHJcblR3aXR0ZXJBZGFwdGVyID0gX19kZWNvcmF0ZShbXHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxyXG5dLCBUd2l0dGVyQWRhcHRlcik7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFR3aXR0ZXJBZGFwdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQaWN0dXJlIHtcclxuICAgIG1vdW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbClcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHsgaW1nLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBodG1sU3RyaW5nID0gYDxpbWcgc3JjPVwiJHtpbWd9XCIgLz5gO1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICAgIH1cclxuICAgIHVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuZXhlYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRoaXMuZWwuc3R5bGUuYm90dG9tID0gJzE1cHgnO1xyXG4gICAgICAgIHRoaXMuZWwuc3R5bGUucmlnaHQgPSAnMTVweCc7XHJcbiAgICAgICAgdGhpcy5lbC5zdHlsZS56SW5kZXggPSAnMyc7XHJcbiAgICAgICAgdGhpcy5tb3VudCgpO1xyXG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9