"use strict";

const b = require("benny");
const Url = require("../url.min.js");

const empty = new Url("");
const base_url = new Url("http://test.com");
const auth_url = new Url("http://username:password@test.com");
const subdomains_url = new Url("http://subdomain1.test.com");
const many_subdomains_url = new Url(
  "http://subdomain1.subdomain2.subdomain3.subdomain4.subdomain.5.subdomain.6.test.com"
);
const port_url = new Url("http://test.com:8080");
const path_url = new Url("http://test.com/path");
const long_path_url = new Url(
  "http://test.com/looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooongpath"
);
const many_path_url = new Url(
  "http://test.com/path1/path2/path3/path4/path5/path6"
);
const query_url = new Url("http://test.com?key1=value1");
const many_query_url = new Url(
  "http://test.com?key1=value1&key2=value2&key3=value3&key4=value4&key5=value5&key6=value6"
);
const fragment_url = new Url("http://test.com#fragment");

const short = new Url("http://testeurl.com/test?key1=value1");
const medium = new Url(
  "http://subdomain.testeurl.com/test/test?key1=value1&key2=value2&key3=value3&key4=value4"
);
const long_url = new Url(
  "http://username:password@subdomain1.subdomain2.test.com/path1/path2?key1=value1&key2=value2#fragment"
);
const everything_url = new Url(
  "http://username:password@subdomain1.subdomain2.test.com:8080/path1/path2/?key1=value1&key2=value2#fragment"
);

b.suite(
  "clearQuery function",

  b.add("empty url", () => {
    empty_url.clearQuery();
  }),

  b.add("url has no query parameters", () => {
    empty_url.clearQuery();
  }),

  b.add("url has 2 keys", () => {
    query_url.clearQuery();
  }),

  b.add("url has 4 keys", () => {
    many_query_url.clearQuery();
  }),

  b.cycle(),
  b.complete(),
  b.save({
    file: "clearQuery",
    version: "1.0.0",
    format: "chart.html",
  })
);

b.suite(
  "toString function",

  b.add("empty", () => {
    base_url.toString();
  }),

  b.add("base url", () => {
    u.toString();
  }),

  b.add("auth", () => {
    auth_url.toString();
  }),

  b.add("subdomain", () => {
    subdomains_url.toString();
  }),

  b.add("many subdomains", () => {
    many_subdomains_url.toString();
  }),

  b.add("port", () => {
    port_url.toString();
  }),

  b.add("path", () => {
    path_url.toString();
  }),

  b.add("many path", () => {
    many_path_url.toString();
  }),

  b.add("long path", () => {
    long_path_url.toString();
  }),

  b.add("query", () => {
    query_url.toString();
  }),

  b.add("many query", () => {
    many_query_url.toString();
  }),

  b.add("fragment", () => {
    fragment_url.toString();
  }),

  b.add("short (1 path + 2 key-value)", () => {
    u2.toString();
  }),

  b.add("medium (1 path + 4 key-value)", () => {
    u3.toString();
  }),

  b.add("long (auth + subdomains + paths + key-value + fragment)", () => {
    long_url.toString();
  }),

  b.add(
    "extra-long paths (auth + subdomains + paths + key-value + fragment)",
    () => {
      everything_url.toString();
    }
  ),

  b.cycle(),
  b.complete(),
  b.save({
    file: "toString",
    version: "1.0.0",
    format: "chart.html",
  })
);
