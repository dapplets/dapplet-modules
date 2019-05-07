var TwitterAdapter = (function () {
    function TwitterAdapter(document) {
        this.document = document;
    }
    TwitterAdapter.prototype.getContext = function () { };
    ;
    return TwitterAdapter;
}());
var Feature = (function () {
    function Feature() {
    }
    Feature.prototype.activate = function (document, core) {
        var adapter = new TwitterAdapter(document);
        var context = adapter.getContext();
    };
    Feature.prototype.deactivate = function (document, core) {
    };
    return Feature;
}());
