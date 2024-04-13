import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import Navi from './components/Navi';
import { Quotes } from './components/Quotes';
import Quote from './components/Quote';
import QuoteForm from './components/QuoteForm';
import EditQuote from './components/EditQuote';
import './App.css';


export default function App() {

  return (
    <>
    
      <Router>
          <Navi />
          <Container>
          <Switch>
            <Route path='/quotes' component={Quotes} />
            <Route path='/quote/:id/edit' component={EditQuote} />
            <Route path='/quote/:id' component={Quote} />
            <Route path='/create' component={QuoteForm} />
            <Route path='/' >
              {/* <Home /> */}
            </Route>
          </Switch>
              </Container>
      </Router>

    </>
  );
}
