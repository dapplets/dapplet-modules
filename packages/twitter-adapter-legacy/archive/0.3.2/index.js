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
    function Widget(callbackConfig) {
        var _this = this;
        this.stateTemplates = callbackConfig(function (n) { return _this.setState(n); });
        this.setState("DEFAULT");
    }
    Widget.prototype.unmount = function () {
        this.el && this.el.remove();
    };
    Widget.prototype.createState = function (state) {
        var me = this;
        var proxy = new Proxy(state, {
            get: function (target, property, receiver) {
                if (typeof target[property] === 'object' && target[property].datasource) {
                    return undefined;
                }
                else {
                    return Reflect.get(target, property, receiver);
                }
            },
            set: function (target, property, value, receiver) {
                var success = Reflect.set(target, property, value, receiver);
                if (success)
                    me.mount();
                return success;
            }
        });
        var _loop_1 = function (key) {
            var obj = state[key];
            if (typeof obj === 'object' && obj.datasource) {
                obj.datasource(function (value) {
                    proxy[key] = value.toString();
                });
            }
        };
        for (var key in state) {
            _loop_1(key);
        }
        return proxy;
    };
    Widget.prototype.setState = function (stateName) {
        var newState = this.stateTemplates[stateName];
        this.state = this.createState(newState);
        this.el && this.mount();
    };
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
        this.contextBuilders = [{
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
                contextBuilder: function (tweetNode) { return ({
                    id: tweetNode.getAttribute('data-item-id'),
                    text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
                    authorFullname: tweetNode.querySelector('strong.fullname').innerText,
                    authorUsername: tweetNode.querySelector('span.username').innerText,
                    authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
                }); },
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
                contextBuilder: function (tweetNode) { return ({
                    threadId: tweetNode.getAttribute('data-thread-id'),
                    lastMessageId: tweetNode.getAttribute('data-last-message-id'),
                    fullname: tweetNode.querySelector('div.DMInboxItem-title .fullname') && tweetNode.querySelector('div.DMInboxItem-title .fullname').innerText,
                    username: tweetNode.querySelector('div.DMInboxItem-title .username') && tweetNode.querySelector('div.DMInboxItem-title .username').innerText,
                    text: tweetNode.querySelector('.DMInboxItem-snippet').innerText
                }); }
            }].map(function (cfg) { return new widgets_1.WidgetBuilder(cfg); });
        if (this.observer)
            return;
        if (!document || !window || !MutationObserver)
            throw Error('Document or MutationObserver is not available.');
        var OBSERVER_CONFIG = {
            childList: true,
            subtree: true
        };
        this.observer = new MutationObserver(function (mutations) { return _this.updateObservers(mutations); });
        this.observer.observe(doc.body, OBSERVER_CONFIG);
    }
    TwitterAdapter.prototype.attachFeature = function (feature) {
        if (this.features.find(function (f) { return f === feature; }))
            return;
        this.features.splice(feature.orderIndex, 0, feature);
        this.updateObservers();
    };
    TwitterAdapter.prototype.detachFeature = function (feature) {
        this.features = this.features.filter(function (f) { return f !== feature; });
        this.contextBuilders.forEach(function (wb) {
            var widgets = wb.widgets.get(feature);
            if (!widgets)
                return;
            widgets.forEach(function (w) { return w.unmount(); });
        });
    };
    TwitterAdapter.prototype.updateObservers = function (mutations) {
        var _this = this;
        this.contextBuilders.forEach(function (contextBuilder) {
            var _a;
            var container = doc.querySelector(contextBuilder.containerSelector);
            if (container) {
                var removedContexts_1 = [];
                (_a = mutations) === null || _a === void 0 ? void 0 : _a.forEach(function (m) { return Array.from(m.removedNodes)
                    .filter(function (n) { return n.nodeType == Node.ELEMENT_NODE; })
                    .forEach(function (n) {
                    var _a;
                    var contextNodes = Array.from(((_a = n) === null || _a === void 0 ? void 0 : _a.querySelectorAll(contextBuilder.contextSelector)) || []);
                    var contexts = contextNodes.map(function (n) { return contextBuilder.contexts.get(n); }).filter(function (e) { return e; });
                    removedContexts_1.push.apply(removedContexts_1, contexts);
                }); });
                if (removedContexts_1 && removedContexts_1.length > 0) {
                    removedContexts_1.forEach(function (ctx) { return ctx.subscriptions && ctx.subscriptions.forEach(function (sub) { return sub.close(); }); });
                    Core.contextFinished(removedContexts_1);
                }
                contextBuilder.updateContexts(_this.features, container); // ToDo: think about it
            }
            if (container && !contextBuilder.observer) {
                contextBuilder.observer = new MutationObserver(function (mutations) {
                    contextBuilder.updateContexts(_this.features, container, mutations);
                });
                contextBuilder.observer.observe(container, {
                    childList: true,
                    subtree: true
                });
            }
            else if (!container && contextBuilder.observer) {
                contextBuilder.observer.disconnect();
                contextBuilder.observer = null;
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
var picture_1 = __webpack_require__(/*! ./widgets/picture */ "./src/widgets/picture.ts");
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.widgets = function (conn) { return ({
    button: function (configCallback) {
        var uuid = uuidv4();
        return (function (builder, insPointName, order, contextNode, proxiedSubs) {
            return createWidget(button_1.Button, builder, insPointName, configCallback, order, contextNode, uuid, proxiedSubs);
        });
    },
    menuItem: function (_a) {
        return (function (builder, insPointName, order, contextNode) {
            return console.error('menuItem is not implemented');
        });
    },
    picture: function (config) {
        var uuid = uuidv4();
        return (function (builder, insPointName, order, contextNode, proxiedSubs) {
            return createWidget(picture_1.Picture, builder, insPointName, function (ctx, setState, sub) { return ({ "DEFAULT": config }); }, order, contextNode, uuid, proxiedSubs);
        });
    }
}); };
var WidgetBuilder = /** @class */ (function () {
    //ToDo: widgets
    function WidgetBuilder(widgetBuilderConfig) {
        this.observer = null;
        this.widgets = new Map();
        this.contexts = new WeakMap();
        return Object.assign(this, widgetBuilderConfig);
    }
    // `updateContexts()` is called when new context is found.
    WidgetBuilder.prototype.updateContexts = function (features, container, mutations) {
        var _a;
        var contextNodes = Array.from(((_a = container) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.contextSelector)) || []);
        if (contextNodes.length === 0)
            return;
        var newContexts = [];
        for (var _i = 0, contextNodes_1 = contextNodes; _i < contextNodes_1.length; _i++) {
            var contextNode = contextNodes_1[_i];
            var isNew = !this.contexts.has(contextNode);
            var context = isNew ? this.contextBuilder(contextNode) : this.contexts.get(contextNode);
            // ToDo: refactor isNew checking
            if (isNew)
                newContexts.push(context);
            if (!context.subscriptions) {
                context.subscriptions = [];
                context.proxiedSubs = {};
                for (var i = 0; i < features.length; i++) {
                    var feature = features[i];
                    var connections = feature.config.connections;
                    var _loop_1 = function (connectionName) {
                        var settersByNames = {}; // ToDo: memory leaks?
                        context.proxiedSubs[connectionName] = new Proxy({}, {
                            get: function (target, name, receiver) {
                                return ({
                                    datasource: function (setter) {
                                        if (!settersByNames[name])
                                            settersByNames[name] = [];
                                        settersByNames[name].push(setter);
                                    }
                                });
                            }
                        });
                        var connection = connections[connectionName];
                        var subscription = connection.subscribe(context.id, function (data) {
                            var _loop_2 = function (key) {
                                var setters = settersByNames[key] || [];
                                setters.forEach(function (set) { return set(data[key]); });
                            };
                            for (var key in settersByNames) {
                                _loop_2(key);
                            }
                        });
                        context.subscriptions.push(subscription);
                    };
                    for (var connectionName in connections) {
                        _loop_1(connectionName);
                    }
                }
            }
            if (isNew) {
                this.contexts.set(contextNode, context);
            }
            for (var i = 0; i < features.length; i++) {
                var feature = features[i];
                for (var insPointName in this.insPoints) {
                    for (var _b = 0, _c = feature.config[insPointName] || []; _b < _c.length; _b++) {
                        var widgetConstructor = _c[_b];
                        var contextIds = feature.contextIds || [];
                        if (contextIds.length === 0 || contextIds.indexOf(context.id) !== -1) {
                            var insertedWidget = widgetConstructor(this, insPointName, i, contextNode, context.proxiedSubs);
                            if (!insertedWidget)
                                continue;
                            var registeredWidgets = this.widgets.get(feature) || [];
                            registeredWidgets.push(insertedWidget);
                            this.widgets.set(feature, registeredWidgets);
                        }
                    }
                }
            }
        }
        if (newContexts.length > 0) {
            Core.contextStarted(newContexts);
        }
    };
    return WidgetBuilder;
}());
exports.WidgetBuilder = WidgetBuilder;
function createWidget(Widget, builder, insPointName, configCallback, order, contextNode, clazz, proxiedSubs) {
    // ToDo: calculate node from insPoint & view
    var insPoint = builder.insPoints[insPointName];
    var node = contextNode.querySelector(insPoint.selector);
    if (node.getElementsByClassName(clazz).length > 0)
        return;
    var context = builder.contexts.get(contextNode);
    var widget = new Widget(function (setState) { return configCallback(context, setState, proxiedSubs); }, clazz);
    widget.el.classList.add('dapplet-widget');
    var insertedElements = node.getElementsByClassName('dapplet-widget');
    if (insertedElements.length >= order) {
        node.insertBefore(widget.el, insertedElements[order]);
    }
    else {
        node.appendChild(widget.el);
    }
    return widget;
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
    function Button(callbackConfig, clazz) {
        var _a, _b;
        var _this = _super.call(this, callbackConfig) || this;
        _this.el = document.createElement('div');
        _this.el.classList.add(clazz, 'ProfileTweet-action');
        _this.el.addEventListener("click", function (e) {
            var _a, _b;
            if (!_this.state.disabled) {
                (_b = (_a = _this.state).exec) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        });
        _this.mount();
        (_b = (_a = _this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a);
        return _this;
    }
    Button.prototype.mount = function () {
        var _a = this.state, img = _a.img, label = _a.label, loading = _a.loading, disabled = _a.disabled;
        var htmlString = "<button class=\"ProfileTweet-actionButton\" type=\"button\">\n                <div class=\"IconContainer\">\n                    " + (loading ? "<svg width=\"18px\" height=\"18px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"lds-rolling\" style=\"background: none;\">\n                        <circle cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#1da1f2\" stroke-width=\"14\" r=\"40\" stroke-dasharray=\"188.49555921538757 64.83185307179586\" transform=\"rotate(77.5793 50 50)\">\n                            <animateTransform attributeName=\"transform\" type=\"rotate\" calcMode=\"linear\" values=\"0 50 50;360 50 50\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"></animateTransform>\n                        </circle>\n                    </svg>" : "<img height=\"18\" src=\"" + img + "\">") + "\n                </div>\n                " + (label ? "<span class=\"ProfileTweet-actionCount\">\n                    <span " + (disabled ? 'style="color:#aaa;"' : '') + " class=\"ProfileTweet-actionCountForPresentation\" aria-hidden=\"true\">" + label + "</span>\n                </span>" : '') + "\n            </button>";
        this.el.innerHTML = htmlString;
    };
    return Button;
}(widget_1.Widget));
exports.Button = Button;


/***/ }),

/***/ "./src/widgets/picture.ts":
/*!********************************!*\
  !*** ./src/widgets/picture.ts ***!
  \********************************/
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
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(callbackConfig, clazz) {
        var _a, _b;
        var _this = _super.call(this, callbackConfig) || this;
        _this.el = document.createElement('div');
        _this.el.classList.add(clazz);
        _this.el.addEventListener("click", function (e) {
            var _a, _b;
            if (!_this.state.disabled) {
                (_b = (_a = _this.state).exec) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        });
        _this.el.style.position = 'absolute';
        _this.el.style.bottom = '15px';
        _this.el.style.right = '15px';
        _this.el.style.zIndex = '999';
        _this.mount();
        (_b = (_a = _this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a);
        return _this;
    }
    Picture.prototype.mount = function () {
        var _a = this.state, img = _a.img, disabled = _a.disabled;
        var htmlString = "<img src=\"" + img + "\" />";
        this.el.innerHTML = htmlString;
    };
    return Picture;
}(widget_1.Widget));
exports.Picture = Picture;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9waWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsMEJBQTBCLEVBQUU7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFD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QUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsZ0RBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2lkZ2V0KGNhbGxiYWNrQ29uZmlnKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXRlVGVtcGxhdGVzID0gY2FsbGJhY2tDb25maWcoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIF90aGlzLnNldFN0YXRlKG4pOyB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFwiREVGQVVMVFwiKTtcclxuICAgIH1cclxuICAgIFdpZGdldC5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG4gICAgV2lkZ2V0LnByb3RvdHlwZS5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtwcm9wZXJ0eV0gPT09ICdvYmplY3QnICYmIHRhcmdldFtwcm9wZXJ0eV0uZGF0YXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lLm1vdW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VjY2VzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gc3RhdGVba2V5XTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5kYXRhc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouZGF0YXNvdXJjZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcclxuICAgICAgICAgICAgX2xvb3BfMShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJveHk7XHJcbiAgICB9O1xyXG4gICAgV2lkZ2V0LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZU5hbWUpIHtcclxuICAgICAgICB2YXIgbmV3U3RhdGUgPSB0aGlzLnN0YXRlVGVtcGxhdGVzW3N0YXRlTmFtZV07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuY3JlYXRlU3RhdGUobmV3U3RhdGUpO1xyXG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5tb3VudCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXaWRnZXQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV2lkZ2V0ID0gV2lkZ2V0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHdpZGdldHNfMSA9IHJlcXVpcmUoXCIuL3dpZGdldHNcIik7XHJcbnZhciBkb2MgPSBkb2N1bWVudDsgLy9ob3N0IGRvY3VtZW50IHdlIGFyZSB3b3JraW5nIG9uIChpbnBhZ2UuanMpXHJcbnZhciBUd2l0dGVyQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFR3aXR0ZXJBZGFwdGVyKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25GYWN0b3JpZXMgPSB3aWRnZXRzXzEud2lkZ2V0cztcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XHJcbiAgICAgICAgdGhpcy5jb250ZXh0QnVpbGRlcnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwiI3RpbWVsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiW2lkXj1zdHJlYW0taXRlbS10d2VldC1dXCIsXHJcbiAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9TT1VUSDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuanMtYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9DT01CTzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJcIiAvL1RvRG9cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFBJQ1RVUkU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmpzLXR3ZWV0LXRleHQtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6IGZ1bmN0aW9uICh0d2VldE5vZGUpIHsgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHR3ZWV0Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaXRlbS1pZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuanMtdHdlZXQtdGV4dC1jb250YWluZXInKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yRnVsbG5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdzdHJvbmcuZnVsbG5hbWUnKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yVXNlcm5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdzcGFuLnVzZXJuYW1lJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvckltZzogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZy5hdmF0YXInKS5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICAgICAgICAgICAgICB9KTsgfSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwiI2RtX2RpYWxvZ1wiLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dFNlbGVjdG9yOiBcImxpLkRNSW5ib3gtY29udmVyc2F0aW9uSXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE1fU09VVEg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LkRNSW5ib3hJdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIERNX0VBU1Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiXCIgLy9Ub0RvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiBmdW5jdGlvbiAodHdlZXROb2RlKSB7IHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRocmVhZElkOiB0d2VldE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRocmVhZC1pZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNZXNzYWdlSWQ6IHR3ZWV0Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFzdC1tZXNzYWdlLWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbG5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuRE1JbmJveEl0ZW0tdGl0bGUgLmZ1bGxuYW1lJykgJiYgdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ETUluYm94SXRlbS10aXRsZSAuZnVsbG5hbWUnKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuRE1JbmJveEl0ZW0tdGl0bGUgLnVzZXJuYW1lJykgJiYgdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ETUluYm94SXRlbS10aXRsZSAudXNlcm5hbWUnKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5ETUluYm94SXRlbS1zbmlwcGV0JykuaW5uZXJUZXh0XHJcbiAgICAgICAgICAgICAgICB9KTsgfVxyXG4gICAgICAgICAgICB9XS5tYXAoZnVuY3Rpb24gKGNmZykgeyByZXR1cm4gbmV3IHdpZGdldHNfMS5XaWRnZXRCdWlsZGVyKGNmZyk7IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudCB8fCAhd2luZG93IHx8ICFNdXRhdGlvbk9ic2VydmVyKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRG9jdW1lbnQgb3IgTXV0YXRpb25PYnNlcnZlciBpcyBub3QgYXZhaWxhYmxlLicpO1xyXG4gICAgICAgIHZhciBPQlNFUlZFUl9DT05GSUcgPSB7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHsgcmV0dXJuIF90aGlzLnVwZGF0ZU9ic2VydmVycyhtdXRhdGlvbnMpOyB9KTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jLmJvZHksIE9CU0VSVkVSX0NPTkZJRyk7XHJcbiAgICB9XHJcbiAgICBUd2l0dGVyQWRhcHRlci5wcm90b3R5cGUuYXR0YWNoRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuZmluZChmdW5jdGlvbiAoZikgeyByZXR1cm4gZiA9PT0gZmVhdHVyZTsgfSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShmZWF0dXJlLm9yZGVySW5kZXgsIDAsIGZlYXR1cmUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT2JzZXJ2ZXJzKCk7XHJcbiAgICB9O1xyXG4gICAgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLmRldGFjaEZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSB0aGlzLmZlYXR1cmVzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZiAhPT0gZmVhdHVyZTsgfSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0QnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAod2IpIHtcclxuICAgICAgICAgICAgdmFyIHdpZGdldHMgPSB3Yi53aWRnZXRzLmdldChmZWF0dXJlKTtcclxuICAgICAgICAgICAgaWYgKCF3aWRnZXRzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB3aWRnZXRzLmZvckVhY2goZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHcudW5tb3VudCgpOyB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUd2l0dGVyQWRhcHRlci5wcm90b3R5cGUudXBkYXRlT2JzZXJ2ZXJzID0gZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0QnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAoY29udGV4dEJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoY29udGV4dEJ1aWxkZXIuY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlZENvbnRleHRzXzEgPSBbXTtcclxuICAgICAgICAgICAgICAgIChfYSA9IG11dGF0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goZnVuY3Rpb24gKG0pIHsgcmV0dXJuIEFycmF5LmZyb20obS5yZW1vdmVkTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobikgeyByZXR1cm4gbi5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERTsgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGV4dE5vZGVzID0gQXJyYXkuZnJvbSgoKF9hID0gbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3JBbGwoY29udGV4dEJ1aWxkZXIuY29udGV4dFNlbGVjdG9yKSkgfHwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZXh0cyA9IGNvbnRleHROb2Rlcy5tYXAoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIGNvbnRleHRCdWlsZGVyLmNvbnRleHRzLmdldChuKTsgfSkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkQ29udGV4dHNfMS5wdXNoLmFwcGx5KHJlbW92ZWRDb250ZXh0c18xLCBjb250ZXh0cyk7XHJcbiAgICAgICAgICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZENvbnRleHRzXzEgJiYgcmVtb3ZlZENvbnRleHRzXzEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWRDb250ZXh0c18xLmZvckVhY2goZnVuY3Rpb24gKGN0eCkgeyByZXR1cm4gY3R4LnN1YnNjcmlwdGlvbnMgJiYgY3R4LnN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIuY2xvc2UoKTsgfSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUuY29udGV4dEZpbmlzaGVkKHJlbW92ZWRDb250ZXh0c18xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLnVwZGF0ZUNvbnRleHRzKF90aGlzLmZlYXR1cmVzLCBjb250YWluZXIpOyAvLyBUb0RvOiB0aGluayBhYm91dCBpdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIgJiYgIWNvbnRleHRCdWlsZGVyLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci51cGRhdGVDb250ZXh0cyhfdGhpcy5mZWF0dXJlcywgY29udGFpbmVyLCBtdXRhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci5vYnNlcnZlci5vYnNlcnZlKGNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghY29udGFpbmVyICYmIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci5vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci5vYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3QoXCJjb21tb24tbGliLmRhcHBsZXQtYmFzZS5ldGhcIiksXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuICAgIF0sIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZSwgXCJsaWJyYXJ5XCIsIHZvaWQgMCk7XHJcbiAgICBUd2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdGFibGUsXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxyXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIpO1xyXG4gICAgcmV0dXJuIFR3aXR0ZXJBZGFwdGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyQWRhcHRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vd2lkZ2V0cy9idXR0b25cIik7XHJcbnZhciBwaWN0dXJlXzEgPSByZXF1aXJlKFwiLi93aWRnZXRzL3BpY3R1cmVcIik7XHJcbmZ1bmN0aW9uIHV1aWR2NCgpIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMud2lkZ2V0cyA9IGZ1bmN0aW9uIChjb25uKSB7IHJldHVybiAoe1xyXG4gICAgYnV0dG9uOiBmdW5jdGlvbiAoY29uZmlnQ2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgb3JkZXIsIGNvbnRleHROb2RlLCBwcm94aWVkU3Vicykge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlV2lkZ2V0KGJ1dHRvbl8xLkJ1dHRvbiwgYnVpbGRlciwgaW5zUG9pbnROYW1lLCBjb25maWdDYWxsYmFjaywgb3JkZXIsIGNvbnRleHROb2RlLCB1dWlkLCBwcm94aWVkU3Vicyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWVudUl0ZW06IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgb3JkZXIsIGNvbnRleHROb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdtZW51SXRlbSBpcyBub3QgaW1wbGVtZW50ZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwaWN0dXJlOiBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHV1aWQgPSB1dWlkdjQoKTtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChidWlsZGVyLCBpbnNQb2ludE5hbWUsIG9yZGVyLCBjb250ZXh0Tm9kZSwgcHJveGllZFN1YnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVdpZGdldChwaWN0dXJlXzEuUGljdHVyZSwgYnVpbGRlciwgaW5zUG9pbnROYW1lLCBmdW5jdGlvbiAoY3R4LCBzZXRTdGF0ZSwgc3ViKSB7IHJldHVybiAoeyBcIkRFRkFVTFRcIjogY29uZmlnIH0pOyB9LCBvcmRlciwgY29udGV4dE5vZGUsIHV1aWQsIHByb3hpZWRTdWJzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7IH07XHJcbnZhciBXaWRnZXRCdWlsZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy9Ub0RvOiB3aWRnZXRzXHJcbiAgICBmdW5jdGlvbiBXaWRnZXRCdWlsZGVyKHdpZGdldEJ1aWxkZXJDb25maWcpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLndpZGdldHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgd2lkZ2V0QnVpbGRlckNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICAvLyBgdXBkYXRlQ29udGV4dHMoKWAgaXMgY2FsbGVkIHdoZW4gbmV3IGNvbnRleHQgaXMgZm91bmQuXHJcbiAgICBXaWRnZXRCdWlsZGVyLnByb3RvdHlwZS51cGRhdGVDb250ZXh0cyA9IGZ1bmN0aW9uIChmZWF0dXJlcywgY29udGFpbmVyLCBtdXRhdGlvbnMpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIGNvbnRleHROb2RlcyA9IEFycmF5LmZyb20oKChfYSA9IGNvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250ZXh0U2VsZWN0b3IpKSB8fCBbXSk7XHJcbiAgICAgICAgaWYgKGNvbnRleHROb2Rlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgbmV3Q29udGV4dHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNvbnRleHROb2Rlc18xID0gY29udGV4dE5vZGVzOyBfaSA8IGNvbnRleHROb2Rlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgY29udGV4dE5vZGUgPSBjb250ZXh0Tm9kZXNfMVtfaV07XHJcbiAgICAgICAgICAgIHZhciBpc05ldyA9ICF0aGlzLmNvbnRleHRzLmhhcyhjb250ZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gaXNOZXcgPyB0aGlzLmNvbnRleHRCdWlsZGVyKGNvbnRleHROb2RlKSA6IHRoaXMuY29udGV4dHMuZ2V0KGNvbnRleHROb2RlKTtcclxuICAgICAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXNOZXcgY2hlY2tpbmdcclxuICAgICAgICAgICAgaWYgKGlzTmV3KVxyXG4gICAgICAgICAgICAgICAgbmV3Q29udGV4dHMucHVzaChjb250ZXh0KTtcclxuICAgICAgICAgICAgaWYgKCFjb250ZXh0LnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5wcm94aWVkU3VicyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlID0gZmVhdHVyZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25zID0gZmVhdHVyZS5jb25maWcuY29ubmVjdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoY29ubmVjdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNldHRlcnNCeU5hbWVzID0ge307IC8vIFRvRG86IG1lbW9yeSBsZWFrcz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm94aWVkU3Vic1tjb25uZWN0aW9uTmFtZV0gPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNvdXJjZTogZnVuY3Rpb24gKHNldHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZXR0ZXJzQnlOYW1lc1tuYW1lXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0ZXJzQnlOYW1lc1tuYW1lXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGVyc0J5TmFtZXNbbmFtZV0ucHVzaChzZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IGNvbm5lY3Rpb25zW2Nvbm5lY3Rpb25OYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IGNvbm5lY3Rpb24uc3Vic2NyaWJlKGNvbnRleHQuaWQsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V0dGVycyA9IHNldHRlcnNCeU5hbWVzW2tleV0gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChzZXQpIHsgcmV0dXJuIHNldChkYXRhW2tleV0pOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2V0dGVyc0J5TmFtZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8yKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgY29ubmVjdGlvbk5hbWUgaW4gY29ubmVjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3BfMShjb25uZWN0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc05ldykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5zZXQoY29udGV4dE5vZGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlID0gZmVhdHVyZXNbaV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbnNQb2ludE5hbWUgaW4gdGhpcy5pbnNQb2ludHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIF9jID0gZmVhdHVyZS5jb25maWdbaW5zUG9pbnROYW1lXSB8fCBbXTsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpZGdldENvbnN0cnVjdG9yID0gX2NbX2JdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGV4dElkcyA9IGZlYXR1cmUuY29udGV4dElkcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRleHRJZHMubGVuZ3RoID09PSAwIHx8IGNvbnRleHRJZHMuaW5kZXhPZihjb250ZXh0LmlkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnNlcnRlZFdpZGdldCA9IHdpZGdldENvbnN0cnVjdG9yKHRoaXMsIGluc1BvaW50TmFtZSwgaSwgY29udGV4dE5vZGUsIGNvbnRleHQucHJveGllZFN1YnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnNlcnRlZFdpZGdldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWdpc3RlcmVkV2lkZ2V0cyA9IHRoaXMud2lkZ2V0cy5nZXQoZmVhdHVyZSkgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkV2lkZ2V0cy5wdXNoKGluc2VydGVkV2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkZ2V0cy5zZXQoZmVhdHVyZSwgcmVnaXN0ZXJlZFdpZGdldHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdDb250ZXh0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIENvcmUuY29udGV4dFN0YXJ0ZWQobmV3Q29udGV4dHMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gV2lkZ2V0QnVpbGRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5XaWRnZXRCdWlsZGVyID0gV2lkZ2V0QnVpbGRlcjtcclxuZnVuY3Rpb24gY3JlYXRlV2lkZ2V0KFdpZGdldCwgYnVpbGRlciwgaW5zUG9pbnROYW1lLCBjb25maWdDYWxsYmFjaywgb3JkZXIsIGNvbnRleHROb2RlLCBjbGF6eiwgcHJveGllZFN1YnMpIHtcclxuICAgIC8vIFRvRG86IGNhbGN1bGF0ZSBub2RlIGZyb20gaW5zUG9pbnQgJiB2aWV3XHJcbiAgICB2YXIgaW5zUG9pbnQgPSBidWlsZGVyLmluc1BvaW50c1tpbnNQb2ludE5hbWVdO1xyXG4gICAgdmFyIG5vZGUgPSBjb250ZXh0Tm9kZS5xdWVyeVNlbGVjdG9yKGluc1BvaW50LnNlbGVjdG9yKTtcclxuICAgIGlmIChub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhenopLmxlbmd0aCA+IDApXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgdmFyIGNvbnRleHQgPSBidWlsZGVyLmNvbnRleHRzLmdldChjb250ZXh0Tm9kZSk7XHJcbiAgICB2YXIgd2lkZ2V0ID0gbmV3IFdpZGdldChmdW5jdGlvbiAoc2V0U3RhdGUpIHsgcmV0dXJuIGNvbmZpZ0NhbGxiYWNrKGNvbnRleHQsIHNldFN0YXRlLCBwcm94aWVkU3Vicyk7IH0sIGNsYXp6KTtcclxuICAgIHdpZGdldC5lbC5jbGFzc0xpc3QuYWRkKCdkYXBwbGV0LXdpZGdldCcpO1xyXG4gICAgdmFyIGluc2VydGVkRWxlbWVudHMgPSBub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhcHBsZXQtd2lkZ2V0Jyk7XHJcbiAgICBpZiAoaW5zZXJ0ZWRFbGVtZW50cy5sZW5ndGggPj0gb3JkZXIpIHtcclxuICAgICAgICBub2RlLmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIGluc2VydGVkRWxlbWVudHNbb3JkZXJdKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQod2lkZ2V0LmVsKTtcclxuICAgIH1cclxuICAgIHJldHVybiB3aWRnZXQ7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB3aWRnZXRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vd2lkZ2V0XCIpO1xyXG52YXIgQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJ1dHRvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJ1dHRvbihjYWxsYmFja0NvbmZpZywgY2xhenopIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNhbGxiYWNrQ29uZmlnKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgX3RoaXMuZWwuY2xhc3NMaXN0LmFkZChjbGF6eiwgJ1Byb2ZpbGVUd2VldC1hY3Rpb24nKTtcclxuICAgICAgICBfdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMuc3RhdGUpLmV4ZWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF90aGlzLm1vdW50KCk7XHJcbiAgICAgICAgKF9iID0gKF9hID0gX3RoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBCdXR0b24ucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuc3RhdGUsIGltZyA9IF9hLmltZywgbGFiZWwgPSBfYS5sYWJlbCwgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGRpc2FibGVkID0gX2EuZGlzYWJsZWQ7XHJcbiAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSBcIjxidXR0b24gY2xhc3M9XFxcIlByb2ZpbGVUd2VldC1hY3Rpb25CdXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIkljb25Db250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyAobG9hZGluZyA/IFwiPHN2ZyB3aWR0aD1cXFwiMThweFxcXCIgaGVpZ2h0PVxcXCIxOHB4XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCIgY2xhc3M9XFxcImxkcy1yb2xsaW5nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDogbm9uZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzFkYTFmMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxNFxcXCIgcj1cXFwiNDBcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE4OC40OTU1NTkyMTUzODc1NyA2NC44MzE4NTMwNzE3OTU4NlxcXCIgdHJhbnNmb3JtPVxcXCJyb3RhdGUoNzcuNTc5MyA1MCA1MClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIHR5cGU9XFxcInJvdGF0ZVxcXCIgY2FsY01vZGU9XFxcImxpbmVhclxcXCIgdmFsdWVzPVxcXCIwIDUwIDUwOzM2MCA1MCA1MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIjBzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XCIgOiBcIjxpbWcgaGVpZ2h0PVxcXCIxOFxcXCIgc3JjPVxcXCJcIiArIGltZyArIFwiXFxcIj5cIikgKyBcIlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgXCIgKyAobGFiZWwgPyBcIjxzcGFuIGNsYXNzPVxcXCJQcm9maWxlVHdlZXQtYWN0aW9uQ291bnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXCIgKyAoZGlzYWJsZWQgPyAnc3R5bGU9XCJjb2xvcjojYWFhO1wiJyA6ICcnKSArIFwiIGNsYXNzPVxcXCJQcm9maWxlVHdlZXQtYWN0aW9uQ291bnRGb3JQcmVzZW50YXRpb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cIiArIGxhYmVsICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cIiA6ICcnKSArIFwiXFxuICAgICAgICAgICAgPC9idXR0b24+XCI7XHJcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCdXR0b247XHJcbn0od2lkZ2V0XzEuV2lkZ2V0KSk7XHJcbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHdpZGdldF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi93aWRnZXRcIik7XHJcbnZhciBQaWN0dXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBpY3R1cmUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQaWN0dXJlKGNhbGxiYWNrQ29uZmlnLCBjbGF6eikge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY2FsbGJhY2tDb25maWcpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBfdGhpcy5lbC5jbGFzc0xpc3QuYWRkKGNsYXp6KTtcclxuICAgICAgICBfdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMuc3RhdGUpLmV4ZWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF90aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBfdGhpcy5lbC5zdHlsZS5ib3R0b20gPSAnMTVweCc7XHJcbiAgICAgICAgX3RoaXMuZWwuc3R5bGUucmlnaHQgPSAnMTVweCc7XHJcbiAgICAgICAgX3RoaXMuZWwuc3R5bGUuekluZGV4ID0gJzk5OSc7XHJcbiAgICAgICAgX3RoaXMubW91bnQoKTtcclxuICAgICAgICAoX2IgPSAoX2EgPSBfdGhpcy5zdGF0ZSkuaW5pdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFBpY3R1cmUucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuc3RhdGUsIGltZyA9IF9hLmltZywgZGlzYWJsZWQgPSBfYS5kaXNhYmxlZDtcclxuICAgICAgICB2YXIgaHRtbFN0cmluZyA9IFwiPGltZyBzcmM9XFxcIlwiICsgaW1nICsgXCJcXFwiIC8+XCI7XHJcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQaWN0dXJlO1xyXG59KHdpZGdldF8xLldpZGdldCkpO1xyXG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9