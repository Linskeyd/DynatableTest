//On server startup, if DB is empty, create some initial data
Meteor.startup(function () {
	if(Rows.collection.find().count() === 0) {
	Rows.initializeTableHeaders(["Band", "Song"]);
	
	Rows.addRow({isHeader:false,band:"Weezer",song:"El Scorcho"});
	Rows.addRow({isHeader:false,band:"Chevelle",song:"Family System"});
	Rows.addRow({isHeader:false,band:"Skrillex",song:"Dirty Vibe"});
	}
});