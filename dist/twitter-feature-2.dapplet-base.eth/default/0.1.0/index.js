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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAgCAYAAADwvkPPAAAACXBIWXMAAAsTAAALEwEAmpwYAAADn0lEQVRIiaWWTWxUVRTHf+e+GabfIrXFmGhNIJhIUIhdWKsGEjFRE+JmKEVropIWOqVS2krRAGM0xlBmEGypNSHxI+l0SoILidWdLsREAkSQpPUrcWEwtoSkbVqmM+8eF7STmelMp9Szevd//vd3T/LuO+fBEqKut/PZxv5Gbz6fyWdo6OuoFOzgZLws8L9hcUsIuFtF3/H3dt67bNj2Ux3PgL48tyxz1H6wmF9yJfzhtkLHZ64Aa9MzWjsYCJ+/o8qcAvPWQhCA9PiH/M6SYf6P2x9GOZDjnE2esft3LQkWDAaN49IP5LwKqvL+Kz0Hy/PCRu+ZfA14MhcIAGHVrMy+t1BOifoP31htvZ4RgZWLwuYLVFMdbem+lL0yrye0RBCAiNieYDCYZCQf6nvatyq8lLUEuArMZEnVjFZONqTB/OG2QjX0ZRgTqA6g8ng0EHpEPDwAehhkLO0g5ai//8BdSZjH57yNsmau+jGQd7FOVUFx2etg1+/obf/JxjmMsV+4MbcKpFFgdI5Xadx4EEDqe9rWq5jLoFcVTky48Wi5z1mVSHj2ALtBK1IKcVGNGnG6140VXxmtmHoBtEOhVo1sNFacLaCbB5vD1ajzy0rH90ki4fwFeigDBOAgstNiL49UTAyr2ulIc2izMfYJXPuU+If8jvNv1TYR3afwdLYXkCcuisrR6+MlZ50NW547JNAHPLgMEMB9CP6Sotm4sWJPq5pqkO+XCbuoojUer3vaeF15VIzucgtjflV5EfhtiZAbCE1GprcalR1x19loBlrCX6N6y8ys+FWgylsqmxT2ATdzQCxKb6zk1kNqZcJq0TWLFESbQ8MGwK0o7RLkd0RPxCe54FhGXJ9dCxwHEkmM6A8G85hrnI98UwVREY0AUyumaYeUD73uZOcacewloOz2Rs4ZY/YDqGuPIPrNjRLzZfkkBxV9k9stylWoiQZCFwCSHfPa8PmbG56v/RPBPyetU9XdqiRcj6cL164umuUcsC25TzkSbQkNzjPSukak5diQIv0pkhe0w0kk/haRr0i/Pj/+M16aNmAWNEcbc9vmukRqFGesp9Q1Dd8Fg4lUcQHszP7jM8ayHXQ6MzcfKtIabe3+I1PPOlAie0MjItKcg3U2uufYp9kSOUddpDn0mSCfZ8jXxUMTgt4RDCDBdCClb2Esr0aaQuO5/IvCzgROTVlX64AY6MmBvaFvF/Pn/XGJtoZ/VpU6N6Zd+bz/AdGOYJE0REqSAAAAAElFTkSuQmCC"

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
var ETHEREUM_ICON = __webpack_require__(/*! ./ethereum.png */ "./src/ethereum.png");
var TwitterFeature = /** @class */ (function () {
    function TwitterFeature() {
        console.log('Feature2: created');
        this.init();
    }
    TwitterFeature.prototype.init = function () {
        console.log("feature-2: this.adapter.actionFactories>", this.adapter.actionFactories);
        var _a = this.adapter.actionFactories, button = _a.button, menuItem = _a.menuItem;
        this.adapter.addFeature({
            TWEET_SOUTH: [
                button({
                    clazz: 'dapplet-tweet-south-ethereum-2',
                    img: ETHEREUM_ICON,
                    init: function (ctx) {
                    },
                    exec: function (ctx) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.state.label = 'TX';
                                        this.state.disabled = true;
                                        this.state.loading = true;
                                        return [4 /*yield*/, Core.sendWalletConnectTx('1', ctx)];
                                    case 1:
                                        _a.sent();
                                        this.state.label = "NEW";
                                        this.state.disabled = false;
                                        this.state.loading = false;
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                    //ToDo: what about global parameters?
                    //ToDo: return state object useful bound to button state?
                    label: "NEW" //ToDo: implement binding and reload
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
                    clazz: 'dapplet-dm-south-ethereum-2',
                    img: ETHEREUM_ICON,
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
            ],
        });
    }; //init()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V0aGVyZXVtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlDQUFpQyxvMEM7Ozs7Ozs7Ozs7OztBQ0FwQjtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsb0JBQW9CLG1CQUFPLENBQUMsMENBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJNQUFBQWdDQVlBQUFEd3ZrUFBBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBRG4wbEVRVlJJaWFXV1RXeFVWUlRIZitlK0dhYmZJclhGbUdoTklKaElVSWhkV0tzR0VqRlJFK0ptS0VWcm9wSVdPcVZTMmtyUkFHTTB4bEJtRUd5cE5TSHhJK2wwU29JTGlkV2RMc1JFQWtTUXBQVXJjV0V3dG9Ta2JWcW1NKzhlRjdTVG1lbE1wOVN6ZXZkLy92ZDNUL0x1TytmQkVxS3V0L1BaeHY1R2J6NmZ5V2RvNk91b0ZPemdaTHdzOEw5aGNVc0l1RnRGMy9IM2R0NjdiTmoyVXgzUGdMNDh0eXh6MUg2d21GOXlKZnpodGtMSFo2NEFhOU16V2pzWUNKKy9vOHFjQXZQV1FoQ0E5UGlIL002U1lmNlAyeDlHT1pEam5FMmVzZnQzTFFrV0RBYU40OUlQNUx3S3F2TCtLejBIeS9QQ1J1K1pmQTE0TWhjSUFHSFZyTXkrdDFCT2lmb1AzMWh0dlo0UmdaV0x3dVlMVkZNZGJlbStsTDB5cnllMFJCQ0FpTmllWURDWVpDUWY2bnZhdHlxOGxMVUV1QXJNWkVuVmpGWk9OcVRCL09HMlFqWDBaUmdUcUE2ZzhuZzBFSHBFUER3QWVoaGtMTzBnNWFpLy84QmRTWmpINTd5TnNtYXUrakdRZDdGT1ZVRngyZXRnMSsvb2JmL0p4am1Nc1YrNE1iY0twRkZnZEk1WGFkeDRFRURxZTlyV3E1akxvRmNWVGt5NDhXaTV6MW1WU0hqMkFMdEJLMUlLY1ZHTkduRzYxNDBWWHhtdG1Ib0J0RU9oVm8xc05GYWNMYUNiQjV2RDFhanp5MHJIOTBraTRmd0ZlaWdEQk9BZ3N0TmlMNDlVVEF5cjJ1bEljMml6TWZZSlhQdVUrSWY4anZOdjFUWVIzYWZ3ZExZWGtDY3Vpc3JSNitNbFo1ME5XNTQ3Sk5BSFBMZ01FTUI5Q1A2U290bTRzV0pQcTVwcWtPK1hDYnVvb2pVZXIzdmFlRjE1Vkl6dWNndGpmbFY1RWZodGlaQWJDRTFHcHJjYWxSMXgxOWxvQmxyQ1g2TjZ5OHlzK0ZXZ3lsc3FteFQyQVRkelFDeEtiNnprMWtOcVpjSnEwVFdMRkVTYlE4TUd3SzBvN1JMa2QwUlB4Q2U1NEZoR1hKOWRDeHdIRWttTTZBOEc4NWhybkk5OFV3VlJFWTBBVXl1bWFZZVVENzN1Wk9jYWNld2xvT3oyUnM0WlkvWURxR3VQSVByTmpSTHpaZmtrQnhWOWs5c3R5bFdvaVFaQ0Z3Q1NIZlBhOFBtYkc1NnYvUlBCUHlldFU5WGRxaVJjajZjTDE2NHVtdVVjc0MyNVR6a1NiUWtOempQU3VrYWs1ZGlRSXYwcGtoZTB3MGtrL2hhUnIwaS9Qai8rTTE2YU5tQVdORWNiYzl2bXVrUnFGR2VzcDlRMURkOEZnNGxVY1FIc3pQN2pNOGF5SFhRNk16Y2ZLdElhYmUzK0kxUFBPbEFpZTBNakl0S2NnM1UydXVmWXA5a1NPVWRkcERuMG1TQ2ZaOGpYeFVNVGd0NFJEQ0RCZENDbGIyRXNyMGFhUXVPNS9JdkN6Z1JPVFZsWDY0QVk2TW1CdmFGdkYvUG4vWEdKdG9aL1ZwVTZONlpkK2J6L0FkR09ZSkUwUkVxU0FBQUFBRWxGVGtTdVFtQ0NcIiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRVRIRVJFVU1fSUNPTiA9IHJlcXVpcmUoXCIuL2V0aGVyZXVtLnBuZ1wiKTtcbnZhciBUd2l0dGVyRmVhdHVyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUd2l0dGVyRmVhdHVyZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZlYXR1cmUyOiBjcmVhdGVkJyk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBUd2l0dGVyRmVhdHVyZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmZWF0dXJlLTI6IHRoaXMuYWRhcHRlci5hY3Rpb25GYWN0b3JpZXM+XCIsIHRoaXMuYWRhcHRlci5hY3Rpb25GYWN0b3JpZXMpO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFkYXB0ZXIuYWN0aW9uRmFjdG9yaWVzLCBidXR0b24gPSBfYS5idXR0b24sIG1lbnVJdGVtID0gX2EubWVudUl0ZW07XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRGZWF0dXJlKHtcbiAgICAgICAgICAgIFRXRUVUX1NPVVRIOiBbXG4gICAgICAgICAgICAgICAgYnV0dG9uKHtcbiAgICAgICAgICAgICAgICAgICAgY2xheno6ICdkYXBwbGV0LXR3ZWV0LXNvdXRoLWV0aGVyZXVtLTInLFxuICAgICAgICAgICAgICAgICAgICBpbWc6IEVUSEVSRVVNX0lDT04sXG4gICAgICAgICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhlYzogZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGFiZWwgPSAnVFgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQ29yZS5zZW5kV2FsbGV0Q29ubmVjdFR4KCcxJywgY3R4KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGFiZWwgPSBcIk5FV1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvL1RvRG86IHdoYXQgYWJvdXQgZ2xvYmFsIHBhcmFtZXRlcnM/XG4gICAgICAgICAgICAgICAgICAgIC8vVG9EbzogcmV0dXJuIHN0YXRlIG9iamVjdCB1c2VmdWwgYm91bmQgdG8gYnV0dG9uIHN0YXRlP1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJORVdcIiAvL1RvRG86IGltcGxlbWVudCBiaW5kaW5nIGFuZCByZWxvYWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFRXRUVUX0NPTUJPOiBbXG4gICAgICAgICAgICAvLyBtZW51SXRlbSh7XG4gICAgICAgICAgICAvLyAgICAgY2xheno6ICcnLFxuICAgICAgICAgICAgLy8gICAgIHRleHQ6IFwiaGVsbG8gb25lXCIsIFxuICAgICAgICAgICAgLy8gICAgIGV4ZWM6IChjdHg6YW55KSA9PiBjb3JlLnNlbmRXYWxsZXRDb25uZWN0VHgoe1xuICAgICAgICAgICAgLy8gICAgICAgICBpZDogY3R4LnR3ZWV0SWQsXG4gICAgICAgICAgICAvLyAgICAgICAgIGF1dGhvcjogY3R4LmF1dGhvcklkXG4gICAgICAgICAgICAvLyAgICAgfSksIFxuICAgICAgICAgICAgLy8gICAgIC8vVG9Ebzogd2hhdCBhYm91dCBnbG9iYWwgcGFyYW1ldGVycz9cbiAgICAgICAgICAgIC8vICAgICAvL1RvRG86IHJldHVybiBzdGF0ZSBvYmplY3QgdXNlZnVsIGJvdW5kIHRvIGJ1dHRvbiBzdGF0ZT9cbiAgICAgICAgICAgIC8vIH0pICAgICAgICAgICBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBETV9TT1VUSDogW1xuICAgICAgICAgICAgICAgIGJ1dHRvbih7XG4gICAgICAgICAgICAgICAgICAgIGNsYXp6OiAnZGFwcGxldC1kbS1zb3V0aC1ldGhlcmV1bS0yJyxcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBFVEhFUkVVTV9JQ09OLFxuICAgICAgICAgICAgICAgICAgICBleGVjOiBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShjdHgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvcmUuc2VuZFdhbGxldENvbm5lY3RUeCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWQ6IGN0eC50d2VldElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGF1dGhvcjogY3R4LmF1dGhvcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vVG9Ebzogd2hhdCBhYm91dCBnbG9iYWwgcGFyYW1ldGVycz9cbiAgICAgICAgICAgICAgICAgICAgLy9Ub0RvOiByZXR1cm4gc3RhdGUgb2JqZWN0IHVzZWZ1bCBib3VuZCB0byBidXR0b24gc3RhdGU/XG4gICAgICAgICAgICAgICAgICAgIC8vbGFiZWw6IChjdHg6YW55KSA9PiBjdHgudGV4dCAvL1RvRG86IGltcGxlbWVudCBiaW5kaW5nIGFuZCByZWxvYWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfTsgLy9pbml0KClcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0KFwidHdpdHRlci1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgVHdpdHRlckZlYXR1cmUucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcbiAgICBUd2l0dGVyRmVhdHVyZSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBJbmplY3RhYmxlLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG4gICAgXSwgVHdpdHRlckZlYXR1cmUpO1xuICAgIHJldHVybiBUd2l0dGVyRmVhdHVyZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyRmVhdHVyZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=