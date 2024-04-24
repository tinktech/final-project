import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import { inspirationApi } from '../api/InspirationApi';
import { Comments } from './Comments';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { commentApi } from '../api/CommentApi';

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

  async deleteQuote() {
    await inspirationApi.delete(this.state.id);
    console.log(`quote delete attempted`);
    // this.deleteQuoteComments();
    this.props.history.push('/quotes');
  }
  async deleteQuoteComments() {
    await commentApi.deleteAll(this.state.id);
    console.log(`comments delete attempted`);
    // this.deleteQuote();
  }

  editQuote() {
    this.props.history.push(`/quote/${this.state.id}/edit`);
  }

  render() {
    return(
      <div className='quote' key={this.state.id}>
        <>
          {this.state.quote &&
          <Card className='quoteCard'>
            <Card.Body>
              <blockquote className='blockquote'>
                <p>
                  {' '}
                  "{this.state.quote.quote}"{' '}
                </p>
                <footer className='blockquote-footer'>
                  <cite>{this.state.quote.credit}</cite>; Credited by: {this.state.quote.creditor}
                </footer>
              </blockquote>
            </Card.Body>
            <div className='noteButtonsContainer'>
              <p className='quoteNote'>
                {this.state.quote.note}
              </p>
              <div className='editButtons'>
              <ButtonGroup>
                <Button variant='dark' size='sm' onClick={() => this.editQuote()}>Edit</Button>
                <Button variant='dark' size='sm' onClick={() => this.deleteQuoteComments()}>Delete</Button>
              </ButtonGroup>
              </div>
            </div>
          </Card>
          }
          <Comments
            quoteId={this.state.id}
          />
        </>
      </div>
    );
  }
}

export default withRouter(Quote);