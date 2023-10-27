import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Equipo from './Equipo';
import Jugadores from './Jugadores';
import DetallesJugador from './DetallesJugador';
import Apuestas from './Apuestas';
import CrearApuesta from './CrearApuesta';

export default class Router extends Component {

    render() {
        function EquipoElement(params) {
            var { idequipo } = useParams();
            return (<Equipo idequipo={idequipo} />)
        }
        function JugadoresElement() {
            var { idequipo } = useParams();
            return (<Jugadores idequipo={idequipo} />)
        }
        function DetallesJugadorElement() {
            var { idjugador } = useParams();
            return (<DetallesJugador idjugador={idjugador} />)
        }
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/apuestas' element={<Apuestas />} />
                    <Route path='/crearapuesta' element={<CrearApuesta />} />
                    <Route path='/equipo/:idequipo' element={<EquipoElement />} />
                    <Route path='/jugadores/:idequipo' element={<JugadoresElement />} />
                    <Route path='/detallesjugador/:idjugador' element={<DetallesJugadorElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
