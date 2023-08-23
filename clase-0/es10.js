const correoEspacio = "     luar@hotmail.com          ";
const correoSinEspacios = correoEspacio.trim();
if(correoSinEspacios === "luar@hotmail.com"){
    console.log("inicio sesion")
} else {
    console.log("sesion fallida")
};

const numeros = [ [1,2,3], [4,5,6], [7,8,[9,10]]];
console.log(numeros.flat(1));
