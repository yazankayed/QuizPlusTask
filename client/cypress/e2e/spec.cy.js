describe('template spec', () => {
  it('AddingExpense', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.add-expense-link').click();
    cy.get('#title').clear('H');
    cy.get('#title').type('House Rent');
    cy.get('#amount').clear('2');
    cy.get('#amount').type('200');
    cy.get('#dueDate').clear('0002-10-10');
    cy.get('#dueDate').type('2024-10-10');
    cy.get('.add-button').click();
    cy.get('.add-expense-link > img').click();
    cy.get('#title').clear('E');
    cy.get('#title').type('Electricity');
    cy.get('#amount').clear('2');
    cy.get('#amount').type('20');
    cy.get('#dueDate').click();
    cy.get('#dueDate').clear('0002-10-10');
    cy.get('#dueDate').type('2025-10-10');
    cy.get('.add-button').click();
  });

  it('SearchExpense', function() {
    cy.visit('http://localhost:3000/');
    cy.get('input').clear('H');
    cy.get('input').type('Ele');
  });

  it('BarChart', function() {
    cy.visit('http://localhost:3000/');

    cy.get('.Mui-selected > .footerLink').click();
    cy.get('[tabindex="-1"] > .footerLink').click();
    cy.get('.add-expense-link > img').click();
    cy.get('#title').clear('W');
    cy.get('#title').type('Water');
    cy.get('#amount').clear('2');
    cy.get('#amount').type('20');
    cy.get('#dueDate').click();
    cy.get('#dueDate').clear('0002-10-05');
    cy.get('#dueDate').type('2024-10-05');
    cy.get('.add-button').click();
    cy.get('[tabindex="-1"] > .footerLink').click();
  });


  it('EditExpense', function() {
    cy.visit('http://localhost:3000/');
    cy.get(':nth-child(1) > .edit-button').click();
    cy.get('#update-title').clear('H');
    cy.get('#update-title').type('Hydro');
    cy.get('[type="submit"]').click();
  });


  it('DeleteExpense', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(1) > .delete-button').click();
  })


  it('DataValidationAdd', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.add-expense-link > img').click();
    cy.get('.add-button').click();
    cy.get('#title').clear('W');
    cy.get('#title').type('Water');
    cy.get('.add-button').click();
    cy.get('#amount').clear('2');
    cy.get('#amount').type('20');
    cy.get('.add-button').click();
    cy.get('#dueDate').click();
    cy.get('#dueDate').clear('0002-02-05');
    cy.get('#dueDate').type('2023-02-05');
    cy.get('.add-button').click();
    cy.get('#dueDate').click();
    cy.get('#dueDate').clear('2023-02-05');
    cy.get('#dueDate').type('2024-02-05');
    cy.get('.add-button').click();
  });

  it('DataValidationUpdate', function() {
    cy.visit('http://localhost:3000/');
    cy.get(':nth-child(1) > .edit-button').click();
    cy.get('#update-dueDate').click();
    cy.get('#update-dueDate').clear('0002-10-10');
    cy.get('#update-dueDate').type('2022-10-10');
    cy.get('[type="submit"]').click();
    cy.get('#update-dueDate').clear('0002-10-10');
    cy.get('#update-dueDate').type('2024-10-10');
    cy.get('[type="submit"]').click();
  });

  it('MaxExpense', function() {
    cy.visit('http://localhost:3000/');

    cy.get('.Mui-selected > .footerLink').click();
    cy.get('[tabindex="-1"] > .footerLink').click();
    cy.get('.add-expense-link > img').click();
    cy.get('#title').clear('W');
    cy.get('#title').type('Water');
    cy.get('#amount').clear('1');
    cy.get('#amount').type('1000');
    cy.get('#dueDate').clear('0002-05-06');
    cy.get('#dueDate').type('2040-05-06');
    cy.get('.add-button').click();
    cy.get('[tabindex="-1"] > .footerLink').click();
  });

  it('MinExpense', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.Mui-selected > .footerLink').click();
    cy.get('[tabindex="-1"] > .footerLink').click();
    cy.get('.add-expense-link > img').click();
    cy.get('#title').clear('B');
    cy.get('#title').type('Ball');
    cy.get('#amount').clear('1');
    cy.get('#amount').type('1');
    cy.get('#dueDate').click();
    cy.get('#dueDate').clear('0002-03-05');
    cy.get('#dueDate').type('2030-03-05');
    cy.get('.add-button').click();
    cy.get('[tabindex="-1"] > .footerLink').click();
  });

  it('AVG', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.Mui-selected > .footerLink').click();
    cy.get('[tabindex="-1"] > .footerLink').click();
    cy.get('.add-expense-link > img').click();
    cy.get('#title').clear('W');
    cy.get('#title').type('Water');
    cy.get('#amount').clear('3');
    cy.get('#amount').type('300');
    cy.get('#dueDate').clear('0002-02-05');
    cy.get('#dueDate').type('2090-02-05');
    cy.get('.add-button').click();
    cy.get('[tabindex="-1"] > .footerLink').click();
  });
})