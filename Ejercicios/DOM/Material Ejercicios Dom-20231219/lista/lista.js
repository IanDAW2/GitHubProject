let boton=document.getElementById("idAnadir")

boton.addEventListener("click",anadirElemento)

let elementos=[]

function anadirElemento(){

    let input = document.getElementById("articulo")

    elementos.push(input.value)
    
    // Borrar elementos de la lista
    borrarLista()

    //Añadir lista completa
    dibujarLista()
}

function borrarLista(){

   

}
function dibujarLista(){

 
}





















