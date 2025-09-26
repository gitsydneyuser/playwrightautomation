
class Animal {

    name: string;

  constructor(namee: string) {
    this.name = namee;
  }


move(): void {
    console.log(`${this.name} is moving.`);
  }

}


class Cat extends Animal {


//        name: string;

//   constructor(namee: string) {
//     this.name = namee;
//   }


// move(): void {
//     console.log(`${this.name} is moving.`);
//   }

    breed: string;
    roll :string ;
    constructor(name1: string,name2: string) {
        super(name1);
        this.breed = name1; 
        this.roll = name2;
    }
    
    display(): void {
        console.log(`This is a cat named of breed ${this.roll}.`);
        console.log(`This is a cat named ${this.name}.`);
        this.move();

    }
    
}


const myCat = new Cat("Whiskers","Siamese");
myCat.display(); 





