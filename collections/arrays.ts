const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

//string[][]
const carsByMake = [['f150'], ['corolla'], ['implala']];

//string[]
const _car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatiable values
// ! carMakers.push(100); causes error

// help with map
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2021-01-31'];
importantDates.push('2021-12-20');
