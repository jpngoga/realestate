import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function BubleChart() {
  return (
    <div style={{width:"600px"}}>
    <Bar style={{width:10}} data={{
        labels: [
            "Orange",
            "Paume",
            "Grape",
            "Strawberry",
            "papaye",
           
        ],
        datasets:[
            {
            label: "# of visits",
            data: [20, 64, 14, 43, 12],
            backgroundColor: ["red", "yellow","lightgreen", "lightblue", "purple"],
            borderColor: ["red", "yellow","lightgreen", "lightblue", "purple"],
    },
       
    ],
    borderWidth: 1,
    }} />
    </div>
  )
}


export default BubleChart
