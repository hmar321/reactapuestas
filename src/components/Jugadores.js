import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global';
import axios from 'axios';

export default class Jugadores extends Component {
    state = {
        jugadores: [],
        status: false
    }
    loadJugadores = () => {
        var idequipo = this.props.idequipo;
        var request = "api/jugadores/jugadoresequipos/" + idequipo;
        var url = Global.urlApiApuestas + request;
        axios.get(url).then(res => {
            this.setState({
                jugadores: res.data,
                status: true
            });
        });
    }
    componentDidMount = () => {
        this.loadJugadores();
    }
    render() {
        return (
            <div className='container'>
                <h1>Jugadores {this.props.idequipo}</h1>
                <NavLink className="btn btn-info" to={"/equipo/" + this.props.idequipo}>Volver</NavLink>
                <table className='table table-bordered table-dark table-striped mt-3'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.status === true &&
                            (
                                this.state.jugadores.map((jugador, index) => {
                                    return (
                                        <tr>
                                            <td className='align-middle'>{jugador.nombre}</td>
                                            <td className='align-middle text-center'>
                                                <img className='rounded' style={{width:"150px",height:"150px"}} src={jugador.imagen} />
                                            </td>
                                            <td className='align-middle'>
                                                <NavLink className="btn btn-secondary" to={"/detallesjugador/" + jugador.idJugador}>Detalles</NavLink>
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
