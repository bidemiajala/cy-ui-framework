Feature: Login

  I want to login to Nop Commerce successfully
  
  Scenario: Nop Commerce Successful Login
    Given I open Nop Commerce login page
    When I type in 
        |  email  | password  |
        |  admin@yourstore.com | admin  |
    And I click on Sign in button
    Then "Dashboard" should be shown