const { Expense } = require('../models/expense.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createExpense = (request, response) => {
    const { title, amount, dueDate } = request.body;
    Expense.create({
        title,
        amount,
        dueDate
    })
        .then(expense => response.json(expense))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllExpenses = (request, response) => {
    Expense.find({})
        .then(expenses => response.json(expenses))
        .catch(err => response.json(err))
}

module.exports.getExpense = (request, response) => {
    Expense.findOne({_id:request.params.id})
        .then(expense => response.json(expense))
        .catch(err => response.json(err))
}
module.exports.updateExpense = (request, response) => {
    Expense.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then(updatedExpense => response.json(updatedExpense))
        .catch(err => response.status(400).json(err))
}
module.exports.deleteExpense = (request, response) => {
    Expense.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.highestExpenseOnject = (request, response) => {
    const amount = 'amount'; // Replace with the actual attribute name
  
    Expense.findOne().sort({ [amount]: -1 }).exec()
      .then(expense => response.json(expense))
      .catch(err => response.json(err))
  }

  module.exports.lowestExpenseObject = (request, response) => {
    const amount = 'amount'; // Replace with the actual attribute name
  
    Expense.findOne().sort({ [amount]: 1 }).exec()
      .then(expense => response.json(expense))
      .catch(err => response.json(err))
  }

  module.exports.calculateTotal = (request, response) => {
    const amount = 'amount'; // Replace with the actual attribute name
  
    Expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: `$${amount}` }
        }
      }
    ])
      .exec()
      .then(result => {
        if (result.length > 0) {
          response.json(result[0].total);
        } else {
          response.json(0); // No documents in the collection
        }
      })
      .catch(err => response.json(err));
  }

  module.exports.calculateAverage = (request, response) => {
    const amount = 'amount'; // Replace with the actual attribute name
  
    Expense.aggregate([
      {
        $group: {
          _id: null,
          average: { $avg: `$${amount}` }
        }
      }
    ])
      .exec()
      .then(result => {
        if (result.length > 0) {
          response.json(result[0].average);
        } else {
          response.json(0); // No documents in the collection
        }
      })
      .catch(err => response.json(err));
  }

  module.exports.lowestExpense = (request, response) => {
    const amount = 'amount'; // Replace with the actual attribute name
  
    Expense.aggregate([
      {
        $group: {
          _id: null,
          lowest: { $min: `$${amount}` }
        }
      }
    ])
      .exec()
      .then(result => {
        if (result.length > 0) {
          response.json(result[0].lowest);
        } else {
          response.json(null); // No documents in the collection
        }
      })
      .catch(err => response.json(err));
  }

  module.exports.highestExpense = (request, response) => {
    const amount = 'amount'; // Replace with the actual attribute name
  
    Expense.aggregate([
      {
        $group: {
          _id: null,
          highest: { $max: `$${amount}` }
        }
      }
    ])
      .exec()
      .then(result => {
        if (result.length > 0) {
          response.json(result[0].highest);
        } else {
          response.json(null); // No documents in the collection
        }
      })
      .catch(err => response.json(err));
  }

  module.exports.getAllExpensesByMonth = (request, response) => {
    const monthlyExpense = Array(12).fill(0);
    Expense.find({})
      .then(expenses => {
        expenses.map(eoneExpense => {
          const month = eoneExpense.dueDateMonth;
          const valueToAdd = eoneExpense.amount;
          monthlyExpense[month] = monthlyExpense[month] + valueToAdd;
        });
        response.json(monthlyExpense);
      })
      .catch(err => response.json(err));
  }

