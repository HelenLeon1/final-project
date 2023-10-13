import {React, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

export default function Comments() {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

  return (
    <div>
      <Form>
        <h3>Comment Below</h3>
        {comments.map((text) => (
            <div>{text}</div>
        ))}
        <Form.Control id="comments" as="textarea" rows={5} value={comment} onChange={(event) => {setComment(event.target.value)}} />
        <Button onChange={() => (setComments((comments) => [...comments, comment]))}>Submit</Button>
      </Form>
    </div>
  )
}

