let txtNombre = document.getElementById("Name");

let txtNumber = document.getElementById("Number");
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

//limpiar campos
btnClear.addEventListener("click", function (event) {
  event.preventDefault();
  txtNombre.value = "";
  txtNumber.value = "";
});
//
btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  txtNombre.value = txtNombre.value.trim();
  if (txtNombre.value.length == 0) {
    txtNombre.style.border = "solid thin reds";
  } else {
    txtNombre.style.border = "";
  }
  if (txtNumber.value.length == 0) {
    txtNumber.style.border = "solid thin reds";
  } else {
    txtNumber.style.border = "";
  }
});
