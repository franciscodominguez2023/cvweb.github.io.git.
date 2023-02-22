
const bloque= document.querySelector(".bloque");

bloque.addEventListener("mouseenter",() => {
    bloque.style. backgroundColor = "orangered";   /*El bloque cambia de color al poner el cursor sobre él*/
});

bloque.addEventListener("mouseleave",() => {
    bloque.style.backgroundColor = "dodgerblue";  /*Al sacar el cursor el bloque vuelve a su color original*/
});