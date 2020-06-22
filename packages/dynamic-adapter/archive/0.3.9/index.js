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
                        removedContexts.forEach(ctx => contextBuilder.emitEvent('finished', ctx, [ctx.parsed]));
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
    emitEvent(event, context, args) {
        context.features.forEach((value, feature) => { var _a, _b, _c; return (_c = (_b = (_a = feature.config) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b[event]) === null || _c === void 0 ? void 0 : _c.call(_b, ...args); });
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
                for (const event in this.events) {
                    this.events[event](contextNode, context.parsed, (...args) => this.emitEvent(event, context, args));
                }
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
        newParsedContexts.forEach(ctx => this.emitEvent('started', ctx, [ctx.parsed]));
        return newParsedContexts;
    }
}
exports.WidgetBuilder = WidgetBuilder;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsbUNBQVc7QUFDckMsZ0JBQWdCLG1CQUFPLENB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QTtBQUNBO0FBQ0E7QUFDQSxzR0FBc0csYUFBYTtBQUNuSDtBQUNBO0FBQ0EscUtBQXFLO0FBQ3JLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EeW5hbWljQWRhcHRlciA9IHZvaWQgMDtcbmNvbnN0IHdpZGdldHNfMSA9IHJlcXVpcmUoXCIuL3dpZGdldHNcIik7XG5jb25zdCBzdGF0ZV8xID0gcmVxdWlyZShcIi4vc3RhdGVcIik7XG5sZXQgRHluYW1pY0FkYXB0ZXIgPSAvKiogQGNsYXNzICovICgoKSA9PiB7XG4gICAgbGV0IER5bmFtaWNBZGFwdGVyID0gY2xhc3MgRHluYW1pY0FkYXB0ZXIge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0QnVpbGRlcnMgPSBbXTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQgfHwgIXdpbmRvdyB8fCAhTXV0YXRpb25PYnNlcnZlcilcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignRG9jdW1lbnQgb3IgTXV0YXRpb25PYnNlcnZlciBpcyBub3QgYXZhaWxhYmxlLicpO1xuICAgICAgICAgICAgY29uc3QgT0JTRVJWRVJfQ09ORklHID0ge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHRoaXMudXBkYXRlT2JzZXJ2ZXJzKG11dGF0aW9ucykpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIE9CU0VSVkVSX0NPTkZJRyk7XG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5maW5kKGYgPT4gZiA9PT0gZmVhdHVyZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoZmVhdHVyZS5vcmRlckluZGV4LCAwLCBmZWF0dXJlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT2JzZXJ2ZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGV0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gdGhpcy5mZWF0dXJlcy5maWx0ZXIoZiA9PiBmICE9PSBmZWF0dXJlKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzLmZvckVhY2god2IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZGdldHMgPSB3Yi53aWRnZXRzLmdldChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXdpZGdldHMpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB3aWRnZXRzLmZvckVhY2godyA9PiB3LnVubW91bnQoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFRvRG86IGNsb3NlIGFsbCBzdWJzY3JpcHRpb25zIGFuZCBjb25uZWN0aW9uc1xuICAgICAgICB9XG4gICAgICAgIGF0dGFjaENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkZXJzID0gY29uZmlnLm1hcCgoY2ZnKSA9PiBuZXcgd2lkZ2V0c18xLldpZGdldEJ1aWxkZXIoY2ZnKSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycy5wdXNoKC4uLmJ1aWxkZXJzKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVPYnNlcnZlcnMobXV0YXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRCdWlsZGVycy5mb3JFYWNoKGNvbnRleHRCdWlsZGVyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRleHRCdWlsZGVyLmNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRlc3Ryb3kgY29udGV4dHMgdG8gcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVkQ29udGV4dHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25zID09PSBudWxsIHx8IG11dGF0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbXV0YXRpb25zLmZvckVhY2gobSA9PiBBcnJheS5mcm9tKG0ucmVtb3ZlZE5vZGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigobikgPT4gbi5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0Tm9kZXMgPSBBcnJheS5mcm9tKChuID09PSBudWxsIHx8IG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG4ucXVlcnlTZWxlY3RvckFsbChjb250ZXh0QnVpbGRlci5jb250ZXh0U2VsZWN0b3IpKSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0cyA9IGNvbnRleHROb2Rlcy5tYXAoKG4pID0+IGNvbnRleHRCdWlsZGVyLmNvbnRleHRzLmdldChuKSkuZmlsdGVyKGUgPT4gZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkQ29udGV4dHMucHVzaCguLi5jb250ZXh0cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZWRDb250ZXh0cyAmJiByZW1vdmVkQ29udGV4dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5jb250ZXh0RmluaXNoZWQocmVtb3ZlZENvbnRleHRzLm1hcChjID0+IGMucGFyc2VkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkQ29udGV4dHMuZm9yRWFjaChjdHggPT4gY29udGV4dEJ1aWxkZXIuZW1pdEV2ZW50KCdmaW5pc2hlZCcsIGN0eCwgW2N0eC5wYXJzZWRdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIudXBkYXRlQ29udGV4dHModGhpcy5mZWF0dXJlcywgY29udGFpbmVyKTsgLy8gVG9EbzogdGhpbmsgYWJvdXQgaXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYSBuZXcgY29udGFpbmVyIHdhcyBvcGVuZWQsIG5vIG9ic2VydmVyIGF0dGFjaGVkIHlldFxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIgJiYgIWNvbnRleHRCdWlsZGVyLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIudXBkYXRlQ29udGV4dHModGhpcy5mZWF0dXJlcywgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyLm9ic2VydmUoY29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghY29udGFpbmVyICYmIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGEgY29udGFpbmVyIHdhcyBkZXN0cm95ZWQsIGRpc2Nvbm5lY3Qgb2JzZXJ2ZXIgdG9vXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVdpZGdldEZhY3RvcnkoV2lkZ2V0KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVXaWRnZXQoV2lkZ2V0LCBidWlsZGVyLCBpbnNQb2ludE5hbWUsIGNvbmZpZywgb3JkZXIsIGNvbnRleHROb2RlLCBjbGF6eiwgcHJveGllZFN1YnMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3JkZXIgPT09IHVuZGVmaW5lZCB8fCBvcmRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ0VtcHR5IG9yZGVyIScpO1xuICAgICAgICAgICAgICAgICAgICBvcmRlciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGluc1BvaW50ID0gYnVpbGRlci5pbnNQb2ludHNbaW5zUG9pbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoIWluc1BvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaW5zZXJ0aW9uIHBvaW50IG5hbWU6ICR7aW5zUG9pbnROYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSAoaW5zUG9pbnQuc2VsZWN0b3IpID8gY29udGV4dE5vZGUucXVlcnlTZWxlY3RvcihpbnNQb2ludC5zZWxlY3RvcikgOiBjb250ZXh0Tm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBhIHdpZGdldCBhbHJlYWR5IGV4aXN0cyBmb3IgdGhlIGluc1BvaW50XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXp6KS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGJ1aWxkZXIuY29udGV4dHMuZ2V0KGNvbnRleHROb2RlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IG5ldyBzdGF0ZV8xLlN0YXRlKGNvbmZpZywgY29udGV4dC5wYXJzZWQsIGJ1aWxkZXIuY29udGV4dFR5cGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZGdldCA9IG5ldyBXaWRnZXQoKTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuc3RhdGUgPSBzdGF0ZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaW5zUG9pbnROYW1lID0gaW5zUG9pbnROYW1lO1xuICAgICAgICAgICAgICAgIHN0YXRlLmNoYW5nZWRIYW5kbGVyID0gKCkgPT4gd2lkZ2V0Lm1vdW50KCk7IC8vIHdoZW4gZGF0YSBpbiBzdGF0ZSB3YXMgY2hhbmdlZCwgdGhlbiByZXJlbmRlciBhIHdpZGdldFxuICAgICAgICAgICAgICAgIHdpZGdldC5tb3VudCgpOyAvLyBUb0RvOiByZW1vdmUgaXQ/XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmVsLmNsYXNzTGlzdC5hZGQoJ2RhcHBsZXQtd2lkZ2V0JywgY2xhenopO1xuICAgICAgICAgICAgICAgIHdpZGdldC5lbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGFwcGxldC1vcmRlcicsIG9yZGVyLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydFRvID0gKGluc1BvaW50Lmluc2VydCA9PT0gdW5kZWZpbmVkKSA/ICdlbmQnIDogaW5zUG9pbnQuaW5zZXJ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydGVkRWxlbWVudHMgPSBub2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gLmRhcHBsZXQtd2lkZ2V0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGluc2VydGVkRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRUbyA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBub2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbnNlcnRUbyA9PT0gJ2JlZ2luJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBcImluc2VydFwiIHZhbHVlIGluIHRoZSBpbnNlcnRpb24gcG9pbnQgY29uZmlnLiBUaGUgdmFsaWQgdmFsdWVzIGFyZSBcImJlZ2luXCIgb3IgXCJlbmRcIi4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldEVsZW1lbnRJbmRleCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRvRG86IGZpbmQgYW4gZWxlbWVudCB3aXRoIHRoZSBzYW1lIG9yZGVyIHRvIHRocm93IHRoZSBlcnJvclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIGFuIGVsZW1lbnQgaW5kZXggYmVmb3JlIHdoaWNoIG5lZWQgdG8gYmUgaW5zZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0ZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGluc2VydGVkRWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50T3JkZXIgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kYXBwbGV0LW9yZGVyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnRJbmRleCA9PT0gbnVsbCAmJiBlbGVtZW50T3JkZXIgPiBvcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoZWxlbWVudE9yZGVyID09PSBvcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0Egd2lkZ2V0IHdpdGggc3VjaCBhbiBvcmRlciBpbmRleCBhbHJlYWR5IGluc2VydGVkLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50SW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3ROb2RlID0gaW5zZXJ0ZWRFbGVtZW50c1tpbnNlcnRlZEVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBsYXN0Tm9kZS5uZXh0U2libGluZyk7IC8vIGluc2VydCBhZnRlciBsYXN0Tm9kZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGluc2VydGVkRWxlbWVudHNbdGFyZ2V0RWxlbWVudEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCB0YXJnZXROb2RlKTsgLy8gaW5zZXJ0IGJlZm9yZSB0YXJnZXROb2RlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgb3JkZXIsIGNvbnRleHROb2RlLCBwcm94aWVkU3VicykgPT4gY3JlYXRlV2lkZ2V0KFdpZGdldCwgYnVpbGRlciwgaW5zUG9pbnROYW1lLCBjb25maWcsIG9yZGVyLCBjb250ZXh0Tm9kZSwgdXVpZCwgcHJveGllZFN1YnMpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIER5bmFtaWNBZGFwdGVyID0gX19kZWNvcmF0ZShbXG4gICAgICAgIEluamVjdGFibGUsXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbiAgICBdLCBEeW5hbWljQWRhcHRlcik7XG4gICAgcmV0dXJuIER5bmFtaWNBZGFwdGVyO1xufSkoKTtcbmV4cG9ydHMuRHluYW1pY0FkYXB0ZXIgPSBEeW5hbWljQWRhcHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdGF0ZSA9IHZvaWQgMDtcbmNsYXNzIFN0YXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGN0eCwgY29udGV4dFR5cGUpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvbnRleHRUeXBlID0gY29udGV4dFR5cGU7XG4gICAgICAgIHRoaXMuSU5JVElBTF9TVEFURSA9IFwiREVGQVVMVFwiO1xuICAgICAgICB0aGlzLl9jdXJyZW50U3RhdGVOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgUHJveHkoe30sIHtcbiAgICAgICAgICAgIGdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3N0YXRlJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLl9jdXJyZW50U3RhdGVOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2N0eCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5jdHg7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnc2V0U3RhdGUnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuc2V0U3RhdGUuYmluZChtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lLl9jdXJyZW50U3RhdGVOYW1lXG4gICAgICAgICAgICAgICAgICAgID8gbWUuX2NhY2hlW21lLl9jdXJyZW50U3RhdGVOYW1lXVtwcm9wZXJ0eV1cbiAgICAgICAgICAgICAgICAgICAgOiBtZS5fY2FjaGVbcHJvcGVydHldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0U3RhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLl9jdXJyZW50U3RhdGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FjaGVbbWUuX2N1cnJlbnRTdGF0ZU5hbWVdW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhY2hlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lLmNoYW5nZWRIYW5kbGVyICYmIG1lLmNoYW5nZWRIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1lLmNvbmZpZ1ttZS5JTklUSUFMX1NUQVRFXSlcbiAgICAgICAgICAgIG1lLnNldFN0YXRlKG1lLklOSVRJQUxfU1RBVEUpO1xuICAgIH1cbiAgICBzZXRTdGF0ZShzdGF0ZU5hbWUpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNldCBzdGF0ZSBmcm9tIC0gdG86IFwiLCB0aGlzLl9jdXJyZW50U3RhdGVOYW1lLHN0YXRlTmFtZSkgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXRlTmFtZSA9PSB0aGlzLl9jdXJyZW50U3RhdGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgTk9QIHN0YXRlIHRyYW5zaXRpb24gXCIke3N0YXRlTmFtZX1cIi4gU2tpcHBpbmcuLi5gKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuX2NhY2hlW3N0YXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVtzdGF0ZU5hbWVdID0gdGhpcy5jcmVhdGVOZXdTdGF0ZUZyb21Db25maWcoc3RhdGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZU5hbWUgPSBzdGF0ZU5hbWU7XG4gICAgICAgICAgICBzdGF0ZU5hbWUgPSB0aGlzLl9jYWNoZVtzdGF0ZU5hbWVdLk5FWFQ7XG4gICAgICAgIH0gd2hpbGUgKHN0YXRlTmFtZSk7XG4gICAgICAgIHRoaXMuY2hhbmdlZEhhbmRsZXIgJiYgdGhpcy5jaGFuZ2VkSGFuZGxlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVbdGhpcy5fY3VycmVudFN0YXRlTmFtZV07XG4gICAgfVxuICAgIGNyZWF0ZU5ld1N0YXRlRnJvbUNvbmZpZyhzdGF0ZU5hbWUpIHtcbiAgICAgICAgbGV0IHN0YXRlID0ge307XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1tzdGF0ZU5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVBdXRvUHJvcGVydHkgPSAoYXBDb25maWcsIHNldHRlcikgPT4gXG4gICAgICAgICAgICAvL1RvRG86IG1vdmUgYWRkQXV0b1Byb3BlcnR5IHRvIGFwQ3BuZmlnPyBcbiAgICAgICAgICAgIGFwQ29uZmlnLmNvbm4uYWRkQXV0b1Byb3BlcnR5KGFwQ29uZmlnLCBzZXR0ZXIsIHRoaXMuY3R4KTtcbiAgICAgICAgICAgIGNvbnN0IGlzQXV0b1Byb3BlcnR5Q29uZiA9ICh2YWx1ZSkgPT4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25uICYmIHZhbHVlLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZ1tzdGF0ZU5hbWVdKS5mb3JFYWNoKChba2V5LCB2YWx1ZU9yQXBDb25mXSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSAhaXNBdXRvUHJvcGVydHlDb25mKHZhbHVlT3JBcENvbmYpXG4gICAgICAgICAgICAgICAgICAgID8gdmFsdWVPckFwQ29uZlxuICAgICAgICAgICAgICAgICAgICA6IGNyZWF0ZUF1dG9Qcm9wZXJ0eSh2YWx1ZU9yQXBDb25mLCAodikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlTmFtZSA9PSBtZS5fY3VycmVudFN0YXRlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNoYW5nZWRIYW5kbGVyICYmIG1lLmNoYW5nZWRIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgc3RhdGUgdGVtcGxhdGUgd2l0aCBuYW1lIFwiJHtzdGF0ZU5hbWV9XCIgZG9lc24ndCBleGlzdC4gU2tpcHBpbmcgc3RhdGUgdXBkYXRpbmcuLi5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSAvLyBjbGFzcyBTdGF0ZVxuZXhwb3J0cy5TdGF0ZSA9IFN0YXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLldpZGdldEJ1aWxkZXIgPSB2b2lkIDA7XG5jbGFzcyBXaWRnZXRCdWlsZGVyIHtcbiAgICAvL1RvRG86IHdpZGdldHNcbiAgICBjb25zdHJ1Y3Rvcih3aWRnZXRCdWlsZGVyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLndpZGdldHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB3aWRnZXRCdWlsZGVyQ29uZmlnKTtcbiAgICB9XG4gICAgZW1pdEV2ZW50KGV2ZW50LCBjb250ZXh0LCBhcmdzKSB7XG4gICAgICAgIGNvbnRleHQuZmVhdHVyZXMuZm9yRWFjaCgodmFsdWUsIGZlYXR1cmUpID0+IHsgdmFyIF9hLCBfYiwgX2M7IHJldHVybiAoX2MgPSAoX2IgPSAoX2EgPSBmZWF0dXJlLmNvbmZpZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmV2ZW50cykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iW2V2ZW50XSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwoX2IsIC4uLmFyZ3MpOyB9KTtcbiAgICB9XG4gICAgLy8gYHVwZGF0ZUNvbnRleHRzKClgIGlzIGNhbGxlZCB3aGVuIG5ldyBjb250ZXh0IGlzIGZvdW5kLlxuICAgIHVwZGF0ZUNvbnRleHRzKGZlYXR1cmVzLCBjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY29udGV4dE5vZGVzID0gQXJyYXkuZnJvbSgoY29udGFpbmVyID09PSBudWxsIHx8IGNvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250ZXh0U2VsZWN0b3IpKSB8fCBbXSk7XG4gICAgICAgIGlmIChjb250ZXh0Tm9kZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdQYXJzZWRDb250ZXh0cyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbnRleHROb2RlIG9mIGNvbnRleHROb2Rlcykge1xuICAgICAgICAgICAgY29uc3QgaXNOZXcgPSAhdGhpcy5jb250ZXh0cy5oYXMoY29udGV4dE5vZGUpO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGlzTmV3ID8geyBwYXJzZWQ6IHRoaXMuY29udGV4dEJ1aWxkZXIoY29udGV4dE5vZGUpLCBmZWF0dXJlczogbmV3IE1hcCgpIH0gOiB0aGlzLmNvbnRleHRzLmdldChjb250ZXh0Tm9kZSk7XG4gICAgICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpc05ldyBjaGVja2luZ1xuICAgICAgICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgICAgICAgICAgbmV3UGFyc2VkQ29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dC5wYXJzZWQsIHRoaXMuY29udGV4dEJ1aWxkZXIoY29udGV4dE5vZGUpKTsgLy8gUmVmcmVzaGluZyBvZiBjb250ZXh0IHdpdGhvdXQgbGluayBkZXN0cm95aW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVJbmZvID0gY29udGV4dC5mZWF0dXJlcy5nZXQoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFmZWF0dXJlSW5mbykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlSW5mbyA9IHsgcHJveGllZFN1YnM6IHt9LCBjb25uZWN0aW9uczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbnMgPSBmZWF0dXJlLmNvbmZpZy5jb25uZWN0aW9uczsgLy8gVG9EbzogcmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmVhdHVyZXMuc2V0KGZlYXR1cmUsIGZlYXR1cmVJbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRzLnNldChjb250ZXh0Tm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBpbiB0aGlzLmV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0oY29udGV4dE5vZGUsIGNvbnRleHQucGFyc2VkLCAoLi4uYXJncykgPT4gdGhpcy5lbWl0RXZlbnQoZXZlbnQsIGNvbnRleHQsIGFyZ3MpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5zUG9pbnROYW1lIGluIHRoaXMuaW5zUG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgd2lkZ2V0Q29uc3RydWN0b3Igb2YgZmVhdHVyZS5jb25maWdbaW5zUG9pbnROYW1lXSB8fCBbXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dElkcyA9IGZlYXR1cmUuY29udGV4dElkcyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0SWRzLmxlbmd0aCA9PT0gMCB8fCBjb250ZXh0SWRzLmluZGV4T2YoY29udGV4dC5wYXJzZWQuaWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2lkZ2V0Q29uc3RydWN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCB3aWRnZXQgY29uZmlndXJhdGlvbiBpbiB0aGUgaW5zZXJ0aW9uIHBvaW50IFwiJHtpbnNQb2ludE5hbWV9XCIuIEl0IG11c3QgYmUgV2lkZ2V0Q29uc3RydWN0b3IgaW5zdGFuY2UuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnNlcnRlZFdpZGdldCA9IHdpZGdldENvbnN0cnVjdG9yKHRoaXMsIGluc1BvaW50TmFtZSwgZmVhdHVyZS5vcmRlckluZGV4LCBjb250ZXh0Tm9kZSwgY29udGV4dC5mZWF0dXJlcy5nZXQoZmVhdHVyZSkucHJveGllZFN1YnMpOyAvLyBUb0RvOiByZW1vdmUgcHJveGllZFN1YnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluc2VydGVkV2lkZ2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdpc3RlcmVkV2lkZ2V0cyA9IHRoaXMud2lkZ2V0cy5nZXQoZmVhdHVyZSkgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFdpZGdldHMucHVzaChpbnNlcnRlZFdpZGdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aWRnZXRzLnNldChmZWF0dXJlLCByZWdpc3RlcmVkV2lkZ2V0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQ29yZS5jb250ZXh0U3RhcnRlZChuZXdQYXJzZWRDb250ZXh0cy5tYXAoKGN0eCkgPT4gY3R4LnBhcnNlZCkpO1xuICAgICAgICBuZXdQYXJzZWRDb250ZXh0cy5mb3JFYWNoKGN0eCA9PiB0aGlzLmVtaXRFdmVudCgnc3RhcnRlZCcsIGN0eCwgW2N0eC5wYXJzZWRdKSk7XG4gICAgICAgIHJldHVybiBuZXdQYXJzZWRDb250ZXh0cztcbiAgICB9XG59XG5leHBvcnRzLldpZGdldEJ1aWxkZXIgPSBXaWRnZXRCdWlsZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==