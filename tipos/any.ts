(() => {
    let heroe:any = 123;
    let exists;
    let power;

    heroe = 'Dr Strange';
    //console.log(heroe.charAt(0));
    console.log((heroe as string).charAt(0));

    heroe = 150.2342353;
    console.log( <number>(heroe.toFixed(2) ));

    console.log(exists);
    console.log(power);
    
})();