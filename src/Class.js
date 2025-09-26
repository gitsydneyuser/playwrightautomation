// 
var model = "Tesla";
// class car {
//  // fields   
//  public  model: string = `Tesla`;
//  engine: string = `V8 Engine`;
//  color: string = `Red`;
//optional
//  constructor(...value: number[]) {
//        console.log("Welcome to constructor", value);
//        let sum = 0
//        for(let i= 0;i< value.length; i++) {
//             sum = sum + value[i];
//         }
//         console.log("Sum of values:", sum);
//  }
//    async display_details() : Promise<void> {
//     //console.log(`Engine:}`);
// }   
// }
// let array: number[] = [1, 2, 3, 4, 5];
// let xyz = new car(...array); 
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.color = 'Red';
        this.model = model;
        this.price = price;
        this.color = 'Blue';
    }
    Car.prototype.displayDetails = function () {
        console.log("Model: ".concat(this.model, ", Price: ").concat(this.price, ", Color: ").concat(this.color));
    };
    return Car;
}());
var car1 = new Car("Tesla", 500000);
car1.displayDetails();
car1.color = "Green"; // This will cause an error because color is readonly
car1.displayDetails();
