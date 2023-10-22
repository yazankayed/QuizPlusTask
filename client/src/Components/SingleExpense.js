import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../SingleExpense.css';

const SingleExpense = (props) => {
  const navigate = useNavigate();
  const deleteExpense = (expenseId) => {
    axios
      .delete('http://localhost:8000/api/expense/' + expenseId)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="expense-card">
      <Link to={`/details/${props.currentExpense._id}`} className="expense-title">
        {props.currentExpense.title}
      </Link>
      <p className="expense-info">
        {props.currentExpense.title}, Total:{' '} ${props.currentExpense.amount}
        
      </p>
      <button onClick={() => deleteExpense(props.currentExpense._id)} className="delete-button">
        Delete
      </button>
      <Link to={`/edit/${props.currentExpense._id}`} className="edit-button">
        Edit
      </Link>
    </div>
  );
};

export default SingleExpense;
