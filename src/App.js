import React, { Component, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

    const handleOnChange = (e) => {
     

      setCount(e.target.value.length)
     
    }

    return (
      <div className="container">
        <textarea rows="3" onChange={handleOnChange}></textarea>
        <div className="counter">{count}</div>
      </div>
    );
}

export default App;
