var Users = require('/Projects/portoffunDatabase/models/users');
exports.postUser = function (req, res)
{
	var user = new Users();
	user.name = req.body.name;
	user.lastname = req.body.lastname;
	console.log(user.name);
	user.save(function (err)
	{
		if (err) res.send(err);
		res.json(
		{
			message: "User created"
		});
	});
};

exports.getUsers = function (req, res)
{
	Users.find(function (err, events)
	{
		if (err) res.send(err);
		res.json(events);
	});
};
exports.submitRole = function (req, res)
{
	Users.findById(req.body.userId, function (err, user)
	{
		if (err) res.send(err);

		user.rolls.push(
		{
			rollName: req.body.rollName,
			eventName: req.body.eventName,
			rollId: req.body.rollId,
			eventId: req.body.eventId,
			status: 'pending'
		});
                user.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'roll submited' });
			});
	});
};