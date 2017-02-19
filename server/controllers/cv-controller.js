
const clinet = require('../lib/github-client.js');

module.exports.getUser = (username, res) => {
  const userData = clinet.getUserProfile(`${username}`);
  userData.then((data) => {
    res.render('myCv', { actual: data });
  });
};

module.exports.getPullRequest = (username) => {
  const pullRequest = clinet.getUserPullRequests(`${username}`);
 console.log('Pull request', pullRequest);
};
