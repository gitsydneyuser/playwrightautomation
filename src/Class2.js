var Car1 = /** @class */ (function () {
    function Car1(br, spe) {
        this.brannd = br;
        this.speed = spe;
    }
    Car1.prototype.showDetails = function () {
        console.log("Brand: ".concat(this.brannd, ", Speed: ").concat(this.speed));
    };
    return Car1;
}());
var car3 = new Car1("BMW", 200);
car3.showDetails();
