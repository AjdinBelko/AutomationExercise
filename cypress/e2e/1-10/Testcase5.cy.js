describe('TestCase 2', function() {
    it('Visits the site and signup with invalid information', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // Clicking on signup button

    cy.xpath("//a[normalize-space()='Signup / Login']").click();
  
    // try to register with already existing email adress 

    cy.xpath("//input[@placeholder='Name']").type('tester123');

    cy.xpath("//input[@data-qa='signup-email']").type('difala3123@rxcay.com');

    cy.xpath("//button[normalize-space()='Signup']").click();

    // this email adress already exist and test ends
  
    });

});

