(() => {

    // Tipo personalizado con parámetros en un objeto. Obliga al objeto a cumplir los parámetros que sean
    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24, 
        powers: [1,2]
    }
    
    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    }


})()