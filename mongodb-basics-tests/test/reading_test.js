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

	it("finds all users with the name of joe", done => {
		// the .find() method matches the given criteria / query, and finds ALL the data matching
		// the User object comes from our User model, created with mongoose
		// returns an array
		User.find({ name: "Joe" })
			// returns an array with any User instances that match the query
			.then(users => {
				// since the .id property below is actually an _id.id property within the mongoDB
				// it creates some confusion for developers - to avoid this gotcha, we can grab the id of
				// each record by instead using .id
				assert(users[0].id === joe.id)
				done()
			})

		// the .findOne() method matches the first match that meets the criteria
		// returns a single record / object
		// User.findOne()
	})

	it("find a user with a particular id", done => {})
})
