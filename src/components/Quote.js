import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { inspirationApi } from '../api/api';
import { Comments } from './Comments';
import { CommentForm } from './CommentForm';
import Card from 'react-bootstrap/Card';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      quote: null
    }
  }

  async componentDidMount() {
    await this.fetchQuote();
  }

  async fetchQuote() {
    const quote = await inspirationApi.one(this.state.id);
    this.setState({quote});
  }

  render() {
    return(
      <div className='quote' key={this.state.id}>
        {this.state.quote &&
        <>
        <Card>
          <Card.Header>"{this.state.quote.quote}"</Card.Header>
          <Card.Subtitle>Credit: {this.state.quote.credit} - Creditor: {this.state.quote.creditor}</Card.Subtitle>
          <Card.Body>{this.state.quote.note}</Card.Body>
        </Card>

        <Comments
          comments={comments}
          onEditComment={handleEditComment}
          onDeleteComment={handleDeleteComment}
        />
        </>
        }
      </div>
    );
  }
}

export default withRouter(Quote);