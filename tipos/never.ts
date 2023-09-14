(() => {
    // NEVER: Función que siempre terminará con un error.
    const error = ( message: string ):never => {
        throw new Error(message);
    }

    console.log('Hola Mundo!');
    

})()