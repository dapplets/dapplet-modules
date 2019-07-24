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
var GNOSIS_ICON = 'data:image/png;base64,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';
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
                    img: GNOSIS_ICON,
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
                    img: GNOSIS_ICON,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGtEQUFrRCw2Q0FBNkMsRUFBRTtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLCtCQUErQjtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEdOT1NJU19JQ09OID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFKM2tsRVFWUm8zc1ZhZTR4Y1ZSay9NN3RMaTVoSW9sQXdLaVNrMFlnRU5KR0hDTFdneEJTRGZ4RTFZdFEvU0FqUkFFVWVDU1VhQXNZb2Y1QlVnUVJmQ2R3N2o1M2Q3cU9QTGE1Qm5ITm5aM2VudTkyMmxDMHRCQXBKZ1Vpc0ZOTHU3c3lPdisvN3pqbjMzdG5aMmJzekswN3k1YzdlT2ZkOHI5LzNPbmVWMmxGSnRVMzlrM1JWcW04aXBYckxLWlViUzZ2c1dKZktsa0JCZCt4S3Y5RWFXa3ZQeUxPZFU5dUNEK3hUcW5jOHBUS2xIcFVKZXRUZ3RGcnhzM2RXOFZwNmhwNmxQVHBWWk5YV3BpdFpNVk1peTZhY2NIMlQzY29QUHFmODBrYmw2eXRBMTRPdUJWMkgrNWZoL21md1hJOWJUOCtTSXZseW12ZU03cittQ3RqTkIyRXRna0crbEhaQ3pKeFFFTzVtQ1BsYjBBN1FhOHJUNzZsY3VhNUdYcW1yWFlkeFBWTEh2WG44ZGhRMEFIb2N6MnhSSnhaQ3p4VEdVb0JldWkwbEVpbXdhMGF4dGV6SEw1MERRWjRBSFFEanV2cmJxM1Uxc0wrT3Y0bmVBLzNEMEl1Z1VkQzdnRTVkOWUycnF6MnpkZFU3Z1hYRmc3ai9GSlM1MHUxTDhGb3R0RnBhbmF3eFVKR042ZE1MSlh6OUs5Qkp0UmNXem8rVHdFZGc0UkVJY29mSzZIT1ZQOWF0Y2xNSTVza3VSeGtFdGg5c3dENDNZUDJERUw2TTZ6eDd5Tk9uOGYwditQMHJBcTBBeVFDd0dwNVdFVG5hVUlDc1FQak1Hc2o0d2RmQWFJSWhJZFlteUh3YnYzOUt0ZlB4ZzYvaStUK0JQbFM3WHlaRlBzRDNuMFZpcEZzTlRhblZLOEI0bnlLOGQvRkdRL3ZUMlBnUk1KaGppL2w2RDJoelRCaWJLZ3R3ZjJGQ2dqeEtCWk5tODVSbUlWZ0c2K09LL0pualpPZ0E3UTl2bGo0cmtJTEhSdyszVm1MSkRVNlA1VEM3K1ByM2JLRkNoVGEvS3lKMGlxRkZYa3FhMjEyUVluMjJJWXRSTFBqNkJNZVRyL2REaVF1TkV0MHRsVmh5d3dxZkgxdVBqYllicXlDREJEL2wrOE1WRXI2TDE3V2J4NjBpdEFjVnZseGdZS292aFNmMmNMQ0xFaGM0T0JHdlJBclFZckhJRnM0d093L1ZHVUxDNEd5R1E3czVlN202UWxpM2lVTDRUS21oZzhRWG1hcTBnZTlSQ20rcGdJMzR2c21Vdzc4ZjNNMlpobks3SDN6TDRYTDNUTElNa1ZTSlBHSW5aNU9GM2dwK1oxUS9lK0ZweUxKZUhUOHUzbXJHTDU1NUt0SWV4TFBGdmV4U1Q1L0M5MDFPQ1dMY2lSZHNjU1IrbEFBc0wvSzZaTG50VGdaUzBDcmJVZ0VyZkVadndHYVhScFRZeWtIczZmK0VTZ1JudGEyQUZaN1RkR0NGdndlR3Fhc2QweVQ4azdIZ3pvSFg4SXpVcEVaK3NVM3p6bzIvNGJUcEJ6ZEZOcnJMS0VHZXVLRnRPTGtBSnNzSG9lVlorQ214L0o3REtTUEgzVkxkZys5S0hNQlRqY0VjV3Q5a24weHdNWVI4aXpIb29jcG14bEhlZGFyQkUrM0JhVm5ZT010dlZ5TXZwOVN6TDFnRi9xcWVQMGIzZDZvZDQ4aFdaVUZKbEkvNW9zTHNveC9qWmt3MnZNMEltZTRZVGtsZ1U2K2JucWkwenNqeVE5T3VWTEgybGdhREdRVmNlMnczMWRvRTBWR1hoM1BCT214d1VkdHdTZ0liSzd5dmZ3SzYyT1QvODdnZTdEMWFaOFBhaGkvS0kyNzk0RnJ1SEFkbjZJRThHQnBMQk5UYnY5NFFFOG5nbEFRMm83TWhSS25xa3hKaFRmaTdxVVVUTU9qNXJpWTRCZWdMUVlBK25uNllyYy90cmg0Q2s0K2JUUjVTdTJmcDNyK2N4WlBBS1Fsc2RoKzB3ditDN3hjbTZmNjJpQUl2OGoxcFphNDJudWx5TUpKeWpwN2tuOGRTYlBXK2l0MmtsOXNKMldTYndLcFlnN0R2ZzlrM0U4T3BGV3hHRGxuaDcrZTQ4NHVuVGNONFkwU0JRQlJnbVg1bjJod3B1S3dBdVVPR2xQT3hvSUsvNjdJWnUrd0N3K0RyK1BzRDVSVVhPYTJKeFRldkNLZFdzQ205R1JaS0duYjg0anp6OXZYYm9JM21ONHlqK3QvTWs1NzE5TGpLVHNoK2hRbWpRTmExRFYvRWdwT1NkNHR6aHRHVkVVczh3MTd3NEFWaUtNTGUwaHBPK3F3bXNQbUQydWxnOHlEM1BQMVRZalJhNHdjaC9qMTRubnNpZUVhTXFubEE0aG5jS1dBdGhBRjhZSm9FcFBsMWdhRkV6TndBem5QQk16eUFlSm84UWZRQ0dGNjRESnh1TlB2ZUY0UE40ZmRwWGRyOTV1c1NCQ3pLY0lPcW16MWc5L29TRzFTTVZSVXY4ZEFqc0tiWlF4Unc2Zk02azMzbUJDcXdOT1BPTkhIaFpMWkplY0dQY2YyTzZpOTNPN2hrZEkvemhCVEJkOWdBbnE2eFlhS3BzbEJPeFlhYXhrKzI5RW1zTHhyY0w3QXNvc0NIM0JFM0tHQUwyUFZxK0tBbzRFTUIwbHJ3ZnRJcHNXUXNCRVJzL1lnM2dGczVrNUZCcEt0OEtzenp3VldBN2JvV28rWk5XUDhLQys5QmVHdE1pWk16VFJSd0VMcUttWHBGYUt4ckFoTThTRXFJSlo1RVVIOGFLWEY5RTZaMEZuUTcxNHNvbkxKakFzUFJJN1kxZU1EQTczblFyWndXZmIwSmZLN21lZGpYMHh5c1hIMVpqa1dXaFlqakF3R2VDZFkxS09DQytQUFkvRjJIT2ZHQzhRUVVFVXNlTThQODQ2Q0hjWDhicnMrQlRxbmhRemFBbzNYaVpqUmdINHVueWtBQ2xoTEM0QUh4RWsxOU5wQjl0cmdJTDFtdnhqTFFieDVTYXJiU0VNUjVrMFl6cFUvd1dZNVllMTRlTE5ZaTNsamdORWVNQ0dxN1hwS0RxL0E4NkF4YlhPckU1aVV6aFJWT29GazFQT1lNWk9mTTM5V1FwN2tLTFJpNW5wRGpIWGZHbWpMbm15NHJQT2NDbVMxaFhWZzBTbEJBTWFNelFvekpPY040a1g4VEpVNjVZa2V3RWVGcklualJ3bUl4R1psOXhWQjN1b1FTNjRYQ1Z1TG5rcXVSU2oybmZSSkdOUWM1VWpMUDduNWJUdDYwOVZEVlFTS3A4QjU3bi9hdWNtejQrc3RMVzRuK3lBeWNDYjZBUmNkTjBhZ2FxeTBtVm9JWnNwQlZEanIyWnRFS3NSaUJSRkxyMTlqNlVwTkdWTFo4anJRUzVaZ0hVc1lMUGE1NTRnZE1Oa3F1UUVRUm93VFhsSmp3cTl5SGxUak5DY0xYdjR3MWkwc21NdGNUQlZ2TTRldnFYYjYySk1HYnMzQXNYYlNrbFk0cFFGbzVKWUJkS2Yzei95Y2x4SXVVc2FTMS81R3IrRHYzcTJZanBTZ1JGclhMcEI2MG16azZvQkJ5VmRPZHZvWVVtdWFqbFdhSHZURUZaTFMwcmNXakpnZ3RqbXNmbWVWdEFtSHJveGcycHM1bEZlQlRzcktCRWIweTBwN3FuVFJwOVgvdWhkRHl4SS9iRUV4cGNweVM1bnJWOG1ETEtrRXZGbXdzNU1hN3NPRmJwZ3JPUmZxajJob0hxNjBqa3ZObEJpNllBd1dCejNJSHljc2VmOWg0eUtESm85ZEczQklYVGRXTk1sd0RxM3NtNDBqM1crT2NuekZ6QmhsemNOOHFqdGR0WGVEVVdncVBHajNNeUhSR2FzZS9FSysxTmNEN2ZHU1V2VGM4RXkydmZBcmU4dmlQM0phTjlQdSsvaU1QRlZMb0dwdXZsWlNKOWxRMTF6dlJWU0Q2RGg4bDJnOTFCNFA3Vkh2dnlLSktSTStON0VEaTYyYzVRL0hSTzBHZ2FMdkxoUkJpdXViYUMvbGVOZFBWUEN0TmlsQm5LMzMrSTlqM0VwZHRLSkVNVkRwNHlkZnNoVitCMzhxTE44YVBrVGUrd1lkT3BBUWZSVTdKZVJKbmoySnRDZEVhc2pTdG84Wk1tck9udWVaRVgrd2xGWHhWYitxamIxT0lTYTRjN2ZXdjRZSGM0OEg4RUwvbnl2QVJ5S0xyUk1VTGIvREU1Zkg3NDE4anJpNkp2Qi91NHNIS1FtWk5YM1EzL1IrSnNoeFdqYzQyRHVQblFxSExRYmVCdmdmNlB1Z0hvRnNoNUViazhwN1krbnhacW44bi93RFMwYnN0WWh5K091MVo4ZDF3MzRSMGt5UzBmV1VVcFkvc3YxV2FlcWFpakRKZGNzelNRSlJWT25tenVRejlGMVM4NmdRdFlnQzZBQUFBQUVsRlRrU3VRbUNDJztcclxudmFyIFR3aXR0ZXJGZWF0dXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHdpdHRlckZlYXR1cmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZlYXR1cmUtMSBjcmVhdGVkLiBjYWxsaW5nIGluaXQuJyk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBUd2l0dGVyRmVhdHVyZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3ZlcmxheSA9IENvcmUub3ZlcmxheSgnaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MCcsICdHbm9zaXMnKTtcclxuICAgICAgICB2YXIgdHdpdHRlclNlcnZpY2UgPSBDb3JlLmNvbm5lY3QoXCJ3c3M6Ly9sb2NhbGhvc3Q6ODA4MFwiKTtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWRhcHRlci5hY3Rpb25GYWN0b3JpZXMsIGJ1dHRvbiA9IF9hLmJ1dHRvbiwgbWVudUl0ZW0gPSBfYS5tZW51SXRlbTtcclxuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkRmVhdHVyZSh7XHJcbiAgICAgICAgICAgIFRXRUVUX1NPVVRIOiBbXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxsIGF0IHZpZXcgY3JlYXRpb24gdGltZVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgICBjbGF6ejogJ2RhcHBsZXQtdHdlZXQtc291dGgtbWV0YW1hc2snLFxyXG4gICAgICAgICAgICAgICAgICAgIGltZzogR05PU0lTX0lDT04sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0d2l0dGVyU2VydmljZS5zdWJzY3JpYmUoY3R4LmlkLCBmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnICYmIG1zZy5saWtlX251bSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sYWJlbCA9IG1zZy5saWtlX251bS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4ZWM6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5vcGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG92ZXJsYXkucHVibGlzaCgndHdlZXRfc2VsZWN0JywgY3R4KTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkudW5zdWJzY3JpYmUoJ3BtX2F0dGFjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnN1YnNjcmliZSgncG1fYXR0YWNoJywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFya2V0ID0gX2EubWFya2V0LCB0d2VldCA9IF9hLnR3ZWV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGZyb20gb3ZlcmxheSByZWNpZXZlZCcsIHsgbWFya2V0OiBtYXJrZXQsIHR3ZWV0OiB0d2VldCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBDb3JlLnNlbmRXYWxsZXRDb25uZWN0VHgoJzEnLCBjdHgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5wdWJsaXNoKCd0eF9jcmVhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgU3Vic2NyaWJlT3B0aW9ucy5TSU5HTEVfVEhSRUFEKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBUV0VFVF9DT01CTzogW1xyXG4gICAgICAgICAgICAvLyBtZW51SXRlbSh7XHJcbiAgICAgICAgICAgIC8vICAgICBjbGF6ejogJycsXHJcbiAgICAgICAgICAgIC8vICAgICB0ZXh0OiBcImhlbGxvIG9uZVwiLCBcclxuICAgICAgICAgICAgLy8gICAgIGV4ZWM6IChjdHg6YW55KSA9PiBjb3JlLnNlbmRXYWxsZXRDb25uZWN0VHgoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlkOiBjdHgudHdlZXRJZCxcclxuICAgICAgICAgICAgLy8gICAgICAgICBhdXRob3I6IGN0eC5hdXRob3JJZFxyXG4gICAgICAgICAgICAvLyAgICAgfSksIFxyXG4gICAgICAgICAgICAvLyAgICAgLy9Ub0RvOiB3aGF0IGFib3V0IGdsb2JhbCBwYXJhbWV0ZXJzP1xyXG4gICAgICAgICAgICAvLyAgICAgLy9Ub0RvOiByZXR1cm4gc3RhdGUgb2JqZWN0IHVzZWZ1bCBib3VuZCB0byBidXR0b24gc3RhdGU/XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIERNX1NPVVRIOiBbXHJcbiAgICAgICAgICAgICAgICBidXR0b24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXp6OiAnZGFwcGxldC1kbS1zb3V0aC1tZXRhbWFzaycsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBHTk9TSVNfSUNPTixcclxuICAgICAgICAgICAgICAgICAgICBleGVjOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGN0eCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3JlLnNlbmRXYWxsZXRDb25uZWN0VHgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWQ6IGN0eC50d2VldElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXV0aG9yOiBjdHguYXV0aG9ySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Ub0RvOiB3aGF0IGFib3V0IGdsb2JhbCBwYXJhbWV0ZXJzP1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVG9EbzogcmV0dXJuIHN0YXRlIG9iamVjdCB1c2VmdWwgYm91bmQgdG8gYnV0dG9uIHN0YXRlP1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbGFiZWw6IChjdHg6YW55KSA9PiBjdHgudGV4dCAvL1RvRG86IGltcGxlbWVudCBiaW5kaW5nIGFuZCByZWxvYWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTsgLy9hZGQgZmVhdHVyZSBjb25maWdcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3QoXCJ0d2l0dGVyLWFkYXB0ZXIuZGFwcGxldC1iYXNlLmV0aFwiKSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG4gICAgXSwgVHdpdHRlckZlYXR1cmUucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcclxuICAgIFR3aXR0ZXJGZWF0dXJlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgSW5qZWN0YWJsZSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXHJcbiAgICBdLCBUd2l0dGVyRmVhdHVyZSk7XHJcbiAgICByZXR1cm4gVHdpdHRlckZlYXR1cmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFR3aXR0ZXJGZWF0dXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9