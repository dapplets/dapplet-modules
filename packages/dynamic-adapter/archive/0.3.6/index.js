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
exports.DynamicAdapter = void 0;
const widgets_1 = __webpack_require__(/*! ./widgets */ "./src/widgets.ts");
const state_1 = __webpack_require__(/*! ./state */ "./src/state.ts");
let DynamicAdapter = /** @class */ (() => {
    let DynamicAdapter = class DynamicAdapter {
        constructor() {
            this.observer = null;
            this.features = [];
            this.contextBuilders = [];
            if (this.observer)
                return;
            if (!document || !window || !MutationObserver)
                throw Error('Document or MutationObserver is not available.');
            const OBSERVER_CONFIG = {
                childList: true,
                subtree: true
            };
            this.observer = new MutationObserver((mutations) => this.updateObservers(mutations));
            this.observer.observe(document.body, OBSERVER_CONFIG);
        }
        attachFeature(feature) {
            if (this.features.find(f => f === feature))
                return;
            this.features.splice(feature.orderIndex, 0, feature);
            this.updateObservers();
        }
        detachFeature(feature) {
            this.features = this.features.filter(f => f !== feature);
            this.contextBuilders.forEach(wb => {
                const widgets = wb.widgets.get(feature);
                if (!widgets)
                    return;
                widgets.forEach(w => w.unmount());
            });
            // ToDo: close all subscriptions and connections
        }
        attachConfig(config) {
            const builders = config.map((cfg) => new widgets_1.WidgetBuilder(cfg));
            this.contextBuilders.push(...builders);
        }
        updateObservers(mutations) {
            this.contextBuilders.forEach(contextBuilder => {
                const container = document.querySelector(contextBuilder.containerSelector);
                if (container) {
                    // destroy contexts to removed nodes
                    const removedContexts = [];
                    mutations === null || mutations === void 0 ? void 0 : mutations.forEach(m => Array.from(m.removedNodes)
                        .filter((n) => n.nodeType == Node.ELEMENT_NODE)
                        .forEach((n) => {
                        const contextNodes = Array.from((n === null || n === void 0 ? void 0 : n.querySelectorAll(contextBuilder.contextSelector)) || []);
                        const contexts = contextNodes.map((n) => contextBuilder.contexts.get(n)).filter(e => e);
                        removedContexts.push(...contexts);
                    }));
                    if (removedContexts && removedContexts.length > 0) {
                        Core.contextFinished(removedContexts.map(c => c.parsed));
                    }
                    contextBuilder.updateContexts(this.features, container); // ToDo: think about it
                }
                // a new container was opened, no observer attached yet
                if (container && !contextBuilder.observer) {
                    contextBuilder.observer = new MutationObserver(() => {
                        contextBuilder.updateContexts(this.features, container);
                    });
                    contextBuilder.observer.observe(container, {
                        childList: true,
                        subtree: true
                    });
                }
                else if (!container && contextBuilder.observer) {
                    // a container was destroyed, disconnect observer too
                    contextBuilder.observer.disconnect();
                    contextBuilder.observer = null;
                }
            });
        }
        createWidgetFactory(Widget) {
            function uuidv4() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            }
            function createWidget(Widget, builder, insPointName, config, order, contextNode, clazz, proxiedSubs) {
                if (order === undefined || order === null) {
                    console.error('Empty order!');
                    order = 0;
                }
                const insPoint = builder.insPoints[insPointName];
                if (!insPoint) {
                    console.error(`Invalid insertion point name: ${insPointName}`);
                    return;
                }
                const node = (insPoint.selector) ? contextNode.querySelector(insPoint.selector) : contextNode;
                if (!node)
                    return;
                // check if a widget already exists for the insPoint
                if (node.parentElement.getElementsByClassName(clazz).length > 0)
                    return;
                const context = builder.contexts.get(contextNode);
                const state = new state_1.State(config, context.parsed, builder.contextType);
                const widget = new Widget();
                widget.state = state.state;
                widget.insPointName = insPointName;
                state.changedHandler = () => widget.mount(); // when data in state was changed, then rerender a widget
                widget.mount(); // ToDo: remove it?
                widget.el.classList.add('dapplet-widget', clazz);
                widget.el.setAttribute('data-dapplet-order', order.toString());
                const insertTo = (insPoint.insert === undefined) ? 'end' : insPoint.insert;
                const insertedElements = node.parentNode.querySelectorAll(':scope > .dapplet-widget');
                if (insertedElements.length === 0) {
                    if (insertTo === 'end') {
                        node.parentNode.insertBefore(widget.el, node.nextSibling);
                    }
                    else if (insertTo === 'begin') {
                        node.parentNode.insertBefore(widget.el, node);
                    }
                    else {
                        console.error('Invalid "insert" value in the insertion point config. The valid values are "begin" or "end".');
                    }
                }
                else {
                    let targetElementIndex = null;
                    // ToDo: find an element with the same order to throw the error
                    // searching for an element index before which need to be inserted.
                    for (let i = 0; i < insertedElements.length; i++) {
                        const element = insertedElements[i];
                        const elementOrder = parseInt(element.getAttribute('data-dapplet-order'));
                        if (targetElementIndex === null && elementOrder > order) {
                            targetElementIndex = i;
                        }
                        // if (elementOrder === order) {
                        //     console.error('A widget with such an order index already inserted.');
                        // }
                    }
                    if (targetElementIndex === null) {
                        const lastNode = insertedElements[insertedElements.length - 1];
                        lastNode.parentNode.insertBefore(widget.el, lastNode.nextSibling); // insert after lastNode
                    }
                    else {
                        const targetNode = insertedElements[targetElementIndex];
                        targetNode.parentNode.insertBefore(widget.el, targetNode); // insert before targetNode
                    }
                }
                return widget;
            }
            return (config) => {
                const uuid = uuidv4();
                return ((builder, insPointName, order, contextNode, proxiedSubs) => createWidget(Widget, builder, insPointName, config, order, contextNode, uuid, proxiedSubs));
            };
        }
    };
    DynamicAdapter = __decorate([
        Injectable,
        __metadata("design:paramtypes", [])
    ], DynamicAdapter);
    return DynamicAdapter;
})();
exports.DynamicAdapter = DynamicAdapter;


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
class State {
    constructor(config, ctx, contextType) {
        this.config = config;
        this.ctx = ctx;
        this.contextType = contextType;
        this.INITIAL_STATE = "DEFAULT";
        this._currentStateName = undefined;
        this._cache = {};
        const me = this;
        this.state = new Proxy({}, {
            get(target, property, receiver) {
                if (property === 'state')
                    return me._currentStateName;
                if (property === 'ctx')
                    return me.ctx;
                if (property === 'setState')
                    return me.setState.bind(me);
                return me._currentStateName
                    ? me._cache[me._currentStateName][property]
                    : me._cache[property];
            },
            set(target, property, value, receiver) {
                if (property === 'state') {
                    me.setState(value);
                }
                else {
                    if (me._currentStateName) {
                        me._cache[me._currentStateName][property] = value;
                    }
                    else {
                        me._cache[property] = value;
                    }
                    me.changedHandler && me.changedHandler();
                }
                return true;
            }
        });
        if (me.config[me.INITIAL_STATE])
            me.setState(me.INITIAL_STATE);
    }
    setState(stateName) {
        do {
            //console.log("Set state from - to: ", this._currentStateName,stateName)     
            if (stateName == this._currentStateName) {
                //console.log(`NOP state transition "${stateName}". Skipping...`)
                break;
            }
            else if (!this._cache[stateName]) {
                this._cache[stateName] = this.createNewStateFromConfig(stateName);
            }
            this._currentStateName = stateName;
            stateName = this._cache[stateName].NEXT;
        } while (stateName);
        this.changedHandler && this.changedHandler();
        return this._cache[this._currentStateName];
    }
    createNewStateFromConfig(stateName) {
        let state = {};
        if (this.config[stateName]) {
            const createAutoProperty = (apConfig, setter) => 
            //ToDo: move addAutoProperty to apCpnfig? 
            apConfig.conn.addAutoProperty(apConfig, setter, this.ctx);
            const isAutoPropertyConf = (value) => value && typeof value === 'object' && value.conn && value.name;
            const me = this;
            Object.entries(this.config[stateName]).forEach(([key, valueOrApConf]) => {
                state[key] = !isAutoPropertyConf(valueOrApConf)
                    ? valueOrApConf
                    : createAutoProperty(valueOrApConf, (v) => {
                        if (stateName == me._currentStateName) {
                            state[key] = v;
                            me.changedHandler && me.changedHandler();
                        }
                    }).value;
            });
        }
        else {
            console.error(`The state template with name "${stateName}" doesn't exist. Skipping state updating...`);
        }
        return state;
    }
} // class State
exports.State = State;


/***/ }),

/***/ "./src/widgets.ts":
/*!************************!*\
  !*** ./src/widgets.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetBuilder = void 0;
class WidgetBuilder {
    //ToDo: widgets
    constructor(widgetBuilderConfig) {
        this.observer = null;
        this.widgets = new Map();
        this.contexts = new WeakMap();
        return Object.assign(this, widgetBuilderConfig);
    }
    // `updateContexts()` is called when new context is found.
    updateContexts(features, container) {
        const contextNodes = Array.from((container === null || container === void 0 ? void 0 : container.querySelectorAll(this.contextSelector)) || []);
        if (contextNodes.length === 0)
            return;
        const newParsedContexts = [];
        for (const contextNode of contextNodes) {
            const isNew = !this.contexts.has(contextNode);
            const context = isNew ? { parsed: this.contextBuilder(contextNode), features: new Map() } : this.contexts.get(contextNode);
            // ToDo: refactor isNew checking
            if (isNew) {
                newParsedContexts.push(context);
            }
            else {
                Object.assign(context.parsed, this.contextBuilder(contextNode)); // Refreshing of context without link destroying
            }
            for (let i = 0; i < features.length; i++) {
                const feature = features[i];
                const featureInfo = context.features.get(feature);
                if (!featureInfo) {
                    const featureInfo = { proxiedSubs: {}, connections: [] };
                    const connections = feature.config.connections; // ToDo: remove
                    context.features.set(feature, featureInfo);
                }
            }
            if (isNew) {
                this.contexts.set(contextNode, context);
            }
            for (let i = 0; i < features.length; i++) {
                const feature = features[i];
                for (const insPointName in this.insPoints) {
                    for (const widgetConstructor of feature.config[insPointName] || []) {
                        const contextIds = feature.contextIds || [];
                        if (contextIds.length === 0 || contextIds.indexOf(context.parsed.id) !== -1) {
                            const insertedWidget = widgetConstructor(this, insPointName, feature.orderIndex, contextNode, context.features.get(feature).proxiedSubs); // ToDo: remove proxiedSubs
                            if (!insertedWidget)
                                continue;
                            const registeredWidgets = this.widgets.get(feature) || [];
                            registeredWidgets.push(insertedWidget);
                            this.widgets.set(feature, registeredWidgets);
                        }
                    }
                }
            }
        }
        Core.contextStarted(newParsedContexts.map((ctx) => ctx.parsed));
        return newParsedContexts;
    }
}
exports.WidgetBuilder = WidgetBuilder;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsbUNBQVc7QUFDckMsZ0JBQWdCLG1CQUFPLENB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkR5bmFtaWNBZGFwdGVyID0gdm9pZCAwO1xuY29uc3Qgd2lkZ2V0c18xID0gcmVxdWlyZShcIi4vd2lkZ2V0c1wiKTtcbmNvbnN0IHN0YXRlXzEgPSByZXF1aXJlKFwiLi9zdGF0ZVwiKTtcbmxldCBEeW5hbWljQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKCgpID0+IHtcbiAgICBsZXQgRHluYW1pY0FkYXB0ZXIgPSBjbGFzcyBEeW5hbWljQWRhcHRlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycyA9IFtdO1xuICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudCB8fCAhd2luZG93IHx8ICFNdXRhdGlvbk9ic2VydmVyKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdEb2N1bWVudCBvciBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGUuJyk7XG4gICAgICAgICAgICBjb25zdCBPQlNFUlZFUl9DT05GSUcgPSB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4gdGhpcy51cGRhdGVPYnNlcnZlcnMobXV0YXRpb25zKSk7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgT0JTRVJWRVJfQ09ORklHKTtcbiAgICAgICAgfVxuICAgICAgICBhdHRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmZpbmQoZiA9PiBmID09PSBmZWF0dXJlKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShmZWF0dXJlLm9yZGVySW5kZXgsIDAsIGZlYXR1cmUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPYnNlcnZlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSB0aGlzLmZlYXR1cmVzLmZpbHRlcihmID0+IGYgIT09IGZlYXR1cmUpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0QnVpbGRlcnMuZm9yRWFjaCh3YiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkZ2V0cyA9IHdiLndpZGdldHMuZ2V0KGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0cylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHdpZGdldHMuZm9yRWFjaCh3ID0+IHcudW5tb3VudCgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVG9EbzogY2xvc2UgYWxsIHN1YnNjcmlwdGlvbnMgYW5kIGNvbm5lY3Rpb25zXG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNoQ29uZmlnKGNvbmZpZykge1xuICAgICAgICAgICAgY29uc3QgYnVpbGRlcnMgPSBjb25maWcubWFwKChjZmcpID0+IG5ldyB3aWRnZXRzXzEuV2lkZ2V0QnVpbGRlcihjZmcpKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzLnB1c2goLi4uYnVpbGRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZU9ic2VydmVycyhtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzLmZvckVhY2goY29udGV4dEJ1aWxkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dEJ1aWxkZXIuY29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVzdHJveSBjb250ZXh0cyB0byByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRDb250ZXh0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnMgPT09IG51bGwgfHwgbXV0YXRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtdXRhdGlvbnMuZm9yRWFjaChtID0+IEFycmF5LmZyb20obS5yZW1vdmVkTm9kZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChuKSA9PiBuLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHROb2RlcyA9IEFycmF5LmZyb20oKG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi5xdWVyeVNlbGVjdG9yQWxsKGNvbnRleHRCdWlsZGVyLmNvbnRleHRTZWxlY3RvcikpIHx8IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHRzID0gY29udGV4dE5vZGVzLm1hcCgobikgPT4gY29udGV4dEJ1aWxkZXIuY29udGV4dHMuZ2V0KG4pKS5maWx0ZXIoZSA9PiBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRDb250ZXh0cy5wdXNoKC4uLmNvbnRleHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZENvbnRleHRzICYmIHJlbW92ZWRDb250ZXh0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmNvbnRleHRGaW5pc2hlZChyZW1vdmVkQ29udGV4dHMubWFwKGMgPT4gYy5wYXJzZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci51cGRhdGVDb250ZXh0cyh0aGlzLmZlYXR1cmVzLCBjb250YWluZXIpOyAvLyBUb0RvOiB0aGluayBhYm91dCBpdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhIG5ldyBjb250YWluZXIgd2FzIG9wZW5lZCwgbm8gb2JzZXJ2ZXIgYXR0YWNoZWQgeWV0XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci51cGRhdGVDb250ZXh0cyh0aGlzLmZlYXR1cmVzLCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFjb250YWluZXIgJiYgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBjb250YWluZXIgd2FzIGRlc3Ryb3llZCwgZGlzY29ubmVjdCBvYnNlcnZlciB0b29cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlV2lkZ2V0RmFjdG9yeShXaWRnZXQpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVdpZGdldChXaWRnZXQsIGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnLCBvcmRlciwgY29udGV4dE5vZGUsIGNsYXp6LCBwcm94aWVkU3Vicykge1xuICAgICAgICAgICAgICAgIGlmIChvcmRlciA9PT0gdW5kZWZpbmVkIHx8IG9yZGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VtcHR5IG9yZGVyIScpO1xuICAgICAgICAgICAgICAgICAgICBvcmRlciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGluc1BvaW50ID0gYnVpbGRlci5pbnNQb2ludHNbaW5zUG9pbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoIWluc1BvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaW5zZXJ0aW9uIHBvaW50IG5hbWU6ICR7aW5zUG9pbnROYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSAoaW5zUG9pbnQuc2VsZWN0b3IpID8gY29udGV4dE5vZGUucXVlcnlTZWxlY3RvcihpbnNQb2ludC5zZWxlY3RvcikgOiBjb250ZXh0Tm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBhIHdpZGdldCBhbHJlYWR5IGV4aXN0cyBmb3IgdGhlIGluc1BvaW50XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXp6KS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGJ1aWxkZXIuY29udGV4dHMuZ2V0KGNvbnRleHROb2RlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IG5ldyBzdGF0ZV8xLlN0YXRlKGNvbmZpZywgY29udGV4dC5wYXJzZWQsIGJ1aWxkZXIuY29udGV4dFR5cGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZGdldCA9IG5ldyBXaWRnZXQoKTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuc3RhdGUgPSBzdGF0ZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaW5zUG9pbnROYW1lID0gaW5zUG9pbnROYW1lO1xuICAgICAgICAgICAgICAgIHN0YXRlLmNoYW5nZWRIYW5kbGVyID0gKCkgPT4gd2lkZ2V0Lm1vdW50KCk7IC8vIHdoZW4gZGF0YSBpbiBzdGF0ZSB3YXMgY2hhbmdlZCwgdGhlbiByZXJlbmRlciBhIHdpZGdldFxuICAgICAgICAgICAgICAgIHdpZGdldC5tb3VudCgpOyAvLyBUb0RvOiByZW1vdmUgaXQ/XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmVsLmNsYXNzTGlzdC5hZGQoJ2RhcHBsZXQtd2lkZ2V0JywgY2xhenopO1xuICAgICAgICAgICAgICAgIHdpZGdldC5lbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGFwcGxldC1vcmRlcicsIG9yZGVyLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydFRvID0gKGluc1BvaW50Lmluc2VydCA9PT0gdW5kZWZpbmVkKSA/ICdlbmQnIDogaW5zUG9pbnQuaW5zZXJ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydGVkRWxlbWVudHMgPSBub2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gLmRhcHBsZXQtd2lkZ2V0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGluc2VydGVkRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRUbyA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBub2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbnNlcnRUbyA9PT0gJ2JlZ2luJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBcImluc2VydFwiIHZhbHVlIGluIHRoZSBpbnNlcnRpb24gcG9pbnQgY29uZmlnLiBUaGUgdmFsaWQgdmFsdWVzIGFyZSBcImJlZ2luXCIgb3IgXCJlbmRcIi4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldEVsZW1lbnRJbmRleCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRvRG86IGZpbmQgYW4gZWxlbWVudCB3aXRoIHRoZSBzYW1lIG9yZGVyIHRvIHRocm93IHRoZSBlcnJvclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIGFuIGVsZW1lbnQgaW5kZXggYmVmb3JlIHdoaWNoIG5lZWQgdG8gYmUgaW5zZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0ZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGluc2VydGVkRWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50T3JkZXIgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kYXBwbGV0LW9yZGVyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnRJbmRleCA9PT0gbnVsbCAmJiBlbGVtZW50T3JkZXIgPiBvcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoZWxlbWVudE9yZGVyID09PSBvcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0Egd2lkZ2V0IHdpdGggc3VjaCBhbiBvcmRlciBpbmRleCBhbHJlYWR5IGluc2VydGVkLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50SW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3ROb2RlID0gaW5zZXJ0ZWRFbGVtZW50c1tpbnNlcnRlZEVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBsYXN0Tm9kZS5uZXh0U2libGluZyk7IC8vIGluc2VydCBhZnRlciBsYXN0Tm9kZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGluc2VydGVkRWxlbWVudHNbdGFyZ2V0RWxlbWVudEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCB0YXJnZXROb2RlKTsgLy8gaW5zZXJ0IGJlZm9yZSB0YXJnZXROb2RlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgb3JkZXIsIGNvbnRleHROb2RlLCBwcm94aWVkU3VicykgPT4gY3JlYXRlV2lkZ2V0KFdpZGdldCwgYnVpbGRlciwgaW5zUG9pbnROYW1lLCBjb25maWcsIG9yZGVyLCBjb250ZXh0Tm9kZSwgdXVpZCwgcHJveGllZFN1YnMpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIER5bmFtaWNBZGFwdGVyID0gX19kZWNvcmF0ZShbXG4gICAgICAgIEluamVjdGFibGUsXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbiAgICBdLCBEeW5hbWljQWRhcHRlcik7XG4gICAgcmV0dXJuIER5bmFtaWNBZGFwdGVyO1xufSkoKTtcbmV4cG9ydHMuRHluYW1pY0FkYXB0ZXIgPSBEeW5hbWljQWRhcHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdGF0ZSA9IHZvaWQgMDtcbmNsYXNzIFN0YXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGN0eCwgY29udGV4dFR5cGUpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvbnRleHRUeXBlID0gY29udGV4dFR5cGU7XG4gICAgICAgIHRoaXMuSU5JVElBTF9TVEFURSA9IFwiREVGQVVMVFwiO1xuICAgICAgICB0aGlzLl9jdXJyZW50U3RhdGVOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgUHJveHkoe30sIHtcbiAgICAgICAgICAgIGdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3N0YXRlJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLl9jdXJyZW50U3RhdGVOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2N0eCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5jdHg7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnc2V0U3RhdGUnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuc2V0U3RhdGUuYmluZChtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lLl9jdXJyZW50U3RhdGVOYW1lXG4gICAgICAgICAgICAgICAgICAgID8gbWUuX2NhY2hlW21lLl9jdXJyZW50U3RhdGVOYW1lXVtwcm9wZXJ0eV1cbiAgICAgICAgICAgICAgICAgICAgOiBtZS5fY2FjaGVbcHJvcGVydHldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0U3RhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLl9jdXJyZW50U3RhdGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FjaGVbbWUuX2N1cnJlbnRTdGF0ZU5hbWVdW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhY2hlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lLmNoYW5nZWRIYW5kbGVyICYmIG1lLmNoYW5nZWRIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1lLmNvbmZpZ1ttZS5JTklUSUFMX1NUQVRFXSlcbiAgICAgICAgICAgIG1lLnNldFN0YXRlKG1lLklOSVRJQUxfU1RBVEUpO1xuICAgIH1cbiAgICBzZXRTdGF0ZShzdGF0ZU5hbWUpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNldCBzdGF0ZSBmcm9tIC0gdG86IFwiLCB0aGlzLl9jdXJyZW50U3RhdGVOYW1lLHN0YXRlTmFtZSkgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXRlTmFtZSA9PSB0aGlzLl9jdXJyZW50U3RhdGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgTk9QIHN0YXRlIHRyYW5zaXRpb24gXCIke3N0YXRlTmFtZX1cIi4gU2tpcHBpbmcuLi5gKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuX2NhY2hlW3N0YXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVtzdGF0ZU5hbWVdID0gdGhpcy5jcmVhdGVOZXdTdGF0ZUZyb21Db25maWcoc3RhdGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZU5hbWUgPSBzdGF0ZU5hbWU7XG4gICAgICAgICAgICBzdGF0ZU5hbWUgPSB0aGlzLl9jYWNoZVtzdGF0ZU5hbWVdLk5FWFQ7XG4gICAgICAgIH0gd2hpbGUgKHN0YXRlTmFtZSk7XG4gICAgICAgIHRoaXMuY2hhbmdlZEhhbmRsZXIgJiYgdGhpcy5jaGFuZ2VkSGFuZGxlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVbdGhpcy5fY3VycmVudFN0YXRlTmFtZV07XG4gICAgfVxuICAgIGNyZWF0ZU5ld1N0YXRlRnJvbUNvbmZpZyhzdGF0ZU5hbWUpIHtcbiAgICAgICAgbGV0IHN0YXRlID0ge307XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1tzdGF0ZU5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVBdXRvUHJvcGVydHkgPSAoYXBDb25maWcsIHNldHRlcikgPT4gXG4gICAgICAgICAgICAvL1RvRG86IG1vdmUgYWRkQXV0b1Byb3BlcnR5IHRvIGFwQ3BuZmlnPyBcbiAgICAgICAgICAgIGFwQ29uZmlnLmNvbm4uYWRkQXV0b1Byb3BlcnR5KGFwQ29uZmlnLCBzZXR0ZXIsIHRoaXMuY3R4KTtcbiAgICAgICAgICAgIGNvbnN0IGlzQXV0b1Byb3BlcnR5Q29uZiA9ICh2YWx1ZSkgPT4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25uICYmIHZhbHVlLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZ1tzdGF0ZU5hbWVdKS5mb3JFYWNoKChba2V5LCB2YWx1ZU9yQXBDb25mXSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSAhaXNBdXRvUHJvcGVydHlDb25mKHZhbHVlT3JBcENvbmYpXG4gICAgICAgICAgICAgICAgICAgID8gdmFsdWVPckFwQ29uZlxuICAgICAgICAgICAgICAgICAgICA6IGNyZWF0ZUF1dG9Qcm9wZXJ0eSh2YWx1ZU9yQXBDb25mLCAodikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlTmFtZSA9PSBtZS5fY3VycmVudFN0YXRlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNoYW5nZWRIYW5kbGVyICYmIG1lLmNoYW5nZWRIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgc3RhdGUgdGVtcGxhdGUgd2l0aCBuYW1lIFwiJHtzdGF0ZU5hbWV9XCIgZG9lc24ndCBleGlzdC4gU2tpcHBpbmcgc3RhdGUgdXBkYXRpbmcuLi5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSAvLyBjbGFzcyBTdGF0ZVxuZXhwb3J0cy5TdGF0ZSA9IFN0YXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLldpZGdldEJ1aWxkZXIgPSB2b2lkIDA7XG5jbGFzcyBXaWRnZXRCdWlsZGVyIHtcbiAgICAvL1RvRG86IHdpZGdldHNcbiAgICBjb25zdHJ1Y3Rvcih3aWRnZXRCdWlsZGVyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLndpZGdldHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB3aWRnZXRCdWlsZGVyQ29uZmlnKTtcbiAgICB9XG4gICAgLy8gYHVwZGF0ZUNvbnRleHRzKClgIGlzIGNhbGxlZCB3aGVuIG5ldyBjb250ZXh0IGlzIGZvdW5kLlxuICAgIHVwZGF0ZUNvbnRleHRzKGZlYXR1cmVzLCBjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY29udGV4dE5vZGVzID0gQXJyYXkuZnJvbSgoY29udGFpbmVyID09PSBudWxsIHx8IGNvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250ZXh0U2VsZWN0b3IpKSB8fCBbXSk7XG4gICAgICAgIGlmIChjb250ZXh0Tm9kZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdQYXJzZWRDb250ZXh0cyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbnRleHROb2RlIG9mIGNvbnRleHROb2Rlcykge1xuICAgICAgICAgICAgY29uc3QgaXNOZXcgPSAhdGhpcy5jb250ZXh0cy5oYXMoY29udGV4dE5vZGUpO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGlzTmV3ID8geyBwYXJzZWQ6IHRoaXMuY29udGV4dEJ1aWxkZXIoY29udGV4dE5vZGUpLCBmZWF0dXJlczogbmV3IE1hcCgpIH0gOiB0aGlzLmNvbnRleHRzLmdldChjb250ZXh0Tm9kZSk7XG4gICAgICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpc05ldyBjaGVja2luZ1xuICAgICAgICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgICAgICAgICAgbmV3UGFyc2VkQ29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dC5wYXJzZWQsIHRoaXMuY29udGV4dEJ1aWxkZXIoY29udGV4dE5vZGUpKTsgLy8gUmVmcmVzaGluZyBvZiBjb250ZXh0IHdpdGhvdXQgbGluayBkZXN0cm95aW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVJbmZvID0gY29udGV4dC5mZWF0dXJlcy5nZXQoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFmZWF0dXJlSW5mbykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlSW5mbyA9IHsgcHJveGllZFN1YnM6IHt9LCBjb25uZWN0aW9uczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbnMgPSBmZWF0dXJlLmNvbmZpZy5jb25uZWN0aW9uczsgLy8gVG9EbzogcmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmVhdHVyZXMuc2V0KGZlYXR1cmUsIGZlYXR1cmVJbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRzLnNldChjb250ZXh0Tm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5zUG9pbnROYW1lIGluIHRoaXMuaW5zUG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgd2lkZ2V0Q29uc3RydWN0b3Igb2YgZmVhdHVyZS5jb25maWdbaW5zUG9pbnROYW1lXSB8fCBbXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dElkcyA9IGZlYXR1cmUuY29udGV4dElkcyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0SWRzLmxlbmd0aCA9PT0gMCB8fCBjb250ZXh0SWRzLmluZGV4T2YoY29udGV4dC5wYXJzZWQuaWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydGVkV2lkZ2V0ID0gd2lkZ2V0Q29uc3RydWN0b3IodGhpcywgaW5zUG9pbnROYW1lLCBmZWF0dXJlLm9yZGVySW5kZXgsIGNvbnRleHROb2RlLCBjb250ZXh0LmZlYXR1cmVzLmdldChmZWF0dXJlKS5wcm94aWVkU3Vicyk7IC8vIFRvRG86IHJlbW92ZSBwcm94aWVkU3Vic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5zZXJ0ZWRXaWRnZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lzdGVyZWRXaWRnZXRzID0gdGhpcy53aWRnZXRzLmdldChmZWF0dXJlKSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkV2lkZ2V0cy5wdXNoKGluc2VydGVkV2lkZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZGdldHMuc2V0KGZlYXR1cmUsIHJlZ2lzdGVyZWRXaWRnZXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBDb3JlLmNvbnRleHRTdGFydGVkKG5ld1BhcnNlZENvbnRleHRzLm1hcCgoY3R4KSA9PiBjdHgucGFyc2VkKSk7XG4gICAgICAgIHJldHVybiBuZXdQYXJzZWRDb250ZXh0cztcbiAgICB9XG59XG5leHBvcnRzLldpZGdldEJ1aWxkZXIgPSBXaWRnZXRCdWlsZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==