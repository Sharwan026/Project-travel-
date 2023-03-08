import axios from 'axios';
import React, { useState } from 'react'
import './add.css';

function Add() {
    const[id,setsno]=useState(0);
    const[name,setName]=useState("");
    const[timeIn,settimein]=useState(0);
    const[hrs,sethrs]=useState(0);
    const[status,setStatus]=useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data={
            sno:Sno,
            name:name,
            timein:timeIn,
            totalhrs:hrs,
            paymentstatus:status,
        }
        console.log(data)
        axios.post('http://127.0.0.1:5000/addDetails',data);
    }


  return (
    <>
    <div className='back'>
    <div className='b'>
        <form onSubmit={handleSubmit}>
        <label>Sno</label>
        <input type="tel" placeholder='Sno' onChange={e => setsno(e.target.value)}/>
        <br/>
        <label>Name</label>
        <input type="text"  onChange={e => setName(e.target.value)}/>
        <br/>
        <label>TimeIn</label>
        <input type="tel"  onChange={e => settimein(e.target.value)}/>
        <br/>
        <label>TotalHrs</label>
        <input type="tel"  onChange={e => sethrs(e.target.value)}/>
        <br/>
        <label>PaymentStatus</label>
        <input type="text"  onChange={e => setStatus(e.target.value)}/>
        <br/>
        <button type="submit"> submit</button>
        </form>
    </div>

    </div>
    </>
  )
}

export default Add