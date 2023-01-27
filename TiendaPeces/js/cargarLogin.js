window.onload = () =>{
    cargarFormulario();

    let inputs=["nombre","apellido","email","fecha"];
    inputs.forEach(valor => {
        let input=document.getElementById(valor);
        input.addEventListener("keyup",()=>quitarFondo(input));
    });
    
}

function quitarFondo(valor){
    valor.style.backgroundColor="white";
}  


function cargarFormulario(){
    let divContenedor=document.getElementsByClassName("contenedorLogin")[0];

    let form=document.createElement("form");
    divContenedor.appendChild(form);
    form.action="login.html";
    form.method="get";

    let nombre=document.createElement("input");
    nombre.type="text";
    nombre.id="nombre";
    //nombre.addEventListener("keyup",() =>quitarFondo(nombre));
    form.innerHTML+="Nombre";
    form.appendChild(nombre);
    let Apellido=document.createElement("input");
    form.innerHTML+="<br>";

    Apellido.type="text";
    Apellido.id="apellido";
    //Apellido.addEventListener("keyup",() =>quitarFondo(Apellido));
    form.innerHTML+="Apellido";
    form.appendChild(Apellido);
    form.innerHTML+="<br>";

    let email=document.createElement("input");
    email.type="text";
    email.id="email";
    //email.addEventListener("keyup",()=>quitarFondo(email));
    form.innerHTML+="Email";
    form.appendChild(email);
    email.placeholder="   solo admite gmail";
    form.innerHTML+="<br>";

    let fecha=document.createElement("input");
    fecha.type="text";
    fecha.id="fecha";
    form.innerHTML+="Fecha";
    form.appendChild(fecha);
    fecha.placeholder="  ej.   1/2/2003";
    form.innerHTML+="<br>";

    let boton=document.createElement("button");
    form.appendChild(boton);
    boton.type="submit";
    boton.innerHTML="Enviar";
    boton.addEventListener("click",enviarFormulario);
}
function enviarFormulario(){
     
    let nombre=document.getElementById("nombre");
    let apellido=document.getElementById("apellido");
    let email=document.getElementById("email");
    let fechaIntroducida=document.getElementById("fecha");

    let fechaCortada=fechaIntroducida.value.split("/");
    let dia=fechaCortada[0];
    let mes=fechaCortada[1];
    let anho=fechaCortada[2];

    let error=false;

    if(!(/^[a-zA-Z]+$/.test(nombre.value))){
        nombre.style.backgroundColor="red";
        error=true;
    }
    if(!(/^[a-zA-Z]+$/.test(apellido.value))){
        apellido.style.backgroundColor="red";
        error=true;
    }
    if(!(/^[a-zA-Z]+(@gmail.com)$/.test(email.value))){
        email.style.backgroundColor="red";
        error=true;
    }
    
    if(!esFechaValida(anho,mes,dia)){
        fecha.style.backgroundColor="red";
        error=true;
    }
    if(error){
        event.preventDefault();}
    else{
        alert("registrado con exito");
    }
    
}
function esFechaValida(year,mes,dia){
    var fecha = new Date(year,mes-1,dia);
    console.log(fecha);
  
    if (fecha.getDate()!=dia || fecha.getMonth()!=(mes-1) || fecha.getFullYear()!=year) return false;
    else return true;
  }