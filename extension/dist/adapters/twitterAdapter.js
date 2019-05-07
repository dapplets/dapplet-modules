var Adapter = (function () {
    function Adapter(core) {
        var _this = this;
        this.core = core;
        this.factories = {
            button: function (_a) {
                var img = _a.img, exec = _a.exec, label = _a.label;
                return (function (view, insPoint, ctx) { return _this.TO_BE_IMPLEMENTED("<div><img src='" + img + "'/>(" + label + ") </div>", function () { return exec(ctx); }); });
            },
            menuItem: function (_a) {
                var text = _a.text, exec = _a.exec;
                return (function (view, insPoint, ctx) { return _this.TO_BE_IMPLEMENTED("<div><MENU_ITEM>" + text + "</MENU_ITEM></div>", function () { return exec(ctx); }); });
            }
        };
    }
    Adapter.prototype.TO_BE_IMPLEMENTED = function (html, exec) { };
    Adapter.prototype.attachFeature = function (feature) {
        var config = feature.getFactoryConfig(this.factories);
        console.log('config', config);
        if (config.TIMELINE_VIEW) {
            config.TIMELINE_VIEW[''];
        }
    };
    return Adapter;
}());
