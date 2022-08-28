describe('TestCase 2', function() {
    it('Submiting the form CONTACT US', function() {

    //Visit the site of testing 

    cy.visit("https://automationexercise.com/");

    // page loads
    
   // Clicking on contact us button

    cy.xpath("//a[normalize-space()='Contact us']").click(); // page is visiable
  
    // try to contact us form

    cy.xpath("//input[@placeholder='Name']").type('tester123');

    cy.xpath("//input[@placeholder='Email']").type('difala3123@rxcay.com');

    cy.xpath("//input[@placeholder='Subject']").type('request');

    cy.xpath("//textarea[@id='message']").type('request type 1');

    const imageFile = 'photo/photo.png';
    
    cy.xpath("//input[@name='upload_file']").attachFile(imageFile);


    // adding all the description

    cy.xpath("//input[@name='submit']").click();

    cy.on('window:confirm', (text) => {
        expect(text).to.contains('Press OK to proceed!');

      });

    //submitting the form 
  
    });

    it('Returning to the home page', () => {

        cy.xpath("//a[contains(text(),'Home')]").click();

        //returning to the home page
    })

});

