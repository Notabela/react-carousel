import React from 'react'

/*
 * Receives Image as props.image and renders on Slide
*/
const Slide = ({image}) => {
    // Slide will simply be a div with image as background Image
    const cssStyles = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div className="slide" style={cssStyles}></div>
}

export default Slide