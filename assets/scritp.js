/*
alert()
for(let i=1 ; i <=20; i++){

    console.log(i);
}
//crear ejemplo que emprima hasta 20

const frutas = ["manzanas" ,"uva","pera" , "naranja"];
for(let i=0 ; i <=frutas.length; i++){
    console.log(frutas[i]);
}

//ejemplo para que salganm pares ocea avansa en dos en dos

for(let i=0 ; i <=10 ; i += 2 ){
console.log(i);
}
*/

const equipo1 = ["alison" , "evelin" , "paula" , "rosangela" , "angie"];
let lista = " ";
for (let i = 0 ; i < equipo1.length; i++) {
  lista += `<li>${equipo1[i]}</li> ` ;

}
console.log(equipo1);
document.getElementById("integrantes").innerHTML = `<ul>${lista}</ul>` ;
document.getElementById("lider").innerHTML = equipo1[0];
