
import {React, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

export default function Comments() {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

  return (
    <div>
      <Form id="comments-form">
        <h3>Comments</h3>
        {comments.map((text) => ( 
        <div className="comment-container">{text}</div>
        ))}
        <h6>Enter Your Comment Below</h6>
        <Form.Control id="textarea-box" as="textarea"  rows={5} value={comment} onChange={(event) => {setComment(event.target.value)}} />
        <Button onClick={() => (setComments((comments) => [...comments, comment]))}>Submit</Button>
      </Form>
    </div>
  )
}

