import React, { useState, useEffect } from "react";
import axios from "axios";
import "./update.css";

function UpdateMovie() {
  const [movie, setMovie] = useState({
    id: "",
    locations: "",
    near_by_hotels: "",
    spots_to_View:"",
  });

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/update`, movie).then((res) => {
      console.log(res.data);
      setMovie({ id: "", locations: "", near_by_hotels: "",spots_to_View: "" });
    });
  };

  return (
    
    <div className="id">
    {/* <h1 className="UpdateSpots">Update Spots</h1> */}
      <form onSubmit={handleSubmit}>
      <h1 className="UpdateSpots">Update Spots</h1>
      <br></br>
        <label className="ids">
          Id:
          <input type="text" name="id" value={movie.id} onChange={handleChange} />
        </label>
            <br></br><br></br><br></br>
        <label>
        Location:
          <input type="text" name="locations" value={movie.locations} onChange={handleChange} />
        </label>
        <br></br><br></br><br></br>
        <label>
        Nearest Hotels:
          <input type="text" name="near_by_hotels" value={movie.near_by_hotels} onChange={handleChange} />
        </label>
        <br></br><br></br><br></br>
        <label>
        Spot to Explore:
          <input type="text" name="spots_to_View" value={movie.spots_to_View} onChange={handleChange} />
        </label>
        <br></br><br></br>
        <button className="button" type="submit">Update</button>
      </form>
    </div>
    
  );
}

export default UpdateMovie;
// import axios from 'axios';
// import React, { useState } from 'react'
// import './add.css';

// function Update() {
//     const[Sno,setsno]=useState(0);
//     const[name,setName]=useState("");
//     const[timeIn,settimein]=useState(0);
//     const[hrs,sethrs]=useState(0);
//     const[status,setStatus]=useState("");
//     const handleSubmit =(e)=>{
//         e.preventDefault();
//         const data={
//             sno:Sno,
//             name:name,
//             timein:timeIn,
//             totalhrs:hrs,
//             paymentstatus:status,
//         }
//         console.log(data)
//         axios.put('http://127.0.0.1:5000/updateDetails',data)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err));
//     }


//   return (
//     <>
//     <div className='back'>
//     <div className='b'>
//         <form onSubmit={handleSubmit}>
//         <label>Sno</label>
//         <input type="tel"  onChange={e => setsno(e.target.value)}/>
//         <br/>
//         <label>Name</label>
//         <input type="text"  onChange={e => setName(e.target.value)}/>
//         <br/>
//         <label>TimeIn</label>
//         <input type="tel"  onChange={e => settimein(e.target.value)}/>
//         <br/>
//         <label>TotalHrs</label>
//         <input type="tel"  onChange={e => sethrs(e.target.value)}/>
//         <br/>
//         <label>PaymentStatus</label>
//         <input type="text"  onChange={e => setStatus(e.target.value)}/>
//         <br/>
//         <button type="submit"> submit</button>
//         </form>
//     </div>

//     </div>
//     </>
//   )
// }

// export default Update