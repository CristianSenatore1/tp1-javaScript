import { user } from './auth.js';
import { autos, buscarAuto, filtrarAuto } from './autos.js';
import { crearHtml, mostrarResultados } from './ui.js';




const contenedor = document.querySelector("#contenedor"); // Declarar y asignar antes de usar


  const btnSearch = document.querySelector("#btnSearch");
  const inputIngreso = document.querySelector("#ingreso");





  btnSearch.addEventListener("click", () => {
    const filtrados = filtrarAuto(autos, inputIngreso.value);
    console.log(filtrados);
    mostrarResultados(filtrados);
  });


document.addEventListener("DOMContentLoaded", () => {
  crearHtml(autos); // Asegúrate de llamar a la función después de que el DOM esté listo
});