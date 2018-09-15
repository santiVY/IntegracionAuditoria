$(document).ready(function () {
    getPreguntasAuditar();
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