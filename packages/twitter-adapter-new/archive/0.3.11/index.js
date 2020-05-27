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

/***/ "./node_modules/decouple/index.js":
/*!****************************************!*\
  !*** ./node_modules/decouple/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
}());

function decouple(node, event, fn) {
  var eve,
      tracking = false;

  function captureEvent(e) {
    eve = e;
    track();
  }

  function track() {
    if (!tracking) {
      requestAnimFrame(update);
      tracking = true;
    }
  }

  function update() {
    fn.call(node, eve);
    tracking = false;
  }

  node.addEventListener(event, captureEvent, false);

  return captureEvent;
}

/**
 * Expose decouple
 */
module.exports = decouple;


/***/ }),

/***/ "./node_modules/emitter/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/emitter/dist/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.__esModule = true;
/**
 * Creates a new instance of Emitter.
 * @class
 * @returns {Object} Returns a new instance of Emitter.
 * @example
 * // Creates a new instance of Emitter.
 * var Emitter = require('emitter');
 *
 * var emitter = new Emitter();
 */

var Emitter = (function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  /**
   * Adds a listener to the collection for the specified event.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The event name.
   * @param {Function} listener - A listener function to add.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Add an event listener to "foo" event.
   * emitter.on('foo', listener);
   */

  Emitter.prototype.on = function on(event, listener) {
    // Use the current collection or create it.
    this._eventCollection = this._eventCollection || {};

    // Use the current collection of an event or create it.
    this._eventCollection[event] = this._eventCollection[event] || [];

    // Appends the listener into the collection of the given event
    this._eventCollection[event].push(listener);

    return this;
  };

  /**
   * Adds a listener to the collection for the specified event that will be called only once.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The event name.
   * @param {Function} listener - A listener function to add.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Will add an event handler to "foo" event once.
   * emitter.once('foo', listener);
   */

  Emitter.prototype.once = function once(event, listener) {
    var self = this;

    function fn() {
      self.off(event, fn);
      listener.apply(this, arguments);
    }

    fn.listener = listener;

    this.on(event, fn);

    return this;
  };

  /**
   * Removes a listener from the collection for the specified event.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The event name.
   * @param {Function} listener - A listener function to remove.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Remove a given listener.
   * emitter.off('foo', listener);
   */

  Emitter.prototype.off = function off(event, listener) {

    var listeners = undefined;

    // Defines listeners value.
    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
      return this;
    }

    listeners.forEach(function (fn, i) {
      if (fn === listener || fn.listener === listener) {
        // Removes the given listener.
        listeners.splice(i, 1);
      }
    });

    // Removes an empty event collection.
    if (listeners.length === 0) {
      delete this._eventCollection[event];
    }

    return this;
  };

  /**
   * Execute each item in the listener collection in order with the specified data.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The name of the event you want to emit.
   * @param {...Object} data - Data to pass to the listeners.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Emits the "foo" event with 'param1' and 'param2' as arguments.
   * emitter.emit('foo', 'param1', 'param2');
   */

  Emitter.prototype.emit = function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var listeners = undefined;

    // Defines listeners value.
    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
      return this;
    }

    // Clone listeners
    listeners = listeners.slice(0);

    listeners.forEach(function (fn) {
      return fn.apply(_this, args);
    });

    return this;
  };

  return Emitter;
})();

/**
 * Exports Emitter
 */
exports["default"] = Emitter;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/slideout/index.js":
/*!****************************************!*\
  !*** ./node_modules/slideout/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */
var decouple = __webpack_require__(/*! decouple */ "./node_modules/decouple/index.js");
var Emitter = __webpack_require__(/*! emitter */ "./node_modules/emitter/dist/index.js");

/**
 * Privates
 */
var scrollTimeout;
var scrolling = false;
var doc = window.document;
var html = doc.documentElement;
var msPointerSupported = window.navigator.msPointerEnabled;
var touch = {
  'start': msPointerSupported ? 'MSPointerDown' : 'touchstart',
  'move': msPointerSupported ? 'MSPointerMove' : 'touchmove',
  'end': msPointerSupported ? 'MSPointerUp' : 'touchend'
};
var prefix = (function prefix() {
  var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
  var styleDeclaration = doc.getElementsByTagName('script')[0].style;
  for (var prop in styleDeclaration) {
    if (regex.test(prop)) {
      return '-' + prop.match(regex)[0].toLowerCase() + '-';
    }
  }
  // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
  // However (prop in style) returns the correct value, so we'll have to test for
  // the precence of a specific property
  if ('WebkitOpacity' in styleDeclaration) { return '-webkit-'; }
  if ('KhtmlOpacity' in styleDeclaration) { return '-khtml-'; }
  return '';
}());
function extend(destination, from) {
  for (var prop in from) {
    if (from[prop]) {
      destination[prop] = from[prop];
    }
  }
  return destination;
}
function inherits(child, uber) {
  child.prototype = extend(child.prototype || {}, uber.prototype);
}
function hasIgnoredElements(el) {
  while (el.parentNode) {
    if (el.getAttribute('data-slideout-ignore') !== null) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}

/**
 * Slideout constructor
 */
function Slideout(options) {
  options = options || {};

  // Sets default values
  this._startOffsetX = 0;
  this._currentOffsetX = 0;
  this._opening = false;
  this._moved = false;
  this._opened = false;
  this._preventOpen = false;
  this._touch = options.touch === undefined ? true : options.touch && true;
  this._side = options.side || 'left';

  // Sets panel
  this.panel = options.panel;
  this.menu = options.menu;

  // Sets  classnames
  if (!this.panel.classList.contains('slideout-panel')) {
    this.panel.classList.add('slideout-panel');
  }
  if (!this.panel.classList.contains('slideout-panel-' + this._side)) {
    this.panel.classList.add('slideout-panel-' + this._side);
  }
  if (!this.menu.classList.contains('slideout-menu')) {
    this.menu.classList.add('slideout-menu');
  }
  if (!this.menu.classList.contains('slideout-menu-' + this._side)) {
    this.menu.classList.add('slideout-menu-' + this._side);
  }

  // Sets options
  this._fx = options.fx || 'ease';
  this._duration = parseInt(options.duration, 10) || 300;
  this._tolerance = parseInt(options.tolerance, 10) || 70;
  this._padding = this._translateTo = parseInt(options.padding, 10) || 256;
  this._orientation = this._side === 'right' ? -1 : 1;
  this._translateTo *= this._orientation;

  // Init touch events
  if (this._touch) {
    this._initTouchEvents();
  }
}

/**
 * Inherits from Emitter
 */
inherits(Slideout, Emitter);

/**
 * Opens the slideout menu.
 */
Slideout.prototype.open = function() {
  var self = this;
  this.emit('beforeopen');
  if (!html.classList.contains('slideout-open')) {
    html.classList.add('slideout-open');
  }
  this._setTransition();
  this._translateXTo(this._translateTo);
  this._opened = true;
  setTimeout(function() {
    self.panel.style.transition = self.panel.style['-webkit-transition'] = '';
    self.emit('open');
  }, this._duration + 50);
  return this;
};

/**
 * Closes slideout menu.
 */
Slideout.prototype.close = function() {
  var self = this;
  if (!this.isOpen() && !this._opening) {
    return this;
  }
  this.emit('beforeclose');
  this._setTransition();
  this._translateXTo(0);
  this._opened = false;
  setTimeout(function() {
    html.classList.remove('slideout-open');
    self.panel.style.transition = self.panel.style['-webkit-transition'] = self.panel.style[prefix + 'transform'] = self.panel.style.transform = '';
    self.emit('close');
  }, this._duration + 50);
  return this;
};

/**
 * Toggles (open/close) slideout menu.
 */
Slideout.prototype.toggle = function() {
  return this.isOpen() ? this.close() : this.open();
};

/**
 * Returns true if the slideout is currently open, and false if it is closed.
 */
Slideout.prototype.isOpen = function() {
  return this._opened;
};

/**
 * Translates panel and updates currentOffset with a given X point
 */
Slideout.prototype._translateXTo = function(translateX) {
  this._currentOffsetX = translateX;
  this.panel.style[prefix + 'transform'] = this.panel.style.transform = 'translateX(' + translateX + 'px)';
  return this;
};

/**
 * Set transition properties
 */
Slideout.prototype._setTransition = function() {
  this.panel.style[prefix + 'transition'] = this.panel.style.transition = prefix + 'transform ' + this._duration + 'ms ' + this._fx;
  return this;
};

/**
 * Initializes touch event
 */
Slideout.prototype._initTouchEvents = function() {
  var self = this;

  /**
   * Decouple scroll event
   */
  this._onScrollFn = decouple(doc, 'scroll', function() {
    if (!self._moved) {
      clearTimeout(scrollTimeout);
      scrolling = true;
      scrollTimeout = setTimeout(function() {
        scrolling = false;
      }, 250);
    }
  });

  /**
   * Prevents touchmove event if slideout is moving
   */
  this._preventMove = function(eve) {
    if (self._moved) {
      eve.preventDefault();
    }
  };

  doc.addEventListener(touch.move, this._preventMove);

  /**
   * Resets values on touchstart
   */
  this._resetTouchFn = function(eve) {
    if (typeof eve.touches === 'undefined') {
      return;
    }

    self._moved = false;
    self._opening = false;
    self._startOffsetX = eve.touches[0].pageX;
    self._preventOpen = (!self._touch || (!self.isOpen() && self.menu.clientWidth !== 0));
  };

  this.panel.addEventListener(touch.start, this._resetTouchFn);

  /**
   * Resets values on touchcancel
   */
  this._onTouchCancelFn = function() {
    self._moved = false;
    self._opening = false;
  };

  this.panel.addEventListener('touchcancel', this._onTouchCancelFn);

  /**
   * Toggles slideout on touchend
   */
  this._onTouchEndFn = function() {
    if (self._moved) {
      self.emit('translateend');
      (self._opening && Math.abs(self._currentOffsetX) > self._tolerance) ? self.open() : self.close();
    }
    self._moved = false;
  };

  this.panel.addEventListener(touch.end, this._onTouchEndFn);

  /**
   * Translates panel on touchmove
   */
  this._onTouchMoveFn = function(eve) {
    if (
      scrolling ||
      self._preventOpen ||
      typeof eve.touches === 'undefined' ||
      hasIgnoredElements(eve.target)
    ) {
      return;
    }

    var dif_x = eve.touches[0].clientX - self._startOffsetX;
    var translateX = self._currentOffsetX = dif_x;

    if (Math.abs(translateX) > self._padding) {
      return;
    }

    if (Math.abs(dif_x) > 20) {

      self._opening = true;

      var oriented_dif_x = dif_x * self._orientation;

      if (self._opened && oriented_dif_x > 0 || !self._opened && oriented_dif_x < 0) {
        return;
      }

      if (!self._moved) {
        self.emit('translatestart');
      }

      if (oriented_dif_x <= 0) {
        translateX = dif_x + self._padding * self._orientation;
        self._opening = false;
      }

      if (!(self._moved && html.classList.contains('slideout-open'))) {
        html.classList.add('slideout-open');
      }

      self.panel.style[prefix + 'transform'] = self.panel.style.transform = 'translateX(' + translateX + 'px)';
      self.emit('translate', translateX);
      self._moved = true;
    }

  };

  this.panel.addEventListener(touch.move, this._onTouchMoveFn);

  return this;
};

/**
 * Enable opening the slideout via touch events.
 */
Slideout.prototype.enableTouch = function() {
  this._touch = true;
  return this;
};

/**
 * Disable opening the slideout via touch events.
 */
Slideout.prototype.disableTouch = function() {
  this._touch = false;
  return this;
};

/**
 * Destroy an instance of slideout.
 */
Slideout.prototype.destroy = function() {
  // Close before clean
  this.close();

  // Remove event listeners
  doc.removeEventListener(touch.move, this._preventMove);
  this.panel.removeEventListener(touch.start, this._resetTouchFn);
  this.panel.removeEventListener('touchcancel', this._onTouchCancelFn);
  this.panel.removeEventListener(touch.end, this._onTouchEndFn);
  this.panel.removeEventListener(touch.move, this._onTouchMoveFn);
  doc.removeEventListener('scroll', this._onScrollFn);

  // Remove methods
  this.open = this.close = function() {};

  // Return the instance so it can be easily dereferenced
  return this;
};

/**
 * Expose Slideout
 */
module.exports = Slideout;


/***/ }),

/***/ "./src/badge.ts":
/*!**********************!*\
  !*** ./src/badge.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
class Badge {
    mount() {
        var _a;
        if (!this.el)
            this._createElement();
        const { img, vertical, horizontal, hidden } = this.state;
        if (!hidden) {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                this.el.appendChild(imgTag);
            }
            const imgTag = this.el.firstChild;
            switch (this.insPointName) {
                case 'TWEET_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '15px';
                    imgTag.style.height = '15px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '2px';
                    imgTag.style[horizontal] = '3px';
                    break;
                case 'TWEET_AVATAR_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '24px';
                    imgTag.style.height = '24px';
                    imgTag.style.position = 'absolute';
                    imgTag.style[vertical] = '-2px';
                    imgTag.style[horizontal] = '-7px';
                    break;
                case 'PROFILE_AVATAR_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '32px';
                    imgTag.style.height = '32px';
                    break;
                case 'PROFILE_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '20px';
                    imgTag.style.height = '20px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '2px';
                    break;
                case 'HEADING_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '24px';
                    imgTag.style.height = '24px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '3px';
                    imgTag.style[horizontal] = '1px';
                    break;
                case 'SUSPENDED_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '20px';
                    imgTag.style.height = '20px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '3px';
                    break;
                case 'PROFILE_BUTTON_GROUP':
                    imgTag.src = img;
                    imgTag.style.width = '18px';
                    imgTag.style.height = '18px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '9px';
                    imgTag.style[horizontal] = '10px';
                    break;
            }
        }
        else {
            (_a = this.el.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        }
    }
    unmount() {
        this.el && this.el.remove();
    }
    _createElement() {
        var _a, _b;
        switch (this.insPointName) {
            case 'SUSPENDED_USERNAME_BADGE':
            case 'PROFILE_USERNAME_BADGE':
                this.el = document.createElement('span');
                this.el.style.margin = '2px';
                break;
            case 'HEADING_USERNAME_BADGE':
                this.el = document.createElement('span');
                break;
            case 'PROFILE_AVATAR_BADGE':
                this.el = document.createElement('div');
                this.el.style.position = 'absolute';
                break;
            case 'PROFILE_BUTTON_GROUP':
                this.el = document.createElement('div');
                this.el.classList.add("dapplet-widget-profile-button", "css-18t94o4", "css-1dbjc4n", "r-1niwhzg", "r-1xl5njo", "r-sdzlij", "r-1phboty", "r-rs99b7", "r-1w2pmg", "r-15d164r", "r-zso239", "r-1vuscfd", "r-53xb7h", "r-mk0yit", "r-o7ynqc", "r-6416eg", "r-lrvibr");
                const styleTag = document.createElement('style');
                styleTag.type = 'text/css';
                styleTag.innerText = `.dapplet-widget-profile-button:hover {
                        background-color: rgba(244, 93, 34, 0.1)
                    }`;
                document.head.appendChild(styleTag);
                break;
            default:
                this.el = document.createElement('div');
        }
        this.mount();
        (_b = (_a = this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
    }
}
exports.Badge = Badge;


/***/ }),

/***/ "./src/button.ts":
/*!***********************!*\
  !*** ./src/button.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
class Button {
    mount() {
        if (!this.el)
            this._createElement();
        const { img, label, loading, disabled, hidden } = this.state;
        if (hidden) {
            this.el.innerHTML = '';
            return;
        }
        if (this.insPointName === 'TWEET_SOUTH') {
            const htmlString = `<div aria-haspopup="false" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr">
                    <div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0">
                        <div class="css-1dbjc4n r-xoduu5">
                            <div class="css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
                            ${loading ? `<svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;">
                                <circle cx="50" cy="50" fill="none" stroke="#1da1f2" stroke-width="14" r="40" stroke-dasharray="188.49555921538757 64.83185307179586" transform="rotate(77.5793 50 50)">
                                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                                </circle>
                            </svg>` : `<img height="18" src="${img}" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi">`}
                        </div>
                        
                        ${(label === null || label === void 0 ? void 0 : label.toString()) ? `<div class="css-1dbjc4n r-xoduu5 r-1udh08x">
                                <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0">
                                    <span ${disabled ? 'style="color:#aaa;"' : ''} class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">${label}</span>
                                </span>
                            </div>` : ''}
                    </div>
                </div>`;
            this.el.innerHTML = htmlString;
        }
        else if (this.insPointName === 'PROFILE_BUTTON_GROUP') {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                imgTag.src = img;
                imgTag.style.width = '18px';
                imgTag.style.height = '18px';
                imgTag.style.position = 'relative';
                imgTag.style.top = '9px';
                imgTag.style.left = '10px';
                this.el.appendChild(imgTag);
            }
        }
        else if (this.insPointName === 'TWEET_STARTER') {
            const htmlString = `<div style="margin: 0 10px" aria-haspopup="true" aria-label="More" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="caret">
                    <div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0">
                    <div class="css-1dbjc4n r-xoduu5">
                        <div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-podbf7 r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
                        <img height="25" src="${img}" class="r-4qtqp9 r-yyyyoo r-ip8ujx r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-27tl0q">
                    </div>
                    </div>
                </div>`;
            this.el.innerHTML = htmlString;
        }
    }
    unmount() {
        this.el && this.el.remove();
    }
    _createElement() {
        var _a, _b;
        const styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        this.el = document.createElement('div');
        if (this.insPointName === 'TWEET_SOUTH') {
            this.el.classList.add('css-1dbjc4n', 'r-1iusvr4', 'r-18u37iz', 'r-16y2uox', 'r-1h0z5md');
            styleTag.innerText = `
                .dapplet-widget > div[role="button"] > div:hover > .css-1dbjc4n.r-xoduu5 > .r-sdzlij {
                    background-color: rgba(29, 161, 242, 0.1); 
                    transition-property: background-color, box-shadow; 
                    transition-duration: 0.2s;
                }
                .dapplet-widget > div[role="button"] > div:hover {
                    color:rgba(29,161,242,1.00);
                }`;
        }
        else if (this.insPointName === 'PROFILE_BUTTON_GROUP') {
            this.el.classList.add("dapplet-widget-profile-button", "css-18t94o4", "css-1dbjc4n", "r-1niwhzg", "r-1xl5njo", "r-sdzlij", "r-1phboty", "r-rs99b7", "r-1w2pmg", "r-15d164r", "r-zso239", "r-1vuscfd", "r-53xb7h", "r-mk0yit", "r-o7ynqc", "r-6416eg", "r-lrvibr", "r-p1n3y5");
            styleTag.innerText = `.dapplet-widget-profile-button:hover {
                background-color: rgba(29, 161, 242, 0.1)
            }`;
        }
        this.el.addEventListener("click", e => {
            var _a, _b;
            if (!this.state.disabled) {
                (_b = (_a = this.state).exec) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
            }
        });
        document.head.appendChild(styleTag);
        this.mount();
        (_b = (_a = this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
    }
}
exports.Button = Button;


/***/ }),

/***/ "./src/dapplet.png":
/*!*************************!*\
  !*** ./src/dapplet.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const button_1 = __webpack_require__(/*! ./button */ "./src/button.ts");
const picture_1 = __webpack_require__(/*! ./picture */ "./src/picture.ts");
const badge_1 = __webpack_require__(/*! ./badge */ "./src/badge.ts");
const starter_1 = __importDefault(__webpack_require__(/*! ./starter */ "./src/starter.ts"));
const slideout_1 = __importDefault(__webpack_require__(/*! slideout */ "./node_modules/slideout/index.js"));
let TwitterAdapter = /** @class */ (() => {
    let TwitterAdapter = class TwitterAdapter {
        // ToDo: refactor it
        constructor() {
            // ToDo: refactor it
            this.widgets = {
                button: this.adapter.createWidgetFactory(button_1.Button),
                picture: this.adapter.createWidgetFactory(picture_1.Picture),
                badge: this.adapter.createWidgetFactory(badge_1.Badge),
            };
            this.config = [{
                    containerSelector: "main[role=main]",
                    contextSelector: "article.css-1dbjc4n",
                    insPoints: {
                        TWEET_SOUTH: {
                            selector: "div[role=group] > *:last-child"
                        },
                        TWEET_COMBO: {
                            selector: "" //ToDo
                        },
                        PICTURE: {
                            selector: "div[lang] > *:last-child"
                        },
                        TWEET_AVATAR_BADGE: {
                            selector: "div.css-1dbjc4n.r-18kxxzh.r-1wbh5a2.r-13qz1uu > *:last-child"
                        },
                        TWEET_USERNAME_BADGE: {
                            selector: "div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-1f6r7vd > *:first-child",
                            insert: 'begin' // end
                        },
                        TWEET_STARTER: {
                            selector: "div.css-1dbjc4n.r-18u37iz.r-1h0z5md.r-1joea0r > *:first-child",
                            insert: 'begin'
                        }
                    },
                    contextType: 'tweet',
                    contextEvent: 'TWEET_EVENT',
                    // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                    contextBuilder: (tweetNode) => {
                        var _a, _b, _c, _d, _e;
                        // Adding of right margin to last twitter's native button
                        const classList = (_a = tweetNode.querySelector('div.css-1dbjc4n.r-1mlwlqe.r-18u37iz.r-18kxxzh.r-1h0z5md')) === null || _a === void 0 ? void 0 : _a.classList;
                        if (classList) {
                            classList.remove('r-18kxxzh');
                            classList.remove('r-1mlwlqe');
                            classList.add('r-1iusvr4');
                            classList.add('r-16y2uox');
                        }
                        tweetNode.parentNode.style.overflow = 'hidden';
                        const ctx = {
                            id: tweetNode.querySelector('a time').parentNode.href.split('/').pop(),
                            text: (_b = tweetNode.querySelector('div[lang]')) === null || _b === void 0 ? void 0 : _b.innerText,
                            authorFullname: (_c = tweetNode.querySelector('a:nth-child(1) div span span')) === null || _c === void 0 ? void 0 : _c.innerText,
                            authorUsername: (_d = tweetNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 > span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0')) === null || _d === void 0 ? void 0 : _d.innerText.replace('@', ''),
                            authorImg: (_e = tweetNode.querySelector('div.css-1dbjc4n.r-1awozwy.r-18kxxzh.r-5f2r5o img')) === null || _e === void 0 ? void 0 : _e.getAttribute('src')
                        };
                        const slideout = new slideout_1.default({
                            'panel': tweetNode,
                            'menu': document.createElement('div'),
                            'padding': 150,
                            'tolerance': 70
                        });
                        slideout.on('open', () => {
                            this.starter.openStarter(ctx);
                            slideout.close();
                        });
                        return ctx;
                    }
                },
                {
                    containerSelector: "main[role=main]",
                    contextSelector: "div.css-1dbjc4n.r-ku1wi2.r-1j3t67a.r-m611by",
                    insPoints: {
                        PROFILE_AVATAR_BADGE: {
                            selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1wtj0ep > *:last-child",
                            insert: 'end'
                        },
                        PROFILE_USERNAME_BADGE: {
                            selector: "div.css-1dbjc4n.r-15d164r.r-1g94qm0 div.css-901oao.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-1vr29t4.r-ad9z0x.r-bcqeeo.r-qvutc0 > *:last-child",
                            insert: "end"
                        },
                        PROFILE_BUTTON_GROUP: {
                            selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs > *:first-child",
                            insert: "begin"
                        }
                    },
                    contextType: 'profile',
                    contextEvent: 'PROFILE_EVENT',
                    // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                    contextBuilder: (titleInfoNode) => {
                        var _a, _b, _c;
                        // Adding of left margin to username in title
                        titleInfoNode.querySelector('div.css-1dbjc4n.r-15d164r.r-1g94qm0 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l').style.margin = '0px 0px 0px 32px';
                        return {
                            authorFullname: (_a = titleInfoNode.querySelector('div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > div > span:nth-child(1) > span')) === null || _a === void 0 ? void 0 : _a.innerText,
                            authorUsername: (_b = titleInfoNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 span')) === null || _b === void 0 ? void 0 : _b.innerText.replace('@', ''),
                            authorImg: (_c = titleInfoNode.querySelector('a > div.css-1dbjc4n.r-1adg3ll.r-1udh08x > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img')) === null || _c === void 0 ? void 0 : _c.getAttribute('src')
                        };
                    }
                },
                {
                    containerSelector: "main[role=main]",
                    contextSelector: "div.css-1dbjc4n.r-aqfbo4.r-14lw9ot.r-my5ep6.r-rull8r.r-qklmqi.r-gtdqiz.r-ipm5af.r-1g40b8q",
                    insPoints: {
                        HEADING_USERNAME_BADGE: {
                            selector: "h2[role=heading] div.r-18u37iz  > div.css-1dbjc4n.r-1awozwy.r-xoduu5.r-18u37iz.r-dnmrzs > *:last-child",
                            insert: "end"
                        }
                    },
                    contextType: 'heading',
                    contextEvent: 'HEADING_EVENT',
                    // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                    contextBuilder: (titleInfoNode) => {
                        var _a;
                        return {
                            profileFullname: (_a = titleInfoNode.querySelector('span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0 > span > span')) === null || _a === void 0 ? void 0 : _a.innerText.replace('@', ''),
                        };
                    }
                },
                {
                    containerSelector: "main[role=main]",
                    contextSelector: "div.css-1dbjc4n.r-1mi0q7o.r-1j3t67a.r-m611by",
                    insPoints: {
                        SUSPENDED_USERNAME_BADGE: {
                            selector: "div.css-901oao.css-bfa6kz.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-vw2c0b.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0 > *:last-child",
                            insert: "end"
                        }
                    },
                    contextType: 'suspended',
                    contextEvent: 'SUSPENDED_EVENT',
                    // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                    contextBuilder: (titleInfoNode) => {
                        var _a;
                        return {
                            profileUsername: (_a = titleInfoNode.querySelector('div.css-901oao.css-bfa6kz.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-vw2c0b.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0 > span > span')) === null || _a === void 0 ? void 0 : _a.innerText,
                        };
                    }
                }];
            this.adapter.attachConfig(this.config);
            this.starter = new starter_1.default(this);
            this.adapter.attachFeature(this.starter);
        }
        // ToDo: refactor it
        attachFeature(feature) {
            this.starter.attachFeature(feature);
            this.adapter.attachFeature(feature);
        }
        // ToDo: refactor it
        detachFeature(feature) {
            this.starter.detachFeature(feature);
            this.adapter.detachFeature(feature);
        }
    };
    __decorate([
        Inject("dynamic-adapter.dapplet-base.eth"),
        __metadata("design:type", Object)
    ], TwitterAdapter.prototype, "adapter", void 0);
    TwitterAdapter = __decorate([
        Injectable,
        __metadata("design:paramtypes", [])
    ], TwitterAdapter);
    return TwitterAdapter;
})();
exports.default = TwitterAdapter;


/***/ }),

/***/ "./src/picture.ts":
/*!************************!*\
  !*** ./src/picture.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
class Picture {
    mount() {
        if (!this.el)
            this._createElement();
        const { img, disabled, hidden } = this.state;
        if (hidden) {
            const htmlString = `<img src="${img}" />`;
            this.el.innerHTML = htmlString;
        }
        else {
            this.el.innerHTML = '';
        }
    }
    unmount() {
        this.el && this.el.remove();
    }
    _createElement() {
        var _a, _b;
        this.el = document.createElement('div');
        this.el.addEventListener("click", e => {
            var _a, _b;
            if (!this.state.disabled) {
                (_b = (_a = this.state).exec) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
            }
        });
        this.el.style.position = 'absolute';
        this.el.style.bottom = '15px';
        this.el.style.right = '15px';
        this.el.style.zIndex = '3';
        this.mount();
        (_b = (_a = this.state).init) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.ctx, this.state);
    }
}
exports.Picture = Picture;


/***/ }),

/***/ "./src/starter.ts":
/*!************************!*\
  !*** ./src/starter.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dapplet_png_1 = __importDefault(__webpack_require__(/*! ./dapplet.png */ "./src/dapplet.png"));
class Starter {
    constructor(adapter) {
        this.adapter = adapter;
        this.widgets = [];
        this._buttonId = 0;
        this._overlay = Core.overlay({ url: chrome.extension.getURL('starter.html'), title: 'Identity Management' });
        const { button } = this.adapter.widgets;
        this.config = {
            TWEET_STARTER: [
                // ToDo: think how to insert buttons without "virtual feature"
                button({
                    "DEFAULT": {
                        img: dapplet_png_1.default,
                        exec: (ctx) => this.openStarter(ctx)
                    }
                })
            ]
        };
    }
    openStarter(ctx) {
        this._overlay.sendAndListen('ctx', { ctx, buttons: this.widgets }, {
            'button_clicked': (op, { type, message }) => {
                var _a;
                const id = message;
                const button = this.widgets.find(b => b.id === id);
                (_a = button === null || button === void 0 ? void 0 : button.exec) === null || _a === void 0 ? void 0 : _a.call(button, ctx);
            }
        });
    }
    activate() {
        this.adapter.attachFeature(this);
    }
    deactivate() {
        this.adapter.detachFeature(this);
    }
    attachFeature(feature) {
        this.widgets.push(...(feature.config.TWEET_STARTER || []).map(c => (Object.assign(Object.assign({}, c), { feature, id: ++this._buttonId }))));
        delete feature.config.TWEET_STARTER;
    }
    detachFeature(feature) {
        this.widgets = this.widgets.filter(w => w.feature !== feature);
    }
}
exports.default = Starter;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVjb3VwbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VtaXR0ZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpZGVvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhZGdlLnRzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhcHBsZXQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcENhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxzQ0FBc0MsbUJBQU8sQ0FBQyx3Q0FBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDZFQUE2RTtBQUNuSCxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyw2QkFBNkI7QUFDekUsb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwR0FBMEcsT0FBTyxnQ0FBZ0M7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgIH07XG59KCkpO1xuXG5mdW5jdGlvbiBkZWNvdXBsZShub2RlLCBldmVudCwgZm4pIHtcbiAgdmFyIGV2ZSxcbiAgICAgIHRyYWNraW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gY2FwdHVyZUV2ZW50KGUpIHtcbiAgICBldmUgPSBlO1xuICAgIHRyYWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFjaygpIHtcbiAgICBpZiAoIXRyYWNraW5nKSB7XG4gICAgICByZXF1ZXN0QW5pbUZyYW1lKHVwZGF0ZSk7XG4gICAgICB0cmFja2luZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZuLmNhbGwobm9kZSwgZXZlKTtcbiAgICB0cmFja2luZyA9IGZhbHNlO1xuICB9XG5cbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYXB0dXJlRXZlbnQsIGZhbHNlKTtcblxuICByZXR1cm4gY2FwdHVyZUV2ZW50O1xufVxuXG4vKipcbiAqIEV4cG9zZSBkZWNvdXBsZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGRlY291cGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICogQGNsYXNzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICogdmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG4gKlxuICogdmFyIGVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICovXG5cbnZhciBFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRW1pdHRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW1pdHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gXCJmb29cIiBldmVudC5cbiAgICogZW1pdHRlci5vbignZm9vJywgbGlzdGVuZXIpO1xuICAgKi9cblxuICBFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIC8vIFVzZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uIG9yIGNyZWF0ZSBpdC5cbiAgICB0aGlzLl9ldmVudENvbGxlY3Rpb24gPSB0aGlzLl9ldmVudENvbGxlY3Rpb24gfHwge307XG5cbiAgICAvLyBVc2UgdGhlIGN1cnJlbnQgY29sbGVjdGlvbiBvZiBhbiBldmVudCBvciBjcmVhdGUgaXQuXG4gICAgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0gfHwgW107XG5cbiAgICAvLyBBcHBlbmRzIHRoZSBsaXN0ZW5lciBpbnRvIHRoZSBjb2xsZWN0aW9uIG9mIHRoZSBnaXZlbiBldmVudFxuICAgIHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0ucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50IHRoYXQgd2lsbCBiZSBjYWxsZWQgb25seSBvbmNlLlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBXaWxsIGFkZCBhbiBldmVudCBoYW5kbGVyIHRvIFwiZm9vXCIgZXZlbnQgb25jZS5cbiAgICogZW1pdHRlci5vbmNlKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGZuKCkge1xuICAgICAgc2VsZi5vZmYoZXZlbnQsIGZuKTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZm4ubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgIHRoaXMub24oZXZlbnQsIGZuKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICogQG1lbWJlcm9mISBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gQSBsaXN0ZW5lciBmdW5jdGlvbiB0byByZW1vdmUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gUmVtb3ZlIGEgZ2l2ZW4gbGlzdGVuZXIuXG4gICAqIGVtaXR0ZXIub2ZmKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIG9mZihldmVudCwgbGlzdGVuZXIpIHtcblxuICAgIHZhciBsaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZWZpbmVzIGxpc3RlbmVycyB2YWx1ZS5cbiAgICBpZiAoIXRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCAhKGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4sIGkpIHtcbiAgICAgIGlmIChmbiA9PT0gbGlzdGVuZXIgfHwgZm4ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIC8vIFJlbW92ZXMgdGhlIGdpdmVuIGxpc3RlbmVyLlxuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlcyBhbiBlbXB0eSBldmVudCBjb2xsZWN0aW9uLlxuICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRXhlY3V0ZSBlYWNoIGl0ZW0gaW4gdGhlIGxpc3RlbmVyIGNvbGxlY3Rpb24gaW4gb3JkZXIgd2l0aCB0aGUgc3BlY2lmaWVkIGRhdGEuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB5b3Ugd2FudCB0byBlbWl0LlxuICAgKiBAcGFyYW0gey4uLk9iamVjdH0gZGF0YSAtIERhdGEgdG8gcGFzcyB0byB0aGUgbGlzdGVuZXJzLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIEVtaXRzIHRoZSBcImZvb1wiIGV2ZW50IHdpdGggJ3BhcmFtMScgYW5kICdwYXJhbTInIGFzIGFyZ3VtZW50cy5cbiAgICogZW1pdHRlci5lbWl0KCdmb28nLCAncGFyYW0xJywgJ3BhcmFtMicpO1xuICAgKi9cblxuICBFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZWZpbmVzIGxpc3RlbmVycyB2YWx1ZS5cbiAgICBpZiAoIXRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCAhKGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDbG9uZSBsaXN0ZW5lcnNcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gRW1pdHRlcjtcbn0pKCk7XG5cbi8qKlxuICogRXhwb3J0cyBFbWl0dGVyXG4gKi9cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xudmFyIGRlY291cGxlID0gcmVxdWlyZSgnZGVjb3VwbGUnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xuXG4vKipcbiAqIFByaXZhdGVzXG4gKi9cbnZhciBzY3JvbGxUaW1lb3V0O1xudmFyIHNjcm9sbGluZyA9IGZhbHNlO1xudmFyIGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbnZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbnZhciBtc1BvaW50ZXJTdXBwb3J0ZWQgPSB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG52YXIgdG91Y2ggPSB7XG4gICdzdGFydCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJEb3duJyA6ICd0b3VjaHN0YXJ0JyxcbiAgJ21vdmUnOiBtc1BvaW50ZXJTdXBwb3J0ZWQgPyAnTVNQb2ludGVyTW92ZScgOiAndG91Y2htb3ZlJyxcbiAgJ2VuZCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJVcCcgOiAndG91Y2hlbmQnXG59O1xudmFyIHByZWZpeCA9IChmdW5jdGlvbiBwcmVmaXgoKSB7XG4gIHZhciByZWdleCA9IC9eKFdlYmtpdHxLaHRtbHxNb3p8bXN8TykoPz1bQS1aXSkvO1xuICB2YXIgc3R5bGVEZWNsYXJhdGlvbiA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0uc3R5bGU7XG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGVEZWNsYXJhdGlvbikge1xuICAgIGlmIChyZWdleC50ZXN0KHByb3ApKSB7XG4gICAgICByZXR1cm4gJy0nICsgcHJvcC5tYXRjaChyZWdleClbMF0udG9Mb3dlckNhc2UoKSArICctJztcbiAgICB9XG4gIH1cbiAgLy8gTm90aGluZyBmb3VuZCBzbyBmYXI/IFdlYmtpdCBkb2VzIG5vdCBlbnVtZXJhdGUgb3ZlciB0aGUgQ1NTIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIG9iamVjdC5cbiAgLy8gSG93ZXZlciAocHJvcCBpbiBzdHlsZSkgcmV0dXJucyB0aGUgY29ycmVjdCB2YWx1ZSwgc28gd2UnbGwgaGF2ZSB0byB0ZXN0IGZvclxuICAvLyB0aGUgcHJlY2VuY2Ugb2YgYSBzcGVjaWZpYyBwcm9wZXJ0eVxuICBpZiAoJ1dlYmtpdE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICctd2Via2l0LSc7IH1cbiAgaWYgKCdLaHRtbE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICcta2h0bWwtJzsgfVxuICByZXR1cm4gJyc7XG59KCkpO1xuZnVuY3Rpb24gZXh0ZW5kKGRlc3RpbmF0aW9uLCBmcm9tKSB7XG4gIGZvciAodmFyIHByb3AgaW4gZnJvbSkge1xuICAgIGlmIChmcm9tW3Byb3BdKSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wXSA9IGZyb21bcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cbmZ1bmN0aW9uIGluaGVyaXRzKGNoaWxkLCB1YmVyKSB7XG4gIGNoaWxkLnByb3RvdHlwZSA9IGV4dGVuZChjaGlsZC5wcm90b3R5cGUgfHwge30sIHViZXIucHJvdG90eXBlKTtcbn1cbmZ1bmN0aW9uIGhhc0lnbm9yZWRFbGVtZW50cyhlbCkge1xuICB3aGlsZSAoZWwucGFyZW50Tm9kZSkge1xuICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVvdXQtaWdub3JlJykgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFNsaWRlb3V0IGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNsaWRlb3V0KG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gU2V0cyBkZWZhdWx0IHZhbHVlc1xuICB0aGlzLl9zdGFydE9mZnNldFggPSAwO1xuICB0aGlzLl9jdXJyZW50T2Zmc2V0WCA9IDA7XG4gIHRoaXMuX29wZW5pbmcgPSBmYWxzZTtcbiAgdGhpcy5fbW92ZWQgPSBmYWxzZTtcbiAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gIHRoaXMuX3ByZXZlbnRPcGVuID0gZmFsc2U7XG4gIHRoaXMuX3RvdWNoID0gb3B0aW9ucy50b3VjaCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMudG91Y2ggJiYgdHJ1ZTtcbiAgdGhpcy5fc2lkZSA9IG9wdGlvbnMuc2lkZSB8fCAnbGVmdCc7XG5cbiAgLy8gU2V0cyBwYW5lbFxuICB0aGlzLnBhbmVsID0gb3B0aW9ucy5wYW5lbDtcbiAgdGhpcy5tZW51ID0gb3B0aW9ucy5tZW51O1xuXG4gIC8vIFNldHMgIGNsYXNzbmFtZXNcbiAgaWYgKCF0aGlzLnBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVvdXQtcGFuZWwnKSkge1xuICAgIHRoaXMucGFuZWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtcGFuZWwnKTtcbiAgfVxuICBpZiAoIXRoaXMucGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1wYW5lbC0nICsgdGhpcy5fc2lkZSkpIHtcbiAgICB0aGlzLnBhbmVsLmNsYXNzTGlzdC5hZGQoJ3NsaWRlb3V0LXBhbmVsLScgKyB0aGlzLl9zaWRlKTtcbiAgfVxuICBpZiAoIXRoaXMubWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW1lbnUnKSkge1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1tZW51Jyk7XG4gIH1cbiAgaWYgKCF0aGlzLm1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1tZW51LScgKyB0aGlzLl9zaWRlKSkge1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1tZW51LScgKyB0aGlzLl9zaWRlKTtcbiAgfVxuXG4gIC8vIFNldHMgb3B0aW9uc1xuICB0aGlzLl9meCA9IG9wdGlvbnMuZnggfHwgJ2Vhc2UnO1xuICB0aGlzLl9kdXJhdGlvbiA9IHBhcnNlSW50KG9wdGlvbnMuZHVyYXRpb24sIDEwKSB8fCAzMDA7XG4gIHRoaXMuX3RvbGVyYW5jZSA9IHBhcnNlSW50KG9wdGlvbnMudG9sZXJhbmNlLCAxMCkgfHwgNzA7XG4gIHRoaXMuX3BhZGRpbmcgPSB0aGlzLl90cmFuc2xhdGVUbyA9IHBhcnNlSW50KG9wdGlvbnMucGFkZGluZywgMTApIHx8IDI1NjtcbiAgdGhpcy5fb3JpZW50YXRpb24gPSB0aGlzLl9zaWRlID09PSAncmlnaHQnID8gLTEgOiAxO1xuICB0aGlzLl90cmFuc2xhdGVUbyAqPSB0aGlzLl9vcmllbnRhdGlvbjtcblxuICAvLyBJbml0IHRvdWNoIGV2ZW50c1xuICBpZiAodGhpcy5fdG91Y2gpIHtcbiAgICB0aGlzLl9pbml0VG91Y2hFdmVudHMoKTtcbiAgfVxufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gRW1pdHRlclxuICovXG5pbmhlcml0cyhTbGlkZW91dCwgRW1pdHRlcik7XG5cbi8qKlxuICogT3BlbnMgdGhlIHNsaWRlb3V0IG1lbnUuXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5lbWl0KCdiZWZvcmVvcGVuJyk7XG4gIGlmICghaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW9wZW4nKSkge1xuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtb3BlbicpO1xuICB9XG4gIHRoaXMuX3NldFRyYW5zaXRpb24oKTtcbiAgdGhpcy5fdHJhbnNsYXRlWFRvKHRoaXMuX3RyYW5zbGF0ZVRvKTtcbiAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBzZWxmLnBhbmVsLnN0eWxlLnRyYW5zaXRpb24gPSBzZWxmLnBhbmVsLnN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24nXSA9ICcnO1xuICAgIHNlbGYuZW1pdCgnb3BlbicpO1xuICB9LCB0aGlzLl9kdXJhdGlvbiArIDUwKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsb3NlcyBzbGlkZW91dCBtZW51LlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoIXRoaXMuaXNPcGVuKCkgJiYgIXRoaXMuX29wZW5pbmcpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLmVtaXQoJ2JlZm9yZWNsb3NlJyk7XG4gIHRoaXMuX3NldFRyYW5zaXRpb24oKTtcbiAgdGhpcy5fdHJhbnNsYXRlWFRvKDApO1xuICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlb3V0LW9wZW4nKTtcbiAgICBzZWxmLnBhbmVsLnN0eWxlLnRyYW5zaXRpb24gPSBzZWxmLnBhbmVsLnN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24nXSA9IHNlbGYucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zZm9ybSddID0gc2VsZi5wYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICBzZWxmLmVtaXQoJ2Nsb3NlJyk7XG4gIH0sIHRoaXMuX2R1cmF0aW9uICsgNTApO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVG9nZ2xlcyAob3Blbi9jbG9zZSkgc2xpZGVvdXQgbWVudS5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pc09wZW4oKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNsaWRlb3V0IGlzIGN1cnJlbnRseSBvcGVuLCBhbmQgZmFsc2UgaWYgaXQgaXMgY2xvc2VkLlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9vcGVuZWQ7XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgcGFuZWwgYW5kIHVwZGF0ZXMgY3VycmVudE9mZnNldCB3aXRoIGEgZ2l2ZW4gWCBwb2ludFxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuX3RyYW5zbGF0ZVhUbyA9IGZ1bmN0aW9uKHRyYW5zbGF0ZVgpIHtcbiAgdGhpcy5fY3VycmVudE9mZnNldFggPSB0cmFuc2xhdGVYO1xuICB0aGlzLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHRoaXMucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAncHgpJztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0cmFuc2l0aW9uIHByb3BlcnRpZXNcbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLl9zZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zaXRpb24nXSA9IHRoaXMucGFuZWwuc3R5bGUudHJhbnNpdGlvbiA9IHByZWZpeCArICd0cmFuc2Zvcm0gJyArIHRoaXMuX2R1cmF0aW9uICsgJ21zICcgKyB0aGlzLl9meDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRvdWNoIGV2ZW50XG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5faW5pdFRvdWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvKipcbiAgICogRGVjb3VwbGUgc2Nyb2xsIGV2ZW50XG4gICAqL1xuICB0aGlzLl9vblNjcm9sbEZuID0gZGVjb3VwbGUoZG9jLCAnc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFzZWxmLl9tb3ZlZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXQpO1xuICAgICAgc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUHJldmVudHMgdG91Y2htb3ZlIGV2ZW50IGlmIHNsaWRlb3V0IGlzIG1vdmluZ1xuICAgKi9cbiAgdGhpcy5fcHJldmVudE1vdmUgPSBmdW5jdGlvbihldmUpIHtcbiAgICBpZiAoc2VsZi5fbW92ZWQpIHtcbiAgICAgIGV2ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5tb3ZlLCB0aGlzLl9wcmV2ZW50TW92ZSk7XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB2YWx1ZXMgb24gdG91Y2hzdGFydFxuICAgKi9cbiAgdGhpcy5fcmVzZXRUb3VjaEZuID0gZnVuY3Rpb24oZXZlKSB7XG4gICAgaWYgKHR5cGVvZiBldmUudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLl9tb3ZlZCA9IGZhbHNlO1xuICAgIHNlbGYuX29wZW5pbmcgPSBmYWxzZTtcbiAgICBzZWxmLl9zdGFydE9mZnNldFggPSBldmUudG91Y2hlc1swXS5wYWdlWDtcbiAgICBzZWxmLl9wcmV2ZW50T3BlbiA9ICghc2VsZi5fdG91Y2ggfHwgKCFzZWxmLmlzT3BlbigpICYmIHNlbGYubWVudS5jbGllbnRXaWR0aCAhPT0gMCkpO1xuICB9O1xuXG4gIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5zdGFydCwgdGhpcy5fcmVzZXRUb3VjaEZuKTtcblxuICAvKipcbiAgICogUmVzZXRzIHZhbHVlcyBvbiB0b3VjaGNhbmNlbFxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaENhbmNlbEZuID0gZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuX29uVG91Y2hDYW5jZWxGbik7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgc2xpZGVvdXQgb24gdG91Y2hlbmRcbiAgICovXG4gIHRoaXMuX29uVG91Y2hFbmRGbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChzZWxmLl9tb3ZlZCkge1xuICAgICAgc2VsZi5lbWl0KCd0cmFuc2xhdGVlbmQnKTtcbiAgICAgIChzZWxmLl9vcGVuaW5nICYmIE1hdGguYWJzKHNlbGYuX2N1cnJlbnRPZmZzZXRYKSA+IHNlbGYuX3RvbGVyYW5jZSkgPyBzZWxmLm9wZW4oKSA6IHNlbGYuY2xvc2UoKTtcbiAgICB9XG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgfTtcblxuICB0aGlzLnBhbmVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2guZW5kLCB0aGlzLl9vblRvdWNoRW5kRm4pO1xuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIHBhbmVsIG9uIHRvdWNobW92ZVxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaE1vdmVGbiA9IGZ1bmN0aW9uKGV2ZSkge1xuICAgIGlmIChcbiAgICAgIHNjcm9sbGluZyB8fFxuICAgICAgc2VsZi5fcHJldmVudE9wZW4gfHxcbiAgICAgIHR5cGVvZiBldmUudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIGhhc0lnbm9yZWRFbGVtZW50cyhldmUudGFyZ2V0KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkaWZfeCA9IGV2ZS50b3VjaGVzWzBdLmNsaWVudFggLSBzZWxmLl9zdGFydE9mZnNldFg7XG4gICAgdmFyIHRyYW5zbGF0ZVggPSBzZWxmLl9jdXJyZW50T2Zmc2V0WCA9IGRpZl94O1xuXG4gICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpID4gc2VsZi5fcGFkZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaWZfeCkgPiAyMCkge1xuXG4gICAgICBzZWxmLl9vcGVuaW5nID0gdHJ1ZTtcblxuICAgICAgdmFyIG9yaWVudGVkX2RpZl94ID0gZGlmX3ggKiBzZWxmLl9vcmllbnRhdGlvbjtcblxuICAgICAgaWYgKHNlbGYuX29wZW5lZCAmJiBvcmllbnRlZF9kaWZfeCA+IDAgfHwgIXNlbGYuX29wZW5lZCAmJiBvcmllbnRlZF9kaWZfeCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGYuX21vdmVkKSB7XG4gICAgICAgIHNlbGYuZW1pdCgndHJhbnNsYXRlc3RhcnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9yaWVudGVkX2RpZl94IDw9IDApIHtcbiAgICAgICAgdHJhbnNsYXRlWCA9IGRpZl94ICsgc2VsZi5fcGFkZGluZyAqIHNlbGYuX29yaWVudGF0aW9uO1xuICAgICAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghKHNlbGYuX21vdmVkICYmIGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1vcGVuJykpKSB7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtb3BlbicpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHNlbGYucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAncHgpJztcbiAgICAgIHNlbGYuZW1pdCgndHJhbnNsYXRlJywgdHJhbnNsYXRlWCk7XG4gICAgICBzZWxmLl9tb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX29uVG91Y2hNb3ZlRm4pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbmFibGUgb3BlbmluZyB0aGUgc2xpZGVvdXQgdmlhIHRvdWNoIGV2ZW50cy5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmVuYWJsZVRvdWNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3RvdWNoID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpc2FibGUgb3BlbmluZyB0aGUgc2xpZGVvdXQgdmlhIHRvdWNoIGV2ZW50cy5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmRpc2FibGVUb3VjaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl90b3VjaCA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGVzdHJveSBhbiBpbnN0YW5jZSBvZiBzbGlkZW91dC5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gQ2xvc2UgYmVmb3JlIGNsZWFuXG4gIHRoaXMuY2xvc2UoKTtcblxuICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX3ByZXZlbnRNb3ZlKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLnN0YXJ0LCB0aGlzLl9yZXNldFRvdWNoRm4pO1xuICB0aGlzLnBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5fb25Ub3VjaENhbmNlbEZuKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLmVuZCwgdGhpcy5fb25Ub3VjaEVuZEZuKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX29uVG91Y2hNb3ZlRm4pO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fb25TY3JvbGxGbik7XG5cbiAgLy8gUmVtb3ZlIG1ldGhvZHNcbiAgdGhpcy5vcGVuID0gdGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgLy8gUmV0dXJuIHRoZSBpbnN0YW5jZSBzbyBpdCBjYW4gYmUgZWFzaWx5IGRlcmVmZXJlbmNlZFxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRXhwb3NlIFNsaWRlb3V0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVvdXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmFkZ2UgPSB2b2lkIDA7XG5jbGFzcyBCYWRnZSB7XG4gICAgbW91bnQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLmVsKVxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IGltZywgdmVydGljYWwsIGhvcml6b250YWwsIGhpZGRlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpbWdUYWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW1nVGFnID0gdGhpcy5lbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmluc1BvaW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ1RXRUVUX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzE1cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzE1cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbdmVydGljYWxdID0gJzJweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVtob3Jpem9udGFsXSA9ICczcHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdUV0VFVF9BVkFUQVJfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMjRweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMjRweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnLTJweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVtob3Jpem9udGFsXSA9ICctN3B4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9BVkFUQVJfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMzJweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMzJweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1BST0ZJTEVfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMjBweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnMnB4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnSEVBRElOR19VU0VSTkFNRV9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcyNHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyNHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICczcHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbaG9yaXpvbnRhbF0gPSAnMXB4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnU1VTUEVOREVEX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzIwcHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbdmVydGljYWxdID0gJzNweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1BST0ZJTEVfQlVUVE9OX0dST1VQJzpcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzE4cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzE4cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbdmVydGljYWxdID0gJzlweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVtob3Jpem9udGFsXSA9ICcxMHB4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmVsLmZpcnN0Q2hpbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bm1vdW50KCkge1xuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgfVxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaW5zUG9pbnROYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdTVVNQRU5ERURfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9VU0VSTkFNRV9CQURHRSc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLm1hcmdpbiA9ICcycHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSEVBRElOR19VU0VSTkFNRV9CQURHRSc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BST0ZJTEVfQVZBVEFSX0JBREdFJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQUk9GSUxFX0JVVFRPTl9HUk9VUCc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcImRhcHBsZXQtd2lkZ2V0LXByb2ZpbGUtYnV0dG9uXCIsIFwiY3NzLTE4dDk0bzRcIiwgXCJjc3MtMWRiamM0blwiLCBcInItMW5pd2h6Z1wiLCBcInItMXhsNW5qb1wiLCBcInItc2R6bGlqXCIsIFwici0xcGhib3R5XCIsIFwici1yczk5YjdcIiwgXCJyLTF3MnBtZ1wiLCBcInItMTVkMTY0clwiLCBcInItenNvMjM5XCIsIFwici0xdnVzY2ZkXCIsIFwici01M3hiN2hcIiwgXCJyLW1rMHlpdFwiLCBcInItbzd5bnFjXCIsIFwici02NDE2ZWdcIiwgXCJyLWxydmliclwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgc3R5bGVUYWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgICAgICAgICAgc3R5bGVUYWcuaW5uZXJUZXh0ID0gYC5kYXBwbGV0LXdpZGdldC1wcm9maWxlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgOTMsIDM0LCAwLjEpXG4gICAgICAgICAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3VudCgpO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5pbml0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy5zdGF0ZS5jdHgsIHRoaXMuc3RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuQmFkZ2UgPSBCYWRnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5CdXR0b24gPSB2b2lkIDA7XG5jbGFzcyBCdXR0b24ge1xuICAgIG1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuZWwpXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHsgaW1nLCBsYWJlbCwgbG9hZGluZywgZGlzYWJsZWQsIGhpZGRlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnNQb2ludE5hbWUgPT09ICdUV0VFVF9TT1VUSCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxTdHJpbmcgPSBgPGRpdiBhcmlhLWhhc3BvcHVwPVwiZmFsc2VcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1mb2N1c2FibGU9XCJ0cnVlXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjc3MtMTh0OTRvNCBjc3MtMWRiamM0biByLTE3NzdmY2kgci0xMWNwb2sxIHItMW55NGwzbCByLWJ6dGtvMyByLWxydmliclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRpcj1cImx0clwiIGNsYXNzPVwiY3NzLTkwMW9hbyByLTFhd296d3kgci0xcmU3ZXpoIHItNmtvYWxqIHItMXFkMHhoYSByLWEwMjNlNiByLTE2ZGJhNDEgci0xaDB6NW1kIHItYWQ5ejB4IHItYmNxZWVvIHItbzd5bnFjIHItY2xwN2IxIHItM3MydTJxIHItcXZ1dGMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3NzLTFkYmpjNG4gci14b2R1dTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3NzLTFkYmpjNG4gci1zZHpsaWogci0xcDBkdGFpIHIteG9kdXU1IHItMWQyZjQ5MCByLXhmNGl1dyByLXU4czFkIHItemNobG5qIHItaXBtNWFmIHItbzd5bnFjIHItNjQxNmVnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtsb2FkaW5nID8gYDxzdmcgd2lkdGg9XCIxOHB4XCIgaGVpZ2h0PVwiMThweFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiBjbGFzcz1cImxkcy1yb2xsaW5nXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMWRhMWYyXCIgc3Ryb2tlLXdpZHRoPVwiMTRcIiByPVwiNDBcIiBzdHJva2UtZGFzaGFycmF5PVwiMTg4LjQ5NTU1OTIxNTM4NzU3IDY0LjgzMTg1MzA3MTc5NTg2XCIgdHJhbnNmb3JtPVwicm90YXRlKDc3LjU3OTMgNTAgNTApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInJvdGF0ZVwiIGNhbGNNb2RlPVwibGluZWFyXCIgdmFsdWVzPVwiMCA1MCA1MDszNjAgNTAgNTBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCIwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YCA6IGA8aW1nIGhlaWdodD1cIjE4XCIgc3JjPVwiJHtpbWd9XCIgY2xhc3M9XCJyLTRxdHFwOSByLXl5eXlvbyByLTF4dmxpNXQgci1kbm1yenMgci1ibndxaW0gci0xcGxjcnVpIHItbHJ2aWJyIHItMWhkdjBxaVwiPmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJHsobGFiZWwgPT09IG51bGwgfHwgbGFiZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxhYmVsLnRvU3RyaW5nKCkpID8gYDxkaXYgY2xhc3M9XCJjc3MtMWRiamM0biByLXhvZHV1NSByLTF1ZGgwOHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjc3MtOTAxb2FvIGNzcy0xNm15NDA2IHItMXFkMHhoYSByLWFkOXoweCByLTFuMHhxNmUgci1iY3FlZW8gci1kM2hiZTEgci0xd2dnMmIyIHItYXh4aTJ6IHItcXZ1dGMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAke2Rpc2FibGVkID8gJ3N0eWxlPVwiY29sb3I6I2FhYTtcIicgOiAnJ30gY2xhc3M9XCJjc3MtOTAxb2FvIGNzcy0xNm15NDA2IHItMXFkMHhoYSByLWFkOXoweCByLWJjcWVlbyByLXF2dXRjMFwiPiR7bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW5zUG9pbnROYW1lID09PSAnUFJPRklMRV9CVVRUT05fR1JPVVAnKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWwuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzE4cHgnO1xuICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMThweCc7XG4gICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUudG9wID0gJzlweCc7XG4gICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmxlZnQgPSAnMTBweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpbWdUYWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW5zUG9pbnROYW1lID09PSAnVFdFRVRfU1RBUlRFUicpIHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxTdHJpbmcgPSBgPGRpdiBzdHlsZT1cIm1hcmdpbjogMCAxMHB4XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWxhYmVsPVwiTW9yZVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLWZvY3VzYWJsZT1cInRydWVcIiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNzcy0xOHQ5NG80IGNzcy0xZGJqYzRuIHItMTc3N2ZjaSByLTExY3BvazEgci0xbnk0bDNsIHItYnp0a28zIHItbHJ2aWJyXCIgZGF0YS10ZXN0aWQ9XCJjYXJldFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRpcj1cImx0clwiIGNsYXNzPVwiY3NzLTkwMW9hbyByLTFhd296d3kgci0xcmU3ZXpoIHItNmtvYWxqIHItMXFkMHhoYSByLWEwMjNlNiByLTE2ZGJhNDEgci0xaDB6NW1kIHItYWQ5ejB4IHItYmNxZWVvIHItbzd5bnFjIHItY2xwN2IxIHItM3MydTJxIHItcXZ1dGMwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjc3MtMWRiamM0biByLXhvZHV1NVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNzcy0xZGJqYzRuIHItMW5pd2h6ZyByLXNkemxpaiByLTFwMGR0YWkgci14b2R1dTUgci0xZDJmNDkwIHItcG9kYmY3IHItdThzMWQgci16Y2hsbmogci1pcG01YWYgci1vN3lucWMgci02NDE2ZWdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMjVcIiBzcmM9XCIke2ltZ31cIiBjbGFzcz1cInItNHF0cXA5IHIteXl5eW9vIHItaXA4dWp4IHItZG5tcnpzIHItYm53cWltIHItMXBsY3J1aSByLWxydmliciByLTI3dGwwcVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bm1vdW50KCkge1xuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgfVxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlVGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmICh0aGlzLmluc1BvaW50TmFtZSA9PT0gJ1RXRUVUX1NPVVRIJykge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdjc3MtMWRiamM0bicsICdyLTFpdXN2cjQnLCAnci0xOHUzN2l6JywgJ3ItMTZ5MnVveCcsICdyLTFoMHo1bWQnKTtcbiAgICAgICAgICAgIHN0eWxlVGFnLmlubmVyVGV4dCA9IGBcbiAgICAgICAgICAgICAgICAuZGFwcGxldC13aWRnZXQgPiBkaXZbcm9sZT1cImJ1dHRvblwiXSA+IGRpdjpob3ZlciA+IC5jc3MtMWRiamM0bi5yLXhvZHV1NSA+IC5yLXNkemxpaiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDE2MSwgMjQyLCAwLjEpOyBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdzsgXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kYXBwbGV0LXdpZGdldCA+IGRpdltyb2xlPVwiYnV0dG9uXCJdID4gZGl2OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6cmdiYSgyOSwxNjEsMjQyLDEuMDApO1xuICAgICAgICAgICAgICAgIH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW5zUG9pbnROYW1lID09PSAnUFJPRklMRV9CVVRUT05fR1JPVVAnKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoXCJkYXBwbGV0LXdpZGdldC1wcm9maWxlLWJ1dHRvblwiLCBcImNzcy0xOHQ5NG80XCIsIFwiY3NzLTFkYmpjNG5cIiwgXCJyLTFuaXdoemdcIiwgXCJyLTF4bDVuam9cIiwgXCJyLXNkemxpalwiLCBcInItMXBoYm90eVwiLCBcInItcnM5OWI3XCIsIFwici0xdzJwbWdcIiwgXCJyLTE1ZDE2NHJcIiwgXCJyLXpzbzIzOVwiLCBcInItMXZ1c2NmZFwiLCBcInItNTN4YjdoXCIsIFwici1tazB5aXRcIiwgXCJyLW83eW5xY1wiLCBcInItNjQxNmVnXCIsIFwici1scnZpYnJcIiwgXCJyLXAxbjN5NVwiKTtcbiAgICAgICAgICAgIHN0eWxlVGFnLmlubmVyVGV4dCA9IGAuZGFwcGxldC13aWRnZXQtcHJvZmlsZS1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDE2MSwgMjQyLCAwLjEpXG4gICAgICAgICAgICB9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5leGVjKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy5zdGF0ZS5jdHgsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZyk7XG4gICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuaW5pdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICB9XG59XG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFaQUFBQUdRQ0FZQUFBQ0F2emJNQUFBaFQwbEVRVlI0bk96ZERaUmRaWDN2OGQrWk16T1pTU2FaeVNTVHR5RkRBa01TRWlkRm83bU41allTaFVLanNkallhQ0FDeFFWaXVZS3hVRmhvRUs0V0xzckxLaTBJQ3k0STVhWEsxWXBTTEZTVUdrRkFSQ2VDRFFZaTRTMFFEVWxJbUx4TnpsMzc1RUVnbVVubTdEbDcvNTluNys5bnJiT1NKWEtlSDhtZS9kdlBmbmwyYmFsVUV1Q2I3c0tFNkpjdVNZc2xYU0NwMXpxVGdUWkpsMG82ZVdicFJlc3N3RDVxckFNQUIzQytwSE9zUXhpWUp1a0pTY2RaQndINlE0RWdCQmRLT2xkU3ZYV1FsSFJJK3BhYmdRRGVva0FRZ2pwSkYwdDZTZEl0a2o0dXFkVTZWSlYxU1RwUDBnT1NWa3Q2aDNVZzRFQnFyUU1BRlloSzR3VDMyU0hwcTVJdWtiVEZPdGdnekpaMGxmc1ZDQW96RUlTcTNsMGZlVUxTRE9zd01UUkx1bFhTdzVRSFFrV0JJSFFka3U0SjdHSnpwOHU4eERvSU1CZ1VDTEpnb3FSdlMrcVdkSktrb25XZ2ZrUXpqVHNrL1ZiU0hPc3d3R0JSSU1pU0xrazN1aDMwR2U0MGtiV296QlpLK3JFN1hiWFlPaEJRTFJRSXNtaXl1ekQ5a3J1enljcXBMc04zSmMwenpBRWtnZ0pCbGpWSytnZTNFNy9NelZDU0ZwWFhja25QU0xxV1p6bVFaZHpHaXp3WUoybVorN3pxbnJPSVBzOUsrbS8zMmVCdUIzNXBQOTlUY044MXd0MVNQTVU5TVg2d3BFbVNwbWJ3K1JTZ1h4UUk4bWFrcFBlNHovNnNsYlRlL2I2RG1RU3dMd29FNkZ1SCt3RG9COWRBQUFDeFVDQUFnRmdvRUFCQUxCUUlBQ0FXQ2dRQUVBc0ZBZ0NJaFFJQkFNUkNnUUFBWXFGQUFBQ3hVQ0FBZ0Znb0VBQkFMQlFJQUNBV0NnUUFFQXNGQWdDSWhRSUJBTVJDZ1FBQVlxRkFBQUN4VUNBQWdGZ29FQUJBTEJRSUFDQVdDZ1FBRUFzRkFnQ0loUUlCQU1SQ2dRQUFZcUZBQUFDeFVDQUFnRmdvRUFCQUxCUUlBQ0NXMnFRSDZDNU1TSG9JSVBQNE9VSmNNMHN2SnZiZHpFQUFBTEZRSUFDQVdCSS9oUVVNVUt1azZlN1RLYWxkMGhIV29UelFMT25ua3RaS2VrSFNTa20vbHZTZ2RUQ0FBa0dhNmlWMVNacnNDbUw2WHI5SDMyYTV6OTdXU0ZyblNtV05LNWduWGNGc044aUpuS0ZBa0tTcGJoWVJsY1lISlAycGRhQ01tZXcrYy9iNjM3ZEllc2dWUy9UNXBmc0FWVlVvbFVxSkRzRGRJN2x5dEtTL2xEVGJsVWE5ZFNDOFRWUWlQNUQwSFVtUFNlcTFEb1RrSlhrWEZnV0NTa3lTOUM1SkhlN1R2dGVuempvZ0t2TENYcCsxYnNieUMwbXZXSWREZFNSWklKekN3djVFSlhHTXBQbVM1cnFTUUhhMDcrZnZkSU9rRmU1enQ3dTJBcndOTXhEc2JicWtVeVV0Y0hkREFYSXpsR3ZjWjROMUdBd2NwN0NRdEdpbXNWalNVVzYyVWJRT0JLODlKT2srU1hlNlUxN3dHQVdDSkJ3aDZUajM2YklPZzJDdGRVVnl0NlQ3cmNOZ1h4UUlxdWtVU2N2ZHJBT29wcDlLdXRpVkNUekJSWFFNVnBjN1JiV1U0a0NDM2lmcCs1TFd1MW5KdjBwNndEb1Vrc01NSkh2R1NQcHpkNHJxblpMZUlhbk5PaFJ5YTdPN1R0SXQ2ZC9kdFJPZWtrOFJwN0F3RU5FczR5UkpwMHRxdEE0RDlLUEh6VXh1WW5hU0RwWnpSMytLN3RUVVQ5d1IzakxLQTU1cmRBYzZQNWIwaER2Z2FiSU9oWGdva0RBTmxYUytwT2NsM2VFZThnTkNNMTNTMVc0N1htSWRCcFdqUU1MVDVXWWNYNVkwempvTVVBWE5rbTZWZEkra2VkWmhNSEFVU0RobVNmcTJPMVgxTHVzd1FBS09jYWUySG5TL2grY29FUC9OY1VkbVAzY1AvUUZaOTladGZvRjFHUFNQQXZGWDlFTjBMMGRqeUxGWjdybVNxRWltV1lmQnZuaVEwQytkN2h6d0NaTGVieDBHOEVSVUpJOUsrZzkzaW1zRkw4anlBOCtCK0dHNnBNdVlhUUFERmhYSVdUeExjbUE4QjVKZHplNDJ4bTdLQTZqSUVXNDI4bTMzY3dRRG5NS3lNOXRkS0d5MURnSUU3RGhYSUI5eDc0SkhpcGlCMkRqS1hSeWtQSURCbXkvcHQyNnhVS1NJQWtsWHA1dHkzOHNDaDBCVmpaTjBzNlNIM2V3ZUthQkEwdEVvNlZLMzlnL1BjZ0RKbWUxSzVHWU8wcEpIZ1NTbjRLYlcxN3EzdHAwdHFkNDZGSkFUU3lXdGNXdkY4Y2JOaEZBZ3lma0hTVCtVZEtxazBkWmhnQndhNWxhclhzSE1QeGtVU1BYVnU0VU96N0VPQXFCc2hMdjJlQ3UzL0ZZWEJWSmRYVzdaaGZQNXN3VzhzOFJkaCtTWnF5cGhKMWNkUlVuTFhYbHd2aFh3Vjd0Ny91cGFYbVExZUJUSTRMVzUyM0l2NUNJNUVJeFQzUUhmS09zZ0lhTkFCdWNnU1krN3U2MEFoR1dxcEN1dFE0U01BaG1jcTkyVUdFQ1lUbkFMbVJhdGc0U0lBcWxjcTZRejNRS0lIN1lPQTJEUWxrbDZSdElGa2pxc3c0U0U1ZHdyczlEZENzakZOeUNiZGtnNlQ5TGwxa0dxaGVYYy9mQmxTZCtsUElCTXEzZW50RzdtcHBnRG8wQU9yTjV0VE9kYkJ3R1FtcVh1ZGw5S1pEOG9rUDFyZExmb3NrdzBrRC96M2ZWTzlJTUMyYit6M1R2S0FlVFQrZTUyWC9TQkF1bGZseXNRQVBuVkxPbEJTWE9zZy9pSUF0blhZVzZaZzBlNFlBN0EzYnIvZ0xzRDg5M1dZWHhDZ2J6ZGNaSis3Wlk1YUxBT0E4QWJkVzR4eGtmZGN5T2dRTjVtZ1h2NURIZGRBTmlmeTdpNHZnY0Zzc2N4N24wQmxBZUFnYmlTMDFrVVNPUVF5Z05BREYrMERtQ05BcEhPZGM5N0FFQWxGa282eVRxRXBid1h5QnhKSjFxSEFCQ3M2L1A4b0hHZUMyUTJTeFVBR0tTaXBCc2xMYllPWWlHUEJUTFVMWXo0QUMvWUIxQUZVWW5jNW1Zalk2ekRwQ2x2QmRJbzZVZHVlUUtlOHdCUUxkRys5QlJKdjhqVFMrYnlWaUIzdUZOWEFKQ0VxRHkrbjVjYmMvSlVJQmU3dXlZQUlFbEh1SVBWZ25XUXBPV2xRRTUzdCtzQ1FCcWlnOVcvc0E2UnREd1VTS2VrcTZ4REFNaWQwNjBESkMwUEJYSzZ1MHNDQU5KMHJGc21LYk95WGlBZmszU2FkUWdBdVJUdFgrK1VkRlpXRDJLelhDQ25TUHFtcEdIV1FRRGtWclQvdVVMU3BkWkJrcERWQXVuaXVnY0FqeXpMNGwyZ1dTeVFKa25meXN0OTJBQ0NjYk9reWRZaHFpbUxCWEk5TDhFSDRLRm1kM0NibWZYM3NsWWdaK1IxVVRNQVFaamwzbWlZQ1ZrcWtFNzN0RGtBK093TTl5Szc0R1dsUUFwdVNlVW02eUFBTUFDTHJBTlVRMVlLNUc4a3piVU9BUUFEZEZZV1ppRlpLSkNpcEF1c1F3QkFCY2E3VjBzRS9VNmlMQlRJbVpJbVdvY0FnQXAxaEg1QlBmUUNtZXJlTGdnQUlUcEYwbEhXSWVJS3ZVQ3U1NEZCQUlFTDlnYWdrQXRrQ1JmT0FXUkF1M3ZOZG5CQ0xaQ21yQzVPQmlDWGxybG4yWUlTWW9HMHVuY081K2JGOVFBeXIxN1MzWklPc3c1U2lSQUw1R1pKODZ4REFFQ1ZUWkgwN3lHdGxSVmFnU3h3SHdESW9rNTNPaXNJSVJWSTFNcFhXb2NBZ0lTZEg4cGRXU0VWeUVraFhtUUNnQW8xaFhLSGFTZ0ZVaXRwdVhVSUFFakpmT3NBQXhGS2dieUh1NjRBNU1nSHJBTU1SQ2dGRWtRYkEwQ1ZIQkhDS2ZzUUNxUlIwb25XSVFBZ1JkRysrVTVKWTZ5RDdFOElCWEorYUEvWEFFQVYvSW1rcjF1SDJCL2ZDNlRaTGRjT0FIbDBuS1RwMWlINjQzdUJuQjdLL2RBQWtKQnpyUVAweCtjQ3FXZjJBUUJhN090ZHFENFh5RkpKNDZ4REFJQXhidyttZlM2UVlOYURBWUNFbmU3ais5TjlMWkNGUGw4NEFvQ1VOVWs2MVRyRTNud3NrUEdTcnJJT0FRQ2VXZTRlTVBTR2p3WHlKVWtkMWlFQXdETk52aDFjKzFZZ1RlNWQ1d0NBZmMzMTZmUytid1d5bE9jK0FHQy92TGtXNGx1Qm5HSWRBQUE4dDlTOTRzS2NUd1V5VzlJczZ4QUE0TGxXU2Urd0RpSFBDc1NiYVJrQWVNNkxnMjFmQ21TY3BFOWFod0NBUUJ4dEhVQWVGY2g4U1hYV0lRQWdFQiswRGlDUENxVExPZ0FBQktUVlhUYzJSWUVBUUpqTW41bWpRQUFnVElzbEZTMEQrRkFnSFN4ZEFnQVZHK2V1SDV2eG9VQ09zdzRBQUlFeTNYLzZVQ0NMckFNQVFLQVdXSjdHc2k2UTJaTGVhNXdCQUVMVllma01uWFdCbk9sQkJnQUkyZWVzQnJiY2VUZTZOdzhDQU9McnNyb1J5YkpBNXJOME93QlV4UUtMUVMwTFpLN2gyQUNRSmJrckVKUC9ZQURJb1BrV2QyTlpGVWdyVDU4RFFOVTBTcHFUOXFCV0JYS2EwYmdBa0ZXcHYxUEpxa0ErYlRRdUFHVFZFa25OYVE1b1VTRHRySDBGQUZWWFRIdUpkNHNDU2YwOEhRRGtSS3I3VjRzQzRmWmRBRWhHcXZ0WFppQUFrQjJ6SlJYU0dpenRBbW1VTkN2bE1RRWdMNW9sdGFVMVdOb0ZNc3Y2RFZvQWtIRVQweG9vN1FMaDZYTUFTRlpuV2dOUklBQ1FMWWVsTlZDYUJWSXJhWHFLNHdGQUhrMUlhNkEwQzZTTjZ4OEFrTGh4YVEyVWRvRUFBSkkxSnEyQjBpeVFzU21PQlFCNU5UcXRnZElza0ZFcGpnVUFlWlhKNTBBbXBUZ1dBT1RWeUxTdWc2UlpJT05USEFzQThxcVExb29mYVJaSXF1dlVBMENPcGZMS0RBb0VBTEtIQWdFQXhFS0JBQUJpb1VBQUFMRk1UbU1RQ2dRQXNtZWNwUHFrQjBtclFHcmR2Y2tBZ09RVkpSMlM5Q0JwRmNob0ZsSUVnRlFsL21LcHRBcWtOYVZ4QUFCN0pMN2ZwVUFBSUpzU3YrNmNWb0Z3QVIwQTBwV1pBbWxNYVJ3QXdCNkpYM2RPcTBBU3Y1ME1BUEEyVFVrUGtPWnpJQUNBOUdSbUJnSUF5SmhhNndCSVI4UDBLU28wTmtqRkd1MVk5WXg2TjIyMmpvU01xVC9rWU5XT0hhM1NqcDNhdldXcnRxOTYyam9TRWthQlpORHdZNDdVaUFVZjFOQTVzelJrK2hUVlJNWFJoeDJyZjZmdHE5ZG84OTMvcWMzZnVVYzdYMWlYZWxhRXFhNmpYUzJMUGxUZTF1bzdKNmwrY3Q5cjk3MVJKRnNlZUVoLytPZWJ0T09aWjFQUGl1UVVTcVZTb2dOMEZ5WkV2eXlSZEd1aUE2SDh3enoyd3IvVDBObnZqUFh2OXp6V3JYVmZ2RlN2M1hOLzFiTWhmRFhEbTlUMmQ1OVc4M0hIcXFIcjhJci8vZDA5MjhvSEtodHV1RjFiN2wrUlNFYTh6U1dTenB0WmVqR3hBYmdHa2dIUlRLUHp3ZTlwOGoyM3hpNlBTT09zbVpyMGIvOVhZNWN2VTAzVHNLcG1STmlLelNNMDZYdmZLRzhiY2NvakVzMkVXNVljcDBOKytFMGQrdVAvTjZodEZYNmdRQUxXTUgyS0R2NzJEZVh5aUVxa0dncjE5ZVZaekxSbmZxWlJwNStvUXBFbHpQS3NVRitudG1XbmxiZUhwbmx6cXZhOXcrYk5VZWZEZDZ2ampxK1hUNEVoVEJSSW9FWXVYYVRPbi8rZ2ZEb2hDYlZ0bzlSKzljWGxvOFZpYTBzaVk4QnZ0ZVBHNk5DZi9KdkdYM1pCWXR0QXkrS0ZtdEo5Zi9sYUhjSkRnUVFtT2lJY2YvbVhOUEhtZit6MzRuZzFSVWVLMDFZL3BBbFhYa1NSNUVURGpLbmxnNGVwcTFha2Nwb3AybzRuMzMyTG1qLzJZUlZxdWE4bkpQeHRCYVQ4ZzNidkhSbzJkM2FxNHhaSE5tdjBtWjlTc2ExVnp4MS9ScXBqSTEwTlhkUEtNNEswMVUrYXFJTy9lVzM1NHZxYVk0OHYzd29NL3pFRENVU2hXQ3lmTDA2N1BONnE1V01MVGNkSDh0ck8vb3pwK0UzejU2cmoxbjgyellDQm8wQUNNZWI4TXpWaTRkR21HUXAxdFRyNFc5ZVZyNDhnZStvbmQ2aDUwWWVzWTVReldCY1pCb1lDQ1VCMFZEWm0rZWVzWTVUVmpodWpqanV1c1k2Qkt0c3p3NzBtbGV0cUF6SHV5MzlmdFRzTGtSd0t4SE9GK2pvZGRPMmxYdDFPR3hWYXk1TGpyR09naWxwUFBjR3I1ektpN2I3OTZrdTgydTZ4THdyRWMyM0xUdlB5UHZuMnE3NVNmcmdNNFl0bWxlTXYvWUoxakgwMEhqR2pmUE1HL0VXQmVLeHAvdnMwWnZreTZ4aDlLcmEyYU9JdFY1V1BGQkd1UW1QRG5sTlhucTQ4TVBhaXM3bHh3Mk1VaU1jT3V2NHliODVKOTJYRWg0OVN5NUtQV3NmQUlJdzY5WVNxUG1GZWJUWERocFovRHVBbkNzUlR3K2JONlhlRlU1K01YUHBYMWhFd0NDT1hMcktPY0VCRHBoNnF1dlp4MWpIUUJ3ckVVMGt0VVZKdFVkSHhoSHFZNmpyYXl3dG9obURJdE1Pc0k2QVBGSWlubXVhL3p6ckNnQlNLeGZKZFdRalA4S1ArekRyQ2dOVlBubWdkQVgyZ1FEeFVHRElrOXBMWkZyaklHYWFRL3Q3cUpsRWdQcUpBUEZRN2RyUjFoSW8wZEUyempvQVlHbzU0aDNXRUFhc2JFOWJQUkY1UUlCNEtiYW1RSVZNN3JTTWdoaUVlUGwvVW4rTG9WdXNJNkFNRjRxR2E1dUhXRVNwUzF6Nk81MEVDRXgyaytQcnNSMTk0YU5WUEZJaUhmSDcyb3o4aDdZd1Eza0ZLWVVpOWRRVDBnZmVCZUtqM0Q2OXF3M1gvWWgyaklxWHRPNndqb0FLbDEzdUMyc1oyUHYrU2RRVDBnUUx4MEs2WGY2L25UenZIT2dZeWJQZVcxNFBheGtLN0xwZ1huTUx5VUdrSFIvTklWdS9tMTZ3alZLUzBjNWQxQlBTQkF2SFE3cTA5MWhFQXIzQlE1U2NLeEVPN1g2ZEFnTGZhdlcyN2RZUVFKWDduUVZvRndyV1dDbkMwQmV4bDkyN3JCQ0ZxVG5xQXRBcGtiRXJqQUFEMkdKbjBBR2tWQ0krUkFrQzZFbi9ZaDFOWUFKQk5pUzhQa1ZhQkRFbHBIQUJBU3RJcUVPNzJBb0IwSmI0bUVqdDJBRUFzRkFnQUlCWUtCQUFRQ3dVQ0FJaUZBZ0VBeEVLQkFBQmlvVUFBQUxGUUlBQ0FXQ2dRQUVBc0ZBZ0FJQllLQkFBUUN3VUNBSWlGQWdFQXhFS0JBQUJpb1VBQUFMRlFJQUNBV0NnUUFFQXNGQWdBSUJZS0JBQVFDd1VDQUlpRkFnRUF4RktiMGpqZFNYeHB4eDNYYUVqbjVDUysydFRtNzkrbmw3OTBtWFdNaW5UY2RyV0dURG5FT2dZR2FPZExMK3QzSHo3Uk9zYUFGVnRINnBCN2I3ZU9rWWplTFZ2MXpQdi9Lb212Zml5SkwzMnJ0QXBrU3hKZjJqQjlpaHE2RGsvaXEwMzEvT29KNndnVnE1dDBrQnBuemJTT2dRRXFkRDlwSGFFaWhXSk5acmV2M2syYmsvcnExNUw2NGpkd0NzdER0ZVBHV0Vlb1dNUFVUdXNJcUVETjBLSFdFU3BTZnhpeld4OVJJQjZxcWErM2psQ3htcVpoMWhGUWdacm00ZFlSS2xLb3I3T09nRDVRSUI2cWFXbTJqbENSMm5GdC9JQUhwdGpTckpyaFRkWXhCcXdZV09IbEJRWGlvYnFEeGxsSHFNalEyZSswam9BS0ZlcHExZml1THVzWUExYlhQdDQ2QXZwQWdYaW9ybTJVYWhvYnJHTU1HQVVTcHBEKzN1cmF3enFveWdzS3hFZkZvb2JPblcyZFlzQ0d6WnRqSFFFeERKdjNwOVlSQnF4KzBrVHJDT2dEQmVLcHB2bHpyU01NU0xGNWhJYk9tV1VkQXpFMHpac1R6RXkzL3JEc1BlK1ZCUlNJcDFvV0w3U09NQ0ROaXhhb1VDeGF4MEFNTlUzRE5IekJCNjFqSEZDMGZUVWNmcGgxRFBTQkF2RlUvZVNPSUdZaEkwOWFiQjBCZ3pEeXBMKzJqbkJBdzQ4NWt0dkVQVVdCZUt6OW1rdFVPMzZzZFl4K2pWNTJtb1lGZEswRyt4cHg3SHkxbnZJSjZ4ajlxanRvdkNaYzlXWHJHT2dIQmVLeElWTU8wY0czWDIwZG8wOVJjVXk0N0FMckdCaXNtaHExWDN1cEdvK1lZWjJrVHgyM1gxT2VqY05QRklqbmhzMmJvNVlseDFuSGVKdENmWjNhcjc3WU9nYXFwRkFzYXNKVlgvSHVXbFkwTTJLRzZ6Y0tKQUFUcnJ6SXEvdmd4MTU0ZGlZWHNjeXphRWM5ZXRscDFqSCtLSnAxakwvMGk5WXhjQUFVU0FCcTIwYXA0NDZ2ZTNHRU9QeVlJelhtM0RPc1l5QUI0eTQrVDNVZDdkWXh5alBjamp1dVViRzF4VG9LRG9BQ0NVUjBoSGpROVY4enpWQTdablQ1Qnh2WkZCMmdqRHI5azlZeE5QSEdLNE42U2o3UEtKQ0FqRHhwc2NaZitnV3o4VWQ5OXBUeWc0UElybEduTGpVOVhkcCs5Y1hlWGZORC95aVF3TFNkL1JtTitOQlJxWS9iZU1RTXRaMzVxZFRIUmJxS3JTM3FmUEI3R2pMMTBIUUhMaFEwOGNZck5PcjBjTjZTQ0Fva1NBZmRlSVhhenZuYjhqM3lTU3JVMTZucDZIbmwxOVYyUG53M0QzUGxSRjFIdXc1Ny9ENU52UGtmTmV6OTcxV2hOdGtYbDlaUDdsREhONi9qb2RRQVVTQUJxaDNkcXZILzUzd2QvdHhqT3ZoYjExWDlhSEhQdWZBVGRmaXpqK3FRLzdoZExaLzRTeFVDZk1rVjRxdHBiTkRJcFl0MDZJL3UxTFNuSDBwazU5NHdmWW9tZmZjbVRYdm1aMnBadEtEcTM0L2tVU0NCYTE3MElVMTU0c2ZsYzhmVmVCWHVrR21kVmYwK2hDK2FrVXk4OFFxTnI5S0RvM1h0NDNUUTlaZVZ0N01SQzQrdXluZkNCZ1dTQVcrZE1ZejV3bG14M2c1WVA3bERZNWN2VStkUDcwci8vRGVDMExic3RQSk9mOHk1WjhTNjNiZGh4dFE5TTQ1bkgvVjYrUlFNWEtGVUtpVTZRSGRoUXZUTEVrbTNWdnU3cDNUL2tBZmErbERxN2RYV0J4N1M5bFZQcStlWFQ2aTBZNmUycmZ5TlNqM2J0THRubStvN0o1VUxvN1p0VlBrMHdyQzVzNzI0L3g5aDJiRm1yYmF1ZUVUYm4zeEt1elpzMUxaZnI5SzI3aWZMMjFaMEVGTmVIcVZZTFA5YTNzNTRiMHlmZWpkdDFoTXQwNUw0Nmtza25UZXo5R0lTMzEyVzdOVXhtSWhtSkUzejV3YXhtaS9DRlJVRjYxVGxHNmV3QUFDeFVDQUFnRmdvRUFCQUxCUUlBQ0FXQ2dRQUVBc0ZBZ0NJaFFJQkFNUkNnUUFBWXFGQUFBQ3hVQ0FBZ0Znb0VBQkFMQlFJQUNBV0NnUUFFQXNGQWdDSWhRSUJBTVJDZ1FBQVlxRkFBQUN4VUNBQWdGZ29FQUJBTEJRSUFDQVdDZ1FBRUFzRkFnQ0loUUlCQU1SQ2dRQUFZcUZBQUFDeFVDQUFnRmdvRUFCQUxCUUlBQ0FXQ2dRQUVBc0ZBZ0NJSmVnQzJkMnp6VG9DQU9SVzJBV3laYXQxQkFBWWxOMWJYcmVPRUZ2UUJkSzdZYU4xQkFBWWxONE5yMXBIaUMzb0F0bXhacTExQkFBWWxCMXJuck9PRUZ2Z0JSTHVIendBUkhhdWZjRTZRbXhCRjhpMko1K3lqZ0FBZzlLejhqZldFV0lMdTBCKytZUkt2YjNXTVFBZ3RtZy9GcXFnQzZSMzAyWnRaeFlDSUZDN2U3YXA1N0Z1NnhpeEJWMGdrZGZ1K3kvckNBQVF5NWI3VndSOUZpWDRBbm4xaHR1bDN0M1dNUUNnWXVYOVY4Q0NMNUJ0VHo2bGJhdFdXOGNBZ0lyMFBOYXRUZCs1SjhraHRpVDU1VXF4UURZbCtlVWhYNFFDa0UrdjNuSm4wa01rZm00cytCbUlYSk1EUURCNmU3WHh0dThrUFVwUDBnT2tWU0Ryay96eXJUOTlOTW12QjRDcWV2MFhLN1ZyL1IrU0hpYlJNejlLc1VBMkpQbmwwUXdraGI4TUFLaUtyVDk1T0kxaEV0M3ZLaXN6a05LdVhmcjk1ZGNtT1FRQVZNM1cvL3BaR3NPc1MzcUFOQytpSjNvK2J2M2wxMnJINnQ4bE9RUUFETnJ1TFZ1MTVmNmZwakhVbXFRSFNQTWkrdk5KZm5scHgwNnQrWXNUdFAycFo1SWNCZ0JpMjdudWxmSithdmRyaWQ5aHV5YnBNejlLdVVBUzM3TnYvKzB6ZW5ydVI3UnIzU3RKRHdVQUZkbmRzMDIvTy9iNHRLNS8zSi9HSUdrV1NPTG40eUs3MXY5QmE0OC9JK2psQVFCa3o0dG5MVmRQZXMrc1BaYkdJR2tXU0dwdmY5cHkvd3E5Y3RFVmFRMEhBUHUxOFYvdjBvYnIvaVhOSVRNM0EwbjBHc2plWHI3bzhqUWUxQUdBL1lvT2FKOC8rYXcwaDl3a2FWVWFBNlZaSUUrbk9GYlpjNS84ckxhdlNuMVlBQ2pidHZJM2V2YWpueXBmLzBoUmFtZDcwaXlRMzZZNFZsbXB0MWZydjNaTjJzTUNRUGw2N0pwamp5Ky90eWhscVIwMXAzME41RWNwamxlMjRZYmJ0ZmJqbjlicmp6eWU5dEFBY21yN1U4L29kd3RQMU00WFVybDNhRzhyMGhvbzdjVVV6MDE1UEtsVUtsL0FXdjAvRnVpNWt6OVhmb2dIQUpKUTZ1M1Z5eGQ4VGF1bXp0WHJQL3VGVll4VUxxQkhDcVZTS2RFQnVnc1Q5dm1mSkhVbE91aCtESmw2cUE3KzlnMXFtRDdGS2dLQURJcG1HODk5OHJQbGkrYUdOa2thSTJuSEcvL0R6TktMaVExbXNaejdkUVpqL3RIMlZVOXI5YnVQS1I4bHBIeGhDMEJHL2VHYWIraXBHZSszTG8vSUxXOHRqNlJaekVBYUpUMHJxUzNSZ1FlZ2ZuS0hKdDl6YTNsV0FnQ1ZldjJSeC9YQ1o4N3o1WjFFdlpJTzIzc05yS3pOUUhva1hXNHc3ajUyckZtcnA0OWNsUFJySlFGazBDdVgvRlA1MnFvbjVTRTMrMGg4QWNXM3NwaUJSSnJjZzRYTmlRNWVnWWF1d3pYNmpKUFZ2T2hES3JhMldNY0I0S0hkUGR1MCthNTd5NmVzdGo3d2tIV2N0NHBtSHpNbFBibjNQMGh5Qm1KVklKRUxKUzFQZFBBWUN2VjFHckhnZzJwWnVrakRqemxTTlkwTjFwRUFHTnE5WmF1MnJuaWtmRGZuNXUvY1kvRmN4MERjS2VsamZmMkRyQlpJdmFSckpaMlVhSUJCcUJrMlZBMS9Na08xYmEycUhkdW0yclpSS3JZMHEyWkUwNTUvM2pSVXhlSERyV01DR0lSZDYxN1JHL3ZCMHJidDZ0MndVYjBiTjJuWHk3L1h0aWVmMHJidWZRN3FmZk9ma2hiMzl3YkNyQmJJRys2VmRGU2lJUUFnbTFaTG1yRy9PNit5ZGhGOWI1OXg1KzhBQUpVNUs4M2JkdmZtUTRGRURYcWZkUWdBQ014MWt1NjJET0JEZ1VTK1lSMEFBQUt5enMwK1RQbFNJTjlOY3dsaUFBamNiZTZaT2xPK0ZFaVB1d1hON0Z3ZUFBVGtKdXNBOHFoQUlvOUllcmVrNzFrSEFRQlBQU3JwenlTdHRBNGl6d3BFN2c5bG9hU3ZXQWNCQU0vY0ptbU9wSjlZQjNtRGJ3WHloaS80c2w0V0FIamdMa2tuKy9iSWc2OEZFdm04cEhPc1F3Q0FzUnNrZmRUSGE4UStGMGprcTY1MWQxc0hBUUFEbDBqNmxHOHpqemY0WGlCeWR4dDRjY2NCQUtRa0tvei9KZWs4NnlEN0UwS0J5SjNPZXN3NkJBQ2s1QXBKLzJRZDRrQkNLWkNOa3Q3TGhYVUFPWENYdTVISWU2RVVpTndGcEdnbU1rWFMzMHRhNGV0NVFRQ28wSzhrL1cvM0xOeEhKRzIzRGpRUVBpem5QaGpUSlYwbGFYNlNnd0JBUXA2VWRKbzdJRTVFMXBkekg0em9ELzhEa3I1a0hRUUFLckJPMHZIdVhSNkpsVWZTUWkrUU4xem9ycEhjWlIwRUFBN2dJVW4vMHoxWkhyU3NGSWpjWDhwSEpCMHM2UUpKYTZ3REFZQ3ozdDBFOUU1M3NMdmFPbEExaEg0TjVFRG11REw1YzhzUUFISnBpenNyY3B2bGk1K1N2QVpTbTlnMyt5R2FsUndqcVVQU1hFa0xKTTJXMUdrZERFQW1yWFA3bmZ0ZGNXeXdEcFNrck05QTltZThwSkdTb29BTmtwb2xEYk1PNVVRRmQ3WjFpQXBkSk9rRjZ4QVlzRVpKVjFxSHFNQUxiaHZ6eFE1SnYzZnZNdHJvZnI5ZTB1dld3ZmFXNUF3azhRSkI1Ym9MRStiNnRHVHpBTTBjZThIblY0NzkwdWV0YytBQTNFRmRzOXZ4aFdKbHRJMGx1VE5FNWJKMEVSMEFrQ0lLQkFBUUN3VUNBSWlGQWdFQXhFS0JBQUJpb1VBQUFMRlFJQUNBV0NnUUFFQXNGQWdBSUJZS0JBQVFDd1VDQUlpRkFnRUF4RUtCQUFCaW9VQUFBTEZRSUFDQVdDZ1FBRUFzRkFnQUlCWUtCQUFRQ3dVQ0FJaUZBZ0VBeEVLQkFBQmlvVUJRTFVPdEF5RFRpdFlCc0s5Q3FWU3l6b0M5ZEJjbXpKWDBFK3NjRmZvYlNUY21QY2pNMG90SkQ1RjUzWVVKMFMvTmtqWmFaNm5BR2ttSHBERVEyOWpBMVZvSFFKOEsxZ0ZpK0xLa3Y5M1BQNitUTkZwU3ZmdDk5RlA2b0tSZVNmZEorcDZrN1NubXpidDY2d0FWT2tqU3p3L3cvNG4yWnlNa0RYYy9ROUYvNDQ4a3JaSjBpNlNWS1dYTkRRckVUeUgrdlV4d240R0tqb0FQZDc4LzFmMlFmMUxTSXdubHc5c05zdzVRb2VpZ1kxYU1mMitoKy9Wc1NXc2xYUzdwT2trOVZjNlhTMXdEOGRQajFnRU1USlgwc0tRN0pJMnpEcE1ESWM1eUI2dEQwcFdTL2x2U1l1c3dXVUNCK0NuUGZ5K0xYWkYwV1FmSnVEeGZsTzV3QnlvWFd3Y0pYWjUzVkQ3YlpoM0FXSWNya1RuV1FUSnNrM1VBRDV3cjZhUFdJVUpHZ2ZocGgzVUFEelJLK3E2a2R1c2dHYlhGT29BbnpyQU9FRElLeEUrN3VHT2tyTTFkVkI5akhTU0RldGpHeW82VWRHbE9yd2tOR2dYaXJ4OVlCL0RFQkVsTHJFTmtGTnZZSG1kTCttdnJFQ0dpUVB6MWdIVUFqOHkyRHBCUmJHTnZPdDA2UUlnb0VIODl3TDNxZnpURk9rQkdzWTI5YWE2a1Z1c1FvYUZBL0xWRjB0M1dJVHpSWVIwZ285akczbFIwSllJS1VDQit1OGs2Z0NkYWMvN2NRcExZeHQ0MDFUcEFhQ2dRdi8zQUxmR1JkMUY1TkZtSHlDaTJzVGR4Q3F0Q0ZJamZlaVY5UXRJNjZ5REdTdTdQQXRYSE52WW1ucitxRUFYaXY4Y2xmU3puTzlDTlBQaVdLTGF4UFo2MERoQWFDaVFNSzl3cW9ubjF2SFdBSE1qN05oWjV5RHBBYUNpUWNKem5mc2p6NkNuckFEbHhubHZ5UEk5VzV2aS9QVFlLSkJ5OWJ1RzMxZFpCRE9SeGVYc0wwVFoyalhVSUl6ZFlCd2dSQlJLVzlaS09sYlRaT2tqS2ZtUWRJRWV1ay9TQ2RZaVV2WkRqNGh3VUNpUThxOTNpYjNteHhpM3RqblJza1BUZW5OM2FldzUzWU1WRGdZVHBjdmNlOGF6cmtmUng3ZzVLM1ZwWElubll4bjRsNlRickVLR2lRTUlVN1ZpUGx2UitTVitWOUV2clFGVVdIUTErVTlKN2VFZTZtUTBaMzhia2JzNDQxVHBFeUNpUXNEM2dwdC92bERRekk4dHpyNVQwYnZkcTJ5ZXN3K0J0MjlqbnJjTlVTWFFBZG9GYnVvUURsRUdnUUxKanBidkEvb2xBYjBkOFZkTEpyZ2g1MFpHZkxwYzBROUlsZ1c1ak85emRWdE1rWFdRZEpnc0twVkxKT2dQMjBsMllVSTJ2bWV4V0Y1M3UxdmpwbE5Rc2FWWTF2cndLTmt2NnJidXpMRG9LL0xxa2x3NzBMODBzdlpoT3VneXIwdmFsUHJheEdXNzdhcWpXQUlNVTdkeCs3Y3J1Sm5kTjU0RHZnbWNiRzdqL0h3QUEvLyt6Yys5N2xWNlBWZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9idXR0b25cIik7XG5jb25zdCBwaWN0dXJlXzEgPSByZXF1aXJlKFwiLi9waWN0dXJlXCIpO1xuY29uc3QgYmFkZ2VfMSA9IHJlcXVpcmUoXCIuL2JhZGdlXCIpO1xuY29uc3Qgc3RhcnRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3N0YXJ0ZXJcIikpO1xuY29uc3Qgc2xpZGVvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwic2xpZGVvdXRcIikpO1xubGV0IFR3aXR0ZXJBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoKCkgPT4ge1xuICAgIGxldCBUd2l0dGVyQWRhcHRlciA9IGNsYXNzIFR3aXR0ZXJBZGFwdGVyIHtcbiAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICAgICAgdGhpcy53aWRnZXRzID0ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbjogdGhpcy5hZGFwdGVyLmNyZWF0ZVdpZGdldEZhY3RvcnkoYnV0dG9uXzEuQnV0dG9uKSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB0aGlzLmFkYXB0ZXIuY3JlYXRlV2lkZ2V0RmFjdG9yeShwaWN0dXJlXzEuUGljdHVyZSksXG4gICAgICAgICAgICAgICAgYmFkZ2U6IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KGJhZGdlXzEuQmFkZ2UpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gW3tcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJhcnRpY2xlLmNzcy0xZGJqYzRuXCIsXG4gICAgICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgVFdFRVRfU09VVEg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT1ncm91cF0gPiAqOmxhc3QtY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRXRUVUX0NPTUJPOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiXCIgLy9Ub0RvXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUElDVFVSRToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltsYW5nXSA+ICo6bGFzdC1jaGlsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgVFdFRVRfQVZBVEFSX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMThreHh6aC5yLTF3Ymg1YTIuci0xM3F6MXV1ID4gKjpsYXN0LWNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBUV0VFVF9VU0VSTkFNRV9CQURHRToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLTE4dTM3aXouci0xd2JoNWEyLnItMWY2cjd2ZCA+ICo6Zmlyc3QtY2hpbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6ICdiZWdpbicgLy8gZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgVFdFRVRfU1RBUlRFUjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLTE4dTM3aXouci0xaDB6NW1kLnItMWpvZWEwciA+ICo6Zmlyc3QtY2hpbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6ICdiZWdpbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFR5cGU6ICd0d2VldCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ1RXRUVUX0VWRU5UJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodHdlZXROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIG9mIHJpZ2h0IG1hcmdpbiB0byBsYXN0IHR3aXR0ZXIncyBuYXRpdmUgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSAoX2EgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMW1sd2xxZS5yLTE4dTM3aXouci0xOGt4eHpoLnItMWgwejVtZCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoJ3ItMThreHh6aCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoJ3ItMW1sd2xxZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3ItMWl1c3ZyNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3ItMTZ5MnVveCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZXROb2RlLnBhcmVudE5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2EgdGltZScpLnBhcmVudE5vZGUuaHJlZi5zcGxpdCgnLycpLnBvcCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IChfYiA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXZbbGFuZ10nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JGdWxsbmFtZTogKF9jID0gdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2E6bnRoLWNoaWxkKDEpIGRpdiBzcGFuIHNwYW4nKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JVc2VybmFtZTogKF9kID0gdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtOTAxb2FvLmNzcy1iZmE2a3ouci0xcmU3ZXpoLnItMTh1Mzdpei5yLTFxZDB4aGEuci1hMDIzZTYuci0xNmRiYTQxLnItYWQ5ejB4LnItYmNxZWVvLnItcXZ1dGMwID4gc3Bhbi5jc3MtOTAxb2FvLmNzcy0xNm15NDA2LnItMXFkMHhoYS5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMCcpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuaW5uZXJUZXh0LnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9ySW1nOiAoX2UgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMWF3b3p3eS5yLTE4a3h4emguci01ZjJyNW8gaW1nJykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpZGVvdXQgPSBuZXcgc2xpZGVvdXRfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGFuZWwnOiB0d2VldE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lbnUnOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGFkZGluZyc6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndG9sZXJhbmNlJzogNzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVvdXQub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVyLm9wZW5TdGFydGVyKGN0eCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVvdXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0eDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl1cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLWt1MXdpMi5yLTFqM3Q2N2Euci1tNjExYnlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9GSUxFX0FWQVRBUl9CQURHRToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLW9iZDBxdC5yLTE4dTM3aXouci0xdzZlNnJqLnItMXd0ajBlcCA+ICo6bGFzdC1jaGlsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogJ2VuZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9GSUxFX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMTVkMTY0ci5yLTFnOTRxbTAgZGl2LmNzcy05MDFvYW8uci1oa3lyYWIuci0xcWQweGhhLnItMWI2eWQxdy5yLTF2cjI5dDQuci1hZDl6MHguci1iY3FlZW8uci1xdnV0YzAgPiAqOmxhc3QtY2hpbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IFwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9GSUxFX0JVVFRPTl9HUk9VUDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLW9iZDBxdC5yLTE4dTM3aXouci0xdzZlNnJqLnItMWgwejVtZC5yLWRubXJ6cyA+ICo6Zmlyc3QtY2hpbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IFwiYmVnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ3Byb2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0RXZlbnQ6ICdQUk9GSUxFX0VWRU5UJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodGl0bGVJbmZvTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpbmcgb2YgbGVmdCBtYXJnaW4gdG8gdXNlcm5hbWUgaW4gdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMTVkMTY0ci5yLTFnOTRxbTAgPiBkaXYuY3NzLTFkYmpjNG4uci0xd2JoNWEyLnItZG5tcnpzLnItMW55NGwzbCcpLnN0eWxlLm1hcmdpbiA9ICcwcHggMHB4IDBweCAzMnB4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yRnVsbG5hbWU6IChfYSA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMWF3b3p3eS5yLTE4dTM3aXouci1kbm1yenMgPiBkaXYgPiBzcGFuOm50aC1jaGlsZCgxKSA+IHNwYW4nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JVc2VybmFtZTogKF9iID0gdGl0bGVJbmZvTm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTkwMW9hby5jc3MtYmZhNmt6LnItMXJlN2V6aC5yLTE4dTM3aXouci0xcWQweGhhLnItYTAyM2U2LnItMTZkYmE0MS5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMCBzcGFuJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbm5lclRleHQucmVwbGFjZSgnQCcsICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JJbWc6IChfYyA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignYSA+IGRpdi5jc3MtMWRiamM0bi5yLTFhZGczbGwuci0xdWRoMDh4ID4gZGl2LnItMXAwZHRhaS5yLTFwaTJ0c3guci0xZDJmNDkwLnItdThzMWQuci1pcG01YWYuci0xM3F6MXV1ID4gZGl2ID4gaW1nJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcIm1haW5bcm9sZT1tYWluXVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItYXFmYm80LnItMTRsdzlvdC5yLW15NWVwNi5yLXJ1bGw4ci5yLXFrbG1xaS5yLWd0ZHFpei5yLWlwbTVhZi5yLTFnNDBiOHFcIixcbiAgICAgICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIRUFESU5HX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaDJbcm9sZT1oZWFkaW5nXSBkaXYuci0xOHUzN2l6ICA+IGRpdi5jc3MtMWRiamM0bi5yLTFhd296d3kuci14b2R1dTUuci0xOHUzN2l6LnItZG5tcnpzID4gKjpsYXN0LWNoaWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAnaGVhZGluZycsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ0hFQURJTkdfRVZFTlQnLFxuICAgICAgICAgICAgICAgICAgICAvLyBUb0RvOiBUaGlzIHNlbGVjdG9ycyBhcmUgdW5zdGFibGUsIGJlY2F1c2UgVHdpdHRlciBoYXMgY2hhbmdlZCBjbGFzcyBuYW1lcyB0byBhdXRvLWdlbmVyYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6ICh0aXRsZUluZm9Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVGdWxsbmFtZTogKF9hID0gdGl0bGVJbmZvTm9kZS5xdWVyeVNlbGVjdG9yKCdzcGFuLmNzcy05MDFvYW8uY3NzLTE2bXk0MDYuci0xcWQweGhhLnItYWQ5ejB4LnItYmNxZWVvLnItcXZ1dGMwID4gc3BhbiA+IHNwYW4nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dC5yZXBsYWNlKCdAJywgJycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl1cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLTFtaTBxN28uci0xajN0NjdhLnItbTYxMWJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgU1VTUEVOREVEX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy05MDFvYW8uY3NzLWJmYTZrei5yLWhreXJhYi5yLTFxZDB4aGEuci0xYjZ5ZDF3LnItdncyYzBiLnItYWQ5ejB4LnItYmNxZWVvLnItM3MydTJxLnItcXZ1dGMwID4gKjpsYXN0LWNoaWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAnc3VzcGVuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnU1VTUEVOREVEX0VWRU5UJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodGl0bGVJbmZvTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlVXNlcm5hbWU6IChfYSA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy05MDFvYW8uY3NzLWJmYTZrei5yLWhreXJhYi5yLTFxZDB4aGEuci0xYjZ5ZDF3LnItdncyYzBiLnItYWQ5ejB4LnItYmNxZWVvLnItM3MydTJxLnItcXZ1dGMwID4gc3BhbiA+IHNwYW4nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hdHRhY2hDb25maWcodGhpcy5jb25maWcpO1xuICAgICAgICAgICAgdGhpcy5zdGFydGVyID0gbmV3IHN0YXJ0ZXJfMS5kZWZhdWx0KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaEZlYXR1cmUodGhpcy5zdGFydGVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICBhdHRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlci5hdHRhY2hGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcbiAgICAgICAgZGV0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZXIuZGV0YWNoRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0KFwiZHluYW1pYy1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcbiAgICBUd2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBJbmplY3RhYmxlLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIpO1xuICAgIHJldHVybiBUd2l0dGVyQWRhcHRlcjtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyQWRhcHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QaWN0dXJlID0gdm9pZCAwO1xuY2xhc3MgUGljdHVyZSB7XG4gICAgbW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbClcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgeyBpbWcsIGRpc2FibGVkLCBoaWRkZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxTdHJpbmcgPSBgPGltZyBzcmM9XCIke2ltZ31cIiAvPmA7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuZXhlYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmJvdHRvbSA9ICcxNXB4JztcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5yaWdodCA9ICcxNXB4JztcbiAgICAgICAgdGhpcy5lbC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuaW5pdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICB9XG59XG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkYXBwbGV0X3BuZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2RhcHBsZXQucG5nXCIpKTtcbmNsYXNzIFN0YXJ0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gYWRhcHRlcjtcbiAgICAgICAgdGhpcy53aWRnZXRzID0gW107XG4gICAgICAgIHRoaXMuX2J1dHRvbklkID0gMDtcbiAgICAgICAgdGhpcy5fb3ZlcmxheSA9IENvcmUub3ZlcmxheSh7IHVybDogY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoJ3N0YXJ0ZXIuaHRtbCcpLCB0aXRsZTogJ0lkZW50aXR5IE1hbmFnZW1lbnQnIH0pO1xuICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gdGhpcy5hZGFwdGVyLndpZGdldHM7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgVFdFRVRfU1RBUlRFUjogW1xuICAgICAgICAgICAgICAgIC8vIFRvRG86IHRoaW5rIGhvdyB0byBpbnNlcnQgYnV0dG9ucyB3aXRob3V0IFwidmlydHVhbCBmZWF0dXJlXCJcbiAgICAgICAgICAgICAgICBidXR0b24oe1xuICAgICAgICAgICAgICAgICAgICBcIkRFRkFVTFRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBkYXBwbGV0X3BuZ18xLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGVjOiAoY3R4KSA9PiB0aGlzLm9wZW5TdGFydGVyKGN0eClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxuICAgIG9wZW5TdGFydGVyKGN0eCkge1xuICAgICAgICB0aGlzLl9vdmVybGF5LnNlbmRBbmRMaXN0ZW4oJ2N0eCcsIHsgY3R4LCBidXR0b25zOiB0aGlzLndpZGdldHMgfSwge1xuICAgICAgICAgICAgJ2J1dHRvbl9jbGlja2VkJzogKG9wLCB7IHR5cGUsIG1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy53aWRnZXRzLmZpbmQoYiA9PiBiLmlkID09PSBpZCk7XG4gICAgICAgICAgICAgICAgKF9hID0gYnV0dG9uID09PSBudWxsIHx8IGJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uLmV4ZWMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGJ1dHRvbiwgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoRmVhdHVyZSh0aGlzKTtcbiAgICB9XG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRldGFjaEZlYXR1cmUodGhpcyk7XG4gICAgfVxuICAgIGF0dGFjaEZlYXR1cmUoZmVhdHVyZSkge1xuICAgICAgICB0aGlzLndpZGdldHMucHVzaCguLi4oZmVhdHVyZS5jb25maWcuVFdFRVRfU1RBUlRFUiB8fCBbXSkubWFwKGMgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYyksIHsgZmVhdHVyZSwgaWQ6ICsrdGhpcy5fYnV0dG9uSWQgfSkpKSk7XG4gICAgICAgIGRlbGV0ZSBmZWF0dXJlLmNvbmZpZy5UV0VFVF9TVEFSVEVSO1xuICAgIH1cbiAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy53aWRnZXRzID0gdGhpcy53aWRnZXRzLmZpbHRlcih3ID0+IHcuZmVhdHVyZSAhPT0gZmVhdHVyZSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhcnRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=