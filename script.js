//adding current date to document
var date =JSON.stringify(moment().format("MM-DD-YYYY"));
$("#dateHeader").text("Today's Forecast " + " " + date);

//takes users input
$("#submitCity").on("click",function(event){
    event.preventDefault();
    var usersInput = JSON.stringify($("#usersInput").val().trim());
    console.log(usersInput)
    $("#mainDisplay").text( JSON.parse(usersInput) + " " + JSON.parse(date));
});

