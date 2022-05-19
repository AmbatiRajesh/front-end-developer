
import React,{useRef, useEffect, useState, Fragment} from "react";
import * as d3 from 'd3';
import '../components/Styles/chartBar.css';
const ChartBar=(props)=>{
    
    const dumm=[{
        id:1,
        city:"Hyd",
        value:22
        },
        {
        id:2,
        city:"Banglore",
        value:33
        },
        {
        id:3,
        city:"Chennai",
        value:15
        },
        {
        id:4,
        city:"Pune",
        value:10
        },
        {
        id:5,
        city:"AP",
        value:12
        },
        {
        id:6,
        city:"Up",
        value:32
        },
        {
        id:7,
        city:"NLr",
        value:19
        },
        {
        id:8,
        city:"NPl",
        value:15
        },
    ]
     const d3chart=useRef();

  useEffect(()=>{
      const xScale=d3.scaleBand().domain(dumm.map((dp)=>dp.city)).rangeRound([0,500]).padding(0.2);
      const yScale=d3.scaleLinear().domain([0,40]).range([300,0])
      const svg = d3.select(d3chart.current)
                    .attr('width',500)
                    .attr('height',300)
                    svg.selectAll('.bars')
                        .data(dumm)
                        .enter()
                        .append("rect")
                        .text(data=>data.text)
                        .attr('color','blue')
                        .classed('bars', true)
                        .attr('width',xScale.bandwidth())
                        .attr('height', (data)=>500-yScale(data.value))
                        .attr('x', data=>xScale(data.city))
                        .attr('y', data=>yScale(data.value))
                        .attr('fill','maroon')
                        
         
  },[]);
  
    return(
        <Fragment>
        <div className="layout">
          <svg ref={d3chart}>
            </svg>
        </div>
        <button onClick={props.home} className="layout__button">Back</button>
        </Fragment>
    )
};
export default ChartBar;
