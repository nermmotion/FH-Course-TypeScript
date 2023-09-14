(() => {

  type Vehicles = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
  }
  
  // Objetos
  const batimovil: Vehicles = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  const bumblebee: Vehicles = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar() { // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
  
  // Villanos debe de ser un arreglo de objetos personalizados
  type Villian = {
    nombre: string;
    edad?: number;
    mutante: boolean;
  }
  
  console.log('Pasando por aquí');
  
  
  const villanos: Villian[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  
  type charles = {
    poder: string;
    estatura: number;
  }
  type apocalipsis = {
    lider: boolean;
    miembros: string[];
  }
  const charles = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  console.log('Pasando por acá');
  const apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: (charles | apocalipsis);
  
  mystique = charles;
  console.log(mystique.poder);
  
  mystique = apocalipsis;
  console.log(mystique.miembros[2]);
  
  let a = [1, 2, 5, 2, 1, 8];
  
  let b = [...new Set(a)];
  console.log(b);
  
})()

