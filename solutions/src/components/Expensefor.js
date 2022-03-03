import React, { useState } from "react";
import './ExpenseForm.css';
 function ExpenseFor(props){
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    function titleChangeHandler(event){
     setEnterTitle(event.target.value);
    }
    function  amountChangeHandler(event){
        setEnterAmount(event.target.value);
       }
       function dateChangeHandler(event){
        setEnterDate(event.target.value);
       }
      function submitHandler(event){
    event.preventDefault();
       const expenses={
           Title:enterTitle,
           amount: +enterAmount,
           date:new Date(enterDate)
       };
       props.onSaveExpenseData(expenses);
         
       setEnterTitle('');
       setEnterAmount('');
       setEnterDate('');
      };

     return (
   <div>

        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
        <label>Title</label>
        <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
        <label>Amount</label>
        <input type="Number" min="0.01" step="0.01"  value={enterAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__controls">
        <label>date</label>
        <input type="date" min="2019-01-01" max="2022-12-3" value={enterDate}  onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
    <button type="submit" onClick={props.setEdit}>cancel</button>
    <button type="submit">add expense</button>
            </div>

        </div>


        </form>

   </div>
     );
 };

  export default ExpenseFor;