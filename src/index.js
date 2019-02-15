import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';
import './index.css';
import './components/ComponentStyle.css'
import * as serviceWorker from './serviceWorker';

const images = [
    "images/slide-1.jpg",
    "images/slide-2.jpg",
    "images/slide-3.jpg",
    "images/slide-4.jpg",
    "images/slide-5.jpg",
    "images/slide-6.jpg"
]

// auto play object to specify if Carousel should autoPlay
const autoPlay = {'play': false, 'interval': 2}

ReactDOM.render(<Carousel images={images} autoPlay={autoPlay}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
