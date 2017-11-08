 // This is where most of the JS & jQuery will live
 // for the project that will manipulate our webpage

$(document).ready(function(){

	view.displayButtons();
	controller.topicButtonClick();
	controller.playGifs();
	controller.addTopicToArray();

});

// view Object

var view = {

	displayButtons: () => {

		$('.button-display').empty()

		for (var i = 0; i < topics.length; i++) {
			var topicButtons = $('<button>').addClass('topic-button btn').text(topics[i]);
				topicButtonColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];
				topicButtons.addClass(topicButtonColor.color);
			$('.button-display').append(topicButtons);
		}

	},

};