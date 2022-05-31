import React , {useState} from "react";
import './ExpenseForm.css'


function ExpenseForm(props) {

const [enteredTitle, setEnteredtitle] = useState('');
const [enteredAmount, setEnteredamount] = useState('');
const [enteredDate, setEntereddate] = useState('');


   function TitleChangeHandler(event){
       setEnteredtitle(event.target.value);
  }

  function AmountChangeHandler(event){
       setEnteredamount(event.target.value);
  }

  function DateChangeHandler(event){
       setEntereddate(event.target.value);
  }

  const submitHandler = (event) =>{
    event.preventDefault();

    const expensData = {

      title : enteredTitle,
      amount : enteredAmount,
      date :  new Date(enteredDate)  

    }

    props.onSaveExpenseData(expensData);
    setEnteredtitle("");
    setEnteredamount("");
    setEntereddate("");

  }
      
    return (
      <>
      <form onSubmit ={submitHandler}>
      <div className="new-expense__controls">

        <div className="new-expense__control">
        <lable>Title </lable>
        <input type="text" value={enteredTitle} onChange={TitleChangeHandler}/>
        </div>

        <div className="new-expense__control">

        <lable>Amount </lable>
        <input type ="number" min="0.01" step="0.01" value={enteredAmount} onChange={AmountChangeHandler}/>
        </div>

        <div className="new-expense__control">

        <lable>Date </lable>
        <input type ="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={DateChangeHandler} />
        </div>

        </div>
        <div className="new-expense__actions">
        <button type = "submit">Add Expense</button>
        </div>


    
       

         </form>
      </> 
      
       );
  }
  
  export default ExpenseForm;
  