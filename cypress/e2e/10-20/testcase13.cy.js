describe('TestCase 13', function() {
    it('product quantity select 4', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // navigates to product section

        cy.xpath("//a[@href='/products']").click();

    //  loads the product section

  
    });

    it('select the product, adds the quanitty for 4', () => {

        cy.xpath("//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/ul[1]/li[1]/a[1]").click();

        //adding the product

        cy.xpath("//input[@id='quantity']").type('4');

        // add to the cart 

        cy.xpath("//button[normalize-space()='Add to cart']").click();

        // veiw cart if added 

        cy.xpath("//a[normalize-space()='Cart']").click();

        // product is added
        

    });


});



//done
