describe('TestCase 17', function() {

    it('visiting the page', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");
    
   // navigates to women side

    });

    it('adds the women section', () => {

        cy.xpath("//a[normalize-space()='Women']").click();

        //chooses the ddropdown menu

        cy.xpath("//div[@id='Women']//a[contains(text(),'Dress')]").click();

        //chooses the dress option 

        // displays the dress option top products 


    });

    it('switches to man section', () => {

        cy.xpath("//a[normalize-space()='Men']").click();

        // main menu

        cy.xpath("//a[normalize-space()='Tshirts']").click();

        // chooses the sub menu of man 
    });

});



//done
