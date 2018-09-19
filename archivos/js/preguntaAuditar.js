var EMPRESA = "";
var NORMA = "";
var FECHA = "";
var RESULTADO_AUDITORIA = "";

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

    respuesta = [];
    suma = 0;
    var cont_si = 0;
    var cont_no = 0;
    var cont_na = 0;
    var resultado = "";
    var mensaje = "";
    total_campos = IDS.length;

    for(i=1; i <= total_campos; i++){
        respuesta.push(parseInt($("#answer_"+i).val()));
    }

    for(j=0; j < respuesta.length; j++){
        suma += respuesta[j];
        if(respuesta[j] == 1){
            cont_si++;
        }else if(respuesta[j]  == 0){
            cont_na++;
        }else{
            cont_no++;
        }
    }

    mensaje = "Resultados: SI = " + cont_si + " preguntas, NO = " + cont_no + " preguntas, N/A = " + cont_na + "preguntas";

    porcentaje_gana = total_campos * 0.80;

    if(suma > porcentaje_gana){
        resultado = "PASO";
        swal({
            title: "La prueba paso con mas de un 80%",
            text: "Presiona aceptar para continuar" + mensaje,
            icon: "success",
            button: "Aceptar",
          });
          $("#resultadoEncabezado").append(resultado); 
          RESULTADO_AUDITORIA = localStorage["resultadoEncabezado"] = resultado;
    }else{
        resultado = "NO PASO";
        swal({
            title: "La prueba no paso",
            text: mensaje,
            icon: "error",
            button: "Aceptar",
          });
          $("#resultadoEncabezado").append(resultado); 
          RESULTADO_AUDITORIA = localStorage["resultadoEncabezado"] = resultado;
    }
    
  };