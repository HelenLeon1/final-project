import {React, useState, useEffect} from 'react';
import Highlights from '../Components/Highlights';
import Articles from '../Components/Articles';


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
      <h2>Travel Tips</h2>
      <p>Write Summary Here</p>
      <Highlights articles={articles}/>
      <Articles articles={articles} /> 
    </div>
  )
}
