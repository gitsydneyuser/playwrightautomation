


class Car1 {

 brannd : string;
 speed : number;


 constructor(br: string, spe: number) {
     this.brannd = br;
     this.speed = spe;
 }




  showDetails(): void {
    console.log(`Brand: ${this.brannd}, Speed: ${this.speed}`);

 }

}

let car3 = new Car1("BMW", 200);
car3.showDetails();


