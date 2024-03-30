import React from 'react';
import { inspirationApi } from '../api/api';
import { Quote } from './Quote';

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
        {this.state.quotes.map((quote) => (
          <Quote
            quote={quote}
            key={quote.id}
            updateQuote={this.updateQuote}
          />
        ))}
      </div>
    )
  }
}