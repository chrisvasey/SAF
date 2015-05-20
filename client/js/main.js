if (Meteor.isClient) {
// Inside the if (Meteor.isClient) block, right after Template.body.helpers:
	Template.body.events({
	  // "submit .newDate": function (event) {
	  //   // This function is called when the new task form is submitted

	  //   var text = event.target.text.value;

	  //   Tasks.insert({
	  //     text: text,
	  //     createdAt: new Date() // current time
	  //   });

	  //   // Clear form
	  //   event.target.text.value = "";

	  //   // Prevent default form submit
	  //   return false;
	  // }

	});
	
	Template.setValues.rendered=function() {
    	$('#my-datepicker').datepicker({
    		weekStart: 1,
    		clearBtn: true,
    		autoclose: true
    	});
	}


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
