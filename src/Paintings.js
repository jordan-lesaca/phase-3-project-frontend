import Painting from './Painting'

function Paintings({paintings, deletePainting}){
    const allPaintings = paintings.map((p) => <Painting painting={p} key={p.id} deletePainting={deletePainting}/>)
    return (
        <div>
            <h1>Paintings</h1>
                {allPaintings}
        </div>
    )
}
export default Paintings