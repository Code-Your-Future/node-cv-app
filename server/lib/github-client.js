const host = 'http://cyf-github-api.herokuapp.com';
const fetch = require('isomorphic-fetch');

function fetchFromGithub (path) {
  // write something that will fetch json information from github
  const userNameDataUrl = host + path;
  console.log('userNameDataUrl',userNameDataUrl);
  return (
    fetch(userNameDataUrl, {
      method: 'GET',
    })
    .then((apiRes) => {
      return apiRes.json();
    })
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.error(err);
    }));
}

module.exports.getUserProfile = function (username) {
  return fetchFromGithub(`/users/${username}`);
};

// add a method to retrieve user pull requests here
module.exports.getUserPullRequests = function (username) {
  return fetchFromGithub(`/users/${username}/events/public`).then(data => data.filter(value => value.type === 'PullRequestEvent'));
};

