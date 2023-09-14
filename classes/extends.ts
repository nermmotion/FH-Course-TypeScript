(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
            console.log('Constructor Avenger llamado!');
        }

        // Para acceder al metodo de tipo protected, es por medio de extends
        protected getFullName () {
            return `${ this.name } ${ this.realName };`
        }
    }

    // Extends de Avenger
    class Xmen extends Avenger {
        constructor(
            name: string,
            realname: string,
            public isMutant: boolean
        ) {
            super( name, realname )
            console.log('Constructor Xmen llamado');
        }


        get fullName(){
            return `${ this.name } - ${ this.realName }`
        }


        getFullnamedesdeXmen() {
            console.log( super.getFullName() );
            
        }
    }

    const wolverine = new Xmen( 'Wolverine', 'Logan', true );

    console.log(wolverine.fullName);
    
    // wolverine.getFullnamedesdeXmen();
    

})();