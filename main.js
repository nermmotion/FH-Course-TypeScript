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
    const client = {
        name: 'Fercho',
        age: 25,
        address: {
            id: 123,
            zip: 'Ky2 Sud',
            city: 'Ontario'
        }
    };
    const client2 = {
        name: 'Meli',
        age: 22,
        address: {
            id: 126,
            zip: 'Ytz Ame',
            city: 'Tejax'
        }
    };
})();
//# sourceMappingURL=main.js.map