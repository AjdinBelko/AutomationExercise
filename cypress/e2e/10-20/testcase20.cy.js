describe('TestCase 17', function() {

    it('visiting the page', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // navigates to women side

    });

    it('switches to products ', () => {

        cy.xpath("//a[@href='/products']").click();

        //brands are visiable from the left side

    

    });

    it('searches for Polo', () => {

        cy.xpath("//input[@id='search_product']").type('Polo');

        cy.xpath("//button[@id='submit_search']").click();

        // adds the search value 

        // verifed all the clicks

    
    });

    it('Adds the product & views the card', () => {

        cy.contains('Rs. 1500').trigger('mouseover');

        cy.contains('Add to cart').click();

        // adds.

        cy.xpath("//u[normalize-space()='View Cart']").click();

        cy.xpath("//a[normalize-space()='Proceed To Checkout']").click();

        // prceed to the login

        cy.xpath("//u[normalize-space()='Register / Login']").click();

    });

    it('logins after cart add', () => {


        cy.xpath("//input[@data-qa='login-email']").type('difala3123@rxcay.com');

        cy.xpath("//input[@placeholder='Password']").type('tester12345');

        cy.xpath("//button[normalize-space()='Login']").click();

    });

    it('checks for product in cart section', () => {

        //Cypress.Cookies.preserveOnce('session_id', 'remember_token');

        // checks the card if added the product 


    });

});



//done
