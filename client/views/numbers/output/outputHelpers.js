Template.numberOutput.helpers({
	payDayRead: function() {
		readDate = moment(this.payDay).fromNow();
		return readDate;
	}
});
