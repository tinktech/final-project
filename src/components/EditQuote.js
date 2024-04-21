import React, { useEffect, useState } from "react";
import { inspirationApi } from "../api/InspirationApi";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EditQuote() {
  const [quote, setQuote] = useState('');
  const [credit, setCredit] = useState('');
  const [creditor, setCreditor] = useState('');
  const [note, setNote] = useState('');
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    async function fetchQuote() {
      let inspiration = await inspirationApi.one(params.id);
      if (!ignore) {
        setQuote(inspiration.quote);
        setCredit(inspiration.credit);
        setCreditor(inspiration.creditor);
        setNote(inspiration.note);
      }
    }
    let ignore = false;
    fetchQuote();
    return () => {
      ignore = true;
    }
  }, [params]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (quote && credit && creditor) {
      let inspiration = await inspirationApi.put({id: params.id, quote, credit, creditor, note});
      history.push(`/quote/${inspiration.id}`);
    } else {
      console.log('invalid Form.Control');
    }
  };

  return (
    <div className="quoteForm">
      <Card>
        <Card.Header>Edit quote</Card.Header>
        <Form onSubmit={onSubmit}>
          <Row className="mb-2">
            <Col>
              <Form.Control
                type="text"
                placeholder="quote"
                onChange={(e) => setQuote(e.target.value)}
                value={quote}
                required
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Form.Control
                type="text"
                placeholder="credit"
                onChange={(e) => setCredit(e.target.value)}
                value={credit}
                required
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="name"
                onChange={(e) => setCreditor(e.target.value)}
                value={creditor}
                required
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Form.Control
                type="text"
                placeholder="note"
                onChange={(e) => setNote(e.target.value)}
                value={note}
              />
            </Col>
          </Row>
          <Button type="submit" variant="dark">Save Quote</Button>
        </Form>
      </Card>
    </div>
  )
}