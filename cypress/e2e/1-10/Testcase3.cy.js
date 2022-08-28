describe('TestCase 2', function() {
    it('Visits the site and logins the invalid account information', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // Clicking on login button
    cy.xpath("//a[normalize-space()='Signup / Login']").click();
  
    //Verify the login information 

    cy.xpath("//input[@data-qa='login-email']").type('difala3123@rxcay.com');

    cy.xpath("//input[@placeholder='Password']").type('tester12345678');

    cy.xpath("//button[normalize-space()='Login']").click();

        // the invalid form is provided to the user that something is wrong
  
    });

});