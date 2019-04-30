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
    }
    ContentAdapter.prototype.onMutate = function (mutation) {
        console.log('mutated');
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
        var buttons = feature.createControlElements({}, ControlTypes.INLINE_BUTTON);
        for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
            var button = buttons_1[_i];
            console.log('inserted');
            var buttonDom = document.createElement('button');
            buttonDom.innerText = button.text;
            buttonDom.onclick = button.handler;
            document.body.appendChild(buttonDom);
        }
        return;
    };
    return ContentAdapter;
}());
