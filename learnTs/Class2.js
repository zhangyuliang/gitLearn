var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = true;
    }
    return BeeKeeper;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Bee 类有一个静态的 keeper 属性
        _this.keeper = new BeeKeeper();
        return _this;
    }
    return Bee;
}(Animal));
function findKeeper(a) {
    return a.prototype.keeper;
}
// 使用 findKeeper 函数来找到 keeper
var beeKeeper = findKeeper(Bee);
//   declare  enum Enum {
//     A = 1,
//     B,
//     C = 2
// }
// console.log(Enum.B)
var sym1 = Symbol("123");
var sym2 = Symbol("123");
console.log(sym1);
console.log(sym2);
console.log(sym2 == sym1);
var someArray = [1, "string", null, undefined, false, new Object(), {}];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var e = someArray_1[_i];
    console.log(e);
}
for (var e in someArray) {
    console.log(e);
}
