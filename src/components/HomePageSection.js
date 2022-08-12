import {Row, Col, Card, Figure} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePageSection = (props) => {
    return (
        <Row>
            <Col className='mt-2'>
            <h4>{props.name}</h4>
            <Card className='pd-all-2'>
                <Row>
                    {
                        props.data.map( d => {
                          return  <Col xs={1}>
                          <Link to={props.redirect + d.name} >
                          <Card className='mt-2'>
                                <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={d.img}
                                />
                                <Figure.Caption className='text-center'>
                                   {d.name  }
                                </Figure.Caption>
                                </Figure>
                            </Card>
                            </Link>
                            </Col>
                        })        
                    }
                </Row>
            </Card>
            </Col>
        </Row>
    )
}

export default HomePageSection;