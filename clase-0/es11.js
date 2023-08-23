// const variable1 = null;
// const resultado = variable1 || "valor por defecto";
// console.log(resultado);

let variable = 0;
const resultadoConNulish = variable ?? "valor vacio";
console.log(resultadoConNulish);

class Persona{
    #variablePrivada="soy una variable privada";
    constructor(nombre){
  this.nombre=nombre;
}

getVariablePrivada(){
    return this.#variablePrivada;
};

#metodoPrivado(){
     console.log("soy  un metodo privado");
}


}
