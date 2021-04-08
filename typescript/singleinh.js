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
    function Clas1(eid1, ename1) {
        this.eid = eid1;
        this.ename = ename1;
    }
    return Clas1;
}());
var Clas2 = /** @class */ (function (_super) {
    __extends(Clas2, _super);
    function Clas2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clas2.prototype.display = function () {
        console.log(this.eid + " " + this.ename);
    };
    return Clas2;
}(Clas1));
var obj = new Clas2(101, "nitu");
obj.display();
