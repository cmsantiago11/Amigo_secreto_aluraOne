// Array para almacenar los nombres
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios extra

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre a la lista
    input.value = ""; // Limpiar el campo de entrada
    actualizarLista(); // Actualizar la lista visualmente
}

// Función para actualizar la lista de nombres en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceAleatorio];

    mostrarResultado(ganador);

    // Limpiar la lista de amigos después del sorteo
    amigos = [];
    actualizarLista();
}

// Función para mostrar el resultado en pantalla
function mostrarResultado(ganador) {
    let listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = ""; // Limpiar la lista de resultados

    let li = document.createElement("li");
    li.textContent = `🎉 ¡El amigo secreto es: ${ganador}! 🎉`;
    li.style.color = "#05DF05"; // Color verde
    li.style.fontSize = "22px";
    li.style.fontWeight = "bold";
    li.style.textAlign = "center";

    listaResultados.appendChild(li);
}
