const mongoose = require("mongoose")
const assert = require("assert")

// refactor this to another file in the future
describe("Tests database connection and collections", () => {
	it("Connection is open", done => {
		mongoose.connection.on("open", () => {})
		done()
	})
	it("Users collection exists", done => {
		assert(mongoose.connection.collections.users)
		done()
	})
})
