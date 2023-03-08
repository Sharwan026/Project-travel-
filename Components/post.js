import React, { useState } from 'react';
import "./post.css";
function PostForm() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [Hotels, setHotel] = useState('');
  const [Views, setViews] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: id,
      locations: name,
      near_by_hotels: Hotels,
      spots_to_View: Views
    };

    fetch('http://localhost:8080/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className='BG'>
    <form className='x' onSubmit={handleSubmit}>
              <h1 className='a'>Explore new Spots</h1>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={id} onChange={event => setId(event.target.value)} />
      </div>
      <br></br>
      <div>
        <label htmlFor="locations">Location Name:</label>
        <input type="text" id="location" name="name" value={name} onChange={event => setName(event.target.value)} />
      </div>
      <br></br>
      <div>
        <label htmlFor="near_by_hotels">Hotel Name:</label>
        <input type="text" id="near_by_hotels" name="Hotels" value={Hotels} onChange={event => setHotel(event.target.value)} />
      </div>
      <br></br>
      <div>
        <label htmlFor="spots_to_View">Spot Name:</label>
        <input type="text" id="spots_to_view" name="Views" value={Views} onChange={event => setViews(event.target.value)} />
      </div>
      <br></br>
      <button className="buttons" type="submit">Submit</button>
    </form>
    </div>
  );
}

export default PostForm;