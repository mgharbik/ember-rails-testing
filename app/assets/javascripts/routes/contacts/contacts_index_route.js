AddressBook.ContactsIndexRoute = Ember.Route.extend({ 
	model: function () {
		return this.store.findAll('contact');
	} 
});