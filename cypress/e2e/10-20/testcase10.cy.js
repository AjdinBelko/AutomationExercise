describe('TestCase 2', function() {
    it('sub with email to site', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // scrolling down and adding the sub email 

        cy.xpath("//input[@id='susbscribe_email']").type('difala3123@rxcay.com');

        cy.xpath("//button[@id='subscribe']").click();

    //  reciving a success massage
  
    });
    

});

