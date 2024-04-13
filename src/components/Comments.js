import React, { useState } from 'react';
import { commentApi } from '../api/CommentApi';
import Card from 'react-bootstrap/Card';
import Comment from './Comment';
import CommentForm from './CommentForm';

export class Comments extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      quoteId: props.quoteId,
      comments: []
    }
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    const comments = await commentApi.all(this.state.quoteId);
    this.setState({ comments });
  };

  updateComment = async (updateComment) => {
    await commentApi.put(this.state.quoteId, updateComment);
    this.fetchComments();
  };

  addNewComment = async (comment) => {
    await commentApi.post(this.state.quoteId, comment);
    this.fetchComments();
  }

  deleteComment = async (commentId) => {
    await commentApi.delete(this.state.quoteId, commentId);
    this.fetchComments();
  }

  render() {
    return (
      <div className="comments">

        {this.state.comments.map((comment) => {
          return (
          <div className='comment' key={comment.id}>
            <Comment 
              comment={comment}
              onChange={this.updateComment.bind(this)}
              onDelete={this.deleteComment.bind(this)}
            />

              {/* <Card>
                <Card.Header>{comment.commenter}</Card.Header>
                <Card.Subtitle>{comment.rating}</Card.Subtitle>
                <Card.Body>{comment.comment}</Card.Body>
              </Card> */}
          </div>
          );
        })}

        <CommentForm addNewComment={this.addNewComment.bind(this)} />

      </div>
    )
  }
}