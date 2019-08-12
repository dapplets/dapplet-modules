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
                querySelector: "#timeline",
                insPoints: {
                    TWEET_SOUTH: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode; },
                        selector: "#timeline li.stream-item div.js-actions"
                    },
                    TWEET_COMBO: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode; },
                        selector: "" //ToDo
                    }
                },
                contextBuilder: function (tweetNode) { return ({
                    id: tweetNode.getAttribute('data-item-id'),
                    text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
                    authorFullname: tweetNode.querySelector('strong.fullname').innerText,
                    authorUsername: tweetNode.querySelector('span.username').innerText,
                    authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
                }); },
            }, {
                querySelector: "#dm_dialog",
                insPoints: {
                    DM_SOUTH: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode; },
                        selector: "#dm_dialog li.DMInbox-conversationItem div.DMInboxItem"
                    },
                    DM_EAST: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode; },
                        selector: "" //ToDo
                    }
                },
                contextBuilder: function (tweetNode) { return ({
                    threadId: tweetNode.getAttribute('data-thread-id'),
                    lastMessageId: tweetNode.getAttribute('data-last-message-id'),
                    fullname: tweetNode.querySelector('div.DMInboxItem-title .fullname') && tweetNode.querySelector('div.DMInboxItem-title .fullname').innerText,
                    username: tweetNode.querySelector('div.DMInboxItem-title .username') && tweetNode.querySelector('div.DMInboxItem-title .username').innerText,
                    text: tweetNode.querySelector('.DMInboxItem-snippet').innerText
                }); }
            }].map(function (cfg) { return new widgets_1.WidgetBuilder(cfg); });
        console.log('Adapter Legacy');
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
        var htmlString = "<div class=\"" + clazz + " ProfileTweet-action\">\n                <button class=\"ProfileTweet-actionButton\" type=\"button\">\n                    <div class=\"IconContainer\">\n                        " + (loading ? "<svg width=\"18px\" height=\"18px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"lds-rolling\" style=\"background: none;\">\n                            <circle cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#1da1f2\" stroke-width=\"14\" r=\"40\" stroke-dasharray=\"188.49555921538757 64.83185307179586\" transform=\"rotate(77.5793 50 50)\">\n                                <animateTransform attributeName=\"transform\" type=\"rotate\" calcMode=\"linear\" values=\"0 50 50;360 50 50\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"></animateTransform>\n                            </circle>\n                        </svg>" : "<img height=\"18\" src=\"" + img + "\">") + "\n                    </div>\n                    " + (label ? "<span class=\"ProfileTweet-actionCount\">\n                        <span " + (disabled ? 'style="color:#aaa;"' : '') + " class=\"ProfileTweet-actionCountForPresentation\" aria-hidden=\"true\">" + label + "</span>\n                    </span>" : '') + "\n                </button>\n            </div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkMsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHlEQUF5RCxFQUFFO0FBQy9HO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esb0RBQW9ELHlEQUF5RCxFQUFFO0FBQy9HO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRSxFQUFFO0FBQ3JCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvREFBb0QseURBQXlELEVBQUU7QUFDL0c7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxvREFBb0QseURBQXlELEVBQUU7QUFDL0c7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CLGFBQWEsc0JBQXNCLHlDQUF5QyxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLCtEQUErRCxFQUFFO0FBQzFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkdhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLGlEQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCwrQ0FBK0MsRUFBRTtBQUM1RyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQzdEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxnREFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVhQUF1YSw4VkFBOFYseUJBQXlCLCtXQUErVztBQUM3b0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXaWRnZXQoY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuY3JlYXRlU3RhdGUoY29uZmlnKTtcclxuICAgIH1cclxuICAgIFdpZGdldC5wcm90b3R5cGUuY3JlYXRlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoc3RhdGUsIHtcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIG1lLm1vdW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdpZGdldC5wcm90b3R5cGUub25FeGVjID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgO1xyXG4gICAgcmV0dXJuIFdpZGdldDtcclxufSgpKTtcclxuZXhwb3J0cy5XaWRnZXQgPSBXaWRnZXQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgd2lkZ2V0c18xID0gcmVxdWlyZShcIi4vd2lkZ2V0c1wiKTtcclxudmFyIGRvYyA9IGRvY3VtZW50OyAvL2hvc3QgZG9jdW1lbnQgd2UgYXJlIHdvcmtpbmcgb24gKGlucGFnZS5qcylcclxudmFyIFR3aXR0ZXJBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHdpdHRlckFkYXB0ZXIoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmFjdGlvbkZhY3RvcmllcyA9IHdpZGdldHNfMS53aWRnZXRzO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcclxuICAgICAgICB0aGlzLndpZGdldEJ1aWxkZXJzID0gW3tcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U2VsZWN0b3I6IFwiI3RpbWVsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9TT1VUSDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0NvbnRleHQ6IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiN0aW1lbGluZSBsaS5zdHJlYW0taXRlbSBkaXYuanMtYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9DT01CTzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0NvbnRleHQ6IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIlwiIC8vVG9Eb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlcjogZnVuY3Rpb24gKHR3ZWV0Tm9kZSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdHdlZXROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pdGVtLWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5qcy10d2VldC10ZXh0LWNvbnRhaW5lcicpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JGdWxsbmFtZTogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0cm9uZy5mdWxsbmFtZScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JVc2VybmFtZTogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4udXNlcm5hbWUnKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9ySW1nOiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignaW1nLmF2YXRhcicpLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgICAgICAgICAgIH0pOyB9LFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeVNlbGVjdG9yOiBcIiNkbV9kaWFsb2dcIixcclxuICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIERNX1NPVVRIOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29udGV4dDogZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI2RtX2RpYWxvZyBsaS5ETUluYm94LWNvbnZlcnNhdGlvbkl0ZW0gZGl2LkRNSW5ib3hJdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIERNX0VBU1Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Db250ZXh0OiBmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJcIiAvL1RvRG9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6IGZ1bmN0aW9uICh0d2VldE5vZGUpIHsgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQ6IHR3ZWV0Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhyZWFkLWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1lc3NhZ2VJZDogdHdlZXROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXN0LW1lc3NhZ2UtaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICBmdWxsbmFtZTogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ETUluYm94SXRlbS10aXRsZSAuZnVsbG5hbWUnKSAmJiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LkRNSW5ib3hJdGVtLXRpdGxlIC5mdWxsbmFtZScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ETUluYm94SXRlbS10aXRsZSAudXNlcm5hbWUnKSAmJiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LkRNSW5ib3hJdGVtLXRpdGxlIC51c2VybmFtZScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignLkRNSW5ib3hJdGVtLXNuaXBwZXQnKS5pbm5lclRleHRcclxuICAgICAgICAgICAgICAgIH0pOyB9XHJcbiAgICAgICAgICAgIH1dLm1hcChmdW5jdGlvbiAoY2ZnKSB7IHJldHVybiBuZXcgd2lkZ2V0c18xLldpZGdldEJ1aWxkZXIoY2ZnKTsgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FkYXB0ZXIgTGVnYWN5Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnRBZGFwdGVyICBjcmVhdGVkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xpYnJhcnkgZnJvbSBDb250ZW50QWRhcHRlcicsIHRoaXMubGlicmFyeSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbml0IGFkYXB0ZXI+XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudCB8fCAhd2luZG93IHx8ICFNdXRhdGlvbk9ic2VydmVyKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRG9jdW1lbnQgb3IgTXV0YXRpb25PYnNlcnZlciBpcyBub3QgYXZhaWxhYmxlLicpO1xyXG4gICAgICAgIHZhciBPQlNFUlZFUl9DT05GSUcgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgX3RoaXMud2lkZ2V0QnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAod2lkZ2V0QnVpbGRlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGUgPSBkb2MucXVlcnlTZWxlY3Rvcih3aWRnZXRCdWlsZGVyLnF1ZXJ5U2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgJiYgIXdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAod2lkZ2V0QnVpbGRlci5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHsgcmV0dXJuIHdpZGdldEJ1aWxkZXIudXBkYXRlV2lkZ2V0cyhfdGhpcy5mZWF0dXJlcywgbXV0YXRpb25zKTsgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vYnNlcnZlKGUsIE9CU0VSVkVSX0NPTkZJRyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0QnVpbGRlci51cGRhdGVXaWRnZXRzKF90aGlzLmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFlICYmIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXRCdWlsZGVyLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXRCdWlsZGVyLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvYy5ib2R5LCBPQlNFUlZFUl9DT05GSUcpO1xyXG4gICAgfVxyXG4gICAgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLmFkZEZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3QoXCJjb21tb24tbGliLmRhcHBsZXQtYmFzZS5ldGhcIiksXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuICAgIF0sIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZSwgXCJsaWJyYXJ5XCIsIHZvaWQgMCk7XHJcbiAgICBUd2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdGFibGUsXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxyXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIpO1xyXG4gICAgcmV0dXJuIFR3aXR0ZXJBZGFwdGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyQWRhcHRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vd2lkZ2V0cy9idXR0b25cIik7XHJcbmZ1bmN0aW9uIHV1aWR2NCgpIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMud2lkZ2V0cyA9IHtcclxuICAgIGJ1dHRvbjogZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZy5jbGF6eiA9IHV1aWR2NCgpO1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQnV0dG9uKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZW51SXRlbTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoYnVpbGRlciwgaW5zUG9pbnROYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdtZW51SXRlbSBpcyBub3QgaW1wbGVtZW50ZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gLy9Ub0RvOiBpbXBsZW1lbnRcclxufTtcclxudmFyIFdpZGdldEJ1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvL1RvRG86IHdpZGdldHNcclxuICAgIGZ1bmN0aW9uIFdpZGdldEJ1aWxkZXIod2lkZ2V0QnVpbGRlckNvbmZpZykge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdXaWRnZXRCdWlsZGVyIGNvbnN0cnVjdG9yJyk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgd2lkZ2V0QnVpbGRlckNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBXaWRnZXRCdWlsZGVyLnByb3RvdHlwZS51cGRhdGVXaWRnZXRzID0gZnVuY3Rpb24gKGZlYXR1cmVzLCBtdXRhdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zUG9pbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnNQb2ludE5hbWUpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInVwZGF0ZVdpZGdldHMuaW5zUG9pbnROYW1lPlwiLCBpbnNQb2ludE5hbWUpXHJcbiAgICAgICAgICAgIGZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmVDb25maWcpIHtcclxuICAgICAgICAgICAgICAgIChmZWF0dXJlQ29uZmlnW2luc1BvaW50TmFtZV0gfHwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldENvbnN0cnVjdG9yKSB7IHJldHVybiB3aWRnZXRDb25zdHJ1Y3RvcihfdGhpcywgaW5zUG9pbnROYW1lKTsgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXaWRnZXRCdWlsZGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLldpZGdldEJ1aWxkZXIgPSBXaWRnZXRCdWlsZGVyO1xyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oYnVpbGRlciwgaW5zUG9pbnROYW1lLCBjb25maWcpIHtcclxuICAgIC8vIFRvRG86IGNhbGN1bGF0ZSBub2RlIGZyb20gaW5zUG9pbnQgJiB2aWV3XHJcbiAgICB2YXIgaW5zUG9pbnQgPSBidWlsZGVyLmluc1BvaW50c1tpbnNQb2ludE5hbWVdO1xyXG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpbnNQb2ludC5zZWxlY3Rvcik7XHJcbiAgICBub2RlcyAmJiBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb25maWcuY2xhenopLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgYnV0dG9uID0gbmV3IGJ1dHRvbl8xLkJ1dHRvbihjb25maWcpO1xyXG4gICAgICAgIGJ1dHRvbi5tb3VudCgpO1xyXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uLmVsKTtcclxuICAgICAgICB2YXIgdHdlZXROb2RlID0gaW5zUG9pbnQudG9Db250ZXh0KGJ1dHRvbi5lbCk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSBidWlsZGVyLmNvbnRleHRCdWlsZGVyKHR3ZWV0Tm9kZSk7XHJcbiAgICAgICAgY29uZmlnLmluaXQuY2FsbChidXR0b24sIGNvbnRleHQpOyAvLyBUb0RvOiBmaXggaXRcclxuICAgICAgICBidXR0b24ub25FeGVjID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdHdlZXROb2RlID0gaW5zUG9pbnQudG9Db250ZXh0KHRoaXMuZWwpO1xyXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IGJ1aWxkZXIuY29udGV4dEJ1aWxkZXIodHdlZXROb2RlKTtcclxuICAgICAgICAgICAgY29uZmlnLmV4ZWMuY2FsbChidXR0b24sIGNvbnRleHQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHdpZGdldF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi93aWRnZXRcIik7XHJcbnZhciBCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEJ1dHRvbi5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnN0YXRlLCBjbGF6eiA9IF9hLmNsYXp6LCBpbWcgPSBfYS5pbWcsIGxhYmVsID0gX2EubGFiZWwsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkO1xyXG4gICAgICAgIHZhciBodG1sU3RyaW5nID0gXCI8ZGl2IGNsYXNzPVxcXCJcIiArIGNsYXp6ICsgXCIgUHJvZmlsZVR3ZWV0LWFjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcIlByb2ZpbGVUd2VldC1hY3Rpb25CdXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJJY29uQ29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIChsb2FkaW5nID8gXCI8c3ZnIHdpZHRoPVxcXCIxOHB4XFxcIiBoZWlnaHQ9XFxcIjE4cHhcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwibGRzLXJvbGxpbmdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiBub25lO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzFkYTFmMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxNFxcXCIgcj1cXFwiNDBcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE4OC40OTU1NTkyMTUzODc1NyA2NC44MzE4NTMwNzE3OTU4NlxcXCIgdHJhbnNmb3JtPVxcXCJyb3RhdGUoNzcuNTc5MyA1MCA1MClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiB0eXBlPVxcXCJyb3RhdGVcXFwiIGNhbGNNb2RlPVxcXCJsaW5lYXJcXFwiIHZhbHVlcz1cXFwiMCA1MCA1MDszNjAgNTAgNTBcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIGR1cj1cXFwiMXNcXFwiIGJlZ2luPVxcXCIwc1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XCIgOiBcIjxpbWcgaGVpZ2h0PVxcXCIxOFxcXCIgc3JjPVxcXCJcIiArIGltZyArIFwiXFxcIj5cIikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICBcIiArIChsYWJlbCA/IFwiPHNwYW4gY2xhc3M9XFxcIlByb2ZpbGVUd2VldC1hY3Rpb25Db3VudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXCIgKyAoZGlzYWJsZWQgPyAnc3R5bGU9XCJjb2xvcjojYWFhO1wiJyA6ICcnKSArIFwiIGNsYXNzPVxcXCJQcm9maWxlVHdlZXQtYWN0aW9uQ291bnRGb3JQcmVzZW50YXRpb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cIiArIGxhYmVsICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XCIgOiAnJykgKyBcIlxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICBpZiAoIXRoaXMuZWwpIHtcclxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFN0cmluZy50cmltKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWwgPSBkaXYubGFzdENoaWxkO1xyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uRXhlYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJ1dHRvbjtcclxufSh3aWRnZXRfMS5XaWRnZXQpKTtcclxuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=