describe('TestCase 14', function() {

    it('product quantity select 4', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // navigates to product section

    cy.xpath("//a[normalize-space()='Signup / Login']").click();
      
   //Verify the login information 

    cy.xpath("//input[@data-qa='login-email']").type('difala3123@rxcay.com');

    cy.xpath("//input[@placeholder='Password']").type('tester12345');

    cy.xpath("//button[normalize-space()='Login']").click();

   //logins to the existing account 

        cy.xpath("//a[@href='/products']").click();

    //  loads the product section


        cy.contains('Rs. 500').trigger('mouseover');

        cy.contains('Add to cart').click();

        cy.xpath("//a[normalize-space()='Cart']").click();

        // veiw cart if added 
        
        //proced to checkout after adding 

        cy.xpath("//a[normalize-space()='Proceed To Checkout']").click(); 

        //place order is completed and proceeded to the billing adress 

        cy.xpath("//a[normalize-space()='Place Order']").click();

        // next page is loaded

    });

    it('filling the card form', () => {

        //adding the detals of card test 

        cy.xpath("//input[@name='name_on_card']").type('MasterCard');
        cy.xpath("//input[@name='card_number']").type('3333 4444 4444 5555');
        cy.xpath("//input[@placeholder='ex. 311']").type('999');
        cy.xpath("//input[@placeholder='MM']").type('04/24');
        cy.xpath("//input[@placeholder='YYYY']").type('2024');
    
        cy.xpath("//button[@id='submit']").click();

        //proceed witth the payment 

        // payment will fail beacuse the test is created on the invalid credit card

    });

});



//done
