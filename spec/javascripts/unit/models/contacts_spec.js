module('ContactsModel',{ 
	setup: function () {}, 
	teardown: function () {}
});

test('attributes', function(){ 
	respondsTo('Contact', 'first_name', 'string'); 
	respondsTo('Contact', 'last_name', 'string');
});