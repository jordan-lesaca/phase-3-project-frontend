function Painting({painting, deletePainting}){ 
    return (
        <div>
            <h1>Title: {painting.title}</h1>
            <h3>Year Created: {painting.year_created}</h3>
            <button onClick={() => 
                deletePainting(painting.id)}> Delete </button>
        </div>
    )
}

export default Painting