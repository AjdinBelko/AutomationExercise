describe('TestCase 2', function() {
    it('Verify user is navigated to ALL PRODUCTS page successfully', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // Clicking on signup button 

        cy.xpath("//a[@href='/products']").click();

    // page navigates to the products 

        cy.xpath("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]")
        .click();

        //clicking for more products 

        // product is loaded with all the information about brand, prices and stock avilable
  
    });

});

