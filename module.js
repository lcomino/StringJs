(function () {
    var Validator = (function () {
        var opt;
        var Validator = function (options) {
            opt = options;
        };

        Validator.prototype.foo = function foo() {
            console.log(opt);
        };

        return Validator;
    })();

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = Validator;
    else window.Validator = Validator;
})();
