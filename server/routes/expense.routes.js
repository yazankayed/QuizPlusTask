const ExpenseController = require('../controllers/expense.controller');
module.exports = function(app){
    app.get('/api', ExpenseController.index);
    app.post('/api/expense', ExpenseController.createExpense);
    app.get('/api/allexpenses', ExpenseController.getAllExpenses);
    app.get('/api/allexpensesmonth', ExpenseController.getAllExpensesByMonth);
    app.get('/api/expense/:id', ExpenseController.getExpense);
    app.patch('/api/expense/:id', ExpenseController.updateExpense);
    app.delete('/api/expense/:id', ExpenseController.deleteExpense);
    app.get('/api/highestobject', ExpenseController.highestExpenseOnject);
    app.get('/api/highest', ExpenseController.highestExpense);
    app.get('/api/lowest', ExpenseController.lowestExpense);
    app.get('/api/lowestobject', ExpenseController.lowestExpenseObject);
    app.get('/api/total', ExpenseController.calculateTotal);
    app.get('/api/average', ExpenseController.calculateAverage);
    app.get('/api/search', ExpenseController.searchByAttribute);
}