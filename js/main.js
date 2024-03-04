let stockAutos = [
  { modelo: "Fiat Cronos", año: "2022", precio: 10000 },
  { modelo: "Volkswagen T-Cross", año: "2021", precio: 15000 },
  { modelo: "Porsche Cayenne", año: "2019", precio: 20000 },
];

let nombre = prompt("Ingrese su nombre: ");
let mail = prompt("Ingrese su mail: ");

let edad = prompt("Ingrese su edad: ");
while (true) {
  if (isNaN(edad)) {
    prompt("Por favor, ingresa un número válido.");
    break;
  } else {
    edad = parseInt(edad); // Convertir la edad a un número entero
    if (edad < 0 || edad > 90) {
      alert(
        "Datos ingresados incorrectos. Por favor, ingresa una edad válida."
      );
      break;
    } else if (edad >= 0 && edad <= 17) {
      alert("Eres menor de edad. No puedes utilizar nuestros servicios.");
      break;
    } else {
      alert("Bienvenido, puedes utilizar nuestros servicios.");
      while (true) {
        let ingreso = prompt(
          "Selecciona un area de consulta \n 1- Ventas \n 2- Administracion \n 3- Taller \n 4- Salir"
        );
        switch (ingreso) {
          case "1":
            let opcionVentas = prompt(
              "Has elegido Ventas!! \n Selecciona una opción: \n 1- Ver Stock  \n 2- Calculadora de Financiación  \n 3- Agregar Auto al stock \n 4- Buscar autos"
            );

            switch (opcionVentas) {
              case "2":
                calculadoraFinanciacion();
                break;
              case "1":
                mostrarStock();
                break;
              case "3":
                agregarAuto();
                break;
              case "4":
                buscarAutos();
                break;
              default:
                alert("Opción no válida");
                break;
            }
            break;
          case "2":
            alert("Seleccionaste Administración");
            break;
          case "3":
            alert("Seleccionaste Taller");
            break;
          case "4":
            alert("Gracias por utilizar nuestros servicios.");
            break;
          default:
            alert("No seleccionaste ninguna opción válida");
            break;
        }

        break;
      }
      break;
    }
  }
}

function saludar(nombre) {
  console.log("Hola " + nombre + " Bienvenido a tu consecionario Peugeot");
}
saludar(nombre);

function calculadoraFinanciacion() {
  let valor = ["Usado 1 ($10,000)", "Usado 2 ($15,000)", "Usado 3 ($20,000)"];
  let usadoElegido = parseInt(
    prompt("Elige el valor del auto: \n" + valor.join("\n"))
  );

  let porcentajeEntrega = parseInt(
    prompt("Ingrese el porcentaje de entrega que desea cubrir: ")
  );
  let valorAuto = 0;

  switch (usadoElegido) {
    case 1:
      valorAuto = 10000;
      break;
    case 2:
      valorAuto = 15000;
      break;
    case 3:
      valorAuto = 20000;
      break;
    default:
      alert("Opción de usado no válido");
      return;
  }

  let montoEntrega = (porcentajeEntrega / 100) * valorAuto;
  let montoPrestamo = valorAuto - montoEntrega;

  let cuotas = parseInt(
    prompt("Ingrese la cantidad de cuotas: (12 , 24 o 36?)")
  );
  let interesPorCuota = 0;

  switch (cuotas) {
    case 12:
      interesPorCuota = 0.05; // 5% de interés
      break;
    case 24:
      interesPorCuota = 0.08; // 8% de interés
      break;
    case 36:
      interesPorCuota = 0.1; // 10% de interés
      break;
    default:
      alert("Cantidad de cuotas no válida");
      return;
  }

  let montoTotalPrestamo = montoPrestamo * (1 + interesPorCuota);
  let montoCuota = montoTotalPrestamo / cuotas;

  alert(`Detalles de financiación:
  Valor del auto: $${valorAuto}
  Porcentaje de entrega: ${porcentajeEntrega}%
  Monto de la entrega: $${montoEntrega}
  Monto del préstamo: $${montoPrestamo}
  Cantidad de cuotas: ${cuotas}
  Monto de cada cuota: $${montoCuota.toFixed(2)}`);
}

function mostrarStock() {
  let mensaje =
    "Has seleccionado ver el stock. Actualmente esta disponible: \n";
  mensaje += "--------------------------------------------\n";
  stockAutos.forEach((auto, index) => {
    mensaje +=
      index +
      1 +
      " - " +
      auto.modelo +
      " año: " +
      auto.año +
      " $" +
      auto.precio +
      "\n";
  });
  mensaje += "--------------------------------------------\n";
  alert(mensaje);
}

function agregarAuto() {
  let modelo = prompt("Ingrese el modelo del auto:");
  let año = prompt("Ingrese el año del auto:");
  while(isNaN(año) || año.length !==40){
    año = prompt("Ingrese un año valido (formato AAAA): ");
  }
  let precio = prompt("Ingrese el precio del auto:");
  while(isNaN(precio) || precio <=0) {
    precio = prompt("Ingrese un precio Valido: ");
  }

  let nuevoAuto = { modelo: modelo, año: año, precio: precio };
  stockAutos.push(nuevoAuto);

  alert(
    `Se agregó el auto al stock:\nModelo: ${modelo}\nAño: ${año}\nPrecio: ${precio}`
  );
}

function AutoStock(modelo, año, precio) {
  this.modelo = modelo;
  this.año = año;
  this.precio = precio;
}

const auto1 = new AutoStock("208", "2024", 150000);
const auto2 = new AutoStock("308", "2023", 200000);

function buscarPorModelo(modelo) {
  const autosEncontrados = stockAutos.filter(auto => auto.modelo.toLowerCase().includes(modelo.toLowerCase()));
  return autosEncontrados;
}

function buscarPorAño(año) {
  const autosEncontrados = stockAutos.filter(auto => auto.año === año);
  return autosEncontrados;
}

function buscarPorPrecio(minPrecio, maxPrecio) {
  const autosEncontrados = stockAutos.filter(auto => auto.precio >= minPrecio && auto.precio <= maxPrecio);
  return autosEncontrados;
}

function buscarAutos() {
  let opcionBusqueda = prompt(
      "Selecciona una opción de búsqueda: \n 1- Por modelo \n 2- Por año \n 3- Por rango de precios"
  );

  switch (opcionBusqueda) {
      case "1":
          let modeloBusqueda = prompt("Ingresa el modelo a buscar:");
          let autosPorModelo = buscarPorModelo(modeloBusqueda);
          mostrarResultados(autosPorModelo);
          break;
      case "2":
          let añoBusqueda = prompt("Ingresa el año a buscar:");
          let autosPorAño = buscarPorAño(añoBusqueda);
          mostrarResultados(autosPorAño);
          break;
      case "3":
          let minPrecio = prompt("Ingresa el precio mínimo:");
          let maxPrecio = prompt("Ingresa el precio máximo:");
          let autosPorPrecio = buscarPorPrecio(minPrecio, maxPrecio);
          mostrarResultados(autosPorPrecio);
          break;
      default:
          alert("Opción de búsqueda no válida");
          break;
  }
}

function mostrarResultados(resultados) {
  let mensaje = "Resultados de la búsqueda: \n";
  if (resultados.length === 0) {
      mensaje += "No se encontraron autos que coincidan con la búsqueda.";
  } else {
      resultados.forEach((auto, index) => {
          mensaje += `${index + 1} - ${auto.modelo}, Año: ${auto.año}, Precio: ${auto.precio} \n`;
      });
  }
  alert(mensaje);
}