function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('My own personal button'),
		top:20
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('The New window'),
			backgroundColor: 'white'
		}));
	});
	
	return self;
};

module.exports = ApplicationWindow;
