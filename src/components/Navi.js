import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navi() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href='/'>Inspiration</Navbar.Brand>
      <Nav>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/quotes'>Quotes</Nav.Link>
        <Nav.Link href='/create'>Create</Nav.Link>
      </Nav>
    </Navbar>
  );
}