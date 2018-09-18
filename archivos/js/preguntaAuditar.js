var EMPRESA = "";
var NORMA = "";
var FECHA = "";

$(document).ready(function () {
    getPreguntasAuditar();
    $(document).ready(()=>{
        EMPRESA = localStorage["empresa"];
        NORMA = localStorage["norma"];
        FECHA = localStorage["fecha"];
    });
});

function getPreguntasAuditar() {
    IDS = [];
    var norma = getParameterByName('norma');
    $.getJSON("preguntas/" + norma, null, function (response) {
        $(".preguntas").html();
        select_template = "<select id='answer_:id' class='form-control'><option value='0'>N/A</option><option value='-1'>NO</option><option value='1'>SI</option></select>";
        for (i = 0; i < response.length; i++) {
            IDS.push(response[i].idpregunta);
            question_select = select_template.replace(":id", response[i].idpregunta);
            tr = "<tr>";
            tr += "<td>" + response[i].idpregunta + "</td>";
            tr += "<td>" + response[i].texto + "</td>";
            tr += "<td class='respuesta'>" + question_select + "</td>";
            tr += "</tr>";
            $(".preguntas").append(tr);     
        }
    });
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function enviar_respuesta(){
    RESPUESTA = [];
    for(i=1; i <= IDS.length; i++){
       RESPUESTA.push(parseInt($("#answer_"+i).val()));
    }
    var suma = 0;
    var resultado = "";
    for(j=0; j < RESPUESTA.length; j++){
        suma += RESPUESTA[j];
    }
    porcentaje_gana = suma * 0,80;
    if(suma > porcentaje_gana){
        resultado = "PASO";
        swal({
            title: "La prueba paso con mas de un 80%",
            text: "Da click en el botón aceptar!",
            icon: "success",
            button: "Aceptar",
          });
    }else{
        resultado = "NO PASO";
        swal({
            title: "La prueba no paso",
            text: "La auditoria no cumple con los requisistos minimos para pasar la auditoria!",
            icon: "error",
            button: "Aceptar",
          });
    }
  };