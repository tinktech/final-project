import React from 'react';
import { inspirationApi } from '../api/InspirationApi';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Card from 'react-bootstrap/Card';

export class Quotes extends React.Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = async () => {
    const quotes = await inspirationApi.all();
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
                <Card.Body>
                  <blockquote className='blockquote'>
                    <p>
                      {' '}
                      "{quote.quote}"{' '}
                    </p>
                    <footer className='blockquote-footer'>
                      <cite>{quote.credit}</cite>; Credited by: {quote.creditor}
                    </footer>
                  </blockquote>
                </Card.Body>
                <p className='quotesNote mb-0'>
                  {quote.note}
                </p>
              </Card>
            </Link>
          </div>
          );
        })}

      </div>
    )
  }
}