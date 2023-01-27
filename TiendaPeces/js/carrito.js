window.onload = () =>{
    cargarCarrito();
    
}

    function borrarUno(){
        let listaBox=document.querySelectorAll("input[type=checkbox]");
        let carrito=JSON.parse(localStorage.getItem("carrito"));
        console.log(carrito);
        for (let i = 0; i < listaBox.length; i++) {
            if(listaBox[i].checked){
                
                carrito.splice(i,1);
                
            }
        }
        localStorage.setItem("carrito",JSON.stringify(carrito));
        cargarCarrito();
        if(carrito.length==0){
            localStorage.removeItem("carrito");
            location.reload();
        }
    }

    function borrar(){
        alert("Borrando todo el carrito");
        localStorage.removeItem("carrito");
        location.reload();
    }

    function comprar(){
        alert("Todavia no se puede comprar en esta tienda, estamos en fase de beta");
    }

function cargarCarrito(){
    let divContenedor=document.getElementsByClassName("contenedorCarrito")[0];
    divContenedor.innerHTML="";
    let precioFinal=0;
    
    if (localStorage.getItem("carrito")){
        let carrito=JSON.parse(localStorage.getItem("carrito"))
        let tabla = document.createElement("table");
        carrito.forEach(pez => {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            let img=document.createElement("img");
            let box=document.createElement("input");
            box.type="checkbox";
            img.src="img/"+pez.foto;
            img.width=80;
            td.appendChild(img);
            td.innerHTML+=pez.nombre+" <b>:"+pez.precio+" €</b>&nbsp;&nbsp;&nbsp;";
            td.appendChild(box);
            
            precioFinal+=parseFloat(pez.precio);
            
            tr.append(td);
            tabla.appendChild(tr);
        });
        divContenedor.appendChild(tabla);
        
        divContenedor.innerHTML+="<h1>El precio final es de "+precioFinal.toFixed(2)+" €</h1>"
    
        let botonComprar=document.createElement("button");
        botonComprar.id="Comprar";
        botonComprar.type="button";
        let botonBorrar=document.createElement("button");
        botonBorrar.id="Comprar";
        botonBorrar.type="button";
        botonComprar.innerHTML="Comprar";
        botonBorrar.innerHTML="Borrar Carrito";
        botonComprar.addEventListener("click",comprar);
        botonBorrar.addEventListener("click",borrar);

        divContenedor.appendChild(botonComprar);
        divContenedor.appendChild(botonBorrar);
    }else{
        divContenedor.innerHTML="<br><br><br><h1>TODAVÍA NO HAS COMPRADO NADA</h1><br><br><br>";  
    }
    let listaBox=document.querySelectorAll("input[type=checkbox]");
    listaBox.forEach(caja => {
        caja.addEventListener("click",borrarUno);
    });
}