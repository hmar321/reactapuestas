import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {
    state = {
        apuestas: [],
        status: false
    }
    loadApuestas = () => {
        var request = "api/apuestas";
        var url = Global.urlApiApuestas + request;
        axios.get(url).then(res => {
            this.setState({
                apuestas: res.data,
                status: true
            });
        });
    }
    componentDidMount = () => {
        this.loadApuestas();
    }
    render() {
        return (
            <div className='container'>
                <h1>Apuestas</h1>
                <NavLink className="btn btn-info" to="/crearapuesta">Añadir apuesta</NavLink>
                {
                    this.state.status === true &&
                    (
                        <table className='table table-dark table-striped mt-3'>
                            <thead>
                                <tr>
                                    <th>Usuario</th>
                                    <th>Resultado</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.apuestas.map((apuesta, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{apuesta.usuario}</td>
                                                <td>{apuesta.resultado}</td>
                                                <td>{apuesta.fecha}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        )
    }
}
