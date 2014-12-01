var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema(
{
	name: String,
	lastname: String,
	events: [
	{
		eventId: String,
		eventName: String
	}],
	rolls: [
	{
		rollName: String,
		eventName: String,
                rollId:String,
                eventId:String,
                status:String
	}]
});

module.exports = mongoose.model('Users', userSchema);