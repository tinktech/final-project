import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navi from './components/Navi';
import { Quotes } from './components/Quotes';
import Quote from './components/Quote';
import QuoteForm from './components/QuoteForm';
import EditQuote from './components/EditQuote';
import './App.css';
import { RandomQuote } from './components/RandomQuote';


export default function App() {

  return (
    <>
    
      <Router>
          <Navi />
          <Container className='mainContainer'>
          <Switch>
            <Route path='/random' component={RandomQuote} />
            <Route path='/quotes' component={Quotes} />
            <Route path='/quote/:id/edit' component={EditQuote} />
            <Route path='/quote/:id' component={Quote} />
            <Route path='/create' component={QuoteForm} />
            <Route path='/' component={RandomQuote} />
          </Switch>
              </Container>
      </Router>

    </>
  );
}