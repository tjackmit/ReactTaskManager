Feature: Task Manager App - Profile - Account
  Profile - Account page and functionality

  Scenario: Display Account Page
    Given the task manager website is loaded and displaying
    When the user clicks the 'account' option in the navigation menu
    Then the user should be taken to the Account page
    And the Account header should be visible

