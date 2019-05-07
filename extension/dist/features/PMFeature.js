var Feature = (function () {
    function Feature(core) {
        this.core = core;
    }
    Feature.prototype.getFactoryConfig = function (_a) {
        var _this = this;
        var button = _a.button, menuItem = _a.menuItem;
        return {
            TIMELINE_VIEW: {
                BTN_PANEL: [
                    button({
                        img: "0xBase64",
                        exec: function (ctx) { return _this.core.openOverlay(Feature.overlayId); }
                    }),
                    button({
                        img: "0xBase64",
                        exec: function (ctx) { return _this.core.openOverlay(Feature.overlayId); },
                        label: "prop_name"
                    })
                ],
                DROPDOWN_MENU: [
                    menuItem({
                        text: "menu title 123",
                        exec: function (ctx) { return _this.core.openOverlay(Feature.overlayId); }
                    })
                ],
            }
        };
    };
    Feature.overlayId = "0xABCDEF";
    Feature.adapterId = "twitterAdapter";
    return Feature;
}());
