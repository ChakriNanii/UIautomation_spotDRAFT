describe("Goodreads Automation Test", () => {
  beforeEach(() => {
    // Runs before each test case, navigate to the login page
    cy.visit("https://www.goodreads.com/user/sign_in");
  });

  it("should perform the UI automation steps", () => {
    // Step 1: Login to goodreads.com
    cy.get("#user_email").type("your_goodreads_username");
    cy.get("#user_password").type("your_goodreads_password");
    cy.get("#user_sign_in").click();

    // Step 2: Search for a specific book title
    cy.get("#sitesearch_field").type("Your Book Title");
    cy.get(".searchBox__buttonWrapper").click();

    // Step 3: Mark it as ‘want to read’
    cy.get(".wtrToRead").first().click();

    // Step 4: Remove the selected book from my book list
    cy.get(".wtrShelfDelete").first().click();

    // Step 5: Logout
    cy.get("#user_nav_menu").click();
    cy.get('[data-testid="sign_out"]').click();
  });
});
