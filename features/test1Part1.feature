Feature: test1Part1
   Scenario: Testing success for path
     Given a pathless url "http://localhost:5500"
     When path is "/test1"
     Then url with path should be "http://localhost:5500/test1"