const { expect } = require('chai');
const nock = require('nock');

const githubClient = require('../../../server/lib/github-client.js');

describe('Github client', () => {
	it('should retrieve user profile information', () => {
		nock('http://cyf-github-api.herokuapp.com')
			.get('/users/wheresrhys')
			.reply(200, require('../../fixtures/user.json'));

        const userProfile = githubClient.getUserProfile('wheresrhys')

		expect(userProfile.login).to.equal('wheresrhys');
     	expect(userProfile.name).to.equal('Rhys Evans');
	})

	it('should retrieve user pull requests', () => {
		nock('http://cyf-github-api.herokuapp.com')
			.get('/users/wheresrhys/events/public')
			.reply(200, require('../../fixtures/events.json'));

		const pullRequests = githubClient.getUserPullRequests('wheresrhys');

        expect(pullRequests.length).to.equal(4);
        pullRequests.forEach(event => {
            expect(event.type).to.equal('PullRequestEvent');
            expect(event.actor.login).to.equal('wheresrhys')
        })
	})
});
