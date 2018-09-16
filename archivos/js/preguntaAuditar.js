$(document).ready(function () {
    getPreguntasAuditar();
});

function getPreguntasAuditar() {
    IDS = [];
    var norma  = getParameterByName('norma');
      $.getJSON("preguntas/"+norma, null, function(response){
        $(".preguntas").html();
        select_template = "<select id='answer_:id' class='form-control'><option value='-1'>N/A</option><option value='0'>NO</option><option value='1'>SI</option></select>";
        for(i=0; i<response.length; i++){
          IDS.push(response[i].id);
          question_select = select_template.replace(":id", response[i].idpregunta);
          tr = "<tr>";
          tr+= "<td>"+response[i].idpregunta+"</td>";
          tr+= "<td>"+response[i].texto+"</td>";
          tr+= "<td>"+question_select+"</td>";
          tr+= "</tr>";
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