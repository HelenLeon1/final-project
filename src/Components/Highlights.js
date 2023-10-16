import {React} from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';


export default function Highlights({articles}) {


  return (
    <div>
        <h3>Highlights</h3>
        <Container>
        <Row>
        {articles.map((article) => (
        <Col className='mb-5' key={article.id} id={article.id}>
        <Card className="highlights-cards" style={{ width: '18rem' }} >
            <Card.Img variant="top" src={article.image}/>
            <Card.Body >
                 <Card.Title>{article.name}</Card.Title>
                 <Card.Text>
                 {article.summary}
                 </Card.Text>
           </Card.Body>
        </Card>
        </Col>
          ))}
        </Row>
        </Container>
    </div>
  )
}


