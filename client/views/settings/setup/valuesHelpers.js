//Last Seen
Template.setValues.helpers({
	daysTill: function() {
		payDay = moment(this.lastActive).fromNow();
		return payDay;
	}
});

Template.setValues.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      cash: $(e.target).find('[name=totalCash]').val(),
      payDay: $(e.target).find('[name=payDay]').val()
    }

    post._id = userValues.insert(post);
  }
});