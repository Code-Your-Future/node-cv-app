const fetch = require('isomorphic-fetch');
const gitApi = 'https://api.github.com';

fetchFromGithub = path => {
  return (
    fetch(`${gitApi}${path}`)
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
