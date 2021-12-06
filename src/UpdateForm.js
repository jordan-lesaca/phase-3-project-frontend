import React from 'react'
import UpdateFormCard from './UpdateFormCard'
import { useState } from 'react'

function UpdateForm({paintings, updatePaint}){
    const [ toggle, setToggle ] = useState(false)

    function toggling(){
        setToggle(!toggle) 
    }

    const allPaint = paintings.map((painting, index) => 
    <UpdateFormCard 
        key={index}
        painting={painting} 
        updatePaint={updatePaint}
    />)

        return (
            <div>
            <h2> Update Painting Form </h2>
                <button onClick={toggling} >
                    Update List
                </button>
                    {toggle ? 
                        (allPaint) 
                        :
                        (null)
                    }
            </div>
        )
    }

export default UpdateForm