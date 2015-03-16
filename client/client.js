Meteor.subscribe('whatifs')

Template.header.events({
	'mouseenter a.right': function(evt, template) {
		$('a.right img').attr('src', 'play_dark.gif')
		$('a.right p').css('color', '#c3260c')
	},

	'mouseleave a.right': function(evt, template) {
		$('a.right img').attr('src', 'play.gif')
		$('a.right p').css('color', '#fd2905')
	},

	'mouseenter a.left': function(evt, template) {
		$('a.left img').attr('src', 'tedx-logo_dark.png')
		$('a.left p').css('color', '#c3260c')
	},

	'mouseleave a.left': function(evt, template) {
		$('a.left img').attr('src', 'tedx-logo.png')
		$('a.left p').css('color', '#fd2905')
	}
})


Template.whatif.rendered = function() {
	
}

Template.whatif.helpers({
	whatifs: function() {
		var whatifs = Whatifs.find({}, {sort: {createdAt: -1}});
		return whatifs;
	}
})

Template.whatif.events({
	'keypress input.new-input': function(evt, template) {
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
				$('.new-input').attr('placeholder', 'money did not exist?')
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