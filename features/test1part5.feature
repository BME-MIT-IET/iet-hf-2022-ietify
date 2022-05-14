Feature: test1Part5
   Scenario: Testing for path and params
     Given test1_5 a paramsless url is "http://localhost"
     Given test1_5 path is "/test1"
     Given test1_5 test1 param value is "100"
     Then test1_5 url should be "http://localhost/test1?test1=100"