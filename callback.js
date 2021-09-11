let datosUsuario = {
    "usuario": "smejianarvaez@hotmail.com",
    "contraseña": "matrix"
}

//funcionprincipal
//llamo a mi funcion secundaria o callback
function Datos(datosUsuario,cagarcallback){
    console.log("procesandi la peticion...")
    setTimeout(() => {
        if(datosUsuario.usuario == "smejianarvaez@hotmail.com" && datosUsuario.contraseña=="matrix"){

            cagarcallback(200)

        }else{

            cagarcallback(204)
        
        }
    }, 5000);


}

//utilizo la funcion principal
//declaro lo que hace el callback
Datos(datosUsuario,function(codigo){

    if(codigo == 200){
        console.log("Bienvenido a netflix")
        console.log("cargando peliculas...")
    }else{
        console.log("no estas registrado, suscribete...")
    }

})
