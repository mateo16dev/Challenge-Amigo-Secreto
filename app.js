// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let ingresoAmigo = document.getElementById("amigo");
    let nombre = ingresoAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    amigos.push(nombre);

    actualizarLista();

    ingresoAmigo.value = "";

}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    
    for (let amigo of amigos) {
        let li = document.createElement("li")
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}