(() =>{


    interface addTwoNumbers {
        (a:number, b : number): void;
    }

    // Defino la función de tipo interface(addTwoNumbers)
    let addNumbersFunction: addTwoNumbers;

    // Asigno los parametros de la interfaz en la función
    addNumbersFunction = ( a:number, b:number ) => {
        return 10;
    }
    

})()