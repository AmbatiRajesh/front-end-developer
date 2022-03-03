import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpenseForm from "./components/NewExpenseForm";
const dummy=[
  {
     id:'h1',
    Title:'Toilet paper',
    amount:'98.12',
    date:new Date(2020, 3, 4)
  },
  {
    id:'h2',
    Title:'new tv',
    amount:'97.12',
    date:new Date(2020 , 7 ,9)
  },
  {
    id:'h3',
    Title:'car insurence',
    amount:'77.45',
    date:new Date(2020, 12, 6)
  },
  {
    id:'h4',
    Title:'calender',
    amount:'66.3',
    date:new Date(2020, 5, 13)
  }
];
function App() {

const [expenses, setExpenses] = useState(dummy);
      
  function addExpenseHandler(expense){
    setExpenses((prevExpenses)=>{
      return[expense, ...prevExpenses]
    });
  };

return (
  
<div>
    <NewExpenseForm onAddExpense={addExpenseHandler}></NewExpenseForm>
    
   <Expenses items={expenses}></Expenses>
</div>
    
  );
}

export default App;
