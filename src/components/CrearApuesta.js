import React, { Component } from 'react'

export default class CrearApuesta extends Component {
    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    crearApuesta=()=>{}
    render() {
        return (
            <div className='container'>
                <h1>Crear Apuesta</h1>
                <form>
                    <div className='mb-3'>
                        <label className='form-label'>Usuario</label>
                        <input className='form-control' ref={this.cajaUsuario} type='text' placeholder='Usuario' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Resultado</label>
                        <input className='form-control' ref={this.cajaResultado} type='text' placeholder='Resultado' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Fecha</label>
                        <input className='form-control' ref={this.cajaFecha} type='text' placeholder='Fecha' />
                    </div>
                    <button className='btn btn-success'>Crear</button>
                </form>
            </div>
        )
    }
}
