import React, {Component} from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import Dots from './Dots'

/*
    Carousel Class - Takes in an array of Images as props.images
    And Displays them in a Carousel style
    Accepts Autoplay Object to trigger autoPlay object sample: {'play': true, 'interval': 2}
*/
class Carousel extends Component {

    constructor(props) {

        super(props)

        // Since all images will be displayed in line (with only one showing), 
        // translate value will be used to advance or backtract to image

        // interval is reference to setInterval in case it needs to be stopped
        // not implemented atm

        // 
        this.state = {
            images: props.images,
            currentIndex: 0,
            translateValue: 0,
            autoPlay: props.autoPlay,
            interval: null
        }
    }

    // Follow Component LifeCycle to Trigger AutoPlay
    componentDidMount = () => {

        // if no autoPlay parameter is passed, return
        if (!this.state.autoPlay) return

        if (this.state.autoPlay.play)
        {
            // handle case where object could be missing seconds

            const ms = this.state.autoPlay.interval ? this.state.autoPlay.interval * 1000 : 2000
            const changeInterval = window.setInterval( () => { this.goToNextSlide() }, ms)
            this.setState({
                interval: changeInterval
            })
        }
    }

    componentWillUnmount = () => {
        // Unmount gracefully
        if (this.state.interval) clearInterval(this.state.interval)
    }
    
    // Advance Carousel to Previous Slide
    // currentIndex resets to images.length-1 if currently at 0
    // translateValue is reset or decremented by the width of slide
    // to move to the next Slide
    goToPrevSlide = () => {

        this.setState( prevState => {
            
            // increase translate value to move back
            const nextTranslateValue = prevState.translateValue + (this.slideWidth())

            // set translate value so that value is the last element in image
            const resetTranslateValue = -this.slideWidth() * (prevState.images.length-1)

            return({
                currentIndex: prevState.currentIndex <= 0 ? prevState.images.length - 1 : prevState.currentIndex - 1,
                translateValue: prevState.currentIndex === 0 ? resetTranslateValue : nextTranslateValue
            })
        })
    }


    // Similar functionality to goToPrevSlide
    goToNextSlide = () => {

        this.setState( prevState => {
            
            // similar functionality to translate in Pev Slide
            const nextTranslateValue = prevState.translateValue + -(this.slideWidth())
            
            return ({
                currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
                translateValue: prevState.currentIndex === this.state.images.length-1 ? 0 : nextTranslateValue
            })
        })
    }

    // Moves to Image at index i if dot with index i is Clicked
    handleDotClick = (i) => {
        this.setState( prevState => {

            // do nothing if current dot is clicked
            if ( i === prevState.currentIndex ) return prevState

            // translates forward to image at index i
            const forwardTranslate = -i * this.slideWidth()

            // translates backward to image at index i
            const backwardTranslate = prevState.translateValue + ( prevState.currentIndex - i) * this.slideWidth()

            return ({

                currentIndex: i,
                translateValue: i > prevState.currentIndex ? forwardTranslate : backwardTranslate
            })
        })
    }

    // MARK: Some utility Functions

    // Returns the current width of the Slide
    slideWidth = () => {

        return document.querySelector('.slide').clientWidth
    }

    // Utility function to render each image on a Slide
    eachImage = (image, i) => {

        return <Slide key={i} image={image} />
    }

    render() {

        // if no images passed to element, return

        if (!this.state.images) return null

        // Style of the Slide
        const slideStyle = {
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform 0.30s ease-out'
        }

        return (
            <div className="carousel">

                <div className="carousel-wrapper" style={slideStyle}>
                    {this.state.images.map(this.eachImage)}
                </div>

                <Dots index={this.state.currentIndex} images={this.state.images} dotClick={this.handleDotClick} />
                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        )
    }
}

export default Carousel