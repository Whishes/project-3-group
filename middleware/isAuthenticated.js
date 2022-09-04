// middleware to test if authenticated
function isAuthenticated(req, res, next) {
	if (req.session.email) {
		next();
	} else {
		res.sendStatus(401);
	}
}

module.exports = isAuthenticated;
