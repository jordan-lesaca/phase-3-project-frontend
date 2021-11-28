import './App.css';
import Paintings from './Paintings'
import PaintingForm from'./PaintingForm'
import React, { useEffect, useState } from 'react'

function App() {
  const [ paintings, setPaintings ] = useState([]) 

  function newPainting(title, year_created, artist_id, museum_id){
    const painting = {title: title, year_created: year_created, artist_id: artist_id, museum_id: museum_id }
    console.log(painting)
    fetch(`http://localhost:9292/paintings`, {
      method: 'POST', 
      headers:{
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(painting)
    })
      .then(res => res.json())
      .then(newPainting => setPaintings(paintings.concat(newPainting)))
  }

  function deletePainting(id){
    fetch(`http://localhost:9292/paintings/${id}`, {
      method: 'DELETE'
    })
    .then((r) => r.json())
    .then((deletedPainting) => setPaintings(paintings.filter(painting => painting.id !== deletedPainting.id)))
  }

  useEffect(() => {   
    fetch("http://localhost:9292/paintings")
    .then((r) => r.json())
    .then((data) => setPaintings(data));
      }, []) 

  return (
    <div className="App">
      <h1>Welcome to the Gallery</h1>
      <Paintings paintings={paintings} deletePainting={deletePainting}/>
      <PaintingForm newPainting={newPainting}/>
    </div>
  );
}

export default App;