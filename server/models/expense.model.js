const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [
            true,
            "Title is required"
        ]
    },
    amount: {
        type: Number,
        required: [
            true,
            "Amount is required"
        ]
    } ,
    dueDate: {
        type: Date,
        required:[
            true,
            "Date is required"
        ],
        validate: {
            validator: function (date) {
                return date >= new Date();
            },
            message: "Date must be in the future."
        }
    },
    dueDateMonth: {
        type: Number,
        default: function() {
            return this.dueDate.getMonth();
        },
    },
}, { timestamps: true });
module.exports.Expense = mongoose.model('Expense', ExpenseSchema);

