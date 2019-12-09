/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/common/widget.ts":
/*!******************************!*\
  !*** ./src/common/widget.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Widget = /** @class */ (function () {
    function Widget(config) {
        this.state = this.createState(config);
    }
    Widget.prototype.unmount = function () {
        this.el.remove();
    };
    Widget.prototype.createState = function (state) {
        var me = this;
        return new Proxy(state, {
            set: function (target, property, value) {
                target[property] = value;
                me.mount();
                return true;
            }
        });
    };
    Widget.prototype.onExec = function () { };
    ;
    return Widget;
}());
exports.Widget = Widget;


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
var widgets_1 = __webpack_require__(/*! ./widgets */ "./src/widgets.ts");
var doc = document; //host document we are working on (inpage.js)
var TwitterAdapter = /** @class */ (function () {
    function TwitterAdapter() {
        var _this = this;
        this.actionFactories = widgets_1.widgets;
        this.observer = null;
        this.features = [];
        this.widgetBuilders = [{
                querySelector: "main[role=main]",
                insPoints: {
                    TWEET_SOUTH: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; },
                        selector: "main[role=main] div[data-testid=primaryColumn] section[role=region] article div[role=group]"
                    },
                    TWEET_COMBO: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; },
                        selector: "" //ToDo
                    }
                },
                // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                contextBuilder: function (tweetNode) { return ({
                    id: parseInt(tweetNode.querySelector('article a time').parentNode.href.substr(tweetNode.querySelector('article a time').parentNode.href.lastIndexOf('/') + 1)),
                    text: tweetNode.querySelector('div[lang]').innerText,
                    authorFullname: tweetNode.querySelector('article a:nth-child(1) div span span').innerText,
                    authorUsername: tweetNode.querySelector('div.r-1f6r7vd > div > span').innerText,
                    authorImg: tweetNode.querySelector('article div img').getAttribute('src')
                }); },
            }].map(function (cfg) { return new widgets_1.WidgetBuilder(cfg); });
        if (this.observer)
            return;
        if (!document || !window || !MutationObserver)
            throw Error('Document or MutationObserver is not available.');
        var OBSERVER_CONFIG = {
            childList: true,
            subtree: true
        };
        this.observer = new MutationObserver(function (mutations) { return _this.updateObservers(); });
        this.observer.observe(doc.body, OBSERVER_CONFIG);
    }
    TwitterAdapter.prototype.attachFeature = function (feature) {
        if (this.features.find(function (f) { return f === feature; }))
            return;
        this.features.push(feature);
        this.updateObservers();
    };
    TwitterAdapter.prototype.detachFeature = function (feature) {
        this.features = this.features.filter(function (f) { return f !== feature; });
        this.widgetBuilders.forEach(function (wb) {
            var widgets = wb.widgets.get(feature);
            if (!widgets)
                return;
            widgets.forEach(function (w) { return w.unmount(); });
        });
    };
    TwitterAdapter.prototype.updateObservers = function () {
        var _this = this;
        this.widgetBuilders.forEach(function (widgetBuilder) {
            var e = doc.querySelector(widgetBuilder.querySelector);
            if (e && !widgetBuilder.observer) {
                widgetBuilder.observer = new MutationObserver(function (mutations) { return widgetBuilder.updateWidgets(_this.features, mutations); });
                widgetBuilder.observer.observe(e, {
                    childList: true,
                    subtree: true
                });
            }
            else if (!e && widgetBuilder.observer) {
                widgetBuilder.observer.disconnect();
                widgetBuilder.observer = null;
            }
            widgetBuilder.updateWidgets(_this.features);
        });
    };
    __decorate([
        Inject("common-lib.dapplet-base.eth"),
        __metadata("design:type", Object)
    ], TwitterAdapter.prototype, "library", void 0);
    TwitterAdapter = __decorate([
        Injectable,
        __metadata("design:paramtypes", [])
    ], TwitterAdapter);
    return TwitterAdapter;
}());
exports.default = TwitterAdapter;


/***/ }),

/***/ "./src/widgets.ts":
/*!************************!*\
  !*** ./src/widgets.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = __webpack_require__(/*! ./widgets/button */ "./src/widgets/button.ts");
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.widgets = {
    button: function (config) {
        config.clazz = uuidv4();
        return (function (builder, insPointName) {
            return createButton(builder, insPointName, config);
        });
    },
    menuItem: function (_a) {
        return (function (builder, insPointName) {
            return console.error('menuItem is not implemented');
        });
    } //ToDo: implement
};
var WidgetBuilder = /** @class */ (function () {
    //ToDo: widgets
    function WidgetBuilder(widgetBuilderConfig) {
        this.observer = null;
        this.widgets = new Map();
        return Object.assign(this, widgetBuilderConfig);
    }
    WidgetBuilder.prototype.updateWidgets = function (features, mutations) {
        var _this = this;
        Object.keys(this.insPoints).forEach(function (insPointName) {
            features.forEach(function (feature) {
                var featureConfig = feature.config;
                (featureConfig[insPointName] || [])
                    .forEach(function (widgetConstructor) {
                    var insertedWidgets = widgetConstructor(_this, insPointName);
                    var registeredWidgets = _this.widgets.get(feature) || [];
                    registeredWidgets.push.apply(registeredWidgets, insertedWidgets);
                    _this.widgets.set(feature, registeredWidgets);
                });
            });
        });
    };
    return WidgetBuilder;
}());
exports.WidgetBuilder = WidgetBuilder;
function createButton(builder, insPointName, config) {
    var insertedWidgets = [];
    // ToDo: calculate node from insPoint & view
    var insPoint = builder.insPoints[insPointName];
    var nodes = document.querySelectorAll(insPoint.selector);
    nodes && nodes.forEach(function (node) {
        if (node.getElementsByClassName(config.clazz).length > 0)
            return;
        var button = new button_1.Button(config);
        button.mount();
        node.appendChild(button.el);
        var tweetNode = insPoint.toContext(button.el);
        var context = builder.contextBuilder(tweetNode);
        config.init && config.init.call(button, context); // ToDo: fix it
        button.onExec = function () {
            var tweetNode = insPoint.toContext(this.el);
            var context = builder.contextBuilder(tweetNode);
            config.exec && config.exec.call(button, context);
        };
        insertedWidgets.push(button);
    });
    return insertedWidgets;
}


/***/ }),

/***/ "./src/widgets/button.ts":
/*!*******************************!*\
  !*** ./src/widgets/button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var widget_1 = __webpack_require__(/*! ../common/widget */ "./src/common/widget.ts");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.mount = function () {
        var _this = this;
        var _a = this.state, clazz = _a.clazz, img = _a.img, label = _a.label, loading = _a.loading, disabled = _a.disabled;
        var htmlString = "<div class=\"" + clazz + " css-1dbjc4n r-1iusvr4 r-18u37iz r-16y2uox r-1h0z5md\">\n            <div role=\"button\" data-focusable=\"true\" tabindex=\"0\" class=\"css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-bztko3 r-lrvibr\">\n                <div dir=\"ltr\" class=\"css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0\">\n                    <div class=\"css-1dbjc4n r-xoduu5\">\n                        " + (loading ? "<svg width=\"18px\" height=\"18px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"lds-rolling\" style=\"background: none;\">\n                            <circle cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#1da1f2\" stroke-width=\"14\" r=\"40\" stroke-dasharray=\"188.49555921538757 64.83185307179586\" transform=\"rotate(77.5793 50 50)\">\n                                <animateTransform attributeName=\"transform\" type=\"rotate\" calcMode=\"linear\" values=\"0 50 50;360 50 50\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"></animateTransform>\n                            </circle>\n                        </svg>" : "<img height=\"18\" src=\"" + img + "\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr\">") + "\n                        <div class=\"css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg\"></div>\n                    </div>\n                    " + (label ? "<div class=\"css-1dbjc4n r-xoduu5 r-1udh08x\">\n                        <span dir=\"auto\" class=\"css-901oao css-16my406 r-1qd0xha r-ad9z0x r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0\">\n                            <span dir=\"auto\" " + (disabled ? 'style="color:#aaa;"' : '') + " class=\"css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0\">" + label + "</span>\n                        </span>\n                    </div>" : '') + "\n                </div>\n            </div>\n        </div>";
        if (!this.el) {
            var div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            this.el = div.lastChild;
            this.el.addEventListener("click", function (e) {
                if (!_this.state.disabled) {
                    _this.onExec();
                }
            });
        }
        else {
            this.el.innerHTML = htmlString;
        }
    };
    return Button;
}(widget_1.Widget));
exports.Button = Button;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkMsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELDBGQUEwRixFQUFFO0FBQ2hKO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esb0RBQW9ELDBGQUEwRixFQUFFO0FBQ2hKO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFLEVBQUU7QUFDckIsYUFBYSxzQkFBc0IseUNBQXlDLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxnQ0FBZ0MsRUFBRTtBQUNyRztBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsc0JBQXNCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxzQkFBc0IsRUFBRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxvQkFBb0IsRUFBRTtBQUNoRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLCtEQUErRCxFQUFFO0FBQ3JKO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM5RmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsaURBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxnREFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9zQkFBb3NCLDhWQUE4Vix5QkFBeUIsK3ZCQUErdkI7QUFDMXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2lkZ2V0KGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlKGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBXaWRnZXQucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmUoKTtcclxuICAgIH07XHJcbiAgICBXaWRnZXQucHJvdG90eXBlLmNyZWF0ZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHN0YXRlLCB7XHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBtZS5tb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBXaWRnZXQucHJvdG90eXBlLm9uRXhlYyA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIDtcclxuICAgIHJldHVybiBXaWRnZXQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV2lkZ2V0ID0gV2lkZ2V0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHdpZGdldHNfMSA9IHJlcXVpcmUoXCIuL3dpZGdldHNcIik7XHJcbnZhciBkb2MgPSBkb2N1bWVudDsgLy9ob3N0IGRvY3VtZW50IHdlIGFyZSB3b3JraW5nIG9uIChpbnBhZ2UuanMpXHJcbnZhciBUd2l0dGVyQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFR3aXR0ZXJBZGFwdGVyKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25GYWN0b3JpZXMgPSB3aWRnZXRzXzEud2lkZ2V0cztcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XHJcbiAgICAgICAgdGhpcy53aWRnZXRCdWlsZGVycyA9IFt7XHJcbiAgICAgICAgICAgICAgICBxdWVyeVNlbGVjdG9yOiBcIm1haW5bcm9sZT1tYWluXVwiLFxyXG4gICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVFdFRVRfU09VVEg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Db250ZXh0OiBmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl0gZGl2W2RhdGEtdGVzdGlkPXByaW1hcnlDb2x1bW5dIHNlY3Rpb25bcm9sZT1yZWdpb25dIGFydGljbGUgZGl2W3JvbGU9Z3JvdXBdXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFRXRUVUX0NPTUJPOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29udGV4dDogZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiXCIgLy9Ub0RvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIFRvRG86IFRoaXMgc2VsZWN0b3JzIGFyZSB1bnN0YWJsZSwgYmVjYXVzZSBUd2l0dGVyIGhhcyBjaGFuZ2VkIGNsYXNzIG5hbWVzIHRvIGF1dG8tZ2VuZXJhdGVkLlxyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6IGZ1bmN0aW9uICh0d2VldE5vZGUpIHsgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcnNlSW50KHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlIGEgdGltZScpLnBhcmVudE5vZGUuaHJlZi5zdWJzdHIodHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUgYSB0aW1lJykucGFyZW50Tm9kZS5ocmVmLmxhc3RJbmRleE9mKCcvJykgKyAxKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2RpdltsYW5nXScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JGdWxsbmFtZTogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUgYTpudGgtY2hpbGQoMSkgZGl2IHNwYW4gc3BhbicpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JVc2VybmFtZTogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5yLTFmNnI3dmQgPiBkaXYgPiBzcGFuJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvckltZzogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUgZGl2IGltZycpLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgICAgICAgICAgIH0pOyB9LFxyXG4gICAgICAgICAgICB9XS5tYXAoZnVuY3Rpb24gKGNmZykgeyByZXR1cm4gbmV3IHdpZGdldHNfMS5XaWRnZXRCdWlsZGVyKGNmZyk7IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudCB8fCAhd2luZG93IHx8ICFNdXRhdGlvbk9ic2VydmVyKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRG9jdW1lbnQgb3IgTXV0YXRpb25PYnNlcnZlciBpcyBub3QgYXZhaWxhYmxlLicpO1xyXG4gICAgICAgIHZhciBPQlNFUlZFUl9DT05GSUcgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHsgcmV0dXJuIF90aGlzLnVwZGF0ZU9ic2VydmVycygpOyB9KTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jLmJvZHksIE9CU0VSVkVSX0NPTkZJRyk7XHJcbiAgICB9XHJcbiAgICBUd2l0dGVyQWRhcHRlci5wcm90b3R5cGUuYXR0YWNoRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuZmluZChmdW5jdGlvbiAoZikgeyByZXR1cm4gZiA9PT0gZmVhdHVyZTsgfSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPYnNlcnZlcnMoKTtcclxuICAgIH07XHJcbiAgICBUd2l0dGVyQWRhcHRlci5wcm90b3R5cGUuZGV0YWNoRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IHRoaXMuZmVhdHVyZXMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmICE9PSBmZWF0dXJlOyB9KTtcclxuICAgICAgICB0aGlzLndpZGdldEJ1aWxkZXJzLmZvckVhY2goZnVuY3Rpb24gKHdiKSB7XHJcbiAgICAgICAgICAgIHZhciB3aWRnZXRzID0gd2Iud2lkZ2V0cy5nZXQoZmVhdHVyZSk7XHJcbiAgICAgICAgICAgIGlmICghd2lkZ2V0cylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgd2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LnVubW91bnQoKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0QnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAod2lkZ2V0QnVpbGRlcikge1xyXG4gICAgICAgICAgICB2YXIgZSA9IGRvYy5xdWVyeVNlbGVjdG9yKHdpZGdldEJ1aWxkZXIucXVlcnlTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGlmIChlICYmICF3aWRnZXRCdWlsZGVyLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICB3aWRnZXRCdWlsZGVyLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykgeyByZXR1cm4gd2lkZ2V0QnVpbGRlci51cGRhdGVXaWRnZXRzKF90aGlzLmZlYXR1cmVzLCBtdXRhdGlvbnMpOyB9KTtcclxuICAgICAgICAgICAgICAgIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIub2JzZXJ2ZShlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFlICYmIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgd2lkZ2V0QnVpbGRlci5vYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2lkZ2V0QnVpbGRlci51cGRhdGVXaWRnZXRzKF90aGlzLmZlYXR1cmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3QoXCJjb21tb24tbGliLmRhcHBsZXQtYmFzZS5ldGhcIiksXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuICAgIF0sIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZSwgXCJsaWJyYXJ5XCIsIHZvaWQgMCk7XHJcbiAgICBUd2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdGFibGUsXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxyXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIpO1xyXG4gICAgcmV0dXJuIFR3aXR0ZXJBZGFwdGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyQWRhcHRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vd2lkZ2V0cy9idXR0b25cIik7XHJcbmZ1bmN0aW9uIHV1aWR2NCgpIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMud2lkZ2V0cyA9IHtcclxuICAgIGJ1dHRvbjogZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZy5jbGF6eiA9IHV1aWR2NCgpO1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQnV0dG9uKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZW51SXRlbTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoYnVpbGRlciwgaW5zUG9pbnROYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdtZW51SXRlbSBpcyBub3QgaW1wbGVtZW50ZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gLy9Ub0RvOiBpbXBsZW1lbnRcclxufTtcclxudmFyIFdpZGdldEJ1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvL1RvRG86IHdpZGdldHNcclxuICAgIGZ1bmN0aW9uIFdpZGdldEJ1aWxkZXIod2lkZ2V0QnVpbGRlckNvbmZpZykge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IG5ldyBNYXAoKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB3aWRnZXRCdWlsZGVyQ29uZmlnKTtcclxuICAgIH1cclxuICAgIFdpZGdldEJ1aWxkZXIucHJvdG90eXBlLnVwZGF0ZVdpZGdldHMgPSBmdW5jdGlvbiAoZmVhdHVyZXMsIG11dGF0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5pbnNQb2ludHMpLmZvckVhY2goZnVuY3Rpb24gKGluc1BvaW50TmFtZSkge1xyXG4gICAgICAgICAgICBmZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmVhdHVyZUNvbmZpZyA9IGZlYXR1cmUuY29uZmlnO1xyXG4gICAgICAgICAgICAgICAgKGZlYXR1cmVDb25maWdbaW5zUG9pbnROYW1lXSB8fCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAod2lkZ2V0Q29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zZXJ0ZWRXaWRnZXRzID0gd2lkZ2V0Q29uc3RydWN0b3IoX3RoaXMsIGluc1BvaW50TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2lzdGVyZWRXaWRnZXRzID0gX3RoaXMud2lkZ2V0cy5nZXQoZmVhdHVyZSkgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFdpZGdldHMucHVzaC5hcHBseShyZWdpc3RlcmVkV2lkZ2V0cywgaW5zZXJ0ZWRXaWRnZXRzKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy53aWRnZXRzLnNldChmZWF0dXJlLCByZWdpc3RlcmVkV2lkZ2V0cyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdpZGdldEJ1aWxkZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV2lkZ2V0QnVpbGRlciA9IFdpZGdldEJ1aWxkZXI7XHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihidWlsZGVyLCBpbnNQb2ludE5hbWUsIGNvbmZpZykge1xyXG4gICAgdmFyIGluc2VydGVkV2lkZ2V0cyA9IFtdO1xyXG4gICAgLy8gVG9EbzogY2FsY3VsYXRlIG5vZGUgZnJvbSBpbnNQb2ludCAmIHZpZXdcclxuICAgIHZhciBpbnNQb2ludCA9IGJ1aWxkZXIuaW5zUG9pbnRzW2luc1BvaW50TmFtZV07XHJcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGluc1BvaW50LnNlbGVjdG9yKTtcclxuICAgIG5vZGVzICYmIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbmZpZy5jbGF6eikubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBidXR0b24gPSBuZXcgYnV0dG9uXzEuQnV0dG9uKGNvbmZpZyk7XHJcbiAgICAgICAgYnV0dG9uLm1vdW50KCk7XHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChidXR0b24uZWwpO1xyXG4gICAgICAgIHZhciB0d2VldE5vZGUgPSBpbnNQb2ludC50b0NvbnRleHQoYnV0dG9uLmVsKTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IGJ1aWxkZXIuY29udGV4dEJ1aWxkZXIodHdlZXROb2RlKTtcclxuICAgICAgICBjb25maWcuaW5pdCAmJiBjb25maWcuaW5pdC5jYWxsKGJ1dHRvbiwgY29udGV4dCk7IC8vIFRvRG86IGZpeCBpdFxyXG4gICAgICAgIGJ1dHRvbi5vbkV4ZWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0d2VldE5vZGUgPSBpbnNQb2ludC50b0NvbnRleHQodGhpcy5lbCk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gYnVpbGRlci5jb250ZXh0QnVpbGRlcih0d2VldE5vZGUpO1xyXG4gICAgICAgICAgICBjb25maWcuZXhlYyAmJiBjb25maWcuZXhlYy5jYWxsKGJ1dHRvbiwgY29udGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbnNlcnRlZFdpZGdldHMucHVzaChidXR0b24pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5zZXJ0ZWRXaWRnZXRzO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgd2lkZ2V0XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3dpZGdldFwiKTtcclxudmFyIEJ1dHRvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCdXR0b24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQnV0dG9uLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuc3RhdGUsIGNsYXp6ID0gX2EuY2xhenosIGltZyA9IF9hLmltZywgbGFiZWwgPSBfYS5sYWJlbCwgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGRpc2FibGVkID0gX2EuZGlzYWJsZWQ7XHJcbiAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSBcIjxkaXYgY2xhc3M9XFxcIlwiICsgY2xhenogKyBcIiBjc3MtMWRiamM0biByLTFpdXN2cjQgci0xOHUzN2l6IHItMTZ5MnVveCByLTFoMHo1bWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgcm9sZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWZvY3VzYWJsZT1cXFwidHJ1ZVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIGNsYXNzPVxcXCJjc3MtMTh0OTRvNCBjc3MtMWRiamM0biByLTE3NzdmY2kgci0xMWNwb2sxIHItYnp0a28zIHItbHJ2aWJyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBkaXI9XFxcImx0clxcXCIgY2xhc3M9XFxcImNzcy05MDFvYW8gci0xYXdvend5IHItMXJlN2V6aCByLTZrb2FsaiByLTFxZDB4aGEgci1hMDIzZTYgci0xNmRiYTQxIHItMWgwejVtZCByLWFkOXoweCByLWJjcWVlbyByLW83eW5xYyByLWNscDdiMSByLTNzMnUycSByLXF2dXRjMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjc3MtMWRiamM0biByLXhvZHV1NVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyAobG9hZGluZyA/IFwiPHN2ZyB3aWR0aD1cXFwiMThweFxcXCIgaGVpZ2h0PVxcXCIxOHB4XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCIgY2xhc3M9XFxcImxkcy1yb2xsaW5nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDogbm9uZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMxZGExZjJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTRcXFwiIHI9XFxcIjQwXFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxODguNDk1NTU5MjE1Mzg3NTcgNjQuODMxODUzMDcxNzk1ODZcXFwiIHRyYW5zZm9ybT1cXFwicm90YXRlKDc3LjU3OTMgNTAgNTApXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiBjYWxjTW9kZT1cXFwibGluZWFyXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MzYwIDUwIDUwXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiMHNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlwiIDogXCI8aW1nIGhlaWdodD1cXFwiMThcXFwiIHNyYz1cXFwiXCIgKyBpbWcgKyBcIlxcXCIgY2xhc3M9XFxcInItNHF0cXA5IHIteXl5eW9vIHItMXh2bGk1dCByLWRubXJ6cyByLWJud3FpbSByLTFwbGNydWkgci1scnZpYnJcXFwiPlwiKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3NzLTFkYmpjNG4gci1zZHpsaWogci0xcDBkdGFpIHIteG9kdXU1IHItMWQyZjQ5MCByLXhmNGl1dyByLXU4czFkIHItemNobG5qIHItaXBtNWFmIHItbzd5bnFjIHItNjQxNmVnXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyAobGFiZWwgPyBcIjxkaXYgY2xhc3M9XFxcImNzcy0xZGJqYzRuIHIteG9kdXU1IHItMXVkaDA4eFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGlyPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwiY3NzLTkwMW9hbyBjc3MtMTZteTQwNiByLTFxZDB4aGEgci1hZDl6MHggci0xbjB4cTZlIHItYmNxZWVvIHItZDNoYmUxIHItMXdnZzJiMiByLWF4eGkyeiByLXF2dXRjMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRpcj1cXFwiYXV0b1xcXCIgXCIgKyAoZGlzYWJsZWQgPyAnc3R5bGU9XCJjb2xvcjojYWFhO1wiJyA6ICcnKSArIFwiIGNsYXNzPVxcXCJjc3MtOTAxb2FvIGNzcy0xNm15NDA2IHItMXFkMHhoYSByLWFkOXoweCByLWJjcWVlbyByLXF2dXRjMFxcXCI+XCIgKyBsYWJlbCArIFwiPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlwiIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICBpZiAoIXRoaXMuZWwpIHtcclxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFN0cmluZy50cmltKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWwgPSBkaXYubGFzdENoaWxkO1xyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uRXhlYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJ1dHRvbjtcclxufSh3aWRnZXRfMS5XaWRnZXQpKTtcclxuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=