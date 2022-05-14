Feature: test1Part2
   Scenario: Testing failure for path
     Given a pathless fail url "http://localhost:5500"
     When fail path is "/test1fail"
     Then fail url with path should be "http://localhost:5500/test1"