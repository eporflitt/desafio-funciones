// Requerimiento 2.2
// function pintar(elemento) {
//     elemento.style.backgroundColor = 'yellow';
// }

// const ele = document.getElementById("ele1");
// ele.addEventListener("click", function() {
//     pintar(ele);
// });

// Requerimiento 2.3

function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});
