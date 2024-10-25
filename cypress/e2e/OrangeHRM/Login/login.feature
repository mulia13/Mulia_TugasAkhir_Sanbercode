Feature: Login Feature

    Scenario: Login with Valid Credentials
      Given I visit the URL
      And I should see the homepage
      When I submit the Username
      And I submit the Password
      Then I click the button Login
      Then I verify login success
    
    Scenario: Login with Invalid Username and Password
      Given I visit the URL
      And I should see the homepage
      Given I submit the Invalid Username
      And I submit the Invalid Password
      Then I click the button Login Without Intercept
      Then I verify the invalid credentials message

    Scenario: Login with Valid Username and Invalid Password
      Given I visit the URL
      And I should see the homepage
      When I submit the Username
      And I submit the Invalid Password
      Then I click the button Login Without Intercept
      Then I verify the invalid credentials message
    
    Scenario: Login with Invalid Username and Valid Password
      Given I visit the URL
      And I should see the homepage
      When I submit the Invalid Username
      And I submit the Password
      Then I click the button Login Without Intercept
      Then I verify the invalid credentials message

    Scenario: Login with Empty Username and Valid Password
      Given I visit the URL
      And I should see the homepage
      When I submit the Empty Username
      And I submit the Password
      Then I click the button Login Without Intercept
      Then I verify the required message

    Scenario: Login with Valid Username and Empty Password
      Given I visit the URL
      And I should see the homepage
      When I submit the Username
      And I submit the Empty Password
      Then I click the button Login Without Intercept
      Then I verify the required message

    Scenario: Login with Empty Username and Empty Password
      Given I visit the URL
      And I should see the homepage
      When I submit the Empty Username
      And I submit the Empty Password
      Then I click the button Login Without Intercept
      Then I verify the required message contains text