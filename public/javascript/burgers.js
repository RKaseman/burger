
$(function() {
    $("#eat").on("click", function(event) {
        var id = $(this).data("id");
        console.log(this);
        var isEaten = $(this).data("eaten");

        var eatenState = {
            devoured: isEaten
        };


        // PUT request
        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: eatenState
        }).then(
            function() {
                console.log(isEaten);
                location.reload();
            }
        )
    });
});

        // event.preventDefault();
