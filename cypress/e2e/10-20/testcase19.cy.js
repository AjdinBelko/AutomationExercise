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

    it('switches to avaliable brand', () => {

        cy.xpath("//a[@href='/brand_products/Polo']").click();

        // choooses the main brand

        //  site loads the avialable section

    
    });

});



//done
