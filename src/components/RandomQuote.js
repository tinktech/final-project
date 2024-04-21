import React from "react";
import { inspirationApi } from "../api/InspirationApi";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

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
            <Card.Body>
              <blockquote className="blockquote">
                <p>
                  {' '}
                  "{this.state.quote}"{' '}
                </p>
                <footer className="blockquote-footer">
                  <cite>{this.state.credit}</cite>; Credited by: {this.state.creditor}
                </footer>
              </blockquote>
            </Card.Body>
            <p className="quotesNote">
              {this.state.note}
            </p>
          </Card>
        </Link>
        <div className="refreshButton">
        <Button onClick={() => location.reload()}>↺</Button>
        </div>
      </div>

    )
  }
}