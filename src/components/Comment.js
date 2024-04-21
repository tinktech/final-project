import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

export default function Comment({comment, onChange, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  const editing = () => {
    setIsEditing(current => !current);
  }

  let commentContent;
  let editButton;
  if (isEditing) {
    commentContent = (
      <Form className="p-0">
        <Form.Label>Edit comment:</Form.Label>
        <Row className="mb-2">
          <Col>
            <Form.Control
              type='text'
              defaultValue={comment.commenter}
              onChange={(e) => {
                onChange({
                  ...comment,
                  commenter: e.target.value
                });
              }}
            />
          </Col>
          <Col>
            <Form.Select
              defaultValue={comment.rating}
              onChange={(e) => {
                onChange({
                  ...comment,
                  rating: e.target.value
                });
              }}
            >
              <option value="★">★</option>
              <option value="★★">★★</option>
              <option value="★★★">★★★</option>
              <option value="★★★★">★★★★</option>
              <option value="★★★★★">★★★★★</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Form.Control
              type='text'
              defaultValue={comment.comment}
              onChange={(e) => {
                onChange({
                  ...comment,
                  comment: e.target.value
                });
              }}
            />
          </Col>
        </Row>
      </Form>
    );
    editButton = "Save";
  } else {
    commentContent = (
      // <div className="commentContent">
      
        <Stack className="commentContent" direction="horizontal" gap={3}>
          <div>
            {`"${comment.comment}"`}
          </div>
          <div className="ms-auto">
            {`${comment.rating}`}
          </div>
          <div className="vr" />
          <div>
            {`${comment.commenter}`}
          </div>
        </Stack>
      
    );
    editButton = "Edit";
  }

  return (
    <Container>
      {commentContent}
      <div className="commentEditButtons">
      <ButtonGroup>
        <Button variant="dark" size="sm" onClick={editing}>{editButton}</Button>
        <Button variant="dark" size="sm" onClick={() => onDelete(comment.id)}>Delete</Button>
      </ButtonGroup>
      </div>
    </Container>
  )
}