Feature: Task Manager App - Welcome
  Welcome page and functionality

  Scenario: Load Task Manager website
    Given the user goes to the Task Manager website
    When the Task Manager website loads
    Then I should see the welcome page
    And the Task Manager logo