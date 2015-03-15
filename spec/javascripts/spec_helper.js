//= require application.js.erb
//= require support/testing_helpers
//= require_self

var d=document;
d.write('<div id="ember-testing-container"> <div id="ember-testing"></div></div>');

AddressBook.rootElement = "#ember-testing";
AddressBook.setupForTesting();
AddressBook.injectTestHelpers();

AddressBook.ApplicationAdapter = DS.FixtureAdapter;
AddressBook.Contact.FIXTURES = [
	{
		id: 1,
		first_name: 'Dave',
		last_name: 'Crack'
	}, {
		id: 2,
		first_name: 'Dustin',
		last_name: 'Hoffman'
	}
]