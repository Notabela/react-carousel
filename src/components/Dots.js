import React from 'react'
import Dot from './Dot'

/*
 * Dots Component - will contains number of images dot each bound
 * to a function and an index (corresponding to its image)
*/
const Dots = ({index, images, dotClick}) => {
    
    // simple utility function to map each child dot
    // a specific image in list of images 
    const mapDotToImage = (image, i) => {

        // if dot-index === image index is parent, dot should be active
        let isActive = ( i === index )

        return <Dot key={i} id={i} isActive={isActive} dotClick={dotClick} />
    }

    return <div className="dots-wrapper">{images.map(mapDotToImage)}</div>
}

export default Dots