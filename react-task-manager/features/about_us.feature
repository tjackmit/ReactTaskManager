Feature: Task Manager App - About Us
  About Us page and functionality

  Scenario: Display About Us Page
    Given the task manager website is loaded and displaying
    When the user clicks the 'about us' option in the navigation menu
    Then the user should be taken to the About Us page
    And the About Us header should be visible

