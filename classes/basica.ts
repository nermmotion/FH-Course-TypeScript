(() => {

    class Avenger {


        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;

        // Retorno el nombre de la misma clase Avenger al método estático
        static getAvgAge() {
            return this.name;
        }

        constructor ( 
            private name: string, 
            private team: string, 
            public realName?: string,
            ){
        }

        // Nuevo método para imprimir las propiedades del constructor
        public bio() {
            return `${ this.name } (${ this.team })`;
        }
    }

    /* const antman: Avenger = new Avenger( 'Antman', 'Capitan' );
    console.log( antman );
    
    // Accedo al método Avenger para imprimir el nuevo método con datos de antman
    console.log( antman.bio() );

    // Mando imprimir el método por medio de la clase Avenger
    console.log( Avenger.getAvgAge() ); */
    

})();