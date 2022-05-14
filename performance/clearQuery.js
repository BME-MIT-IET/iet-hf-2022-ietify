"use strict";

const b = require("benny");
const Url = require("../url.min.js");
const u = new Url("");
const u2 = new Url("http//:testeurl.com/test?key1=value1&key2=value2");
const u3 = new Url(
  "http//:testeurl.com/test?key1=value1&key2=value2&key3=value3&key4=value4"
);

b.suite(
  "clearQuery function",

  b.add("clearQuery has no url", () => {
    u.clearQuery();
  }),

  b.add("clearQuery has 2 keys", () => {
    u2.clearQuery();
  }),

  b.add("clearQuery has 4 keys", () => {
    u3.clearQuery();
  }),

  b.cycle(),
  b.complete(),
  b.save({
    file: "clearQuery",
    version: "1.0.0",
    format: "chart.html",
  })
);
