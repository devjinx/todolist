import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
//import rrouter page
import Home from './router/home/home';
import Navbar from './router/navbar/navbar';
import Register from './router/register/register';
import Login from './router/login/login';

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('127.0.0.1:3001/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Axios error:", error);
        if (error.response) {
          // The request was made, but the server responded with a non-2xx status code
          console.error("Status:", error.response.status);
          console.error("Data:", error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error("No response received. Check the server.");
        } else {
          // Something else happened while setting up the request
          console.error("Error during request setup:", error.message);
        }
        setError("An error occurred while fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            <h1>{data.message}</h1>
            <p>{data.message}</p>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
