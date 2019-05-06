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
var METAMASK_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjhJREFUeNrUVM9rE1EQ/t7Lbn6UqAlFscYNYrfVKoXSi0ehLcSDknjwpFC8i5fiMbUHqQriPyD17B+QoqDQg1QoKB5Ec9GaNP4IVtq6bXa72d23zm6aEDcm4K0ODDv7DfPtNzPvLfDf2dyFdIJ87F9q2N/AfEZJhhhbojBFPjT3bG2rPf/ttnrcBSZfV2w1+7iUb+JSkOjWRGqAM7ZCoeK998lYqd45+caLhcMO2DYGiWjkVcnBu6q4317bQRaV+RW2R+SZbmG4vIHh0WMclg1sWMDToo3vmoAtxKP2Wh4ko/ZmgtjyqgOX5EghoPDB8onI3s4///KpK9lsRjlLj3Q7FiaCqSHJV8VI8gTFHkbkavCjf5DRrL6SgPetGVD24hkZ/X0Mu1YDGzjEfCwi4VdPMm9rR+KsqCQZ0kmOSVLhEXnmOLQA0WjVw66NhxeCZB0LmD4nJ/jegTF2gZrhtnJmHYhFGW3VhSsgeirTH6gniGiq+R6L0sxkoLITxnwxjfWdkI//MGW4nEs9lZGGm8FTfDDOMBqz8FCpwKZWTZrdqcM26pbbWxnN5bpX0HSdWlz/6WBzS0DTG5g3M4doohGWpU4SXcm0Gl5uU1HTDZqRadLZk7m/AINizZCgx1V8rKfGbhTsJc5Y1zYXKHXJvzouqoyxRSmZfFE7ncvYR8dzkiy3lKytlmH2L2rCLXW/6OX84F3dEoWRe5+XO25C4cnlSDic4yGe1nVj2xFi+nz26ub+/wf+FmAAmiLTFxlZBnAAAAAASUVORK5CYII=';
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
                    class: 'metamask-widget-tweet',
                    text: 'Add to Registry',
                    icon: METAMASK_ICON,
                    handler: function (context) {
                        console.log('METAMASK BUTTON CLICKED', context);
                    }
                }];
        }
        return [];
    };
    return Feature;
}());
