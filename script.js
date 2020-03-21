//takes users input
$("#submitCity").on("click",function(event){
    event.preventDefault();
    var usersInput = JSON.stringify($("#usersInput").val().trim());
    console.log(usersInput)
});


