function validarNorma(respuesta) {
    var ok = true;
    var msg = "La norma se guardo correctamente!\n";
    
    if(respuesta.nombreNorma.value != "") {
      swal(msg, "Da click en OK","success");
      return ok;
    }
  }