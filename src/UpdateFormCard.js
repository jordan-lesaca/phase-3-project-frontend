import React, { useState } from 'react'

function UpdateFormCard({painting, updatePaint }){
    const [ toggle, setToggle ] = useState(false)
    const [ formData, setFormData ] = useState({
        title: "",
        year_created: "",
        artist_id: ""
    })

    function toggling(){
        setToggle(!toggle) 
    }

    function handleChange(e){
        let key = e.target.name
        let value = e.target.value
        console.log(e)
        setFormData({...formData, [key] : value })
    }

    function handleUp(e){
        e.preventDefault()
        const updatedPaint = {
            title: formData.title, 
            year_created: formData.year_created,
            artist_id: formData.artist_id   
        }

        fetch(`http://localhost:9292/paintings/${painting.id}`, {
            method: "PATCH",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(updatedPaint)
                })
            .then(res => res.json())
            .then(updatePaint)
        }

    return (
        <div>
            <h2>{painting.title}</h2>
            <h2>{painting.year_created}</h2>
            <h2>{painting.artist_id}</h2>
                <button key={painting} onClick={toggling} >
                Press me to Update
                </button>
                    {toggle ? 
                    <form className="update-painting" onSubmit={(handleUp)} >
                        <label>Painting Title:</label>
                            <input 
                            type="text" 
                            name="title" 
                            placeholder="title..." 
                            value={formData.title}
                            className="input-text"
                            onChange={handleChange}
                            />

                        <label>Year Created:</label>
                            <input type="text" 
                            name="year_created" 
                            placeholder="YYYY..." 
                            value={formData.year_created}
                            className="input-text"
                            onChange={handleChange}
                            /> 
                                
                        <label>Artist ID:</label>
                            <input type="text" 
                            name="artist_id" 
                            placeholder="Artist ID..." 
                            value={formData.artist_id}
                            className="input-text"
                            onChange={handleChange} 
                            />
                            <button type="submit" className="update-painting"> Update </button>
                    </form>
                            :
                            (null)
                        }
        </div>
    )
}

export default UpdateFormCard