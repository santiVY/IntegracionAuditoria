$(document).ready(function () {
    IDS = [];
      $.getJSON("/preguntasAuditoria", function(response){
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
});

function getPreguntasAuditar() {
    $.getJSON("/preguntasAuditoria", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<tr><td>" + (items.length + 1) + "</td> <td>" + val.texto + "</td> <td> si </td> </tr>");
        });
        console.log(items);
        $(".preguntas").append(items);
    });
}