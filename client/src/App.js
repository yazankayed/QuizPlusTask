import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import ExpensesList from './Components/ExpensesList';
import AddExpenses from './Components/AddExpenses';
import AnalyzeExpenses from './Components/AnalyzeExpenses';
import Update from './Components/Update';
import Hello from './Components/Hello';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Header/>
      <Routes>
        <Route path="/" element={<ExpensesList />} />
        <Route path="/add" element={<AddExpenses />} />
        <Route path="/analyize" element={<AnalyzeExpenses />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
      <Footer/>
      {/* <Hello/> */}
    </div>
  );
}
export default App;


