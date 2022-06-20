import react from "react";

import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = props => {
 const DataPointsValues= props.dataPoints.map(dataPoint=>dataPoint.value);
const totalMax=Math.max(...DataPointsValues);

return (
    <div className = "chart">
    {props.dataPoints.map((dataPoint) => (
    
        <ChartBar
        key={dataPoint.lable}
     value={dataPoint.value}
      maxValue ={totalMax} 
      lable={dataPoint.lable} 
      />
      
      ))}
    </div>
);

}

export default Chart;