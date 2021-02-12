import { NumbersCollection } from './NumbersCollection';

export class Sorter {
    constructor(public collection: NumbersCollection) {}

    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; i < length - i - 1; j++) {
                if (this.collection.compare(i, j)) {
                    this.collection.swap(i, j);
                }
            }
        }
    }
}
