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


        // creating buttons with each search

        var searchHistory = JSON.parse(localStorage.getItem("#searchContainer"));
        if (searchHistory === null) {
            searchHistory = []
    }
    renderSearches();
    function renderSearches() {
    $("#searchContainer").empty();
    for (var i = 0; i < searchHistory.length; i++) {
        var button = $("<button type='button' class='btn btn-primary'>").text(searchHistory[i]);

        $("#searchContainer").append(button);
    }
    }
    $("form").on("#submitCity", function(event) {
    event.preventDefault();
    var search = $("#usersInput").val().trim();
    searchHistory.unshift(search);
    while (searchHistory.length > 10) {
        searchHistory.pop();
    }
    localStorage.setItem("#searchContainer", JSON.stringify(searchHistory));
    renderSearches();
    });














    
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

        $("#mainIcon").empty();
        
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

        $("#emoji1").empty();
        $("#emoji2").empty();

        console.log(result);

        var temp1Data = $("#temp1").text("Temperature: " + JSON.parse(result.list[0].main.temp));
        var humidity1Data = $("#humidity1").text("Humidity " + JSON.parse(result.list[0].main.humidity))

        var temp2Data = $("#temp2").text("Temperature: " + JSON.parse(result.list[6].main.temp));
        var humidity2Data = $("#humidity2").text("Humidity " + JSON.parse(result.list[6].main.humidity));

        var temp3Data = $("#temp3").text("Temperature: " + JSON.parse(result.list[14].main.temp));
        var humidity3Data = $("#humidity3").text("Humidity: " + JSON.parse(result.list[14].main.humidity));

        var temp4Data = $("#temp4").text("Temperature: " + JSON.parse(result.list[22].main.temp));
        var humidity4Data = $("#humidity4").text("Humidity: " + JSON.parse(result.list[22].main.humidity));
        
        var temp5Data = $("#temp5").text("Temperature: " + JSON.parse(result.list[30].main.temp));
        var humidity5Data = $("#humidity5").text("Humidity: " + JSON.parse(result.list[30].main.humidity));
       
        // day 1 emoji
        var day1Icon = result.list[0].weather[0].icon;
        var day1IconUrl = "http://openweathermap.org/img/wn/"+ day1Icon +"@2x.png"
        var day1IconImageTag = $("<img>").attr("src", day1IconUrl);
        var day1IconDisplay = $("#emoji1").append(day1IconImageTag);
       
        // day 2 emoji
        var day2Icon = result.list[0].weather[0].icon;
        var day2IconUrl = "http://openweathermap.org/img/wn/"+ day2Icon +"@2x.png"
        var day2IconImageTag = $("<img>").attr("src", day2IconUrl);
        var day2IconDisplay = $("#emoji2").append(day2IconImageTag);
       
       
       
       
        // need a list index number that cycles through pending on the current hour/ day
        console.log(result.list[0].main)
        console.log(result.list[0].main.temp)
        console.log(result.list[0].main.humidity)
        console.log(result.list[0].weather[0].icon);
    });











});
    // creating buttons from previous searches 


    //searchContainer for saved searches 




    
    

    // array of searches 




    // $("submitCity").on("click", function(event){
    //     event.preventDefault()
        
    //     searches.push(usersInput);
    //     renderSearches();
    //     console.log(searches);
    // });

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