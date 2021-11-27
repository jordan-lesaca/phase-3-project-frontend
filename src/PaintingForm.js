import React, { useState } from 'react'

function PaintingForm({newPainting}){
    const [title, setTitle] = useState("")
    const [year_created, set_year_created] = useState("")   
    const [artist_id, set_artist_id] = useState("")

    function handleSubmit(e, title, year_created, artist_id){
        e.preventDefault()  
        newPainting(title, year_created, artist_id)
        setTitle("")
        set_year_created("")
        set_artist_id("")
      }

    return (
        <div>
            <h2>Paintings Form </h2>
                <form onSubmit={(e) => handleSubmit(e, title, year_created, artist_id)}>
                    <label> Painting Title: </label>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                    <br/>
                    <label>Year Created:</label>
                    <input type="text" name="year_created" value={year_created} onChange={e => set_year_created(e.target.value)}/>
                    <br/>
                    <label>ArtistID:</label>
                    <input type="text" name="artist_id" value={artist_id} onChange={e => set_artist_id(e.target.value)}/>
                    <br/>
                    <button type="submit">Add Painting</button>                 
                </form>
        </div>
    )
}

export default PaintingForm