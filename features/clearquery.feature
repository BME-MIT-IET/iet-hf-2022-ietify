Feature: clearquery
   Scenario: Clear Query
     Given url is "http://localhost:5500/test3?test3=100#anchor"
     When clearquery function gets called
     Then I should get "http://localhost:5500/test3#anchor"