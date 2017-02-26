const host = 'http://cyf-github-api.herokuapp.com';
const fetch = require('isomorphic-fetch');

function fetchFromGithub (path) {
	// write something that will fetch json information from github
	return fetch(`${host}${path}`)
	.then( response => {
		return response.json();
	});
}

module.exports.getUserProfile = function (username) {
	return fetchFromGithub(`/users/${username}`);
};

// add a method to retrieve user pull requests here
module.exports.getUserPullRequests = function (username) {
	return fetchFromGithub(`/users/${username}/events/public`).then((data) => {
		return data.filter((event) => {
			return event.type === "PullRequestEvent";
		});
	});
};