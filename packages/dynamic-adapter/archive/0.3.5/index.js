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
            if (node.getElementsByClassName(clazz).length > 0)
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
            const insertedElements = node.querySelectorAll(':scope > .dapplet-widget');
            if (insertedElements.length === 0) {
                if (insertTo === 'end') {
                    node.appendChild(widget.el);
                }
                else if (insertTo === 'begin') {
                    node.insertBefore(widget.el, node.firstChild);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLCtC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QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHdpZGdldHNfMSA9IHJlcXVpcmUoXCIuL3dpZGdldHNcIik7XHJcbmNvbnN0IHN0YXRlXzEgPSByZXF1aXJlKFwiLi9zdGF0ZVwiKTtcclxubGV0IER5bmFtaWNBZGFwdGVyID0gY2xhc3MgRHluYW1pY0FkYXB0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoIWRvY3VtZW50IHx8ICF3aW5kb3cgfHwgIU11dGF0aW9uT2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdEb2N1bWVudCBvciBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGUuJyk7XHJcbiAgICAgICAgY29uc3QgT0JTRVJWRVJfQ09ORklHID0ge1xyXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB0aGlzLnVwZGF0ZU9ic2VydmVycyhtdXRhdGlvbnMpKTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgT0JTRVJWRVJfQ09ORklHKTtcclxuICAgIH1cclxuICAgIGF0dGFjaEZlYXR1cmUoZmVhdHVyZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmZpbmQoZiA9PiBmID09PSBmZWF0dXJlKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGZlYXR1cmUub3JkZXJJbmRleCwgMCwgZmVhdHVyZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPYnNlcnZlcnMoKTtcclxuICAgIH1cclxuICAgIGRldGFjaEZlYXR1cmUoZmVhdHVyZSkge1xyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSB0aGlzLmZlYXR1cmVzLmZpbHRlcihmID0+IGYgIT09IGZlYXR1cmUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dEJ1aWxkZXJzLmZvckVhY2god2IgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aWRnZXRzID0gd2Iud2lkZ2V0cy5nZXQoZmVhdHVyZSk7XHJcbiAgICAgICAgICAgIGlmICghd2lkZ2V0cylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgd2lkZ2V0cy5mb3JFYWNoKHcgPT4gdy51bm1vdW50KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFRvRG86IGNsb3NlIGFsbCBzdWJzY3JpcHRpb25zIGFuZCBjb25uZWN0aW9uc1xyXG4gICAgfVxyXG4gICAgYXR0YWNoQ29uZmlnKGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IGJ1aWxkZXJzID0gY29uZmlnLm1hcCgoY2ZnKSA9PiBuZXcgd2lkZ2V0c18xLldpZGdldEJ1aWxkZXIoY2ZnKSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0QnVpbGRlcnMucHVzaCguLi5idWlsZGVycyk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVPYnNlcnZlcnMobXV0YXRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0QnVpbGRlcnMuZm9yRWFjaChjb250ZXh0QnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250ZXh0QnVpbGRlci5jb250YWluZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRlc3Ryb3kgY29udGV4dHMgdG8gcmVtb3ZlZCBub2Rlc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlZENvbnRleHRzID0gW107XHJcbiAgICAgICAgICAgICAgICAoX2EgPSBtdXRhdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKG0gPT4gQXJyYXkuZnJvbShtLnJlbW92ZWROb2RlcylcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChuKSA9PiBuLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHROb2RlcyA9IEFycmF5LmZyb20oKChfYSA9IG4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKGNvbnRleHRCdWlsZGVyLmNvbnRleHRTZWxlY3RvcikpIHx8IFtdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0cyA9IGNvbnRleHROb2Rlcy5tYXAoKG4pID0+IGNvbnRleHRCdWlsZGVyLmNvbnRleHRzLmdldChuKSkuZmlsdGVyKGUgPT4gZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZENvbnRleHRzLnB1c2goLi4uY29udGV4dHMpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZWRDb250ZXh0cyAmJiByZW1vdmVkQ29udGV4dHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUuY29udGV4dEZpbmlzaGVkKHJlbW92ZWRDb250ZXh0cy5tYXAoYyA9PiBjLnBhcnNlZCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIudXBkYXRlQ29udGV4dHModGhpcy5mZWF0dXJlcywgY29udGFpbmVyKTsgLy8gVG9EbzogdGhpbmsgYWJvdXQgaXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBhIG5ldyBjb250YWluZXIgd2FzIG9wZW5lZCwgbm8gb2JzZXJ2ZXIgYXR0YWNoZWQgeWV0XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIgJiYgIWNvbnRleHRCdWlsZGVyLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci51cGRhdGVDb250ZXh0cyh0aGlzLmZlYXR1cmVzLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlci5vYnNlcnZlci5vYnNlcnZlKGNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghY29udGFpbmVyICYmIGNvbnRleHRCdWlsZGVyLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhIGNvbnRhaW5lciB3YXMgZGVzdHJveWVkLCBkaXNjb25uZWN0IG9ic2VydmVyIHRvb1xyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXIub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVXaWRnZXRGYWN0b3J5KFdpZGdldCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHV1aWR2NCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVdpZGdldChXaWRnZXQsIGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnLCBvcmRlciwgY29udGV4dE5vZGUsIGNsYXp6LCBwcm94aWVkU3Vicykge1xyXG4gICAgICAgICAgICBpZiAob3JkZXIgPT09IHVuZGVmaW5lZCB8fCBvcmRlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRW1wdHkgb3JkZXIhJyk7XHJcbiAgICAgICAgICAgICAgICBvcmRlciA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaW5zUG9pbnQgPSBidWlsZGVyLmluc1BvaW50c1tpbnNQb2ludE5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIWluc1BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGluc2VydGlvbiBwb2ludCBuYW1lOiAke2luc1BvaW50TmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gKGluc1BvaW50LnNlbGVjdG9yKSA/IGNvbnRleHROb2RlLnF1ZXJ5U2VsZWN0b3IoaW5zUG9pbnQuc2VsZWN0b3IpIDogY29udGV4dE5vZGU7XHJcbiAgICAgICAgICAgIGlmICghbm9kZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgYSB3aWRnZXQgYWxyZWFkeSBleGlzdHMgZm9yIHRoZSBpbnNQb2ludFxyXG4gICAgICAgICAgICBpZiAobm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXp6KS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gYnVpbGRlci5jb250ZXh0cy5nZXQoY29udGV4dE5vZGUpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IG5ldyBzdGF0ZV8xLlN0YXRlKGNvbmZpZywgY29udGV4dC5wYXJzZWQsIGJ1aWxkZXIuY29udGV4dFR5cGUpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWRnZXQgPSBuZXcgV2lkZ2V0KCk7XHJcbiAgICAgICAgICAgIHdpZGdldC5zdGF0ZSA9IHN0YXRlLnN0YXRlO1xyXG4gICAgICAgICAgICB3aWRnZXQuaW5zUG9pbnROYW1lID0gaW5zUG9pbnROYW1lO1xyXG4gICAgICAgICAgICBzdGF0ZS5jaGFuZ2VkSGFuZGxlciA9ICgpID0+IHdpZGdldC5tb3VudCgpOyAvLyB3aGVuIGRhdGEgaW4gc3RhdGUgd2FzIGNoYW5nZWQsIHRoZW4gcmVyZW5kZXIgYSB3aWRnZXRcclxuICAgICAgICAgICAgd2lkZ2V0Lm1vdW50KCk7IC8vIFRvRG86IHJlbW92ZSBpdD9cclxuICAgICAgICAgICAgd2lkZ2V0LmVsLmNsYXNzTGlzdC5hZGQoJ2RhcHBsZXQtd2lkZ2V0JywgY2xhenopO1xyXG4gICAgICAgICAgICB3aWRnZXQuZWwuc2V0QXR0cmlidXRlKCdkYXRhLWRhcHBsZXQtb3JkZXInLCBvcmRlci50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgY29uc3QgaW5zZXJ0VG8gPSAoaW5zUG9pbnQuaW5zZXJ0ID09PSB1bmRlZmluZWQpID8gJ2VuZCcgOiBpbnNQb2ludC5pbnNlcnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGluc2VydGVkRWxlbWVudHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IC5kYXBwbGV0LXdpZGdldCcpO1xyXG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWRFbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnNlcnRUbyA9PT0gJ2VuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHdpZGdldC5lbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpbnNlcnRUbyA9PT0gJ2JlZ2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKHdpZGdldC5lbCwgbm9kZS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgXCJpbnNlcnRcIiB2YWx1ZSBpbiB0aGUgaW5zZXJ0aW9uIHBvaW50IGNvbmZpZy4gVGhlIHZhbGlkIHZhbHVlcyBhcmUgXCJiZWdpblwiIG9yIFwiZW5kXCIuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0RWxlbWVudEluZGV4ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIFRvRG86IGZpbmQgYW4gZWxlbWVudCB3aXRoIHRoZSBzYW1lIG9yZGVyIHRvIHRocm93IHRoZSBlcnJvclxyXG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoaW5nIGZvciBhbiBlbGVtZW50IGluZGV4IGJlZm9yZSB3aGljaCBuZWVkIHRvIGJlIGluc2VydGVkLlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRlZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGluc2VydGVkRWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudE9yZGVyID0gcGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGFwcGxldC1vcmRlcicpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudEluZGV4ID09PSBudWxsICYmIGVsZW1lbnRPcmRlciA+IG9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChlbGVtZW50T3JkZXIgPT09IG9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0Egd2lkZ2V0IHdpdGggc3VjaCBhbiBvcmRlciBpbmRleCBhbHJlYWR5IGluc2VydGVkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50SW5kZXggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0Tm9kZSA9IGluc2VydGVkRWxlbWVudHNbaW5zZXJ0ZWRFbGVtZW50cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIGxhc3ROb2RlLm5leHRTaWJsaW5nKTsgLy8gaW5zZXJ0IGFmdGVyIGxhc3ROb2RlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gaW5zZXJ0ZWRFbGVtZW50c1t0YXJnZXRFbGVtZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCB0YXJnZXROb2RlKTsgLy8gaW5zZXJ0IGJlZm9yZSB0YXJnZXROb2RlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHdpZGdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChjb25maWcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChidWlsZGVyLCBpbnNQb2ludE5hbWUsIG9yZGVyLCBjb250ZXh0Tm9kZSwgcHJveGllZFN1YnMpID0+IGNyZWF0ZVdpZGdldChXaWRnZXQsIGJ1aWxkZXIsIGluc1BvaW50TmFtZSwgY29uZmlnLCBvcmRlciwgY29udGV4dE5vZGUsIHV1aWQsIHByb3hpZWRTdWJzKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTtcclxuRHluYW1pY0FkYXB0ZXIgPSBfX2RlY29yYXRlKFtcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXHJcbl0sIER5bmFtaWNBZGFwdGVyKTtcclxuZXhwb3J0cy5EeW5hbWljQWRhcHRlciA9IER5bmFtaWNBZGFwdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGN0eCwgY29udGV4dFR5cGUpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmNvbnRleHRUeXBlID0gY29udGV4dFR5cGU7XHJcbiAgICAgICAgdGhpcy5JTklUSUFMX1NUQVRFID0gXCJERUZBVUxUXCI7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlTmFtZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnc3RhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZS5fY3VycmVudFN0YXRlTmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2N0eCcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLmN0eDtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3NldFN0YXRlJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWUuc2V0U3RhdGUuYmluZChtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuX2N1cnJlbnRTdGF0ZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/IG1lLl9jYWNoZVttZS5fY3VycmVudFN0YXRlTmFtZV1bcHJvcGVydHldXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtZS5fY2FjaGVbcHJvcGVydHldO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICdzdGF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZS5zZXRTdGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWUuX2N1cnJlbnRTdGF0ZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhY2hlW21lLl9jdXJyZW50U3RhdGVOYW1lXVtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLl9jYWNoZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuY2hhbmdlZEhhbmRsZXIgJiYgbWUuY2hhbmdlZEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG1lLmNvbmZpZ1ttZS5JTklUSUFMX1NUQVRFXSlcclxuICAgICAgICAgICAgbWUuc2V0U3RhdGUobWUuSU5JVElBTF9TVEFURSk7XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZShzdGF0ZU5hbWUpIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTZXQgc3RhdGUgZnJvbSAtIHRvOiBcIiwgdGhpcy5fY3VycmVudFN0YXRlTmFtZSxzdGF0ZU5hbWUpICAgICBcclxuICAgICAgICAgICAgaWYgKHN0YXRlTmFtZSA9PSB0aGlzLl9jdXJyZW50U3RhdGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBOT1Agc3RhdGUgdHJhbnNpdGlvbiBcIiR7c3RhdGVOYW1lfVwiLiBTa2lwcGluZy4uLmApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5fY2FjaGVbc3RhdGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVbc3RhdGVOYW1lXSA9IHRoaXMuY3JlYXRlTmV3U3RhdGVGcm9tQ29uZmlnKHN0YXRlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlTmFtZSA9IHN0YXRlTmFtZTtcclxuICAgICAgICAgICAgc3RhdGVOYW1lID0gdGhpcy5fY2FjaGVbc3RhdGVOYW1lXS5ORVhUO1xyXG4gICAgICAgIH0gd2hpbGUgKHN0YXRlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkSGFuZGxlciAmJiB0aGlzLmNoYW5nZWRIYW5kbGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW3RoaXMuX2N1cnJlbnRTdGF0ZU5hbWVdO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlTmV3U3RhdGVGcm9tQ29uZmlnKHN0YXRlTmFtZSkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHt9O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1tzdGF0ZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUF1dG9Qcm9wZXJ0eSA9IChhcENvbmZpZywgc2V0dGVyKSA9PiBcclxuICAgICAgICAgICAgLy9Ub0RvOiBtb3ZlIGFkZEF1dG9Qcm9wZXJ0eSB0byBhcENwbmZpZz8gXHJcbiAgICAgICAgICAgIGFwQ29uZmlnLmNvbm4uYWRkQXV0b1Byb3BlcnR5KGFwQ29uZmlnLCBzZXR0ZXIsIHRoaXMuY3R4KTtcclxuICAgICAgICAgICAgY29uc3QgaXNBdXRvUHJvcGVydHlDb25mID0gKHZhbHVlKSA9PiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbm4gJiYgdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZ1tzdGF0ZU5hbWVdKS5mb3JFYWNoKChba2V5LCB2YWx1ZU9yQXBDb25mXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9ICFpc0F1dG9Qcm9wZXJ0eUNvbmYodmFsdWVPckFwQ29uZilcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbHVlT3JBcENvbmZcclxuICAgICAgICAgICAgICAgICAgICA6IGNyZWF0ZUF1dG9Qcm9wZXJ0eSh2YWx1ZU9yQXBDb25mLCAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVOYW1lID09IG1lLl9jdXJyZW50U3RhdGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNoYW5nZWRIYW5kbGVyICYmIG1lLmNoYW5nZWRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgc3RhdGUgdGVtcGxhdGUgd2l0aCBuYW1lIFwiJHtzdGF0ZU5hbWV9XCIgZG9lc24ndCBleGlzdC4gU2tpcHBpbmcgc3RhdGUgdXBkYXRpbmcuLi5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IC8vIGNsYXNzIFN0YXRlXHJcbmV4cG9ydHMuU3RhdGUgPSBTdGF0ZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgV2lkZ2V0QnVpbGRlciB7XHJcbiAgICAvL1RvRG86IHdpZGdldHNcclxuICAgIGNvbnN0cnVjdG9yKHdpZGdldEJ1aWxkZXJDb25maWcpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLndpZGdldHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgd2lkZ2V0QnVpbGRlckNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICAvLyBgdXBkYXRlQ29udGV4dHMoKWAgaXMgY2FsbGVkIHdoZW4gbmV3IGNvbnRleHQgaXMgZm91bmQuXHJcbiAgICB1cGRhdGVDb250ZXh0cyhmZWF0dXJlcywgY29udGFpbmVyKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHROb2RlcyA9IEFycmF5LmZyb20oKChfYSA9IGNvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250ZXh0U2VsZWN0b3IpKSB8fCBbXSk7XHJcbiAgICAgICAgaWYgKGNvbnRleHROb2Rlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBuZXdQYXJzZWRDb250ZXh0cyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udGV4dE5vZGUgb2YgY29udGV4dE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTmV3ID0gIXRoaXMuY29udGV4dHMuaGFzKGNvbnRleHROb2RlKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGlzTmV3ID8geyBwYXJzZWQ6IHRoaXMuY29udGV4dEJ1aWxkZXIoY29udGV4dE5vZGUpLCBmZWF0dXJlczogbmV3IE1hcCgpIH0gOiB0aGlzLmNvbnRleHRzLmdldChjb250ZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgIC8vIFRvRG86IHJlZmFjdG9yIGlzTmV3IGNoZWNraW5nXHJcbiAgICAgICAgICAgIGlmIChpc05ldykge1xyXG4gICAgICAgICAgICAgICAgbmV3UGFyc2VkQ29udGV4dHMucHVzaChjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dC5wYXJzZWQsIHRoaXMuY29udGV4dEJ1aWxkZXIoY29udGV4dE5vZGUpKTsgLy8gUmVmcmVzaGluZyBvZiBjb250ZXh0IHdpdGhvdXQgbGluayBkZXN0cm95aW5nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZUluZm8gPSBjb250ZXh0LmZlYXR1cmVzLmdldChmZWF0dXJlKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmVhdHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlSW5mbyA9IHsgcHJveGllZFN1YnM6IHt9LCBjb25uZWN0aW9uczogW10gfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0aW9ucyA9IGZlYXR1cmUuY29uZmlnLmNvbm5lY3Rpb25zOyAvLyBUb0RvOiByZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZlYXR1cmVzLnNldChmZWF0dXJlLCBmZWF0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRzLnNldChjb250ZXh0Tm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbnNQb2ludE5hbWUgaW4gdGhpcy5pbnNQb2ludHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHdpZGdldENvbnN0cnVjdG9yIG9mIGZlYXR1cmUuY29uZmlnW2luc1BvaW50TmFtZV0gfHwgW10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dElkcyA9IGZlYXR1cmUuY29udGV4dElkcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRleHRJZHMubGVuZ3RoID09PSAwIHx8IGNvbnRleHRJZHMuaW5kZXhPZihjb250ZXh0LnBhcnNlZC5pZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnNlcnRlZFdpZGdldCA9IHdpZGdldENvbnN0cnVjdG9yKHRoaXMsIGluc1BvaW50TmFtZSwgZmVhdHVyZS5vcmRlckluZGV4LCBjb250ZXh0Tm9kZSwgY29udGV4dC5mZWF0dXJlcy5nZXQoZmVhdHVyZSkucHJveGllZFN1YnMpOyAvLyBUb0RvOiByZW1vdmUgcHJveGllZFN1YnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5zZXJ0ZWRXaWRnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdpc3RlcmVkV2lkZ2V0cyA9IHRoaXMud2lkZ2V0cy5nZXQoZmVhdHVyZSkgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkV2lkZ2V0cy5wdXNoKGluc2VydGVkV2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkZ2V0cy5zZXQoZmVhdHVyZSwgcmVnaXN0ZXJlZFdpZGdldHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvcmUuY29udGV4dFN0YXJ0ZWQobmV3UGFyc2VkQ29udGV4dHMubWFwKChjdHgpID0+IGN0eC5wYXJzZWQpKTtcclxuICAgICAgICByZXR1cm4gbmV3UGFyc2VkQ29udGV4dHM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5XaWRnZXRCdWlsZGVyID0gV2lkZ2V0QnVpbGRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==