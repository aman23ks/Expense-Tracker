import React from "react";


import "./Chart.css"
import ChatBar from "./ChartBar";

const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

    return <div className="chart">
        {props.dataPoints.map((dataPoint) => {
           return <ChatBar 
                key={dataPoint.label} 
                value = {dataPoint.value}
                maxValue = {totalMaximum}
                label = {dataPoint.label}
            />
        })}  
    </div>
}

export default Chart;