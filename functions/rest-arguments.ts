(() => {

    // Rest Parameters
    const fullName = ( 
        firstName: string,
        ...restArgs: string[] 
        ): string => {
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const superman = fullName ( 'Clark', 'Joseph', 'kent', 'Pancho' );

    console.log({ superman });
    
    

})()