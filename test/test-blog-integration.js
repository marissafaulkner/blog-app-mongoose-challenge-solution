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