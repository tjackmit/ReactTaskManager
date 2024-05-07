Feature: Task Manager App - Profile - Settings
  Profile - Settings page and functionality

  Scenario: Display Settings Page
    Given the task manager website is loaded and displaying
    When the user clicks the 'settings' option in the navigation menu
    Then the user should be taken to the Settings page
    And the Settings header should be visible

