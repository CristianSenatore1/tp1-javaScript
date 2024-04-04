const user = JSON.parse(localStorage.getItem("login_success")) || false;
if (!user) {
  window.location.href = "./login.html";
}

let stockAutos = [
  { modelo: "Fiat Cronos", año: "2022", precio: 10000 },
  { modelo: "Volkswagen T-Cross", año: "2021", precio: 15000 },
  { modelo: "Porsche Cayenne", año: "2019", precio: 20000 },
];



const btnSearch = document.querySelector("#btnSearch"),
  inputIngreso = document.querySelector("#ingreso"),
  contenedor = document.querySelector("#contenedor");


const autos = [
  { id: 1, nombre: "Peugeot 208", precio: 22000000, img: "2080km.jpg" },
  { id: 2, nombre: "Peugeot 308", precio: 31000000, img: "galeria0km-2.jpg" },
  { id: 3, nombre: "Peugeot 508", precio: 43000000, img: "galeria0km-3.jpg" },
  { id: 4, nombre: "Peugeot Partner Furgon", precio: 23000000, img: "partner0km.jpg"},
  { id: 5, nombre: "Peugeot Boxer Furgon", precio: 29000000, img: "boxer0km.jpg"},
  { id: 6, nombre: "Peugeot 3008 GT-line", precio: 44000000, img: "galeria0km-4.jpg"},
  { id: 7, nombre: "Peugeot 5008 GT-line", precio: 5800, img: "galeria0km-6.jpg"},
  { id: 8, nombre: "Peugeot 208 GTI", precio: 28000000, img: "galeria0km-1.jpg"},
  { id: 9, nombre: "Peugeot 308 GTI", precio: 37500000, img: "galeria0km-9.jpg"},
];

function buscarAuto(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarAuto(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}

function crearHtml(arr) {
  contenedor.innerHTML = "";
  let html;
  for (const el of arr) {
    html = `<div class="card">
                <img src="../img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button class="btn btn-success" id="${el.id}">+ Informacion</button>
                  </div>
              </div>`;
    contenedor.innerHTML = contenedor.innerHTML + html;
  }
}
crearHtml(autos);

btnSearch.addEventListener("click", () => {
  const filtrados = filtrarAuto(autos, inputIngreso.value);
  console.log(filtrados);
  mostrarResultados(filtrados);
});

function mostrarResultados(arr) {
  if (arr.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron resultados.</p>";
  } else {
    crearHtml(arr);
  }
}

const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  alert("Hasta pronto!");
  localStorage.removeItem("login_success");
  window.location.href = "../login.html";
});

const btnRedirect = document.querySelector("#btnRedirect");
btnRedirect.addEventListener("click", redirectToAnotherPage);
function redirectToAnotherPage() {
  window.location.href = '.financiacion.html';
}
