import { Button } from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react';
import {Row, Col, Card, Figure,ListGroup, Container} from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NextEvolution from '../components/NextEvolution';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import pokeMonInfo from '../pokedex.json';

const PokemonDetail = (props) => {
    const [pokeMonData, setPokeMonData] = useState(pokeMonInfo);
    const [pokeMon, setPokeMon] = useState({});
    const [nextOne, setNextOne] = useState([]);
    const [prevOne, setPrevOne] = useState([]);
    const [isPrevious, setIsPrevious] = useState(false);
    const {id} = useParams();    
    const navigate = useNavigate();
    useEffect(()=> {
        if(pokeMonData.pokemon.length > 0){
     
        setPokeMon(pokeMonData.pokemon.find(p => p.id == id));
        if(pokeMonData.pokemon.find(p => p.id == id).next_evolution !== undefined && pokeMonData.pokemon.find(p => p.id == id).next_evolution.length > 0 ){
        setNextOne( pokeMonData.pokemon.filter(p => pokeMonData.pokemon.find(p => p.id == id).next_evolution.map(ne => ne.num).includes(p.num)));
        }
        if(pokeMonData.pokemon.find(p => p.id == id).prev_evolution !== undefined && pokeMonData.pokemon.find(p => p.id == id).prev_evolution.length > 0 ){
            setPrevOne( pokeMonData.pokemon.filter(p => pokeMonData.pokemon.find(p => p.id == id).prev_evolution.map(ne => ne.num).includes(p.num)));
            setIsPrevious(true);
        }
    }
    },[pokeMonData])

    const backHandler = () =>{
        navigate(-1);
    }
return (<>
<Container fluid >

<Row >

    <Col>
    
    <Card className='pd-all-2 mg-all-2'>
    <Row>
            <Col > <Button onClick={backHandler} variant="danger" className='float-end'><FontAwesomeIcon icon={faAngleLeft} /> Back </Button>
            </Col>
        </Row>  
    <Row className='mt-2'>
        <Col><h3 className=' ms-auto'>I am {pokeMon.name}</h3> </Col>
    </Row>
    <Row>
        <Col xs={4}>
        <Figure>
      <Figure.Image
        width={200}
        height={200}
        alt="171x180"
        src= {pokeMon.img}
      />
      <Figure.Caption>
        
      </Figure.Caption>
    </Figure>
        </Col>
        <Col>
        <Row>
            <Col xs={2}><strong>Number</strong></Col>
            <Col>{pokeMon.num}</Col>
        </Row>
        <Row>
            <Col xs={2}><strong>Height</strong></Col>
            <Col>{pokeMon.height}</Col>
        </Row>
        <Row>
            <Col xs={2}><strong>Weight</strong></Col>
            <Col>{pokeMon.weight}</Col>
        </Row>
        <Row>
            <Col xs={2}><strong>Candy</strong></Col>
            <Col>{pokeMon.candy}</Col>
        </Row>
        <Row>
            <Col xs={2}><strong>Spawn Chance</strong></Col>
            <Col>{pokeMon.spawn_chance}</Col>
        </Row>
        <Row>
            <Col xs={2}><strong>Avg spawns</strong></Col>
            <Col>{pokeMon.avg_spawns}</Col>
        </Row>
        <Row>
            <Col xs={2}><strong>Spawn time</strong></Col>
            <Col>{pokeMon.spawn_time}</Col>
        </Row>
        
        <Row>
            <Col xs={2} className='mt-2'><strong>Type</strong></Col>
            <Col className='mt-2'>     
            <ListGroup>
            { pokeMon.type !== undefined && pokeMon.type.length > 0 && pokeMon.type.map(t => <ListGroup.Item>{t}</ListGroup.Item>)}
            </ListGroup>
            </Col>
        </Row>
        <Row >
            <Col xs={2} className='mt-2'><strong>Weakness</strong></Col>
            <Col className='mt-2'>    
            <ListGroup>
            { pokeMon.weaknesses !== undefined && pokeMon.weaknesses.length > 0 && pokeMon.weaknesses.map(w => <ListGroup.Item>{w}</ListGroup.Item>)}
            </ListGroup>
            </Col>
        </Row>
        </Col>
    </Row>
    <Row>
        {nextOne.length > 0 && <NextEvolution next = {nextOne} prev={prevOne}/>}
    </Row>
    </Card>
    </Col>
   
</Row>
</Container>
</>)
    
}

export default PokemonDetail;