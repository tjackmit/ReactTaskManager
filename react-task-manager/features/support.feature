Feature: Task Manager App - Support
  Support page and functionality

  Scenario: Display Support Page
    Given the task manager website is loaded and displaying
    When the user clicks the 'support' option in the navigation menu
    Then the user should be taken to the Support page
    And the Support header should be visible

