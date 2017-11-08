 // This is where most of the JS & jQuery will live
 // for the project that will manipulate our webpage

window.onload = () => {

	view.displayButtons();

};

// view Object

var view = {

	displayButtons: () => {

		var topicButtons = $('<button>')

		for (var i = 0; i < topics.length; i++) {
			var topic = $('<li>').addClass('topic-button').text(topics[i]);
				for (var j = 0; j < buttonClasses.length; j++) {
				topic.addClass('btn '+buttonClasses[j])
			}
			topicButtons.append(topic);
			$('.button-display').append(topicButtons);
		}

	topicButtonClick();

	},

};