
    it('Visits the site and logins the valid account and log out', function() {

        //Visit the site of testing 
    
        cy.visit("https://automationexercise.com/");
        
       // Clicking on login button

        cy.xpath("//a[normalize-space()='Signup / Login']").click();
      
        //Verify the login information 
    
        cy.xpath("//input[@data-qa='login-email']").type('difala3123@rxcay.com');
    
        cy.xpath("//input[@placeholder='Password']").type('tester12345');
    
        cy.xpath("//button[normalize-space()='Login']").click();
    
        //logins to the existing account 

    });

    it('logs out of the account', function() {

        cy.xpath("//a[normalize-space()='Logout']").click().debug();
        //user logs out of the account

        });
    
    
    



    
