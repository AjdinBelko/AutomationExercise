describe('TestCase 2', function() {
    it('Visits the site and logins the invalid account information', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");

    //assert the url 
    cy.url().should("include", "https://automationexercise.com/" );
    
   // Clicking on login button

    });

   it('login link', () => {


     cy.xpath("//a[normalize-space()='Signup / Login']").click()
     cy.url().should("eq", "https://automationexercise.com/login");


   });

    // cy.xpath("//a[normalize-space()='Signup / Login']").click()



    //Verify the login information 

        // the invalid form is provided to the user that something is wrong
  


    it('login test',  () => {

        cy.xpath("//input[@data-qa='login-email']").type('difala3123@rxcay.com');

        cy.xpath("//input[@placeholder='Password']").type('tester12345');
    
        cy.xpath("//button[normalize-space()='Login']").click();

        cy.url().should('equal', "https://www.njuskalo.hr/");


    });

});