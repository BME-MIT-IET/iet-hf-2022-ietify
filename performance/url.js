"use strict";

const b = require("benny");
const Url = require("../url.min.js");

const empty_url = new Url("");
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

const plus_url = new Url(
  "http://username:password@subdomain1.subdomain2.test.com:8080/path1/path2/?key1=value+values1&key2=value2#fragment"
);

const long_gibbrish = new Url("國上海中國中國上海中國中國上海中國中");

const medium_gibbrish = new Url("國上海中國中國上海中國中");

const short_gibbrish = new Url("國上海中國中");

const short_url_short_gibbrish = new Url(
  `http://testeurl.com/test?key1=${short_gibbrish}`
);
const medium_url_short_gibbrish = new Url(
  `http://subdomain.testeurl.com/test/test?key1=value1&key2=value2&key3=value3&key4=${short_gibbrish}`
);
const long_url_short_gibbrish = new Url(
  `http://username:password@subdomain1.subdomain2.test.com/path1/path2?key1=value1&key2=${short_gibbrish}#fragment`
);

const short_url_medium_gubbrish = new Url(
  `http://te.com/test?key1=${medium_gibbrish}`
);
const medium_url_medium_gibbrish = new Url(
  `http://subdomain.testeurl.com/test/test?key1=value1&key2=value2&key3=${short_gibbrish}&key4=${short_gibbrish}`
);
const long_url_medium_gibbrish = new Url(
  `http://username:password@subdomain1.subdomain2.test.com/path1/path2?key1=${short_gibbrish}&key2=${short_gibbrish}#fragment`
);

const short_url_long_gubbrish = new Url(`http://t.c/t?key1=${long_gibbrish}`);
const medium_url_long_gibbrish = new Url(
  `http://subdomain.testeurl.com/test/test?key1=value1&key2=${short_gibbrish}&key3=${short_gibbrish}&key4=${short_gibbrish}`
);
const long_url_long_gibbrish = new Url(
  `http://username:password@subdomain1.subdomain2.test.com/path1/path2?key1=${short_gibbrish}&key2=${short_gibbrish}#fr${short_gibbrish}`
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
    empty_url.toString();
  }),

  b.add("base url", () => {
    base_url.toString();
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
    short.toString();
  }),

  b.add("medium (1 path + 4 key-value)", () => {
    medium.toString();
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

b.suite(
  "queryLength function",

  b.add("empty url", () => {
    empty_url.queryLength();
  }),

  b.add("url has no query parameters", () => {
    base_url.queryLength();
  }),

  b.add("url has 2 keys", () => {
    query_url.queryLength();
  }),

  b.add("url has 4 keys", () => {
    many_query_url.queryLength();
  }),

  b.cycle(),
  b.complete(),
  b.save({
    file: "QueryLength",
    version: "1.0.0",
    format: "chart.html",
  })
);

b.suite(
  "encode function",

  b.add("empty url", () => {
    empty_url.encode(empty_url);
  }),
  b.add("short gibbrish", () => {
    short_gibbrish.encode(short_gibbrish);
  }),
  b.add("medium gibbrish", () => {
    medium_gibbrish.encode(medium_gibbrish);
  }),
  b.add("long gibbrish ", () => {
    long_gibbrish.encode(long_gibbrish);
  }),
  b.add("short url", () => {
    short.encode(short);
  }),
  b.add("short url with short gibbrish", () => {
    short_url_short_gibbrish.encode(short_url_short_gibbrish);
  }),
  b.add("short url with medium gibbrish", () => {
    short_url_medium_gubbrish.encode(short_url_medium_gubbrish);
  }),
  b.add("short url with long gibbrish", () => {
    short_url_long_gubbrish.encode(short_url_long_gubbrish);
  }),
  b.add("medium url", () => {
    medium.encode(medium);
  }),
  b.add("medium url with short gibbrish", () => {
    medium_url_short_gibbrish.encode(medium_url_short_gibbrish);
  }),
  b.add("medium url with medium gibbrish ", () => {
    medium_url_medium_gibbrish.encode(medium_url_medium_gibbrish);
  }),
  b.add("medium url with long gibbrish ", () => {
    medium_url_long_gibbrish.encode(medium_url_long_gibbrish);
  }),
  b.add("long url", () => {
    long_url.encode(long_url);
  }),
  b.add("long url with short gibbrish", () => {
    long_url_short_gibbrish.encode(long_url_short_gibbrish);
  }),
  b.add("long url with medium gibbrish ", () => {
    long_url_medium_gibbrish.encode(long_url_medium_gibbrish);
  }),
  b.add("long url with long gibbrish ", () => {
    long_url_long_gibbrish.encode(long_url_long_gibbrish);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: "encode", version: "1.0.0", format: "chart.html" })
);

