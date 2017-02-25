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

filterByEventType = (data, eventType) => data.filter(value => value.type === eventType);

module.exports = {
  getUserProfile: username => fetchFromGithub(`/users/${username}`),
  getUserPullRequests: username => {
  return (
    fetchFromGithub(`/users/${username}/events/public`)
    .then(data => filterByEventType(data, 'PullRequestEvent'))
    );
  }
}
