function Painting({painting}){ 
    return (
        <div>
            <h1>Title: {painting.title}</h1>
            <h3>Year Created: {painting.year_created}</h3>
            <h3>Type of Paint Used: {painting.paint_type}</h3>
        </div>
    )
}

export default Painting

// Painting Container 
