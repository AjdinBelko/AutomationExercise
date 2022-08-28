describe('TestCase 2', function() {
    it('Verify user is navigated to ALL PRODUCTS page successfull and search for polo', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // Clicking on signup button 

        cy.xpath("//a[@href='/products']").click();

    // page navigates to the products 

  
    });

it('searches for polo brand', () => {

    // search bar is visiable and entering data 

    cy.xpath("//input[@id='search_product']").type('Polo');
    cy.xpath("//button[@id='submit_search']").click();

    // product is displayed

    });
    

});

