import './App.css';
import Paintings from './Paintings'
import PaintingForm from'./PaintingForm'
import Painting from './Painting'
import React, { useEffect, useState } from 'react'

function App() {
  const [ paintings, setPaintings ] = useState([]) 

  useEffect(() => {   
    fetch("http://localhost:9292/artists")
    .then((r) => r.json())
    .then((data) => setPaintings(data));
      }, [])


  return (
    <div className="App">
      <h1>Welcome to the Gallery</h1>
      <Paintings paintings={paintings} />
      <PaintingForm />
    </div>
  );
}

export default App;
