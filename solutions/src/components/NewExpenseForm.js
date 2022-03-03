import React, { useState } from "react";
 import './newExpenseForm.css';
 import ExpenseFor from './Expensefor';
function NewExpenseForm(props){

  function saveExpenseDataHandler(enterExpenseData){
    const expenseData={
      ...enterExpenseData,
     id:Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setEditing(false);
  };

const [editing, setEditing] = useState(false);
  
function startEditingHandler(){
  setEditing(true);
}
function stopEditing(){
  setEditing(false);
}

    return (
<div className="new-expense">

  
  {!editing && <button onClick={startEditingHandler}>Add New Expension</button>}
   {editing && <ExpenseFor onSaveExpenseData={saveExpenseDataHandler} setEdit={stopEditing}></ExpenseFor>}

</div>
    );
};
export default NewExpenseForm;
