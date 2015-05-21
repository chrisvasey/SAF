//Last Seen
Template.setValues.helpers({
	daysTill: function() {
		payDay = moment(this.lastActive).fromNow();
		return payDay;
	}
});

// Template.setValues.events({
//   "submit #setValues": function (event) {
//     // This function is called when the new task form is submitted

//     var text = event.target.text.value;
//     var values = {
//       cash: $(e.target).find('[name=totalCash]').val(),
//       payDay: $(e.target).find('[name=payDay]').val()
//     };

//     userValues.insert({
//       totalCash: cash,
//       payDay: payDay
//     });

//     // Clear form
//     // event.target.text.value = "";

//     // Prevent default form submit
//     return false;
//   }
// });