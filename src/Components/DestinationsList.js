import {React} from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function DestinationsList({articles}) {

    /*

    const articlesAPI = 'https://652809b9931d71583df1c70c.mockapi.io/articles';

    const [articles, setArticles] = useState([{name: "", avatar: "", text: ""}]);

    const getArticles = async () => {
        const response = await fetch(articlesAPI);
        const data = await response.json()
        setArticles(data)
      }
    
      useEffect(() => {
        getArticles()
    }, [])

    */

  return (
    <div>
        <h3>Highlights</h3>
        <Container>
        <Row>
        {articles.map((article) => (
        <Col className='col-sm mb-5'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={article.image} />
            <Card.Body >
                 <Card.Title>{article.name}</Card.Title>
                 <Card.Text>
                 {article.summary}
                 </Card.Text>
            {/* <Button variant="primary">Read More</Button> */}
           </Card.Body>
        </Card>
        </Col>
        ))}
        </Row>
        </Container>
    </div>
  )
}


