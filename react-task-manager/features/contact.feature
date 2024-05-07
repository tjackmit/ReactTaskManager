Feature: Task Manager App - Contact
  Contact page and functionality

  Scenario: Display Contact Page
    Given the task manager website is loaded and displaying
    When the user clicks the 'contact' option in the navigation menu
    Then the user should be taken to the Contact page
    And the Contact header should be visible

