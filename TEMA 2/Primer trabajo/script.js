/*
for(var i= 0; i < 100 ; i++)
{
    console.log ("i vale" + i);
}
function bucleFor()
{
    for (var i = 0; i < 100; i++)
    {
        console.log ("i vale " +i );
    }
}
//bucleFor()

function bucleWhile(){
    var i = 0; 
    while(i < 100) 
    {
    console.log("i vale" + i)
    i += 3;    
    }

}
bucleWhile()

function cuadrado (n){
    return n * n; 
}
console.log (cuadrado ("5"))
*/
function ejercicio1(){

    var array1 = [];  
    for (var i= 1; i < 101; i++){
        array1.push(i);
    }
    return array1; 
    
}
console.log (ejercicio1());

var objetopersona = {
    nombre: "Alicia",
    apellido: "Pérez",
    direccion: "Calle Falsa, 123, Santa Cruz"
}
console.log((objetopersona.nombre + " " + objetopersona.apellido + " vive en " +  objetopersona.direccion))

function triangulo( base, altura)  {
    return base * altura / 2
    
}
console.log ("el área del triángulo es: " + triangulo (2, 2))

var recomendacionesLibros = []; 
 function nuevaRecomendación (libro){
    recomendacionesLibros.push (libro);
 }
 function siguientelibro(){
    var libro = recomendacionesLibros.shift;
    return libro
 }

nuevaRecomendación ("el señor de los anillos");
 nuevaRecomendación(" Paco va a la escuela");
  nuevaRecomendación ("Paco aprende a cocinar");
  nuevaRecomendación ("Paco descubre que es inútil");
 console.log (nuevaRecomendación)

 function rango (inicio, fin){
    
    
 }