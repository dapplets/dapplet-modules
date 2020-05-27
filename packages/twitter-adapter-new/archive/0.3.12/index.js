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
                            'tolerance': 70,
                            'side': 'right'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVjb3VwbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VtaXR0ZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpZGVvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhZGdlLnRzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhcHBsZXQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHNDQUFzQyxtQkFBTyxDQUFDLHdDQUFlO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkVBQTZFO0FBQ25ILGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDZCQUE2QjtBQUN6RSxvQ0FBb0MsZ0JBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUEwRyxPQUFPLGdDQUFnQztBQUNqSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgfTtcbn0oKSk7XG5cbmZ1bmN0aW9uIGRlY291cGxlKG5vZGUsIGV2ZW50LCBmbikge1xuICB2YXIgZXZlLFxuICAgICAgdHJhY2tpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBjYXB0dXJlRXZlbnQoZSkge1xuICAgIGV2ZSA9IGU7XG4gICAgdHJhY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrKCkge1xuICAgIGlmICghdHJhY2tpbmcpIHtcbiAgICAgIHJlcXVlc3RBbmltRnJhbWUodXBkYXRlKTtcbiAgICAgIHRyYWNraW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgZm4uY2FsbChub2RlLCBldmUpO1xuICAgIHRyYWNraW5nID0gZmFsc2U7XG4gIH1cblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhcHR1cmVFdmVudCwgZmFsc2UpO1xuXG4gIHJldHVybiBjYXB0dXJlRXZlbnQ7XG59XG5cbi8qKlxuICogRXhwb3NlIGRlY291cGxlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZGVjb3VwbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiBAY2xhc3NcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiB2YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2VtaXR0ZXInKTtcbiAqXG4gKiB2YXIgZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gKi9cblxudmFyIEVtaXR0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFbWl0dGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbWl0dGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGlzdGVuZXIgdG8gdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIEEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYWRkLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBcImZvb1wiIGV2ZW50LlxuICAgKiBlbWl0dGVyLm9uKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgLy8gVXNlIHRoZSBjdXJyZW50IGNvbGxlY3Rpb24gb3IgY3JlYXRlIGl0LlxuICAgIHRoaXMuX2V2ZW50Q29sbGVjdGlvbiA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCB7fTtcblxuICAgIC8vIFVzZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uIG9mIGFuIGV2ZW50IG9yIGNyZWF0ZSBpdC5cbiAgICB0aGlzLl9ldmVudENvbGxlY3Rpb25bZXZlbnRdID0gdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSB8fCBbXTtcblxuICAgIC8vIEFwcGVuZHMgdGhlIGxpc3RlbmVyIGludG8gdGhlIGNvbGxlY3Rpb24gb2YgdGhlIGdpdmVuIGV2ZW50XG4gICAgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGlzdGVuZXIgdG8gdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQgdGhhdCB3aWxsIGJlIGNhbGxlZCBvbmx5IG9uY2UuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIEEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYWRkLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIFdpbGwgYWRkIGFuIGV2ZW50IGhhbmRsZXIgdG8gXCJmb29cIiBldmVudCBvbmNlLlxuICAgKiBlbWl0dGVyLm9uY2UoJ2ZvbycsIGxpc3RlbmVyKTtcbiAgICovXG5cbiAgRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZm4oKSB7XG4gICAgICBzZWxmLm9mZihldmVudCwgZm4pO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBmbi5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXG4gICAgdGhpcy5vbihldmVudCwgZm4pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBsaXN0ZW5lciBmcm9tIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIHJlbW92ZS5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBSZW1vdmUgYSBnaXZlbiBsaXN0ZW5lci5cbiAgICogZW1pdHRlci5vZmYoJ2ZvbycsIGxpc3RlbmVyKTtcbiAgICovXG5cbiAgRW1pdHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuXG4gICAgdmFyIGxpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuICAgIC8vIERlZmluZXMgbGlzdGVuZXJzIHZhbHVlLlxuICAgIGlmICghdGhpcy5fZXZlbnRDb2xsZWN0aW9uIHx8ICEobGlzdGVuZXJzID0gdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmbiwgaSkge1xuICAgICAgaWYgKGZuID09PSBsaXN0ZW5lciB8fCBmbi5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgLy8gUmVtb3ZlcyB0aGUgZ2l2ZW4gbGlzdGVuZXIuXG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmVzIGFuIGVtcHR5IGV2ZW50IGNvbGxlY3Rpb24uXG4gICAgaWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudENvbGxlY3Rpb25bZXZlbnRdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeGVjdXRlIGVhY2ggaXRlbSBpbiB0aGUgbGlzdGVuZXIgY29sbGVjdGlvbiBpbiBvcmRlciB3aXRoIHRoZSBzcGVjaWZpZWQgZGF0YS5cbiAgICogQG1lbWJlcm9mISBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHlvdSB3YW50IHRvIGVtaXQuXG4gICAqIEBwYXJhbSB7Li4uT2JqZWN0fSBkYXRhIC0gRGF0YSB0byBwYXNzIHRvIHRoZSBsaXN0ZW5lcnMuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gRW1pdHMgdGhlIFwiZm9vXCIgZXZlbnQgd2l0aCAncGFyYW0xJyBhbmQgJ3BhcmFtMicgYXMgYXJndW1lbnRzLlxuICAgKiBlbWl0dGVyLmVtaXQoJ2ZvbycsICdwYXJhbTEnLCAncGFyYW0yJyk7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuICAgIC8vIERlZmluZXMgbGlzdGVuZXJzIHZhbHVlLlxuICAgIGlmICghdGhpcy5fZXZlbnRDb2xsZWN0aW9uIHx8ICEobGlzdGVuZXJzID0gdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENsb25lIGxpc3RlbmVyc1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBFbWl0dGVyO1xufSkoKTtcblxuLyoqXG4gKiBFeHBvcnRzIEVtaXR0ZXJcbiAqL1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG52YXIgZGVjb3VwbGUgPSByZXF1aXJlKCdkZWNvdXBsZScpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG5cbi8qKlxuICogUHJpdmF0ZXNcbiAqL1xudmFyIHNjcm9sbFRpbWVvdXQ7XG52YXIgc2Nyb2xsaW5nID0gZmFsc2U7XG52YXIgZG9jID0gd2luZG93LmRvY3VtZW50O1xudmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xudmFyIG1zUG9pbnRlclN1cHBvcnRlZCA9IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZDtcbnZhciB0b3VjaCA9IHtcbiAgJ3N0YXJ0JzogbXNQb2ludGVyU3VwcG9ydGVkID8gJ01TUG9pbnRlckRvd24nIDogJ3RvdWNoc3RhcnQnLFxuICAnbW92ZSc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJNb3ZlJyA6ICd0b3VjaG1vdmUnLFxuICAnZW5kJzogbXNQb2ludGVyU3VwcG9ydGVkID8gJ01TUG9pbnRlclVwJyA6ICd0b3VjaGVuZCdcbn07XG52YXIgcHJlZml4ID0gKGZ1bmN0aW9uIHByZWZpeCgpIHtcbiAgdmFyIHJlZ2V4ID0gL14oV2Via2l0fEtodG1sfE1venxtc3xPKSg/PVtBLVpdKS87XG4gIHZhciBzdHlsZURlY2xhcmF0aW9uID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXS5zdHlsZTtcbiAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZURlY2xhcmF0aW9uKSB7XG4gICAgaWYgKHJlZ2V4LnRlc3QocHJvcCkpIHtcbiAgICAgIHJldHVybiAnLScgKyBwcm9wLm1hdGNoKHJlZ2V4KVswXS50b0xvd2VyQ2FzZSgpICsgJy0nO1xuICAgIH1cbiAgfVxuICAvLyBOb3RoaW5nIGZvdW5kIHNvIGZhcj8gV2Via2l0IGRvZXMgbm90IGVudW1lcmF0ZSBvdmVyIHRoZSBDU1MgcHJvcGVydGllcyBvZiB0aGUgc3R5bGUgb2JqZWN0LlxuICAvLyBIb3dldmVyIChwcm9wIGluIHN0eWxlKSByZXR1cm5zIHRoZSBjb3JyZWN0IHZhbHVlLCBzbyB3ZSdsbCBoYXZlIHRvIHRlc3QgZm9yXG4gIC8vIHRoZSBwcmVjZW5jZSBvZiBhIHNwZWNpZmljIHByb3BlcnR5XG4gIGlmICgnV2Via2l0T3BhY2l0eScgaW4gc3R5bGVEZWNsYXJhdGlvbikgeyByZXR1cm4gJy13ZWJraXQtJzsgfVxuICBpZiAoJ0todG1sT3BhY2l0eScgaW4gc3R5bGVEZWNsYXJhdGlvbikgeyByZXR1cm4gJy1raHRtbC0nOyB9XG4gIHJldHVybiAnJztcbn0oKSk7XG5mdW5jdGlvbiBleHRlbmQoZGVzdGluYXRpb24sIGZyb20pIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBmcm9tKSB7XG4gICAgaWYgKGZyb21bcHJvcF0pIHtcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BdID0gZnJvbVtwcm9wXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufVxuZnVuY3Rpb24gaW5oZXJpdHMoY2hpbGQsIHViZXIpIHtcbiAgY2hpbGQucHJvdG90eXBlID0gZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSB8fCB7fSwgdWJlci5wcm90b3R5cGUpO1xufVxuZnVuY3Rpb24gaGFzSWdub3JlZEVsZW1lbnRzKGVsKSB7XG4gIHdoaWxlIChlbC5wYXJlbnROb2RlKSB7XG4gICAgaWYgKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZW91dC1pZ25vcmUnKSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogU2xpZGVvdXQgY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2xpZGVvdXQob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBTZXRzIGRlZmF1bHQgdmFsdWVzXG4gIHRoaXMuX3N0YXJ0T2Zmc2V0WCA9IDA7XG4gIHRoaXMuX2N1cnJlbnRPZmZzZXRYID0gMDtcbiAgdGhpcy5fb3BlbmluZyA9IGZhbHNlO1xuICB0aGlzLl9tb3ZlZCA9IGZhbHNlO1xuICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgdGhpcy5fcHJldmVudE9wZW4gPSBmYWxzZTtcbiAgdGhpcy5fdG91Y2ggPSBvcHRpb25zLnRvdWNoID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy50b3VjaCAmJiB0cnVlO1xuICB0aGlzLl9zaWRlID0gb3B0aW9ucy5zaWRlIHx8ICdsZWZ0JztcblxuICAvLyBTZXRzIHBhbmVsXG4gIHRoaXMucGFuZWwgPSBvcHRpb25zLnBhbmVsO1xuICB0aGlzLm1lbnUgPSBvcHRpb25zLm1lbnU7XG5cbiAgLy8gU2V0cyAgY2xhc3NuYW1lc1xuICBpZiAoIXRoaXMucGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1wYW5lbCcpKSB7XG4gICAgdGhpcy5wYW5lbC5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1wYW5lbCcpO1xuICB9XG4gIGlmICghdGhpcy5wYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LXBhbmVsLScgKyB0aGlzLl9zaWRlKSkge1xuICAgIHRoaXMucGFuZWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtcGFuZWwtJyArIHRoaXMuX3NpZGUpO1xuICB9XG4gIGlmICghdGhpcy5tZW51LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVvdXQtbWVudScpKSB7XG4gICAgdGhpcy5tZW51LmNsYXNzTGlzdC5hZGQoJ3NsaWRlb3V0LW1lbnUnKTtcbiAgfVxuICBpZiAoIXRoaXMubWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW1lbnUtJyArIHRoaXMuX3NpZGUpKSB7XG4gICAgdGhpcy5tZW51LmNsYXNzTGlzdC5hZGQoJ3NsaWRlb3V0LW1lbnUtJyArIHRoaXMuX3NpZGUpO1xuICB9XG5cbiAgLy8gU2V0cyBvcHRpb25zXG4gIHRoaXMuX2Z4ID0gb3B0aW9ucy5meCB8fCAnZWFzZSc7XG4gIHRoaXMuX2R1cmF0aW9uID0gcGFyc2VJbnQob3B0aW9ucy5kdXJhdGlvbiwgMTApIHx8IDMwMDtcbiAgdGhpcy5fdG9sZXJhbmNlID0gcGFyc2VJbnQob3B0aW9ucy50b2xlcmFuY2UsIDEwKSB8fCA3MDtcbiAgdGhpcy5fcGFkZGluZyA9IHRoaXMuX3RyYW5zbGF0ZVRvID0gcGFyc2VJbnQob3B0aW9ucy5wYWRkaW5nLCAxMCkgfHwgMjU2O1xuICB0aGlzLl9vcmllbnRhdGlvbiA9IHRoaXMuX3NpZGUgPT09ICdyaWdodCcgPyAtMSA6IDE7XG4gIHRoaXMuX3RyYW5zbGF0ZVRvICo9IHRoaXMuX29yaWVudGF0aW9uO1xuXG4gIC8vIEluaXQgdG91Y2ggZXZlbnRzXG4gIGlmICh0aGlzLl90b3VjaCkge1xuICAgIHRoaXMuX2luaXRUb3VjaEV2ZW50cygpO1xuICB9XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBFbWl0dGVyXG4gKi9cbmluaGVyaXRzKFNsaWRlb3V0LCBFbWl0dGVyKTtcblxuLyoqXG4gKiBPcGVucyB0aGUgc2xpZGVvdXQgbWVudS5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLmVtaXQoJ2JlZm9yZW9wZW4nKTtcbiAgaWYgKCFodG1sLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVvdXQtb3BlbicpKSB7XG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1vcGVuJyk7XG4gIH1cbiAgdGhpcy5fc2V0VHJhbnNpdGlvbigpO1xuICB0aGlzLl90cmFuc2xhdGVYVG8odGhpcy5fdHJhbnNsYXRlVG8pO1xuICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHNlbGYucGFuZWwuc3R5bGUudHJhbnNpdGlvbiA9IHNlbGYucGFuZWwuc3R5bGVbJy13ZWJraXQtdHJhbnNpdGlvbiddID0gJyc7XG4gICAgc2VsZi5lbWl0KCdvcGVuJyk7XG4gIH0sIHRoaXMuX2R1cmF0aW9uICsgNTApO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xvc2VzIHNsaWRlb3V0IG1lbnUuXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmICghdGhpcy5pc09wZW4oKSAmJiAhdGhpcy5fb3BlbmluZykge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuZW1pdCgnYmVmb3JlY2xvc2UnKTtcbiAgdGhpcy5fc2V0VHJhbnNpdGlvbigpO1xuICB0aGlzLl90cmFuc2xhdGVYVG8oMCk7XG4gIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVvdXQtb3BlbicpO1xuICAgIHNlbGYucGFuZWwuc3R5bGUudHJhbnNpdGlvbiA9IHNlbGYucGFuZWwuc3R5bGVbJy13ZWJraXQtdHJhbnNpdGlvbiddID0gc2VsZi5wYW5lbC5zdHlsZVtwcmVmaXggKyAndHJhbnNmb3JtJ10gPSBzZWxmLnBhbmVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIHNlbGYuZW1pdCgnY2xvc2UnKTtcbiAgfSwgdGhpcy5fZHVyYXRpb24gKyA1MCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUb2dnbGVzIChvcGVuL2Nsb3NlKSBzbGlkZW91dCBtZW51LlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmlzT3BlbigpID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc2xpZGVvdXQgaXMgY3VycmVudGx5IG9wZW4sIGFuZCBmYWxzZSBpZiBpdCBpcyBjbG9zZWQuXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX29wZW5lZDtcbn07XG5cbi8qKlxuICogVHJhbnNsYXRlcyBwYW5lbCBhbmQgdXBkYXRlcyBjdXJyZW50T2Zmc2V0IHdpdGggYSBnaXZlbiBYIHBvaW50XG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5fdHJhbnNsYXRlWFRvID0gZnVuY3Rpb24odHJhbnNsYXRlWCkge1xuICB0aGlzLl9jdXJyZW50T2Zmc2V0WCA9IHRyYW5zbGF0ZVg7XG4gIHRoaXMucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zZm9ybSddID0gdGhpcy5wYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdHJhbnNsYXRlWCArICdweCknO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRyYW5zaXRpb24gcHJvcGVydGllc1xuICovXG5TbGlkZW91dC5wcm90b3R5cGUuX3NldFRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wYW5lbC5zdHlsZVtwcmVmaXggKyAndHJhbnNpdGlvbiddID0gdGhpcy5wYW5lbC5zdHlsZS50cmFuc2l0aW9uID0gcHJlZml4ICsgJ3RyYW5zZm9ybSAnICsgdGhpcy5fZHVyYXRpb24gKyAnbXMgJyArIHRoaXMuX2Z4O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgdG91Y2ggZXZlbnRcbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLl9pbml0VG91Y2hFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8qKlxuICAgKiBEZWNvdXBsZSBzY3JvbGwgZXZlbnRcbiAgICovXG4gIHRoaXMuX29uU2Nyb2xsRm4gPSBkZWNvdXBsZShkb2MsICdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXNlbGYuX21vdmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dCk7XG4gICAgICBzY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgc2Nyb2xsVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgfSwgMjUwKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBQcmV2ZW50cyB0b3VjaG1vdmUgZXZlbnQgaWYgc2xpZGVvdXQgaXMgbW92aW5nXG4gICAqL1xuICB0aGlzLl9wcmV2ZW50TW92ZSA9IGZ1bmN0aW9uKGV2ZSkge1xuICAgIGlmIChzZWxmLl9tb3ZlZCkge1xuICAgICAgZXZlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX3ByZXZlbnRNb3ZlKTtcblxuICAvKipcbiAgICogUmVzZXRzIHZhbHVlcyBvbiB0b3VjaHN0YXJ0XG4gICAqL1xuICB0aGlzLl9yZXNldFRvdWNoRm4gPSBmdW5jdGlvbihldmUpIHtcbiAgICBpZiAodHlwZW9mIGV2ZS50b3VjaGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuX21vdmVkID0gZmFsc2U7XG4gICAgc2VsZi5fb3BlbmluZyA9IGZhbHNlO1xuICAgIHNlbGYuX3N0YXJ0T2Zmc2V0WCA9IGV2ZS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgIHNlbGYuX3ByZXZlbnRPcGVuID0gKCFzZWxmLl90b3VjaCB8fCAoIXNlbGYuaXNPcGVuKCkgJiYgc2VsZi5tZW51LmNsaWVudFdpZHRoICE9PSAwKSk7XG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoLnN0YXJ0LCB0aGlzLl9yZXNldFRvdWNoRm4pO1xuXG4gIC8qKlxuICAgKiBSZXNldHMgdmFsdWVzIG9uIHRvdWNoY2FuY2VsXG4gICAqL1xuICB0aGlzLl9vblRvdWNoQ2FuY2VsRm4gPSBmdW5jdGlvbigpIHtcbiAgICBzZWxmLl9tb3ZlZCA9IGZhbHNlO1xuICAgIHNlbGYuX29wZW5pbmcgPSBmYWxzZTtcbiAgfTtcblxuICB0aGlzLnBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5fb25Ub3VjaENhbmNlbEZuKTtcblxuICAvKipcbiAgICogVG9nZ2xlcyBzbGlkZW91dCBvbiB0b3VjaGVuZFxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaEVuZEZuID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHNlbGYuX21vdmVkKSB7XG4gICAgICBzZWxmLmVtaXQoJ3RyYW5zbGF0ZWVuZCcpO1xuICAgICAgKHNlbGYuX29wZW5pbmcgJiYgTWF0aC5hYnMoc2VsZi5fY3VycmVudE9mZnNldFgpID4gc2VsZi5fdG9sZXJhbmNlKSA/IHNlbGYub3BlbigpIDogc2VsZi5jbG9zZSgpO1xuICAgIH1cbiAgICBzZWxmLl9tb3ZlZCA9IGZhbHNlO1xuICB9O1xuXG4gIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5lbmQsIHRoaXMuX29uVG91Y2hFbmRGbik7XG5cbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgcGFuZWwgb24gdG91Y2htb3ZlXG4gICAqL1xuICB0aGlzLl9vblRvdWNoTW92ZUZuID0gZnVuY3Rpb24oZXZlKSB7XG4gICAgaWYgKFxuICAgICAgc2Nyb2xsaW5nIHx8XG4gICAgICBzZWxmLl9wcmV2ZW50T3BlbiB8fFxuICAgICAgdHlwZW9mIGV2ZS50b3VjaGVzID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgaGFzSWdub3JlZEVsZW1lbnRzKGV2ZS50YXJnZXQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRpZl94ID0gZXZlLnRvdWNoZXNbMF0uY2xpZW50WCAtIHNlbGYuX3N0YXJ0T2Zmc2V0WDtcbiAgICB2YXIgdHJhbnNsYXRlWCA9IHNlbGYuX2N1cnJlbnRPZmZzZXRYID0gZGlmX3g7XG5cbiAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWCkgPiBzZWxmLl9wYWRkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGRpZl94KSA+IDIwKSB7XG5cbiAgICAgIHNlbGYuX29wZW5pbmcgPSB0cnVlO1xuXG4gICAgICB2YXIgb3JpZW50ZWRfZGlmX3ggPSBkaWZfeCAqIHNlbGYuX29yaWVudGF0aW9uO1xuXG4gICAgICBpZiAoc2VsZi5fb3BlbmVkICYmIG9yaWVudGVkX2RpZl94ID4gMCB8fCAhc2VsZi5fb3BlbmVkICYmIG9yaWVudGVkX2RpZl94IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZi5fbW92ZWQpIHtcbiAgICAgICAgc2VsZi5lbWl0KCd0cmFuc2xhdGVzdGFydCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3JpZW50ZWRfZGlmX3ggPD0gMCkge1xuICAgICAgICB0cmFuc2xhdGVYID0gZGlmX3ggKyBzZWxmLl9wYWRkaW5nICogc2VsZi5fb3JpZW50YXRpb247XG4gICAgICAgIHNlbGYuX29wZW5pbmcgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoc2VsZi5fbW92ZWQgJiYgaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW9wZW4nKSkpIHtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1vcGVuJyk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zZm9ybSddID0gc2VsZi5wYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdHJhbnNsYXRlWCArICdweCknO1xuICAgICAgc2VsZi5lbWl0KCd0cmFuc2xhdGUnLCB0cmFuc2xhdGVYKTtcbiAgICAgIHNlbGYuX21vdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgfTtcblxuICB0aGlzLnBhbmVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2gubW92ZSwgdGhpcy5fb25Ub3VjaE1vdmVGbik7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVuYWJsZSBvcGVuaW5nIHRoZSBzbGlkZW91dCB2aWEgdG91Y2ggZXZlbnRzLlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuZW5hYmxlVG91Y2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fdG91Y2ggPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGlzYWJsZSBvcGVuaW5nIHRoZSBzbGlkZW91dCB2aWEgdG91Y2ggZXZlbnRzLlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuZGlzYWJsZVRvdWNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3RvdWNoID0gZmFsc2U7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEZXN0cm95IGFuIGluc3RhbmNlIG9mIHNsaWRlb3V0LlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAvLyBDbG9zZSBiZWZvcmUgY2xlYW5cbiAgdGhpcy5jbG9zZSgpO1xuXG4gIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2gubW92ZSwgdGhpcy5fcHJldmVudE1vdmUpO1xuICB0aGlzLnBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2guc3RhcnQsIHRoaXMuX3Jlc2V0VG91Y2hGbik7XG4gIHRoaXMucGFuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLl9vblRvdWNoQ2FuY2VsRm4pO1xuICB0aGlzLnBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2guZW5kLCB0aGlzLl9vblRvdWNoRW5kRm4pO1xuICB0aGlzLnBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2gubW92ZSwgdGhpcy5fb25Ub3VjaE1vdmVGbik7XG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9vblNjcm9sbEZuKTtcblxuICAvLyBSZW1vdmUgbWV0aG9kc1xuICB0aGlzLm9wZW4gPSB0aGlzLmNsb3NlID0gZnVuY3Rpb24oKSB7fTtcblxuICAvLyBSZXR1cm4gdGhlIGluc3RhbmNlIHNvIGl0IGNhbiBiZSBlYXNpbHkgZGVyZWZlcmVuY2VkXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgU2xpZGVvdXRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBTbGlkZW91dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5CYWRnZSA9IHZvaWQgMDtcbmNsYXNzIEJhZGdlIHtcbiAgICBtb3VudCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuZWwpXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHsgaW1nLCB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCwgaGlkZGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGltZ1RhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbWdUYWcgPSB0aGlzLmVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaW5zUG9pbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnVFdFRVRfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMTVweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMTVweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnMnB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJzNweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1RXRUVUX0FWQVRBUl9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcyNHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyNHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICctMnB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJy03cHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdQUk9GSUxFX0FWQVRBUl9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICczMnB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICczMnB4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9VU0VSTkFNRV9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcyMHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyMHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICcycHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdIRUFESU5HX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzI0cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzI0cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbdmVydGljYWxdID0gJzNweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVtob3Jpem9udGFsXSA9ICcxcHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTVVNQRU5ERURfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMjBweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnM3B4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9CVVRUT05fR1JPVVAnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMThweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMThweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnOXB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJzEwcHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuZWwuZmlyc3RDaGlsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHN3aXRjaCAodGhpcy5pbnNQb2ludE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1NVU1BFTkRFRF9VU0VSTkFNRV9CQURHRSc6XG4gICAgICAgICAgICBjYXNlICdQUk9GSUxFX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUubWFyZ2luID0gJzJweCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIRUFESU5HX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9BVkFUQVJfQkFER0UnOlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BST0ZJTEVfQlVUVE9OX0dST1VQJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiZGFwcGxldC13aWRnZXQtcHJvZmlsZS1idXR0b25cIiwgXCJjc3MtMTh0OTRvNFwiLCBcImNzcy0xZGJqYzRuXCIsIFwici0xbml3aHpnXCIsIFwici0xeGw1bmpvXCIsIFwici1zZHpsaWpcIiwgXCJyLTFwaGJvdHlcIiwgXCJyLXJzOTliN1wiLCBcInItMXcycG1nXCIsIFwici0xNWQxNjRyXCIsIFwici16c28yMzlcIiwgXCJyLTF2dXNjZmRcIiwgXCJyLTUzeGI3aFwiLCBcInItbWsweWl0XCIsIFwici1vN3lucWNcIiwgXCJyLTY0MTZlZ1wiLCBcInItbHJ2aWJyXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzdHlsZVRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgICAgICAgICBzdHlsZVRhZy5pbm5lclRleHQgPSBgLmRhcHBsZXQtd2lkZ2V0LXByb2ZpbGUtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA5MywgMzQsIDAuMSlcbiAgICAgICAgICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5CYWRnZSA9IEJhZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJ1dHRvbiA9IHZvaWQgMDtcbmNsYXNzIEJ1dHRvbiB7XG4gICAgbW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbClcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgeyBpbWcsIGxhYmVsLCBsb2FkaW5nLCBkaXNhYmxlZCwgaGlkZGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmluc1BvaW50TmFtZSA9PT0gJ1RXRUVUX1NPVVRIJykge1xuICAgICAgICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGA8ZGl2IGFyaWEtaGFzcG9wdXA9XCJmYWxzZVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLWZvY3VzYWJsZT1cInRydWVcIiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNzcy0xOHQ5NG80IGNzcy0xZGJqYzRuIHItMTc3N2ZjaSByLTExY3BvazEgci0xbnk0bDNsIHItYnp0a28zIHItbHJ2aWJyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGlyPVwibHRyXCIgY2xhc3M9XCJjc3MtOTAxb2FvIHItMWF3b3p3eSByLTFyZTdlemggci02a29hbGogci0xcWQweGhhIHItYTAyM2U2IHItMTZkYmE0MSByLTFoMHo1bWQgci1hZDl6MHggci1iY3FlZW8gci1vN3lucWMgci1jbHA3YjEgci0zczJ1MnEgci1xdnV0YzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjc3MtMWRiamM0biByLXhvZHV1NVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjc3MtMWRiamM0biByLXNkemxpaiByLTFwMGR0YWkgci14b2R1dTUgci0xZDJmNDkwIHIteGY0aXV3IHItdThzMWQgci16Y2hsbmogci1pcG01YWYgci1vN3lucWMgci02NDE2ZWdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2xvYWRpbmcgPyBgPHN2ZyB3aWR0aD1cIjE4cHhcIiBoZWlnaHQ9XCIxOHB4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiIGNsYXNzPVwibGRzLXJvbGxpbmdcIiBzdHlsZT1cImJhY2tncm91bmQ6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMxZGExZjJcIiBzdHJva2Utd2lkdGg9XCIxNFwiIHI9XCI0MFwiIHN0cm9rZS1kYXNoYXJyYXk9XCIxODguNDk1NTU5MjE1Mzg3NTcgNjQuODMxODUzMDcxNzk1ODZcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNzcuNTc5MyA1MCA1MClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgY2FsY01vZGU9XCJsaW5lYXJcIiB2YWx1ZXM9XCIwIDUwIDUwOzM2MCA1MCA1MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIjBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gIDogYDxpbWcgaGVpZ2h0PVwiMThcIiBzcmM9XCIke2ltZ31cIiBjbGFzcz1cInItNHF0cXA5IHIteXl5eW9vIHItMXh2bGk1dCByLWRubXJ6cyByLWJud3FpbSByLTFwbGNydWkgci1scnZpYnIgci0xaGR2MHFpXCI+YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhsYWJlbCA9PT0gbnVsbCB8fCBsYWJlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGFiZWwudG9TdHJpbmcoKSkgPyBgPGRpdiBjbGFzcz1cImNzcy0xZGJqYzRuIHIteG9kdXU1IHItMXVkaDA4eFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNzcy05MDFvYW8gY3NzLTE2bXk0MDYgci0xcWQweGhhIHItYWQ5ejB4IHItMW4weHE2ZSByLWJjcWVlbyByLWQzaGJlMSByLTF3Z2cyYjIgci1heHhpMnogci1xdnV0YzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICR7ZGlzYWJsZWQgPyAnc3R5bGU9XCJjb2xvcjojYWFhO1wiJyA6ICcnfSBjbGFzcz1cImNzcy05MDFvYW8gY3NzLTE2bXk0MDYgci0xcWQweGhhIHItYWQ5ejB4IHItYmNxZWVvIHItcXZ1dGMwXCI+JHtsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbnNQb2ludE5hbWUgPT09ICdQUk9GSUxFX0JVVFRPTl9HUk9VUCcpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMThweCc7XG4gICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcxOHB4JztcbiAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS50b3AgPSAnOXB4JztcbiAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUubGVmdCA9ICcxMHB4JztcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGltZ1RhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbnNQb2ludE5hbWUgPT09ICdUV0VFVF9TVEFSVEVSJykge1xuICAgICAgICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGA8ZGl2IHN0eWxlPVwibWFyZ2luOiAwIDEwcHhcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJNb3JlXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtZm9jdXNhYmxlPVwidHJ1ZVwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY3NzLTE4dDk0bzQgY3NzLTFkYmpjNG4gci0xNzc3ZmNpIHItMTFjcG9rMSByLTFueTRsM2wgci1ienRrbzMgci1scnZpYnJcIiBkYXRhLXRlc3RpZD1cImNhcmV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGlyPVwibHRyXCIgY2xhc3M9XCJjc3MtOTAxb2FvIHItMWF3b3p3eSByLTFyZTdlemggci02a29hbGogci0xcWQweGhhIHItYTAyM2U2IHItMTZkYmE0MSByLTFoMHo1bWQgci1hZDl6MHggci1iY3FlZW8gci1vN3lucWMgci1jbHA3YjEgci0zczJ1MnEgci1xdnV0YzBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNzcy0xZGJqYzRuIHIteG9kdXU1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3NzLTFkYmpjNG4gci0xbml3aHpnIHItc2R6bGlqIHItMXAwZHRhaSByLXhvZHV1NSByLTFkMmY0OTAgci1wb2RiZjcgci11OHMxZCByLXpjaGxuaiByLWlwbTVhZiByLW83eW5xYyByLTY0MTZlZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIyNVwiIHNyYz1cIiR7aW1nfVwiIGNsYXNzPVwici00cXRxcDkgci15eXl5b28gci1pcDh1anggci1kbm1yenMgci1ibndxaW0gci0xcGxjcnVpIHItbHJ2aWJyIHItMjd0bDBxXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGVUYWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKHRoaXMuaW5zUG9pbnROYW1lID09PSAnVFdFRVRfU09VVEgnKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2Nzcy0xZGJqYzRuJywgJ3ItMWl1c3ZyNCcsICdyLTE4dTM3aXonLCAnci0xNnkydW94JywgJ3ItMWgwejVtZCcpO1xuICAgICAgICAgICAgc3R5bGVUYWcuaW5uZXJUZXh0ID0gYFxuICAgICAgICAgICAgICAgIC5kYXBwbGV0LXdpZGdldCA+IGRpdltyb2xlPVwiYnV0dG9uXCJdID4gZGl2OmhvdmVyID4gLmNzcy0xZGJqYzRuLnIteG9kdXU1ID4gLnItc2R6bGlqIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOSwgMTYxLCAyNDIsIDAuMSk7IFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93OyBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0ID4gZGl2W3JvbGU9XCJidXR0b25cIl0gPiBkaXY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDI5LDE2MSwyNDIsMS4wMCk7XG4gICAgICAgICAgICAgICAgfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbnNQb2ludE5hbWUgPT09ICdQUk9GSUxFX0JVVFRPTl9HUk9VUCcpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcImRhcHBsZXQtd2lkZ2V0LXByb2ZpbGUtYnV0dG9uXCIsIFwiY3NzLTE4dDk0bzRcIiwgXCJjc3MtMWRiamM0blwiLCBcInItMW5pd2h6Z1wiLCBcInItMXhsNW5qb1wiLCBcInItc2R6bGlqXCIsIFwici0xcGhib3R5XCIsIFwici1yczk5YjdcIiwgXCJyLTF3MnBtZ1wiLCBcInItMTVkMTY0clwiLCBcInItenNvMjM5XCIsIFwici0xdnVzY2ZkXCIsIFwici01M3hiN2hcIiwgXCJyLW1rMHlpdFwiLCBcInItbzd5bnFjXCIsIFwici02NDE2ZWdcIiwgXCJyLWxydmliclwiLCBcInItcDFuM3k1XCIpO1xuICAgICAgICAgICAgc3R5bGVUYWcuaW5uZXJUZXh0ID0gYC5kYXBwbGV0LXdpZGdldC1wcm9maWxlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOSwgMTYxLCAyNDIsIDAuMSlcbiAgICAgICAgICAgIH1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmV4ZWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlVGFnKTtcbiAgICAgICAgdGhpcy5tb3VudCgpO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnN0YXRlKS5pbml0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy5zdGF0ZS5jdHgsIHRoaXMuc3RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVpBQUFBR1FDQVlBQUFDQXZ6Yk1BQUFoVDBsRVFWUjRuT3pkRFpSZFpYM3Y4ZCtaTXpPWlNTYVp5U1NUdHlGREFrTVNFaWRGbzdtTjVqWVNoVUtqc2RqWWFDQUN4UVZpdVlLeFVGaG9FSzRXTHNyTEtpMElDeTRJNWFYSzFZcFNMRlNVR2tGQVJDZUNEUVlpNFMwUURVbEltTHhOemwzNzVFRWdtVW5tN0RsNy81OW43KzlucmJPU0pYS2VIOG1lL2R2UGZubDJiYWxVRXVDYjdzS0U2SmN1U1lzbFhTQ3AxenFUZ1RaSmwwbzZlV2JwUmVzc3dENXFyQU1BQjNDK3BIT3NReGlZSnVrSlNjZFpCd0g2UTRFZ0JCZEtPbGRTdlhXUWxIUkkrcGFiZ1FEZW9rQVFnanBKRjB0NlNkSXRrajR1cWRVNlZKVjFTVHBQMGdPU1ZrdDZoM1VnNEVCcXJRTUFGWWhLNHdUMzJTSHBxNUl1a2JURk90Z2d6SlowbGZzVkNBb3pFSVNxM2wwZmVVTFNET3N3TVRSTHVsWFN3NVFIUWtXQklIUWRrdTRKN0dKenA4dTh4RG9JTUJnVUNMSmdvcVJ2UytxV2RKS2tvbldnZmtRempUc2svVmJTSE9zd3dHQlJJTWlTTGtrM3VoMzBHZTQwa2JXb3pCWksrckU3WGJYWU9oQlFMUlFJc21peXV6RDlrcnV6eWNxcExzTjNKYzB6ekFFa2dnSkJsalZLK2dlM0U3L016VkNTRnBYWGNrblBTTHFXWnptUVpkekdpendZSjJtWis3enFuck9JUHM5SyttLzMyZUJ1QjM1cFA5OVRjTjgxd3QxU1BNVTlNWDZ3cEVtU3BtYncrUlNnWHhRSThtYWtwUGU0ei82c2xiVGUvYjZEbVFTd0x3b0U2RnVIK3dEb0I5ZEFBQUN4VUNBQWdGZ29FQUJBTEJRSUFDQVdDZ1FBRUFzRkFnQ0loUUlCQU1SQ2dRQUFZcUZBQUFDeFVDQUFnRmdvRUFCQUxCUUlBQ0FXQ2dRQUVBc0ZBZ0NJaFFJQkFNUkNnUUFBWXFGQUFBQ3hVQ0FBZ0Znb0VBQkFMQlFJQUNBV0NnUUFFQXNGQWdDSWhRSUJBTVJDZ1FBQVlxRkFBQUN4VUNBQWdGZ29FQUJBTEJRSUFDQ1cycVFINkM1TVNIb0lJUFA0T1VKY00wc3ZKdmJkekVBQUFMRlFJQUNBV0JJL2hRVU1VS3VrNmU3VEthbGQwaEhXb1R6UUxPbm5rdFpLZWtIU1NrbS9sdlNnZFRDQUFrR2E2aVYxU1pyc0NtTDZYcjlIMzJhNXo5N1dTRnJuU21XTks1Z25YY0ZzTjhpSm5LRkFrS1NwYmhZUmxjWUhKUDJwZGFDTW1ldytjL2I2MzdkSWVzZ1ZTL1Q1cGZzQVZWVW9sVXFKRHNEZEk3bHl0S1MvbERUYmxVYTlkU0M4VFZRaVA1RDBIVW1QU2VxMURvVGtKWGtYRmdXQ1NreVM5QzVKSGU3VHZ0ZW56am9nS3ZMQ1hwKzFic2J5QzBtdldJZERkU1JaSUp6Q3d2NUVKWEdNcFBtUzVycVNRSGEwNytmdmRJT2tGZTV6dDd1MkFyd05NeERzYmJxa1V5VXRjSGREQVhJemxHdmNaNE4xR0F3Y3A3Q1F0R2ltc1ZqU1VXNjJVYlFPQks4OUpPaytTWGU2VTE3d0dBV0NKQndoNlRqMzZiSU9nMkN0ZFVWeXQ2VDdyY05nWHhRSXF1a1VTY3ZkckFPb3BwOUt1dGlWQ1R6QlJYUU1WcGM3UmJXVTRrQ0MzaWZwKzVMV3Uxbkp2MHA2d0RvVWtzTU1KSHZHU1BwemQ0cnFuWkxlSWFuTk9oUnlhN083VHRJdDZkL2R0Uk9la2s4UnA3QXdFTkVzNHlSSnAwdHF0QTREOUtQSHpVeHVZbmFTRHBaelIzK0s3dFRVVDl3UjNqTEtBNTVyZEFjNlA1YjBoRHZnYWJJT2hYZ29rREFObFhTK3BPY2wzZUVlOGdOQ00xM1MxVzQ3WG1JZEJwV2pRTUxUNVdZY1g1WTB6am9NVUFYTmttNlZkSStrZWRaaE1IQVVTRGhtU2ZxMk8xWDFMdXN3UUFLT2NhZTJIblMvaCtjb0VQL05jVWRtUDNjUC9RRlo5OVp0Zm9GMUdQU1BBdkZYOUVOMEwwZGp5TEZaN3JtU3FFaW1XWWZCdm5pUTBDK2Q3aHp3Q1pMZWJ4MEc4RVJVSkk5SytnOTNpbXNGTDhqeUE4K0IrR0c2cE11WWFRQURGaFhJV1R4TGNtQThCNUpkemU0MnhtN0tBNmpJRVc0MjhtMzNjd1FEbk1LeU05dGRLR3kxRGdJRTdEaFhJQjl4NzRKSGlwaUIyRGpLWFJ5a1BJREJteS9wdDI2eFVLU0lBa2xYcDV0eTM4c0NoMEJWalpOMHM2U0gzZXdlS2FCQTB0RW82VkszOWcvUGNnREptZTFLNUdZTzBwSkhnU1NuNEtiVzE3cTN0cDB0cWQ0NkZKQVRTeVd0Y1d2RjhjYk5oRkFneWZrSFNUK1VkS3FrMGRaaGdCd2E1bGFyWHNITVB4a1VTUFhWdTRVT3o3RU9BcUJzaEx2MmVDdTMvRllYQlZKZFhXN1poZlA1c3dXOHM4UmRoK1NacXlwaEoxY2RSVW5MWFhsd3ZoWHdWN3Q3L3VwYVhtUTFlQlRJNExXNTIzSXY1Q0k1RUl4VDNRSGZLT3NnSWFOQUJ1Y2dTWSs3dTYwQWhHV3FwQ3V0UTRTTUFobWNxOTJVR0VDWVRuQUxtUmF0ZzRTSUFxbGNxNlF6M1FLSUg3WU9BMkRRbGtsNlJ0SUZranFzdzRTRTVkd3JzOURkQ3NqRk55Q2Jka2c2VDlMbDFrR3FoZVhjL2ZCbFNkK2xQSUJNcTNlbnRHN21wcGdEbzBBT3JONXRUT2RiQndHUW1xWHVkbDlLWkQ4b2tQMXJkTGZvc2t3MGtEL3ozZlZPOUlNQzJiK3ozVHZLQWVUVCtlNTJYL1NCQXVsZmx5c1FBUG5WTE9sQlNYT3NnL2lJQXRuWFlXNlpnMGU0WUE3QTNici9nTHNEODkzV1lYeENnYnpkY1pKKzdaWTVhTEFPQThBYmRXNHh4a2ZkY3lPZ1FONW1nWHY1REhkZEFOaWZ5N2k0dmdjRnNzY3g3bjBCbEFlQWdiaVMwMWtVU09RUXlnTkFERiswRG1DTkFwSE9kYzk3QUVBbEZrbzZ5VHFFcGJ3WHlCeEpKMXFIQUJDczYvUDhvSEdlQzJRMlN4VUFHS1NpcEJzbExiWU9ZaUdQQlRMVUxZejRBQy9ZQjFBRlVZbmM1bVlqWTZ6RHBDbHZCZElvNlVkdWVRS2U4d0JRTGRHKzlCUkp2OGpUUytieVZpQjN1Rk5YQUpDRXFEeStuNWNiYy9KVUlCZTd1eVlBSUVsSHVJUFZnbldRcE9XbFFFNTN0K3NDUUJxaWc5Vy9zQTZSdER3VVNLZWtxNnhEQU1pZDA2MERKQzBQQlhLNnUwc0NBTkowckZzbUtiT3lYaUFmazNTYWRRZ0F1UlR0WCsrVWRGWldEMkt6WENDblNQcW1wR0hXUVFEa1ZyVC91VUxTcGRaQmtwRFZBdW5pdWdjQWp5ekw0bDJnV1N5UUprbmZ5c3Q5MkFDQ2NiT2t5ZFlocWltTEJYSTlMOEVINEtGbWQzQ2JtZlgzc2xZZ1orUjFVVE1BUVpqbDNtaVlDVmtxa0U3M3REa0ErT3dNOXlLNzRHV2xRQXB1U2VVbTZ5QUFNQUNMckFOVVExWUs1RzhremJVT0FRQURkRllXWmlGWktKQ2lwQXVzUXdCQUJjYTdWMHNFL1U2aUxCVEltWkltV29jQWdBcDFoSDVCUGZRQ21lcmVMZ2dBSVRwRjBsSFdJZUlLdlVDdTU0RkJBSUVMOWdhZ2tBdGtDUmZPQVdSQXUzdk5kbkJDTFpDbXJDNU9CaUNYbHJsbjJZSVNZb0cwdW5jTzUrYkY5UUF5cjE3UzNaSU9zdzVTaVJBTDVHWko4NnhEQUVDVlRaSDA3eUd0bFJWYWdTeHdId0RJb2s1M09pc0lJUlZJMU1wWFdvY0FnSVNkSDhwZFdTRVZ5RWtoWG1RQ2dBbzFoWEtIYVNnRlVpdHB1WFVJQUVqSmZPc0FBeEZLZ2J5SHU2NEE1TWdIckFNTVJDZ0ZFa1FiQTBDVkhCSENLZnNRQ3FSUjBvbldJUUFnUmRHKytVNUpZNnlEN0U4SUJYSithQS9YQUVBVi9JbWtyMXVIMkIvZkM2VFpMZGNPQUhsMG5LVHAxaUg2NDN1Qm5CN0svZEFBa0pCenJRUDB4K2NDcVdmMkFRQmE3T3RkcUQ0WHlGSko0NnhEQUlBeGJ3K21mUzZRWU5hREFZQ0VuZTdqKzlOOUxaQ0ZQbDg0QW9DVU5VazYxVHJFM253c2tQR1NycklPQVFDZVdlNGVNUFNHandYeUpVa2QxaUVBd0ROTnZoMWMrMVlnVGU1ZDV3Q0FmYzMxNmZTK2J3V3lsT2MrQUdDL3ZMa1c0bHVCbkdJZEFBQTh0OVM5NHNLY1R3VXlXOUlzNnhBQTRMbFdTZSt3RGlIUENzU2JhUmtBZU02TGcyMWZDbVNjcEU5YWh3Q0FRQnh0SFVBZUZjaDhTWFhXSVFBZ0VCKzBEaUNQQ3FUTE9nQUFCS1RWWFRjMlJZRUFRSmpNbjVtalFBQWdUSXNsRlMwRCtGQWdIU3hkQWdBVkcrZXVINXZ4b1VDT3N3NEFBSUV5M1gvNlVDQ0xyQU1BUUtBV1dKN0dzaTZRMlpMZWE1d0JBRUxWWWZrTW5YV0JuT2xCQmdBSTJlZXNCcmJjZVRlNk53OENBT0xyc3JvUnliSkE1ck4wT3dCVXhRS0xRUzBMWks3aDJBQ1FKYmtyRUpQL1lBRElvUGtXZDJOWkZVZ3JUNThEUU5VMFNwcVQ5cUJXQlhLYTBiZ0FrRldwdjFQSnFrQStiVFF1QUdUVkVrbk5hUTVvVVNEdHJIMEZBRlZYVEh1SmQ0c0NTZjA4SFFEa1JLcjdWNHNDNGZaZEFFaEdxdnRYWmlBQWtCMnpKUlhTR2l6dEFtbVVOQ3ZsTVFFZ0w1b2x0YVUxV05vRk1zdjZEVm9Ba0hFVDB4b283UUxoNlhNQVNGWm5XZ05SSUFDUUxZZWxOVkNhQlZJcmFYcUs0d0ZBSGsxSWE2QTBDNlNONng4QWtMaHhhUTJVZG9FQUFKSTFKcTJCMGl5UXNTbU9CUUI1TlRxdGdkSXNrRkVwamdVQWVaWEo1MEFtcFRnV0FPVFZ5TFN1ZzZSWklPTlRIQXNBOHFxUTFvb2ZhUlpJcXV2VUEwQ09wZkxLREFvRUFMS0hBZ0VBeEVLQkFBQmlvVUFBQUxGTVRtTVFDZ1FBc21lY3BQcWtCMG1yUUdyZHZja0FnT1FWSlIyUzlDQnBGY2hvRmxJRWdGUWwvbUtwdEFxa05hVnhBQUI3Skw3ZnBVQUFJSnNTdis2Y1ZvRndBUjBBMHBXWkFtbE1hUndBd0I2SlgzZE9xMEFTdjUwTUFQQTJUVWtQa09aeklBQ0E5R1JtQmdJQXlKaGE2d0JJUjhQMEtTbzBOa2pGR3UxWTlZeDZOMjIyam9TTXFUL2tZTldPSGEzU2pwM2F2V1dydHE5NjJqb1NFa2FCWk5Ed1k0N1VpQVVmMU5BNXN6UmsraFRWUk1YUmh4MnJmNmZ0cTlkbzg5My9xYzNmdVVjN1gxaVhlbGFFcWE2alhTMkxQbFRlMXVvN0o2bCtjdDlyOTcxUkpGc2VlRWgvK09lYnRPT1paMVBQaXVRVVNxVlNvZ04wRnlaRXZ5eVJkR3VpQTZIOHd6ejJ3ci9UME5udmpQWHY5enpXclhWZnZGU3YzWE4vMWJNaGZEWERtOVQyZDU5VzgzSEhxcUhyOElyLy9kMDkyOG9IS2h0dXVGMWI3bCtSU0VhOHpTV1N6cHRaZWpHeEFiZ0drZ0hSVEtQendlOXA4ajIzeGk2UFNPT3NtWnIwYi85WFk1Y3ZVMDNUc0twbVJOaUt6U00wNlh2ZktHOGJjY29qRXMyRVc1WWNwME4rK0UwZCt1UC9ONmh0Rlg2Z1FBTFdNSDJLRHY3MkRlWHlpRXFrR2dyMTllVlp6TFJuZnFaUnA1K29RcEVselBLc1VGK250bVdubGJlSHBubHpxdmE5dytiTlVlZkRkNnZqanErWFQ0RWhUQlJJb0VZdVhhVE9uLytnZkRvaENiVnRvOVIrOWNYbG84VmlhMHNpWThCdnRlUEc2TkNmL0p2R1gzWkJZdHRBeStLRm10SjlmL2xhSGNKRGdRUW1PaUljZi9tWE5QSG1mK3ozNG5nMVJVZUswMVkvcEFsWFhrU1I1RVREaktubGc0ZXBxMWFrY3BvcDJvNG4zMzJMbWovMllSVnF1YThuSlB4dEJhVDhnM2J2SFJvMmQzYXE0eFpITm12MG1aOVNzYTFWengxL1JxcGpJMTBOWGRQS000SzAxVSthcUlPL2VXMzU0dnFhWTQ4djN3b00vekVEQ1VTaFdDeWZMMDY3UE42cTVXTUxUY2RIOHRyTy9venArRTN6NTZyajFuODJ6WUNCbzBBQ01lYjhNelZpNGRHbUdRcDF0VHI0VzllVnI0OGdlK29uZDZoNTBZZXNZNVF6V0JjWkJvWUNDVUIwVkRabStlZXNZNVRWamh1ampqdXVzWTZCS3Rzenc3MG1sZXRxQXpIdXkzOWZ0VHNMa1J3S3hIT0Yram9kZE8ybFh0MU9HeFZheTVManJHT2dpbHBQUGNHcjV6S2k3Yjc5Nmt1ODJ1NnhMd3JFYzIzTFR2UHlQdm4ycTc1U2ZyZ000WXRtbGVNdi9ZSjFqSDAwSGpHamZQTUcvRVdCZUt4cC92czBadmt5NnhoOUtyYTJhT0l0VjVXUEZCR3VRbVBEbmxOWG5xNDhNUGFpczdseHcyTVVpTWNPdXY0eWI4NUo5MlhFaDQ5U3k1S1BXc2ZBSUl3NjlZU3FQbUZlYlRYRGhwWi9EdUFuQ3NSVHcrYk42WGVGVTUrTVhQcFgxaEV3Q0NPWExyS09jRUJEcGg2cXV2WngxakhRQndyRVUwa3RVVkp0VWRIeGhIcVk2anJheXd0b2htREl0TU9zSTZBUEZJaW5tdWEvenpyQ2dCU0t4ZkpkV1FqUDhLUCt6RHJDZ05WUG5tZ2RBWDJnUUR4VUdESWs5cExaRnJqSUdhYVEvdDdxSmxFZ1BxSkFQRlE3ZHJSMWhJbzBkRTJ6am9BWUdvNTRoM1dFQWFzYkU5YlBSRjVRSUI0S2JhbVFJVk03clNNZ2hpRWVQbC9VbitMb1Z1c0k2QU1GNHFHYTV1SFdFU3BTMXo2TzUwRUNFeDJrK1Byc1IxOTRhTlZQRklpSGZINzJvejhoN1l3UTNrRktZVWk5ZFFUMGdmZUJlS2ozRDY5cXczWC9ZaDJqSXFYdE82d2pvQUtsMTN1QzJzWjJQditTZFFUMGdRTHgwSzZYZjYvblR6dkhPZ1l5YlBlVzE0UGF4a0s3THBnWG5NTHlVR2tIUi9OSVZ1L20xNndqVktTMGM1ZDFCUFNCQXZIUTdxMDkxaEVBcjNCUTVTY0t4RU83WDZkQWdMZmF2VzI3ZFlRUUpYN25RVm9Gd3JXV0NuQzBCZXhsOTI3ckJDRnFUbnFBdEFwa2JFcmpBQUQyR0puMEFHa1ZDSStSQWtDNkVuL1loMU5ZQUpCTmlTOFBrVmFCREVscEhBQkFTdElxRU83MkFvQjBKYjRtRWp0MkFFQXNGQWdBSUJZS0JBQVFDd1VDQUlpRkFnRUF4RUtCQUFCaW9VQUFBTEZRSUFDQVdDZ1FBRUFzRkFnQUlCWUtCQUFRQ3dVQ0FJaUZBZ0VBeEVLQkFBQmlvVUFBQUxGUUlBQ0FXQ2dRQUVBc0ZBZ0FJQllLQkFBUUN3VUNBSWlGQWdFQXhGS2IwampkU1h4cHh4M1hhRWpuNUNTKzJ0VG03OStubDc5MG1YV01pblRjZHJXR1REbkVPZ1lHYU9kTEwrdDNIejdST3NhQUZWdEg2cEI3YjdlT2tZamVMVnYxelB2L0tvbXZmaXlKTDMycnRBcGtTeEpmMmpCOWlocTZEay9pcTAzMS9Pb0o2d2dWcTV0MGtCcG56YlNPZ1FFcWREOXBIYUVpaFdKTlpyZXYzazJiay9ycTE1TDY0amR3Q3N0RHRlUEdXRWVvV01QVVR1c0lxRUROMEtIV0VTcFNmeGl6V3g5UklCNnFxYSszamxDeG1xWmgxaEZRZ1pybTRkWVJLbEtvcjdPT2dENVFJQjZxYVdtMmpsQ1IybkZ0L0lBSHB0alNySnJoVGRZeEJxd1lXT0hsQlFYaW9icUR4bGxIcU1qUTJlKzBqb0FLRmVwcTFmaXVMdXNZQTFiWFB0NDZBdnBBZ1hpb3JtMlVhaG9ickdNTUdBVVNwcEQrM3VyYXd6cW95Z3NLeEVmRm9vYk9uVzJkWXNDR3padGpIUUV4REp2M3A5WVJCcXgrMGtUckNPZ0RCZUtwcHZsenJTTU1TTEY1aEliT21XVWRBekUwelpzVHpFeTMvckRzUGUrVkJSU0lwMW9XTDdTT01DRE5peGFvVUN4YXgwQU1OVTNETkh6QkI2MWpIRkMwZlRVY2ZwaDFEUFNCQXZGVS9lU09JR1loSTA5YWJCMEJnekR5cEwrMmpuQkF3NDg1a3R2RVBVV0JlS3o5bWt0VU8zNnNkWXgralY1Mm1vWUZkSzBHK3hweDdIeTFudklKNnhqOXFqdG92Q1pjOVdYckdPZ0hCZUt4SVZNTzBjRzNYMjBkbzA5UmNVeTQ3QUxyR0Jpc21ocTFYM3VwR28rWVlaMmtUeDIzWDFPZWpjTlBGSWpuaHMyYm81WWx4MW5IZUp0Q2ZaM2FyNzdZT2dhcXBGQXNhc0pWWC9IdVdsWTBNMktHNnpjS0pBQVRycnpJcS92Z3gxNTRkaVlYc2N5emFFYzlldGxwMWpIK0tKcDFqTC8waTlZeGNBQVVTQUJxMjBhcDQ0NnZlM0dFT1B5WUl6WG0zRE9zWXlBQjR5NCtUM1VkN2RZeHlqUGNqanV1VWJHMXhUb0tEb0FDQ1VSMGhIalE5Vjh6elZBN1puVDVCeHZaRkIyZ2pEcjlrOVl4TlBIR0s0TjZTajdQS0pDQWpEeHBzY1pmK2dXejhVZDk5cFR5ZzRQSXJsR25MalU5WGRwKzljWGVYZk5EL3lpUXdMU2QvUm1OK05CUnFZL2JlTVFNdFozNXFkVEhSYnFLclMzcWZQQjdHakwxMEhRSExoUTA4Y1lyTk9yMGNONlNDQW9rU0FmZGVJWGF6dm5iOGozeVNTclUxNm5wNkhubDE5VjJQbnczRDNQbFJGMUh1dzU3L0Q1TnZQa2ZOZXo5NzFXaE50a1hsOVpQN2xESE42L2pvZFFBVVNBQnFoM2RxdkgvNTN3ZC90eGpPdmhiMTFYOWFISFB1ZkFUZGZpemorcVEvN2hkTFovNFN4VUNmTWtWNHF0cGJORElwWXQwNkkvdTFMU25IMHBrNTk0d2ZZb21mZmNtVFh2bVoycFp0S0RxMzQva1VTQ0JhMTcwSVUxNTRzZmxjOGZWZUJYdWtHbWRWZjAraEMrYWtVeTg4UXFOcjlLRG8zWHQ0M1RROVplVnQ3TVJDNCt1eW5mQ0JnV1NBVytkTVl6NXdsbXgzZzVZUDdsRFk1Y3ZVK2RQNzByLy9EZUMwTGJzdFBKT2Y4eTVaOFM2M2JkaHh0UTlNNDVuSC9WNitSUU1YS0ZVS2lVNlFIZGhRdlRMRWttM1Z2dTdwM1Qva0FmYStsRHE3ZFhXQng3UzlsVlBxK2VYVDZpMFk2ZTJyZnlOU2ozYnRMdG5tK283SjVVTG83WnRWUGswd3JDNXM3MjQveDloMmJGbXJiYXVlRVRibjN4S3V6WnMxTFpmcjlLMjdpZkwyMVowRUZOZUhxVllMUDlhM3M1NGIweWZlamR0MWhNdDA1TDQ2a3NrblRlejlHSVMzMTJXN05VeG1JaG1KRTN6NXdheG1pL0NGUlVGNjFUbEc2ZXdBQUN4VUNBQWdGZ29FQUJBTEJRSUFDQVdDZ1FBRUFzRkFnQ0loUUlCQU1SQ2dRQUFZcUZBQUFDeFVDQUFnRmdvRUFCQUxCUUlBQ0FXQ2dRQUVBc0ZBZ0NJaFFJQkFNUkNnUUFBWXFGQUFBQ3hVQ0FBZ0Znb0VBQkFMQlFJQUNBV0NnUUFFQXNGQWdDSWhRSUJBTVJDZ1FBQVlxRkFBQUN4VUNBQWdGZ29FQUJBTEJRSUFDQVdDZ1FBRUFzRkFnQ0lKZWdDMmQyenpUb0NBT1JXMkFXeVphdDFCQUFZbE4xYlhyZU9FRnZRQmRLN1lhTjFCQUFZbE40TnIxcEhpQzNvQXRteFpxMTFCQUFZbEIxcm5yT09FRnZnQlJMdUh6d0FSSGF1ZmNFNlFteEJGOGkySjUreWpnQUFnOUt6OGpmV0VXSUx1MEIrK1lSS3ZiM1dNUUFndG1nL0ZxcWdDNlIzMDJadFp4WUNJRkM3ZTdhcDU3RnU2eGl4QlYwZ2tkZnUreS9yQ0FBUXk1YjdWd1I5RmlYNEFubjFodHVsM3QzV01RQ2dZdVg5VjhDQ0w1QnRUejZsYmF0V1c4Y0FnSXIwUE5hdFRkKzVKOGtodGlUNTVVcXhRRFlsK2VVaFg0UUNrRSt2M25KbjBrTWtmbTRzK0JtSVhKTURRREI2ZTdYeHR1OGtQVXBQMGdPa1ZTRHJrL3p5clQ5OU5NbXZCNENxZXYwWEs3VnIvUitTSGliUk16OUtzVUEySlBubDBRd2toYjhNQUtpS3JUOTVPSTFoRXQzdktpc3prTkt1WGZyOTVkY21PUVFBVk0zVy8vcFpHc09zUzNxQU5DK2lKM28rYnYzbDEyckg2dDhsT1FRQUROcnVMVnUxNWY2ZnBqSFVtcVFIU1BNaSt2TkpmbmxweDA2dCtZc1R0UDJwWjVJY0JnQmkyN251bGZKK2F2ZHJpZDlodXlicE16OUt1VUFTMzdOdi8rMHplbnJ1UjdScjNTdEpEd1VBRmRuZHMwMi9PL2I0dEs1LzNKL0dJR2tXU09MbjR5SzcxdjlCYTQ4L0kramxBUUJrejR0bkxWZFBlcytzUFpiR0lHa1dTR3B2ZjlweS93cTljdEVWYVEwSEFQdTE4Vi92MG9ici9pWE5JVE0zQTBuMEdzamVYcjdvOGpRZTFBR0EvWW9PYUo4LythdzBoOXdrYVZVYUE2VlpJRStuT0ZiWmM1LzhyTGF2U24xWUFDamJ0dkkzZXZham55cGYvMGhSYW1kNzBpeVEzNlk0VmxtcHQxZnJ2M1pOMnNNQ1FQbDY3SnBqankrL3R5aGxxUjAxcDMwTjVFY3BqbGUyNFliYnRmYmpuOWJyanp5ZTl0QUFjbXI3VTgvb2R3dFAxTTRYVXJsM2FHOHIwaG9vN2NVVXowMTVQS2xVS2wvQVd2MC9GdWk1a3o5WGZvZ0hBSkpRNnUzVnl4ZDhUYXVtenRYclAvdUZWWXhVTHFCSENxVlNLZEVCdWdzVDl2bWZKSFVsT3VoK0RKbDZxQTcrOWcxcW1EN0ZLZ0tBRElwbUc4OTk4clBsaSthR05ra2FJMm5IRy8vRHpOS0xpUTFtc1p6N2RRWmovdEgyVlU5cjlidVBLUjhscEh4aEMwQkcvZUdhYitpcEdlKzNMby9JTFc4dGo2Ulp6RUFhSlQwcnFTM1JnUWVnZm5LSEp0OXphM2xXQWdDVmV2MlJ4L1hDWjg3ejVaMUV2WklPMjNzTnJLek5RSG9rWFc0dzdqNTJyRm1ycDQ5Y2xQUnJKUUZrMEN1WC9GUDUycW9uNVNFMyswaDhBY1czc3BpQlJKcmNnNFhOaVE1ZWdZYXV3elg2akpQVnZPaERLcmEyV01jQjRLSGRQZHUwK2E1N3k2ZXN0ajd3a0hXY3Q0cG1Iek1sUGJuM1AwaHlCbUpWSUpFTEpTMVBkUEFZQ3ZWMUdySGdnMnBadWtqRGp6bFNOWTBOMXBFQUdOcTlaYXUycm5pa2ZEZm41dS9jWS9GY3gwRGNLZWxqZmYyRHJCWkl2YVJySloyVWFJQkJxQmsyVkExL01rTzFiYTJxSGR1bTJyWlJLclkwcTJaRTA1NS8zalJVeGVIRHJXTUNHSVJkNjE3UkcvdkIwcmJ0NnQyd1ViMGJOMm5YeTcvWHRpZWYwcmJ1ZlE3cWZmT2ZraGIzOXdiQ3JCYklHKzZWZEZTaUlRQWdtMVpMbXJHL082K3lkaEY5YjU5eDUrOEFBSlU1SzgzYmR2Zm1RNEZFRFhxZmRRZ0FDTXgxa3U2MkRPQkRnVVMrWVIwQUFBS3l6czArVFBsU0lOOU5jd2xpQUFqY2JlNlpPbE8rRkVpUHV3WE43RndlQUFUa0p1c0E4cWhBSW85SWVyZWs3MWtIQVFCUFBTcnB6eVN0dEE0aXp3cEU3Zzlsb2FTdldBY0JBTS9jSm1tT3BKOVlCM21EYndYeWhpLzRzbDRXQUhqZ0xra24rL2JJZzY4RkV2bThwSE9zUXdDQXNSc2tmZFRIYThRK0YwamtxNjUxZDFzSEFRQURsMGo2bEc4emp6ZjRYaUJ5ZHh0NGNjY0JBS1FrS296L0plazg2eUQ3RTBLQnlKM09lc3c2QkFDazVBcEovMlFkNGtCQ0taQ05rdDdMaFhVQU9YQ1h1NUhJZTZFVWlOd0ZwR2dtTWtYUzMwdGE0ZXQ1UVFDbzBLOGsvVy8zTE54SEpHMjNEalFRUGl6blBoalRKVjBsYVg2U2d3QkFRcDZVZEpvN0lFNUUxcGR6SDR6b0QvOERrcjVrSFFRQUtyQk8wdkh1WFI2SmxVZlNRaStRTjF6b3JwSGNaUjBFQUE3Z0lVbi8wejFaSHJTc0ZJamNYOHBISkIwczZRSkphNndEQVlDejN0MEU5RTUzc0x2YU9sQTFoSDRONUVEbXVETDVjOHNRQUhKcGl6c3JjcHZsaTUrU3ZBWlNtOWczK3lHYWxSd2pxVVBTWEVrTEpNMlcxR2tkREVBbXJYUDduZnRkY1d5d0RwU2tyTTlBOW1lOHBKR1Nvb0FOa3BvbERiTU81VVFGZDdaMWlBcGRKT2tGNnhBWXNFWkpWMXFIcU1BTGJodnp4UTVKdjNmdk10cm9mcjllMHV2V3dmYVc1QXdrOFFKQjVib0xFK2I2dEdUekFNMGNlOEhuVjQ3OTB1ZXRjK0FBM0VGZHM5dnhoV0psdEkwbHVUTkU1YkowRVIwQWtDSUtCQUFRQ3dVQ0FJaUZBZ0VBeEVLQkFBQmlvVUFBQUxGUUlBQ0FXQ2dRQUVBc0ZBZ0FJQllLQkFBUUN3VUNBSWlGQWdFQXhFS0JBQUJpb1VBQUFMRlFJQUNBV0NnUUFFQXNGQWdBSUJZS0JBQVFDd1VDQUlpRkFnRUF4RUtCQUFCaW9VQlFMVU90QXlEVGl0WUJzSzlDcVZTeXpvQzlkQmNtekpYMEUrc2NGZm9iU1RjbVBjak0wb3RKRDVGNTNZVUowUy9Oa2paYVo2bkFHa21IcERFUTI5akExVm9IUUo4SzFnRmkrTEtrdjkzUFA2K1RORnBTdmZ0OTlGUDZvS1JlU2ZkSitwNms3U25temJ0NjZ3QVZPa2pTencvdy80bjJaeU1rRFhjL1E5Ri80NDhrclpKMGk2U1ZLV1hORFFyRVR5SCt2VXh3bjRHS2pvQVBkNzgvMWYyUWYxTFNJd25sdzlzTnN3NVFvZWlnWTFhTWYyK2grL1ZzU1dzbFhTN3BPa2s5VmM2WFMxd0Q4ZFBqMWdFTVRKWDBzS1E3SkkyekRwTURJYzV5QjZ0RDBwV1MvbHZTWXVzd1dVQ0IrQ25QZnkrTFhaRjBXUWZKdUR4ZmxPNXdCeW9YV3djSlhaNTNWRDdiWmgzQVdJY3JrVG5XUVRKc2szVUFENXdyNmFQV0lVSkdnZmhwaDNVQUR6UksrcTZrZHVzZ0diWEZPb0FuenJBT0VESUt4RSs3dUdPa3JNMWRWQjlqSFNTRGV0akd5bzZVZEdsT3J3a05HZ1hpcng5WUIvREVCRWxMckVOa0ZOdllIbWRMK212ckVDR2lRUHoxZ0hVQWo4eTJEcEJSYkdOdk90MDZRSWdvRUg4OXdMM3FmelRGT2tCR3NZMjlhYTZrVnVzUW9hRkEvTFZGMHQzV0lUelJZUjBnbzlqRzNsUjBKWUlLVUNCK3U4azZnQ2RhYy83Y1FwTFl4dDQwMVRwQWFDZ1F2LzNBTGZHUmQxRjVORm1IeUNpMnNUZHhDcXRDRklqZmVpVjlRdEk2NnlER1N1N1BBdFhITnZZbW5yK3FFQVhpdjhjbGZTem5POUNOUFBpV0tMYXhQWjYwRGhBYUNpUU1LOXdxb25uMXZIV0FITWo3TmhaNXlEcEFhQ2lRY0p6bmZzano2Q25yQURseG5sdnlQSTlXNXZpL1BUWUtKQnk5YnVHMzFkWkJET1J4ZVhzTDBUWjJqWFVJSXpkWUJ3Z1JCUktXOVpLT2xiVFpPa2pLZm1RZElFZXVrL1NDZFlpVXZaRGo0aHdVQ2lROHE5M2liM214eGkzdGpuUnNrUFRlbk4zYWV3NTNZTVZEZ1lUcGN2Y2U4YXpya2ZSeDdnNUszVnBYSW5uWXhuNGw2VGJyRUtHaVFNSVU3VmlQbHZSK1NWK1Y5RXZyUUZVV0hRMStVOUo3ZUVlNm1RMFozOGJrYnM0NDFUcEV5Q2lRc0QzZ3B0L3ZsRFF6STh0enI1VDBidmRxMnllc3crQnQyOWpucmNOVVNYUUFkb0ZidW9RRGxFR2dRTEpqcGJ2QS9vbEFiMGQ4VmRMSnJnaDUwWkdmTHBjMFE5SWxnVzVqTzl6ZFZ0TWtYV1FkSmdzS3BWTEpPZ1AyMGwyWVVJMnZtZXhXRjUzdTF2anBsTlFzYVZZMXZyd0tOa3Y2cmJ1ekxEb0svTHFrbHc3MEw4MHN2WmhPdWd5cjB2YWxQcmF4R1c3N2FxaldBSU1VN2R4KzdjcnVKbmRONTREdmdtY2JHN2ovSHdBQS8vK3pjKzk3bFY2UFZnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBidXR0b25fMSA9IHJlcXVpcmUoXCIuL2J1dHRvblwiKTtcbmNvbnN0IHBpY3R1cmVfMSA9IHJlcXVpcmUoXCIuL3BpY3R1cmVcIik7XG5jb25zdCBiYWRnZV8xID0gcmVxdWlyZShcIi4vYmFkZ2VcIik7XG5jb25zdCBzdGFydGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3RhcnRlclwiKSk7XG5jb25zdCBzbGlkZW91dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJzbGlkZW91dFwiKSk7XG5sZXQgVHdpdHRlckFkYXB0ZXIgPSAvKiogQGNsYXNzICovICgoKSA9PiB7XG4gICAgbGV0IFR3aXR0ZXJBZGFwdGVyID0gY2xhc3MgVHdpdHRlckFkYXB0ZXIge1xuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XG4gICAgICAgICAgICB0aGlzLndpZGdldHMgPSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uOiB0aGlzLmFkYXB0ZXIuY3JlYXRlV2lkZ2V0RmFjdG9yeShidXR0b25fMS5CdXR0b24pLFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KHBpY3R1cmVfMS5QaWN0dXJlKSxcbiAgICAgICAgICAgICAgICBiYWRnZTogdGhpcy5hZGFwdGVyLmNyZWF0ZVdpZGdldEZhY3RvcnkoYmFkZ2VfMS5CYWRnZSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBbe1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl1cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFNlbGVjdG9yOiBcImFydGljbGUuY3NzLTFkYmpjNG5cIixcbiAgICAgICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUV0VFVF9TT1VUSDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPWdyb3VwXSA+ICo6bGFzdC1jaGlsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgVFdFRVRfQ09NQk86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJcIiAvL1RvRG9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBQSUNUVVJFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2xhbmddID4gKjpsYXN0LWNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBUV0VFVF9BVkFUQVJfQkFER0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci0xOGt4eHpoLnItMXdiaDVhMi5yLTEzcXoxdXUgPiAqOmxhc3QtY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRXRUVUX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMTh1Mzdpei5yLTF3Ymg1YTIuci0xZjZyN3ZkID4gKjpmaXJzdC1jaGlsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogJ2JlZ2luJyAvLyBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBUV0VFVF9TVEFSVEVSOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMTh1Mzdpei5yLTFoMHo1bWQuci0xam9lYTByID4gKjpmaXJzdC1jaGlsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogJ2JlZ2luJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ3R3ZWV0JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnVFdFRVRfRVZFTlQnLFxuICAgICAgICAgICAgICAgICAgICAvLyBUb0RvOiBUaGlzIHNlbGVjdG9ycyBhcmUgdW5zdGFibGUsIGJlY2F1c2UgVHdpdHRlciBoYXMgY2hhbmdlZCBjbGFzcyBuYW1lcyB0byBhdXRvLWdlbmVyYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6ICh0d2VldE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpbmcgb2YgcmlnaHQgbWFyZ2luIHRvIGxhc3QgdHdpdHRlcidzIG5hdGl2ZSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IChfYSA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTFkYmpjNG4uci0xbWx3bHFlLnItMTh1Mzdpei5yLTE4a3h4emguci0xaDB6NW1kJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZSgnci0xOGt4eHpoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZSgnci0xbWx3bHFlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0LmFkZCgnci0xaXVzdnI0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0LmFkZCgnci0xNnkydW94Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2VldE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignYSB0aW1lJykucGFyZW50Tm9kZS5ocmVmLnNwbGl0KCcvJykucG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogKF9iID0gdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2RpdltsYW5nXScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvckZ1bGxuYW1lOiAoX2MgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignYTpudGgtY2hpbGQoMSkgZGl2IHNwYW4gc3BhbicpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvclVzZXJuYW1lOiAoX2QgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy05MDFvYW8uY3NzLWJmYTZrei5yLTFyZTdlemguci0xOHUzN2l6LnItMXFkMHhoYS5yLWEwMjNlNi5yLTE2ZGJhNDEuci1hZDl6MHguci1iY3FlZW8uci1xdnV0YzAgPiBzcGFuLmNzcy05MDFvYW8uY3NzLTE2bXk0MDYuci0xcWQweGhhLnItYWQ5ejB4LnItYmNxZWVvLnItcXZ1dGMwJykpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5pbm5lclRleHQucmVwbGFjZSgnQCcsICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JJbWc6IChfZSA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTFkYmpjNG4uci0xYXdvend5LnItMThreHh6aC5yLTVmMnI1byBpbWcnKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzbGlkZW91dCA9IG5ldyBzbGlkZW91dF8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYW5lbCc6IHR3ZWV0Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWVudSc6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYWRkaW5nJzogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b2xlcmFuY2UnOiA3MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2lkZSc6ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVvdXQub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVyLm9wZW5TdGFydGVyKGN0eCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVvdXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0eDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl1cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLWt1MXdpMi5yLTFqM3Q2N2Euci1tNjExYnlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9GSUxFX0FWQVRBUl9CQURHRToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLW9iZDBxdC5yLTE4dTM3aXouci0xdzZlNnJqLnItMXd0ajBlcCA+ICo6bGFzdC1jaGlsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogJ2VuZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9GSUxFX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMTVkMTY0ci5yLTFnOTRxbTAgZGl2LmNzcy05MDFvYW8uci1oa3lyYWIuci0xcWQweGhhLnItMWI2eWQxdy5yLTF2cjI5dDQuci1hZDl6MHguci1iY3FlZW8uci1xdnV0YzAgPiAqOmxhc3QtY2hpbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IFwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9GSUxFX0JVVFRPTl9HUk9VUDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLW9iZDBxdC5yLTE4dTM3aXouci0xdzZlNnJqLnItMWgwejVtZC5yLWRubXJ6cyA+ICo6Zmlyc3QtY2hpbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IFwiYmVnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ3Byb2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0RXZlbnQ6ICdQUk9GSUxFX0VWRU5UJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodGl0bGVJbmZvTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpbmcgb2YgbGVmdCBtYXJnaW4gdG8gdXNlcm5hbWUgaW4gdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMTVkMTY0ci5yLTFnOTRxbTAgPiBkaXYuY3NzLTFkYmpjNG4uci0xd2JoNWEyLnItZG5tcnpzLnItMW55NGwzbCcpLnN0eWxlLm1hcmdpbiA9ICcwcHggMHB4IDBweCAzMnB4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yRnVsbG5hbWU6IChfYSA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMWF3b3p3eS5yLTE4dTM3aXouci1kbm1yenMgPiBkaXYgPiBzcGFuOm50aC1jaGlsZCgxKSA+IHNwYW4nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JVc2VybmFtZTogKF9iID0gdGl0bGVJbmZvTm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTkwMW9hby5jc3MtYmZhNmt6LnItMXJlN2V6aC5yLTE4dTM3aXouci0xcWQweGhhLnItYTAyM2U2LnItMTZkYmE0MS5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMCBzcGFuJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbm5lclRleHQucmVwbGFjZSgnQCcsICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JJbWc6IChfYyA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignYSA+IGRpdi5jc3MtMWRiamM0bi5yLTFhZGczbGwuci0xdWRoMDh4ID4gZGl2LnItMXAwZHRhaS5yLTFwaTJ0c3guci0xZDJmNDkwLnItdThzMWQuci1pcG01YWYuci0xM3F6MXV1ID4gZGl2ID4gaW1nJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcIm1haW5bcm9sZT1tYWluXVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItYXFmYm80LnItMTRsdzlvdC5yLW15NWVwNi5yLXJ1bGw4ci5yLXFrbG1xaS5yLWd0ZHFpei5yLWlwbTVhZi5yLTFnNDBiOHFcIixcbiAgICAgICAgICAgICAgICAgICAgaW5zUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIRUFESU5HX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaDJbcm9sZT1oZWFkaW5nXSBkaXYuci0xOHUzN2l6ICA+IGRpdi5jc3MtMWRiamM0bi5yLTFhd296d3kuci14b2R1dTUuci0xOHUzN2l6LnItZG5tcnpzID4gKjpsYXN0LWNoaWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAnaGVhZGluZycsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ0hFQURJTkdfRVZFTlQnLFxuICAgICAgICAgICAgICAgICAgICAvLyBUb0RvOiBUaGlzIHNlbGVjdG9ycyBhcmUgdW5zdGFibGUsIGJlY2F1c2UgVHdpdHRlciBoYXMgY2hhbmdlZCBjbGFzcyBuYW1lcyB0byBhdXRvLWdlbmVyYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEJ1aWxkZXI6ICh0aXRsZUluZm9Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVGdWxsbmFtZTogKF9hID0gdGl0bGVJbmZvTm9kZS5xdWVyeVNlbGVjdG9yKCdzcGFuLmNzcy05MDFvYW8uY3NzLTE2bXk0MDYuci0xcWQweGhhLnItYWQ5ejB4LnItYmNxZWVvLnItcXZ1dGMwID4gc3BhbiA+IHNwYW4nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dC5yZXBsYWNlKCdAJywgJycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl1cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLTFtaTBxN28uci0xajN0NjdhLnItbTYxMWJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgU1VTUEVOREVEX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy05MDFvYW8uY3NzLWJmYTZrei5yLWhreXJhYi5yLTFxZDB4aGEuci0xYjZ5ZDF3LnItdncyYzBiLnItYWQ5ejB4LnItYmNxZWVvLnItM3MydTJxLnItcXZ1dGMwID4gKjpsYXN0LWNoaWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAnc3VzcGVuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnU1VTUEVOREVEX0VWRU5UJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodGl0bGVJbmZvTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlVXNlcm5hbWU6IChfYSA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy05MDFvYW8uY3NzLWJmYTZrei5yLWhreXJhYi5yLTFxZDB4aGEuci0xYjZ5ZDF3LnItdncyYzBiLnItYWQ5ejB4LnItYmNxZWVvLnItM3MydTJxLnItcXZ1dGMwID4gc3BhbiA+IHNwYW4nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hdHRhY2hDb25maWcodGhpcy5jb25maWcpO1xuICAgICAgICAgICAgdGhpcy5zdGFydGVyID0gbmV3IHN0YXJ0ZXJfMS5kZWZhdWx0KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaEZlYXR1cmUodGhpcy5zdGFydGVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUb0RvOiByZWZhY3RvciBpdFxuICAgICAgICBhdHRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlci5hdHRhY2hGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcbiAgICAgICAgZGV0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZXIuZGV0YWNoRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXRhY2hGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0KFwiZHluYW1pYy1hZGFwdGVyLmRhcHBsZXQtYmFzZS5ldGhcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIucHJvdG90eXBlLCBcImFkYXB0ZXJcIiwgdm9pZCAwKTtcbiAgICBUd2l0dGVyQWRhcHRlciA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBJbmplY3RhYmxlLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG4gICAgXSwgVHdpdHRlckFkYXB0ZXIpO1xuICAgIHJldHVybiBUd2l0dGVyQWRhcHRlcjtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBUd2l0dGVyQWRhcHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QaWN0dXJlID0gdm9pZCAwO1xuY2xhc3MgUGljdHVyZSB7XG4gICAgbW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbClcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgeyBpbWcsIGRpc2FibGVkLCBoaWRkZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxTdHJpbmcgPSBgPGltZyBzcmM9XCIke2ltZ31cIiAvPmA7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuZXhlYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmJvdHRvbSA9ICcxNXB4JztcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5yaWdodCA9ICcxNXB4JztcbiAgICAgICAgdGhpcy5lbC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuaW5pdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICB9XG59XG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkYXBwbGV0X3BuZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2RhcHBsZXQucG5nXCIpKTtcbmNsYXNzIFN0YXJ0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gYWRhcHRlcjtcbiAgICAgICAgdGhpcy53aWRnZXRzID0gW107XG4gICAgICAgIHRoaXMuX2J1dHRvbklkID0gMDtcbiAgICAgICAgdGhpcy5fb3ZlcmxheSA9IENvcmUub3ZlcmxheSh7IHVybDogY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoJ3N0YXJ0ZXIuaHRtbCcpLCB0aXRsZTogJ0lkZW50aXR5IE1hbmFnZW1lbnQnIH0pO1xuICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gdGhpcy5hZGFwdGVyLndpZGdldHM7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgVFdFRVRfU1RBUlRFUjogW1xuICAgICAgICAgICAgICAgIC8vIFRvRG86IHRoaW5rIGhvdyB0byBpbnNlcnQgYnV0dG9ucyB3aXRob3V0IFwidmlydHVhbCBmZWF0dXJlXCJcbiAgICAgICAgICAgICAgICBidXR0b24oe1xuICAgICAgICAgICAgICAgICAgICBcIkRFRkFVTFRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBkYXBwbGV0X3BuZ18xLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGVjOiAoY3R4KSA9PiB0aGlzLm9wZW5TdGFydGVyKGN0eClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxuICAgIG9wZW5TdGFydGVyKGN0eCkge1xuICAgICAgICB0aGlzLl9vdmVybGF5LnNlbmRBbmRMaXN0ZW4oJ2N0eCcsIHsgY3R4LCBidXR0b25zOiB0aGlzLndpZGdldHMgfSwge1xuICAgICAgICAgICAgJ2J1dHRvbl9jbGlja2VkJzogKG9wLCB7IHR5cGUsIG1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy53aWRnZXRzLmZpbmQoYiA9PiBiLmlkID09PSBpZCk7XG4gICAgICAgICAgICAgICAgKF9hID0gYnV0dG9uID09PSBudWxsIHx8IGJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uLmV4ZWMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGJ1dHRvbiwgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoRmVhdHVyZSh0aGlzKTtcbiAgICB9XG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRldGFjaEZlYXR1cmUodGhpcyk7XG4gICAgfVxuICAgIGF0dGFjaEZlYXR1cmUoZmVhdHVyZSkge1xuICAgICAgICB0aGlzLndpZGdldHMucHVzaCguLi4oZmVhdHVyZS5jb25maWcuVFdFRVRfU1RBUlRFUiB8fCBbXSkubWFwKGMgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYyksIHsgZmVhdHVyZSwgaWQ6ICsrdGhpcy5fYnV0dG9uSWQgfSkpKSk7XG4gICAgICAgIGRlbGV0ZSBmZWF0dXJlLmNvbmZpZy5UV0VFVF9TVEFSVEVSO1xuICAgIH1cbiAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy53aWRnZXRzID0gdGhpcy53aWRnZXRzLmZpbHRlcih3ID0+IHcuZmVhdHVyZSAhPT0gZmVhdHVyZSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhcnRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=