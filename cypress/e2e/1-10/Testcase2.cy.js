describe('TestCase 2', function() {
    it('Visits the site and logins the valid account', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // Clicking on login button
    cy.xpath("//a[normalize-space()='Signup / Login']").click();
  
    //Verify the login information 

    cy.xpath("//input[@data-qa='login-email']").type('difala3123@rxcay.com');

    cy.xpath("//input[@placeholder='Password']").type('tester12345');

    cy.xpath("//button[normalize-space()='Login']").click();

    //logins to the existing account 
  
    });

    it('Loggin in user checking if delete account is visiable', function() {

        // user is logged in, checking for account delete option

        cy.xpath("//a[normalize-space()='Delete Account']").click();
        
        // delete account is visiable 

        cy.xpath("//button[normalize-space()='Cancel']").click();
    });
    
  });