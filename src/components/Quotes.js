import React from 'react';
import { inspirationApi } from '../api/api';
import { Quote } from './Quote';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Card from 'react-bootstrap/Card';

// quotes in cards; show comment count; whole card links to dedicated page
export class Quotes extends React.Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = async () => {
    const quotes = await inspirationApi.get();
    this.setState({ quotes });
  };

  updateQuote = async (updateQuote) => {
    await inspirationApi.put(updateQuote);
    this.fetchQuotes();
  };

  render() {
    return (
      <div className="quotes">

        {this.state.quotes.map((quote) => {
          const link = "/quote/" + quote.id;
          return (
          <div className='quote' key={quote.id}>
            <Link to={link}>
              <Card>
                <Card.Header>"{quote.quote}"</Card.Header>
                <Card.Subtitle>Credit: {quote.credit} - Creditor: {quote.creditor}</Card.Subtitle>
                <Card.Body>{quote.note}</Card.Body>
              </Card>
            </Link>
          </div>
          );
        })}

      </div>
    )
  }
}