const peliculasURL = "https://nohaywebs.com/esm/peliculas-populares.json"
const configuracionURL = "https://nohaywebs.com/esm/configuration.json"

/*async function obtenerDatos(){
    const respuestaPeliculas = await fetch(peliculasURL);
     const datosPeliculas =  await respuestaPeliculas.json();
     console.log(datosPeliculas);

     const respuestaconfig = await fetch(configuracionURL);
     const datosconfig = await respuestaconfig.json();
     console.log(datosconfig)

}
obtenerDatos();

console.log(obtenerDatos)*/

async function fetchJSON(URL){
    const respuesta = await fetch(URL);
    const datos = await respuesta.json();
    return datos;
}

async function obtenerDatos(){
    const peliculas = await fetchJSON(peliculasURL);
    const configuracion = await fetchJSON(configuracionURL);
    const baseURL = configuracion.images.base_url;
    const posterSize = configuracion.images.poster_sizes[5];
    const poster = peliculas.results[3].poster_path; 

    console.log(baseURL + posterSize + poster);

    console.log(configuracion.images.base_url);
    console.log(configuracion.images.poster_sizes[0]);
}

obtenerDatos();