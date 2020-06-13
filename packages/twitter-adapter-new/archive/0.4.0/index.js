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
                case 'POST_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '15px';
                    imgTag.style.height = '15px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '2px';
                    imgTag.style[horizontal] = '3px';
                    break;
                case 'POST_AVATAR_BADGE':
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
        if (this.insPointName === 'POST_SOUTH') {
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
        else if (this.insPointName === 'POST_STARTER') {
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
        if (this.insPointName === 'POST_SOUTH') {
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
                        POST_SOUTH: {
                            selector: "div[role=group] > *:last-child"
                        },
                        POST_COMBO: {
                            selector: "" //ToDo
                        },
                        POST_PICTURE: {
                            selector: "div[lang] > *:last-child"
                        },
                        POST_AVATAR_BADGE: {
                            selector: "div.css-1dbjc4n.r-18kxxzh.r-1wbh5a2.r-13qz1uu > *:last-child"
                        },
                        POST_USERNAME_BADGE: {
                            selector: "div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-1f6r7vd > *:first-child",
                            insert: 'begin' // end
                        },
                        POST_STARTER: {
                            selector: "div.css-1dbjc4n.r-18u37iz.r-1h0z5md.r-1joea0r > *:first-child",
                            insert: 'begin'
                        }
                    },
                    contextType: 'post',
                    contextEvent: 'POST_EVENT',
                    events: {
                        like: (node, ctx, emit) => {
                            const likeBtn = node.querySelector('div.css-1dbjc4n.r-18u37iz.r-1wtj0ep.r-156q2ks.r-1mdbhws div[role=button][data-testid*="like"]');
                            likeBtn.addEventListener('click', () => {
                                if (likeBtn.getAttribute('data-testid') === 'like')
                                    emit(ctx);
                            });
                        },
                        unlike: (node, ctx, emit) => {
                            const likeBtn = node.querySelector('div.css-1dbjc4n.r-18u37iz.r-1wtj0ep.r-156q2ks.r-1mdbhws div[role=button][data-testid*="like"]');
                            likeBtn.addEventListener('click', () => {
                                if (likeBtn.getAttribute('data-testid') === 'unlike')
                                    emit(ctx);
                            });
                        },
                        starter: (node, ctx, emit) => {
                            node.parentNode.style.overflow = 'hidden';
                            const slideout = new slideout_1.default({
                                'panel': node,
                                'menu': document.createElement('div'),
                                'padding': 150,
                                'tolerance': 70,
                                'side': 'right'
                            });
                            slideout.on('open', () => {
                                emit(ctx);
                                slideout.close();
                            });
                        }
                    },
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
                        return ({
                            id: tweetNode.querySelector('a time').parentNode.href.split('/').pop(),
                            text: (_b = tweetNode.querySelector('div[lang]')) === null || _b === void 0 ? void 0 : _b.innerText,
                            authorFullname: (_c = tweetNode.querySelector('a:nth-child(1) div span span')) === null || _c === void 0 ? void 0 : _c.innerText,
                            authorUsername: (_d = tweetNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 > span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0')) === null || _d === void 0 ? void 0 : _d.innerText.replace('@', ''),
                            authorImg: (_e = tweetNode.querySelector('div.css-1dbjc4n.r-1awozwy.r-18kxxzh.r-5f2r5o img')) === null || _e === void 0 ? void 0 : _e.getAttribute('src')
                        });
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
            events: {
                starter: (ctx) => this.openStarter(ctx)
            },
            POST_STARTER: [
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
        this.widgets.push(...(feature.config.POST_STARTER || []).map(c => (Object.assign(Object.assign({}, c), { feature, id: ++this._buttonId }))));
        delete feature.config.POST_STARTER;
    }
    detachFeature(feature) {
        this.widgets = this.widgets.filter(w => w.feature !== feature);
    }
}
exports.default = Starter;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVjb3VwbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VtaXR0ZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpZGVvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhZGdlLnRzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhcHBsZXQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6VmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUdhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0NBQXdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrS0FBK0s7QUFDN007QUFDQSxnSUFBZ0ksdUJBQXVCO0FBQ3ZKO0FBQ0EsK0RBQStELElBQUk7QUFDbkU7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0EsNENBQTRDLDhCQUE4QixRQUFRLHVFQUF1RSxNQUFNO0FBQy9KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsSUFBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RDtBQUNBLHNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQWUsK0VBQWdCLGdzVzs7Ozs7Ozs7Ozs7O0FDQWxCO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMsaUNBQVU7QUFDbkMsa0JBQWtCLG1CQUFPLENBQUMsbUNBQVc7QUFDckMsZ0JBQWdCLG1CQUFPLENBQUMsK0JBQVM7QUFDakMsa0NBQWtDLG1CQUFPLENBQUMsbUNBQVc7QUFDckQsbUNBQW1DLG1CQUFPLENBQUMsa0RBQVU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hNYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QjtBQUN2QztBQUNBLDRDQUE0QyxJQUFJO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcENhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxzQ0FBc0MsbUJBQU8sQ0FBQyx3Q0FBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDZFQUE2RTtBQUNuSCxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyw2QkFBNkI7QUFDekUsb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5R0FBeUcsT0FBTyxnQ0FBZ0M7QUFDaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgIH07XG59KCkpO1xuXG5mdW5jdGlvbiBkZWNvdXBsZShub2RlLCBldmVudCwgZm4pIHtcbiAgdmFyIGV2ZSxcbiAgICAgIHRyYWNraW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gY2FwdHVyZUV2ZW50KGUpIHtcbiAgICBldmUgPSBlO1xuICAgIHRyYWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFjaygpIHtcbiAgICBpZiAoIXRyYWNraW5nKSB7XG4gICAgICByZXF1ZXN0QW5pbUZyYW1lKHVwZGF0ZSk7XG4gICAgICB0cmFja2luZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZuLmNhbGwobm9kZSwgZXZlKTtcbiAgICB0cmFja2luZyA9IGZhbHNlO1xuICB9XG5cbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYXB0dXJlRXZlbnQsIGZhbHNlKTtcblxuICByZXR1cm4gY2FwdHVyZUV2ZW50O1xufVxuXG4vKipcbiAqIEV4cG9zZSBkZWNvdXBsZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGRlY291cGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICogQGNsYXNzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICogdmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG4gKlxuICogdmFyIGVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICovXG5cbnZhciBFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRW1pdHRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW1pdHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gXCJmb29cIiBldmVudC5cbiAgICogZW1pdHRlci5vbignZm9vJywgbGlzdGVuZXIpO1xuICAgKi9cblxuICBFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIC8vIFVzZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uIG9yIGNyZWF0ZSBpdC5cbiAgICB0aGlzLl9ldmVudENvbGxlY3Rpb24gPSB0aGlzLl9ldmVudENvbGxlY3Rpb24gfHwge307XG5cbiAgICAvLyBVc2UgdGhlIGN1cnJlbnQgY29sbGVjdGlvbiBvZiBhbiBldmVudCBvciBjcmVhdGUgaXQuXG4gICAgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0gfHwgW107XG5cbiAgICAvLyBBcHBlbmRzIHRoZSBsaXN0ZW5lciBpbnRvIHRoZSBjb2xsZWN0aW9uIG9mIHRoZSBnaXZlbiBldmVudFxuICAgIHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0ucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50IHRoYXQgd2lsbCBiZSBjYWxsZWQgb25seSBvbmNlLlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBXaWxsIGFkZCBhbiBldmVudCBoYW5kbGVyIHRvIFwiZm9vXCIgZXZlbnQgb25jZS5cbiAgICogZW1pdHRlci5vbmNlKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGZuKCkge1xuICAgICAgc2VsZi5vZmYoZXZlbnQsIGZuKTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZm4ubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgIHRoaXMub24oZXZlbnQsIGZuKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICogQG1lbWJlcm9mISBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gQSBsaXN0ZW5lciBmdW5jdGlvbiB0byByZW1vdmUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gUmVtb3ZlIGEgZ2l2ZW4gbGlzdGVuZXIuXG4gICAqIGVtaXR0ZXIub2ZmKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIG9mZihldmVudCwgbGlzdGVuZXIpIHtcblxuICAgIHZhciBsaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZWZpbmVzIGxpc3RlbmVycyB2YWx1ZS5cbiAgICBpZiAoIXRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCAhKGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4sIGkpIHtcbiAgICAgIGlmIChmbiA9PT0gbGlzdGVuZXIgfHwgZm4ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIC8vIFJlbW92ZXMgdGhlIGdpdmVuIGxpc3RlbmVyLlxuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlcyBhbiBlbXB0eSBldmVudCBjb2xsZWN0aW9uLlxuICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRXhlY3V0ZSBlYWNoIGl0ZW0gaW4gdGhlIGxpc3RlbmVyIGNvbGxlY3Rpb24gaW4gb3JkZXIgd2l0aCB0aGUgc3BlY2lmaWVkIGRhdGEuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB5b3Ugd2FudCB0byBlbWl0LlxuICAgKiBAcGFyYW0gey4uLk9iamVjdH0gZGF0YSAtIERhdGEgdG8gcGFzcyB0byB0aGUgbGlzdGVuZXJzLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIEVtaXRzIHRoZSBcImZvb1wiIGV2ZW50IHdpdGggJ3BhcmFtMScgYW5kICdwYXJhbTInIGFzIGFyZ3VtZW50cy5cbiAgICogZW1pdHRlci5lbWl0KCdmb28nLCAncGFyYW0xJywgJ3BhcmFtMicpO1xuICAgKi9cblxuICBFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZWZpbmVzIGxpc3RlbmVycyB2YWx1ZS5cbiAgICBpZiAoIXRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCAhKGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDbG9uZSBsaXN0ZW5lcnNcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gRW1pdHRlcjtcbn0pKCk7XG5cbi8qKlxuICogRXhwb3J0cyBFbWl0dGVyXG4gKi9cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xudmFyIGRlY291cGxlID0gcmVxdWlyZSgnZGVjb3VwbGUnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xuXG4vKipcbiAqIFByaXZhdGVzXG4gKi9cbnZhciBzY3JvbGxUaW1lb3V0O1xudmFyIHNjcm9sbGluZyA9IGZhbHNlO1xudmFyIGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbnZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbnZhciBtc1BvaW50ZXJTdXBwb3J0ZWQgPSB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG52YXIgdG91Y2ggPSB7XG4gICdzdGFydCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJEb3duJyA6ICd0b3VjaHN0YXJ0JyxcbiAgJ21vdmUnOiBtc1BvaW50ZXJTdXBwb3J0ZWQgPyAnTVNQb2ludGVyTW92ZScgOiAndG91Y2htb3ZlJyxcbiAgJ2VuZCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJVcCcgOiAndG91Y2hlbmQnXG59O1xudmFyIHByZWZpeCA9IChmdW5jdGlvbiBwcmVmaXgoKSB7XG4gIHZhciByZWdleCA9IC9eKFdlYmtpdHxLaHRtbHxNb3p8bXN8TykoPz1bQS1aXSkvO1xuICB2YXIgc3R5bGVEZWNsYXJhdGlvbiA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0uc3R5bGU7XG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGVEZWNsYXJhdGlvbikge1xuICAgIGlmIChyZWdleC50ZXN0KHByb3ApKSB7XG4gICAgICByZXR1cm4gJy0nICsgcHJvcC5tYXRjaChyZWdleClbMF0udG9Mb3dlckNhc2UoKSArICctJztcbiAgICB9XG4gIH1cbiAgLy8gTm90aGluZyBmb3VuZCBzbyBmYXI/IFdlYmtpdCBkb2VzIG5vdCBlbnVtZXJhdGUgb3ZlciB0aGUgQ1NTIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIG9iamVjdC5cbiAgLy8gSG93ZXZlciAocHJvcCBpbiBzdHlsZSkgcmV0dXJucyB0aGUgY29ycmVjdCB2YWx1ZSwgc28gd2UnbGwgaGF2ZSB0byB0ZXN0IGZvclxuICAvLyB0aGUgcHJlY2VuY2Ugb2YgYSBzcGVjaWZpYyBwcm9wZXJ0eVxuICBpZiAoJ1dlYmtpdE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICctd2Via2l0LSc7IH1cbiAgaWYgKCdLaHRtbE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICcta2h0bWwtJzsgfVxuICByZXR1cm4gJyc7XG59KCkpO1xuZnVuY3Rpb24gZXh0ZW5kKGRlc3RpbmF0aW9uLCBmcm9tKSB7XG4gIGZvciAodmFyIHByb3AgaW4gZnJvbSkge1xuICAgIGlmIChmcm9tW3Byb3BdKSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wXSA9IGZyb21bcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cbmZ1bmN0aW9uIGluaGVyaXRzKGNoaWxkLCB1YmVyKSB7XG4gIGNoaWxkLnByb3RvdHlwZSA9IGV4dGVuZChjaGlsZC5wcm90b3R5cGUgfHwge30sIHViZXIucHJvdG90eXBlKTtcbn1cbmZ1bmN0aW9uIGhhc0lnbm9yZWRFbGVtZW50cyhlbCkge1xuICB3aGlsZSAoZWwucGFyZW50Tm9kZSkge1xuICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVvdXQtaWdub3JlJykgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFNsaWRlb3V0IGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNsaWRlb3V0KG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gU2V0cyBkZWZhdWx0IHZhbHVlc1xuICB0aGlzLl9zdGFydE9mZnNldFggPSAwO1xuICB0aGlzLl9jdXJyZW50T2Zmc2V0WCA9IDA7XG4gIHRoaXMuX29wZW5pbmcgPSBmYWxzZTtcbiAgdGhpcy5fbW92ZWQgPSBmYWxzZTtcbiAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gIHRoaXMuX3ByZXZlbnRPcGVuID0gZmFsc2U7XG4gIHRoaXMuX3RvdWNoID0gb3B0aW9ucy50b3VjaCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMudG91Y2ggJiYgdHJ1ZTtcbiAgdGhpcy5fc2lkZSA9IG9wdGlvbnMuc2lkZSB8fCAnbGVmdCc7XG5cbiAgLy8gU2V0cyBwYW5lbFxuICB0aGlzLnBhbmVsID0gb3B0aW9ucy5wYW5lbDtcbiAgdGhpcy5tZW51ID0gb3B0aW9ucy5tZW51O1xuXG4gIC8vIFNldHMgIGNsYXNzbmFtZXNcbiAgaWYgKCF0aGlzLnBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVvdXQtcGFuZWwnKSkge1xuICAgIHRoaXMucGFuZWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtcGFuZWwnKTtcbiAgfVxuICBpZiAoIXRoaXMucGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1wYW5lbC0nICsgdGhpcy5fc2lkZSkpIHtcbiAgICB0aGlzLnBhbmVsLmNsYXNzTGlzdC5hZGQoJ3NsaWRlb3V0LXBhbmVsLScgKyB0aGlzLl9zaWRlKTtcbiAgfVxuICBpZiAoIXRoaXMubWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW1lbnUnKSkge1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1tZW51Jyk7XG4gIH1cbiAgaWYgKCF0aGlzLm1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1tZW51LScgKyB0aGlzLl9zaWRlKSkge1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1tZW51LScgKyB0aGlzLl9zaWRlKTtcbiAgfVxuXG4gIC8vIFNldHMgb3B0aW9uc1xuICB0aGlzLl9meCA9IG9wdGlvbnMuZnggfHwgJ2Vhc2UnO1xuICB0aGlzLl9kdXJhdGlvbiA9IHBhcnNlSW50KG9wdGlvbnMuZHVyYXRpb24sIDEwKSB8fCAzMDA7XG4gIHRoaXMuX3RvbGVyYW5jZSA9IHBhcnNlSW50KG9wdGlvbnMudG9sZXJhbmNlLCAxMCkgfHwgNzA7XG4gIHRoaXMuX3BhZGRpbmcgPSB0aGlzLl90cmFuc2xhdGVUbyA9IHBhcnNlSW50KG9wdGlvbnMucGFkZGluZywgMTApIHx8IDI1NjtcbiAgdGhpcy5fb3JpZW50YXRpb24gPSB0aGlzLl9zaWRlID09PSAncmlnaHQnID8gLTEgOiAxO1xuICB0aGlzLl90cmFuc2xhdGVUbyAqPSB0aGlzLl9vcmllbnRhdGlvbjtcblxuICAvLyBJbml0IHRvdWNoIGV2ZW50c1xuICBpZiAodGhpcy5fdG91Y2gpIHtcbiAgICB0aGlzLl9pbml0VG91Y2hFdmVudHMoKTtcbiAgfVxufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gRW1pdHRlclxuICovXG5pbmhlcml0cyhTbGlkZW91dCwgRW1pdHRlcik7XG5cbi8qKlxuICogT3BlbnMgdGhlIHNsaWRlb3V0IG1lbnUuXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5lbWl0KCdiZWZvcmVvcGVuJyk7XG4gIGlmICghaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW9wZW4nKSkge1xuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtb3BlbicpO1xuICB9XG4gIHRoaXMuX3NldFRyYW5zaXRpb24oKTtcbiAgdGhpcy5fdHJhbnNsYXRlWFRvKHRoaXMuX3RyYW5zbGF0ZVRvKTtcbiAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBzZWxmLnBhbmVsLnN0eWxlLnRyYW5zaXRpb24gPSBzZWxmLnBhbmVsLnN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24nXSA9ICcnO1xuICAgIHNlbGYuZW1pdCgnb3BlbicpO1xuICB9LCB0aGlzLl9kdXJhdGlvbiArIDUwKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsb3NlcyBzbGlkZW91dCBtZW51LlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoIXRoaXMuaXNPcGVuKCkgJiYgIXRoaXMuX29wZW5pbmcpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLmVtaXQoJ2JlZm9yZWNsb3NlJyk7XG4gIHRoaXMuX3NldFRyYW5zaXRpb24oKTtcbiAgdGhpcy5fdHJhbnNsYXRlWFRvKDApO1xuICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlb3V0LW9wZW4nKTtcbiAgICBzZWxmLnBhbmVsLnN0eWxlLnRyYW5zaXRpb24gPSBzZWxmLnBhbmVsLnN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24nXSA9IHNlbGYucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zZm9ybSddID0gc2VsZi5wYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICBzZWxmLmVtaXQoJ2Nsb3NlJyk7XG4gIH0sIHRoaXMuX2R1cmF0aW9uICsgNTApO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVG9nZ2xlcyAob3Blbi9jbG9zZSkgc2xpZGVvdXQgbWVudS5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pc09wZW4oKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNsaWRlb3V0IGlzIGN1cnJlbnRseSBvcGVuLCBhbmQgZmFsc2UgaWYgaXQgaXMgY2xvc2VkLlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9vcGVuZWQ7XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgcGFuZWwgYW5kIHVwZGF0ZXMgY3VycmVudE9mZnNldCB3aXRoIGEgZ2l2ZW4gWCBwb2ludFxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuX3RyYW5zbGF0ZVhUbyA9IGZ1bmN0aW9uKHRyYW5zbGF0ZVgpIHtcbiAgdGhpcy5fY3VycmVudE9mZnNldFggPSB0cmFuc2xhdGVYO1xuICB0aGlzLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHRoaXMucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAncHgpJztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0cmFuc2l0aW9uIHByb3BlcnRpZXNcbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLl9zZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zaXRpb24nXSA9IHRoaXMucGFuZWwuc3R5bGUudHJhbnNpdGlvbiA9IHByZWZpeCArICd0cmFuc2Zvcm0gJyArIHRoaXMuX2R1cmF0aW9uICsgJ21zICcgKyB0aGlzLl9meDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRvdWNoIGV2ZW50XG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5faW5pdFRvdWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvKipcbiAgICogRGVjb3VwbGUgc2Nyb2xsIGV2ZW50XG4gICAqL1xuICB0aGlzLl9vblNjcm9sbEZuID0gZGVjb3VwbGUoZG9jLCAnc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFzZWxmLl9tb3ZlZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXQpO1xuICAgICAgc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUHJldmVudHMgdG91Y2htb3ZlIGV2ZW50IGlmIHNsaWRlb3V0IGlzIG1vdmluZ1xuICAgKi9cbiAgdGhpcy5fcHJldmVudE1vdmUgPSBmdW5jdGlvbihldmUpIHtcbiAgICBpZiAoc2VsZi5fbW92ZWQpIHtcbiAgICAgIGV2ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5tb3ZlLCB0aGlzLl9wcmV2ZW50TW92ZSk7XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB2YWx1ZXMgb24gdG91Y2hzdGFydFxuICAgKi9cbiAgdGhpcy5fcmVzZXRUb3VjaEZuID0gZnVuY3Rpb24oZXZlKSB7XG4gICAgaWYgKHR5cGVvZiBldmUudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLl9tb3ZlZCA9IGZhbHNlO1xuICAgIHNlbGYuX29wZW5pbmcgPSBmYWxzZTtcbiAgICBzZWxmLl9zdGFydE9mZnNldFggPSBldmUudG91Y2hlc1swXS5wYWdlWDtcbiAgICBzZWxmLl9wcmV2ZW50T3BlbiA9ICghc2VsZi5fdG91Y2ggfHwgKCFzZWxmLmlzT3BlbigpICYmIHNlbGYubWVudS5jbGllbnRXaWR0aCAhPT0gMCkpO1xuICB9O1xuXG4gIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5zdGFydCwgdGhpcy5fcmVzZXRUb3VjaEZuKTtcblxuICAvKipcbiAgICogUmVzZXRzIHZhbHVlcyBvbiB0b3VjaGNhbmNlbFxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaENhbmNlbEZuID0gZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuX29uVG91Y2hDYW5jZWxGbik7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgc2xpZGVvdXQgb24gdG91Y2hlbmRcbiAgICovXG4gIHRoaXMuX29uVG91Y2hFbmRGbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChzZWxmLl9tb3ZlZCkge1xuICAgICAgc2VsZi5lbWl0KCd0cmFuc2xhdGVlbmQnKTtcbiAgICAgIChzZWxmLl9vcGVuaW5nICYmIE1hdGguYWJzKHNlbGYuX2N1cnJlbnRPZmZzZXRYKSA+IHNlbGYuX3RvbGVyYW5jZSkgPyBzZWxmLm9wZW4oKSA6IHNlbGYuY2xvc2UoKTtcbiAgICB9XG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgfTtcblxuICB0aGlzLnBhbmVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2guZW5kLCB0aGlzLl9vblRvdWNoRW5kRm4pO1xuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIHBhbmVsIG9uIHRvdWNobW92ZVxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaE1vdmVGbiA9IGZ1bmN0aW9uKGV2ZSkge1xuICAgIGlmIChcbiAgICAgIHNjcm9sbGluZyB8fFxuICAgICAgc2VsZi5fcHJldmVudE9wZW4gfHxcbiAgICAgIHR5cGVvZiBldmUudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIGhhc0lnbm9yZWRFbGVtZW50cyhldmUudGFyZ2V0KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkaWZfeCA9IGV2ZS50b3VjaGVzWzBdLmNsaWVudFggLSBzZWxmLl9zdGFydE9mZnNldFg7XG4gICAgdmFyIHRyYW5zbGF0ZVggPSBzZWxmLl9jdXJyZW50T2Zmc2V0WCA9IGRpZl94O1xuXG4gICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpID4gc2VsZi5fcGFkZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaWZfeCkgPiAyMCkge1xuXG4gICAgICBzZWxmLl9vcGVuaW5nID0gdHJ1ZTtcblxuICAgICAgdmFyIG9yaWVudGVkX2RpZl94ID0gZGlmX3ggKiBzZWxmLl9vcmllbnRhdGlvbjtcblxuICAgICAgaWYgKHNlbGYuX29wZW5lZCAmJiBvcmllbnRlZF9kaWZfeCA+IDAgfHwgIXNlbGYuX29wZW5lZCAmJiBvcmllbnRlZF9kaWZfeCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGYuX21vdmVkKSB7XG4gICAgICAgIHNlbGYuZW1pdCgndHJhbnNsYXRlc3RhcnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9yaWVudGVkX2RpZl94IDw9IDApIHtcbiAgICAgICAgdHJhbnNsYXRlWCA9IGRpZl94ICsgc2VsZi5fcGFkZGluZyAqIHNlbGYuX29yaWVudGF0aW9uO1xuICAgICAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghKHNlbGYuX21vdmVkICYmIGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1vcGVuJykpKSB7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtb3BlbicpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHNlbGYucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAncHgpJztcbiAgICAgIHNlbGYuZW1pdCgndHJhbnNsYXRlJywgdHJhbnNsYXRlWCk7XG4gICAgICBzZWxmLl9tb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX29uVG91Y2hNb3ZlRm4pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbmFibGUgb3BlbmluZyB0aGUgc2xpZGVvdXQgdmlhIHRvdWNoIGV2ZW50cy5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmVuYWJsZVRvdWNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3RvdWNoID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpc2FibGUgb3BlbmluZyB0aGUgc2xpZGVvdXQgdmlhIHRvdWNoIGV2ZW50cy5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmRpc2FibGVUb3VjaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl90b3VjaCA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGVzdHJveSBhbiBpbnN0YW5jZSBvZiBzbGlkZW91dC5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gQ2xvc2UgYmVmb3JlIGNsZWFuXG4gIHRoaXMuY2xvc2UoKTtcblxuICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX3ByZXZlbnRNb3ZlKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLnN0YXJ0LCB0aGlzLl9yZXNldFRvdWNoRm4pO1xuICB0aGlzLnBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5fb25Ub3VjaENhbmNlbEZuKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLmVuZCwgdGhpcy5fb25Ub3VjaEVuZEZuKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX29uVG91Y2hNb3ZlRm4pO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fb25TY3JvbGxGbik7XG5cbiAgLy8gUmVtb3ZlIG1ldGhvZHNcbiAgdGhpcy5vcGVuID0gdGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgLy8gUmV0dXJuIHRoZSBpbnN0YW5jZSBzbyBpdCBjYW4gYmUgZWFzaWx5IGRlcmVmZXJlbmNlZFxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRXhwb3NlIFNsaWRlb3V0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVvdXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmFkZ2UgPSB2b2lkIDA7XG5jbGFzcyBCYWRnZSB7XG4gICAgbW91bnQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLmVsKVxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IGltZywgdmVydGljYWwsIGhvcml6b250YWwsIGhpZGRlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpbWdUYWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW1nVGFnID0gdGhpcy5lbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmluc1BvaW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ1BPU1RfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMTVweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMTVweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnMnB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJzNweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1BPU1RfQVZBVEFSX0JBREdFJzpcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzI0cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzI0cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbdmVydGljYWxdID0gJy0ycHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbaG9yaXpvbnRhbF0gPSAnLTdweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1BST0ZJTEVfQVZBVEFSX0JBREdFJzpcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzMycHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzMycHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdQUk9GSUxFX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzIwcHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbdmVydGljYWxdID0gJzJweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0hFQURJTkdfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUud2lkdGggPSAnMjRweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMjRweCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZVt2ZXJ0aWNhbF0gPSAnM3B4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW2hvcml6b250YWxdID0gJzFweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1NVU1BFTkRFRF9VU0VSTkFNRV9CQURHRSc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcyMHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcyMHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICczcHgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdQUk9GSUxFX0JVVFRPTl9HUk9VUCc6XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS53aWR0aCA9ICcxOHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmhlaWdodCA9ICcxOHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlW3ZlcnRpY2FsXSA9ICc5cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGVbaG9yaXpvbnRhbF0gPSAnMTBweCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKF9hID0gdGhpcy5lbC5maXJzdENoaWxkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZSgpO1xuICAgIH1cbiAgICBfY3JlYXRlRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgc3dpdGNoICh0aGlzLmluc1BvaW50TmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnU1VTUEVOREVEX1VTRVJOQU1FX0JBREdFJzpcbiAgICAgICAgICAgIGNhc2UgJ1BST0ZJTEVfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5tYXJnaW4gPSAnMnB4JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0hFQURJTkdfVVNFUk5BTUVfQkFER0UnOlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQUk9GSUxFX0FWQVRBUl9CQURHRSc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUFJPRklMRV9CVVRUT05fR1JPVVAnOlxuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoXCJkYXBwbGV0LXdpZGdldC1wcm9maWxlLWJ1dHRvblwiLCBcImNzcy0xOHQ5NG80XCIsIFwiY3NzLTFkYmpjNG5cIiwgXCJyLTFuaXdoemdcIiwgXCJyLTF4bDVuam9cIiwgXCJyLXNkemxpalwiLCBcInItMXBoYm90eVwiLCBcInItcnM5OWI3XCIsIFwici0xdzJwbWdcIiwgXCJyLTE1ZDE2NHJcIiwgXCJyLXpzbzIzOVwiLCBcInItMXZ1c2NmZFwiLCBcInItNTN4YjdoXCIsIFwici1tazB5aXRcIiwgXCJyLW83eW5xY1wiLCBcInItNjQxNmVnXCIsIFwici1scnZpYnJcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIHN0eWxlVGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICAgICAgICAgIHN0eWxlVGFnLmlubmVyVGV4dCA9IGAuZGFwcGxldC13aWRnZXQtcHJvZmlsZS1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDkzLCAzNCwgMC4xKVxuICAgICAgICAgICAgICAgICAgICB9YDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlVGFnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuaW5pdCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICB9XG59XG5leHBvcnRzLkJhZGdlID0gQmFkZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQnV0dG9uID0gdm9pZCAwO1xuY2xhc3MgQnV0dG9uIHtcbiAgICBtb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsKVxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IGltZywgbGFiZWwsIGxvYWRpbmcsIGRpc2FibGVkLCBoaWRkZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5zUG9pbnROYW1lID09PSAnUE9TVF9TT1VUSCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxTdHJpbmcgPSBgPGRpdiBhcmlhLWhhc3BvcHVwPVwiZmFsc2VcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1mb2N1c2FibGU9XCJ0cnVlXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjc3MtMTh0OTRvNCBjc3MtMWRiamM0biByLTE3NzdmY2kgci0xMWNwb2sxIHItMW55NGwzbCByLWJ6dGtvMyByLWxydmliclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRpcj1cImx0clwiIGNsYXNzPVwiY3NzLTkwMW9hbyByLTFhd296d3kgci0xcmU3ZXpoIHItNmtvYWxqIHItMXFkMHhoYSByLWEwMjNlNiByLTE2ZGJhNDEgci0xaDB6NW1kIHItYWQ5ejB4IHItYmNxZWVvIHItbzd5bnFjIHItY2xwN2IxIHItM3MydTJxIHItcXZ1dGMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3NzLTFkYmpjNG4gci14b2R1dTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3NzLTFkYmpjNG4gci1zZHpsaWogci0xcDBkdGFpIHIteG9kdXU1IHItMWQyZjQ5MCByLXhmNGl1dyByLXU4czFkIHItemNobG5qIHItaXBtNWFmIHItbzd5bnFjIHItNjQxNmVnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtsb2FkaW5nID8gYDxzdmcgd2lkdGg9XCIxOHB4XCIgaGVpZ2h0PVwiMThweFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiBjbGFzcz1cImxkcy1yb2xsaW5nXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMWRhMWYyXCIgc3Ryb2tlLXdpZHRoPVwiMTRcIiByPVwiNDBcIiBzdHJva2UtZGFzaGFycmF5PVwiMTg4LjQ5NTU1OTIxNTM4NzU3IDY0LjgzMTg1MzA3MTc5NTg2XCIgdHJhbnNmb3JtPVwicm90YXRlKDc3LjU3OTMgNTAgNTApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInJvdGF0ZVwiIGNhbGNNb2RlPVwibGluZWFyXCIgdmFsdWVzPVwiMCA1MCA1MDszNjAgNTAgNTBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCIwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YCA6IGA8aW1nIGhlaWdodD1cIjE4XCIgc3JjPVwiJHtpbWd9XCIgY2xhc3M9XCJyLTRxdHFwOSByLXl5eXlvbyByLTF4dmxpNXQgci1kbm1yenMgci1ibndxaW0gci0xcGxjcnVpIHItbHJ2aWJyIHItMWhkdjBxaVwiPmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJHsobGFiZWwgPT09IG51bGwgfHwgbGFiZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxhYmVsLnRvU3RyaW5nKCkpID8gYDxkaXYgY2xhc3M9XCJjc3MtMWRiamM0biByLXhvZHV1NSByLTF1ZGgwOHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjc3MtOTAxb2FvIGNzcy0xNm15NDA2IHItMXFkMHhoYSByLWFkOXoweCByLTFuMHhxNmUgci1iY3FlZW8gci1kM2hiZTEgci0xd2dnMmIyIHItYXh4aTJ6IHItcXZ1dGMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAke2Rpc2FibGVkID8gJ3N0eWxlPVwiY29sb3I6I2FhYTtcIicgOiAnJ30gY2xhc3M9XCJjc3MtOTAxb2FvIGNzcy0xNm15NDA2IHItMXFkMHhoYSByLWFkOXoweCByLWJjcWVlbyByLXF2dXRjMFwiPiR7bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW5zUG9pbnROYW1lID09PSAnUFJPRklMRV9CVVRUT05fR1JPVVAnKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWwuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltZ1RhZy5zcmMgPSBpbWc7XG4gICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLndpZHRoID0gJzE4cHgnO1xuICAgICAgICAgICAgICAgIGltZ1RhZy5zdHlsZS5oZWlnaHQgPSAnMThweCc7XG4gICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICBpbWdUYWcuc3R5bGUudG9wID0gJzlweCc7XG4gICAgICAgICAgICAgICAgaW1nVGFnLnN0eWxlLmxlZnQgPSAnMTBweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpbWdUYWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW5zUG9pbnROYW1lID09PSAnUE9TVF9TVEFSVEVSJykge1xuICAgICAgICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGA8ZGl2IHN0eWxlPVwibWFyZ2luOiAwIDEwcHhcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJNb3JlXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtZm9jdXNhYmxlPVwidHJ1ZVwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY3NzLTE4dDk0bzQgY3NzLTFkYmpjNG4gci0xNzc3ZmNpIHItMTFjcG9rMSByLTFueTRsM2wgci1ienRrbzMgci1scnZpYnJcIiBkYXRhLXRlc3RpZD1cImNhcmV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGlyPVwibHRyXCIgY2xhc3M9XCJjc3MtOTAxb2FvIHItMWF3b3p3eSByLTFyZTdlemggci02a29hbGogci0xcWQweGhhIHItYTAyM2U2IHItMTZkYmE0MSByLTFoMHo1bWQgci1hZDl6MHggci1iY3FlZW8gci1vN3lucWMgci1jbHA3YjEgci0zczJ1MnEgci1xdnV0YzBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNzcy0xZGJqYzRuIHIteG9kdXU1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3NzLTFkYmpjNG4gci0xbml3aHpnIHItc2R6bGlqIHItMXAwZHRhaSByLXhvZHV1NSByLTFkMmY0OTAgci1wb2RiZjcgci11OHMxZCByLXpjaGxuaiByLWlwbTVhZiByLW83eW5xYyByLTY0MTZlZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIyNVwiIHNyYz1cIiR7aW1nfVwiIGNsYXNzPVwici00cXRxcDkgci15eXl5b28gci1pcDh1anggci1kbm1yenMgci1ibndxaW0gci0xcGxjcnVpIHItbHJ2aWJyIHItMjd0bDBxXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5lbC5yZW1vdmUoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGVUYWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKHRoaXMuaW5zUG9pbnROYW1lID09PSAnUE9TVF9TT1VUSCcpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnY3NzLTFkYmpjNG4nLCAnci0xaXVzdnI0JywgJ3ItMTh1MzdpeicsICdyLTE2eTJ1b3gnLCAnci0xaDB6NW1kJyk7XG4gICAgICAgICAgICBzdHlsZVRhZy5pbm5lclRleHQgPSBgXG4gICAgICAgICAgICAgICAgLmRhcHBsZXQtd2lkZ2V0ID4gZGl2W3JvbGU9XCJidXR0b25cIl0gPiBkaXY6aG92ZXIgPiAuY3NzLTFkYmpjNG4uci14b2R1dTUgPiAuci1zZHpsaWoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgMC4xKTsgXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7IFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGFwcGxldC13aWRnZXQgPiBkaXZbcm9sZT1cImJ1dHRvblwiXSA+IGRpdjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMjksMTYxLDI0MiwxLjAwKTtcbiAgICAgICAgICAgICAgICB9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmluc1BvaW50TmFtZSA9PT0gJ1BST0ZJTEVfQlVUVE9OX0dST1VQJykge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiZGFwcGxldC13aWRnZXQtcHJvZmlsZS1idXR0b25cIiwgXCJjc3MtMTh0OTRvNFwiLCBcImNzcy0xZGJqYzRuXCIsIFwici0xbml3aHpnXCIsIFwici0xeGw1bmpvXCIsIFwici1zZHpsaWpcIiwgXCJyLTFwaGJvdHlcIiwgXCJyLXJzOTliN1wiLCBcInItMXcycG1nXCIsIFwici0xNWQxNjRyXCIsIFwici16c28yMzlcIiwgXCJyLTF2dXNjZmRcIiwgXCJyLTUzeGI3aFwiLCBcInItbWsweWl0XCIsIFwici1vN3lucWNcIiwgXCJyLTY0MTZlZ1wiLCBcInItbHJ2aWJyXCIsIFwici1wMW4zeTVcIik7XG4gICAgICAgICAgICBzdHlsZVRhZy5pbm5lclRleHQgPSBgLmRhcHBsZXQtd2lkZ2V0LXByb2ZpbGUtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgMC4xKVxuICAgICAgICAgICAgfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5zdGF0ZSkuZXhlYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuc3RhdGUuY3R4LCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBWkFBQUFHUUNBWUFBQUNBdnpiTUFBQWhUMGxFUVZSNG5PemREWlJkWlgzdjhkK1pNek9aU1NhWnlTU1R0eUZEQWtNU0VpZEZvN21ONWpZU2hVS2pzZGpZYUNBQ3hRVml1WUt4VUZob0VLNFdMc3JMS2kwSUN5NEk1YVhLMVlwU0xGU1VHa0ZBUkNlQ0RRWWk0UzBRRFVsSW1MeE56bDM3NUVFZ21Vbm03RGw3LzU5bjcrOW5yYk9TSlhLZUg4bWUvZHZQZm5sMmJhbFVFdUNiN3NLRTZKY3VTWXNsWFNDcDF6cVRnVFpKbDBvNmVXYnBSZXNzd0Q1cXJBTUFCM0MrcEhPc1F4aVlKdWtKU2NkWkJ3SDZRNEVnQkJkS09sZFN2WFdRbEhSSStwYWJnUURlb2tBUWdqcEpGMHQ2U2RJdGtqNHVxZFU2VkpWMVNUcFAwZ09TVmt0NmgzVWc0RUJxclFNQUZZaEs0d1QzMlNIcHE1SXVrYlRGT3RnZ3pKWjBsZnNWQ0FvekVJU3EzbDBmZVVMU0RPc3dNVFJMdWxYU3c1UUhRa1dCSUhRZGt1NEo3R0p6cDh1OHhEb0lNQmdVQ0xKZ29xUnZTK3FXZEpLa29uV2dma1F6alRzay9WYlNIT3N3d0dCUklNaVNMa2szdWgzMEdlNDBrYldvekJaSytyRTdYYlhZT2hCUUxSUUlzbWl5dXpEOWtydXp5Y3FwTHNOM0pjMHp6QUVrZ2dKQmxqVksrZ2UzRTcvTXpWQ1NGcFhYY2tuUFNMcVdaem1RWmR6R2l6d1lKMm1aKzd6cW5yT0lQczlLK20vMzJlQnVCMzVwUDk5VGNOODF3dDFTUE1VOU1YNndwRW1TcG1idytSU2dYeFFJOG1ha3BQZTR6LzZzbGJUZS9iNkRtUVN3THdvRTZGdUgrd0RvQjlkQUFBQ3hVQ0FBZ0Znb0VBQkFMQlFJQUNBV0NnUUFFQXNGQWdDSWhRSUJBTVJDZ1FBQVlxRkFBQUN4VUNBQWdGZ29FQUJBTEJRSUFDQVdDZ1FBRUFzRkFnQ0loUUlCQU1SQ2dRQUFZcUZBQUFDeFVDQUFnRmdvRUFCQUxCUUlBQ0FXQ2dRQUVBc0ZBZ0NJaFFJQkFNUkNnUUFBWXFGQUFBQ3hVQ0FBZ0Znb0VBQkFMQlFJQUNDVzJxUUg2QzVNU0hvSUlQUDRPVUpjTTBzdkp2YmR6RUFBQUxGUUlBQ0FXQkkvaFFVTVVLdWs2ZTdUS2FsZDBoSFdvVHpRTE9ubmt0Wktla0hTU2ttL2x2U2dkVENBQWtHYTZpVjFTWnJzQ21MNlhyOUgzMmE1ejk3V1NGcm5TbVdOSzVnblhjRnNOOGlKbktGQWtLU3BiaFlSbGNZSEpQMnBkYUNNbWV3K2MvYjYzN2RJZXNnVlMvVDVwZnNBVlZVb2xVcUpEc0RkSTdseXRLUy9sRFRibFVhOWRTQzhUVlFpUDVEMEhVbVBTZXExRG9Ua0pYa1hGZ1dDU2t5UzlDNUpIZTdUdnRlbnpqb2dLdkxDWHArMWJzYnlDMG12V0lkRGRTUlpJSnpDd3Y1RUpYR01wUG1TNXJxU1FIYTA3K2Z2ZElPa0ZlNXp0N3UyQXJ3Tk14RHNiYnFrVXlVdGNIZERBWEl6bEd2Y1o0TjFHQXdjcDdDUXRHaW1zVmpTVVc2MlViUU9CSzg5Sk9rK1NYZTZVMTd3R0FXQ0pCd2g2VGozNmJJT2cyQ3RkVVZ5dDZUN3JjTmdYeFFJcXVrVVNjdmRyQU9vcHA5S3V0aVZDVHpCUlhRTVZwYzdSYldVNGtDQzNpZnArNUxXdTFuSnYwcDZ3RG9Va3NNTUpIdkdTUHB6ZDRycW5aTGVJYW5OT2hSeWE3TzdUdEl0NmQvZHRST2VrazhScDdBd0VORXM0eVJKcDB0cXRBNEQ5S1BIelV4dVluYVNEcFp6UjMrSzd0VFVUOXdSM2pMS0E1NXJkQWM2UDViMGhEdmdhYklPaFhnb2tEQU5sWFMrcE9jbDNlRWU4Z05DTTEzUzFXNDdYbUlkQnBXalFNTFQ1V1ljWDVZMHpqb01VQVhOa202VmRJK2tlZFpoTUhBVVNEaG1TZnEyTzFYMUx1c3dRQUtPY2FlMkhuUy9oK2NvRVAvTmNVZG1QM2NQL1FGWjk5WnRmb0YxR1BTUEF2Rlg5RU4wTDBkanlMRlo3cm1TcUVpbVdZZkJ2bmlRMEMrZDdoendDWkxlYngwRzhFUlVKSTlLK2c5M2ltc0ZMOGp5QTgrQitHRzZwTXVZYVFBREZoWElXVHhMY21BOEI1SmR6ZTQyeG03S0E2aklFVzQyOG0zM2N3UURuTUt5TTl0ZEtHeTFEZ0lFN0RoWElCOXg3NEpIaXBpQjJEaktYUnlrUElEQm15L3B0MjZ4VUtTSUFrbFhwNXR5MzhzQ2gwQlZqWk4wczZTSDNld2VLYUJBMHRFbzZWSzM5Zy9QY2dESm1lMUs1R1lPMHBKSGdTU240S2JXMTdxM3RwMHRxZDQ2RkpBVFN5V3RjV3ZGOGNiTmhGQWd5ZmtIU1QrVWRLcWswZFpoZ0J3YTVsYXJYc0hNUHhrVVNQWFZ1NFVPejdFT0FxQnNoTHYyZUN1My9GWVhCVkpkWFc3WmhmUDVzd1c4czhSZGgrU1pxeXBoSjFjZFJVbkxYWGx3dmhYd1Y3dDcvdXBhWG1RMWVCVEk0TFc1MjNJdjVDSTVFSXhUM1FIZktPc2dJYU5BQnVjZ1NZKzd1NjBBaEdXcXBDdXRRNFNNQWhtY3E5MlVHRUNZVG5BTG1SYXRnNFNJQXFsY3E2UXozUUtJSDdZT0EyRFFsa2w2UnRJRmtqcXN3NFNFNWR3cnM5RGRDc2pGTnlDYmRrZzZUOUxsMWtHcWhlWGMvZkJsU2QrbFBJQk1xM2VudEc3bXBwZ0RvMEFPck41dFRPZGJCd0dRbXFYdWRsOUtaRDhva1AxcmRMZm9za3cwa0QvejNmVk85SU1DMmIrejNUdktBZVRUK2U1MlgvU0JBdWxmbHlzUUFQblZMT2xCU1hPc2cvaUlBdG5YWVc2WmcwZTRZQTdBM2JyL2dMc0Q4OTNXWVh4Q2diemRjWkorN1pZNWFMQU9BOEFiZFc0eHhrZmRjeU9nUU41bWdYdjVESGRkQU5pZnk3aTR2Z2NGc3NjeDduMEJsQWVBZ2JpUzAxa1VTT1FReWdOQURGKzBEbUNOQXBIT2RjOTdBRUFsRmtvNnlUcUVwYndYeUJ4SkoxcUhBQkNzNi9QOG9IR2VDMlEyU3hVQUdLU2lwQnNsTGJZT1lpR1BCVExVTFl6NEFDL1lCMUFGVVluYzVtWWpZNnpEcENsdkJkSW82VWR1ZVFLZTh3QlFMZEcrOUJSSnY4alRTK2J5VmlCM3VGTlhBSkNFcUR5K241Y2JjL0pVSUJlN3V5WUFJRWxIdUlQVmduV1FwT1dsUUU1M3Qrc0NRQnFpZzlXL3NBNlJ0RHdVU0tla3E2eERBTWlkMDYwREpDMFBCWEs2dTBzQ0FOSjByRnNtS2JPeVhpQWZrM1NhZFFnQXVSVHRYKytVZEZaV0QyS3pYQ0NuU1BxbXBHSFdRUURrVnJUL3VVTFNwZFpCa3BEVkF1bml1Z2NBanl6TDRsMmdXU3lRSmtuZnlzdDkyQUNDY2JPa3lkWWhxaW1MQlhJOUw4RUg0S0ZtZDNDYm1mWDNzbFlnWitSMVVUTUFRWmpsM21pWUNWa3FrRTczdERrQStPd005eUs3NEdXbFFBcHVTZVVtNnlBQU1BQ0xyQU5VUTFZSzVHOGt6YlVPQVFBRGRGWVdaaUZaS0pDaXBBdXNRd0JBQmNhN1Ywc0UvVTZpTEJUSW1aSW1Xb2NBZ0FwMWhINUJQZlFDbWVyZUxnZ0FJVHBGMGxIV0llSUt2VUN1NTRGQkFJRUw5Z2Fna0F0a0NSZk9BV1JBdTN2TmRuQkNMWkNtckM1T0JpQ1hscmxuMllJU1lvRzB1bmNPNStiRjlRQXlyMTdTM1pJT3N3NVNpUkFMNUdaSjg2eERBRUNWVFpIMDd5R3RsUlZhZ1N4d0h3RElvazUzT2lzSUlSVkkxTXBYV29jQWdJU2RIOHBkV1NFVnlFa2hYbVFDZ0FvMWhYS0hhU2dGVWl0cHVYVUlBRWpKZk9zQUF4RktnYnlIdTY0QTVNZ0hyQU1NUkNnRkVrUWJBMENWSEJIQ0tmc1FDcVJSMG9uV0lRQWdSZEcrK1U1Slk2eUQ3RThJQlhKK2FBL1hBRUFWL0lta3IxdUgyQi9mQzZUWkxkY09BSGwwbktUcDFpSDY0M3VCbkI3Sy9kQUFrSkJ6clFQMHgrY0NxV2YyQVFCYTdPdGRxRDRYeUZKSjQ2eERBSUF4YncrbWZTNlFZTmFEQVlDRW5lN2orOU45TFpDRlBsODRBb0NVTlVrNjFUckUzbndza1BHU3JySU9BUUNlV2U0ZU1QU0dqd1h5SlVrZDFpRUF3RE5OdmgxYysxWWdUZTVkNXdDQWZjMzE2ZlMrYndXeWxPYytBR0MvdkxrVzRsdUJuR0lkQUFBOHQ5Uzk0c0tjVHdVeVc5SXM2eEFBNExsV1NlK3dEaUhQQ3NTYmFSa0FlTTZMZzIxZkNtU2NwRTlhaHdDQVFCeHRIVUFlRmNoOFNYWFdJUUFnRUIrMERpQ1BDcVRMT2dBQUJLVFZYVGMyUllFQVFKak1uNW1qUUFBZ1RJc2xGUzBEK0ZBZ0hTeGRBZ0FWRytldUg1dnhvVUNPc3c0QUFJRXkzWC82VUNDTHJBTUFRS0FXV0o3R3NpNlEyWkxlYTV3QkFFTFZZZmtNblhXQm5PbEJCZ0FJMmVlc0JyYmNlVGU2Tnc4Q0FPTHJzcm9SeWJKQTVyTjBPd0JVeFFLTFFTMExaSzdoMkFDUUpia3JFSlAvWUFESW9Qa1dkMk5aRlVnclQ1OERRTlUwU3BxVDlxQldCWEthMGJnQWtGV3B2MVBKcWtBK2JUUXVBR1RWRWtuTmFRNW9VU0R0ckgwRkFGVlhUSHVKZDRzQ1NmMDhIUURrUktyN1Y0c0M0ZlpkQUVoR3F2dFhaaUFBa0IyekpSWFNHaXp0QW1tVU5DdmxNUUVnTDVvbHRhVTFXTm9GTXN2NkRWb0FrSEVUMHhvbzdRTGg2WE1BU0ZabldnTlJJQUNRTFllbE5WQ2FCVklyYVhxSzR3RkFIazFJYTZBMEM2U042eDhBa0xoeGFRMlVkb0VBQUpJMUpxMkIwaXlRc1NtT0JRQjVOVHF0Z2RJc2tGRXBqZ1VBZVpYSjUwQW1wVGdXQU9UVnlMU3VnNlJaSU9OVEhBc0E4cXFRMW9vZmFSWklxdXZVQTBDT3BmTEtEQW9FQUxLSEFnRUF4RUtCQUFCaW9VQUFBTEZNVG1NUUNnUUFzbWVjcFBxa0IwbXJRR3JkdmNrQWdPUVZKUjJTOUNCcEZjaG9GbElFZ0ZRbC9tS3B0QXFrTmFWeEFBQjdKTDdmcFVBQUlKc1N2KzZjVm9Gd0FSMEEwcFdaQW1sTWFSd0F3QjZKWDNkT3EwQVN2NTBNQVBBMlRVa1BrT1p6SUFDQTlHUm1CZ0lBeUpoYTZ3QklSOFAwS1NvME5rakZHdTFZOVl4Nk4yMjJqb1NNcVQva1lOV09IYTNTanAzYXZXV3J0cTk2MmpvU0VrYUJaTkR3WTQ3VWlBVWYxTkE1c3pSaytoVFZSTVhSaHgycmY2ZnRxOWRvODkzL3FjM2Z1VWM3WDFpWGVsYUVxYTZqWFMyTFBsVGUxdW83SjZsK2N0OXI5NzFSSkZzZWVFaC8rT2VidE9PWloxUFBpdVFVU3FWU29nTjBGeVpFdnl5UmRHdWlBNkg4d3p6MndyL1QwTm52alBYdjl6eldyWFZmdkZTdjNYTi8xYk1oZkRYRG05VDJkNTlXODNISHFxSHI4SXIvL2QwOTI4b0hLaHR1dUYxYjdsK1JTRWE4elNXU3pwdFplakd4QWJnR2tnSFJUS1B6d2U5cDhqMjN4aTZQU09Pc21acjBiLzlYWTVjdlUwM1RzS3BtUk5pS3pTTTA2WHZmS0c4YmNjb2pFczJFVzVZY3AwTisrRTBkK3VQL042aHRGWDZnUUFMV01IMktEdjcyRGVYeWlFcWtHZ3IxOWVWWnpMUm5mcVpScDUrb1FwRWx6UEtzVUYrbnRtV25sYmVIcG5senF2YTl3K2JOVWVmRGQ2dmpqcStYVDRFaFRCUklvRVl1WGFUT24vK2dmRG9oQ2JWdG85Uis5Y1hsbzhWaWEwc2lZOEJ2dGVQRzZOQ2YvSnZHWDNaQll0dEF5K0tGbXRKOWYvbGFIY0pEZ1FRbU9pSWNmL21YTlBIbWYrejM0bmcxUlVlSzAxWS9wQWxYWGtTUjVFVERqS25sZzRlcHExYWtjcG9wMm80bjMzMkxtai8yWVJWcXVhOG5KUHh0QmFUOGczYnZIUm8yZDNhcTR4WkhObXYwbVo5U3NhMVZ6eDEvUnFwakkxME5YZFBLTTRLMDFVK2FxSU8vZVczNTR2cWFZNDh2M3dvTS96RURDVVNoV0N5ZkwwNjdQTjZxNVdNTFRjZEg4dHJPL296cCtFM3o1NnJqMW44MnpZQ0JvMEFDTWViOE16Vmk0ZEdtR1FwMXRUcjRXOWVWcjQ4Z2Urb25kNmg1MFllc1k1UXpXQmNaQm9ZQ0NVQjBWRFptK2Vlc1k1VFZqaHVqamp1dXNZNkJLdHN6dzcwbWxldHFBekh1eTM5ZnRUc0xrUndLeEhPRitqb2RkTzJsWHQxT0d4VmF5NUxqckdPZ2lscFBQY0dyNXpLaTdiNzk2a3U4MnU2eEx3ckVjMjNMVHZQeVB2bjJxNzVTZnJnTTRZdG1sZU12L1lKMWpIMDBIakdqZlBNRy9FV0JlS3hwL3ZzMFp2a3k2eGg5S3JhMmFPSXRWNVdQRkJHdVFtUERubE5YbnE0OE1QYWlzN2x4dzJNVWlNY091djR5Yjg1SjkyWEVoNDlTeTVLUFdzZkFJSXc2OVlTcVBtRmViVFhEaHBaL0R1QW5Dc1JUdytiTjZYZUZVNStNWFBwWDFoRXdDQ09YTHJLT2NFQkRwaDZxdXZaeDFqSFFCd3JFVTBrdFVWSnRVZEh4aEhxWTZqcmF5d3RvaG1ESXRNT3NJNkFQRklpbm11YS96enJDZ0JTS3hmSmRXUWpQOEtQK3pEckNnTlZQbm1nZEFYMmdRRHhVR0RJazlwTFpGcmpJR2FhUS90N3FKbEVnUHFKQVBGUTdkclIxaElvMGRFMnpqb0FZR281NGgzV0VBYXNiRTliUFJGNVFJQjRLYmFtUUlWTTdyU01naGlFZVBsL1VuK0xvVnVzSTZBTUY0cUdhNXVIV0VTcFMxejZPNTBFQ0V4MmsrUHJzUjE5NGFOVlBGSWlIZkg3Mm96OGg3WXdRM2tGS1lVaTlkUVQwZ2ZlQmVLajNENjlxdzNYL1loMmpJcVh0TzZ3am9BS2wxM3VDMnNaMlB2K1NkUVQwZ1FMeDBLNlhmNi9uVHp2SE9nWXliUGVXMTRQYXhrSzdMcGdYbk1MeVVHa0hSL05JVnUvbTE2d2pWS1MwYzVkMUJQU0JBdkhRN3EwOTFoRUFyM0JRNVNjS3hFTzdYNmRBZ0xmYXZXMjdkWVFRSlg3blFWb0Z3cldXQ25DMEJleGw5MjdyQkNGcVRucUF0QXBrYkVyakFBRDJHSm4wQUdrVkNJK1JBa0M2RW4vWWgxTllBSkJOaVM4UGtWYUJERWxwSEFCQVN0SXFFTzcyQW9CMEpiNG1FanQyQUVBc0ZBZ0FJQllLQkFBUUN3VUNBSWlGQWdFQXhFS0JBQUJpb1VBQUFMRlFJQUNBV0NnUUFFQXNGQWdBSUJZS0JBQVFDd1VDQUlpRkFnRUF4RUtCQUFCaW9VQUFBTEZRSUFDQVdDZ1FBRUFzRkFnQUlCWUtCQUFRQ3dVQ0FJaUZBZ0VBeEZLYjBqamRTWHhweHgzWGFFam41Q1MrMnRUbTc5K25sNzkwbVhXTWluVGNkcldHVERuRU9nWUdhT2RMTCt0M0h6N1JPc2FBRlZ0SDZwQjdiN2VPa1lqZUxWdjF6UHYvS29tdmZpeUpMMzJydEFwa1N4SmYyakI5aWhxNkRrL2lxMDMxL09vSjZ3Z1ZxNXQwa0JwbnpiU09nUUVxZEQ5cEhhRWloV0pOWnJldjNrMmJrL3JxMTVMNjRqZHdDc3REdGVQR1dFZW9XTVBVVHVzSXFFRE4wS0hXRVNwU2Z4aXpXeDlSSUI2cXFhKzNqbEN4bXFaaDFoRlFnWnJtNGRZUktsS29yN09PZ0Q1UUlCNnFhV20yamxDUjJuRnQvSUFIcHRqU3JKcmhUZFl4QnF3WVdPSGxCUVhpb2JxRHhsbEhxTWpRMmUrMGpvQUtGZXBxMWZpdUx1c1lBMWJYUHQ0NkF2cEFnWGlvcm0yVWFob2JyR01NR0FVU3BwRCszdXJhd3pxb3lnc0t4RWZGb29iT25XMmRZc0NHelp0akhRRXhESnYzcDlZUkJxeCswa1RyQ09nREJlS3Bwdmx6clNNTVNMRjVoSWJPbVdVZEF6RTB6WnNUekV5My9yRHNQZStWQlJTSXAxb1dMN1NPTUNETml4YW9VQ3hheDBBTU5VM0ROSHpCQjYxakhGQzBmVFVjZnBoMURQU0JBdkZVL2VTT0lHWWhJMDlhYkIwQmd6RHlwTCsyam5CQXc0ODVrdHZFUFVXQmVLejlta3RVTzM2c2RZeCtqVjUybW9ZRmRLMEcreHB4N0h5MW52SUo2eGo5cWp0b3ZDWmM5V1hyR09nSEJlS3hJVk1PMGNHM1gyMGRvMDlSY1V5NDdBTHJHQmlzbWhxMVgzdXBHbytZWVoya1R4MjNYMU9lamNOUEZJam5oczJibzVZbHgxbkhlSnRDZlozYXI3N1lPZ2FxcEZBc2FzSlZYL0h1V2xZME0yS0c2emNLSkFBVHJyeklxL3ZneDE1NGRpWVhzY3l6YUVjOWV0bHAxakgrS0pwMWpMLzBpOVl4Y0FBVVNBQnEyMGFwNDQ2dmUzR0VPUHlZSXpYbTNET3NZeUFCNHk0K1QzVWQ3ZFl4eWpQY2pqdXVVYkcxeFRvS0RvQUNDVVIwaEhqUTlWOHp6VkE3Wm5UNUJ4dlpGQjJnakRyOWs5WXhOUEhHSzRONlNqN1BLSkNBakR4cHNjWmYrZ1d6OFVkOTlwVHlnNFBJcmxHbkxqVTlYZHArOWNYZVhmTkQveWlRd0xTZC9SbU4rTkJScVkvYmVNUU10WjM1cWRUSFJicUtyUzNxZlBCN0dqTDEwSFFITGhRMDhjWXJOT3IwY042U0NBb2tTQWZkZUlYYXp2bmI4ajN5U1NyVTE2bnA2SG5sMTlWMlBudzNEM1BsUkYxSHV3NTcvRDVOdlBrZk5lejk3MVdoTnRrWGw5WlA3bERITjYvam9kUUFVU0FCcWgzZHF2SC81M3dkL3R4ak92aGIxMVg5YUhIUHVmQVRkZml6aitxUS83aGRMWi80U3hVQ2ZNa1Y0cXRwYk5ESXBZdDA2SS91MUxTbkgwcGs1OTR3ZllvbWZmY21UWHZtWjJwWnRLRHEzNC9rVVNDQmExNzBJVTE1NHNmbGM4ZlZlQlh1a0dtZFZmMCtoQytha1V5ODhRcU5yOUtEbzNYdDQzVFE5WmVWdDdNUkM0K3V5bmZDQmdXU0FXK2RNWXo1d2xteDNnNVlQN2xEWTVjdlUrZFA3MHIvL0RlQzBMYnN0UEpPZjh5NVo4UzYzYmRoeHRROU00NW5IL1Y2K1JRTVhLRlVLaVU2UUhkaFF2VExFa20zVnZ1N3AzVC9rQWZhK2xEcTdkWFdCeDdTOWxWUHErZVhUNmkwWTZlMnJmeU5TajNidEx0bm0rbzdKNVVMbzdadFZQazB3ckM1czcyNC94OWgyYkZtcmJhdWVFVGJuM3hLdXpaczFMWmZyOUsyN2lmTDIxWjBFRk5lSHFWWUxQOWEzczU0YjB5ZmVqZHQxaE10MDVMNDZrc2tuVGV6OUdJUzMxMlc3TlV4bUlobUpFM3o1d2F4bWkvQ0ZSVUY2MVRsRzZld0FBQ3hVQ0FBZ0Znb0VBQkFMQlFJQUNBV0NnUUFFQXNGQWdDSWhRSUJBTVJDZ1FBQVlxRkFBQUN4VUNBQWdGZ29FQUJBTEJRSUFDQVdDZ1FBRUFzRkFnQ0loUUlCQU1SQ2dRQUFZcUZBQUFDeFVDQUFnRmdvRUFCQUxCUUlBQ0FXQ2dRQUVBc0ZBZ0NJaFFJQkFNUkNnUUFBWXFGQUFBQ3hVQ0FBZ0Znb0VBQkFMQlFJQUNBV0NnUUFFQXNGQWdDSUplZ0MyZDJ6elRvQ0FPUlcyQVd5WmF0MUJBQVlsTjFiWHJlT0VGdlFCZEs3WWFOMUJBQVlsTjROcjFwSGlDM29BdG14WnExMUJBQVlsQjFybnJPT0VGdmdCUkx1SHp3QVJIYXVmY0U2UW14QkY4aTJKNSt5amdBQWc5S3o4amZXRVdJTHUwQisrWVJLdmIzV01RQWd0bWcvRnFxZ0M2UjMwMlp0WnhZQ0lGQzdlN2FwNTdGdTZ4aXhCVjBna2RmdSt5L3JDQUFReTViN1Z3UjlGaVg0QW5uMWh0dWwzdDNXTVFDZ1l1WDlWOENDTDVCdFR6NmxiYXRXVzhjQWdJcjBQTmF0VGQrNUo4a2h0aVQ1NVVxeFFEWWwrZVVoWDRRQ2tFK3YzbkpuMGtNa2ZtNHMrQm1JWEpNRFFEQjZlN1h4dHU4a1BVcFAwZ09rVlNEcmsvenlyVDk5Tk1tdkI0Q3FldjBYSzdWci9SK1NIaWJSTXo5S3NVQTJKUG5sMFF3a2hiOE1BS2lLclQ5NU9JMWhFdDN2S2lzemtOS3VYZnI5NWRjbU9RUUFWTTNXLy9wWkdzT3NTM3FBTkMraUozbytidjNsMTJySDZ0OGxPUVFBRE5ydUxWdTE1ZjZmcGpIVW1xUUhTUE1pK3ZOSmZubHB4MDZ0K1lzVHRQMnBaNUljQmdCaTI3bnVsZkorYXZkcmlkOWh1eWJwTXo5S3VVQVMzN052LyswemVucnVSN1JyM1N0SkR3VUFGZG5kczAyL08vYjR0SzUvM0ovR0lHa1dTT0xuNHlLNzF2OUJhNDgvSStqbEFRQmt6NHRuTFZkUGVzK3NQWmJHSUdrV1NHcHZmOXB5L3dxOWN0RVZhUTBIQVB1MThWL3Ywb2JyL2lYTklUTTNBMG4wR3NqZVhyN284alFlMUFHQS9Zb09hSjgvK2F3MGg5d2thVlVhQTZWWklFK25PRmJaYzUvOHJMYXZTbjFZQUNqYnR2STNldmFqbnlwZi8waFJhbWQ3MGl5UTM2WTRWbG1wdDFmcnYzWk4yc01DUVBsNjdKcGpqeSsvdHlobHFSMDFwMzBONUVjcGpsZTI0WWJidGZiam45YnJqenllOXRBQWNtcjdVOC9vZHd0UDFNNFhVcmwzYUc4cjBob283Y1VVejAxNVBLbFVLbC9BV3YwL0Z1aTVrejlYZm9nSEFKSlE2dTNWeXhkOFRhdW16dFhyUC91RlZZeFVMcUJIQ3FWU0tkRUJ1Z3NUOXZtZkpIVWxPdWgrREpsNnFBNys5ZzFxbUQ3RktnS0FESXBtRzg5OThyUGxpK2FHTmtrYUkybkhHLy9Eek5LTGlRMW1zWno3ZFFaai90SDJWVTlyOWJ1UEtSOGxwSHhoQzBCRy9lR2FiK2lwR2UrM0xvL0lMVzh0ajZSWnpFQWFKVDBycVMzUmdRZWdmbktISnQ5emEzbFdBZ0NWZXYyUngvWENaODd6NVoxRXZaSU8yM3NOckt6TlFIb2tYVzR3N2o1MnJGbXJwNDljbFBSckpRRmswQ3VYL0ZQNTJxb241U0UzKzBoOEFjVzNzcGlCUkpyY2c0WE5pUTVlZ1lhdXd6WDZqSlBWdk9oREtyYTJXTWNCNEtIZFBkdTArYTU3eTZlc3RqN3drSFdjdDRwbUh6TWxQYm4zUDBoeUJtSlZJSkVMSlMxUGRQQVlDdlYxR3JIZ2cycFp1a2pEanpsU05ZME4xcEVBR05xOVphdTJybmlrZkRmbjV1L2NZL0ZjeDBEY0tlbGpmZjJEckJaSXZhUnJKWjJVYUlCQnFCazJWQTEvTWtPMWJhMnFIZHVtMnJaUktyWTBxMlpFMDU1LzNqUlV4ZUhEcldNQ0dJUmQ2MTdSRy92QjByYnQ2dDJ3VWIwYk4yblh5Ny9YdGllZjByYnVmUTdxZmZPZmtoYjM5d2JDckJiSUcrNlZkRlNpSVFBZ20xWkxtckcvTzYreWRoRjliNTl4NSs4QUFKVTVLODNiZHZmbVE0RkVEWHFmZFFnQUNNeDFrdTYyRE9CRGdVUytZUjBBQUFLeXpzMCtUUGxTSU45TmN3bGlBQWpjYmU2Wk9sTytGRWlQdXdYTjdGd2VBQVRrSnVzQThxaEFJbzlJZXJlazcxa0hBUUJQUFNycHp5U3R0QTRpendwRTdnOWxvYVN2V0FjQkFNL2NKbW1PcEo5WUIzbURid1h5aGkvNHNsNFdBSGpnTGtrbisvYklnNjhGRXZtOHBIT3NRd0NBc1Jza2ZkVEhhOFErRjBqa3E2NTFkMXNIQVFBRGwwajZsRzh6anpmNFhpQnlkeHQ0Y2NjQkFLUWtLb3ovSmVrODZ5RDdFMEtCeUozT2VzdzZCQUNrNUFwSi8yUWQ0a0JDS1pDTmt0N0xoWFVBT1hDWHU1SEllNkVVaU53RnBHZ21Na1hTMzB0YTRldDVRUUNvMEs4ay9XLzNMTnhISkcyM0RqUVFQaXpuUGhqVEpWMGxhWDZTZ3dCQVFwNlVkSm83SUU1RTFwZHpINHpvRC84RGtyNWtIUVFBS3JCTzB2SHVYUjZKbFVmU1FpK1FOMXpvcnBIY1pSMEVBQTdnSVVuLzB6MVpIclNzRklqY1g4cEhKQjBzNlFKSmE2d0RBWUN6M3QwRTlFNTNzTHZhT2xBMWhINE41RURtdURMNWM4c1FBSEpwaXpzcmNwdmxpNStTdkFaU205ZzMreUdhbFJ3anFVUFNYRWtMSk0yVzFHa2RERUFtclhQN25mdGRjV3l3RHBTa3JNOUE5bWU4cEpHU29vQU5rcG9sRGJNTzVVUUZkN1oxaUFwZEpPa0Y2eEFZc0VaSlYxcUhxTUFMYmh2enhRNUp2M2Z2TXRyb2ZyOWUwdXZXd2ZhVzVBd2s4UUpCNWJvTEUrYjZ0R1R6QU0wY2U4SG5WNDc5MHVldGMrQUEzRUZkczl2eGhXSmx0STBsdVRORTViSjBFUjBBa0NJS0JBQVFDd1VDQUlpRkFnRUF4RUtCQUFCaW9VQUFBTEZRSUFDQVdDZ1FBRUFzRkFnQUlCWUtCQUFRQ3dVQ0FJaUZBZ0VBeEVLQkFBQmlvVUFBQUxGUUlBQ0FXQ2dRQUVBc0ZBZ0FJQllLQkFBUUN3VUNBSWlGQWdFQXhFS0JBQUJpb1VCUUxVT3RBeURUaXRZQnNLOUNxVlN5em9DOWRCY216SlgwRStzY0Zmb2JTVGNtUGNqTTBvdEpENUY1M1lVSjBTL05ralphWjZuQUdrbUhwREVRMjlqQTFWb0hRSjhLMWdGaStMS2t2OTNQUDYrVE5GcFN2ZnQ5OUZQNm9LUmVTZmRKK3A2azdTbm16YnQ2NndBVk9ralN6dy93LzRuMlp5TWtEWGMvUTlGLzQ0OGtyWkowaTZTVktXWE5EUXJFVHlIK3ZVeHduNEdLam9BUGQ3OC8xZjJRZjFMU0l3bmx3OXNOc3c1UW9laWdZMWFNZjIraCsvVnNTV3NsWFM3cE9razlWYzZYUzF3RDhkUGoxZ0VNVEpYMHNLUTdKSTJ6RHBNREljNXlCNnREMHBXUy9sdlNZdXN3V1VDQitDblBmeStMWFpGMFdRZkp1RHhmbE81d0J5b1hXd2NKWFo1M1ZEN2JaaDNBV0ljcmtUbldRVEpzazNVQUQ1d3I2YVBXSVVKR2dmaHBoM1VBRHpSSytxNmtkdXNnR2JYRk9vQW56ckFPRURJS3hFKzd1R09rck0xZFZCOWpIU1NEZXRqR3lvNlVkR2xPcndrTkdnWGlyeDlZQi9ERUJFbExyRU5rRk52WUhtZEwrbXZyRUNHaVFQejFnSFVBajh5MkRwQlJiR052T3QwNlFJZ29FSDg5d0wzcWZ6VEZPa0JHc1kyOWFhNmtWdXNRb2FGQS9MVkYwdDNXSVR6UllSMGdvOWpHM2xSMEpZSUtVQ0IrdThrNmdDZGFjLzdjUXBMWXh0NDAxVHBBYUNnUXYvM0FMZkdSZDFGNU5GbUh5Q2kyc1RkeENxdENGSWpmZWlWOVF0STY2eURHU3U3UEF0WEhOdlltbnIrcUVBWGl2OGNsZlN6bk85Q05QUGlXS0xheFBaNjBEaEFhQ2lRTUs5d3Fvbm4xdkhXQUhNajdOaFo1eURwQWFDaVFjSnpuZnNqejZDbnJBRGx4bmx2eVBJOVc1dmkvUFRZS0pCeTlidUczMWRaQkRPUnhlWHNMMFRaMmpYVUlJemRZQndnUkJSS1c5WktPbGJUWk9raktmbVFkSUVldWsvU0NkWWlVdlpEajRod1VDaVE4cTkzaWIzbXh4aTN0am5Sc2tQVGVuTjNhZXc1M1lNVkRnWVRwY3ZjZThhenJrZlJ4N2c1SzNWcFhJbm5ZeG40bDZUYnJFS0dpUU1JVTdWaVBsdlIrU1YrVjlFdnJRRlVXSFExK1U5SjdlRWU2bVEwWjM4YmticzQ0MVRwRXlDaVFzRDNncHQvdmxEUXpJOHR6cjVUMGJ2ZHEyeWVzdytCdDI5am5yY05VU1hRQWRvRmJ1b1FEbEVHZ1FMSmpwYnZBL29sQWIwZDhWZExKcmdoNTBaR2ZMcGMwUTlJbGdXNWpPOXpkVnRNa1hXUWRKZ3NLcFZMSk9nUDIwbDJZVUkydm1leFdGNTN1MXZqcGxOUXNhVlkxdnJ3S05rdjZyYnV6TERvSy9McWtsdzcwTDgwc3ZaaE91Z3lyMHZhbFByYXhHVzc3YXFqV0FJTVU3ZHgrN2NydUpuZE41NER2Z21jYkc3ai9Id0FBLy8remMrOTdsVjZQVmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vYnV0dG9uXCIpO1xuY29uc3QgcGljdHVyZV8xID0gcmVxdWlyZShcIi4vcGljdHVyZVwiKTtcbmNvbnN0IGJhZGdlXzEgPSByZXF1aXJlKFwiLi9iYWRnZVwiKTtcbmNvbnN0IHN0YXJ0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zdGFydGVyXCIpKTtcbmNvbnN0IHNsaWRlb3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInNsaWRlb3V0XCIpKTtcbmxldCBUd2l0dGVyQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKCgpID0+IHtcbiAgICBsZXQgVHdpdHRlckFkYXB0ZXIgPSBjbGFzcyBUd2l0dGVyQWRhcHRlciB7XG4gICAgICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0cyA9IHtcbiAgICAgICAgICAgICAgICBidXR0b246IHRoaXMuYWRhcHRlci5jcmVhdGVXaWRnZXRGYWN0b3J5KGJ1dHRvbl8xLkJ1dHRvbiksXG4gICAgICAgICAgICAgICAgcGljdHVyZTogdGhpcy5hZGFwdGVyLmNyZWF0ZVdpZGdldEZhY3RvcnkocGljdHVyZV8xLlBpY3R1cmUpLFxuICAgICAgICAgICAgICAgIGJhZGdlOiB0aGlzLmFkYXB0ZXIuY3JlYXRlV2lkZ2V0RmFjdG9yeShiYWRnZV8xLkJhZGdlKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IFt7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcIm1haW5bcm9sZT1tYWluXVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0U2VsZWN0b3I6IFwiYXJ0aWNsZS5jc3MtMWRiamM0blwiLFxuICAgICAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFBPU1RfU09VVEg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT1ncm91cF0gPiAqOmxhc3QtY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBPU1RfQ09NQk86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJcIiAvL1RvRG9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBQT1NUX1BJQ1RVUkU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbbGFuZ10gPiAqOmxhc3QtY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBPU1RfQVZBVEFSX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMThreHh6aC5yLTF3Ymg1YTIuci0xM3F6MXV1ID4gKjpsYXN0LWNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBQT1NUX1VTRVJOQU1FX0JBREdFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LmNzcy0xZGJqYzRuLnItMTh1Mzdpei5yLTF3Ymg1YTIuci0xZjZyN3ZkID4gKjpmaXJzdC1jaGlsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogJ2JlZ2luJyAvLyBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBQT1NUX1NUQVJURVI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci0xOHUzN2l6LnItMWgwejVtZC5yLTFqb2VhMHIgPiAqOmZpcnN0LWNoaWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiAnYmVnaW4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRUeXBlOiAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ1BPU1RfRVZFTlQnLFxuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U6IChub2RlLCBjdHgsIGVtaXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaWtlQnRuID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTFkYmpjNG4uci0xOHUzN2l6LnItMXd0ajBlcC5yLTE1NnEya3Muci0xbWRiaHdzIGRpdltyb2xlPWJ1dHRvbl1bZGF0YS10ZXN0aWQqPVwibGlrZVwiXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaWtlQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS10ZXN0aWQnKSA9PT0gJ2xpa2UnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1pdChjdHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubGlrZTogKG5vZGUsIGN0eCwgZW1pdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpa2VCdG4gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtMWRiamM0bi5yLTE4dTM3aXouci0xd3RqMGVwLnItMTU2cTJrcy5yLTFtZGJod3MgZGl2W3JvbGU9YnV0dG9uXVtkYXRhLXRlc3RpZCo9XCJsaWtlXCJdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpa2VCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXRlc3RpZCcpID09PSAndW5saWtlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXQoY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVyOiAobm9kZSwgY3R4LCBlbWl0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpZGVvdXQgPSBuZXcgc2xpZGVvdXRfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhbmVsJzogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lbnUnOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b2xlcmFuY2UnOiA3MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NpZGUnOiAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVvdXQub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXQoY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVvdXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodHdlZXROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIG9mIHJpZ2h0IG1hcmdpbiB0byBsYXN0IHR3aXR0ZXIncyBuYXRpdmUgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSAoX2EgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy0xZGJqYzRuLnItMW1sd2xxZS5yLTE4dTM3aXouci0xOGt4eHpoLnItMWgwejVtZCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoJ3ItMThreHh6aCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoJ3ItMW1sd2xxZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3ItMWl1c3ZyNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3ItMTZ5MnVveCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhIHRpbWUnKS5wYXJlbnROb2RlLmhyZWYuc3BsaXQoJy8nKS5wb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAoX2IgPSB0d2VldE5vZGUucXVlcnlTZWxlY3RvcignZGl2W2xhbmddJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yRnVsbG5hbWU6IChfYyA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdhOm50aC1jaGlsZCgxKSBkaXYgc3BhbiBzcGFuJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yVXNlcm5hbWU6IChfZCA9IHR3ZWV0Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuY3NzLTkwMW9hby5jc3MtYmZhNmt6LnItMXJlN2V6aC5yLTE4dTM3aXouci0xcWQweGhhLnItYTAyM2U2LnItMTZkYmE0MS5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMCA+IHNwYW4uY3NzLTkwMW9hby5jc3MtMTZteTQwNi5yLTFxZDB4aGEuci1hZDl6MHguci1iY3FlZW8uci1xdnV0YzAnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmlubmVyVGV4dC5yZXBsYWNlKCdAJywgJycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvckltZzogKF9lID0gdHdlZXROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtMWRiamM0bi5yLTFhd296d3kuci0xOGt4eHpoLnItNWYycjVvIGltZycpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci1rdTF3aTIuci0xajN0NjdhLnItbTYxMWJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgUFJPRklMRV9BVkFUQVJfQkFER0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci1vYmQwcXQuci0xOHUzN2l6LnItMXc2ZTZyai5yLTF3dGowZXAgPiAqOmxhc3QtY2hpbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6ICdlbmQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUFJPRklMRV9VU0VSTkFNRV9CQURHRToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLTE1ZDE2NHIuci0xZzk0cW0wIGRpdi5jc3MtOTAxb2FvLnItaGt5cmFiLnItMXFkMHhoYS5yLTFiNnlkMXcuci0xdnIyOXQ0LnItYWQ5ejB4LnItYmNxZWVvLnItcXZ1dGMwID4gKjpsYXN0LWNoaWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUFJPRklMRV9CVVRUT05fR1JPVVA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci1vYmQwcXQuci0xOHUzN2l6LnItMXc2ZTZyai5yLTFoMHo1bWQuci1kbm1yenMgPiAqOmZpcnN0LWNoaWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBcImJlZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFR5cGU6ICdwcm9maWxlJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dEV2ZW50OiAnUFJPRklMRV9FVkVOVCcsXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvRG86IFRoaXMgc2VsZWN0b3JzIGFyZSB1bnN0YWJsZSwgYmVjYXVzZSBUd2l0dGVyIGhhcyBjaGFuZ2VkIGNsYXNzIG5hbWVzIHRvIGF1dG8tZ2VuZXJhdGVkLlxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlcjogKHRpdGxlSW5mb05vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIG9mIGxlZnQgbWFyZ2luIHRvIHVzZXJuYW1lIGluIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUluZm9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtMWRiamM0bi5yLTE1ZDE2NHIuci0xZzk0cW0wID4gZGl2LmNzcy0xZGJqYzRuLnItMXdiaDVhMi5yLWRubXJ6cy5yLTFueTRsM2wnKS5zdHlsZS5tYXJnaW4gPSAnMHB4IDBweCAwcHggMzJweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvckZ1bGxuYW1lOiAoX2EgPSB0aXRsZUluZm9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtMWRiamM0bi5yLTFhd296d3kuci0xOHUzN2l6LnItZG5tcnpzID4gZGl2ID4gc3BhbjpudGgtY2hpbGQoMSkgPiBzcGFuJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yVXNlcm5hbWU6IChfYiA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3RvcignZGl2LmNzcy05MDFvYW8uY3NzLWJmYTZrei5yLTFyZTdlemguci0xOHUzN2l6LnItMXFkMHhoYS5yLWEwMjNlNi5yLTE2ZGJhNDEuci1hZDl6MHguci1iY3FlZW8uci1xdnV0YzAgc3BhbicpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5uZXJUZXh0LnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9ySW1nOiAoX2MgPSB0aXRsZUluZm9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ2EgPiBkaXYuY3NzLTFkYmpjNG4uci0xYWRnM2xsLnItMXVkaDA4eCA+IGRpdi5yLTFwMGR0YWkuci0xcGkydHN4LnItMWQyZjQ5MC5yLXU4czFkLnItaXBtNWFmLnItMTNxejF1dSA+IGRpdiA+IGltZycpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogXCJtYWluW3JvbGU9bWFpbl1cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFNlbGVjdG9yOiBcImRpdi5jc3MtMWRiamM0bi5yLWFxZmJvNC5yLTE0bHc5b3Quci1teTVlcDYuci1ydWxsOHIuci1xa2xtcWkuci1ndGRxaXouci1pcG01YWYuci0xZzQwYjhxXCIsXG4gICAgICAgICAgICAgICAgICAgIGluc1BvaW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgSEVBRElOR19VU0VSTkFNRV9CQURHRToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImgyW3JvbGU9aGVhZGluZ10gZGl2LnItMTh1MzdpeiAgPiBkaXYuY3NzLTFkYmpjNG4uci0xYXdvend5LnIteG9kdXU1LnItMTh1Mzdpei5yLWRubXJ6cyA+ICo6bGFzdC1jaGlsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogXCJlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0RXZlbnQ6ICdIRUFESU5HX0VWRU5UJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogVGhpcyBzZWxlY3RvcnMgYXJlIHVuc3RhYmxlLCBiZWNhdXNlIFR3aXR0ZXIgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZXMgdG8gYXV0by1nZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRCdWlsZGVyOiAodGl0bGVJbmZvTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlRnVsbG5hbWU6IChfYSA9IHRpdGxlSW5mb05vZGUucXVlcnlTZWxlY3Rvcignc3Bhbi5jc3MtOTAxb2FvLmNzcy0xNm15NDA2LnItMXFkMHhoYS5yLWFkOXoweC5yLWJjcWVlby5yLXF2dXRjMCA+IHNwYW4gPiBzcGFuJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbm5lclRleHQucmVwbGFjZSgnQCcsICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IFwibWFpbltyb2xlPW1haW5dXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRTZWxlY3RvcjogXCJkaXYuY3NzLTFkYmpjNG4uci0xbWkwcTdvLnItMWozdDY3YS5yLW02MTFieVwiLFxuICAgICAgICAgICAgICAgICAgICBpbnNQb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNVU1BFTkRFRF9VU0VSTkFNRV9CQURHRToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5jc3MtOTAxb2FvLmNzcy1iZmE2a3ouci1oa3lyYWIuci0xcWQweGhhLnItMWI2eWQxdy5yLXZ3MmMwYi5yLWFkOXoweC5yLWJjcWVlby5yLTNzMnUycS5yLXF2dXRjMCA+ICo6bGFzdC1jaGlsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogXCJlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0VHlwZTogJ3N1c3BlbmRlZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRFdmVudDogJ1NVU1BFTkRFRF9FVkVOVCcsXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvRG86IFRoaXMgc2VsZWN0b3JzIGFyZSB1bnN0YWJsZSwgYmVjYXVzZSBUd2l0dGVyIGhhcyBjaGFuZ2VkIGNsYXNzIG5hbWVzIHRvIGF1dG8tZ2VuZXJhdGVkLlxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0QnVpbGRlcjogKHRpdGxlSW5mb05vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZVVzZXJuYW1lOiAoX2EgPSB0aXRsZUluZm9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jc3MtOTAxb2FvLmNzcy1iZmE2a3ouci1oa3lyYWIuci0xcWQweGhhLnItMWI2eWQxdy5yLXZ3MmMwYi5yLWFkOXoweC5yLWJjcWVlby5yLTNzMnUycS5yLXF2dXRjMCA+IHNwYW4gPiBzcGFuJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYXR0YWNoQ29uZmlnKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlciA9IG5ldyBzdGFydGVyXzEuZGVmYXVsdCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hdHRhY2hGZWF0dXJlKHRoaXMuc3RhcnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG9EbzogcmVmYWN0b3IgaXRcbiAgICAgICAgYXR0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZXIuYXR0YWNoRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hdHRhY2hGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRvRG86IHJlZmFjdG9yIGl0XG4gICAgICAgIGRldGFjaEZlYXR1cmUoZmVhdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydGVyLmRldGFjaEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZGV0YWNoRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIEluamVjdChcImR5bmFtaWMtYWRhcHRlci5kYXBwbGV0LWJhc2UuZXRoXCIpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIFR3aXR0ZXJBZGFwdGVyLnByb3RvdHlwZSwgXCJhZGFwdGVyXCIsIHZvaWQgMCk7XG4gICAgVHdpdHRlckFkYXB0ZXIgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0YWJsZSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuICAgIF0sIFR3aXR0ZXJBZGFwdGVyKTtcbiAgICByZXR1cm4gVHdpdHRlckFkYXB0ZXI7XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVHdpdHRlckFkYXB0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGljdHVyZSA9IHZvaWQgMDtcbmNsYXNzIFBpY3R1cmUge1xuICAgIG1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuZWwpXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHsgaW1nLCBkaXNhYmxlZCwgaGlkZGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCBodG1sU3RyaW5nID0gYDxpbWcgc3JjPVwiJHtpbWd9XCIgLz5gO1xuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bm1vdW50KCkge1xuICAgICAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgfVxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmV4ZWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5ib3R0b20gPSAnMTVweCc7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUucmlnaHQgPSAnMTVweCc7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuc3RhdGUpLmluaXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnN0YXRlLmN0eCwgdGhpcy5zdGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5QaWN0dXJlID0gUGljdHVyZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGFwcGxldF9wbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9kYXBwbGV0LnBuZ1wiKSk7XG5jbGFzcyBTdGFydGVyIHtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLl9idXR0b25JZCA9IDA7XG4gICAgICAgIHRoaXMuX292ZXJsYXkgPSBDb3JlLm92ZXJsYXkoeyB1cmw6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKCdzdGFydGVyLmh0bWwnKSwgdGl0bGU6ICdJZGVudGl0eSBNYW5hZ2VtZW50JyB9KTtcbiAgICAgICAgY29uc3QgeyBidXR0b24gfSA9IHRoaXMuYWRhcHRlci53aWRnZXRzO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgIHN0YXJ0ZXI6IChjdHgpID0+IHRoaXMub3BlblN0YXJ0ZXIoY3R4KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFBPU1RfU1RBUlRFUjogW1xuICAgICAgICAgICAgICAgIGJ1dHRvbih7XG4gICAgICAgICAgICAgICAgICAgIFwiREVGQVVMVFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGRhcHBsZXRfcG5nXzEuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWM6IChjdHgpID0+IHRoaXMub3BlblN0YXJ0ZXIoY3R4KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgb3BlblN0YXJ0ZXIoY3R4KSB7XG4gICAgICAgIHRoaXMuX292ZXJsYXkuc2VuZEFuZExpc3RlbignY3R4JywgeyBjdHgsIGJ1dHRvbnM6IHRoaXMud2lkZ2V0cyB9LCB7XG4gICAgICAgICAgICAnYnV0dG9uX2NsaWNrZWQnOiAob3AsIHsgdHlwZSwgbWVzc2FnZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gbWVzc2FnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLndpZGdldHMuZmluZChiID0+IGIuaWQgPT09IGlkKTtcbiAgICAgICAgICAgICAgICAoX2EgPSBidXR0b24gPT09IG51bGwgfHwgYnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b24uZXhlYykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYnV0dG9uLCBjdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hdHRhY2hGZWF0dXJlKHRoaXMpO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGV0YWNoRmVhdHVyZSh0aGlzKTtcbiAgICB9XG4gICAgYXR0YWNoRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKC4uLihmZWF0dXJlLmNvbmZpZy5QT1NUX1NUQVJURVIgfHwgW10pLm1hcChjID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGMpLCB7IGZlYXR1cmUsIGlkOiArK3RoaXMuX2J1dHRvbklkIH0pKSkpO1xuICAgICAgICBkZWxldGUgZmVhdHVyZS5jb25maWcuUE9TVF9TVEFSVEVSO1xuICAgIH1cbiAgICBkZXRhY2hGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy53aWRnZXRzID0gdGhpcy53aWRnZXRzLmZpbHRlcih3ID0+IHcuZmVhdHVyZSAhPT0gZmVhdHVyZSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhcnRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=