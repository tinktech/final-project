import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { inspirationApi } from '../api/api';
import { Comments } from './Comments';
import { CommentForm } from './CommentForm';
import Card from 'react-bootstrap/Card';

export function Quote() {
  const { id } = useParams();
  // const { quotes } = useParams();
  console.log(id);
  // console.log(quotes);
  // const quote = quotes[id];

    return (
          <div className='quote' key={quote.id}>
            
              <Card>
                <Card.Header>"{quote.quote}"</Card.Header>
                <Card.Subtitle>Credit: {quote.credit} - Creditor: {quote.creditor}</Card.Subtitle>
                <Card.Body>{quote.note}</Card.Body>
              </Card>
          </div>
    );
}
