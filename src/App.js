import './App.css';
import Paintings from './Paintings'
import PaintingForm from'./PaintingForm'
import UpdateForm from './UpdateForm'
import React, { useEffect, useState } from 'react'

function App() {
  const [ paintings, setPaintings ] = useState([]) 

  function newPainting(title, year_created, artist_id){
    const painting = {title: title, year_created: year_created, artist_id: artist_id }

    fetch(`http://localhost:9292/paintings`, {
      method: 'POST', 
      headers:{
        'Content-Type': 'application/json'
    }, 
      body: JSON.stringify(painting)
    })
      .then(res => res.json())
      .then(newPainting => 
      setPaintings(paintings.concat(newPainting))
    )
  }
  
  function deletePainting(id){
    fetch(`http://localhost:9292/paintings/${id}`,{
      method: 'DELETE'
    })
      .then((r) => r.json())
      .then((deletedPainting) => 
      setPaintings(paintings.filter(painting => 
      painting.id !== deletedPainting.id))
    )
  }

  useEffect(() => {   
    fetch("http://localhost:9292/paintings")
    .then((r) => r.json())
    .then((data) => setPaintings(data));
  }, []) 

  function updatePaint(updatedPaint){
    const revisedPaint = paintings.map((painting) => {
      if (painting.id !== updatedPaint.id)
        return painting
          else 
        return updatedPaint
    })
    setPaintings(revisedPaint)
  }

  return (
    <div className="App">
      <h1>Welcome to the Gallery</h1>
        <Paintings paintings={paintings} deletePainting={deletePainting}/>
        <PaintingForm newPainting={newPainting}/>
        <UpdateForm paintings={paintings} updatePaint={updatePaint}/>
    </div>
  );
}

export default App;