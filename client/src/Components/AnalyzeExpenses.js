import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../AnalyzeExpenses.css';

import { BarChart } from '@mui/x-charts/BarChart';

const AnalyzeExpenses = (props) => {

    const [highest, setHighest] = useState();
    const [lowest, setlowest] = useState();
    const [total, setTotal] = useState();
    const [average, setAverage] = useState();

    const [chartData, setChartData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/allexpensesmonth")
            .then(response=>{
                setChartData(response.data);
            })
            .catch(err => console.error(err));
    },[chartData]);

const chartSetting = {
  xAxis: [
    {
      label: 'Expense per month ($)',
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
    {
    
      expense:chartData[0],
      month: 'Jan',
    },
    {
     
      expense:chartData[1],
            month: 'Feb',
    },
    {
      
      expense:chartData[2],
            month: 'Mar',
    },
    {
    
      expense:chartData[3],
            month: 'Apr',
    },
    {
      
      expense:chartData[4],
            month: 'May',
    },
    {
     
      expense:chartData[5],
            month: 'June',
    },
    {
     
      expense:chartData[6],
            month: 'July',
    },
    {
      
      expense:chartData[7],
            month: 'Aug',
    },
    {
      
      expense:chartData[8],
            month: 'Sept',
    },
    {
    
      expense:chartData[9],
            month: 'Oct',
    },
    {
      
      expense:chartData[10],
      month: 'Nov',
    },
    {
     
      expense:chartData[11],
      month: 'Dec',
    },
  ];
  

const valueFormatter = (value) => `${value}$`;
    useEffect(()=>{
        axios.get("http://localhost:8000/api/highest")
            .then(res=>{
                setHighest(res.data);
            })
            .catch(err => console.error(err));
    },[]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/lowest")
            .then(res=>{
                setlowest(res.data);
            })
            .catch(err => console.error(err));
    },[]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/total")
            .then(res=>{
                setTotal(res.data);
            })
            .catch(err => console.error(err));
    },[]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/average")
            .then(res=>{
                
                setAverage(Math.round(res.data));
            })
            .catch(err => console.error(err));
    },[]);
    
    return (
      <div className="expense-info-container">
  <h1 className="expense-title">Monthly Expenses</h1>
  <div className="chart">
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'expense', label: 'Expense per month', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  </div>
  <h1 className="expense-title">Summary Statistics</h1>
  <div className="summary-container">
    <div className="summary-row">
      <h1 className="expense-data">Total: {total}</h1>
      <h1 className="expense-data">Avg: {average}</h1>
    </div>
    <div className="summary-row">
      <h1 className="expense-data">Max: {highest}</h1>
      <h1 className="expense-data">Min: {lowest}</h1>
    </div>
  </div>
</div>
    
    )
}
    
export default AnalyzeExpenses;