import {React, useState, useEffect} from 'react';
import Highlights from '../Components/Highlights';
import Articles from '../Components/Articles';
import Container from 'react-bootstrap/esm/Container';
import Footer from '../Components/Footer';


export default function TravelTips() {

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

    

  return (
    <div>
      <h2 id="travel-tips-header">Travel Tips</h2>
      <Container>
      <p id="tips-text">Here you will find some helpful tips to start your travel plans. The highlights will show you some of the most popular articles on our website and 
        below this you will find the articles we have posted. Stay tuned for more articles as we add new ones every week!</p>
      </Container>
      <Highlights articles={articles}/>
      <Articles articles={articles} /> 
      <Footer />
    </div>
  )
}
