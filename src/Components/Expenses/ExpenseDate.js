import React from "react";
import './ExpenseDate.css';


const ExpenseDate=(props)=>{

    const year=props.date.toLocaleString('en-US',{month:'long'});
    const month= props.date.getFullYear();
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});

    return(
        <div className='expense-date'>
   <div className='expense-date__month'>{day}</div>
    <div className='expense-date__year'>{year}</div>
    
     <div className='expense-date__month'>{month}</div>
</div>
    )

}



export default ExpenseDate;
