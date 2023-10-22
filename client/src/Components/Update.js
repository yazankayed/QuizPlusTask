import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../Update.css';

const Update = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amountErr, setAmountErr] = useState('');
  const [titleErr, setTitleErr] = useState('');
  const [dueDateErr, setDueDateErr] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/expense/' + id).then((res) => {
      setTitle(res.data.title);
      setAmount(res.data.amount);
      const dueDateFromDatabase = new Date(res.data.dueDate);
    const formattedDueDate = dueDateFromDatabase.toISOString().split('T')[0];
    setDueDate(formattedDueDate);
    });
  }, []);
  const updatePerson = (e) => {
    e.preventDefault();
    axios
      .patch('http://localhost:8000/api/expense/' + id, {
        title,
        amount,
        dueDate,
      })
      .then((res) => navigate('/'))
      .catch((err) => {
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
  };
  return (
    <div className="update-container">
      <h1 className="update-title">Update a Person</h1>
      <form onSubmit={updatePerson}>
        <p>
          <label htmlFor="update-title">Title</label>
          <input
            type="text"
            id="update-title"
            name="update-title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p className="update-title-error">{titleErr}</p>
        <p>
          <label htmlFor="update-amount">Amount</label>
          <input
            type="number"
            id="update-amount"
            name="update-amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </p>
        <p className="update-amount-error">{amountErr}</p>
        <p>
          <label htmlFor="update-dueDate">Due Date</label>
          <input
            type="date"
            id="update-dueDate"
            name="update-dueDate"
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </p>
        <p className="update-dueDate-error">{dueDateErr}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;
