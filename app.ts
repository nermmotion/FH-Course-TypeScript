// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

// Respuesta #1
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

// Respuesta #2
interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

// Respuesta #3
interface Ciudadanos {
  (ciudadanos: string[]): number;
}

const ciudadGotica:Ciudadanos = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

// Respuesta #4
interface Data {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Data {
  constructor () {}

  public nombre: string = 'Fercho';
  public edad: number = 30;
  public sexo: string = 'Hombre';
  public estadoCivil: string = 'Soltero';
  public imprimirBio(): void {
      console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años, estoy un ${this.estadoCivil}`)
  }

}