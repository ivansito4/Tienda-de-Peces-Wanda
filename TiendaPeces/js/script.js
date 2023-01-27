window.onload=function(){
    cargarTabla(pecera);

    let buscador=document.getElementById("buscador");
    buscador.addEventListener("keyup",()=>filtrarPeces(pecera));
    let select=document.getElementById("tipoOrden");
    select.addEventListener("change",ordenarPeces);
    select.value="Preterminado";

}

function cargarTabla(peceraCargar){

    let divContenedor=document.getElementsByClassName("contenedorTablaPeces")[0];
    divContenedor.innerHTML="";
    let imagen;
    let nombre;
    let precio;
    let textoFinal;
    let tabla=document.createElement("table");
    let tr=document.createElement("tr");
    let contador=0;
    
    peceraCargar.forEach(pez => {
        if(contador==4){
            contador=0;
            tabla.appendChild(tr);
            tr=document.createElement("tr");
        }
        let td=document.createElement("td");
        ruta=pez.url;
        imagen="img/"+pez.foto;
        nombre=pez.nombre;
        precio=pez.precio;
        textoFinal="<div class='card m-4 llamadaCarta' style='width: 18rem;'><img src='"+imagen+"'class='card-img-top'><div class='card-body'><p class='card-text text-center'>"+nombre+"</p><h5 class='card-title text-center '>"+precio+" €</h5></div></div>";
        td.innerHTML+=textoFinal;
        tr.appendChild(td);
        contador++;
    });
tabla.appendChild(tr);
divContenedor.appendChild(tabla);
let cartas=document.getElementsByClassName("llamadaCarta");
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].addEventListener("click",() => guardarDatos(i,peceraCargar));
    }
}

function filtrarPeces(peceraOrdenada){
    let textoFiltrar=document.getElementById("buscador").value;
    let peceraFiltrada=peceraOrdenada.filter((pez)=>pez.nombre.toUpperCase().includes(textoFiltrar.toUpperCase()));
    cargarTabla(peceraFiltrada);
}


function guardarDatos(num,peceraFinal){
    localStorage.setItem("pezPagina",JSON.stringify(peceraFinal[num]));
    location.href="peces.html";
}
function ordenarPeces(){
    let select=document.getElementById("tipoOrden").value;
    let auxPecera=pecera.concat();
    switch (select) {
        case "Preterminado":
            filtrarPeces(auxPecera);
        break;
        case "Alfabéticamente":
            auxPecera.sort(function (a, b) {
                if (a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
                  return 1;
                }
                else {
                  return -1;
                }
              });
              filtrarPeces(auxPecera);
        break;
        case "De menor a mayor precio":
            auxPecera.sort(function(a, b) {
                return a.precio - b.precio;
              });
              filtrarPeces(auxPecera);
        break
        case "De mayor a menor precio":
            auxPecera.sort(function(a, b) {
                return b.precio - a.precio;
              });
            filtrarPeces(auxPecera);
        break
        default:
            break;
    }
}
