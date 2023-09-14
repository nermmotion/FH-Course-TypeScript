(() => {
    
    // getName?: () => string -- para agregar un metodo en un objeto como parámetro opcional
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24, 
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'Clark Kent',
        //age: 60,
        powers: ['Súper fuerza'],
        getName(){    // metodo que debe de estar DENTRO del objeto que defino
            return this.name;
        }
    }

    console.log( flash.getName?.() );
    



})()