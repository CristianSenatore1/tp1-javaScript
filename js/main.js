let nombre = prompt("Ingrese su nombre: ");
let mail = prompt("Ingrese su mail: ");

let edad = prompt("Ingrese su edad: ");
while (true){
  if (isNaN(edad)){
    prompt("Por favor, ingresa un número válido.");
    break;
  } else {
    edad = parseInt(edad); // Convertir la edad a un número entero
    if (edad < 0 || edad > 90) {
      alert("Datos ingresados incorrectos. Por favor, ingresa una edad válida.");
      break;
    } else if (edad >= 0 && edad <= 17) {
      alert("Eres menor de edad. No puedes utilizar nuestros servicios.");
      break;
    } else {
      alert("Bienvenido, puedes utilizar nuestros servicios.");
      let ingreso = prompt("Selecciona un area de consulta \n 1- Ventas \n 2- Administracion \n 3- Taller");
      switch (ingreso) {
        case "1":
          let opcionVentas = prompt("Has elegido Ventas!! \n Selecciona una opción: \n 1- Ver Stock  \n 2- Calculadora de Financiación ");
      
          switch (opcionVentas) {
            case "2":
              calculadoraFinanciacion();
              break;
            case "1":
              mostrarStock();
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
        default:
          alert("No seleccionaste ninguna opción válida");
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
  let valor = [
    "Usado 1 ($10,000)",
    "Usado 2 ($15,000)",
    "Usado 3 ($20,000)",
  ];
  let usadoElegido = parseInt(prompt("Elige el valor del auto: \n" + valor.join("\n")));

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

  let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: (12 , 24 o 36?)"));
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
  alert("Has seleccionado ver el stock. Actualmente esta disponible: \n 1 - Fiat Cronos 2022 $10.000 \n 2 - Porsche Cayenne 2019 $20.000 \n 3 - Volkswagen T-Cross 2021 $15.000");
}
