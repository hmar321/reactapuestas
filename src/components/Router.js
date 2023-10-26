import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Equipo from './Equipo';

export default class Router extends Component {

    render() {
        function EquipoElement(params) {
            var { idequipo } = useParams();
            return (<Equipo idequipo={idequipo} />)
        }
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/equipo/:idequipo' element={<EquipoElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
