const { expect } = require('chai');
const request = require('supertest');
const nock = require('nock');
const cheerio = require('cheerio');
const server = require('../../server/app.js');

describe('CV serving app', () => {
	it('should serve CV on the \'/\' route', () => {

	})

	it('should call the cyf-github api for extra data', () => {

	})

	it('should render extra data when provided a query param', () => {

	})
});


const githubClient = require('../../server/lib/github-client.js');

describe('Github client', () => {
	it('should retrieve user profile information', () => {
		nock('http://cyf-github-api')
      .get('/users/wheresrhys')
      .reply(200, require('../fixtures/user.json'));
     return githubClient.getUserProfile('wheresrhys')
     	.then(user => {
     		expect(user.login).to.equal('wheresrhys');
     		expect(user.name).to.equal('Rhys Evans');
     	})
	})

	it('should retrieve user pull requests', () => {
		nock('http://cyf-github-api')
      .get('/users/wheresrhys/events/public')
      .reply(200, require('../fixtures/user.json'));
    return githubClient.getUserPullRequests('wheresrhys')
     	.then(prs => {
     		expect(prs.length).to.equal(4);
     		prs.forEach(event => {
     			expect(event.type).to.equal('PullRequestEvent');
     			expect(event.actor.login).to.equal('wheresrhys')
     		})
     	})
	})

});

const controller = require('../../server/controllers/cv-controller');

describe('CV controller', () => {
	it('should do all the above, but in a different place', () => {

	})
})

const middleware = require('../../server/middleware');

describe('middleware', () => {

	it('should add URL parameters to the response object', () => {

	})

	it('should add query parameters to the response object', () => {

	})


	it('should add headers to the response object', () => {

	})


	it('should add cookies to the response object', () => {

	})
})
