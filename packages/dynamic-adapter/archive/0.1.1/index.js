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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLCtC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHdpZGdldHNfMSA9IHJlcXVpcmUoXCIuL3dpZGdldHNcIik7XHJcbmNvbnN0IHN0YXRlXzEgPSByZXF1aXJlKFwiLi9zdGF0ZVwiKTtcclxubGV0IER5bmFtaWNBZGFwdGVyID0gY2xhc3MgRHluYW1pY0FkYXB0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fY29udGV4dENyZWF0ZWRIYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHREZXN0cm95ZWRIYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudCB8fCAhd2luZG93IHx8ICFNdXRhdGlvbk9ic2VydmVyKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRG9jdW1lbnQgb3IgTXV0YXRpb25PYnNlcnZlciBpcyBub3QgYXZhaWxhYmxlLicpO1xyXG4gICAgICAgIGNvbnN0IE9CU0VSVkVSX0NPTkZJRyA9IHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4gdGhpcy51cGRhdGVPYnNlcnZlcnMobXV0YXRpb25zKSk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIE9CU0VSVkVSX0NPTkZJRyk7XHJcbiAgICB9XHJcbiAgICBhdHRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcclxuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5maW5kKGYgPT4gZiA9PT0gZmVhdHVyZSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShmZWF0dXJlLm9yZGVySW5kZXgsIDAsIGZlYXR1cmUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT2JzZXJ2ZXJzKCk7XHJcbiAgICB9XHJcbiAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzID0gdGhpcy5mZWF0dXJlcy5maWx0ZXIoZiA9PiBmICE9PSBmZWF0dXJlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycy5mb3JFYWNoKHdiID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2lkZ2V0cyA9IHdiLndpZGdldHMuZ2V0KGZlYXR1cmUpO1xyXG4gICAgICAgICAgICBpZiAoIXdpZGdldHMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHdpZGdldHMuZm9yRWFjaCh3ID0+IHcudW5tb3VudCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBUb0RvOiBjbG9zZSBhbGwgc3Vic2NyaXB0aW9ucyBhbmQgY29ubmVjdGlvbnNcclxuICAgIH1cclxuICAgIGF0dGFjaENvbmZpZyhjb25maWcpIHtcclxuICAgICAgICBjb25zdCBidWlsZGVycyA9IGNvbmZpZy5tYXAoKGNmZykgPT4gbmV3IHdpZGdldHNfMS5XaWRnZXRCdWlsZGVyKGNmZywgdGhpcy5fZW1pdENvbnRleHRDcmVhdGVkLmJpbmQodGhpcykpKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycy5wdXNoKC4uLmJ1aWxkZXJzKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZU9ic2VydmVycyhtdXRhdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycy5mb3JFYWNoKGNvbnRleHRCdWlsZGVyID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRleHRCdWlsZGVyLmNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVzdHJveSBjb250ZXh0cyB0byByZW1vdmVkIG5vZGVzXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVkQ29udGV4dHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIChfYSA9IG11dGF0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2gobSA9PiBBcnJheS5mcm9tKG0ucmVtb3ZlZE5vZGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKG4pID0+IG4ubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dE5vZGVzID0gQXJyYXkuZnJvbSgoKF9hID0gbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3JBbGwoY29udGV4dEJ1aWxkZXIuY29udGV4dFNlbGVjdG9yKSkgfHwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHRzID0gY29udGV4dE5vZGVzLm1hcCgobikgPT4gY29udGV4dEJ1aWxkZXIuY29udGV4dHMuZ2V0KG4pKS5maWx0ZXIoZSA9PiBlKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkQ29udGV4dHMucHVzaCguLi5jb250ZXh0cyk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZENvbnRleHRzICYmIHJlbW92ZWRDb250ZXh0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5jb250ZXh0RmluaXNoZWQocmVtb3ZlZENvbnRleHRzLm1hcChjID0+IGMucGFyc2VkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZENvbnRleHRzLm1hcChjID0+IGMucGFyc2VkKS5mb3JFYWNoKGN0eCA9PiB0aGlzLl9lbWl0Q29udGV4dERlc3Ryb3llZChjdHgsIGNvbnRleHRCdWlsZGVyLmNvbnRleHRUeXBlLCBjb250ZXh0QnVpbGRlci5jb250ZXh0RXZlbnQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLnVwZGF0ZUNvbnRleHRzKHRoaXMuZmVhdHVyZXMsIGNvbnRhaW5lcik7IC8vIFRvRG86IHRoaW5rIGFib3V0IGl0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYSBuZXcgY29udGFpbmVyIHdhcyBvcGVuZWQsIG5vIG9ic2VydmVyIGF0dGFjaGVkIHlldFxyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyICYmICFjb250ZXh0QnVpbGRlci5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIudXBkYXRlQ29udGV4dHModGhpcy5mZWF0dXJlcywgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXIsIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIWNvbnRhaW5lciAmJiBjb250ZXh0QnVpbGRlci5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgLy8gYSBjb250YWluZXIgd2FzIGRlc3Ryb3llZCwgZGlzY29ubmVjdCBvYnNlcnZlciB0b29cclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlV2lkZ2V0RmFjdG9yeShXaWRnZXQpIHtcclxuICAgICAgICBmdW5jdGlvbiB1dWlkdjQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVXaWRnZXQoV2lkZ2V0LCBidWlsZGVyLCBpbnNQb2ludE5hbWUsIGNvbmZpZywgb3JkZXIsIGNvbnRleHROb2RlLCBjbGF6eiwgcHJveGllZFN1YnMpIHtcclxuICAgICAgICAgICAgLy8gVG9EbzogY2FsY3VsYXRlIG5vZGUgZnJvbSBpbnNQb2ludCAmIHZpZXdcclxuICAgICAgICAgICAgY29uc3QgaW5zUG9pbnQgPSBidWlsZGVyLmluc1BvaW50c1tpbnNQb2ludE5hbWVdO1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gY29udGV4dE5vZGUucXVlcnlTZWxlY3RvcihpbnNQb2ludC5zZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGEgd2lkZ2V0IGFscmVhZHkgZXhpc3RzIGZvciB0aGUgaW5zUG9pbnRcclxuICAgICAgICAgICAgaWYgKG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGF6eikubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGJ1aWxkZXIuY29udGV4dHMuZ2V0KGNvbnRleHROb2RlKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgc3RhdGVfMS5TdGF0ZShjb25maWcsIGNvbnRleHQucGFyc2VkLCBidWlsZGVyLmNvbnRleHRUeXBlLCBjbGF6eik7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZGdldCA9IG5ldyBXaWRnZXQoKTtcclxuICAgICAgICAgICAgd2lkZ2V0LnN0YXRlID0gc3RhdGUuc3RhdGU7XHJcbiAgICAgICAgICAgIHN0YXRlLmNoYW5nZWRIYW5kbGVyID0gKCkgPT4gd2lkZ2V0Lm1vdW50KCk7IC8vIHdoZW4gZGF0YSBpbiBzdGF0ZSB3YXMgY2hhbmdlZCwgdGhlbiByZXJlbmRlciBhIHdpZGdldFxyXG4gICAgICAgICAgICB3aWRnZXQubW91bnQoKTsgLy8gVG9EbzogcmVtb3ZlIGl0P1xyXG4gICAgICAgICAgICB3aWRnZXQuZWwuY2xhc3NMaXN0LmFkZCgnZGFwcGxldC13aWRnZXQnKTtcclxuICAgICAgICAgICAgLy8gVG9EbzogZml4IGJ1ZzogaW5jb3JyZWN0IG9yZGVyaW5nIChyZXByb2R1Y2UgYnVnIG9uIDMgYnV0dG9ucylcclxuICAgICAgICAgICAgY29uc3QgaW5zZXJ0ZWRFbGVtZW50cyA9IG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFwcGxldC13aWRnZXQnKTtcclxuICAgICAgICAgICAgaWYgKGluc2VydGVkRWxlbWVudHMubGVuZ3RoID49IG9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIGluc2VydGVkRWxlbWVudHNbb3JkZXJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQod2lkZ2V0LmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gd2lkZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgb3JkZXIsIGNvbnRleHROb2RlLCBwcm94aWVkU3VicykgPT4gY3JlYXRlV2lkZ2V0KFdpZGdldCwgYnVpbGRlciwgaW5zUG9pbnROYW1lLCBjb25maWcsIG9yZGVyLCBjb250ZXh0Tm9kZSwgdXVpZCwgcHJveGllZFN1YnMpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25Db250ZXh0Q3JlYXRlZChoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dENyZWF0ZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgb25Db250ZXh0RGVzdHJveWVkKGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0RGVzdHJveWVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICAgIF9lbWl0Q29udGV4dENyZWF0ZWQoY29udGV4dCwgY29udGV4dFR5cGUsIGNvbnRleHRFdmVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHRDcmVhdGVkSGFuZGxlcnMuZm9yRWFjaChoID0+IGgoY29udGV4dCwgY29udGV4dFR5cGUpKTtcclxuICAgICAgICB0aGlzLl9lbWl0Q29udGV4dEV2ZW50KGNvbnRleHQsIGNvbnRleHRUeXBlLCBjb250ZXh0RXZlbnQsICdjcmVhdGUnKTtcclxuICAgIH1cclxuICAgIF9lbWl0Q29udGV4dERlc3Ryb3llZChjb250ZXh0LCBjb250ZXh0VHlwZSwgY29udGV4dEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dERlc3Ryb3llZEhhbmRsZXJzLmZvckVhY2goaCA9PiBoKGNvbnRleHQsIGNvbnRleHRUeXBlKSk7XHJcbiAgICAgICAgdGhpcy5fZW1pdENvbnRleHRFdmVudChjb250ZXh0LCBjb250ZXh0VHlwZSwgY29udGV4dEV2ZW50LCAnZGVzdHJveScpO1xyXG4gICAgfVxyXG4gICAgX2VtaXRDb250ZXh0RXZlbnQoY29udGV4dCwgY29udGV4dFR5cGUsIGNvbnRleHRFdmVudCwgb3BlcmF0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbixcclxuICAgICAgICAgICAgdG9waWM6IGNvbnRleHQuaWQsXHJcbiAgICAgICAgICAgIGNvbnRleHRUeXBlLFxyXG4gICAgICAgICAgICBjb250ZXh0SWQ6IGNvbnRleHQuaWQsXHJcbiAgICAgICAgICAgIGNvbnRleHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgZmVhdHVyZSBvZiB0aGlzLmZlYXR1cmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJzID0gZmVhdHVyZS5jb25maWdbY29udGV4dEV2ZW50XTtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGhhbmRsZXJzKSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGggPT4gaChldmVudCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuRHluYW1pY0FkYXB0ZXIgPSBfX2RlY29yYXRlKFtcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXHJcbl0sIER5bmFtaWNBZGFwdGVyKTtcclxuZXhwb3J0cy5EeW5hbWljQWRhcHRlciA9IER5bmFtaWNBZGFwdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGN0eCwgY29udGV4dFR5cGUsIF9jbGF6eikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMuY29udGV4dFR5cGUgPSBjb250ZXh0VHlwZTtcclxuICAgICAgICB0aGlzLl9jbGF6eiA9IF9jbGF6ejtcclxuICAgICAgICB0aGlzLklOSVRJQUxfU1RBVEUgPSBcIkRFRkFVTFRcIjtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U3RhdGVOYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX2NhY2hlID0ge307XHJcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT0gJ3N0YXRlJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuX2N1cnJlbnRTdGF0ZU5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICdjbGF6eicpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLl9jbGF6ejsgLy8gVG9EbzogcmVtb3ZlIGl0XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICdjdHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5jdHg7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICdzZXRTdGF0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLnNldFN0YXRlLmJpbmQobWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lLl9jdXJyZW50U3RhdGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtZS5fY2FjaGVbbWUuX2N1cnJlbnRTdGF0ZU5hbWVdW3Byb3BlcnR5XVxyXG4gICAgICAgICAgICAgICAgICAgIDogbWUuX2NhY2hlW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnc3RhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0U3RhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLl9jdXJyZW50U3RhdGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWNoZVttZS5fY3VycmVudFN0YXRlTmFtZV1bcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FjaGVbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1lLmNoYW5nZWRIYW5kbGVyICYmIG1lLmNoYW5nZWRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChtZS5jb25maWdbbWUuSU5JVElBTF9TVEFURV0pXHJcbiAgICAgICAgICAgIG1lLnNldFN0YXRlKG1lLklOSVRJQUxfU1RBVEUpO1xyXG4gICAgfVxyXG4gICAgc2V0U3RhdGUoc3RhdGVOYW1lKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiU2V0IHN0YXRlIGZyb20gLSB0bzogXCIsIHRoaXMuX2N1cnJlbnRTdGF0ZU5hbWUsc3RhdGVOYW1lKSAgICAgXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZU5hbWUgPT0gdGhpcy5fY3VycmVudFN0YXRlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgTk9QIHN0YXRlIHRyYW5zaXRpb24gXCIke3N0YXRlTmFtZX1cIi4gU2tpcHBpbmcuLi5gKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuX2NhY2hlW3N0YXRlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlW3N0YXRlTmFtZV0gPSB0aGlzLmNyZWF0ZU5ld1N0YXRlRnJvbUNvbmZpZyhzdGF0ZU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZU5hbWUgPSBzdGF0ZU5hbWU7XHJcbiAgICAgICAgICAgIHN0YXRlTmFtZSA9IHRoaXMuX2NhY2hlW3N0YXRlTmFtZV0uTkVYVDtcclxuICAgICAgICB9IHdoaWxlIChzdGF0ZU5hbWUpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZEhhbmRsZXIgJiYgdGhpcy5jaGFuZ2VkSGFuZGxlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZVt0aGlzLl9jdXJyZW50U3RhdGVOYW1lXTtcclxuICAgIH1cclxuICAgIGNyZWF0ZU5ld1N0YXRlRnJvbUNvbmZpZyhzdGF0ZU5hbWUpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSB7fTtcclxuICAgICAgICBpZiAodGhpcy5jb25maWdbc3RhdGVOYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVBdXRvUHJvcGVydHkgPSAoYXBDb25maWcsIHNldHRlcikgPT4gXHJcbiAgICAgICAgICAgIC8vVG9EbzogbW92ZSBhZGRBdXRvUHJvcGVydHkgdG8gYXBDcG5maWc/IFxyXG4gICAgICAgICAgICBhcENvbmZpZy5jb25uLmFkZEF1dG9Qcm9wZXJ0eShhcENvbmZpZywgc2V0dGVyLCB0aGlzLmN0eCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQXV0b1Byb3BlcnR5Q29uZiA9ICh2YWx1ZSkgPT4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25uICYmIHZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lID0gdGhpcztcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5jb25maWdbc3RhdGVOYW1lXSkuZm9yRWFjaCgoW2tleSwgdmFsdWVPckFwQ29uZl0pID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSAhaXNBdXRvUHJvcGVydHlDb25mKHZhbHVlT3JBcENvbmYpXHJcbiAgICAgICAgICAgICAgICAgICAgPyB2YWx1ZU9yQXBDb25mXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjcmVhdGVBdXRvUHJvcGVydHkodmFsdWVPckFwQ29uZiwgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlTmFtZSA9PSBtZS5fY3VycmVudFN0YXRlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5jaGFuZ2VkSGFuZGxlciAmJiBtZS5jaGFuZ2VkSGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIHN0YXRlIHRlbXBsYXRlIHdpdGggbmFtZSBcIiR7c3RhdGVOYW1lfVwiIGRvZXNuJ3QgZXhpc3QuIFNraXBwaW5nIHN0YXRlIHVwZGF0aW5nLi4uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSAvLyBjbGFzcyBTdGF0ZVxyXG5leHBvcnRzLlN0YXRlID0gU3RhdGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFdpZGdldEJ1aWxkZXIge1xyXG4gICAgLy9Ub0RvOiB3aWRnZXRzXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWRnZXRCdWlsZGVyQ29uZmlnLCBfZW1pdENvbnRleHRDcmVhdGVkKSB7XHJcbiAgICAgICAgdGhpcy5fZW1pdENvbnRleHRDcmVhdGVkID0gX2VtaXRDb250ZXh0Q3JlYXRlZDtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLndpZGdldHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgd2lkZ2V0QnVpbGRlckNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICAvLyBgdXBkYXRlQ29udGV4dHMoKWAgaXMgY2FsbGVkIHdoZW4gbmV3IGNvbnRleHQgaXMgZm91bmQuXHJcbiAgICB1cGRhdGVDb250ZXh0cyhmZWF0dXJlcywgY29udGFpbmVyLCBtdXRhdGlvbnMpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3QgY29udGV4dE5vZGVzID0gQXJyYXkuZnJvbSgoKF9hID0gY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRleHRTZWxlY3RvcikpIHx8IFtdKTtcclxuICAgICAgICBpZiAoY29udGV4dE5vZGVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IG5ld1BhcnNlZENvbnRleHRzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250ZXh0Tm9kZSBvZiBjb250ZXh0Tm9kZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNOZXcgPSAhdGhpcy5jb250ZXh0cy5oYXMoY29udGV4dE5vZGUpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gaXNOZXcgPyB7IHBhcnNlZDogdGhpcy5jb250ZXh0QnVpbGRlcihjb250ZXh0Tm9kZSksIGZlYXR1cmVzOiBuZXcgTWFwKCkgfSA6IHRoaXMuY29udGV4dHMuZ2V0KGNvbnRleHROb2RlKTtcclxuICAgICAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXNOZXcgY2hlY2tpbmdcclxuICAgICAgICAgICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQYXJzZWRDb250ZXh0cy5wdXNoKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdENvbnRleHRDcmVhdGVkKGNvbnRleHQucGFyc2VkLCB0aGlzLmNvbnRleHRUeXBlLCB0aGlzLmNvbnRleHRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZUluZm8gPSBjb250ZXh0LmZlYXR1cmVzLmdldChmZWF0dXJlKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmVhdHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlSW5mbyA9IHsgcHJveGllZFN1YnM6IHt9LCBjb25uZWN0aW9uczogW10gfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0aW9ucyA9IGZlYXR1cmUuY29uZmlnLmNvbm5lY3Rpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAoY29uc3QgY29ubmVjdGlvbk5hbWUgaW4gY29ubmVjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgc2V0dGVyc0J5TmFtZXMgPSB7fTsgLy8gVG9EbzogbWVtb3J5IGxlYWtzP1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmZWF0dXJlSW5mby5wcm94aWVkU3Vic1tjb25uZWN0aW9uTmFtZV0gPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGdldCh0YXJnZXQsIHByb3BOYW1lLCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBkYXRhc291cmNlOiAoc2V0dGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoIXNldHRlcnNCeU5hbWVzW3Byb3BOYW1lXSkgc2V0dGVyc0J5TmFtZXNbcHJvcE5hbWVdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBzZXR0ZXJzQnlOYW1lc1twcm9wTmFtZV0ucHVzaChzZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBjb25uZWN0aW9uOiBhbnkgPSBjb25uZWN0aW9uc1tjb25uZWN0aW9uTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGNvbm5lY3Rpb24uc3Vic2NyaWJlKGNvbnRleHQucGFyc2VkLmlkLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzZXR0ZXJzQnlOYW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHNldHRlcnMgPSBzZXR0ZXJzQnlOYW1lc1trZXldIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNldHRlcnMuZm9yRWFjaChzZXQgPT4gc2V0KGRhdGFba2V5XSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmVhdHVyZUluZm8uc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmVhdHVyZXMuc2V0KGZlYXR1cmUsIGZlYXR1cmVJbmZvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNOZXcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dHMuc2V0KGNvbnRleHROb2RlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlID0gZmVhdHVyZXNbaV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGluc1BvaW50TmFtZSBpbiB0aGlzLmluc1BvaW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgd2lkZ2V0Q29uc3RydWN0b3Igb2YgZmVhdHVyZS5jb25maWdbaW5zUG9pbnROYW1lXSB8fCBbXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0SWRzID0gZmVhdHVyZS5jb250ZXh0SWRzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dElkcy5sZW5ndGggPT09IDAgfHwgY29udGV4dElkcy5pbmRleE9mKGNvbnRleHQucGFyc2VkLmlkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydGVkV2lkZ2V0ID0gd2lkZ2V0Q29uc3RydWN0b3IodGhpcywgaW5zUG9pbnROYW1lLCBpLCBjb250ZXh0Tm9kZSwgY29udGV4dC5mZWF0dXJlcy5nZXQoZmVhdHVyZSkucHJveGllZFN1YnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnNlcnRlZFdpZGdldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lzdGVyZWRXaWRnZXRzID0gdGhpcy53aWRnZXRzLmdldChmZWF0dXJlKSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRXaWRnZXRzLnB1c2goaW5zZXJ0ZWRXaWRnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aWRnZXRzLnNldChmZWF0dXJlLCByZWdpc3RlcmVkV2lkZ2V0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQ29yZS5jb250ZXh0U3RhcnRlZChuZXdQYXJzZWRDb250ZXh0cy5tYXAoKGN0eCkgPT4gY3R4LnBhcnNlZCkpO1xyXG4gICAgICAgIHJldHVybiBuZXdQYXJzZWRDb250ZXh0cztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLldpZGdldEJ1aWxkZXIgPSBXaWRnZXRCdWlsZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9