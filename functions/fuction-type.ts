(() => {


    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name:string ) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;

    // Maneras de leer las firmas de cada funcion
    //let myFunction: ( n:number, m: number ) => number;
    //let myFunction: ( n:string ) => string;
    let myFunction: () => string;

    // myFunction = 10;
    // console.log(myFunction);
    
    // myFunction = addNumbers;
    // console.log(myFunction( 1, 2 ));
    
    // myFunction = greet;
    // console.log(myFunction ( `Nerm Motion` ));
    
    myFunction = saveTheWorld;
    console.log(myFunction());



})()