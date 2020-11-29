
$(document).ready(function () {

    $("[data-toggle='tooltip']").tooltip();

    $("[data-toggle='popover']").popover();
});


$("#btnSelect").click(function (e) { 
    let select = document.querySelector("select.custom-select")
    let url = select.options[select.selectedIndex].value + " " + "div#answer";
    
    //Формируем запрос
    $(".modal-body").load(url, function (response, status, request) {
        //Убрать аттрибут id
        document.querySelector(".modal-body>div").id="";
    });
});