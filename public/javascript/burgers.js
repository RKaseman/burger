
$(function() {
    $("#eat").on("click", function(event) {
        var id = $(this).data("id");
    })
});

$.ajax("burgers" + id, {
    type: "PUT",

})