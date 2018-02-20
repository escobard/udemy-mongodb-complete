// loads an assertions library to handle test expecations
const assert = require('assert')

const User = require('../src/user')

describe("Creating user instances", () =>{

	// calls done to tell mocha that everything is done AFTER all other operations
	// have been executed. done() is available for each it and beforeEach module of the testing app
	it("saves a user", (done) =>{

		// expects an assertion, checking something
		// assert( 1 + 1 === 2)

		/* expects an assertion, checking something - meant to fail
		assert( 1 + 1 === 3) */

		// creates a new user with a name to test a user instance
		const joe = new User({ name: "Joe"});

		// saves joe using the .save() method of mongoose
		joe.save()
			.then(() =>{
				// has joe been saved succesfully?

				// if joe has NOT been saved to MongoDB but exsists in mongoose, joe.isNew === true
				// if joe HAS been saved to MongoDB then joe.isNew === false

				// this assertion ensures that the user schema has been saved to the database
				// therefore joe.isNew === false
				assert(!joe.isNew)

				// tells mocha that we are done after the user has been saved
				done()
			}).catch(error => console.log('Error creating user: ', error))
	})
}) 