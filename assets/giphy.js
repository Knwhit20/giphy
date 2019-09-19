$(document).ready(function () {

    var topics = ["alpaca", "dog", "elephant", "sloth"];



    function printBtn() {
        $("#topics").empty()
        for (var i = 0; i < topics.length; i++) {
            console.log(topics[i]);
            var btn = $("<button>");
            btn.addClass("animal");
            btn.text(topics[i]);
            btn.attr("data-type", topics[i]);
            $("#topics").append(btn)

        }
    }
    printBtn()

    //on click function
    $(".animal").on("click", function () {
        console.log("click");

        //store "data-animal" name from the animal button
        var animal = $(this).attr("data-type");
        console.log(animal);

        // query plus animal 
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=5veCygIWVC4R1SZy2U75t6OtZnsiVjtt&limit=10&rating:g";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    
                    var gifDiv = $("<div>");
                    gifDiv.addClass("gifDiv")

                    var p = $("<p>").text("Rating: " + results[i].rating);

                    var animalImage = $("<img>");

                    animalImage.attr("src", results[i].images.fixed_height_small_still.url);   //small still stored  to src of image
                    animalImage.attr("data-still", results[i].images.fixed_height_small_still.url); //still  image
                    animalImage.attr("data-animate", results[i].images.fixed_height_small.url);  //animated image
                    animalImage.attr("data-state", "still");   //set image state
                    animalImage.addClass("image");
                    gifDiv.append(p, animalImage);
                    $("#gifs-appear-here").append(gifDiv);
                    
                    
                }


            })

       
    });
    //user clicks a button
    // append 10 static gifs should  be  placed on  the  page

    //click gif, gif animate

    // else another click, gif return to static

    //add form that takes user input and adds to topics array

    //function that takes topic in array and remakes button on page?


})


