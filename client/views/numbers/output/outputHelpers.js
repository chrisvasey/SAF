 
Template.numberOutput.helpers({
	//Days remaining
	payDayRead: function() {
		readDate = moment(this.payDay).fromNow();
		return readDate;
	},
	//Daily Balance
	daily: function() {
		balance = this.cash;

		//Number of days process
		var pay = this.payDay;
		var payP = moment(pay).format();
		var a = moment().format();
		var b = payP;

		var ap = new Date(a);
		var bp = new Date(b);
		start = Math.floor( ap.getTime() / (3600*24*1000)); //days as integer from..
		end   = Math.floor( bp.getTime() / (3600*24*1000)); //days as integer from..
		daysDiff = end - start; // exact dates

		//budget
		budget = balance / daysDiff;

		//output
		console.log("Todays date: ",ap);
		console.log("Pay Date: ",bp);
		console.log("Days till payday: ",daysDiff,"days");
		console.log("Balance: £",balance);
		console.log("Daily budget: £",budget);

		return "this will be the daily"
	}
});


