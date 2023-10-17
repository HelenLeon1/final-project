import React from 'react';
import Comments from './Comments';
import Container from 'react-bootstrap/esm/Container';

export default function Articles({articles}) {

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id + 100}>
          <Container>
          <h3 className="article-titles">{article.name}</h3>
          <p className="articles-text">{article.text}</p>
          </Container>
          <hr></hr>
        </div>
      ))}
      <Comments />
    </div>
  )
}
