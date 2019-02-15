import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../components/Carousel';

it('renders without crashing when no props are passed', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Carousel />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing when image prop only is passed', () => {
  const div = document.createElement('div');

  const images = ["dummyimage.jpg"]

  ReactDOM.render(<Carousel images={images}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing when autoPlay prop only is passed', () => {
  const div = document.createElement('div');

  const autoPlay = {'play': true, 'interval': 2}

  ReactDOM.render(<Carousel autoPlay={autoPlay}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing when images and autoPlay props are passed', () => {
  const div = document.createElement('div');

  const images = ['dummyimage.jpg', 'otherdummy.jpg']
  const autoPlay = {'play': true, 'interval': 2}

  ReactDOM.render(<Carousel images={images} autoPlay={autoPlay}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
