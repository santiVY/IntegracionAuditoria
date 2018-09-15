$(document).ready(function () {
    getEmpresasForm();
    getNormasForm();
});

function getEmpresasForm() {
    $.getJSON("/empresas", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<option>"+val.nombre+"</option>");
        });
        console.log(items);
        $(".empresaAuditoria").append(items);
    });
}
    function getNormasForm() {
        $.getJSON("/normas", function (data) {
            var items = [];
            $.each(data, function (key, val) {
                items.push("<option>"+val.nombre+"</option>");
            });
            console.log(items);
            $(".normaAuditoria").append(items);
        });
}