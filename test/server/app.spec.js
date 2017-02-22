const { expect } = require('chai');
const request = require('supertest');
const proxyquire = require('proxyquire');
const sinon = require('sinon');

const cvControllerStub = sinon.stub().returns(Promise.resolve());
const app = proxyquire('../../server/app', {
	'./controllers/cv-controller': cvControllerStub
});

const end2end = require('../../server/app');
				// console.log(cvControllerStub)

describe.skip('app.js', () => {
	afterEach(() => cvControllerStub.reset());
	it('should call the cv controller on the \'/\' route', () => {
		return request(app)
			.get('/')
			.then(() => {
				// console.log(cvControllerStub)
				expect(cvControllerStub.called).to.be.true
			});
	});
});

describe.skip('End-to-end', () => {
	it('should serve html on the \'/\' route', () => {
		return request(end2end)
			.get('/')
			.expect(200)
			.expect('Content-Type', /html/)
	})

	it('should return json given the right query param', () => {
		return request(end2end)
			.get('/?format=json')
			.expect(200)
			.expect('Content-Type', /json/)
	})

	it('should handle any other user on the \'/user/:name\' route', () => {
		return request(end2end)
			.get('/user/tj')
			.expect(200)
	})
});