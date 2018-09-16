function validarEmpresa(respuesta) {
  var ok = true;
  var msg = "La empresa se guardo correctamente!\n";
  
  if(respuesta.nombreEmpresa.value != "" && respuesta.nitEmpresa.value != "") {
    swal(msg, "Da click en OK","success");
    return ok;
  }
}