import React, { Component } from 'react';
import madvsbar from '../assets/images/madvsbar.png';

export default class Home extends Component {
  render() {
    return (
      <div className='container mt-3 text-center'>
        <h1>Home</h1>
        <img src={madvsbar} className='rounded img'/>
      </div>
    )
  }
}
