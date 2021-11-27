import Painting from './Painting'

function Paintings({paintings, deletePainting, updatePainting}){
    const allPaintings = paintings.map((p) => <Painting painting={p} key={p.id} deletePainting={deletePainting} updatePainting={updatePainting}/>)
    return (
        <div>
            <h1>Paintings</h1>
                {allPaintings}
        </div>
    )
}

export default Paintings