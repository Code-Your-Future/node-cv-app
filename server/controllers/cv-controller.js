const client = require('../lib/github-client');
console.log(client.getUserProfile());
module.exports = (req, res) => {
  return client.getUserProfile()
  .then((data) =>{
    res.send(data);
  }).catch(err => {
    console.log('Not retriving Data');
  })
};
