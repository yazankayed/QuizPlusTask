import React, { Component } from 'react';
import Main from './Components/Main';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import ExpensesList from './Components/ExpensesList';
import AddExpenses from './Components/AddExpenses';
import AnalyzeExpenses from './Components/AnalyzeExpenses';
import Update from './Components/Update';
import SearchForm from './Components/SearchForm';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ExpensesList />} />
        <Route path="/add" element={<AddExpenses />} />
        <Route path="/analyize" element={<AnalyzeExpenses />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/search" element={<SearchForm />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;


