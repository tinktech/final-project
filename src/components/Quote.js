import React from 'react';
import { Comments } from './Comments';
import { CommentForm } from './CommentForm';
import Card from 'react-bootstrap/Card';


export const Quote = (props) => {
  const { quote, updateQuote } = props;
  const comments = quote.comments;

  const handleDeleteComment = (commentId) => {
    const updatedQuote = {
      ...quote,
      comments: quote.comments.filter((x) => x.id !== commentId)
    };
    updateQuote(updatedQuote);
  }

  const handleEditComment = (updateQuote) => {
    const updatedQuote = {
      ...quote,
      comments: quote.comments.map(currentComment => {
        if (currentComment.id === updatedComment.id) {
          return updatedComment;
        } else {
          return currentComment;
        }
      })
    };
    updateQuote(updatedQuote);
  }

  const addNewComment = (comment) => updateQuote({...quote, comments: [...quote.comments, comment]});

  return (
    <div className='quote'>
      <Card>
        <Card.Header>"{quote.quote}"</Card.Header>
        <Card.Subtitle>Credit: {quote.credit} - Creditor: {quote.creditor}</Card.Subtitle>
        <Card.Body>{quote.note}</Card.Body>
      </Card>
    </div>

  )
}