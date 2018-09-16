function validarNorma(respuesta) {
    var ok = true;
    var msg = "La norma se guardo correctamente!\n";
    
    if(respuesta.nombreNorma.value != "") {
      swal({
        title: msg,
        text: "Da click en el botón aceptar!",
        icon: "success",
        button: "Aceptar",
      });
      return ok;
    }
  }