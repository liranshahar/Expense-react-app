import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

import Card from "../UI/Card"

import "./Expense.css"




function Expense(props) {

  const [filterdYear, setFilterdYear] = useState('2020')
  const filterHandler = selectedYear =>{

    setFilterdYear(selectedYear);
   
  }
   
  const yearFilterExpense = props.items.filter(function (expense) {
    return expense.date.getFullYear().toString() === filterdYear;
  });

     

  
    return (
      <>

<Card className="expenses">

<ExpensesFilter
 selected={filterdYear} 
  onFilterChange = {filterHandler}
   />
   <ExpensesChart expenses = {yearFilterExpense} />
 <ExpensesList items = {yearFilterExpense}/>
    </Card>
      </> 
      
       );
  }
  

  export default Expense;
  