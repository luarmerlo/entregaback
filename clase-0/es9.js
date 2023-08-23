const userPepe = {
    pepe:"javascript",
    maria:"html",
    daniel:"node",
    pablo:"css",
    age: 20,
    city:"montevideo"
};

const {age, city} = userPepe;
console.log("age", age);
console.log("city", city);


const userPepe2 = {
    pepe:"javascript",
    maria:"html",
    daniel:"node",
    pablo:"css",
    age: 20,
    city:"montevideo"
};

const pepeData={
    ...userPepe2,
    course:"javascript",
    level:"intermedio",
    grado:"4.8"
}

console.log("pepeData", pepeData);


const arreglo1 = [1,2,3,];
const arreglo2 = [...arreglo1];
arreglo2.push(4);
console.log(arreglo1, arreglo2);

const numerosA=[1,2,3,4];
const numerosB=[5,6,7,8];
const arregloCompleto = [...numerosA, ...numerosB,19,12,34];
console.log("arregloCompleto", arregloCompleto);

function sumar(num1, num2,...rest){
    console.log(rest)
};
sumar(1,2,3,4,5,67,87);

