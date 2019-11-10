"use strict";
var addOne = function (a) {
    return a + 1;
};
var addTwo = function (a) {
    return a + 2;
};
var add = function (a, b) {
    return a + b;
};
console.log("HERE IS THE ADD FUNCTION: $(add(10, 1)))");
var HoldNumber = /** @class */ (function () {
    function HoldNumber() {
    }
    return HoldNumber;
}());
var holdNumber = new HoldNumber();
holdNumber.data = 123;
var HoldString = /** @class */ (function () {
    function HoldString() {
    }
    return HoldString;
}());
holdString = new HoldString();
HoldString.data = 'foo';
var HoldAnything = /** @class */ (function () {
    function HoldAnything() {
    }
    HoldAnything.prototype.add = function (a) {
        return a;
    };
    return HoldAnything;
}());
var holdNumber1 = new HoldAnything();
holdNumber1.data = 123;
var holdString1 = new HoldAnything();
holdString1.data = '123';
