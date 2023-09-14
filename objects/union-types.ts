(() => {


    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    // Multiples de tipos permitidos -- se identifica por medio del signo tuberia " | "
    let myCustomVariable: (string | number | Hero) = 'Nerm';
    console.log(typeof myCustomVariable);
    
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

})()