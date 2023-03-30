let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");

let isValid = true;
let idTimeout;
let Precio = 0;
let contador = 0;
let totalEnProductos = 0;

//limpiar campos
btnClear.addEventListener("click", function (event) {
  event.preventDefault();
  txtNombre.value = "";
  txtNumber.value = "";

  contador = 0;
  totalEnProductos = 0;
  costoTotal = 0;
  contadorProductos.innerText = "0";
  productosTotal.innerText = "0";
  precioTotal.innerText = "$ 0";

  localStorage.setItem("contadorProductos", contador);
  localStorage.setItem("totalEnProductos", totalEnProductos);
  localStorage.setItem("constoTotal", costoTotal.toFixed(2));
});

function validarCantidad() {
  if (txtNumber.value.length == 0) {
    return false;
  }
  if (isNaN(txtNumber.value)) {
    return false;
  }
  if (parseFloat(txtNumber.value) <= 0) {
    return false;
  }
  return true;
} // valdiuar cantidad

function getPrecio() {
  return Math.floor(Math.random() * 50 * 100) / 100;
}

//botn agregar
btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  isValid = true;
  clearTimeout(idTimeout);
  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";
  let lista = "Los siguientes deben llenarse correctamente: <ul>";
  if (txtNombre.value.length < 2) {
    //aqui valida la longitud del nombre
    txtNombre.style.border = "solid thin red";
    lista += " <li>Se debe escribir un nombre válido </li>";
    alertValidaciones.style.display = "block";
    isValid = false;
  } else {
    txtNombre.style.border = "";
  } // if txtNombre

  if (!validarCantidad()) {
    txtNumber.style.border = "solid thin red";
    lista += " <li>Se debe escribir un número válido</li>";
    alertValidaciones.style.display = "block";
    isValid = false;
  } else {
    txtNumber.style.border = "";
  }
  lista += "</ul>";
  alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
  idTimeout = setTimeout(function () {
    alertValidaciones.style.display = "none";
  }, 5000);
  if (isValid) {
    Precio = getPrecio();
    contador++;
    let row = `<tr>
                   <th>${contador}</th>
                   <td>${txtNombre.value}</td>
                   <td>${txtNumber.value}</td>
                   <td>${Precio}</td>
           </tr>`;
    cuerpoTabla[0].insertAdjacentHTML("beforeend", row);
    contadorProductos.innerText = contador;
    totalEnProductos += parseFloat(txtNumber.value);
    productosTotal.innerText = totalEnProductos;
    costoTotal += Precio * perseFloat(txtNumber.value);
    precioTotal.innerText = `$ ${costoTotal.toFixed(2)}`;
    localStorage.setItem("contadorProductos", contador);
    localStorage.setItem("totalEnProductos", totalEnProductos);
    localStorage.setItem("constoTotal", costoTotal.toFixed(2));
    txtNombre.value = "";
    txtNumber.value = "";
    txtNombre.focus = "";
  } // el if de isValid
}); // aqui acaba el btnAgregar click
//btnAgregar

txtNumber.addEventListener("blur", function (event) {
  event.preventDefault();
  txtNumber.value = txtNumber.value.trim();
}); // txtNumber.blur
txtNombre.addEventListener("blur", function (event) {
  event.preventDefault();
  txtNombre.value = txtNombre.value.trim();
}); // txtNombre.blur
