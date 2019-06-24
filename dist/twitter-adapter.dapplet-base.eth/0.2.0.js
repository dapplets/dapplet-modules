(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Widget = /** @class */ (function () {
    function Widget(config) {
        this.onExec = function () { };
        this.state = this.createState(config);
    }
    Widget.prototype.createState = function (state) {
        var me = this;
        return new Proxy(state, {
            set: function (target, property, value) {
                target[property] = value;
                me.mount();
                return true;
            }
        });
    };
    return Widget;
}());
exports.Widget = Widget;

},{}],2:[function(require,module,exports){
"use strict";
// ==UserScript==
// @name TwitterAdapter
// @type adapter
// @description Adapter for twitter.com
// @author Dapplets Team
// @version 1
// @familyId TwitterAdapter
// ==/UserScript==
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
var widgets_1 = require("./widgets");
var doc = document; //host document we are working on (inpage.js)
var TwitterAdapter = /** @class */ (function () {
    function TwitterAdapter() {
        var _this = this;
        this.core = null;
        this.actionFactories = widgets_1.widgets;
        this.observer = null;
        this.features = [];
        this.widgetBuilders = [{
                isTwitterDesignNew: true,
                querySelector: "main[role=main]",
                insPoints: {
                    TWEET_SOUTH: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; },
                        selector: "main[role=main] div[data-testid=primaryColumn] section[role=region] article div[role=group]"
                    },
                    TWEET_COMBO: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; },
                        selector: "" //ToDo
                    }
                },
                // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
                contextBuilder: function (tweetNode) { return ({
                    id: tweetNode.querySelector('article a time').parentNode.href.substr(tweetNode.querySelector('article a time').parentNode.href.lastIndexOf('/') + 1),
                    text: tweetNode.querySelector('div[lang]').innerText,
                    authorFullname: tweetNode.querySelector('article a:nth-child(1) div span span').innerText,
                    authorUsername: tweetNode.querySelector('div.r-1f6r7vd > div > span').innerText,
                    authorImg: tweetNode.querySelector('article div img').getAttribute('src')
                }); },
            }, {
                isTwitterDesignNew: false,
                querySelector: "#timeline",
                insPoints: {
                    TWEET_SOUTH: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; },
                        selector: "#timeline li.stream-item div.js-actions"
                    },
                    TWEET_COMBO: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; },
                        selector: "" //ToDo
                    }
                },
                contextBuilder: function (tweetNode) { return ({
                    id: tweetNode.getAttribute('data-tweet-id'),
                    text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
                    authorFullname: tweetNode.querySelector('strong.fullname').innerText,
                    authorUsername: tweetNode.querySelector('span.username').innerText,
                    authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
                }); },
            }, {
                isTwitterDesignNew: false,
                querySelector: "#dm_dialog",
                insPoints: {
                    DM_SOUTH: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode; },
                        selector: "#dm_dialog li.DMInbox-conversationItem div.DMInboxItem"
                    },
                    DM_EAST: {
                        toContext: function (node) { return node.parentNode.parentNode.parentNode.parentNode; },
                        selector: "" //ToDo
                    }
                },
                contextBuilder: function (tweetNode) { return ({
                    threadId: tweetNode.getAttribute('data-thread-id'),
                    lastMessageId: tweetNode.getAttribute('data-last-message-id'),
                    fullname: tweetNode.querySelector('div.DMInboxItem-title .fullname') && tweetNode.querySelector('div.DMInboxItem-title .fullname').innerText,
                    username: tweetNode.querySelector('div.DMInboxItem-title .username') && tweetNode.querySelector('div.DMInboxItem-title .username').innerText,
                    text: tweetNode.querySelector('.DMInboxItem-snippet').innerText
                }); }
            }].map(function (cfg) { return new widgets_1.WidgetBuilder(cfg); });
        console.log('ContentAdapter  created');
        console.log('library from ContentAdapter', this.library);
        console.log("init adapter>");
        if (this.observer)
            return;
        if (!document || !window || !MutationObserver)
            throw Error('Document or MutationObserver is not available.');
        var OBSERVER_CONFIG = {
            childList: true,
            subtree: true
        };
        this.observer = new MutationObserver(function (mutations) {
            _this.widgetBuilders.forEach(function (widgetBuilder) {
                var e = doc.querySelector(widgetBuilder.querySelector);
                if (e && !widgetBuilder.observer) {
                    (widgetBuilder.observer = new MutationObserver(function (mutations) { return widgetBuilder.updateWidgets(_this.features, mutations); }))
                        .observe(e, OBSERVER_CONFIG);
                    widgetBuilder.updateWidgets(_this.features);
                }
                else if (!e && widgetBuilder.observer) {
                    widgetBuilder.observer.disconnect();
                    widgetBuilder.observer = null;
                }
            });
        });
        this.observer.observe(doc.body, OBSERVER_CONFIG);
    }
    TwitterAdapter.prototype.addFeature = function (feature) {
        this.features.push(feature);
    };
    __decorate([
        Load("common-lib.dapplet-base.eth", "0.1.0"),
        __metadata("design:type", Object)
    ], TwitterAdapter.prototype, "library", void 0);
    TwitterAdapter = __decorate([
        PublicName("twitter-adapter.dapplet-base.eth", "0.2.0"),
        __metadata("design:paramtypes", [])
    ], TwitterAdapter);
    return TwitterAdapter;
}());
exports.default = TwitterAdapter;

},{"./widgets":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("./widgets/button");
var oldButton_1 = require("./widgets/oldButton");
exports.widgets = {
    button: function (config) { return (function (builder, insPointName) {
        return createButton(builder, insPointName, config);
    }); },
    menuItem: function (_a) { return (function (builder, insPointName) {
        return console.error('menuItem is not implemented');
    }); } //ToDo: implement
};
var WidgetBuilder = /** @class */ (function () {
    //ToDo: widgets
    function WidgetBuilder(widgetBuilderConfig) {
        this.observer = null;
        console.log('WidgetBuilder constructor');
        return Object.assign(this, widgetBuilderConfig);
    }
    WidgetBuilder.prototype.updateWidgets = function (features, mutations) {
        var _this = this;
        Object.keys(this.insPoints).forEach(function (insPointName) {
            //console.log("updateWidgets.insPointName>", insPointName)
            features.forEach(function (featureConfig) {
                (featureConfig[insPointName] || [])
                    .forEach(function (widgetConstructor) { return widgetConstructor(_this, insPointName); });
            });
        });
    };
    return WidgetBuilder;
}());
exports.WidgetBuilder = WidgetBuilder;
function createButton(builder, insPointName, config) {
    // ToDo: calculate node from insPoint & view
    var insPoint = builder.insPoints[insPointName];
    var nodes = document.querySelectorAll(insPoint.selector);
    nodes && nodes.forEach(function (node) {
        if (node.getElementsByClassName(config.clazz).length > 0)
            return;
        var button = builder.isTwitterDesignNew ? new button_1.Button(config) : new oldButton_1.OldButton(config);
        button.mount();
        node.appendChild(button.el);
        button.onExec = function () {
            var tweetNode = insPoint.toContext(this.el);
            var context = builder.contextBuilder(tweetNode);
            config.exec.call(button, context);
        };
    });
}

},{"./widgets/button":4,"./widgets/oldButton":5}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var widget_1 = require("../common/widget");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.mount = function () {
        var _this = this;
        var _a = this.state, clazz = _a.clazz, img = _a.img, label = _a.label;
        var htmlString = "<div class=\"" + clazz + " css-1dbjc4n r-1iusvr4 r-18u37iz r-16y2uox r-1h0z5md\">\n            <div role=\"button\" data-focusable=\"true\" tabindex=\"0\" class=\"css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-bztko3 r-lrvibr\">\n                <div dir=\"ltr\" class=\"css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0\">\n                    <div class=\"css-1dbjc4n r-xoduu5\">\n                        <img height=\"18\" src=\"" + img + "\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr\">\n                        <div class=\"css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg\"></div>\n                    </div>\n                    " + (label ? "<div class=\"css-1dbjc4n r-xoduu5 r-1udh08x\">\n                        <span dir=\"auto\" class=\"css-901oao css-16my406 r-1qd0xha r-ad9z0x r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0\">\n                            <span dir=\"auto\" class=\"css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0\">" + label + "</span>\n                        </span>\n                    </div>" : '') + "\n                </div>\n            </div>\n        </div>";
        if (!this.el) {
            var div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            this.el = div.lastChild;
            this.el.addEventListener("click", function (e) {
                _this.onExec();
            });
        }
        else {
            this.el.innerHTML = htmlString;
        }
    };
    return Button;
}(widget_1.Widget));
exports.Button = Button;

},{"../common/widget":1}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var widget_1 = require("../common/widget");
var OldButton = /** @class */ (function (_super) {
    __extends(OldButton, _super);
    function OldButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OldButton.prototype.mount = function () {
        var _this = this;
        var _a = this.state, clazz = _a.clazz, img = _a.img, label = _a.label;
        console.log('btn mount', clazz);
        var htmlString = "<div class=\"" + clazz + " ProfileTweet-action\">\n                <button class=\"ProfileTweet-actionButton\" type=\"button\">\n                    <div class=\"IconContainer\">\n                        <img height=\"18\" src=\"" + img + "\">\n                    </div>\n                    " + (label ? "<span class=\"ProfileTweet-actionCount\">\n                        <span class=\"ProfileTweet-actionCountForPresentation\" aria-hidden=\"true\">" + label + "</span>\n                    </span>" : '') + "\n                </button>\n            </div>";
        if (!this.el) {
            var div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            this.el = div.lastChild;
            this.el.addEventListener("click", function (e) {
                _this.onExec();
            });
        }
        else {
            this.el.innerHTML = htmlString;
        }
    };
    return OldButton;
}(widget_1.Widget));
exports.OldButton = OldButton;

},{"../common/widget":1}]},{},[2]);
