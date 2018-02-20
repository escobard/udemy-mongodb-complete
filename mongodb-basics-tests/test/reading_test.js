const assert = require("assert")

const User = require("../src/user")

describe("Reading users out of the database", () => {
	// declares the variable globally
	let joe

	// need to add a before each to handle user db
	beforeEach(done => {
		joe = new User({ name: "Joe" })
		joe.save().then(() => done())
	})

	it("finds all users with the name of joe", () => {
		// the .find() method matches the given criteria / query, and finds ALL the data matching
		// the User object comes from our User model, created with mongoose
		// returns an array
		User.find({ name: "Joe" })
			// returns an array with any User instances that match the query
			.then(users => {
				console.log(users)
			})

		// the .findOne() method matches the first match that meets the criteria
		// returns a single record / object
		// User.findOne()
	})
})
