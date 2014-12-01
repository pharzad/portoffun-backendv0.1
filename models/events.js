var mongoose = require('mongoose');
var schema = mongoose.Schema;

var eventSchema = new schema(
{
	name: String,
        rolls:[{
                name:String,
                assignee:String
        }],
	description: String,
	venue: {
                id:String,
		name: String,
		lat: Number,
		lon: Number
	},
	price: Number,
	pictures: [
	{
		name: String
	}],
	startDate: Date,
	endDate: Date,
	atendees: [
	{
		userId: String,
		userName: String
	}],
	reserved: Boolean,
	full: Boolean,
	recommended: {
		type: String
	},
	categories: [
	{
		title: String
	}],
	keyWords: [
	{
		word: String
	}]

});

module.exports = mongoose.model('Events', eventSchema);