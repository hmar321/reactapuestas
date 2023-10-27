import React, { Component } from 'react';
import Global from "../Global";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CrearApuesta extends Component {
    state = {
        statusInsert: false
    }

    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    insertarApuesta = (e) => {
        e.preventDefault();
        var usuario = this.cajaUsuario.current.value;
        var resultado = this.cajaResultado.current.value;
        var fecha = this.cajaFecha.current.value;
        var apuesta = {
            idApuesta: 0,
            usuario: usuario,
            resultado: resultado,
            fecha: fecha
        }
        var request = "api/apuestas";
        var url = Global.urlApiApuestas + request;
        console.log(url);
        axios.post(url, apuesta).then(res => {
            this.setState({
                statusInsert: true
            });
        });
    }
    render() {
        return (
            <div className='container'>
                {
                    this.state.statusInsert===true&&
                    (<Navigate to="/apuestas"/>)
                }
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
                    <button onClick={this.insertarApuesta} className='btn btn-success'>Crear</button>
                </form>
            </div>
        )
    }
}
