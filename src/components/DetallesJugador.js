import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../Global';
import axios from 'axios';

export default class DetallesJugador extends Component {
    state = {
        jugador: {},
        status: false
    }
    loadJugador = () => {
        var idjugador = this.props.idjugador;
        var request = "api/jugadores/" + idjugador;
        var url = Global.urlApiApuestas + request;
        axios.get(url).then(res => {
            this.setState({
                jugador: res.data,
                status: true
            });
        });
    }
    componentDidMount = () => {
        this.loadJugador();
    }
    render() {
        return (
            <div className='container'>
                <h1>Detalles Jugador {this.props.idjugador}</h1>
                <div className="card">
                    <div className="card-body text-center">
                        <img src={this.state.jugador.imagen} className="card-img-top" alt="ImagenJugador" style={{ width: "300px", height: "300px" }} />
                        <h5 className="card-title mt-3">Fecha nacimiento: {this.state.jugador.fechaNacimiento}</h5>
                        <h6 className="card-subtitle mb-2 text-muted mt-4 mb-4">Pais: {this.state.jugador.pais}</h6>
                        <NavLink className="btn btn-info" to={"/jugadores/"+this.state.jugador.idEquipo}>Jugadores</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
