describe('TestCase 12', function() {
    it('Cart section & sub ', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // navigates to product section

        cy.xpath("//a[@href='/products']").click();

    //  loads the product section

  
    });

    it('hovers over and adds the product 1', () => {


        cy.contains('Rs. 500').trigger('mouseover');
        cy.contains('Add to cart').click();

        //adding the product
    });
    


    it('hovers over and adds the product 2', () => {

        
        cy.contains('Rs. 400').trigger('mouseover');
        
        cy.contains('Add to cart').click();

        //adding the product 2
    });


    it('Verifies tboth added and prices', () => {

        cy.xpath("//a[normalize-space()='Cart']").click({force:true});

        //checking the cart
    });

});



//done
