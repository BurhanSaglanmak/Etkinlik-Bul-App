import React from 'react'
import "../style.css"

function DetailPoster({poster}) {
  return (
    <div className='canvas ' >
      
        {poster? <img className='poster radius' src={poster} alt="..." />: <img className='posterimg'
            src="https://www.nato-pa.int/sites/default/files/default_images/default-image.jpg"
            alt="..."
          />}
    </div>
  )
}

export default DetailPoster