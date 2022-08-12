import React, { Component } from 'react';
import { Link, Route, Routes, S } from "react-router-dom";
import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';
import {Row, Col} from 'react-bootstrap';
import PokemonList from '../pages/PokemonList';
import PokeMonType from '../pages/PokeMonType';
import PokeMonWeakness from '../pages/PokeMonWeakness';

const Content= () => {
    return (
        <>
        <Row>
            <Col>
            <Routes>
            <Route path = "/" element={<Home />} exact/>
            <Route path='pokemon-detail'>
                <Route path=":id" element={<PokemonDetail />} />
            </Route>
            <Route path='type'>
                <Route path=':type' element = {<PokeMonType />}></Route>
            </Route>
            <Route path='weakness'>
                <Route path=':weakness' element = {<PokeMonWeakness />}></Route>
            </Route>
            <Route path='all-pokemons' element={<PokemonList />} >
                
            </Route>
            </Routes>
            </Col>
        </Row>
        </>
    );
}

export default Content;