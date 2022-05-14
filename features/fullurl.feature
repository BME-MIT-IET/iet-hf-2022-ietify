Feature: fullurl
   Scenario: Full Url
     Given test2 url is "http://localhost:5500/test2?test2=100#anchor"
     Then url2 should be "http://localhost:5500/test2?test2=100#anchor"
     Then protocol2 should be "http"
     Then host2 should be "localhost"
     Then port2 should be "5500"
     Then path2 should be "/test2"
     Then query2 should be "test2=100"
     Then queryTest2 should be "100"
     Then anchor2 should be "anchor"