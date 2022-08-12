import { useState } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import pokeMonInfo from '../pokedex.json';
import {Row, Col} from 'react-bootstrap';

const PokeMonType = (props) => {
    const {type} = useParams();
    const [pokemons, setPokeMons] = useState(pokeMonInfo.pokemon.filter(p => p.type.includes(type)).sort((a,b)=> { return a.name > b.name ? 1: b.name > a.name ? -1: 0}));
return (
<>
<Row>
    <Col className="text-center"><h2>Pokemon Type - {type}</h2></Col>
</Row>
<Row>

{
pokemons.length > 0 && pokemons.map( p => {

return <Col xs={2}>
<PokemonCard img = {p.img} id = {p.id} redirect={"/pokemon-detail/"} name = {p.name} />
</Col> 
})

}

</Row>
</>
);

}
export default PokeMonType;