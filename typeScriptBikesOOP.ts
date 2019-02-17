class Bike {
    price: number; max_speed: string; miles: number
    constructor(price: number, max_speed: string, miles?: number) {

        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo() {
        console.log(`The bikes price is ${this.price} the max speed is ${this.max_speed} and has ${this.miles}  on it.`)
    }
    ride() {
        this.miles = this.miles + 10;
        console.log("Riding")
    }
    reverse() {
        this.miles = this.miles - 5;
        console.log('Reversing')
    }
}
let bike1 = new Bike(200,"25mph")
bike1.ride();
bike1.ride();
bike1.ride();
bike1.reverse()
bike1.displayInfo();

let bike2 = new Bike(300, "20mph")
bike2.ride();
bike2.ride();
bike2.reverse();
bike2.reverse();
bike2.displayInfo();

let bike3 = new Bike(400, "30mph")
bike3.reverse();
bike3.reverse();
bike3.reverse();
bike3.displayInfo();


// var Bike = /** @class */ (function () {
//     function Bike(price, max_speed) {
//         this.price = price;
//         this.max_speed = max_speed;
//         this.miles = 0;
//     }
//     Bike.prototype.displayInfo = function () {
//         console.log("The bikes price is " + this.price + " the max speed is " + this.max_speed + " and has " + this.miles + "  on it.");
//     };
//     Bike.prototype.ride = function () {
//         this.miles = this.miles + 10;
//         console.log("Riding");
//     };
//     Bike.prototype.reverse = function () {
//         this.miles = this.miles - 5;
//         console.log('Reversing');
//     };
//     return Bike;
// }());
// var bike1 = new Bike(200, "25mph");
// bike1.ride();
// bike1.ride();
// bike1.ride();
// bike1.reverse();
// bike1.displayInfo();
// var bike2 = new Bike(300, "20mph");
// bike2.ride();
// bike2.ride();
// bike2.reverse();
// bike2.reverse();
// bike2.displayInfo();
// var bike3 = new Bike(400, "30mph");
// bike3.reverse();
// bike3.reverse();
// bike3.reverse();
// bike3.displayInfo();


// .reverse() and .ride() can return this 

