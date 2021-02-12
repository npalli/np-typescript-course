const _drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

type Drink = [string, boolean, number];

//assign a type to index of the array
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];

//tuple vs object
const carSpecs: [number, number] = [400, 3354];
const carSpecsObject = {
    horesepower: 400,
    weight: 3354,
};
