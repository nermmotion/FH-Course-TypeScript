(() => {

    class Apocalipsis {

        static intance: Apocalipsis;

        private constructor( public name:string ) {
        } 
        
        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.intance) { 
                Apocalipsis.intance = new Apocalipsis ('Soy apocalipto, el único') 
            }
                return Apocalipsis.intance;
        }

        changeName( newName: string ): void {
            this.name = newName;
        }

    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    
    apocalipsis1.changeName('Xavier');
    
    console.log(apocalipsis1);

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis.. el único')
    // console.log(apocalipsis);
    

})()