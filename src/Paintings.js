import React from 'react'
import PaintingCard from './PaintingCard'

function Paintings({paintings, deletePainting, handleUpdate}){
    const allPaintings = paintings.map((painting, index) => 
    <PaintingCard key={index} painting={painting} deletePainting={deletePainting} handleUpdate={handleUpdate}/>)
    return (
        <div>
            <h1>Paintings</h1>
                {allPaintings}
        </div>
    )
}

export default Paintings