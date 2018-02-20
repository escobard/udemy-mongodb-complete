const assert = require("assert")

const User = require("../src/user")

describe("Deleting a user", () => {
	let joe

	beforeEach(done => {
		joe = new User({ name: "Joe" })
		joe.save().then(() => done())
	})

	it("model instance remove", done => {
		// to remove joe from our database
		joe
			.remove()
			.then(() => User.findOne({ name: "Joe" }))
			.then(user => {
				assert(user === null)
				done()
			})
	})

	it("class method remove", () => {})

	it("classmethod findAndRemove", () => {})
	it("class method findByIdAndRemove", () => {})
})
