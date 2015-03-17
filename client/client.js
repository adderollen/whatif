Meteor.subscribe('whatifs')

Template.header.events({
	'mouseenter a.right': function(evt, template) {
		$('a.right img').attr('src', 'play_red.gif')
		$('a.right p').css('color', '#fe2a06')
	},

	'mouseleave a.right': function(evt, template) {
		$('a.right img').attr('src', 'play.gif')
		$('a.right p').css('color', '#da362b')
	},

	'mouseenter a.left': function(evt, template) {
		$('a.left img').attr('src', 'tedx-logo_red.png')
		$('a.left p').css('color', '#fe2a06')
	},

	'mouseleave a.left': function(evt, template) {
		$('a.left img').attr('src', 'tedx-logo.png')
		$('a.left p').css('color', '#da362b')
	}
})


Template.whatif.rendered = function() {
	var width = window.innerWidth;
	if (width < 600) {
		$('.new-input').attr('placeholder', 'you wrote something?')
	};
}

Template.whatif.helpers({
	whatifs: function() {
		var whatifs = Whatifs.find({}, {sort: {createdAt: -1}});
		return whatifs;
	}
})

Template.whatif.events({
	'keypress input.new-input': function(evt, template) {
		var width = window.innerWidth;
		var input = $('.new-input').val()
		if(evt.which === 13 && input) {
			var stage = $('.new-input').attr('placeholder');
			if(stage != "Enter your name") {
				$('.new-input').val('')
				$('.main-h1').text('Name:')
				$('.new-input').attr('placeholder', 'Enter your name')
				Session.set('whatif', input)
			} else {
				$('.new-input').val('')
				$('.main-h1').text('What if')
				if (width < 600) {
					$('.new-input').attr('placeholder', 'you wrote something?')
				} else {
					$('.new-input').attr('placeholder', 'you wrote something on your mind?')
				}	
				Whatifs.insert({
					createdAt: new Date(),
					content: Session.get('whatif'),
					creator: input
				})
				console.log("Added new: " +Session.get('whatif')+ 'by: '+input)
			}
			
			
		}
	}
})


Template.instagramicon.events({
	'mouseenter .insta-container': function(evt, template) {
		$('.insta-path').css('fill', '#38383A')
	},

	'mouseleave .insta-container': function(evt, template) {
		$('.insta-path').css('fill', 'black')
	}
})

Template.facebookicon.events({
	'mouseenter .facebook-container': function(evt, template) {
		$('.facebook-path').css('fill', '#4B6DAA')
	},

	'mouseleave .facebook-container': function(evt, template) {
		$('.facebook-path').css('fill', 'black')
	}
})

Template.twittericon.events({
	'mouseenter .twitter-container': function(evt, template) {
		console.log("asdf")
		$('.twitter-path').css('fill', '#5EA9DD')
	},

	'mouseleave .twitter-container': function(evt, template) {
		$('.twitter-path').css('fill', 'black')
	}
})
Template.flickricon.events({
	'mouseenter .flickr-container': function(evt, template) {
		$('.flickr-path').css('fill', '#FF0084')
	},

	'mouseleave .flickr-container': function(evt, template) {
		$('.flickr-path').css('fill', 'black')
	}
})

Template.linkedinicon.events({
	'mouseenter .linkedin-container': function(evt, template) {
		$('.linkedin-path').css('fill', '#007BB6')
	},

	'mouseleave .linkedin-container': function(evt, template) {
		$('.linkedin-path').css('fill', 'black')
	}
})

Template.youtubeicon.events({
	'mouseenter .youtube-container': function(evt, template) {
		$('.youtube-path').css('fill', '#E12B28')
	},

	'mouseleave .youtube-container': function(evt, template) {
		$('.youtube-path').css('fill', 'black')
	}
})