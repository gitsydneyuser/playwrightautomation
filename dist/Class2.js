"use strict";
class Car1 {
    constructor(br, spe) {
        this.brannd = br;
        this.speed = spe;
    }
    showDetails() {
        console.log(`Brand: ${this.brannd}, Speed: ${this.speed}`);
    }
}
let car3 = new Car1("BMW", 200);
car3.showDetails();
