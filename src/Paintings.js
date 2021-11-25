import Painting from './Painting'

function Paintings({paintings}){
    console.log(paintings)
    const allPaintings = paintings.map((p) => <Painting painting={p}/>)
    return (
        <div>
            <h1>Paintings</h1>
                {allPaintings}
        </div>
    )
}

export default Paintings

//Iterates Paintings and renders painting card for each one of these paintings component