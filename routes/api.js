var user = require('../model/User');
var poll = require('../model/Poll');

module.exports = function (app) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	function sendError(res, err) {
		res.json({
			success: false,
			error: err
		});
	}

	app.get('/api/currentuser', isLoggedIn, function (req, res) {
		res.json({user : req.user});
	});

	app.post('/api/polls/new', isLoggedIn, (req, res) => {
		const newPoll = new poll(req.body);
		newPoll._creator = req.user._id;
		
		newPoll.save(err => {
			if (err) {
				sendError(res, err);
			}

			req.user.polls.push(newPoll);
			req.user.save();

			res.json({
				success: true,
				polls: req.user.polls
			});				
		});
	});

	app.get('/api/polls/user', isLoggedIn, (req, res) => {
		poll.find(
		{
			_creator: req.user._id
		}, 
		(err, polls) => {
			if (err) {
				sendError(res, err);
			}

			res.json({
				polls: polls
			});
		});		
	});

	app.get('/api/polls/view/:pollId', (req, res) => {		
		poll.findById(req.params.pollId, (err, result) => {
			if (err) {
				sendError(res, err);
			}
			
			res.json({
				poll: result
			});
		})
	})
};