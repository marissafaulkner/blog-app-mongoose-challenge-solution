'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

// this makes the expect syntax available throughout
// this module
const expect = chai.expect;

const {BlogPost} = require('../models');
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');

chai.use(chaiHttp);


//seed data
function seedBlogPostData() {
	console.info('seeding blog post data');
	const seedData = [];

	for (let i=1; 1<=10; i++) {
		seedData.push(generateBlogPostData());
	}

	//Promise
	return BlogPost.insertMany(seedData);
}


function generateBlogPostData() {
	return {
		author: {
    		firstName: faker.name.firstName(),
    		lastName: faker.name.lastName()
    	},
  		title: faker.lorem.sentence(),
  		content: faker.lorem.paragraph(),
  		created: faker.date.past()
	};
}


function tearDownDb() {
	console.warn('Deleting database');
	return mongoose.connection.dropDatabase();
}



describe('Blog API resource', function() {

	before(function() {
		return runServer(TEST_DATABASE_URL);
	});

	beforeEach(function() {
		return seedBlogPostData();
	});

	afterEach(function() {
		return closeServer();
	});


	describe('GET endpoints', function() {

		it('should', function() {

		});
	});

	describe('POST endpoints', function() {

		it('should', function() {

		});
	});

	describe('PUT endpoints', function() {

		it('should', function() {

		});
	});

	describe('DELET endpoints', function() {

		it('should', function() {

		});
	});


});






























