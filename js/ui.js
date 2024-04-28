function crearHtml(arr) {
  // Verificar que el contenedor existe
  const contenedor = document.querySelector("#contenedor");
  if (!contenedor) return;

  contenedor.innerHTML = ""; // Limpiar el contenedor
  let html = ""; // Acumular el HTML

  arr.forEach((el) => {
    html += `<div class="card">
                   <img src="../img/${el.img}" alt="${el.nombre}">
                   <hr>
                   <h3>${el.nombre}</h3>
                   <p>Precio: $${el.precio}</p>
                   <div class="card-action">
                     <button class="btn btn-success" data-id="${el.id}">+ Información</button>
                   </div>
                 </div>`;
  });

  contenedor.innerHTML = html; // Asignar el HTML acumulado al contenedor
}

// Ejemplo de función mostrarResultados
function mostrarResultados(arr) {
    const contenedor = document.querySelector("#contenedor");
    if (!contenedor) return;
  
    if (arr.length === 0) {
      contenedor.innerHTML = "<p>No se encontraron resultados.</p>";
    } else {
      crearHtml(arr); // Llamar a la función crearHtml
    }
  }
  

// Asegúrate de exportar la función
export { crearHtml };
export { mostrarResultados };

