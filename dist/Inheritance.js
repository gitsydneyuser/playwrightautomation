"use strict";
class Animal {
    constructor(namee) {
        this.name = namee;
    }
    move() {
        console.log(`${this.name} is moving.`);
    }
}
class Cat extends Animal {
    constructor(name1, name2) {
        super(name1);
        this.breed = name1;
        this.roll = name2;
    }
    display() {
        console.log(`This is a cat named of breed ${this.roll}.`);
        console.log(`This is a cat named ${this.name}.`);
        this.move();
    }
}
const myCat = new Cat("Whiskers", "Siamese");
myCat.display();
