Feature: Task Manager App - Profile - Team
  Profile - Team page and functionality

  Scenario: Display Support Page
    Given the task manager website is loaded and displaying
    When the user clicks the 'profile' option in the navigation menu
    Then the user should be taken to the profile team page
    And the profile team header should be visible

