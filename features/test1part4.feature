Feature: test1Part4
   Scenario: Testing query parameter
     Given test1_4 a paramsless url is "http://localhost:5500/test1"
     Given test1_4 test1 param value is "100"
     Then test1_4 url should be "http://localhost:5500/test1?test1=100"