import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../AddExpenses.css';

const AddExpenses = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [amountErr, setAmountErr] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [dueDateErr, setDueDateErr] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/expense', {
      title,
      amount,
      dueDate,
    })
    .then(res => navigate("/"))
    .catch(err => {
      console.log(err);

      if (err.response && err.response.data && err.response.data.errors) {
        if (err.response.data.errors.amount) {
          setAmountErr(err.response.data.errors.amount.message);
        }
        else{
          setAmountErr("")
        }
        if (err.response.data.errors.title) {
          setTitleErr(err.response.data.errors.title.message);
        }
        else{
          setTitleErr("")
        }
        if (err.response.data.errors.dueDate) {
          setDueDateErr(err.response.data.errors.dueDate.message);
        }
        else{
          setDueDateErr("")
        }
      }
    });
  }

  return (
    <div className="add-expenses-container">
      <div>
        <form onSubmit={onSubmitHandler}>
          <h1 className="add-expenses-title">Add an Expense</h1>
          <p>
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <p className="error-message">{titleErr}</p>
          </p>
          <p>
            <label htmlFor="amount">Amount</label><br />
            <input type="number" id="amount" onChange={(e) => setAmount(e.target.value)} value={amount} />
            <p className="error-message">{amountErr}</p>
          </p>
          <p>
            <label htmlFor="dueDate">Due Date</label><br />
            <input type="date" id="dueDate" onChange={(e) => setDueDate(e.target.value)} value={dueDate} />
            <p className="error-message">{dueDateErr}</p>
          </p>
          <button type='submit' className="add-button">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddExpenses;
