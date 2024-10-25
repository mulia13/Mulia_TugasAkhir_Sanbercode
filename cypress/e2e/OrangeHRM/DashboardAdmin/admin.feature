Feature: Admin Feature

    Scenario: Add User Admin
      Given I visit the URL Login
      When Navigate to Admin
      When I click button add and I fill out the user page
      Then I click on save button and verify user
    
    Scenario: Edit User Admin
      Given I visit the URL Login
      When Navigate to Admin
      When I choose edit button di data table
      Then I update the user Page
      Then I click on save button and verify user

    Scenario: Search User By Username
      Given I visit the URL Login
      When Navigate to Admin
      When I search user by username
      Then I reset the search

    Scenario: Search User By User Role
      Given I visit the URL Login
      When Navigate to Admin
      When I search user by user role
      Then I reset the search

    Scenario: Search User By Employe Name
      Given I visit the URL Login
      When Navigate to Admin
      When I search user by employe name
      Then I reset the search

    Scenario: Search User By Status User
      Given I visit the URL Login
      When Navigate to Admin
      When I search user by status role
      Then I reset the search

    
    Scenario: Delete User Admin
      Given I visit the URL Login
      When Navigate to Admin
      When I choose delete button di data table
      Then I choose Yes Delete
  