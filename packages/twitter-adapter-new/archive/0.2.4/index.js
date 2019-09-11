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
        console.log('Adapter New');
        console.log('ContentAdapter  created');
        console.log('library from ContentAdapter', this.library);
        console.log("init adapter>");
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
    TwitterAdapter.prototype.addFeature = function (feature) {
        this.features.push(feature);
        this.updateObservers();
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
                widgetBuilder.updateWidgets(_this.features);
            }
            else if (!e && widgetBuilder.observer) {
                widgetBuilder.observer.disconnect();
                widgetBuilder.observer = null;
            }
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
        console.log('WidgetBuilder constructor');
        return Object.assign(this, widgetBuilderConfig);
    }
    WidgetBuilder.prototype.updateWidgets = function (features, mutations) {
        var _this = this;
        Object.keys(this.insPoints).forEach(function (insPointName) {
            //console.log("updateWidgets.insPointName>", insPointName)
            features.forEach(function (featureConfig) {
                (featureConfig[insPointName] || [])
                    .forEach(function (widgetConstructor) { return widgetConstructor(_this, insPointName); });
            });
        });
    };
    return WidgetBuilder;
}());
exports.WidgetBuilder = WidgetBuilder;
function createButton(builder, insPointName, config) {
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
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkMsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELDBGQUEwRixFQUFFO0FBQ2hKO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esb0RBQW9ELDBGQUEwRixFQUFFO0FBQ2hKO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFLEVBQUU7QUFDckIsYUFBYSxzQkFBc0IseUNBQXlDLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGdDQUFnQyxFQUFFO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsK0RBQStELEVBQUU7QUFDcko7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3ZGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxpREFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsK0NBQStDLEVBQUU7QUFDNUcsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUM3RGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsZ0RBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvc0JBQW9zQiw4VkFBOFYseUJBQXlCLCt2QkFBK3ZCO0FBQzF6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFdpZGdldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdpZGdldChjb25maWcpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5jcmVhdGVTdGF0ZShjb25maWcpO1xyXG4gICAgfVxyXG4gICAgV2lkZ2V0LnByb3RvdHlwZS5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShzdGF0ZSwge1xyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbWUubW91bnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV2lkZ2V0LnByb3RvdHlwZS5vbkV4ZWMgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICA7XHJcbiAgICByZXR1cm4gV2lkZ2V0O1xyXG59KCkpO1xyXG5leHBvcnRzLldpZGdldCA9IFdpZGdldDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB3aWRnZXRzXzEgPSByZXF1aXJlKFwiLi93aWRnZXRzXCIpO1xyXG52YXIgZG9jID0gZG9jdW1lbnQ7IC8vaG9zdCBkb2N1bWVudCB3ZSBhcmUgd29ya2luZyBvbiAoaW5wYWdlLmpzKVxyXG52YXIgVHdpdHRlckFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUd2l0dGVyQWRhcHRlcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uRmFjdG9yaWVzID0gd2lkZ2V0c18xLndpZGdldHM7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0QnVpbGRlcnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl1cIixcclxuICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIFRXRUVUX1NPVVRIOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29udGV4dDogZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dIGRpdltkYXRhLXRlc3RpZD1wcmltYXJ5Q29sdW1uXSBzZWN0aW9uW3JvbGU9cmVnaW9uXSBhcnRpY2xlIGRpdltyb2xlPWdyb3VwXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9DT01CTzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0NvbnRleHQ6IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIlwiIC8vVG9Eb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBUaGlzIHNlbGVjdG9ycyBhcmUgdW5zdGFibGUsIGJlY2F1c2UgVHdpdHRlciBoYXMgY2hhbmdlZCBjbGFzcyBuYW1lcyB0byBhdXRvLWdlbmVyYXRlZC5cclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiBmdW5jdGlvbiAodHdlZXROb2RlKSB7IHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBwYXJzZUludCh0d2VldE5vZGUucXVlcnlTZWxlY3RvcignYXJ0aWNsZSBhIHRpbWUnKS5wYXJlbnROb2RlLmhyZWYuc3Vic3RyKHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlIGEgdGltZScpLnBhcmVudE5vZGUuaHJlZi5sYXN0SW5kZXhPZignLycpICsgMSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXZbbGFuZ10nKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yRnVsbG5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlIGE6bnRoLWNoaWxkKDEpIGRpdiBzcGFuIHNwYW4nKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yVXNlcm5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuci0xZjZyN3ZkID4gZGl2ID4gc3BhbicpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JJbWc6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlIGRpdiBpbWcnKS5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICAgICAgICAgICAgICB9KTsgfSxcclxuICAgICAgICAgICAgfV0ubWFwKGZ1bmN0aW9uIChjZmcpIHsgcmV0dXJuIG5ldyB3aWRnZXRzXzEuV2lkZ2V0QnVpbGRlcihjZmcpOyB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWRhcHRlciBOZXcnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudEFkYXB0ZXIgIGNyZWF0ZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGlicmFyeSBmcm9tIENvbnRlbnRBZGFwdGVyJywgdGhpcy5saWJyYXJ5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgYWRhcHRlcj5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoIWRvY3VtZW50IHx8ICF3aW5kb3cgfHwgIU11dGF0aW9uT2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdEb2N1bWVudCBvciBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGUuJyk7XHJcbiAgICAgICAgdmFyIE9CU0VSVkVSX0NPTkZJRyA9IHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykgeyByZXR1cm4gX3RoaXMudXBkYXRlT2JzZXJ2ZXJzKCk7IH0pO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2MuYm9keSwgT0JTRVJWRVJfQ09ORklHKTtcclxuICAgIH1cclxuICAgIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZS5hZGRGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPYnNlcnZlcnMoKTtcclxuICAgIH07XHJcbiAgICBUd2l0dGVyQWRhcHRlci5wcm90b3R5cGUudXBkYXRlT2JzZXJ2ZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy53aWRnZXRCdWlsZGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXRCdWlsZGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gZG9jLnF1ZXJ5U2VsZWN0b3Iod2lkZ2V0QnVpbGRlci5xdWVyeVNlbGVjdG9yKTtcclxuICAgICAgICAgICAgaWYgKGUgJiYgIXdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7IHJldHVybiB3aWRnZXRCdWlsZGVyLnVwZGF0ZVdpZGdldHMoX3RoaXMuZmVhdHVyZXMsIG11dGF0aW9ucyk7IH0pO1xyXG4gICAgICAgICAgICAgICAgd2lkZ2V0QnVpbGRlci5vYnNlcnZlci5vYnNlcnZlKGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3aWRnZXRCdWlsZGVyLnVwZGF0ZVdpZGdldHMoX3RoaXMuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFlICYmIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgd2lkZ2V0QnVpbGRlci5vYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3QoXCJjb21tb24tbGliLmRhcHBsZXQtYmFzZS5ldGhcIiksXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuICAgIF0sIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZSwgXCJsaWJyYXJ5XCIsIHZvaWQgMCk7XHJcbiAgICBUd2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdGFibGUsXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxyXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIpO1xyXG4gICAgcmV0dXJuIFR3aXR0ZXJBZGFwdGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyQWRhcHRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vd2lkZ2V0cy9idXR0b25cIik7XHJcbmZ1bmN0aW9uIHV1aWR2NCgpIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMud2lkZ2V0cyA9IHtcclxuICAgIGJ1dHRvbjogZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZy5jbGF6eiA9IHV1aWR2NCgpO1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQnV0dG9uKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZW51SXRlbTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoYnVpbGRlciwgaW5zUG9pbnROYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdtZW51SXRlbSBpcyBub3QgaW1wbGVtZW50ZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gLy9Ub0RvOiBpbXBsZW1lbnRcclxufTtcclxudmFyIFdpZGdldEJ1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvL1RvRG86IHdpZGdldHNcclxuICAgIGZ1bmN0aW9uIFdpZGdldEJ1aWxkZXIod2lkZ2V0QnVpbGRlckNvbmZpZykge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdXaWRnZXRCdWlsZGVyIGNvbnN0cnVjdG9yJyk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgd2lkZ2V0QnVpbGRlckNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBXaWRnZXRCdWlsZGVyLnByb3RvdHlwZS51cGRhdGVXaWRnZXRzID0gZnVuY3Rpb24gKGZlYXR1cmVzLCBtdXRhdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zUG9pbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnNQb2ludE5hbWUpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInVwZGF0ZVdpZGdldHMuaW5zUG9pbnROYW1lPlwiLCBpbnNQb2ludE5hbWUpXHJcbiAgICAgICAgICAgIGZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmVDb25maWcpIHtcclxuICAgICAgICAgICAgICAgIChmZWF0dXJlQ29uZmlnW2luc1BvaW50TmFtZV0gfHwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldENvbnN0cnVjdG9yKSB7IHJldHVybiB3aWRnZXRDb25zdHJ1Y3RvcihfdGhpcywgaW5zUG9pbnROYW1lKTsgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXaWRnZXRCdWlsZGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLldpZGdldEJ1aWxkZXIgPSBXaWRnZXRCdWlsZGVyO1xyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oYnVpbGRlciwgaW5zUG9pbnROYW1lLCBjb25maWcpIHtcclxuICAgIC8vIFRvRG86IGNhbGN1bGF0ZSBub2RlIGZyb20gaW5zUG9pbnQgJiB2aWV3XHJcbiAgICB2YXIgaW5zUG9pbnQgPSBidWlsZGVyLmluc1BvaW50c1tpbnNQb2ludE5hbWVdO1xyXG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpbnNQb2ludC5zZWxlY3Rvcik7XHJcbiAgICBub2RlcyAmJiBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb25maWcuY2xhenopLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgYnV0dG9uID0gbmV3IGJ1dHRvbl8xLkJ1dHRvbihjb25maWcpO1xyXG4gICAgICAgIGJ1dHRvbi5tb3VudCgpO1xyXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uLmVsKTtcclxuICAgICAgICB2YXIgdHdlZXROb2RlID0gaW5zUG9pbnQudG9Db250ZXh0KGJ1dHRvbi5lbCk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSBidWlsZGVyLmNvbnRleHRCdWlsZGVyKHR3ZWV0Tm9kZSk7XHJcbiAgICAgICAgY29uZmlnLmluaXQgJiYgY29uZmlnLmluaXQuY2FsbChidXR0b24sIGNvbnRleHQpOyAvLyBUb0RvOiBmaXggaXRcclxuICAgICAgICBidXR0b24ub25FeGVjID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdHdlZXROb2RlID0gaW5zUG9pbnQudG9Db250ZXh0KHRoaXMuZWwpO1xyXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IGJ1aWxkZXIuY29udGV4dEJ1aWxkZXIodHdlZXROb2RlKTtcclxuICAgICAgICAgICAgY29uZmlnLmV4ZWMgJiYgY29uZmlnLmV4ZWMuY2FsbChidXR0b24sIGNvbnRleHQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHdpZGdldF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi93aWRnZXRcIik7XHJcbnZhciBCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEJ1dHRvbi5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnN0YXRlLCBjbGF6eiA9IF9hLmNsYXp6LCBpbWcgPSBfYS5pbWcsIGxhYmVsID0gX2EubGFiZWwsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkO1xyXG4gICAgICAgIHZhciBodG1sU3RyaW5nID0gXCI8ZGl2IGNsYXNzPVxcXCJcIiArIGNsYXp6ICsgXCIgY3NzLTFkYmpjNG4gci0xaXVzdnI0IHItMTh1MzdpeiByLTE2eTJ1b3ggci0xaDB6NW1kXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS1mb2N1c2FibGU9XFxcInRydWVcXFwiIHRhYmluZGV4PVxcXCIwXFxcIiBjbGFzcz1cXFwiY3NzLTE4dDk0bzQgY3NzLTFkYmpjNG4gci0xNzc3ZmNpIHItMTFjcG9rMSByLWJ6dGtvMyByLWxydmliclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgZGlyPVxcXCJsdHJcXFwiIGNsYXNzPVxcXCJjc3MtOTAxb2FvIHItMWF3b3p3eSByLTFyZTdlemggci02a29hbGogci0xcWQweGhhIHItYTAyM2U2IHItMTZkYmE0MSByLTFoMHo1bWQgci1hZDl6MHggci1iY3FlZW8gci1vN3lucWMgci1jbHA3YjEgci0zczJ1MnEgci1xdnV0YzBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3NzLTFkYmpjNG4gci14b2R1dTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgKGxvYWRpbmcgPyBcIjxzdmcgd2lkdGg9XFxcIjE4cHhcXFwiIGhlaWdodD1cXFwiMThweFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJsZHMtcm9sbGluZ1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6IG5vbmU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMWRhMWYyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjE0XFxcIiByPVxcXCI0MFxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiMTg4LjQ5NTU1OTIxNTM4NzU3IDY0LjgzMTg1MzA3MTc5NTg2XFxcIiB0cmFuc2Zvcm09XFxcInJvdGF0ZSg3Ny41NzkzIDUwIDUwKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIHR5cGU9XFxcInJvdGF0ZVxcXCIgY2FsY01vZGU9XFxcImxpbmVhclxcXCIgdmFsdWVzPVxcXCIwIDUwIDUwOzM2MCA1MCA1MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIjBzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cIiA6IFwiPGltZyBoZWlnaHQ9XFxcIjE4XFxcIiBzcmM9XFxcIlwiICsgaW1nICsgXCJcXFwiIGNsYXNzPVxcXCJyLTRxdHFwOSByLXl5eXlvbyByLTF4dmxpNXQgci1kbm1yenMgci1ibndxaW0gci0xcGxjcnVpIHItbHJ2aWJyXFxcIj5cIikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNzcy0xZGJqYzRuIHItc2R6bGlqIHItMXAwZHRhaSByLXhvZHV1NSByLTFkMmY0OTAgci14ZjRpdXcgci11OHMxZCByLXpjaGxuaiByLWlwbTVhZiByLW83eW5xYyByLTY0MTZlZ1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIFwiICsgKGxhYmVsID8gXCI8ZGl2IGNsYXNzPVxcXCJjc3MtMWRiamM0biByLXhvZHV1NSByLTF1ZGgwOHhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRpcj1cXFwiYXV0b1xcXCIgY2xhc3M9XFxcImNzcy05MDFvYW8gY3NzLTE2bXk0MDYgci0xcWQweGhhIHItYWQ5ejB4IHItMW4weHE2ZSByLWJjcWVlbyByLWQzaGJlMSByLTF3Z2cyYjIgci1heHhpMnogci1xdnV0YzBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkaXI9XFxcImF1dG9cXFwiIFwiICsgKGRpc2FibGVkID8gJ3N0eWxlPVwiY29sb3I6I2FhYTtcIicgOiAnJykgKyBcIiBjbGFzcz1cXFwiY3NzLTkwMW9hbyBjc3MtMTZteTQwNiByLTFxZDB4aGEgci1hZDl6MHggci1iY3FlZW8gci1xdnV0YzBcXFwiPlwiICsgbGFiZWwgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIiA6ICcnKSArIFwiXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsKSB7XHJcbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsID0gZGl2Lmxhc3RDaGlsZDtcclxuICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuc3RhdGUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkV4ZWMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBCdXR0b247XHJcbn0od2lkZ2V0XzEuV2lkZ2V0KSk7XHJcbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9