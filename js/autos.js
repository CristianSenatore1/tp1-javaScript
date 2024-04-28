let stockAutos = [
  { modelo: "Fiat Cronos", año: "2022", precio: 10000 },
  { modelo: "Volkswagen T-Cross", año: "2021", precio: 15000 },
  { modelo: "Porsche Cayenne", año: "2019", precio: 20000 },
];

const autos = [
  { id: 1, nombre: "Peugeot 208", precio: 22000000, img: "2080km.jpg" },
  { id: 2, nombre: "Peugeot 308", precio: 31000000, img: "galeria0km-2.jpg" },
  { id: 3, nombre: "Peugeot 508", precio: 43000000, img: "galeria0km-3.jpg" },
  {
    id: 4,
    nombre: "Peugeot Partner Furgon",
    precio: 23000000,
    img: "partner0km.jpg",
  },
  {
    id: 5,
    nombre: "Peugeot Boxer Furgon",
    precio: 29000000,
    img: "boxer0km.jpg",
  },
  {
    id: 6,
    nombre: "Peugeot 3008 GT-line",
    precio: 44000000,
    img: "galeria0km-4.jpg",
  },
  {
    id: 7,
    nombre: "Peugeot 5008 GT-line",
    precio: 5800,
    img: "galeria0km-6.jpg",
  },
  {
    id: 8,
    nombre: "Peugeot 208 GTI",
    precio: 28000000,
    img: "galeria0km-1.jpg",
  },
  {
    id: 9,
    nombre: "Peugeot 308 GTI",
    precio: 37500000,
    img: "galeria0km-9.jpg",
  },
];
export { autos }; 

function buscarAuto(arr, filtro) {
    return arr.find((el) => el.nombre.includes(filtro));
  }
  function filtrarAuto(arr, filtro) {
    return arr.filter((el) => el.nombre.includes(filtro));
  }

  const contenedor = document.querySelector("#contenedor");
if (!contenedor) {
  console.error("No se encontró el contenedor con el ID 'contenedor'.");
}

export { buscarAuto, filtrarAuto };