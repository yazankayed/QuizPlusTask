import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddExpenses = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [amountErr, setAmountErr] = useState("");
    const [titleErr, setTitleErr] = useState("");
    const [dueDateErr, setDueDateErr] = useState("");
    // const [errors, setErrors] = useState([]); 
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
              // Check if error properties exist and then set error messages
              if (err.response.data.errors.amount) {
                setAmountErr(err.response.data.errors.amount.message);
              }
              if (err.response.data.errors.title) {
                setTitleErr(err.response.data.errors.title.message);
              }
              if (err.response.data.errors.dueDate) {
                setDueDateErr(err.response.data.errors.dueDate.message);
              }
            }
          });
    }

    return (
        <div>
            <div>
                <form onSubmit={onSubmitHandler}>
                    {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                    <p>
                        <label>Title</label><br/>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <p>{titleErr}</p>
                    </p>
                    <p>
                        <label>Amount</label><br/>
                        <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount}/>
                    <p>{amountErr}</p>
                    </p>
                    <p>
                        <label>Due Date</label><br/>
                        <input type="date" onChange={(e) => setDueDate(e.target.value)} value={dueDate}/>
                    <p>{dueDateErr}</p>
                    </p>
                    <button type='submit'>Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddExpenses;