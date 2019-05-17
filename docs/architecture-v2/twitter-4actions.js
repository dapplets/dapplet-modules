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
//#endregion COMMON INTERFACES
//#region UTIL LIBRARY
var BasicView = /** @class */ (function () {
    function BasicView(name, INSERT_POINTS) {
        this.name = name;
        this.INSERT_POINTS = INSERT_POINTS;
        this.attachedActions = {};
    }
    BasicView.prototype.attachActions = function (actions, insPoint) {
        var _a;
        if (!this.attachedActions[insPoint])
            this.attachedActions[insPoint] = actions;
        else
            (_a = this.attachedActions[insPoint]).push.apply(_a, actions);
    };
    BasicView.prototype.injectActions = function (doc) {
        /*
        //ToDo: implement
        this.attachedActions.forEach((insPoint:string, actions:IAction[]) => {
            insPoint.inject();
        });
        */
    };
    BasicView.prototype.activate = function (doc) {
        this.startMutationObserver(doc);
        this.injectActions(doc);
    };
    BasicView.prototype.deactivate = function (doc) {
        this.stopMutationObserver(doc);
    };
    BasicView.prototype.stopMutationObserver = function (doc) {
        //ToDo: implement
    };
    return BasicView;
}());
//#endregion UTIL LIBRARY
//#region TWITTER ADAPTER PACKAGE
var TwitterAdapter = /** @class */ (function () {
    function TwitterAdapter(core, doc) {
        this.core = core;
        this.doc = doc;
        this.views = [
            new /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                class_1.prototype.startMutationObserver = function (doc) {
                    //ToDo: implement MutationObserver for TimeLine View
                };
                return class_1;
            }(BasicView))("TIMELINE", ["TWEET_SOUTH", "TWEET_COMBO"]),
            new /** @class */ (function (_super) {
                __extends(class_2, _super);
                function class_2() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                class_2.prototype.startMutationObserver = function (doc) {
                    //ToDo: implement MutationObserver for DirectMessage View
                };
                return class_2;
            }(BasicView))("DIRECT_MESSAGE", ["DM_SOUTH", "DM_EAST"]),
        ];
        this.actionFactories = {
            button: function (img, exec, label) { return (
            //ToDo: onClick invalid; fix-it!
            function (injector) { return injector("<div><img src='${img}' onclick='javascript:exec(ctx)'/>(${label}) </div>"); }); },
            menuItem: function (_a) { } //ToDo: implement
        };
        this.initRouteObserver(doc);
    }
    TwitterAdapter.prototype.initRouteObserver = function (doc) {
        //ToDo: implement logic observing DOM and listening changing routes;
        //router activates views (and inits ViewObserver for them)
        // an old MutationObserver should be per View actually.
        // calls onRouteChanged(...)
    };
    TwitterAdapter.prototype.onRouteChanged = function (viewActivating, viewDeactivating) {
        for (var _i = 0, viewDeactivating_1 = viewDeactivating; _i < viewDeactivating_1.length; _i++) {
            var view = viewDeactivating_1[_i];
            view.deactivate(this.doc);
        }
        for (var _a = 0, viewActivating_1 = viewActivating; _a < viewActivating_1.length; _a++) {
            var view = viewActivating_1[_a];
            view.activate(this.doc);
        }
    };
    TwitterAdapter.prototype.registerFeature = function (feature) {
        var _this = this;
        var actionConfig = feature.getAugmentationConfig(this.actionFactories, this.core);
        actionConfig.forEach(function (viewId, viewActions) {
            var view = _this.views[viewId];
            viewActions.forEach(function (insPoint, actions) {
                view.attachActions(actions, insPoint);
            });
        });
    };
    return TwitterAdapter;
}());
//#endregion TWITTER ADAPTER PACKAGE
//#region TWITTER 4_ACTIONS FEATURE PACKAGE
var Twitter_4Actions = /** @class */ (function () {
    function Twitter_4Actions() {
    }
    Twitter_4Actions.prototype.getAugmentationConfig = function (_a, core) {
        var button = _a.button, menuItem = _a.menuItem;
        // called at view creation time
        var _b = Twitter_4Actions.REQUIRES, overlay = _b.overlay, adapter = _b.adapter;
        return {
            TIMELINE_VIEW: {
                //ToDo: Augmentation Server provides additional context related two-ways info used as labels in custom actions.
                // Example: number of likes, number of PMs opened for current tweet, displayed as "(9)" near from button.    
                AUGM_SERVER_URL: "ws://SOMEHOST/timeline/",
                TWEET_SOUTH: [
                    // call at view creation time
                    button({
                        img: "0xBASE_64_DATA01",
                        exec: function (ctx) { return core.openOverlay(overlay, ctx); },
                        label: "(${ctx.likesN})" //ToDo: ref or val? 
                        //ToDo: implement binding and reload by backgroung.js
                    }),
                    button({
                        img: "0xBASE_64_DATA02",
                        exec: function (ctx) { return core.sendWalletConnectTx({
                            id: ctx.tweetId,
                            author: ctx.authorId
                        }); },
                        //ToDo: what about global parameters?
                        //ToDo: return state object useful bound to button state?
                        label: "RTN" //ToDo: implement binding and reload
                    })
                ],
                TWEET_COMBO: [
                    menuItem({
                        text: "hello one",
                        exec: function (ctx) { return core.sendWalletConnectTx({
                            id: ctx.tweetId,
                            author: ctx.authorId
                        }); },
                    })
                ],
            },
            DIRECT_MESSAGE_VIEW: {
                //ToDo: Augmentation Server provides additional context related two-ways info used as labels in custom actions.
                // Example: number of likes, number of PMs opened for current tweet, displayed as "(9)" near from button.    
                AUGM_SERVER_URL: "ws://SOMEHOST/directmessage/",
                DM_SOUTH: [
                    button({
                        img: "0xBASE_64_DATA03",
                        exec: function (ctx) { return core.sendWalletConnectTx({
                            id: ctx.tweetId,
                            author: ctx.authorId
                        }); },
                        //ToDo: what about global parameters?
                        //ToDo: return state object useful bound to button state?
                        label: function (ctx) { return ctx.text; } //ToDo: implement binding and reload
                    })
                ],
            }
        };
    };
    Twitter_4Actions.REQUIRES = {
        adapter: "0xSiteAdapter",
        overlay: "0xOverlay"
    };
    return Twitter_4Actions;
}());
//#endregion TWITTER 4_ACTIONS FEATURE
