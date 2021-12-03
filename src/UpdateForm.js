import React from 'react'
import UpdateFormCard from './UpdateFormCard'

function UpdateForm({paintings, updatePaint}){
    const allPaint = paintings.map((painting, index) => 

    <UpdateFormCard 
        key={index}
        painting={painting} 
        updatePaint={updatePaint}
    />)

        return (
            <div>
                <h1>Update HERE</h1>
                {allPaint}
            </div>
        )
    }

export default UpdateForm