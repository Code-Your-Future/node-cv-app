const githubClient = require('../lib/github-client.js');

module.exports.getData = (username, res) => {
  const userProfilePromise = githubClient.getUserProfile(username);
  const userPullRequestsPromise = githubClient.getUserPullRequests(username);
  Promise.all([userProfilePromise, userPullRequestsPromise])
  .then(([userProfile, userPullRequests]) => res.render('cv', { userProfile: userProfile, userPullRequests: userPullRequests }))
  .catch(err => console.error(err));
};

/*module.exports.getData = function (req, res) {
  const username = req.params.name;
  return githubClient.getUserProfile(username).then(data => res.render('cv', {code: data}));
};*/
