import React, { useState } from 'react'

function PaintingForm({newPainting}){
    const [title, setTitle] = useState("")
    const [year_created, setYearCreated] = useState("")   
    const [artist_id, setArtistId] = useState("")
    
    function handleSubmit(e, title, year_created, artist_id){
        e.preventDefault()
        newPainting(title, year_created, artist_id)
        setTitle("")
        setYearCreated("")
        setArtistId("")
      }

    return (
        <div>
            <h1>Painting Form</h1>
            <form className="add-painting" onSubmit={(e) => handleSubmit(e, title, year_created, artist_id)} >
                <label> Painting Title: </label>
                <input type="text" 
                name="title" 
                placeholder="title..." 
                value={title}
                className="input-text"
                onChange={e => setTitle(e.target.value)} />
                
                <label> Year Created: </label>
                <input type="text" 
                name="year_created" 
                placeholder="YYYY..." 
                value={year_created}
                className="input-text"
                onChange={e => setYearCreated(e.target.value)} /> 
                               
                <label> Artist ID: </label>
                <input type="text" 
                name="artist_id" 
                placeholder="Artist ID..." 
                value={artist_id}
                className="input-text"
                onChange={e => setArtistId(e.target.value)} />
            <button type="submit" className="new-painting" > Add </button>
            </form>
        </div>
    )
}

export default PaintingForm