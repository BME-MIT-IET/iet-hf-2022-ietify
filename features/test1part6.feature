Feature: test1Part6
   Scenario: Testing for path and params
     Given test1_6 a paramsless url is "http://localhost"
     Given test1_6 path is "/nemtest1"
     Given test1_6 test1 param value is "nem100"
     Then test1_6 url should not be "http://localhost/test1?test1=100"