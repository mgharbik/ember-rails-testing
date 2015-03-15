module('Routing specs', { 
	setup: function () {}
});

test('root route',function(){ 
	routesTo('/', 'index'); 
});

test('contacts route',function(){ 
	routesTo('/contacts', 'contacts.index');
});

test('individual contact',function(){ 
	routesTo('/contacts/1', 'contacts.show');
});