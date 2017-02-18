const host = 'http://cyf-github-api.herokuapp.com';
const fetch = require('isomorphic-fetch');

function fetchFromGithub (path) {
	// write something that will fetch json information from github
}

module.exports.getUserProfile = function (username) {
	return fetchFromGithub('/users/' + username);
}

// add a method to retrieve user pull requests here
