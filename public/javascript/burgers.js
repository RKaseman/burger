
// wait for DOM load
$(function () {
    // when .eatStatus button is clicked
    $(".eatStatus").on("click", function (event) {
        var id = $(this).data("id");
        var newEat = $(this).data("neweat");

        var newEatState = {
            devoured: newEat
        };

// request toggles ?
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("changed devour to", newEat);
                // reload updated page
                location.reload();
            }
        );
    });

    // creates new burger from index.handlebars <form>
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        // <input type="text" id="burg" name="name">
        // and <input class="hidden" type="radio" name="devoured" value="1" checked>
        // or <input class="hidden" type="radio" name="devoured" value="0">
        var newBurger = {
            name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // send the variable of <input type="text" id="burg" name="name">
        // and <input type="radio" name="devoured" value="*" *>
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // reload updated page
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // [del]
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // reload updated page
                location.reload();
            }
        );
    });
});



// $(function() {
//     $("#eat").on("click", function(event) {
//         var id = $(this).data("id");
//         event.preventDefault();
//         console.log(this.value);
//         var isEaten = $(this).data("eaten");

//         var eatenState = {
//             devoured: isEaten
//         };


//         // PUT request
//         $.ajax("burgers/" + id, {
//             type: "PUT",
//             data: eatenState
//         }).then(
//             function() {
//                 console.log(isEaten);
//                 location.reload();
//             }
//         )
//     });
// });

