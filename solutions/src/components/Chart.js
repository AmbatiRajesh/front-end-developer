import React from "react";
import './Chart.css';

 import ChartBars from "./ChartBars";

function Chart(props){
    const datapointValues = props.datapoints.map(datapoint => datapoint.value);

    const totalMaximum=Math.max(...datapointValues);

    return (
   <div className="chart">
       {props.datapoints.map((datapoint) => (
           <ChartBars
           key={datapoint.label}
           value={datapoint.value}
           maxValue={totalMaximum}
           label={datapoint.label}
            > </ChartBars>      
       ))}

   </div>
    )
     
};
export default Chart;