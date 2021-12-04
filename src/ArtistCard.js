import React from 'react'

function ArtistCard({artist}){
    return (
        <div className="artist-list">
            <h1>{artist.name} - Artist ID: {artist.id}</h1>
            <h2>Art Style: {artist.style}</h2>
        </div>
    )
}

export default ArtistCard