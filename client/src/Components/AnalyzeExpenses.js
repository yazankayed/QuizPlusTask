import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';
import {
    Routes,
    Route,
    Link
    } from "react-router-dom";

    
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
                console.log(chartData[0].totalAmount);
            })
            .catch(err => console.error(err));
    },[]);

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
                setAverage(res.data);
            })
            .catch(err => console.error(err));
    },[]);
    
    return (
        <div>
            <h1>Monthly Expenses</h1>
            <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'expense', label: 'Expense per month ', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />

            <h1>{highest}</h1>
            <h1>{lowest}</h1>
            <h1>{total}</h1>
            <h1>{average}</h1>
        </div>
    )
}
    
export default AnalyzeExpenses;