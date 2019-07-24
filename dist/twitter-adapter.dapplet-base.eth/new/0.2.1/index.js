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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkMsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsMEZBQTBGLEVBQUU7QUFDaEo7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxvREFBb0QsMEZBQTBGLEVBQUU7QUFDaEo7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsRUFBRTtBQUNyQixhQUFhLHNCQUFzQix5Q0FBeUMsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RiwrREFBK0QsRUFBRTtBQUMxSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxpREFBa0I7QUFDekM7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxLQUFLLEVBQUUsRUFBRTtBQUNULDZCQUE2QjtBQUM3QjtBQUNBLEtBQUssRUFBRSxFQUFFO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCwrQ0FBK0MsRUFBRTtBQUM1RyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ2xEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxnREFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9zQkFBb3NCLDhWQUE4Vix5QkFBeUIsK3ZCQUErdkI7QUFDMXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2lkZ2V0KGNvbmZpZykge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5jcmVhdGVTdGF0ZShjb25maWcpO1xuICAgIH1cbiAgICBXaWRnZXQucHJvdG90eXBlLmNyZWF0ZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoc3RhdGUsIHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIG1lLm1vdW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2lkZ2V0LnByb3RvdHlwZS5vbkV4ZWMgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgO1xuICAgIHJldHVybiBXaWRnZXQ7XG59KCkpO1xuZXhwb3J0cy5XaWRnZXQgPSBXaWRnZXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgd2lkZ2V0c18xID0gcmVxdWlyZShcIi4vd2lkZ2V0c1wiKTtcbnZhciBkb2MgPSBkb2N1bWVudDsgLy9ob3N0IGRvY3VtZW50IHdlIGFyZSB3b3JraW5nIG9uIChpbnBhZ2UuanMpXG52YXIgVHdpdHRlckFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHdpdHRlckFkYXB0ZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29yZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uRmFjdG9yaWVzID0gd2lkZ2V0c18xLndpZGdldHM7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XG4gICAgICAgIHRoaXMud2lkZ2V0QnVpbGRlcnMgPSBbe1xuICAgICAgICAgICAgICAgIHF1ZXJ5U2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXG4gICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIFRXRUVUX1NPVVRIOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0NvbnRleHQ6IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl0gZGl2W2RhdGEtdGVzdGlkPXByaW1hcnlDb2x1bW5dIHNlY3Rpb25bcm9sZT1yZWdpb25dIGFydGljbGUgZGl2W3JvbGU9Z3JvdXBdXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgVFdFRVRfQ09NQk86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29udGV4dDogZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIlwiIC8vVG9Eb1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBUaGlzIHNlbGVjdG9ycyBhcmUgdW5zdGFibGUsIGJlY2F1c2UgVHdpdHRlciBoYXMgY2hhbmdlZCBjbGFzcyBuYW1lcyB0byBhdXRvLWdlbmVyYXRlZC5cbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlcjogZnVuY3Rpb24gKHR3ZWV0Tm9kZSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlIGEgdGltZScpLnBhcmVudE5vZGUuaHJlZi5zdWJzdHIodHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUgYSB0aW1lJykucGFyZW50Tm9kZS5ocmVmLmxhc3RJbmRleE9mKCcvJykgKyAxKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2RpdltsYW5nXScpLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yRnVsbG5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlIGE6bnRoLWNoaWxkKDEpIGRpdiBzcGFuIHNwYW4nKS5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvclVzZXJuYW1lOiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LnItMWY2cjd2ZCA+IGRpdiA+IHNwYW4nKS5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvckltZzogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUgZGl2IGltZycpLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgICAgICAgICAgICB9KTsgfSxcbiAgICAgICAgICAgIH1dLm1hcChmdW5jdGlvbiAoY2ZnKSB7IHJldHVybiBuZXcgd2lkZ2V0c18xLldpZGdldEJ1aWxkZXIoY2ZnKTsgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBZGFwdGVyIE5ldycpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudEFkYXB0ZXIgIGNyZWF0ZWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xpYnJhcnkgZnJvbSBDb250ZW50QWRhcHRlcicsIHRoaXMubGlicmFyeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBhZGFwdGVyPlwiKTtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghZG9jdW1lbnQgfHwgIXdpbmRvdyB8fCAhTXV0YXRpb25PYnNlcnZlcilcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdEb2N1bWVudCBvciBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGUuJyk7XG4gICAgICAgIHZhciBPQlNFUlZFUl9DT05GSUcgPSB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICBfdGhpcy53aWRnZXRCdWlsZGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXRCdWlsZGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBkb2MucXVlcnlTZWxlY3Rvcih3aWRnZXRCdWlsZGVyLnF1ZXJ5U2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChlICYmICF3aWRnZXRCdWlsZGVyLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICh3aWRnZXRCdWlsZGVyLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykgeyByZXR1cm4gd2lkZ2V0QnVpbGRlci51cGRhdGVXaWRnZXRzKF90aGlzLmZlYXR1cmVzLCBtdXRhdGlvbnMpOyB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vYnNlcnZlKGUsIE9CU0VSVkVSX0NPTkZJRyk7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldEJ1aWxkZXIudXBkYXRlV2lkZ2V0cyhfdGhpcy5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFlICYmIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0QnVpbGRlci5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvYy5ib2R5LCBPQlNFUlZFUl9DT05GSUcpO1xuICAgIH1cbiAgICBUd2l0dGVyQWRhcHRlci5wcm90b3R5cGUuYWRkRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBJbmplY3QoXCJjb21tb24tbGliLmRhcHBsZXQtYmFzZS5ldGhcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLCBcImxpYnJhcnlcIiwgdm9pZCAwKTtcbiAgICBUd2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBJbmplY3RhYmxlLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIpO1xuICAgIHJldHVybiBUd2l0dGVyQWRhcHRlcjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyQWRhcHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vd2lkZ2V0cy9idXR0b25cIik7XG5leHBvcnRzLndpZGdldHMgPSB7XG4gICAgYnV0dG9uOiBmdW5jdGlvbiAoY29uZmlnKSB7IHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnV0dG9uKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnKTtcbiAgICB9KTsgfSxcbiAgICBtZW51SXRlbTogZnVuY3Rpb24gKF9hKSB7IHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcignbWVudUl0ZW0gaXMgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfSk7IH0gLy9Ub0RvOiBpbXBsZW1lbnRcbn07XG52YXIgV2lkZ2V0QnVpbGRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvL1RvRG86IHdpZGdldHNcbiAgICBmdW5jdGlvbiBXaWRnZXRCdWlsZGVyKHdpZGdldEJ1aWxkZXJDb25maWcpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXaWRnZXRCdWlsZGVyIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHdpZGdldEJ1aWxkZXJDb25maWcpO1xuICAgIH1cbiAgICBXaWRnZXRCdWlsZGVyLnByb3RvdHlwZS51cGRhdGVXaWRnZXRzID0gZnVuY3Rpb24gKGZlYXR1cmVzLCBtdXRhdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5pbnNQb2ludHMpLmZvckVhY2goZnVuY3Rpb24gKGluc1BvaW50TmFtZSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInVwZGF0ZVdpZGdldHMuaW5zUG9pbnROYW1lPlwiLCBpbnNQb2ludE5hbWUpXG4gICAgICAgICAgICBmZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgKGZlYXR1cmVDb25maWdbaW5zUG9pbnROYW1lXSB8fCBbXSlcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldENvbnN0cnVjdG9yKSB7IHJldHVybiB3aWRnZXRDb25zdHJ1Y3RvcihfdGhpcywgaW5zUG9pbnROYW1lKTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gV2lkZ2V0QnVpbGRlcjtcbn0oKSk7XG5leHBvcnRzLldpZGdldEJ1aWxkZXIgPSBXaWRnZXRCdWlsZGVyO1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnKSB7XG4gICAgLy8gVG9EbzogY2FsY3VsYXRlIG5vZGUgZnJvbSBpbnNQb2ludCAmIHZpZXdcbiAgICB2YXIgaW5zUG9pbnQgPSBidWlsZGVyLmluc1BvaW50c1tpbnNQb2ludE5hbWVdO1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW5zUG9pbnQuc2VsZWN0b3IpO1xuICAgIG5vZGVzICYmIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb25maWcuY2xhenopLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBidXR0b24gPSBuZXcgYnV0dG9uXzEuQnV0dG9uKGNvbmZpZyk7XG4gICAgICAgIGJ1dHRvbi5tb3VudCgpO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGJ1dHRvbi5lbCk7XG4gICAgICAgIHZhciB0d2VldE5vZGUgPSBpbnNQb2ludC50b0NvbnRleHQoYnV0dG9uLmVsKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBidWlsZGVyLmNvbnRleHRCdWlsZGVyKHR3ZWV0Tm9kZSk7XG4gICAgICAgIGNvbmZpZy5pbml0LmNhbGwoYnV0dG9uLCBjb250ZXh0KTsgLy8gVG9EbzogZml4IGl0XG4gICAgICAgIGJ1dHRvbi5vbkV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdHdlZXROb2RlID0gaW5zUG9pbnQudG9Db250ZXh0KHRoaXMuZWwpO1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBidWlsZGVyLmNvbnRleHRCdWlsZGVyKHR3ZWV0Tm9kZSk7XG4gICAgICAgICAgICBjb25maWcuZXhlYy5jYWxsKGJ1dHRvbiwgY29udGV4dCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHdpZGdldF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi93aWRnZXRcIik7XG52YXIgQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCdXR0b24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEJ1dHRvbi5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuc3RhdGUsIGNsYXp6ID0gX2EuY2xhenosIGltZyA9IF9hLmltZywgbGFiZWwgPSBfYS5sYWJlbCwgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGRpc2FibGVkID0gX2EuZGlzYWJsZWQ7XG4gICAgICAgIHZhciBodG1sU3RyaW5nID0gXCI8ZGl2IGNsYXNzPVxcXCJcIiArIGNsYXp6ICsgXCIgY3NzLTFkYmpjNG4gci0xaXVzdnI0IHItMTh1MzdpeiByLTE2eTJ1b3ggci0xaDB6NW1kXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS1mb2N1c2FibGU9XFxcInRydWVcXFwiIHRhYmluZGV4PVxcXCIwXFxcIiBjbGFzcz1cXFwiY3NzLTE4dDk0bzQgY3NzLTFkYmpjNG4gci0xNzc3ZmNpIHItMTFjcG9rMSByLWJ6dGtvMyByLWxydmliclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgZGlyPVxcXCJsdHJcXFwiIGNsYXNzPVxcXCJjc3MtOTAxb2FvIHItMWF3b3p3eSByLTFyZTdlemggci02a29hbGogci0xcWQweGhhIHItYTAyM2U2IHItMTZkYmE0MSByLTFoMHo1bWQgci1hZDl6MHggci1iY3FlZW8gci1vN3lucWMgci1jbHA3YjEgci0zczJ1MnEgci1xdnV0YzBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3NzLTFkYmpjNG4gci14b2R1dTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgKGxvYWRpbmcgPyBcIjxzdmcgd2lkdGg9XFxcIjE4cHhcXFwiIGhlaWdodD1cXFwiMThweFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJsZHMtcm9sbGluZ1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6IG5vbmU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMWRhMWYyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjE0XFxcIiByPVxcXCI0MFxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiMTg4LjQ5NTU1OTIxNTM4NzU3IDY0LjgzMTg1MzA3MTc5NTg2XFxcIiB0cmFuc2Zvcm09XFxcInJvdGF0ZSg3Ny41NzkzIDUwIDUwKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIHR5cGU9XFxcInJvdGF0ZVxcXCIgY2FsY01vZGU9XFxcImxpbmVhclxcXCIgdmFsdWVzPVxcXCIwIDUwIDUwOzM2MCA1MCA1MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIjBzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cIiA6IFwiPGltZyBoZWlnaHQ9XFxcIjE4XFxcIiBzcmM9XFxcIlwiICsgaW1nICsgXCJcXFwiIGNsYXNzPVxcXCJyLTRxdHFwOSByLXl5eXlvbyByLTF4dmxpNXQgci1kbm1yenMgci1ibndxaW0gci0xcGxjcnVpIHItbHJ2aWJyXFxcIj5cIikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNzcy0xZGJqYzRuIHItc2R6bGlqIHItMXAwZHRhaSByLXhvZHV1NSByLTFkMmY0OTAgci14ZjRpdXcgci11OHMxZCByLXpjaGxuaiByLWlwbTVhZiByLW83eW5xYyByLTY0MTZlZ1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIFwiICsgKGxhYmVsID8gXCI8ZGl2IGNsYXNzPVxcXCJjc3MtMWRiamM0biByLXhvZHV1NSByLTF1ZGgwOHhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRpcj1cXFwiYXV0b1xcXCIgY2xhc3M9XFxcImNzcy05MDFvYW8gY3NzLTE2bXk0MDYgci0xcWQweGhhIHItYWQ5ejB4IHItMW4weHE2ZSByLWJjcWVlbyByLWQzaGJlMSByLTF3Z2cyYjIgci1heHhpMnogci1xdnV0YzBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkaXI9XFxcImF1dG9cXFwiIFwiICsgKGRpc2FibGVkID8gJ3N0eWxlPVwiY29sb3I6I2FhYTtcIicgOiAnJykgKyBcIiBjbGFzcz1cXFwiY3NzLTkwMW9hbyBjc3MtMTZteTQwNiByLTFxZDB4aGEgci1hZDl6MHggci1iY3FlZW8gci1xdnV0YzBcXFwiPlwiICsgbGFiZWwgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIiA6ICcnKSArIFwiXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XCI7XG4gICAgICAgIGlmICghdGhpcy5lbCkge1xuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xuICAgICAgICAgICAgdGhpcy5lbCA9IGRpdi5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuc3RhdGUuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub25FeGVjKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBCdXR0b247XG59KHdpZGdldF8xLldpZGdldCkpO1xuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9