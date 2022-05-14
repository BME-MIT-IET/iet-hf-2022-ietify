const assert = require('assert');
const { When, Then, Given } = require('@cucumber/cucumber');
const Url = require('../../url.min');

/**
 * Tests for simple URL manipulation tests.
 */

// Test 1 - Part 1 success for path
Given("a pathless url {string}", (pathless) => {
    this.urlTest1 = new Url(pathless);
});
When("path is {string}", (path) => {
    this.urlTest1.path = path;
});
Then("url with path should be {string}", (urlWithPath)=>{
    assert.equal(this.urlTest1, urlWithPath)
});


// Test 1 - Part 2 fail for path
Given("a pathless fail url {string}", (pathlessfail) => {
    this.urlTest1 = new Url(pathlessfail);
});
When("fail path is {string}", (path) => {
    this.urlTest1.path = path;
});
Then("fail url with path should be {string}", (failurlWithPath)=>{
    assert.notEqual(this.urlTest1, failurlWithPath);
});


// Test 1 - Part 3 success for params
Given("a paramless url {string}", (paramLessUrl) => {
    this.urlTest1 = new Url(paramLessUrl);
});
When("param is {string}", (param) => {
    this.urlTest1.query.test1 = param;
});
Then("url with param should be {string}", (urlWithParam)=>{
    assert.equal(this.urlTest1, urlWithParam);
});

// test 2 - Full URL
Given("test2 url is {string}", function(url){
    this.urlTest2 = new Url(url);
});
Then('url2 should be {string}', function (url) {
    assert.equal(this.urlTest2, url);
});
Then('protocol2 should be {string}', function (protocol) {
    assert.equal(this.urlTest2.protocol, protocol);
});
Then('host2 should be {string}', function (host) {
    assert.equal(this.urlTest2.host, host);
});
Then('port2 should be {string}', function (port) {
    assert.equal(this.urlTest2.port, port);
});
Then('path2 should be {string}', function (path) {
    assert.equal(this.urlTest2.path, path);
});
Then('query2 should be {string}', function (query) {
    assert.equal(this.urlTest2.query, query);
});
Then('queryTest2 should be {string}', function (queryTest2) {
    assert.equal(this.urlTest2.query.test2, queryTest2);
});
Then('anchor2 should be {string}', function (anchor) {
    assert.equal(this.urlTest2.hash, anchor);
});


// test 3 - Clear Query
Given("url is {string}", function(url){
    this.urlTest3 = new Url(url);
    this.urlTest3.host = "localhost"; // convert local page url to localhost
});
When('clearquery function gets called', function () {
    this.urlTest3.clearQuery();
});
Then('I should get {string}', function (expected) {
  assert.equal(this.urlTest3, expected);
});
