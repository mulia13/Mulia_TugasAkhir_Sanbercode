Feature: Forgot Password Feature

    Scenario: User Forgot Password
      Given I visit the URLL
      And I should see the homepagee
      When I click the button Forgot Passwordd
      When I submit the Usernamee
      Then I click the button Reset Passwordd
      Then I verify Reset Password Successs