const assert = require('assert')

const User = require('../src/user')

describe('Reading users out of the database', () =>{

	// declares the variable globally
	let joe;

	// need to add a before each to handle user db 
	beforeEach(() =>{
		joe = new User({ name: 'Joe'})
		joe.save()
			.then(() => done())
	})

	it('finds all users with the name of joe', () =>{

	})
})