import React from 'react'
import "../styles/fotos.css"

function Description({description}) {
  return (
    <div className='container__descp'>
        <h4>
            {description}
        </h4>

    </div>
  )
}

export default Description