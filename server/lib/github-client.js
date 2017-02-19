const host = 'http://cyf-github-api.herokuapp.com';
const fetch = require('isomorphic-fetch');

function fetchFromGithub(path) {
  return fetch(`${host}${path}`)
  .then(responce => responce.json());
}
module.exports.getUserProfile = username => fetchFromGithub(`/users/${username}`);
module.exports.getUserPullRequests = (username) => {
  const pullRequestOnly = fetchFromGithub(`/users/${username}/events/public`);
  return pullRequestOnly.then((pr => pr.filter(data => data.type.indexOf('PullRequestEvent') !== -1)));
};
