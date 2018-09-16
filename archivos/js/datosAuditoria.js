$(document).ready(function () {
    getEmpresasForm();
    getNormasForm();
});

function getEmpresasForm() {
    $.getJSON("/empresas", function (data) {
        var items = [];
        items.push("<option>seleccione empresa</option>");
        $.each(data, function (key, val) {
            items.push("<option>" + val.nombre + "</option>");
        });
        $(".empresaAuditoria").append(items);
    });
}
function getNormasForm() {
    $.getJSON("/normas", function (data) {
        var items = [];
        items.push("<option>seleccione norma</option>");
        $.each(data, function (key, val) {
            items.push("<option>" + val.nombre + "</option>");
        });
        $(".normaAuditoria").append(items);
    });
}

function validar(resultado) {
    var ok = true;
    var msg = "Debes seleccionar algo en los campos:\n";
    if (resultado.elements["nombreNorma"].value == "" || resultado.elements["nombreNorma"].value == "seleccione norma") {
        msg += "- Norma\n";
        ok = false;
    }

    if (resultado.elements["fecha"].value == "" || resultado.elements["fecha"].value == "dd/mm/aaaa") {
        msg += "- Fecha\n";
        ok = false;
    }

    if (resultado.empresa.value == "" || resultado.empresa.value == "seleccione empresa") {
        msg += "- Empresa\n";
        ok = false;
    }

    if (ok == false)
        swal({
            title: msg,
            text: "Da click en el boton aceptar para ingresar los datos",
            icon: "warning",
            button: "Aceptar",
          });
    return ok;
}