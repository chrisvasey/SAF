//Last Seen
Template.setValues.helpers({
	daysTill: function() {
		payDay = moment(this.lastActive).fromNow();
		return payDay;
	}
});