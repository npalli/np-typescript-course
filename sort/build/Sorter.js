"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; i < length - i - 1; j++) {
                if (this.collection.compare(i, j)) {
                    this.collection.swap(i, j);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
