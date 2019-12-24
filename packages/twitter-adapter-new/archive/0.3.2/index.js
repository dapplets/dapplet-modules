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
                containerSelector: "main[role=main]",
                contextSelector: "article",
                insPoints: {
                    TWEET_SOUTH: {
                        selector: "div[role=group]"
                    },
                    TWEET_COMBO: {
                        selector: "" //ToDo
                    },
                    PICTURE: {
                        selector: "div[lang]"
                    }
                },
                // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                contextBuilder: function (tweetNode) {
                    var _a, _b, _c, _d;
                    return ({
                        id: tweetNode.querySelector('a time').parentNode.href.split('/').pop(),
                        text: (_a = tweetNode.querySelector('div[lang]')) === null || _a === void 0 ? void 0 : _a.innerText,
                        authorFullname: (_b = tweetNode.querySelector('a:nth-child(1) div span span')) === null || _b === void 0 ? void 0 : _b.innerText,
                        authorUsername: (_c = tweetNode.querySelector('div.r-1f6r7vd > div > span')) === null || _c === void 0 ? void 0 : _c.innerText,
                        authorImg: (_d = tweetNode.querySelector('img.css-9pa8cd')) === null || _d === void 0 ? void 0 : _d.getAttribute('src')
                    });
                },
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
        _this.el.classList.add(clazz, 'css-1dbjc4n', 'r-1iusvr4', 'r-18u37iz', 'r-16y2uox', 'r-1h0z5md');
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
        var htmlString = "<div role=\"button\" data-focusable=\"true\" tabindex=\"0\" class=\"css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-bztko3 r-lrvibr\">\n                <div dir=\"ltr\" class=\"css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0\">\n                    <div class=\"css-1dbjc4n r-xoduu5\">\n                        " + (loading ? "<svg width=\"18px\" height=\"18px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"lds-rolling\" style=\"background: none;\">\n                            <circle cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#1da1f2\" stroke-width=\"14\" r=\"40\" stroke-dasharray=\"188.49555921538757 64.83185307179586\" transform=\"rotate(77.5793 50 50)\">\n                                <animateTransform attributeName=\"transform\" type=\"rotate\" calcMode=\"linear\" values=\"0 50 50;360 50 50\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"></animateTransform>\n                            </circle>\n                        </svg>" : "<img height=\"18\" src=\"" + img + "\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr\">") + "\n                        <div class=\"css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg\"></div>\n                    </div>\n                    " + (label ? "<div class=\"css-1dbjc4n r-xoduu5 r-1udh08x\">\n                        <span dir=\"auto\" class=\"css-901oao css-16my406 r-1qd0xha r-ad9z0x r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0\">\n                            <span dir=\"auto\" " + (disabled ? 'style="color:#aaa;"' : '') + " class=\"css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0\">" + label + "</span>\n                        </span>\n                    </div>" : '') + "\n                </div>\n            </div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9waWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsMEJBQTBCLEVBQUU7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFD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Q0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXaWRnZXQoY2FsbGJhY2tDb25maWcpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdGVUZW1wbGF0ZXMgPSBjYWxsYmFja0NvbmZpZyhmdW5jdGlvbiAobikgeyByZXR1cm4gX3RoaXMuc2V0U3RhdGUobik7IH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXCJERUZBVUxUXCIpO1xyXG4gICAgfVxyXG4gICAgV2lkZ2V0LnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcclxuICAgIH07XHJcbiAgICBXaWRnZXQucHJvdG90eXBlLmNyZWF0ZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICB2YXIgcHJveHkgPSBuZXcgUHJveHkoc3RhdGUsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W3Byb3BlcnR5XSA9PT0gJ29iamVjdCcgJiYgdGFyZ2V0W3Byb3BlcnR5XS5kYXRhc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3MgPSBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgbWUubW91bnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdWNjZXNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmRhdGFzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIG9iai5kYXRhc291cmNlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICBfbG9vcF8xKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm94eTtcclxuICAgIH07XHJcbiAgICBXaWRnZXQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlTmFtZSkge1xyXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHRoaXMuc3RhdGVUZW1wbGF0ZXNbc3RhdGVOYW1lXTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5jcmVhdGVTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLm1vdW50KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdpZGdldDtcclxufSgpKTtcclxuZXhwb3J0cy5XaWRnZXQgPSBXaWRnZXQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgd2lkZ2V0c18xID0gcmVxdWlyZShcIi4vd2lkZ2V0c1wiKTtcclxudmFyIGRvYyA9IGRvY3VtZW50OyAvL2hvc3QgZG9jdW1lbnQgd2UgYXJlIHdvcmtpbmcgb24gKGlucGFnZS5qcylcclxudmFyIFR3aXR0ZXJBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHdpdHRlckFkYXB0ZXIoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmFjdGlvbkZhY3RvcmllcyA9IHdpZGdldHNfMS53aWRnZXRzO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycyA9IFt7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl1cIixcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJhcnRpY2xlXCIsXHJcbiAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBUV0VFVF9TT1VUSDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT1ncm91cF1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgVFdFRVRfQ09NQk86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiXCIgLy9Ub0RvXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBQSUNUVVJFOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltsYW5nXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIFRvRG86IFRoaXMgc2VsZWN0b3JzIGFyZSB1bnN0YWJsZSwgYmVjYXVzZSBUd2l0dGVyIGhhcyBjaGFuZ2VkIGNsYXNzIG5hbWVzIHRvIGF1dG8tZ2VuZXJhdGVkLlxyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6IGZ1bmN0aW9uICh0d2VldE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignYSB0aW1lJykucGFyZW50Tm9kZS5ocmVmLnNwbGl0KCcvJykucG9wKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IChfYSA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXZbbGFuZ10nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yRnVsbG5hbWU6IChfYiA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhOm50aC1jaGlsZCgxKSBkaXYgc3BhbiBzcGFuJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvclVzZXJuYW1lOiAoX2MgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LnItMWY2cjd2ZCA+IGRpdiA+IHNwYW4nKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9ySW1nOiAoX2QgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignaW1nLmNzcy05cGE4Y2QnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1dLm1hcChmdW5jdGlvbiAoY2ZnKSB7IHJldHVybiBuZXcgd2lkZ2V0c18xLldpZGdldEJ1aWxkZXIoY2ZnKTsgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoIWRvY3VtZW50IHx8ICF3aW5kb3cgfHwgIU11dGF0aW9uT2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdEb2N1bWVudCBvciBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGUuJyk7XHJcbiAgICAgICAgdmFyIE9CU0VSVkVSX0NPTkZJRyA9IHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykgeyByZXR1cm4gX3RoaXMudXBkYXRlT2JzZXJ2ZXJzKG11dGF0aW9ucyk7IH0pO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2MuYm9keSwgT0JTRVJWRVJfQ09ORklHKTtcclxuICAgIH1cclxuICAgIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZS5hdHRhY2hGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcclxuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5maW5kKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmID09PSBmZWF0dXJlOyB9KSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGZlYXR1cmUub3JkZXJJbmRleCwgMCwgZmVhdHVyZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPYnNlcnZlcnMoKTtcclxuICAgIH07XHJcbiAgICBUd2l0dGVyQWRhcHRlci5wcm90b3R5cGUuZGV0YWNoRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IHRoaXMuZmVhdHVyZXMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmICE9PSBmZWF0dXJlOyB9KTtcclxuICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3Yikge1xyXG4gICAgICAgICAgICB2YXIgd2lkZ2V0cyA9IHdiLndpZGdldHMuZ2V0KGZlYXR1cmUpO1xyXG4gICAgICAgICAgICBpZiAoIXdpZGdldHMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHdpZGdldHMuZm9yRWFjaChmdW5jdGlvbiAodykgeyByZXR1cm4gdy51bm1vdW50KCk7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZS51cGRhdGVPYnNlcnZlcnMgPSBmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChjb250ZXh0QnVpbGRlcikge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2MucXVlcnlTZWxlY3Rvcihjb250ZXh0QnVpbGRlci5jb250YWluZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVkQ29udGV4dHNfMSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgKF9hID0gbXV0YXRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaChmdW5jdGlvbiAobSkgeyByZXR1cm4gQXJyYXkuZnJvbShtLnJlbW92ZWROb2RlcylcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChuKSB7IHJldHVybiBuLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFOyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZXh0Tm9kZXMgPSBBcnJheS5mcm9tKCgoX2EgPSBuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvckFsbChjb250ZXh0QnVpbGRlci5jb250ZXh0U2VsZWN0b3IpKSB8fCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRleHRzID0gY29udGV4dE5vZGVzLm1hcChmdW5jdGlvbiAobikgeyByZXR1cm4gY29udGV4dEJ1aWxkZXIuY29udGV4dHMuZ2V0KG4pOyB9KS5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGU7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWRDb250ZXh0c18xLnB1c2guYXBwbHkocmVtb3ZlZENvbnRleHRzXzEsIGNvbnRleHRzKTtcclxuICAgICAgICAgICAgICAgIH0pOyB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkQ29udGV4dHNfMSAmJiByZW1vdmVkQ29udGV4dHNfMS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZENvbnRleHRzXzEuZm9yRWFjaChmdW5jdGlvbiAoY3R4KSB7IHJldHVybiBjdHguc3Vic2NyaXB0aW9ucyAmJiBjdHguc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi5jbG9zZSgpOyB9KTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5jb250ZXh0RmluaXNoZWQocmVtb3ZlZENvbnRleHRzXzEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIudXBkYXRlQ29udGV4dHMoX3RoaXMuZmVhdHVyZXMsIGNvbnRhaW5lcik7IC8vIFRvRG86IHRoaW5rIGFib3V0IGl0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLnVwZGF0ZUNvbnRleHRzKF90aGlzLmZlYXR1cmVzLCBjb250YWluZXIsIG11dGF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyLm9ic2VydmUoY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFjb250YWluZXIgJiYgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdChcImNvbW1vbi1saWIuZGFwcGxldC1iYXNlLmV0aFwiKSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLCBcImxpYnJhcnlcIiwgdm9pZCAwKTtcclxuICAgIFR3aXR0ZXJBZGFwdGVyID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgSW5qZWN0YWJsZSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXHJcbiAgICBdLCBUd2l0dGVyQWRhcHRlcik7XHJcbiAgICByZXR1cm4gVHdpdHRlckFkYXB0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFR3aXR0ZXJBZGFwdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi93aWRnZXRzL2J1dHRvblwiKTtcclxudmFyIHBpY3R1cmVfMSA9IHJlcXVpcmUoXCIuL3dpZGdldHMvcGljdHVyZVwiKTtcclxuZnVuY3Rpb24gdXVpZHY0KCkge1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy53aWRnZXRzID0gZnVuY3Rpb24gKGNvbm4pIHsgcmV0dXJuICh7XHJcbiAgICBidXR0b246IGZ1bmN0aW9uIChjb25maWdDYWxsYmFjaykge1xyXG4gICAgICAgIHZhciB1dWlkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoYnVpbGRlciwgaW5zUG9pbnROYW1lLCBvcmRlciwgY29udGV4dE5vZGUsIHByb3hpZWRTdWJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVXaWRnZXQoYnV0dG9uXzEuQnV0dG9uLCBidWlsZGVyLCBpbnNQb2ludE5hbWUsIGNvbmZpZ0NhbGxiYWNrLCBvcmRlciwgY29udGV4dE5vZGUsIHV1aWQsIHByb3hpZWRTdWJzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZW51SXRlbTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoYnVpbGRlciwgaW5zUG9pbnROYW1lLCBvcmRlciwgY29udGV4dE5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ21lbnVJdGVtIGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBpY3R1cmU6IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICB2YXIgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgb3JkZXIsIGNvbnRleHROb2RlLCBwcm94aWVkU3Vicykge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlV2lkZ2V0KHBpY3R1cmVfMS5QaWN0dXJlLCBidWlsZGVyLCBpbnNQb2ludE5hbWUsIGZ1bmN0aW9uIChjdHgsIHNldFN0YXRlLCBzdWIpIHsgcmV0dXJuICh7IFwiREVGQVVMVFwiOiBjb25maWcgfSk7IH0sIG9yZGVyLCBjb250ZXh0Tm9kZSwgdXVpZCwgcHJveGllZFN1YnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsgfTtcclxudmFyIFdpZGdldEJ1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvL1RvRG86IHdpZGdldHNcclxuICAgIGZ1bmN0aW9uIFdpZGdldEJ1aWxkZXIod2lkZ2V0QnVpbGRlckNvbmZpZykge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB3aWRnZXRCdWlsZGVyQ29uZmlnKTtcclxuICAgIH1cclxuICAgIC8vIGB1cGRhdGVDb250ZXh0cygpYCBpcyBjYWxsZWQgd2hlbiBuZXcgY29udGV4dCBpcyBmb3VuZC5cclxuICAgIFdpZGdldEJ1aWxkZXIucHJvdG90eXBlLnVwZGF0ZUNvbnRleHRzID0gZnVuY3Rpb24gKGZlYXR1cmVzLCBjb250YWluZXIsIG11dGF0aW9ucykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB2YXIgY29udGV4dE5vZGVzID0gQXJyYXkuZnJvbSgoKF9hID0gY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRleHRTZWxlY3RvcikpIHx8IFtdKTtcclxuICAgICAgICBpZiAoY29udGV4dE5vZGVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBuZXdDb250ZXh0cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgY29udGV4dE5vZGVzXzEgPSBjb250ZXh0Tm9kZXM7IF9pIDwgY29udGV4dE5vZGVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250ZXh0Tm9kZSA9IGNvbnRleHROb2Rlc18xW19pXTtcclxuICAgICAgICAgICAgdmFyIGlzTmV3ID0gIXRoaXMuY29udGV4dHMuaGFzKGNvbnRleHROb2RlKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBpc05ldyA/IHRoaXMuY29udGV4dEJ1aWxkZXIoY29udGV4dE5vZGUpIDogdGhpcy5jb250ZXh0cy5nZXQoY29udGV4dE5vZGUpO1xyXG4gICAgICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpc05ldyBjaGVja2luZ1xyXG4gICAgICAgICAgICBpZiAoaXNOZXcpXHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZXh0cy5wdXNoKGNvbnRleHQpO1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQuc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5zdWJzY3JpcHRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb3hpZWRTdWJzID0ge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZlYXR1cmUgPSBmZWF0dXJlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGlvbnMgPSBmZWF0dXJlLmNvbmZpZy5jb25uZWN0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChjb25uZWN0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V0dGVyc0J5TmFtZXMgPSB7fTsgLy8gVG9EbzogbWVtb3J5IGxlYWtzP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb3hpZWRTdWJzW2Nvbm5lY3Rpb25OYW1lXSA9IG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc291cmNlOiBmdW5jdGlvbiAoc2V0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNldHRlcnNCeU5hbWVzW25hbWVdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRlcnNCeU5hbWVzW25hbWVdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0ZXJzQnlOYW1lc1tuYW1lXS5wdXNoKHNldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25uZWN0aW9uID0gY29ubmVjdGlvbnNbY29ubmVjdGlvbk5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gY29ubmVjdGlvbi5zdWJzY3JpYmUoY29udGV4dC5pZCwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXR0ZXJzID0gc2V0dGVyc0J5TmFtZXNba2V5XSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKHNldCkgeyByZXR1cm4gc2V0KGRhdGFba2V5XSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzZXR0ZXJzQnlOYW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wXzIoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjb25uZWN0aW9uTmFtZSBpbiBjb25uZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKGNvbm5lY3Rpb25OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRzLnNldChjb250ZXh0Tm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZlYXR1cmUgPSBmZWF0dXJlc1tpXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGluc1BvaW50TmFtZSBpbiB0aGlzLmluc1BvaW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBmZWF0dXJlLmNvbmZpZ1tpbnNQb2ludE5hbWVdIHx8IFtdOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0Q29uc3RydWN0b3IgPSBfY1tfYl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZXh0SWRzID0gZmVhdHVyZS5jb250ZXh0SWRzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dElkcy5sZW5ndGggPT09IDAgfHwgY29udGV4dElkcy5pbmRleE9mKGNvbnRleHQuaWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluc2VydGVkV2lkZ2V0ID0gd2lkZ2V0Q29uc3RydWN0b3IodGhpcywgaW5zUG9pbnROYW1lLCBpLCBjb250ZXh0Tm9kZSwgY29udGV4dC5wcm94aWVkU3Vicyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluc2VydGVkV2lkZ2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2lzdGVyZWRXaWRnZXRzID0gdGhpcy53aWRnZXRzLmdldChmZWF0dXJlKSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRXaWRnZXRzLnB1c2goaW5zZXJ0ZWRXaWRnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aWRnZXRzLnNldChmZWF0dXJlLCByZWdpc3RlcmVkV2lkZ2V0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld0NvbnRleHRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgQ29yZS5jb250ZXh0U3RhcnRlZChuZXdDb250ZXh0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBXaWRnZXRCdWlsZGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLldpZGdldEJ1aWxkZXIgPSBXaWRnZXRCdWlsZGVyO1xyXG5mdW5jdGlvbiBjcmVhdGVXaWRnZXQoV2lkZ2V0LCBidWlsZGVyLCBpbnNQb2ludE5hbWUsIGNvbmZpZ0NhbGxiYWNrLCBvcmRlciwgY29udGV4dE5vZGUsIGNsYXp6LCBwcm94aWVkU3Vicykge1xyXG4gICAgLy8gVG9EbzogY2FsY3VsYXRlIG5vZGUgZnJvbSBpbnNQb2ludCAmIHZpZXdcclxuICAgIHZhciBpbnNQb2ludCA9IGJ1aWxkZXIuaW5zUG9pbnRzW2luc1BvaW50TmFtZV07XHJcbiAgICB2YXIgbm9kZSA9IGNvbnRleHROb2RlLnF1ZXJ5U2VsZWN0b3IoaW5zUG9pbnQuc2VsZWN0b3IpO1xyXG4gICAgaWYgKG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGF6eikubGVuZ3RoID4gMClcclxuICAgICAgICByZXR1cm47XHJcbiAgICB2YXIgY29udGV4dCA9IGJ1aWxkZXIuY29udGV4dHMuZ2V0KGNvbnRleHROb2RlKTtcclxuICAgIHZhciB3aWRnZXQgPSBuZXcgV2lkZ2V0KGZ1bmN0aW9uIChzZXRTdGF0ZSkgeyByZXR1cm4gY29uZmlnQ2FsbGJhY2soY29udGV4dCwgc2V0U3RhdGUsIHByb3hpZWRTdWJzKTsgfSwgY2xhenopO1xyXG4gICAgd2lkZ2V0LmVsLmNsYXNzTGlzdC5hZGQoJ2RhcHBsZXQtd2lkZ2V0Jyk7XHJcbiAgICB2YXIgaW5zZXJ0ZWRFbGVtZW50cyA9IG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFwcGxldC13aWRnZXQnKTtcclxuICAgIGlmIChpbnNlcnRlZEVsZW1lbnRzLmxlbmd0aCA+PSBvcmRlcikge1xyXG4gICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKHdpZGdldC5lbCwgaW5zZXJ0ZWRFbGVtZW50c1tvcmRlcl0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpZGdldDtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHdpZGdldF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi93aWRnZXRcIik7XHJcbnZhciBCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQnV0dG9uKGNhbGxiYWNrQ29uZmlnLCBjbGF6eikge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY2FsbGJhY2tDb25maWcpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBfdGhpcy5lbC5jbGFzc0xpc3QuYWRkKGNsYXp6LCAnY3NzLTFkYmpjNG4nLCAnci0xaXVzdnI0JywgJ3ItMTh1MzdpeicsICdyLTE2eTJ1b3gnLCAnci0xaDB6NW1kJyk7XHJcbiAgICAgICAgX3RoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuc3RhdGUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnN0YXRlKS5leGVjKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBfdGhpcy5tb3VudCgpO1xyXG4gICAgICAgIChfYiA9IChfYSA9IF90aGlzLnN0YXRlKS5pbml0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQnV0dG9uLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnN0YXRlLCBpbWcgPSBfYS5pbWcsIGxhYmVsID0gX2EubGFiZWwsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkO1xyXG4gICAgICAgIHZhciBodG1sU3RyaW5nID0gXCI8ZGl2IHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS1mb2N1c2FibGU9XFxcInRydWVcXFwiIHRhYmluZGV4PVxcXCIwXFxcIiBjbGFzcz1cXFwiY3NzLTE4dDk0bzQgY3NzLTFkYmpjNG4gci0xNzc3ZmNpIHItMTFjcG9rMSByLWJ6dGtvMyByLWxydmliclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgZGlyPVxcXCJsdHJcXFwiIGNsYXNzPVxcXCJjc3MtOTAxb2FvIHItMWF3b3p3eSByLTFyZTdlemggci02a29hbGogci0xcWQweGhhIHItYTAyM2U2IHItMTZkYmE0MSByLTFoMHo1bWQgci1hZDl6MHggci1iY3FlZW8gci1vN3lucWMgci1jbHA3YjEgci0zczJ1MnEgci1xdnV0YzBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3NzLTFkYmpjNG4gci14b2R1dTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgKGxvYWRpbmcgPyBcIjxzdmcgd2lkdGg9XFxcIjE4cHhcXFwiIGhlaWdodD1cXFwiMThweFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJsZHMtcm9sbGluZ1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6IG5vbmU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMWRhMWYyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjE0XFxcIiByPVxcXCI0MFxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiMTg4LjQ5NTU1OTIxNTM4NzU3IDY0LjgzMTg1MzA3MTc5NTg2XFxcIiB0cmFuc2Zvcm09XFxcInJvdGF0ZSg3Ny41NzkzIDUwIDUwKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIHR5cGU9XFxcInJvdGF0ZVxcXCIgY2FsY01vZGU9XFxcImxpbmVhclxcXCIgdmFsdWVzPVxcXCIwIDUwIDUwOzM2MCA1MCA1MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIjBzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cIiA6IFwiPGltZyBoZWlnaHQ9XFxcIjE4XFxcIiBzcmM9XFxcIlwiICsgaW1nICsgXCJcXFwiIGNsYXNzPVxcXCJyLTRxdHFwOSByLXl5eXlvbyByLTF4dmxpNXQgci1kbm1yenMgci1ibndxaW0gci0xcGxjcnVpIHItbHJ2aWJyXFxcIj5cIikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNzcy0xZGJqYzRuIHItc2R6bGlqIHItMXAwZHRhaSByLXhvZHV1NSByLTFkMmY0OTAgci14ZjRpdXcgci11OHMxZCByLXpjaGxuaiByLWlwbTVhZiByLW83eW5xYyByLTY0MTZlZ1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIFwiICsgKGxhYmVsID8gXCI8ZGl2IGNsYXNzPVxcXCJjc3MtMWRiamM0biByLXhvZHV1NSByLTF1ZGgwOHhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRpcj1cXFwiYXV0b1xcXCIgY2xhc3M9XFxcImNzcy05MDFvYW8gY3NzLTE2bXk0MDYgci0xcWQweGhhIHItYWQ5ejB4IHItMW4weHE2ZSByLWJjcWVlbyByLWQzaGJlMSByLTF3Z2cyYjIgci1heHhpMnogci1xdnV0YzBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkaXI9XFxcImF1dG9cXFwiIFwiICsgKGRpc2FibGVkID8gJ3N0eWxlPVwiY29sb3I6I2FhYTtcIicgOiAnJykgKyBcIiBjbGFzcz1cXFwiY3NzLTkwMW9hbyBjc3MtMTZteTQwNiByLTFxZDB4aGEgci1hZDl6MHggci1iY3FlZW8gci1xdnV0YzBcXFwiPlwiICsgbGFiZWwgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIiA6ICcnKSArIFwiXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlwiO1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICAgIH07XHJcbiAgICByZXR1cm4gQnV0dG9uO1xyXG59KHdpZGdldF8xLldpZGdldCkpO1xyXG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB3aWRnZXRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vd2lkZ2V0XCIpO1xyXG52YXIgUGljdHVyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQaWN0dXJlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGljdHVyZShjYWxsYmFja0NvbmZpZywgY2xhenopIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNhbGxiYWNrQ29uZmlnKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgX3RoaXMuZWwuY2xhc3NMaXN0LmFkZChjbGF6eik7XHJcbiAgICAgICAgX3RoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuc3RhdGUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnN0YXRlKS5leGVjKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBfdGhpcy5lbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgX3RoaXMuZWwuc3R5bGUuYm90dG9tID0gJzE1cHgnO1xyXG4gICAgICAgIF90aGlzLmVsLnN0eWxlLnJpZ2h0ID0gJzE1cHgnO1xyXG4gICAgICAgIF90aGlzLmVsLnN0eWxlLnpJbmRleCA9ICc5OTknO1xyXG4gICAgICAgIF90aGlzLm1vdW50KCk7XHJcbiAgICAgICAgKF9iID0gKF9hID0gX3RoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBQaWN0dXJlLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnN0YXRlLCBpbWcgPSBfYS5pbWcsIGRpc2FibGVkID0gX2EuZGlzYWJsZWQ7XHJcbiAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSBcIjxpbWcgc3JjPVxcXCJcIiArIGltZyArIFwiXFxcIiAvPlwiO1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGljdHVyZTtcclxufSh3aWRnZXRfMS5XaWRnZXQpKTtcclxuZXhwb3J0cy5QaWN0dXJlID0gUGljdHVyZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==