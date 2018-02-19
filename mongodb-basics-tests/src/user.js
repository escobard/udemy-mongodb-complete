const mongoose = require('mongoose')

const Schema = mongoose.Schema

// sets the properties of the schema
const UserSchema = new Schema({
	name: String
})

// this creates the mongoose model class- this is set on the mongoose side NOT the mongoDB side
const User = mongoose.model(
	// sets the name of the collection within mongoDB - not the mongoose side
	'user', 
	// selects the schema for the model
	UserSchema)

// we usually only export the model class for later use
module.exports = User;