document.addEventListener("DOMContentLoaded", () => {
    //Almacenamos los id a trabajar dentro de sus variables modal - modalImg
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const cerrar = document.querySelector(".cerrar");

    const imagenes = document.querySelectorAll(".flip-card-back img");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    cerrar.addEventListener("clck", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }

    });
});


/*
let nombres = "Quesnay Chacón";
let datos = ["Quesnay Chacón", "SENATI", "Estudiante"];

console.log(nombres);
console.log(datos[2]);

//Esto es un comentario
let edad = prompt("Ingresa tu edad: ");
console.log(edad);

//Trabajando con funciones
function mostrarMensaje() {
    alert("Hola mundo");
}

function sumar(){
    let n1 = parseInt(prompt("Ingresa tu primer número: "));
    let n2 = parseInt(prompt("Ingresa tu segurdo número"));
    alert("El resultado es: "+(n1 + n2));
}

function cambiarColor(){
    let texto = document.getElementById("texto");
    texto.style.color= "blue";
}
*/

