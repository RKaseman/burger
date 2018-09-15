
$(function() {
    $("#eat").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");

        // request
        $.ajax("burgers" + id, {
            type: "PUT",
            data: id
        }).then(
            function(callBack) {
                console.log(callBack);
                // location.reload();
            }
        )
    });
});

