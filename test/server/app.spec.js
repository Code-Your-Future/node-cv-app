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
