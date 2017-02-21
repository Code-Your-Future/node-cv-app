const host = 'http://cyf-github-api.herokuapp.com';
const fetch = require('isomorphic-fetch');

function fetchFromGithub(path) {
  return fetch(`${host}${path}`)
  .then(responce => responce.json());
}
module.exports.getUserProfile = username => fetchFromGithub(`/users/${username}`);
module.exports.getUserPullRequests = username => fetchFromGithub(`/users/${username}/events/public`)
  .then(events => events.filter(event => event.type.indexOf('PullRequestEvent') !== -1));

