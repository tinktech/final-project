import React from "react";
import { inspirationApi } from "../api/InspirationApi";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Card from 'react-bootstrap/Card';

export class RandomQuote extends React.Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = async () => {
    const quotes = await inspirationApi.all();
    this.setState({ quotes });
    this.getRandomQuote({quotes});
  };

  getRandomQuote = (array) => {
    const quote = array[Math.floor(Math.random() * array.length)];
    this.setState({quote});
    console.log({quote});
    console.log(array);
  };

  render() {
    return (
      <div className="quotes">

        {/* {this.state.quotes.map((quote) => {
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
        })} */}

      </div>
    )
  }
}