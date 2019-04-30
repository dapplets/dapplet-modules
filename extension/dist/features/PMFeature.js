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
var Feature = (function () {
    function Feature() {
        this.id = '1';
        this.version = '0.0.1';
        this.type = ScriptType.FEATURE;
    }
    Feature.prototype.getContentAdapterId = function () {
        return "twitterAdapter";
    };
    Feature.prototype.createControlElements = function (context, controlType) {
        if (controlType == ControlTypes.INLINE_BUTTON) {
            return [{
                    text: 'Add to Registry',
                    handler: function (context) {
                        console.log('Hello World!');
                    }
                }];
        }
        return [];
    };
    return Feature;
}());
