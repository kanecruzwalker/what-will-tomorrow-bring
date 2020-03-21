//adding current date to document
var date =JSON.stringify(moment().format("MM-DD-YYYY"));
$("#dateHeader").text("Today's Forecast " + " " + date);

//takes users input
$("#submitCity").on("click",function(event){
    event.preventDefault();
    var usersInput = JSON.stringify($("#usersInput").val().trim());
    console.log(usersInput)
    $("#mainDisplay").text( JSON.parse(usersInput) + " " + JSON.parse(date));

    $("#firstSearch").text( JSON.parse(usersInput));
});

//place holder area must be array of sorts 
// possible function to cycle through searches. 
// probably needs some looping 
// $("#firstSearch").on("click", function (event) {
//     event.preventDefault();
//     //full assigned usersInput from it and re insert it to search

// });
