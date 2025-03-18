// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos [];

function asignarAmigos(){
    let ingresoAmigo = document.getElementById('amigo');
    let nombre = ingresoAmigo.value.trim();

    if (nombre === ""){
        alert("Por favor, ingrese un nombre.");
        return;
    }

    amigos.push(nombre);

    ingresoAmigo.value = "";

    console.log(amigos);
}

