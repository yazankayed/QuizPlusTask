import React, { useEffect, useState } from 'react'
import '../App.css';
import plusSign from "../Images/PlusSign.jpg"
import 'font-awesome/css/font-awesome.min.css';

import axios from 'axios';
import {
    Routes,
    Route,
    Link
    } from "react-router-dom";
    
const ExpensesList = (props) => {
    const [allExpenses, setAllExpenses] = useState([]);
    // const [searchValue, setSearchValue] = useState('');
    // const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [allObjects, setAllObjects] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (searchTerm) => {
        // Filter objects based on the search term
        const filteredResults = allObjects.filter(obj =>
          obj.title.includes(searchTerm)
        );
        setSearchResults(filteredResults);
      };
      const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchValue(searchTerm);
        handleSearch(searchTerm);
      };



    useEffect(()=>{
        axios.get("http://localhost:8000/api/allexpenses")
            .then(res=>{
                setAllObjects(res.data);
            })
            .catch(err => console.error(err));
    },[]);
    const deleteExpense = (expenseId) => {
        axios.delete('http://localhost:8000/api/expense/' + expenseId)
            .then(res => {
            console.log("Deleted Succifully")
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h1>Expenses List</h1>
            

    <div className="search-container">
        <form >
            <input type="text" value={searchValue} onChange={handleInputChange} placeholder="Search by title" name="search"/>
            <button onClick={handleSearch} type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
        

        <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    </div>



    <div>
        {(searchValue ? searchResults : allObjects).map(result => (
          <div key={result._id}>{result.title}</div>
        ))}
      </div>

    {/* {allExpenses.map((expense, i) => (
    <div key={i}>
        <p>{expense.title}, {expense.amount}, {expense.dueDate}</p>
        <button onClick={() => deleteExpense(expense._id)}>Delete</button>
        
        <Link to={"/edit/"+expense._id}><button >Edit</button></Link>

    </div>
))} */}
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<Link to="/add"><img style={{width:"50px"}} src={plusSign} ></img></Link>



        </div>
    )
}
    
export default ExpensesList;