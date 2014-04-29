if(Meteor.isClient) {
	Template.addRowForm.events = {
		'click input[type=button]': function (e) {
			e.preventDefault();

      		Rows.addRow({isHeader:false,band:"CTR",song:"Woot"});
      		console.log("Hey");
		}
	}
}