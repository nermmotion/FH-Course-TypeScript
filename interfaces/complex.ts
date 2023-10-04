(() => {


    interface Client {
        name: string;
        age?: number;
        address: Address
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
        }
    }
    
    const client2: Client = {
        name: 'Meli',
        age: 22,
        address: {
            id: 126,
            zip: 'Ytz Ame',
            city: 'Tejax'
        }
    }


})()