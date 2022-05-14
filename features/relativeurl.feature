Feature: relativeurl
   Scenario: Relative Url
     Given test4 url is "../test4.html?test4=100#anchor"
     Given test4 host is "localhost"
     Given test4 port is "5500"
     Given test4 protocol is "http"
     Then test4 url should be "http://localhost:5500/test4.html?test4=100#anchor"
     Then test4 protocol should be "http"
     Then test4 host should be "localhost"
     Then test4 port should be "5500"
     Then test4 path should be "/test4.html"
     Then test4 query should be "test4=100"
     Then test4 queryTest4 should be "100"
     Then test4 anchor should be "anchor"