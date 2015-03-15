Meteor.subscribe('whatifs')

Template.whatif.rendered = function() {
	var containerWidth = this.$('.content').width();
	var headerWidth = this.$('.main-h1').width() + 14;
	var inputWidth = containerWidth - headerWidth-20;
	console.log('container: ' + containerWidth + ' headerWidth: ' + headerWidth + ' new-input: ' + inputWidth)
	this.$('.new-input').width(inputWidth)

	this.$('.new-input').focus()
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
			if(!stage) {
				$('.new-input').val('')
				$('.main-h1').text('Name:')
				$('.new-input').attr('placeholder', 'Enter your name')
				Session.set('whatif', input)
			} else {
				$('.new-input').val('')
				$('.main-h1').text('What if')
				$('.new-input').attr('placeholder', '')
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