function manejarclick(event){
   if(event.target.id === "boton1"){

       console.log("Has hecho click en el botón 1");
    event.target.remove();
    }
    if(event.target.id === "boton2"){
        console.log("Has hecho click en el botón 2");
        event.target.remove();
    }
    console.log(event.target.parentElement);
    //event.target.parentElement.remove();

}