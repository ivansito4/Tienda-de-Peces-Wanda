
    window.setInterval(cargando,100);

let cuadrado=0;
function cargando(){
    let listaCuadrados=document.getElementsByTagName("td");
    listaCuadrados[cuadrado].style.backgroundColor="black";
    cuadrado++;
    if(cuadrado==10){
        location.href="carrito.html";
    }
}