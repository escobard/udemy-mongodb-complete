// loads an assertions library to handle test expecations
const assert = require('assert')

const User = require('../src/user')

describe("Creating user instances", () =>{
	it("saves a user", () =>{

		// expects an assertion, checking something
		// assert( 1 + 1 === 2)

		/* expects an assertion, checking something - meant to fail
		assert( 1 + 1 === 3) */

		// creates a new user with a name to test a user instance
		const joe = new User({ name: "Joe"});

		// saves joe using the .save() method of mongoose
		joe.save()
	})
})