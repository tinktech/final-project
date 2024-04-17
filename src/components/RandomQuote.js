import React from "react";
import { inspirationApi } from "../api/InspirationApi";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Card from 'react-bootstrap/Card';

export class RandomQuote extends React.Component {
  state = {
    quotes: [],
    quote: null
  };

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = async () => {
    const quotes = await inspirationApi.all();
    this.setState({ quotes });
    this.getRandomQuote(quotes);
  };

  getRandomQuote = (array) => {
    const quote = array[Math.floor(Math.random() * array.length)];
    this.setState(quote);
  };

  render() {
    const link = "/quote/" + this.state.id;
    return (
      <div className='quote' key={this.state.id}>
        <Link to={link}>
          <Card>
            <Card.Header>"{this.state.quote}"</Card.Header>
            <Card.Subtitle>Credit: {this.state.credit} - Creditor: {this.state.creditor}</Card.Subtitle>
            <Card.Body>{this.state.note}</Card.Body>
          </Card>
        </Link>

        <button onClick={() => location.reload()}>↺</button>
      </div>

    )
  }
}