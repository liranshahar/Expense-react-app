import React , {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"


function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {

      ...enteredExpenseData,
      id:Math.random().toString(),
      };
     console.log(expenseData);
     props.onGetNewExpense(expenseData);
  };

   const [isEditingMode,setisEditingMode] = useState(false);

   const modifyExpenseHandler = () => {

    setisEditingMode(!isEditingMode);
    console.log("click1")
   }

   

      
    return (
      <>
        <div className="new-expense">

         
       {isEditingMode ?  <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={modifyExpenseHandler} /> :
       
       <button onClick = {modifyExpenseHandler}>Add New Expense</button>
       
       }    




            </div>         
      </> 
      
       );
  }
  
  export default NewExpense;
  