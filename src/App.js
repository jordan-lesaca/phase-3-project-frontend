import './App.css';
import Paintings from './Paintings'
import PaintingForm from'./PaintingForm'
import Painting from './Painting'
import React, { useEffect, useState } from 'react'

function App() {
  const [ paintings, setPaintings ] = useState([]) 

  function newPainting(title, paint_type, year_created, artist_id, museum_id){
    //post req
  }

  useEffect(() => {   
    fetch("http://localhost:9292/paintings")
    .then((r) => r.json())
    .then((data) => setPaintings(data));
      }, [])

  return (
    <div className="App">
      <h1>Welcome to the Gallery</h1>
      <Paintings paintings={paintings} />
      <PaintingForm newPainting={newPainting}/>
    </div>
  );
}

export default App;
