import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import champion from "../assets/images/champion.png";
import Global from '../Global';
import axios from 'axios';

export default class Menu extends Component {
    state = {
        equipos: [],
        status: false
    }
    loadEquipos = () => {
        var request = "api/equipos";
        var url = Global.urlApiApuestas + request;
        console.log(url);
        axios.get(url).then(response => {
            this.setState({
                equipos: response.data,
                status: true
            });
            console.log(this.state.equipos);
        });
    }
    componentDidMount = () => {
        this.loadEquipos();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <img src={champion} style={{ width: "50px", height: "40px" }} />
                    <NavLink className="navbar-brand" to="/">Champions</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                </NavLink>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.status === true &&
                                        (
                                            this.state.equipos.map((equipo, index) => {
                                                return (
                                                    <li key={index}>
                                                        <NavLink className="dropdown-item" to={"/equipo/" + equipo.idEquipo}>{equipo.nombre}</NavLink>
                                                    </li>
                                                )
                                            })
                                        )
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
