Feature: Login functionality

  As a user of n11
  In order to manage web site
  I want to be able to log in to the system

  Scenario: Log in with valid credentials
    Given I am a user of n11
    When I log in using valid credentials
    Then I should be logged in



