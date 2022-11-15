// DISCLAIMER: This JavaScript file has some errors.

function enviar() {
    var nome = document.getElementById("fld_1").value.trim().split(" ");
    var dataNascimento = document.getElementById("field_2");
    if (nome.length < 2) {
        document.getElementById("fld_1_Error").classList.remove("d-none");
        return false;
    }
    else {
        if (!document.getElementById("fld_1_Error").classList.contains("d-none")) {
            document.getElementById("fld_1_Error").classList.add("d-none");
        }
    }

    if (dataNascimento.value == "") {
        document.getElementById("field_2_Error1").classList.remove("d-none");
        return false;
    }
    else {
        if (!document.getElementById("field_2_Error1").classList.contains("d-none")) {
            document.getElementById("field_2_Error1").classList.add("d-none");
        }
    }

    var date_html = document.getElementById("field_2").value;
    var date = new Date(date_html).getFullYear();
    if ((2022 - date) > 18) {
        document.getElementById("field_2_Error2").classList.remove("d-none");
        return false;
    }
    else {
        if (!document.getElementById("field_2_Error2").classList.contains("d-none")) {
            document.getElementById("field_2_Error2").classList.add("d-none");
        }
    }

    for (i = 0; i <= 9; i++) {
        var a = document.getElementById("field_3" + i);
        if (a.value < 0 || a.value > 20) {
            document.getElementById("field_3" + i + "_Error").classList.remove("d-none");
            return false;
        }
        else {
            if (!document.getElementById("field_3" + i + "_Error").classList.contains("d-none")) {
                document.getElementById("field_3" + i + "_Error").classList.add("d-none");
            }
        }

        if (a.value == "") {
            document.getElementById("fld_all_Error").classList.remove("d-none");
            return false;
        }
        else {
            if (!document.getElementById("fld_all_Error").classList.contains("d-none")) {
                document.getElementById("fld_all_Error").classList.add("d-none");
            }
        }
    }

    calcular();

    return true;
    //--- TODO: escrever o código em falta aqui...
    //--- Se a função retornar true o formulário será enviado; 
    //--- Se a função retornar false, o formulário não será enviado.
}

function calcular() {
    for (i = 0; i <= 9; i++) {
        var a = document.getElementById("field_3" + i);
        if (a.value < 0 || a.value > 20) {
            document.getElementById("field_3" + i + "_Error").classList.remove("d-none");
            return false;
        }
        else {
            if (!document.getElementById("field_3" + i + "_Error").classList.contains("d-none")) {
                document.getElementById("field_3" + i + "_Error").classList.add("d-none");
            }
        }

        if (a.value == "") {
            document.getElementById("fld_all_Error").classList.remove("d-none");
            return false;
        }
        else {
            if (!document.getElementById("fld_all_Error").classList.contains("d-none")) {
                document.getElementById("fld_all_Error").classList.add("d-none");
            }
        }
    }

    var soma_1semestre = 0;
    for (i = 0; i <= 4; i++) {
        var a = document.getElementById("field_3" + i);
        soma_1semestre += parseInt(a.value);
    }
    var media_1semestre = soma_1semestre/5;

    var soma_2semestre = 0;
    for (i = 5; i <= 9; i++) {
        var a = document.getElementById("field_3" + i);
        soma_2semestre += parseInt(a.value);
    }
    var media_2semestre = soma_2semestre/5;

    var media_total = (media_1semestre + media_2semestre)/2;

    var input_1s = document.getElementById("avg_1");
    input_1s.innerText = media_1semestre;

    var input_2s = document.getElementById("avg_2");
    input_2s.innerText = media_2semestre;

    var input_total = document.getElementById("avg_total");
    input_total.innerText = media_total;
}

//--- Limpar as mesagens de erro que estiverem ligadas
function limpar() {
    var name = document.getElementById("fld_1");
    name.innerText = "";

    var dataNascimento = document.getElementById("field_2");
    dataNascimento.innerText = "";


    for (i = 0; i <= 9; i++) {
        var a = document.getElementById("field_3" + i);
        a.innerText = "";
    }
}

function showTab(name) {
    var selectedTab = document.getElementById(name);

    if (name == 'home-tab') {
        var otherTab = document.getElementById("report-tab");
        var content = document.getElementById("home");
        var otherContent = document.getElementById("report");
    }
    else {
        var otherTab = document.getElementById("home-tab");
        var content = document.getElementById("report");
        var otherContent = document.getElementById("home");
    }
    
    content.classList.remove("d-none");
    otherContent.classList.add("d-none");
    selectedTab.classList.add("active");
    otherTab.classList.remove("active");
}


// FÓRMULAS
// ----------------------------------------------------------------
// new Date("2019-11-09").getDate();     //--- Devolverá 9
// new Date("2019-11-09").getMonth();    //--- Devolverá 11
// new Date("2019-11-09").getFullYear(); //--- Devolverá 2019
//
// document.getElementById("myCheck").checked //--- testa se uma checkbox/radiobox está checked
