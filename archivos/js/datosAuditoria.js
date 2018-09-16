$(document).ready(function () {
    getEmpresasForm();
    getNormasForm();
});

function getEmpresasForm() {
    $.getJSON("/empresas", function (data) {
        var items = [];
        items.push("<option>seleccione empresa</option>");
        $.each(data, function (key, val) {
            items.push("<option>"+val.nombre+"</option>");
        });
        $(".empresaAuditoria").append(items);
    });
}
    function getNormasForm() {
        $.getJSON("/normas", function (data) {
            var items = [];
            items.push("<option>seleccione norma</option>");
            $.each(data, function (key, val) {
                items.push("<option>"+val.nombre+"</option>");
            });
            $(".normaAuditoria").append(items);
        });
}