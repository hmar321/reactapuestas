import React, { Component } from 'react'

export default class CrearApuesta extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Crear Apuesta</h1>
        <form>
            <div className='mb-3'>
                <label className='form-label'>Texto</label>
                <input className='form-control' ref={this.cajaUsuario} type='text' placeholder='texto'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Texto</label>
                <input className='form-control' ref={this.cajaResultado} type='text' placeholder='texto'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Texto</label>
                <input className='form-control' ref={this.cajaFecha} type='text' placeholder='texto'/>
            </div>
            <button className='btn btn-success'>Crear</button>
        </form>
      </div>
    )
  }
}
