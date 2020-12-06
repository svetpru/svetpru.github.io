$(document).ready(function () {

    $("[data-toggle='tooltip']").tooltip();

    $("[data-toggle='popover']").popover();
});


$("#btnSelect").click(function (e) {
    //переменные
    let select = document.querySelector("select.custom-select")
    let url = select.options[select.selectedIndex].value + " " + "div#answer";


    document.querySelector("#msgLabel").innerHTML = "User: " + select.options[select.selectedIndex].value;

    //Формируем запрос
    $(".modal-body").load(url, function (response, status, request) {
        //Убрать аттрибут id
        document.querySelector(".modal-body>div").id = "";
        $("#msgBox").modal("show")
    });
});