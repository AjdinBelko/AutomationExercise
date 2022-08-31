describe('TestCase 2', function() {
    it('Visits the site and logins the valid account', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");

    cy.url().should("eq", "https://automationexercise.com/");
    
    });

    it('clicks on the loign button', () => {

        cy.xpath("//a[normalize-space()='Signup / Login']").click();
        cy.url().should('eq', 'https://automationexercise.com/login');
    });
   // Clicking on login button
    
    //Verify the login information 

 // cy.url().should("eq", "https://automationexercise.com/")
it('logins to the case', () => {

    cy.xpath("//input[@data-qa='login-email']").should('be.empty').type('difala3123@rxcay.com');

    cy.xpath("//input[@placeholder='Password']").should('be.empty').type('tester12345');

    cy.xpath("//button[normalize-space()='Login']").should('be.visible').click();

    cy.wait(4000);

    cy.url().should('eq', 'https://automationexercise.com/login');

    // cy.url().should('eq', 'https://automationexercise.com/')

});
   

    //logins to the existing account 
  
   // it('Loggin in user checking if delete account is visiable', function() {

        // user is logged in, checking for account delete option

      //  cy.xpath("//a[normalize-space()='Delete Account']").click();
        
        // delete account is visiable 

      //  cy.xpath("//button[normalize-space()='Cancel']").click();


      it('login paged', () => {


      });
    });
