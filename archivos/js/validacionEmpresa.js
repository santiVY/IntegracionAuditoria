function validarEmpresa(respuesta) {
  var ok = true;
  var msg = "La empresa se guardo correctamente!\n";
  
  if(respuesta.nombreEmpresa.value != "" && respuesta.nitEmpresa.value != "") {
    swal({
        title: msg,
        text: "Da click en el botón aceptar!",
        icon: "success",
        button: "Aceptar",
      });
    return ok;
  }
}