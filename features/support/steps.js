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

// Test 1 - Part 4 - Fail for params
Given("test1_4 a paramsless url is {string}", function(url){
  this.url1Test4 = new Url(url);
});
Given("test1_4 test1 param value is {string}", function(query){
  this.url1Test4.query.test1 = query;
});
Then('test1_4 url should be {string}', function (url) {
  assert.equal(this.url1Test4, url);
});

// Test 1 - Part 5 - Success for path and params
Given("test1_5 a paramsless url is {string}", function(url){
  this.url1Test5 = new Url(url);
});
Given("test1_5 path is {string}", function(path){
  this.url1Test5.path = path;
});
Given("test1_5 test1 param value is {string}", function(query){
  this.url1Test5.query.test1 = query;
});
Then('test1_5 url should be {string}', function (url) {
  assert.equal(this.url1Test5, url);
});

// Test 1 - Part 6 - Fail for path and params
Given("test1_6 a paramsless url is {string}", function(url){
  this.url1Test6 = new Url(url);
});
Given("test1_6 path is {string}", function(path){
  this.url1Test6.path = path;
});
Given("test1_6 test1 param value is {string}", function(query){
  this.url1Test6.query.test1 = query;
});
Then('test1_6 url should not be {string}', function (url) {
  assert.notEqual(this.url1Test6, url);
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

// test 4 - Relative URL
Given("test4 url is {string}", function(url){
  this.urlTest4 = new Url(url);
});
Given("test4 path is {string}", function(path){
  this.urlTest4.path = path;
});
Given("test4 host is {string}", function(host){
  this.urlTest4.host = host;
});
Given("test4 port is {string}", function(port){
  this.urlTest4.port = port;
});
Given("test4 protocol is {string}", function(protocol){
  this.urlTest4.protocol = protocol;
});
Then('test4 url should be {string}', function (url) {
  assert.equal(this.urlTest4, url);
});
Then('test4 protocol should be {string}', function (protocol) {
  assert.equal(this.urlTest4.protocol, protocol);
});
Then('test4 host should be {string}', function (host) {
  assert.equal(this.urlTest4.host, host);
});
Then('test4 port should be {string}', function (port) {
  assert.equal(this.urlTest4.port, port);
});
Then('test4 path should be {string}', function (path) {
  assert.equal(this.urlTest4.path, path);
});
Then('test4 query should be {string}', function (query) {
  assert.equal(this.urlTest4.query, query);
});
Then('test4 queryTest4 should be {string}', function (queryTest4) {
  assert.equal(this.urlTest4.query.test4, queryTest4);
});
Then('test4 anchor should be {string}', function (anchor) {
  assert.equal(this.urlTest4.hash, anchor);
});

// test 5 - Query case sensitivity
Given("test5 url is {string}", function(url){
  this.urlTest = new Url(url);
});
Then('url should not be {string}', function (expected) {
  assert.notEqual(this.urlTest, expected);
});
