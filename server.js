var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Users = require('/Projects/portoffunDatabase/models/users');
var eventsController = require('/Projects/portoffunDatabase/controllers/events');
var usersController = require('/Projects/portoffunDatabase/controllers/users');
mongoose.connect('mongodb://www.portoffun.com/portoffun');
app.use(bodyParser.urlencoded(
{
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.all('/*', function (req, res, next)
{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
        res.header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
	next();
});
var router = express.Router();
var port = process.env.PORT || 8080;
router.use(function (req, res, next)
{
	console.log("somthing happend");
	next();
});

//Event Lists

router.route('/events').post(eventsController.postEvent).get(eventsController.getEvents).delete(eventsController.deleteEvent);
router.route('/events/:eventId').get(eventsController.getSingleEvent);

//User Routes
router.route('/users').post(usersController.postUser).get(usersController.getUsers);
router.route('/users/submitRole').put(usersController.submitRole);
router.route('/users/:userId').get(usersController.findUser);

router.get('/', function (req, res)
{
	res.json(
	{
		message: 'hooray! welcome to our api!'
	});
});
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);