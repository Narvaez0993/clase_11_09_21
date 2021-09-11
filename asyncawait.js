let datosUsuario = {
    "usuario": "smejianarvaez@hotmail.com",
    "contraseña": "matrix"
}

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

async function procesarPeticion(datosUsuario){

    try{

        let Respuesta = await Datos(datosUsuario);
        console.log(Respuesta)

    }catch(error){
        console.log(error)
    }

} 

procesarPeticion(datosUsuario);