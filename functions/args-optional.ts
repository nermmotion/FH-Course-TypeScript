(() => {

    // Para que el argumento sea opcional, se agrega un signo de "?" al final del argumento.
    const fullName = ( firstName: string, lastName?: string ): String => {
        if ( !firstName ) {
            throw new Error("Nombre requerido");
        }
        return `${ firstName } ${ lastName }`;
    }

    const name = fullName( 'Tony', 'Stark' );

    console.log({ name });
    

})()