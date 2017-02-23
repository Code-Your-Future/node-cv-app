const host = 'http://cyf-github-api.herokuapp.com';
const fetch = require('isomorphic-fetch');

fetchFromGithub = path => {
  return (
    fetch(`${host}${path}`)
    .then(apiRes => apiRes.json())
    .then(json => json)
    .catch(err => console.error(err))
    );
}

module.exports.getUserProfile = username => fetchFromGithub(`/users/${username}`);

module.exports.getUserPullRequests = username => {
  return (
    fetchFromGithub(`/users/${username}/events/public`)
    .then(data => data.filter(value => value.type === 'PullRequestEvent'))
    );
};
