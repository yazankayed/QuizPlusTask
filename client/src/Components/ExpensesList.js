import React, { useEffect, useState } from 'react';
import '../ListPage.css';
import plusSign from '../Images/PlusSign.png';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import SingleExpense from './SingleExpense';

const ExpensesList = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [allObjects, setAllObjects] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const filteredResults = allObjects.filter((obj) =>
      obj.title.includes(searchTerm)
    );
    setSearchResults(filteredResults);
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    handleSearch(searchTerm);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/allexpenses')
      .then((res) => {
        setAllObjects(res.data);
      })
      .catch((err) => console.error(err));
  }, [allObjects]);

  return (
    <div className="super-awesome-page">
      <h1 className='ListTitle'>Expenses List</h1>

      <div className="search-container">
        
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search by title"
            name="search"
          />
        
      </div>

      <div className="expenses-list">
        {(searchValue ? searchResults : allObjects).map((result) => (
          <SingleExpense currentExpense={result} />
        ))}
      </div>

      <Link to="/add" className="add-expense-link">
        <img style={{ width: '50px' }} src={plusSign} alt="Add Expense" />
      </Link>
    </div>
  );
};

export default ExpensesList;
