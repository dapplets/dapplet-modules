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
const widgets_1 = __webpack_require__(/*! ./widgets */ "./src/widgets.ts");
const state_1 = __webpack_require__(/*! ./state */ "./src/state.ts");
let DynamicAdapter = class DynamicAdapter {
    constructor() {
        this.observer = null;
        this.features = [];
        this.contextBuilders = [];
        this._contextCreatedHandlers = [];
        this._contextDestroyedHandlers = [];
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
        const builders = config.map((cfg) => new widgets_1.WidgetBuilder(cfg, this._emitContextCreated.bind(this)));
        this.contextBuilders.push(...builders);
    }
    updateObservers(mutations) {
        this.contextBuilders.forEach(contextBuilder => {
            var _a;
            const container = document.querySelector(contextBuilder.containerSelector);
            if (container) {
                // destroy contexts to removed nodes
                const removedContexts = [];
                (_a = mutations) === null || _a === void 0 ? void 0 : _a.forEach(m => Array.from(m.removedNodes)
                    .filter((n) => n.nodeType == Node.ELEMENT_NODE)
                    .forEach((n) => {
                    var _a;
                    const contextNodes = Array.from(((_a = n) === null || _a === void 0 ? void 0 : _a.querySelectorAll(contextBuilder.contextSelector)) || []);
                    const contexts = contextNodes.map((n) => contextBuilder.contexts.get(n)).filter(e => e);
                    removedContexts.push(...contexts);
                }));
                if (removedContexts && removedContexts.length > 0) {
                    Core.contextFinished(removedContexts.map(c => c.parsed));
                    removedContexts.map(c => c.parsed).forEach(ctx => this._emitContextDestroyed(ctx, contextBuilder.contextType, contextBuilder.contextEvent));
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
            // ToDo: calculate node from insPoint & view
            const insPoint = builder.insPoints[insPointName];
            const node = contextNode.querySelector(insPoint.selector);
            // check if a widget already exists for the insPoint
            if (node.getElementsByClassName(clazz).length > 0)
                return;
            const context = builder.contexts.get(contextNode);
            const state = new state_1.State(config, context.parsed, builder.contextType, clazz);
            const widget = new Widget();
            widget.state = state.state;
            state.changedHandler = () => widget.mount(); // when data in state was changed, then rerender a widget
            widget.mount(); // ToDo: remove it?
            widget.el.classList.add('dapplet-widget');
            // ToDo: fix bug: incorrect ordering (reproduce bug on 3 buttons)
            const insertedElements = node.getElementsByClassName('dapplet-widget');
            if (insertedElements.length >= order) {
                node.insertBefore(widget.el, insertedElements[order]);
            }
            else {
                node.appendChild(widget.el);
            }
            return widget;
        }
        return (config) => {
            const uuid = uuidv4();
            return ((builder, insPointName, order, contextNode, proxiedSubs) => createWidget(Widget, builder, insPointName, config, order, contextNode, uuid, proxiedSubs));
        };
    }
    onContextCreated(handler) {
        this._contextCreatedHandlers.push(handler);
    }
    onContextDestroyed(handler) {
        this._contextDestroyedHandlers.push(handler);
    }
    _emitContextCreated(context, contextType, contextEvent) {
        this._contextCreatedHandlers.forEach(h => h(context, contextType));
        this._emitContextEvent(context, contextType, contextEvent, 'create');
    }
    _emitContextDestroyed(context, contextType, contextEvent) {
        this._contextDestroyedHandlers.forEach(h => h(context, contextType));
        this._emitContextEvent(context, contextType, contextEvent, 'destroy');
    }
    _emitContextEvent(context, contextType, contextEvent, operation) {
        const event = {
            operation,
            topic: context.id,
            contextType,
            contextId: context.id,
            context
        };
        for (const feature of this.features) {
            const handlers = feature.config[contextEvent];
            if (!Array.isArray(handlers))
                continue;
            handlers.forEach(h => h(event));
        }
    }
};
DynamicAdapter = __decorate([
    Injectable,
    __metadata("design:paramtypes", [])
], DynamicAdapter);
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
class State {
    constructor(config, ctx, contextType, _clazz) {
        this.config = config;
        this.ctx = ctx;
        this.contextType = contextType;
        this._clazz = _clazz;
        this.INITIAL_STATE = "DEFAULT";
        this._currentStateName = undefined;
        this._cache = {};
        const me = this;
        this.state = new Proxy({}, {
            get(target, property, receiver) {
                if (property == 'state')
                    return me._currentStateName;
                if (property === 'clazz')
                    return me._clazz; // ToDo: remove it
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
                    target[property] = value;
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
class WidgetBuilder {
    //ToDo: widgets
    constructor(widgetBuilderConfig, _emitContextCreated) {
        this._emitContextCreated = _emitContextCreated;
        this.observer = null;
        this.widgets = new Map();
        this.contexts = new WeakMap();
        return Object.assign(this, widgetBuilderConfig);
    }
    // `updateContexts()` is called when new context is found.
    updateContexts(features, container, mutations) {
        var _a;
        const contextNodes = Array.from(((_a = container) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.contextSelector)) || []);
        if (contextNodes.length === 0)
            return;
        const newParsedContexts = [];
        for (const contextNode of contextNodes) {
            const isNew = !this.contexts.has(contextNode);
            const context = isNew ? { parsed: this.contextBuilder(contextNode), features: new Map() } : this.contexts.get(contextNode);
            // ToDo: refactor isNew checking
            if (isNew) {
                newParsedContexts.push(context);
                this._emitContextCreated(context.parsed, this.contextType, this.contextEvent);
            }
            for (let i = 0; i < features.length; i++) {
                const feature = features[i];
                const featureInfo = context.features.get(feature);
                if (!featureInfo) {
                    const featureInfo = { proxiedSubs: {}, connections: [] };
                    const connections = feature.config.connections;
                    // for (const connectionName in connections) {
                    //     const settersByNames = {}; // ToDo: memory leaks?
                    //     featureInfo.proxiedSubs[connectionName] = new Proxy({}, {
                    //         get(target, propName, receiver) {
                    //             return ({
                    //                 datasource: (setter) => {
                    //                     if (!settersByNames[propName]) settersByNames[propName] = [];
                    //                     settersByNames[propName].push(setter);
                    //                 }
                    //             });
                    //         }
                    //     });
                    //     const connection: any = connections[connectionName];
                    //     const subscription = connection.subscribe(context.parsed.id, (data: any) => {
                    //         for (const key in settersByNames) {
                    //             const setters = settersByNames[key] || [];
                    //             setters.forEach(set => set(data[key]));
                    //         }
                    //     });
                    //     featureInfo.subscriptions.push(subscription);
                    // }
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
                            const insertedWidget = widgetConstructor(this, insPointName, i, contextNode, context.features.get(feature).proxiedSubs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLCtC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgd2lkZ2V0c18xID0gcmVxdWlyZShcIi4vd2lkZ2V0c1wiKTtcclxuY29uc3Qgc3RhdGVfMSA9IHJlcXVpcmUoXCIuL3N0YXRlXCIpO1xyXG5sZXQgRHluYW1pY0FkYXB0ZXIgPSBjbGFzcyBEeW5hbWljQWRhcHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XHJcbiAgICAgICAgdGhpcy5jb250ZXh0QnVpbGRlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0Q3JlYXRlZEhhbmRsZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fY29udGV4dERlc3Ryb3llZEhhbmRsZXJzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoIWRvY3VtZW50IHx8ICF3aW5kb3cgfHwgIU11dGF0aW9uT2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdEb2N1bWVudCBvciBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGUuJyk7XHJcbiAgICAgICAgY29uc3QgT0JTRVJWRVJfQ09ORklHID0ge1xyXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB0aGlzLnVwZGF0ZU9ic2VydmVycyhtdXRhdGlvbnMpKTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgT0JTRVJWRVJfQ09ORklHKTtcclxuICAgIH1cclxuICAgIGF0dGFjaEZlYXR1cmUoZmVhdHVyZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmZpbmQoZiA9PiBmID09PSBmZWF0dXJlKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGZlYXR1cmUub3JkZXJJbmRleCwgMCwgZmVhdHVyZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPYnNlcnZlcnMoKTtcclxuICAgIH1cclxuICAgIGRldGFjaEZlYXR1cmUoZmVhdHVyZSkge1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSB0aGlzLmZlYXR1cmVzLmZpbHRlcihmID0+IGYgIT09IGZlYXR1cmUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzLmZvckVhY2god2IgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aWRnZXRzID0gd2Iud2lkZ2V0cy5nZXQoZmVhdHVyZSk7XHJcbiAgICAgICAgICAgIGlmICghd2lkZ2V0cylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgd2lkZ2V0cy5mb3JFYWNoKHcgPT4gdy51bm1vdW50KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFRvRG86IGNsb3NlIGFsbCBzdWJzY3JpcHRpb25zIGFuZCBjb25uZWN0aW9uc1xyXG4gICAgfVxyXG4gICAgYXR0YWNoQ29uZmlnKGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IGJ1aWxkZXJzID0gY29uZmlnLm1hcCgoY2ZnKSA9PiBuZXcgd2lkZ2V0c18xLldpZGdldEJ1aWxkZXIoY2ZnLCB0aGlzLl9lbWl0Q29udGV4dENyZWF0ZWQuYmluZCh0aGlzKSkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzLnB1c2goLi4uYnVpbGRlcnMpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlT2JzZXJ2ZXJzKG11dGF0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzLmZvckVhY2goY29udGV4dEJ1aWxkZXIgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dEJ1aWxkZXIuY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkZXN0cm95IGNvbnRleHRzIHRvIHJlbW92ZWQgbm9kZXNcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRDb250ZXh0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgKF9hID0gbXV0YXRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaChtID0+IEFycmF5LmZyb20obS5yZW1vdmVkTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigobikgPT4gbi5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSlcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0Tm9kZXMgPSBBcnJheS5mcm9tKCgoX2EgPSBuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvckFsbChjb250ZXh0QnVpbGRlci5jb250ZXh0U2VsZWN0b3IpKSB8fCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dHMgPSBjb250ZXh0Tm9kZXMubWFwKChuKSA9PiBjb250ZXh0QnVpbGRlci5jb250ZXh0cy5nZXQobikpLmZpbHRlcihlID0+IGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWRDb250ZXh0cy5wdXNoKC4uLmNvbnRleHRzKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkQ29udGV4dHMgJiYgcmVtb3ZlZENvbnRleHRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmNvbnRleHRGaW5pc2hlZChyZW1vdmVkQ29udGV4dHMubWFwKGMgPT4gYy5wYXJzZWQpKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkQ29udGV4dHMubWFwKGMgPT4gYy5wYXJzZWQpLmZvckVhY2goY3R4ID0+IHRoaXMuX2VtaXRDb250ZXh0RGVzdHJveWVkKGN0eCwgY29udGV4dEJ1aWxkZXIuY29udGV4dFR5cGUsIGNvbnRleHRCdWlsZGVyLmNvbnRleHRFdmVudCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIudXBkYXRlQ29udGV4dHModGhpcy5mZWF0dXJlcywgY29udGFpbmVyKTsgLy8gVG9EbzogdGhpbmsgYWJvdXQgaXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBhIG5ldyBjb250YWluZXIgd2FzIG9wZW5lZCwgbm8gb2JzZXJ2ZXIgYXR0YWNoZWQgeWV0XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIgJiYgIWNvbnRleHRCdWlsZGVyLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci51cGRhdGVDb250ZXh0cyh0aGlzLmZlYXR1cmVzLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci5vYnNlcnZlci5vYnNlcnZlKGNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghY29udGFpbmVyICYmIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhIGNvbnRhaW5lciB3YXMgZGVzdHJveWVkLCBkaXNjb25uZWN0IG9ic2VydmVyIHRvb1xyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVXaWRnZXRGYWN0b3J5KFdpZGdldCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHV1aWR2NCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVdpZGdldChXaWRnZXQsIGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnLCBvcmRlciwgY29udGV4dE5vZGUsIGNsYXp6LCBwcm94aWVkU3Vicykge1xyXG4gICAgICAgICAgICAvLyBUb0RvOiBjYWxjdWxhdGUgbm9kZSBmcm9tIGluc1BvaW50ICYgdmlld1xyXG4gICAgICAgICAgICBjb25zdCBpbnNQb2ludCA9IGJ1aWxkZXIuaW5zUG9pbnRzW2luc1BvaW50TmFtZV07XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjb250ZXh0Tm9kZS5xdWVyeVNlbGVjdG9yKGluc1BvaW50LnNlbGVjdG9yKTtcclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgYSB3aWRnZXQgYWxyZWFkeSBleGlzdHMgZm9yIHRoZSBpbnNQb2ludFxyXG4gICAgICAgICAgICBpZiAobm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXp6KS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gYnVpbGRlci5jb250ZXh0cy5nZXQoY29udGV4dE5vZGUpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IG5ldyBzdGF0ZV8xLlN0YXRlKGNvbmZpZywgY29udGV4dC5wYXJzZWQsIGJ1aWxkZXIuY29udGV4dFR5cGUsIGNsYXp6KTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkZ2V0ID0gbmV3IFdpZGdldCgpO1xyXG4gICAgICAgICAgICB3aWRnZXQuc3RhdGUgPSBzdGF0ZS5zdGF0ZTtcclxuICAgICAgICAgICAgc3RhdGUuY2hhbmdlZEhhbmRsZXIgPSAoKSA9PiB3aWRnZXQubW91bnQoKTsgLy8gd2hlbiBkYXRhIGluIHN0YXRlIHdhcyBjaGFuZ2VkLCB0aGVuIHJlcmVuZGVyIGEgd2lkZ2V0XHJcbiAgICAgICAgICAgIHdpZGdldC5tb3VudCgpOyAvLyBUb0RvOiByZW1vdmUgaXQ/XHJcbiAgICAgICAgICAgIHdpZGdldC5lbC5jbGFzc0xpc3QuYWRkKCdkYXBwbGV0LXdpZGdldCcpO1xyXG4gICAgICAgICAgICAvLyBUb0RvOiBmaXggYnVnOiBpbmNvcnJlY3Qgb3JkZXJpbmcgKHJlcHJvZHVjZSBidWcgb24gMyBidXR0b25zKVxyXG4gICAgICAgICAgICBjb25zdCBpbnNlcnRlZEVsZW1lbnRzID0gbm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXBwbGV0LXdpZGdldCcpO1xyXG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWRFbGVtZW50cy5sZW5ndGggPj0gb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKHdpZGdldC5lbCwgaW5zZXJ0ZWRFbGVtZW50c1tvcmRlcl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB3aWRnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoY29uZmlnKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoYnVpbGRlciwgaW5zUG9pbnROYW1lLCBvcmRlciwgY29udGV4dE5vZGUsIHByb3hpZWRTdWJzKSA9PiBjcmVhdGVXaWRnZXQoV2lkZ2V0LCBidWlsZGVyLCBpbnNQb2ludE5hbWUsIGNvbmZpZywgb3JkZXIsIGNvbnRleHROb2RlLCB1dWlkLCBwcm94aWVkU3VicykpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNvbnRleHRDcmVhdGVkKGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0Q3JlYXRlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBvbkNvbnRleHREZXN0cm95ZWQoaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHREZXN0cm95ZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgX2VtaXRDb250ZXh0Q3JlYXRlZChjb250ZXh0LCBjb250ZXh0VHlwZSwgY29udGV4dEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dENyZWF0ZWRIYW5kbGVycy5mb3JFYWNoKGggPT4gaChjb250ZXh0LCBjb250ZXh0VHlwZSkpO1xyXG4gICAgICAgIHRoaXMuX2VtaXRDb250ZXh0RXZlbnQoY29udGV4dCwgY29udGV4dFR5cGUsIGNvbnRleHRFdmVudCwgJ2NyZWF0ZScpO1xyXG4gICAgfVxyXG4gICAgX2VtaXRDb250ZXh0RGVzdHJveWVkKGNvbnRleHQsIGNvbnRleHRUeXBlLCBjb250ZXh0RXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0RGVzdHJveWVkSGFuZGxlcnMuZm9yRWFjaChoID0+IGgoY29udGV4dCwgY29udGV4dFR5cGUpKTtcclxuICAgICAgICB0aGlzLl9lbWl0Q29udGV4dEV2ZW50KGNvbnRleHQsIGNvbnRleHRUeXBlLCBjb250ZXh0RXZlbnQsICdkZXN0cm95Jyk7XHJcbiAgICB9XHJcbiAgICBfZW1pdENvbnRleHRFdmVudChjb250ZXh0LCBjb250ZXh0VHlwZSwgY29udGV4dEV2ZW50LCBvcGVyYXRpb24pIHtcclxuICAgICAgICBjb25zdCBldmVudCA9IHtcclxuICAgICAgICAgICAgb3BlcmF0aW9uLFxyXG4gICAgICAgICAgICB0b3BpYzogY29udGV4dC5pZCxcclxuICAgICAgICAgICAgY29udGV4dFR5cGUsXHJcbiAgICAgICAgICAgIGNvbnRleHRJZDogY29udGV4dC5pZCxcclxuICAgICAgICAgICAgY29udGV4dFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChjb25zdCBmZWF0dXJlIG9mIHRoaXMuZmVhdHVyZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlcnMgPSBmZWF0dXJlLmNvbmZpZ1tjb250ZXh0RXZlbnRdO1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaGFuZGxlcnMpKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goaCA9PiBoKGV2ZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5EeW5hbWljQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcclxuXSwgRHluYW1pY0FkYXB0ZXIpO1xyXG5leHBvcnRzLkR5bmFtaWNBZGFwdGVyID0gRHluYW1pY0FkYXB0ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgY3R4LCBjb250ZXh0VHlwZSwgX2NsYXp6KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0VHlwZSA9IGNvbnRleHRUeXBlO1xyXG4gICAgICAgIHRoaXMuX2NsYXp6ID0gX2NsYXp6O1xyXG4gICAgICAgIHRoaXMuSU5JVElBTF9TVEFURSA9IFwiREVGQVVMVFwiO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZU5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5fY2FjaGUgPSB7fTtcclxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgICAgICBnZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PSAnc3RhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5fY3VycmVudFN0YXRlTmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2NsYXp6JylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuX2NsYXp6OyAvLyBUb0RvOiByZW1vdmUgaXRcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2N0eCcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLmN0eDtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3NldFN0YXRlJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuc2V0U3RhdGUuYmluZChtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuX2N1cnJlbnRTdGF0ZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/IG1lLl9jYWNoZVttZS5fY3VycmVudFN0YXRlTmFtZV1bcHJvcGVydHldXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtZS5fY2FjaGVbcHJvcGVydHldO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICdzdGF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZS5zZXRTdGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuY2hhbmdlZEhhbmRsZXIgJiYgbWUuY2hhbmdlZEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG1lLmNvbmZpZ1ttZS5JTklUSUFMX1NUQVRFXSlcclxuICAgICAgICAgICAgbWUuc2V0U3RhdGUobWUuSU5JVElBTF9TVEFURSk7XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZShzdGF0ZU5hbWUpIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTZXQgc3RhdGUgZnJvbSAtIHRvOiBcIiwgdGhpcy5fY3VycmVudFN0YXRlTmFtZSxzdGF0ZU5hbWUpICAgICBcclxuICAgICAgICAgICAgaWYgKHN0YXRlTmFtZSA9PSB0aGlzLl9jdXJyZW50U3RhdGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBOT1Agc3RhdGUgdHJhbnNpdGlvbiBcIiR7c3RhdGVOYW1lfVwiLiBTa2lwcGluZy4uLmApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5fY2FjaGVbc3RhdGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVbc3RhdGVOYW1lXSA9IHRoaXMuY3JlYXRlTmV3U3RhdGVGcm9tQ29uZmlnKHN0YXRlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlTmFtZSA9IHN0YXRlTmFtZTtcclxuICAgICAgICAgICAgc3RhdGVOYW1lID0gdGhpcy5fY2FjaGVbc3RhdGVOYW1lXS5ORVhUO1xyXG4gICAgICAgIH0gd2hpbGUgKHN0YXRlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkSGFuZGxlciAmJiB0aGlzLmNoYW5nZWRIYW5kbGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW3RoaXMuX2N1cnJlbnRTdGF0ZU5hbWVdO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlTmV3U3RhdGVGcm9tQ29uZmlnKHN0YXRlTmFtZSkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHt9O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1tzdGF0ZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUF1dG9Qcm9wZXJ0eSA9IChhcENvbmZpZywgc2V0dGVyKSA9PiBcclxuICAgICAgICAgICAgLy9Ub0RvOiBtb3ZlIGFkZEF1dG9Qcm9wZXJ0eSB0byBhcENwbmZpZz8gXHJcbiAgICAgICAgICAgIGFwQ29uZmlnLmNvbm4uYWRkQXV0b1Byb3BlcnR5KGFwQ29uZmlnLCBzZXR0ZXIsIHRoaXMuY3R4KTtcclxuICAgICAgICAgICAgY29uc3QgaXNBdXRvUHJvcGVydHlDb25mID0gKHZhbHVlKSA9PiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbm4gJiYgdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZ1tzdGF0ZU5hbWVdKS5mb3JFYWNoKChba2V5LCB2YWx1ZU9yQXBDb25mXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9ICFpc0F1dG9Qcm9wZXJ0eUNvbmYodmFsdWVPckFwQ29uZilcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbHVlT3JBcENvbmZcclxuICAgICAgICAgICAgICAgICAgICA6IGNyZWF0ZUF1dG9Qcm9wZXJ0eSh2YWx1ZU9yQXBDb25mLCAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVOYW1lID09IG1lLl9jdXJyZW50U3RhdGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNoYW5nZWRIYW5kbGVyICYmIG1lLmNoYW5nZWRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgc3RhdGUgdGVtcGxhdGUgd2l0aCBuYW1lIFwiJHtzdGF0ZU5hbWV9XCIgZG9lc24ndCBleGlzdC4gU2tpcHBpbmcgc3RhdGUgdXBkYXRpbmcuLi5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IC8vIGNsYXNzIFN0YXRlXHJcbmV4cG9ydHMuU3RhdGUgPSBTdGF0ZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgV2lkZ2V0QnVpbGRlciB7XHJcbiAgICAvL1RvRG86IHdpZGdldHNcclxuICAgIGNvbnN0cnVjdG9yKHdpZGdldEJ1aWxkZXJDb25maWcsIF9lbWl0Q29udGV4dENyZWF0ZWQpIHtcclxuICAgICAgICB0aGlzLl9lbWl0Q29udGV4dENyZWF0ZWQgPSBfZW1pdENvbnRleHRDcmVhdGVkO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB3aWRnZXRCdWlsZGVyQ29uZmlnKTtcclxuICAgIH1cclxuICAgIC8vIGB1cGRhdGVDb250ZXh0cygpYCBpcyBjYWxsZWQgd2hlbiBuZXcgY29udGV4dCBpcyBmb3VuZC5cclxuICAgIHVwZGF0ZUNvbnRleHRzKGZlYXR1cmVzLCBjb250YWluZXIsIG11dGF0aW9ucykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBjb250ZXh0Tm9kZXMgPSBBcnJheS5mcm9tKCgoX2EgPSBjb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGV4dFNlbGVjdG9yKSkgfHwgW10pO1xyXG4gICAgICAgIGlmIChjb250ZXh0Tm9kZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbmV3UGFyc2VkQ29udGV4dHMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRleHROb2RlIG9mIGNvbnRleHROb2Rlcykge1xyXG4gICAgICAgICAgICBjb25zdCBpc05ldyA9ICF0aGlzLmNvbnRleHRzLmhhcyhjb250ZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBpc05ldyA/IHsgcGFyc2VkOiB0aGlzLmNvbnRleHRCdWlsZGVyKGNvbnRleHROb2RlKSwgZmVhdHVyZXM6IG5ldyBNYXAoKSB9IDogdGhpcy5jb250ZXh0cy5nZXQoY29udGV4dE5vZGUpO1xyXG4gICAgICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpc05ldyBjaGVja2luZ1xyXG4gICAgICAgICAgICBpZiAoaXNOZXcpIHtcclxuICAgICAgICAgICAgICAgIG5ld1BhcnNlZENvbnRleHRzLnB1c2goY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0Q29udGV4dENyZWF0ZWQoY29udGV4dC5wYXJzZWQsIHRoaXMuY29udGV4dFR5cGUsIHRoaXMuY29udGV4dEV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlID0gZmVhdHVyZXNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlSW5mbyA9IGNvbnRleHQuZmVhdHVyZXMuZ2V0KGZlYXR1cmUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmZWF0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVJbmZvID0geyBwcm94aWVkU3Viczoge30sIGNvbm5lY3Rpb25zOiBbXSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb25zID0gZmVhdHVyZS5jb25maWcuY29ubmVjdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIChjb25zdCBjb25uZWN0aW9uTmFtZSBpbiBjb25uZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBzZXR0ZXJzQnlOYW1lcyA9IHt9OyAvLyBUb0RvOiBtZW1vcnkgbGVha3M/XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZlYXR1cmVJbmZvLnByb3hpZWRTdWJzW2Nvbm5lY3Rpb25OYW1lXSA9IG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZ2V0KHRhcmdldCwgcHJvcE5hbWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRhdGFzb3VyY2U6IChzZXR0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICghc2V0dGVyc0J5TmFtZXNbcHJvcE5hbWVdKSBzZXR0ZXJzQnlOYW1lc1twcm9wTmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNldHRlcnNCeU5hbWVzW3Byb3BOYW1lXS5wdXNoKHNldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGNvbm5lY3Rpb246IGFueSA9IGNvbm5lY3Rpb25zW2Nvbm5lY3Rpb25OYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY29ubmVjdGlvbi5zdWJzY3JpYmUoY29udGV4dC5wYXJzZWQuaWQsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNldHRlcnNCeU5hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3Qgc2V0dGVycyA9IHNldHRlcnNCeU5hbWVzW2tleV0gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGVycy5mb3JFYWNoKHNldCA9PiBzZXQoZGF0YVtrZXldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmZWF0dXJlSW5mby5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5mZWF0dXJlcy5zZXQoZmVhdHVyZSwgZmVhdHVyZUluZm8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc05ldykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5zZXQoY29udGV4dE5vZGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmUgPSBmZWF0dXJlc1tpXTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5zUG9pbnROYW1lIGluIHRoaXMuaW5zUG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB3aWRnZXRDb25zdHJ1Y3RvciBvZiBmZWF0dXJlLmNvbmZpZ1tpbnNQb2ludE5hbWVdIHx8IFtdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHRJZHMgPSBmZWF0dXJlLmNvbnRleHRJZHMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0SWRzLmxlbmd0aCA9PT0gMCB8fCBjb250ZXh0SWRzLmluZGV4T2YoY29udGV4dC5wYXJzZWQuaWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0ZWRXaWRnZXQgPSB3aWRnZXRDb25zdHJ1Y3Rvcih0aGlzLCBpbnNQb2ludE5hbWUsIGksIGNvbnRleHROb2RlLCBjb250ZXh0LmZlYXR1cmVzLmdldChmZWF0dXJlKS5wcm94aWVkU3Vicyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluc2VydGVkV2lkZ2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJlZFdpZGdldHMgPSB0aGlzLndpZGdldHMuZ2V0KGZlYXR1cmUpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFdpZGdldHMucHVzaChpbnNlcnRlZFdpZGdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZGdldHMuc2V0KGZlYXR1cmUsIHJlZ2lzdGVyZWRXaWRnZXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmNvbnRleHRTdGFydGVkKG5ld1BhcnNlZENvbnRleHRzLm1hcCgoY3R4KSA9PiBjdHgucGFyc2VkKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1BhcnNlZENvbnRleHRzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuV2lkZ2V0QnVpbGRlciA9IFdpZGdldEJ1aWxkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=