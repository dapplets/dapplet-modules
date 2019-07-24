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

/***/ "./src/gnosis.png":
/*!************************!*\
  !*** ./src/gnosis.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var gnosis_png_1 = __webpack_require__(/*! ./gnosis.png */ "./src/gnosis.png");
var TwitterFeature = /** @class */ (function () {
    function TwitterFeature() {
        console.log('Feature-1 created. calling init.');
        this.init();
    }
    TwitterFeature.prototype.init = function () {
        var overlay = Core.overlay('https://localhost:8080', 'Gnosis');
        var twitterService = Core.connect("wss://localhost:8080");
        var me = this;
        var _a = this.adapter.actionFactories, button = _a.button, menuItem = _a.menuItem;
        this.adapter.addFeature({
            TWEET_SOUTH: [
                // call at view creation time
                button({
                    clazz: 'dapplet-tweet-south-metamask',
                    img: gnosis_png_1.default,
                    init: function (ctx) {
                        var state = this.state;
                        twitterService.subscribe(ctx.id, function (msg) {
                            if (msg && msg.like_num != undefined) {
                                state.label = msg.like_num.toString();
                            }
                        });
                    },
                    exec: function (ctx) {
                        var _this = this;
                        overlay.open(function () { return overlay.publish('tweet_select', ctx); });
                        overlay.unsubscribe('pm_attach');
                        overlay.subscribe('pm_attach', function (_a) {
                            var market = _a.market, tweet = _a.tweet;
                            return __awaiter(_this, void 0, void 0, function () {
                                var result;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            console.log('data from overlay recieved', { market: market, tweet: tweet });
                                            return [4 /*yield*/, Core.sendWalletConnectTx('1', ctx)];
                                        case 1:
                                            result = _b.sent();
                                            overlay.publish('tx_created');
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }, SubscribeOptions.SINGLE_THREAD);
                    }
                })
            ],
            TWEET_COMBO: [
            // menuItem({
            //     clazz: '',
            //     text: "hello one", 
            //     exec: (ctx:any) => core.sendWalletConnectTx({
            //         id: ctx.tweetId,
            //         author: ctx.authorId
            //     }), 
            //     //ToDo: what about global parameters?
            //     //ToDo: return state object useful bound to button state?
            // })
            ],
            DM_SOUTH: [
                button({
                    clazz: 'dapplet-dm-south-metamask',
                    img: gnosis_png_1.default,
                    exec: function (ctx) {
                        alert(JSON.stringify(ctx));
                        // core.sendWalletConnectTx({
                        //     id: ctx.tweetId,
                        //     author: ctx.authorId
                        // })
                    }
                    //ToDo: what about global parameters?
                    //ToDo: return state object useful bound to button state?
                    //label: (ctx:any) => ctx.text //ToDo: implement binding and reload
                })
            ]
        }); //add feature config
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dub3Npcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQ0FBaUMsdzVHOzs7Ozs7Ozs7Ozs7QUNBcEI7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLHNDQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esa0RBQWtELDZDQUE2QyxFQUFFO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsK0JBQStCO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FZQUFBQlhBdm1IQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUoza2xFUVZSbzNzVmFlNHhjVlJrL003dExpNWhJb2xBd0tpU2swWWdFTkpHSENMV2d4QlNEZnhFMVl0US9TQWpSQUVVZUNTVWFBc1lvZjVCVWdRUmZDZHc3ajUzZDdxT1BMYTVCbkhOblozZW51OTIybEMwdEJBcEpnVWlzRk5MdTdzeU92Ky83empuMzN0bloyYnN6SzA3eTVjN2VPZmQ4cjkvM09uZVYybEZKdFUzOWszUlZxbThpcFhyTEtaVWJTNnZzV0pmS2xrQkJkK3hLdjlFYVdrdlB5TE9kVTl1Q0QreFRxbmM4cFRLbEhwVUpldFRndEZyeHMzZFc4VnA2aHA2bFBUcFZaTlhXcGl0Wk1WTWl5NmFjY0gyVDNjb1BQcWY4MGtibDZ5dEExNE91QlYySCs1ZmgvbWZ3WEk5YlQ4K1NJdmx5bXZlTTdyK21DdGpOQjJFdGdrRytsSFpDekp4UUVPNW1DUGxiMEE3UWE4clQ3NmxjdWE1R1hxbXJYWWR4UFZMSHZYbjhkaFEwQUhvY3oyeFJKeFpDenhUR1VvQmV1aTBsRWltd2EwYXh0ZXpITDUwRFFaNEFIUURqdXZyYnEzVTFzTCtPdjRuZUEvM0QwSXVnVWRDN2dFNWQ5ZTJycXoyemRkVTdnWFhGZzdqL0ZKUzUwdTFMOEZvdHRGcGFuYXd4VUpHTjZkTUxKWHo5SzlCSnRSY1d6bytUd0VkZzRSRUljb2ZLNkhPVlA5YXRjbE1JNXNrdVJ4a0V0aDlzd0Q0M1lQMkRFTDZNNnp4N3lOT244ZjB2K1AwckFxMEF5UUN3R3A1V0VUbmFVSUNzUVBqTUdzajR3ZGZBYUlJaElkWW15SHdidjM5S3RmUHhnNi9pK1QrQlBsUzdYeVpGUHNEM24wVmlwRnNOVGFuVks4QjRueUs4ZC9GR1EvdlQyUGdSTUpoamkvbDZEMmh6VEJpYktndHdmMkZDZ2p4S0JaTm04NVJtSVZnRzYrT0svSm5qWk9nQTdROXZsajRya0lMSFJ3KzNWbUxKRFU2UDVUQzcrUHIzYktGQ2hUYS9LeUowaXFGRlhrcWEyMTJRWW4yMklZdFJMUGo2Qk1lVHIvZERpUXVORXQwdGxWaHl3d3FmSDF1UGpiWWJxeUNEQkQvbCs4TVZFcjZMMTdXYng2MGl0QWNWdmx4Z1lLb3ZoU2YyY0xDTEVoYzRPQkd2UkFyUVlySElGczR3T3cvVkdVTEM0R3lHUTdzNWU3bTZRbGkzaVVMNFRLbWhnOFFYbWFxMGdlOVJDbStwZ0kzNHZzbVV3NzhmM00yWmhuSzdIM3pMNFhMM1RMSU1rVlNKUEdJblo1T0YzZ3ArWjFRL2UrRnB5TEplSFQ4dTNtckdMNTU1S3RJZXhMUEZ2ZXhTVDUvQzkwMU9DV0xjaVJkc2NTUitsQUFzTC9LNlpMbnRUZ1pTMENyYlVnRXJmRVp2d0dhWFJwVFl5a0hzNmYrRVNnUm50YTJBRlo3VGRHQ0Z2d2VHcWFzZDB5VDhrN0hnem9IWDhJelVwRVorc1UzenpvMi80YlRwQnpkRk5yckxLRUdldUtGdE9Ma0FKc3NIb2VWWitDbXgvSjdES1NQSDNWTGRnKzlLSE1CVGpjRWNXdDlrbjB4d01ZUjhpekhvb2NwbXhsSGVkYXJCRSszQmFWbllPTXR2VnlNdnA5U3pMMWdGL3FxZVAwYjNkNm9kNDhoV1pVRkpsSS81b3NMc294L2paa3cydk0wSW1lNFlUa2xnVTYrYm5xaTB6c2p5UTlPdVZMSDJsZ2FER1FWY2UydzMxZG9FMFZHWGgzUEJPbXh3VWR0d1NnSWJLN3l2ZndLNjJPVC84N2dlN0QxYVo4UGFoaS9LSTI3OTRGcnVIQWRuNklFOEdCcExCTlRidjk0UUU4bmdsQVEybzdNaFJLbnFreEpoVGZpN3FVVVRNT2o1cmlZNEJlZ0xRWUErbm42WXJjL3RyaDRDazQrYlRSNVN1MmZwM3IrY3haUEFLUWxzZGgrMHd2K0M3eGNtNmY2MmlBSXY4ajFwWmE0Mm51bHlNSkp5anA3a244ZFNiUFcraXQya2w5c0oyV1Nid0twWWc3RHZnOWszRThPcEZXeEdEbG5oNytlNDg0dW5UY040WTBTQlFCUmdtWDVuMmh3cHVLd0F1VU9HbFBPeG9JSy82N0ladSt3Q3crRHIrUHNENVJVWE9hMkp4VGV2Q0tkV3NDbTlHUlpLR25iODRqeno5dlhib0kzbU40eWordC9NazU3MTlMaktUc2graFFtalFOYTFEVi9FZ3BPU2Q0dHpodEdWRVVzOHcxN3c0QVZpS01MZTBocE8rcXdtc1BtRDJ1bGc4eUQzUFAxVFlqUmE0d2NoL2oxNG5uc2llRWFNcW5sQTRobmNLV0F0aEFGOFlKb0VwUGwxZ2FGRXpOd0F6blBCTXp5QWVKbzhRZlFDR0Y2NERKeHVOUHZlRjRQTjRmZHBYZHI5NXVzU0JDektjSU9xbXoxZzkvb1NHMVNNVlJVdjhkQWpzS2JaUXhSdzZmTTZrMzNtQkNxd05PUE9OSEhoWkxaSmVjR1BjZjJPNmk5M083aGtkSS96aEJUQmQ5Z0FucTZ4WWFLcHNsQk94WWFheGsrMjlFbXNMeHJjTDdBc29zQ0gzQkUzS0dBTDJQVnErS0FvNEVNQjBscndmdElwc1dRc0JFUnMvWWczZ0ZzNWs1RkJwS3Q4S3N6endWV0E3Ym9XbytaTldQOEtDKzlCZUd0TWlaTXpUUlJ3RUxxS21YcEZhS3hyQWhNOFNFcUlKWjVFVUg4YUtYRjlFNlowRm5RNzE0c29uTEpqQXNQUkk3WTFlTURBNzNuUXJad1dmYjBKZks3bWVkalgweHlzWEgxWmprV1doWWpqQXdHZUNkWTFLT0NDK1BQWS9GMkhPZkdDOFFRVUVVc2VNOFA4NDZDSGNYOGJycytCVHFuaFF6YUFvM1hpWmpSZ0g0dW55a0FDbGhMQzRBSHhFazE5TnBCOXRyZ0lMMW12eGpMUWJ4NVNhcmJTRU1SNWswWXpwVS93V1k1WWUxNGVMTllpM2xqZ05FZU1DR3E3WHBLRHEvQTg2QXhiWE9yRTVpVXpoUlZPb0ZrMVBPWU1aT2ZNMzlXUXA3a0tMUmk1bnBEakhYZkdtakxubXk0clBPY0NtUzFoWFZnMFNsQkFNYU16UW96Sk9jTjRrWDhUSlU2NVlrZXdFZUZySW5qUndtSXhHWmw5eFZCM3VvUVM2NFhDVnVMbmtxdVJTajJuZlJKR05RYzVVakxQN241YlR0NjA5VkRWUVNLcDhCNTduL2F1Y216NCtzdExXNG4reUF5Y0NiNkFSY2ROMGFnYXF5MG1Wb0lac3BCVkRqcjJadEVLc1JpQlJGTHIxOWo2VXBOR1ZMWjhqclFTNVpnSFVzWUxQYTU1NGdkTU5rcXVRRVFSb3dUWGxKandxOXlIbFRqTkNjTFh2NHcxaTBzbU10Y1RCVnZNNGV2cVhiNjJKTUdiczNBc1hiU2tsWTRwUUZvNUpZQmRLZjN6L3ljbHhJdVVzYVMxLzVHcitEdjNxMllqcFNnUkZyWExwQjYwbXprNm9CQnlWZE9kdm9ZVW11YWpsV2FIdlRFRlpMUzByY1dqSmdndGptc2ZtZVZ0QW1Icm94ZzJwczVsRmVCVHNyS0JFYjB5MHA3cW5UUnA5WC91aGREeXhJL2JFRXhwY3B5UzVuclY4bURMS2tFdkZtd3M1TWE3c09GYnBnck9SZnFqMmhvSHE2MGprdk5sQmk2WUF3V0J6M0lIeWNzZWY5aDR5S0RKbzlkRzNCSVhUZFdOTWx3RHEzc200MGozVytPY256RnpCaGx6Y044cWp0ZHRYZURVV2dxUEdqM015SFJHYXNlL0VLKzFOY0Q3ZkdTVXZUYzhFeTJ2ZkFyZTh2aVAzSmFOOVB1Ky9pTVBGVkxvR3B1dmxaU0o5bFExMXp2UlZTRDZEaDhsMmc5MUI0UDdWSHZ2eUtKS1JNK043RURpNjJjNVEvSFJPMEdnYUx2TGhSQml1dWJhQy9sZU5kUFZQQ3ROaWxCbkszMytJOWozRXBkdEtKRU1WRHA0eWRmc2hWK0IzOHFMTjhhUGtUZSt3WWRPcEFRZlJVN0plUkpuajJKdENkRWFzalN0bzhaTW1yT251ZVpFWCt3bEZYeFZiK3FqYjFPSVNhNGM3Zld2NFlIYzQ4SDhFTC9ueXZBUnlLTHJSTVVMYi9ERTVmSDc0MThqcmk2SnZCL3U0c0hLUW1aTlgzUTMvUitKc2h4V2pjNDJEdVBuUXFITFFiZUJ2Z2Y2UHVnSG9Gc2g1RWJrOHA3WStueFpxbjhuL3dEUzBic3RZaHkrT3UxWjhkMXczNFIwa3lTMGZXVVVwWS9zdjFXYWVxYWlqREpkY3N6U1FKUlZPbm16dVF6OUYxUzg2Z1F0WWdDNkFBQUFBRWxGVGtTdVFtQ0NcIiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBnbm9zaXNfcG5nXzEgPSByZXF1aXJlKFwiLi9nbm9zaXMucG5nXCIpO1xyXG52YXIgVHdpdHRlckZlYXR1cmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUd2l0dGVyRmVhdHVyZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRmVhdHVyZS0xIGNyZWF0ZWQuIGNhbGxpbmcgaW5pdC4nKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIFR3aXR0ZXJGZWF0dXJlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvdmVybGF5ID0gQ29yZS5vdmVybGF5KCdodHRwczovL2xvY2FsaG9zdDo4MDgwJywgJ0dub3NpcycpO1xyXG4gICAgICAgIHZhciB0d2l0dGVyU2VydmljZSA9IENvcmUuY29ubmVjdChcIndzczovL2xvY2FsaG9zdDo4MDgwXCIpO1xyXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hZGFwdGVyLmFjdGlvbkZhY3RvcmllcywgYnV0dG9uID0gX2EuYnV0dG9uLCBtZW51SXRlbSA9IF9hLm1lbnVJdGVtO1xyXG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRGZWF0dXJlKHtcclxuICAgICAgICAgICAgVFdFRVRfU09VVEg6IFtcclxuICAgICAgICAgICAgICAgIC8vIGNhbGwgYXQgdmlldyBjcmVhdGlvbiB0aW1lXHJcbiAgICAgICAgICAgICAgICBidXR0b24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXp6OiAnZGFwcGxldC10d2VldC1zb3V0aC1tZXRhbWFzaycsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBnbm9zaXNfcG5nXzEuZGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3aXR0ZXJTZXJ2aWNlLnN1YnNjcmliZShjdHguaWQsIGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2cgJiYgbXNnLmxpa2VfbnVtICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmxhYmVsID0gbXNnLmxpa2VfbnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXhlYzogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5Lm9wZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gb3ZlcmxheS5wdWJsaXNoKCd0d2VldF9zZWxlY3QnLCBjdHgpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS51bnN1YnNjcmliZSgncG1fYXR0YWNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc3Vic2NyaWJlKCdwbV9hdHRhY2gnLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXQgPSBfYS5tYXJrZXQsIHR3ZWV0ID0gX2EudHdlZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgZnJvbSBvdmVybGF5IHJlY2lldmVkJywgeyBtYXJrZXQ6IG1hcmtldCwgdHdlZXQ6IHR3ZWV0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIENvcmUuc2VuZFdhbGxldENvbm5lY3RUeCgnMScsIGN0eCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnB1Ymxpc2goJ3R4X2NyZWF0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBTdWJzY3JpYmVPcHRpb25zLlNJTkdMRV9USFJFQUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFRXRUVUX0NPTUJPOiBbXHJcbiAgICAgICAgICAgIC8vIG1lbnVJdGVtKHtcclxuICAgICAgICAgICAgLy8gICAgIGNsYXp6OiAnJyxcclxuICAgICAgICAgICAgLy8gICAgIHRleHQ6IFwiaGVsbG8gb25lXCIsIFxyXG4gICAgICAgICAgICAvLyAgICAgZXhlYzogKGN0eDphbnkpID0+IGNvcmUuc2VuZFdhbGxldENvbm5lY3RUeCh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWQ6IGN0eC50d2VldElkLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGF1dGhvcjogY3R4LmF1dGhvcklkXHJcbiAgICAgICAgICAgIC8vICAgICB9KSwgXHJcbiAgICAgICAgICAgIC8vICAgICAvL1RvRG86IHdoYXQgYWJvdXQgZ2xvYmFsIHBhcmFtZXRlcnM/XHJcbiAgICAgICAgICAgIC8vICAgICAvL1RvRG86IHJldHVybiBzdGF0ZSBvYmplY3QgdXNlZnVsIGJvdW5kIHRvIGJ1dHRvbiBzdGF0ZT9cclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgRE1fU09VVEg6IFtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xheno6ICdkYXBwbGV0LWRtLXNvdXRoLW1ldGFtYXNrJyxcclxuICAgICAgICAgICAgICAgICAgICBpbWc6IGdub3Npc19wbmdfMS5kZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4ZWM6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoY3R4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvcmUuc2VuZFdhbGxldENvbm5lY3RUeCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZDogY3R4LnR3ZWV0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhdXRob3I6IGN0eC5hdXRob3JJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL1RvRG86IHdoYXQgYWJvdXQgZ2xvYmFsIHBhcmFtZXRlcnM/XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Ub0RvOiByZXR1cm4gc3RhdGUgb2JqZWN0IHVzZWZ1bCBib3VuZCB0byBidXR0b24gc3RhdGU/XHJcbiAgICAgICAgICAgICAgICAgICAgLy9sYWJlbDogKGN0eDphbnkpID0+IGN0eC50ZXh0IC8vVG9EbzogaW1wbGVtZW50IGJpbmRpbmcgYW5kIHJlbG9hZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pOyAvL2FkZCBmZWF0dXJlIGNvbmZpZ1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdChcInR3aXR0ZXItYWRhcHRlci5kYXBwbGV0LWJhc2UuZXRoXCIpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbiAgICBdLCBUd2l0dGVyRmVhdHVyZS5wcm90b3R5cGUsIFwiYWRhcHRlclwiLCB2b2lkIDApO1xyXG4gICAgVHdpdHRlckZlYXR1cmUgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3RhYmxlLFxyXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcclxuICAgIF0sIFR3aXR0ZXJGZWF0dXJlKTtcclxuICAgIHJldHVybiBUd2l0dGVyRmVhdHVyZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVHdpdHRlckZlYXR1cmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=