module('Routing specs', { 
	setup: function () {
		AddressBook.reset();
	}
});

test('root route',function(){ 
	routesTo('/', 'index'); 
});

test('contacts route',function(){ 
	routesTo('/contacts', 'contacts.index');
});
