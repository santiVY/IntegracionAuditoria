$(document).ready(function () {
    getAuditoria();
    getEmpresas();
    getNorma();
    getEmpresasForm();
});

function getEmpresas() {
    $.getJSON("/empresas", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<tr><td>" + (items.length + 1) + "</td> <td>" + val.nombre + "</td> <td>" + val.nit + "</td> </tr>");
        });
        $(".empresas").append(items);
    });
}

function getAuditoria() {
    $.getJSON("/auditorias", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<tr><td>" + (items.length + 1) + "</td> <td>" + val.nombre + "</td> <td>" + val.nit + "</td> </tr>");
        });
        $(".auditorias").append(items);
    });

}
function getNorma() {
    $.getJSON("/normas", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<tr><td>" + (items.length + 1) + "</td> <td>" + val.nombre + "</td> </tr>");
        });
        $(".normas").append(items);
    });
}