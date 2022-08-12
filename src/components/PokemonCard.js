import { useState } from 'react';
import {Col, Card, Figure} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomePageSection from './HomePageSection';

const PokemonCard = (props) => {
//const [pokemons, setPokemons] = useState(props.pokemondata);
return (
<>
<Link to={props.redirect + props.id} >
                          <Card className='mt-2'>
                                <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={props.img}
                                />
                                <Figure.Caption className='text-center'>
                                   {props.name  }
                                </Figure.Caption>
                                </Figure>
                            </Card>
                            </Link>
</>
);
}

export default PokemonCard;