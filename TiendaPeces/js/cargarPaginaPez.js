window.onload =()=>{
    crearPez();
    let boton=document.getElementById("comprar");
    boton.addEventListener("click",comprarPez);
}

let pezBuscar =JSON.parse(localStorage.getItem("pezPagina"));
let objetoPez=pecera.find(pez => 
    pez.nombre==pezBuscar.nombre
);

function crearPez(){   
    
    let divContenedor=document.getElementsByClassName("contenedorPeces2")[0];
    let imagen=document.createElement("img");
    imagen.src="img/"+objetoPez.foto;
    imagen.width=500;

    let tabla=document.createElement("table");
    let tr=document.createElement("tr");
    let tdImagen=document.createElement("td");
    let tdTexto=document.createElement("td");
    tabla.appendChild(tr);
    tr.appendChild(tdImagen);
    tr.appendChild(imagen);
    tr.appendChild(tdTexto);
    let h1=document.createElement("h1");
    h1.innerHTML=objetoPez.nombre;
    tdTexto.appendChild(h1);
    let p=document.createElement("p");
    p.innerHTML="Nombre cientrífico: "+objetoPez.nombreCientifico;
    tdTexto.appendChild(p);
    let p1=document.createElement("h2");
    p1.innerHTML=objetoPez.precio+" €";
    tdTexto.appendChild(p1);
    let p2=document.createElement("p");
    let texto="<br><b>Alimentacion: </b>"+objetoPez.alimentacion+"<br><br><b>Comportamiento:</b> "+objetoPez.comportamiento+"<br><br> <b>Temperatura recomendada: </b>"+objetoPez.temperatura+"<br><br><b>Salinidad: </b>"+objetoPez.salinidad+"<br><br><b>PH: </b>"+objetoPez.ph;
    p2.innerHTML=texto;
    tdTexto.appendChild(p2);
    divContenedor.appendChild(tabla);
}


function comprarPez(){
    alert("Has comprado "+ objetoPez.nombre);
    let carrito=[];
    if(localStorage.getItem("carrito"))
        carrito=JSON.parse(localStorage.getItem("carrito"));
    carrito.push(objetoPez);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}