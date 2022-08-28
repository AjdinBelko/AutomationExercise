describe('TestCase 22', function() {

    it('adds the recommended product to the site', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // loads on valid

   cy.xpath("//a[normalize-space()='Signup / Login']").click();

   cy.xpath("//input[@data-qa='login-email']").type('difala3123@rxcay.com');

   cy.xpath("//input[@placeholder='Password']").type('tester12345');

   cy.xpath("//button[normalize-space()='Login']").click();
        

    cy.xpath("//div[@class='item active']//div[1]//div[1]//div[1]//div[1]//a[1]").click();

    cy.xpath("//a[normalize-space()='Cart']//i[@class='fa fa-shopping-cart']").click();


    });

});



//done


