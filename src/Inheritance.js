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
    function Animal(namee) {
        this.name = namee;
    }
    Animal.prototype.move = function () {
        console.log("".concat(this.name, " is moving."));
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name1, name2) {
        var _this = _super.call(this, name1) || this;
        _this.breed = name1;
        _this.roll = name2;
        return _this;
    }
    Cat.prototype.display = function () {
        console.log("This is a cat named of breed ".concat(this.roll, "."));
        console.log("This is a cat named ".concat(this.name, "."));
        this.move();
    };
    return Cat;
}(Animal));
var myCat = new Cat("Whiskers", "Siamese");
myCat.display();
