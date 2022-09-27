import React, { useEffect, useState } from 'react';

const Clock=()=>{
    const[clockTime,setClockTime] = useState('');
    const[clockDate,setClockDate] = useState('');

    useEffect(()=>{
        setInterval(()=>{
            const time = new Date();
            const date = new Date();
            setClockTime(time.toLocaleTimeString());
            setClockDate(date.toLocaleDateString());
            
        },1000)
    },[])


    return(
        <div style={{marginTop:5,textAlign:'left',marginLeft:10}}>
            <div>
            <h3>Date : {clockDate}</h3> 
            <h3>Time : {clockTime}</h3>
            </div>
            
        </div>
    )
}
export default Clock;