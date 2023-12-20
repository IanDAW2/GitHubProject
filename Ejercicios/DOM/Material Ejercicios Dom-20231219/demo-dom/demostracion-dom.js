function anadirElemento(){

    let contenido = document.getElementById("contenido").value
    
    if (contenido !== ""){
    // Elemento creado
    let elemento = document.createElement("li")

    // Especificar contenido del elemento
    
    elemento.innerHTML=contenido

    //Damos Estilos
    elemento.classList.add("rojo")

    //Damos atributos extra
    elemento.setAttribute("title",contenido)
    elemento.setAttribute("id",`id${contenido}`)

    //recuperar el padre
    let padre=document.getElementById("lista")    

    //Especificarle Eventos
    elemento.addEventListener("dblclick",function(){
        this.remove()
    })

    //Añado al padre el hijo
    padre.appendChild(elemento)   
    }else{
        alert("especifica un contenido")
    }    
}

function limpiarLista(){
    let elementos = document.querySelectorAll("ul#lista li")
    
    elementos.forEach(
        elemento=>elemento.remove()
        )

}
