if (Meteor.isClient) {
// Inside the if (Meteor.isClient) block, right after Template.body.helpers:

	
	//Bootstrap Datepicker	
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
