import React, { useState } from 'react'
import PaintingCard from './PaintingCard'

function Paintings({paintings, deletePainting, handleUpdate}){
    const [ toggle, setToggle ] = useState(false)
    const allPaintings = paintings.map((painting, index) => 
    <PaintingCard 
    key={index} 
    painting={painting} 
    deletePainting={deletePainting} 
    handleUpdate={handleUpdate}/>)

    function toggling(){
        setToggle(!toggle) 
    }

    return (
        <div>
            <h1>Paintings</h1>
                <button onClick={toggling} >
                    Show All Paintings
                </button>
        {toggle ? 
            (<h1>{allPaintings}</h1>
    )
                : 
            (null)
        }
              </div>
    )
}

export default Paintings