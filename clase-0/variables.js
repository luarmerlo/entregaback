//definir variables que alamecenes datos (nombre,edad,precio, nombres de series y peliculas), mostrar esis valores por consola,incrementar la edad en 1, una serie a la lista y volver a mostrarlas. compartir la definicion en el visual studio code.

var nombre = "Pepe"//string
var edad = "30"//number
var series = ["batman, garfield, barbie"]
var peliculas = [ //array
{
    titulo: "mas alla",
    year: '2008',
    autores: ["pepe", "maria"]
},
{
    titulo: "kjdsfhkjdhbg",
    year: '2008',
    autores: ["dfgd", "dfvdgf"]
}
]

console.log(nombre)
console.log(edad)
console.log(series)
console.log(peliculas)

edad +=1
edad = edad + 1
edad++ 
console.log(edad)

//push:insertar un nuevo elemento al final del arreglo
series.push("luar merlo");
console.log(series);
console.log(series);
console.log(series[3]);
