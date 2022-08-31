describe('TestCase 2', function() {
    it('Visits the site and test if TESTCases button work', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // Clicking on signup button 

        cy.xpath("//a[contains(text(),'Test Cases')]").click()
        cy.url().should("eq", "https://automationexercise.com/test_cases");

    // page navigates to the test cases
  
    });

});

