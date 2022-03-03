import React, { useState } from "react";
import './Expenses.css';
import ExpenseItems from "./ExpensesItems";
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

   function filterChangeHandler(selectedYear){
    setFilteredYear(selectedYear);
  };
   const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div className="expenses">
            
            <ExpensesFilter  onChangeFilter={filterChangeHandler}></ExpensesFilter> 
            <ExpensesChart expenses={filteredExpense}/>
            {filteredExpense.length===0 && <h1 className="expenses-list__fallback">No Data Here</h1>}
           <ol className="expenses-list">
            { filteredExpense.length>0 && filteredExpense.map((expense) =>(
             <ExpenseItems 
            key={expense.id}
            Title={expense.Title}
            amount={expense.amount}
            date={expense.date}
          
          />
          
         ))
        }
       
         </ol>

         
        </div>
    );
};
export default Expenses;