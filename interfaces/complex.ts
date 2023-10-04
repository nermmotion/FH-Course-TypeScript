(() => {


    interface Client {
        name: string;
        age?: number;
        address: Address
        // método dentro de la interfaz
        getFullAddress( id: string ): void;
    }
    
    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Fercho',
        age: 25,
        address: {
            id: 123,
            zip: 'Ky2 Sud',
            city: 'Ontario'
        },
        // un metodo dentro de la definición
        getFullAddress() {
            return this.address.city;
        }
    }
    
    const client2: Client = {
        name: 'Meli',
        age: 22,
        address: {
            id: 126,
            zip: 'Ytz Ame',
            city: 'Tejax'
        },
        // un metodo dentro de la definición
        getFullAddress() {
            return this.address.city;
        }
    }


})()