(() => {

    // Argumentos por default, siempre deben estar antes de los argumentos opcionales.
    // Es decir que los argumentos opcionales, deben colocarse SIEMPRE al final de todos.
    // O bien, darle un valor por default, como en este caso upper: boolean = false.
    const fullName = ( firstName: string, lastName?: string, upper: boolean = false ): String => {
        if ( upper ) {
            return `${ firstName } ${ lastName }`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName }`;
        }
    }

    const name = fullName( 'Tony', 'Stark', true );

    console.log({ name });
    

})()