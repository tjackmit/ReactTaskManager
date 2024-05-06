Feature: Task Manager App - Welcome Screen loads
  Welcome screen loads when user go to Task Manager website

  Scenario: Load Task Manager website
    Given the user goes to the Task Manager website
    When the Task Manager website loads
    Then I should see the welcome screen
    And the Task Manager logo