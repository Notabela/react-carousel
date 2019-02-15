import React from 'react'
import {FaChevronRight} from 'react-icons/fa'

/*
 * Carousel Right Arrow - Takes Parent function as prop and execute
 * move to next slide onClick in parent
*/
const RightArrow = ({ goToNextSlide }) => {

    return (
        <div className="right-arrow" onClick={goToNextSlide}>
        <FaChevronRight size="3em"/>
        </div>
    )
}

export default RightArrow