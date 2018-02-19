const mongoose = require('mongoose')

// connects to our localhost DB
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