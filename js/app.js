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

function main() {
  /* 
    Aqui agrega tus funciones para unificar solo uno c:
  */

  // Funcion de retornar al inicio
  returTop();
}

main();
