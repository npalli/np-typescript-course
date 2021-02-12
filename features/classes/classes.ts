class Vehicle {
    constructor(public color: string) {}

    public honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('chugga chugga');
    }

    public startDriving(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'red');
console.log(car.color);
console.log(car.wheels);
car.startDriving();
