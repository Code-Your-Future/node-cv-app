const client = require('../lib/github-client');

function fetchingData(username, res) {
  const userProfile = client.getUserProfile(username);
  const PullRequest = client.getUserPullRequests(username);
  
  return Promise.all([userProfile, PullRequest])
  .then(([code,content]) =>{
      console.log(code,content);
      return res.render('index',{code,content});
    }
  )
  .catch(
    err => {
      console.log('error');
    }
  )
}

module.exports = (req, res) => {
    const name = req.params.username;
    return fetchingData(name, res);
}