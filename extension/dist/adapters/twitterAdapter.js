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
var BasicView = (function () {
    function BasicView(name, INSERT_POINTS) {
        this.name = name;
        this.INSERT_POINTS = INSERT_POINTS;
        this.isActive = false;
        this.observer = null;
        this.attachedActionFactories = {};
    }
    BasicView.prototype.attachActionFactories = function (actionFactories, insPoint) {
        var _a;
        if (!this.attachedActionFactories[insPoint]) {
            this.attachedActionFactories[insPoint] = actionFactories;
        }
        else {
            (_a = this.attachedActionFactories[insPoint]).push.apply(_a, actionFactories);
        }
        console.log('actionFactory attached', { actionFactories: actionFactories, insPoint: insPoint });
    };
    BasicView.prototype.injectActions = function (doc) {
        console.log('injectActions this.attachedActionFactories', this.attachedActionFactories);
    };
    BasicView.prototype.activate = function (doc) {
        this.isActive = true;
        this.startMutationObserver(doc);
        this.injectActions(doc);
        console.log("View \"" + this.name + "\" is activated");
    };
    BasicView.prototype.deactivate = function (doc) {
        this.isActive = false;
        this.stopMutationObserver(doc);
        console.log("View \"" + this.name + "\" is deactivated");
    };
    BasicView.prototype.stopMutationObserver = function (doc) {
        this.observer && this.observer.disconnect();
        console.log("View \"" + this.name + "\": stopMutationObserver");
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
                    var _this = this;
                    console.log("View \"" + this.name + "\": startMutationObserver");
                    var node = doc.getElementById('timeline');
                    if (!this.observer) {
                        this.observer = new MutationObserver(function (mutations) {
                            console.log("View \"" + _this.name + "\": mutated");
                        });
                    }
                    this.observer.observe(node, {
                        childList: true,
                        subtree: true
                    });
                };
                return class_1;
            }(BasicView))("TIMELINE", ["TWEET_SOUTH", "TWEET_COMBO"]),
            new (function (_super) {
                __extends(class_2, _super);
                function class_2() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                class_2.prototype.startMutationObserver = function (doc) {
                    var _this = this;
                    console.log("View \"" + this.name + "\": startMutationObserver");
                    var node = doc.getElementById('dm_dialog');
                    if (!this.observer) {
                        this.observer = new MutationObserver(function (mutations) {
                            console.log("View \"" + _this.name + "\": mutated");
                        });
                    }
                    this.observer.observe(node, {
                        childList: true,
                        subtree: true
                    });
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
    ContentAdapter.prototype.getViewById = function (viewId) {
        var foundViews = this.views.filter(function (v) { return v.name == viewId; });
        if (foundViews.length == 0) {
            throw new Error("View \"" + viewId + "\" is not registered.");
        }
        return foundViews[0];
    };
    ContentAdapter.prototype.initRouteObserver = function (doc) {
        var _this = this;
        if (!window || !MutationObserver)
            throw Error('MutationObserver is not available.');
        var observer = new MutationObserver(function (mutations) {
            var oldViewIds = _this.views.filter(function (v) { return v.isActive == true; }).map(function (v) { return v.name; });
            var newViewIds = [];
            if (doc.querySelector("#timeline")) {
                newViewIds.push("TIMELINE");
            }
            var dmDialog = doc.querySelector("#dm_dialog");
            if (dmDialog && dmDialog.style.display == "") {
                newViewIds.push("DIRECT_MESSAGE");
            }
            var activatedViewIds = newViewIds.filter(function (v) { return oldViewIds.indexOf(v) == -1; });
            var deactivatedViewIds = oldViewIds.filter(function (v) { return newViewIds.indexOf(v) == -1; });
            if (activatedViewIds.length > 0 || deactivatedViewIds.length > 0) {
                _this.onRouteChanged(activatedViewIds, deactivatedViewIds);
            }
        });
        observer.observe(doc.body, {
            childList: true,
            subtree: true
        });
    };
    ContentAdapter.prototype.onRouteChanged = function (viewIdsActivating, viewIdsDeactivating) {
        for (var _i = 0, viewIdsActivating_1 = viewIdsActivating; _i < viewIdsActivating_1.length; _i++) {
            var viewId = viewIdsActivating_1[_i];
            this.getViewById(viewId).activate(this.doc);
        }
        for (var _a = 0, viewIdsDeactivating_1 = viewIdsDeactivating; _a < viewIdsDeactivating_1.length; _a++) {
            var viewId = viewIdsDeactivating_1[_a];
            this.getViewById(viewId).deactivate(this.doc);
        }
    };
    ContentAdapter.prototype.registerFeature = function (feature) {
        var actionConfig = feature.getAugmentationConfig(this.actionFactories, this.core);
        for (var viewId in actionConfig) {
            var view = this.getViewById(viewId);
            for (var insPoint in actionConfig[viewId]) {
                var actionFactories = actionConfig[viewId][insPoint];
                view.attachActionFactories(actionFactories, insPoint);
            }
        }
    };
    ContentAdapter.prototype.unregisterFeature = function (feature) {
        console.log('unregisterFeature is not implemented');
    };
    ContentAdapter.prototype.insertInlineButtonInToView = function (view, insPoint, button) {
        var nodes = document.querySelectorAll('li.stream-item div.js-actions');
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
