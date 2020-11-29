$(document).ready(function () {

    $("[data-toggle='tooltip']").tooltip();

    $("[data-toggle='popover']").popover();

    //Формируем запрос
    $(".modal-body").load("https://sashapozharin.github.io img.d-block.w-100", 
    function (response, status, request) {
        
    });

});

$("#btnSelect").click(function (e) { 
    let select = document.querySelector("select.custom-select")
    let url = select.options[select.selectedIndex].value + " " + "div#answer";
});