$(document).ready(function () { 

var topics = ["alpaca", "dog", "elephant", "sloth"];



function printBtn(){
    $("#topics").empty()
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var btn = $("<button>");
        btn.addClass("data-animal");
        btn.text(topics[i]);
        btn.attr("data-type", topics[i]);
        $("#topics").append(btn)
        

        console.log(btn)
    }
}
printBtn()

//on click function
$("<button>").on("click", function(){
    
    //store "data-animal" name from the animal button
    var animal = $(this).attr("data-type");  //btn?
    console.log(animal);

    // query plus animal 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=5veCygIWVC4R1SZy2U75t6OtZnsiVjtt&limit=10&rating:g";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {
        console.log(response)

        //user clicks a button
            // append 10 static gifs should  be  placed on  the  page

        // display rating under GIF

        //click gif, gif animate

            // else another click, gif return to static

        //add form that takes user input and adds to topics array

        //function that takes topic in array and remakes button on page?


    })
})

}) 
