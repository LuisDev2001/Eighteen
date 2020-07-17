//Funcion de return top
function returTop() {
  let btnReturnTop = document.querySelector("#js-return");

  // Evento click del boton return top
  btnReturnTop.addEventListener("click", () => {
    window.scroll({
      top: 100 + "%",
      behavior: "smooth",
    });
  });
}

function scrollReveal() {
  ScrollReveal({ reset: true }).reveal(".header", { delay: 300 });
  ScrollReveal({ reset: true }).reveal(".section", { delay: 250 });
  ScrollReveal({ reset: true }).reveal(".phrase", {
    delay: 650,
    scale: .85,
  });
  ScrollReveal({ reset: true }).reveal(".goBottom", { 
    delay: 1000,
    rotate: {
      x:500,
      y:500 
    } 
  });
}

function main() {
  // Funcion de retornar al inicio
  returTop();

  // Funciton of all properties of scroll reveal js
  scrollReveal();
}

main();
