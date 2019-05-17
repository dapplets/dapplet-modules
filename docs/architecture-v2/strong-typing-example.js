var scratchpad_01;
(function (scratchpad_01) {
    //#endregion TWITTER INTERFACES
    //#region TWITTER ADAPTER
    var TwitterAdapter = /** @class */ (function () {
        function TwitterAdapter(core) {
            var _this = this;
            this.core = core;
            this.factories = {
                button: function (_a) {
                    var img = _a.img, exec = _a.exec, label = _a.label;
                    return (
                    //ToDo: check "ctx:any"
                    function (view, insPoint, ctx) { return _this.TO_BE_IMPLEMENTED("<div><img src='${img}'/>(${label}) </div>", function () { return exec(ctx); }); });
                },
                menuItem: function (_a) {
                    var text = _a.text, exec = _a.exec;
                    return (
                    //ToDo: check "ctx:any"
                    function (view, insPoint, ctx) { return _this.TO_BE_IMPLEMENTED("<div><MENU_ITEM>${text}</MENU_ITEM></div>", function () { return exec(ctx); }); });
                }
            };
        }
        TwitterAdapter.prototype.TO_BE_IMPLEMENTED = function (html, exec) { };
        TwitterAdapter.prototype.main = function () {
            var feature = new TwitterFeature(this.core);
            feature.getFactoryConfig(this.factories);
        };
        return TwitterAdapter;
    }());
    //#endregion TWITTER ADAPTER
    //#region TWITTER FEATURE
    var TwitterFeature = /** @class */ (function () {
        function TwitterFeature(core) {
            this.core = core;
        }
        TwitterFeature.prototype.getFactoryConfig = function (_a) {
            var _this = this;
            var button = _a.button, menuItem = _a.menuItem;
            return {
                TIMELINE_VIEW: {
                    //ToDo: !!! AUGM_SERVER_URL as @decorator or TIMELINE_VIEW({url:URL}) 
                    BTN_PANEL: [
                        button({
                            img: "0xBase64",
                            exec: function (ctx) { return _this.core.openOverlay(TwitterFeature.overlayId); }
                        }),
                        button({
                            img: "0xBase64",
                            //ToDo: check better constrsints for "ctx:any"
                            exec: function (ctx) { return _this.core.openOverlay(TwitterFeature.overlayId); },
                            //ToDo: !!! check constraints
                            label: "prop_name"
                        })
                    ],
                    DROPDOWN_MENU: [
                        menuItem({
                            text: "menu title 123",
                            exec: function (ctx) { return _this.core.openOverlay(TwitterFeature.overlayId); }
                        })
                    ]
                }
            };
        };
        TwitterFeature.overlayId = "0xABCDEF";
        return TwitterFeature;
    }());
    //#endregion TWITTER FEATURE
})(scratchpad_01 || (scratchpad_01 = {})); //namespace
