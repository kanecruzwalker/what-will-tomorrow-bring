//adding current date to document
const date =JSON.stringify(moment().format("MM-DD-YYYY"));
$("#dateHeader").text("Today's Forecast " + " " + date);


// on click event function       
$("#submitCity").on("click",function(event){
    event.preventDefault();
    let usersInput = JSON.stringify($("#usersInput").val().trim());
    console.log(usersInput)

    // assigning usersInput and date to main display 
    $("#mainDisplay").text( JSON.parse(usersInput) + " " + JSON.parse(date));
    // assigning usersInput to search history area
    $("#firstSearch").text( JSON.parse(usersInput));

        // creating buttons with each search
        let searchHistory = JSON.parse(localStorage.getItem("#searchContainer"));
        if (searchHistory === null) {
            searchHistory = []
    }
    renderSearches();
    function renderSearches() {
    $("#searchContainer").empty();
    for (let i = 0; i < searchHistory.length; i++) {
        let button = $("<button type='button' class='btn btn-primary'>").text(searchHistory[i]);

        $("#searchContainer").append(button);
    }
    }
    $("form").on("#submitCity", function(event) {
    event.preventDefault();
    let search = $("#usersInput").val().trim();
    searchHistory.unshift(search);
    while (searchHistory.length > 10) {
        searchHistory.pop();
    }
    localStorage.setItem("#searchContainer", JSON.stringify(searchHistory));
    renderSearches();
    });





    // pulling data from weather api, only after click is initiated
    // need let usersInput thus it is in on click function
    let apiKey = "daf08b427b26f11b51a8b3849391acfc";
    let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + JSON.parse(usersInput) + "&appid=" + apiKey + "&units=imperial";

    
    // ajax calling from one day weather info
    // with .then as the response
    $.ajax({
        url : queryUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        $("#mainIcon").empty();
        
        // retreive iconId, insert id into link, add link to img tag, add image tag to mainDispla
        let mainIconId = response.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/wn/"+ mainIconId +"@2x.png"
        let iconImageTag = $("<img>").attr("src", iconUrl);
        
        // displays main icon
        let mainIconDisplay = $("#mainIcon").append(iconImageTag);
        // displays main temperature 
        let mainTempData = $("#mainTemp").text("Temperature: " + JSON.parse(response.main.temp));
        console.log(mainTempData);
        // displays main humidity
        let mainHumidityData = $("#mainHumidity").text("Humidity: " + JSON.parse(response.main.humidity));
        console.log(mainHumidityData)
        // displays main WindSpeed 
        let mainWindSpeedData = $("#mainWindSpeed").text("Wind Speed: " + JSON.parse(response.wind.speed));
        console.log(mainWindSpeedData);
       
    });

    // Five Day Forecast
    let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + JSON.parse(usersInput) + "&appid=" + apiKey + "&units=imperial";

    $.ajax({
        url : fiveDayUrl,
        method: "GET"
        // after calling, this is the response
    }).then(function(result) {

        $("#emoji1").empty();
        $("#emoji2").empty();
        $("#emoji3").empty();
        $("#emoji4").empty();
        $("#emoji5").empty();

        console.log(result);

        let temp1Data = $("#temp1").text("Temperature: " + JSON.parse(result.list[0].main.temp));
        let humidity1Data = $("#humidity1").text("Humidity " + JSON.parse(result.list[0].main.humidity))

        let temp2Data = $("#temp2").text("Temperature: " + JSON.parse(result.list[6].main.temp));
        let humidity2Data = $("#humidity2").text("Humidity " + JSON.parse(result.list[6].main.humidity));

        let temp3Data = $("#temp3").text("Temperature: " + JSON.parse(result.list[14].main.temp));
        let humidity3Data = $("#humidity3").text("Humidity: " + JSON.parse(result.list[14].main.humidity));

        let temp4Data = $("#temp4").text("Temperature: " + JSON.parse(result.list[22].main.temp));
        let humidity4Data = $("#humidity4").text("Humidity: " + JSON.parse(result.list[22].main.humidity));
        
        let temp5Data = $("#temp5").text("Temperature: " + JSON.parse(result.list[30].main.temp));
        let humidity5Data = $("#humidity5").text("Humidity: " + JSON.parse(result.list[30].main.humidity));
       
        // day 1 emoji
        let day1Icon = result.list[0].weather[0].icon;
        let day1IconUrl = "http://openweathermap.org/img/wn/"+ day1Icon +"@2x.png"
        let day1IconImageTag = $("<img>").attr("src", day1IconUrl);
        let day1IconDisplay = $("#emoji1").append(day1IconImageTag);
       
        // day 2 emoji
        let day2Icon = result.list[6].weather[0].icon;
        let day2IconUrl = "http://openweathermap.org/img/wn/"+ day2Icon +"@2x.png"
        let day2IconImageTag = $("<img>").attr("src", day2IconUrl);
        let day2IconDisplay = $("#emoji2").append(day2IconImageTag);

        // day 3 emoji
        let day3Icon = result.list[14].weather[0].icon;
        let day3IconUrl = "http://openweathermap.org/img/wn/"+ day3Icon +"@2x.png"
        let day3IconImageTag = $("<img>").attr("src", day3IconUrl);
        let day3IconDisplay = $("#emoji3").append(day3IconImageTag);
       
        // day 4 emoji
        let day4Icon = result.list[22].weather[0].icon;
        let day4IconUrl = "http://openweathermap.org/img/wn/"+ day4Icon +"@2x.png"
        let day4IconImageTag = $("<img>").attr("src", day4IconUrl);
        let day4IconDisplay = $("#emoji4").append(day4IconImageTag);
       
        // day 5 emoji
        let day5Icon = result.list[30].weather[0].icon;
        let day5IconUrl = "http://openweathermap.org/img/wn/"+ day5Icon +"@2x.png"
        let day5IconImageTag = $("<img>").attr("src", day5IconUrl);
        let day5IconDisplay = $("#emoji5").append(day5IconImageTag);
       
        // need a list index number that cycles through pending on the current hour/ day
        console.log(result.list[0].main)
        console.log(result.list[0].main.temp)
        console.log(result.list[0].main.humidity)
        console.log(result.list[0].weather[0].icon);
        console.log(result.list[0].dt_txt);

    });
});