import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../Global';
import axios from 'axios';

export default class Equipo extends Component {
    state = {
        equipo: {},
        status: false
    }
    loadEquipo = () => {
        var idEquipo = this.props.idequipo;
        var request = "api/equipos/" + idEquipo;
        var url = Global.urlApiApuestas + request;
        axios.get(url).then(response => {
            this.setState({
                equipo: response.data,
                status: true
            });
        });
    }
    componentDidMount = () => {
        this.loadEquipo();
    }
    componentDidUpdate = (oldProps) => {
        if (oldProps.idequipo != this.props.idequipo) {
            this.loadEquipo();
        }
    }
    render() {
        return (
            <div className='container mt-3'>
                {
                    this.state.status === true &&
                    (
                        <div className="card">
                            <div className="card-body text-center">
                                <img src={this.state.equipo.imagen} className="card-img-top" alt="ImagenEquipo" style={{ width: "300px", height: "300px" }} />
                                <h5 className="card-title">{this.state.equipo.nombre}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Champions: {this.state.equipo.champions}</h6>
                                <p className="card-text">{this.state.equipo.descripcion}</p>
                                <NavLink className="btn btn-success mx-3" to={"/jugadores/" + this.state.equipo.idEquipo}>Jugadores</NavLink>
                                <NavLink className="btn btn-info" to="/">Volver</NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
