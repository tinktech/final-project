import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

export default function Navi() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href='/'>Inspiration</Navbar.Brand>
      <Nav>
        <NavLink to='/random' className="nav-link">Random</NavLink>
        <NavLink to='/quotes' className="nav-link">Quotes</NavLink>
        <NavLink to='/create' className="nav-link">Create</NavLink>
      </Nav>
    </Navbar>
  );
}