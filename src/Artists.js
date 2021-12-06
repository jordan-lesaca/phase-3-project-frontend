import React, { useState } from 'react'
import ArtistCard from './ArtistCard'

function Artists({artists}){
    const [ toggle, setToggle ] = useState(false)

    const allArtists = artists.map((artist) => 
    <ArtistCard 
    key={artist.id}
    artist={artist}
    />
    )

    function toggling(){
        setToggle(!toggle) 
    }

    return (
        <div>
            <h1>Current Student Artist Info</h1>
                <button onClick={toggling} >
                    Show Artists
                </button>
        {toggle ? 
            (allArtists)
                : 
            (null)
        }
        </div>
    )
}

export default Artists