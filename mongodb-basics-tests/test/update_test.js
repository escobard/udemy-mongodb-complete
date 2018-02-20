const assert = require("assert")

const User = require("../src/user")

describe("Updating records", () => {
	let joe

	beforeEach(done => {
		joe = new User({ name: "Joe" })
		joe.save().then(() => done())
	})

	it("instance type set n save", done => {
		// the .set() method sets a new property for a given User instance
		// the .set() method queries properties, and changes them to the second argument

		// this only updates the User instance within mongoose, not mongoDB
		// the new data must be saved with the .save() method to persist

		// console.log(joe) - original name
		joe.set("name", "Alex")
		// console.log(joe) - new name

		assertName(joe.save(), done)
		//
	})

	// refactor this to another file in the future
	function assertName(operation, done) {
		// expects a promise
		operation.then(() => User.find({})).then(users => {
			// checks to make sure only one record is present
			assert(users.length === 1)

			// checks to make sure that the record's name is the new set name - Alex
			assert(users[0].name === "Alex")
			done()
		})
	}

	it("A model instance can update", done => {
		// updates a single property, to the second argument
		// this does actually update the MongoDB database unlike the .set() method

		// saves the data
		assertName(joe.update({ name: "Alex" }), done)
		// finds all records
	})
})
