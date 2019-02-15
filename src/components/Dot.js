import React from 'react'

/*
  * Dot Component - takes an id(of image), active boolean and 
  * click function (to execute when dot is click to advance to 
  * the image with current id)
*/
const Dot = ({id, isActive, dotClick}) => 
{
    // dot has two states, active or not active to indicate which 
    // image is currently being displayed
    const classes = isActive ? 'dot dot-active' : 'dot'

    return <div className={classes} onClick={() => dotClick(id)}></div>
}

export default Dot