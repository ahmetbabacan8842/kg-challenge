Feature: Search functionality

  I want to be able to search to the system

  Scenario Outline: Add product to favourite after search
    Given I am a user of n11
    When I log in using valid credentials
    And I search for the "<product>" product
    And I add the product to favourites
    Then The product should be added to favourite

    Examples:
      |product|
      |nike|