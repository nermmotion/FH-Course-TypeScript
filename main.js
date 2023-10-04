"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.age = 0;
            this.name = '';
            this.realName = '';
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Fercho',
        age: 25,
        address: {
            id: 123,
            zip: 'Ky2 Sud',
            city: 'Ontario'
        },
        getFullAddress() {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Meli',
        age: 22,
        address: {
            id: 126,
            zip: 'Ytz Ame',
            city: 'Tejax'
        },
        getFullAddress() {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map