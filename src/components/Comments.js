import React from 'react';
import { commentApi } from '../api/CommentApi';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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
      <Card className="comments">
        <ListGroup variant='flush'>
        {this.state.comments.map((comment) => {
          return (
            <ListGroup.Item className='comment' key={comment.id}>
              <Comment 
                comment={comment}
                onChange={this.updateComment.bind(this)}
                onDelete={this.deleteComment.bind(this)}
              />
            </ListGroup.Item>
          );
        })}
        </ListGroup>

        <CommentForm addNewComment={this.addNewComment.bind(this)} />

      </Card>
    )
  }
}