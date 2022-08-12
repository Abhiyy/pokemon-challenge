import React, { Component, useState } from 'react';
import {Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer, faHandPointUp} from "@fortawesome/free-solid-svg-icons";
import pokeMonInfo from '../pokedex.json';
 const PokemonList = () => {
    const [pokemons, setPokeMons] = useState(pokeMonInfo.pokemon.sort((a,b)=> { return a.name > b.name ? 1: b.name > a.name ? -1: 0}));
    const pokemonTableRow = pokemons.map(p => {
        return <tr>
            <td>{p.num}</td>
            <td><img src = {p.img} /> </td>
            <td>{p.name}</td>
            <td>{p.type.join(",")}</td>
            <td>{p.height}</td>
            <td>{p.weight}</td>
            <td>{p.weaknesses.join(",")}</td>
            <td>{p.next_evolution !== undefined && p.next_evolution.map(ne => ne.name).join(",")}</td>
            <td>{p.prev_evolution !== undefined && p.prev_evolution.map(pe => pe.name).join(",")}</td>
            <td><Link to={"/pokemon-detail/"+p.id} className="btn btn-warning">Detail <FontAwesomeIcon icon={faHandPointUp  }/> </Link></td>
        </tr>
    })
    return (
        <>
        <Row>
            <Col>
            <h2 >All Pokemons List </h2>
        <Table striped bordered hover className='mt-2'>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Type</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Weakness</th>
          <th>Next Evolution</th>
          <th>Previous Evolution</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {pokemonTableRow}
        </tbody>
        </Table>
        </Col>
        </Row>
        </>
    );
}

export default PokemonList;