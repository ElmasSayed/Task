$(document).ready(function(){

   var apiroot = "http://localhost:3000"
    
    var gettasks = function(){
       var url = apiroot + "/tasks"
        // console.log(url);
        $.ajax({
            url: url,
            method: "GET"
        })
        .done(function(response) {
            console.log(JSON.stringify(response, null, 4));
            // show the data on Frontend
            // $("#todotext").html(response[].taskname);
        });
    }

    var gettask = function(taskid){
        var url = apiroot + "/task/" + taskid
         // console.log(url);
         $.ajax({
             url: url,
             method: "GET"
         })
         .done(function(response) {
             console.log(JSON.stringify(response, null, 4));
         });
     }

}); // document ready end