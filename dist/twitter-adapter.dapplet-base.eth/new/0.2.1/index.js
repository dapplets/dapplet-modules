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
        this.core = null;
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
                    id: tweetNode.querySelector('article a time').parentNode.href.substr(tweetNode.querySelector('article a time').parentNode.href.lastIndexOf('/') + 1),
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
        this.observer = new MutationObserver(function (mutations) {
            _this.widgetBuilders.forEach(function (widgetBuilder) {
                var e = doc.querySelector(widgetBuilder.querySelector);
                if (e && !widgetBuilder.observer) {
                    (widgetBuilder.observer = new MutationObserver(function (mutations) { return widgetBuilder.updateWidgets(_this.features, mutations); }))
                        .observe(e, OBSERVER_CONFIG);
                    widgetBuilder.updateWidgets(_this.features);
                }
                else if (!e && widgetBuilder.observer) {
                    widgetBuilder.observer.disconnect();
                    widgetBuilder.observer = null;
                }
            });
        });
        this.observer.observe(doc.body, OBSERVER_CONFIG);
    }
    TwitterAdapter.prototype.addFeature = function (feature) {
        this.features.push(feature);
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
exports.widgets = {
    button: function (config) { return (function (builder, insPointName) {
        return createButton(builder, insPointName, config);
    }); },
    menuItem: function (_a) { return (function (builder, insPointName) {
        return console.error('menuItem is not implemented');
    }); } //ToDo: implement
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
        config.init.call(button, context); // ToDo: fix it
        button.onExec = function () {
            var tweetNode = insPoint.toContext(this.el);
            var context = builder.contextBuilder(tweetNode);
            config.exec.call(button, context);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkMsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsMEZBQTBGLEVBQUU7QUFDaEo7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxvREFBb0QsMEZBQTBGLEVBQUU7QUFDaEo7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsRUFBRTtBQUNyQixhQUFhLHNCQUFzQix5Q0FBeUMsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RiwrREFBK0QsRUFBRTtBQUMxSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxpREFBa0I7QUFDekM7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxLQUFLLEVBQUUsRUFBRTtBQUNULDZCQUE2QjtBQUM3QjtBQUNBLEtBQUssRUFBRSxFQUFFO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCwrQ0FBK0MsRUFBRTtBQUM1RyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ2xEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxnREFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9zQkFBb3NCLDhWQUE4Vix5QkFBeUIsK3ZCQUErdkI7QUFDMXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2lkZ2V0KGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlKGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBXaWRnZXQucHJvdG90eXBlLmNyZWF0ZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHN0YXRlLCB7XHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBtZS5tb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBXaWRnZXQucHJvdG90eXBlLm9uRXhlYyA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIDtcclxuICAgIHJldHVybiBXaWRnZXQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV2lkZ2V0ID0gV2lkZ2V0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHdpZGdldHNfMSA9IHJlcXVpcmUoXCIuL3dpZGdldHNcIik7XHJcbnZhciBkb2MgPSBkb2N1bWVudDsgLy9ob3N0IGRvY3VtZW50IHdlIGFyZSB3b3JraW5nIG9uIChpbnBhZ2UuanMpXHJcbnZhciBUd2l0dGVyQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFR3aXR0ZXJBZGFwdGVyKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jb3JlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGlvbkZhY3RvcmllcyA9IHdpZGdldHNfMS53aWRnZXRzO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcclxuICAgICAgICB0aGlzLndpZGdldEJ1aWxkZXJzID0gW3tcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXHJcbiAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9TT1VUSDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0NvbnRleHQ6IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIm1haW5bcm9sZT1tYWluXSBkaXZbZGF0YS10ZXN0aWQ9cHJpbWFyeUNvbHVtbl0gc2VjdGlvbltyb2xlPXJlZ2lvbl0gYXJ0aWNsZSBkaXZbcm9sZT1ncm91cF1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgVFdFRVRfQ09NQk86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Db250ZXh0OiBmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJcIiAvL1RvRG9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlcjogZnVuY3Rpb24gKHR3ZWV0Tm9kZSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUgYSB0aW1lJykucGFyZW50Tm9kZS5ocmVmLnN1YnN0cih0d2VldE5vZGUucXVlcnlTZWxlY3RvcignYXJ0aWNsZSBhIHRpbWUnKS5wYXJlbnROb2RlLmhyZWYubGFzdEluZGV4T2YoJy8nKSArIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXZbbGFuZ10nKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yRnVsbG5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlIGE6bnRoLWNoaWxkKDEpIGRpdiBzcGFuIHNwYW4nKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yVXNlcm5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuci0xZjZyN3ZkID4gZGl2ID4gc3BhbicpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JJbWc6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlIGRpdiBpbWcnKS5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICAgICAgICAgICAgICB9KTsgfSxcclxuICAgICAgICAgICAgfV0ubWFwKGZ1bmN0aW9uIChjZmcpIHsgcmV0dXJuIG5ldyB3aWRnZXRzXzEuV2lkZ2V0QnVpbGRlcihjZmcpOyB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWRhcHRlciBOZXcnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudEFkYXB0ZXIgIGNyZWF0ZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGlicmFyeSBmcm9tIENvbnRlbnRBZGFwdGVyJywgdGhpcy5saWJyYXJ5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgYWRhcHRlcj5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoIWRvY3VtZW50IHx8ICF3aW5kb3cgfHwgIU11dGF0aW9uT2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdEb2N1bWVudCBvciBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGUuJyk7XHJcbiAgICAgICAgdmFyIE9CU0VSVkVSX0NPTkZJRyA9IHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBfdGhpcy53aWRnZXRCdWlsZGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXRCdWlsZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGRvYy5xdWVyeVNlbGVjdG9yKHdpZGdldEJ1aWxkZXIucXVlcnlTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSAmJiAhd2lkZ2V0QnVpbGRlci5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICh3aWRnZXRCdWlsZGVyLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykgeyByZXR1cm4gd2lkZ2V0QnVpbGRlci51cGRhdGVXaWRnZXRzKF90aGlzLmZlYXR1cmVzLCBtdXRhdGlvbnMpOyB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9ic2VydmUoZSwgT0JTRVJWRVJfQ09ORklHKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXRCdWlsZGVyLnVwZGF0ZVdpZGdldHMoX3RoaXMuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWUgJiYgd2lkZ2V0QnVpbGRlci5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jLmJvZHksIE9CU0VSVkVSX0NPTkZJRyk7XHJcbiAgICB9XHJcbiAgICBUd2l0dGVyQWRhcHRlci5wcm90b3R5cGUuYWRkRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdChcImNvbW1vbi1saWIuZGFwcGxldC1iYXNlLmV0aFwiKSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLCBcImxpYnJhcnlcIiwgdm9pZCAwKTtcclxuICAgIFR3aXR0ZXJBZGFwdGVyID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgSW5qZWN0YWJsZSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXHJcbiAgICBdLCBUd2l0dGVyQWRhcHRlcik7XHJcbiAgICByZXR1cm4gVHdpdHRlckFkYXB0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFR3aXR0ZXJBZGFwdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi93aWRnZXRzL2J1dHRvblwiKTtcclxuZXhwb3J0cy53aWRnZXRzID0ge1xyXG4gICAgYnV0dG9uOiBmdW5jdGlvbiAoY29uZmlnKSB7IHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVCdXR0b24oYnVpbGRlciwgaW5zUG9pbnROYW1lLCBjb25maWcpO1xyXG4gICAgfSk7IH0sXHJcbiAgICBtZW51SXRlbTogZnVuY3Rpb24gKF9hKSB7IHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdtZW51SXRlbSBpcyBub3QgaW1wbGVtZW50ZWQnKTtcclxuICAgIH0pOyB9IC8vVG9EbzogaW1wbGVtZW50XHJcbn07XHJcbnZhciBXaWRnZXRCdWlsZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy9Ub0RvOiB3aWRnZXRzXHJcbiAgICBmdW5jdGlvbiBXaWRnZXRCdWlsZGVyKHdpZGdldEJ1aWxkZXJDb25maWcpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZygnV2lkZ2V0QnVpbGRlciBjb25zdHJ1Y3RvcicpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHdpZGdldEJ1aWxkZXJDb25maWcpO1xyXG4gICAgfVxyXG4gICAgV2lkZ2V0QnVpbGRlci5wcm90b3R5cGUudXBkYXRlV2lkZ2V0cyA9IGZ1bmN0aW9uIChmZWF0dXJlcywgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmluc1BvaW50cykuZm9yRWFjaChmdW5jdGlvbiAoaW5zUG9pbnROYW1lKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ1cGRhdGVXaWRnZXRzLmluc1BvaW50TmFtZT5cIiwgaW5zUG9pbnROYW1lKVxyXG4gICAgICAgICAgICBmZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlQ29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAoZmVhdHVyZUNvbmZpZ1tpbnNQb2ludE5hbWVdIHx8IFtdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXRDb25zdHJ1Y3RvcikgeyByZXR1cm4gd2lkZ2V0Q29uc3RydWN0b3IoX3RoaXMsIGluc1BvaW50TmFtZSk7IH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV2lkZ2V0QnVpbGRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5XaWRnZXRCdWlsZGVyID0gV2lkZ2V0QnVpbGRlcjtcclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnKSB7XHJcbiAgICAvLyBUb0RvOiBjYWxjdWxhdGUgbm9kZSBmcm9tIGluc1BvaW50ICYgdmlld1xyXG4gICAgdmFyIGluc1BvaW50ID0gYnVpbGRlci5pbnNQb2ludHNbaW5zUG9pbnROYW1lXTtcclxuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW5zUG9pbnQuc2VsZWN0b3IpO1xyXG4gICAgbm9kZXMgJiYgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29uZmlnLmNsYXp6KS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IG5ldyBidXR0b25fMS5CdXR0b24oY29uZmlnKTtcclxuICAgICAgICBidXR0b24ubW91bnQoKTtcclxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGJ1dHRvbi5lbCk7XHJcbiAgICAgICAgdmFyIHR3ZWV0Tm9kZSA9IGluc1BvaW50LnRvQ29udGV4dChidXR0b24uZWwpO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gYnVpbGRlci5jb250ZXh0QnVpbGRlcih0d2VldE5vZGUpO1xyXG4gICAgICAgIGNvbmZpZy5pbml0LmNhbGwoYnV0dG9uLCBjb250ZXh0KTsgLy8gVG9EbzogZml4IGl0XHJcbiAgICAgICAgYnV0dG9uLm9uRXhlYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHR3ZWV0Tm9kZSA9IGluc1BvaW50LnRvQ29udGV4dCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBidWlsZGVyLmNvbnRleHRCdWlsZGVyKHR3ZWV0Tm9kZSk7XHJcbiAgICAgICAgICAgIGNvbmZpZy5leGVjLmNhbGwoYnV0dG9uLCBjb250ZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB3aWRnZXRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vd2lkZ2V0XCIpO1xyXG52YXIgQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJ1dHRvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBCdXR0b24ucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5zdGF0ZSwgY2xhenogPSBfYS5jbGF6eiwgaW1nID0gX2EuaW1nLCBsYWJlbCA9IF9hLmxhYmVsLCBsb2FkaW5nID0gX2EubG9hZGluZywgZGlzYWJsZWQgPSBfYS5kaXNhYmxlZDtcclxuICAgICAgICB2YXIgaHRtbFN0cmluZyA9IFwiPGRpdiBjbGFzcz1cXFwiXCIgKyBjbGF6eiArIFwiIGNzcy0xZGJqYzRuIHItMWl1c3ZyNCByLTE4dTM3aXogci0xNnkydW94IHItMWgwejVtZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtZm9jdXNhYmxlPVxcXCJ0cnVlXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgY2xhc3M9XFxcImNzcy0xOHQ5NG80IGNzcy0xZGJqYzRuIHItMTc3N2ZjaSByLTExY3BvazEgci1ienRrbzMgci1scnZpYnJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGRpcj1cXFwibHRyXFxcIiBjbGFzcz1cXFwiY3NzLTkwMW9hbyByLTFhd296d3kgci0xcmU3ZXpoIHItNmtvYWxqIHItMXFkMHhoYSByLWEwMjNlNiByLTE2ZGJhNDEgci0xaDB6NW1kIHItYWQ5ejB4IHItYmNxZWVvIHItbzd5bnFjIHItY2xwN2IxIHItM3MydTJxIHItcXZ1dGMwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNzcy0xZGJqYzRuIHIteG9kdXU1XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIChsb2FkaW5nID8gXCI8c3ZnIHdpZHRoPVxcXCIxOHB4XFxcIiBoZWlnaHQ9XFxcIjE4cHhcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwibGRzLXJvbGxpbmdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiBub25lO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzFkYTFmMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxNFxcXCIgcj1cXFwiNDBcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE4OC40OTU1NTkyMTUzODc1NyA2NC44MzE4NTMwNzE3OTU4NlxcXCIgdHJhbnNmb3JtPVxcXCJyb3RhdGUoNzcuNTc5MyA1MCA1MClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiB0eXBlPVxcXCJyb3RhdGVcXFwiIGNhbGNNb2RlPVxcXCJsaW5lYXJcXFwiIHZhbHVlcz1cXFwiMCA1MCA1MDszNjAgNTAgNTBcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIGR1cj1cXFwiMXNcXFwiIGJlZ2luPVxcXCIwc1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XCIgOiBcIjxpbWcgaGVpZ2h0PVxcXCIxOFxcXCIgc3JjPVxcXCJcIiArIGltZyArIFwiXFxcIiBjbGFzcz1cXFwici00cXRxcDkgci15eXl5b28gci0xeHZsaTV0IHItZG5tcnpzIHItYm53cWltIHItMXBsY3J1aSByLWxydmliclxcXCI+XCIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjc3MtMWRiamM0biByLXNkemxpaiByLTFwMGR0YWkgci14b2R1dTUgci0xZDJmNDkwIHIteGY0aXV3IHItdThzMWQgci16Y2hsbmogci1pcG01YWYgci1vN3lucWMgci02NDE2ZWdcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICBcIiArIChsYWJlbCA/IFwiPGRpdiBjbGFzcz1cXFwiY3NzLTFkYmpjNG4gci14b2R1dTUgci0xdWRoMDh4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkaXI9XFxcImF1dG9cXFwiIGNsYXNzPVxcXCJjc3MtOTAxb2FvIGNzcy0xNm15NDA2IHItMXFkMHhoYSByLWFkOXoweCByLTFuMHhxNmUgci1iY3FlZW8gci1kM2hiZTEgci0xd2dnMmIyIHItYXh4aTJ6IHItcXZ1dGMwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGlyPVxcXCJhdXRvXFxcIiBcIiArIChkaXNhYmxlZCA/ICdzdHlsZT1cImNvbG9yOiNhYWE7XCInIDogJycpICsgXCIgY2xhc3M9XFxcImNzcy05MDFvYW8gY3NzLTE2bXk0MDYgci0xcWQweGhhIHItYWQ5ejB4IHItYmNxZWVvIHItcXZ1dGMwXFxcIj5cIiArIGxhYmVsICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XCIgOiAnJykgKyBcIlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlwiO1xyXG4gICAgICAgIGlmICghdGhpcy5lbCkge1xyXG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcclxuICAgICAgICAgICAgdGhpcy5lbCA9IGRpdi5sYXN0Q2hpbGQ7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLnN0YXRlLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub25FeGVjKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQnV0dG9uO1xyXG59KHdpZGdldF8xLldpZGdldCkpO1xyXG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==