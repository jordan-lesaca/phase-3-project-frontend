import React from 'react'

function PaintingCard({painting, deletePainting}){
    return (
        <div>
            <h1>Title: {painting.title}</h1>
            <h3>Year Created: {painting.year_created}</h3>
            <h4>Artist ID: {painting.artist_id}</h4>
                <button className="delete-button" onClick={() => deletePainting(painting.id)}> Delete </button>
        </div>
    )
}

export default PaintingCard