describe('TestCase 22', function() {

    it('adds the recommended product to the site', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");

    cy.url().should("eq",  "https://automationexercise.com/")
    
   // loads on valid

    });

    it('logins to the account', () => {
    
   cy.xpath("//a[normalize-space()='Signup / Login']").click();

   cy.url().should("eq", "https://automationexercise.com/login");

   cy.xpath("//input[@data-qa='login-email']").should('be.empty').type('difala3123@rxcay.com'); 

   cy.xpath("//input[@placeholder='Password']").should('be.empty').type('tester12345');

   cy.xpath("//button[normalize-space()='Login']").click()
   cy.url().should("eq", "https://automationexercise.com/");
    

    });

});





//done


