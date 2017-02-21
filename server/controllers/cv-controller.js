const client = require('../lib/github-client');
console.log(client.getUserProfile);
module.exports = (req, res) => {
  return client.getUserProfile(req.params.username)
  .then((data) =>{
    res.send(data);
  }).catch(err => {
    console.log(err);
  })
}

module.exports = (req, res) => {
  return client.getUserPullRequests(req.params.username)
  .then((data) => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  })
}
