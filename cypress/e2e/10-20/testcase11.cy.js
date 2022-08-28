describe('TestCase 2', function() {
    it('Cart section & sub ', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // scrolling down and adding the sub email 

        cy.xpath("//a[normalize-space()='Cart']").click();

    //  loads the cart section

  
    });

    it('adds the email sub to the test', () => {

        cy.xpath("//input[@id='susbscribe_email']").type('difala3123@rxcay.com');
        cy.xpath("//button[@id='subscribe']").click();

        //adding the requested sub to test & receving the note that has been done 
    });
    

});

