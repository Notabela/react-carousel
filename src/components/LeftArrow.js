import React from 'react'
import {FaChevronLeft} from 'react-icons/fa'

/*
 * Carousel Left Arrow - Takes Parent function as prop and execute
 * move to previous slide onClick in parent
*/
const LeftArrow = ({ goToPrevSlide }) => {

    return (
        <div className="left-arrow" onClick={goToPrevSlide}>
            <FaChevronLeft size="3em" />
        </div>
    )
}

export default LeftArrow