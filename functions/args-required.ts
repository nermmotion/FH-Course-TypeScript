(() => {

    // Para que el argumento sea obligatorio, se agrega el tipado en cada argumento.
    const fullName = ( firstName: string, lastName: string ): String => {
        if ( !firstName ) {
            throw new Error("Nombre requerido");
        }
        return `${ firstName } ${ lastName }`;
    }

    const name = fullName( 'Tony', 'Stark' );

    console.log({ name });
    

})()