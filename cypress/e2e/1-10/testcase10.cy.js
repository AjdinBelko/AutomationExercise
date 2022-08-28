describe('TestCase 2', function() {
    it('Verify user is navigated to ALL PRODUCTS page successfull and search for polo', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // scrolling down and adding the sub email 

        cy.xpath("//input[@id='susbscribe_email']").type('difala3123@rxcay.com');

        cy.xpath("//button[@id='subscribe']").click();

    //  reciving a success massage
  
    });
    

});

