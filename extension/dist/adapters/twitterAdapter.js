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
    ContentAdapter.createElementFromHTML = function (htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    };
    ContentAdapter.insertInlineButton = function (node, button) {
        var element = ContentAdapter.createElementFromHTML("<div class=\"" + button.class + " ProfileTweet-action\">\n            <button class=\"ProfileTweet-actionButton\" type=\"button\">\n                <div class=\"IconContainer\">\n                    <img src=\"" + button.icon + "\">\n                </div>\n                <span class=\"ProfileTweet-actionCount\">\n                    <span class=\"ProfileTweet-actionCountForPresentation\" aria-hidden=\"true\">" + button.text + "</span>\n                </span>\n            </button>\n        </div>");
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
    return ContentAdapter;
}());
