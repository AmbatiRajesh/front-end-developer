import React from 'react';
import './ExpensesItems.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItems(props){
  /*const [title, setTitle]=useState(props.Title);
  function chane(){
    setTitle("its work");
    console.log(title);
  }*/
return(
  
  
    <div className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate> 
    <div className='expense-item__description'>
  <h2>{props.Title}</h2>
    <div className="expense-item__price">${props.amount}</div>
    
        </div>
</div>

);
};
export default ExpenseItems;