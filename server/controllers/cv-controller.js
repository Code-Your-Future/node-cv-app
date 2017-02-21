
const clinet = require('../lib/github-client.js');

const hundleRequest = (name, res) => {
  const userPromise = clinet.getUserProfile(`${name}`);
  const userPullrequest = clinet.getUserPullRequests(`${name}`);
  Promise.all([userPromise, userPullrequest])
  .then((userData) => {
    const numberOfPullReq = userData[1].length;
    res.render('myCv', { actual: userData[0], numberPullRequest: numberOfPullReq });
  });
};

module.exports.userProfile = (req, res) => {
  const name = req.query.name;
  hundleRequest(`${name}`, res);
};

