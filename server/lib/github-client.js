const host = 'http://cyf-github-api.herokuapp.com';
const fetch = require('isomorphic-fetch');


function fetchFromGithub (path) {
        console.log(`${host}${path}`);
      const promiseOfGithubData = fetch(`${host}${path}`)
        .then(function(response) {
            return response.json();
        })
           .catch(function(){
            console.log("Rejected promise")
        });

    return promiseOfGithubData;
}

module.exports.getUserProfile = function (username) {
    return fetchFromGithub(`/users/${username}`);
};

module.exports.getUserPullRequests = function (username) {
      return fetchFromGithub(`/users/${username}/events/public`)
        .then((response)=> response.filter(event=>event.type==="PullRequestEvent"));
};
