 // This is where all the javascript will
 // live for the project that connects the view and model




// var controller = {

 function topicButtonClick() {
 	$(".topic-button").on("click", function() {
      var emotion = $(this).text();
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        emotion + "&api_key=cp2YE3vqeMKUmaukPsqx72MrfGtu6uxp&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
      	console.log(response)
      	
      	})

    });
 }

// }