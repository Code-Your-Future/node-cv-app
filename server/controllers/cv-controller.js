const githubClient = require('../lib/github-client.js');

module.exports.getData = function (username,res) {
	return githubClient.getUserProfile(username).then(data => res.render('cv', {code: data}));
};
