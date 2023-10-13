import React from 'react';
import Comments from './Comments';
import Container from 'react-bootstrap/esm/Container';

export default function Articles({articles}) {
  return (
    <div>
      {articles.map((article) => (
        <div>
          <Container>
          <h3>{article.name}</h3>
          <p>{article.text}</p>
          </Container>
        </div>
      ))};
      <Comments />
    </div>
  )
}
