Feature: test1Part3
   Scenario: Testing success for query parameters
     Given a paramless url "http://localhost:5500/"
     When param is "success"
     Then url with param should be "http://localhost:5500/?test1=success"