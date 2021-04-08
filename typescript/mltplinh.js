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
var Clas1 = /** @class */ (function () {
    function Clas1() {
    }
    Clas1.prototype.A1 = function () {
        console.log("A1 method Implemented");
    };
    return Clas1;
}());
var Clas2 = /** @class */ (function (_super) {
    __extends(Clas2, _super);
    function Clas2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clas2.prototype.M1 = function () {
        console.log("M1 method implemented");
    };
    Clas2.prototype.print = function () {
        console.log(" Print1 method implemented");
    };
    Clas2.prototype.print2 = function () {
        console.log("Print2 method implemented");
    };
    return Clas2;
}(Clas1));
var obj = new Clas2();
obj.A1();
obj.M1();
obj.print();
obj.print2();
