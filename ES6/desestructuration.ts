(()=>{
    // DESESTRUCTURACIÓN DE OBJETOS
    
    // puede ser un tipo o interface
    type Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.93823
    }

    // constante avengers de tipado Avengers
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.93823
    }

    // const { poder, vision } = avengers
    // console.log( poder.toFixed(2), vision.toUpperCase() );

    // función con desestructuración de Avengers
    const printAvenger = ({ ironman, ...resto }:Avengers ) => {
        console.log( ironman, resto  );
    }

    // printAvenger( avengers );


    // DESESTRUCTURACIÓN DE ARREGLOS

    const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.15];

    // Desestructurando el arreglo avengerArr
    const [ capitan, ironman, serialNumber ] = avengersArr;
    console.log({ capitan, ironman, serialNumber });
    

})()