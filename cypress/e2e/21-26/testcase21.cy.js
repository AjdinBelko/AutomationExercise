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


    it('chooses the product and adds the review ', () => {

        cy.xpath("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]").click();

        // adds the product 

        cy.xpath("//input[@id='name']").type('Ajdin');
        cy.xpath("//input[@id='email']").type('blabla@gmail.com');
        cy.xpath("//textarea[@id='review']").type('Best best best best');
        //adds the description of review

        cy.xpath("//button[@id='button-review']").click();

        //submits the review & massage is previewed for the user 

    });

});



//done


