describe('TestCase 14', function() {

    it('product quantity select 4', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // navigates to product section

   //logins to the existing account 

        cy.xpath("//a[@href='/products']").click();

    //  loads the product section

        cy.xpath("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]").click();

        cy.xpath("//button[normalize-space()='Add to cart']").click();



        // veiw cart if added 
        
        cy.xpath("//u[normalize-space()='View Cart']").click();

        // removes it from card

        cy.xpath("//a[@class='cart_quantity_delete']").click();
 

    });

});



//done
