//takes users input
$("#submitCity").on("click",function(event){
    event.preventDefault();
    var usersInput = $("#usersInput").val().trim();
    console.log(usersInput)
});
