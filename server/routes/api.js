var user = require('../model/User');
var poll = require('../model/Poll');
var ObjectId = require('mongodb').ObjectID;

module.exports = function (app) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.json({
				success:false,
				error: 'not-authenticated'
			});
		}
	}

	function sendError(res, err) {
		res.json({
			success: false,
			error: err
		});
	}

	app.get('/api/currentuser', function (req, res) {
		if (req.isAuthenticated()) {
			res.json({
				success: true,
				user : req.user
			});
		} else {
			res.json({
				success: false,
				ip: req.ip
			});
		}
	});

	app.post('/api/polls/new', isLoggedIn, (req, res) => {
		const newPoll = new poll(req.body);
		newPoll._creator = req.user._id;
		
		newPoll.save(err => {
			if (err) {
				sendError(res, err);
				return;
			}

			req.user.polls.push(newPoll);
			req.user.save();

			res.json({
				success: true,
				poll: newPoll
			});				
		});
	});

	app.get('/api/polls/user', isLoggedIn, (req, res) => {
		poll.find(
		{
			_creator: req.user._id
		})
		.sort('-creation_date')
		.exec((err, polls) => {
			if (err) {
				sendError(res, err);
				return;
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
				return;
			}
			
			res.json({
				poll: result
			});
		})
	});

	app.post('/api/polls/delete/:pollId', isLoggedIn, (req, res) => {
		console.log(req.params.pollId);
		poll.findOneAndRemove({
			_id: ObjectId(req.params.pollId),
			_creator: req.user._id
		}, 
		(err, deletedPoll) => {
			if(err) {
				sendError(res, err);
				return;
			}

			res.json(
				{
					success: true,
					deletedPoll: deletedPoll
				}
			);
		});
	});

	app.post('/api/polls/vote/:pollId/:answerId', (req, res) => {
		const voteMarker = req.isAuthenticated() ? req.user._id.toString() : req.ip;

		poll.findOne({
			_id: ObjectId(req.params.pollId)
		})
		.then(dbPoll => {

			const answers = dbPoll.answers.filter(answer => answer._id.equals(ObjectId(req.params.answerId)));

			const answer = answers[0];

			if (answers.length === 0 ) {
				throw "Answer not found";
			}

			if (answers.length > 1 ) {
				throw "Duplicate answer id";
			}

			const hasAlreadyVoted = 
				dbPoll.answers
				.reduce((votes, a) => votes.concat(a.votes), [])
				.filter(vote => vote === voteMarker || vote === req.ip)
				.length > 0;

			if (hasAlreadyVoted) {
				throw "Already voted";
			}

			answer.votes.push(voteMarker);

			dbPoll.save()
			.then(() => {
				console.log("done");
				res.json({
					success: true,
					poll: dbPoll
				});
			}).catch(err => {
				throw err;
			});

		}).catch(err => {
			sendError(res, err);
		});
	})

	app.get('/api/polls/:start/:limit', (req, res) => {
		poll
			.find({})
			.sort('-creation_date')
			.skip(Number(req.params.start))
			.limit(Number(req.params.limit))
			.exec((err, polls) => {
				if (err) {
					sendError(res, err);
					return;
				}

				res.json({
					polls: polls
				});
			});
	})
};