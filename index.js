document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("#formulario");

  const totalVotosSpan = document.querySelector("#totalVotos");
  const alcalde = document.querySelector("#ganador");

  let vSergio = parseInt(localStorage.getItem("votosSergio")) || 0;
  let vYider = parseInt(localStorage.getItem("votosYider")) || 0;
  let vFranklin = parseInt(localStorage.getItem("votosFranklin")) || 0;
  let vBlanco = parseInt(localStorage.getItem("votosBlanco")) || 0;

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const candidatoSelectInput = document.querySelector(
      'input[name="candidato"]:checked'
    );
    if (candidatoSelectInput) {
      const candidatoSeleccionado = candidatoSelectInput.value;
      switch (candidatoSeleccionado) {
        case "Sergio":
          vSergio++;
          break;
        case "Yider":
          vYider++;
          break;
        case "Franklin":
          vFranklin++;
          break;
        case "Voto":
          vBlanco++;
          break;
        default:
          break;
      }

      guardaLocalStorage();
      actualizarResultados();
    }
  });

  function guardaLocalStorage() {
    localStorage.setItem("votosSergio", vSergio);
    localStorage.setItem("votosYider", vYider);
    localStorage.setItem("votosFranklin", vFranklin);
    localStorage.setItem("votosBlanco", vBlanco);
  }

  function actualizarResultados() {
    const totalVotos = vSergio + vYider + vFranklin + vBlanco;
    totalVotosSpan.innerHTML = totalVotos;

    let maxVotos = Math.max(vSergio, vYider, vFranklin, vBlanco);

    if (maxVotos === vSergio) {
      ganador = "Sergio Mauricio";
    } else if (maxVotos === vYider) {
      ganador = "Yider Luna";
    } else if (maxVotos === vFranklin) {
      ganador = "Franklin Alexander";
    } else if (maxVotos === vBlanco) {
      ganador = "Voto en Blanco";
    }
    alcalde.innerHTML = ganador;
  }
  actualizarResultados();
});
