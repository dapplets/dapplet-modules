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
var ScriptType;
(function (ScriptType) {
    ScriptType[ScriptType["CONTENT_ADAPTER"] = 0] = "CONTENT_ADAPTER";
    ScriptType[ScriptType["FEATURE"] = 1] = "FEATURE";
})(ScriptType || (ScriptType = {}));
var ControlTypes;
(function (ControlTypes) {
    ControlTypes[ControlTypes["INLINE_BUTTON"] = 0] = "INLINE_BUTTON";
    ControlTypes[ControlTypes["FLOATED_BUTTON"] = 1] = "FLOATED_BUTTON";
})(ControlTypes || (ControlTypes = {}));
var ContentAdapter = (function () {
    function ContentAdapter() {
        this.id = '1';
        this.version = '0.0.1';
        this.type = ScriptType.CONTENT_ADAPTER;
        this.requires = [];
        this.attachedFeatures = [];
    }
    ContentAdapter.prototype.onMutate = function (mutationsList) {
        for (var _i = 0, _a = this.attachedFeatures; _i < _a.length; _i++) {
            var feature = _a[_i];
            var buttons = feature.createControlElements({}, ControlTypes.INLINE_BUTTON);
            for (var _b = 0, buttons_1 = buttons; _b < buttons_1.length; _b++) {
                var button = buttons_1[_b];
                for (var _c = 0, mutationsList_1 = mutationsList; _c < mutationsList_1.length; _c++) {
                    var mutation = mutationsList_1[_c];
                    var targetContainers = mutation.target.querySelectorAll('li.stream-item div.js-actions');
                    for (var _d = 0, targetContainers_1 = targetContainers; _d < targetContainers_1.length; _d++) {
                        var container = targetContainers_1[_d];
                        if (container != null) {
                            var widget = container.querySelector("." + button.class);
                            if (widget == null) {
                                ContentAdapter.insertInlineButton(container, button);
                            }
                        }
                    }
                }
            }
        }
    };
    ContentAdapter.prototype.isSiteCompatible = function (doc) {
        return doc
            && doc.location
            && doc.location.hostname
            && doc.location.hostname === "twitter.com";
    };
    ContentAdapter.prototype.isPageCompatible = function (doc) {
        if (!doc)
            return false;
        var res = doc.querySelectorAll('#timeline .stream-item');
        return res && res.length > 0;
    };
    ContentAdapter.prototype.activate = function (doc) {
        var me = this;
        if (!window || !MutationObserver)
            throw Error('MutationObserver is not available.');
        me.observer = new MutationObserver(function (mutationsList) {
            me.onMutate.call(me, mutationsList);
        });
        me.observer.observe(doc.body, {
            childList: true,
            subtree: true
        });
    };
    ContentAdapter.prototype.deactivate = function (dom) {
        this.observer.disconnect();
    };
    ContentAdapter.prototype.attachFeature = function (feature) {
        this.attachedFeatures.push(feature);
    };
    return ContentAdapter;
}());
var BasicView = (function () {
    function BasicView(name, INSERT_POINTS) {
        this.name = name;
        this.INSERT_POINTS = INSERT_POINTS;
        this.attachedActionFactories = {};
    }
    BasicView.prototype.attachActionFactories = function (actionFactories, insPoint) {
        var _a;
        if (!this.attachedActionFactories[insPoint])
            this.attachedActionFactories[insPoint] = actionFactories;
        else
            (_a = this.attachedActionFactories[insPoint]).push.apply(_a, actionFactories);
    };
    BasicView.prototype.injectActions = function (doc) {
        var _this = this;
        this.attachedActionFactories.forEach(function (insPoint, actionFactories) {
            actionFactories.forEach(function (actionFactory) { return actionFactory(_this, insPoint); });
        });
    };
    BasicView.prototype.activate = function (doc) {
        this.startMutationObserver(doc);
        this.injectActions(doc);
    };
    BasicView.prototype.deactivate = function (doc) {
        this.stopMutationObserver(doc);
    };
    BasicView.prototype.stopMutationObserver = function (doc) {
    };
    return BasicView;
}());
var ContentAdapter = (function () {
    function ContentAdapter() {
        var _this = this;
        this.core = null;
        this.doc = null;
        this.views = [
            new (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                class_1.prototype.startMutationObserver = function (doc) {
                };
                return class_1;
            }(BasicView))("TIMELINE", ["TWEET_SOUTH", "TWEET_COMBO"]),
            new (function (_super) {
                __extends(class_2, _super);
                function class_2() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                class_2.prototype.startMutationObserver = function (doc) {
                };
                return class_2;
            }(BasicView))("DIRECT_MESSAGE", ["DM_SOUTH", "DM_EAST"]),
        ];
        this.actionFactories = {
            button: function (config) { return (function (view, insPoint) {
                return _this.insertInlineButtonInToView(view, insPoint, config);
            }); },
            menuItem: function (_a) { }
        };
    }
    ContentAdapter.prototype.init = function (core, doc) {
        this.core = core;
        this.doc = doc;
        this.initRouteObserver(doc);
    };
    ContentAdapter.prototype.initRouteObserver = function (doc) {
    };
    ContentAdapter.prototype.onRouteChanged = function (viewActivating, viewDeactivating) {
        for (var _i = 0, viewDeactivating_1 = viewDeactivating; _i < viewDeactivating_1.length; _i++) {
            var view = viewDeactivating_1[_i];
            view.deactivate(this.doc);
        }
        for (var _a = 0, viewActivating_1 = viewActivating; _a < viewActivating_1.length; _a++) {
            var view = viewActivating_1[_a];
            view.activate(this.doc);
        }
    };
    ContentAdapter.prototype.registerFeature = function (feature) {
        var _this = this;
        var actionConfig = feature.getAugmentationConfig(this.actionFactories, this.core);
        actionConfig.forEach(function (viewId, viewConfig) {
            var view = _this.views[viewId];
            viewConfig.forEach(function (insPoint, actionFactories) {
                view.attachActionFactories(actionFactories, insPoint);
            });
        });
    };
    ContentAdapter.prototype.insertInlineButtonInToView = function (view, insPoint, button) {
        var nodes = document.querySelectorAll('li.stream-item div.js-actions');
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            this.insertInlineButton(node, button);
        }
    };
    ContentAdapter.prototype.insertInlineButton = function (node, button) {
        var element = this.createElementFromHTML("<div class=\"" + button.class + " ProfileTweet-action\">\n            <button class=\"ProfileTweet-actionButton\" type=\"button\">\n                <div class=\"IconContainer\">\n                    <img src=\"" + button.icon + "\">\n                </div>\n                <span class=\"ProfileTweet-actionCount\">\n                    <span class=\"ProfileTweet-actionCountForPresentation\" aria-hidden=\"true\">" + button.text + "</span>\n                </span>\n            </button>\n        </div>");
        element.addEventListener("click", function (event) {
            var tweetNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var context = {
                id: tweetNode.getAttribute('data-tweet-id'),
                text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
                authorFullname: tweetNode.querySelector('strong.fullname').innerText,
                authorUsername: tweetNode.querySelector('span.username').innerText,
                authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
            };
            button.handler(context);
        });
        node.appendChild(element);
    };
    ContentAdapter.prototype.createElementFromHTML = function (htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    };
    return ContentAdapter;
}());
