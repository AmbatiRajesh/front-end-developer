
import React from "react";
import Chart from "./Chart";

function ExpensesChart(props){

    const chartDatapoints=[
        { label : 'jan', value : 0},
        { label : 'feb', value : 0},
        { label : 'mar', value : 0},
        { label : 'apr', value : 0},
        { label : 'may', value : 0},
        { label : 'jun', value : 0},
        { label : 'july', value : 0},
        { label : 'aug',  value : 0},
        { label : 'sept', value : 0},
        { label : 'oct', value : 0},
        { label : 'nov', value : 0},
        { label : 'dec', value : 0},
        ];

        for(const expense of props.expenses){
            const expenseMonth = expense.date.getMonth();
            chartDatapoints[expenseMonth].value += expense.amount; 
        };

     return <Chart datapoints={chartDatapoints}/>
     
};
export default ExpensesChart;