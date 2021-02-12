const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const printVehicle = (vehicle: {
    name: string;
    year: number;
    broken: boolean;
}): void => {
    console.log(vehicle.name);
    console.log(vehicle.year);
    console.log(vehicle.broken);
};
//doesnt throw error
printVehicle(oldCivic);

//imporved
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

//does not need to have all values
interface Reportable {
    summary(): string;
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);

// An interface can be used by multiple objects
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `This drink has ${this.sugar} grams of sugar`;
    },
};

printSummary(drink);
