import { fileURLToPath } from 'url';

const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 20,
    },
    setAge(age: number): void {
        this.age = age;
    },
};

//obj  destruc annotation
const { age }: { age: number } = profile;

const {
    coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
