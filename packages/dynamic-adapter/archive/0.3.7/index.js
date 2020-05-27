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
                    //console.error('Empty order!');
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
                            if (typeof widgetConstructor !== 'function') {
                                console.error(`Invalid widget configuration in the insertion point "${insPointName}". It must be WidgetConstructor instance.`);
                                continue;
                            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsbUNBQVc7QUFDckMsZ0JBQWdCLG1CQUFPLENB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkR5bmFtaWNBZGFwdGVyID0gdm9pZCAwO1xuY29uc3Qgd2lkZ2V0c18xID0gcmVxdWlyZShcIi4vd2lkZ2V0c1wiKTtcbmNvbnN0IHN0YXRlXzEgPSByZXF1aXJlKFwiLi9zdGF0ZVwiKTtcbmxldCBEeW5hbWljQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKCgpID0+IHtcbiAgICBsZXQgRHluYW1pY0FkYXB0ZXIgPSBjbGFzcyBEeW5hbWljQWRhcHRlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycyA9IFtdO1xuICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudCB8fCAhd2luZG93IHx8ICFNdXRhdGlvbk9ic2VydmVyKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdEb2N1bWVudCBvciBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGUuJyk7XG4gICAgICAgICAgICBjb25zdCBPQlNFUlZFUl9DT05GSUcgPSB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4gdGhpcy51cGRhdGVPYnNlcnZlcnMobXV0YXRpb25zKSk7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgT0JTRVJWRVJfQ09ORklHKTtcbiAgICAgICAgfVxuICAgICAgICBhdHRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmZpbmQoZiA9PiBmID09PSBmZWF0dXJlKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShmZWF0dXJlLm9yZGVySW5kZXgsIDAsIGZlYXR1cmUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPYnNlcnZlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSB0aGlzLmZlYXR1cmVzLmZpbHRlcihmID0+IGYgIT09IGZlYXR1cmUpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0QnVpbGRlcnMuZm9yRWFjaCh3YiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkZ2V0cyA9IHdiLndpZGdldHMuZ2V0KGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0cylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHdpZGdldHMuZm9yRWFjaCh3ID0+IHcudW5tb3VudCgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVG9EbzogY2xvc2UgYWxsIHN1YnNjcmlwdGlvbnMgYW5kIGNvbm5lY3Rpb25zXG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNoQ29uZmlnKGNvbmZpZykge1xuICAgICAgICAgICAgY29uc3QgYnVpbGRlcnMgPSBjb25maWcubWFwKChjZmcpID0+IG5ldyB3aWRnZXRzXzEuV2lkZ2V0QnVpbGRlcihjZmcpKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzLnB1c2goLi4uYnVpbGRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZU9ic2VydmVycyhtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzLmZvckVhY2goY29udGV4dEJ1aWxkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dEJ1aWxkZXIuY29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVzdHJveSBjb250ZXh0cyB0byByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRDb250ZXh0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnMgPT09IG51bGwgfHwgbXV0YXRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtdXRhdGlvbnMuZm9yRWFjaChtID0+IEFycmF5LmZyb20obS5yZW1vdmVkTm9kZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChuKSA9PiBuLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHROb2RlcyA9IEFycmF5LmZyb20oKG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi5xdWVyeVNlbGVjdG9yQWxsKGNvbnRleHRCdWlsZGVyLmNvbnRleHRTZWxlY3RvcikpIHx8IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHRzID0gY29udGV4dE5vZGVzLm1hcCgobikgPT4gY29udGV4dEJ1aWxkZXIuY29udGV4dHMuZ2V0KG4pKS5maWx0ZXIoZSA9PiBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRDb250ZXh0cy5wdXNoKC4uLmNvbnRleHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZENvbnRleHRzICYmIHJlbW92ZWRDb250ZXh0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmNvbnRleHRGaW5pc2hlZChyZW1vdmVkQ29udGV4dHMubWFwKGMgPT4gYy5wYXJzZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci51cGRhdGVDb250ZXh0cyh0aGlzLmZlYXR1cmVzLCBjb250YWluZXIpOyAvLyBUb0RvOiB0aGluayBhYm91dCBpdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhIG5ldyBjb250YWluZXIgd2FzIG9wZW5lZCwgbm8gb2JzZXJ2ZXIgYXR0YWNoZWQgeWV0XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci51cGRhdGVDb250ZXh0cyh0aGlzLmZlYXR1cmVzLCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFjb250YWluZXIgJiYgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBjb250YWluZXIgd2FzIGRlc3Ryb3llZCwgZGlzY29ubmVjdCBvYnNlcnZlciB0b29cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlV2lkZ2V0RmFjdG9yeShXaWRnZXQpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVdpZGdldChXaWRnZXQsIGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnLCBvcmRlciwgY29udGV4dE5vZGUsIGNsYXp6LCBwcm94aWVkU3Vicykge1xuICAgICAgICAgICAgICAgIGlmIChvcmRlciA9PT0gdW5kZWZpbmVkIHx8IG9yZGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcignRW1wdHkgb3JkZXIhJyk7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zUG9pbnQgPSBidWlsZGVyLmluc1BvaW50c1tpbnNQb2ludE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICghaW5zUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBpbnNlcnRpb24gcG9pbnQgbmFtZTogJHtpbnNQb2ludE5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IChpbnNQb2ludC5zZWxlY3RvcikgPyBjb250ZXh0Tm9kZS5xdWVyeVNlbGVjdG9yKGluc1BvaW50LnNlbGVjdG9yKSA6IGNvbnRleHROb2RlO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGEgd2lkZ2V0IGFscmVhZHkgZXhpc3RzIGZvciB0aGUgaW5zUG9pbnRcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5wYXJlbnRFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhenopLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gYnVpbGRlci5jb250ZXh0cy5nZXQoY29udGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gbmV3IHN0YXRlXzEuU3RhdGUoY29uZmlnLCBjb250ZXh0LnBhcnNlZCwgYnVpbGRlci5jb250ZXh0VHlwZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkZ2V0ID0gbmV3IFdpZGdldCgpO1xuICAgICAgICAgICAgICAgIHdpZGdldC5zdGF0ZSA9IHN0YXRlLnN0YXRlO1xuICAgICAgICAgICAgICAgIHdpZGdldC5pbnNQb2ludE5hbWUgPSBpbnNQb2ludE5hbWU7XG4gICAgICAgICAgICAgICAgc3RhdGUuY2hhbmdlZEhhbmRsZXIgPSAoKSA9PiB3aWRnZXQubW91bnQoKTsgLy8gd2hlbiBkYXRhIGluIHN0YXRlIHdhcyBjaGFuZ2VkLCB0aGVuIHJlcmVuZGVyIGEgd2lkZ2V0XG4gICAgICAgICAgICAgICAgd2lkZ2V0Lm1vdW50KCk7IC8vIFRvRG86IHJlbW92ZSBpdD9cbiAgICAgICAgICAgICAgICB3aWRnZXQuZWwuY2xhc3NMaXN0LmFkZCgnZGFwcGxldC13aWRnZXQnLCBjbGF6eik7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXBwbGV0LW9yZGVyJywgb3JkZXIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0VG8gPSAoaW5zUG9pbnQuaW5zZXJ0ID09PSB1bmRlZmluZWQpID8gJ2VuZCcgOiBpbnNQb2ludC5pbnNlcnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0ZWRFbGVtZW50cyA9IG5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiAuZGFwcGxldC13aWRnZXQnKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0ZWRFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFRvID09PSAnZW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIG5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluc2VydFRvID09PSAnYmVnaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdpZGdldC5lbCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIFwiaW5zZXJ0XCIgdmFsdWUgaW4gdGhlIGluc2VydGlvbiBwb2ludCBjb25maWcuIFRoZSB2YWxpZCB2YWx1ZXMgYXJlIFwiYmVnaW5cIiBvciBcImVuZFwiLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0RWxlbWVudEluZGV4ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogZmluZCBhbiBlbGVtZW50IHdpdGggdGhlIHNhbWUgb3JkZXIgdG8gdGhyb3cgdGhlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaGluZyBmb3IgYW4gZWxlbWVudCBpbmRleCBiZWZvcmUgd2hpY2ggbmVlZCB0byBiZSBpbnNlcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRlZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaW5zZXJ0ZWRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRPcmRlciA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWRhcHBsZXQtb3JkZXInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudEluZGV4ID09PSBudWxsICYmIGVsZW1lbnRPcmRlciA+IG9yZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChlbGVtZW50T3JkZXIgPT09IG9yZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcignQSB3aWRnZXQgd2l0aCBzdWNoIGFuIG9yZGVyIGluZGV4IGFscmVhZHkgaW5zZXJ0ZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnRJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdE5vZGUgPSBpbnNlcnRlZEVsZW1lbnRzW2luc2VydGVkRWxlbWVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIGxhc3ROb2RlLm5leHRTaWJsaW5nKTsgLy8gaW5zZXJ0IGFmdGVyIGxhc3ROb2RlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gaW5zZXJ0ZWRFbGVtZW50c1t0YXJnZXRFbGVtZW50SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIHRhcmdldE5vZGUpOyAvLyBpbnNlcnQgYmVmb3JlIHRhcmdldE5vZGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChjb25maWcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgoYnVpbGRlciwgaW5zUG9pbnROYW1lLCBvcmRlciwgY29udGV4dE5vZGUsIHByb3hpZWRTdWJzKSA9PiBjcmVhdGVXaWRnZXQoV2lkZ2V0LCBidWlsZGVyLCBpbnNQb2ludE5hbWUsIGNvbmZpZywgb3JkZXIsIGNvbnRleHROb2RlLCB1dWlkLCBwcm94aWVkU3VicykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRHluYW1pY0FkYXB0ZXIgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0YWJsZSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuICAgIF0sIER5bmFtaWNBZGFwdGVyKTtcbiAgICByZXR1cm4gRHluYW1pY0FkYXB0ZXI7XG59KSgpO1xuZXhwb3J0cy5EeW5hbWljQWRhcHRlciA9IER5bmFtaWNBZGFwdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0YXRlID0gdm9pZCAwO1xuY2xhc3MgU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgY3R4LCBjb250ZXh0VHlwZSkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29udGV4dFR5cGUgPSBjb250ZXh0VHlwZTtcbiAgICAgICAgdGhpcy5JTklUSUFMX1NUQVRFID0gXCJERUZBVUxUXCI7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBQcm94eSh7fSwge1xuICAgICAgICAgICAgZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnc3RhdGUnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuX2N1cnJlbnRTdGF0ZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnY3R4JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLmN0eDtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICdzZXRTdGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5zZXRTdGF0ZS5iaW5kKG1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuX2N1cnJlbnRTdGF0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgPyBtZS5fY2FjaGVbbWUuX2N1cnJlbnRTdGF0ZU5hbWVdW3Byb3BlcnR5XVxuICAgICAgICAgICAgICAgICAgICA6IG1lLl9jYWNoZVtwcm9wZXJ0eV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3N0YXRlJykge1xuICAgICAgICAgICAgICAgICAgICBtZS5zZXRTdGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWUuX2N1cnJlbnRTdGF0ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWNoZVttZS5fY3VycmVudFN0YXRlTmFtZV1bcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FjaGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWUuY2hhbmdlZEhhbmRsZXIgJiYgbWUuY2hhbmdlZEhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWUuY29uZmlnW21lLklOSVRJQUxfU1RBVEVdKVxuICAgICAgICAgICAgbWUuc2V0U3RhdGUobWUuSU5JVElBTF9TVEFURSk7XG4gICAgfVxuICAgIHNldFN0YXRlKHN0YXRlTmFtZSkge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiU2V0IHN0YXRlIGZyb20gLSB0bzogXCIsIHRoaXMuX2N1cnJlbnRTdGF0ZU5hbWUsc3RhdGVOYW1lKSAgICAgXG4gICAgICAgICAgICBpZiAoc3RhdGVOYW1lID09IHRoaXMuX2N1cnJlbnRTdGF0ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBOT1Agc3RhdGUgdHJhbnNpdGlvbiBcIiR7c3RhdGVOYW1lfVwiLiBTa2lwcGluZy4uLmApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5fY2FjaGVbc3RhdGVOYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlW3N0YXRlTmFtZV0gPSB0aGlzLmNyZWF0ZU5ld1N0YXRlRnJvbUNvbmZpZyhzdGF0ZU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlTmFtZSA9IHN0YXRlTmFtZTtcbiAgICAgICAgICAgIHN0YXRlTmFtZSA9IHRoaXMuX2NhY2hlW3N0YXRlTmFtZV0uTkVYVDtcbiAgICAgICAgfSB3aGlsZSAoc3RhdGVOYW1lKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSGFuZGxlciAmJiB0aGlzLmNoYW5nZWRIYW5kbGVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZVt0aGlzLl9jdXJyZW50U3RhdGVOYW1lXTtcbiAgICB9XG4gICAgY3JlYXRlTmV3U3RhdGVGcm9tQ29uZmlnKHN0YXRlTmFtZSkge1xuICAgICAgICBsZXQgc3RhdGUgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnW3N0YXRlTmFtZV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUF1dG9Qcm9wZXJ0eSA9IChhcENvbmZpZywgc2V0dGVyKSA9PiBcbiAgICAgICAgICAgIC8vVG9EbzogbW92ZSBhZGRBdXRvUHJvcGVydHkgdG8gYXBDcG5maWc/IFxuICAgICAgICAgICAgYXBDb25maWcuY29ubi5hZGRBdXRvUHJvcGVydHkoYXBDb25maWcsIHNldHRlciwgdGhpcy5jdHgpO1xuICAgICAgICAgICAgY29uc3QgaXNBdXRvUHJvcGVydHlDb25mID0gKHZhbHVlKSA9PiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbm4gJiYgdmFsdWUubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnW3N0YXRlTmFtZV0pLmZvckVhY2goKFtrZXksIHZhbHVlT3JBcENvbmZdKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9ICFpc0F1dG9Qcm9wZXJ0eUNvbmYodmFsdWVPckFwQ29uZilcbiAgICAgICAgICAgICAgICAgICAgPyB2YWx1ZU9yQXBDb25mXG4gICAgICAgICAgICAgICAgICAgIDogY3JlYXRlQXV0b1Byb3BlcnR5KHZhbHVlT3JBcENvbmYsICh2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVOYW1lID09IG1lLl9jdXJyZW50U3RhdGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuY2hhbmdlZEhhbmRsZXIgJiYgbWUuY2hhbmdlZEhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBzdGF0ZSB0ZW1wbGF0ZSB3aXRoIG5hbWUgXCIke3N0YXRlTmFtZX1cIiBkb2Vzbid0IGV4aXN0LiBTa2lwcGluZyBzdGF0ZSB1cGRhdGluZy4uLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IC8vIGNsYXNzIFN0YXRlXG5leHBvcnRzLlN0YXRlID0gU3RhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuV2lkZ2V0QnVpbGRlciA9IHZvaWQgMDtcbmNsYXNzIFdpZGdldEJ1aWxkZXIge1xuICAgIC8vVG9Ebzogd2lkZ2V0c1xuICAgIGNvbnN0cnVjdG9yKHdpZGdldEJ1aWxkZXJDb25maWcpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHdpZGdldEJ1aWxkZXJDb25maWcpO1xuICAgIH1cbiAgICAvLyBgdXBkYXRlQ29udGV4dHMoKWAgaXMgY2FsbGVkIHdoZW4gbmV3IGNvbnRleHQgaXMgZm91bmQuXG4gICAgdXBkYXRlQ29udGV4dHMoZmVhdHVyZXMsIGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBjb250ZXh0Tm9kZXMgPSBBcnJheS5mcm9tKChjb250YWluZXIgPT09IG51bGwgfHwgY29udGFpbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRleHRTZWxlY3RvcikpIHx8IFtdKTtcbiAgICAgICAgaWYgKGNvbnRleHROb2Rlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1BhcnNlZENvbnRleHRzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgY29udGV4dE5vZGUgb2YgY29udGV4dE5vZGVzKSB7XG4gICAgICAgICAgICBjb25zdCBpc05ldyA9ICF0aGlzLmNvbnRleHRzLmhhcyhjb250ZXh0Tm9kZSk7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gaXNOZXcgPyB7IHBhcnNlZDogdGhpcy5jb250ZXh0QnVpbGRlcihjb250ZXh0Tm9kZSksIGZlYXR1cmVzOiBuZXcgTWFwKCkgfSA6IHRoaXMuY29udGV4dHMuZ2V0KGNvbnRleHROb2RlKTtcbiAgICAgICAgICAgIC8vIFRvRG86IHJlZmFjdG9yIGlzTmV3IGNoZWNraW5nXG4gICAgICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICAgICAgICBuZXdQYXJzZWRDb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LnBhcnNlZCwgdGhpcy5jb250ZXh0QnVpbGRlcihjb250ZXh0Tm9kZSkpOyAvLyBSZWZyZXNoaW5nIG9mIGNvbnRleHQgd2l0aG91dCBsaW5rIGRlc3Ryb3lpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZUluZm8gPSBjb250ZXh0LmZlYXR1cmVzLmdldChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZlYXR1cmVJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVJbmZvID0geyBwcm94aWVkU3Viczoge30sIGNvbm5lY3Rpb25zOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0aW9ucyA9IGZlYXR1cmUuY29uZmlnLmNvbm5lY3Rpb25zOyAvLyBUb0RvOiByZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5mZWF0dXJlcy5zZXQoZmVhdHVyZSwgZmVhdHVyZUluZm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc05ldykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dHMuc2V0KGNvbnRleHROb2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbnNQb2ludE5hbWUgaW4gdGhpcy5pbnNQb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB3aWRnZXRDb25zdHJ1Y3RvciBvZiBmZWF0dXJlLmNvbmZpZ1tpbnNQb2ludE5hbWVdIHx8IFtdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0SWRzID0gZmVhdHVyZS5jb250ZXh0SWRzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRleHRJZHMubGVuZ3RoID09PSAwIHx8IGNvbnRleHRJZHMuaW5kZXhPZihjb250ZXh0LnBhcnNlZC5pZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aWRnZXRDb25zdHJ1Y3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIHdpZGdldCBjb25maWd1cmF0aW9uIGluIHRoZSBpbnNlcnRpb24gcG9pbnQgXCIke2luc1BvaW50TmFtZX1cIi4gSXQgbXVzdCBiZSBXaWRnZXRDb25zdHJ1Y3RvciBpbnN0YW5jZS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydGVkV2lkZ2V0ID0gd2lkZ2V0Q29uc3RydWN0b3IodGhpcywgaW5zUG9pbnROYW1lLCBmZWF0dXJlLm9yZGVySW5kZXgsIGNvbnRleHROb2RlLCBjb250ZXh0LmZlYXR1cmVzLmdldChmZWF0dXJlKS5wcm94aWVkU3Vicyk7IC8vIFRvRG86IHJlbW92ZSBwcm94aWVkU3Vic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5zZXJ0ZWRXaWRnZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lzdGVyZWRXaWRnZXRzID0gdGhpcy53aWRnZXRzLmdldChmZWF0dXJlKSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkV2lkZ2V0cy5wdXNoKGluc2VydGVkV2lkZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZGdldHMuc2V0KGZlYXR1cmUsIHJlZ2lzdGVyZWRXaWRnZXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBDb3JlLmNvbnRleHRTdGFydGVkKG5ld1BhcnNlZENvbnRleHRzLm1hcCgoY3R4KSA9PiBjdHgucGFyc2VkKSk7XG4gICAgICAgIHJldHVybiBuZXdQYXJzZWRDb250ZXh0cztcbiAgICB9XG59XG5leHBvcnRzLldpZGdldEJ1aWxkZXIgPSBXaWRnZXRCdWlsZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==