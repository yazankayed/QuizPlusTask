import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
    Routes,
    Route,
    Link 
  } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [amountErr, setAmountErr] = useState("");
    const [titleErr, setTitleErr] = useState("");
    const [dueDateErr, setDueDateErr] = useState("");
    // const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/expense/' + id)
            .then(res => {
                setTitle(res.data.title);
                setAmount(res.data.amount);
                setDueDate(res.data.dueDate);
            })
    }, []);
    
    const updatePerson = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/expense/' + id, {
            title,
            amount,
            dueDate
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
            <Link to={"/"}>Go Home</Link>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                    
                </p>
                <p>{titleErr}</p>

                <p>
                    <label>Amount</label><br />
                    <input type="number" 
                    name="amount"
                    value={amount} 
                    onChange={(e) => { setAmount(e.target.value) }} />
                </p>
                <p>{amountErr}</p>

                <p>
                    <label>Due Date</label><br />
                    <input type="date" 
                    name="dueDate"
                    value={dueDate} 
                    onChange={(e) => { setDueDate(e.target.value) }} />
                </p>
                <p>{dueDateErr}</p>

                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;