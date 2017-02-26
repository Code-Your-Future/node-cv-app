const client = require('../lib/github-client');

console.log(client.getUserProfile());
function fetchingData(username, res) {
	const userProfile = client.getUserProfile(username);
	const PullRequest = client.getUserPullRequests(username);
	return Promise.all([userProfile, PullRequest])
  .then((data
  	) =>{
  	console.log(data);
    return res.render('index', {code:data[0], codes:data[1][0]});
  }).catch(err => {
    console.log('Not retriving Data');
  })
}

module.exports = (req, res) => {
	const name = req.params.username;
	return fetchingData(name, res);
}


// module.exports = (req, res) => {
//   return client.getUserPullRequests(req.params.username)
//   .then((data) =>{
//     return res.send(data);
//   }).catch(err => {
//     console.log('Not retriving Data');
//   })
// }



//check way to make function slimlined
// fetchingDemo = (functionName) => {
//  return (client.functionName(param).then(data => {return res.send(data);}))
// }

// module.exports = (req, res) => {
// 	userName:fetchingDemo(getUserProfile(req.params.userName)),
// 	pullRequest: fetchingDemo(getUserPullRequests(req.params.userName))
// }


