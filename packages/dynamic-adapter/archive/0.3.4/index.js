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
            widget.insPointName = insPointName;
            state.changedHandler = () => widget.mount(); // when data in state was changed, then rerender a widget
            widget.mount(); // ToDo: remove it?
            widget.el.classList.add('dapplet-widget');
            // ToDo: fix bug: incorrect ordering (reproduce bug on 3 buttons)
            const insertedElements = node.getElementsByClassName('dapplet-widget');
            if (insertedElements.length > 0 && insertedElements.length >= order) {
                node.insertBefore(widget.el, insertedElements[order]);
            }
            else {
                if (insPoint.insert === undefined || insPoint.insert === 'end') {
                    node.appendChild(widget.el);
                }
                else if (insPoint.insert === 'begin') {
                    node.insertBefore(widget.el, node.firstChild);
                }
                else {
                    console.error('Invalid "insert" value in the insertion point config. The possible values are "begin" or "end".');
                }
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
                if (property === 'state')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLCtC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QixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHdpZGdldHNfMSA9IHJlcXVpcmUoXCIuL3dpZGdldHNcIik7XHJcbmNvbnN0IHN0YXRlXzEgPSByZXF1aXJlKFwiLi9zdGF0ZVwiKTtcclxubGV0IER5bmFtaWNBZGFwdGVyID0gY2xhc3MgRHluYW1pY0FkYXB0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fY29udGV4dENyZWF0ZWRIYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHREZXN0cm95ZWRIYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudCB8fCAhd2luZG93IHx8ICFNdXRhdGlvbk9ic2VydmVyKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRG9jdW1lbnQgb3IgTXV0YXRpb25PYnNlcnZlciBpcyBub3QgYXZhaWxhYmxlLicpO1xyXG4gICAgICAgIGNvbnN0IE9CU0VSVkVSX0NPTkZJRyA9IHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4gdGhpcy51cGRhdGVPYnNlcnZlcnMobXV0YXRpb25zKSk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIE9CU0VSVkVSX0NPTkZJRyk7XHJcbiAgICB9XHJcbiAgICBhdHRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcclxuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5maW5kKGYgPT4gZiA9PT0gZmVhdHVyZSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShmZWF0dXJlLm9yZGVySW5kZXgsIDAsIGZlYXR1cmUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT2JzZXJ2ZXJzKCk7XHJcbiAgICB9XHJcbiAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcclxuICAgICAgICB0aGlzLmZlYXR1cmVzID0gdGhpcy5mZWF0dXJlcy5maWx0ZXIoZiA9PiBmICE9PSBmZWF0dXJlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycy5mb3JFYWNoKHdiID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2lkZ2V0cyA9IHdiLndpZGdldHMuZ2V0KGZlYXR1cmUpO1xyXG4gICAgICAgICAgICBpZiAoIXdpZGdldHMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHdpZGdldHMuZm9yRWFjaCh3ID0+IHcudW5tb3VudCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBUb0RvOiBjbG9zZSBhbGwgc3Vic2NyaXB0aW9ucyBhbmQgY29ubmVjdGlvbnNcclxuICAgIH1cclxuICAgIGF0dGFjaENvbmZpZyhjb25maWcpIHtcclxuICAgICAgICBjb25zdCBidWlsZGVycyA9IGNvbmZpZy5tYXAoKGNmZykgPT4gbmV3IHdpZGdldHNfMS5XaWRnZXRCdWlsZGVyKGNmZywgdGhpcy5fZW1pdENvbnRleHRDcmVhdGVkLmJpbmQodGhpcykpKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycy5wdXNoKC4uLmJ1aWxkZXJzKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZU9ic2VydmVycyhtdXRhdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycy5mb3JFYWNoKGNvbnRleHRCdWlsZGVyID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRleHRCdWlsZGVyLmNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVzdHJveSBjb250ZXh0cyB0byByZW1vdmVkIG5vZGVzXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVkQ29udGV4dHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIChfYSA9IG11dGF0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2gobSA9PiBBcnJheS5mcm9tKG0ucmVtb3ZlZE5vZGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKG4pID0+IG4ubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dE5vZGVzID0gQXJyYXkuZnJvbSgoKF9hID0gbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3JBbGwoY29udGV4dEJ1aWxkZXIuY29udGV4dFNlbGVjdG9yKSkgfHwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHRzID0gY29udGV4dE5vZGVzLm1hcCgobikgPT4gY29udGV4dEJ1aWxkZXIuY29udGV4dHMuZ2V0KG4pKS5maWx0ZXIoZSA9PiBlKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkQ29udGV4dHMucHVzaCguLi5jb250ZXh0cyk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZENvbnRleHRzICYmIHJlbW92ZWRDb250ZXh0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5jb250ZXh0RmluaXNoZWQocmVtb3ZlZENvbnRleHRzLm1hcChjID0+IGMucGFyc2VkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZENvbnRleHRzLm1hcChjID0+IGMucGFyc2VkKS5mb3JFYWNoKGN0eCA9PiB0aGlzLl9lbWl0Q29udGV4dERlc3Ryb3llZChjdHgsIGNvbnRleHRCdWlsZGVyLmNvbnRleHRUeXBlLCBjb250ZXh0QnVpbGRlci5jb250ZXh0RXZlbnQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLnVwZGF0ZUNvbnRleHRzKHRoaXMuZmVhdHVyZXMsIGNvbnRhaW5lcik7IC8vIFRvRG86IHRoaW5rIGFib3V0IGl0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYSBuZXcgY29udGFpbmVyIHdhcyBvcGVuZWQsIG5vIG9ic2VydmVyIGF0dGFjaGVkIHlldFxyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyICYmICFjb250ZXh0QnVpbGRlci5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIudXBkYXRlQ29udGV4dHModGhpcy5mZWF0dXJlcywgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXIsIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIWNvbnRhaW5lciAmJiBjb250ZXh0QnVpbGRlci5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgLy8gYSBjb250YWluZXIgd2FzIGRlc3Ryb3llZCwgZGlzY29ubmVjdCBvYnNlcnZlciB0b29cclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlV2lkZ2V0RmFjdG9yeShXaWRnZXQpIHtcclxuICAgICAgICBmdW5jdGlvbiB1dWlkdjQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVXaWRnZXQoV2lkZ2V0LCBidWlsZGVyLCBpbnNQb2ludE5hbWUsIGNvbmZpZywgb3JkZXIsIGNvbnRleHROb2RlLCBjbGF6eiwgcHJveGllZFN1YnMpIHtcclxuICAgICAgICAgICAgLy8gVG9EbzogY2FsY3VsYXRlIG5vZGUgZnJvbSBpbnNQb2ludCAmIHZpZXdcclxuICAgICAgICAgICAgY29uc3QgaW5zUG9pbnQgPSBidWlsZGVyLmluc1BvaW50c1tpbnNQb2ludE5hbWVdO1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gY29udGV4dE5vZGUucXVlcnlTZWxlY3RvcihpbnNQb2ludC5zZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGEgd2lkZ2V0IGFscmVhZHkgZXhpc3RzIGZvciB0aGUgaW5zUG9pbnRcclxuICAgICAgICAgICAgaWYgKG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGF6eikubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGJ1aWxkZXIuY29udGV4dHMuZ2V0KGNvbnRleHROb2RlKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgc3RhdGVfMS5TdGF0ZShjb25maWcsIGNvbnRleHQucGFyc2VkLCBidWlsZGVyLmNvbnRleHRUeXBlLCBjbGF6eik7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZGdldCA9IG5ldyBXaWRnZXQoKTtcclxuICAgICAgICAgICAgd2lkZ2V0LnN0YXRlID0gc3RhdGUuc3RhdGU7XHJcbiAgICAgICAgICAgIHdpZGdldC5pbnNQb2ludE5hbWUgPSBpbnNQb2ludE5hbWU7XHJcbiAgICAgICAgICAgIHN0YXRlLmNoYW5nZWRIYW5kbGVyID0gKCkgPT4gd2lkZ2V0Lm1vdW50KCk7IC8vIHdoZW4gZGF0YSBpbiBzdGF0ZSB3YXMgY2hhbmdlZCwgdGhlbiByZXJlbmRlciBhIHdpZGdldFxyXG4gICAgICAgICAgICB3aWRnZXQubW91bnQoKTsgLy8gVG9EbzogcmVtb3ZlIGl0P1xyXG4gICAgICAgICAgICB3aWRnZXQuZWwuY2xhc3NMaXN0LmFkZCgnZGFwcGxldC13aWRnZXQnKTtcclxuICAgICAgICAgICAgLy8gVG9EbzogZml4IGJ1ZzogaW5jb3JyZWN0IG9yZGVyaW5nIChyZXByb2R1Y2UgYnVnIG9uIDMgYnV0dG9ucylcclxuICAgICAgICAgICAgY29uc3QgaW5zZXJ0ZWRFbGVtZW50cyA9IG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFwcGxldC13aWRnZXQnKTtcclxuICAgICAgICAgICAgaWYgKGluc2VydGVkRWxlbWVudHMubGVuZ3RoID4gMCAmJiBpbnNlcnRlZEVsZW1lbnRzLmxlbmd0aCA+PSBvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBpbnNlcnRlZEVsZW1lbnRzW29yZGVyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zUG9pbnQuaW5zZXJ0ID09PSB1bmRlZmluZWQgfHwgaW5zUG9pbnQuaW5zZXJ0ID09PSAnZW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQod2lkZ2V0LmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluc1BvaW50Lmluc2VydCA9PT0gJ2JlZ2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKHdpZGdldC5lbCwgbm9kZS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgXCJpbnNlcnRcIiB2YWx1ZSBpbiB0aGUgaW5zZXJ0aW9uIHBvaW50IGNvbmZpZy4gVGhlIHBvc3NpYmxlIHZhbHVlcyBhcmUgXCJiZWdpblwiIG9yIFwiZW5kXCIuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHdpZGdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChjb25maWcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChidWlsZGVyLCBpbnNQb2ludE5hbWUsIG9yZGVyLCBjb250ZXh0Tm9kZSwgcHJveGllZFN1YnMpID0+IGNyZWF0ZVdpZGdldChXaWRnZXQsIGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnLCBvcmRlciwgY29udGV4dE5vZGUsIHV1aWQsIHByb3hpZWRTdWJzKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIG9uQ29udGV4dENyZWF0ZWQoaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHRDcmVhdGVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICAgIG9uQ29udGV4dERlc3Ryb3llZChoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dERlc3Ryb3llZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBfZW1pdENvbnRleHRDcmVhdGVkKGNvbnRleHQsIGNvbnRleHRUeXBlLCBjb250ZXh0RXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0Q3JlYXRlZEhhbmRsZXJzLmZvckVhY2goaCA9PiBoKGNvbnRleHQsIGNvbnRleHRUeXBlKSk7XHJcbiAgICAgICAgdGhpcy5fZW1pdENvbnRleHRFdmVudChjb250ZXh0LCBjb250ZXh0VHlwZSwgY29udGV4dEV2ZW50LCAnY3JlYXRlJyk7XHJcbiAgICB9XHJcbiAgICBfZW1pdENvbnRleHREZXN0cm95ZWQoY29udGV4dCwgY29udGV4dFR5cGUsIGNvbnRleHRFdmVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHREZXN0cm95ZWRIYW5kbGVycy5mb3JFYWNoKGggPT4gaChjb250ZXh0LCBjb250ZXh0VHlwZSkpO1xyXG4gICAgICAgIHRoaXMuX2VtaXRDb250ZXh0RXZlbnQoY29udGV4dCwgY29udGV4dFR5cGUsIGNvbnRleHRFdmVudCwgJ2Rlc3Ryb3knKTtcclxuICAgIH1cclxuICAgIF9lbWl0Q29udGV4dEV2ZW50KGNvbnRleHQsIGNvbnRleHRUeXBlLCBjb250ZXh0RXZlbnQsIG9wZXJhdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xyXG4gICAgICAgICAgICBvcGVyYXRpb24sXHJcbiAgICAgICAgICAgIHRvcGljOiBjb250ZXh0LmlkLFxyXG4gICAgICAgICAgICBjb250ZXh0VHlwZSxcclxuICAgICAgICAgICAgY29udGV4dElkOiBjb250ZXh0LmlkLFxyXG4gICAgICAgICAgICBjb250ZXh0XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZlYXR1cmUgb2YgdGhpcy5mZWF0dXJlcykge1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVycyA9IGZlYXR1cmUuY29uZmlnW2NvbnRleHRFdmVudF07XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShoYW5kbGVycykpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoID0+IGgoZXZlbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbkR5bmFtaWNBZGFwdGVyID0gX19kZWNvcmF0ZShbXHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxyXG5dLCBEeW5hbWljQWRhcHRlcik7XHJcbmV4cG9ydHMuRHluYW1pY0FkYXB0ZXIgPSBEeW5hbWljQWRhcHRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBjdHgsIGNvbnRleHRUeXBlLCBfY2xhenopIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmNvbnRleHRUeXBlID0gY29udGV4dFR5cGU7XHJcbiAgICAgICAgdGhpcy5fY2xhenogPSBfY2xheno7XHJcbiAgICAgICAgdGhpcy5JTklUSUFMX1NUQVRFID0gXCJERUZBVUxUXCI7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlTmFtZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnc3RhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5fY3VycmVudFN0YXRlTmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2NsYXp6JylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuX2NsYXp6OyAvLyBUb0RvOiByZW1vdmUgaXRcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2N0eCcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLmN0eDtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3NldFN0YXRlJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuc2V0U3RhdGUuYmluZChtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuX2N1cnJlbnRTdGF0ZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/IG1lLl9jYWNoZVttZS5fY3VycmVudFN0YXRlTmFtZV1bcHJvcGVydHldXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtZS5fY2FjaGVbcHJvcGVydHldO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICdzdGF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZS5zZXRTdGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWUuX2N1cnJlbnRTdGF0ZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhY2hlW21lLl9jdXJyZW50U3RhdGVOYW1lXVtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWNoZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuY2hhbmdlZEhhbmRsZXIgJiYgbWUuY2hhbmdlZEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG1lLmNvbmZpZ1ttZS5JTklUSUFMX1NUQVRFXSlcclxuICAgICAgICAgICAgbWUuc2V0U3RhdGUobWUuSU5JVElBTF9TVEFURSk7XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZShzdGF0ZU5hbWUpIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTZXQgc3RhdGUgZnJvbSAtIHRvOiBcIiwgdGhpcy5fY3VycmVudFN0YXRlTmFtZSxzdGF0ZU5hbWUpICAgICBcclxuICAgICAgICAgICAgaWYgKHN0YXRlTmFtZSA9PSB0aGlzLl9jdXJyZW50U3RhdGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBOT1Agc3RhdGUgdHJhbnNpdGlvbiBcIiR7c3RhdGVOYW1lfVwiLiBTa2lwcGluZy4uLmApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5fY2FjaGVbc3RhdGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVbc3RhdGVOYW1lXSA9IHRoaXMuY3JlYXRlTmV3U3RhdGVGcm9tQ29uZmlnKHN0YXRlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlTmFtZSA9IHN0YXRlTmFtZTtcclxuICAgICAgICAgICAgc3RhdGVOYW1lID0gdGhpcy5fY2FjaGVbc3RhdGVOYW1lXS5ORVhUO1xyXG4gICAgICAgIH0gd2hpbGUgKHN0YXRlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkSGFuZGxlciAmJiB0aGlzLmNoYW5nZWRIYW5kbGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW3RoaXMuX2N1cnJlbnRTdGF0ZU5hbWVdO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlTmV3U3RhdGVGcm9tQ29uZmlnKHN0YXRlTmFtZSkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHt9O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1tzdGF0ZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUF1dG9Qcm9wZXJ0eSA9IChhcENvbmZpZywgc2V0dGVyKSA9PiBcclxuICAgICAgICAgICAgLy9Ub0RvOiBtb3ZlIGFkZEF1dG9Qcm9wZXJ0eSB0byBhcENwbmZpZz8gXHJcbiAgICAgICAgICAgIGFwQ29uZmlnLmNvbm4uYWRkQXV0b1Byb3BlcnR5KGFwQ29uZmlnLCBzZXR0ZXIsIHRoaXMuY3R4KTtcclxuICAgICAgICAgICAgY29uc3QgaXNBdXRvUHJvcGVydHlDb25mID0gKHZhbHVlKSA9PiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbm4gJiYgdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZ1tzdGF0ZU5hbWVdKS5mb3JFYWNoKChba2V5LCB2YWx1ZU9yQXBDb25mXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9ICFpc0F1dG9Qcm9wZXJ0eUNvbmYodmFsdWVPckFwQ29uZilcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbHVlT3JBcENvbmZcclxuICAgICAgICAgICAgICAgICAgICA6IGNyZWF0ZUF1dG9Qcm9wZXJ0eSh2YWx1ZU9yQXBDb25mLCAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVOYW1lID09IG1lLl9jdXJyZW50U3RhdGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNoYW5nZWRIYW5kbGVyICYmIG1lLmNoYW5nZWRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgc3RhdGUgdGVtcGxhdGUgd2l0aCBuYW1lIFwiJHtzdGF0ZU5hbWV9XCIgZG9lc24ndCBleGlzdC4gU2tpcHBpbmcgc3RhdGUgdXBkYXRpbmcuLi5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IC8vIGNsYXNzIFN0YXRlXHJcbmV4cG9ydHMuU3RhdGUgPSBTdGF0ZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgV2lkZ2V0QnVpbGRlciB7XHJcbiAgICAvL1RvRG86IHdpZGdldHNcclxuICAgIGNvbnN0cnVjdG9yKHdpZGdldEJ1aWxkZXJDb25maWcsIF9lbWl0Q29udGV4dENyZWF0ZWQpIHtcclxuICAgICAgICB0aGlzLl9lbWl0Q29udGV4dENyZWF0ZWQgPSBfZW1pdENvbnRleHRDcmVhdGVkO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB3aWRnZXRCdWlsZGVyQ29uZmlnKTtcclxuICAgIH1cclxuICAgIC8vIGB1cGRhdGVDb250ZXh0cygpYCBpcyBjYWxsZWQgd2hlbiBuZXcgY29udGV4dCBpcyBmb3VuZC5cclxuICAgIHVwZGF0ZUNvbnRleHRzKGZlYXR1cmVzLCBjb250YWluZXIsIG11dGF0aW9ucykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBjb250ZXh0Tm9kZXMgPSBBcnJheS5mcm9tKCgoX2EgPSBjb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGV4dFNlbGVjdG9yKSkgfHwgW10pO1xyXG4gICAgICAgIGlmIChjb250ZXh0Tm9kZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbmV3UGFyc2VkQ29udGV4dHMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRleHROb2RlIG9mIGNvbnRleHROb2Rlcykge1xyXG4gICAgICAgICAgICBjb25zdCBpc05ldyA9ICF0aGlzLmNvbnRleHRzLmhhcyhjb250ZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBpc05ldyA/IHsgcGFyc2VkOiB0aGlzLmNvbnRleHRCdWlsZGVyKGNvbnRleHROb2RlKSwgZmVhdHVyZXM6IG5ldyBNYXAoKSB9IDogdGhpcy5jb250ZXh0cy5nZXQoY29udGV4dE5vZGUpO1xyXG4gICAgICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpc05ldyBjaGVja2luZ1xyXG4gICAgICAgICAgICBpZiAoaXNOZXcpIHtcclxuICAgICAgICAgICAgICAgIG5ld1BhcnNlZENvbnRleHRzLnB1c2goY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0Q29udGV4dENyZWF0ZWQoY29udGV4dC5wYXJzZWQsIHRoaXMuY29udGV4dFR5cGUsIHRoaXMuY29udGV4dEV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlID0gZmVhdHVyZXNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlSW5mbyA9IGNvbnRleHQuZmVhdHVyZXMuZ2V0KGZlYXR1cmUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmZWF0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVJbmZvID0geyBwcm94aWVkU3Viczoge30sIGNvbm5lY3Rpb25zOiBbXSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb25zID0gZmVhdHVyZS5jb25maWcuY29ubmVjdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIChjb25zdCBjb25uZWN0aW9uTmFtZSBpbiBjb25uZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBzZXR0ZXJzQnlOYW1lcyA9IHt9OyAvLyBUb0RvOiBtZW1vcnkgbGVha3M/XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZlYXR1cmVJbmZvLnByb3hpZWRTdWJzW2Nvbm5lY3Rpb25OYW1lXSA9IG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZ2V0KHRhcmdldCwgcHJvcE5hbWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRhdGFzb3VyY2U6IChzZXR0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICghc2V0dGVyc0J5TmFtZXNbcHJvcE5hbWVdKSBzZXR0ZXJzQnlOYW1lc1twcm9wTmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNldHRlcnNCeU5hbWVzW3Byb3BOYW1lXS5wdXNoKHNldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGNvbm5lY3Rpb246IGFueSA9IGNvbm5lY3Rpb25zW2Nvbm5lY3Rpb25OYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY29ubmVjdGlvbi5zdWJzY3JpYmUoY29udGV4dC5wYXJzZWQuaWQsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNldHRlcnNCeU5hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3Qgc2V0dGVycyA9IHNldHRlcnNCeU5hbWVzW2tleV0gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGVycy5mb3JFYWNoKHNldCA9PiBzZXQoZGF0YVtrZXldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmZWF0dXJlSW5mby5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5mZWF0dXJlcy5zZXQoZmVhdHVyZSwgZmVhdHVyZUluZm8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc05ldykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5zZXQoY29udGV4dE5vZGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmUgPSBmZWF0dXJlc1tpXTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5zUG9pbnROYW1lIGluIHRoaXMuaW5zUG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB3aWRnZXRDb25zdHJ1Y3RvciBvZiBmZWF0dXJlLmNvbmZpZ1tpbnNQb2ludE5hbWVdIHx8IFtdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHRJZHMgPSBmZWF0dXJlLmNvbnRleHRJZHMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0SWRzLmxlbmd0aCA9PT0gMCB8fCBjb250ZXh0SWRzLmluZGV4T2YoY29udGV4dC5wYXJzZWQuaWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0ZWRXaWRnZXQgPSB3aWRnZXRDb25zdHJ1Y3Rvcih0aGlzLCBpbnNQb2ludE5hbWUsIGksIGNvbnRleHROb2RlLCBjb250ZXh0LmZlYXR1cmVzLmdldChmZWF0dXJlKS5wcm94aWVkU3Vicyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluc2VydGVkV2lkZ2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJlZFdpZGdldHMgPSB0aGlzLndpZGdldHMuZ2V0KGZlYXR1cmUpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFdpZGdldHMucHVzaChpbnNlcnRlZFdpZGdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZGdldHMuc2V0KGZlYXR1cmUsIHJlZ2lzdGVyZWRXaWRnZXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmNvbnRleHRTdGFydGVkKG5ld1BhcnNlZENvbnRleHRzLm1hcCgoY3R4KSA9PiBjdHgucGFyc2VkKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1BhcnNlZENvbnRleHRzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuV2lkZ2V0QnVpbGRlciA9IFdpZGdldEJ1aWxkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=