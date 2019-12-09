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

/***/ "./src/ethereum.png":
/*!**************************!*\
  !*** ./src/ethereum.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5NzRGMDQ5QUY3MzExRTk4ODZDQ0M3QjMyNjQyRjZGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ5NzRGMDRBQUY3MzExRTk4ODZDQ0M3QjMyNjQyRjZGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDk3NEYwNDdBRjczMTFFOTg4NkNDQzdCMzI2NDJGNkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDk3NEYwNDhBRjczMTFFOTg4NkNDQzdCMzI2NDJGNkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz63ItbbAAAIO0lEQVR42tRa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"

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ETHEREUM_ICON = __webpack_require__(/*! ./ethereum.png */ "./src/ethereum.png");
var TwitterFeature = /** @class */ (function () {
    function TwitterFeature() {
        var button = this.adapter.actionFactories.button;
        this.config = {
            TWEET_SOUTH: [
                button({
                    img: ETHEREUM_ICON,
                    exec: function (ctx) {
                        return __awaiter(this, void 0, void 0, function () {
                            var err_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.state.label = 'TX';
                                        this.state.disabled = true;
                                        this.state.loading = true;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, 4, 5]);
                                        return [4 /*yield*/, Core.sendWalletConnectTx('1', ctx)];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 3:
                                        err_1 = _a.sent();
                                        console.error(err_1);
                                        this.state.label = "ERR";
                                        return [3 /*break*/, 5];
                                    case 4:
                                        this.state.label = "NEW";
                                        this.state.disabled = false;
                                        this.state.loading = false;
                                        return [7 /*endfinally*/];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        });
                    },
                    label: "NEW"
                })
            ],
            TWEET_COMBO: [],
            DM_SOUTH: []
        };
    }
    TwitterFeature.prototype.activate = function () {
        this.adapter.attachFeature(this);
    };
    TwitterFeature.prototype.deactivate = function () {
        this.adapter.detachFeature(this);
    };
    __decorate([
        Inject("twitter-adapter.dapplet-base.eth"),
        __metadata("design:type", Object)
    ], TwitterFeature.prototype, "adapter", void 0);
    TwitterFeature = __decorate([
        Injectable,
        __metadata("design:paramtypes", [])
    ], TwitterFeature);
    return TwitterFeature;
}());
exports.default = TwitterFeature;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V0aGVyZXVtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlDQUFpQyxvOEg7Ozs7Ozs7Ozs7OztBQ0FwQjtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsb0JBQW9CLG1CQUFPLENBQUMsMENBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FZQUFBQlhBdm1IQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5WnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVE00SURjNUxqRTFPVGd5TkN3Z01qQXhOaTh3T1M4eE5DMHdNVG93T1Rvd01TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRjZ0tGZHBibVJ2ZDNNcElpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rUTVOelJHTURRNVFVWTNNekV4UlRrNE9EWkRRME0zUWpNeU5qUXlSalpHSWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tRNU56UkdNRFJCUVVZM016RXhSVGs0T0RaRFEwTTNRak15TmpReVJqWkdJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UkRrM05FWXdORGRCUmpjek1URkZPVGc0TmtORFF6ZENNekkyTkRKR05rWWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZSRGszTkVZd05EaEJSamN6TVRGRk9UZzROa05EUXpkQ016STJOREpHTmtZaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6NjNJdGJiQUFBSU8wbEVRVlI0MnRSYUMxU1Q1eG4rQ0NUaEZralEwZE1pYXNUWldhMVFvRlFtQ09wYTFwNk9kY082SGp2UFFjUlRjWXJiY1ZvdkFTOVVSTXJOTTYxRnhTQmVwdWowbklDVkVLSlVVYkJqcmhOQlNBS29FR0VpU0c0RVNNaS85NDJtWldpQVlDTHBkODUvU1BKLy8vZTl6L3U5dCtmOUlSUkZFVnRkcmEydEhueiswVWhiN2tFak5oelYxZFZManhia0g1WklKQjYyMnNObUFCcWJtaWIrNTlhdDdScU54aTh0TFczSFR3cUFYcThucGFXaW5RYmk4QXFMeFNJbFF1SHFrcEtTb0o4TWdCczN2bnVuVlM2UFo5THB4dThNSnBQeEpReVZTdVZvOXdDNnU3dHBWeXNxTXBrTUJ0MzBtN096TTJtUVNCWWNQSFRvVTdzSElCWmZpbE5wTlBOb3RCK1h4bWpCOHZBZ2gvUHlkb05EZTlrdEFGbGpvOCt0bXBwMEZ5YnptWHVPQUtpbnArZTFQZW5wMit3U0FEcXVTQ1JLaFk4Y2MzTlk3dTZrVkNUNjdNS0ZDMEYyQjZDcTZrWmtpL3pCSCtsMCtyRHp3QitZNlJrWkdRcUZnbVkzQU1CeG1lQzRHYzRNeG9qcmdYT1RScGtzTWpjM2Q1bmRBQkNKTDMybTZla0pHdXk0d3cxMDZDUDUrU24xOWZVVHh4MkFWQ0o5N1haTnpYYm41eml1dVlFT3JkVnFmZFBTMDNrWW9jWU5nTDVmUjByTFJMc2RIQnc0bGo2TERpMFdpMWNYRlJVRmp4dUE2MVZWa2ZJSGJaODZPVG1ONlhsd2FIcEdWbFlHK0pERFN3ZlExZFhGcUxoMkxSTk1aOHpsQVpxZHJGRVdjZURBMTdFdkhVQnBtVGloUjZzTkhNNXh3YlNNbDdtQjl1L3A0VW55QzQ2bTFOYlZlYjgwQUEwTkRaUHFhbXVUekRrdWdzSjhvTlAxRTIxdnIvRzdPU0RvMEwyOXZUNlFvYmVPeGFFdEJ0RGYzMDlFWldXN1FLZ0p6d2pqNkdnVUhBUWl0WFcxUkZoYVNpVDE5ZVRSbzBla3Q2L1BDT0o1SjRZT2Zmbnk1UVNCUUdCeGhuYXdGUFhsOHZLSU12R2xjaGVvTUUwRG5SZ1YvTGhiUVpxYkdzbmR1M2NKRUJuaUJHRGE1SEtpN080bU5Kamo2dXBLUENBSHVNQmZCR0l3R0g1VWpFNUh2TDI5cTRvRmd2bHNObHRua3hQbzdPeDB1bjY5TWh1ektXb1RCVWV0ZHp6cUlKV1ZsVUJpaEtTMnR0YW9iVHJNTVdtYkJuTndQaFJ6cEwyOW5Ud0FVQ3FsOGdtbmZXcGVEQUI3dDdsNTd2NzkrK050ZGdKL1AzMzZ6M2ZxN21TN3Via1ppN2YyOWpZaWxjbElXMXNiR1lEdnFQSEJ0bzZmNVMwdFJLMVNFWWNoNVRWZWFHNTRJdTV3MFVFWkF3TURSS2ZYUHp4MzltekE3Tm16MjZ3S0FBaUpiMkhobVg5VGxHRkNhMnNya1lIZ0hSMGRUMHpJVEFGbkRzQlFJSGlTN3VBSExFOVBvZ01mbXhjV2xsZVFueDgvWEFTekNJQmFvM0dDb3owSkpQM2plL2Z1RVFYYU5BamtPRUlDR3duQVVDQzRKZ0xCazhqS3lucC8yYkpsSlZieGdaYjc5My8yemNXTDNLdFhyeEtsUW1HMGI4Y3habDl6UUUzK2dxY0tVYXUvdXJwNjFtaVVPeW9BTTJmT2JEdDE4dVF2NDJKajEwRGtlSUFSeHRxc1NnZFJDTmQ5MDkrL0JPcWplWHYzN3MyMG1na05hVmI1d3VKYnJsZFdyblJ4Y1hIRTAzZ1JFOEw5SWFNVEx3NUh0bkhqeGgxcjE2NDlqdUhXcWxGSXBWTFJsRW9semNmSFI0L2ZNWDcvNC96NStRZSsrbW9YeFB3d3JPK2ZsNkJHQWdBbE5jNVJnNjMvamNmalpmajUrWFhoNzhEV25KRDhCd1VGUFJ5Slk0ektoRURUMVBmZjM1b3RFQlQ5QVdNNUx2cHhUTXlWTTRXRjRTdmo0K01vZzZGWnJWYVAydDVONWhJUzhzNTVvVkFZeXVmenQ1aUVMeEVLMzRwYnNTSUpUb0UyS29JMDJpYXFWdHRMejh6SzV1OUovL0tibXpkdnZqSDRYazFOalhkOGZIeW0zL1RwL1cvTW1rVUZCQVlhcjdlQ2dpaklycFFyS0FCeUI0V0t3QzFmZWZYVm1uMzc5djIrRHhLZWFRMnBWTXBaczJiTmJ2YUVDYXJDd3NJRm81WExvazZ3WEM1M1M5NjIvZDdtclR3MVA3OGd0YVdsaFRQNHZxQ282TzMzb3FKRTNHblRxRGZuelBrL0FLQk5DaEpYWjBKQ1FoSTg1Mlo2Qmt5VFpPZmtmREluSUtBQlRKSGE4UG5uR3kyUnllSjJka1hGdGZBdHZDUjlVdkkyYXNmT0ZFbFJjZkVuWUxNLzNBZHlnZ0l0Z1JPNDgvUFhYNmRZTEpaUjZ3c1hManhlVVZIaE4zaXQ0dUxpZ0YrOSsyNnh6NlJKMU9TcFU2bEZpeFlKa2R4WUlvL0ZVUWpuSHo5eFluT0RSSmJLWk5DTmRRK0h6YjRRSGg2Vy9IWnc4RTJUM1Vxa1VuWk9kdmFtOHZMeThQWHIxNmNzWDc2OHhIUVA2aVZ2QUxtMVZDUmFDVFdRQzBZeXlNQVBUNTQ0RVJ3U0V0SmkwMnIwYVJ1RmZ2RFE0WXNRUlJaaE1ZZVpFNnBKTFhmS2xLOUJpM3U0M0tuL0hSVEJDSGFvamNYZzQ4ZmtZRzd1aW9Kang1SWdHRXpCTWhxZEduNm5ObTNZc0NReE1mR3N6Y3RwMDdoOSt6YjNWT0daZndHcCtZSFFZM1FCZ2U0SCtQdW56SStNT09MRlpodE1wd1poTnhUeXg2N21wcVlGR0hZZG41NkdDcUxYdk5EUTNJS0NnbFZqNGRZT0w5TFdFQWlLbDl6NDUzZW5CM01EWEEvTnlvUEZLbDhRR2NHREUyck55Y25obFYrNUVnc2szZ2xabkdsUHFEeVIyTmVmUDNjdWRCcVgyejJtTXVSRkFDRHpPblE0ancrMVMrelFscUtKcklqS1JCcElkbTZlSHMrK1pWSW9sZnFjckt6NU1URXhsZVBTVnNHKy8yK2pveFBCT2FWREZXSGl4VkRudXcwdERkRHVRWGl5ZVBIaUhTOGl2RlU2YzVNbis2b2lJeUlTdEgxOUJuT1o5M2tsQkpmTC9UYVp4MHV6aTk0b2hGRHhETC9wS2IxQVJrWWFBMkJhWUY2ZHFWOThFY2ZoY1BSMkFRRE5KVHI2dzFSM1Y5ZHJHRktIRzhnbkVsYXQra3RZV0ZpVFhiMGY4UEx5NnY5MVZGUXM1QVBsTU15T3pKMDdsNzl1M2JwamR2ZUNBMGRBZ0w4c01EQXdFWnRaUXdlR1RFaGNkYnRUVS8vS0dJWkRqQ3NBSE85SHZYZlVlK0xFVTlpMUdEdzBhclZoODZaTnEyZk1tTkZsYlRabjFZRWhNenI2TjZ2aFl5UG1naWNoVTBGKzk5RkhxVXVYTHYzVzJ2dlo1RVUzaE1qSEVKbitoUFUrWnVVcHZwTXJrNU9UZDlwaUw1djlGd21hVU42Ui9NekE0R0NsU0NUNmhhMzJJYmI4Vnhna1BFQVhQN0RsSHY4VFlBQ3B2Ry82bzU0WU5nQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBFVEhFUkVVTV9JQ09OID0gcmVxdWlyZShcIi4vZXRoZXJldW0ucG5nXCIpO1xyXG52YXIgVHdpdHRlckZlYXR1cmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUd2l0dGVyRmVhdHVyZSgpIHtcclxuICAgICAgICB2YXIgYnV0dG9uID0gdGhpcy5hZGFwdGVyLmFjdGlvbkZhY3Rvcmllcy5idXR0b247XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XHJcbiAgICAgICAgICAgIFRXRUVUX1NPVVRIOiBbXHJcbiAgICAgICAgICAgICAgICBidXR0b24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGltZzogRVRIRVJFVU1fSUNPTixcclxuICAgICAgICAgICAgICAgICAgICBleGVjOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGFiZWwgPSAnVFgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsIDQsIDVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIENvcmUuc2VuZFdhbGxldENvbm5lY3RUeCgnMScsIGN0eCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycl8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGFiZWwgPSBcIkVSUlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGFiZWwgPSBcIk5FV1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJORVdcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgVFdFRVRfQ09NQk86IFtdLFxyXG4gICAgICAgICAgICBETV9TT1VUSDogW11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgVHdpdHRlckZlYXR1cmUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWRhcHRlci5hdHRhY2hGZWF0dXJlKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFR3aXR0ZXJGZWF0dXJlLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdChcInR3aXR0ZXItYWRhcHRlci5kYXBwbGV0LWJhc2UuZXRoXCIpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbiAgICBdLCBUd2l0dGVyRmVhdHVyZS5wcm90b3R5cGUsIFwiYWRhcHRlclwiLCB2b2lkIDApO1xyXG4gICAgVHdpdHRlckZlYXR1cmUgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3RhYmxlLFxyXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcclxuICAgIF0sIFR3aXR0ZXJGZWF0dXJlKTtcclxuICAgIHJldHVybiBUd2l0dGVyRmVhdHVyZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVHdpdHRlckZlYXR1cmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=