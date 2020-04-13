Feature: Unsuccessful Login

  I want to login to Nop Commerce unsuccessfully

    Scenario: Nop Commerce unsuccessful Login with invalid credentials
    Given I open Nop Commerce login page
    When I type in 
        |  email  | password  |
        |  cucumber@bidemi.xyz | 12345  |
    And I click on Sign in button
    Then "Login was unsuccessful. Please correct the errors and try again." should be shown