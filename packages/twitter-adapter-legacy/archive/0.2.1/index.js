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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkMsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHlEQUF5RCxFQUFFO0FBQy9HO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esb0RBQW9ELHlEQUF5RCxFQUFFO0FBQy9HO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRSxFQUFFO0FBQ3JCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvREFBb0QseURBQXlELEVBQUU7QUFDL0c7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxvREFBb0QseURBQXlELEVBQUU7QUFDL0c7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CLGFBQWEsc0JBQXNCLHlDQUF5QyxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLCtEQUErRCxFQUFFO0FBQzFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkdhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLGlEQUFrQjtBQUN6QztBQUNBLCtCQUErQjtBQUMvQjtBQUNBLEtBQUssRUFBRSxFQUFFO0FBQ1QsNkJBQTZCO0FBQzdCO0FBQ0EsS0FBSyxFQUFFLEVBQUU7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELCtDQUErQyxFQUFFO0FBQzVHLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDbERhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLGdEQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdWFBQXVhLDhWQUE4Vix5QkFBeUIsK1dBQStXO0FBQzdvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFdpZGdldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdpZGdldChjb25maWcpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5jcmVhdGVTdGF0ZShjb25maWcpO1xyXG4gICAgfVxyXG4gICAgV2lkZ2V0LnByb3RvdHlwZS5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShzdGF0ZSwge1xyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbWUubW91bnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV2lkZ2V0LnByb3RvdHlwZS5vbkV4ZWMgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICA7XHJcbiAgICByZXR1cm4gV2lkZ2V0O1xyXG59KCkpO1xyXG5leHBvcnRzLldpZGdldCA9IFdpZGdldDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB3aWRnZXRzXzEgPSByZXF1aXJlKFwiLi93aWRnZXRzXCIpO1xyXG52YXIgZG9jID0gZG9jdW1lbnQ7IC8vaG9zdCBkb2N1bWVudCB3ZSBhcmUgd29ya2luZyBvbiAoaW5wYWdlLmpzKVxyXG52YXIgVHdpdHRlckFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUd2l0dGVyQWRhcHRlcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uRmFjdG9yaWVzID0gd2lkZ2V0c18xLndpZGdldHM7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0QnVpbGRlcnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTZWxlY3RvcjogXCIjdGltZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIFRXRUVUX1NPVVRIOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29udGV4dDogZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI3RpbWVsaW5lIGxpLnN0cmVhbS1pdGVtIGRpdi5qcy1hY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFRXRUVUX0NPTUJPOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29udGV4dDogZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiXCIgLy9Ub0RvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiBmdW5jdGlvbiAodHdlZXROb2RlKSB7IHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0d2VldE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWl0ZW0taWQnKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmpzLXR3ZWV0LXRleHQtY29udGFpbmVyJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvckZ1bGxuYW1lOiB0d2VldE5vZGUucXVlcnlTZWxlY3Rvcignc3Ryb25nLmZ1bGxuYW1lJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvclVzZXJuYW1lOiB0d2VldE5vZGUucXVlcnlTZWxlY3Rvcignc3Bhbi51c2VybmFtZScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JJbWc6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcuYXZhdGFyJykuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgICAgICAgICAgICAgfSk7IH0sXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U2VsZWN0b3I6IFwiI2RtX2RpYWxvZ1wiLFxyXG4gICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE1fU09VVEg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Db250ZXh0OiBmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIjZG1fZGlhbG9nIGxpLkRNSW5ib3gtY29udmVyc2F0aW9uSXRlbSBkaXYuRE1JbmJveEl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgRE1fRUFTVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0NvbnRleHQ6IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIlwiIC8vVG9Eb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlcjogZnVuY3Rpb24gKHR3ZWV0Tm9kZSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZDogdHdlZXROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10aHJlYWQtaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TWVzc2FnZUlkOiB0d2VldE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWxhc3QtbWVzc2FnZS1pZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxuYW1lOiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LkRNSW5ib3hJdGVtLXRpdGxlIC5mdWxsbmFtZScpICYmIHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuRE1JbmJveEl0ZW0tdGl0bGUgLmZ1bGxuYW1lJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LkRNSW5ib3hJdGVtLXRpdGxlIC51c2VybmFtZScpICYmIHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuRE1JbmJveEl0ZW0tdGl0bGUgLnVzZXJuYW1lJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCcuRE1JbmJveEl0ZW0tc25pcHBldCcpLmlubmVyVGV4dFxyXG4gICAgICAgICAgICAgICAgfSk7IH1cclxuICAgICAgICAgICAgfV0ubWFwKGZ1bmN0aW9uIChjZmcpIHsgcmV0dXJuIG5ldyB3aWRnZXRzXzEuV2lkZ2V0QnVpbGRlcihjZmcpOyB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWRhcHRlciBMZWdhY3knKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudEFkYXB0ZXIgIGNyZWF0ZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGlicmFyeSBmcm9tIENvbnRlbnRBZGFwdGVyJywgdGhpcy5saWJyYXJ5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgYWRhcHRlcj5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoIWRvY3VtZW50IHx8ICF3aW5kb3cgfHwgIU11dGF0aW9uT2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdEb2N1bWVudCBvciBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGUuJyk7XHJcbiAgICAgICAgdmFyIE9CU0VSVkVSX0NPTkZJRyA9IHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBfdGhpcy53aWRnZXRCdWlsZGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXRCdWlsZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGRvYy5xdWVyeVNlbGVjdG9yKHdpZGdldEJ1aWxkZXIucXVlcnlTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSAmJiAhd2lkZ2V0QnVpbGRlci5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICh3aWRnZXRCdWlsZGVyLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykgeyByZXR1cm4gd2lkZ2V0QnVpbGRlci51cGRhdGVXaWRnZXRzKF90aGlzLmZlYXR1cmVzLCBtdXRhdGlvbnMpOyB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9ic2VydmUoZSwgT0JTRVJWRVJfQ09ORklHKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXRCdWlsZGVyLnVwZGF0ZVdpZGdldHMoX3RoaXMuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWUgJiYgd2lkZ2V0QnVpbGRlci5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldEJ1aWxkZXIub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jLmJvZHksIE9CU0VSVkVSX0NPTkZJRyk7XHJcbiAgICB9XHJcbiAgICBUd2l0dGVyQWRhcHRlci5wcm90b3R5cGUuYWRkRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdChcImNvbW1vbi1saWIuZGFwcGxldC1iYXNlLmV0aFwiKSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLCBcImxpYnJhcnlcIiwgdm9pZCAwKTtcclxuICAgIFR3aXR0ZXJBZGFwdGVyID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgSW5qZWN0YWJsZSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXHJcbiAgICBdLCBUd2l0dGVyQWRhcHRlcik7XHJcbiAgICByZXR1cm4gVHdpdHRlckFkYXB0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFR3aXR0ZXJBZGFwdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi93aWRnZXRzL2J1dHRvblwiKTtcclxuZXhwb3J0cy53aWRnZXRzID0ge1xyXG4gICAgYnV0dG9uOiBmdW5jdGlvbiAoY29uZmlnKSB7IHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVCdXR0b24oYnVpbGRlciwgaW5zUG9pbnROYW1lLCBjb25maWcpO1xyXG4gICAgfSk7IH0sXHJcbiAgICBtZW51SXRlbTogZnVuY3Rpb24gKF9hKSB7IHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdtZW51SXRlbSBpcyBub3QgaW1wbGVtZW50ZWQnKTtcclxuICAgIH0pOyB9IC8vVG9EbzogaW1wbGVtZW50XHJcbn07XHJcbnZhciBXaWRnZXRCdWlsZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy9Ub0RvOiB3aWRnZXRzXHJcbiAgICBmdW5jdGlvbiBXaWRnZXRCdWlsZGVyKHdpZGdldEJ1aWxkZXJDb25maWcpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZygnV2lkZ2V0QnVpbGRlciBjb25zdHJ1Y3RvcicpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHdpZGdldEJ1aWxkZXJDb25maWcpO1xyXG4gICAgfVxyXG4gICAgV2lkZ2V0QnVpbGRlci5wcm90b3R5cGUudXBkYXRlV2lkZ2V0cyA9IGZ1bmN0aW9uIChmZWF0dXJlcywgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmluc1BvaW50cykuZm9yRWFjaChmdW5jdGlvbiAoaW5zUG9pbnROYW1lKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ1cGRhdGVXaWRnZXRzLmluc1BvaW50TmFtZT5cIiwgaW5zUG9pbnROYW1lKVxyXG4gICAgICAgICAgICBmZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlQ29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAoZmVhdHVyZUNvbmZpZ1tpbnNQb2ludE5hbWVdIHx8IFtdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXRDb25zdHJ1Y3RvcikgeyByZXR1cm4gd2lkZ2V0Q29uc3RydWN0b3IoX3RoaXMsIGluc1BvaW50TmFtZSk7IH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV2lkZ2V0QnVpbGRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5XaWRnZXRCdWlsZGVyID0gV2lkZ2V0QnVpbGRlcjtcclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnKSB7XHJcbiAgICAvLyBUb0RvOiBjYWxjdWxhdGUgbm9kZSBmcm9tIGluc1BvaW50ICYgdmlld1xyXG4gICAgdmFyIGluc1BvaW50ID0gYnVpbGRlci5pbnNQb2ludHNbaW5zUG9pbnROYW1lXTtcclxuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW5zUG9pbnQuc2VsZWN0b3IpO1xyXG4gICAgbm9kZXMgJiYgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29uZmlnLmNsYXp6KS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IG5ldyBidXR0b25fMS5CdXR0b24oY29uZmlnKTtcclxuICAgICAgICBidXR0b24ubW91bnQoKTtcclxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGJ1dHRvbi5lbCk7XHJcbiAgICAgICAgdmFyIHR3ZWV0Tm9kZSA9IGluc1BvaW50LnRvQ29udGV4dChidXR0b24uZWwpO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gYnVpbGRlci5jb250ZXh0QnVpbGRlcih0d2VldE5vZGUpO1xyXG4gICAgICAgIGNvbmZpZy5pbml0LmNhbGwoYnV0dG9uLCBjb250ZXh0KTsgLy8gVG9EbzogZml4IGl0XHJcbiAgICAgICAgYnV0dG9uLm9uRXhlYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHR3ZWV0Tm9kZSA9IGluc1BvaW50LnRvQ29udGV4dCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBidWlsZGVyLmNvbnRleHRCdWlsZGVyKHR3ZWV0Tm9kZSk7XHJcbiAgICAgICAgICAgIGNvbmZpZy5leGVjLmNhbGwoYnV0dG9uLCBjb250ZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB3aWRnZXRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vd2lkZ2V0XCIpO1xyXG52YXIgQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJ1dHRvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBCdXR0b24ucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5zdGF0ZSwgY2xhenogPSBfYS5jbGF6eiwgaW1nID0gX2EuaW1nLCBsYWJlbCA9IF9hLmxhYmVsLCBsb2FkaW5nID0gX2EubG9hZGluZywgZGlzYWJsZWQgPSBfYS5kaXNhYmxlZDtcclxuICAgICAgICB2YXIgaHRtbFN0cmluZyA9IFwiPGRpdiBjbGFzcz1cXFwiXCIgKyBjbGF6eiArIFwiIFByb2ZpbGVUd2VldC1hY3Rpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJQcm9maWxlVHdlZXQtYWN0aW9uQnV0dG9uXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiSWNvbkNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyAobG9hZGluZyA/IFwiPHN2ZyB3aWR0aD1cXFwiMThweFxcXCIgaGVpZ2h0PVxcXCIxOHB4XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCIgY2xhc3M9XFxcImxkcy1yb2xsaW5nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDogbm9uZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMxZGExZjJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTRcXFwiIHI9XFxcIjQwXFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxODguNDk1NTU5MjE1Mzg3NTcgNjQuODMxODUzMDcxNzk1ODZcXFwiIHRyYW5zZm9ybT1cXFwicm90YXRlKDc3LjU3OTMgNTAgNTApXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiBjYWxjTW9kZT1cXFwibGluZWFyXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MzYwIDUwIDUwXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiMHNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlwiIDogXCI8aW1nIGhlaWdodD1cXFwiMThcXFwiIHNyYz1cXFwiXCIgKyBpbWcgKyBcIlxcXCI+XCIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyAobGFiZWwgPyBcIjxzcGFuIGNsYXNzPVxcXCJQcm9maWxlVHdlZXQtYWN0aW9uQ291bnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFwiICsgKGRpc2FibGVkID8gJ3N0eWxlPVwiY29sb3I6I2FhYTtcIicgOiAnJykgKyBcIiBjbGFzcz1cXFwiUHJvZmlsZVR3ZWV0LWFjdGlvbkNvdW50Rm9yUHJlc2VudGF0aW9uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XCIgKyBsYWJlbCArIFwiPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlwiIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsKSB7XHJcbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsID0gZGl2Lmxhc3RDaGlsZDtcclxuICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuc3RhdGUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkV4ZWMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBCdXR0b247XHJcbn0od2lkZ2V0XzEuV2lkZ2V0KSk7XHJcbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9