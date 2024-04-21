import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CommentForm(props) {
  const [commenter, setCommenter] = useState('');
  const [rating, setRating] = useState('★');
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (commenter && rating && comment) {
      props.addNewComment({commenter, rating, comment});
      setCommenter('');
      setRating('');
      setComment('');
    } else {
      console.log('invalid Form.Control');
    }
  };

  return (
      <Form onSubmit={onSubmit} className="commentForm">
        <Form.Label>Add a new comment!</Form.Label>
        <Row className="mb-1">
          <Col>
            <Form.Control
              type="text"
              placeholder="name"
              onChange={(e) => setCommenter(e.target.value)}
              value={commenter}
              required
            />
          </Col>
          <Col>
            <Form.Select value={rating} onChange={(e) => setRating(e.target.value)} required>
              <option value="★">★</option>
              <option value="★★">★★</option>
              <option value="★★★">★★★</option>
              <option value="★★★★">★★★★</option>
              <option value="★★★★★">★★★★★</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <Form.Control
              type="text"
              placeholder="comment"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              required
            />
          </Col>
        </Row>
        <Button type="submit">Add Comment</Button>
      </Form>
  )
}