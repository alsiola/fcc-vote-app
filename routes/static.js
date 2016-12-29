var path = process.cwd();

module.exports = function (app) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	app.get('/', isLoggedIn, function (req, res) {
			res.sendFile(path + '/build/index.html');
		});

	app.route('/login')
		.get(function (req, res) {
			res.sendFile(path + '/build/login.html');
		});

	app.route('/logout')
		.get(function (req, res) {
			req.logout();
			res.redirect('/login');
		});
};