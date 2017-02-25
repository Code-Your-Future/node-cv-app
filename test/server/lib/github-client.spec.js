const { expect } = require('chai');
const nock = require('nock');

const githubClient = require('../../../server/lib/github-client.js');

describe('Github client', () => {
	it('should retrieve user profile information', () => {
		nock('http://cyf-github-api.herokuapp.com')
			.get('/users/wheresrhys')
			.reply(200, require('../../fixtures/user.json'));

		//console.log('GET USER PROFILE=', githubClient.getUserProfile)
		//console.log('CALLING GET USER PROFILE=', githubClient.getUserProfile())

		const promiseOfGithubData = githubClient.getUserProfile('wheresrhys')
     	
     	return promiseOfGithubData
     		.then(user => {
     			console.log('THE RETURN IS',user);
     			expect(user.login).to.equal('wheresrhys');
     			expect(user.name).to.equal('Rhys Evans');
     		})
	})

	it('should retrieve user pull requests', () => {
		nock('http://cyf-github-api.herokuapp.com')
			.get('/users/wheresrhys/events/public')
			.reply(200, require('../../fixtures/events.json'));

		const userPullRequsets = githubClient.getUserPullRequests('wheresrhys')
		return userPullRequsets
     		.then(prs => {
     			console.log('PULL REQUEST',prs);
     			expect(prs.length).to.equal(4);
     			prs.forEach(event => {
     				expect(event.type).to.equal('PullRequestEvent');
     				expect(event.actor.login).to.equal('wheresrhys')
     			})
     		})
	})
});
