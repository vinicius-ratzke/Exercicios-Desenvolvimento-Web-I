var lista1 = [];
var lista2 = [];

$(function(event) {
    $("#list-form").on("submit", function(ev) {
        var lenght;

        ev.preventDefault();
        lista1.push($("#texto").val());
        $("#texto").val("");
        lenght = lista1.length
        $("#lista1").append($("<li></li>").html(lista1[lenght - 1]));

        $("#lista1").on("click", "Li", function(ev){
            var item;
            var lenght;
            var index;

            ev.stopImmediatePropagation();
            item = $(this).html();
            lista2.push(item);
            lenght = lista2.length;
            index = lista1.indexOf(item);
            lista1.splice(index,1);

            $(this).remove();

            $("#lista2").append($("<li></li>").html(lista2[lenght - 1]));
        });
    });
});