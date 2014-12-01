var Events = require('/Projects/portoffunDatabase/models/events');
exports.postEvent = function (req, res)
{
	var event = new Events();
	event.name = req.body.name;
	event.description = req.body.description;
	event.price = req.body.price;
	event.startDate = req.body.startDate;
	event.endDate = req.body.endDate;

	//adding picture(s)
	var a = JSON.parse(req.body.pictures);

	var pics = [];
	for (var i = 0; i < a.length; i++)
	{
		pics.push(
		{
			name: a[i][0]
		});
	}
	event.pictures = pics;

	//adding keywords
	var keyWordsArr = req.body.keyWords.split(",");
	var keyWords = [];
	for (var i = 0; i < keyWordsArr.length; i++)
	{
		keyWords.push(
		{
			word: keyWordsArr[i]
		});
	}
	event.keyWords = keyWords;

	//rolls
	var b = JSON.parse(req.body.rolls);

	var rolls = [];
	for (var i = 0; i < b.length; i++)
	{
		rolls.push(
		{
			name: b[i][0],
			assignees: b[i][1]
		});
	}
	event.rolls = rolls;

	//venues
	var venue = JSON.parse(req.body.venue);
	event.venue = venue;


	event.save(function (err)
	{
		if (err) res.send(err);
		res.json(
		{
			message: "Event saved"
		});
	});
};
exports.getEvents = function (req, res)
{
	Events.find(function (err, events)
	{
		if (err) res.send(err);
		res.json(events);
	});
};
exports.deleteEvent = function (req, res)
{
	console.log(req.body.eventId);
	Events.findByIdAndRemove(req.body.eventId, function (err)
	{
		if (err) res.send(err);

		res.json(
		{
			message: 'event removed from the locker!'
		});
	});
};

exports.getSingleEvent = function (req, res)
{
	Events.findById(req.params.eventId, function (err, event)
	{
		if (err) res.send(err);
		res.json(event);
	});
};