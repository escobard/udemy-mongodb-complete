const mongoose = require('mongoose')
const assert = require('assert')

// sets the only promise handler to the be the global promise handler instead of 
// the mongoose promise handler, to better handle promise errors
mongoose.Promise = global.Promise

// the before() method is called only once, within the mocha runtime
before((done) =>{

	// connects to our localhost DB
	// if no database is found within the localhost DB, it is created automatically by mongoose
	// THIS NEEDS TO BE A SEPARATE DB FROM MAIN
	mongoose.connect('mongodb://localhost/users_test')
	done()
})

// adds a hook, dropping all the data within the test DB
// the done callback from mocha is a used to notify mocha to run the next test
// in other words, no test will run before the statement below, ensuring that 
// the user collection is dropped every time the tests are ran
beforeEach((done) => {
	// this grabs our users collection within the DB
	mongoose.connection.collections.users
	// this drops the collection every time
	.drop(() => {
		done();
	})
})

// refactor this to another file in the future
describe("Tests database connection and functions", () =>{
	it("Connection is open", (done) =>{

		/*
		mongoose.connection

		// watches for mongoose's .open() event which means the connection is established
		.once('open', 
			() => console.log('Database connected!'))

			// calls the done method of mocha, then runst he rest of the tests
			done()

		// if the .error() event is fired, that means the connection failed
		.on('error', (error) =>{
			console.warn('Warning: ', error)
		}) */

		mongoose.connection.on('open', ()=>{})
		done()
	})
	it("Users collection exists", (done) =>{
		assert(mongoose.connection.collections.users)
		done() 
	})
})
