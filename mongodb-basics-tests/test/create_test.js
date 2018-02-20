// loads an assertions library to handle test expecations
const assert = require('assert')

describe("Creating user instances", () =>{
	it("saves a user", () =>{

		// expects an assertion, checking something
		assert( 1 + 1 === 2)

		/* expects an assertion, checking something - meant to fail
		assert( 1 + 1 === 3) */
	})
})