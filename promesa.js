let datosUsuario = {
    "usuario": "smejianarvaez@hotmail.com",
    "contraseña": "matrix2"
}

//funcionprincipal
//llamo a mi funcion secundaria o callback
function Datos(datosUsuario){
    console.log("procesandi la peticion...")


    let promesa = new Promise(function(resolve,reject){

        setTimeout(() => {
            if(datosUsuario.usuario == "smejianarvaez@hotmail.com" && datosUsuario.contraseña=="matrix"){
    
                resolve("Bienvenido a netflix, cargando catalogo")
    
            }else{
    
                reject("intentalo de nuevo")
            
            }
        }, 5000);
    })

    return promesa;
}

Datos(datosUsuario)
.then(function(Respuesta){
    console.log(Respuesta)
})

.catch(function(Respuesta){
    console.log(Respuesta)
})