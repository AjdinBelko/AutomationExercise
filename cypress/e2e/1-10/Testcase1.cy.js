beforeEach('Testcase #1', function() {
  
  cy.visit('https://automationexercise.com/')

})

it('test 1, Creating a new user', () => {
// // validates if the sing up option works, 

  cy.xpath("//a[normalize-space()='Signup / Login']").click();

  // The login page loads and it is  sucessfull

//  creating a new uer information on loginpage

  cy.xpath("//input[@placeholder='Name']").type('tester123');
  cy.xpath("//input[@data-qa='signup-email']").type('difala3123@rxcay.com');
  cy.xpath("//button[normalize-space()='Signup']").click();

// the user options are in and the sing up option proceed us to the neext page
  
  cy.xpath("//input[@id='id_gender1']").click();
  cy.xpath("//input[@id='password']").type('tester12345');
  cy.xpath("//select[@id='days']").select('5');
  cy.xpath("//select[@id='months']").select('September');
  cy.xpath("//select[@id='years']").select('1995');
  cy.xpath("//input[@id='newsletter']").click();
  cy.xpath("//input[@id='optin']").click();
  cy.xpath("//input[@id='first_name']").type('Tester');
  cy.xpath("//input[@id='first_name']").type('Tester1');
  cy.xpath("//input[@id='first_name']").type('TestingCompany');
  cy.xpath("//input[@id='address1']").type('Sehitluci 7');
  cy.xpath("//input[@id='address2']").type('Sarajevo');
  cy.xpath("//select[@id='country']").select('United States');
  cy.xpath("//input[@id='state']").type('Georgia');
  cy.xpath("//input[@id='city']").type('Atlanta');
  cy.xpath("//input[@id='zipcode']").type('71212');
  cy.xpath("//input[@id='mobile_number']").type('062222666');
  cy.xpath("//button[normalize-space()='Create Account']").click();
  cy.xpath("//a[normalize-space()='Continue']").click();

  // adding all the details to the new account user for this website and clicks on the continue button 

  // account is created 

})

it('test 2, testing if the delete button works', () => {

// verify is the site is loaded and user logged in 

// site is loading and user is logged in already 

cy.xpath("//a[normalize-space()='Continue']").click();

// proceeds to account deleted

cy.xpath("//button[normalize-space()='Delete']").click();

//confirms to account details deleted , no action, bug reported in manual test written

// all other functions work properly


});


