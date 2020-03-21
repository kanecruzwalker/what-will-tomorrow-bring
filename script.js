//adding current date to document
var date =JSON.stringify(moment().format("MM-DD-YYYY"));
$("#dateHeader").text("Today's Forecast " + " " + date);

//takes users input
$("#submitCity").on("click",function(event){
    var usersInput = JSON.stringify($("#usersInput").val().trim());
    event.preventDefault();
    console.log(usersInput)
    $("#mainDisplay").text( JSON.parse(usersInput) + " " + JSON.parse(date));

    $("#firstSearch").text( JSON.parse(usersInput));
});

// function displayWeatherInfo() {
//     var weatherData = $(this).attr("data-name");
//     var queryURL = "api.openweathermap.org/data/2.5/weather?q="+ weatherData + "&appid=daf08b427b26f11b51a8b3849391acfc"}

//     ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
    
//     });
// }









// function displayWeather() {
//     var temperature = $(this).attr("data-name");
//     var weatherQueryUrl = "api.openweathermap.org/data/2.5/weather?q="+ usersInput + "&appid=daf08b427b26f11b51a8b3849391acfc"
//     console.log(weatherQueryUrl);
    
//     $.ajax({
//         url: weatherQueryUrl,
//         method: "GET"
//     }).then(function(result){ 
//         console.log(result);
//     });
//     console.log(result);
// }

//place holder area must be array of sorts 
// possible function to cycle through searches. 
// probably needs some looping 
// $("#firstSearch").on("click", function (event) {
    //     event.preventDefault();
    //     //full assigned usersInput from it and re insert it to search
    
    // });
    
    // have a list of cities to pull and push from?
    // based off user input values 
    // var cities = [
    // "",
    // "",
    // "",
    // "",
    // ]