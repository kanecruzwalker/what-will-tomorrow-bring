//adding current date to document
var date =JSON.stringify(moment().format("MM-DD-YYYY"));
$("#dateHeader").text("Today's Forecast " + " " + date);


// on click event function       
$("#submitCity").on("click",function(event){
    event.preventDefault();
    var usersInput = JSON.stringify($("#usersInput").val().trim());
    console.log(usersInput)

    // assigning usersInput and date to main display 
    $("#mainDisplay").text( JSON.parse(usersInput) + " " + JSON.parse(date));
    // assigning usersInput to search history area
    $("#firstSearch").text( JSON.parse(usersInput));

    
    // pulling data from weather api, only after click is initiated
    // need var usersInput thus it is in on click function
    // &units=imperial makes F standard over C or K 
    var apiKey = "daf08b427b26f11b51a8b3849391acfc";
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + JSON.parse(usersInput) + "&appid=" + apiKey + "&units=imperial";

    
    
    // ajax calling from one day weather info
    $.ajax({
        url : queryUrl,
        method: "GET"

    // after calling, this is the response
    }).then(function(response) {
        console.log(response);
        
        // retreive iconId, insert id into link, add link to img tag, add image tag to mainDispla

        var mainIconId = response.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/wn/"+ mainIconId +"@2x.png"
        var iconImageTag = $("<img>").attr("src", iconUrl);
        // displays main icon
        var mainIconDisplay = $("#mainIcon").append(iconImageTag);
    
        // displays main temperature 
        var mainTempData = $("#mainTemp").text("Temperature: " + JSON.parse(response.main.temp));
        console.log(mainTempData);
        // displays main humidity
        var mainHumidityData = $("#mainHumidity").text("Humidity: " + JSON.parse(response.main.humidity));
        console.log(mainHumidityData)
        // displays main WindSpeed 
        var mainWindSpeedData = $("#mainWindSpeed").text("Wind Speed: " + JSON.parse(response.wind.speed));
        console.log(mainWindSpeedData);
       
    });

    // starting calls for five day forecast 
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + JSON.parse(usersInput) + "&appid=" + apiKey + "&units=imperial";

    $.ajax({
        url : fiveDayUrl,
        method: "GET"

        // after calling, this is the response
    }).then(function(result) {
        console.log(result);
        console.log(result.list);

        // need a list index number that cycles through pending on the current hour/ day
        console.log(result.list[0].main)
        console.log(result.list[0].main.temp)
        console.log(result.list[0].main.humidity)
        console.log(result.list[0].weather[0].icon);

    });





    // creating buttons from previous searches 
    var searchHistory = [
        usersInput,
    ]


    function renderSearches() {
    
        $("#firstSearch").empty();

        for (var i = 0; i < searchHistory.length; i++) {

            var searchButton = $("<button>");
            
            searchButton.addClass("citySearch");

            searchButton.attr("data-name", searchHistory[i]);

            searchButton.text(searchHistory[i]);

            $("#firstSearch").append(searchHistory[i]);
            console.log()
        }
        
    }
    renderSearches()
    
    

    // array of searches 




    // $("submitCity").on("click", function(event){
    //     event.preventDefault()
        
    //     searches.push(usersInput);
    //     renderSearches();
    //     console.log(searches);
    // });
});

//what an object of weatherData variables would look like 
// var mainTemperature = $("#mainTemp").text(response.base.main.temp);
// var weatherData = {
//     cityName: response.name,
//     date2: response.dt,
//     temperature: response.temp_like,
//     humidity: response.main.humidity,
//     windSpeed: response.wind.speed,
//     iconId: response.weather[0].icon
// }


// could make 2 functions 
// one to display main weather info
// one to display five day weather info


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