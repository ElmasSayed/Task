$(document).ready(function(){


    console.log("dataservice.js");
           
    var apiroot = "http://localhost:3000"
    
    var gettasks = function(){

        var url = apiroot + "/tasks"
        // console.log(url);
           
        $.ajax({
            url: url,
            method: "GET"
        })
        .done(function(response) {
            // console.log(queryURL);
            console.log(response);
            console.log(response[0].taskname);
            // console.log(JSON.stringify(response, null, 4));

            // Transfer content to html

            // $("#todotext").html(response[].taskname);
           
        });


    }



    gettasks();











}); // document ready end