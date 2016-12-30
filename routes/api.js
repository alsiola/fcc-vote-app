const poll = require('../model/Poll');

module.exports = function (app) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	app.get('/api/currentuser', isLoggedIn, function (req, res) {
		res.json({user : req.user});
	});

	app.post('/api/poll', isLoggedIn, (req, res) => {
		const newPoll = new poll(req.body);
		newPoll.save(err => {
			if (err) {
				res.json({ success: false });
			}

			res.json({
				success: true,
				localPoll: req.body,
				dbPoll: newPoll
			})
		})
	})
};