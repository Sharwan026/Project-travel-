import axios from "axios";
// import './css/home.css';
import './home.css';
import React, { useState, useEffect } from "react";
function Main(){
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/get')
            .then(response => {
                setQuotes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
  
    return (
        <div className="body">
            <div ><h1 id="a">Road Requests</h1></div>
            <br/>
            <div className="table">
                <table border={2} id="m">
                    <thead id="q">
                        <tr>
                            <th>Request Number</th>
                            <th>Location Name</th>
                            <th>Spots</th>
                            <th>Restaurent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotes.map(quote =>(
                            <tr key={quote.id}>
                            <td>{quote.id}</td>
                            <td>{quote.locations}</td>
                            <td>{quote.spots_to_View}</td>
                            <td>{quote.near_by_hotels}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Main;