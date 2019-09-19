$(document).ready(function () {

    var topics = ["peru", "usa", "croatia", "france", "england", "italy", "japan", "netherlands", "finland", "egypt",  "kenya", "nigeria", "ghana", "india", "chile", "brazil", "canada", "morroco", "scotland", "ireland"];



    function printBtn() {
        $("#topics").empty()
        for (var i = 0; i < topics.length; i++) {
            console.log(topics[i]);
            var btn = $("<button>");
            btn.addClass("animal");
            btn.text(topics[i]);
            btn.attr("data-type", topics[i]);
            $("#topics").append(btn);

        }
    }
    

    function addButton() {
        $("#submitAnimal").on("click", function() {
            event.preventDefault();
            console.log("click");
            var animalInput = $("#animalInput").val().trim();
                if (animalInput === "") {
                    return false;
                }
                    
            
            topics.push(animalInput);
            printBtn();

            
        })
    }

    printBtn()
    addButton()

    //on click function
    $("#topics").on("click",".animal", function () {
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
                $("#gifs-appear-here").empty()
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    
                    var gifDiv = $("<div>");
                    gifDiv.addClass("gifDiv")

                    var p = $("<p>").text("Rating: " + results[i].rating);

                    var animalImage = $("<img>");

                    animalImage.attr("src", results[i].images.fixed_height_still.url);   //small still stored  to src of image
                    animalImage.attr("data-still", results[i].images.fixed_height_still.url); //still  image
                    animalImage.attr("data-animate", results[i].images.fixed_height.url);  //animated image
                    animalImage.attr("data-state", "still");   //set image state
                    animalImage.addClass("image");
                    gifDiv.prepend(p);
                    gifDiv.prepend(animalImage);
                    $("#gifs-appear-here").prepend(gifDiv);
                    
                    
                }
            })
            //on click animate function
        $(document).on("click", ".image", function () {

            var state = $(this).attr("data-state");

            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }

        })
       
    });
   
    


})

// not all gifs respond to click
// how to add button to top list of buttons
//format buttons 3 on row
