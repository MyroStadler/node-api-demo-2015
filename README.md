# node-api-demo-2015

Keep it simple.
Low level all the things.
Worse is better.
One sitting.

I've used the well known winecellar CRUD pattern as a low-level (unabstracted) starting point.
This then gets Mongo'd.
Once the first API method is working via curl, add a unit testing framework (testing the tester).
Once the unit testing framework succeeds, write the tests for all CRUD methods.
Test drive.


## Setup

- install MongoDb from http://docs.mongodb.org/manual/installation/
- (in terminal)
$ npm install
- (new terminal, same dir) 
$ mongod
- (new terminal, same dir) 
$ node server
- (in terminal)
$ ./node_modules/mocha/bin/mocha

## Objectives

- Node express REST API
- Mongo database

## TODO list

- Expand unit tests using boilerplate
- Introduce models
- Grunt, JsHint
- User access control patterns
- CI
- Mongo experiments, first is caching solutions then object document storage suitability for EVAs and graphs

