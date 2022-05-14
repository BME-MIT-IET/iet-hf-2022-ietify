Feature: casesensitive
   Scenario: Case Sensitive URL
     Given test5 url is "http://localhost:5500/test5?test5=test#anchor"
     Then url should not be "http://localhost:5500/test5?test5=TEST#anchor"