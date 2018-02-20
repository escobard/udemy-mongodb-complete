const mongoose = require('mongoose')

// connects to our localhost DB
// if no database is found within the localhost DB, it is created automatically by mongoose
// THIS NEEDS TO BE A SEPARATE DB FROM MAIN
mongoose.connect('mongodb://localhost/users_test')

mongoose.connection

	// watches for mongoose's .open() event which means the connection is established
	.once('open', 
		// then runs the console.log
		() => console.log('Good to go!'))

	// if the .error() event is fired, that means the connection failed
	.on('error', (error) =>{
		console.warn('Warning', error)
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