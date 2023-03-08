import React, { useState } from 'react';
import axios from 'axios';
import "./delete.css";
const Del = () => {
  const [id, setId] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/delete/` + id)
      .then(response => {
        alert(' deleted successfully!');
        setId('');
         
      })
      .catch(error => {
        alert('Failed to delete.');
        console.error(error);
      });
  };

  return (
    <div className='form'>
      <h1 className='title'>Delete SpotsToViews</h1>
      <form>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={event => setId(event.target.value)}
          />
        </div>
         <br></br>
        <button className="button" type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default Del;
// import axios from 'axios';
// import React, { useState } from 'react'

// function Delete() {
//     const[Sno,setsno]=useState(0);
//     const handleSubmit =(e)=>{
//         e.preventDefault();
//         const data={
//             sno:Sno,
//         }
//         console.log(data)
//         axios.delete(`http://127.0.0.1:5000/deleteDetails/${Sno}`)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err));
//     }


//   return (
//     <>
//     <div>
//     <form onSubmit={handleSubmit}>
//     <label>Sno</label>
//     <input type="tel" placeholder='Sno' onChange={e => setsno(e.target.value)}/>
//     <button type="submit"> submit</button>
//     </form>
//     </div>
//     </>
//   )
// }

// export default Delete;